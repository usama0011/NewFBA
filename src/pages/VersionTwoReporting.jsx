import React, { useState, useEffect } from "react";
import "../styles/VersoinTwo.css";
import HoverBox from "../components/HoverBox";
const VersionTwoReporting = ({
  startDate,
  endDate,
  selectedMetrics,
  loading,
  setLoading,
  showID,
  refreshData,
}) => {
  const [data, setData] = useState([]);
  const [columns, setColumns] = useState([]);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [originalData, setOriginalData] = useState([]); // Store the original unfiltered data
  console.log(showID);
  const formatDate = (date) => {
    if (!date) return "";
    const d = new Date(date);
    const day = String(d.getDate()).padStart(2, "0");
    const month = String(d.getMonth() + 1).padStart(2, "0");
    const year = d.getFullYear();
    return `${month}/${day}/${year}`;
  };

  const formattedStartDate = formatDate(startDate);
  const formattedEndDate = formatDate(endDate);
  const filterData = (data, selectedMetrics) => {
    const columnHierarchy = [
      "Page Name",
      "Campaign Name",
      "Ad Set Name",
      "Ad Name",
      "Ad Creative",
      "Impression Device",
      "Placement",
    ];

    let filteredData = [...data];
    const isImpressionDeviceHidden =
      !selectedMetrics.includes("Impression Device");

    if (isImpressionDeviceHidden) {
      const placementData = {};

      filteredData.forEach((row) => {
        const placement = row["Placement"];
        if (placement !== "All") {
          if (!placementData[placement]) {
            placementData[placement] = {
              ...row,
              "Impression Device": "All",
              "Amount Spent": 0,
              Impressions: 0,
            };
          }
          placementData[placement]["Amount Spent"] += row["Amount Spent"];
          placementData[placement]["Impressions"] += row["Impressions"];
        }
      });

      return Object.values(placementData);
    } else {
      return filteredData.filter((row) => {
        let keepRow = true;

        columnHierarchy.forEach((col, index) => {
          if (!selectedMetrics.includes(col)) {
            const nextColumns = columnHierarchy.slice(index + 1);

            const hasDependentData = nextColumns.some(
              (nextCol) =>
                selectedMetrics.includes(nextCol) && row[nextCol] !== "All"
            );

            if (!hasDependentData && row[col] !== "All") {
              keepRow = false;
            }
          }
        });

        return keepRow;
      });
    }
  };

  const fetchData = async () => {
    if (!formattedStartDate || !formattedEndDate) {
      console.error("Start date or end date is missing");
      return;
    }
    try {
      setLoading(true);
      setLoadingProgress(0);
      setData([]);

      const interval = setInterval(() => {
        setLoadingProgress((prev) => (prev < 90 ? prev + 10 : prev));
      }, 200);

      const response = await fetch(
        `https://facebookadsmangerserver.vercel.app/api/reporting/reporting/summed?startDate=${formattedStartDate}&endDate=${formattedEndDate}&PageID=${showID}`
      );
      const result = await response.json();

      // Set original data for reference
      setOriginalData(result);

      // Apply column visibility filtering
      const filteredData = filterData(result, selectedMetrics);
      // Add "Results" column by copying values from "Link Clicks"
      const updatedData = filteredData.map((row) => ({
        ...row,
        Results: row["Link Clicks"],
      }));

      setData(updatedData);

      console.log(data);
      clearInterval(interval);
      setLoadingProgress(100);
      setTimeout(() => setLoadingProgress(0), 500);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [
    formattedStartDate,
    formattedEndDate,
    selectedMetrics,
    showID,
    refreshData,
  ]);

  useEffect(() => {
    if (data.length > 0) {
      const columnOrder = [
        "Page Name",
        "Campaign Name",
        "Ad Set Name",
        "Ad Name",
        "Ad Creative",
        "Impression Device",
        "Placement",
        "Amount Spent",
        "Impressions",
        "Reach",
        "Link Clicks",
        "Results", // Add Results column here
        "CPC",
        "CPM",
        "CTR",
      ];
      const dynamicColumns = selectedMetrics.map((metric) => ({
        title: metric,
        dataIndex: metric,
        width:
          metric === "Ad Creative"
            ? 260
            : metric === "Campaign Name"
            ? 190
            : metric === "Ad Set Name"
            ? 190
            : metric === "Ad Name"
            ? 190
            : metric === "Impression Device"
            ? 180
            : 150,
        render: (text, row, index) => {
          const previousRow = data[index - 1];
          // Handle specific formatting for "Impressions"
          // Handle specific formatting for CPC, CPM, and CTR
          // Add specific rendering logic for the Results column
          if (metric === "Results") {
            return (
              <div
                style={{
                  textAlign: "right",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <span style={{ padding: 0, margin: 0 }}>
                  {isNaN(Number(row["Link Clicks"])) ||
                  row["Link Clicks"] === undefined
                    ? row["Link Clicks"] // Display the original value if it's invalid
                    : Math.round(Number(row["Link Clicks"])).toLocaleString(
                        "en-US"
                      )}
                </span>
                <span style={{ padding: 0, margin: 0, color: "#a0a2a3" }}>
                  Link Click
                </span>
              </div>
            );
          }

          if (["CPC", "CPM", "CTR"].includes(metric) && text) {
            const roundedValue = Number(text).toFixed(2); // Round off to two decimal places

            if (metric === "CTR") {
              return `${roundedValue}%`; // Append % for CTR
            }

            if (["CPC", "CPM"].includes(metric)) {
              return `$${roundedValue}`; // Append $ for CPC and CPM
            }
          }
          if (metric === "Impressions" && text) {
            // Parse the text to a number, round it off, and format it with commas
            return Math.round(Number(text)).toLocaleString("en-US");
          }

          if (metric === "Reach" && text) {
            return Math.round(Number(text)).toLocaleString("en-US");
          }
          if (metric === "Link Clicks" && text) {
            return Math.round(Number(text)).toLocaleString("en-US");
          }
          if (metric === "Amount Spent" && text) {
            return <div>${Number(text).toLocaleString("en-US")}</div>; // Apply comma-separated formatting
          }
          // Always display "Amount Spent" and "Impressions"
          if (
            metric === "Amount Spent" ||
            metric === "Impressions" ||
            metric === "Link Clicks" ||
            metric === "CTR" ||
            metric === "CPM" ||
            metric === "CPC"
          ) {
            return text;
          }

          // Handle hiding duplicate or empty values
          if (
            row[metric] === "All" || // Always show "All"
            !previousRow || // Show the first row
            previousRow[metric] !== row[metric] // Show if the value changes
          ) {
            if (metric === "Ad Name" && text) {
              return (
                <span
                  className="custom-hover-title"
                  style={{
                    display: "inline-block",
                    maxWidth: "190px",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                  }}
                  title={text} // Full text on hover
                >
                  {text}
                </span>
              );
            }
            if (metric === "Campaign Name" && text) {
              return (
                <span
                  style={{
                    display: "inline-block",
                    maxWidth: "190px",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                  }}
                  title={text} // Full text on hover
                >
                  {text}
                </span>
              );
            }
            if (metric === "Ad Set Name" && text) {
              return (
                <span
                  style={{
                    display: "inline-block",
                    maxWidth: "190px",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                  }}
                  title={text} // Full text on hover
                >
                  {text}
                </span>
              );
            }

            if (metric === "Ad Creative" && text) {
              try {
                const creative = JSON.parse(text);
                return (
                  <div className="ad-creative-container">
                    {/* Ad Creative Thumbnail */}
                    <div>
                      <img
                        src={creative.image}
                        alt="Ad Creative"
                        className="ad-creative-thumbnail"
                      />
                    </div>

                    {/* Text Content */}
                    <div className="ad-creative-text">
                      <span className="ad-title">
                        {creative.title || "No Title"}
                      </span>
                      <span className="ad-description">
                        {creative.description
                          ? creative.description.length > 28
                            ? creative.description.slice(0, 28) + "..."
                            : creative.description
                          : "No Description"}
                      </span>
                      <span className="ad-used-in">Used in 1 Ad</span>
                    </div>

                    {/* Hover Ad Preview */}
                    <div className="hover-ad-preview">
                      {/* Placeholder for Ad Preview */}
                      <div className="ad-preview-placeholder">
                        <HoverBox
                          description={creative.description}
                          campaingImage={creative.image}
                          angryshow="1"
                          likesshow="10"
                          happyshow
                          commetsshow="3"
                          learnmorecenter={creative.title}
                          pagename={creative.title}
                        />
                      </div>
                    </div>
                  </div>
                );
              } catch {
                return text;
              }
            }

            return text;
          }

          // Completely hide the cell for duplicate or empty values
          return null;
        },
      }));
      // Sort columns based on predefined order
      const sortedColumns = dynamicColumns.sort(
        (a, b) => columnOrder.indexOf(a.title) - columnOrder.indexOf(b.title)
      );

      setColumns(sortedColumns);
    }
  }, [selectedMetrics, data]);
  useEffect(() => {
    if (originalData.length > 0) {
      const filteredData = filterData(originalData, selectedMetrics);
      setData(filteredData);
    }
  }, [selectedMetrics, originalData]);
  const getFirstRowsByCampaign = (data) => {
    const campaignFirstRows = [];
    const seenCampaigns = new Set();

    data.forEach((row) => {
      if (!seenCampaigns.has(row["Campaign Name"])) {
        seenCampaigns.add(row["Campaign Name"]);
        campaignFirstRows.push(row);
      }
    });

    return campaignFirstRows;
  };
  const calculateFooterTotals = (data, columns) => {
    const firstRows = getFirstRowsByCampaign(data);

    const totals = columns.reduce((acc, col) => {
      if (["Amount Spent", "Impressions"].includes(col.dataIndex)) {
        acc[col.dataIndex] = firstRows.reduce(
          (sum, row) => sum + (Number(row[col.dataIndex]) || 0),
          0
        );
      }
      return acc;
    }, {});

    return totals;
  };

  return (
    <div
      className="versointowsirtable"
      style={{
        width: "100%",
        height: "775px",
        backgroundColor: "white",
        overflowX: "auto",
        overflowY: "auto",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div style={{ position: "relative", padding: "" }}>
        {loading && (
          <div
            style={{
              position: "absolute",
              top: "68px",
              left: 0,
              width: `${loadingProgress}%`,
              height: "4px",
              backgroundColor: "#1890ff",
              transition: "width 0.2s ease-in-out",
            }}
          ></div>
        )}
      </div>

      <table
        className="reporttingmoiztable"
        style={{
          width: "100%",
          borderCollapse: "collapse",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
          tableLayout: "fixed",
        }}
      >
        <thead
          style={{
            position: "sticky",
            top: 0,
            backgroundColor: "#f5f5f5",
            boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)", // Add shadow on the bottom
            zIndex: 999,
          }}
        >
          <tr>
            {columns.map((col) => (
              <th
                key={col.dataIndex}
                style={{
                  backgroundColor: "white",
                  border: "1px solid #ddd",
                  padding: "8px",
                  fontWeight: "bold",
                  textAlign: "left",
                  ...(col.dataIndex === "Amount Spent" && {
                    borderLeft: "4px solid #ddd", // Thicker border for Amount Spent column
                  }),

                  width: `${col.width}px`,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row", // Keep items in a row
                    alignItems: "flex-start", // Align items to the top
                    justifyContent: "space-between", // Distribute items horizontally with space between
                    minWidth: "120px",

                    minHeight: "50px",
                    width: "100%",
                  }}
                >
                  <div class="" id="style-3Zn2i" style={{ width: "100%" }}>
                    <div
                      style={{ width: "100%" }}
                      class="_2eqm style-OQtVP"
                      id="style-OQtVP"
                    >
                      <div
                        style={{ width: "100%" }}
                        class="_2eqm _3qn7 _61-0 _2fyi _3qng"
                      >
                        <div
                          style={{ width: "100%" }}
                          class="x5yr21d xh8yej3"
                          draggable="true"
                        >
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "space-between",
                              width: "100%",
                            }}
                            class="x1cy8zhl xjbqb8w x9f619 x78zum5 x5yr21d xh8yej3 x1ypdohk x1xmf6yo x1e56ztr x1e558r4 x150jy0e"
                          >
                            <div class="_741s _8_x6 _8_vu"></div>
                            <div>
                              {col?.dataIndex === "Results" && (
                                <span id="">
                                  <i
                                    style={{ marginTop: "5px" }}
                                    alt=""
                                    data-visualcompletion="css-img"
                                    class="img style-ffYGH"
                                    id="style-ffYGH"
                                  ></i>
                                </span>
                              )}
                            </div>
                            <div
                              style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",

                                width: "100%",
                              }}
                              class="x1vjfegm xsgj6o6 x1gslohp"
                            >
                              <div class="_3qn7 _61-0 _2fyh _3qnf">
                                <div class="_3qn7 _61-0 _2fyi _3qnf">
                                  <div
                                    class="_90u_ style-bnBpU"
                                    id="style-bnBpU"
                                  >
                                    <div
                                      class="_4ik4 _4ik5 style-I3pLI"
                                      id="style-I3pLI"
                                    >
                                      <div
                                        style={{
                                          ...(col.dataIndex ===
                                            "Amount Spent" && {
                                            color: "#3984ce", // Thicker border for Amount Spent column
                                          }),
                                        }}
                                        id="style-Ltq1U"
                                        class="style-Ltq1U"
                                      >
                                        {
                                          col.title === "CPC"
                                            ? "CPC (Cost per Link Click)"
                                            : col.title === "CPM"
                                            ? "CPM (Cost per 1,000 Impressions)"
                                            : col.title === "CTR"
                                            ? "CTR (All)"
                                            : col.title // Default to the key itself for other titles
                                        }
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <button
                                aria-pressed="false"
                                type="button"
                                aria-disabled="false"
                                class="_271k _271l _1o4e _1qjd _ai7j _ai7k _ai7m style-qxpXt"
                                id="style-qxpXt"
                              >
                                <div class="_43rl">
                                  <i
                                    aria-hidden="true"
                                    class="_271o img style-UP4Kr"
                                    alt=""
                                    data-visualcompletion="css-img"
                                    id="style-UP4Kr"
                                  ></i>
                                  <span class="accessible_elem">
                                    Open Inline Column Action Menu
                                  </span>
                                </div>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((row, index) => {
              const isFirstPageGroup =
                index === 0 ||
                row["Page Name"] !== data[index - 1]["Page Name"]; // Check if the row is the first of a new Page Name group

              const isFirstCampaignGroup =
                index === 0 ||
                row["Campaign Name"] !== data[index - 1]["Campaign Name"]; // Check if the row is the first of a new Campaign Name group

              return (
                <tr
                  key={index}
                  style={{
                    backgroundColor: isFirstPageGroup
                      ? "#f3f5f4" // Apply specific background color for first row of each Page Name group
                      : isFirstCampaignGroup
                      ? "#f9f9f9" // Apply specific background color for first row of each Campaign Name group
                      : "white", // Default background color
                  }}
                >
                  {columns.map((col) => {
                    const hideColumns = [
                      "Page Name",
                      "Campaign Name",
                      "Ad Set Name",
                      "Ad Name",
                      "Ad Creative",
                      "Impression Device",
                    ];

                    const shouldHide =
                      hideColumns.includes(col.title) &&
                      row[col.dataIndex] !== "All" && // Always show "All"
                      index > 0 &&
                      row[col.dataIndex] === data[index - 1][col.dataIndex]; // Hide duplicates

                    const hideBottomBorder =
                      index + 1 < data.length &&
                      row[col.dataIndex] === data[index + 1][col.dataIndex]; // Hide bottom border if next row is the same

                    const isHighlightedColumn =
                      ["Campaign Name", "Ad Set Name", "Ad Name"].includes(
                        col.title
                      ) && row[col.dataIndex] !== "All"; // Highlight specific columns after "Alls"

                    return (
                      <td
                        key={col.dataIndex}
                        data-index={col.dataIndex} // Add data-index dynamically
                        style={{
                          borderTop: shouldHide ? "none" : "1px solid #ddd",
                          borderBottom: hideBottomBorder
                            ? "none"
                            : "1px solid #ddd", // Conditionally hide bottom border
                          borderLeft: "1px solid #ddd", // Keep left border
                          borderRight: "1px solid #ddd", // Keep right border
                          padding: shouldHide ? "0" : "6px 5px",
                          ...(col.dataIndex === "Amount Spent" && {
                            borderLeft: "5px solid #ddd", // Thicker border for Amount Spent column
                          }),
                          textAlign: "left",
                          visibility: shouldHide ? "hidden" : "visible",
                          backgroundColor: shouldHide
                            ? "transparent"
                            : "inherit", // Ensure hidden cells blend in
                          color:
                            isHighlightedColumn && !shouldHide
                              ? "#0a78be"
                              : "#1c2b33", // Apply color to specific columns
                          fontWeight:
                            isHighlightedColumn && !shouldHide
                              ? "normal"
                              : "normal", // Make highlighted text bold
                          fontSize: "14px",
                        }}
                      >
                        {shouldHide
                          ? null
                          : col.render
                          ? col.render(row[col.dataIndex], row, index)
                          : row[col.dataIndex] || null}
                      </td>
                    );
                  })}
                </tr>
              );
            })
          ) : (
            <tr>
              <td colSpan={columns.length} style={{ textAlign: "center" }}>
                {loading ? "" : "No Data Available"}
              </td>
            </tr>
          )}
        </tbody>

        <tfoot
          style={{
            position: "sticky",
            bottom: 0,
            height: "60px",
            backgroundColor: "white",
            zIndex: 2,
            boxShadow: "0px -2px 5px rgba(0, 0, 0, 0.1)", // Add shadow on top
          }}
        >
          {data.length > 0 && (
            <tr>
              {columns.map((col) => (
                <td
                  key={col.dataIndex}
                  style={{
                    border: "1px solid #ddd",
                    padding: "8px",
                    textAlign: "left",
                    fontWeight: "normal",
                    ...(col.dataIndex === "Amount Spent" && {
                      borderLeft: "5px solid #ddd", // Thicker border for Amount Spent column
                    }),
                  }}
                >
                  {/* Check if column title is "Page Name" */}
                  {col.title === "Page Name" ? (
                    <div className="_2pi7">
                      <div className="_68tl style-BF6vh" id="style-BF6vh">
                        <div className="_2eqm style-msgLz" id="style-msgLz">
                          <div className="_2eqm _3qn7 _61-0 _2fyi _3qng">
                            <div className="_3qn7 _61-0 _2fyh _3qnf">
                              <div className="_3qn7 _61-0 _2fyi _3qng">
                                <div className="xmi5d70 x1fvot60 xxio538 xbsr9hj xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj x117nqv4 xeuugli">
                                  Total results
                                </div>
                              </div>
                              <div className="xmi5d70 xw23nyj xo1l8bm x63nzvj x1541jtf xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj xeuugli">
                                {data?.length}/{data?.length} rows displayed
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : col.title === "Amount Spent" ? (
                    <div
                      class="_e9n"
                      style={{
                        textAlign: "right",
                      }}
                    >
                      <div class="">
                        <div
                          geotextcolor="value"
                          data-hover="tooltip"
                          data-tooltip-display="overflow"
                          data-tooltip-text-direction="auto"
                          class="xmi5d70 x1fvot60 xo1l8bm xxio538 x1lliihq x6ikm8r x10wlt62 xlyipyv xuxw1ft xbsr9hj"
                        >
                          <span class="_3dfi _3dfj">
                            ${data[0]?.[col.dataIndex]?.toLocaleString()}
                          </span>
                        </div>
                        <div
                          class="ellipsis _1ha4"
                          data-hover="tooltip"
                          data-tooltip-display="overflow"
                          data-tooltip-text-direction="auto"
                        >
                          <div class="xt0psk2 xmi5d70 xw23nyj xo1l8bm x63nzvj x1541jtf">
                            Total Spent
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : col.title === "Impressions" ? (
                    <div class="_e9n" style={{ textAlign: "right" }}>
                      <div class="">
                        <div
                          geotextcolor="value"
                          data-hover="tooltip"
                          data-tooltip-display="overflow"
                          data-tooltip-text-direction="auto"
                          class="xmi5d70 x1fvot60 xo1l8bm xxio538 x1lliihq x6ikm8r x10wlt62 xlyipyv xuxw1ft xbsr9hj"
                        >
                          <span class="_3dfi _3dfj">
                            {data[0]?.[col.dataIndex]?.toLocaleString()}
                          </span>
                        </div>
                        <div
                          class="ellipsis _1ha4"
                          data-hover="tooltip"
                          data-tooltip-display="overflow"
                          data-tooltip-text-direction="auto"
                        >
                          <div class="xt0psk2 xmi5d70 xw23nyj xo1l8bm x63nzvj x1541jtf">
                            Total
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : col.dataIndex === "Link Clicks" ? (
                    <div class="_e9n">
                      <div class="">
                        <div
                          style={{ textAlign: "right" }}
                          geotextcolor="value"
                          data-hover="tooltip"
                          data-tooltip-display="overflow"
                          data-tooltip-text-direction="auto"
                          class="xmi5d70 x1fvot60 xo1l8bm xxio538 x1lliihq x6ikm8r x10wlt62 xlyipyv xuxw1ft xbsr9hj"
                        >
                          <span class="_3dfi _3dfj">
                            <span class="_3dfi _3dfj">
                              {typeof data[0]?.[col.dataIndex] === "number"
                                ? data[0]?.[col.dataIndex].toLocaleString(
                                    undefined,
                                    {
                                      maximumFractionDigits: 2,
                                    }
                                  )
                                : data[0]?.[col.dataIndex]}
                            </span>
                          </span>
                        </div>
                        <div
                          style={{ textAlign: "right" }}
                          class="ellipsis _1ha4"
                          data-hover="tooltip"
                          data-tooltip-display="overflow"
                          data-tooltip-text-direction="auto"
                        >
                          <div class="xt0psk2 xmi5d70 xw23nyj xo1l8bm x63nzvj x1541jtf">
                            Total
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : col.dataIndex === "Reach" ? (
                    <div class="_e9n">
                      <div class="">
                        <div
                          style={{ textAlign: "right" }}
                          geotextcolor="value"
                          data-hover="tooltip"
                          data-tooltip-display="overflow"
                          data-tooltip-text-direction="auto"
                          class="xmi5d70 x1fvot60 xo1l8bm xxio538 x1lliihq x6ikm8r x10wlt62 xlyipyv xuxw1ft xbsr9hj"
                        >
                          <span class="_3dfi _3dfj">
                            <span class="_3dfi _3dfj">
                              {typeof data[0]?.[col.dataIndex] === "number"
                                ? data[0]?.[col.dataIndex].toLocaleString(
                                    undefined,
                                    {
                                      maximumFractionDigits: 2,
                                    }
                                  )
                                : data[0]?.[col.dataIndex]}
                            </span>
                          </span>
                        </div>
                        <div
                          style={{ textAlign: "right" }}
                          class="ellipsis _1ha4"
                          data-hover="tooltip"
                          data-tooltip-display="overflow"
                          data-tooltip-text-direction="auto"
                        >
                          <div class="xt0psk2 xmi5d70 xw23nyj xo1l8bm x63nzvj x1541jtf">
                            Accounts Centre accounts
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : col.dataIndex === "Results" ? (
                    <div class="_e9n">
                      <div class="">
                        <div
                          style={{ textAlign: "right" }}
                          geotextcolor="value"
                          data-hover="tooltip"
                          data-tooltip-display="overflow"
                          data-tooltip-text-direction="auto"
                          class="xmi5d70 x1fvot60 xo1l8bm xxio538 x1lliihq x6ikm8r x10wlt62 xlyipyv xuxw1ft xbsr9hj"
                        >
                          <span class="_3dfi _3dfj">
                            <span class="_3dfi _3dfj">
                              {typeof data[0]?.["Link Clicks"] === "number"
                                ? data[0]?.["Link Clicks"].toLocaleString(
                                    undefined,
                                    {
                                      maximumFractionDigits: 2,
                                    }
                                  )
                                : data[0]?.["Link Clicks"]}
                            </span>
                          </span>
                        </div>
                        <div
                          style={{ textAlign: "right" }}
                          class="ellipsis _1ha4"
                          data-hover="tooltip"
                          data-tooltip-display="overflow"
                          data-tooltip-text-direction="auto"
                        >
                          <div class="xt0psk2 xmi5d70 xw23nyj xo1l8bm x63nzvj x1541jtf">
                            Link Clicks
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : col.dataIndex === "CPM" ? (
                    <div class="_e9n">
                      <div class="">
                        <div
                          style={{ textAlign: "right" }}
                          geotextcolor="value"
                          data-hover="tooltip"
                          data-tooltip-display="overflow"
                          data-tooltip-text-direction="auto"
                          class="xmi5d70 x1fvot60 xo1l8bm xxio538 x1lliihq x6ikm8r x10wlt62 xlyipyv xuxw1ft xbsr9hj"
                        >
                          <span class="_3dfi _3dfj">
                            ${" "}
                            {typeof data[0]?.[col.dataIndex] === "number"
                              ? data[0]?.[col.dataIndex].toLocaleString(
                                  undefined,
                                  {
                                    maximumFractionDigits: 2,
                                  }
                                )
                              : data[0]?.[col.dataIndex]}
                          </span>
                        </div>
                        <div
                          style={{ textAlign: "right" }}
                          class="ellipsis _1ha4"
                          data-hover="tooltip"
                          data-tooltip-display="overflow"
                          data-tooltip-text-direction="auto"
                        >
                          <div class="xt0psk2 xmi5d70 xw23nyj xo1l8bm x63nzvj x1541jtf">
                            Per 1,000 Impressions
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : col.dataIndex === "CTR" ? (
                    <div class="_e9n">
                      <div class="">
                        <div
                          style={{ textAlign: "right" }}
                          geotextcolor="value"
                          data-hover="tooltip"
                          data-tooltip-display="overflow"
                          data-tooltip-text-direction="auto"
                          class="xmi5d70 x1fvot60 xo1l8bm xxio538 x1lliihq x6ikm8r x10wlt62 xlyipyv xuxw1ft xbsr9hj"
                        >
                          <span class="_3dfi _3dfj">
                            {typeof data[0]?.[col.dataIndex] === "number"
                              ? data[0]?.[col.dataIndex].toLocaleString(
                                  undefined,
                                  {
                                    maximumFractionDigits: 2,
                                  }
                                )
                              : data[0]?.[col.dataIndex]}
                            %
                          </span>
                        </div>
                        <div
                          style={{ textAlign: "right" }}
                          class="ellipsis _1ha4"
                          data-hover="tooltip"
                          data-tooltip-display="overflow"
                          data-tooltip-text-direction="auto"
                        >
                          <div class="xt0psk2 xmi5d70 xw23nyj xo1l8bm x63nzvj x1541jtf">
                            Per 1,000 Impressions
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : col.dataIndex === "CPC" ? (
                    <div class="_e9n">
                      <div class="">
                        <div
                          style={{ textAlign: "right" }}
                          geotextcolor="value"
                          data-hover="tooltip"
                          data-tooltip-display="overflow"
                          data-tooltip-text-direction="auto"
                          class="xmi5d70 x1fvot60 xo1l8bm xxio538 x1lliihq x6ikm8r x10wlt62 xlyipyv xuxw1ft xbsr9hj"
                        >
                          <span class="_3dfi _3dfj">
                            ${" "}
                            {typeof data[0]?.[col.dataIndex] === "number"
                              ? data[0]?.[col.dataIndex].toLocaleString(
                                  undefined,
                                  {
                                    maximumFractionDigits: 2,
                                  }
                                )
                              : data[0]?.[col.dataIndex]}
                          </span>
                        </div>
                        <div
                          style={{ textAlign: "right" }}
                          class="ellipsis _1ha4"
                          data-hover="tooltip"
                          data-tooltip-display="overflow"
                          data-tooltip-text-direction="auto"
                        >
                          <div class="xt0psk2 xmi5d70 xw23nyj xo1l8bm x63nzvj x1541jtf">
                            Per Action
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : [
                      "Campaign Name",
                      "Ad Set Name",
                      "Ad Name",
                      "Ad Creative",
                      "Impression Device",
                      "Placement",
                    ].includes(col.title) ? (
                    ""
                  ) : (
                    data[0][col.dataIndex] || "N/A"
                  )}
                </td>
              ))}
            </tr>
          )}
        </tfoot>
      </table>
    </div>
  );
};

export default VersionTwoReporting;

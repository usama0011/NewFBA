import React, { useEffect, useState } from "react";
import { Table, Button, Upload } from "antd";
import "../styles/FBAReporting.css";
import axios from "axios";
// leldssss
const FBAReporting = ({ startDate, endDate }) => {
  // Helper function to format the date
  const formatDate = (date) => {
    if (!date) return "";
    const d = new Date(date);
    const day = String(d.getDate()).padStart(2, "0");
    const month = String(d.getMonth() + 1).padStart(2, "0"); // Months are zero-based
    const year = d.getFullYear();
    return `${month}/${day}/${year}`;
  };

  // Format the dates
  const formattedStartDate = formatDate(startDate);
  const formattedEndDate = formatDate(endDate);

  console.log("Formatted Start Date:", formattedStartDate);
  console.log("Formatted End Date:", formattedEndDate);
  const [data, setData] = useState([]);
  const [columns, setColumns] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);

  const calculateRowSpan = (data, rowIndex, key) => {
    if (
      rowIndex === 0 ||
      JSON.stringify(data[rowIndex][key]) !==
        JSON.stringify(data[rowIndex - 1][key]) ||
      data[rowIndex][key] === "All"
    ) {
      let rowSpan = 1;
      for (let i = rowIndex + 1; i < data.length; i++) {
        if (
          JSON.stringify(data[i][key]) ===
            JSON.stringify(data[rowIndex][key]) &&
          data[rowIndex][key] !== "All"
        ) {
          rowSpan++;
        } else {
          break;
        }
      }
      return rowSpan;
    }
    return 0; // Hide duplicate rows
  };

  const fetchData = async () => {
    if (!formattedStartDate || !formattedEndDate) {
      console.error("Start date or end date is missing");
      return;
    }
    try {
      setLoading(true);
      setData([]);
      setLoadingProgress(0); // Reset progress bar
      const interval = setInterval(() => {
        setLoadingProgress((prev) => (prev < 90 ? prev + 10 : prev));
      }, 200);
      const response = await axios.get(
        `https://facebookadsmangerserver.vercel.app/api/reporting/reporting/summed?startDate=${formattedStartDate}&endDate=${formattedEndDate}`
      );

      console.log(response);

      const csvData = response.data
        .map((row) => {
          if (
            row["Ad Creative"] &&
            typeof row["Ad Creative"] === "string" &&
            row["Ad Creative"].trim().startsWith("{")
          ) {
            try {
              const adCreative = JSON.parse(row["Ad Creative"]);
              row["Ad Creative"] = (
                <div className="ad-creative">
                  <div>
                    {adCreative.image && (
                      <img
                        src={adCreative.image}
                        alt={adCreative.title || "Ad Creative"}
                        style={{
                          width: "60px",
                          height: "60px",
                          marginRight: "5px",
                        }}
                      />
                    )}
                  </div>
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <span style={{ fontWeight: "bold" }}>
                      {adCreative.title || "No Title"}
                    </span>
                    <span>
                      {adCreative.description
                        ? adCreative.description.length > 28
                          ? adCreative.description.slice(0, 28) + "..."
                          : adCreative.description
                        : "No Description"}
                    </span>
                    <span style={{ color: "#8d949e" }}>
                      {adCreative.adText || "No Ad Text"}
                    </span>
                  </div>
                </div>
              );
              row[
                "Ad Creative Key"
              ] = `${adCreative.title}-${adCreative.description}`;
            } catch (error) {
              console.error("Invalid Ad Creative JSON:", row["Ad Creative"]);
              row["Ad Creative"] = "Invalid Ad Creative Data";
              row["Ad Creative Key"] = "Invalid Ad Creative Data";
            }
          } else {
            row["Ad Creative Key"] = row["Ad Creative"];
          }
          row.Results = row["Link Clicks"];
          return row;
        })
        .filter((row) =>
          Object.values(row).some(
            (value) => value !== "—" && value !== 0 && value !== "All"
          )
        );
      // Ensure "All" rows are rendered first

      const updatedColumns = Object.keys(csvData[0] || {})
        .filter(
          (key) =>
            key !== "Page ID" &&
            key !== "_id" &&
            key !== "Entry Date" &&
            key !== "__v" &&
            key !== "Ad Creative Key"
        )
        .map((key) => ({
          title: (
            <div
              style={{
                display: "flex",
                alignItems: "flex-start", // Align items to the top
                justifyContent: "flex-start", // Align items horizontally to the start
                minWidth: "120px",
                minHeight: "50px",
              }}
            >
              <div class="x1vjfegm xsgj6o6 x1gslohp">
                <div class="_3qn7 _61-0 _2fyh _3qnf">
                  <div class="_3qn7 _61-0 _2fyi _3qnf">
                    <div
                      role="columnheader"
                      tabindex="-1"
                      data-interactable="|mouseover|"
                    >
                      <span
                        aria-level="2"
                        class="x1xqt7ti xm46was x1jrz1v4 xbsr9hj xq9mrsl x1h4wwuj x117nqv4 xeuugli"
                        role="heading"
                      >
                        <div class="_90u_ style-rFHj4" id="style-rFHj4">
                          <div class="_4ik4 _4ik5 style-qAlZS" id="style-qAlZS">
                            <div id="style-zqMp6" class="style-zqMp6">
                              {
                                key === "CPC"
                                  ? "CPC (Cost per Link Click)"
                                  : key === "CPM"
                                  ? "CPM (Cost per 1,000 Impressions)"
                                  : key === "CTR"
                                  ? "CTR (All)"
                                  : key // Default to the key itself for other titles
                              }
                            </div>
                          </div>
                        </div>
                      </span>
                    </div>
                  </div>
                  <div class="xmi5d70 xw23nyj xo1l8bm x63nzvj x1541jtf xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj xeuugli"></div>
                </div>
              </div>
              <div class="x1gryazu x1vjfegm xxk0z11 xvy4d1p">
                <div class="x1gryazu xxk0z11">
                  <div>
                    <button
                      aria-pressed="false"
                      type="button"
                      aria-disabled="false"
                      class="_271k _271l _1o4e _1qjd _ai7j _ai7k _ai7m style-X4qQs"
                      id="style-X4qQs"
                    >
                      <div class="_43rl">
                        <i
                          aria-hidden="true"
                          class="_271o img style-DgV47"
                          alt=""
                          data-visualcompletion="css-img"
                          id="style-DgV47"
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
          ),
          dataIndex: key,
          key,
          width:
            key === "Page Name"
              ? 150
              : key === "Campaign Name"
              ? 230
              : key === "Ad Set Name"
              ? 230
              : key === "Ad Name"
              ? 230
              : key === "Ad Creative"
              ? 300
              : key === "Placement"
              ? 180
              : key === "Amount Spent"
              ? 150
              : key === "Impression Device"
              ? 240
              : key === "Link Clicks"
              ? 150
              : 200,
          onCell: (record, rowIndex) => {
            if (
              [
                "Page Name",
                "Campaign Name",
                "Ad Set Name",
                "Ad Name",
                "Ad Creative",
                "Impression Device",
              ].includes(key)
            ) {
              console.log(key, "key");
              const spanKey = key === "Ad Creative" ? "Ad Creative Key" : key;
              return {
                rowSpan: calculateRowSpan(csvData, rowIndex, spanKey),
              };
            }

            return {};
          },
          render: (value, record, index) => {
            if (key === "Page Name") {
              return <div style={{ color: "#1c2b33" }}>{value}</div>;
            }

            if (key === "Campaign Name") {
              const isAll = value === "All";
              const truncatedValue =
                value && value.length > 25 ? value.slice(0, 25) + "..." : value;

              return (
                <div
                  style={{
                    color: isAll ? "#1c2b33" : "#0a78be", // Dynamic color assignment
                  }}
                >
                  {truncatedValue}
                </div>
              );
            }
            if (key === "Ad Name") {
              const isAll = value === "All";
              const truncatedValue =
                value && value.length > 25 ? value.slice(0, 25) + "..." : value;

              return (
                <div
                  style={{
                    color: isAll ? "#1c2b33" : "#0a78be", // Dynamic color assignment
                  }}
                >
                  {truncatedValue}
                </div>
              );
            }
            if (key === "Ad Set Name") {
              const isAll = value === "All";
              const truncatedValue =
                value && value.length > 25 ? value.slice(0, 25) + "..." : value;

              return (
                <div
                  style={{
                    color: isAll ? "#1c2b33" : "#0a78be", // Dynamic color assignment
                  }}
                >
                  {truncatedValue}
                </div>
              );
            }
            if (key === "Impression Device") {
              const isAll = value === "All";
              return (
                <div
                  style={{
                    width: "200px", // Match the column width
                    wordWrap: "break-word",
                    whiteSpace: "normal",
                    textTransform: "capitalize",
                    color: isAll ? "#1c2b33" : "#1c2b33", // Dynamic color assignment
                  }}
                >
                  {value}
                </div>
              );
            }
            if (key === "Placement") {
              const isAll = value === "All";
              return (
                <div
                  style={{
                    width: "200px", // Match the column width
                    wordWrap: "break-word",
                    whiteSpace: "normal",
                    textTransform: "capitalize",
                    color: isAll ? "#1c2b33" : "#1c2b33", // Dynamic color assignment
                  }}
                >
                  {value}
                </div>
              );
            }
            if (key === "Amount Spent") {
              const isAll = value === "All";
              return (
                <div
                  style={{
                    width: "200px", // Match the column width
                    wordWrap: "break-word",
                    whiteSpace: "normal",
                    color: isAll ? "#1c2b33" : "#1c2b33", // Dynamic color assignment
                  }}
                >
                  $
                  {typeof value === "number"
                    ? value.toLocaleString(undefined, {
                        maximumFractionDigits: 2,
                      })
                    : value}
                </div>
              );
            }
            if (key === "Reach") {
              const isAll = value === "All";
              return (
                <div
                  style={{
                    wordWrap: "break-word",
                    whiteSpace: "normal",
                    color: isAll ? "#1c2b33" : "#1c2b33", // Dynamic color assignment
                  }}
                >
                  {typeof value === "number"
                    ? value.toLocaleString(undefined, {
                        maximumFractionDigits: 2,
                      })
                    : value}
                </div>
              );
            }
            if (key === "Impressions") {
              const isAll = value === "All";
              return (
                <div
                  style={{
                    wordWrap: "break-word",
                    whiteSpace: "normal",
                    color: isAll ? "#1c2b33" : "#1c2b33", // Dynamic color assignment
                  }}
                >
                  {typeof value === "number"
                    ? value.toLocaleString(undefined, {
                        maximumFractionDigits: 2,
                      })
                    : value}
                </div>
              );
            }
            if (key === "Results") {
              const isAll = value === "All";
              return (
                <div
                  style={{
                    wordWrap: "break-word",
                    whiteSpace: "normal",
                    display: "flex",
                    flexDirection: "column",
                    padding: "2px",
                    alignItems: "end",
                    color: isAll ? "#1c2b33" : "#1c2b33", // Dynamic color assignment
                  }}
                >
                  <span style={{ padding: 0, margin: 0 }}>
                    {" "}
                    {typeof value === "number"
                      ? value.toLocaleString(undefined, {
                          maximumFractionDigits: 2,
                        })
                      : value}
                  </span>
                  <p
                    class="xt0psk2 xmi5d70 xw23nyj xo1l8bm x63nzvj x1541jtf"
                    style={{ padding: 0, margin: 0 }}
                  >
                    Link clicks
                  </p>
                </div>
              );
            }

            if (key === "CPC") {
              const isAll = value === "All";
              return (
                <div
                  style={{
                    wordWrap: "break-word",
                    whiteSpace: "normal",
                    color: isAll ? "#1c2b33" : "#1c2b33", // Dynamic color assignment
                  }}
                >
                  $
                  {typeof value === "number"
                    ? value.toLocaleString(undefined, {
                        maximumFractionDigits: 2,
                      })
                    : value}
                </div>
              );
            }
            if (key === "CPM") {
              const isAll = value === "All";
              return (
                <div
                  style={{
                    wordWrap: "break-word",
                    whiteSpace: "normal",
                    color: isAll ? "#1c2b33" : "#1c2b33", // Dynamic color assignment
                  }}
                >
                  $
                  {typeof value === "number"
                    ? value.toLocaleString(undefined, {
                        maximumFractionDigits: 2,
                      })
                    : value}
                </div>
              );
            }
            if (key === "CTR") {
              const isAll = value === "All";
              return (
                <div
                  style={{
                    wordWrap: "break-word",
                    whiteSpace: "normal",
                    color: isAll ? "#1c2b33" : "#1c2b33", // Dynamic color assignment
                  }}
                >
                  {typeof value === "number"
                    ? value.toLocaleString(undefined, {
                        maximumFractionDigits: 2,
                      })
                    : value}
                  %
                </div>
              );
            }
            if (key === "Link Clicks") {
              const isAll = value === "All";
              return (
                <div
                  style={{
                    wordWrap: "break-word",
                    whiteSpace: "normal",
                    color: isAll ? "#1c2b33" : "#1c2b33", // Dynamic color assignment
                  }}
                >
                  {typeof value === "number"
                    ? value.toLocaleString(undefined, {
                        maximumFractionDigits: 2,
                      })
                    : value}
                </div>
              );
            }
            if (key === "Ad Creative") {
              return (
                <div
                  style={{
                    width: "280px", // Match the column width
                    wordWrap: "break-word",
                    whiteSpace: "normal",
                  }}
                >
                  {value}
                </div>
              );
            }

            if (key === "Ad Creative") {
              const rowSpan = calculateRowSpan(
                csvData,
                index,
                "Ad Creative Key"
              );
              if (rowSpan === 0) return null; // Hide duplicates
              if (record[key] === "All") return "All"; // Show "All" explicitly
            }

            if (
              [
                "Page Name",
                "Campaign Name",
                "Ad Set Name",
                "Ad Name",
                "Impression Device",
              ].includes(key)
            ) {
              const rowSpan = calculateRowSpan(csvData, index, key);
              if (rowSpan === 0) return null; // Hide duplicates
            }
            return value !== undefined && value !== null ? value : "—";
          },
        }));

      clearInterval(interval); // Stop progress increment
      setLoadingProgress(100); // Complete the progress bar
      setData(csvData);
      setColumns(updatedColumns);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoadingProgress(100); // Ensure progress completes on error
    } finally {
      setLoading(false);
      setTimeout(() => setLoadingProgress(0), 500); // Hide progress bar after a short delay
    }
  };

  const calculateSummary = (data) => {
    const totals = {
      "Amount Spent": 0,
      Impressions: 0,
      Reach: 0,
      Results: 0,
      "Link Clicks": 0,
    };
    data?.forEach((row) => {
      totals["Amount Spent"] += row["Amount Spent"] || 0;
      totals.Impressions += row.Impressions || 0;
      totals.Reach += row.Reach || 0;
      totals.Results += row.Results || 0;
      totals["Link Clicks"] += row["Link Clicks"] || 0;
    });
    return totals;
  };

  const summary = calculateSummary(data);

  useEffect(() => {
    fetchData();
  }, [formattedStartDate, formattedEndDate]);
  //alkj
  return (
    <div className="testmyreproing" style={{ position: "relative" }}>
      <Table
        dataSource={data}
        columns={columns}
        bordered
        pagination={false}
        rowKey={(record, index) => index}
        scroll={{ y: 570 }} // Adds vertical scroll
        sticky // Makes the table headers sticky
        locale={{ emptyText: null }} // Removes the "No Data" message
        title={() => (
          <div style={{ position: "relative" }}>
            {loadingProgress > 0 && (
              <div
                style={{
                  position: "absolute",
                  top: "78px",
                  left: "-15px",
                  width: `${loadingProgress}%`,
                  height: "4px",
                  backgroundColor: "#1890ff",
                  zIndex: 1,
                  transition: "width 0.2s ease-in-out",
                }}
              ></div>
            )}
          </div>
        )}
        summary={() => (
          <Table.Summary fixed>
            <Table.Summary.Row>
              {columns.map((col, index) => (
                <Table.Summary.Cell key={index} index={index}>
                  {col.dataIndex === "Page Name" ? (
                    <div>
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
                    </div>
                  ) : col.dataIndex === "Amount Spent" ? (
                    <div class="_e9n">
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
                  ) : col.dataIndex === "Impressions" ? (
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
                            Link clicks
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
                  ) : col.dataIndex === "Campaign Name" ||
                    col.dataIndex === "Ad Set Name" ||
                    col.dataIndex === "Ad Name" ||
                    col.dataIndex === "Impression Device" ||
                    col.dataIndex === "Placement" ||
                    col.dataIndex === "Ad Creative" ? (
                    <div></div>
                  ) : (
                    <div>{data[0]?.[col.dataIndex] || ""}</div>
                  )}
                </Table.Summary.Cell>
              ))}
            </Table.Summary.Row>
          </Table.Summary>
        )}
      />
    </div>
  );
};

export default FBAReporting;

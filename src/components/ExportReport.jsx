import React, { useState } from "react";
import { Button, Input, Modal, message } from "antd";

import "../styles/ExportReport.css";

const ExportReport = ({
  setShowDownloadFile,
  finalStartDate,
  finalEndDate,
}) => {
  // Function to format dates
  const [isHovered, setIsHovered] = useState(false);

  const formatDate = (date) => {
    if (!date) return "";
    const d = new Date(date);
    const day = d.getDate();
    const month = d.toLocaleString("default", { month: "short" });
    const year = d.getFullYear();
    return `${month}-${day}-${year}`;
  };

  const formattedStartDate = formatDate(finalStartDate);
  const formattedEndDate = formatDate(finalEndDate);
  const reportName = `Untitled report ${formattedStartDate} to ${formattedEndDate}`;

  // Map of files based on date ranges
  const reportingFiles = [
    {
      name: "Untitled-report-Aug-1-2024-to-Aug-31-2024.csv",
      startDate: "2024-08-01",
      endDate: "2024-08-31",
    },
    {
      name: "Untitled-report-Sep-1-2024-to-Sep-30-2024.csv",
      startDate: "2024-09-01",
      endDate: "2024-09-30",
    },
    {
      name: "Untitled-report-Oct-1-2024-to-Oct-31-2024.csv",
      startDate: "2024-10-01",
      endDate: "2024-10-31",
    },
    {
      name: "Untitled-report-Nov-1-2024-to-Nov-30-2024.csv",
      startDate: "2024-11-01",
      endDate: "2024-11-30",
    },
    {
      name: "Untitled-report-Dec-1-2024-to-Dec-31-2024.csv",
      startDate: "2024-12-01",
      endDate: "2024-12-31",
    },
  ];

  const handleExport = async () => {
    if (!finalStartDate || !finalEndDate) {
      message.error("Please provide valid dates.");
      return;
    }

    console.log("Selected Start Date:", finalStartDate);
    console.log("Selected End Date:", finalEndDate);

    const normalizeDate = (date) => {
      const d = new Date(date);
      d.setHours(0, 0, 0, 0); // Reset time to midnight
      return d;
    };

    const normalizedStartDate = normalizeDate(finalStartDate);
    const normalizedEndDate = normalizeDate(finalEndDate);

    const matchingFile = reportingFiles.find((file) => {
      const fileStartDate = normalizeDate(file.startDate);
      const fileEndDate = normalizeDate(file.endDate);

      console.log("Comparing with file:", file.name);
      console.log("File Start Date:", fileStartDate);
      console.log("File End Date:", fileEndDate);

      return (
        normalizedStartDate >= fileStartDate && normalizedEndDate <= fileEndDate
      );
    });

    if (matchingFile) {
      const fileName = matchingFile.name;

      try {
        const response = await fetch(
          `https://facebookadsmangerserver.vercel.app/api/reports/download?fileName=${encodeURIComponent(
            fileName
          )}`
        );

        if (response.status === 200) {
          const blob = await response.blob();
          const link = document.createElement("a");
          link.href = window.URL.createObjectURL(blob);
          link.download = fileName;
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);

          const exportedFiles =
            JSON.parse(localStorage.getItem("exportedFiles")) || [];
          exportedFiles.push({ name: reportName, id: Date.now() });
          localStorage.setItem("exportedFiles", JSON.stringify(exportedFiles));
        } else {
          message.error("Failed to download the file. Please try again.");
          console.error("Error response:", response);
        }
      } catch (error) {
        console.error("Error while downloading the file:", error);
        message.error("Error occurred during the file download.");
      }
    } else {
      message.error("No matching file found for the selected date range.");
      console.error("No matching file found for the selected date range.");
    }

    setShowDownloadFile(false);
  };

  return (
    <div>
      <span
        data-surface-wrapper="1"
        data-surface="/am"
        class="snipcss-y8nnp style-ewKMa"
        id="style-ewKMa"
      >
        <div data-visualcompletion="ignore" class="">
          <div
            class="x1dr59a3 xixxii4 x13vifvy x17qophe xn9wirt xbqvh2t x68m4m9 xofcydl xxziih7 x12w9bfk x19991ni x1hc1fzr style-jLb8f"
            id="style-jLb8f"
          >
            <div
              class="x1qjc9v5 x9f619 x78zum5 xdt5ytf x1nhvcw1 xg6iff7 xurb0ha x1sxyh0 x1l90r2v style-orlW4"
              data-visualcompletion="ignore"
              id="style-orlW4"
            >
              <div
                class="x1cy8zhl x78zum5 xl56j7k x47corl style-etAXp"
                id="style-etAXp"
              >
                <div
                  aria-labelledby="js_13g"
                  class="x78zum5 xdt5ytf x1t137rt x71s49j x1n2onr6 x1ja2u2z style-Hcm8L"
                  role="dialog"
                  tabindex="-1"
                  data-interactable="|keydown|"
                  id="style-Hcm8L"
                >
                  <div
                    aria-labelledby="js_13g"
                    class="x1gzqxud x1lcm9me x1yr5g0i xrt01vj x10y3i5r x1xp1s0c x5yr21d xh8yej3 x78zum5 xdt5ytf xqui1pq"
                    data-auto-logging-component-type="GeoModal"
                  >
                    <div class="x78zum5 xdt5ytf x5yr21d xedcshv x1t2pt76 xh8yej3">
                      <div
                        class="x9f619 x78zum5 x2lah0s xh8yej3 xyamay9 x1l90r2v x1swvt13 x1pi30zi"
                        data-auto-logging-component-type="GeoModalHeader"
                        data-auto-logging-dependent-region=""
                      >
                        <div class="x1iyjqo2 xeuugli">
                          <div
                            style={{ position: "relative" }}
                            class="x1iyjqo2 xeuugli"
                          >
                            <div
                              onMouseEnter={() => setIsHovered(true)}
                              onMouseLeave={() => setIsHovered(false)}
                              style={{
                                padding: "10px",
                                backgroundColor: "#f0f0f0",
                                cursor: "pointer",
                              }}
                              aria-level="3"
                              class="x1xqt7ti x1uxerd5 x1xlr1w8 xrohxju xbsr9hj xq9mrsl x1yc453h x1mzt3pk x1vvkbs x13faqbe xeuugli x1uvtmcs"
                              id="js_13g"
                              role="heading"
                            >
                              Export report
                            </div>
                            {/* Hidden Div */}
                            {isHovered && (
                              <div
                                style={{
                                  position: "absolute",
                                  top: "0",
                                  left: "0",
                                  zIndex: 999,
                                  padding: "10px",
                                  backgroundColor: "#ffffff",
                                  border: "1px solid #ddd",
                                  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                                }}
                              >
                                Hidden Content: Export Options
                              </div>
                            )}
                          </div>
                        </div>
                        <div
                          onClick={() => setShowDownloadFile(false)}
                          class="x7a106z x78zum5 x2lah0s x9otpla x1wsgfga x1n0m28w"
                        >
                          <span class="x1i64zmx">
                            <div
                              aria-busy="false"
                              class="x1i10hfl xjqpnuy xa49m3k xqeqjp1 x2hbi6w x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli x16tdsg8 xggy1nq x1ja2u2z x1t137rt x6s0dn4 x1ejq31n xd10rxx x1sy0etr x17r0tee x3nfvp2 xdl72j9 x1q0g3np x2lah0s x193iq5w x1n2onr6 x1hl2dhg x87ps6o xxymvpz xlh3980 xvmahel x1lku1pv x1g40iwv x1lcm9me x1yr5g0i xrt01vj x10y3i5r xo1l8bm xbsr9hj x1v911su x1y1aw1k xwib8y2 x1ye3gou xn6708d"
                              role="button"
                              tabindex="0"
                            >
                              <span class="xmi5d70 x1fvot60 xxio538 x1heor9g xq9mrsl x1h4wwuj x1pd3egz xeuugli x1uvtmcs xh8yej3">
                                <div class="x78zum5">
                                  <div
                                    class="x1qvwoe0 xjm9jq1 x1y332i5 xcwd3tp x1jyxor1 x39eecv x6ikm8r x10wlt62 x10l6tqk xuxw1ft x1i1rx1s"
                                    data-sscoverage-ignore="true"
                                  >
                                    Close
                                  </div>
                                  <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1hc1fzr x13dflua x6o7n8i xxziih7 x12w9bfk xl56j7k xh8yej3">
                                    <div
                                      class="x3nfvp2 x120ccyz x1heor9g x2lah0s x1c4vz4f"
                                      role="presentation"
                                    >
                                      <div
                                        class="xtwfq29 style-IpaBb"
                                        id="style-IpaBb"
                                      ></div>
                                    </div>
                                    ​
                                  </div>
                                </div>
                              </span>
                            </div>
                          </span>
                        </div>
                      </div>
                      <div class="x9f619 x78zum5 x1iyjqo2 x5yr21d x2lwn1j x1n2onr6 xh8yej3">
                        <div class="xw2csxc x1odjw0f xwib8y2 xh8yej3">
                          <div class="xjm9jq1 xg01cxk x47corl xh8yej3 x1jyxor1"></div>
                          <div
                            class="x1iyjqo2 xs83m0k xdl72j9 x3igimt xedcshv x1t2pt76 x1swvt13 x1pi30zi xexx8yu x18d9i69"
                            data-auto-logging-component-type="GeoSection"
                            data-auto-logging-dependent-region=""
                          >
                            <div class="_3-95">
                              <div class="x78zum5 xdt5ytf xdl72j9 x1iyjqo2 xeuugli x1n2onr6 xh8yej3">
                                <div class="x78zum5 xdt5ytf xozqiw3 x2lwn1j xeuugli x1iyjqo2 xyqj3jm x5yr21d">
                                  <div
                                    class="style-faFSo"
                                    data-sscoverage-ignore="true"
                                    id="style-faFSo"
                                  >
                                    <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94">
                                      <div class="x1iyjqo2">
                                        <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 xs83m0k x65s2av">
                                          <label id="js_13j" for="js_13i">
                                            <span class="xmi5d70 x1fvot60 xxio538 xbsr9hj xq9mrsl x1mzt3pk x1vvkbs x13faqbe x117nqv4 xeuugli x1uvtmcs">
                                              <span class="xmi5d70 x1fvot60 xxio538 xbsr9hj xq9mrsl x1mzt3pk x1vvkbs x13faqbe x117nqv4 xeuugli x1uvtmcs">
                                                Export name
                                              </span>
                                            </span>
                                          </label>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="x1lcm9me x1yr5g0i xo71vjh x5pf9jr x78zum5 xdt5ytf x1iyjqo2">
                                    <div class="x78zum5 xdt5ytf x1iyjqo2">
                                      <div class="x1iyjqo2">
                                        <div class="x1n2onr6 xh8yej3">
                                          <div class="x6s0dn4 x78zum5 x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x178xt8z xm81vs4 xso031l xy80clv xwebqov xvyu6v8 xrsgblv x10lij0i x1lcm9me x1yr5g0i xrt01vj x10y3i5r x1gzqxud xbsr9hj xm7lytj x1ykpatu xlu9dua x1w2lkzu">
                                            <div class=""></div>
                                            <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94">
                                              <div class="x6s0dn4 x78zum5 x1q0g3np x1a02dak x2lwn1j xeuugli x1iyjqo2 x19lwn94">
                                                <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94">
                                                  <input
                                                    placeholder="Enter report name"
                                                    id="js_13i"
                                                    aria-labelledby="js_13j"
                                                    aria-busy="false"
                                                    aria-disabled="false"
                                                    class="xjbqb8w x972fbf xcfux6l x1qhh985 xm0m39n xdj266r x11i5rnm xat24cr x1mh8g0r x1t137rt xexx8yu x4uap5 x18d9i69 xkhd6sd xwd1esu x1gnnqk1 xbsr9hj x1urst0s x1glnyev x1ad04t7 x1ix68h3 x19gujb8 xni1clt x1tutvks xfrpkgu xmi5d70 x1fvot60 xo1l8bm xxio538 x1rffpxw xh8yej3"
                                                    type="text"
                                                    value={`Untitled report ${formattedStartDate} to ${formattedEndDate}`}
                                                  />
                                                </div>
                                              </div>
                                              <div class="x6s0dn4 x3nfvp2 x1q0g3np xozqiw3 x2lwn1j xeuugli x1c4vz4f x19lwn94 xmi5d70 x1fvot60 xo1l8bm xxio538 xbsr9hj xq9mrsl xqcrz7y x2lah0s">
                                                ​
                                                <div
                                                  aria-controls="js_13i"
                                                  aria-label="Clear"
                                                  class="x1i10hfl x1qjc9v5 xjbqb8w xjqpnuy xa49m3k xqeqjp1 x2hbi6w x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk x78zum5 xdl72j9 xdt5ytf x2lah0s xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli xexx8yu x4uap5 x18d9i69 xkhd6sd x1n2onr6 x16tdsg8 x1hl2dhg xggy1nq x1ja2u2z x1t137rt"
                                                  role="button"
                                                  tabindex="0"
                                                >
                                                  <div
                                                    class="x3nfvp2 x120ccyz x4s1yf2"
                                                    role="presentation"
                                                  >
                                                    <div
                                                      class="xtwfq29 style-Nmbk2"
                                                      id="style-Nmbk2"
                                                    ></div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div class="xwebqov xvyu6v8 xrsgblv x10lij0i x1lcm9me x1yr5g0i xrt01vj x10y3i5r x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x178xt8z xm81vs4 xso031l xy80clv x13dflua x6o7n8i xxziih7 x12w9bfk xg01cxk x47corl x10l6tqk x17qophe xds687c x13vifvy x1ey2m1c x6ikm8r x10wlt62 xnl74ce xmb4j5p xdx8kah xwmxa91 xmn8db3 x8lbu6m x2te4dl x1bs8fl3 xhhp2wi x14q35kh x1wa3ocq x1n7iyjn x1t0di37 x1tt7eqi xe25xm5 xsp6npd x1s928wv x1w3onc2 x1j6awrg x9obomg x1ryaxvv x1hvfe8t x1te75w5"></div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="x78zum5 xdt5ytf xdl72j9 x1iyjqo2 xeuugli x1n2onr6 xh8yej3">
                              <div class="x78zum5 xdt5ytf xozqiw3 x2lwn1j xeuugli x1iyjqo2 xyqj3jm x5yr21d">
                                <div
                                  class="style-rFXzA"
                                  data-sscoverage-ignore="true"
                                  id="style-rFXzA"
                                >
                                  <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94">
                                    <div class="x1iyjqo2">
                                      <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 xs83m0k x65s2av">
                                        <label id="js_13p" for="js_13o">
                                          <span class="xmi5d70 x1fvot60 xxio538 xbsr9hj xq9mrsl x1mzt3pk x1vvkbs x13faqbe x117nqv4 xeuugli x1uvtmcs">
                                            <span class="xmi5d70 x1fvot60 xxio538 xbsr9hj xq9mrsl x1mzt3pk x1vvkbs x13faqbe x117nqv4 xeuugli x1uvtmcs">
                                              Export as:
                                            </span>
                                          </span>
                                        </label>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div class="x1lcm9me x1yr5g0i xo71vjh x5pf9jr x78zum5 xdt5ytf x1iyjqo2">
                                  <div class="x78zum5 xdt5ytf x1iyjqo2">
                                    <div class="x1iyjqo2">
                                      <div
                                        id="js_13o"
                                        aria-labelledby="js_13p"
                                        class="x78zum5 xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r xexx8yu x4uap5 x18d9i69 xkhd6sd xdt5ytf xdm93yi"
                                        role="radiogroup"
                                      >
                                        <label
                                          class="x1i10hfl x1qjc9v5 xjbqb8w xjqpnuy xa49m3k xqeqjp1 x2hbi6w x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk x78zum5 xdl72j9 xdt5ytf x2lah0s xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli xexx8yu x4uap5 x18d9i69 xkhd6sd x1n2onr6 x16tdsg8 x1hl2dhg xggy1nq x1ja2u2z x1t137rt"
                                          tabindex="-1"
                                        >
                                          <div class="x78zum5 x1iyjqo2">
                                            <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1lcm9me x1yr5g0i xrt01vj x10y3i5r x1iorvi4 xjkvuk6 xurb0ha x1sxyh0 xp7jhwk x1n0m28w">
                                              <div class="x6s0dn4 x3nfvp2 x1q0g3np xozqiw3 x2lwn1j xeuugli x1c4vz4f x19lwn94 xqcrz7y x2lah0s">
                                                <div class="x1rg5ohu x1n2onr6 x3oybdh">
                                                  <div class="x1n2onr6 x14atkfc">
                                                    <div class="x6s0dn4 x78zum5 x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x178xt8z xm81vs4 xso031l xy80clv xwebqov xvyu6v8 xrsgblv x10lij0i xzolkzo x12go9s9 x1rnf11y xprq8jg x1gzqxud xbsr9hj x9f619 xexx8yu x4uap5 x18d9i69 xkhd6sd xl56j7k xxk0z11 xvy4d1p">
                                                      <div class=""></div>
                                                      <input
                                                        aria-checked="false"
                                                        aria-disabled="false"
                                                        aria-describedby="js_13t"
                                                        aria-labelledby="js_13u"
                                                        class="xjyslct x1ypdohk x5yr21d x17qophe xdj266r x11i5rnm xat24cr x1mh8g0r x1w3u9th x1t137rt x10l6tqk x13vifvy xh8yej3 x1vjfegm"
                                                        id="js_13s"
                                                        type="radio"
                                                        value="pivot"
                                                        name="js_13n"
                                                      />
                                                      <div class="x13dflua xnnyp6c x12w9bfk x78zum5 xg01cxk x1f85oc2 x6o7n8i">
                                                        <div class="xsmyaan x1kpxq89 xzolkzo x12go9s9 x1rnf11y xprq8jg xo1l8bm x140t73q x19bke7z"></div>
                                                      </div>
                                                    </div>
                                                    <div class="xwebqov xvyu6v8 xrsgblv x10lij0i xzolkzo x12go9s9 x1rnf11y xprq8jg x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x178xt8z xm81vs4 xso031l xy80clv x13dflua x6o7n8i xxziih7 x12w9bfk xg01cxk x47corl x10l6tqk x17qophe xds687c x13vifvy x1ey2m1c x6ikm8r x10wlt62 xnl74ce xmb4j5p xdx8kah xwmxa91 xmn8db3 x8lbu6m x2te4dl x1bs8fl3 xhhp2wi x14q35kh x1wa3ocq x1n7iyjn x1t0di37 x1tt7eqi xe25xm5 xsp6npd x1s928wv x1w3onc2 x1j6awrg x9obomg x1ryaxvv x1hvfe8t x1te75w5"></div>
                                                  </div>
                                                </div>
                                              </div>
                                              <div
                                                class="x1iyjqo2 xamitd3"
                                                data-sscoverage-ignore="true"
                                              >
                                                <div class="x6s0dn4 x1q0g3np xozqiw3 x2lwn1j x1iyjqo2 xs83m0k x65s2av x78zum5 xeuugli">
                                                  <div
                                                    class="xmi5d70 x1fvot60 xo1l8bm xxio538 xbsr9hj xq9mrsl x1mzt3pk x1vvkbs x13faqbe xeuugli x1uvtmcs x1iyjqo2"
                                                    id="js_13u"
                                                  >
                                                    Formatted data table (.xlsx)
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </label>
                                        <label
                                          class="x1i10hfl x1qjc9v5 xjbqb8w xjqpnuy xa49m3k xqeqjp1 x2hbi6w x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk x78zum5 xdl72j9 xdt5ytf x2lah0s xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli xexx8yu x4uap5 x18d9i69 xkhd6sd x1n2onr6 x16tdsg8 x1hl2dhg xggy1nq x1ja2u2z x1t137rt"
                                          tabindex="-1"
                                        >
                                          <div class="x78zum5 x1iyjqo2">
                                            <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1lcm9me x1yr5g0i xrt01vj x10y3i5r x1iorvi4 xjkvuk6 xurb0ha x1sxyh0 xp7jhwk x1n0m28w">
                                              <div class="x6s0dn4 x3nfvp2 x1q0g3np xozqiw3 x2lwn1j xeuugli x1c4vz4f x19lwn94 xqcrz7y x2lah0s">
                                                <div class="x1rg5ohu x1n2onr6 x3oybdh">
                                                  <div class="x1n2onr6 x14atkfc">
                                                    <div class="x6s0dn4 x78zum5 x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x178xt8z xm81vs4 xso031l xy80clv xwebqov xvyu6v8 xrsgblv x10lij0i xzolkzo x12go9s9 x1rnf11y xprq8jg x1gzqxud xbsr9hj x9f619 xexx8yu x4uap5 x18d9i69 xkhd6sd xl56j7k xxk0z11 xvy4d1p">
                                                      <div class=""></div>
                                                      <input
                                                        aria-checked="false"
                                                        aria-disabled="false"
                                                        aria-describedby="js_13z"
                                                        aria-labelledby="js_140"
                                                        class="xjyslct x1ypdohk x5yr21d x17qophe xdj266r x11i5rnm xat24cr x1mh8g0r x1w3u9th x1t137rt x10l6tqk x13vifvy xh8yej3 x1vjfegm"
                                                        id="js_13y"
                                                        type="radio"
                                                        value="xlsx"
                                                        name="js_13n"
                                                      />
                                                      <div class="x13dflua xnnyp6c x12w9bfk x78zum5 xg01cxk x1f85oc2 x6o7n8i">
                                                        <div class="xsmyaan x1kpxq89 xzolkzo x12go9s9 x1rnf11y xprq8jg xo1l8bm x140t73q x19bke7z"></div>
                                                      </div>
                                                    </div>
                                                    <div class="xwebqov xvyu6v8 xrsgblv x10lij0i xzolkzo x12go9s9 x1rnf11y xprq8jg x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x178xt8z xm81vs4 xso031l xy80clv x13dflua x6o7n8i xxziih7 x12w9bfk xg01cxk x47corl x10l6tqk x17qophe xds687c x13vifvy x1ey2m1c x6ikm8r x10wlt62 xnl74ce xmb4j5p xdx8kah xwmxa91 xmn8db3 x8lbu6m x2te4dl x1bs8fl3 xhhp2wi x14q35kh x1wa3ocq x1n7iyjn x1t0di37 x1tt7eqi xe25xm5 xsp6npd x1s928wv x1w3onc2 x1j6awrg x9obomg x1ryaxvv x1hvfe8t x1te75w5"></div>
                                                  </div>
                                                </div>
                                              </div>
                                              <div
                                                class="x1iyjqo2 xamitd3"
                                                data-sscoverage-ignore="true"
                                              >
                                                <div class="x6s0dn4 x1q0g3np xozqiw3 x2lwn1j x1iyjqo2 xs83m0k x65s2av x78zum5 xeuugli">
                                                  <div
                                                    class="xmi5d70 x1fvot60 xo1l8bm xxio538 xbsr9hj xq9mrsl x1mzt3pk x1vvkbs x13faqbe xeuugli x1uvtmcs x1iyjqo2"
                                                    id="js_140"
                                                  >
                                                    Raw data table (.xlsx)
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </label>
                                        <label
                                          class="x1i10hfl x1qjc9v5 xjbqb8w xjqpnuy xa49m3k xqeqjp1 x2hbi6w x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk x78zum5 xdl72j9 xdt5ytf x2lah0s xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli xexx8yu x4uap5 x18d9i69 xkhd6sd x1n2onr6 x16tdsg8 x1hl2dhg xggy1nq x1ja2u2z x1t137rt"
                                          tabindex="-1"
                                        >
                                          <div class="x78zum5 x1iyjqo2">
                                            <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1lcm9me x1yr5g0i xrt01vj x10y3i5r x1iorvi4 xjkvuk6 xurb0ha x1sxyh0 xp7jhwk x1n0m28w">
                                              <div class="x6s0dn4 x3nfvp2 x1q0g3np xozqiw3 x2lwn1j xeuugli x1c4vz4f x19lwn94 xqcrz7y x2lah0s">
                                                <div class="x1rg5ohu x1n2onr6 x3oybdh">
                                                  <div class="x1n2onr6 x14atkfc">
                                                    <div class="x6s0dn4 x78zum5 x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x178xt8z xm81vs4 xso031l xy80clv xwebqov xvyu6v8 xrsgblv x10lij0i xzolkzo x12go9s9 x1rnf11y xprq8jg x1gzqxud xbsr9hj x9f619 xexx8yu x4uap5 x18d9i69 xkhd6sd xl56j7k xxk0z11 xvy4d1p">
                                                      <div class=""></div>
                                                      <input
                                                        aria-checked="true"
                                                        aria-disabled="false"
                                                        aria-describedby="js_145"
                                                        aria-labelledby="js_146"
                                                        class="xjyslct x1ypdohk x5yr21d x17qophe xdj266r x11i5rnm xat24cr x1mh8g0r x1w3u9th x1t137rt x10l6tqk x13vifvy xh8yej3 x1vjfegm"
                                                        id="js_144"
                                                        type="radio"
                                                        value="csv"
                                                        checked=""
                                                        name="js_13n"
                                                      />
                                                      <div class="x13dflua xnnyp6c x12w9bfk x78zum5 x6o7n8i x1hc1fzr x3oybdh">
                                                        <div class="xsmyaan x1kpxq89 xzolkzo x12go9s9 x1rnf11y xprq8jg xo1l8bm x140t73q x19bke7z"></div>
                                                      </div>
                                                    </div>
                                                    <div class="xwebqov xvyu6v8 xrsgblv x10lij0i xzolkzo x12go9s9 x1rnf11y xprq8jg x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x178xt8z xm81vs4 xso031l xy80clv x13dflua x6o7n8i xxziih7 x12w9bfk xg01cxk x47corl x10l6tqk x17qophe xds687c x13vifvy x1ey2m1c x6ikm8r x10wlt62 xnl74ce xmb4j5p xdx8kah xwmxa91 xmn8db3 x8lbu6m x2te4dl x1bs8fl3 xhhp2wi x14q35kh x1wa3ocq x1n7iyjn x1t0di37 x1tt7eqi xe25xm5 xsp6npd x1s928wv x1w3onc2 x1j6awrg x9obomg x1ryaxvv x1hvfe8t x1te75w5"></div>
                                                  </div>
                                                </div>
                                              </div>
                                              <div
                                                class="x1iyjqo2 xamitd3"
                                                data-sscoverage-ignore="true"
                                              >
                                                <div class="x6s0dn4 x1q0g3np xozqiw3 x2lwn1j x1iyjqo2 xs83m0k x65s2av x78zum5 xeuugli">
                                                  <div
                                                    class="xmi5d70 x1fvot60 xo1l8bm xxio538 xbsr9hj xq9mrsl x1mzt3pk x1vvkbs x13faqbe xeuugli x1uvtmcs x1iyjqo2"
                                                    id="js_146"
                                                  >
                                                    CSV (.csv)
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </label>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="x78zum5 xdt5ytf xdl72j9 x1iyjqo2 xeuugli x1n2onr6 xh8yej3">
                              <div
                                class="x1qvwoe0 xjm9jq1 x1y332i5 xcwd3tp x1jyxor1 x39eecv x6ikm8r x10wlt62 x10l6tqk xuxw1ft x1i1rx1s style-x15ZQ"
                                data-sscoverage-ignore="true"
                                id="style-x15ZQ"
                              >
                                <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94">
                                  <div class="x1iyjqo2">
                                    <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 xs83m0k x65s2av">
                                      <label id="js_14c" for="js_14b">
                                        <span class="xmi5d70 x1fvot60 xxio538 xbsr9hj xq9mrsl x1mzt3pk x1vvkbs x13faqbe x117nqv4 xeuugli x1uvtmcs">
                                          <span class="xmi5d70 x1fvot60 xxio538 xbsr9hj xq9mrsl x1mzt3pk x1vvkbs x13faqbe x117nqv4 xeuugli x1uvtmcs">
                                            Export as:
                                          </span>
                                        </span>
                                      </label>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="x1lcm9me x1yr5g0i xo71vjh x5pf9jr x78zum5 xdt5ytf x1iyjqo2">
                                <div class="x78zum5 xdt5ytf x1iyjqo2">
                                  <div class="x1iyjqo2">
                                    <div
                                      id="js_14b"
                                      aria-labelledby="js_14c"
                                      class="x78zum5 xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r xexx8yu x4uap5 x18d9i69 xkhd6sd xdt5ytf xdm93yi"
                                      role="radiogroup"
                                    >
                                      <label
                                        class="x1i10hfl x1qjc9v5 xjbqb8w xjqpnuy xa49m3k xqeqjp1 x2hbi6w x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk x78zum5 xdl72j9 xdt5ytf x2lah0s xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli xexx8yu x4uap5 x18d9i69 xkhd6sd x1n2onr6 x16tdsg8 x1hl2dhg xggy1nq x1ja2u2z x1t137rt"
                                        tabindex="-1"
                                      >
                                        <div class="x78zum5 x1iyjqo2">
                                          <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1lcm9me x1yr5g0i xrt01vj x10y3i5r x1iorvi4 xjkvuk6 xurb0ha x1sxyh0 xp7jhwk x1n0m28w">
                                            <div class="x6s0dn4 x3nfvp2 x1q0g3np xozqiw3 x2lwn1j xeuugli x1c4vz4f x19lwn94 xqcrz7y x2lah0s">
                                              <div class="x1rg5ohu x1n2onr6 x3oybdh">
                                                <div class="x1n2onr6 x14atkfc">
                                                  <div class="x6s0dn4 x78zum5 x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x178xt8z xm81vs4 xso031l xy80clv xwebqov xvyu6v8 xrsgblv x10lij0i xzolkzo x12go9s9 x1rnf11y xprq8jg x1gzqxud xbsr9hj x9f619 xexx8yu x4uap5 x18d9i69 xkhd6sd xl56j7k xxk0z11 xvy4d1p">
                                                    <div class=""></div>
                                                    <input
                                                      aria-checked="false"
                                                      aria-disabled="false"
                                                      aria-describedby="js_14g"
                                                      aria-labelledby="js_14h"
                                                      class="xjyslct x1ypdohk x5yr21d x17qophe xdj266r x11i5rnm xat24cr x1mh8g0r x1w3u9th x1t137rt x10l6tqk x13vifvy xh8yej3 x1vjfegm"
                                                      id="js_14f"
                                                      type="radio"
                                                      value="png"
                                                      name="js_14a"
                                                    />
                                                    <div class="x13dflua xnnyp6c x12w9bfk x78zum5 xg01cxk x1f85oc2 x6o7n8i">
                                                      <div class="xsmyaan x1kpxq89 xzolkzo x12go9s9 x1rnf11y xprq8jg xo1l8bm x140t73q x19bke7z"></div>
                                                    </div>
                                                  </div>
                                                  <div class="xwebqov xvyu6v8 xrsgblv x10lij0i xzolkzo x12go9s9 x1rnf11y xprq8jg x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x178xt8z xm81vs4 xso031l xy80clv x13dflua x6o7n8i xxziih7 x12w9bfk xg01cxk x47corl x10l6tqk x17qophe xds687c x13vifvy x1ey2m1c x6ikm8r x10wlt62 xnl74ce xmb4j5p xdx8kah xwmxa91 xmn8db3 x8lbu6m x2te4dl x1bs8fl3 xhhp2wi x14q35kh x1wa3ocq x1n7iyjn x1t0di37 x1tt7eqi xe25xm5 xsp6npd x1s928wv x1w3onc2 x1j6awrg x9obomg x1ryaxvv x1hvfe8t x1te75w5"></div>
                                                </div>
                                              </div>
                                            </div>
                                            <div
                                              class="x1iyjqo2 xamitd3"
                                              data-sscoverage-ignore="true"
                                            >
                                              <div class="x6s0dn4 x1q0g3np xozqiw3 x2lwn1j x1iyjqo2 xs83m0k x65s2av x78zum5 xeuugli">
                                                <div
                                                  class="xmi5d70 x1fvot60 xo1l8bm xxio538 xbsr9hj xq9mrsl x1mzt3pk x1vvkbs x13faqbe xeuugli x1uvtmcs x1iyjqo2"
                                                  id="js_14h"
                                                >
                                                  Image (.png)
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </label>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <span
                              aria-level="4"
                              class="x1xqt7ti xsuwoey x63nzvj xbsr9hj xq9mrsl x1h4wwuj x117nqv4 xeuugli x1uvtmcs x1xmf6yo"
                              role="heading"
                            >
                              Options:
                            </span>
                            <div class="x1xmf6yo">
                              <label
                                class="x1i10hfl x1qjc9v5 xjbqb8w xjqpnuy xa49m3k xqeqjp1 x2hbi6w x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk x78zum5 xdl72j9 xdt5ytf x2lah0s xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli xexx8yu x4uap5 x18d9i69 xkhd6sd x1n2onr6 x16tdsg8 x1hl2dhg xggy1nq x1ja2u2z x1t137rt"
                                tabindex="-1"
                              >
                                <div class="x78zum5 x1iyjqo2">
                                  <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1lcm9me x1yr5g0i xrt01vj x10y3i5r">
                                    <div class="x6s0dn4 x3nfvp2 x1q0g3np xozqiw3 x2lwn1j xeuugli x1c4vz4f x19lwn94 xqcrz7y x2lah0s">
                                      <div class="x1rg5ohu x1n2onr6 x3oybdh">
                                        <div class="x1n2onr6 x14atkfc">
                                          <div class="x6s0dn4 x78zum5 x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x178xt8z xm81vs4 xso031l xy80clv xwebqov xvyu6v8 xrsgblv x10lij0i x1lcm9me x1yr5g0i xrt01vj x10y3i5r x1gzqxud xbsr9hj x9f619 xexx8yu x4uap5 x18d9i69 xkhd6sd xl56j7k xxk0z11 xvy4d1p">
                                            <div class=""></div>
                                            <input
                                              aria-checked="false"
                                              aria-disabled="false"
                                              aria-describedby="js_14m"
                                              aria-labelledby="js_14n"
                                              class="xjyslct x1ypdohk x5yr21d x17qophe xdj266r x11i5rnm xat24cr x1mh8g0r x1w3u9th x1t137rt x10l6tqk x13vifvy xh8yej3 x1vjfegm"
                                              id="js_14l"
                                              type="checkbox"
                                            />
                                            <div class="x13dflua xnnyp6c x12w9bfk x78zum5 xg01cxk x1f85oc2 x6o7n8i">
                                              <div
                                                class="x3nfvp2 x120ccyz x1qsmy5i"
                                                role="presentation"
                                              >
                                                <svg
                                                  height="16"
                                                  viewBox="0 0 16 16"
                                                  width="16"
                                                >
                                                  <path d="M13.305 3.28L5.993 10.6l-3.31-3.306a1 1 0 00-1.415 1.414l4.013 4.012a.997.997 0 001.414 0l8.024-8.024a1 1 0 00-1.414-1.416z"></path>
                                                </svg>
                                              </div>
                                            </div>
                                          </div>
                                          <div class="xwebqov xvyu6v8 xrsgblv x10lij0i x1lcm9me x1yr5g0i xrt01vj x10y3i5r x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x178xt8z xm81vs4 xso031l xy80clv x13dflua x6o7n8i xxziih7 x12w9bfk xg01cxk x47corl x10l6tqk x17qophe xds687c x13vifvy x1ey2m1c x6ikm8r x10wlt62 xnl74ce xmb4j5p xdx8kah xwmxa91 xmn8db3 x8lbu6m x2te4dl x1bs8fl3 xhhp2wi x14q35kh x1wa3ocq x1n7iyjn x1t0di37 x1tt7eqi xe25xm5 xsp6npd x1s928wv x1w3onc2 x1j6awrg x9obomg x1ryaxvv x1hvfe8t x1te75w5"></div>
                                        </div>
                                      </div>
                                    </div>
                                    <div
                                      class="x1iyjqo2 xamitd3"
                                      data-sscoverage-ignore="true"
                                    >
                                      <div class="x6s0dn4 x1q0g3np xozqiw3 x2lwn1j x1iyjqo2 xs83m0k x65s2av x78zum5 xeuugli">
                                        <div
                                          class="xmi5d70 x1fvot60 xo1l8bm xxio538 xbsr9hj xq9mrsl x1mzt3pk x1vvkbs x13faqbe xeuugli x1uvtmcs x1iyjqo2"
                                          id="js_14n"
                                        >
                                          Include summary row
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </label>
                            </div>
                          </div>
                          <div class="xjm9jq1 xg01cxk x47corl xh8yej3 x1y332i5"></div>
                        </div>
                        <div class="x10wjd1d x47corl x10l6tqk x19991ni x13dflua xwji4o3 xh8yej3 xg01cxk x67dex8 x13vifvy"></div>
                        <div class="x10wjd1d x47corl x10l6tqk x19991ni x13dflua xwji4o3 xh8yej3 xg01cxk x1ta9b4f x1ey2m1c"></div>
                      </div>
                      <div
                        class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x19lwn94 x1swvt13 x1pi30zi x1l90r2v x1y1aw1k x1c4vz4f x2lah0s"
                        data-auto-logging-component-type="GeoModalFooter"
                        data-auto-logging-dependent-region=""
                      >
                        <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x2lah0s x13a6bvl">
                          <div
                            aria-busy="false"
                            class="x1i10hfl xjqpnuy xa49m3k xqeqjp1 x2hbi6w x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli x16tdsg8 xggy1nq x1ja2u2z x6s0dn4 x1ejq31n xd10rxx x1sy0etr x17r0tee x3nfvp2 xdl72j9 x1q0g3np x2lah0s x193iq5w x1n2onr6 x1hl2dhg x87ps6o xxymvpz xlh3980 xvmahel x1lku1pv x1g40iwv x1lcm9me x1yr5g0i xrt01vj x10y3i5r x1ob88yx xaatb59 x1qgsegg xo1l8bm xbsr9hj x1v911su x1y1aw1k xwib8y2 x1swvt13 x1pi30zi"
                            role="button"
                            tabindex="0"
                          >
                            <span class="xmi5d70 x1fvot60 xxio538 x1heor9g xq9mrsl x1h4wwuj x1pd3egz xeuugli x1uvtmcs xh8yej3">
                              <div class="x78zum5">
                                <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1hc1fzr x13dflua x6o7n8i xxziih7 x12w9bfk xl56j7k xh8yej3">
                                  <div class="x1xqt7ti x1fvot60 xk50ysn xxio538 x1heor9g xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj xeuugli x1uvtmcs">
                                    Cancel
                                  </div>
                                </div>
                              </div>
                            </span>
                          </div>
                          <div class="x3nfvp2 x193iq5w xxymvpz" role="none">
                            <div
                              onClick={handleExport}
                              aria-busy="false"
                              class="x1i10hfl xjqpnuy xa49m3k xqeqjp1 x2hbi6w x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli x16tdsg8 xggy1nq x1ja2u2z x1t137rt x6s0dn4 x1ejq31n xd10rxx x1sy0etr x17r0tee x3nfvp2 xdl72j9 x1q0g3np x2lah0s x193iq5w x1n2onr6 x1hl2dhg x87ps6o xxymvpz xlh3980 xvmahel x1lku1pv x1g40iwv x1lcm9me x1yr5g0i xrt01vj x10y3i5r xo1l8bm x140t73q x19bke7z x1y1aw1k xwib8y2 x1swvt13 x1pi30zi"
                              role="button"
                              tabindex="0"
                            >
                              <span class="xmi5d70 x1fvot60 xxio538 x1heor9g xq9mrsl x1h4wwuj x1pd3egz xeuugli x1uvtmcs xh8yej3">
                                <div class="x78zum5">
                                  <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1hc1fzr x13dflua x6o7n8i xxziih7 x12w9bfk xl56j7k xh8yej3">
                                    <div
                                      title="Export"
                                      class="x1xqt7ti x1fvot60 xk50ysn xxio538 x1heor9g xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj xeuugli x1uvtmcs"
                                    >
                                      Export
                                    </div>
                                  </div>
                                </div>
                              </span>
                            </div>
                            <div class="x1s85apg">
                              <button
                                class="layerConfirm"
                                type="button"
                              ></button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div></div>
            </div>
          </div>
          <div>
            <div></div>
          </div>
        </div>
      </span>
    </div>
  );
};

export default ExportReport;

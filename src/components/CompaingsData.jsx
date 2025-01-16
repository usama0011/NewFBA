import React, { useEffect, useState } from "react";
import "../styles/CompaingsData.css";
import ColoumSelector from "./ColoumSelector";
import { useNavigate } from "react-router-dom";
import PlacementBox from "./PlacementBox";

const CompaingsData = ({ campaigns, loading }) => {
  const [showMenu, SetShowMenu] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("Performance");
  const [showPlacementBox, setShowPlacementBox] = useState(false);
  const navigate = useNavigate();
  const handleShowSlector = () => {
    SetShowMenu((pre) => !pre);
  };
  const fieldMapping = {
    "Ad set name": "adname",
    "Bid strategy": "Bidstrategy",
    Budget: "Budget",
    "Last significant edit": "lastSignificent",
    "Attribution setting": "Attributionsetting",
    Results: "Results",
    Reach: "Reach",
    "Link clicks": "LinksClicks",
    Impressions: "Impressions",
    "Cost per result": "Costperresult",
    "Amount spent": "Amountspent",
    Ends: "Ends",
    "Page engagement": "PageEngagement",
    "Post reactions": "PostReactions",
    "Post comments": "PostComments",
    "Post saves": "PostSaves",
    "Post shares": "PostShares",
    "Follows or likes": "Postfollowslikes",
    "CPC (cost per link click)": "CPC",
    "CTR (link click-through rate)": "CTR",
    "2-second continuous video plays": "twosecondvideoplay",
    "Cost per 2-second continuous video play": "costpertwosecondvideoplay",
    "3-second video plays": "threesecondvideoplay",
    "Cost per 3-second video play": "costperthreesecondvideoplay",
    ThruPlays: "thruplays",
    "Cost per ThruPlay": "costperthruplay",
    "Video plays at 25%": "videoplaytwentyfivepercent",
    "Video plays at 50%": "videoplayfiftypercent",
    "Video plays at 75%": "videoplayseventyfivepercent",
    "Video plays at 95%": "videoplayninetyfivepercent",
    "Video plays at 100%": "videoplayhundredpercent",
    "CPM (cost per 1,000 impressions)": "CPM",
    "Clicks (all)": "clicksAll",
    "CTR (all)": "CTRALL",
    "CPC (all)": "CPCAll",
  };

  const categories = {
    Performance: [
      "Bid strategy",
      "Budget",
      "Attribution setting",
      "Results",
      "Reach",
      "Impressions",
      "Cost per result",
      "Amount spent",
      "Ends",
      "plus",
    ],
    Engagement: [
      "Page engagement",
      "Post reactions",
      "Post comments",
      "Post saves",
      "Post shares",
      "Follows or likes",
      "CPC (cost per link click)",
      "plus",
    ],
    "Video Engagement": [
      "Impressions",
      "2-second continuous video plays",
      "Cost per 2-second continuous video play",
      "3-second video plays",
      "Cost per 3-second video play",
      "ThruPlays",
      "Cost per ThruPlay",
      "Reach",
      "Amount spent",
      "Video plays at 25%",
      "Video plays at 50%",
      "Video plays at 75%",
      "Video plays at 95%",
      "Video plays at 100%",
      "Video plays",
      "plus",
    ],
    "Performance and Clicks": [
      "Attribution setting",
      "Results",
      "Reach",
      "Cost per result",
      "Budget",
      "Amount spent",
      "Ends",
      "Impressions",
      "CPM (cost per 1,000 impressions)",
      "Link clicks",
      "CPC (cost per link click)",
      "CTR (link click-through rate)",
      "Clicks (all)",
      "CTR (all)",
      "CPC (all)",
      "plus",
    ],
    Delivery: [
      "Reach",
      "Frequency",
      "Cost per 1,000 Accounts Centre accounts reached",
      "Impressions",
      "CPM (cost per 1,000 impressions)",
      "plus",
    ],
  };
  const [showPerformanceRows, setShowPerformanceRows] = useState(false);

  const getColumnStyles = (colName, customWidths = {}) => {
    return { width: `${customWidths[colName] || 150}px` };
  };

  const totalResults = campaigns.reduce(
    (sum, record) => sum + (Number(record?.Results) || 0),
    0
  );
  const totalReach = campaigns?.reduce(
    (sum, record) => sum + (Number(record.Reach) || 0),
    0
  );
  const totalImpressions = campaigns?.reduce(
    (sum, record) => sum + (Number(record.Impressions) || 0),
    0
  );

  const totalAmountSpent = campaigns?.reduce(
    (sum, record) => sum + (Number(record.Amountspent) || 0),
    0
  );

  const tatalClicksAll = campaigns?.reduce(
    (sum, record) => sum + (Number(record.clicksAll) || 0),
    0
  );
  const LinkClicksAll = campaigns?.reduce(
    (sum, record) => sum + (Number(record.LinksClicks) || 0),
    0
  );
  const largestCostPerResult = campaigns?.length
    ? totalAmountSpent / LinkClicksAll
    : 0; // Handle case where campaigns? might be empty
  const tatalCPMCost = campaigns?.length
    ? (totalAmountSpent / totalImpressions) * 1000
    : 0;
  const totalCPCImpression = campaigns?.length
    ? totalAmountSpent / LinkClicksAll
    : 0;
  const totalCTRImpression = campaigns?.length
    ? (LinkClicksAll / totalImpressions) * 100
    : 0; // Handle case where campaigns? might be empty
  const totalCTRAll = campaigns?.length
    ? (tatalClicksAll / totalImpressions) * 100
    : 0; // Handle case where campaigns? might be empty
  const totalCPCAll = campaigns?.length ? totalAmountSpent / tatalClicksAll : 0; // Handle case where campaigns? might be empty

  const handleViewChart = (id) => {
    navigate(`/editmainchart/${id}`);
  };
  const handleViewEdit = (id) => {
    navigate(`/editcampaing/${id}`);
  };
  const [hoveredRow, setHoveredRow] = useState(null);
  const handleMouseEnter = (index) => {
    setHoveredRow(index); // Set the hovered row index
  };

  const handleMouseLeave = () => {
    setHoveredRow(null); // Clear the hovered row index
  };
  return (
    <div>
      <div
        style={{
          backgroundColor: "white",
          position: "relative",
          margin: "0px 8px",
        }}
        class="_3c5b _7jnt snipcss-OGfjQ"
        id="pe_toolbar"
      >
        <div class="x78zum5 x6ikm8r x10wlt62 x1n2onr6">
          <div class="_9p_z">
            <div class="_9p_y" role="toolbar">
              <div>
                <div class="_9p_y">
                  <div class="_9p_y">
                    <span
                      class=" "
                      data-tracked="true"
                      data-interactable="|mousedown||click|"
                    >
                      <span
                        class=" "
                        data-tracked="true"
                        data-interactable="|mousedown||click|"
                      >
                        <div class="x3nfvp2 x193iq5w xxymvpz" role="none">
                          <div
                            aria-busy="false"
                            class="x1i10hfl xjqpnuy xa49m3k xqeqjp1 x2hbi6w x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli x16tdsg8 xggy1nq x1ja2u2z x1t137rt x6s0dn4 x1ejq31n xd10rxx x1sy0etr x17r0tee x3nfvp2 xdl72j9 x1q0g3np x2lah0s x193iq5w x1n2onr6 x1hl2dhg x87ps6o xxymvpz xlh3980 xvmahel x1lku1pv x1g40iwv x1lcm9me x1yr5g0i xrt01vj x10y3i5r xo1l8bm x140t73q xqkc6xh x1y1aw1k xwib8y2 x1pi30zi x1ye3gou"
                            role="button"
                            tabindex="0"
                          >
                            <span class="xmi5d70 x1fvot60 xxio538 x1heor9g xq9mrsl x1h4wwuj x1pd3egz xeuugli x1uvtmcs xh8yej3">
                              <div class="x78zum5">
                                <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1hc1fzr x13dflua x6o7n8i xxziih7 x12w9bfk xl56j7k xh8yej3">
                                  <div class="x3nfvp2 x2lah0s x1c4vz4f">
                                    <i
                                      alt=""
                                      data-visualcompletion="css-img"
                                      class="img style-nZWwK"
                                      id="style-nZWwK"
                                    ></i>
                                  </div>
                                  <div class="x1xqt7ti x1fvot60 xk50ysn xxio538 x1heor9g xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj xeuugli x1uvtmcs">
                                    Create
                                  </div>
                                </div>
                              </div>
                            </span>
                          </div>
                        </div>
                      </span>
                    </span>
                    <div id="DUPLICATE_BUTTON_ID">
                      <div
                        class="x3oybdh xuxw1ft x1iknuni xw9jwym x1e2iszw xg0tal0 x3nfvp2 x1lcm9me x1yr5g0i xrt01vj x10y3i5r x193iq5w xeuugli"
                        role="group"
                      >
                        <div
                          aria-busy="false"
                          aria-disabled="true"
                          class="x1i10hfl xjqpnuy xa49m3k xqeqjp1 x2hbi6w x972fbf xcfux6l x1qhh985 xm0m39n x9f619 xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli x16tdsg8 xggy1nq x1ja2u2z x1h6gzvc x6s0dn4 x1ejq31n xd10rxx x1sy0etr x17r0tee x3nfvp2 xdl72j9 x1q0g3np x2lah0s x193iq5w x1n2onr6 x1hl2dhg x87ps6o xxymvpz xlh3980 xvmahel x1lku1pv x1g40iwv x1lcm9me x1yr5g0i xrt01vj x10y3i5r xtpvj6k xaatb59 x1qgsegg xo1l8bm x1v911su xis6omg x1y1aw1k xwib8y2 x1ye3gou xn6708d style-PJdyq"
                          role="button"
                          tabindex="-1"
                          id="style-PJdyq"
                        >
                          <span class="xmi5d70 x1fvot60 xxio538 x1heor9g xq9mrsl x1h4wwuj x1pd3egz xeuugli x1uvtmcs xh8yej3">
                            <div class="x78zum5">
                              <div
                                class="x1qvwoe0 xjm9jq1 x1y332i5 xcwd3tp x1jyxor1 x39eecv x6ikm8r x10wlt62 x10l6tqk xuxw1ft x1i1rx1s"
                                data-sscoverage-ignore="true"
                              >
                                Duplicate
                              </div>
                              <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1hc1fzr x13dflua x6o7n8i xxziih7 x12w9bfk xl56j7k xh8yej3">
                                <div
                                  class="x3nfvp2 x120ccyz x1heor9g x2lah0s x1c4vz4f"
                                  role="presentation"
                                >
                                  <div
                                    class="xtwfq29 style-yQRJS"
                                    id="style-yQRJS"
                                  ></div>
                                </div>
                                ​
                              </div>
                            </div>
                          </span>
                        </div>
                        <div class="x1rg5ohu x39eecv">
                          <div
                            aria-busy="false"
                            aria-controls="js_gpb"
                            aria-disabled="true"
                            aria-expanded="false"
                            aria-haspopup="menu"
                            class="x1i10hfl xjqpnuy xa49m3k xqeqjp1 x2hbi6w x972fbf xcfux6l x1qhh985 xm0m39n x9f619 xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli x16tdsg8 xggy1nq x1ja2u2z x1h6gzvc x6s0dn4 x1ejq31n xd10rxx x1sy0etr x17r0tee x3nfvp2 xdl72j9 x1q0g3np x2lah0s x193iq5w x1n2onr6 x1hl2dhg x87ps6o xxymvpz xlh3980 xvmahel x1lku1pv x1g40iwv x1lcm9me x1yr5g0i xrt01vj x10y3i5r xtpvj6k xaatb59 x1qgsegg xo1l8bm x1v911su xis6omg x1y1aw1k xwib8y2 x1ye3gou xn6708d style-zoSo5"
                            role="button"
                            tabindex="-1"
                            id="style-zoSo5"
                          >
                            <span class="xmi5d70 x1fvot60 xxio538 x1heor9g xq9mrsl x1h4wwuj x1pd3egz xeuugli x1uvtmcs xh8yej3">
                              <div class="x78zum5">
                                <div
                                  class="x1qvwoe0 xjm9jq1 x1y332i5 xcwd3tp x1jyxor1 x39eecv x6ikm8r x10wlt62 x10l6tqk xuxw1ft x1i1rx1s"
                                  data-sscoverage-ignore="true"
                                >
                                  Open Drop-down
                                </div>
                                <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1hc1fzr x13dflua x6o7n8i xxziih7 x12w9bfk x1nhvcw1 xh8yej3">
                                  ​
                                  <div
                                    class="x3nfvp2 x120ccyz x1heor9g x2lah0s x1c4vz4f x1gryazu"
                                    role="presentation"
                                  >
                                    <div
                                      class="xtwfq29 style-JBOKE"
                                      id="style-JBOKE"
                                    ></div>
                                  </div>
                                </div>
                              </div>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <span
                      class=" "
                      data-tracked="true"
                      data-interactable="|mousedown||click|"
                    >
                      <div
                        class="x3oybdh xuxw1ft x1iknuni xw9jwym x1e2iszw xg0tal0 x3nfvp2 x1lcm9me x1yr5g0i xrt01vj x10y3i5r x193iq5w xeuugli"
                        role="group"
                      >
                        <div
                          aria-busy="false"
                          class="x1i10hfl xjqpnuy xa49m3k xqeqjp1 x2hbi6w x972fbf xcfux6l x1qhh985 xm0m39n x9f619 xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli x16tdsg8 xggy1nq x1ja2u2z x1h6gzvc x6s0dn4 x1ejq31n xd10rxx x1sy0etr x17r0tee x3nfvp2 xdl72j9 x1q0g3np x2lah0s x193iq5w x1n2onr6 x1hl2dhg x87ps6o xxymvpz xlh3980 xvmahel x1lku1pv x1g40iwv x1lcm9me x1yr5g0i xrt01vj x10y3i5r xtpvj6k xaatb59 x1qgsegg xo1l8bm x1v911su xis6omg x1y1aw1k xwib8y2 x1pi30zi x1ye3gou style-TbWZP"
                          role="button"
                          tabindex="-1"
                          aria-disabled="true"
                          id="style-TbWZP"
                        >
                          <span class="xmi5d70 x1fvot60 xxio538 x1heor9g xq9mrsl x1h4wwuj x1pd3egz xeuugli x1uvtmcs xh8yej3">
                            <div class="x78zum5">
                              <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1hc1fzr x13dflua x6o7n8i xxziih7 x12w9bfk xl56j7k xh8yej3">
                                <div
                                  class="x3nfvp2 x120ccyz x1heor9g x2lah0s x1c4vz4f"
                                  role="presentation"
                                >
                                  <div
                                    class="xtwfq29 style-dAwfI"
                                    id="style-dAwfI"
                                  ></div>
                                </div>
                                <div class="x1xqt7ti x1fvot60 xk50ysn xxio538 x1heor9g xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj xeuugli x1uvtmcs">
                                  Edit
                                </div>
                              </div>
                            </div>
                          </span>
                        </div>
                        <div class="x1rg5ohu x39eecv">
                          <div
                            aria-busy="false"
                            aria-controls="js_4nm"
                            aria-expanded="false"
                            aria-haspopup="menu"
                            class="x1i10hfl xjqpnuy xa49m3k xqeqjp1 x2hbi6w x972fbf xcfux6l x1qhh985 xm0m39n x9f619 xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli x16tdsg8 xggy1nq x1ja2u2z x1h6gzvc x6s0dn4 x1ejq31n xd10rxx x1sy0etr x17r0tee x3nfvp2 xdl72j9 x1q0g3np x2lah0s x193iq5w x1n2onr6 x1hl2dhg x87ps6o xxymvpz xlh3980 xvmahel x1lku1pv x1g40iwv x1lcm9me x1yr5g0i xrt01vj x10y3i5r xtpvj6k xaatb59 x1qgsegg xo1l8bm x1v911su xis6omg x1y1aw1k xwib8y2 x1ye3gou xn6708d style-WrMIN"
                            role="button"
                            tabindex="-1"
                            aria-disabled="true"
                            id="style-WrMIN"
                          >
                            <span class="xmi5d70 x1fvot60 xxio538 x1heor9g xq9mrsl x1h4wwuj x1pd3egz xeuugli x1uvtmcs xh8yej3">
                              <div class="x78zum5">
                                <div
                                  class="x1qvwoe0 xjm9jq1 x1y332i5 xcwd3tp x1jyxor1 x39eecv x6ikm8r x10wlt62 x10l6tqk xuxw1ft x1i1rx1s"
                                  data-sscoverage-ignore="true"
                                >
                                  Edit
                                </div>
                                <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1hc1fzr x13dflua x6o7n8i xxziih7 x12w9bfk x1nhvcw1 xh8yej3">
                                  ​
                                  <div
                                    class="x3nfvp2 x120ccyz x1heor9g x2lah0s x1c4vz4f x1gryazu"
                                    role="presentation"
                                  >
                                    <div
                                      class="xtwfq29 style-2C93o"
                                      id="style-2C93o"
                                    ></div>
                                  </div>
                                </div>
                              </div>
                            </span>
                          </div>
                        </div>
                      </div>
                    </span>
                    <div class="x3nfvp2 x193iq5w xxymvpz" role="none">
                      <div
                        aria-busy="false"
                        class="x1i10hfl xjqpnuy xa49m3k xqeqjp1 x2hbi6w x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli x16tdsg8 xggy1nq x1ja2u2z x6s0dn4 x1ejq31n xd10rxx x1sy0etr x17r0tee x3nfvp2 xdl72j9 x1q0g3np x2lah0s x193iq5w x1n2onr6 x1hl2dhg x87ps6o xxymvpz xlh3980 xvmahel x1lku1pv x1g40iwv x1lcm9me x1yr5g0i xrt01vj x10y3i5r x1ob88yx xaatb59 x1qgsegg xo1l8bm xbsr9hj x1v911su x1y1aw1k xwib8y2 x1pi30zi x1ye3gou"
                        role="button"
                        tabindex="0"
                      >
                        <span class="xmi5d70 x1fvot60 xxio538 x1heor9g xq9mrsl x1h4wwuj x1pd3egz xeuugli x1uvtmcs xh8yej3">
                          <div class="x78zum5">
                            <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1hc1fzr x13dflua x6o7n8i xxziih7 x12w9bfk xl56j7k xh8yej3">
                              <div
                                class="x3nfvp2 x120ccyz x1heor9g x2lah0s x1c4vz4f"
                                role="presentation"
                              >
                                <div
                                  class="xtwfq29 style-TEIqE"
                                  id="style-TEIqE"
                                ></div>
                              </div>
                              <div class="x1xqt7ti x1fvot60 xk50ysn xxio538 x1heor9g xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj xeuugli x1uvtmcs">
                                A/B test
                              </div>
                            </div>
                          </div>
                        </span>
                      </div>
                    </div>
                    <div class="x3nfvp2 x193iq5w xxymvpz" role="none">
                      <div
                        aria-busy="false"
                        aria-disabled="true"
                        class="x1i10hfl xjqpnuy xa49m3k xqeqjp1 x2hbi6w x972fbf xcfux6l x1qhh985 xm0m39n x9f619 xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli x16tdsg8 xggy1nq x1ja2u2z x1h6gzvc x6s0dn4 x1ejq31n xd10rxx x1sy0etr x17r0tee x3nfvp2 xdl72j9 x1q0g3np x2lah0s x193iq5w x1n2onr6 x1hl2dhg x87ps6o xxymvpz xlh3980 xvmahel x1lku1pv x1g40iwv x1lcm9me x1yr5g0i xrt01vj x10y3i5r xtpvj6k xaatb59 x1qgsegg xo1l8bm x1v911su xis6omg x1y1aw1k xwib8y2 x1ye3gou xn6708d"
                        role="button"
                        tabindex="-1"
                      >
                        <span class="xmi5d70 x1fvot60 xxio538 x1heor9g xq9mrsl x1h4wwuj x1pd3egz xeuugli x1uvtmcs xh8yej3">
                          <div class="x78zum5">
                            <div
                              class="x1qvwoe0 xjm9jq1 x1y332i5 xcwd3tp x1jyxor1 x39eecv x6ikm8r x10wlt62 x10l6tqk xuxw1ft x1i1rx1s"
                              data-sscoverage-ignore="true"
                            >
                              You haven't copied any items.
                            </div>
                            <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1hc1fzr x13dflua x6o7n8i xxziih7 x12w9bfk xl56j7k xh8yej3">
                              <div
                                class="x3nfvp2 x120ccyz x1heor9g x2lah0s x1c4vz4f"
                                role="presentation"
                              >
                                <div
                                  class="xtwfq29 style-YlMmn"
                                  id="style-YlMmn"
                                ></div>
                              </div>
                              ​
                            </div>
                          </div>
                        </span>
                      </div>
                    </div>
                    <div
                      class="x3oybdh xuxw1ft x1iknuni xw9jwym x1e2iszw xg0tal0 x1rg5ohu x1lcm9me x1yr5g0i xrt01vj x10y3i5r"
                      role="group"
                    >
                      <div
                        class="x3nfvp2 x193iq5w xxymvpz style-FUDwj"
                        role="none"
                        id="style-FUDwj"
                      >
                        <div
                          aria-busy="false"
                          aria-disabled="true"
                          class="x1i10hfl xjqpnuy xa49m3k xqeqjp1 x2hbi6w x972fbf xcfux6l x1qhh985 xm0m39n x9f619 xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli x16tdsg8 xggy1nq x1ja2u2z x1h6gzvc x6s0dn4 x1ejq31n xd10rxx x1sy0etr x17r0tee x3nfvp2 xdl72j9 x1q0g3np x2lah0s x193iq5w x1n2onr6 x1hl2dhg x87ps6o xxymvpz xlh3980 xvmahel x1lku1pv x1g40iwv x1lcm9me x1yr5g0i xrt01vj x10y3i5r xtpvj6k xaatb59 x1qgsegg xo1l8bm x1v911su xis6omg x1y1aw1k xwib8y2 x1ye3gou xn6708d style-4peaS"
                          role="button"
                          tabindex="-1"
                          id="style-4peaS"
                        >
                          <span class="xmi5d70 x1fvot60 xxio538 x1heor9g xq9mrsl x1h4wwuj x1pd3egz xeuugli x1uvtmcs xh8yej3">
                            <div class="x78zum5">
                              <div
                                class="x1qvwoe0 xjm9jq1 x1y332i5 xcwd3tp x1jyxor1 x39eecv x6ikm8r x10wlt62 x10l6tqk xuxw1ft x1i1rx1s"
                                data-sscoverage-ignore="true"
                              >
                                Discard draft
                              </div>
                              <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1hc1fzr x13dflua x6o7n8i xxziih7 x12w9bfk xl56j7k xh8yej3">
                                <div
                                  class="x3nfvp2 x120ccyz x1heor9g x2lah0s x1c4vz4f"
                                  role="presentation"
                                >
                                  <div
                                    class="xtwfq29 style-GRDC9"
                                    id="style-GRDC9"
                                  ></div>
                                </div>
                                ​
                              </div>
                            </div>
                          </span>
                        </div>
                      </div>
                      <div
                        class="x3nfvp2 x193iq5w xxymvpz style-rnpLq"
                        role="none"
                        id="style-rnpLq"
                      >
                        <div
                          aria-busy="false"
                          class="x1i10hfl xjqpnuy xa49m3k xqeqjp1 x2hbi6w x972fbf xcfux6l x1qhh985 xm0m39n x9f619 xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli x16tdsg8 xggy1nq x1ja2u2z x1h6gzvc x6s0dn4 x1ejq31n xd10rxx x1sy0etr x17r0tee x3nfvp2 xdl72j9 x1q0g3np x2lah0s x193iq5w x1n2onr6 x1hl2dhg x87ps6o xxymvpz xlh3980 xvmahel x1lku1pv x1g40iwv x1lcm9me x1yr5g0i xrt01vj x10y3i5r xtpvj6k xaatb59 x1qgsegg xo1l8bm x1v911su xis6omg x1y1aw1k xwib8y2 x1ye3gou xn6708d style-sUtrk"
                          role="button"
                          tabindex="-1"
                          aria-disabled="true"
                          id="style-sUtrk"
                        >
                          <span class="xmi5d70 x1fvot60 xxio538 x1heor9g xq9mrsl x1h4wwuj x1pd3egz xeuugli x1uvtmcs xh8yej3">
                            <div class="x78zum5">
                              <div
                                class="x1qvwoe0 xjm9jq1 x1y332i5 xcwd3tp x1jyxor1 x39eecv x6ikm8r x10wlt62 x10l6tqk xuxw1ft x1i1rx1s"
                                data-sscoverage-ignore="true"
                              >
                                Delete isn't available with your current
                                campaign selection.
                              </div>
                              <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1hc1fzr x13dflua x6o7n8i xxziih7 x12w9bfk xl56j7k xh8yej3">
                                <div
                                  class="x3nfvp2 x120ccyz x1heor9g x2lah0s x1c4vz4f"
                                  role="presentation"
                                >
                                  <div
                                    class="xtwfq29 style-7tcCl"
                                    id="style-7tcCl"
                                  ></div>
                                </div>
                                ​
                              </div>
                            </div>
                          </span>
                        </div>
                      </div>
                      <div
                        class="x3nfvp2 x193iq5w xxymvpz style-XDZc1"
                        role="none"
                        id="style-XDZc1"
                      >
                        <div
                          aria-busy="false"
                          aria-controls="js_4no"
                          aria-expanded="false"
                          aria-haspopup="menu"
                          class="x1i10hfl xjqpnuy xa49m3k xqeqjp1 x2hbi6w x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli x16tdsg8 xggy1nq x1ja2u2z x6s0dn4 x1ejq31n xd10rxx x1sy0etr x17r0tee x3nfvp2 xdl72j9 x1q0g3np x2lah0s x193iq5w x1n2onr6 x1hl2dhg x87ps6o xxymvpz xlh3980 xvmahel x1lku1pv x1g40iwv x1lcm9me x1yr5g0i xrt01vj x10y3i5r x1ob88yx xaatb59 x1qgsegg xo1l8bm xbsr9hj x1v911su x1y1aw1k xwib8y2 x1ye3gou xn6708d style-zyBPr"
                          role="button"
                          tabindex="0"
                          id="style-zyBPr"
                        >
                          <span class="xmi5d70 x1fvot60 xxio538 x1heor9g xq9mrsl x1h4wwuj x1pd3egz xeuugli x1uvtmcs xh8yej3">
                            <div class="x78zum5">
                              <div
                                class="x1qvwoe0 xjm9jq1 x1y332i5 xcwd3tp x1jyxor1 x39eecv x6ikm8r x10wlt62 x10l6tqk xuxw1ft x1i1rx1s"
                                data-sscoverage-ignore="true"
                              >
                                Export and import ad configuration data
                              </div>
                              <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1hc1fzr x13dflua x6o7n8i xxziih7 x12w9bfk xl56j7k xh8yej3">
                                <div class="x3nfvp2 x2lah0s x1c4vz4f">
                                  <i
                                    alt=""
                                    data-visualcompletion="css-img"
                                    class="img style-txHVt"
                                    id="style-txHVt"
                                  ></i>
                                </div>
                                ​
                              </div>
                            </div>
                          </span>
                        </div>
                      </div>
                      <span class="">
                        <div class="x1rg5ohu x67bb7w">
                          <div
                            class="x3nfvp2 x193iq5w xxymvpz style-dITmS"
                            role="none"
                            id="style-dITmS"
                          >
                            <div
                              aria-busy="false"
                              aria-disabled="true"
                              class="x1i10hfl xjqpnuy xa49m3k xqeqjp1 x2hbi6w x972fbf xcfux6l x1qhh985 xm0m39n x9f619 xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli x16tdsg8 xggy1nq x1ja2u2z x1h6gzvc x6s0dn4 x1ejq31n xd10rxx x1sy0etr x17r0tee x3nfvp2 xdl72j9 x1q0g3np x2lah0s x193iq5w x1n2onr6 x1hl2dhg x87ps6o xxymvpz xlh3980 xvmahel x1lku1pv x1g40iwv x1lcm9me x1yr5g0i xrt01vj x10y3i5r xtpvj6k xaatb59 x1qgsegg xo1l8bm x1v911su xis6omg x1y1aw1k xwib8y2 x1ye3gou xn6708d style-6AHYd"
                              role="button"
                              tabindex="-1"
                              id="js_gpe"
                            >
                              <span class="xmi5d70 x1fvot60 xxio538 x1heor9g xq9mrsl x1h4wwuj x1pd3egz xeuugli x1uvtmcs xh8yej3">
                                <div class="x78zum5">
                                  <div
                                    class="x1qvwoe0 xjm9jq1 x1y332i5 xcwd3tp x1jyxor1 x39eecv x6ikm8r x10wlt62 x10l6tqk xuxw1ft x1i1rx1s"
                                    data-sscoverage-ignore="true"
                                  >
                                    Tag
                                  </div>
                                  <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1hc1fzr x13dflua x6o7n8i xxziih7 x12w9bfk xl56j7k xh8yej3">
                                    <div
                                      class="x3nfvp2 x120ccyz x1heor9g x2lah0s x1c4vz4f"
                                      role="presentation"
                                    >
                                      <div
                                        class="xtwfq29 style-iCB6e"
                                        id="style-iCB6e"
                                      ></div>
                                    </div>
                                    ​
                                  </div>
                                </div>
                              </span>
                            </div>
                          </div>
                        </div>
                      </span>
                    </div>
                  </div>
                  <span>
                    <div>
                      <div
                        aria-busy="false"
                        aria-controls="js_4np"
                        aria-expanded="false"
                        aria-haspopup="menu"
                        class="x1i10hfl xjqpnuy xa49m3k xqeqjp1 x2hbi6w x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli x16tdsg8 xggy1nq x1ja2u2z x6s0dn4 x1ejq31n xd10rxx x1sy0etr x17r0tee x3nfvp2 xdl72j9 x1q0g3np x2lah0s x193iq5w x1n2onr6 x1hl2dhg x87ps6o xxymvpz xlh3980 xvmahel x1lku1pv x1g40iwv x1lcm9me x1yr5g0i xrt01vj x10y3i5r x1ob88yx xaatb59 x1qgsegg xo1l8bm xbsr9hj x1v911su x1y1aw1k xwib8y2 x1swvt13 xn6708d"
                        id="js_y"
                        role="button"
                        tabindex="0"
                      >
                        <span class="xmi5d70 x1fvot60 xxio538 x1heor9g xq9mrsl x1h4wwuj x1pd3egz xeuugli x1uvtmcs xh8yej3">
                          <div class="x78zum5">
                            <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1hc1fzr x13dflua x6o7n8i xxziih7 x12w9bfk x1nhvcw1 xh8yej3">
                              <div class="x1xqt7ti x1fvot60 xk50ysn xxio538 x1heor9g xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj xeuugli x1uvtmcs x1iyjqo2">
                                Rules
                              </div>
                              <div
                                class="x3nfvp2 x120ccyz x1heor9g x2lah0s x1c4vz4f x1gryazu"
                                role="presentation"
                              >
                                <div
                                  class="xtwfq29 style-rxQ61"
                                  id="style-rxQ61"
                                ></div>
                              </div>
                            </div>
                          </div>
                        </span>
                      </div>
                      <div data-visualcompletion="ignore" class=""></div>
                    </div>
                  </span>
                </div>
              </div>
              <div class="_9p_w"></div>
              <div>
                <div class="_9p_y">
                  <div class="x1rg5ohu x67bb7w">
                    <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x19lwn94 x1c4vz4f">
                      <div>
                        <div class="x78zum5 x2lwn1j xeuugli">
                          <label class="x1ypdohk" for="js_4nq">
                            <span class="xmi5d70 x1fvot60 xo1l8bm xxio538 xbsr9hj xq9mrsl x1h4wwuj xeuugli x1uvtmcs">
                              View Setup
                            </span>
                          </label>
                        </div>
                      </div>
                      <div class="x1rg5ohu x1n2onr6 x3oybdh">
                        <input
                          aria-checked="false"
                          aria-label="View Setup"
                          role="switch"
                          aria-describedby="js_4nr"
                          class="xjyslct x1ypdohk x5yr21d x17qophe xdj266r x11i5rnm xat24cr x1mh8g0r x1w3u9th x1t137rt x10l6tqk x13vifvy xh8yej3 x1vjfegm"
                          id="js_4nq"
                          type="checkbox"
                          value="false"
                        />
                        <div class="x1n2onr6 xh8yej3">
                          <div class="x6s0dn4 x78zum5 x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x178xt8z xm81vs4 xso031l xy80clv xwebqov xvyu6v8 xrsgblv x10lij0i xzolkzo x12go9s9 x1rnf11y xprq8jg x1gzqxud xbsr9hj x13dflua xxziih7 x12w9bfk x14qfxbe xexx8yu x4uap5 x18d9i69 xkhd6sd x15406qy">
                            <div class=""></div>
                            <div class="xw4jnvo x1qx5ct2 x12y6twl x1h45990 xzolkzo x12go9s9 x1rnf11y xprq8jg x13dflua x6o7n8i xxziih7 x12w9bfk x4s1yf2"></div>
                          </div>
                          <div class="xwebqov xvyu6v8 xrsgblv x10lij0i xzolkzo x12go9s9 x1rnf11y xprq8jg x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x178xt8z xm81vs4 xso031l xy80clv x13dflua x6o7n8i xxziih7 x12w9bfk xg01cxk x47corl x10l6tqk x17qophe xds687c x13vifvy x1ey2m1c x6ikm8r x10wlt62 xnl74ce xmb4j5p xdx8kah xwmxa91 xmn8db3 x8lbu6m x2te4dl x1bs8fl3 xhhp2wi x14q35kh x1wa3ocq x1n7iyjn x1t0di37 x1tt7eqi xe25xm5 xsp6npd x1s928wv x1w3onc2 x1j6awrg x9obomg x1ryaxvv x1hvfe8t x1te75w5"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <span>
                    <span
                      class=" "
                      data-tracked="true"
                      data-interactable="|mousedown||click|"
                      data-auto-logging-id="fb986eb3e"
                    >
                      <div id="ads_manager_table_column_dropdown_id">
                        <div id="ads_manager_nux_for_attribution_setting_column_aem_v2_mai_action_dropdown_nux">
                          <div
                            aria-busy="false"
                            aria-controls="js_4nt"
                            aria-expanded="false"
                            aria-haspopup="menu"
                            class="x1i10hfl xjqpnuy xa49m3k xqeqjp1 x2hbi6w x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli x16tdsg8 xggy1nq x1ja2u2z x6s0dn4 x1ejq31n xd10rxx x1sy0etr x17r0tee x3nfvp2 xdl72j9 x1q0g3np x2lah0s x1n2onr6 x1hl2dhg x87ps6o xxymvpz xlh3980 xvmahel x1lku1pv x1g40iwv x1lcm9me x1yr5g0i xrt01vj x10y3i5r x1ob88yx xaatb59 x1qgsegg xo1l8bm xbsr9hj x1v911su x1y1aw1k xwib8y2 x1ye3gou xn6708d xyq1l15"
                            role="button"
                            tabindex="0"
                            data-auto-logging-id="f1b09a509"
                            id="js_4y0"
                          >
                            <span
                              onClick={handleShowSlector}
                              class="xmi5d70 x1fvot60 xxio538 x1heor9g xq9mrsl x1h4wwuj x1pd3egz xeuugli x1uvtmcs xh8yej3"
                            >
                              <div class="x78zum5">
                                <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1hc1fzr x13dflua x6o7n8i xxziih7 x12w9bfk x1nhvcw1 xh8yej3">
                                  <div
                                    class="x3nfvp2 x120ccyz x1heor9g x2lah0s x1c4vz4f"
                                    role="presentation"
                                  >
                                    <div
                                      class="xtwfq29 style-knHVB"
                                      id="style-knHVB"
                                    ></div>
                                  </div>
                                  <div class="x1xqt7ti x1fvot60 xk50ysn xxio538 x1heor9g xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj xeuugli x1uvtmcs x1iyjqo2">
                                    Coloums
                                  </div>
                                  <div
                                    class="x3nfvp2 x120ccyz x1heor9g x2lah0s x1c4vz4f x1gryazu"
                                    role="presentation"
                                  >
                                    <div
                                      class="xtwfq29 style-i6fOK"
                                      id="style-i6fOK"
                                    ></div>
                                  </div>
                                </div>
                              </div>
                            </span>
                          </div>
                        </div>
                      </div>
                    </span>
                  </span>
                  <span
                    onClick={() => setShowPlacementBox((prev) => !prev)}
                    class=""
                    id="ads_manager_breakdown_dropdown_id"
                  >
                    <span
                      class=" "
                      data-tracked="true"
                      data-interactable="|mousedown||click|"
                    >
                      <div
                        aria-busy="false"
                        aria-controls="js_4nv"
                        aria-expanded="false"
                        aria-haspopup="menu"
                        class="x1i10hfl xjqpnuy xa49m3k xqeqjp1 x2hbi6w x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli x16tdsg8 xggy1nq x1ja2u2z x6s0dn4 x1ejq31n xd10rxx x1sy0etr x17r0tee x3nfvp2 xdl72j9 x1q0g3np x2lah0s x193iq5w x1n2onr6 x1hl2dhg x87ps6o xxymvpz xlh3980 xvmahel x1lku1pv x1g40iwv x1lcm9me x1yr5g0i xrt01vj x10y3i5r x1ob88yx xaatb59 x1qgsegg xo1l8bm xbsr9hj x1v911su x1y1aw1k xwib8y2 x1ye3gou xn6708d"
                        role="button"
                        tabindex="0"
                      >
                        <span class="xmi5d70 x1fvot60 xxio538 x1heor9g xq9mrsl x1h4wwuj x1pd3egz xeuugli x1uvtmcs xh8yej3">
                          <div class="x78zum5">
                            <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1hc1fzr x13dflua x6o7n8i xxziih7 x12w9bfk x1nhvcw1 xh8yej3">
                              <div
                                class="x3nfvp2 x120ccyz x1heor9g x2lah0s x1c4vz4f"
                                role="presentation"
                              >
                                <div
                                  class="xtwfq29 style-lj7zl"
                                  id="style-lj7zl"
                                ></div>
                              </div>
                              <div class="x1xqt7ti x1fvot60 xk50ysn xxio538 x1heor9g xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj xeuugli x1uvtmcs x1iyjqo2">
                                Breakdown {showPerformanceRows && `1 Selected`}
                              </div>
                              <div
                                class="x3nfvp2 x120ccyz x1heor9g x2lah0s x1c4vz4f x1gryazu"
                                role="presentation"
                              >
                                <div
                                  class="xtwfq29 style-OrUfr"
                                  id="style-OrUfr"
                                ></div>
                              </div>
                            </div>
                          </div>
                        </span>
                      </div>
                    </span>
                    <div data-visualcompletion="ignore" class=""></div>
                  </span>
                  <span id="ads_manager_reports_dropdown_id">
                    <div
                      aria-busy="false"
                      aria-controls="js_4nx"
                      aria-expanded="false"
                      aria-haspopup="menu"
                      class="x1i10hfl xjqpnuy xa49m3k xqeqjp1 x2hbi6w x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli x16tdsg8 xggy1nq x1ja2u2z x6s0dn4 x1ejq31n xd10rxx x1sy0etr x17r0tee x3nfvp2 xdl72j9 x1q0g3np x2lah0s x193iq5w x1n2onr6 x1hl2dhg x87ps6o xxymvpz xlh3980 xvmahel x1lku1pv x1g40iwv x1lcm9me x1yr5g0i xrt01vj x10y3i5r x1ob88yx xaatb59 x1qgsegg xo1l8bm xbsr9hj x1v911su x1y1aw1k xwib8y2 x1ye3gou xn6708d"
                      role="button"
                      tabindex="0"
                    >
                      <span class="xmi5d70 x1fvot60 xxio538 x1heor9g xq9mrsl x1h4wwuj x1pd3egz xeuugli x1uvtmcs xh8yej3">
                        <div class="x78zum5">
                          <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1hc1fzr x13dflua x6o7n8i xxziih7 x12w9bfk x1nhvcw1 xh8yej3">
                            <div
                              class="x3nfvp2 x120ccyz x1heor9g x2lah0s x1c4vz4f"
                              role="presentation"
                            >
                              <div
                                class="xtwfq29 style-DK9EZ"
                                id="style-DK9EZ"
                              ></div>
                            </div>
                            <div class="x1xqt7ti x1fvot60 xk50ysn xxio538 x1heor9g xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj xeuugli x1uvtmcs x1iyjqo2">
                              Reports
                            </div>
                            <div
                              class="x3nfvp2 x120ccyz x1heor9g x2lah0s x1c4vz4f x1gryazu"
                              role="presentation"
                            >
                              <div
                                class="xtwfq29 style-Qp731"
                                id="style-Qp731"
                              ></div>
                            </div>
                          </div>
                        </div>
                      </span>
                    </div>
                  </span>
                  <div
                    class="x3oybdh xuxw1ft x1iknuni xw9jwym x1e2iszw xg0tal0 x1lliihq x1lcm9me x1yr5g0i xrt01vj x10y3i5r"
                    role="group"
                  >
                    <span
                      class=" "
                      data-tracked="true"
                      data-interactable="|mousedown||click|"
                    >
                      <div
                        class="x3nfvp2 x193iq5w xxymvpz style-eegA2"
                        role="none"
                        id="style-eegA2"
                      >
                        <div
                          aria-busy="false"
                          class="x1i10hfl xjqpnuy xa49m3k xqeqjp1 x2hbi6w x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli x16tdsg8 xggy1nq x1ja2u2z x6s0dn4 x1ejq31n xd10rxx x1sy0etr x17r0tee x3nfvp2 xdl72j9 x1q0g3np x2lah0s x193iq5w x1n2onr6 x1hl2dhg x87ps6o xxymvpz xlh3980 xvmahel x1lku1pv x1g40iwv x1lcm9me x1yr5g0i xrt01vj x10y3i5r x1ob88yx xaatb59 x1qgsegg xo1l8bm xbsr9hj x1v911su x1y1aw1k xwib8y2 x1pi30zi x1ye3gou style-3arQw"
                          role="button"
                          tabindex="0"
                          id="style-3arQw"
                        >
                          <span class="xmi5d70 x1fvot60 xxio538 x1heor9g xq9mrsl x1h4wwuj x1pd3egz xeuugli x1uvtmcs xh8yej3">
                            <div class="x78zum5">
                              <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1hc1fzr x13dflua x6o7n8i xxziih7 x12w9bfk xl56j7k xh8yej3">
                                <div
                                  class="x3nfvp2 x120ccyz x1heor9g x2lah0s x1c4vz4f"
                                  role="presentation"
                                >
                                  <div
                                    class="xtwfq29 style-ZGt8k"
                                    id="style-ZGt8k"
                                  ></div>
                                </div>
                                <div class="x1xqt7ti x1fvot60 xk50ysn xxio538 x1heor9g xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj xeuugli x1uvtmcs">
                                  Export
                                </div>
                              </div>
                            </div>
                          </span>
                        </div>
                      </div>
                    </span>
                    <div
                      aria-busy="false"
                      aria-controls="js_4nz"
                      aria-expanded="false"
                      aria-haspopup="menu"
                      class="x1i10hfl xjqpnuy xa49m3k xqeqjp1 x2hbi6w x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli x16tdsg8 xggy1nq x1ja2u2z x6s0dn4 x1ejq31n xd10rxx x1sy0etr x17r0tee x3nfvp2 xdl72j9 x1q0g3np x2lah0s x193iq5w x1n2onr6 x1hl2dhg x87ps6o xxymvpz xlh3980 xvmahel x1lku1pv x1g40iwv x1lcm9me x1yr5g0i xrt01vj x10y3i5r x1ob88yx xaatb59 x1qgsegg xo1l8bm xbsr9hj x1v911su x1y1aw1k xwib8y2 x1ye3gou xn6708d style-VydSx"
                      role="button"
                      tabindex="0"
                      id="style-VydSx"
                    >
                      <span class="xmi5d70 x1fvot60 xxio538 x1heor9g xq9mrsl x1h4wwuj x1pd3egz xeuugli x1uvtmcs xh8yej3">
                        <div class="x78zum5">
                          <div
                            class="x1qvwoe0 xjm9jq1 x1y332i5 xcwd3tp x1jyxor1 x39eecv x6ikm8r x10wlt62 x10l6tqk xuxw1ft x1i1rx1s"
                            data-sscoverage-ignore="true"
                          >
                            Open Drop-down
                          </div>
                          <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1hc1fzr x13dflua x6o7n8i xxziih7 x12w9bfk x1nhvcw1 xh8yej3">
                            ​
                            <div
                              class="x3nfvp2 x120ccyz x1heor9g x2lah0s x1c4vz4f x1gryazu"
                              role="presentation"
                            >
                              <div
                                class="xtwfq29 style-y9WiR"
                                id="style-y9WiR"
                              ></div>
                            </div>
                          </div>
                        </div>
                      </span>
                    </div>
                  </div>
                  <div class="x3nfvp2 x193iq5w xxymvpz" role="none">
                    <div
                      aria-busy="false"
                      class="x1i10hfl xjqpnuy xa49m3k xqeqjp1 x2hbi6w x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli x16tdsg8 xggy1nq x1ja2u2z x6s0dn4 x1ejq31n xd10rxx x1sy0etr x17r0tee x3nfvp2 xdl72j9 x1q0g3np x2lah0s x193iq5w x1n2onr6 x1hl2dhg x87ps6o xxymvpz xlh3980 xvmahel x1lku1pv x1g40iwv x1lcm9me x1yr5g0i xrt01vj x10y3i5r x1ob88yx xaatb59 x1qgsegg xo1l8bm xbsr9hj x1v911su x1y1aw1k xwib8y2 x1pi30zi x1ye3gou"
                      role="button"
                      tabindex="0"
                    >
                      <span class="xmi5d70 x1fvot60 xxio538 x1heor9g xq9mrsl x1h4wwuj x1pd3egz xeuugli x1uvtmcs xh8yej3">
                        <div class="x78zum5">
                          <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1hc1fzr x13dflua x6o7n8i xxziih7 x12w9bfk xl56j7k xh8yej3">
                            <div
                              class="x3nfvp2 x120ccyz x1heor9g x2lah0s x1c4vz4f"
                              role="presentation"
                            >
                              <div
                                class="xtwfq29 style-B5hfK"
                                id="style-B5hfK"
                              ></div>
                            </div>
                            <div class="x1xqt7ti x1fvot60 xk50ysn xxio538 x1heor9g xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj xeuugli x1uvtmcs">
                              Charts
                            </div>
                          </div>
                        </div>
                      </span>
                    </div>
                  </div>
                  <div id="style-GrFc4" class="style-GrFc4"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {showMenu && (
          <div
            style={{
              position: "absolute",
              top: "45px",
              left: "1100px",
              zIndex: 999,
              textAlign: "left",
            }}
          >
            <ColoumSelector />
          </div>
        )}
        {showPlacementBox && (
          <div
            style={{
              position: "absolute",
              top: "48px",
              left: "1180px",
              zIndex: 999,
              textAlign: "left",
            }}
          >
            <div className="placeboxdiv">
              <PlacementBox
                showPlacementBox={showPlacementBox}
                setShowPlacementBox={setShowPlacementBox}
                showPerformanceRows={showPerformanceRows}
                setShowPerformanceRows={setShowPerformanceRows}
              />
            </div>
          </div>
        )}
      </div>
      <div className="vCampaign-container">
        {/* <select
          className="vCampaign-select"
          onChange={handleChange}
          value={selectedCategory}
        >
          {Object.keys(categories).map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select> */}
        {/* Checkbox for Performance */}

        <div className="vCampaign-scrollable">
          <table className="vCampaign-table">
            <thead style={{ backgroundColor: "white" }}>
              <tr>
                <th
                  style={{
                    width: "40px", // Ensure proper width for the column
                    position: "sticky", // Make the column sticky
                    top: "0",
                    left: "0", // Fix the column to the left
                    zIndex: "1300", // Keep the column above other rows
                    backgroundColor: "#fff", // Ensure background matches the table
                    textAlign: "center", // Center-align the content
                  }}
                >
                  <input
                    style={{
                      width: "22px",
                      height: "22px",
                      border: "1px solid gainsboro",
                      outline: "none",
                      marginRight: "8px",
                      borderRadius: "4px",
                      appearance: "none", // Remove default checkbox styling
                      backgroundColor: "white", // Set background to white
                      cursor: "pointer", // Change cursor to pointer for better UX
                    }}
                    type="checkbox"
                    className="uniquecheckbox"
                  />
                </th>
                <th
                  className="sticky-col"
                  style={{
                    width: "75px",
                    position: "sticky",
                    left: "53px",
                    top: "0",
                    zIndex: "1300",
                  }}
                >
                  <div
                    scrollleft="586"
                    class="x78zum5  x1yc453h   x6s0dn4 x972fbf xm81vs4 x1qhh985 "
                    role="columnheader"
                    tabindex="-1"
                    data-auto-logging-id="f13d0860d"
                  >
                    <div>
                      <div>
                        <div
                          aria-level="4"
                          class="x1xqt7ti xsuwoey x63nzvj xbsr9hj xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj x117nqv4 xeuugli x1uvtmcs"
                          role="heading"
                          data-interactable="|mouseover|"
                          id="js_2yg"
                        >
                          <div class="x1ua5tub x104kibb x1f6kntn x1h7i4cw xdy096k x195v057 x6ikm8r x10wlt62 x1yc453h xlyipyv xeaf4i8">
                            <div class="_3ea9">
                              Off/On
                              <span id="style-enRz6" class="style-enRz6">
                                <div id="style-MORL2" class="style-MORL2"></div>
                              </span>
                            </div>
                          </div>
                        </div>
                        <div data-visualcompletion="ignore" class="">
                          <div data-visualcompletion="ignore" class=""></div>
                        </div>
                      </div>
                      <div>
                        <div data-visualcompletion="ignore" class="">
                          <div></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </th>
                <th
                  className="vCampaign-campaign"
                  style={{
                    width: "300px",
                    position: "sticky",
                    left: "141px",
                    top: "0",
                    zIndex: "1300",
                  }}
                >
                  <div
                    scrollleft="586"
                    class="x78zum5  x1yc453h   x6s0dn4 x972fbf xm81vs4 x1qhh985 "
                    role="columnheader"
                    tabindex="-1"
                    data-auto-logging-id="f13d0860d"
                  >
                    <div>
                      <div>
                        <div
                          aria-level="4"
                          class="x1xqt7ti xsuwoey x63nzvj xbsr9hj xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj x117nqv4 xeuugli x1uvtmcs"
                          role="heading"
                          data-interactable="|mouseover|"
                          id="js_2yg"
                        >
                          <div class="x1ua5tub x104kibb x1f6kntn x1h7i4cw xdy096k x195v057 x6ikm8r x10wlt62 x1yc453h xlyipyv xeaf4i8">
                            <div class="_3ea9">
                              Campaign
                              <span id="style-enRz6" class="style-enRz6">
                                <div id="style-MORL2" class="style-MORL2"></div>
                              </span>
                            </div>
                          </div>
                        </div>
                        <div data-visualcompletion="ignore" class="">
                          <div data-visualcompletion="ignore" class=""></div>
                        </div>
                      </div>
                      <div>
                        <div data-visualcompletion="ignore" class="">
                          <div></div>
                        </div>
                      </div>
                    </div>
                    <div class="x10l6tqk xnx3k43">
                      <div class="x1pha0wt x78zum5 x2lwn1j xeuugli">
                        <div>
                          <button
                            aria-label="open sorting options drop-down menu"
                            class="x78zum5 x6s0dn4 xl56j7k x1nn3v0j xg83lxy x1120s5i x1h0ha7o x8j4wrb x1npaq5j x1c83p5e x1enjb0b x199158v xgcd1z6 x1ejq31n xd10rxx x1sy0etr x17r0tee xx8sgm8"
                            type="button"
                          >
                            <div class="xgxxoiu">
                              <i
                                alt=""
                                data-visualcompletion="css-img"
                                class="img style-LT5Ir"
                                id="style-LT5Ir"
                              ></i>
                            </div>
                            <span class="accessible_elem"> </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </th>
                <th
                  className="vCampaign-delivery"
                  style={{
                    width: "150px",
                    position: "sticky",
                    left: "454px",
                    top: "0",
                    zIndex: "1100",
                  }}
                >
                  <div
                    scrollleft="0"
                    sorting="ASC"
                    class="x78zum5 x1q0g3np x1yc453h x12peec7 x6s0dn4 x972fbf xm81vs4 x1qhh985 xm0m39n x13ys2tp x1g960bw"
                    role="columnheader"
                    tabindex="-1"
                    data-auto-logging-id="fede7eb4e"
                  >
                    <div data-visualcompletion="ignore" class=""></div>
                    <div></div>
                    <div
                      class="x78zum5 xdt5ytf xl56j7k x1n2onr6 style-Ufvnv"
                      id="style-Ufvnv"
                    >
                      <div
                        class="_643k style-N1v2S"
                        id="reporting_table_column_delivery"
                      >
                        <div
                          aria-level="4"
                          class="x1xqt7ti xsuwoey x63nzvj xbsr9hj xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj x117nqv4 xeuugli x1uvtmcs"
                          role="heading"
                          data-interactable="|mouseover|"
                          id="js_2j4"
                        >
                          <div class="x1ua5tub x104kibb x1f6kntn x1h7i4cw xdy096k x195v057 x6ikm8r x10wlt62 x1yc453h xlyipyv xeaf4i8">
                            <div class="_3ea9">
                              Delivery
                              <span id="style-ltFgb" class="style-ltFgb">
                                <i
                                  alt=""
                                  data-visualcompletion="css-img"
                                  class="img style-YBMcW"
                                  id="style-YBMcW"
                                ></i>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div data-visualcompletion="ignore" class="">
                          <div></div>
                        </div>
                      </div>
                    </div>
                    <div class="x10l6tqk xnx3k43">
                      <div class="x1pha0wt x78zum5 x2lwn1j xeuugli">
                        <div>
                          <button
                            aria-label="open sorting options drop-down menu"
                            class="x78zum5 x6s0dn4 xl56j7k x1nn3v0j xg83lxy x1120s5i x1h0ha7o x8j4wrb x1npaq5j x1c83p5e x1enjb0b x199158v xgcd1z6 x1ejq31n xd10rxx x1sy0etr x17r0tee xx8sgm8"
                            type="button"
                          >
                            <div class="xgxxoiu">
                              <i
                                alt=""
                                data-visualcompletion="css-img"
                                class="img style-rCYDd"
                                id="style-rCYDd"
                              ></i>
                            </div>
                            <span class="accessible_elem"> </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </th>
                {categories[selectedCategory].map((col) => (
                  <th
                    key={col}
                    className={`vCampaign-${col
                      .replace(/\s+/g, "—")
                      .toLowerCase()}`}
                    style={getColumnStyles(col, {
                      Results: 180, // Example custom width for Results
                      Reach: 160, // Example custom width for Reach
                      plus: 25,
                    })}
                  >
                    {col === "Results" ? (
                      <div>
                        <div
                          scrollleft="586"
                          class="x78zum5  x1yc453h   x6s0dn4 x972fbf xm81vs4 x1qhh985 "
                          role="columnheader"
                          tabindex="-1"
                          data-auto-logging-id="f13d0860d"
                        >
                          <div>
                            <div>
                              <div
                                aria-level="4"
                                class="x1xqt7ti xsuwoey x63nzvj xbsr9hj xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj x117nqv4 xeuugli x1uvtmcs"
                                role="heading"
                                data-interactable="|mouseover|"
                                id="js_2yg"
                              >
                                <div class="x1ua5tub x104kibb x1f6kntn x1h7i4cw xdy096k x195v057 x6ikm8r x10wlt62 x1yc453h xlyipyv xeaf4i8">
                                  <span
                                    aria-expanded="false"
                                    aria-label="information symbol, button, tap for more information"
                                    class="x1emribx"
                                  >
                                    <span id="js_9ig">
                                      <i
                                        alt=""
                                        data-visualcompletion="css-img"
                                        class="img style-lAmPe"
                                        id="style-lAmPe"
                                      ></i>
                                    </span>
                                  </span>
                                  <div class="_3ea9">
                                    {col}
                                    <span id="style-enRz6" class="style-enRz6">
                                      <div
                                        id="style-MORL2"
                                        class="style-MORL2"
                                      ></div>
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div data-visualcompletion="ignore" class="">
                                <div
                                  data-visualcompletion="ignore"
                                  class=""
                                ></div>
                              </div>
                            </div>
                            <div>
                              <div data-visualcompletion="ignore" class="">
                                <div></div>
                              </div>
                            </div>
                          </div>
                          <div class="x10l6tqk xnx3k43">
                            <div class="x1pha0wt x78zum5 x2lwn1j xeuugli">
                              <div>
                                <button
                                  aria-label="open sorting options drop-down menu"
                                  class="x78zum5 x6s0dn4 xl56j7k x1nn3v0j xg83lxy x1120s5i x1h0ha7o x8j4wrb x1npaq5j x1c83p5e x1enjb0b x199158v xgcd1z6 x1ejq31n xd10rxx x1sy0etr x17r0tee xx8sgm8"
                                  type="button"
                                >
                                  <div class="xgxxoiu">
                                    <i
                                      alt=""
                                      data-visualcompletion="css-img"
                                      class="img style-LT5Ir"
                                      id="style-LT5Ir"
                                    ></i>
                                  </div>
                                  <span class="accessible_elem"> </span>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : col === "plus" ? (
                      <div>
                        <div class="_3bwy snipcss-Idxlz">
                          <div class="_3bwx">
                            <div>
                              <a
                                class="xt0psk2 x1hl2dhg xt0b8zv xmi5d70 x1fvot60 xxio538 x1qsmy5i xq9mrsl x1yc453h x1h4wwuj x1fcty0u"
                                href="#"
                                data-auto-logging-id="fbc72b67d"
                              >
                                <div class="x1rg5ohu x67bb7w" id="js_4qe">
                                  <i
                                    alt="Customise columns..."
                                    aria-label="Customise columns..."
                                    data-visualcompletion="css-img"
                                    class="img style-hjUhk"
                                    id="style-hjUhk"
                                  >
                                    <u>Customise columns...</u>
                                  </i>
                                </div>
                              </a>
                            </div>
                          </div>
                          <div class="_3bwx"></div>
                        </div>
                      </div>
                    ) : (
                      <div
                        scrollleft="586"
                        class="x78zum5  x1yc453h   x6s0dn4 x972fbf xm81vs4 x1qhh985 "
                        role="columnheader"
                        tabindex="-1"
                        data-auto-logging-id="f13d0860d"
                      >
                        <div>
                          <div>
                            <div
                              aria-level="4"
                              class="x1xqt7ti xsuwoey x63nzvj xbsr9hj xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj x117nqv4 xeuugli x1uvtmcs"
                              role="heading"
                              data-interactable="|mouseover|"
                              id="js_2yg"
                            >
                              <div class="x1ua5tub x104kibb x1f6kntn x1h7i4cw xdy096k x195v057 x6ikm8r x10wlt62 x1yc453h xlyipyv xeaf4i8">
                                <div class="_3ea9">
                                  {col}
                                  <span id="style-enRz6" class="style-enRz6">
                                    <div
                                      id="style-MORL2"
                                      class="style-MORL2"
                                    ></div>
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div data-visualcompletion="ignore" class="">
                              <div
                                data-visualcompletion="ignore"
                                class=""
                              ></div>
                            </div>
                          </div>
                          <div>
                            <div data-visualcompletion="ignore" class="">
                              <div></div>
                            </div>
                          </div>
                        </div>
                        <div class="x10l6tqk xnx3k43">
                          <div class="x1pha0wt x78zum5 x2lwn1j xeuugli">
                            <div>
                              <button
                                aria-label="open sorting options drop-down menu"
                                class="x78zum5 x6s0dn4 xl56j7k x1nn3v0j xg83lxy x1120s5i x1h0ha7o x8j4wrb x1npaq5j x1c83p5e x1enjb0b x199158v xgcd1z6 x1ejq31n xd10rxx x1sy0etr x17r0tee xx8sgm8"
                                type="button"
                              >
                                <div class="xgxxoiu">
                                  <i
                                    alt=""
                                    data-visualcompletion="css-img"
                                    class="img style-LT5Ir"
                                    id="style-LT5Ir"
                                  ></i>
                                </div>
                                <span class="accessible_elem"> </span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}{" "}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {campaigns.map((campaign, index) => (
                <React.Fragment key={index}>
                  <tr
                    key={index}
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={handleMouseLeave}
                    style={{
                      position: "relative",
                    }}
                  >
                    <td
                      style={{
                        position: "sticky", // Make the column sticky
                        left: "0", // Fix the column to the left
                        zIndex: 999,
                        backgroundColor: "white",
                      }}
                    >
                      <input
                        style={{
                          width: "22px",
                          height: "22px",
                          border: "1px solid gainsboro",
                          outline: "none",
                          marginRight: "8px",
                          borderRadius: "4px",
                          appearance: "none", // Remove default checkbox styling
                          backgroundColor: "white", // Set background to white
                          cursor: "pointer", // Change cursor to pointer for better UX
                        }}
                        type="checkbox"
                        className="uniquecheckbox"
                      />
                    </td>
                    <td
                      style={{
                        position: "sticky", // Make the column sticky
                        left: "53px", // Fix the column to the left
                        zIndex: 999,
                        backgroundColor: "white",
                      }}
                    >
                      <div class="">
                        <div class="x6s0dn4 x78zum5 xl56j7k x2lwn1j xeuugli x5yr21d">
                          <div data-visualcompletion="ignore" class="">
                            <div>
                              <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x19lwn94 x1c4vz4f">
                                <div class="x1rg5ohu x1n2onr6 x3oybdh">
                                  <input
                                    aria-checked="true"
                                    aria-label="On/Off"
                                    role="switch"
                                    aria-describedby="js_aox"
                                    aria-labelledby="js_b2k"
                                    class="xjyslct x1ypdohk x5yr21d x17qophe xdj266r x11i5rnm xat24cr x1mh8g0r x1w3u9th x1t137rt x10l6tqk x13vifvy xh8yej3 x1vjfegm"
                                    id="js_aow"
                                    type="checkbox"
                                    value="true"
                                    checked=""
                                  />
                                  <div class="x1n2onr6 xh8yej3">
                                    <div class="x6s0dn4 x78zum5 x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x178xt8z xm81vs4 xso031l xy80clv xwebqov xvyu6v8 xrsgblv x10lij0i xzolkzo x12go9s9 x1rnf11y xprq8jg xo1l8bm xbsr9hj x1k4ywey x13dflua xxziih7 x12w9bfk x14qfxbe xexx8yu x4uap5 x18d9i69 xkhd6sd x15406qy">
                                      <div class=""></div>
                                      <div class="xw4jnvo x1qx5ct2 xzolkzo x12go9s9 x1rnf11y xprq8jg x13dflua x6o7n8i xxziih7 x12w9bfk xo1l8bm x140t73q x19bke7z x1psfjxj"></div>
                                    </div>
                                    <div class="xwebqov xvyu6v8 xrsgblv x10lij0i xzolkzo x12go9s9 x1rnf11y xprq8jg x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x178xt8z xm81vs4 xso031l xy80clv x13dflua x6o7n8i xxziih7 x12w9bfk xg01cxk x47corl x10l6tqk x17qophe xds687c x13vifvy x1ey2m1c x6ikm8r x10wlt62 xnl74ce xmb4j5p xdx8kah xwmxa91 xmn8db3 x8lbu6m x2te4dl x1bs8fl3 xhhp2wi x14q35kh x1wa3ocq x1n7iyjn x1t0di37 x1tt7eqi xe25xm5 xsp6npd x1s928wv x1w3onc2 x1j6awrg x9obomg x1ryaxvv x1hvfe8t x1te75w5"></div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td
                      style={{
                        position: "sticky", // Make the column sticky
                        left: "141px", // Fix the column to the left
                        zIndex: 999,
                        backgroundColor: "white",
                      }}
                    >
                      <div>
                        <div class="x9f619 x78zum5 xdj266r x11i5rnm xat24cr x1mh8g0r">
                          <div class="x1iyjqo2 x6ikm8r x10wlt62">
                            <div class="x78zum5">
                              <div
                                class="ellipsis _13is"
                                data-hover="tooltip"
                                data-tooltip-content="[11/30/2024] Promoting https://thesearchresults.xyz/cf/r/66fa3bbd9eb0fb0012e7a211"
                                data-tooltip-display="overflow"
                                data-tooltip-position="above"
                                data-tooltip-text-direction="auto"
                                id="js_bf9"
                              >
                                <div
                                  data-visualcompletion="ignore"
                                  class="xt0psk2"
                                ></div>
                                <span
                                  class=" "
                                  data-tracked="true"
                                  data-interactable="|mousedown||click|"
                                >
                                  <a
                                    class="xt0psk2 x1hl2dhg xt0b8zv xmi5d70 x1fvot60 xxio538 x1qsmy5i xq9mrsl x1yc453h x1h4wwuj x1fcty0u"
                                    href="#"
                                  >
                                    <span class="_3dfi _3dfj">
                                      {campaign?.campaingname}
                                    </span>
                                  </a>
                                </span>
                              </div>
                              <div data-visualcompletion="ignore" class="">
                                <a
                                  aria-label="Edit"
                                  class="xt0psk2 x1hl2dhg xt0b8zv xmi5d70 x1fvot60 xxio538 x1qsmy5i xq9mrsl x1yc453h x1h4wwuj x1fcty0u"
                                  href="#"
                                >
                                  <div class="_5_6n">
                                    <span class="_5_6o"></span>
                                  </div>
                                </a>
                              </div>
                            </div>
                            {(hoveredRow === index || index === 0) && (
                              <div data-visualcompletion="ignore" class="">
                                <div class="x1lliihq">
                                  <div id="style-NvCVa" class="style-NvCVa">
                                    <div class="x78zum5 x6ikm8r x10wlt62 x1n2onr6">
                                      <div class="_9p_z">
                                        <div class="_9p_y" role="toolbar">
                                          <div class="x78zum5 x2lwn1j xeuugli">
                                            <span
                                              class=" "
                                              data-tracked="true"
                                              data-interactable="|mousedown||click|"
                                            >
                                              <a
                                                aria-label="View Charts"
                                                class="xt0psk2 x1hl2dhg xt0b8zv xmi5d70 x1fvot60 xxio538 x1qsmy5i xq9mrsl x1yc453h x1h4wwuj x1fcty0u"
                                                href="#"
                                              >
                                                <span class="_3qjp">
                                                  <div class="x6s0dn4 x78zum5">
                                                    <div class="xw3qccf x1gslohp">
                                                      <i
                                                        alt=""
                                                        data-visualcompletion="css-img"
                                                        class="img style-mBbvW"
                                                        id="style-mBbvW"
                                                      ></i>
                                                    </div>
                                                    <span
                                                      onClick={() =>
                                                        handleViewChart(
                                                          campaign?._id
                                                        )
                                                      }
                                                      class="ellipsis"
                                                      data-tooltip-display="overflow"
                                                    >
                                                      View Charts
                                                    </span>
                                                  </div>
                                                </span>
                                              </a>
                                            </span>
                                            <span
                                              class=" "
                                              data-tracked="true"
                                              data-interactable="|mousedown||click|"
                                            >
                                              <a
                                                aria-label="Edit"
                                                class="xt0psk2 x1hl2dhg xt0b8zv xmi5d70 x1fvot60 xxio538 x1qsmy5i xq9mrsl x1yc453h x1h4wwuj x1fcty0u"
                                                href="#"
                                              >
                                                <span class="_3qjp">
                                                  <div class="x6s0dn4 x78zum5">
                                                    <div class="xw3qccf x1gslohp">
                                                      <i
                                                        alt=""
                                                        data-visualcompletion="css-img"
                                                        class="img style-RHBeZ"
                                                        id="style-RHBeZ"
                                                      ></i>
                                                    </div>
                                                    <span
                                                      onClick={() =>
                                                        handleViewEdit(
                                                          campaign?._id
                                                        )
                                                      }
                                                      class="ellipsis"
                                                      data-tooltip-display="overflow"
                                                    >
                                                      Edit
                                                    </span>
                                                  </div>
                                                </span>
                                              </a>
                                            </span>
                                            <span
                                              class=" "
                                              data-tracked="true"
                                              data-interactable="|mousedown||click|"
                                            >
                                              <a
                                                aria-label="Duplicate"
                                                class="xt0psk2 x1hl2dhg xt0b8zv xmi5d70 x1fvot60 xxio538 x1qsmy5i xq9mrsl x1yc453h x1h4wwuj x1fcty0u"
                                                href="#"
                                              >
                                                <span class="_3qjp">
                                                  <div class="x6s0dn4 x78zum5">
                                                    <div class="xw3qccf x1gslohp">
                                                      <i
                                                        alt=""
                                                        data-visualcompletion="css-img"
                                                        class="img style-eGddb"
                                                        id="style-eGddb"
                                                      ></i>
                                                    </div>
                                                    <span
                                                      class="ellipsis"
                                                      data-tooltip-display="overflow"
                                                    >
                                                      Duplicate
                                                    </span>
                                                  </div>
                                                </span>
                                              </a>
                                            </span>
                                            <span id="ads_manager_dcp_updated_inline_entry_point_nux39">
                                              <div>
                                                <div
                                                  data-visualcompletion="ignore"
                                                  class=""
                                                ></div>
                                              </div>
                                              <span
                                                class=" "
                                                data-tracked="true"
                                                data-interactable="|mousedown||click|"
                                              >
                                                <a
                                                  aria-label="Compare"
                                                  class="xt0psk2 x1hl2dhg xt0b8zv xmi5d70 x1fvot60 xxio538 x1qsmy5i xq9mrsl x1yc453h x1h4wwuj x1fcty0u"
                                                  href="#"
                                                >
                                                  <span class="_3qjp">
                                                    <div class="x6s0dn4 x78zum5">
                                                      <div class="xw3qccf x1gslohp">
                                                        <i
                                                          alt=""
                                                          data-visualcompletion="css-img"
                                                          class="img style-7Nnza"
                                                          id="style-7Nnza"
                                                        ></i>
                                                      </div>
                                                    </div>
                                                  </span>
                                                </a>
                                              </span>
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div
                                      aria-busy="false"
                                      aria-controls="js_ap5"
                                      aria-expanded="false"
                                      aria-haspopup="menu"
                                      class="x1i10hfl xjqpnuy xa49m3k xqeqjp1 x2hbi6w x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli x16tdsg8 xggy1nq x1ja2u2z x1t137rt x6s0dn4 x1ejq31n xd10rxx x1sy0etr x17r0tee x3nfvp2 xdl72j9 x1q0g3np x2lah0s x193iq5w x1n2onr6 x1hl2dhg x87ps6o xxymvpz xlh3980 xvmahel x1lku1pv x1g40iwv x1lcm9me x1yr5g0i xrt01vj x10y3i5r xo1l8bm xbsr9hj x1v911su xurb0ha x1sxyh0 xexx8yu x18d9i69"
                                      role="button"
                                      tabindex="0"
                                    >
                                      <span class="xmi5d70 x1fvot60 xxio538 x1heor9g xq9mrsl x1h4wwuj x1pd3egz xeuugli x1uvtmcs xh8yej3">
                                        <div class="x78zum5">
                                          <div
                                            class="x1qvwoe0 xjm9jq1 x1y332i5 xcwd3tp x1jyxor1 x39eecv x6ikm8r x10wlt62 x10l6tqk xuxw1ft x1i1rx1s"
                                            data-sscoverage-ignore="true"
                                          >
                                            Open Drop-down
                                          </div>
                                          <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1hc1fzr x13dflua x6o7n8i xxziih7 x12w9bfk xl56j7k xh8yej3">
                                            <div
                                              class="x3nfvp2 x120ccyz x1heor9g x2lah0s x1c4vz4f"
                                              role="presentation"
                                            >
                                              <div
                                                class="xtwfq29 style-xc1wS"
                                                id="style-xc1wS"
                                              ></div>
                                            </div>
                                            ​
                                          </div>
                                        </div>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td
                      style={{
                        position: "sticky", // Make the column sticky
                        left: "454px", // Fix the column to the left
                        zIndex: 999,
                        backgroundColor: "white",
                      }}
                    >
                      <span>
                        <div class="clearfix _ikh">
                          <div class="x6s0dn4 x78zum5 x1q0g3np x2lwn1j xeuugli">
                            <div class="x1yc453h x1kky2od x1y5rjcf">
                              <i
                                alt=""
                                data-visualcompletion="css-img"
                                class="img style-e6UJI"
                                id="style-e6UJI"
                              ></i>
                            </div>
                            <span class="xmi5d70 x1fvot60 xo1l8bm xxio538 xbsr9hj xq9mrsl x1h4wwuj xeuugli x1uvtmcs">
                              Active
                            </span>
                          </div>
                          <div class="_4bl7" style={{ border: "none" }}>
                            <div
                              class=" _1b33 _e9h _abu1"
                              style={{ border: "none" }}
                            >
                              <div class="_e9n" style={{ border: "none" }}>
                                <div class="" style={{ border: "none" }}>
                                  <div
                                    style={{ border: "none" }}
                                    geotextcolor="value"
                                    data-hover="tooltip"
                                    data-tooltip-display="overflow"
                                    data-tooltip-text-direction="auto"
                                    class="xmi5d70 x1fvot60 xo1l8bm xxio538 x1lliihq x6ikm8r x10wlt62 xlyipyv xuxw1ft xbsr9hj"
                                  >
                                    <span
                                      style={{ border: "none" }}
                                      class="x3nfvp2 xmix8c7 x1n2onr6 xqkyysk xlpv7t4 xzolkzo x12go9s9 x1rnf11y xprq8jg x6s0dn4 x1k2j06m x10ogl3i x1r0jzty x17zd0t2"
                                    >
                                      <span
                                        style={{ border: "none" }}
                                        class="x3nfvp2 xmix8c7 x1n2onr6 xqkyysk xlpv7t4 xzolkzo x12go9s9 x1rnf11y xprq8jg x6s0dn4 x1k2j06m x10ogl3i x1r0jzty x17zd0t2"
                                      >
                                        <div
                                          style={{ border: "none" }}
                                          class="x3nfvp2 x120ccyz x1heor9g"
                                          role="presentation"
                                        >
                                          <div
                                            style={{ border: "none" }}
                                            class="xtwfq29 style-OVWKk"
                                            id="style-OVWKk"
                                          ></div>
                                        </div>
                                        <div class="xmi5d70 xw23nyj x63nzvj x1heor9g x2b8uid xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj x117nqv4 xeuugli x1uvtmcs">
                                          High performing
                                        </div>
                                      </span>
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </span>
                    </td>
                    {categories[selectedCategory].map((header) => (
                      <td
                        style={{
                          color: "rgba(0, 0, 0, 0.8)",
                          fontSize: "14px",
                          fontWeight: 400,
                          lineHeight: "20px",
                          textAlign:
                            typeof campaign[fieldMapping[header]] === "number"
                              ? "right"
                              : "left", // Align numbers to the right
                        }}
                        key={header}
                      >
                        {(() => {
                          const value = campaign[fieldMapping[header]];
                          if (value == null) return "—"; // Return default placeholder if value is null/undefined
                          {
                            console.log(header);
                          }

                          if (header === "Budget") {
                            // Special case for Budget cell
                            return (
                              <div>
                                $
                                {value.toLocaleString(undefined, {
                                  minimumFractionDigits: 0,
                                  maximumFractionDigits: 2,
                                })}
                                <div
                                  style={{
                                    fontSize: "12px",
                                    color: "gray",
                                    marginTop: "2px",
                                  }}
                                >
                                  Daily
                                </div>
                              </div>
                            );
                          }
                          if (header === "CPC (cost per link click)") {
                            // Special case for Budget cell
                            return (
                              <div>
                                $
                                {value.toLocaleString(undefined, {
                                  minimumFractionDigits: 0,
                                  maximumFractionDigits: 2,
                                })}
                              </div>
                            );
                          }

                          if (header === "CPC (all)") {
                            // Special case for Budget cell
                            return (
                              <div>
                                $
                                {value.toLocaleString(undefined, {
                                  minimumFractionDigits: 0,
                                  maximumFractionDigits: 2,
                                })}
                              </div>
                            );
                          }
                          if (header === "CTR (all)") {
                            // Special case for Budget cell
                            return (
                              <div>
                                {value.toLocaleString(undefined, {
                                  minimumFractionDigits: 0,
                                  maximumFractionDigits: 2,
                                })}
                                %
                              </div>
                            );
                          }

                          if (header === "CPM (cost per 1,000 impressions)") {
                            // Special case for Budget cell
                            return (
                              <div>
                                $
                                {value.toLocaleString(undefined, {
                                  minimumFractionDigits: 0,
                                  maximumFractionDigits: 2,
                                })}
                              </div>
                            );
                          }

                          if (header === "CTR (link click-through rate)") {
                            // Special case for Budget cell
                            return (
                              <div>
                                {value.toLocaleString(undefined, {
                                  minimumFractionDigits: 0,
                                  maximumFractionDigits: 2,
                                })}
                                %
                              </div>
                            );
                          }
                          if (header === "Results") {
                            // Special case for Budget cell
                            return (
                              <div>
                                {value.toLocaleString(undefined, {
                                  minimumFractionDigits: 0,
                                  maximumFractionDigits: 2,
                                })}
                                <div
                                  style={{
                                    fontSize: "12px",
                                    color: "#555",
                                    marginTop: "2px",
                                  }}
                                >
                                  Link clicks
                                </div>
                              </div>
                            );
                          }
                          if (header === "Cost per result") {
                            // Special case for Budget cell
                            return (
                              <div>
                                {value.toLocaleString(undefined, {
                                  minimumFractionDigits: 0,
                                  maximumFractionDigits: 2,
                                })}
                                <div
                                  style={{
                                    fontSize: "12px",
                                    color: "#555",
                                    marginTop: "2px",
                                  }}
                                >
                                  Per link clicks
                                </div>
                              </div>
                            );
                          }
                          if (header === "Amount spent") {
                            // Special case for Budget cell
                            return (
                              <div>
                                $
                                {value.toLocaleString(undefined, {
                                  minimumFractionDigits: 0,
                                  maximumFractionDigits: 2,
                                })}
                              </div>
                            );
                          }

                          if (typeof value === "number") {
                            // Check if the value is a number
                            return value.toLocaleString(undefined, {
                              minimumFractionDigits: 0,
                              maximumFractionDigits: 2,
                            });
                          }

                          return value; // Return non-numeric values as-is
                        })()}
                      </td>
                    ))}
                  </tr>
                  {showPerformanceRows &&
                    Array.from({ length: 11 }).map((_, subIndex) => {
                      const rowData = [
                        "Facebook Facebook profile feed In-app",
                        "Facebook Facebook feed Desktop",
                        "Facebook Marketplace In-app",
                        "Facebook Search results In-app",
                        "Facebook Feed: video feeds In-app",
                        "Facebook Facebook feed Mobile Web",
                        "Facebook Marketplace Mobile Web",
                        "Facebook Facebook feed In-app",
                        "Facebook Marketplace Desktop",
                        "Facebook Search results Mobile Web",
                        "Facebook Facebook Stories In-app",
                      ][subIndex];

                      const rowPercentages = {
                        "Facebook Facebook profile feed In-app": 19,
                        "Facebook Facebook feed Desktop": 7,
                        "Facebook Marketplace In-app": 14,
                        "Facebook Search results In-app": 16,
                        "Facebook Feed: video feeds In-app": 4,
                        "Facebook Facebook feed Mobile Web": 2,
                        "Facebook Marketplace Mobile Web": 1,
                        "Facebook Facebook feed In-app": 20,
                        "Facebook Marketplace Desktop": 6,
                        "Facebook Search results Mobile Web": 3,
                        "Facebook Facebook Stories In-app": 8,
                      };

                      const resultValue =
                        campaign[fieldMapping["Results"]] || 0;
                      const reachValue = campaign[fieldMapping["Reach"]] || 0;
                      const impressionValue =
                        campaign[fieldMapping["Impressions"]] || 0;
                      const amountSpentValue =
                        campaign[fieldMapping["Amount spent"]] || 0;
                      const linkClicksValue =
                        campaign[fieldMapping["Link clicks"]] || 0;
                      const clicksAllValue =
                        campaign[fieldMapping["Clicks (all)"]] || 0;

                      const calculatePercentage = (value, percentage) => {
                        const result = (value * percentage) / 100;
                        return Math.round(result).toLocaleString(); // Format as integer with commas
                      };

                      const calculateCPM = (amountSpent, impressions) => {
                        if (!impressions || impressions === 0) {
                          return "—";
                        }
                        const cpm = (amountSpent / impressions) * 1000;
                        return cpm.toFixed(2);
                      };

                      const calculateCPC = (amountSpent, clicks) => {
                        if (!clicks || clicks === 0) {
                          return "—";
                        }
                        const cpc = amountSpent / clicks;
                        return cpc.toFixed(2);
                      };

                      const calculateCTR = (clicks, impressions) => {
                        if (!impressions || impressions === 0) {
                          return "—";
                        }
                        const ctr = (clicks / impressions) * 100;
                        return ctr.toFixed(2);
                      };
                      const calculateCostPerResult = (amountSpent, results) => {
                        if (!results || results === 0) {
                          return "—"; // Avoid division by zero
                        }
                        const costPerResult = amountSpent / results;
                        return costPerResult.toFixed(2); // Format to 2 decimal places
                      };

                      const adjustValue = (value, adjustment) => {
                        // Check if the value is a valid number
                        const numericValue = parseFloat(value);
                        if (isNaN(numericValue)) {
                          return value; // Return the original value if it's not a number (e.g., "—")
                        }
                        const adjusted = numericValue + adjustment;
                        return adjusted.toFixed(2); // Return the adjusted value with 2 decimal places
                      };

                      // Determine adjustment value for the current row
                      let adjustment = 0;
                      switch (rowData.trim()) {
                        case "Facebook Facebook profile feed In-app":
                          adjustment = 0.03;
                          break;
                        case "Facebook Facebook feed Desktop":
                          adjustment = 0.02;
                          break;
                        case "Facebook Marketplace In-app":
                          adjustment = -0.01;
                          break;
                        case "Facebook Feed: video feeds In-app":
                          adjustment = 0.06;
                          break;
                        case "Facebook Facebook feed Mobile Web":
                          adjustment = 0.03;
                          break;
                        case "Facebook Marketplace Mobile Web":
                          adjustment = 0.04;
                          break;
                        case "Facebook Facebook feed In-app":
                          adjustment = -0.07;
                          break;
                        case "Facebook Marketplace Desktop":
                          adjustment = 0.01;
                          break;
                        case "Facebook Search results Mobile Web":
                          adjustment = 0.05;
                          break;
                        case "Facebook Facebook Stories In-app":
                          adjustment = -0.03;
                          break;
                        default:
                          adjustment = 0; // No adjustment for Facebook Search results In-app
                      }

                      return (
                        <tr key={`sub-${subIndex}`}>
                          <td
                            style={{
                              height: "30px",
                              zIndex: "1000",
                              position: "sticky",
                              left: "0",
                              backgroundColor: "white",
                            }}
                          ></td>
                          <td
                            style={{
                              height: "30px",
                              zIndex: "1000",
                              position: "sticky",
                              left: "53px",
                              backgroundColor: "white",
                            }}
                          ></td>
                          <td
                            style={{
                              color: "rgba(0, 0, 0, 0.8)",
                              fontSize: "14px",
                              fontWeight: 400,
                              lineHeight: "20px",
                              position: "sticky",
                              backgroundColor: "white",
                              left: "141px",
                              zIndex: "1100px",
                            }}
                          >
                            {rowData}
                          </td>
                          <td
                            style={{
                              position: "sticky",
                              left: "454px",
                              zIndex: "1100px",
                              backgroundColor: "white",
                            }}
                          ></td>
                          {categories[selectedCategory].map((header) => (
                            <td
                              style={{
                                color: "rgba(0, 0, 0, 0.8)",
                                fontSize: "14px",
                                fontWeight: 400,
                                lineHeight: "20px",
                                textAlign: "right",
                              }}
                              key={header}
                            >
                              {header === "Attribution setting"
                                ? campaign[fieldMapping[header]] || "—"
                                : header === "Results" &&
                                  rowPercentages[rowData]
                                ? calculatePercentage(
                                    resultValue,
                                    rowPercentages[rowData]
                                  )
                                : header === "Reach" && rowPercentages[rowData]
                                ? calculatePercentage(
                                    reachValue,
                                    rowPercentages[rowData]
                                  )
                                : header === "Impressions" &&
                                  rowPercentages[rowData]
                                ? calculatePercentage(
                                    impressionValue,
                                    rowPercentages[rowData]
                                  )
                                : header === "Amount spent" &&
                                  rowPercentages[rowData]
                                ? `$${adjustValue(
                                    calculatePercentage(
                                      amountSpentValue,
                                      rowPercentages[rowData]
                                    ),
                                    adjustment
                                  )}`
                                : header === "Link clicks" &&
                                  rowPercentages[rowData]
                                ? calculatePercentage(
                                    linkClicksValue,
                                    rowPercentages[rowData]
                                  )
                                : header === "CPM (cost per 1,000 impressions)"
                                ? adjustValue(
                                    calculateCPM(
                                      amountSpentValue,
                                      impressionValue
                                    ),
                                    adjustment
                                  )
                                : header === "Cost per result" &&
                                  rowPercentages[rowData]
                                ? `$${adjustValue(
                                    calculateCostPerResult(
                                      amountSpentValue,
                                      calculatePercentage(
                                        resultValue,
                                        rowPercentages[rowData]
                                      ).replaceAll(",", "") // Remove commas for numeric calculation
                                    ),
                                    adjustment
                                  )}`
                                : header === "CPC (cost per link click)"
                                ? adjustValue(
                                    calculateCPC(
                                      amountSpentValue,
                                      linkClicksValue
                                    ),
                                    adjustment
                                  )
                                : header === "CTR (link click-through rate)"
                                ? adjustValue(
                                    calculateCTR(
                                      linkClicksValue,
                                      impressionValue
                                    ),
                                    adjustment
                                  )
                                : header === "Clicks (all)" &&
                                  rowPercentages[rowData]
                                ? calculatePercentage(
                                    clicksAllValue,
                                    rowPercentages[rowData]
                                  )
                                : header === "CTR (all)"
                                ? adjustValue(
                                    calculateCTR(
                                      clicksAllValue,
                                      impressionValue
                                    ),
                                    adjustment
                                  )
                                : header === "CPC (all)"
                                ? adjustValue(
                                    calculateCPC(
                                      amountSpentValue,
                                      clicksAllValue
                                    ),
                                    adjustment
                                  )
                                : ""}{" "}
                            </td>
                          ))}
                        </tr>
                      );
                    })}
                </React.Fragment>
              ))}
            </tbody>
            <tfoot style={{ backgroundColor: "white" }}>
              <tr style={{ backgroundColor: "white" }}>
                {/* First four columns */}
                <td
                  style={{
                    backgroundColor: "white",
                    position: "sticky",
                    left: "0",
                    zIndex: "1300",
                  }}
                  colSpan="2"
                ></td>{" "}
                {/* Checkbox */}
                <td
                  colSpan="1"
                  style={{
                    position: "sticky",
                    left: "141px",
                    zIndex: "1300",
                  }}
                >
                  <div class="">
                    <div class="_e9n">
                      <div class="">
                        <div
                          geotextcolor="value"
                          data-hover="tooltip"
                          data-tooltip-display="overflow"
                          data-tooltip-text-direction="auto"
                          class="xmi5d70 x1fvot60 xo1l8bm xxio538 x1lliihq x6ikm8r x10wlt62 xlyipyv xuxw1ft xbsr9hj"
                        >
                          <div class="x1cy8zhl x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 xs83m0k x19lwn94">
                            Results from {campaigns?.length} campaigns
                            <div
                              aria-expanded="false"
                              aria-label="information symbol, button, tap for more information"
                              tabindex="0"
                              role="button"
                            >
                              <div class="x1rg5ohu x67bb7w">
                                <div class="xmi5d70 x1fvot60 xxio538 xbsr9hj xq9mrsl x1h4wwuj x1fcty0u x78zum5 xl56j7k x6s0dn4">
                                  <span>​</span>
                                  <div class="xjm9jq1 x78zum5 xl56j7k x6s0dn4">
                                    <div class="x78zum5 x1ypdohk x1uuroth x67bb7w xsgj6o6 xw3qccf">
                                      <div
                                        class="x3nfvp2 x120ccyz x4s1yf2"
                                        role="presentation"
                                      >
                                        <div
                                          class="xtwfq29 style-TsosY"
                                          id="style-TsosY"
                                        ></div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          class="ellipsis _1ha4"
                          data-hover="tooltip"
                          data-tooltip-display="overflow"
                          data-tooltip-text-direction="auto"
                        >
                          <div class="xt0psk2 xmi5d70 xw23nyj xo1l8bm x63nzvj x1541jtf">
                            Excludes deleted items
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </td>{" "}
                {/* Campaign */}
                <td
                  colSpan="1"
                  style={{
                    position: "sticky",
                    left: "454px",
                    zIndex: "1300",
                  }}
                ></td>{" "}
                {/* Delivery */}
                {/* Dynamically render the rest of the footer columns based on categories */}
                {categories[selectedCategory].map((header, index) => (
                  <td key={`footer-${index}`}>
                    {header === "Bid strategy" ? (
                      ""
                    ) : header === "Budget" ? (
                      ""
                    ) : header === "Attribution setting" ? (
                      <div>
                        <div class="">
                          <div class="_e9n">
                            <div class="">
                              <div
                                geotextcolor="value"
                                data-hover="tooltip"
                                data-tooltip-display="overflow"
                                data-tooltip-text-direction="auto"
                                class="xmi5d70 x1fvot60 xo1l8bm xxio538 x1lliihq x6ikm8r x10wlt62 xlyipyv xuxw1ft xbsr9hj"
                                id="js_1hd"
                              >
                                7-day click or 1-day view
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : header === "plus" ? (
                      <div>
                        <div class="">
                          <div class="_e9n">
                            <div class="">
                              <div
                                geotextcolor="value"
                                data-hover="tooltip"
                                data-tooltip-display="overflow"
                                data-tooltip-text-direction="auto"
                                class="xmi5d70 x1fvot60 xo1l8bm xxio538 x1lliihq x6ikm8r x10wlt62 xlyipyv xuxw1ft xbsr9hj"
                                id="js_1hd"
                              ></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : header === "Results" ? (
                      <div>
                        <div class="" style={{ textAlign: "right" }}>
                          <div class="_e9n">
                            <div class="">
                              <div
                                geotextcolor="value"
                                data-hover="tooltip"
                                data-tooltip-display="overflow"
                                data-tooltip-text-direction="auto"
                                class="xmi5d70 x1fvot60 xo1l8bm xxio538 x1lliihq x6ikm8r x10wlt62 xlyipyv xuxw1ft xbsr9hj"
                              >
                                <span>
                                  {Number(totalResults).toLocaleString()}
                                </span>
                              </div>
                              <div
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
                        </div>
                      </div>
                    ) : header === "Reach" ? (
                      <div>
                        <div style={{ textAlign: "right" }}>
                          <div class="_e9n">
                            <div class="">
                              <div
                                geotextcolor="value"
                                data-hover="tooltip"
                                data-tooltip-display="overflow"
                                data-tooltip-text-direction="auto"
                                class="xmi5d70 x1fvot60 xo1l8bm xxio538 x1lliihq x6ikm8r x10wlt62 xlyipyv xuxw1ft xbsr9hj"
                              >
                                <div class="x1rg5ohu x67bb7w">
                                  <span id="style-dDOf7" class="style-dDOf7">
                                    {Number(totalReach).toLocaleString()}
                                  </span>
                                </div>
                              </div>
                              <div
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
                        </div>
                      </div>
                    ) : header === "Impressions" ? (
                      <div>
                        <div class="" style={{ textAlign: "right" }}>
                          <div class="_e9n">
                            <div class="">
                              <div
                                geotextcolor="value"
                                data-hover="tooltip"
                                data-tooltip-display="overflow"
                                data-tooltip-text-direction="auto"
                                class="xmi5d70 x1fvot60 xo1l8bm xxio538 x1lliihq x6ikm8r x10wlt62 xlyipyv xuxw1ft xbsr9hj"
                              >
                                {Number(totalImpressions).toLocaleString()}
                                <span></span>
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
                        </div>
                      </div>
                    ) : header === "Cost per result" ? (
                      <div>
                        <div class="" style={{ textAlign: "right" }}>
                          <div class="_e9n">
                            <div class="">
                              <div
                                geotextcolor="value"
                                data-hover="tooltip"
                                data-tooltip-display="overflow"
                                data-tooltip-text-direction="auto"
                                class="xmi5d70 x1fvot60 xo1l8bm xxio538 x1lliihq x6ikm8r x10wlt62 xlyipyv xuxw1ft xbsr9hj"
                              >
                                <span>${largestCostPerResult?.toFixed(2)}</span>
                              </div>
                              <div
                                class="ellipsis _1ha4"
                                data-hover="tooltip"
                                data-tooltip-display="overflow"
                                data-tooltip-text-direction="auto"
                              >
                                <div class="xt0psk2 xmi5d70 xw23nyj xo1l8bm x63nzvj x1541jtf">
                                  Per link click
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : header === "Amount spent" ? (
                      <div>
                        <div class="" style={{ textAlign: "right" }}>
                          <div class="_e9n">
                            <div class="">
                              <div
                                geotextcolor="value"
                                data-hover="tooltip"
                                data-tooltip-display="overflow"
                                data-tooltip-text-direction="auto"
                                class="xmi5d70 x1fvot60 xo1l8bm xxio538 x1lliihq x6ikm8r x10wlt62 xlyipyv xuxw1ft xbsr9hj"
                              >
                                <span>
                                  $
                                  {Number(totalAmountSpent).toLocaleString(
                                    undefined,
                                    {
                                      minimumFractionDigits: 2,
                                      maximumFractionDigits: 2,
                                    }
                                  )}
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
                        </div>
                      </div>
                    ) : header === "Ends" ? (
                      <div></div>
                    ) : header === "Schedule" ? (
                      <div></div>
                    ) : header === "CPM (cost per 1,000 impressions)" ? (
                      <div>
                        <div class="" style={{ textAlign: "right" }}>
                          <div class="_e9n">
                            <div class="">
                              <div
                                geotextcolor="value"
                                data-hover="tooltip"
                                data-tooltip-display="overflow"
                                data-tooltip-text-direction="auto"
                                class="xmi5d70 x1fvot60 xo1l8bm xxio538 x1lliihq x6ikm8r x10wlt62 xlyipyv xuxw1ft xbsr9hj"
                              >
                                <span>${tatalCPMCost?.toFixed(2)}</span>
                              </div>
                              <div
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
                        </div>
                      </div>
                    ) : header === "Link clicks" ? (
                      <div>
                        <div class="" style={{ textAlign: "right" }}>
                          <div class="_e9n">
                            <div class="">
                              <div
                                geotextcolor="value"
                                data-hover="tooltip"
                                data-tooltip-display="overflow"
                                data-tooltip-text-direction="auto"
                                class="xmi5d70 x1fvot60 xo1l8bm xxio538 x1lliihq x6ikm8r x10wlt62 xlyipyv xuxw1ft xbsr9hj"
                              >
                                <span>{LinkClicksAll?.toLocaleString()}</span>
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
                        </div>
                      </div>
                    ) : header === "CPC (cost per link click)" ? (
                      <div>
                        <div class="" style={{ textAlign: "right" }}>
                          <div class="_e9n">
                            <div class="">
                              <div
                                geotextcolor="value"
                                data-hover="tooltip"
                                data-tooltip-display="overflow"
                                data-tooltip-text-direction="auto"
                                class="xmi5d70 x1fvot60 xo1l8bm xxio538 x1lliihq x6ikm8r x10wlt62 xlyipyv xuxw1ft xbsr9hj"
                              >
                                <span>${totalCPCImpression?.toFixed(2)}</span>
                              </div>
                              <div
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
                        </div>
                      </div>
                    ) : header === "CTR (link click-through rate)" ? (
                      <div>
                        <div class="" style={{ textAlign: "right" }}>
                          <div class="_e9n">
                            <div class="">
                              <div
                                geotextcolor="value"
                                data-hover="tooltip"
                                data-tooltip-display="overflow"
                                data-tooltip-text-direction="auto"
                                class="xmi5d70 x1fvot60 xo1l8bm xxio538 x1lliihq x6ikm8r x10wlt62 xlyipyv xuxw1ft xbsr9hj"
                              >
                                <span>{totalCTRImpression?.toFixed(2)}%</span>
                              </div>
                              <div
                                class="ellipsis _1ha4"
                                data-hover="tooltip"
                                data-tooltip-display="overflow"
                                data-tooltip-text-direction="auto"
                              >
                                <div class="xt0psk2 xmi5d70 xw23nyj xo1l8bm x63nzvj x1541jtf">
                                  Per Impressions
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : header === "Clicks (all)" ? (
                      <div>
                        <div class="" style={{ textAlign: "right" }}>
                          <div class="_e9n">
                            <div class="">
                              <div
                                geotextcolor="value"
                                data-hover="tooltip"
                                data-tooltip-display="overflow"
                                data-tooltip-text-direction="auto"
                                class="xmi5d70 x1fvot60 xo1l8bm xxio538 x1lliihq x6ikm8r x10wlt62 xlyipyv xuxw1ft xbsr9hj"
                              >
                                <span>{tatalClicksAll?.toLocaleString()}</span>
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
                        </div>
                      </div>
                    ) : header === "CTR (all)" ? (
                      <div>
                        <div class="" style={{ textAlign: "right" }}>
                          <div class="_e9n">
                            <div class="">
                              <div
                                geotextcolor="value"
                                data-hover="tooltip"
                                data-tooltip-display="overflow"
                                data-tooltip-text-direction="auto"
                                class="xmi5d70 x1fvot60 xo1l8bm xxio538 x1lliihq x6ikm8r x10wlt62 xlyipyv xuxw1ft xbsr9hj"
                              >
                                <span>{totalCTRAll?.toFixed(2)}%</span>
                              </div>
                              <div
                                class="ellipsis _1ha4"
                                data-hover="tooltip"
                                data-tooltip-display="overflow"
                                data-tooltip-text-direction="auto"
                              >
                                <div class="xt0psk2 xmi5d70 xw23nyj xo1l8bm x63nzvj x1541jtf">
                                  Per Impressions
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : header === "CPC (all)" ? (
                      <div>
                        <div class="" style={{ textAlign: "right" }}>
                          <div class="_e9n">
                            <div class="">
                              <div
                                geotextcolor="value"
                                data-hover="tooltip"
                                data-tooltip-display="overflow"
                                data-tooltip-text-direction="auto"
                                class="xmi5d70 x1fvot60 xo1l8bm xxio538 x1lliihq x6ikm8r x10wlt62 xlyipyv xuxw1ft xbsr9hj"
                              >
                                <span>${totalCPCAll?.toFixed(2)}</span>
                              </div>
                              <div
                                class="ellipsis _1ha4"
                                data-hover="tooltip"
                                data-tooltip-display="overflow"
                                data-tooltip-text-direction="auto"
                              >
                                <div class="xt0psk2 xmi5d70 xw23nyj xo1l8bm x63nzvj x1541jtf">
                                  Per Click
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      header
                    )}
                  </td>
                ))}
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CompaingsData;

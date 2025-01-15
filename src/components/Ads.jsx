import React, { useEffect, useState } from "react";
import "../styles/Ads.css";
import { Switch, Table } from "antd";
import axios from "axios";
import { ChevronRightIcon } from "@heroicons/react/24/solid";

import {
  BarChartOutlined,
  CaretDownOutlined,
  FileTextOutlined,
  PushpinOutlined,
} from "@ant-design/icons";
import EditImage from "../assets/edit.png";
import { Link } from "react-router-dom";
const Ads = ({ campaigns, loading, error }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isHoveredPeformance, setIsHoveredPerformance] = useState(false);
  const [ishoverEngagement, setIsHoveredEngagement] = useState(false);
  const [ishoverDelivery, setIsHoveredDelivery] = useState(false);
  const [ishovervedioengagement, setIsHoveredvedioengagement] = useState(false);
  const [showcustomizedbanner, setShowCustumizeBanner] = useState(false);
  const [showPerformanceAndClicks, setShowPerformanceAndClicks] =
    useState("performance");
  // Event handlers to toggle state
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  const handleMouseEnterPerformance = () => {
    setIsHoveredPerformance(true);
  };

  const handleMouseLeavePerformance = () => {
    setIsHoveredPerformance(false);
  };
  const handleCloseBannerPerformance = () => {
    setShowPerformanceAndClicks("performance");
    setShowCustumizeBanner(false);
    setIsHovered(false);
    setIsHoveredPerformance(false);
    setIsHoveredEngagement(false);
    setIsHoveredDelivery(false);
    setIsHoveredvedioengagement(false);
  };

  const handleMouseEnterEngagement = () => {
    setIsHoveredEngagement(true);
  };

  const handleMouseLeaveEngagement = () => {
    setIsHoveredEngagement(false);
  };
  const handleCloseBannerPerformanceandClicks = () => {
    setShowPerformanceAndClicks("performanceandclicks");
    setShowCustumizeBanner(false);
    setIsHovered(false);
    setIsHoveredPerformance(false);
    setIsHoveredEngagement(false);
    setIsHoveredDelivery(false);
    setIsHoveredvedioengagement(false);
  };
  const handleCloseBannerEngagement = () => {
    setShowPerformanceAndClicks("engagement");
    setShowCustumizeBanner(false);
    setIsHoveredPerformance(false);
    setIsHoveredEngagement(false);
    setIsHoveredDelivery(false);
    setIsHoveredvedioengagement(false);
  };

  // Delivery start here

  const handleCloseBannerDelivery = () => {
    setShowPerformanceAndClicks("delivery");
    setShowCustumizeBanner(false);
    setIsHoveredPerformance(false);
    setIsHoveredEngagement(false);
    setIsHoveredDelivery(false);
    setIsHoveredvedioengagement(false);
  };
  const handleMouseEnterDelivery = () => {
    setIsHoveredDelivery(true);
  };
  const handleMouseLeaveDelivery = () => {
    setIsHoveredDelivery(false);
  };

  //Vedio end here
  // Vedio start here

  const handleCloseBannervideoEngagement = () => {
    setShowPerformanceAndClicks("videoengagement");
    setShowCustumizeBanner(false);
    setIsHoveredPerformance(false);
    setIsHoveredEngagement(false);
    setIsHoveredDelivery(false);
    setIsHoveredvedioengagement(false);
  };
  const handleMouseEntervideoEngagement = () => {
    setIsHoveredvedioengagement(true);
  };
  const handleMouseLeavevideoEngagement = () => {
    setIsHoveredvedioengagement(false);
  };
  const perfomarnaceandclicks = () => {
    setShowPerformanceAndClicks("performanceandclicks");
  };
  const FormatNumbers = (entrynum) => {
    let nf = new Intl.NumberFormat();
    return nf.format(entrynum); // "1,234,567,890"
  };
  const [togglebutton, settogglebutton] = useState(false);

  console.log(campaigns);
  const truncateText = (text, charLimit = 30) => {
    if (text?.length > charLimit) {
      return text.slice(0, charLimit) + "...";
    }
    return text;
  };
  const columns = [
    {
      title: () => (
        <input
          style={{ width: "30px", height: "23px", border: "1px solid #f5f4f4" }}
          type="checkbox"
        />
      ),
      width: 50,
      key: "checkbox",
      fixed: "left",
      render: () => (
        <input
          style={{ width: "30px", height: "23px", border: "1px solid #f5f4f4" }}
          type="checkbox"
        />
      ),
    },
    {
      title: "Off/On",
      width: 70,
      dataIndex: "currentSwitch",
      key: "currentSwitch",
      fixed: "left",
      render: (text, record) => (
        <div onClick={() => settogglebutton((prev) => !prev)}>
          {record.currentSwitch === false ? (
            <div class="x6s0dn4 x78zum5 x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x178xt8z xm81vs4 xso031l xy80clv xwebqov xvyu6v8 xrsgblv x10lij0i xzolkzo x12go9s9 x1rnf11y xprq8jg x1gzqxud xbsr9hj x13dflua xxziih7 x12w9bfk x14qfxbe xexx8yu x4uap5 x18d9i69 xkhd6sd x15406qy snipcss-5XQZY">
              <div class=""></div>
              <div class="xw4jnvo x1qx5ct2 x12y6twl x1h45990 xzolkzo x12go9s9 x1rnf11y xprq8jg x13dflua x6o7n8i xxziih7 x12w9bfk x4s1yf2"></div>
            </div>
          ) : (
            <div data-visualcompletion="ignore" class="">
              <div>
                <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x19lwn94 x1c4vz4f">
                  <div class="x1rg5ohu x1n2onr6 x3oybdh">
                    <input
                      aria-checked="true"
                      aria-label="On/Off"
                      role="switch"
                      aria-describedby="js_36"
                      aria-labelledby="js_34"
                      class="xjyslct x1ypdohk x5yr21d x17qophe xdj266r x11i5rnm xat24cr x1mh8g0r x1w3u9th x1t137rt x10l6tqk x13vifvy xh8yej3 x1vjfegm"
                      id="js_35"
                      type="checkbox"
                      value="true"
                      checked=""
                    />
                    <div class="x1n2onr6 xh8yej3">
                      <div class="x6s0dn4 x78zum5 x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x178xt8z xm81vs4 xso031l xy80clv xwebqov xvyu6v8 xrsgblv x10lij0i xzolkzo x12go9s9 x1rnf11y xprq8jg xo1l8bm xbsr9hj x1k4ywey x13dflua xxziih7 x12w9bfk x14qfxbe xexx8yu x4uap5 x18d9i69 xkhd6sd x15406qy">
                        <div class=""></div>
                        <div class="xw4jnvo x1qx5ct2 x1h45990 xzolkzo x12go9s9 x1rnf11y xprq8jg x13dflua x6o7n8i xxziih7 x12w9bfk x1qsmy5i x1psfjxj"></div>
                      </div>
                      <div class="xwebqov xvyu6v8 xrsgblv x10lij0i xzolkzo x12go9s9 x1rnf11y xprq8jg x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x178xt8z xm81vs4 xso031l xy80clv x13dflua x6o7n8i xxziih7 x12w9bfk xg01cxk x47corl x10l6tqk x17qophe xds687c x13vifvy x1ey2m1c x6ikm8r x10wlt62 xnl74ce xmb4j5p xdx8kah xwmxa91 xmn8db3 x8lbu6m x2te4dl x1bs8fl3 xhhp2wi x14q35kh x1wa3ocq x1n7iyjn x1t0di37 x1tt7eqi xe25xm5 xsp6npd x1s928wv x1w3onc2 x1j6awrg x9obomg x1ryaxvv x1hvfe8t x1te75w5"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      ),
    },
    {
      title: (
        <div className="resulsconainer">
          {" "}
          <div>Ad</div>
          <div>
            <CaretDownOutlined style={{ color: "gray" }} color="red" />
          </div>{" "}
        </div>
      ),
      dataIndex: "campainglink",
      key: "campainglink",
      fixed: "left",
      width: 350,
      render: (text, record) => (
        <>
          <div
            style={{ display: "flex", alignItems: "center" }}
            className="mainparentcontainer"
          >
            <div style={{ width: "35px", height: "32px", marginRight: "5px" }}>
              <img
                style={{ width: "100%", height: "100%", objectFit: "contain" }}
                src={record.campaingImage}
                alt=""
              />
            </div>
            <div>
              <div
                style={{ overflow: "hidden" }}
                className="campaign-name-cell"
              >
                <div
                  style={{ display: "flex", alignItems: "center" }}
                  className="campaign-name"
                >
                  <div class="_62i0 snipcss-9NrJ2">
                    <div
                      class="ellipsis _13is"
                      data-hover="tooltip"
                      data-tooltip-content="Promoting website: https://thesearchguide.xyz/cf/r/661b84e19cfeda0012066a3c?ad_id={{ad.id}}&amp;adset_id={{adset.id}}&amp;campaign_id..."
                      data-tooltip-display="overflow"
                      data-tooltip-position="above"
                      data-tooltip-text-direction="auto"
                      id="js_5hd"
                    >
                      <div data-visualcompletion="ignore" class="xt0psk2"></div>
                      <div class="xt0psk2 xmi5d70 x1fvot60 xo1l8bm xxio538 xbsr9hj">
                        <span class="_3dfi _3dfj">
                          {truncateText(text, 40)}
                        </span>
                      </div>
                    </div>
                    <div data-visualcompletion="ignore" class="">
                      <a
                        aria-label="Edit"
                        class="xt0psk2 x1hl2dhg xt0b8zv xmi5d70 x1fvot60 xxio538 x1qsmy5i xq9mrsl x1yc453h x1h4wwuj x1fcty0u"
                        href="#"
                        id="js_5oz"
                      >
                        <div class="_5_6n">
                          <span class="_5_6o"></span>
                        </div>
                      </a>
                    </div>
                  </div>
                  <img
                    className="largetimagepenc"
                    style={{ width: "10px", height: "10px", marginLeft: "3px" }}
                    src={EditImage}
                    alt=""
                  />
                </div>
              </div>
              <div className="hoverbuttonsmyspec">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <div style={{ marginRight: "10px" }}>
                    {" "}
                    <BarChartOutlined
                      style={{
                        width: "12px",
                        height: "12px",
                        color: "black",
                        marginRight: "3px",
                      }}
                    />
                    <Link
                      style={{ color: "unset" }}
                      to={`/editmainchart/${record._id}`}
                    >
                      View Charts
                    </Link>
                  </div>
                  <div style={{ marginRight: "10px" }}>
                    <Link
                      style={{ color: "unset" }}
                      to={`/editcampaing/${record._id}`}
                    >
                      <img
                        style={{
                          width: "10px",
                          height: "10px",
                          marginRight: "3px",
                        }}
                        src={EditImage}
                        alt=""
                      />
                      Edit
                    </Link>
                  </div>
                  <div style={{ marginRight: "10px" }}>
                    <FileTextOutlined style={{ marginRight: "3px" }} />
                    Duplicate
                  </div>

                  <div style={{ marginRight: "10px" }}>
                    <PushpinOutlined style={{ marginRight: "3px" }} />
                    Pin
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ),
    },
    {
      title: (
        <div className="resulsconainer">
          {" "}
          <div>Delivery</div>
          <div>
            <CaretDownOutlined style={{ color: "gray" }} color="red" />
          </div>{" "}
        </div>
      ),
      dataIndex: "Delivery",
      key: "Delivery",
      width: 150,
      render: (text) => (
        <div className="campaign-name-cell">
          <div
            style={{ border: "none" }}
            class="_1b33 snipcss-B7bFk tether-target tether-enabled tether-element-attached-bottom tether-abutted tether-abutted-top tether-target-attached-top tether-element-attached-right tether-target-attached-right"
          >
            <span>
              <div class="ellipsis">
                <div class="clearfix _ikh">
                  <div class="_4bl7">
                    <div class="x1yc453h x1kky2od x1y5rjcf">
                      <i
                        alt=""
                        data-visualcompletion="css-img"
                        class="img style-ftbBX"
                        id="style-ftbBX"
                      ></i>
                    </div>
                  </div>
                  <div class="_4bl9">
                    <span class="xmi5d70 x1fvot60 xo1l8bm xxio538 xbsr9hj xq9mrsl x1h4wwuj xeuugli">
                      Active
                    </span>
                  </div>
                </div>
              </div>
            </span>
          </div>
        </div>
      ),
    },
    {
      title: (
        <div className="resulsconainer">
          {" "}
          <div>Ad set name</div>
          <div>
            <CaretDownOutlined style={{ color: "gray" }} color="red" />
          </div>{" "}
        </div>
      ),
      dataIndex: "campaingname",
      key: "campaingname",
      width: 250,
      render: (text) => (
        <div className="campaign-name-cell">
          <div
            style={{ border: "none" }}
            class="_1b33 ellipsis"
            data-hover="tooltip"
            data-tooltip-display="overflow"
          >
            <a
              class="x1hl2dhg xt0b8zv xmi5d70 x1fvot60 xxio538 x1qsmy5i x1yc453h xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj x1fcty0u x1lliihq"
              data-hover="tooltip"
              data-tooltip-display="overflow"
              href="#"
            >
              {text}
            </a>
            <div data-visualcompletion="ignore" class="">
              <div class="x1rg5ohu x67bb7w">
                <span class="xmi5d70 xw23nyj xo1l8bm x63nzvj x1541jtf xq9mrsl x1h4wwuj xeuugli">
                  1 active ad
                </span>
              </div>
            </div>
          </div>
        </div>
      ),
    },

    {
      title: "Bid Strategy",
      dataIndex: "Bidstrategy",
      key: "Bidstrategy",
      width: 130,
      render: (text) => (
        <div class="snipcss-UtGF5">
          <div
            geotextcolor="value"
            data-hover="tooltip"
            data-tooltip-display="overflow"
            data-tooltip-text-direction="auto"
            class="xmi5d70 x1fvot60 xo1l8bm xxio538 x1lliihq x6ikm8r x10wlt62 xlyipyv xuxw1ft xbsr9hj"
          >
            <span>
              <div data-visualcompletion="ignore" class=""></div>
              {text}
            </span>
          </div>
          <div
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
      ),
    },
    {
      title: "Budget",
      dataIndex: "Budget",
      key: "Budget",
      width: 140,
      render: (text) => (
        <div style={{ fontSize: "14px" }} className="budygetcontainer">
          {truncateText(text, 30)}
        </div>
      ),
    },
    {
      title: "Last Significant Edit",
      dataIndex: "lastSignificent",
      key: "lastSignificent",
      width: 120,
      render: (text) => (
        <div style={{ fontSize: "14px" }}> {truncateText(text, 11)}</div>
      ),
    },
    {
      title: "Attribution Settings",
      dataIndex: "Attributionsetting",
      key: "Attributionsetting",
      width: 120,
      render: (text) => (
        <div style={{ fontSize: "14px" }}> {truncateText(text, 11)}</div>
      ),
    },
    {
      title: () => (
        <div className="resulsconainer">
          {" "}
          <div>
            <span
              style={{ marginRight: "5px" }}
              id="js_26j"
              class="snipcss-1Co3h"
            >
              <i
                alt=""
                data-visualcompletion="css-img"
                class="img style-JFqyS"
                id="style-JFqyS"
              ></i>
            </span>
            Results
          </div>
          <div>
            <CaretDownOutlined style={{ color: "gray" }} color="red" />
          </div>{" "}
        </div>
      ),
      dataIndex: "Results",
      key: "Results",
      width: 120,
      render: (text) => (
        <div style={{ fontSize: "14px" }} className="budygetcontainer">
          {FormatNumbers(text)}
          <br />
          <span style={{ fontSize: "12px", color: "gray" }}>Link clicks</span>
        </div>
      ),
    },
    {
      title: (
        <div className="resulsconainer">
          {" "}
          <div>Reach</div>
          <div>
            <CaretDownOutlined style={{ color: "gray" }} color="red" />
          </div>{" "}
        </div>
      ),
      dataIndex: "Reach",
      key: "Reach",
      width: 150,
      render: (text) => (
        <div style={{ fontSize: "14px", textAlign: "right" }}>
          {FormatNumbers(text)}
        </div>
      ),
    },
    {
      title: (
        <div className="resulsconainer">
          {" "}
          <div>Impressions</div>
          <div>
            <CaretDownOutlined style={{ color: "gray" }} color="red" />
          </div>{" "}
        </div>
      ),
      dataIndex: "Impressions",
      key: "Impressions",
      width: 150,
      render: (text) => (
        <div style={{ fontSize: "14px", textAlign: "right" }}>
          {FormatNumbers(text)}
        </div>
      ),
    },
    {
      title: (
        <div className="resulsconainer">
          {" "}
          <div style={{ padding: 0, margin: 0 }}>
            Cost per <br /> results
          </div>
          <div>
            <CaretDownOutlined style={{ color: "gray" }} color="red" />
          </div>{" "}
        </div>
      ),
      dataIndex: "Costperresult",
      key: "Costperresult",
      width: 150,
      render: (text) => (
        <div style={{ fontSize: "14px" }} className="budygetcontainer">
          {FormatNumbers(text)}
          <br />
          <span
            style={{ fontSize: "12px", color: "gray", whiteSpace: "nowrap" }}
          >
            Per link click
          </span>
        </div>
      ),
    },
    {
      title: (
        <div className="resulsconainer">
          {" "}
          <div style={{ padding: 0, margin: 0 }}>Quality Ranking</div>
          <div>
            <CaretDownOutlined style={{ color: "gray" }} color="red" />
          </div>{" "}
        </div>
      ),
      dataIndex: "qualityRanking",
      key: "qualityRanking",
      width: 150,
      render: (text) => (
        <div style={{ fontSize: "14px" }} className="budygetcontainer">
          {text}
        </div>
      ),
    },
    {
      title: (
        <div className="resulsconainer">
          {" "}
          <div style={{ padding: 0, margin: 0 }}>Engagement rate ranking</div>
          <div>
            <CaretDownOutlined style={{ color: "gray" }} color="red" />
          </div>{" "}
        </div>
      ),
      dataIndex: "engagementrateranking",
      key: "engagementrateranking",
      width: 210,
      render: (text) => (
        <div style={{ fontSize: "14px" }} className="budygetcontainer">
          {text}
        </div>
      ),
    },
    {
      title: (
        <div className="resulsconainer">
          {" "}
          <div style={{ padding: 0, margin: 0 }}>Conversion rate ranking</div>
          <div>
            <CaretDownOutlined style={{ color: "gray" }} color="red" />
          </div>{" "}
        </div>
      ),
      dataIndex: "conversionrateranking",
      key: "conversionrateranking",
      width: 200,
      render: (text) => (
        <div style={{ fontSize: "14px" }} className="budygetcontainer">
          {text}
        </div>
      ),
    },

    {
      title: (
        <div className="resulsconainer">
          {" "}
          <div style={{ padding: 0, margin: 0 }}>Amount Spend</div>
          <div>
            <CaretDownOutlined style={{ color: "gray" }} color="red" />
          </div>{" "}
        </div>
      ),
      dataIndex: "Amountspent",
      key: "Amountspent",
      width: 150,
      render: (text) => (
        <div style={{ fontSize: "14px" }} className="budygetcontainer">
          {FormatNumbers(text)}
        </div>
      ),
    },
    {
      title: (
        <div className="resulsconainer">
          {" "}
          <div style={{ padding: 0, margin: 0 }}>Ends</div>
          <div>
            <CaretDownOutlined style={{ color: "gray" }} color="blue" />
          </div>{" "}
        </div>
      ),
      dataIndex: "Ends",
      key: "Ends",
      width: 150,
      render: (text) => (
        <div style={{ fontSize: "14px" }} className="budygetcontainer">
          {text}
        </div>
      ),
    },

    {
      title: () => (
        <i
          alt="Customise columns..."
          aria-label="Customise columns..."
          data-visualcompletion="css-img"
          class="img snipcss-saPsI style-kgHNC"
          id="style-kgHNC"
        >
          <u>Customise columns...</u>
        </i>
      ),
      dataIndex: "Plus",
      key: "Plus",
      width: 30,
      render: (text) => (
        <div style={{ fontSize: "14px" }} className="budygetcontainer">
          {text}
        </div>
      ),
    },
  ];
  // Calculate height based on campaigns length
  const rowHeight = 60; // Approximate height of one row
  const headerHeight = 60; // Approximate height of the header
  const footerHeight = 60; // Approximate height of the footer

  const maxHeight = 900; // Set a maximum table height

  const calculatedHeight = Math.min(
    campaigns.length * rowHeight + headerHeight + footerHeight,
    maxHeight
  );
  return (
    <div class="_3-9a style-5nd4I" id="style-5nd4I">
      <div class="_2utz style-Seeed" id="style-Seeed">
        <div class="_1hv5 style-voLCB" id="style-voLCB">
          <div id="style-C85Qh" class="style-C85Qh">
            <div class="_3c5b _7jnt" id="pe_toolbar">
              <div class="x78zum5 x6ikm8r x10wlt62 x1n2onr6">
                <div class="_9p_z">
                  <div class="_3c-mro _7j-8dy">
                    <div class="x78-k5m x6i-llv x10-p3v x1n-ebg">
                      <div class="_9p-ozl">
                        <div class="_9p-mlx">
                          <div>
                            <div class="_9p-mlx">
                              <div class="_9p-mlx">
                                <span>
                                  <span>
                                    <div class="x3n-f59 x19-22g xxy-2rh">
                                      <div class="x1i-jzs xjq-fo1 xa4-581 xqe-pjo x2h-pyx x97-b4z xcf-7s5 x1q-q5j xm0-qg8 x9f-niv x1y-3tx xe8-io3 xdj-7xw x11-km9 xat-gqj x1m-qix x2l-sy7 xeu-5cs x16-qjz xgg-jek x1j-oce x1t-x6v x6s-b1g x1e-wo3 xd1-m2q x1s-j5t x17-1rv x3n-f59 xdl-moy x1q-je5 x2l-x9n x19-22g x1n-ebg x1h-cqc x87-k99 xxy-2rh xvm-5tg x1l-qqn x1g-wjy x1l-avb x1y-bvg xrt-o8q x10-omn xo1-mec x14-1lb xas-1qp x1y-cz7 xwi-az6 x1p-fay x1y-fvp">
                                        <span class="xmi-jdh x1f-3w5 xxi-osf x1h-z9p xq9-ccb x1h-n1x x1p-bmo xeu-5cs xh8-7rm">
                                          <div class="x78-k5m">
                                            <div class="x6s-b1g x78-k5m x1q-je5 xoz-ire x2l-sy7 xeu-5cs x1i-mop x19-o7c x1h-9kw x13-1xr x6o-z2g xxz-6j3 xl5-e2e xh8-7rm">
                                              <div class="x3n-f59 x2l-x9n x1c-s9e">
                                                <i
                                                  class="borcb style-1FvAr"
                                                  id="style-1FvAr"
                                                ></i>
                                              </div>
                                              <div class="x1x-gir x1f-3w5 xk5-yrq xxi-osf x1h-z9p xux-rea x6i-llv x10-p3v xly-yd3 x1h-n1x xeu-5cs">
                                                Create
                                              </div>
                                            </div>
                                          </div>
                                        </span>
                                      </div>
                                    </div>
                                  </span>
                                </span>
                                <div>
                                  <div class="x3o-2lm xux-rea x1i-ehz xw9-lt2 xg0-r68 x3n-f59 x1l-avb x1y-bvg xrt-o8q x10-omn x19-22g xeu-5cs">
                                    <div
                                      class="x1i-jzs xjq-fo1 xa4-581 xqe-pjo x2h-pyx x97-b4z xcf-7s5 x1q-q5j xm0-qg8 x9f-niv x1y-3tx xe8-io3 xdj-7xw x11-km9 xat-gqj x1m-qix x2l-sy7 xeu-5cs x16-qjz xgg-jek x1j-oce x6s-b1g x1e-wo3 xd1-m2q x1s-j5t x17-1rv x3n-f59 xdl-moy x1q-je5 x2l-x9n x19-22g x1n-ebg x1h-cqc x87-k99 xxy-2rh xvm-5tg x1l-qqn x1g-wjy x1l-avb x1y-bvg xrt-o8q x10-omn x1o-qi9 xaa-nrq x1q-vbb xo1-mec xbs-smn x1v-7i1 x1y-cz7 xwi-az6 x1p-fay x1y-fvp style-FfghQ"
                                      id="style-FfghQ"
                                    >
                                      <span class="xmi-jdh x1f-3w5 xxi-osf x1h-z9p xq9-ccb x1h-n1x x1p-bmo xeu-5cs xh8-7rm">
                                        <div class="x78-k5m">
                                          <div class="x6s-b1g x78-k5m x1q-je5 xoz-ire x2l-sy7 xeu-5cs x1i-mop x19-o7c x1h-9kw x13-1xr x6o-z2g xxz-6j3 xl5-e2e xh8-7rm">
                                            <div class="x3n-f59 x1h-z9p x2l-x9n x1c-s9e">
                                              <div
                                                class="xtw-bqe style-mFT1E"
                                                id="style-mFT1E"
                                              ></div>
                                            </div>
                                            <div class="x1x-gir x1f-3w5 xk5-yrq xxi-osf x1h-z9p xux-rea x6i-llv x10-p3v xly-yd3 x1h-n1x xeu-5cs">
                                              Duplicate
                                            </div>
                                          </div>
                                        </div>
                                      </span>
                                    </div>
                                    <div class="x1r-1gm x39-os4">
                                      <div
                                        class="x1i-jzs xjq-fo1 xa4-581 xqe-pjo x2h-pyx x97-b4z xcf-7s5 x1q-q5j xm0-qg8 x9f-niv x1y-3tx xe8-io3 xdj-7xw x11-km9 xat-gqj x1m-qix x2l-sy7 xeu-5cs x16-qjz xgg-jek x1j-oce x6s-b1g x1e-wo3 xd1-m2q x1s-j5t x17-1rv x3n-f59 xdl-moy x1q-je5 x2l-x9n x19-22g x1n-ebg x1h-cqc x87-k99 xxy-2rh xvm-5tg x1l-qqn x1g-wjy x1l-avb x1y-bvg xrt-o8q x10-omn x1o-qi9 xaa-nrq x1q-vbb xo1-mec xbs-smn x1v-7i1 x1y-cz7 xwi-az6 x1y-fvp xn6-yn4 style-sI7MI"
                                        id="style-sI7MI"
                                      >
                                        <span class="xmi-jdh x1f-3w5 xxi-osf x1h-z9p xq9-ccb x1h-n1x x1p-bmo xeu-5cs xh8-7rm">
                                          <div class="x78-k5m">
                                            <div class="x1q-729 xjm-mwh x1y-zwe xcw-b3g x1j-rxo x39-os4 x6i-llv x10-p3v x10-k12 xux-rea x1i-gfe">
                                              Open Drop-down
                                            </div>
                                            <div class="x6s-b1g x78-k5m x1q-je5 xoz-ire x2l-sy7 xeu-5cs x1i-mop x19-o7c x1h-9kw x13-1xr x6o-z2g xxz-6j3 x1n-ohs xh8-7rm">
                                              ​
                                              <div class="x3n-f59 x1h-z9p x2l-x9n x1c-s9e x1g-ktz">
                                                <div
                                                  class="xtw-bqe style-6MTPS"
                                                  id="style-6MTPS"
                                                ></div>
                                              </div>
                                            </div>
                                          </div>
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div></div>
                                <span>
                                  <div class="x3o-2lm xux-rea x1i-ehz xw9-lt2 xg0-r68 x3n-f59 x1l-avb x1y-bvg xrt-o8q x10-omn x19-22g xeu-5cs">
                                    <div
                                      class="x1i-jzs xjq-fo1 xa4-581 xqe-pjo x2h-pyx x97-b4z xcf-7s5 x1q-q5j xm0-qg8 x9f-niv x1y-3tx xe8-io3 xdj-7xw x11-km9 xat-gqj x1m-qix x2l-sy7 xeu-5cs x16-qjz xgg-jek x1j-oce x6s-b1g x1e-wo3 xd1-m2q x1s-j5t x17-1rv x3n-f59 xdl-moy x1q-je5 x2l-x9n x19-22g x1n-ebg x1h-cqc x87-k99 xxy-2rh xvm-5tg x1l-qqn x1g-wjy x1l-avb x1y-bvg xrt-o8q x10-omn x1o-qi9 xaa-nrq x1q-vbb xo1-mec xbs-smn x1v-7i1 x1y-cz7 xwi-az6 x1p-fay x1y-fvp style-ocmvQ"
                                      id="style-ocmvQ"
                                    >
                                      <span class="xmi-jdh x1f-3w5 xxi-osf x1h-z9p xq9-ccb x1h-n1x x1p-bmo xeu-5cs xh8-7rm">
                                        <div class="x78-k5m">
                                          <div class="x6s-b1g x78-k5m x1q-je5 xoz-ire x2l-sy7 xeu-5cs x1i-mop x19-o7c x1h-9kw x13-1xr x6o-z2g xxz-6j3 xl5-e2e xh8-7rm">
                                            <div class="x3n-f59 x1h-z9p x2l-x9n x1c-s9e">
                                              <div
                                                class="xtw-bqe style-S9GaE"
                                                id="style-S9GaE"
                                              ></div>
                                            </div>
                                            <div class="x1x-gir x1f-3w5 xk5-yrq xxi-osf x1h-z9p xux-rea x6i-llv x10-p3v xly-yd3 x1h-n1x xeu-5cs">
                                              Edit
                                            </div>
                                          </div>
                                        </div>
                                      </span>
                                    </div>
                                    <div class="x1r-1gm x39-os4">
                                      <div
                                        class="x1i-jzs xjq-fo1 xa4-581 xqe-pjo x2h-pyx x97-b4z xcf-7s5 x1q-q5j xm0-qg8 x9f-niv x1y-3tx xe8-io3 xdj-7xw x11-km9 xat-gqj x1m-qix x2l-sy7 xeu-5cs x16-qjz xgg-jek x1j-oce x6s-b1g x1e-wo3 xd1-m2q x1s-j5t x17-1rv x3n-f59 xdl-moy x1q-je5 x2l-x9n x19-22g x1n-ebg x1h-cqc x87-k99 xxy-2rh xvm-5tg x1l-qqn x1g-wjy x1l-avb x1y-bvg xrt-o8q x10-omn x1o-qi9 xaa-nrq x1q-vbb xo1-mec xbs-smn x1v-7i1 x1y-cz7 xwi-az6 x1y-fvp xn6-yn4 style-kwi9O"
                                        id="style-kwi9O"
                                      >
                                        <span class="xmi-jdh x1f-3w5 xxi-osf x1h-z9p xq9-ccb x1h-n1x x1p-bmo xeu-5cs xh8-7rm">
                                          <div class="x78-k5m">
                                            <div class="x1q-729 xjm-mwh x1y-zwe xcw-b3g x1j-rxo x39-os4 x6i-llv x10-p3v x10-k12 xux-rea x1i-gfe">
                                              Edit
                                            </div>
                                            <div class="x6s-b1g x78-k5m x1q-je5 xoz-ire x2l-sy7 xeu-5cs x1i-mop x19-o7c x1h-9kw x13-1xr x6o-z2g xxz-6j3 x1n-ohs xh8-7rm">
                                              ​
                                              <div class="x3n-f59 x1h-z9p x2l-x9n x1c-s9e x1g-ktz">
                                                <div
                                                  class="xtw-bqe style-kqMMq"
                                                  id="style-kqMMq"
                                                ></div>
                                              </div>
                                            </div>
                                          </div>
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </span>
                                <div class="x3n-f59 x19-22g xxy-2rh">
                                  <div class="x1i-jzs xjq-fo1 xa4-581 xqe-pjo x2h-pyx x97-b4z xcf-7s5 x1q-q5j xm0-qg8 x9f-niv x1y-3tx xe8-io3 xdj-7xw x11-km9 xat-gqj x1m-qix x2l-sy7 xeu-5cs x16-qjz xgg-jek x1j-oce x6s-b1g x1e-wo3 xd1-m2q x1s-j5t x17-1rv x3n-f59 xdl-moy x1q-je5 x2l-x9n x19-22g x1n-ebg x1h-cqc x87-k99 xxy-2rh xvm-5tg x1l-qqn x1g-wjy x1l-avb x1y-bvg xrt-o8q x10-omn x1o-qi9 xaa-nrq x1q-vbb xo1-mec xbs-smn x1v-7i1 x1y-cz7 xwi-az6 x1p-fay x1y-fvp">
                                    <span class="xmi-jdh x1f-3w5 xxi-osf x1h-z9p xq9-ccb x1h-n1x x1p-bmo xeu-5cs xh8-7rm">
                                      <div class="x78-k5m">
                                        <div class="x6s-b1g x78-k5m x1q-je5 xoz-ire x2l-sy7 xeu-5cs x1i-mop x19-o7c x1h-9kw x13-1xr x6o-z2g xxz-6j3 xl5-e2e xh8-7rm">
                                          <div class="x3n-f59 x1h-z9p x2l-x9n x1c-s9e">
                                            <div
                                              class="xtw-bqe style-aVvrT"
                                              id="style-aVvrT"
                                            ></div>
                                          </div>
                                          <div class="x1x-gir x1f-3w5 xk5-yrq xxi-osf x1h-z9p xux-rea x6i-llv x10-p3v xly-yd3 x1h-n1x xeu-5cs">
                                            A/B test
                                          </div>
                                        </div>
                                      </div>
                                    </span>
                                  </div>
                                </div>
                                <div class="x3n-f59 x19-22g xxy-2rh">
                                  <div class="x1i-jzs xjq-fo1 xa4-581 xqe-pjo x2h-pyx x97-b4z xcf-7s5 x1q-q5j xm0-qg8 x9f-niv xe8-io3 xdj-7xw x11-km9 xat-gqj x1m-qix x2l-sy7 xeu-5cs x16-qjz xgg-jek x1j-oce x1h-vob x6s-b1g x1e-wo3 xd1-m2q x1s-j5t x17-1rv x3n-f59 xdl-moy x1q-je5 x2l-x9n x19-22g x1n-ebg x1h-cqc x87-k99 xxy-2rh xvm-5tg x1l-qqn x1g-wjy x1l-avb x1y-bvg xrt-o8q x10-omn xtp-4qp xaa-nrq x1q-vbb xo1-mec x1v-7i1 xis-j6e x1y-cz7 xwi-az6 x1y-fvp xn6-yn4">
                                    <span class="xmi-jdh x1f-3w5 xxi-osf x1h-z9p xq9-ccb x1h-n1x x1p-bmo xeu-5cs xh8-7rm">
                                      <div class="x78-k5m">
                                        <div class="x1q-729 xjm-mwh x1y-zwe xcw-b3g x1j-rxo x39-os4 x6i-llv x10-p3v x10-k12 xux-rea x1i-gfe">
                                          You haven't copied any items.
                                        </div>
                                        <div class="x6s-b1g x78-k5m x1q-je5 xoz-ire x2l-sy7 xeu-5cs x1i-mop x19-o7c x1h-9kw x13-1xr x6o-z2g xxz-6j3 xl5-e2e xh8-7rm">
                                          <div class="x3n-f59 x1h-z9p x2l-x9n x1c-s9e">
                                            <div
                                              class="xtw-bqe style-sLPyn"
                                              id="style-sLPyn"
                                            ></div>
                                          </div>
                                          ​
                                        </div>
                                      </div>
                                    </span>
                                  </div>
                                </div>
                                <div class="x3o-2lm xux-rea x1i-ehz xw9-lt2 xg0-r68 x1r-1gm x1l-avb x1y-bvg xrt-o8q x10-omn">
                                  <div
                                    class="x3n-f59 x19-22g xxy-2rh style-gENPJ"
                                    id="style-gENPJ"
                                  >
                                    <div
                                      class="x1i-jzs xjq-fo1 xa4-581 xqe-pjo x2h-pyx x97-b4z xcf-7s5 x1q-q5j xm0-qg8 x9f-niv xe8-io3 xdj-7xw x11-km9 xat-gqj x1m-qix x2l-sy7 xeu-5cs x16-qjz xgg-jek x1j-oce x1h-vob x6s-b1g x1e-wo3 xd1-m2q x1s-j5t x17-1rv x3n-f59 xdl-moy x1q-je5 x2l-x9n x19-22g x1n-ebg x1h-cqc x87-k99 xxy-2rh xvm-5tg x1l-qqn x1g-wjy x1l-avb x1y-bvg xrt-o8q x10-omn xtp-4qp xaa-nrq x1q-vbb xo1-mec x1v-7i1 xis-j6e x1y-cz7 xwi-az6 x1y-fvp xn6-yn4 style-VqK81"
                                      id="style-VqK81"
                                    >
                                      <span class="xmi-jdh x1f-3w5 xxi-osf x1h-z9p xq9-ccb x1h-n1x x1p-bmo xeu-5cs xh8-7rm">
                                        <div class="x78-k5m">
                                          <div class="x1q-729 xjm-mwh x1y-zwe xcw-b3g x1j-rxo x39-os4 x6i-llv x10-p3v x10-k12 xux-rea x1i-gfe">
                                            Discard only works on drafts
                                          </div>
                                          <div class="x6s-b1g x78-k5m x1q-je5 xoz-ire x2l-sy7 xeu-5cs x1i-mop x19-o7c x1h-9kw x13-1xr x6o-z2g xxz-6j3 xl5-e2e xh8-7rm">
                                            <div class="x3n-f59 x1h-z9p x2l-x9n x1c-s9e">
                                              <div
                                                class="xtw-bqe style-YaoOb"
                                                id="style-YaoOb"
                                              ></div>
                                            </div>
                                            ​
                                          </div>
                                        </div>
                                      </span>
                                    </div>
                                  </div>
                                  <div
                                    class="x3n-f59 x19-22g xxy-2rh style-coeVR"
                                    id="style-coeVR"
                                  >
                                    <div
                                      class="x1i-jzs xjq-fo1 xa4-581 xqe-pjo x2h-pyx x97-b4z xcf-7s5 x1q-q5j xm0-qg8 x9f-niv x1y-3tx xe8-io3 xdj-7xw x11-km9 xat-gqj x1m-qix x2l-sy7 xeu-5cs x16-qjz xgg-jek x1j-oce x6s-b1g x1e-wo3 xd1-m2q x1s-j5t x17-1rv x3n-f59 xdl-moy x1q-je5 x2l-x9n x19-22g x1n-ebg x1h-cqc x87-k99 xxy-2rh xvm-5tg x1l-qqn x1g-wjy x1l-avb x1y-bvg xrt-o8q x10-omn x1o-qi9 xaa-nrq x1q-vbb xo1-mec xbs-smn x1v-7i1 x1y-cz7 xwi-az6 x1y-fvp xn6-yn4 style-QBAGF"
                                      id="style-QBAGF"
                                    >
                                      <span class="xmi-jdh x1f-3w5 xxi-osf x1h-z9p xq9-ccb x1h-n1x x1p-bmo xeu-5cs xh8-7rm">
                                        <div class="x78-k5m">
                                          <div class="x1q-729 xjm-mwh x1y-zwe xcw-b3g x1j-rxo x39-os4 x6i-llv x10-p3v x10-k12 xux-rea x1i-gfe">
                                            Delete (Ctrl+Backspace)
                                          </div>
                                          <div class="x6s-b1g x78-k5m x1q-je5 xoz-ire x2l-sy7 xeu-5cs x1i-mop x19-o7c x1h-9kw x13-1xr x6o-z2g xxz-6j3 xl5-e2e xh8-7rm">
                                            <div class="x3n-f59 x1h-z9p x2l-x9n x1c-s9e">
                                              <div
                                                class="xtw-bqe style-qcoIr"
                                                id="style-qcoIr"
                                              ></div>
                                            </div>
                                            ​
                                          </div>
                                        </div>
                                      </span>
                                    </div>
                                  </div>
                                  <div
                                    class="x3n-f59 x19-22g xxy-2rh style-e5TYC"
                                    id="style-e5TYC"
                                  >
                                    <div
                                      class="x1i-jzs xjq-fo1 xa4-581 xqe-pjo x2h-pyx x97-b4z xcf-7s5 x1q-q5j xm0-qg8 x9f-niv x1y-3tx xe8-io3 xdj-7xw x11-km9 xat-gqj x1m-qix x2l-sy7 xeu-5cs x16-qjz xgg-jek x1j-oce x6s-b1g x1e-wo3 xd1-m2q x1s-j5t x17-1rv x3n-f59 xdl-moy x1q-je5 x2l-x9n x19-22g x1n-ebg x1h-cqc x87-k99 xxy-2rh xvm-5tg x1l-qqn x1g-wjy x1l-avb x1y-bvg xrt-o8q x10-omn x1o-qi9 xaa-nrq x1q-vbb xo1-mec xbs-smn x1v-7i1 x1y-cz7 xwi-az6 x1y-fvp xn6-yn4 style-YN1WA"
                                      id="style-YN1WA"
                                    >
                                      <span class="xmi-jdh x1f-3w5 xxi-osf x1h-z9p xq9-ccb x1h-n1x x1p-bmo xeu-5cs xh8-7rm">
                                        <div class="x78-k5m">
                                          <div class="x1q-729 xjm-mwh x1y-zwe xcw-b3g x1j-rxo x39-os4 x6i-llv x10-p3v x10-k12 xux-rea x1i-gfe">
                                            Export and import ad configuration
                                            data
                                          </div>
                                          <div class="x6s-b1g x78-k5m x1q-je5 xoz-ire x2l-sy7 xeu-5cs x1i-mop x19-o7c x1h-9kw x13-1xr x6o-z2g xxz-6j3 xl5-e2e xh8-7rm">
                                            <div class="x3n-f59 x2l-x9n x1c-s9e">
                                              <i
                                                class="borcb style-L47SC"
                                                id="style-L47SC"
                                              ></i>
                                            </div>
                                            ​
                                          </div>
                                        </div>
                                      </span>
                                    </div>
                                  </div>
                                  <span>
                                    <div class="x1r-1gm x67-vdc">
                                      <div
                                        class="x3n-f59 x19-22g xxy-2rh style-yeQ6D"
                                        id="style-yeQ6D"
                                      >
                                        <div
                                          class="x1i-jzs xjq-fo1 xa4-581 xqe-pjo x2h-pyx x97-b4z xcf-7s5 x1q-q5j xm0-qg8 x9f-niv x1y-3tx xe8-io3 xdj-7xw x11-km9 xat-gqj x1m-qix x2l-sy7 xeu-5cs x16-qjz xgg-jek x1j-oce x6s-b1g x1e-wo3 xd1-m2q x1s-j5t x17-1rv x3n-f59 xdl-moy x1q-je5 x2l-x9n x19-22g x1n-ebg x1h-cqc x87-k99 xxy-2rh xvm-5tg x1l-qqn x1g-wjy x1l-avb x1y-bvg xrt-o8q x10-omn x1o-qi9 xaa-nrq x1q-vbb xo1-mec xbs-smn x1v-7i1 x1y-cz7 xwi-az6 x1y-fvp xn6-yn4 style-sgBfr"
                                          id="js_-y1s"
                                        >
                                          <span class="xmi-jdh x1f-3w5 xxi-osf x1h-z9p xq9-ccb x1h-n1x x1p-bmo xeu-5cs xh8-7rm">
                                            <div class="x78-k5m">
                                              <div class="x1q-729 xjm-mwh x1y-zwe xcw-b3g x1j-rxo x39-os4 x6i-llv x10-p3v x10-k12 xux-rea x1i-gfe">
                                                Tag
                                              </div>
                                              <div class="x6s-b1g x78-k5m x1q-je5 xoz-ire x2l-sy7 xeu-5cs x1i-mop x19-o7c x1h-9kw x13-1xr x6o-z2g xxz-6j3 xl5-e2e xh8-7rm">
                                                <div class="x3n-f59 x1h-z9p x2l-x9n x1c-s9e">
                                                  <div
                                                    class="xtw-bqe style-ybtCU"
                                                    id="style-ybtCU"
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
                                  <div class="x1i-jzs xjq-fo1 xa4-581 xqe-pjo x2h-pyx x97-b4z xcf-7s5 x1q-q5j xm0-qg8 x9f-niv x1y-3tx xe8-io3 xdj-7xw x11-km9 xat-gqj x1m-qix x2l-sy7 xeu-5cs x16-qjz xgg-jek x1j-oce x6s-b1g x1e-wo3 xd1-m2q x1s-j5t x17-1rv x3n-f59 xdl-moy x1q-je5 x2l-x9n x19-22g x1n-ebg x1h-cqc x87-k99 xxy-2rh xvm-5tg x1l-qqn x1g-wjy x1l-avb x1y-bvg xrt-o8q x10-omn x1o-qi9 xaa-nrq x1q-vbb xo1-mec xbs-smn x1v-7i1 x1y-cz7 xwi-az6 x1s-1or xn6-yn4">
                                    <span class="xmi-jdh x1f-3w5 xxi-osf x1h-z9p xq9-ccb x1h-n1x x1p-bmo xeu-5cs xh8-7rm">
                                      <div class="x78-k5m">
                                        <div class="x6s-b1g x78-k5m x1q-je5 xoz-ire x2l-sy7 xeu-5cs x1i-mop x19-o7c x1h-9kw x13-1xr x6o-z2g xxz-6j3 x1n-ohs xh8-7rm">
                                          <div class="x1x-gir x1f-3w5 xk5-yrq xxi-osf x1h-z9p xux-rea x6i-llv x10-p3v xly-yd3 x1h-n1x xeu-5cs x1i-mop">
                                            Rules
                                          </div>
                                          <div class="x3n-f59 x1h-z9p x2l-x9n x1c-s9e x1g-ktz">
                                            <div
                                              class="xtw-bqe style-LkNRy"
                                              id="style-LkNRy"
                                            ></div>
                                          </div>
                                        </div>
                                      </div>
                                    </span>
                                  </div>
                                  <div></div>
                                </div>
                              </span>
                            </div>
                          </div>
                          <div class="_9p-foo"></div>
                          <div>
                            <div class="_9p-mlx">
                              <div class="x1r-1gm x67-vdc">
                                <div class="x6s-b1g x78-k5m x1q-je5 xoz-ire x2l-sy7 xeu-5cs x19-o7c x1c-s9e">
                                  <div>
                                    <div class="x78-k5m x2l-sy7 xeu-5cs">
                                      <label class="x1y-3tx" for="js_y">
                                        <span class="xmi-jdh x1f-3w5 xo1-mec xxi-osf xbs-smn xq9-ccb x1h-n1x xeu-5cs">
                                          View Setup
                                        </span>
                                      </label>
                                    </div>
                                  </div>
                                  <div class="x1r-1gm x1n-ebg x3o-2lm">
                                    <input
                                      class="xjy-xqo x1y-3tx x5y-93y x17-29q xdj-7xw x11-km9 xat-gqj x1m-qix x1w-l2r x1t-x6v x10-k12 x13-jc2 xh8-7rm x1v-ozd"
                                      id="js_-9qo"
                                      type="checkbox"
                                      value="false"
                                    />
                                    <div class="x1n-ebg xh8-7rm">
                                      <div class="x6s-b1g x78-k5m x13-jfd xu3-lxl x1q-5lp x26-3ri x17-b29 xm8-jje xso-get xy8-5bs xwe-zcy xvy-dnv xrs-p2s x10-p9s xzo-esl x12-lai x1r-i5q xpr-kba x1g-2oj xbs-smn x13-1xr xxz-6j3 x14-cwj xex-hqt x4u-5xd x18-1nv xkh-4dw x15-lyv">
                                        <div></div>
                                        <div class="xw4-zzn x1q-b5x x12-ota x1h-scw xzo-esl x12-lai x1r-i5q xpr-kba x13-1xr x6o-z2g xxz-6j3 x4s-l7o"></div>
                                      </div>
                                      <div class="xwe-zcy xvy-dnv xrs-p2s x10-p9s xzo-esl x12-lai x1r-i5q xpr-kba x13-jfd xu3-lxl x1q-5lp x26-3ri x17-b29 xm8-jje xso-get xy8-5bs x13-1xr x6o-z2g xxz-6j3 xg0-zjx x47-i7f x10-k12 x17-29q xds-w4f x13-jc2 x1e-14k x6i-llv x10-p3v xnl-tca xmb-miv xdx-v6t xwm-aby xmn-8hy x8l-3ny x2t-xr7 x1b-6ok xhh-2ac x14-mnt x1w-2s9 x1n-ayl x1t-myr x1t-nw7 xe2-zda xsp-a2m x1s-bec x1w-r56 x1j-9it x9o-hdk x1r-2tj x1h-kyx x1t-941"></div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <span>
                                <span>
                                  <div>
                                    <div>
                                      <div class="x1i-jzs xjq-fo1 xa4-581 xqe-pjo x2h-pyx x97-b4z xcf-7s5 x1q-q5j xm0-qg8 x9f-niv x1y-3tx xe8-io3 xdj-7xw x11-km9 xat-gqj x1m-qix x2l-sy7 xeu-5cs x16-qjz xgg-jek x1j-oce x6s-b1g x1e-wo3 xd1-m2q x1s-j5t x17-1rv x3n-f59 xdl-moy x1q-je5 x2l-x9n x1n-ebg x1h-cqc x87-k99 xxy-2rh xvm-5tg x1l-qqn x1g-wjy x1l-avb x1y-bvg xrt-o8q x10-omn x1o-qi9 xaa-nrq x1q-vbb xo1-mec xbs-smn x1v-7i1 x1y-cz7 xwi-az6 x1y-fvp xn6-yn4 xyq-3l2">
                                        <span class="xmi-jdh x1f-3w5 xxi-osf x1h-z9p xq9-ccb x1h-n1x x1p-bmo xeu-5cs xh8-7rm">
                                          <div class="x78-k5m">
                                            <div class="x6s-b1g x78-k5m x1q-je5 xoz-ire x2l-sy7 xeu-5cs x1i-mop x19-o7c x1h-9kw x13-1xr x6o-z2g xxz-6j3 x1n-ohs xh8-7rm">
                                              <div class="x3n-f59 x1h-z9p x2l-x9n x1c-s9e">
                                                <div
                                                  class="xtw-bqe style-dKFAS"
                                                  id="style-dKFAS"
                                                ></div>
                                              </div>
                                              <div
                                                style={{
                                                  position: "relative",
                                                }}
                                                onClick={() =>
                                                  setShowCustumizeBanner(
                                                    (prev) => !prev
                                                  )
                                                }
                                                class="x1x-gir x1f-3w5 xk5-yrq xxi-osf x1h-z9p xux-rea x6i-llv x10-p3v xly-yd3 x1h-n1x xeu-5cs x1i-mop"
                                              >
                                                Columns:{" "}
                                                {showPerformanceAndClicks ===
                                                "performanceandclicks"
                                                  ? "Performance and clicks"
                                                  : showPerformanceAndClicks}
                                              </div>
                                              <div class="x3n-f59 x1h-z9p x2l-x9n x1c-s9e x1g-ktz">
                                                <div
                                                  class="xtw-bqe style-xor6d"
                                                  id="style-xor6d"
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
                              <span>
                                <span>
                                  <div
                                    style={{ height: "36px" }}
                                    class="x1i-jzs xjq-fo1 xa4-581 xqe-pjo x2h-pyx x97-b4z xcf-7s5 x1q-q5j xm0-qg8 x9f-niv x1y-3tx xe8-io3 xdj-7xw x11-km9 xat-gqj x1m-qix x2l-sy7 xeu-5cs x16-qjz xgg-jek x1j-oce x6s-b1g x1e-wo3 xd1-m2q x1s-j5t x17-1rv x3n-f59 xdl-moy x1q-je5 x2l-x9n x19-22g x1n-ebg x1h-cqc x87-k99 xxy-2rh xvm-5tg x1l-qqn x1g-wjy x1l-avb x1y-bvg xrt-o8q x10-omn x1o-qi9 xaa-nrq x1q-vbb xo1-mec xbs-smn x1v-7i1 x1y-cz7 xwi-az6 x1y-fvp xn6-yn4"
                                  >
                                    <span class="xmi-jdh x1f-3w5 xxi-osf x1h-z9p xq9-ccb x1h-n1x x1p-bmo xeu-5cs xh8-7rm">
                                      <div class="x78-k5m">
                                        <div class="x6s-b1g x78-k5m x1q-je5 xoz-ire x2l-sy7 xeu-5cs x1i-mop x19-o7c x1h-9kw x13-1xr x6o-z2g xxz-6j3 x1n-ohs xh8-7rm">
                                          <div class="x3n-f59 x1h-z9p x2l-x9n x1c-s9e">
                                            <div
                                              class="xtw-bqe style-yNFri"
                                              id="style-yNFri"
                                            ></div>
                                          </div>

                                          <div class="x3n-f59 x1h-z9p x2l-x9n x1c-s9e x1g-ktz">
                                            <div
                                              class="xtw-bqe style-MoQpO"
                                              id="style-MoQpO"
                                            ></div>
                                          </div>
                                        </div>
                                      </div>
                                    </span>
                                  </div>
                                </span>
                                <div></div>
                              </span>
                              <span>
                                <div
                                  style={{ height: "36px" }}
                                  class="x1i-jzs xjq-fo1 xa4-581 xqe-pjo x2h-pyx x97-b4z xcf-7s5 x1q-q5j xm0-qg8 x9f-niv x1y-3tx xe8-io3 xdj-7xw x11-km9 xat-gqj x1m-qix x2l-sy7 xeu-5cs x16-qjz xgg-jek x1j-oce x6s-b1g x1e-wo3 xd1-m2q x1s-j5t x17-1rv x3n-f59 xdl-moy x1q-je5 x2l-x9n x19-22g x1n-ebg x1h-cqc x87-k99 xxy-2rh xvm-5tg x1l-qqn x1g-wjy x1l-avb x1y-bvg xrt-o8q x10-omn x1o-qi9 xaa-nrq x1q-vbb xo1-mec xbs-smn x1v-7i1 x1y-cz7 xwi-az6 x1y-fvp xn6-yn4"
                                >
                                  <span class="xmi-jdh x1f-3w5 xxi-osf x1h-z9p xq9-ccb x1h-n1x x1p-bmo xeu-5cs xh8-7rm">
                                    <div class="x78-k5m">
                                      <div class="x6s-b1g x78-k5m x1q-je5 xoz-ire x2l-sy7 xeu-5cs x1i-mop x19-o7c x1h-9kw x13-1xr x6o-z2g xxz-6j3 x1n-ohs xh8-7rm">
                                        <div class="x3n-f59 x1h-z9p x2l-x9n x1c-s9e">
                                          <div
                                            class="xtw-bqe style-WMwKF"
                                            id="style-WMwKF"
                                          ></div>
                                        </div>

                                        <div class="x3n-f59 x1h-z9p x2l-x9n x1c-s9e x1g-ktz">
                                          <div
                                            class="xtw-bqe style-LHbUw"
                                            id="style-LHbUw"
                                          ></div>
                                        </div>
                                      </div>
                                    </div>
                                  </span>
                                </div>
                              </span>
                              <div
                                style={{ height: "36px" }}
                                class="x1i-jzs xjq-fo1 xa4-581 xqe-pjo x2h-pyx x97-b4z xcf-7s5 x1q-q5j xm0-qg8 x9f-niv x1y-3tx xe8-io3 xdj-7xw x11-km9 xat-gqj x2l-sy7 xeu-5cs x16-qjz xgg-jek x1j-oce x6s-b1g x1e-wo3 xd1-m2q x1s-j5t x17-1rv x3n-f59 xdl-moy x1q-je5 x2l-x9n x19-22g x1n-ebg x1h-cqc x87-k99 xxy-2rh xvm-5tg x1l-qqn x1g-wjy x1l-avb x1y-bvg xrt-o8q x10-omn x1o-qi9 xaa-nrq x1q-vbb xo1-mec xbs-smn x1v-7i1 x1y-cz7 xwi-az6 x1y-fvp xn6-yn4 x1i-i9h"
                              >
                                <span class="xmi-jdh x1f-3w5 xxi-osf x1h-z9p xq9-ccb x1h-n1x x1p-bmo xeu-5cs xh8-7rm">
                                  <div class="x78-k5m">
                                    <div class="x6s-b1g x78-k5m x1q-je5 xoz-ire x2l-sy7 xeu-5cs x1i-mop x19-o7c x1h-9kw x13-1xr x6o-z2g xxz-6j3 x1n-ohs xh8-7rm">
                                      <div class="x3n-f59 x1h-z9p x2l-x9n x1c-s9e">
                                        <div
                                          class="xtw-bqe style-fTD3b"
                                          id="style-fTD3b"
                                        ></div>
                                      </div>

                                      <div class="x3n-f59 x1h-z9p x2l-x9n x1c-s9e x1g-ktz">
                                        <div
                                          class="xtw-bqe style-hRzox"
                                          id="style-hRzox"
                                        ></div>
                                      </div>
                                    </div>
                                  </div>
                                </span>
                              </div>
                              <div class="x3n-f59 x19-22g xxy-2rh">
                                <div
                                  style={{ height: "36px", marginRight: "5px" }}
                                  class="x1i-jzs xjq-fo1 xa4-581 xqe-pjo x2h-pyx x97-b4z xcf-7s5 x1q-q5j xm0-qg8 x9f-niv x1y-3tx xe8-io3 xdj-7xw x11-km9 xat-gqj x1m-qix x2l-sy7 xeu-5cs x16-qjz xgg-jek x1j-oce x6s-b1g x1e-wo3 xd1-m2q x1s-j5t x17-1rv x3n-f59 xdl-moy x1q-je5 x2l-x9n x19-22g x1n-ebg x1h-cqc x87-k99 xxy-2rh xvm-5tg x1l-qqn x1g-wjy x1l-avb x1y-bvg xrt-o8q x10-omn x1o-qi9 xaa-nrq x1q-vbb xo1-mec xbs-smn x1v-7i1 x1y-cz7 xwi-az6 x1p-fay x1y-fvp"
                                >
                                  <span class="xmi-jdh x1f-3w5 xxi-osf x1h-z9p xq9-ccb x1h-n1x x1p-bmo xeu-5cs xh8-7rm">
                                    <div class="x78-k5m">
                                      <div class="x6s-b1g x78-k5m x1q-je5 xoz-ire x2l-sy7 xeu-5cs x1i-mop x19-o7c x1h-9kw x13-1xr x6o-z2g xxz-6j3 xl5-e2e xh8-7rm">
                                        <div class="x3n-f59 x1h-z9p x2l-x9n x1c-s9e">
                                          <div
                                            class="xtw-bqe style-tqGhF"
                                            id="style-tqGhF"
                                          ></div>
                                        </div>
                                      </div>
                                    </div>
                                  </span>
                                </div>
                              </div>
                              <div id="style-X3XOX" class="style-X3XOX"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {showcustomizedbanner && (
                    <div className="custommadeui">
                      <div>
                        <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x65s2av">
                          <label
                            style={{
                              marginBottom: "10px",
                              cursor: "pointer",
                            }}
                            id="js_14i"
                            for="js_14h"
                          >
                            <span class="xmi5d70 x1fvot60 xxio538 xbsr9hj xq9mrsl x1mzt3pk x1vvkbs x13faqbe x117nqv4 xeuugli">
                              Recently Used
                            </span>
                          </label>
                        </div>
                        <label
                          style={{
                            padding: "10px 20px",
                            borderRadius: "10px",
                            cursor: "pointer",
                            backgroundColor:
                              showPerformanceAndClicks === "performance"
                                ? "#ecf2fe"
                                : "",
                          }}
                          onClick={handleCloseBannerPerformance}
                          class="x1i10hfl x1qjc9v5 xjbqb8w xjqpnuy xa49m3k xqeqjp1 x2hbi6w x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x78zum5 xdl72j9 xdt5ytf x2lah0s xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli xexx8yu x4uap5 x18d9i69 xkhd6sd x1n2onr6 x16tdsg8 x1hl2dhg xggy1nq x1ja2u2z x1h6gzvc x1t137rt"
                          tabindex="-1"
                        >
                          <div class="x78zum5 x1iyjqo2">
                            <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1lcm9me x1yr5g0i xrt01vj x10y3i5r x1iorvi4 xjkvuk6 xurb0ha x1sxyh0 xp7jhwk x1n0m28w">
                              {/* performance check box */}
                              {showPerformanceAndClicks === "performance" ? (
                                <div class="x6s0dn4 x3nfvp2 x1q0g3np xozqiw3 x2lwn1j xeuugli x1c4vz4f x19lwn94 xqcrz7y x2lah0s">
                                  <div class="x1rg5ohu x1n2onr6 x3oybdh">
                                    <div class="x1n2onr6 x14atkfc">
                                      <div class="x6s0dn4 x78zum5 x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x178xt8z xm81vs4 xso031l xy80clv xwebqov xvyu6v8 xrsgblv x10lij0i xzolkzo x12go9s9 x1rnf11y xprq8jg x1gzqxud xbsr9hj x9f619 xexx8yu x4uap5 x18d9i69 xkhd6sd xl56j7k xxk0z11 xvy4d1p">
                                        <div class=""></div>
                                        <input
                                          class="xjyslct  x5yr21d x17qophe xdj266r x11i5rnm xat24cr x1mh8g0r x1w3u9th x1t137rt x10l6tqk x13vifvy  "
                                          id="js_yo"
                                          type="radio"
                                          value="IMAGE_OR_VIDEO"
                                          checked=""
                                          name="js_yj"
                                        />
                                        <div class="x13dflua xnnyp6c x12w9bfk x78zum5 x6o7n8i x1hc1fzr x3oybdh">
                                          <div class="xsmyaan x1kpxq89 xzolkzo x12go9s9 x1rnf11y xprq8jg xo1l8bm x140t73q x19bke7z"></div>
                                        </div>
                                      </div>
                                      <div class="xwebqov xvyu6v8 xrsgblv x10lij0i xzolkzo x12go9s9 x1rnf11y xprq8jg x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x178xt8z xm81vs4 xso031l xy80clv x13dflua x6o7n8i xxziih7 x12w9bfk xg01cxk x47corl x10l6tqk x17qophe xds687c x13vifvy x1ey2m1c x6ikm8r x10wlt62 xnl74ce xmb4j5p xdx8kah xwmxa91 xmn8db3 x8lbu6m x2te4dl x1bs8fl3 xhhp2wi x14q35kh x1wa3ocq x1n7iyjn x1t0di37 x1tt7eqi xe25xm5 xsp6npd x1s928wv x1w3onc2 x1j6awrg x9obomg x1ryaxvv x1hvfe8t x1te75w5"></div>
                                    </div>
                                  </div>
                                </div>
                              ) : (
                                <div class="x6s0dn4 x3nfvp2 x1q0g3np xozqiw3 x2lwn1j xeuugli x1c4vz4f x19lwn94 xqcrz7y x2lah0s">
                                  <div class="x1rg5ohu x1n2onr6 x3oybdh">
                                    <div class="x1n2onr6 x14atkfc">
                                      <div class="x6s0dn4 x78zum5 x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x178xt8z xm81vs4 xso031l xy80clv xwebqov xvyu6v8 xrsgblv x10lij0i xzolkzo x12go9s9 x1rnf11y xprq8jg x10cdfl8 xis6omg x9f619 xexx8yu x4uap5 x18d9i69 xkhd6sd xl56j7k xxk0z11 xvy4d1p"></div>
                                      <div class="xwebqov xvyu6v8 xrsgblv x10lij0i xzolkzo x12go9s9 x1rnf11y xprq8jg x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x178xt8z xm81vs4 xso031l xy80clv x13dflua x6o7n8i xxziih7 x12w9bfk xg01cxk x47corl x10l6tqk x17qophe xds687c x13vifvy x1ey2m1c x6ikm8r x10wlt62 xnl74ce xmb4j5p xdx8kah xwmxa91 xmn8db3 x8lbu6m x2te4dl x1bs8fl3 xhhp2wi x14q35kh x1wa3ocq x1n7iyjn x1t0di37 x1tt7eqi xe25xm5 xsp6npd x1s928wv x1w3onc2 x1j6awrg x9obomg x1ryaxvv x1hvfe8t x1te75w5"></div>
                                    </div>
                                  </div>
                                </div>
                              )}
                              <div
                                onClick={perfomarnaceandclicks}
                                onMouseEnter={handleMouseEnterPerformance}
                                onMouseLeave={handleMouseLeavePerformance}
                                class="x1iyjqo2 xamitd3"
                                data-sscoverage-ignore="true"
                              >
                                <div class="x6s0dn4 x1q0g3np xozqiw3 x2lwn1j x1iyjqo2 xs83m0k x65s2av x78zum5 xeuugli">
                                  <div
                                    style={{
                                      display: "flex",
                                      flexDirection: "column",
                                      textAlign: "left",
                                    }}
                                  >
                                    <div
                                      class=""
                                      style={{
                                        color: "black",
                                      }}
                                    >
                                      Performance
                                    </div>
                                    {showPerformanceAndClicks ===
                                    "performance" ? (
                                      <span>Default</span>
                                    ) : (
                                      ""
                                    )}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </label>
                        <label
                          style={{
                            backgroundColor:
                              showPerformanceAndClicks ===
                              "performanceandclicks"
                                ? "#ecf2fe"
                                : "", // Corrected ternary and removed double curly braces
                            padding: "10px 20px",
                            borderRadius: "10px",
                            cursor: "pointer",
                          }}
                          onClick={handleCloseBannerPerformanceandClicks}
                          onMouseEnter={handleMouseEnter}
                          onMouseLeave={handleMouseLeave}
                          class="x1i10hfl x1qjc9v5 xjbqb8w xjqpnuy xa49m3k xqeqjp1 x2hbi6w x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x78zum5 xdl72j9 xdt5ytf x2lah0s xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli xexx8yu x4uap5 x18d9i69 xkhd6sd x1n2onr6 x16tdsg8 x1hl2dhg xggy1nq x1ja2u2z x1h6gzvc x1t137rt"
                          tabindex="-1"
                        >
                          <div class="x78zum5 x1iyjqo2">
                            <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1lcm9me x1yr5g0i xrt01vj x10y3i5r x1iorvi4 xjkvuk6 xurb0ha x1sxyh0 xp7jhwk x1n0m28w">
                              {showPerformanceAndClicks ===
                              "performanceandclicks" ? (
                                <div class="x6s0dn4 x3nfvp2 x1q0g3np xozqiw3 x2lwn1j xeuugli x1c4vz4f x19lwn94 xqcrz7y x2lah0s">
                                  <div class="x1rg5ohu x1n2onr6 x3oybdh">
                                    <div class="x1n2onr6 x14atkfc">
                                      <div class="x6s0dn4 x78zum5 x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x178xt8z xm81vs4 xso031l xy80clv xwebqov xvyu6v8 xrsgblv x10lij0i xzolkzo x12go9s9 x1rnf11y xprq8jg x1gzqxud xbsr9hj x9f619 xexx8yu x4uap5 x18d9i69 xkhd6sd xl56j7k xxk0z11 xvy4d1p">
                                        <div class=""></div>
                                        <input
                                          class="xjyslct  x5yr21d x17qophe xdj266r x11i5rnm xat24cr x1mh8g0r x1w3u9th x1t137rt x10l6tqk x13vifvy  "
                                          id="js_yo"
                                          type="radio"
                                          value="IMAGE_OR_VIDEO"
                                          checked=""
                                          name="js_yj"
                                        />
                                        <div class="x13dflua xnnyp6c x12w9bfk x78zum5 x6o7n8i x1hc1fzr x3oybdh">
                                          <div class="xsmyaan x1kpxq89 xzolkzo x12go9s9 x1rnf11y xprq8jg xo1l8bm x140t73q x19bke7z"></div>
                                        </div>
                                      </div>
                                      <div class="xwebqov xvyu6v8 xrsgblv x10lij0i xzolkzo x12go9s9 x1rnf11y xprq8jg x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x178xt8z xm81vs4 xso031l xy80clv x13dflua x6o7n8i xxziih7 x12w9bfk xg01cxk x47corl x10l6tqk x17qophe xds687c x13vifvy x1ey2m1c x6ikm8r x10wlt62 xnl74ce xmb4j5p xdx8kah xwmxa91 xmn8db3 x8lbu6m x2te4dl x1bs8fl3 xhhp2wi x14q35kh x1wa3ocq x1n7iyjn x1t0di37 x1tt7eqi xe25xm5 xsp6npd x1s928wv x1w3onc2 x1j6awrg x9obomg x1ryaxvv x1hvfe8t x1te75w5"></div>
                                    </div>
                                  </div>
                                </div>
                              ) : (
                                <div class="x6s0dn4 x3nfvp2 x1q0g3np xozqiw3 x2lwn1j xeuugli x1c4vz4f x19lwn94 xqcrz7y x2lah0s">
                                  <div class="x1rg5ohu x1n2onr6 x3oybdh">
                                    <div class="x1n2onr6 x14atkfc">
                                      <div class="x6s0dn4 x78zum5 x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x178xt8z xm81vs4 xso031l xy80clv xwebqov xvyu6v8 xrsgblv x10lij0i xzolkzo x12go9s9 x1rnf11y xprq8jg x10cdfl8 xis6omg x9f619 xexx8yu x4uap5 x18d9i69 xkhd6sd xl56j7k xxk0z11 xvy4d1p"></div>
                                      <div class="xwebqov xvyu6v8 xrsgblv x10lij0i xzolkzo x12go9s9 x1rnf11y xprq8jg x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x178xt8z xm81vs4 xso031l xy80clv x13dflua x6o7n8i xxziih7 x12w9bfk xg01cxk x47corl x10l6tqk x17qophe xds687c x13vifvy x1ey2m1c x6ikm8r x10wlt62 xnl74ce xmb4j5p xdx8kah xwmxa91 xmn8db3 x8lbu6m x2te4dl x1bs8fl3 xhhp2wi x14q35kh x1wa3ocq x1n7iyjn x1t0di37 x1tt7eqi xe25xm5 xsp6npd x1s928wv x1w3onc2 x1j6awrg x9obomg x1ryaxvv x1hvfe8t x1te75w5"></div>
                                    </div>
                                  </div>
                                </div>
                              )}
                              <div
                                class="x1iyjqo2 xamitd3"
                                data-sscoverage-ignore="true"
                              >
                                <div class="x6s0dn4 x1q0g3np xozqiw3 x2lwn1j x1iyjqo2 xs83m0k x65s2av x78zum5 xeuugli">
                                  <div
                                    style={{
                                      display: "flex",
                                      flexDirection: "column",
                                      textAlign: "left",
                                    }}
                                  >
                                    <div
                                      class=""
                                      style={{
                                        color: "black",
                                      }}
                                    >
                                      Performance and clicks
                                    </div>
                                    {showPerformanceAndClicks ===
                                    "performanceandclicks" ? (
                                      <span>Default</span>
                                    ) : (
                                      ""
                                    )}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </label>
                      </div>
                      <hr />
                      <div style={{ padding: "10px 0px" }}>
                        <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x65s2av">
                          <label id="js_14i" for="js_14h">
                            <span class="xmi5d70 x1fvot60 xxio538 xbsr9hj xq9mrsl x1mzt3pk x1vvkbs x13faqbe x117nqv4 xeuugli">
                              Popular
                            </span>
                          </label>
                          <div class="xbsr9hj x78zum5">
                            <div
                              class="x3nfvp2 x120ccyz x1heor9g"
                              role="presentation"
                            >
                              <div
                                class="xtwfq29 style-CEZaQ"
                                id="style-CEZaQ"
                              ></div>
                            </div>
                          </div>
                        </div>
                        <label
                          style={{
                            backgroundColor:
                              showPerformanceAndClicks === "engagement"
                                ? "#ecf2fe"
                                : "", // Corrected ternary and removed double curly braces
                            padding: "10px 20px",
                            borderRadius: "10px",
                            cursor: "pointer",
                          }}
                          onClick={handleCloseBannerEngagement}
                          onMouseEnter={handleMouseEnterEngagement}
                          onMouseLeave={handleMouseLeaveEngagement}
                          class="x1i10hfl x1qjc9v5 xjbqb8w xjqpnuy xa49m3k xqeqjp1 x2hbi6w x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk x78zum5 xdl72j9 xdt5ytf x2lah0s xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli xexx8yu x4uap5 x18d9i69 xkhd6sd x1n2onr6 x16tdsg8 x1hl2dhg xggy1nq x1ja2u2z x1t137rt"
                          tabindex="-1"
                        >
                          <div class="x78zum5 x1iyjqo2">
                            <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1lcm9me x1yr5g0i xrt01vj x10y3i5r x1iorvi4 xjkvuk6 xurb0ha x1sxyh0 xp7jhwk x1n0m28w">
                              {showPerformanceAndClicks === "engagement" ? (
                                <div
                                  style={{ marginTop: "5px" }}
                                  class="x6s0dn4 x3nfvp2 x1q0g3np xozqiw3 x2lwn1j xeuugli x1c4vz4f x19lwn94 xqcrz7y x2lah0s"
                                >
                                  <div class="x1rg5ohu x1n2onr6 x3oybdh">
                                    <div class="x1n2onr6 x14atkfc">
                                      <div class="x6s0dn4 x78zum5 x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x178xt8z xm81vs4 xso031l xy80clv xwebqov xvyu6v8 xrsgblv x10lij0i xzolkzo x12go9s9 x1rnf11y xprq8jg x1gzqxud xbsr9hj x9f619 xexx8yu x4uap5 x18d9i69 xkhd6sd xl56j7k xxk0z11 xvy4d1p">
                                        <div class=""></div>
                                        <input
                                          class="xjyslct  x5yr21d x17qophe xdj266r x11i5rnm xat24cr x1mh8g0r x1w3u9th x1t137rt x10l6tqk x13vifvy  "
                                          id="js_yo"
                                          type="radio"
                                          value="IMAGE_OR_VIDEO"
                                          checked=""
                                          name="js_yj"
                                        />
                                        <div class="x13dflua xnnyp6c x12w9bfk x78zum5 x6o7n8i x1hc1fzr x3oybdh">
                                          <div class="xsmyaan x1kpxq89 xzolkzo x12go9s9 x1rnf11y xprq8jg xo1l8bm x140t73q x19bke7z"></div>
                                        </div>
                                      </div>
                                      <div class="xwebqov xvyu6v8 xrsgblv x10lij0i xzolkzo x12go9s9 x1rnf11y xprq8jg x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x178xt8z xm81vs4 xso031l xy80clv x13dflua x6o7n8i xxziih7 x12w9bfk xg01cxk x47corl x10l6tqk x17qophe xds687c x13vifvy x1ey2m1c x6ikm8r x10wlt62 xnl74ce xmb4j5p xdx8kah xwmxa91 xmn8db3 x8lbu6m x2te4dl x1bs8fl3 xhhp2wi x14q35kh x1wa3ocq x1n7iyjn x1t0di37 x1tt7eqi xe25xm5 xsp6npd x1s928wv x1w3onc2 x1j6awrg x9obomg x1ryaxvv x1hvfe8t x1te75w5"></div>
                                    </div>
                                  </div>
                                </div>
                              ) : (
                                <div
                                  style={{ marginTop: "5px" }}
                                  class="x6s0dn4 x3nfvp2 x1q0g3np xozqiw3 x2lwn1j xeuugli x1c4vz4f x19lwn94 xqcrz7y x2lah0s"
                                >
                                  <div class="x1rg5ohu x1n2onr6 x3oybdh">
                                    <div class="x1n2onr6 x14atkfc">
                                      <div class="x6s0dn4 x78zum5 x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x178xt8z xm81vs4 xso031l xy80clv xwebqov xvyu6v8 xrsgblv x10lij0i xzolkzo x12go9s9 x1rnf11y xprq8jg x10cdfl8 xis6omg x9f619 xexx8yu x4uap5 x18d9i69 xkhd6sd xl56j7k xxk0z11 xvy4d1p"></div>
                                      <div class="xwebqov xvyu6v8 xrsgblv x10lij0i xzolkzo x12go9s9 x1rnf11y xprq8jg x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x178xt8z xm81vs4 xso031l xy80clv x13dflua x6o7n8i xxziih7 x12w9bfk xg01cxk x47corl x10l6tqk x17qophe xds687c x13vifvy x1ey2m1c x6ikm8r x10wlt62 xnl74ce xmb4j5p xdx8kah xwmxa91 xmn8db3 x8lbu6m x2te4dl x1bs8fl3 xhhp2wi x14q35kh x1wa3ocq x1n7iyjn x1t0di37 x1tt7eqi xe25xm5 xsp6npd x1s928wv x1w3onc2 x1j6awrg x9obomg x1ryaxvv x1hvfe8t x1te75w5"></div>
                                    </div>
                                  </div>
                                </div>
                              )}
                              <div
                                class="x1iyjqo2 xr9ek0c xamitd3"
                                data-sscoverage-ignore="true"
                              >
                                <div class="x6s0dn4 x1q0g3np xozqiw3 x2lwn1j x1iyjqo2 xs83m0k x65s2av x78zum5 xeuugli">
                                  <div
                                    style={{
                                      textAlign: "left",
                                      fontWeight: "bold",
                                    }}
                                    class="xmi5d70 x1fvot60 xo1l8bm xxio538 xbsr9hj xq9mrsl x1mzt3pk x1vvkbs x13faqbe xeuugli x1iyjqo2"
                                    id="js_yq"
                                  >
                                    Engagement{" "}
                                  </div>
                                </div>
                                <div
                                  style={{
                                    textAlign: "left",
                                  }}
                                  class="xw23nyj xo1l8bm x63nzvj"
                                >
                                  {showPerformanceAndClicks === "engagement" ? (
                                    <span>Default</span>
                                  ) : (
                                    ""
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>
                        </label>
                        <label
                          style={{
                            backgroundColor:
                              showPerformanceAndClicks === "delivery"
                                ? "#ecf2fe"
                                : "", // Corrected ternary and removed double curly braces
                            padding: "10px 20px",
                            borderRadius: "10px",
                            cursor: "pointer",
                          }}
                          onClick={handleCloseBannerDelivery}
                          onMouseEnter={handleMouseEnterDelivery}
                          onMouseLeave={handleMouseLeaveDelivery}
                          class="x1i10hfl x1qjc9v5 xjbqb8w xjqpnuy xa49m3k xqeqjp1 x2hbi6w x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk x78zum5 xdl72j9 xdt5ytf x2lah0s xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli xexx8yu x4uap5 x18d9i69 xkhd6sd x1n2onr6 x16tdsg8 x1hl2dhg xggy1nq x1ja2u2z x1t137rt"
                          tabindex="-1"
                        >
                          <div class="x78zum5 x1iyjqo2">
                            <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1lcm9me x1yr5g0i xrt01vj x10y3i5r x1iorvi4 xjkvuk6 xurb0ha x1sxyh0 xp7jhwk x1n0m28w">
                              {showPerformanceAndClicks === "delivery" ? (
                                <div
                                  style={{ marginTop: "5px" }}
                                  class="x6s0dn4 x3nfvp2 x1q0g3np xozqiw3 x2lwn1j xeuugli x1c4vz4f x19lwn94 xqcrz7y x2lah0s"
                                >
                                  <div class="x1rg5ohu x1n2onr6 x3oybdh">
                                    <div class="x1n2onr6 x14atkfc">
                                      <div class="x6s0dn4 x78zum5 x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x178xt8z xm81vs4 xso031l xy80clv xwebqov xvyu6v8 xrsgblv x10lij0i xzolkzo x12go9s9 x1rnf11y xprq8jg x1gzqxud xbsr9hj x9f619 xexx8yu x4uap5 x18d9i69 xkhd6sd xl56j7k xxk0z11 xvy4d1p">
                                        <div class=""></div>
                                        <input
                                          class="xjyslct  x5yr21d x17qophe xdj266r x11i5rnm xat24cr x1mh8g0r x1w3u9th x1t137rt x10l6tqk x13vifvy  "
                                          id="js_yo"
                                          type="radio"
                                          value="IMAGE_OR_VIDEO"
                                          checked=""
                                          name="js_yj"
                                        />
                                        <div class="x13dflua xnnyp6c x12w9bfk x78zum5 x6o7n8i x1hc1fzr x3oybdh">
                                          <div class="xsmyaan x1kpxq89 xzolkzo x12go9s9 x1rnf11y xprq8jg xo1l8bm x140t73q x19bke7z"></div>
                                        </div>
                                      </div>
                                      <div class="xwebqov xvyu6v8 xrsgblv x10lij0i xzolkzo x12go9s9 x1rnf11y xprq8jg x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x178xt8z xm81vs4 xso031l xy80clv x13dflua x6o7n8i xxziih7 x12w9bfk xg01cxk x47corl x10l6tqk x17qophe xds687c x13vifvy x1ey2m1c x6ikm8r x10wlt62 xnl74ce xmb4j5p xdx8kah xwmxa91 xmn8db3 x8lbu6m x2te4dl x1bs8fl3 xhhp2wi x14q35kh x1wa3ocq x1n7iyjn x1t0di37 x1tt7eqi xe25xm5 xsp6npd x1s928wv x1w3onc2 x1j6awrg x9obomg x1ryaxvv x1hvfe8t x1te75w5"></div>
                                    </div>
                                  </div>
                                </div>
                              ) : (
                                <div
                                  style={{ marginTop: "5px" }}
                                  class="x6s0dn4 x3nfvp2 x1q0g3np xozqiw3 x2lwn1j xeuugli x1c4vz4f x19lwn94 xqcrz7y x2lah0s"
                                >
                                  <div class="x1rg5ohu x1n2onr6 x3oybdh">
                                    <div class="x1n2onr6 x14atkfc">
                                      <div class="x6s0dn4 x78zum5 x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x178xt8z xm81vs4 xso031l xy80clv xwebqov xvyu6v8 xrsgblv x10lij0i xzolkzo x12go9s9 x1rnf11y xprq8jg x10cdfl8 xis6omg x9f619 xexx8yu x4uap5 x18d9i69 xkhd6sd xl56j7k xxk0z11 xvy4d1p"></div>
                                      <div class="xwebqov xvyu6v8 xrsgblv x10lij0i xzolkzo x12go9s9 x1rnf11y xprq8jg x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x178xt8z xm81vs4 xso031l xy80clv x13dflua x6o7n8i xxziih7 x12w9bfk xg01cxk x47corl x10l6tqk x17qophe xds687c x13vifvy x1ey2m1c x6ikm8r x10wlt62 xnl74ce xmb4j5p xdx8kah xwmxa91 xmn8db3 x8lbu6m x2te4dl x1bs8fl3 xhhp2wi x14q35kh x1wa3ocq x1n7iyjn x1t0di37 x1tt7eqi xe25xm5 xsp6npd x1s928wv x1w3onc2 x1j6awrg x9obomg x1ryaxvv x1hvfe8t x1te75w5"></div>
                                    </div>
                                  </div>
                                </div>
                              )}
                              <div
                                class="x1iyjqo2 xr9ek0c xamitd3"
                                data-sscoverage-ignore="true"
                              >
                                <div class="x6s0dn4 x1q0g3np xozqiw3 x2lwn1j x1iyjqo2 xs83m0k x65s2av x78zum5 xeuugli">
                                  <div
                                    style={{
                                      textAlign: "left",
                                      fontWeight: "bold",
                                    }}
                                    class="xmi5d70 x1fvot60 xo1l8bm xxio538 xbsr9hj xq9mrsl x1mzt3pk x1vvkbs x13faqbe xeuugli x1iyjqo2"
                                    id="js_yq"
                                  >
                                    Delivery
                                  </div>
                                </div>
                                <div
                                  style={{
                                    textAlign: "left",
                                  }}
                                  class="xw23nyj xo1l8bm x63nzvj"
                                >
                                  {showPerformanceAndClicks === "delivery" ? (
                                    <span>Default</span>
                                  ) : (
                                    ""
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>
                        </label>
                        <label
                          style={{
                            backgroundColor:
                              showPerformanceAndClicks === "videoengagement"
                                ? "#ecf2fe"
                                : "", // Corrected ternary and removed double curly braces
                            padding: "10px 20px",
                            borderRadius: "10px",
                            cursor: "pointer",
                          }}
                          onClick={handleCloseBannervideoEngagement}
                          onMouseEnter={handleMouseEntervideoEngagement}
                          onMouseLeave={handleMouseLeavevideoEngagement}
                          class="x1i10hfl x1qjc9v5 xjbqb8w xjqpnuy xa49m3k xqeqjp1 x2hbi6w x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk x78zum5 xdl72j9 xdt5ytf x2lah0s xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli xexx8yu x4uap5 x18d9i69 xkhd6sd x1n2onr6 x16tdsg8 x1hl2dhg xggy1nq x1ja2u2z x1t137rt"
                          tabindex="-1"
                        >
                          <div class="x78zum5 x1iyjqo2">
                            <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1lcm9me x1yr5g0i xrt01vj x10y3i5r x1iorvi4 xjkvuk6 xurb0ha x1sxyh0 xp7jhwk x1n0m28w">
                              {/*  just a second */}
                              {showPerformanceAndClicks ===
                              "videoengagement" ? (
                                <div
                                  style={{ marginTop: "5px" }}
                                  class="x6s0dn4 x3nfvp2 x1q0g3np xozqiw3 x2lwn1j xeuugli x1c4vz4f x19lwn94 xqcrz7y x2lah0s"
                                >
                                  <div class="x1rg5ohu x1n2onr6 x3oybdh">
                                    <div class="x1n2onr6 x14atkfc">
                                      <div class="x6s0dn4 x78zum5 x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x178xt8z xm81vs4 xso031l xy80clv xwebqov xvyu6v8 xrsgblv x10lij0i xzolkzo x12go9s9 x1rnf11y xprq8jg x1gzqxud xbsr9hj x9f619 xexx8yu x4uap5 x18d9i69 xkhd6sd xl56j7k xxk0z11 xvy4d1p">
                                        <div class=""></div>
                                        <input
                                          class="xjyslct  x5yr21d x17qophe xdj266r x11i5rnm xat24cr x1mh8g0r x1w3u9th x1t137rt x10l6tqk x13vifvy  "
                                          id="js_yo"
                                          type="radio"
                                          value="IMAGE_OR_VIDEO"
                                          checked=""
                                          name="js_yj"
                                        />
                                        <div class="x13dflua xnnyp6c x12w9bfk x78zum5 x6o7n8i x1hc1fzr x3oybdh">
                                          <div class="xsmyaan x1kpxq89 xzolkzo x12go9s9 x1rnf11y xprq8jg xo1l8bm x140t73q x19bke7z"></div>
                                        </div>
                                      </div>
                                      <div class="xwebqov xvyu6v8 xrsgblv x10lij0i xzolkzo x12go9s9 x1rnf11y xprq8jg x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x178xt8z xm81vs4 xso031l xy80clv x13dflua x6o7n8i xxziih7 x12w9bfk xg01cxk x47corl x10l6tqk x17qophe xds687c x13vifvy x1ey2m1c x6ikm8r x10wlt62 xnl74ce xmb4j5p xdx8kah xwmxa91 xmn8db3 x8lbu6m x2te4dl x1bs8fl3 xhhp2wi x14q35kh x1wa3ocq x1n7iyjn x1t0di37 x1tt7eqi xe25xm5 xsp6npd x1s928wv x1w3onc2 x1j6awrg x9obomg x1ryaxvv x1hvfe8t x1te75w5"></div>
                                    </div>
                                  </div>
                                </div>
                              ) : (
                                <div
                                  style={{ marginTop: "5px" }}
                                  class="x6s0dn4 x3nfvp2 x1q0g3np xozqiw3 x2lwn1j xeuugli x1c4vz4f x19lwn94 xqcrz7y x2lah0s"
                                >
                                  <div class="x1rg5ohu x1n2onr6 x3oybdh">
                                    <div class="x1n2onr6 x14atkfc">
                                      <div class="x6s0dn4 x78zum5 x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x178xt8z xm81vs4 xso031l xy80clv xwebqov xvyu6v8 xrsgblv x10lij0i xzolkzo x12go9s9 x1rnf11y xprq8jg x10cdfl8 xis6omg x9f619 xexx8yu x4uap5 x18d9i69 xkhd6sd xl56j7k xxk0z11 xvy4d1p"></div>
                                      <div class="xwebqov xvyu6v8 xrsgblv x10lij0i xzolkzo x12go9s9 x1rnf11y xprq8jg x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x178xt8z xm81vs4 xso031l xy80clv x13dflua x6o7n8i xxziih7 x12w9bfk xg01cxk x47corl x10l6tqk x17qophe xds687c x13vifvy x1ey2m1c x6ikm8r x10wlt62 xnl74ce xmb4j5p xdx8kah xwmxa91 xmn8db3 x8lbu6m x2te4dl x1bs8fl3 xhhp2wi x14q35kh x1wa3ocq x1n7iyjn x1t0di37 x1tt7eqi xe25xm5 xsp6npd x1s928wv x1w3onc2 x1j6awrg x9obomg x1ryaxvv x1hvfe8t x1te75w5"></div>
                                    </div>
                                  </div>
                                </div>
                              )}
                              <div
                                class="x1iyjqo2 xr9ek0c xamitd3"
                                data-sscoverage-ignore="true"
                              >
                                <div class="x6s0dn4 x1q0g3np xozqiw3 x2lwn1j x1iyjqo2 xs83m0k x65s2av x78zum5 xeuugli">
                                  <div
                                    style={{
                                      textAlign: "left",
                                      fontWeight: "bold",
                                    }}
                                    class="xmi5d70 x1fvot60 xo1l8bm xxio538 xbsr9hj xq9mrsl x1mzt3pk x1vvkbs x13faqbe xeuugli x1iyjqo2"
                                    id="js_yq"
                                  >
                                    Video engagement
                                  </div>
                                </div>
                                <div
                                  style={{
                                    textAlign: "left",
                                  }}
                                  class="xw23nyj xo1l8bm x63nzvj"
                                >
                                  {showPerformanceAndClicks ===
                                  "videoengagement" ? (
                                    <span>Default</span>
                                  ) : (
                                    ""
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>
                        </label>
                      </div>
                      <hr />
                      <div style={{ textAlign: "left", padding: "10px 0px" }}>
                        <label
                          style={{ textAlign: "left" }}
                          id="js_14i"
                          for="js_14h"
                        >
                          <span class="xmi5d70 x1fvot60 xxio538 xbsr9hj xq9mrsl x1mzt3pk x1vvkbs x13faqbe x117nqv4 xeuugli">
                            Discover more column Presets
                          </span>
                        </label>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            paddingTop: "10px",
                          }}
                        >
                          <span style={{ paddingRight: "5px", color: "gray" }}>
                            Try others column presets with key metrics to
                            monitor your campaigns.
                          </span>
                          <span>
                            <ChevronRightIcon
                              width={20}
                              height={20}
                              style={{ color: "black", fontWeight: "bold" }}
                            />
                          </span>
                        </div>
                      </div>
                      <hr />
                      <div style={{ textAlign: "left", paddingTop: "15px" }}>
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <span>
                            <div
                              style={{
                                width: "16px",
                                height: "16px",
                                maskImage:
                                  "url('https://static.xx.fbcdn.net/rsrc.php/v3/yT/r/eVDhhVwdiBk.png')",
                                WebkitMaskImage:
                                  "url('https://static.xx.fbcdn.net/rsrc.php/v3/yT/r/eVDhhVwdiBk.png')",
                                maskPosition: "-238px -937px",
                                WebkitMaskPosition: "-238px -937px",
                                backgroundColor: "black", // Background color for mask
                              }}
                            ></div>
                          </span>
                          <span
                            style={{
                              paddingLeft: "10px",
                              fontSize: "14px",
                              color: "gray",
                            }}
                          >
                            Compare attribution settings
                          </span>
                        </div>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            marginTop: "15px",
                          }}
                        >
                          <span>
                            <div
                              style={{
                                width: "16px",
                                height: "16px",
                                maskImage:
                                  "url('https://static.xx.fbcdn.net/rsrc.php/v3/yH/r/MOEMAc4dvof.png')",
                                WebkitMaskImage:
                                  "url('https://static.xx.fbcdn.net/rsrc.php/v3/yH/r/MOEMAc4dvof.png')",
                                maskPosition: "-387px -1152px",
                                WebkitMaskPosition: "-387px -1152px",
                                backgroundColor: "black", // This provides a visible color where the mask is applied
                              }}
                            ></div>
                          </span>
                          <span
                            style={{
                              paddingLeft: "10px",
                              fontSize: "14px",
                              color: "gray",
                            }}
                          >
                            Customise columns
                          </span>
                        </div>
                      </div>
                    </div>
                  )}
                  {isHovered && (
                    <div
                      className="mykjlsk"
                      style={{
                        position: "absolute",
                        width: "250px",
                        height: "600px",
                        top: 0,
                        left: "900px",
                        borderRadius: "5px",
                        zIndex: 999,
                      }}
                    >
                      <label
                        style={{ textAlign: "left", marginBottom: "15px" }}
                        id="js_14i"
                        for="js_14h"
                      >
                        <span className="xmi5d70 x1fvot60 xxio538 xbsr9hj xq9mrsl x1mzt3pk x1vvkbs x13faqbe x117nqv4 xeuugli lethoveronw">
                          Performance and clicks
                        </span>
                      </label>
                      <div>
                        <p>
                          Here are the metrics and details included in this
                          column preset:
                        </p>
                        <ul className="mycustomUIhere">
                          <li>Delivery</li>
                          <li>Attribution setting</li>
                          <li>Results</li>
                          <li>Reach</li>
                          <li>Frequency</li>
                          <li>Cost per result</li>
                          <li>Budget</li>
                          <li>Amount spend</li>
                          <li>Ends</li>
                          <li>Schedule</li>
                          <li>Quality ranking</li>
                          <li>Engagement rate ranking</li>
                          <li>Conversion rate ranking</li>
                          <li>Impressions</li>
                          <li>CPM(cost per 1,000 impressions)</li>
                          <li>Links clicks</li>
                          <li>CPC(cost per link click)</li>
                          <li>CTR(link click-through rate)</li>
                          <li>Clicks(all)</li>
                          <li>CTR(all)</li>
                          <li>CPC(all)</li>
                        </ul>
                      </div>
                    </div>
                  )}
                  {/* is hover performance */}
                  {isHoveredPeformance && (
                    <div
                      className="replicatwo"
                      style={{
                        position: "absolute",
                        width: "250px",
                        height: "450px",
                        top: "150px",
                        left: "900px",
                        borderRadius: "5px",
                        zIndex: 999,
                      }}
                    >
                      <label
                        style={{ textAlign: "left", marginBottom: "15px" }}
                        id="js_14i"
                        for="js_14h"
                      >
                        <span className="xmi5d70 x1fvot60 xxio538 xbsr9hj xq9mrsl x1mzt3pk x1vvkbs x13faqbe x117nqv4 xeuugli lethoveronw">
                          Performance
                        </span>
                      </label>
                      <div>
                        <p>
                          Here are the metrics and details included in this
                          column preset:
                        </p>
                        <ul className="mycustomUIhere">
                          <li>Delivery</li>
                          <li>Ad set name</li>
                          <li>Bid strategy</li>
                          <li>Budget</li>
                          <li>Last significant</li>
                          <li>Attribution setting</li>
                          <li>Reach</li>
                          <li>Resutls</li>
                          <li>Impressions</li>
                          <li>Cost per result</li>
                          <li>Quality ranking</li>
                          <li>Engagement rate ranking</li>
                          <li>Conversion rate ranking</li>
                          <li>Amount spend</li>
                          <li>Ends</li>
                          <li>Schedule</li>
                        </ul>
                      </div>
                    </div>
                  )}
                  {ishoverEngagement && (
                    <div
                      className="mywollcos"
                      style={{
                        position: "absolute",
                        width: "250px",
                        height: "300px",
                        top: "250px",
                        left: "900px",
                        borderRadius: "5px",
                        zIndex: 999,
                        padding: "10px",
                      }}
                    >
                      <label
                        style={{ textAlign: "left", marginBottom: "15px" }}
                        id="js_14i"
                        for="js_14h"
                      >
                        <span className="xmi5d70 x1fvot60 xxio538 xbsr9hj xq9mrsl x1mzt3pk x1vvkbs x13faqbe x117nqv4 xeuugli lethoveronw">
                          Engagement
                        </span>
                      </label>
                      <div>
                        <p>
                          Here are the metrics and details included in this
                          column preset:
                        </p>
                        <ul className="mycustomUIhere">
                          <li>Delivery</li>
                          <li>Page engagement</li>
                          <li>Post reactions</li>
                          <li>Post Comments</li>
                          <li>Post saves</li>
                          <li>Post shares</li>
                          <li>Link clicks</li>
                          <li>Follow or likes</li>
                          <li>CPC (cost perlink click)</li>
                        </ul>
                      </div>
                    </div>
                  )}
                  {ishoverDelivery && (
                    <div
                      className="mywoldelivery"
                      style={{
                        position: "absolute",
                        width: "250px",
                        height: "300px",
                        top: "300px",
                        left: "900px",
                        borderRadius: "5px",
                        zIndex: 999,
                      }}
                    >
                      <label
                        style={{ textAlign: "left", marginBottom: "15px" }}
                        id="js_14i"
                        for="js_14h"
                      >
                        <span className="xmi5d70 x1fvot60 xxio538 xbsr9hj xq9mrsl x1mzt3pk x1vvkbs x13faqbe x117nqv4 xeuugli lethoveronw">
                          Delivery
                        </span>
                      </label>
                      <div>
                        <p>
                          Here are the metrics and details included in this
                          column preset:
                        </p>
                        <ul className="mycustomUIhere">
                          <li>Delivery</li>
                          <li>Reach</li>
                          <li>Frequency</li>
                          <li>Cost per 1,000 Accounts</li>
                          <li>Centre accounts reached</li>
                          <li>Impressions</li>
                          <li>CPM (cost per 1,000 impressions)</li>
                        </ul>
                      </div>
                    </div>
                  )}
                  {/* Vedio Engagement here  */}
                  {ishovervedioengagement && (
                    <div
                      className="mywoldelivery"
                      style={{
                        position: "absolute",
                        width: "250px",
                        height: "300px",
                        top: "300px",
                        left: "900px",
                        borderRadius: "5px",
                        zIndex: 999,
                      }}
                    >
                      <label
                        style={{ textAlign: "left", marginBottom: "15px" }}
                        id="js_14i"
                        for="js_14h"
                      >
                        <span className="xmi5d70 x1fvot60 xxio538 xbsr9hj xq9mrsl x1mzt3pk x1vvkbs x13faqbe x117nqv4 xeuugli lethoveronw">
                          Video engagement
                        </span>
                      </label>
                      <div>
                        <p>
                          Here are the metrics and details included in this
                          column preset:
                        </p>
                        <ul className="mycustomUIhere">
                          <li>Delivery</li>
                          <li>Impressions</li>
                          <li>2-second continuous video plays</li>
                          <li>Cost per 2-second continuous video play</li>
                          <li>3-second video plays</li>
                          <li>Cost per 3-second video play</li>
                          <li>ThruPlays</li>
                          <li>Cost per ThruPlay</li>
                          <li>Reach</li>
                          <li>Amount spent</li>
                          <li>Video plays at 25%</li>
                          <li>Video plays at 50%</li>
                          <li>Video plays at 75%</li>
                          <li>Video plays at 95%</li>
                          <li>Video plays at 100%</li>
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
            {/* table start here from */}
            <div
              style={{
                maxHeight: calculatedHeight,
                backgroundColor: "#f5f6f7",
                overflow: "scroll",
              }}
              className="campaign-table-container custom-row-background"
            >
              <Table
                columns={columns}
                dataSource={campaigns}
                scroll={{ y: calculatedHeight }}
                bordered
                pagination={false}
                sticky
                summary={(pageData) => {
                  // Calculate sums for specific numeric fields
                  const totalReach = pageData.reduce(
                    (sum, record) => sum + (Number(record.Reach) || 0),
                    0
                  );
                  const totalResults = pageData.reduce(
                    (sum, record) => sum + (Number(record.Results) || 0),
                    0
                  );
                  const totalImpressions = pageData.reduce(
                    (sum, record) => sum + (Number(record.Impressions) || 0),
                    0
                  );
                  const largestCostPerResult = Math.max(
                    ...pageData.map(
                      (record) => Number(record.Costperresult) || 0
                    )
                  );
                  const totalAmountSpent = pageData.reduce(
                    (sum, record) => sum + (Number(record.Amountspent) || 0),
                    0
                  );
                  const totalCostPerImpression = pageData.reduce(
                    (sum, record) => sum + (Number(record.CPM) || 0),
                    0
                  );
                  return (
                    <Table.Summary fixed>
                      <Table.Summary.Row
                        fixed
                        style={{
                          borderBottomLeftRadius: "10px",
                          overflow: "hidden",
                        }}
                      >
                        {columns.map((col, index) => {
                          if (index === 0) {
                            // First column: Span across two columns
                            return (
                              <Table.Summary.Cell
                                key={index}
                                index={index}
                                colSpan={2}
                              >
                                <div></div>
                              </Table.Summary.Cell>
                            );
                          }

                          if (index === 1) {
                            // Second column: Skip rendering because it's merged into the first column
                            return null;
                          }

                          let value = null;

                          if (col.dataIndex === "Reach")
                            value = (
                              <div style={{ textAlign: "right" }}>
                                <div class="_1b-dar">
                                  <div class="_e9-rt6">
                                    <div>
                                      <div class="xmi-yie xo1-xoz x10-bjv">
                                        <div>
                                          <span
                                            id="style-DUim6"
                                            class="style-DUim6"
                                          >
                                            {totalReach}
                                          </span>
                                        </div>
                                      </div>
                                      <div class="ell-c6f _1h-d2w">
                                        <div class="xt0-vq9 xmi-yie xw2-ook xo1-xoz x63-tnz x15-gv8">
                                          Accounts Centre accounts
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            );
                          else if (col.dataIndex === "campaingname")
                            value = <div></div>;
                          else if (col.dataIndex === "Attributionsetting")
                            value = (
                              <div class="_1b-jyz">
                                <div class="_e9-vat">
                                  <div>
                                    <div class="ell-1jx _1h-tgr">
                                      <div class="xt0-wmx xmi-ayr xw2-5dw xo1-g1e x63-8h9 x15-656">
                                        7-day click...
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            );
                          else if (col.dataIndex === "Results")
                            value = (
                              <div>
                                <div
                                  style={{ textAlign: "right" }}
                                  class="_1b-jyz"
                                >
                                  <div class="_e9-vat">
                                    <div>
                                      <div class="xmi-ayr xo1-g1e x10-yi2">
                                        <span>{totalResults}</span>
                                      </div>
                                      <div class="ell-1jx _1h-tgr">
                                        <div class="xt0-wmx xmi-ayr xw2-5dw xo1-g1e x63-8h9 x15-656">
                                          Link Clicks
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            );
                          else if (col.dataIndex === "Impressions")
                            value = (
                              <div>
                                <div
                                  class="_1b-jyz"
                                  style={{ textAlign: "right" }}
                                >
                                  <div class="_e9-vat">
                                    <div>
                                      <div class="xmi-ayr xo1-g1e x10-yi2">
                                        <span>{totalImpressions}</span>
                                      </div>
                                      <div class="ell-1jx _1h-tgr">
                                        <div class="xt0-wmx xmi-ayr xw2-5dw xo1-g1e x63-8h9 x15-656">
                                          Link Clicks
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            );
                          else if (col.dataIndex === "Costperresult")
                            value = (
                              <div>
                                <div
                                  class="_1b-jyz"
                                  style={{ textAlign: "right" }}
                                >
                                  <div class="_e9-vat">
                                    <div>
                                      <div class="xmi-ayr xo1-g1e x10-yi2">
                                        <span>
                                          ${largestCostPerResult?.toFixed(2)}
                                        </span>
                                      </div>
                                      <div class="ell-1jx _1h-tgr">
                                        <div class="xt0-wmx xmi-ayr xw2-5dw xo1-g1e x63-8h9 x15-656">
                                          Link Clicks
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            );
                          else if (col.dataIndex === "Amountspent")
                            value = (
                              <div>
                                <div
                                  class="_1b-jyz"
                                  style={{ textAlign: "right" }}
                                >
                                  <div class="_e9-vat">
                                    <div>
                                      <div class="xmi-ayr xo1-g1e x10-yi2">
                                        <span
                                          style={{
                                            fontWeight: "500",
                                            fontSize: "14px",
                                          }}
                                        >
                                          $
                                          {Number(
                                            totalAmountSpent
                                          ).toLocaleString(undefined, {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                          })}
                                        </span>
                                      </div>
                                      <div class="ell-1jx _1h-tgr">
                                        <div class="xt0-wmx xmi-ayr xw2-5dw xo1-g1e x63-8h9 x15-656">
                                          Total Spend
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            );

                          return (
                            <Table.Summary.Cell
                              key={index}
                              index={index}
                              style={{ width: col.width }}
                            >
                              {value !== null
                                ? typeof value === "object"
                                  ? value
                                  : typeof value === "string"
                                  ? value
                                  : value.toFixed(2)
                                : ""}
                            </Table.Summary.Cell>
                          );
                        })}
                      </Table.Summary.Row>
                    </Table.Summary>
                  );
                }}
              />
            </div>

            {error && <div className="error-message">{error}</div>}

            {/* talbe end here  */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ads;

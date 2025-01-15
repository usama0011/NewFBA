import React, { useState, useEffect } from "react";
import "../styles/Reporting.css";
import "react-date-range/dist/styles.css"; // main style file
import { CaretDownOutlined } from "@ant-design/icons";

import "react-date-range/dist/theme/default.css"; // theme css file
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  XMarkIcon,
} from "@heroicons/react/16/solid";
import SideBar from "../components/SideBar";
import VersionTwoReporting from "./VersionTwoReporting";
import ExportReport from "../components/ExportReport";
import { Button } from "antd";

const Reporting = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [showDownloadFile, setShowDownloadFile] = useState(false);
  const [exportedFiles, setExportedFiles] = useState([]);
  const [campaignbox, setcampaignbox] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showID, setShowID] = useState("");
  const [refreshData, setRefreshData] = useState(false);
  const [showcurrentpageID, setcurrentPageID] = useState(false);
  const [showcalender, setShowCalender] = useState(false);
  const [FetchPageID, setFetchPageID] = useState("");
  const [pivottable, setPovitTable] = useState("breakdown");
  const [selectedMetrics, setSelectedMetrics] = useState([
    "Campaign Name",
    "Ad Set Name",
    "Impression Device",
    "Amount Spent",
    "Impressions",
  ]);

  const getFirstDayOfMonth = () =>
    new Date(new Date().getFullYear(), new Date().getMonth(), 1);
  const getTodayDate = () => new Date();

  const [selectedOption, setSelectedOption] = useState("This Month");
  const [startDate, setStartDate] = useState(getFirstDayOfMonth());
  const [endDate, setEndDate] = useState(getTodayDate());
  const [hoverDate, setHoverDate] = useState(null);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [finalStartDate, setFinalStartDate] = useState(getFirstDayOfMonth());
  const [finalEndDate, setFinalEndDate] = useState(getTodayDate());
  const handleDayClick = (date) => {
    if (!startDate || (startDate && endDate)) {
      setStartDate(date);
      setEndDate(null);
    } else {
      setEndDate(date);
    }
  };

  const handleDayMouseEnter = (date) => {
    if (startDate && !endDate) {
      setHoverDate(date);
    }
  };

  const handlePrevMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1)
    );
  };

  const handleNextMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1)
    );
  };

  const handleOptionChange = (option) => {
    setSelectedOption(option);

    const today = new Date();
    if (option === "This Month") {
      setStartDate(new Date(today.getFullYear(), today.getMonth(), 1));
      setEndDate(today);
    } else if (option === "Last Month") {
      const firstDayLastMonth = new Date(
        today.getFullYear(),
        today.getMonth() - 1,
        1
      );
      const lastDayLastMonth = new Date(
        today.getFullYear(),
        today.getMonth(),
        0
      );
      setStartDate(firstDayLastMonth);
      setEndDate(lastDayLastMonth);
    } else if (option === "Today") {
      setStartDate(today);
      setEndDate(today);
    } else if (option === "Yesterday") {
      const yesterday = new Date(today);
      yesterday.setDate(today.getDate() - 1);
      setStartDate(yesterday);
      setEndDate(yesterday);
    }
  };

  const renderDays = (year, month) => {
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDayIndex = new Date(year, month, 1).getDay();

    const days = [];
    for (let i = 0; i < firstDayIndex; i++) {
      days.push(
        <div key={`empty-${i}`} className="latestreporting-empty-day"></div>
      );
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const currentDate = new Date(year, month, day);
      const isInRange =
        startDate &&
        endDate &&
        currentDate >= startDate &&
        currentDate <= endDate;
      const isSelectedStart =
        startDate && currentDate.getTime() === startDate.getTime();
      const isSelectedEnd =
        endDate && currentDate.getTime() === endDate.getTime();
      const isHovering =
        startDate &&
        !endDate &&
        hoverDate &&
        currentDate > startDate &&
        currentDate <= hoverDate;

      days.push(
        <div
          key={day}
          className={`latestreporting-day ${
            isInRange ? "latestreporting-range" : ""
          } ${isSelectedStart ? "latestreporting-highlight" : ""} ${
            isSelectedEnd ? "latestreporting-highlight" : ""
          } ${isHovering ? "latestreporting-hover" : ""}`}
          onClick={() => handleDayClick(currentDate)}
          onMouseEnter={() => handleDayMouseEnter(currentDate)}
        >
          {day}
        </div>
      );
    }
    return days;
  };
  // Function to handle checkbox changes

  const handleUpdateClick = () => {
    if (startDate && endDate) {
      setShowCalender(false);

      setFinalStartDate(startDate); // Update the final start date
      setFinalEndDate(endDate); // Update the final end date
    } else {
      alert("Please select both start and end dates.");
    }
  };

  const formatDate = (date) => {
    return date?.toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  const breakdownData = [
    {
      title: "Popular breakdowns",
      metrics: [
        "Campaign Name",
        "Ad Set Name",
        "Ad Name",
        "Page Name",
        "Ad Creative",
        "Gender",
        "Country",
        "Region",
        "Platform",
        "Placement",
        "Objective",
        "Day",
        "Month",
      ],
    },
    {
      title: "Custom breakdowns",
      metrics: [], // No data available
    },
    {
      title: "Level",
      metrics: [
        "Campaign Name",
        "Ad Set Name",
        "Ad Name",
        "Page Name",
        "Ad Creative",
        "Ad set ID",
        "Ad ID",
        "Page ID",
      ], // No data available
    },
    {
      title: "Time",
      metrics: ["Day", "Week", "2 weeks", "Month"], // No data available
    },
    {
      title: "Delivery",
      metrics: [
        "Age",
        "Gender",
        "Business locations",
        "Country",
        "Region",
        "DMA region",
        "Impression Device",
        "Platform",
        "Placement",
        "Device platform",
        "Product ID",
        "Audience segments",
        "Time of day (ad account time zone)",
        "Time of day (viewer's time zone)",
      ], // No data available
    },
    {
      title: "Action",
      metrics: [
        "Messaging purchase source",
        "Conversion device",
        "Post reaction type",
        "Destination",
        "Video view type",
        "Video sound",
        "Carousel card",
        "Instant Experience component",
        "Category (Onsite)",
        "Brand (Onsite)",
      ], // No data available
    },
    {
      title: "Settings",
      metrics: ["Objective"], // No data available
    },
    {
      title: "Dynamic creative asset",
      metrics: [
        "Image, video and slideshow",
        "Call to action",
        "Description",
        "Headline (ad settings)",
        "Text",
        "Website URL",
      ], // No data available
    },
  ];

  const metricsData = [
    {
      title: "Popular Metrics",
      metrics: [
        "Amount Spent",
        "Impressions",
        "Reach",
        "Results",
        "Cost per result",
        "Delivery",
        "Frequency",
        "Link Clicks",
        "CPC",
        "CPM",
        "CTR",
      ],
    },
    {
      title: "Custom Metrics",
      metrics: [], // No data available
    },
    {
      title: "Performance",
      metrics: [
        "Results",
        "Result rate",
        "Reach",
        "Frequency",
        "Impressions",
        "Delivery",
        "Amount Spent",
        "Clicks (all)",
        "CPC (all)",
        "CTR",
        "Gross impressions (includes invalid impressions from non-human traffic)",
        "Auto-refresh impressions",
        "Attribution setting",
        "Average purchases conversion value",
        "Quality ranking",
        "Engagement rate ranking",
        "Conversion rate ranking",
        "Cost per result",
        "Cost per 1,000 Accounts Centre accounts reached",
        "CPM (cost per 1,000 impressions)",
        "Ad delivery",
        "Ad set delivery",
        "Campaign delivery",
      ],
    },
    {
      title: "Engagement",
      metrics: [
        "Engagement",
        "Page engagement",
        "Follows or likes",
        "Join group requests",
        "Post comments",
        "Post engagements",
        "Post reactions",
        "Post saves",
        "Post shares",
        "Photo views",
        "Event responses",
        "Check-ins",
        "Effect share",
        "Cost per Page engagement",
        "Cost per follow or like",
        "Cost per join group request",
        "Cost per post engagement",
        "Cost per event response",
        "Estimated call confirmation clicks",
        "Callback requests submitted",
        "Messenger calls placed",
        "20-second Messenger calls",
        "60-second Messenger calls",
        "New messaging contacts",
        "Blocks",
        "Messaging conversations started",
        "Messaging subscriptions",
        "Welcome message views",
        "Messaging conversations replied",
        "Cost per new messaging contact",
        "Cost per messaging conversation started",
        "Cost per messaging subscription",
        "Unique 2-second continuous video plays",
        "2-second continuous video plays",
        "3-second video plays",
        "ThruPlays",
        "Video plays at 25%",
        "Video plays at 50%",
        "Video plays at 75%",
        "Video plays at 95%",
        "Video plays at 100%",
        "Video average play time",
        "Video plays",
        "Instant Experience view time",
        "Instant Experience view percentage",
        "Instant Experience impressions",
        "Instant Experience reach",
        "Cost per 2-second continuous video play",
        "Cost per 3-second video play",
        "Cost per ThruPlay",
        "Link Clicks",
        "Unique link clicks",
        "Outbound clicks",
        "Unique outbound clicks",
        "CTR (link click-through rate)",
        "Unique CTR (link click-through rate)",
        "Outbound CTR (click-through rate)",
        "Unique outbound CTR (click-through rate)",
        "Unique clicks (all)",
        "Unique CTR",
        "Instant Experience clicks to open",
        "Instant Experience clicks to start",
        "Instant Experience outbound clicks",
        "Net reminders on",
        "Instagram profile visits",
        "CPC",
        "CPM",
        "Cost per unique outbound click",
        "Cost per unique click (all)",
        "Estimated ad recall lift (people)",
        "Estimated ad recall lift rate",
        "Cost per estimated ad recall lift (people)",
      ],
    },
    {
      title: "Conversions",
      metrics: [
        "Achievements unlocked",
        "Cost per achievement unlocked",
        "Achievements unlocked conversion value",
        "Unique achievements unlocked",
        "Cost per unique achievement unlocked",
        "Adds of payment info",
        "Cost per add of payment info",
        "Adds of payment info conversion value",
        "Unique adds of payment info",
        "Cost per unique add of payment info",
        "Adds to cart",
        "Cost per add to cart",
        "Adds to cart conversion value",
        "Unique adds to cart",
        "Cost per unique add to cart",
        "Adds to wishlist",
        "Cost per add to wishlist",
        "Adds to wishlist conversion value",
        "Unique adds to wishlist",
        "Cost per unique add to wishlist",
        "App activations",
        "Cost per app activation",
        "App activations conversion value",
        "Unique app activations",
        "Cost per unique app activation",
        "App installs",
        "Cost per App Install",
        "Applications submitted",
        "Cost per application submitted",
        "Submit Application conversion value",
        "Appointments scheduled",
        "Cost per appointment scheduled",
        "Appointments scheduled conversion value",
        "Checkouts initiated",
        "Cost per checkout initiated",
        "Checkouts initiated conversion value",
        "Unique checkouts initiated",
        "Cost per unique checkout initiated",
        "Contacts",
        "Cost per Contact",
        "Contact conversion value",
        "Content views",
        "Cost per Content View",
        "Content Views Conversion Value",
        "Unique content views",
        "Cost per unique content view",
        "Credit spends",
        "Cost per credit spend",
        "Credit spends conversion value",
        "Unique credit spends",
        "Cost per unique credit spend",
        "Custom events",
        "Cost per custom event",
        "Desktop app engagements",
        "Cost per desktop app engagement",
        "Desktop app story engagements",
        "Cost per desktop app story engagement",
        "Desktop app uses",
        "Cost per desktop app use",
        "Donation ROAS (return on ad spend)",
        "Donations",
        "Cost per donation",
        "Donate conversion value",
        "Game plays",
        "Cost per game play",
        "Get directions clicks",
        "In-app ad clicks",
        "Cost per in-app ad click",
        "In-app ad impressions",
        "Cost per 1,000 in-app ad impressions",
        "Landing page views",
        "Cost per landing page view",
        "Unique landing page views",
        "Cost per unique landing page view",
        "Leads",
        "Cost per Lead",
        "Leads Conversion Value",
        "Levels achieved",
        "Cost per level achieved",
        "Levels achieved conversion value",
        "Unique levels completed",
        "Cost per unique level achieved",
        "Location searches",
        "Cost per location search",
        "Location search conversion value",
        "Meta workflow completions",
        "Cost per Meta workflow completion",
        "Meta workflow completion conversion value",
        "Mobile app day 2 retention",
        "Cost per mobile app day 2 retention",
        "Unique mobile app day 2 retention",
        "Cost per unique mobile app day 2 retention",
        "Mobile app day 7 retention",
        "Cost per mobile app day 7 retention",
        "Unique mobile app day 7 retention",
        "Cost per unique mobile app day 7 retention",
        "Orders created",
        "Orders dispatched",
        "Other offline conversions",
        "Cost per other offline conversion",
        "Other offline conversion value",
        "Phone number clicks",
        "Products customised",
        "Cost per product customised",
        "Customise Product conversion value",
        "Purchase ROAS (return on ad spend)",
        "Purchases",
        "Cost per purchase",
        "Purchases conversion value",
        "Unique purchases",
        "Cost per unique purchase",
        "Ratings submitted",
        "Cost per rating submitted",
        "Ratings submitted conversion value",
        "Unique ratings submitted",
        "Cost per unique rating submitted",
        "Registrations completed",
        "Cost per registration completed",
        "Registrations completed conversion value",
        "Unique registrations completed",
        "Cost per unique registration completed",
        "Searches",
        "Cost per Search",
        "Searches Conversion Value",
        "Unique searches",
        "Cost per unique search",
        "Subscriptions",
        "Cost per subscription",
        "Subscribe conversion value",
        "Trials started",
        "Cost per trial started",
        "Trials started conversion value",
        "Tutorials completed",
        "Cost per tutorial completed",
        "Tutorials completed conversion value",
        "Unique tutorials completed",
        "Cost per unique tutorial completed",
        "In-app achievements unlocked",
        "In-app achievements unlocked conversion value",
        "Unique in-app achievements unlocked",
        "In-app adds of payment info",
        "Website payment info adds",
        "Offline adds of payment info",
        "In-app adds of payment info conversion value",
        "Website payment info adds conversion value",
        "Offline payment info adds conversion value",
        "Unique in-app adds of payment info",
        "In-app adds to cart",
        "Website adds to cart",
        "Offline adds to cart",
        "Meta add to cart",
        "In-app adds to cart conversion value",
        "Website adds to cart conversion value",
        "Offline adds to cart conversion value",
        "Unique in-app adds to cart",
        "In-app adds to wishlist",
        "Website adds to wishlist",
        "Offline adds to wishlist",
        "Meta adds to wishlist",
        "In-app adds to wishlist conversion value",
        "Website adds to wishlist conversion value",
        "Offline adds to wishlist conversion value",
        "Meta adds to wishlist conversion value",
        "Unique in-app adds to wishlist",
        "In-app sessions",
        "In-app sessions conversion value",
        "Unique in-app sessions",
        "Mobile app first opens",
        "Mobile app first opens conversion value",
        "Unique mobile app first opens",
        "Cost per unique mobile app first open",
        "Mobile app retention",
      ],
    },
    {
      title: "Settings",
      metrics: [
        "Account ID",
        "Account name",
        "Reporting starts",
        "Reporting ends",
        "Objective",
        "Buying type",
        "Ad ID",
        "Ad name",
        "Ad set name",
        "Campaign name",
        "Campaign ID",
        "Ad set ID",
        "Bid strategy",
        "Budget",
        "Placement",
        "Targeting",
        "Optimization for ad delivery",
        "Creative type",
        "Creative title",
        "Creative link",
      ],
    },
  ];
  const handleCheckboxChange = (metric) => {
    const updatedSelectedMetrics = selectedMetrics.includes(metric)
      ? selectedMetrics.filter((item) => item !== metric)
      : [...selectedMetrics, metric];

    setSelectedMetrics(updatedSelectedMetrics);
    console.log("updated selected matrics", updatedSelectedMetrics);
    // Update the dynamic columns
  };

  // Determine the text to display based on the selected date
  const isCurrentMonth = (startDate, endDate) => {
    const now = new Date();
    const currentMonthStart = new Date(now.getFullYear(), now?.getMonth(), 1);
    const currentMonthEnd = new Date(now.getFullYear(), now?.getMonth() + 1, 0);

    return (
      startDate >= currentMonthStart &&
      endDate <= currentMonthEnd &&
      startDate?.getMonth() === now?.getMonth() &&
      endDate?.getMonth() === now?.getMonth()
    );
  };
  const handleApplyClick = () => {
    setcurrentPageID(true);
    setFetchPageID(showID);
  };
  const handleRefreshData = () => {
    console.log("I am clicked");
    setRefreshData((prev) => !prev);
  };
  const handleShowDownload = () => {
    setShowDownloadFile(true);
  };
  // Load exported files from local storage on initial render
  useEffect(() => {
    const files = JSON.parse(localStorage.getItem("exportedFiles")) || [];
    setExportedFiles(files);
  }, [showDownloadFile]);
  // Function to remove a file
  const handleRemoveFile = (fileId) => {
    // Remove file from the state
    const updatedFiles = exportedFiles.filter((file) => file.id !== fileId);
    setExportedFiles(updatedFiles);

    // Update localStorage
    localStorage.setItem("exportedFiles", JSON.stringify(updatedFiles));

    message.success("File removed successfully!");
  };
  return (
    <div style={{ position: "relative" }}>
      <div
        class="_605a _6nw _jn7 _2is9 _61ve roboto bizsitePage chrome webkit win x1 Locale_en_GB snipcss-WaAOv"
        dir="ltr"
        cz-shortcut-listen="true"
        tabindex="-1"
      >
        <div class="_li">
          <div class="_li _30l2 _-f_" id="u_0_0_RF">
            <div class="_3b5k _ab_" id="bizsitePageContainer">
              <div
                id="globalContainer"
                class="uiContextualLayerParent bizWebLoginContainer"
              >
                <div class="">
                  <div
                    class="_1o9r _7wig"
                    id="power_editor_root"
                    data-clickable="1"
                    data-inputable="1"
                    data-keydownable="1"
                    data-keyupable="1"
                    data-changeable="1"
                    data-auto-logging-id="f16f5724740de7c"
                  >
                    <span
                      data-surface-wrapper="1"
                      data-surface="/am"
                      data-auto-logging-id="f3b67bc72affb8c"
                      class="style-Rcqjv"
                      id="style-Rcqjv"
                    >
                      <div
                        class="x5yr21d x1q85c4o xiy17q3 x1nr1p0w x2li9jd xldge1k x6n32m9 x10wlt62"
                        id="ads_pe_container"
                      >
                        <span
                          data-surface-wrapper="1"
                          data-non-int-surface="/am/hero_root:AdsPEMainAppWithLeftNavigation.react"
                          data-auto-logging-id="f63af372a2f6d"
                          class="style-575QJ"
                          id="style-575QJ"
                        >
                          <div class="" data-visualcompletion="ignore-dynamic">
                            <div class="">
                              <div class="_2ww0">
                                <SideBar />

                                <div
                                  style={{
                                    backgroundImage:
                                      "linear-gradient(to top, #e6effb, #e9f5ef, #f6eef5)",
                                    marginLeft: "60px",
                                  }}
                                  class="_2ww2"
                                >
                                  <div>
                                    <div
                                      style={{ height: "100vh", width: "95vw" }}
                                      class="_49wu style-cyQ1t"
                                      id="style-cyQ1t"
                                    >
                                      <span
                                        data-surface-wrapper="1"
                                        data-surface="/am/table"
                                        data-auto-logging-id="f2d89c89cfc2afc"
                                        id="style-C1jKI"
                                        class="style-C1jKI"
                                      >
                                        <div
                                          class="_2utw style-HmW1X"
                                          id="style-HmW1X"
                                        >
                                          <div class="_4u-c"></div>
                                          <div class="_4u-c"></div>
                                          <div
                                            style={{ margin: "20px" }}
                                            class="snipcss0-0-0-1 snipcss-epBXb"
                                          >
                                            <div
                                              style={{
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "space-between",
                                              }}
                                              class="_5aj7 snipcss0-1-1-2"
                                            >
                                              <div class="_7r_0 _3qn7 _61-0 _2fyi _3qng snipcss-cqS3X">
                                                <div>
                                                  <div
                                                    aria-busy="false"
                                                    class="x1i10hfl xjqpnuy xa49m3k xqeqjp1 x2hbi6w x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xe8uvvx xdj266r xat24cr x1mh8g0r x2lwn1j xeuugli x16tdsg8 xggy1nq x1ja2u2z x1t137rt x6s0dn4 x1ejq31n xd10rxx x1sy0etr x17r0tee x3nfvp2 xdl72j9 x1q0g3np x2lah0s x193iq5w x1n2onr6 x1hl2dhg x87ps6o xxymvpz xlh3980 xvmahel x1lku1pv xhk9q7s x1otrzb0 x1i1ezom x1o6z2jb xo1l8bm x108nfp6 xas4zb2 x1y1aw1k xwib8y2 x1pi30zi x1ye3gou x1emribx"
                                                    role="button"
                                                    tabindex="0"
                                                  >
                                                    <span class="x8t9es0 x1fvot60 xxio538 x1heor9g xq9mrsl x1h4wwuj x1pd3egz xeuugli xh8yej3">
                                                      <div class="x78zum5">
                                                        <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1hc1fzr x13dflua x6o7n8i xxziih7 x12w9bfk xl56j7k xh8yej3">
                                                          <div
                                                            class="x3nfvp2 x120ccyz x1heor9g x2lah0s x1c4vz4f"
                                                            role="presentation"
                                                          >
                                                            <div
                                                              class="xtwfq29 style-HKpMM"
                                                              id="style-HKpMM"
                                                            ></div>
                                                          </div>
                                                          <div class="x8t9es0 x1fvot60 xxio538 x1heor9g xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj x1pd3egz xeuugli">
                                                            All reports
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </span>
                                                  </div>
                                                </div>
                                                <div
                                                  id="style-yfXi6"
                                                  class="style-yfXi6"
                                                >
                                                  <div
                                                    id="style-6zHrB"
                                                    class="style-6zHrB"
                                                  >
                                                    Untitled report
                                                  </div>
                                                  <input
                                                    placeholder="Untitled report"
                                                    value="Untitled report"
                                                    id="js_ii"
                                                    data-auto-logging-id="f27c6953c10c85c"
                                                    hidden=""
                                                    tabindex="0"
                                                    class="style-zogfD"
                                                  />
                                                </div>
                                                <div class="x1d52u69 xktsk01">
                                                  <div class="xdzyupr">
                                                    <div>
                                                      <div class="x1jx94hy">
                                                        <div class="xh8yej3">
                                                          <div
                                                            aria-busy="false"
                                                            aria-expanded="false"
                                                            aria-haspopup="listbox"
                                                            aria-invalid="false"
                                                            aria-labelledby="js_2r"
                                                            class="x1i10hfl x1qjc9v5 xjbqb8w xjqpnuy xa49m3k xqeqjp1 x2hbi6w x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x78zum5 xdl72j9 xdt5ytf x2lah0s xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli xexx8yu x4uap5 x18d9i69 xkhd6sd x1n2onr6 x16tdsg8 x1hl2dhg xggy1nq x1ja2u2z x1ypdohk xh8yej3 x1t137rt"
                                                            role="combobox"
                                                            tabindex="0"
                                                          ></div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>

                                              <div
                                                style={{
                                                  marginLeft: "90px",
                                                  textAlign: "left",
                                                }}
                                                class="x6s0dn4 x78zum5 x1nhvcw1 x19lwn94 snipcss0-0-0-1 snipcss-vWNUK"
                                                role="toolbar"
                                                data-auto-logging-component-type="GeoToolBar"
                                              >
                                                <div
                                                  style={{ textAlign: "left" }}
                                                  class="x78zum5 xdt5ytf x2lwn1j xeuugli snipcss0-1-1-2 style-nNLsT"
                                                  id="style-nNLsT"
                                                >
                                                  <span
                                                    style={{
                                                      textAlign: "left",
                                                    }}
                                                    class="x8t9es0 x1fvot60 xo1l8bm xxio538 x108nfp6 xq9mrsl xp4054r x1h4wwuj xeuugli snipcss0-2-2-3"
                                                  >
                                                    You have unsaved changes
                                                  </span>
                                                  <span
                                                    style={{
                                                      textAlign: "left",
                                                    }}
                                                    class="x8t9es0 x1fvot60 xo1l8bm xxio538 x6lvj10 xq9mrsl x1h4wwuj xeuugli snipcss0-2-2-4"
                                                  >
                                                    Data refreshed less than 1
                                                    minute ago
                                                  </span>
                                                </div>
                                                <div
                                                  class="x3oybdh xuxw1ft x3nfvp2 xhk9q7s x1otrzb0 x1i1ezom x1o6z2jb x193iq5w xeuugli snipcss0-1-1-5"
                                                  role="group"
                                                >
                                                  <div
                                                    aria-busy="false"
                                                    class="x1i10hfl xjqpnuy xa49m3k xqeqjp1 x2hbi6w x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli x16tdsg8 xggy1nq x1ja2u2z x1t137rt x6s0dn4 x1ejq31n xd10rxx x1sy0etr x17r0tee x3nfvp2 xdl72j9 x1q0g3np x2lah0s x193iq5w x1n2onr6 x1hl2dhg x87ps6o xxymvpz xlh3980 xvmahel x1lku1pv xhk9q7s x1otrzb0 x1i1ezom x1o6z2jb x1xlr1w8 x140t73q xb57al4 x1y1aw1k xwib8y2 x1swvt13 x1pi30zi snipcss0-2-5-6 style-DLnRP"
                                                    role="button"
                                                    tabindex="0"
                                                    id="style-DLnRP"
                                                  >
                                                    <span class="x8t9es0 x1fvot60 xxio538 x1heor9g xq9mrsl x1h4wwuj x1pd3egz xeuugli xh8yej3 snipcss0-3-6-7">
                                                      <div class="x78zum5 snipcss0-4-7-8">
                                                        <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1hc1fzr x13dflua x6o7n8i xxziih7 x12w9bfk xl56j7k xh8yej3 snipcss0-5-8-9">
                                                          <div class="x8t9es0 x1fvot60 xxio538 x1heor9g xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj x1pd3egz xeuugli snipcss0-6-9-10">
                                                            Save
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </span>
                                                  </div>
                                                  <div class="x1rg5ohu snipcss0-2-5-11">
                                                    <div
                                                      aria-busy="false"
                                                      aria-controls="js_2s"
                                                      aria-expanded="false"
                                                      aria-haspopup="menu"
                                                      class="x1i10hfl xjqpnuy xa49m3k xqeqjp1 x2hbi6w x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli x16tdsg8 xggy1nq x1ja2u2z x1t137rt x6s0dn4 x1ejq31n xd10rxx x1sy0etr x17r0tee x3nfvp2 xdl72j9 x1q0g3np x2lah0s x193iq5w x1n2onr6 x1hl2dhg x87ps6o xxymvpz xlh3980 xvmahel x1lku1pv xhk9q7s x1otrzb0 x1i1ezom x1o6z2jb x1xlr1w8 x140t73q xb57al4 x1y1aw1k xwib8y2 x1ye3gou xn6708d snipcss0-3-11-12 style-bMBRp"
                                                      role="button"
                                                      tabindex="0"
                                                      id="style-bMBRp"
                                                    >
                                                      <span class="x8t9es0 x1fvot60 xxio538 x1heor9g xq9mrsl x1h4wwuj x1pd3egz xeuugli xh8yej3 snipcss0-4-12-13">
                                                        <div class="x78zum5 snipcss0-5-13-14">
                                                          <div
                                                            class="x1qvwoe0 xjm9jq1 x1y332i5 xcwd3tp x1jyxor1 x39eecv x6ikm8r x10wlt62 x10l6tqk xuxw1ft x1i1rx1s snipcss0-6-14-15"
                                                            data-sscoverage-ignore="true"
                                                          >
                                                            Open Drop-down
                                                          </div>
                                                          <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1hc1fzr x13dflua x6o7n8i xxziih7 x12w9bfk x1nhvcw1 xh8yej3 snipcss0-6-14-16">
                                                            ​
                                                            <div
                                                              class="x3nfvp2 x120ccyz x1heor9g x2lah0s x1c4vz4f x1gryazu snipcss0-7-16-17"
                                                              role="presentation"
                                                            >
                                                              <div
                                                                class="xtwfq29 snipcss0-8-17-18 style-wcIqo"
                                                                id="style-wcIqo"
                                                              ></div>
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </span>
                                                    </div>
                                                  </div>
                                                </div>
                                                <div
                                                  class="x3nfvp2 x193iq5w xxymvpz snipcss0-1-1-19"
                                                  role="none"
                                                >
                                                  <div
                                                    aria-busy="false"
                                                    class="x1i10hfl xjqpnuy xa49m3k xqeqjp1 x2hbi6w x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli x16tdsg8 xggy1nq x1ja2u2z x1t137rt x6s0dn4 x1ejq31n xd10rxx x1sy0etr x17r0tee x3nfvp2 xdl72j9 x1q0g3np x2lah0s x193iq5w x1n2onr6 x1hl2dhg x87ps6o xxymvpz xlh3980 xvmahel x1lku1pv xhk9q7s x1otrzb0 x1i1ezom x1o6z2jb xo1l8bm x108nfp6 xas4zb2 x1y1aw1k xwib8y2 x1pi30zi x1ye3gou"
                                                    role="button"
                                                    tabindex="0"
                                                    id="js_ke"
                                                  >
                                                    <span class="x8t9es0 x1fvot60 xxio538 x1heor9g xq9mrsl x1h4wwuj x1pd3egz xeuugli xh8yej3 snipcss0-3-20-21">
                                                      <div class="x78zum5 snipcss0-4-21-22">
                                                        <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1hc1fzr x13dflua x6o7n8i xxziih7 x12w9bfk xl56j7k xh8yej3 snipcss0-5-22-23">
                                                          <div class="x3nfvp2 x2lah0s x1c4vz4f snipcss0-6-23-24">
                                                            <i
                                                              alt=""
                                                              data-visualcompletion="css-img"
                                                              class="img snipcss0-7-24-25 style-tRPTU"
                                                              id="style-tRPTU"
                                                            ></i>
                                                          </div>
                                                          <div
                                                            onClick={
                                                              handleRefreshData
                                                            }
                                                            class="x8t9es0 x1fvot60 xxio538 x1heor9g xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj x1pd3egz xeuugli snipcss0-6-23-26"
                                                          >
                                                            Refresh
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </span>
                                                  </div>
                                                </div>
                                                <div class="snipcss0-1-1-27">
                                                  <div
                                                    class="x3nfvp2 x193iq5w xxymvpz snipcss0-2-27-28"
                                                    role="none"
                                                  >
                                                    <div
                                                      aria-busy="false"
                                                      class="x1i10hfl xjqpnuy xa49m3k xqeqjp1 x2hbi6w x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli x16tdsg8 xggy1nq x1ja2u2z x1t137rt x6s0dn4 x1ejq31n xd10rxx x1sy0etr x17r0tee x3nfvp2 xdl72j9 x1q0g3np x2lah0s x193iq5w x1n2onr6 x1hl2dhg x87ps6o xxymvpz xlh3980 xvmahel x1lku1pv xhk9q7s x1otrzb0 x1i1ezom x1o6z2jb xo1l8bm x108nfp6 xas4zb2 x1y1aw1k xwib8y2 x1pi30zi x1ye3gou"
                                                      role="button"
                                                      tabindex="0"
                                                      id="js_pd"
                                                    >
                                                      <span class="x8t9es0 x1fvot60 xxio538 x1heor9g xq9mrsl x1h4wwuj x1pd3egz xeuugli xh8yej3 snipcss0-4-29-30">
                                                        <div class="x78zum5 snipcss0-5-30-31">
                                                          <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1hc1fzr x13dflua x6o7n8i xxziih7 x12w9bfk xl56j7k xh8yej3 snipcss0-6-31-32">
                                                            <div class="x3nfvp2 x2lah0s x1c4vz4f snipcss0-7-32-33">
                                                              <i
                                                                alt=""
                                                                data-visualcompletion="css-img"
                                                                class="img snipcss0-8-33-34 style-tYX9V"
                                                                id="style-tYX9V"
                                                              ></i>
                                                            </div>
                                                            <div class="x8t9es0 x1fvot60 xxio538 x1heor9g xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj x1pd3egz xeuugli snipcss0-7-32-35">
                                                              Share
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </span>
                                                    </div>
                                                  </div>
                                                </div>
                                                <span
                                                  onClick={handleShowDownload}
                                                  id="export_button"
                                                  class="snipcss0-1-1-36"
                                                >
                                                  <div
                                                    class="x3nfvp2 x193iq5w xxymvpz snipcss0-2-36-37"
                                                    role="none"
                                                  >
                                                    <div
                                                      aria-busy="false"
                                                      class="x1i10hfl xjqpnuy xa49m3k xqeqjp1 x2hbi6w x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli x16tdsg8 xggy1nq x1ja2u2z x1t137rt x6s0dn4 x1ejq31n xd10rxx x1sy0etr x17r0tee x3nfvp2 xdl72j9 x1q0g3np x2lah0s x193iq5w x1n2onr6 x1hl2dhg x87ps6o xxymvpz xlh3980 xvmahel x1lku1pv xhk9q7s x1otrzb0 x1i1ezom x1o6z2jb xo1l8bm x108nfp6 xas4zb2 x1y1aw1k xwib8y2 x1pi30zi x1ye3gou"
                                                      role="button"
                                                      tabindex="0"
                                                      id="js_lr"
                                                    >
                                                      <span class="x8t9es0 x1fvot60 xxio538 x1heor9g xq9mrsl x1h4wwuj x1pd3egz xeuugli xh8yej3 snipcss0-4-38-39">
                                                        <div class="x78zum5 snipcss0-5-39-40">
                                                          <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1hc1fzr x13dflua x6o7n8i xxziih7 x12w9bfk xl56j7k xh8yej3 snipcss0-6-40-41">
                                                            <div
                                                              class="x3nfvp2 x120ccyz x1heor9g x2lah0s x1c4vz4f snipcss0-7-41-42"
                                                              role="presentation"
                                                            >
                                                              <div
                                                                class="xtwfq29 snipcss0-8-42-43 style-PeTBn"
                                                                id="style-PeTBn"
                                                              ></div>
                                                            </div>
                                                            <div class="x8t9es0 x1fvot60 xxio538 x1heor9g xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj x1pd3egz xeuugli snipcss0-7-41-44">
                                                              Export
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </span>
                                                    </div>
                                                  </div>
                                                </span>
                                                <div class="snipcss0-1-1-45">
                                                  <div
                                                    aria-busy="false"
                                                    aria-controls="js_2t"
                                                    aria-expanded="false"
                                                    aria-haspopup="menu"
                                                    class="x1i10hfl xjqpnuy xa49m3k xqeqjp1 x2hbi6w x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli x16tdsg8 xggy1nq x1ja2u2z x1t137rt x6s0dn4 x1ejq31n xd10rxx x1sy0etr x17r0tee x3nfvp2 xdl72j9 x1q0g3np x2lah0s x193iq5w x1n2onr6 x1hl2dhg x87ps6o xxymvpz xlh3980 xvmahel x1lku1pv xhk9q7s x1otrzb0 x1i1ezom x1o6z2jb xo1l8bm x108nfp6 xas4zb2 x1y1aw1k xwib8y2 x1ye3gou xn6708d snipcss0-2-45-46"
                                                    role="button"
                                                    tabindex="0"
                                                  >
                                                    <span class="x8t9es0 x1fvot60 xxio538 x1heor9g xq9mrsl x1h4wwuj x1pd3egz xeuugli xh8yej3 snipcss0-3-46-47">
                                                      <div class="x78zum5 snipcss0-4-47-48">
                                                        <div
                                                          class="x1qvwoe0 xjm9jq1 x1y332i5 xcwd3tp x1jyxor1 x39eecv x6ikm8r x10wlt62 x10l6tqk xuxw1ft x1i1rx1s snipcss0-5-48-49"
                                                          data-sscoverage-ignore="true"
                                                        >
                                                          Open Drop-down
                                                        </div>
                                                        <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1hc1fzr x13dflua x6o7n8i xxziih7 x12w9bfk xl56j7k xh8yej3 snipcss0-5-48-50">
                                                          <div
                                                            class="x3nfvp2 x120ccyz x1heor9g x2lah0s x1c4vz4f snipcss0-6-50-51"
                                                            role="presentation"
                                                          >
                                                            <div
                                                              class="xtwfq29 snipcss0-7-51-52 style-awlEy"
                                                              id="style-awlEy"
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
                                          </div>

                                          <div
                                            style={{ marginTop: "-15px" }}
                                            className="mainmoveContainer"
                                          >
                                            <div>
                                              <div class="x6s0dn4 x78zum5 xwib8y2 snipcss-5gBLt">
                                                <div
                                                  class="x1gzqxud x1lq5wgf xgqcy7u x30kzoy x9jhf4c x1kmqopl x5yr21d xh8yej3"
                                                  data-auto-logging-component-type="GeoCard"
                                                >
                                                  <div class="x78zum5 xdt5ytf x5yr21d xedcshv x1t2pt76 xh8yej3">
                                                    <div class="x9f619 x78zum5 x1iyjqo2 x5yr21d x2lwn1j x1n2onr6 xh8yej3">
                                                      <div class="xw2csxc x1odjw0f xh8yej3 x18d9i69">
                                                        <div class="xjm9jq1 xg01cxk x47corl xh8yej3 x1jyxor1"></div>
                                                        <div class="x6s0dn4 xn6708d _5aj7">
                                                          <div class="_4bl9">
                                                            <div class="">
                                                              <div
                                                                class="_90__ _8dtr _9ikp"
                                                                role="search"
                                                                tabindex="-1"
                                                                data-auto-logging-id="f24b55065799d"
                                                              >
                                                                <div class="_4u-c _8dts">
                                                                  <div
                                                                    class="_75w7 style-yWxwj"
                                                                    id="style-yWxwj"
                                                                  >
                                                                    <i
                                                                      alt=""
                                                                      data-visualcompletion="css-img"
                                                                      class="img style-ReD71"
                                                                      id="style-ReD71"
                                                                    ></i>
                                                                  </div>
                                                                  <div class="_8dtc">
                                                                    <div class="_765v">
                                                                      <div class="_765u">
                                                                        <div
                                                                          style={{
                                                                            marginTop:
                                                                              "8px",
                                                                          }}
                                                                          class="x6s0dn4 x3nfvp2 x1q0g3np xozqiw3 x2lwn1j xeuugli x1c4vz4f x19lwn94 x8t9es0 x1fvot60 xo1l8bm xxio538 x108nfp6 xq9mrsl xqcrz7y x2lah0s"
                                                                        >
                                                                          ​
                                                                          <div class="x3nfvp2">
                                                                            <div class="x6s0dn4 x3nfvp2 x1q0g3np xozqiw3 x2lwn1j xeuugli x1c4vz4f x19lwn94 xmi5d70 x1fvot60 xo1l8bm xxio538 xbsr9hj xq9mrsl xqcrz7y x2lah0s">
                                                                              ​
                                                                              <div
                                                                                class="x3nfvp2 x120ccyz x4s1yf2"
                                                                                role="presentation"
                                                                              >
                                                                                <div
                                                                                  class="xtwfq29 style-GLwTt"
                                                                                  id="style-GLwTt"
                                                                                ></div>
                                                                              </div>
                                                                            </div>
                                                                          </div>
                                                                        </div>
                                                                      </div>
                                                                    </div>
                                                                    {showcurrentpageID && (
                                                                      <div>
                                                                        <button
                                                                          style={{
                                                                            border:
                                                                              "none",
                                                                            marginTop:
                                                                              "6px",
                                                                            outline:
                                                                              "none",
                                                                            backgroundColor:
                                                                              "#f2f2f2",
                                                                            padding:
                                                                              "5px",
                                                                            borderRadius:
                                                                              "5px",
                                                                            display:
                                                                              "flex",
                                                                            alignItems:
                                                                              "center",
                                                                            marginLeft:
                                                                              "10px",
                                                                            marginRight:
                                                                              "10px",
                                                                          }}
                                                                        >
                                                                          Page
                                                                          ID is{" "}
                                                                          <span
                                                                            style={{
                                                                              fontWeight:
                                                                                "bold",
                                                                              fontSize:
                                                                                "15px",
                                                                              marginLeft:
                                                                                "5px",
                                                                              marginRight:
                                                                                "5px",
                                                                              marginTop:
                                                                                "-2px",
                                                                            }}
                                                                          >
                                                                            {
                                                                              showID
                                                                            }
                                                                          </span>{" "}
                                                                          <div
                                                                            style={{
                                                                              cursor:
                                                                                "pointer",
                                                                            }}
                                                                            onClick={() => {
                                                                              setcurrentPageID(
                                                                                false
                                                                              );
                                                                              setFetchPageID(
                                                                                ""
                                                                              );
                                                                            }}
                                                                            aria-busy="false"
                                                                          >
                                                                            <span class="xmi5d70 x1fvot60 xxio538 x1heor9g xq9mrsl x1h4wwuj x1pd3egz xeuugli xh8yej3">
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
                                                                                      class="xtwfq29 style-zlQsk"
                                                                                      id="style-zlQsk"
                                                                                    ></div>
                                                                                  </div>

                                                                                  ​
                                                                                </div>
                                                                              </div>
                                                                            </span>
                                                                          </div>
                                                                        </button>
                                                                      </div>
                                                                    )}
                                                                    <div class="_4u-c _8dtd">
                                                                      <div>
                                                                        <span
                                                                          class="_75wa _765u _58ah"
                                                                          placeholder="Search and filter"
                                                                          autocomplete="off"
                                                                          autocorrect="off"
                                                                        >
                                                                          <label
                                                                            class="_58ak _3ct8"
                                                                            id="js_3h"
                                                                          >
                                                                            <input
                                                                              className="search-input"
                                                                              type="text"
                                                                              placeholder="Search and filter"
                                                                              onClick={() =>
                                                                                setIsFocused(
                                                                                  true
                                                                                )
                                                                              }
                                                                              style={{
                                                                                width:
                                                                                  "100%",
                                                                                height:
                                                                                  "20px",
                                                                                padding:
                                                                                  "3px 8px",
                                                                                fontSize:
                                                                                  "13px",
                                                                                border:
                                                                                  isFocused
                                                                                    ? "2px solid #007bff"
                                                                                    : "1px solid #ccc",
                                                                                borderRadius:
                                                                                  "20px",
                                                                                outline:
                                                                                  "none",
                                                                                transition:
                                                                                  "border 0.3s ease",
                                                                              }}
                                                                            />
                                                                          </label>
                                                                        </span>
                                                                      </div>
                                                                    </div>
                                                                  </div>

                                                                  <div class="_8dte"></div>
                                                                  <div class="_4u-c _765w">
                                                                    <div class="x1rg5ohu x67bb7w">
                                                                      <a
                                                                        class="_231w  _4yef _3-9a style-Sz8Jc"
                                                                        href="#"
                                                                        id="style-Sz8Jc"
                                                                      >
                                                                        <span
                                                                          style={{
                                                                            marginRight:
                                                                              "10px",
                                                                          }}
                                                                          id="style-ifDwy"
                                                                          class="style-ifDwy"
                                                                        >
                                                                          Clear
                                                                        </span>
                                                                      </a>
                                                                    </div>
                                                                  </div>
                                                                </div>
                                                              </div>
                                                            </div>
                                                          </div>
                                                          <div
                                                            class="_4bl7"
                                                            style={{
                                                              position:
                                                                "relative",
                                                            }}
                                                          >
                                                            <div class="x1iorvi4 xjkvuk6">
                                                              <div>
                                                                <div
                                                                  style={{
                                                                    backgroundColor:
                                                                      "white",
                                                                  }}
                                                                  aria-busy="false"
                                                                  class="x1i10hfl xjqpnuy xa49m3k xqeqjp1 x2hbi6w x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli x16tdsg8 xggy1nq x1ja2u2z x1t137rt x6s0dn4 x1ejq31n xd10rxx x1sy0etr x17r0tee x3nfvp2 xdl72j9 x1q0g3np x2lah0s x193iq5w x1n2onr6 x1hl2dhg x87ps6o xxymvpz xlh3980 xvmahel x1lku1pv xhk9q7s x1otrzb0 x1i1ezom x1o6z2jb xo1l8bm x108nfp6 xas4zb2 x1y1aw1k xwib8y2 x1ye3gou xn6708d"
                                                                  role="button"
                                                                  tabindex="0"
                                                                >
                                                                  <span class="x8t9es0 x1fvot60 xxio538 x1heor9g xq9mrsl x1h4wwuj x1pd3egz xeuugli xh8yej3">
                                                                    <div
                                                                      style={{
                                                                        backgroundColor:
                                                                          "white",
                                                                      }}
                                                                      class="x78zum5"
                                                                      onClick={() =>
                                                                        setShowCalender(
                                                                          !showcalender
                                                                        )
                                                                      }
                                                                    >
                                                                      <div
                                                                        style={{
                                                                          backgroundColor:
                                                                            "white",
                                                                        }}
                                                                        class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1hc1fzr x13dflua x6o7n8i xxziih7 x12w9bfk x1nhvcw1 xh8yej3"
                                                                      >
                                                                        <div
                                                                          aria-busy="false"
                                                                          class="x1i10hfl xjqpnuy xa49m3k xqeqjp1 x2hbi6w x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli x16tdsg8 xggy1nq x1ja2u2z x6s0dn4 x1ejq31n xd10rxx x1sy0etr x17r0tee x3nfvp2 xdl72j9 x1q0g3np x2lah0s x193iq5w x1n2onr6 x1hl2dhg x87ps6o xxymvpz xlh3980 xvmahel x1lku1pv x1g40iwv x1lcm9me x1yr5g0i xrt01vj x10y3i5r x1ob88yx xaatb59 x1qgsegg xo1l8bm xbsr9hj x1v911su x1y1aw1k xwib8y2 x1ye3gou xn6708d snipcss-RjeQV"
                                                                          role="button"
                                                                          tabindex="0"
                                                                          data-auto-logging-id="f8c148cd6"
                                                                        >
                                                                          <span class="xmi5d70 x1fvot60 xxio538 x1heor9g xq9mrsl x1h4wwuj x1pd3egz xeuugli xh8yej3">
                                                                            <div class="x78zum5">
                                                                              <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1hc1fzr x13dflua x6o7n8i xxziih7 x12w9bfk x1nhvcw1 xh8yej3">
                                                                                <div
                                                                                  class="x3nfvp2 x120ccyz x1heor9g x2lah0s x1c4vz4f"
                                                                                  role="presentation"
                                                                                >
                                                                                  <div
                                                                                    class="xtwfq29 style-VkEAs"
                                                                                    id="style-VkEAs"
                                                                                  ></div>
                                                                                </div>
                                                                                <div class="x1xqt7ti x1fvot60 xk50ysn xxio538 x1heor9g xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj xeuugli x1iyjqo2">
                                                                                  {isCurrentMonth(
                                                                                    startDate,
                                                                                    endDate
                                                                                  ) &&
                                                                                    "This month:"}{" "}
                                                                                  {formatDate(
                                                                                    startDate
                                                                                  )}{" "}
                                                                                  -
                                                                                  {formatDate(
                                                                                    endDate
                                                                                  )}
                                                                                </div>
                                                                                <div
                                                                                  class="x3nfvp2 x120ccyz x1heor9g x2lah0s x1c4vz4f x1gryazu"
                                                                                  role="presentation"
                                                                                >
                                                                                  <div
                                                                                    class="xtwfq29 style-qM1vx"
                                                                                    id="style-qM1vx"
                                                                                  ></div>
                                                                                </div>
                                                                              </div>
                                                                            </div>
                                                                          </span>
                                                                        </div>
                                                                      </div>
                                                                    </div>
                                                                  </span>
                                                                </div>
                                                              </div>
                                                            </div>
                                                          </div>
                                                          {showcalender && (
                                                            <div
                                                              style={{
                                                                position:
                                                                  "absolute",
                                                                top: "48px",
                                                                right: "-230px",
                                                                zIndex: 3000,
                                                              }}
                                                            >
                                                              <div className="latestreporting-calendar-container">
                                                                <div className="latestreporting-left-options">
                                                                  {[
                                                                    "Maximum",
                                                                    "Today",
                                                                    "Yesterday",
                                                                    "Last 7 Days",
                                                                    "Last 14 Days",
                                                                    "Last 30 Days",
                                                                    "This Week",
                                                                    "Last Week",
                                                                    "This Month",
                                                                    "Last Month",
                                                                    "This Quarter",
                                                                    "Last Quarter",
                                                                    "This Year",
                                                                    "Last Year",
                                                                    "Custom",
                                                                  ].map(
                                                                    (
                                                                      option
                                                                    ) => (
                                                                      <div
                                                                        key={
                                                                          option
                                                                        }
                                                                        className="latestreporting-option"
                                                                      >
                                                                        <input
                                                                          type="radio"
                                                                          id={
                                                                            option
                                                                          }
                                                                          name="date-range"
                                                                          value={
                                                                            option
                                                                          }
                                                                          checked={
                                                                            selectedOption ===
                                                                            option
                                                                          }
                                                                          onChange={() =>
                                                                            handleOptionChange(
                                                                              option
                                                                            )
                                                                          }
                                                                        />
                                                                        <label
                                                                          htmlFor={
                                                                            option
                                                                          }
                                                                        >
                                                                          {
                                                                            option
                                                                          }
                                                                        </label>
                                                                      </div>
                                                                    )
                                                                  )}
                                                                </div>
                                                                <div>
                                                                  <div className="latestreporting-calendar-wrapper">
                                                                    <div className="latestreporting-calendar">
                                                                      <div className="latestreporting-month">
                                                                        <button
                                                                          onClick={
                                                                            handlePrevMonth
                                                                          }
                                                                        >
                                                                          <ChevronLeftIcon
                                                                            style={{
                                                                              width:
                                                                                "20px",
                                                                              height:
                                                                                "20px",
                                                                            }}
                                                                          />
                                                                        </button>
                                                                        <span
                                                                          style={{
                                                                            color:
                                                                              "#606770",
                                                                          }}
                                                                        >
                                                                          {currentMonth.toLocaleString(
                                                                            "default",
                                                                            {
                                                                              month:
                                                                                "long",
                                                                            }
                                                                          )}{" "}
                                                                          {currentMonth.getFullYear()}
                                                                        </span>
                                                                        <span
                                                                          style={{
                                                                            visibility:
                                                                              "hidden",
                                                                          }}
                                                                        >
                                                                          d
                                                                        </span>
                                                                      </div>
                                                                      <div className="latestreporting-day-labels">
                                                                        {[
                                                                          "Sun",
                                                                          "Mon",
                                                                          "Tues",
                                                                          "Wed",
                                                                          "Thurs",
                                                                          "Fri",
                                                                          "Sat",
                                                                        ].map(
                                                                          (
                                                                            day
                                                                          ) => (
                                                                            <div
                                                                              key={
                                                                                day
                                                                              }
                                                                            >
                                                                              {
                                                                                day
                                                                              }
                                                                            </div>
                                                                          )
                                                                        )}
                                                                      </div>
                                                                      <div className="latestreporting-days">
                                                                        {renderDays(
                                                                          currentMonth.getFullYear(),
                                                                          currentMonth.getMonth()
                                                                        )}
                                                                      </div>
                                                                    </div>

                                                                    <div className="latestreporting-calendar">
                                                                      <div
                                                                        className="latestreporting-month"
                                                                        style={{
                                                                          display:
                                                                            "flex",
                                                                          alignItems:
                                                                            "center",
                                                                          justifyContent:
                                                                            "space-between",
                                                                        }}
                                                                      >
                                                                        <span
                                                                          style={{
                                                                            visibility:
                                                                              "hidden",
                                                                          }}
                                                                        >
                                                                          ss
                                                                        </span>
                                                                        <span
                                                                          style={{
                                                                            color:
                                                                              "#606770",
                                                                          }}
                                                                        >
                                                                          {new Date(
                                                                            currentMonth.getFullYear(),
                                                                            currentMonth.getMonth() +
                                                                              1
                                                                          ).toLocaleString(
                                                                            "default",
                                                                            {
                                                                              month:
                                                                                "long",
                                                                            }
                                                                          )}{" "}
                                                                          {new Date(
                                                                            currentMonth.getFullYear(),
                                                                            currentMonth.getMonth() +
                                                                              1
                                                                          ).getFullYear()}
                                                                        </span>
                                                                        <button
                                                                          onClick={
                                                                            handleNextMonth
                                                                          }
                                                                        >
                                                                          <ChevronRightIcon
                                                                            style={{
                                                                              width:
                                                                                "20px",
                                                                              height:
                                                                                "20px",
                                                                            }}
                                                                          />
                                                                        </button>
                                                                      </div>
                                                                      <div className="latestreporting-day-labels">
                                                                        {[
                                                                          "Sun",
                                                                          "Mon",
                                                                          "Tues",
                                                                          "Wed",
                                                                          "Thurs",
                                                                          "Fri",
                                                                          "Sat",
                                                                        ].map(
                                                                          (
                                                                            day
                                                                          ) => (
                                                                            <div
                                                                              key={
                                                                                day
                                                                              }
                                                                            >
                                                                              {
                                                                                day
                                                                              }
                                                                            </div>
                                                                          )
                                                                        )}
                                                                      </div>
                                                                      <div className="latestreporting-days">
                                                                        {renderDays(
                                                                          currentMonth.getFullYear(),
                                                                          currentMonth.getMonth() +
                                                                            1
                                                                        )}
                                                                      </div>
                                                                    </div>
                                                                  </div>
                                                                  <div
                                                                    style={{
                                                                      marginRight:
                                                                        "45px",
                                                                    }}
                                                                    className="latestreporting-footer"
                                                                  >
                                                                    <select
                                                                      style={{
                                                                        minWidth:
                                                                          "180px",
                                                                        height:
                                                                          "40px",
                                                                        color:
                                                                          "#606770",
                                                                      }}
                                                                      value={
                                                                        selectedOption
                                                                      }
                                                                      onChange={(
                                                                        e
                                                                      ) =>
                                                                        handleOptionChange(
                                                                          e
                                                                            .target
                                                                            .value
                                                                        )
                                                                      }
                                                                    >
                                                                      {[
                                                                        "Maximum",
                                                                        "Today",
                                                                        "Yesterday",
                                                                        "Last 7 Days",
                                                                        "Last 14 Days",
                                                                        "Last 30 Days",
                                                                        "This Week",
                                                                        "Last Week",
                                                                        "This Month",
                                                                        "Last Month",
                                                                        "This Quarter",
                                                                        "Last Quarter",
                                                                        "This Year",
                                                                        "Last Year",
                                                                        "Custom",
                                                                      ].map(
                                                                        (
                                                                          option
                                                                        ) => (
                                                                          <option
                                                                            key={
                                                                              option
                                                                            }
                                                                            value={
                                                                              option
                                                                            }
                                                                          >
                                                                            {
                                                                              option
                                                                            }
                                                                          </option>
                                                                        )
                                                                      )}
                                                                    </select>
                                                                    <input
                                                                      style={{
                                                                        height:
                                                                          "28px",
                                                                        color:
                                                                          "#606770",
                                                                      }}
                                                                      type="text"
                                                                      value={
                                                                        startDate
                                                                          ? startDate.toDateString()
                                                                          : ""
                                                                      }
                                                                      readOnly
                                                                    />
                                                                    <input
                                                                      style={{
                                                                        height:
                                                                          "28px",
                                                                        color:
                                                                          "#606770",
                                                                      }}
                                                                      type="text"
                                                                      value={
                                                                        endDate
                                                                          ? endDate.toDateString()
                                                                          : ""
                                                                      }
                                                                      readOnly
                                                                    />
                                                                  </div>
                                                                  <br />
                                                                  <div
                                                                    style={{
                                                                      display:
                                                                        "flex",
                                                                      alignItems:
                                                                        "center",
                                                                      justifyContent:
                                                                        "space-between",
                                                                      marginRight:
                                                                        "45px",
                                                                    }}
                                                                  >
                                                                    <p
                                                                      style={{
                                                                        color:
                                                                          "gray",
                                                                        textAlign:
                                                                          "left",
                                                                      }}
                                                                    >
                                                                      Dates are
                                                                      shown in
                                                                      Karachi
                                                                      Time
                                                                    </p>
                                                                    <div>
                                                                      <button
                                                                        style={{
                                                                          padding:
                                                                            "10px",
                                                                          border:
                                                                            "1px solid gainsboro",
                                                                          backgroundColor:
                                                                            "transparent",
                                                                          borderRadius:
                                                                            "5px",
                                                                          width:
                                                                            "80px",

                                                                          marginRight:
                                                                            "5px",
                                                                        }}
                                                                      >
                                                                        Cancel
                                                                      </button>
                                                                      <button
                                                                        onClick={
                                                                          handleUpdateClick
                                                                        }
                                                                        style={{
                                                                          padding:
                                                                            "10px",
                                                                          width:
                                                                            "80px",
                                                                          border:
                                                                            "1px solid gainsboro",
                                                                          backgroundColor:
                                                                            "#0978bf",
                                                                          color:
                                                                            "white",
                                                                          outline:
                                                                            "none",
                                                                          borderRadius:
                                                                            "5px",
                                                                        }}
                                                                      >
                                                                        Update
                                                                      </button>
                                                                    </div>
                                                                  </div>
                                                                </div>
                                                              </div>
                                                            </div>
                                                          )}
                                                        </div>
                                                        <div class="xjm9jq1 xg01cxk x47corl xh8yej3 x1y332i5"></div>
                                                      </div>
                                                      <div class="x10wjd1d x47corl x10l6tqk x19991ni x13dflua xwji4o3 xh8yej3 xg01cxk x67dex8 x13vifvy"></div>
                                                      <div class="x10wjd1d x47corl x10l6tqk x19991ni x13dflua xwji4o3 xh8yej3 xg01cxk x1ta9b4f x1ey2m1c"></div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                              {isFocused && (
                                                <div
                                                  style={{
                                                    position: "absolute",
                                                    top: "128px",
                                                    borderRadius: "10px",
                                                    padding: "5px 10px",
                                                    left: "60px",
                                                    zIndex: 3000,
                                                    backgroundColor: "white",
                                                    width: "380px",
                                                    boxShadow:
                                                      "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em",
                                                  }}
                                                >
                                                  {/* sir filters */}
                                                  <div
                                                    style={{
                                                      textAlign: "left",
                                                    }}
                                                  >
                                                    <div
                                                      width="400"
                                                      class="uiScrollableArea nofade uiScrollableAreaWithShadow contentAfter"
                                                    >
                                                      <div
                                                        class="uiScrollableAreaWrap scrollable style-H7aSM"
                                                        id="style-H7aSM"
                                                      >
                                                        <div
                                                          class="uiScrollableAreaBody style-SMWs1"
                                                          id="style-SMWs1"
                                                        >
                                                          <div class="">
                                                            <ul></ul>
                                                            <ul>
                                                              <div
                                                                class="xmix8c7 x1xmf6yo xw3qccf x12nagc xsgj6o6 x6ikm8r x10wlt62 x1iorvi4 xn6708d xjkvuk6 x1ye3gou xlyipyv xuxw1ft"
                                                                id="FILTER_SECTION_ID"
                                                              >
                                                                <span
                                                                  id="style-SskBX"
                                                                  class="style-SskBX"
                                                                >
                                                                  Filters
                                                                </span>
                                                              </div>
                                                              <li>
                                                                <div
                                                                  class="xhk9q7s x1otrzb0 x1i1ezom x1o6z2jb x1ypdohk x78zum5 xmix8c7 x1gslohp xw3qccf x12nagc xsgj6o6 x1iorvi4 xn6708d xjkvuk6 x1ye3gou"
                                                                  data-testid="typeahead-filter-option"
                                                                >
                                                                  <span class="x1iyjqo2 x6ikm8r x10wlt62 xlyipyv x1sdyfia">
                                                                    <span
                                                                      id="style-8j3Fy"
                                                                      class="style-8j3Fy"
                                                                    >
                                                                      <span class="x8t9es0 x1fvot60 xo1l8bm xxio538 x108nfp6 xq9mrsl x1h4wwuj xeuugli">
                                                                        Had
                                                                        delivery
                                                                      </span>
                                                                    </span>
                                                                    <div
                                                                      class="x1rg5ohu x67bb7w"
                                                                      id="js_3qb"
                                                                    >
                                                                      <div class="x8t9es0 x1fvot60 xxio538 x108nfp6 xq9mrsl x1h4wwuj x1fcty0u x78zum5 xl56j7k x6s0dn4">
                                                                        <span>
                                                                          ​
                                                                        </span>
                                                                        <div class="xjm9jq1 x78zum5 xl56j7k x6s0dn4">
                                                                          <div class="x78zum5 x1ypdohk x1uuroth x67bb7w xsgj6o6 xw3qccf">
                                                                            <div
                                                                              class="x3nfvp2 x120ccyz x4hq6eo"
                                                                              role="presentation"
                                                                            >
                                                                              <div
                                                                                class="xtwfq29 style-adIs5"
                                                                                id="style-adIs5"
                                                                              ></div>
                                                                            </div>
                                                                          </div>
                                                                        </div>
                                                                      </div>
                                                                    </div>
                                                                  </span>
                                                                </div>
                                                              </li>
                                                              <li>
                                                                <div class="x1lcm9me x1yr5g0i xrt01vj x10y3i5r x9f619 xg7h5cd x1gslohp xw3qccf x12nagc xsgj6o6 snipcss0-0-0-1">
                                                                  <div
                                                                    class="_741l _741m snipcss0-1-1-2"
                                                                    data-testid="typeahead-filter-options-group"
                                                                  >
                                                                    <div
                                                                      style={{
                                                                        display:
                                                                          "flex",
                                                                        alignItems:
                                                                          "center",
                                                                        justifyContent:
                                                                          "space-between",
                                                                      }}
                                                                      class="x1iyjqo2 x6ikm8r x10wlt62 xlyipyv snipcss0-2-2-3"
                                                                    >
                                                                      <span
                                                                        class="snipcss0-3-3-4 style-mdWUh"
                                                                        id="style-mdWUh"
                                                                      >
                                                                        Name/ID
                                                                      </span>
                                                                      <div>
                                                                        <i
                                                                          class="_741p img snipcss0-2-2-5 style-CUJXw"
                                                                          alt=""
                                                                          data-visualcompletion="css-img"
                                                                          id="style-CUJXw"
                                                                        ></i>
                                                                      </div>
                                                                    </div>
                                                                  </div>
                                                                  <ul class="x2izyaf x1lcm9me x1yr5g0i xrt01vj x10y3i5r x9f619 xdj266r xq8finb x12nagc x16n37ib x6ikm8r x10wlt62 snipcss0-1-1-6">
                                                                    <li class="snipcss0-2-6-7">
                                                                      <div
                                                                        class="xhk9q7s x1otrzb0 x1i1ezom x1o6z2jb x1ypdohk x78zum5 xmix8c7 x1gslohp xw3qccf x12nagc xsgj6o6 x1iorvi4 xn6708d xjkvuk6 x1ye3gou"
                                                                        data-testid="typeahead-filter-option"
                                                                      >
                                                                        <span class="x1iyjqo2 x6ikm8r x10wlt62 xlyipyv x1sdyfia snipcss0-4-8-9">
                                                                          <span
                                                                            class="snipcss0-5-9-10 style-nabHz"
                                                                            id="style-nabHz"
                                                                          >
                                                                            <span class="x8t9es0 x1fvot60 xo1l8bm xxio538 x108nfp6 xq9mrsl x1h4wwuj xeuugli snipcss0-6-10-11">
                                                                              Campaign
                                                                              name
                                                                            </span>
                                                                          </span>
                                                                        </span>
                                                                      </div>
                                                                    </li>
                                                                    <li class="snipcss0-2-6-12">
                                                                      <div
                                                                        class="xhk9q7s x1otrzb0 x1i1ezom x1o6z2jb x1ypdohk x78zum5 xmix8c7 x1gslohp xw3qccf x12nagc xsgj6o6 x1iorvi4 xn6708d xjkvuk6 x1ye3gou"
                                                                        data-testid="typeahead-filter-option"
                                                                      >
                                                                        <span class="x1iyjqo2 x6ikm8r x10wlt62 xlyipyv x1sdyfia snipcss0-4-13-14">
                                                                          <span
                                                                            class="snipcss0-5-14-15 style-DGQHo"
                                                                            id="style-DGQHo"
                                                                          >
                                                                            <span class="x8t9es0 x1fvot60 xo1l8bm xxio538 x108nfp6 xq9mrsl x1h4wwuj xeuugli snipcss0-6-15-16">
                                                                              Ad
                                                                              Set
                                                                              Name
                                                                            </span>
                                                                          </span>
                                                                        </span>
                                                                      </div>
                                                                    </li>
                                                                    <li class="snipcss0-2-6-17">
                                                                      <div
                                                                        class="xhk9q7s x1otrzb0 x1i1ezom x1o6z2jb x1ypdohk x78zum5 xmix8c7 x1gslohp xw3qccf x12nagc xsgj6o6 x1iorvi4 xn6708d xjkvuk6 x1ye3gou x1b9h4xk"
                                                                        data-testid="typeahead-filter-option"
                                                                      >
                                                                        <span class="x1iyjqo2 x6ikm8r x10wlt62 xlyipyv x1sdyfia snipcss0-4-18-19">
                                                                          <span
                                                                            class="snipcss0-5-19-20 style-mCrYB"
                                                                            id="style-mCrYB"
                                                                          >
                                                                            <span class="x8t9es0 x1fvot60 xo1l8bm xxio538 x108nfp6 xq9mrsl x1h4wwuj xeuugli snipcss0-6-20-21">
                                                                              Ad
                                                                              Name
                                                                            </span>
                                                                          </span>
                                                                        </span>
                                                                      </div>
                                                                    </li>
                                                                    <li
                                                                      onClick={() => {
                                                                        setcampaignbox(
                                                                          true
                                                                        );
                                                                        setIsFocused(
                                                                          false
                                                                        );
                                                                      }}
                                                                      class="snipcss0-2-6-22"
                                                                    >
                                                                      <div
                                                                        class="xhk9q7s x1otrzb0 x1i1ezom x1o6z2jb x1ypdohk x78zum5 xmix8c7 x1gslohp xw3qccf x12nagc xsgj6o6 x1iorvi4 xn6708d xjkvuk6 x1ye3gou"
                                                                        data-testid="typeahead-filter-option"
                                                                      >
                                                                        <span class="x1iyjqo2 x6ikm8r x10wlt62 xlyipyv x1sdyfia snipcss0-4-23-24">
                                                                          <span
                                                                            class="snipcss0-5-24-25 style-WJ7BU"
                                                                            id="style-WJ7BU"
                                                                          >
                                                                            <span class="x8t9es0 x1fvot60 xo1l8bm xxio538 x108nfp6 xq9mrsl x1h4wwuj xeuugli snipcss0-6-25-26">
                                                                              Page
                                                                              ID
                                                                            </span>
                                                                          </span>
                                                                        </span>
                                                                      </div>
                                                                    </li>
                                                                    <li class="snipcss0-2-6-27">
                                                                      <div
                                                                        class="xhk9q7s x1otrzb0 x1i1ezom x1o6z2jb x1ypdohk x78zum5 xmix8c7 x1gslohp xw3qccf x12nagc xsgj6o6 x1iorvi4 xn6708d xjkvuk6 x1ye3gou"
                                                                        data-testid="typeahead-filter-option"
                                                                      >
                                                                        <span class="x1iyjqo2 x6ikm8r x10wlt62 xlyipyv x1sdyfia snipcss0-4-28-29">
                                                                          <span
                                                                            class="snipcss0-5-29-30 style-CXNTB"
                                                                            id="style-CXNTB"
                                                                          >
                                                                            <span class="x8t9es0 x1fvot60 xo1l8bm xxio538 x108nfp6 xq9mrsl x1h4wwuj xeuugli snipcss0-6-30-31">
                                                                              Ad
                                                                              set
                                                                              ID
                                                                            </span>
                                                                          </span>
                                                                        </span>
                                                                      </div>
                                                                    </li>
                                                                    <li class="snipcss0-2-6-32">
                                                                      <div
                                                                        class="xhk9q7s x1otrzb0 x1i1ezom x1o6z2jb x1ypdohk x78zum5 xmix8c7 x1gslohp xw3qccf x12nagc xsgj6o6 x1iorvi4 xn6708d xjkvuk6 x1ye3gou"
                                                                        data-testid="typeahead-filter-option"
                                                                      >
                                                                        <span class="x1iyjqo2 x6ikm8r x10wlt62 xlyipyv x1sdyfia snipcss0-4-33-34">
                                                                          <span
                                                                            class="snipcss0-5-34-35 style-P8e8z"
                                                                            id="style-P8e8z"
                                                                          >
                                                                            <span class="x8t9es0 x1fvot60 xo1l8bm xxio538 x108nfp6 xq9mrsl x1h4wwuj xeuugli snipcss0-6-35-36">
                                                                              Ad
                                                                              ID
                                                                            </span>
                                                                          </span>
                                                                        </span>
                                                                      </div>
                                                                    </li>
                                                                  </ul>
                                                                </div>
                                                              </li>
                                                              <li>
                                                                <div
                                                                  class="_741l"
                                                                  data-testid="typeahead-filter-options-group"
                                                                >
                                                                  <div
                                                                    style={{
                                                                      display:
                                                                        "flex",
                                                                      alignItems:
                                                                        "center",
                                                                      justifyContent:
                                                                        "space-between",
                                                                    }}
                                                                    class="x1iyjqo2 x6ikm8r x10wlt62 xlyipyv"
                                                                  >
                                                                    <span
                                                                      id="style-WWSPP"
                                                                      class="style-WWSPP"
                                                                    >
                                                                      Delivery
                                                                    </span>
                                                                    <div>
                                                                      <i
                                                                        class="_741p img style-IUEGB"
                                                                        alt=""
                                                                        data-visualcompletion="css-img"
                                                                        id="style-IUEGB"
                                                                      ></i>
                                                                    </div>
                                                                  </div>
                                                                </div>
                                                              </li>
                                                              <li>
                                                                <div
                                                                  class="xhk9q7s x1otrzb0 x1i1ezom x1o6z2jb x1ypdohk x78zum5 xmix8c7 x1gslohp xw3qccf x12nagc xsgj6o6 x1iorvi4 xn6708d xjkvuk6 x1ye3gou"
                                                                  data-testid="typeahead-filter-option"
                                                                >
                                                                  <span class="x1iyjqo2 x6ikm8r x10wlt62 xlyipyv x1sdyfia">
                                                                    <span
                                                                      id="style-mrYaN"
                                                                      class="style-mrYaN"
                                                                    >
                                                                      <span class="x8t9es0 x1fvot60 xo1l8bm xxio538 x108nfp6 xq9mrsl x1h4wwuj xeuugli">
                                                                        Objective
                                                                      </span>
                                                                    </span>
                                                                  </span>
                                                                </div>
                                                              </li>
                                                              <li>
                                                                <div
                                                                  class="xhk9q7s x1otrzb0 x1i1ezom x1o6z2jb x1ypdohk x78zum5 xmix8c7 x1gslohp xw3qccf x12nagc xsgj6o6 x1iorvi4 xn6708d xjkvuk6 x1ye3gou"
                                                                  data-testid="typeahead-filter-option"
                                                                >
                                                                  <span class="x1iyjqo2 x6ikm8r x10wlt62 xlyipyv x1sdyfia">
                                                                    <span
                                                                      id="style-AfC3n"
                                                                      class="style-AfC3n"
                                                                    >
                                                                      <span class="x8t9es0 x1fvot60 xo1l8bm xxio538 x108nfp6 xq9mrsl x1h4wwuj xeuugli">
                                                                        Buying
                                                                        type
                                                                      </span>
                                                                    </span>
                                                                  </span>
                                                                </div>
                                                              </li>
                                                              <li>
                                                                <div
                                                                  class="xhk9q7s x1otrzb0 x1i1ezom x1o6z2jb x1ypdohk x78zum5 xmix8c7 x1gslohp xw3qccf x12nagc xsgj6o6 x1iorvi4 xn6708d xjkvuk6 x1ye3gou"
                                                                  data-testid="typeahead-filter-option"
                                                                >
                                                                  <span class="x1iyjqo2 x6ikm8r x10wlt62 xlyipyv x1sdyfia">
                                                                    <span
                                                                      id="style-eUwjN"
                                                                      class="style-eUwjN"
                                                                    >
                                                                      <span class="x8t9es0 x1fvot60 xo1l8bm xxio538 x108nfp6 xq9mrsl x1h4wwuj xeuugli">
                                                                        Impression
                                                                        device
                                                                      </span>
                                                                    </span>
                                                                  </span>
                                                                </div>
                                                              </li>
                                                              <li>
                                                                <div
                                                                  class="xhk9q7s x1otrzb0 x1i1ezom x1o6z2jb x1ypdohk x78zum5 xmix8c7 x1gslohp xw3qccf x12nagc xsgj6o6 x1iorvi4 xn6708d xjkvuk6 x1ye3gou"
                                                                  data-testid="typeahead-filter-option"
                                                                >
                                                                  <span class="x1iyjqo2 x6ikm8r x10wlt62 xlyipyv x1sdyfia">
                                                                    <span
                                                                      id="style-lg9SK"
                                                                      class="style-lg9SK"
                                                                    >
                                                                      <span class="x8t9es0 x1fvot60 xo1l8bm xxio538 x108nfp6 xq9mrsl x1h4wwuj xeuugli">
                                                                        Placement
                                                                      </span>
                                                                    </span>
                                                                  </span>
                                                                </div>
                                                              </li>
                                                              <li>
                                                                <div
                                                                  class="_741l"
                                                                  data-testid="typeahead-filter-options-group"
                                                                >
                                                                  <div class="x1iyjqo2 x6ikm8r x10wlt62 xlyipyv">
                                                                    <span
                                                                      id="style-t19YL"
                                                                      class="style-t19YL"
                                                                    >
                                                                      Metrics
                                                                    </span>
                                                                    <div class="x1rg5ohu x67bb7w">
                                                                      <div class="x8t9es0 x1fvot60 xxio538 x108nfp6 xq9mrsl x1h4wwuj x1fcty0u x78zum5 xl56j7k x6s0dn4">
                                                                        <span>
                                                                          ​
                                                                        </span>
                                                                        <div class="xjm9jq1 x78zum5 xl56j7k x6s0dn4">
                                                                          <div class="x78zum5 x1ypdohk x1uuroth x67bb7w xsgj6o6 xw3qccf">
                                                                            <div
                                                                              class="x3nfvp2 x120ccyz x4hq6eo"
                                                                              role="presentation"
                                                                            >
                                                                              <div
                                                                                class="xtwfq29 style-e25ZD"
                                                                                id="style-e25ZD"
                                                                              ></div>
                                                                            </div>
                                                                          </div>
                                                                        </div>
                                                                      </div>
                                                                    </div>
                                                                  </div>
                                                                  <i
                                                                    class="_741p img style-OE1d1"
                                                                    alt=""
                                                                    data-visualcompletion="css-img"
                                                                    id="style-OE1d1"
                                                                  ></i>
                                                                </div>
                                                              </li>
                                                              <li>
                                                                <div
                                                                  class="_741l"
                                                                  data-testid="typeahead-filter-options-group"
                                                                >
                                                                  <div class="x1iyjqo2 x6ikm8r x10wlt62 xlyipyv">
                                                                    <span
                                                                      id="style-Nglii"
                                                                      class="style-Nglii"
                                                                    >
                                                                      Creative
                                                                    </span>
                                                                  </div>
                                                                  <i
                                                                    class="_741p img style-cvhXs"
                                                                    alt=""
                                                                    data-visualcompletion="css-img"
                                                                    id="style-cvhXs"
                                                                  ></i>
                                                                </div>
                                                              </li>
                                                              <li>
                                                                <div
                                                                  class="_741l"
                                                                  data-testid="typeahead-filter-options-group"
                                                                >
                                                                  <div class="x1iyjqo2 x6ikm8r x10wlt62 xlyipyv">
                                                                    <span
                                                                      id="style-Qv2Pn"
                                                                      class="style-Qv2Pn"
                                                                    >
                                                                      Audience
                                                                    </span>
                                                                  </div>
                                                                  <i
                                                                    class="_741p img style-kamoc"
                                                                    alt=""
                                                                    data-visualcompletion="css-img"
                                                                    id="style-kamoc"
                                                                  ></i>
                                                                </div>
                                                              </li>
                                                              <li>
                                                                <div
                                                                  class="xhk9q7s x1otrzb0 x1i1ezom x1o6z2jb x1ypdohk x78zum5 xmix8c7 x1gslohp xw3qccf x12nagc xsgj6o6 x1iorvi4 xn6708d xjkvuk6 x1ye3gou"
                                                                  data-testid="typeahead-filter-option"
                                                                >
                                                                  <span class="x1iyjqo2 x6ikm8r x10wlt62 xlyipyv x1sdyfia">
                                                                    <span
                                                                      id="style-SiixR"
                                                                      class="style-SiixR"
                                                                    >
                                                                      <span class="x8t9es0 x1fvot60 xo1l8bm xxio538 x108nfp6 xq9mrsl x1h4wwuj xeuugli">
                                                                        Attribution
                                                                        setting
                                                                      </span>
                                                                    </span>
                                                                  </span>
                                                                </div>
                                                              </li>
                                                            </ul>
                                                          </div>
                                                        </div>
                                                      </div>
                                                      <div
                                                        class="uiScrollableAreaTrack"
                                                        data-interactable="|click|"
                                                      >
                                                        <div
                                                          class="uiScrollableAreaGripper style-LeU6O"
                                                          id="style-LeU6O"
                                                        ></div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              )}
                                              {campaignbox && (
                                                <div
                                                  style={{
                                                    position: "absolute",
                                                    top: "125px",
                                                    borderRadius: "10px",
                                                    padding: "5px 10px",
                                                    left: "68px",
                                                    zIndex: 3000,
                                                    backgroundColor: "white",
                                                    width: "240px",
                                                    textAlign: "left",
                                                    boxShadow:
                                                      "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em",
                                                  }}
                                                >
                                                  <div
                                                    data-surface="/am"
                                                    data-interactable="|click||input||keydown||keyup||mouseover||change|"
                                                    class="_53ij snipcss-i4pIO"
                                                  >
                                                    <div class="">
                                                      <div
                                                        class="_768c style-NPAzz"
                                                        role="none"
                                                        data-auto-logging-id="f5563e0dc"
                                                        id="style-NPAzz"
                                                      >
                                                        <div class="_768d">
                                                          <span
                                                            id="style-A6p6w"
                                                            class="style-A6p6w"
                                                          >
                                                            Page ID
                                                          </span>
                                                        </div>
                                                        <div class="_768e">
                                                          <div
                                                            style={{
                                                              display: "flex",
                                                              alignItems:
                                                                "center",
                                                              margin: "9px 0px",
                                                            }}
                                                            class="_768f"
                                                          >
                                                            <div
                                                              style={{
                                                                marginRight:
                                                                  "20px",
                                                                display: "flex",
                                                                alignItems:
                                                                  "center",
                                                              }}
                                                            >
                                                              <div class="x6s0dn4 x3nfvp2 x1q0g3np xozqiw3 x2lwn1j xeuugli x1c4vz4f x19lwn94 xqcrz7y x2lah0s">
                                                                <div class="x1rg5ohu x1n2onr6 x3oybdh">
                                                                  <div class="x1n2onr6 x14atkfc">
                                                                    <div class="x6s0dn4 x78zum5 x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x178xt8z xm81vs4 xso031l xy80clv xwebqov xvyu6v8 xrsgblv x10lij0i xzolkzo x12go9s9 x1rnf11y xprq8jg x1gzqxud xbsr9hj x9f619 xexx8yu x4uap5 x18d9i69 xkhd6sd xl56j7k xxk0z11 xvy4d1p">
                                                                      <div class=""></div>
                                                                      <input
                                                                        aria-checked="true"
                                                                        aria-disabled="false"
                                                                        aria-describedby="js_yp"
                                                                        aria-labelledby="js_yq"
                                                                        class="xjyslct x1ypdohk x5yr21d x17qophe xdj266r x11i5rnm xat24cr x1mh8g0r x1w3u9th x1t137rt x10l6tqk x13vifvy xh8yej3 x1vjfegm"
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
                                                              <span
                                                                style={{
                                                                  marginLeft:
                                                                    "10px",
                                                                }}
                                                              >
                                                                is
                                                              </span>
                                                            </div>
                                                            <div
                                                              style={{
                                                                display: "flex",
                                                                alignItems:
                                                                  "center",
                                                              }}
                                                            >
                                                              <div class="x6s0dn4 x3nfvp2 x1q0g3np xozqiw3 x2lwn1j xeuugli x1c4vz4f x19lwn94 xqcrz7y x2lah0s">
                                                                <div class="x1rg5ohu x1n2onr6 x3oybdh">
                                                                  <div class="x1n2onr6 x14atkfc">
                                                                    <div class="x6s0dn4 x78zum5 x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x178xt8z xm81vs4 xso031l xy80clv xwebqov xvyu6v8 xrsgblv x10lij0i xzolkzo x12go9s9 x1rnf11y xprq8jg x10cdfl8 xis6omg x9f619 xexx8yu x4uap5 x18d9i69 xkhd6sd xl56j7k xxk0z11 xvy4d1p">
                                                                      <div class="x1s85apg"></div>
                                                                      <input
                                                                        aria-checked="false"
                                                                        aria-disabled="true"
                                                                        aria-describedby="js_13q"
                                                                        aria-labelledby="js_13r"
                                                                        class="xjyslct x1ypdohk x5yr21d x17qophe xdj266r x11i5rnm xat24cr x1mh8g0r x1w3u9th x1t137rt x10l6tqk x13vifvy xh8yej3 x1vjfegm x47corl"
                                                                        disabled=""
                                                                        id="js_13p"
                                                                        type="radio"
                                                                        value="INSTAGRAM_PROFILE"
                                                                        name="js_132"
                                                                      />
                                                                      <div class="x13dflua xnnyp6c x12w9bfk x78zum5 xg01cxk x1f85oc2 x6o7n8i">
                                                                        <div class="xsmyaan x1kpxq89 xzolkzo x12go9s9 x1rnf11y xprq8jg xo1l8bm x22siqj xis6omg"></div>
                                                                      </div>
                                                                    </div>
                                                                    <div class="xwebqov xvyu6v8 xrsgblv x10lij0i xzolkzo x12go9s9 x1rnf11y xprq8jg x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x178xt8z xm81vs4 xso031l xy80clv x13dflua x6o7n8i xxziih7 x12w9bfk xg01cxk x47corl x10l6tqk x17qophe xds687c x13vifvy x1ey2m1c x6ikm8r x10wlt62 xnl74ce xmb4j5p xdx8kah xwmxa91 xmn8db3 x8lbu6m x2te4dl x1bs8fl3 xhhp2wi x14q35kh x1wa3ocq x1n7iyjn x1t0di37 x1tt7eqi xe25xm5 xsp6npd x1s928wv x1w3onc2 x1j6awrg x9obomg x1ryaxvv x1hvfe8t x1te75w5"></div>
                                                                  </div>
                                                                </div>
                                                              </div>
                                                              <span
                                                                style={{
                                                                  marginLeft:
                                                                    "10px",
                                                                }}
                                                              >
                                                                is not
                                                              </span>
                                                            </div>
                                                          </div>
                                                          <div class="_768g">
                                                            <div class="_6-m8">
                                                              <div class="xktsk01">
                                                                <span
                                                                  class="_6-kx _6-ky _58ah"
                                                                  placeholder="Typing IDs to select campaigns"
                                                                >
                                                                  <label
                                                                    style={{
                                                                      borderRadius:
                                                                        "5px",
                                                                    }}
                                                                    class="_58ak _3ct8"
                                                                    id="js_7v8"
                                                                  >
                                                                    <input
                                                                      style={{
                                                                        width:
                                                                          "190px",
                                                                        padding:
                                                                          "10px",
                                                                        textAlign:
                                                                          "left",
                                                                        border:
                                                                          "2px solid #0A78BE",
                                                                        borderRadius:
                                                                          "5px",
                                                                        overflow:
                                                                          "hidden",
                                                                      }}
                                                                      class="_58al"
                                                                      onChange={(
                                                                        e
                                                                      ) =>
                                                                        setShowID(
                                                                          e
                                                                            .target
                                                                            .value
                                                                        )
                                                                      }
                                                                      placeholder="Typing IDs to select campaigns"
                                                                      type="text"
                                                                    />
                                                                  </label>
                                                                </span>
                                                              </div>
                                                              <ul></ul>
                                                            </div>
                                                          </div>
                                                          <br />
                                                          <div
                                                            style={{
                                                              display: "flex",
                                                              alignSelf:
                                                                "flex-end",
                                                            }}
                                                            class="x78zum5 x1qughib x2lwn1j xeuugli"
                                                          >
                                                            <div class="_768h">
                                                              <div
                                                                style={{
                                                                  marginRight:
                                                                    "10px",
                                                                }}
                                                                class="x3nfvp2 x193iq5w xxymvpz x1i64zmx"
                                                                role="none"
                                                              >
                                                                <div
                                                                  onClick={() =>
                                                                    setcampaignbox(
                                                                      (e) => !e
                                                                    )
                                                                  }
                                                                  aria-busy="false"
                                                                  class="x1i10hfl xjqpnuy xa49m3k xqeqjp1 x2hbi6w x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli x16tdsg8 xggy1nq x1ja2u2z x1t137rt x6s0dn4 x1ejq31n xd10rxx x1sy0etr x17r0tee x3nfvp2 xdl72j9 x1q0g3np x2lah0s x193iq5w x1n2onr6 x1hl2dhg x87ps6o xxymvpz xlh3980 xvmahel x1lku1pv x1g40iwv x1lcm9me x1yr5g0i xrt01vj x10y3i5r xo1l8bm x140t73q x19bke7z x1y1aw1k xwib8y2 x1swvt13 x1pi30zi"
                                                                  role="button"
                                                                  tabindex="0"
                                                                >
                                                                  <span class="xmi5d70 x1fvot60 xxio538 x1heor9g xq9mrsl x1h4wwuj x1pd3egz xeuugli xh8yej3">
                                                                    <div class="x78zum5">
                                                                      <div
                                                                        onClick={
                                                                          handleApplyClick
                                                                        }
                                                                        class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1hc1fzr x13dflua x6o7n8i xxziih7 x12w9bfk xl56j7k xh8yej3"
                                                                      >
                                                                        <div class="x1xqt7ti x1fvot60 xk50ysn xxio538 x1heor9g xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj xeuugli">
                                                                          Apply
                                                                        </div>
                                                                      </div>
                                                                    </div>
                                                                  </span>
                                                                </div>
                                                              </div>
                                                              <div
                                                                class="x3nfvp2 x193iq5w xxymvpz"
                                                                role="none"
                                                              >
                                                                <div
                                                                  aria-busy="false"
                                                                  class="x1i10hfl xjqpnuy xa49m3k xqeqjp1 x2hbi6w x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli x16tdsg8 xggy1nq x1ja2u2z x6s0dn4 x1ejq31n xd10rxx x1sy0etr x17r0tee x3nfvp2 xdl72j9 x1q0g3np x2lah0s x193iq5w x1n2onr6 x1hl2dhg x87ps6o xxymvpz xlh3980 xvmahel x1lku1pv x1g40iwv x1lcm9me x1yr5g0i xrt01vj x10y3i5r x1ob88yx xaatb59 x1qgsegg xo1l8bm xbsr9hj x1v911su x1y1aw1k xwib8y2 x1swvt13 x1pi30zi"
                                                                  role="button"
                                                                  tabindex="0"
                                                                >
                                                                  <span class="xmi5d70 x1fvot60 xxio538 x1heor9g xq9mrsl x1h4wwuj x1pd3egz xeuugli xh8yej3">
                                                                    <div class="x78zum5">
                                                                      <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1hc1fzr x13dflua x6o7n8i xxziih7 x12w9bfk xl56j7k xh8yej3">
                                                                        <div class="x1xqt7ti x1fvot60 xk50ysn xxio538 x1heor9g xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj xeuugli">
                                                                          Cancel
                                                                        </div>
                                                                      </div>
                                                                    </div>
                                                                  </span>
                                                                </div>
                                                              </div>
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              )}
                                              <div
                                                style={{
                                                  backgroundColor: "white",
                                                }}
                                                class="_4u-c"
                                              >
                                                <div class="_941t">
                                                  <div
                                                    class="x6s0dn4 x78zum5 x1nhvcw1 x19lwn94"
                                                    role="toolbar"
                                                    data-auto-logging-component-type="GeoToolBar"
                                                  >
                                                    <div
                                                      class="x6s0dn4 x78zum5 x1nhvcw1 x19lwn94"
                                                      data-auto-logging-component-type="GeoToolBar"
                                                    >
                                                      <div class="x6s0dn4 x78zum5 x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x178xt8z xm81vs4 xso031l xy80clv xwebqov xvyu6v8 xrsgblv x10lij0i x1lcm9me x1yr5g0i xrt01vj x10y3i5r x1gzqxud xbsr9hj xm7lytj x1ykpatu xlu9dua x1w2lkzu snipcss-8DOFT">
                                                        <div class=""></div>
                                                        <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94">
                                                          <div class="x6s0dn4 x78zum5 x1q0g3np x1a02dak x2lwn1j xeuugli x1iyjqo2 x19lwn94">
                                                            <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94">
                                                              <div class="x6s0dn4 x3nfvp2 x1q0g3np xozqiw3 x2lwn1j xeuugli x1c4vz4f x19lwn94 xmi5d70 x1fvot60 xo1l8bm xxio538 xbsr9hj xq9mrsl xqcrz7y x2lah0s">
                                                                ​
                                                                <div class="x1lliihq x1n2onr6 x2lah0s xxk0z11 xvy4d1p x1lcm9me x1yr5g0i xrt01vj x10y3i5r xbmpl8g x9otpla x1wsgfga">
                                                                  <div
                                                                    class="x10l6tqk x6ikm8r x10wlt62 x13vifvy x17qophe xh8yej3 x5yr21d x1o1ewxj x3x9cwd x1e5q0jg x13rtm0m xosibs0 xt24udd xw53kvy x1dka6rp x47corl"
                                                                    role="presentation"
                                                                  >
                                                                    <i
                                                                      alt=""
                                                                      data-visualcompletion="css-img"
                                                                      class="img style-C67Q2"
                                                                      id="style-C67Q2"
                                                                    ></i>
                                                                  </div>
                                                                </div>
                                                              </div>
                                                              <div class="xjbqb8w x972fbf xcfux6l x1qhh985 xm0m39n xdj266r x11i5rnm xat24cr x1mh8g0r x1t137rt xexx8yu x4uap5 x18d9i69 xkhd6sd xlyipyv xwd1esu x1gnnqk1 xbsr9hj x1urst0s x1glnyev x1ad04t7 x1ix68h3 x19gujb8 xni1clt x1tutvks xfrpkgu xmi5d70 x1fvot60 xo1l8bm xxio538 x1iyjqo2 x6ikm8r x10wlt62">
                                                                <div
                                                                  class="xmi5d70 x1fvot60 xo1l8bm xxio538 xbsr9hj xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj xeuugli x1uvtmcs"
                                                                  id="js_bc"
                                                                >
                                                                  Pivot Table
                                                                </div>
                                                              </div>
                                                            </div>
                                                          </div>
                                                          <div class="x6s0dn4 x3nfvp2 x1q0g3np xozqiw3 x2lwn1j xeuugli x1c4vz4f x19lwn94 xmi5d70 x1fvot60 xo1l8bm xxio538 xbsr9hj xq9mrsl xqcrz7y x2lah0s">
                                                            ​
                                                            <div
                                                              class="x3nfvp2 x120ccyz x1heor9g"
                                                              role="presentation"
                                                            >
                                                              <div
                                                                class="xtwfq29 style-yKmNX"
                                                                id="style-yKmNX"
                                                              ></div>
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                      <div
                                                        class="x3nfvp2 x193iq5w xxymvpz"
                                                        role="none"
                                                      >
                                                        <div
                                                          aria-busy="false"
                                                          class="x1i10hfl xjqpnuy xa49m3k xqeqjp1 x2hbi6w x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli x16tdsg8 xggy1nq x1ja2u2z x6s0dn4 x1ejq31n xd10rxx x1sy0etr x17r0tee x3nfvp2 xdl72j9 x1q0g3np x2lah0s x193iq5w x1n2onr6 x1hl2dhg x87ps6o xxymvpz xlh3980 xvmahel x1lku1pv x1g40iwv x1lcm9me x1yr5g0i xrt01vj x10y3i5r x1ob88yx xaatb59 x1qgsegg xo1l8bm xbsr9hj x1v911su x1y1aw1k xwib8y2 x1swvt13 x1pi30zi"
                                                          role="button"
                                                          tabindex="0"
                                                        >
                                                          <span class="xmi5d70 x1fvot60 xxio538 x1heor9g xq9mrsl x1h4wwuj x1pd3egz xeuugli xh8yej3">
                                                            <div class="x78zum5">
                                                              <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1hc1fzr x13dflua x6o7n8i xxziih7 x12w9bfk xl56j7k xh8yej3">
                                                                <div class="x1xqt7ti x1fvot60 xk50ysn xxio538 x1heor9g xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj xeuugli">
                                                                  Ungroup
                                                                  Breakdowns
                                                                </div>
                                                              </div>
                                                            </div>
                                                          </span>
                                                        </div>
                                                      </div>
                                                    </div>
                                                    <div class="x1iyjqo2 xs83m0k xdl72j9"></div>
                                                    <div
                                                      class="x3nfvp2 x193iq5w xxymvpz"
                                                      role="none"
                                                    >
                                                      <div
                                                        aria-busy="false"
                                                        class="x1i10hfl xjqpnuy xa49m3k xqeqjp1 x2hbi6w x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli x16tdsg8 xggy1nq x1ja2u2z x6s0dn4 x1ejq31n xd10rxx x1sy0etr x17r0tee x3nfvp2 xdl72j9 x1q0g3np x2lah0s x193iq5w x1n2onr6 x1hl2dhg x87ps6o xxymvpz xlh3980 xvmahel x1lku1pv x1g40iwv x1lcm9me x1yr5g0i xrt01vj x10y3i5r x1ob88yx xaatb59 x1qgsegg xo1l8bm xbsr9hj x1v911su x1y1aw1k xwib8y2 x1pi30zi x1ye3gou"
                                                        role="button"
                                                        tabindex="0"
                                                      >
                                                        <span class="xmi5d70 x1fvot60 xxio538 x1heor9g xq9mrsl x1h4wwuj x1pd3egz xeuugli xh8yej3">
                                                          <div class="x78zum5">
                                                            <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1hc1fzr x13dflua x6o7n8i xxziih7 x12w9bfk xl56j7k xh8yej3">
                                                              <div class="x3nfvp2 x2lah0s x1c4vz4f">
                                                                <i
                                                                  alt=""
                                                                  data-visualcompletion="css-img"
                                                                  class="img style-qYHrL"
                                                                  id="style-qYHrL"
                                                                ></i>
                                                              </div>
                                                              <div class="x1xqt7ti x1fvot60 xk50ysn xxio538 x1heor9g xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj xeuugli">
                                                                Reset Column
                                                                Widths
                                                              </div>
                                                            </div>
                                                          </div>
                                                        </span>
                                                      </div>
                                                    </div>
                                                    <div
                                                      class="x3oybdh xuxw1ft x1iknuni xw9jwym x1e2iszw xg0tal0 x1lliihq x1lcm9me x1yr5g0i xrt01vj x10y3i5r"
                                                      role="group"
                                                    >
                                                      <div
                                                        class="x3nfvp2 x193iq5w xxymvpz style-oFP3Z"
                                                        role="none"
                                                        id="style-oFP3Z"
                                                      >
                                                        <div
                                                          aria-busy="false"
                                                          class="x1i10hfl xjqpnuy xa49m3k xqeqjp1 x2hbi6w x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli x16tdsg8 xggy1nq x1ja2u2z x6s0dn4 x1ejq31n xd10rxx x1sy0etr x17r0tee x3nfvp2 xdl72j9 x1q0g3np x2lah0s x193iq5w x1n2onr6 x1hl2dhg x87ps6o xxymvpz xlh3980 xvmahel x1lku1pv x1g40iwv x1lcm9me x1yr5g0i xrt01vj x10y3i5r x1ob88yx xaatb59 x1qgsegg xo1l8bm xbsr9hj x1v911su x1y1aw1k xwib8y2 x1pi30zi x1ye3gou style-vK6Pc"
                                                          role="button"
                                                          tabindex="0"
                                                          id="style-vK6Pc"
                                                        >
                                                          <span class="xmi5d70 x1fvot60 xxio538 x1heor9g xq9mrsl x1h4wwuj x1pd3egz xeuugli xh8yej3">
                                                            <div class="x78zum5">
                                                              <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1hc1fzr x13dflua x6o7n8i xxziih7 x12w9bfk xl56j7k xh8yej3">
                                                                <div class="x3nfvp2 x2lah0s x1c4vz4f">
                                                                  <i
                                                                    alt=""
                                                                    data-visualcompletion="css-img"
                                                                    class="img style-iN5SP"
                                                                    id="style-iN5SP"
                                                                  ></i>
                                                                </div>
                                                                <div class="x1xqt7ti x1fvot60 xk50ysn xxio538 x1heor9g xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj xeuugli">
                                                                  Format
                                                                </div>
                                                              </div>
                                                            </div>
                                                          </span>
                                                        </div>
                                                      </div>
                                                      <div
                                                        class="x3nfvp2 x193iq5w xxymvpz style-oYfsa"
                                                        role="none"
                                                        id="style-oYfsa"
                                                      >
                                                        <div
                                                          aria-busy="false"
                                                          class="x1i10hfl xjqpnuy xa49m3k xqeqjp1 x2hbi6w x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli x16tdsg8 xggy1nq x1ja2u2z x6s0dn4 x1ejq31n xd10rxx x1sy0etr x17r0tee x3nfvp2 xdl72j9 x1q0g3np x2lah0s x193iq5w x1n2onr6 x1hl2dhg x87ps6o xxymvpz xlh3980 xvmahel x1lku1pv x1g40iwv x1lcm9me x1yr5g0i xrt01vj x10y3i5r x1ob88yx xaatb59 x1qgsegg xo1l8bm xbsr9hj xk7z8go x1y1aw1k xwib8y2 x1pi30zi x1ye3gou style-GCvYv"
                                                          role="button"
                                                          tabindex="0"
                                                          id="js_ar"
                                                        >
                                                          <span class="xmi5d70 x1fvot60 xxio538 x1heor9g xq9mrsl x1h4wwuj x1pd3egz xeuugli xh8yej3">
                                                            <div class="x78zum5">
                                                              <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1hc1fzr x13dflua x6o7n8i xxziih7 x12w9bfk xl56j7k xh8yej3">
                                                                <div class="x3nfvp2 x2lah0s x1c4vz4f">
                                                                  <i
                                                                    alt=""
                                                                    data-visualcompletion="css-img"
                                                                    class="img style-k4MBO"
                                                                    id="style-k4MBO"
                                                                  ></i>
                                                                </div>

                                                                <div class="x1xqt7ti x1fvot60 xk50ysn xxio538 x1heor9g xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj xeuugli">
                                                                  Customise
                                                                </div>
                                                              </div>
                                                            </div>
                                                          </span>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>

                                              {/* future render here */}
                                              <div
                                                className="mainbarkks"
                                                style={{
                                                  width: "100%",
                                                  height: "775px",
                                                  backgroundColor: "white",
                                                  textAlign: "left",
                                                  overflowX: "auto", // Enables horizontal scrolling
                                                  overflowY: "auto", // Enables vertical scrolling
                                                  whiteSpace: "nowrap", // Prevents table cells from wrapping, ensuring the table extends horizontally
                                                }}
                                              >
                                                <VersionTwoReporting
                                                  startDate={finalStartDate}
                                                  endDate={finalEndDate}
                                                  refreshData={refreshData}
                                                  selectedMetrics={
                                                    selectedMetrics
                                                  }
                                                  showID={FetchPageID}
                                                  loading={loading}
                                                  setLoading={setLoading}
                                                />
                                              </div>
                                            </div>
                                            <div>
                                              <div class="">
                                                <div class="">
                                                  <div
                                                    style={{
                                                      height: "90vh",
                                                      width: "95%",
                                                    }}
                                                    class="style-P4IHn"
                                                    id="style-P4IHn"
                                                  >
                                                    <div
                                                      class="x1gzqxud x1lq5wgf xgqcy7u x30kzoy x9jhf4c x1kmqopl x5yr21d xh8yej3"
                                                      data-auto-logging-component-type="GeoCard"
                                                    >
                                                      <div class="x78zum5 xdt5ytf x5yr21d xedcshv x1t2pt76 xh8yej3">
                                                        <div class="x9f619 x78zum5 x1iyjqo2 x5yr21d x2lwn1j x1n2onr6 xh8yej3">
                                                          <div class="xw2csxc x1odjw0f xh8yej3 x18d9i69 uuvcgtrr00">
                                                            <div class="xjm9jq1 xg01cxk x47corl xh8yej3 x1jyxor1"></div>
                                                            <div class="x1cy8zhl x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 snipcss-LXnKd">
                                                              <div
                                                                class="x1iyjqo2 xeuugli"
                                                                style={{
                                                                  padding:
                                                                    "20px 10px",
                                                                  display:
                                                                    "flex",
                                                                  alignItems:
                                                                    "center",
                                                                }}
                                                              >
                                                                <div
                                                                  aria-level="3"
                                                                  class="x1xqt7ti x1uxerd5 x1xlr1w8 xrohxju xbsr9hj xq9mrsl x1yc453h x1mzt3pk x1vvkbs x13faqbe xeuugli"
                                                                  id="js_1e"
                                                                  role="heading"
                                                                >
                                                                  Customise
                                                                  pivot table
                                                                </div>
                                                              </div>
                                                              <div class="x78zum5 x1q0g3np xozqiw3 xeuugli x1iyjqo2 x2lah0s x19lwn94 x6s0dn4 x13a6bvl xu0aao5 x9otpla x1wsgfga">
                                                                <div
                                                                  style={{
                                                                    marginTop:
                                                                      "22px",
                                                                  }}
                                                                  aria-busy="false"
                                                                  class="x1i10hfl xjqpnuy xa49m3k xqeqjp1 x2hbi6w x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli x16tdsg8 xggy1nq x1ja2u2z x1t137rt x6s0dn4 x1ejq31n xd10rxx x1sy0etr x17r0tee x3nfvp2 xdl72j9 x1q0g3np x2lah0s x193iq5w x1n2onr6 x1hl2dhg x87ps6o xxymvpz xlh3980 xvmahel x1lku1pv x1g40iwv x1lcm9me x1yr5g0i xrt01vj x10y3i5r xo1l8bm xbsr9hj x1v911su x1y1aw1k xwib8y2 x1ye3gou xn6708d"
                                                                  role="button"
                                                                  tabindex="0"
                                                                >
                                                                  <span class="xmi5d70 x1fvot60 xxio538 x1heor9g xq9mrsl x1h4wwuj x1pd3egz xeuugli xh8yej3">
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
                                                                            class="xtwfq29 style-zlQsk"
                                                                            id="style-zlQsk"
                                                                          ></div>
                                                                        </div>
                                                                        ​
                                                                      </div>
                                                                    </div>
                                                                  </span>
                                                                </div>
                                                              </div>
                                                            </div>
                                                            <div
                                                              id="style-9brfl"
                                                              class="style-9brfl"
                                                            >
                                                              <div class="x1ye3gou xsag5q8">
                                                                <div
                                                                  aria-label="onboarding for EVC Nux"
                                                                  class="x1i10hfl x1qjc9v5 xjbqb8w xjqpnuy xa49m3k xqeqjp1 x2hbi6w x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xdl72j9 xdt5ytf x2lah0s xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli xexx8yu x4uap5 x18d9i69 xkhd6sd x1n2onr6 x16tdsg8 x1hl2dhg xggy1nq x1ja2u2z x1rg5ohu x1t137rt xzolkzo x12go9s9 x1rnf11y xprq8jg"
                                                                  role="button"
                                                                  tabindex="0"
                                                                >
                                                                  <span class="x3nfvp2 xmix8c7 x1n2onr6">
                                                                    <span class="x6s0dn4 x9f619 x78zum5 xmix8c7 xl56j7k x16xo4sp x1t137rt x1j85h84 xsyo7zv x16hj40l x4p5aij x1n2onr6 xzolkzo x12go9s9 x1rnf11y xprq8jg x8t9es0 xw23nyj x63nzvj xuxw1ft x2b8uid xo1l8bm x140t73q xgyuhzn">
                                                                      <div class="x8t9es0 xw23nyj x63nzvj x1heor9g xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj x1pd3egz xeuugli">
                                                                        What's
                                                                        new
                                                                      </div>
                                                                    </span>
                                                                    <div
                                                                      aria-atomic="true"
                                                                      aria-live="polite"
                                                                      role="status"
                                                                      id="js_16"
                                                                      class="x1qvwoe0 xjm9jq1 x1y332i5 xcwd3tp x1jyxor1 x39eecv x6ikm8r x10wlt62 x10l6tqk xuxw1ft x1i1rx1s"
                                                                      data-sscoverage-ignore="true"
                                                                    >
                                                                      onboarding
                                                                      for EVC
                                                                      Nux
                                                                    </div>
                                                                  </span>
                                                                </div>
                                                              </div>
                                                            </div>
                                                            <div class="_2pi9 _2pin _3qn7 _61-3 _2fyi _3qng">
                                                              <div>
                                                                <div class="x78zum5 xdt5ytf xdl72j9 x1iyjqo2 xeuugli x1n2onr6 xh8yej3">
                                                                  <div
                                                                    class="x1qvwoe0 xjm9jq1 x1y332i5 xcwd3tp x1jyxor1 x39eecv x6ikm8r x10wlt62 x10l6tqk xuxw1ft x1i1rx1s style-DHrAc"
                                                                    data-sscoverage-ignore="true"
                                                                    id="style-DHrAc"
                                                                  >
                                                                    <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94">
                                                                      <div class="x1iyjqo2">
                                                                        <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x65s2av">
                                                                          <label
                                                                            id="js_18"
                                                                            for="js_17"
                                                                          >
                                                                            <span class="x8t9es0 x1fvot60 xxio538 x4hq6eo xq9mrsl x1mzt3pk x1vvkbs x13faqbe x117nqv4 xeuugli">
                                                                              search
                                                                              columns
                                                                            </span>
                                                                          </label>
                                                                        </div>
                                                                      </div>
                                                                    </div>
                                                                  </div>
                                                                  <div class="xhk9q7s x1otrzb0 xo71vjh x5pf9jr x78zum5 xdt5ytf x1iyjqo2">
                                                                    <div class="x78zum5 xdt5ytf x1iyjqo2">
                                                                      <div class="x1iyjqo2">
                                                                        <div class="x1n2onr6 xh8yej3">
                                                                          <div class="x6s0dn4 x78zum5 x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x178xt8z xm81vs4 xso031l xy80clv xb9moi8 xfth1om x21b0me xmls85d xhk9q7s x1otrzb0 x1i1ezom x1o6z2jb x1gzqxud x108nfp6 xm7lytj x1ykpatu xlu9dua x1w2lkzu">
                                                                            <div class=""></div>
                                                                            <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94">
                                                                              <div class="x6s0dn4 x78zum5 x1q0g3np x1a02dak x2lwn1j xeuugli x1iyjqo2 x19lwn94">
                                                                                <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94">
                                                                                  <div class="x6s0dn4 x3nfvp2 x1q0g3np xozqiw3 x2lwn1j xeuugli x1c4vz4f x19lwn94 x8t9es0 x1fvot60 xo1l8bm xxio538 x108nfp6 xq9mrsl xqcrz7y x2lah0s">
                                                                                    ​
                                                                                    <div class="x3nfvp2">
                                                                                      <div class="x6s0dn4 x3nfvp2 x1q0g3np xozqiw3 x2lwn1j xeuugli x1c4vz4f x19lwn94 xmi5d70 x1fvot60 xo1l8bm xxio538 xbsr9hj xq9mrsl xqcrz7y x2lah0s">
                                                                                        ​
                                                                                        <div
                                                                                          class="x3nfvp2 x120ccyz x4s1yf2"
                                                                                          role="presentation"
                                                                                        >
                                                                                          <div
                                                                                            class="xtwfq29 style-GLwTt"
                                                                                            id="style-GLwTt"
                                                                                          ></div>
                                                                                        </div>
                                                                                      </div>
                                                                                    </div>
                                                                                  </div>
                                                                                  <input
                                                                                    placeholder="Search"
                                                                                    id="js_17"
                                                                                    aria-labelledby="js_18"
                                                                                    aria-busy="false"
                                                                                    aria-disabled="false"
                                                                                    class="xjbqb8w x972fbf xcfux6l x1qhh985 xm0m39n xdj266r x11i5rnm xat24cr x1mh8g0r x1t137rt xexx8yu x4uap5 x18d9i69 xkhd6sd xr4vacz x1gnnqk1 x6lvj10 x1urst0s x1glnyev x1ad04t7 x1ix68h3 x19gujb8 xni1clt x1tutvks xfrpkgu x15h3p50 x1gf4pb6 xh7izdl x10emqs4 x2yyzbt xu8dvwe x8t9es0 x1fvot60 xo1l8bm xxio538 x1rffpxw xh8yej3"
                                                                                    type="text"
                                                                                    value=""
                                                                                  />
                                                                                </div>
                                                                              </div>
                                                                            </div>
                                                                          </div>
                                                                          <div class="xb9moi8 xfth1om x21b0me xmls85d xhk9q7s x1otrzb0 x1i1ezom x1o6z2jb x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x178xt8z xm81vs4 xso031l xy80clv x13dflua x6o7n8i xxziih7 x12w9bfk xg01cxk x47corl x10l6tqk x17qophe xds687c x13vifvy x1ey2m1c x6ikm8r x10wlt62 xnl74ce xmb4j5p xdx8kah xwmxa91 xmn8db3 x8lbu6m x2te4dl x1bs8fl3 xhhp2wi x14q35kh x1wa3ocq x1n7iyjn x1t0di37 x1tt7eqi xe25xm5 xsp6npd x1s928wv x1w3onc2 x1j6awrg x9obomg x1ryaxvv x1hvfe8t x1te75w5"></div>
                                                                        </div>
                                                                      </div>
                                                                    </div>
                                                                  </div>
                                                                </div>
                                                              </div>
                                                              <div class="_2pis">
                                                                <div>
                                                                  <div
                                                                    aria-busy="false"
                                                                    aria-controls="js_1c"
                                                                    class="x1i10hfl xjqpnuy xa49m3k xqeqjp1 x2hbi6w x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli x16tdsg8 xggy1nq x1ja2u2z x1t137rt x6s0dn4 x1ejq31n xd10rxx x1sy0etr x17r0tee x3nfvp2 xdl72j9 x1q0g3np x2lah0s x193iq5w x1n2onr6 x1hl2dhg x87ps6o xxymvpz xlh3980 xvmahel x1lku1pv xhk9q7s x1otrzb0 x1i1ezom x1o6z2jb xo1l8bm x108nfp6 xas4zb2 x1y1aw1k xwib8y2 x1ye3gou xn6708d"
                                                                    role="button"
                                                                    tabindex="0"
                                                                  >
                                                                    <span class="x8t9es0 x1fvot60 xxio538 x1heor9g xq9mrsl x1h4wwuj x1pd3egz xeuugli xh8yej3">
                                                                      <div class="x78zum5">
                                                                        <div
                                                                          class="x1qvwoe0 xjm9jq1 x1y332i5 xcwd3tp x1jyxor1 x39eecv x6ikm8r x10wlt62 x10l6tqk xuxw1ft x1i1rx1s"
                                                                          data-sscoverage-ignore="true"
                                                                        >
                                                                          Action
                                                                          drop-down
                                                                          menu
                                                                        </div>
                                                                        <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1hc1fzr x13dflua x6o7n8i xxziih7 x12w9bfk xl56j7k xh8yej3 snipcss0-5-48-50">
                                                                          <div
                                                                            class="x3nfvp2 x120ccyz x1heor9g x2lah0s x1c4vz4f snipcss0-6-50-51"
                                                                            role="presentation"
                                                                          >
                                                                            <div
                                                                              class="xtwfq29 snipcss0-7-51-52 style-awlEy"
                                                                              id="style-awlEy"
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
                                                            <div id="left_rail_nux_target_node">
                                                              <div class="x6s0dn4 x78zum5 x2lwn1j xeuugli x1ye3gou xn6708d bolarecrod">
                                                                <div
                                                                  class="_6g3g style-QAcg2"
                                                                  id="style-QAcg2"
                                                                >
                                                                  <div class="x1s1d1n7 xwib8y2">
                                                                    <div
                                                                      class="x78zum5 xdmi676 x193iq5w x6ikm8r x10wlt62 x1n2onr6 xh8yej3 x8t9es0 x1fvot60 xo1l8bm xxio538"
                                                                      role="tablist"
                                                                    >
                                                                      <div
                                                                        style={
                                                                          pivottable ===
                                                                          "breakdown"
                                                                            ? {
                                                                                backgroundColor:
                                                                                  "#e7f1fd",
                                                                                paddingRight:
                                                                                  "5px",
                                                                                color:
                                                                                  "#1461cc",
                                                                                fontWeight:
                                                                                  "bold",
                                                                              }
                                                                            : {
                                                                                backgroundColor:
                                                                                  "transparent",
                                                                                color:
                                                                                  "black",
                                                                              }
                                                                        }
                                                                        onClick={() =>
                                                                          setPovitTable(
                                                                            "breakdown"
                                                                          )
                                                                        }
                                                                        aria-hidden="false"
                                                                        aria-label="Breakdowns"
                                                                        aria-selected="true"
                                                                        class="x1i10hfl xjqpnuy xa49m3k xqeqjp1 x2hbi6w x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli x1n2onr6 x16tdsg8 x1hl2dhg xggy1nq x1ja2u2z x1t137rt x6s0dn4 x78zum5 x1q0g3np xl56j7k x1lku1pv x1g40iwv xhk9q7s x1otrzb0 x1i1ezom x1o6z2jb x1y1aw1k xwib8y2 x1ye3gou "
                                                                        role="tab"
                                                                        tabindex="0"
                                                                      >
                                                                        <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 xs83m0k x19lwn94 xl56j7k">
                                                                          <div
                                                                            aria-hidden="true"
                                                                            class="x3nfvp2 xdt5ytf xs83m0k xeuugli x6ikm8r x10wlt62"
                                                                          >
                                                                            <span
                                                                              style={{
                                                                                fontWeight:
                                                                                  pivottable ===
                                                                                  "breakdown"
                                                                                    ? "bold"
                                                                                    : "normal",
                                                                              }}
                                                                              class="x6ikm8r x10wlt62 xlyipyv x8t9es0 x1fvot60 xxio538 x1heor9g xuxw1ft x2b8uid x117nqv4"
                                                                            >
                                                                              Breakdowns
                                                                            </span>
                                                                          </div>
                                                                        </div>
                                                                      </div>
                                                                      <div
                                                                        style={
                                                                          pivottable ===
                                                                          "metrics"
                                                                            ? {
                                                                                backgroundColor:
                                                                                  "#e7f1fd",

                                                                                color:
                                                                                  "#1461cc",
                                                                                fontWeight:
                                                                                  "bold",
                                                                              }
                                                                            : {
                                                                                backgroundColor:
                                                                                  "white",
                                                                              }
                                                                        }
                                                                        onClick={() =>
                                                                          setPovitTable(
                                                                            "metrics"
                                                                          )
                                                                        }
                                                                        aria-hidden="false"
                                                                        aria-label="Metrics"
                                                                        aria-selected="false"
                                                                        class="x1i10hfl xjqpnuy xa49m3k xqeqjp1 x2hbi6w x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xe8uvvx xdj266r x11i5rnm xat24cr x2lwn1j xeuugli x1n2onr6 x16tdsg8 x1hl2dhg xggy1nq x1ja2u2z x1t137rt x6s0dn4 x78zum5 x1q0g3np xl56j7k x1lku1pv x1g40iwv xhk9q7s x1otrzb0 x1i1ezom x1o6z2jb x1y1aw1k xwib8y2 x1ye3gou xn6708d x1iyjqo2 xs83m0k x1r8uery xo1l8bm x108nfp6 x1v911su x1i64zmx"
                                                                        role="tab"
                                                                        tabindex="0"
                                                                        id="js_qx"
                                                                      >
                                                                        <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 xs83m0k x19lwn94 xl56j7k">
                                                                          <div
                                                                            aria-hidden="true"
                                                                            class="x3nfvp2 xdt5ytf xs83m0k xeuugli x6ikm8r x10wlt62"
                                                                          >
                                                                            <span
                                                                              style={{
                                                                                fontWeight:
                                                                                  pivottable ===
                                                                                  "metrics"
                                                                                    ? "bold"
                                                                                    : "normal",
                                                                                color:
                                                                                  pivottable ===
                                                                                  "metrics"
                                                                                    ? "#1461cc"
                                                                                    : "black",
                                                                              }}
                                                                              class="x6ikm8r x10wlt62 xlyipyv x8t9es0 x1fvot60 xo1l8bm xxio538 x108nfp6 xuxw1ft x2b8uid"
                                                                            >
                                                                              Metrics
                                                                            </span>
                                                                          </div>
                                                                        </div>
                                                                      </div>
                                                                    </div>
                                                                  </div>
                                                                </div>
                                                                <div class="xurb0ha xwib8y2">
                                                                  <div
                                                                    class="x3nfvp2 x193iq5w xxymvpz"
                                                                    role="none"
                                                                  >
                                                                    <div
                                                                      aria-busy="false"
                                                                      class="x1i10hfl xjqpnuy xa49m3k xqeqjp1 x2hbi6w x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli x16tdsg8 xggy1nq x1ja2u2z x1t137rt x6s0dn4 x1ejq31n xd10rxx x1sy0etr x17r0tee x3nfvp2 xdl72j9 x1q0g3np x2lah0s x193iq5w x1n2onr6 x1hl2dhg x87ps6o xxymvpz xlh3980 xvmahel x1lku1pv xhk9q7s x1otrzb0 x1i1ezom x1o6z2jb xo1l8bm x108nfp6 x1v911su x1y1aw1k xwib8y2 x1ye3gou xn6708d"
                                                                      role="button"
                                                                      tabindex="0"
                                                                    >
                                                                      <span class="x8t9es0 x1fvot60 xxio538 x1heor9g xq9mrsl x1h4wwuj x1pd3egz xeuugli xh8yej3">
                                                                        <div class="x78zum5">
                                                                          <div
                                                                            class="x1qvwoe0 xjm9jq1 x1y332i5 xcwd3tp x1jyxor1 x39eecv x6ikm8r x10wlt62 x10l6tqk xuxw1ft x1i1rx1s"
                                                                            data-sscoverage-ignore="true"
                                                                          >
                                                                            Collapse
                                                                            breakdowns
                                                                          </div>
                                                                          <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1hc1fzr x13dflua x6o7n8i xxziih7 x12w9bfk xl56j7k xh8yej3">
                                                                            <div class="x3nfvp2 x2lah0s x1c4vz4f">
                                                                              <i
                                                                                alt=""
                                                                                data-visualcompletion="css-img"
                                                                                class="img style-3g3eG"
                                                                                id="style-3g3eG"
                                                                              ></i>
                                                                            </div>
                                                                          </div>
                                                                        </div>
                                                                      </span>
                                                                    </div>
                                                                  </div>
                                                                </div>
                                                              </div>
                                                              {pivottable ===
                                                              "breakdown" ? (
                                                                <div
                                                                  style={{
                                                                    overflowY:
                                                                      "scroll",
                                                                    scrollbarWidth:
                                                                      "none",
                                                                    msOverflowStyle:
                                                                      "none",
                                                                    width:
                                                                      "fit-content",
                                                                    height:
                                                                      "70vh",
                                                                  }}
                                                                  class="_5jln style-HBNw4"
                                                                  id="style-HBNw4"
                                                                >
                                                                  <div
                                                                    class="_4bn9"
                                                                    tabindex="0"
                                                                  >
                                                                    <div
                                                                      class="_2mum style-VolnR"
                                                                      id="style-VolnR"
                                                                    >
                                                                      <div class="_4u-c _2mun"></div>
                                                                      <div class="x1ye3gou xn6708d xz9dl7a xjkvuk6">
                                                                        <div>
                                                                          <div class="xeuugli">
                                                                            <div
                                                                              style={{
                                                                                width:
                                                                                  "100%",
                                                                              }}
                                                                              class=""
                                                                              role="list"
                                                                            >
                                                                              <div
                                                                                style={{
                                                                                  padding:
                                                                                    "5px 0px",
                                                                                  width:
                                                                                    "100%",
                                                                                }}
                                                                              >
                                                                                {breakdownData.map(
                                                                                  (
                                                                                    category,
                                                                                    index
                                                                                  ) => (
                                                                                    <div
                                                                                      key={
                                                                                        index
                                                                                      }
                                                                                    >
                                                                                      <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 xhk9q7s x1otrzb0 x1i1ezom x1o6z2jb x1iorvi4 xjkvuk6 xurb0ha x1sxyh0 xp7jhwk x1n0m28w xo1l8bm x108nfp6 x1v911su snipcss-n89zC">
                                                                                        <div
                                                                                          style={{
                                                                                            textAlign:
                                                                                              "left",
                                                                                          }}
                                                                                          class="x1iyjqo2 xeuugli"
                                                                                        >
                                                                                          <div class="xh8yej3">
                                                                                            <div
                                                                                              class="x78zum5 x1iyjqo2"
                                                                                              role="listitem"
                                                                                            >
                                                                                              <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 xhk9q7s x1otrzb0 x1i1ezom x1o6z2jb xexx8yu x4uap5 x18d9i69 xkhd6sd xdj266r x11i5rnm xat24cr x1mh8g0r">
                                                                                                <div
                                                                                                  class="x1iyjqo2 xamitd3"
                                                                                                  data-sscoverage-ignore="true"
                                                                                                >
                                                                                                  <div class="x6s0dn4 x1q0g3np xozqiw3 x2lwn1j x1iyjqo2 xs83m0k x65s2av x78zum5 xeuugli">
                                                                                                    <div class="x8t9es0 x1fvot60 xo1l8bm xxio538 x108nfp6 xq9mrsl x1mzt3pk x1vvkbs x13faqbe xeuugli x1iyjqo2">
                                                                                                      {
                                                                                                        category.title
                                                                                                      }
                                                                                                    </div>
                                                                                                  </div>
                                                                                                </div>
                                                                                              </div>
                                                                                            </div>
                                                                                          </div>
                                                                                        </div>
                                                                                        <div class="x2lah0s xlup9mm">
                                                                                          <i
                                                                                            alt=""
                                                                                            data-visualcompletion="css-img"
                                                                                            class="img style-DXeKT"
                                                                                            id="style-DXeKT"
                                                                                          ></i>
                                                                                        </div>
                                                                                      </div>
                                                                                      {category.metrics.map(
                                                                                        (
                                                                                          metric,
                                                                                          idx
                                                                                        ) => (
                                                                                          <div
                                                                                            key={
                                                                                              idx
                                                                                            }
                                                                                          >
                                                                                            <label
                                                                                              htmlFor={`metric-${index}-${idx}`}
                                                                                            >
                                                                                              <div>
                                                                                                <div class="xs1vzh6 x139jcc6 x1e558r4 x1md24ng x1pko0hs x12aqbjl x1xyplig xgsxom x1277o0a">
                                                                                                  <label
                                                                                                    class="x1i10hfl x1qjc9v5 xjbqb8w xjqpnuy xa49m3k xqeqjp1 x2hbi6w x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk x78zum5 xdl72j9 xdt5ytf x2lah0s xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli xexx8yu x4uap5 x18d9i69 xkhd6sd x1n2onr6 x16tdsg8 x1hl2dhg xggy1nq x1ja2u2z x1t137rt"
                                                                                                    tabindex="-1"
                                                                                                    data-mouseoverable="1"
                                                                                                  >
                                                                                                    <div
                                                                                                      style={{
                                                                                                        textAlign:
                                                                                                          "left",
                                                                                                      }}
                                                                                                      class="x78zum5 x1iyjqo2"
                                                                                                    >
                                                                                                      <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 xhk9q7s x1otrzb0 x1i1ezom x1o6z2jb x1iorvi4 xjkvuk6 xurb0ha x1sxyh0 xp7jhwk x1n0m28w">
                                                                                                        <div
                                                                                                          class="x1iyjqo2 xamitd3"
                                                                                                          data-sscoverage-ignore="true"
                                                                                                        >
                                                                                                          <div class="x6s0dn4 x1q0g3np xozqiw3 x2lwn1j x1iyjqo2 xs83m0k x65s2av x78zum5 xeuugli">
                                                                                                            <div
                                                                                                              style={{
                                                                                                                display:
                                                                                                                  "flex",
                                                                                                                alignItems:
                                                                                                                  "center",
                                                                                                              }}
                                                                                                              class="x8t9es0 x1fvot60 xo1l8bm xxio538 x108nfp6 xq9mrsl x1mzt3pk x1vvkbs x13faqbe xeuugli x1iyjqo2"
                                                                                                              id="js_2t"
                                                                                                            >
                                                                                                              <input
                                                                                                                style={{
                                                                                                                  width:
                                                                                                                    "22px",
                                                                                                                  height:
                                                                                                                    "22px",
                                                                                                                  border:
                                                                                                                    "1px solid gainsboro",
                                                                                                                  outline:
                                                                                                                    "none",
                                                                                                                  marginRight:
                                                                                                                    "8px",
                                                                                                                  borderRadius:
                                                                                                                    "4px",
                                                                                                                  appearance:
                                                                                                                    "none", // Remove default checkbox styling
                                                                                                                  backgroundColor:
                                                                                                                    "white", // Set background to white
                                                                                                                  cursor:
                                                                                                                    "pointer", // Change cursor to pointer for better UX
                                                                                                                }}
                                                                                                                type="checkbox"
                                                                                                                className="uniquecheckbox"
                                                                                                                id={`metric-${index}-${idx}`}
                                                                                                                value={
                                                                                                                  metric
                                                                                                                }
                                                                                                                onChange={() =>
                                                                                                                  handleCheckboxChange(
                                                                                                                    metric
                                                                                                                  )
                                                                                                                }
                                                                                                                checked={selectedMetrics.includes(
                                                                                                                  metric
                                                                                                                )} // Keeps checkbox state in sync
                                                                                                              />

                                                                                                              <span
                                                                                                                style={{
                                                                                                                  fontSize:
                                                                                                                    "14px",
                                                                                                                }}
                                                                                                              >
                                                                                                                {
                                                                                                                  metric
                                                                                                                }
                                                                                                              </span>
                                                                                                            </div>
                                                                                                          </div>
                                                                                                        </div>
                                                                                                      </div>
                                                                                                    </div>
                                                                                                  </label>
                                                                                                </div>
                                                                                                <div></div>
                                                                                              </div>
                                                                                            </label>
                                                                                          </div>
                                                                                        )
                                                                                      )}
                                                                                    </div>
                                                                                  )
                                                                                )}
                                                                              </div>
                                                                            </div>
                                                                          </div>
                                                                        </div>
                                                                      </div>
                                                                    </div>
                                                                  </div>
                                                                </div>
                                                              ) : (
                                                                <div
                                                                  style={{
                                                                    overflowY:
                                                                      "scroll",
                                                                    scrollbarWidth:
                                                                      "none",
                                                                    msOverflowStyle:
                                                                      "none",
                                                                    width:
                                                                      "fit-content",
                                                                    height:
                                                                      "70vh",
                                                                  }}
                                                                  class="_5jln style-HBNw4"
                                                                  id="style-HBNw4"
                                                                >
                                                                  <div
                                                                    class="_4bn9"
                                                                    tabindex="0"
                                                                  >
                                                                    <div
                                                                      class="_2mum style-VolnR"
                                                                      id="style-VolnR"
                                                                    >
                                                                      <div class="_4u-c _2mun"></div>
                                                                      <div class="x1ye3gou xn6708d xz9dl7a xjkvuk6">
                                                                        <div>
                                                                          <div class="xeuugli">
                                                                            <div
                                                                              class=""
                                                                              role="list"
                                                                            >
                                                                              <div
                                                                                style={{
                                                                                  padding:
                                                                                    "5px 0px",
                                                                                }}
                                                                              >
                                                                                {metricsData.map(
                                                                                  (
                                                                                    category,
                                                                                    index
                                                                                  ) => (
                                                                                    <div
                                                                                      key={
                                                                                        index
                                                                                      }
                                                                                    >
                                                                                      <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 xhk9q7s x1otrzb0 x1i1ezom x1o6z2jb x1iorvi4 xjkvuk6 xurb0ha x1sxyh0 xp7jhwk x1n0m28w xo1l8bm x108nfp6 x1v911su snipcss-n89zC">
                                                                                        <div
                                                                                          style={{
                                                                                            textAlign:
                                                                                              "left",
                                                                                          }}
                                                                                          class="x1iyjqo2 xeuugli"
                                                                                        >
                                                                                          <div class="xh8yej3">
                                                                                            <div
                                                                                              class="x78zum5 x1iyjqo2"
                                                                                              role="listitem"
                                                                                            >
                                                                                              <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 xhk9q7s x1otrzb0 x1i1ezom x1o6z2jb xexx8yu x4uap5 x18d9i69 xkhd6sd xdj266r x11i5rnm xat24cr x1mh8g0r">
                                                                                                <div
                                                                                                  class="x1iyjqo2 xamitd3"
                                                                                                  data-sscoverage-ignore="true"
                                                                                                >
                                                                                                  <div class="x6s0dn4 x1q0g3np xozqiw3 x2lwn1j x1iyjqo2 xs83m0k x65s2av x78zum5 xeuugli">
                                                                                                    <div class="x8t9es0 x1fvot60 xo1l8bm xxio538 x108nfp6 xq9mrsl x1mzt3pk x1vvkbs x13faqbe xeuugli x1iyjqo2">
                                                                                                      {
                                                                                                        category.title
                                                                                                      }
                                                                                                    </div>
                                                                                                  </div>
                                                                                                </div>
                                                                                              </div>
                                                                                            </div>
                                                                                          </div>
                                                                                        </div>
                                                                                        <div class="x2lah0s xlup9mm">
                                                                                          <i
                                                                                            alt=""
                                                                                            data-visualcompletion="css-img"
                                                                                            class="img style-LTgZd"
                                                                                            id="style-LTgZd"
                                                                                          ></i>
                                                                                        </div>
                                                                                      </div>
                                                                                      {category.metrics.map(
                                                                                        (
                                                                                          metric,
                                                                                          idx
                                                                                        ) => (
                                                                                          <div
                                                                                            key={
                                                                                              idx
                                                                                            }
                                                                                          >
                                                                                            <label
                                                                                              htmlFor={`metric-${index}-${idx}`}
                                                                                            >
                                                                                              <div>
                                                                                                <div class="xs1vzh6 x139jcc6 x1e558r4 x1md24ng x1pko0hs x12aqbjl x1xyplig xgsxom x1277o0a">
                                                                                                  <label
                                                                                                    class="x1i10hfl x1qjc9v5 xjbqb8w xjqpnuy xa49m3k xqeqjp1 x2hbi6w x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk x78zum5 xdl72j9 xdt5ytf x2lah0s xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli xexx8yu x4uap5 x18d9i69 xkhd6sd x1n2onr6 x16tdsg8 x1hl2dhg xggy1nq x1ja2u2z x1t137rt"
                                                                                                    tabindex="-1"
                                                                                                    data-mouseoverable="1"
                                                                                                  >
                                                                                                    <div
                                                                                                      style={{
                                                                                                        textAlign:
                                                                                                          "left",
                                                                                                      }}
                                                                                                      class="x78zum5 x1iyjqo2"
                                                                                                    >
                                                                                                      <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 xhk9q7s x1otrzb0 x1i1ezom x1o6z2jb x1iorvi4 xjkvuk6 xurb0ha x1sxyh0 xp7jhwk x1n0m28w">
                                                                                                        <div
                                                                                                          class="x1iyjqo2 xamitd3"
                                                                                                          data-sscoverage-ignore="true"
                                                                                                        >
                                                                                                          <div className="x6s0dn4 x1q0g3np xozqiw3 x2lwn1j x1iyjqo2 xs83m0k x65s2av x78zum5 xeuugli">
                                                                                                            <div
                                                                                                              style={{
                                                                                                                display:
                                                                                                                  "flex",
                                                                                                                alignItems:
                                                                                                                  "center",
                                                                                                              }}
                                                                                                              className="x8t9es0 x1fvot60 xo1l8bm xxio538 x108nfp6 xq9mrsl x1mzt3pk x1vvkbs x13faqbe xeuugli x1iyjqo2"
                                                                                                              id="js_2t"
                                                                                                            >
                                                                                                              <input
                                                                                                                style={{
                                                                                                                  width:
                                                                                                                    "22px",
                                                                                                                  minWidth:
                                                                                                                    "22px",
                                                                                                                  height:
                                                                                                                    "22px",
                                                                                                                  border:
                                                                                                                    "1px solid gainsboro",
                                                                                                                  outline:
                                                                                                                    "none",
                                                                                                                  marginRight:
                                                                                                                    "8px",
                                                                                                                  borderRadius:
                                                                                                                    "4px",
                                                                                                                  appearance:
                                                                                                                    "none", // Remove default checkbox styling
                                                                                                                  backgroundColor:
                                                                                                                    "white", // Set background to white
                                                                                                                  cursor:
                                                                                                                    "pointer", // Change cursor to pointer for better UX
                                                                                                                }}
                                                                                                                type="checkbox"
                                                                                                                className="uniquecheckbox"
                                                                                                                id={`metric-${index}-${idx}`}
                                                                                                                value={
                                                                                                                  metric
                                                                                                                }
                                                                                                                onChange={() =>
                                                                                                                  handleCheckboxChange(
                                                                                                                    metric
                                                                                                                  )
                                                                                                                }
                                                                                                                checked={selectedMetrics.includes(
                                                                                                                  metric
                                                                                                                )} // Keeps checkbox state in sync
                                                                                                              />
                                                                                                              <span
                                                                                                                style={{
                                                                                                                  fontSize:
                                                                                                                    "14px",
                                                                                                                }}
                                                                                                              >
                                                                                                                {
                                                                                                                  metric
                                                                                                                }
                                                                                                              </span>
                                                                                                            </div>
                                                                                                          </div>
                                                                                                        </div>
                                                                                                      </div>
                                                                                                    </div>
                                                                                                  </label>
                                                                                                </div>
                                                                                                <div></div>
                                                                                              </div>
                                                                                            </label>
                                                                                          </div>
                                                                                        )
                                                                                      )}
                                                                                    </div>
                                                                                  )
                                                                                )}
                                                                              </div>
                                                                            </div>
                                                                          </div>
                                                                        </div>
                                                                      </div>
                                                                    </div>
                                                                  </div>
                                                                </div>
                                                              )}
                                                            </div>
                                                            <div class="xjm9jq1 xg01cxk x47corl xh8yej3 x1y332i5"></div>
                                                          </div>
                                                          <div class="x10wjd1d x47corl x10l6tqk x19991ni x13dflua xwji4o3 xh8yej3 xg01cxk x67dex8 x13vifvy"></div>
                                                          <div class="x10wjd1d x47corl x10l6tqk x19991ni x13dflua xwji4o3 xh8yej3 x1ta9b4f x1ey2m1c x1hc1fzr"></div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </span>
                      </div>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showDownloadFile && (
        <div
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            width: "100%",
            height: "100vh",
            zIndex: 999,
          }}
        >
          <ExportReport
            finalStartDate={finalStartDate}
            finalEndDate={finalEndDate}
            setShowDownloadFile={setShowDownloadFile}
          />
        </div>
      )}

      <div
        style={{
          position: "absolute",
          bottom: "20px",
          right: "30px",
          width: "350px",
          height: "fit-content",
          zIndex: 989,
        }}
      >
        <div>
          {exportedFiles.map((file) => (
            <div
              style={{
                backgroundColor: "black",
                color: "white",
                height: "75px",
                marginBottom: "20px",
              }}
            >
              <div
                aria-atomic="true"
                aria-live="polite"
                class="x1w33vng x1lcm9me x1yr5g0i xrt01vj x10y3i5r xyamay9 x1l90r2v x1swvt13 x1pi30zi x1iiql3v x1n2onr6 snipcss-8woiR"
                role="alert"
              >
                <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94">
                  <div class="x6s0dn4 x1c4vz4f x2lah0s xlup9mm x1heor9g">
                    <div class="x3nfvp2 x120ccyz x1heor9g" role="presentation">
                      <div class="xtwfq29 style-IB3mq" id="style-IB3mq"></div>
                    </div>
                  </div>
                  <div class="xeuugli x1iyjqo2 xs83m0k">
                    <div
                      style={{ color: "white" }}
                      class="xmi5d70 x1fvot60 xo1l8bm xxio538 xbsr9hj xq9mrsl x1mzt3pk x1vvkbs x13faqbe xeuugli x1uvtmcs"
                    >
                      Your export is ready
                    </div>
                    <div
                      style={{ color: "white" }}
                      class="xmi5d70 xw23nyj x63nzvj xbsr9hj xq9mrsl x1mzt3pk x1vvkbs x13faqbe x1fcty0u xeuugli x1uvtmcs"
                    >
                      {file.name}
                    </div>
                  </div>
                  <div class="x78zum5 x2lwn1j xeuugli x2lah0s x9otpla x1wsgfga x1n0m28w">
                    <div class="xs83m0k x1c4vz4f x4yhs0f">
                      <div class="x3nfvp2 x193iq5w xxymvpz" role="none">
                        <div
                          aria-busy="false"
                          class="x1i10hfl xjqpnuy xa49m3k xqeqjp1 x2hbi6w x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli x16tdsg8 xggy1nq x1ja2u2z x6s0dn4 x1ejq31n xd10rxx x1sy0etr x17r0tee x3nfvp2 xdl72j9 x1q0g3np x2lah0s x193iq5w x1n2onr6 x1hl2dhg x87ps6o xxymvpz xlh3980 xvmahel x1lku1pv x1g40iwv x1lcm9me x1yr5g0i xrt01vj x10y3i5r x1ob88yx xaatb59 x1qgsegg xo1l8bm xbsr9hj x1v911su x1y1aw1k xwib8y2 x1swvt13 x1pi30zi"
                          role="button"
                          tabindex="0"
                        >
                          <span class="xmi5d70 x1fvot60 xxio538 x1heor9g xq9mrsl x1h4wwuj x1pd3egz xeuugli x1uvtmcs xh8yej3">
                            <div class="x78zum5">
                              <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1hc1fzr x13dflua x6o7n8i xxziih7 x12w9bfk xl56j7k xh8yej3">
                                <div
                                  style={{ color: "white" }}
                                  class="x1xqt7ti x1fvot60 xk50ysn xxio538 x1heor9g xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj xeuugli x1uvtmcs"
                                >
                                  View All
                                </div>
                              </div>
                            </div>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div
                      onClick={() => handleRemoveFile(file.id)}
                      aria-busy="false"
                      class="x1i10hfl xjqpnuy xa49m3k xqeqjp1 x2hbi6w x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli x16tdsg8 xggy1nq x1ja2u2z x1t137rt x6s0dn4 x1ejq31n xd10rxx x1sy0etr x17r0tee x3nfvp2 xdl72j9 x1q0g3np x2lah0s x193iq5w x1n2onr6 x1hl2dhg x87ps6o xxymvpz xlh3980 xvmahel x1lku1pv x1g40iwv x1lcm9me x1yr5g0i xrt01vj x10y3i5r xo1l8bm xbsr9hj x1v911su x1y1aw1k xwib8y2 x1ye3gou xn6708d"
                      role="button"
                      tabindex="0"
                    >
                      <span class="xmi5d70 x1fvot60 xxio538 x1heor9g xq9mrsl x1h4wwuj x1pd3egz xeuugli x1uvtmcs xh8yej3">
                        <div class="x78zum5">
                          <div
                            style={{ color: "white" }}
                            class="x1qvwoe0 xjm9jq1 x1y332i5 xcwd3tp x1jyxor1 x39eecv x6ikm8r x10wlt62 x10l6tqk xuxw1ft x1i1rx1s"
                            data-sscoverage-ignore="true"
                          >
                            Close
                          </div>
                          <XMarkIcon
                            style={{
                              width: "20px",
                              height: "20px",
                              color: "white",
                            }}
                          />
                        </div>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reporting;
// usamsa has

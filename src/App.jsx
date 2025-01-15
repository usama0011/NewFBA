import React, { useEffect, useState } from "react";
import "./App.css";
import CompaingsData from "./components/CompaingsData";
import AdsSets from "./components/AdsSets";
import Ads from "./components/Ads";
import "react-date-range/dist/styles.css"; // main style file
import "./styles/Reporting.css";
import "react-date-range/dist/theme/default.css"; // theme css file
import axios from "axios";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  XMarkIcon,
} from "@heroicons/react/16/solid";

import "./styles/NewCalender.css";
import SearchAndFilter from "./components/SearchAndFilter";
import PageID from "./components/PageID";
import SideBar from "./components/SideBar";

const App = () => {
  const [showcalender, setShowCalender] = useState(false);
  const [showmyaccount, setShowmyAccount] = useState(false);
  const [account, setAccount] = useState({});
  const [showcustomizedbanner, setShowCustumizeBanner] = useState(false);
  const [showcustumizedcoloums, setShowCustumizedlayout] = useState(false);
  const [currentfolder, setcurrentFolder] = useState("Campaings");
  const [displayID, setDisplayID] = useState(false);
  const [showsearchfilterbar, setshowsearchfilterbar] = useState(false);
  const [currentPageID, setCurrentPageID] = useState(""); // State for input
  const [showPageIDBar, setShowPageIDBar] = useState(false); // State for visibility
  const [selectedValues, setSelectedValues] = useState([]);
  const [showupdatejustnow, setShowUpdateJustNow] = useState(false);
  const [campaings, setCampaigns] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filerwithcmapaignname, setFilerThatCampaignName] = useState("");
  const [showSearchSuggestions, setShowSearchSuggestions] = useState(false);
  const savedCampaignName = localStorage.getItem("filteredCampaignName");
  const getFirstDayOfMonth = () =>
    new Date(new Date().getFullYear(), new Date().getMonth(), 1);
  const getTodayDate = () => new Date();

  const [currentfiltercampaigshow, setcurrentfiltercampaingShow] =
    useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [startDate, setStartDate] = useState(() => {
    const storedStartDate = localStorage.getItem("startDate");
    return storedStartDate ? new Date(storedStartDate) : getFirstDayOfMonth();
  });
  const [endDate, setEndDate] = useState(() => {
    const storedEndDate = localStorage.getItem("endDate");
    return storedEndDate ? new Date(storedEndDate) : getTodayDate();
  });

  const [selectedOption, setSelectedOption] = useState("This Month");
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
  const fetchCampaigns = async () => {
    try {
      const response = await axios.get(
        "https://facebookadsmangerserver.vercel.app/api/newcampaing",
        {
          params: {
            startDate: formatDate(startDate),
            endDate: formatDate(endDate),
            pageID:
              localStorage.getItem("currentPageID") ||
              currentPageID ||
              undefined, // Include currentPageID if it's set
          },
        }
      );
      setCampaigns(response.data);
    } catch (err) {
      setError("Error fetching campaigns");
      console.error("API Error:", err);
    } finally {
      setLoading(false);
    }
  };
  const fetchAccount = async () => {
    try {
      const response = await axios.get(
        "https://facebookadsmangerserver.vercel.app/api/currentAccount/67200546611ee42d41ae600f"
      );
      setAccount(response.data);
    } catch (error) {
      console.error("Error fetching account:", error);
    }
  };
  useEffect(() => {
    fetchCampaigns();
  }, [displayID]);
  const handleUpdateJustNow = () => {
    setShowUpdateJustNow(true);
    fetchCampaigns();
  };
  const handleupdatebutton = () => {
    setLoading(true); // Start loading
    setShowCalender(false);
    fetchCampaigns();

    // Save updated dates to localStorage
    localStorage.setItem("startDate", startDate.toISOString());
    localStorage.setItem("endDate", endDate.toISOString());
  };
  const RemoveCapaignname = () => {
    setLoading(true);
    setcurrentfiltercampaingShow(false);
    localStorage.removeItem("filteredCampaignName");
    fetchCampaigns();
  };
  const handleClickRun = (value) => {
    setcurrentFolder(value);
  };
  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchQuery(value);
    setShowSearchSuggestions(value.trim().length > 0); // Show suggestions only if the input is not empty
  };
  // const filteredCampaigns = campaings?.filter((campaign) =>
  //   campaign.campaingname.toLowerCase().includes(searchQuery.toLowerCase())
  // );
  const [activeSection, setActiveSection] = useState(null); // Track active section

  const handleSectionClick = (index) => {
    setActiveSection(index); // Update active section
  };
  // Reusable onClick function
  const handleClickCross = () => {
    setLoading(true);
    setCurrentPageID(""); // Clear the currentPageID
    localStorage.removeItem("currentPageID"); // Remove from localStorage
    setDisplayID(false); // Hide the display
    fetchCampaigns(); // Call the fetchCampaigns function
  };
  const data = [
    {
      sectionTitle: "Performance",
      subSections: [
        {
          sectionTitle: "Performance",
          attributes: [
            { title: "Results", value: "Results" },
            { title: "Result Rate", value: "Result Rate" },
            { title: "Reach", value: "Reach" },
            { title: "Frequency", value: "Frequency" },
            { title: "Impressions", value: "Impressions" },
            { title: "Delivery", value: "Delivery" },
            { title: "Ad set delivery", value: "Ad set delivery" },
            { title: "Amount spent", value: "Amount spent" },
            { title: "Clicks (all)", value: "Clicks (all)" },
            { title: "CPC (all)", value: "CPC (all)" },
            { title: "CTR (all)", value: "CTR (all)" },
            {
              title:
                "Gross impressions (includes invalid impressions from non-human traffic)",
              value:
                "Gross impressions (includes invalid impressions from non-human traffic)",
            },
            {
              title: "Auto-refresh impressions",
              value: "Auto-refresh impressions",
            },
            { title: "Attribution setting", value: "Attribution setting" },
            {
              title: "Average purchases conversion value",
              value: "Average purchases conversion value",
            },
          ],
        },
        {
          sectionTitle: "Ad relevance diagnostics",
          attributes: [
            { title: "Quality ranking", value: "Quality ranking" },
            {
              title: "Engagement rate ranking",
              value: "Engagement rate ranking",
            },
            {
              title: "Conversion rate ranking",
              value: "Conversion rate ranking",
            },
          ],
        },
        {
          sectionTitle: "Cost",
          attributes: [
            { title: "Cost per result", value: "Cost per result" },
            {
              title: "Cost per 1,000 Accounts Centre accounts reached",
              value: "Cost per 1,000 Accounts Centre accounts reached",
            },
            {
              title: "CPM (cost per 1,000 impressions)",
              value: "CPM (cost per 1,000 impressions)",
            },
          ],
        },
      ],
    },
    {
      sectionTitle: "Engagement",
      subSections: [
        {
          sectionTitle: "Page Post",
          attributes: [
            { title: "Page engagement", value: "Page engagement" },
            { title: "Follows or likes", value: "Follows or likes" },
            { title: "Join group requests", value: "Join group requests" },
            { title: "Post comments", value: "Post comments" },
            { title: "Post engagements", value: "Post engagements" },
            { title: "Post reactions", value: "Post reactions" },
            { title: "Post saves", value: "Post saves" },
            { title: "Post shares", value: "Post shares" },
            { title: "Photo views", value: "Photo views" },
            { title: "Event responses", value: "Event responses" },
            { title: "Check-ins", value: "Check-ins" },
            { title: "Effect share", value: "Effect share" },
          ],
        },
        {
          sectionTitle: "Cost: Page and post",
          attributes: [
            {
              title: "Cost per Page engagement",
              value: "Cost per Page engagement",
            },
            {
              title: "Cost per follow or like",
              value: "Cost per follow or like",
            },
            {
              title: "Cost per join group request",
              value: "Cost per join group request",
            },
            {
              title: "Cost per post engagement",
              value: "Cost per post engagement",
            },
            {
              title: "Cost per event response",
              value: "Cost per event response",
            },
          ],
        },
        {
          sectionTitle: "Calling",
          attributes: [
            {
              title: "Estimated call confirmation clicks",
              value: "Estimated call confirmation clicks",
            },
            {
              title: "Callback requests submitted",
              value: "Callback requests submitted",
            },
            {
              title: "Messenger calls placed",
              value: "Messenger calls placed",
            },

            {
              title: "20-second Messenger calls",
              value: "20-second Messenger calls",
            },
            {
              title: "60-second Messenger calls",
              value: "60-second Messenger calls",
            },
          ],
        },
        {
          sectionTitle: "Messaging",
          attributes: [
            {
              title: "New messaging contacts",
              value: "New messaging contacts",
            },
            { title: "Blocks", value: "Blocks" },
            {
              title: "Messaging conversations started",
              value: "Messaging conversations started",
            },
            {
              title: "Messaging subscriptions",
              value: "Messaging subscriptions",
            },
            { title: "Welcome message views", value: "Welcome message views" },
            {
              title: "Messaging conversations replied",
              value: "Messaging conversations replied",
            },
          ],
        },
        {
          sectionTitle: "Cost: messaging",
          attributes: [
            {
              title: "Cost per new messaging contact",
              value: "Cost per new messaging contact",
            },
            {
              title: "Cost per messaging conversation started",
              value: "Cost per messaging conversation started",
            },
            {
              title: "Cost per messaging subscription",
              value: "Cost per messaging subscription",
            },
          ],
        },
        {
          sectionTitle: "Media",
          attributes: [
            {
              title: "Unique 2-second continuous video views",
              value: "Unique 2-second continuous video views",
            },
            {
              title: "2-second continuous video plays",
              value: "2-second continuous video plays",
            },
            { title: "3-second video plays", value: "3-second video plays" },
            { title: "ThruPlays", value: "ThruPlays" },

            { title: "Video plays at 25%", value: "Video plays at 25%" },
            { title: "Video plays at 50%", value: "Video plays at 50%" },
            { title: "Video plays at 75%", value: "Video plays at 75%" },
            { title: "Video plays at 95%", value: "Video plays at 95%" },
            { title: "Video plays at 100%", value: "Video plays at 100%" },
            {
              title: "Video average play time",
              value: "Video average play time",
            },
            { title: "Video plays", value: "Video plays" },
            {
              title: "Instant Experience view time",
              value: "Instant Experience view time",
            },
            {
              title: "Instant Experience view percentage",
              value: "Instant Experience view percentage",
            },
            {
              title: "Instant Experience impressions",
              value: "Instant Experience impressions",
            },
            {
              title: "Instant Experience reach",
              value: "Instant Experience reach",
            },
          ],
        },
        {
          sectionTitle: "Cost: Media",
          attributes: [
            {
              title: "Cost per 2-second continuous video play",
              value: "Cost per 2-second continuous video play",
            },
            {
              title: "Cost per 3-second video play",
              value: "Cost per 3-second video play",
            },
            {
              title: "Cost per ThruPlay",
              value: "Cost per ThruPlay",
            },
          ],
        },
        {
          sectionTitle: "Clicks",
          attributes: [
            {
              title: "Link clicks",
              value: "Link clicks",
            },
            {
              title: "Unique link clicks",
              value: "Unique link clicks",
            },
            {
              title: "Outbound clicks",
              value: "Outbound clicks",
            },
            {
              title: "Unique outbound clicks",
              value: "Unique outbound clicks",
            },
            {
              title: "CTR (link click-through rate)",
              value: "CTR (link click-through rate)",
            },
            {
              title: "Unique CTR (link click-through rate)",
              value: "Unique CTR (link click-through rate)",
            },
            {
              title: "Outbound CTR (click-through rate)",
              value: "Outbound CTR (click-through rate)",
            },

            {
              title: "Unique outbound CTR (click-through rate)",
              value: "Unique outbound CTR (click-through rate)",
            },
            {
              title: "Unique clicks (all)",
              value: "Unique clicks (all)",
            },

            {
              title: "Unique CTR (all)",
              value: "Unique CTR (all)",
            },

            {
              title: "Instant Experience clicks to open",
              value: "Instant Experience clicks to open",
            },

            {
              title: "Instant Experience clicks to start",
              value: "Instant Experience clicks to start",
            },

            {
              title: "Instant Experience clicks to open",
              value: "Instant Experience clicks to open",
            },
            {
              title: "Instant Experience outbound clicks",
              value: "Instant Experience outbound clicks",
            },
            {
              title: "Instant Experience clicks to open",
              value: "Instant Experience clicks to open",
            },
            {
              title: "Net reminders on",
              value: "Net reminders on",
            },
            {
              title: "Instagram profile visits",
              value: "Instagram profile visits",
            },
          ],
        },
        {
          sectionTitle: "Cost: clicks",
          attributes: [
            {
              title: "CPC (cost per link click)",
              value: "CPC (cost per link click)",
            },
            {
              title: "Cost per unique link click",
              value: "Cost per unique link click",
            },
            {
              title: "Cost per unique click (all)",
              value: "Cost per unique click (all)",
            },
          ],
        },
        {
          sectionTitle: "Awareness",
          attributes: [
            {
              title: "Estimated ad recall lift (people)",
              value: "Estimated ad recall lift (people)",
            },
            {
              title: "Estimated ad recall lift rate",
              value: "Estimated ad recall lift rate",
            },
          ],
        },
        {
          sectionTitle: "Cost: awareness",
          attributes: [
            {
              title: "Cost per estimated ad recall lift (people)",
              value: "Cost per estimated ad recall lift (people)",
            },
          ],
        },
      ],
    },
    // Add the new "Conversions" section
    {
      sectionTitle: "Conversions",
      subSections: [
        {
          sectionTitle: "Standard Events",
          // Only show the table, no checkboxes for these events
          tableHeaders: [
            "Metric to Include",
            "Total",
            "Unique",
            "Value",
            "Cost",
            "Unique Cost",
          ],
          tableData: [
            {
              metric: "Achievements Unlocked",
              values: [
                "Total Achievement Unlocked",
                "Unique Achievement Unlocked",
                "Value Achievement Unlocked",
                "Cost Achievement Unlocked",
                "Unique Cost Achievement Unlocked",
              ],
            },
            {
              metric: "Add Payment Info",
              values: [
                "Total Payment Info",
                "Unique Payment Info",
                "Value Payment Info",
                "Cost Payment Info",
                "Unique Cost Payment Info",
              ],
            },
            {
              metric: "Adds to Cart",
              values: [
                "Total Adds to Cart",
                "Unique Adds to Cart",
                "Value Adds to Cart",
                "Cost Adds to Cart",
                "Unique Cost Adds to Cart",
              ],
            },
            {
              metric: "Adds to Wishlist",
              values: [
                "Total Adds to Wishlist",
                "Unique Adds to Wishlist",
                "Value Adds to Wishlist",
                "Cost Adds to Wishlist",
                "Unique Cost Adds to Wishlist",
              ],
            },
            {
              metric: "App Activations",
              values: [
                "Total App Activations",
                "Unique App Activations",
                "Value App Activations",
                "Cost App Activations",
                "Unique Cost App Activations",
              ],
            },
            {
              metric: "App Installs",
              values: [
                "Total App Installs",
                "Unique App Installs",
                "Value App Installs",
                "Cost App Installs",
                "Unique Cost App Installs",
              ],
            },
            {
              metric: "Applications Submitted",
              values: [
                "Total Applications Submitted",
                "Unique Applications Submitted",
                "Value Applications Submitted",
                "Cost Applications Submitted",
                "Unique Cost Applications Submitted",
              ],
            },
            {
              metric: "Appointments Scheduled",
              values: [
                "Total Appointments Scheduled",
                "Unique Appointments Scheduled",
                "Value Appointments Scheduled",
                "Cost Appointments Scheduled",
                "Unique Cost Appointments Scheduled",
              ],
            },
            {
              metric: "Checkouts Initiated",
              values: [
                "Total Checkouts Initiated",
                "Unique Checkouts Initiated",
                "Value Checkouts Initiated",
                "Cost Checkouts Initiated",
                "Unique Cost Checkouts Initiated",
              ],
            },
            {
              metric: "Contacts",
              values: [
                "Total Contacts",
                "Unique Contacts",
                "Value Contacts",
                "Cost Contacts",
                "Unique Cost Contacts",
              ],
            },
            {
              metric: "Content Views",
              values: [
                "Total Content Views",
                "Unique Content Views",
                "Value Content Views",
                "Cost Content Views",
                "Unique Cost Content Views",
              ],
            },
            {
              metric: "Credit Spends",
              values: [
                "Total Credit Spends",
                "Unique Credit Spends",
                "Value Credit Spends",
                "Cost Credit Spends",
                "Unique Cost Credit Spends",
              ],
            },
            {
              metric: "Custom Events",
              values: [
                "Total Custom Events",
                "Unique Custom Events",
                "Value Custom Events",
                "Cost Custom Events",
                "Unique Cost Custom Events",
              ],
            },
            {
              metric: "Desktop App Engagements",
              values: [
                "Total Desktop App Engagements",
                "Unique Desktop App Engagements",
                "Value Desktop App Engagements",
                "Cost Desktop App Engagements",
                "Unique Cost Desktop App Engagements",
              ],
            },
            {
              metric: "Desktop App Story Engagements",
              values: [
                "Total Desktop App Story Engagements",
                "Unique Desktop App Story Engagements",
                "Value Desktop App Story Engagements",
                "Cost Desktop App Story Engagements",
                "Unique Cost Desktop App Story Engagements",
              ],
            },
            {
              metric: "Desktop App Uses",
              values: [
                "Total Desktop App Uses",
                "Unique Desktop App Uses",
                "Value Desktop App Uses",
                "Cost Desktop App Uses",
                "Unique Cost Desktop App Uses",
              ],
            },
            {
              metric: "Donation ROAS",
              values: [
                "Total Donation ROAS",
                "Unique Donation ROAS",
                "Value Donation ROAS",
                "Cost Donation ROAS",
                "Unique Cost Donation ROAS",
              ],
            },
            {
              metric: "Donations",
              values: [
                "Total Donations",
                "Unique Donations",
                "Value Donations",
                "Cost Donations",
                "Unique Cost Donations",
              ],
            },
            {
              metric: "Game Plays",
              values: [
                "Total Game Plays",
                "Unique Game Plays",
                "Value Game Plays",
                "Cost Game Plays",
                "Unique Cost Game Plays",
              ],
            },
            {
              metric: "Get Directions Clicks",
              values: [
                "Total Get Directions Clicks",
                "Unique Get Directions Clicks",
                "Value Get Directions Clicks",
                "Cost Get Directions Clicks",
                "Unique Cost Get Directions Clicks",
              ],
            },
            {
              metric: "In-app Ad Clicks",
              values: [
                "Total In-app Ad Clicks",
                "Unique In-app Ad Clicks",
                "Value In-app Ad Clicks",
                "Cost In-app Ad Clicks",
                "Unique Cost In-app Ad Clicks",
              ],
            },
            {
              metric: "In-app Ad Impressions",
              values: [
                "Total In-app Ad Impressions",
                "Unique In-app Ad Impressions",
                "Value In-app Ad Impressions",
                "Cost In-app Ad Impressions",
                "Unique Cost In-app Ad Impressions",
              ],
            },
            {
              metric: "Landing Page Views",
              values: [
                "Total Landing Page Views",
                "Unique Landing Page Views",
                "Value Landing Page Views",
                "Cost Landing Page Views",
                "Unique Cost Landing Page Views",
              ],
            },
            {
              metric: "Leads",
              values: [
                "Total Leads",
                "Unique Leads",
                "Value Leads",
                "Cost Leads",
                "Unique Cost Leads",
              ],
            },
            {
              metric: "Levels Achieved",
              values: [
                "Total Levels Achieved",
                "Unique Levels Achieved",
                "Value Levels Achieved",
                "Cost Levels Achieved",
                "Unique Cost Levels Achieved",
              ],
            },
            {
              metric: "Location Searches",
              values: [
                "Total Location Searches",
                "Unique Location Searches",
                "Value Location Searches",
                "Cost Location Searches",
                "Unique Cost Location Searches",
              ],
            },
            {
              metric: "Meta Workflow Completions",
              values: [
                "Total Meta Workflow Completions",
                "Unique Meta Workflow Completions",
                "Value Meta Workflow Completions",
                "Cost Meta Workflow Completions",
                "Unique Cost Meta Workflow Completions",
              ],
            },
            {
              metric: "Mobile App D2 Retention",
              values: [
                "Total Mobile App D2 Retention",
                "Unique Mobile App D2 Retention",
                "Value Mobile App D2 Retention",
                "Cost Mobile App D2 Retention",
                "Unique Cost Mobile App D2 Retention",
              ],
            },
            {
              metric: "Mobile App D7 Retention",
              values: [
                "Total Mobile App D7 Retention",
                "Unique Mobile App D7 Retention",
                "Value Mobile App D7 Retention",
                "Cost Mobile App D7 Retention",
                "Unique Cost Mobile App D7 Retention",
              ],
            },
            {
              metric: "Orders Created",
              values: [
                "Total Orders Created",
                "Unique Orders Created",
                "Value Orders Created",
                "Cost Orders Created",
                "Unique Cost Orders Created",
              ],
            },
            {
              metric: "Orders Dispatched",
              values: [
                "Total Orders Dispatched",
                "Unique Orders Dispatched",
                "Value Orders Dispatched",
                "Cost Orders Dispatched",
                "Unique Cost Orders Dispatched",
              ],
            },
            {
              metric: "Other Offline Conversions",
              values: [
                "Total Other Offline Conversions",
                "Unique Other Offline Conversions",
                "Value Other Offline Conversions",
                "Cost Other Offline Conversions",
                "Unique Cost Other Offline Conversions",
              ],
            },
            {
              metric: "Phone Number Clicks",
              values: [
                "Total Phone Number Clicks",
                "Unique Phone Number Clicks",
                "Value Phone Number Clicks",
                "Cost Phone Number Clicks",
                "Unique Cost Phone Number Clicks",
              ],
            },
            {
              metric: "Products Customised",
              values: [
                "Total Products Customised",
                "Unique Products Customised",
                "Value Products Customised",
                "Cost Products Customised",
                "Unique Cost Products Customised",
              ],
            },
            {
              metric: "Purchase ROAS",
              values: [
                "Total Purchase ROAS",
                "Unique Purchase ROAS",
                "Value Purchase ROAS",
                "Cost Purchase ROAS",
                "Unique Cost Purchase ROAS",
              ],
            },
            {
              metric: "Purchases",
              values: [
                "Total Purchases",
                "Unique Purchases",
                "Value Purchases",
                "Cost Purchases",
                "Unique Cost Purchases",
              ],
            },
            {
              metric: "Ratings Submitted",
              values: [
                "Total Ratings Submitted",
                "Unique Ratings Submitted",
                "Value Ratings Submitted",
                "Cost Ratings Submitted",
                "Unique Cost Ratings Submitted",
              ],
            },
            {
              metric: "Registrations Completed",
              values: [
                "Total Registrations Completed",
                "Unique Registrations Completed",
                "Value Registrations Completed",
                "Cost Registrations Completed",
                "Unique Cost Registrations Completed",
              ],
            },
            {
              metric: "Searches",
              values: [
                "Total Searches",
                "Unique Searches",
                "Value Searches",
                "Cost Searches",
                "Unique Cost Searches",
              ],
            },
            {
              metric: "Subscriptions",
              values: [
                "Total Subscriptions",
                "Unique Subscriptions",
                "Value Subscriptions",
                "Cost Subscriptions",
                "Unique Cost Subscriptions",
              ],
            },
            {
              metric: "Trials Started",
              values: [
                "Total Trials Started",
                "Unique Trials Started",
                "Value Trials Started",
                "Cost Trials Started",
                "Unique Cost Trials Started",
              ],
            },
            {
              metric: "Tutorials Completed",
              values: [
                "Total Tutorials Completed",
                "Unique Tutorials Completed",
                "Value Tutorials Completed",
                "Cost Tutorials Completed",
                "Unique Cost Tutorials Completed",
              ],
            },
          ],
        },
        {
          sectionTitle: "Custom Events",
          attributes: [
            { title: "No Events Available", value: "No Events Available" },
          ],
        },
      ],
    },
    {
      sectionTitle: "Settings",
      subSections: [
        {
          sectionTitle: "Object Names and IDs",
          attributes: [
            { title: "Account ID", value: "Account ID" },
            { title: "Account name", value: "Account name" },
            { title: "Campaign ID", value: "Campaign ID" },
            { title: "Ad set name", value: "Ad set name" },
            { title: "Ad set ID", value: "Ad set ID" },
            { title: "Ad ID", value: "Ad ID" },
            { title: "Ad name", value: "Ad name" },
            { title: "Tags", value: "Tags" },
          ],
        },
        {
          sectionTitle: "Status and Dates",
          attributes: [
            { title: "Date created", value: "Date created" },
            { title: "Date last edited", value: "Date last edited" },
            { title: "Starts", value: "Starts" },
            { title: "Ends", value: "Ends" },
            { title: "Reporting starts", value: "Reporting starts" },
            { title: "Reporting ends", value: "Reporting ends" },
            {
              title: "Time elapsed percentage",
              value: "Time elapsed percentage",
            },
          ],
        },
        {
          sectionTitle: "Goal, Budget & Schedule",
          attributes: [
            { title: "Objective", value: "Objective" },
            { title: "Buying type", value: "Buying type" },
            { title: "Bid strategy", value: "Bid strategy" },
            { title: "Budget", value: "Budget" },
            { title: "Buying type", value: "Buying type" },
            { title: "Budget Remaining", value: "Budget Remaining" },
            { title: "Schedule", value: "Schedule" },
            {
              title: "Amount spent percentage",
              value: "Amount spent percentage",
            },
            {
              title: "Campaign spending limit",
              value: "Campaign spending limit",
            },
            { title: "Ad schedule", value: "Ad schedule" },
            { title: "Conversion location", value: "Conversion location" },
          ],
        },
        {
          sectionTitle: "Targeting",
          attributes: [
            {
              title: "Audience location (ad set settings)",
              value: "Audience location (ad set settings)",
            },
            {
              title: "Audience age (ad set settings)",
              value: "Audience age (ad set settings)",
            },
            {
              title: "Audience gender (ad set settings)",
              value: "Audience gender (ad set settings)",
            },
            {
              title: "Included custom audiences",
              value: "Included custom audiences",
            },
            {
              title: "Excluded custom audiences",
              value: "Excluded custom audiences",
            },
          ],
        },
        {
          sectionTitle: "Ad creative",
          attributes: [
            { title: "Page name", value: "Page name" },
            {
              title: "Headline (ad settings)",
              value: "Headline (ad settings)",
            },
            { title: "Body (ad settings)", value: "Body (ad settings)" },
            { title: "Link (ad settings)", value: "Link (ad settings)" },
            { title: "Destination", value: "Destination" },
            { title: "Preview link", value: "Preview link" },
          ],
        },
        {
          sectionTitle: "Tracking",
          attributes: [
            { title: "URL parameters", value: "URL parameters" },
            { title: "Meta pixel", value: "Meta pixel" },
            { title: "App event", value: "App event" },
            { title: "Offline event", value: "Offline event" },
          ],
        },
      ],
    },
    {
      sectionTitle: "A/B test",
      subSections: [
        {
          sectionTitle: "Performance",
          attributes: [
            { title: "Split", value: "Split" },
            { title: "Variable", value: "Variable" },
          ],
        },
      ],
    },
    {
      sectionTitle: "Optimisation",

      subSections: [
        {
          sectionTitle: "Performance",
          attributes: [
            { title: "Optimisation events", value: "Optimisation events" },
            {
              title: "Cost per optimisation event",
              value: "Cost per optimisation event",
            },
            { title: "Last significant edit", value: "Last significant edit" },
          ],
        },
      ],
    },
  ];
  const handleCheckboxChange = (
    section,
    value,
    isMain,
    metricType,
    subMetric
  ) => {
    if (isMain) {
      // Check/uncheck all values in the section
      const newSelectedValues = [...selectedValues];
      section.subSections.forEach((subSection) => {
        subSection.attributes.forEach((attr) => {
          if (newSelectedValues.includes(attr.value)) {
            newSelectedValues.splice(newSelectedValues.indexOf(attr.value), 1);
          } else {
            newSelectedValues.push(attr.value);
          }
        });
      });
      setSelectedValues(newSelectedValues);
    } else {
      // Toggle individual value or specific metric
      const formattedValue = subMetric ? `${subMetric} ${metricType}` : value;
      if (selectedValues.includes(formattedValue)) {
        setSelectedValues(
          selectedValues.filter((val) => val !== formattedValue)
        );
      } else {
        setSelectedValues([...selectedValues, formattedValue]);
      }
    }
  };
  // Function to remove an item from the selected list and uncheck it
  const handleRemoveItem = (value) => {
    setSelectedValues(selectedValues.filter((val) => val !== value));
  };
  // CustomCheckbox Component
  const CustomCheckbox = ({ checked, onChange }) => {
    return (
      <div
        onClick={onChange} // Trigger the change on click
        style={{
          width: "12px", // Increased width for the icon
          height: "12px", // Increased height for the ico
          border: "2px solid gainsboro", // Gray border

          borderRadius: "2px", // Slightly rounded corners
          display: "flex", // Flexbox for centering the icon
          alignItems: "center", // Center vertically
          justifyContent: "center", // Center horizontally
          cursor: "pointer", // Change cursor to pointer
          position: "relative", // Position relative for absolute positioning of the checkmark
        }}
      >
        {checked && (
          <img
            src="https://www.svgrepo.com/show/61127/tick-sign.svg"
            style={{ width: "10px", height: "10px" }}
            alt=""
          />
        )}
      </div>
    );
  };
  const TitleCheckbox = ({ checked, onChange }) => {
    return (
      <div
        onClick={onChange} // Trigger the change on click
        style={{
          width: "12px", // Width for the checkbox
          height: "12px", // Height for the checkbox
          border: "2px solid gainsboro", // Gray border
          borderRadius: "2px", // Slightly rounded corners
          display: "flex", // Flexbox for centering the icon
          alignItems: "center", // Center vertically
          justifyContent: "center", // Center horizontally
          cursor: "pointer", // Change cursor to pointer
          position: "relative", // Position relative for absolute positioning of the icons
        }}
      >
        {checked ? (
          <img
            src="https://www.svgrepo.com/show/61127/tick-sign.svg" // Image when checked
            style={{ width: "10px", height: "10px" }}
            alt="Checked"
          />
        ) : (
          <img
            src="https://cdn4.iconfinder.com/data/icons/mathematical-symbols/43/Minus_Sign-512.png" // Image when unchecked
            style={{ width: "10px", height: "10px" }}
            alt="Unchecked"
          />
        )}
      </div>
    );
  };
  const handleapplybutton = () => {
    setShowCustumizedlayout(false);
    setShowCustumizeBanner(false);
  };
  const handleCencelButton = () => {
    setShowCustumizedlayout(false);
    setShowCustumizeBanner(false);
  };
  useEffect(() => {
    fetchAccount();
  }, []);
  useEffect(() => {
    const firstDay = new Date(
      currentMonth.getFullYear(),
      currentMonth.getMonth(),
      1
    );
    const today = new Date();
    const isCurrentMonth =
      today.getFullYear() === currentMonth.getFullYear() &&
      today.getMonth() === currentMonth.getMonth();

    // Only update if startDate and endDate are not already set
    if (
      !localStorage.getItem("startDate") &&
      !localStorage.getItem("endDate")
    ) {
      setStartDate(firstDay);
      setEndDate(
        isCurrentMonth
          ? today
          : new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 0)
      );
    }
  }, [currentMonth]);
  useEffect(() => {
    const savedCampaignName = localStorage.getItem("filteredCampaignName");

    if (savedCampaignName) {
      const filtered = campaings.filter((campaign) =>
        campaign.campaignName
          .toLowerCase()
          .includes(savedCampaignName.toLowerCase())
      );
      setCampaigns(filtered);
    } else {
      setCampaigns(campaings);
    }
  }, [loading]);

  return (
    <div>
      <div
        style={{ position: "relative" }}
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
                                  style={{ marginLeft: "60px" }}
                                  class="_2ww2"
                                >
                                  <div>
                                    <div class="_4u-c">
                                      <div data-pagelet="AdsPETopNavContainer.react">
                                        <span
                                          data-surface-wrapper="1"
                                          data-surface="/am/msg:AdsPETopNavContainer"
                                          data-auto-logging-id="f9dd96f13078b"
                                          id="style-HrtWD"
                                          class="style-HrtWD"
                                        ></span>
                                        <div
                                          id="style-UaX4C"
                                          class="style-UaX4C"
                                        >
                                          <div class="_9g6y _2ph-">
                                            <div
                                              class="x6s0dn4 x78zum5 x1nhvcw1 x19lwn94 snipcss0-0-0-1"
                                              role="toolbar"
                                              data-auto-logging-component-type="GeoToolBar"
                                            >
                                              <div class="_8fgf _8ox0 snipcss0-1-1-2">
                                                <div class="_3qn7 _61-0 _2fyi _3qng snipcss0-2-2-3">
                                                  <div class="x1t2a60a x1mpkggp snipcss0-3-3-4">
                                                    <div
                                                      aria-level="2"
                                                      class="x1xqt7ti xm46was x1xlr1w8 x1jrz1v4 xbsr9hj xuxw1ft x1yc453h x1h4wwuj xeuugli snipcss0-4-4-5"
                                                      role="heading"
                                                    >
                                                      {currentfolder ===
                                                      "Campaings"
                                                        ? "Campaings"
                                                        : currentfolder ===
                                                          "AdsSets"
                                                        ? "Ad Sets"
                                                        : "Ads"}
                                                    </div>
                                                  </div>
                                                  <div
                                                    style={{
                                                      cursor: "pointer",
                                                    }}
                                                    class="x1i64zmx snipcss0-3-3-6"
                                                  >
                                                    <div class="x6s0dn4 x78zum5 x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x178xt8z xm81vs4 xso031l xy80clv xwebqov xvyu6v8 xrsgblv x10lij0i x1lcm9me x1yr5g0i xrt01vj x10y3i5r x1gzqxud xbsr9hj xm7lytj x1ykpatu xlu9dua x1w2lkzu">
                                                      <div class=""></div>
                                                      <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94">
                                                        <div class="x6s0dn4 x78zum5 x1q0g3np x1a02dak x2lwn1j xeuugli x1iyjqo2 x19lwn94">
                                                          <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94">
                                                            <div class="xjbqb8w x972fbf xcfux6l x1qhh985 xm0m39n xdj266r x11i5rnm xat24cr x1mh8g0r x1t137rt xexx8yu x4uap5 x18d9i69 xkhd6sd xlyipyv xr4vacz x1gnnqk1 xbsr9hj x1urst0s x1glnyev x1ad04t7 x1ix68h3 x19gujb8 xni1clt x1tutvks xfrpkgu x15h3p50 x1gf4pb6 xh7izdl x10emqs4 x2yyzbt xu8dvwe xmi5d70 x1fvot60 xo1l8bm xxio538 x1iyjqo2 x6ikm8r x10wlt62">
                                                              <div
                                                                class="xmi5d70 x1fvot60 xo1l8bm xxio538 xbsr9hj xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj xeuugli"
                                                                id="js_8u"
                                                              >
                                                                <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1qughib">
                                                                  <div class="x6s0dn4 x78zum5 x1q0g3np xfex06f x3pnbk8 x2lwn1j xeuugli">
                                                                    <div class="xmi5d70 x1fvot60 xo1l8bm xxio538 xbsr9hj xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj xeuugli">
                                                                      {
                                                                        account?.currentAccountname
                                                                      }
                                                                    </div>
                                                                  </div>
                                                                  <div
                                                                    class="x3nfvp2 x120ccyz x4s1yf2"
                                                                    role="presentation"
                                                                  >
                                                                    <div
                                                                      class="xtwfq29 style-NEN4Q"
                                                                      id="style-NEN4Q"
                                                                    ></div>
                                                                  </div>
                                                                </div>
                                                              </div>
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                    {showmyaccount && (
                                                      <div className="accountonser">
                                                        <div class="x1qjc9v5 x78zum5 xdt5ytf x2lwn1j xeuugli snipcss-e12RJ">
                                                          <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 xw7yly9 xktsk01 x1yztbdb x1d52u69">
                                                            <div class="x78zum5 xdt5ytf xdl72j9 x1iyjqo2 xeuugli x1n2onr6 xh8yej3">
                                                              <div
                                                                class="x1qvwoe0 xjm9jq1 x1y332i5 xcwd3tp x1jyxor1 x39eecv x6ikm8r x10wlt62 x10l6tqk xuxw1ft x1i1rx1s style-Q1mkT"
                                                                data-sscoverage-ignore="true"
                                                                id="style-Q1mkT"
                                                              >
                                                                <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94">
                                                                  <div class="x1iyjqo2">
                                                                    <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 xs83m0k x65s2av">
                                                                      <label
                                                                        id="js_9t"
                                                                        for="js_9s"
                                                                      >
                                                                        <span class="xmi5d70 x1fvot60 xxio538 xbsr9hj xq9mrsl x1mzt3pk x1vvkbs x13faqbe x117nqv4 xeuugli">
                                                                          <span class="xmi5d70 x1fvot60 xxio538 xbsr9hj xq9mrsl x1mzt3pk x1vvkbs x13faqbe x117nqv4 xeuugli"></span>
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
                                                                              <div class="x6s0dn4 x3nfvp2 x1q0g3np xozqiw3 x2lwn1j xeuugli x1c4vz4f x19lwn94 xmi5d70 x1fvot60 xo1l8bm xxio538 xbsr9hj xq9mrsl xqcrz7y x2lah0s">
                                                                                ​
                                                                                <div class="x3nfvp2">
                                                                                  <div
                                                                                    class="xtwfq29 style-9xRzH"
                                                                                    id="style-9xRzH"
                                                                                  ></div>
                                                                                </div>
                                                                              </div>
                                                                              <input
                                                                                placeholder="Search for an ad account"
                                                                                id="js_9s"
                                                                                aria-labelledby="js_9t"
                                                                                aria-busy="false"
                                                                                aria-disabled="false"
                                                                                class="xjbqb8w x972fbf xcfux6l x1qhh985 xm0m39n xdj266r x11i5rnm xat24cr x1mh8g0r x1t137rt xexx8yu x4uap5 x18d9i69 xkhd6sd xr4vacz x1gnnqk1 x1541jtf x1urst0s x1glnyev x1ad04t7 x1ix68h3 x19gujb8 xni1clt x1tutvks xfrpkgu x15h3p50 x1gf4pb6 xh7izdl x10emqs4 x2yyzbt xu8dvwe xmi5d70 x1fvot60 xo1l8bm xxio538 x1rffpxw xh8yej3"
                                                                                type="text"
                                                                                value=""
                                                                              />
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
                                                          <div class="x8gbvx8 x78zum5 x1q0g3np x2lwn1j xeuugli x1b3vtwk x13fuv20 x178xt8z">
                                                            <div
                                                              style={{
                                                                backgroundColor:
                                                                  "#edf5ff",
                                                                padding:
                                                                  "5px 30px",
                                                              }}
                                                              class="x78zum5 xdt5ytf x2lwn1j xeuugli x1uxo832 x7kga7y x1dp7odi x1nti1gv x10y3i5r x2lah0s x1qughib xinu3np"
                                                            >
                                                              <div class="xb57i2i x1q594ok x5lxg6s x78zum5 xdt5ytf x6ikm8r x1ja2u2z x1pq812k x1rohswg xfk6m8 x1yqm8si xjx87ck xx8ngbg xwo3gff x1n2onr6 x1oyok0e x1odjw0f x1e4zzel xhft0lx">
                                                                <div class="x78zum5 xdt5ytf x1iyjqo2 x1n2onr6">
                                                                  <div class="xeuugli x1d52u69 xqmxbcd xw7yly9">
                                                                    <div></div>
                                                                    <div
                                                                      class="x78zum5 xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r xexx8yu x4uap5 x18d9i69 xkhd6sd xdt5ytf xdm93yi"
                                                                      role="grid"
                                                                    >
                                                                      <div class="x78zum5 x1iyjqo2">
                                                                        <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1lcm9me x1yr5g0i xrt01vj x10y3i5r x1iorvi4 xjkvuk6 xurb0ha x1sxyh0 xp7jhwk x1n0m28w">
                                                                          <div class="x6s0dn4 x3nfvp2 x1q0g3np xozqiw3 x2lwn1j xeuugli x1c4vz4f x65s2av">
                                                                            <div
                                                                              aria-level="4"
                                                                              class="x1xqt7ti xsuwoey x1xlr1w8 x63nzvj xbsr9hj xq9mrsl x1yc453h x1h4wwuj xeuugli"
                                                                              role="heading"
                                                                            >
                                                                              <div class="x78zum5 x1q0g3np x17zd0t2 x1r0jzty x2lwn1j xeuugli xm3z3ea x1x8b98j x131883w x16mih1h x11yfylt xl010v5 x6wrskw x16m5f1z">
                                                                                <div
                                                                                  aria-level="4"
                                                                                  class="x1xqt7ti xsuwoey x1xlr1w8 x63nzvj xbsr9hj xq9mrsl x1yc453h x1h4wwuj xeuugli"
                                                                                  role="heading"
                                                                                >
                                                                                  Your
                                                                                  account
                                                                                </div>
                                                                                <div class="x1rg5ohu x67bb7w">
                                                                                  <div class="xmi5d70 x1fvot60 xxio538 xbsr9hj xq9mrsl x1h4wwuj x1fcty0u x78zum5 xl56j7k x6s0dn4">
                                                                                    <span>
                                                                                      ​
                                                                                    </span>
                                                                                    <div class="xjm9jq1 x78zum5 xl56j7k x6s0dn4">
                                                                                      <div class="x78zum5 x1ypdohk x1uuroth x67bb7w xsgj6o6 xw3qccf">
                                                                                        <div
                                                                                          class="x3nfvp2 x120ccyz x4s1yf2"
                                                                                          role="presentation"
                                                                                        >
                                                                                          <div
                                                                                            class="xtwfq29 style-1aYND"
                                                                                            id="style-1aYND"
                                                                                          ></div>
                                                                                        </div>
                                                                                      </div>
                                                                                    </div>
                                                                                  </div>
                                                                                </div>
                                                                              </div>
                                                                            </div>
                                                                          </div>
                                                                        </div>
                                                                      </div>
                                                                      <div role="row">
                                                                        <div
                                                                          class="x1i10hfl x1qjc9v5 xjbqb8w xjqpnuy xa49m3k xqeqjp1 x2hbi6w x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk x78zum5 xdl72j9 xdt5ytf x2lah0s xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli xexx8yu x4uap5 x18d9i69 xkhd6sd x1n2onr6 x16tdsg8 x1hl2dhg xggy1nq x1ja2u2z x1t137rt"
                                                                          role="gridcell"
                                                                          tabindex="0"
                                                                        >
                                                                          <div class="x78zum5 x1iyjqo2">
                                                                            <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1lcm9me x1yr5g0i xrt01vj x10y3i5r x1iorvi4 xjkvuk6 xurb0ha x1sxyh0 xp7jhwk x1n0m28w xo1l8bm xbsr9hj x1k4ywey">
                                                                              <div
                                                                                class="x78zum5 x1iyjqo2 x1qughib xeuugli"
                                                                                id="js_9y"
                                                                              >
                                                                                <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94">
                                                                                  <div
                                                                                    class="xh8yej3"
                                                                                    id="north_star_personal_first_level_scope_item"
                                                                                  >
                                                                                    <div class="xy99zzx x1lcm9me x1yr5g0i xrt01vj x10y3i5r x1rdy4ex x4vbgl9 xp7jhwk x1n0m28w x1iorvi4 xjkvuk6 xurb0ha x1sxyh0">
                                                                                      <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 xeuugli x1iyjqo2 x19lwn94 x1gg8mnh">
                                                                                        <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94">
                                                                                          <div class="x1lliihq x1n2onr6 x2lah0s x10w6t97 x1td3qas x1lcm9me x1yr5g0i xrt01vj x10y3i5r">
                                                                                            <div class="x10l6tqk x6ikm8r x10wlt62 x13vifvy x17qophe xh8yej3 x5yr21d x1o1ewxj x3x9cwd x1e5q0jg x13rtm0m xtd80it x1jgp7su x1q1rkhy x18tuezv x1xuqjiz xhl3afg x10cdfl8">
                                                                                              <img
                                                                                                alt=""
                                                                                                class="img"
                                                                                                src="https://scontent.flhe41-1.fna.fbcdn.net/v/t39.30808-1/440764240_122100670328299638_4115066123442970032_n.jpg?stp=cp0_dst-jpg_s50x50&amp;_nc_cat=108&amp;ccb=1-7&amp;_nc_sid=19114f&amp;_nc_eui2=AeG2rVpEGSnoKvn2pjwNv2NUkYnu5-V7Sn6Rie7n5XtKfkwTslnEH9LkbNrIVLdxwFC9iMhx3HkRl6Cg6AO77OB4&amp;_nc_ohc=aTbESaDIFVYQ7kNvgHnHz2B&amp;_nc_zt=24&amp;_nc_ht=scontent.flhe41-1.fna&amp;_nc_gid=AtwakHmDmbx4pVNL43tARy9&amp;oh=00_AYDXnzBkFOADzqqkGSAf7xcD6ajAlKH9bqOLmcAs7heZdA&amp;oe=671AF2FF"
                                                                                              />
                                                                                              <div class="x1o1ewxj x3x9cwd x1e5q0jg x13rtm0m x4elba9 x5yr21d x17qophe x6ikm8r x10wlt62 x47corl x10l6tqk x13vifvy xh8yej3"></div>
                                                                                            </div>
                                                                                          </div>
                                                                                          <div class="xeuugli">
                                                                                            <div
                                                                                              aria-level="3"
                                                                                              class="x1xqt7ti x1uxerd5 x1xlr1w8 xrohxju xbsr9hj x1yc453h xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj xeuugli"
                                                                                              role="heading"
                                                                                              tabindex="-1"
                                                                                            >
                                                                                              <div
                                                                                                aria-level="4"
                                                                                                class="x1xqt7ti xsuwoey x1xlr1w8 x63nzvj x140t73q xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj xeuugli"
                                                                                                role="heading"
                                                                                              >
                                                                                                Ali
                                                                                                Hamza
                                                                                              </div>
                                                                                            </div>
                                                                                            <div class="xmi5d70 x1fvot60 xxio538 xbsr9hj xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj x1fcty0u xeuugli">
                                                                                              <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94">
                                                                                                <span class="xmi5d70 xw23nyj xo1l8bm x63nzvj x140t73q xq9mrsl x1h4wwuj xeuugli">
                                                                                                  2
                                                                                                  ad
                                                                                                  accounts
                                                                                                </span>
                                                                                              </div>
                                                                                            </div>
                                                                                          </div>
                                                                                        </div>
                                                                                        <div
                                                                                          class="x3nfvp2 x120ccyz x140t73q"
                                                                                          role="presentation"
                                                                                        >
                                                                                          <div
                                                                                            class="xtwfq29 style-ycmUl"
                                                                                            id="style-ycmUl"
                                                                                          ></div>
                                                                                        </div>
                                                                                      </div>
                                                                                    </div>
                                                                                  </div>
                                                                                </div>
                                                                              </div>
                                                                            </div>
                                                                          </div>
                                                                        </div>
                                                                      </div>
                                                                    </div>
                                                                  </div>
                                                                </div>
                                                                <div
                                                                  class="x14nfmen x1s85apg x5yr21d xds687c xg01cxk x10l6tqk x13vifvy x1wsgiic x19991ni xwji4o3 x1kky2od x1sd63oq style-Qg3sA"
                                                                  data-visualcompletion="ignore"
                                                                  data-thumb="1"
                                                                  id="style-Qg3sA"
                                                                ></div>
                                                                <div
                                                                  class="x9f619 x1s85apg xds687c xg01cxk xexx8yu x18d9i69 x1e558r4 x150jy0e x47corl x10l6tqk x13vifvy x1n4smgl x1d8287x x19991ni xwji4o3 x1kky2od style-WKehQ"
                                                                  data-visualcompletion="ignore"
                                                                  data-thumb="1"
                                                                  id="style-WKehQ"
                                                                >
                                                                  <div class="x1hwfnsy x1lcm9me x1yr5g0i xrt01vj x10y3i5r x5yr21d xh8yej3"></div>
                                                                </div>
                                                              </div>
                                                              <div>
                                                                <hr class="xjbqb8w x11i5rnm x1mh8g0r xso031l x1q0q8m5 xqtp20y xwebqov xvyu6v8 xrsgblv x10lij0i xw7yly9 x1yztbdb" />
                                                                <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1yztbdb x1d52u69 xktsk01">
                                                                  <div class="x6s0dn4 x78zum5 xdt5ytf xozqiw3 x2lwn1j xeuugli x1iyjqo2 xavht8x">
                                                                    <div
                                                                      class="x3nfvp2 x193iq5w xxymvpz style-opN9C"
                                                                      role="none"
                                                                      id="style-opN9C"
                                                                    >
                                                                      <div
                                                                        aria-busy="false"
                                                                        class="x1i10hfl xjqpnuy xa49m3k xqeqjp1 x2hbi6w x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli x16tdsg8 xggy1nq x1ja2u2z x6s0dn4 x1ejq31n xd10rxx x1sy0etr x17r0tee xdl72j9 x1q0g3np x193iq5w x1n2onr6 x1hl2dhg x87ps6o xxymvpz xlh3980 xvmahel x1lku1pv x1g40iwv x1lcm9me x1yr5g0i xrt01vj x10y3i5r x1ob88yx xaatb59 x1qgsegg xo1l8bm xbsr9hj x1v911su x1y1aw1k xwib8y2 x1swvt13 x1pi30zi x78zum5 x1iyjqo2 xs83m0k"
                                                                        role="button"
                                                                        tabindex="0"
                                                                      >
                                                                        <span class="xmi5d70 x1fvot60 xxio538 x1heor9g xq9mrsl x1h4wwuj x1pd3egz xeuugli xh8yej3">
                                                                          <div class="x78zum5">
                                                                            <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1hc1fzr x13dflua x6o7n8i xxziih7 x12w9bfk xl56j7k xh8yej3">
                                                                              <div class="x1xqt7ti x1fvot60 xk50ysn xxio538 x1heor9g xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj xeuugli">
                                                                                Create
                                                                                a
                                                                                business
                                                                                portfolio
                                                                              </div>
                                                                            </div>
                                                                          </div>
                                                                        </span>
                                                                      </div>
                                                                    </div>
                                                                    <div
                                                                      class="x3nfvp2 x193iq5w xxymvpz style-IrGgn"
                                                                      role="none"
                                                                      id="style-IrGgn"
                                                                    >
                                                                      <div
                                                                        aria-busy="false"
                                                                        class="x1i10hfl xjqpnuy xa49m3k xqeqjp1 x2hbi6w x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli x16tdsg8 xggy1nq x1ja2u2z x6s0dn4 x1ejq31n xd10rxx x1sy0etr x17r0tee xdl72j9 x1q0g3np x193iq5w x1n2onr6 x1hl2dhg x87ps6o xxymvpz xlh3980 xvmahel x1lku1pv x1g40iwv x1lcm9me x1yr5g0i xrt01vj x10y3i5r x1ob88yx xaatb59 x1qgsegg xo1l8bm xbsr9hj x1v911su x1y1aw1k xwib8y2 x1swvt13 x1pi30zi x78zum5 x1iyjqo2 xs83m0k"
                                                                        role="button"
                                                                        tabindex="0"
                                                                      >
                                                                        <span class="xmi5d70 x1fvot60 xxio538 x1heor9g xq9mrsl x1h4wwuj x1pd3egz xeuugli xh8yej3">
                                                                          <div class="x78zum5">
                                                                            <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1hc1fzr x13dflua x6o7n8i xxziih7 x12w9bfk xl56j7k xh8yej3">
                                                                              <div class="x1xqt7ti x1fvot60 xk50ysn xxio538 x1heor9g xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj xeuugli">
                                                                                Log
                                                                                out
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
                                                            <div class="xvziehe x1kmanbg">
                                                              <div class="xb57i2i x1q594ok x5lxg6s x78zum5 xdt5ytf x6ikm8r x1ja2u2z x1pq812k x1rohswg xfk6m8 x1yqm8si xjx87ck xx8ngbg xwo3gff x1n2onr6 x1oyok0e x1odjw0f x1e4zzel x8g9x59 xw7yly9 x1yztbdb">
                                                                <div class="x78zum5 xdt5ytf x1iyjqo2 x1n2onr6">
                                                                  <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1d52u69 xktsk01">
                                                                    <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 xeuugli x1iyjqo2 x19lwn94 xu0aao5">
                                                                      <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94">
                                                                        <div class="xeuugli">
                                                                          <div
                                                                            aria-level="3"
                                                                            class="x1xqt7ti x1uxerd5 x1xlr1w8 xrohxju xbsr9hj x1yc453h xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj xeuugli"
                                                                            role="heading"
                                                                          >
                                                                            Ali
                                                                            Hamza
                                                                          </div>
                                                                          <div class="xmi5d70 x1fvot60 xxio538 xbsr9hj xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj x1fcty0u xeuugli">
                                                                            <span class="xmi5d70 xw23nyj xo1l8bm x63nzvj xbsr9hj xq9mrsl x1h4wwuj xeuugli">
                                                                              2
                                                                              ad
                                                                              accounts
                                                                            </span>
                                                                          </div>
                                                                        </div>
                                                                      </div>
                                                                    </div>
                                                                  </div>
                                                                  <div
                                                                    aria-level="4"
                                                                    class="x1xqt7ti xsuwoey x1xlr1w8 x63nzvj xbsr9hj xq9mrsl x1yc453h x1h4wwuj xeuugli x1d52u69 xktsk01 xw7yly9"
                                                                    role="heading"
                                                                  >
                                                                    Ad accounts
                                                                  </div>
                                                                  <div class="xeuugli xmupa6y xqmxbcd x1xmf6yo x1e56ztr">
                                                                    <div></div>
                                                                    <div
                                                                      class="x78zum5 xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r xexx8yu x4uap5 x18d9i69 xkhd6sd xdt5ytf xdm93yi"
                                                                      role="grid"
                                                                    >
                                                                      <div role="row">
                                                                        <div
                                                                          class="x1i10hfl x1qjc9v5 xjbqb8w xjqpnuy xa49m3k xqeqjp1 x2hbi6w x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk x78zum5 xdl72j9 xdt5ytf x2lah0s xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli xexx8yu x4uap5 x18d9i69 xkhd6sd x1n2onr6 x16tdsg8 x1hl2dhg xggy1nq x1ja2u2z x1t137rt"
                                                                          role="gridcell"
                                                                          tabindex="0"
                                                                        >
                                                                          <div class="x78zum5 x1iyjqo2">
                                                                            <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1lcm9me x1yr5g0i xrt01vj x10y3i5r x1y1aw1k xwib8y2 xurb0ha x1sxyh0 xp7jhwk x1n0m28w xo1l8bm xbsr9hj x1k4ywey">
                                                                              <div
                                                                                class="x78zum5 x1iyjqo2 x1qughib xeuugli"
                                                                                id="js_a0"
                                                                              >
                                                                                <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94">
                                                                                  <div class="x1rg5ohu x1n2onr6 x3oybdh">
                                                                                    <div class="x1n2onr6 x14atkfc">
                                                                                      <div class="x6s0dn4 x78zum5 x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x178xt8z xm81vs4 xso031l xy80clv xwebqov xvyu6v8 xrsgblv x10lij0i xzolkzo x12go9s9 x1rnf11y xprq8jg x1gzqxud xbsr9hj x9f619 xexx8yu x4uap5 x18d9i69 xkhd6sd xl56j7k xxk0z11 xvy4d1p">
                                                                                        <div class=""></div>
                                                                                        <input
                                                                                          aria-checked="true"
                                                                                          aria-disabled="false"
                                                                                          aria-labelledby="js_a0"
                                                                                          class="xjyslct x1ypdohk x5yr21d x17qophe xdj266r x11i5rnm xat24cr x1mh8g0r x1w3u9th x1t137rt x10l6tqk x13vifvy xh8yej3 x1vjfegm"
                                                                                          type="radio"
                                                                                          value="true"
                                                                                          checked=""
                                                                                        />
                                                                                        <div class="x13dflua xnnyp6c x12w9bfk x78zum5 x6o7n8i x1hc1fzr x3oybdh">
                                                                                          <div class="xsmyaan x1kpxq89 xzolkzo x12go9s9 x1rnf11y xprq8jg xo1l8bm x140t73q x19bke7z"></div>
                                                                                        </div>
                                                                                      </div>
                                                                                      <div class="xwebqov xvyu6v8 xrsgblv x10lij0i xzolkzo x12go9s9 x1rnf11y xprq8jg x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x178xt8z xm81vs4 xso031l xy80clv x13dflua x6o7n8i xxziih7 x12w9bfk xg01cxk x47corl x10l6tqk x17qophe xds687c x13vifvy x1ey2m1c x6ikm8r x10wlt62 xnl74ce xmb4j5p xdx8kah xwmxa91 xmn8db3 x8lbu6m x2te4dl x1bs8fl3 xhhp2wi x14q35kh x1wa3ocq x1n7iyjn x1t0di37 x1tt7eqi xe25xm5 xsp6npd x1s928wv x1w3onc2 x1j6awrg x9obomg x1ryaxvv x1hvfe8t x1te75w5"></div>
                                                                                    </div>
                                                                                  </div>
                                                                                  <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 xeuugli x1iyjqo2 x19lwn94 xu0aao5">
                                                                                    <div class="x1lliihq x1n2onr6 x2lah0s x10w6t97 x1td3qas xzolkzo x12go9s9 x1rnf11y xprq8jg">
                                                                                      <div
                                                                                        class="x10l6tqk x6ikm8r x10wlt62 x13vifvy x17qophe xh8yej3 x5yr21d x1o1ewxj x3x9cwd x1e5q0jg x13rtm0m xosibs0 xt24udd xw53kvy x1dka6rp x47corl x10cdfl8"
                                                                                        role="presentation"
                                                                                      >
                                                                                        <div
                                                                                          class="x3nfvp2 x120ccyz x4s1yf2"
                                                                                          role="presentation"
                                                                                        >
                                                                                          <div
                                                                                            class="xtwfq29 style-c5koq"
                                                                                            id="style-c5koq"
                                                                                          ></div>
                                                                                        </div>
                                                                                        <div class="x1o1ewxj x3x9cwd x1e5q0jg x13rtm0m xlg9a9y x5yr21d x17qophe x6ikm8r x10wlt62 x47corl x10l6tqk x13vifvy xh8yej3"></div>
                                                                                      </div>
                                                                                    </div>
                                                                                    <div class="x78zum5 xdt5ytf x2lwn1j xeuugli">
                                                                                      <div class="x1rg5ohu x67bb7w">
                                                                                        <div class="x6s0dn4 x78zum5 x1q0g3np x2lwn1j xeuugli"></div>
                                                                                        <div class="xmi5d70 xw23nyj xo1l8bm x63nzvj xbsr9hj xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj xeuugli"></div>
                                                                                      </div>
                                                                                    </div>
                                                                                  </div>
                                                                                </div>
                                                                              </div>
                                                                            </div>
                                                                          </div>
                                                                        </div>
                                                                      </div>
                                                                      <div role="row">
                                                                        <div
                                                                          class="x1i10hfl x1qjc9v5 xjbqb8w xjqpnuy xa49m3k xqeqjp1 x2hbi6w x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk x78zum5 xdl72j9 xdt5ytf x2lah0s xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli xexx8yu x4uap5 x18d9i69 xkhd6sd x1n2onr6 x16tdsg8 x1hl2dhg xggy1nq x1ja2u2z x1t137rt"
                                                                          role="gridcell"
                                                                          tabindex="0"
                                                                        >
                                                                          <div class="x78zum5 x1iyjqo2">
                                                                            <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1lcm9me x1yr5g0i xrt01vj x10y3i5r x1y1aw1k xwib8y2 xurb0ha x1sxyh0 xp7jhwk x1n0m28w xo1l8bm xbsr9hj x1v911su">
                                                                              <div
                                                                                class="x78zum5 x1iyjqo2 x1qughib xeuugli"
                                                                                id="js_a1"
                                                                              >
                                                                                <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94">
                                                                                  <div class="x1rg5ohu x1n2onr6 x3oybdh">
                                                                                    <div class="x1n2onr6 x14atkfc">
                                                                                      <div class="x6s0dn4 x78zum5 x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x178xt8z xm81vs4 xso031l xy80clv xwebqov xvyu6v8 xrsgblv x10lij0i xzolkzo x12go9s9 x1rnf11y xprq8jg x1gzqxud xbsr9hj x9f619 xexx8yu x4uap5 x18d9i69 xkhd6sd xl56j7k xxk0z11 xvy4d1p">
                                                                                        <div class=""></div>
                                                                                        <input
                                                                                          aria-checked="false"
                                                                                          aria-disabled="false"
                                                                                          aria-labelledby="js_a1"
                                                                                          class="xjyslct x1ypdohk x5yr21d x17qophe xdj266r x11i5rnm xat24cr x1mh8g0r x1w3u9th x1t137rt x10l6tqk x13vifvy xh8yej3 x1vjfegm"
                                                                                          type="radio"
                                                                                          value="false"
                                                                                        />
                                                                                        <div class="x13dflua xnnyp6c x12w9bfk x78zum5 xg01cxk x1f85oc2 x6o7n8i">
                                                                                          <div class="xsmyaan x1kpxq89 xzolkzo x12go9s9 x1rnf11y xprq8jg xo1l8bm x140t73q x19bke7z"></div>
                                                                                        </div>
                                                                                      </div>
                                                                                      <div class="xwebqov xvyu6v8 xrsgblv x10lij0i xzolkzo x12go9s9 x1rnf11y xprq8jg x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x178xt8z xm81vs4 xso031l xy80clv x13dflua x6o7n8i xxziih7 x12w9bfk xg01cxk x47corl x10l6tqk x17qophe xds687c x13vifvy x1ey2m1c x6ikm8r x10wlt62 xnl74ce xmb4j5p xdx8kah xwmxa91 xmn8db3 x8lbu6m x2te4dl x1bs8fl3 xhhp2wi x14q35kh x1wa3ocq x1n7iyjn x1t0di37 x1tt7eqi xe25xm5 xsp6npd x1s928wv x1w3onc2 x1j6awrg x9obomg x1ryaxvv x1hvfe8t x1te75w5"></div>
                                                                                    </div>
                                                                                  </div>
                                                                                  <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 xeuugli x1iyjqo2 x19lwn94 xu0aao5">
                                                                                    <div class="x1lliihq x1n2onr6 x2lah0s x10w6t97 x1td3qas xzolkzo x12go9s9 x1rnf11y xprq8jg">
                                                                                      <div
                                                                                        class="x10l6tqk x6ikm8r x10wlt62 x13vifvy x17qophe xh8yej3 x5yr21d x1o1ewxj x3x9cwd x1e5q0jg x13rtm0m xosibs0 xt24udd xw53kvy x1dka6rp x47corl x10cdfl8"
                                                                                        role="presentation"
                                                                                      >
                                                                                        <div
                                                                                          class="x3nfvp2 x120ccyz x4s1yf2"
                                                                                          role="presentation"
                                                                                        >
                                                                                          <div
                                                                                            class="xtwfq29 style-w7sUo"
                                                                                            id="style-w7sUo"
                                                                                          ></div>
                                                                                        </div>
                                                                                        <div class="x1o1ewxj x3x9cwd x1e5q0jg x13rtm0m xlg9a9y x5yr21d x17qophe x6ikm8r x10wlt62 x47corl x10l6tqk x13vifvy xh8yej3"></div>
                                                                                      </div>
                                                                                    </div>
                                                                                    <div class="x78zum5 xdt5ytf x2lwn1j xeuugli">
                                                                                      <div class="x1rg5ohu x67bb7w">
                                                                                        <div class="x6s0dn4 x78zum5 x1q0g3np x2lwn1j xeuugli">
                                                                                          <div
                                                                                            aria-level="4"
                                                                                            class="x1xqt7ti xsuwoey x1xlr1w8 x63nzvj xbsr9hj x1yc453h xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj xeuugli"
                                                                                            role="heading"
                                                                                          >
                                                                                            1789195501571701
                                                                                          </div>
                                                                                        </div>
                                                                                        <div class="xmi5d70 xw23nyj xo1l8bm x63nzvj xbsr9hj xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj xeuugli">
                                                                                          Ad
                                                                                          account
                                                                                          ID:
                                                                                          1789195501571701
                                                                                        </div>
                                                                                      </div>
                                                                                    </div>
                                                                                  </div>
                                                                                </div>
                                                                              </div>
                                                                            </div>
                                                                          </div>
                                                                        </div>
                                                                      </div>
                                                                    </div>
                                                                  </div>
                                                                </div>
                                                                <div
                                                                  class="x14nfmen x1s85apg x5yr21d xds687c xg01cxk x10l6tqk x13vifvy x1wsgiic x19991ni xwji4o3 x1kky2od x1sd63oq style-lMqPS"
                                                                  data-visualcompletion="ignore"
                                                                  data-thumb="1"
                                                                  id="style-lMqPS"
                                                                ></div>
                                                                <div
                                                                  class="x9f619 x1s85apg xds687c xg01cxk xexx8yu x18d9i69 x1e558r4 x150jy0e x47corl x10l6tqk x13vifvy x1n4smgl x1d8287x x19991ni xwji4o3 x1kky2od style-7IoYr"
                                                                  data-visualcompletion="ignore"
                                                                  data-thumb="1"
                                                                  id="style-7IoYr"
                                                                >
                                                                  <div class="x1hwfnsy x1lcm9me x1yr5g0i xrt01vj x10y3i5r x5yr21d xh8yej3"></div>
                                                                </div>
                                                              </div>
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    )}
                                                  </div>
                                                  <div class="x1cy8zhl x78zum5 x2lwn1j xeuugli snipcss0-3-3-16"></div>
                                                </div>
                                              </div>
                                              <div class="x1iyjqo2 xs83m0k xdl72j9 snipcss0-1-1-17"></div>
                                              <div class="_8fgf snipcss0-1-1-18">
                                                <div
                                                  onClick={handleUpdateJustNow}
                                                  class="x6s0dn4 x78zum5 x1nhvcw1 x19lwn94 snipcss0-2-18-19"
                                                  data-auto-logging-component-type="GeoToolBar"
                                                >
                                                  <div class="x19991ni x16fj20d x1hc1fzr snipcss0-3-19-20">
                                                    <span class="xmi5d70 x1fvot60 xo1l8bm xxio538 xbsr9hj xq9mrsl x1h4wwuj xeuugli snipcss0-4-20-21">
                                                      {showupdatejustnow
                                                        ? "Updated just now"
                                                        : ""}
                                                    </span>
                                                  </div>
                                                  <div
                                                    aria-busy="false"
                                                    class="x1i10hfl xjqpnuy xa49m3k xqeqjp1 x2hbi6w x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli x16tdsg8 xggy1nq x1ja2u2z x6s0dn4 x1ejq31n xd10rxx x1sy0etr x17r0tee x3nfvp2 xdl72j9 x1q0g3np x2lah0s x193iq5w x1n2onr6 x1hl2dhg x87ps6o xxymvpz xlh3980 xvmahel x1lku1pv x1g40iwv x1lcm9me x1yr5g0i xrt01vj x10y3i5r x1ob88yx xaatb59 x1qgsegg xo1l8bm xbsr9hj x1v911su x1y1aw1k xwib8y2 x1ye3gou xn6708d snipcss-qo5or"
                                                    role="button"
                                                    tabindex="0"
                                                    id="js_y2"
                                                    data-auto-logging-id="f8e2d33ad475"
                                                  >
                                                    <span class="xmi5d70 x1fvot60 xxio538 x1heor9g xq9mrsl x1h4wwuj x1pd3egz xeuugli xh8yej3">
                                                      <div class="x78zum5">
                                                        <div
                                                          class="x1qvwoe0 xjm9jq1 x1y332i5 xcwd3tp x1jyxor1 x39eecv x6ikm8r x10wlt62 x10l6tqk xuxw1ft x1i1rx1s"
                                                          data-sscoverage-ignore="true"
                                                        >
                                                          Refresh Table Data
                                                        </div>
                                                        <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1hc1fzr x13dflua x6o7n8i xxziih7 x12w9bfk xl56j7k xh8yej3">
                                                          <div
                                                            class="x3nfvp2 x120ccyz x1heor9g x2lah0s x1c4vz4f"
                                                            role="presentation"
                                                          >
                                                            <div
                                                              class="xtwfq29 style-e4qAG"
                                                              id="style-e4qAG"
                                                            ></div>
                                                          </div>
                                                          ​
                                                        </div>
                                                      </div>
                                                    </span>
                                                  </div>
                                                </div>
                                                <div
                                                  class="x6s0dn4 x78zum5 x1nhvcw1 x19lwn94 snipcss0-2-18-31"
                                                  data-auto-logging-component-type="GeoToolBar"
                                                >
                                                  <div class="_4g7v snipcss0-3-31-32">
                                                    <div
                                                      class="x6s0dn4 x78zum5 x1nhvcw1 x19lwn94 snipcss0-4-32-33"
                                                      data-auto-logging-component-type="GeoToolBar"
                                                    >
                                                      <div class="_4g7x snipcss0-5-33-34">
                                                        <div
                                                          class="x6s0dn4 x78zum5 x1nhvcw1 x19lwn94 snipcss0-6-34-35"
                                                          data-auto-logging-component-type="GeoToolBar"
                                                        >
                                                          <div
                                                            class="x3nfvp2 x193iq5w xxymvpz snipcss0-7-35-36"
                                                            role="none"
                                                          >
                                                            <div
                                                              aria-busy="false"
                                                              aria-disabled="true"
                                                              class="x1i10hfl xjqpnuy xa49m3k xqeqjp1 x2hbi6w x972fbf xcfux6l x1qhh985 xm0m39n x9f619 xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli x16tdsg8 xggy1nq x1ja2u2z x1h6gzvc x6s0dn4 x1ejq31n xd10rxx x1sy0etr x17r0tee x3nfvp2 xdl72j9 x1q0g3np x2lah0s x193iq5w x1n2onr6 x1hl2dhg x87ps6o xxymvpz xlh3980 xvmahel x1lku1pv x1g40iwv x1lcm9me x1yr5g0i xrt01vj x10y3i5r xtpvj6k xaatb59 x1qgsegg xo1l8bm x1v911su xis6omg x1y1aw1k xwib8y2 x1swvt13 x1pi30zi snipcss0-8-36-37"
                                                              role="button"
                                                              tabindex="-1"
                                                            >
                                                              <span class="xmi5d70 x1fvot60 xxio538 x1heor9g xq9mrsl x1h4wwuj x1pd3egz xeuugli xh8yej3 snipcss0-9-37-38">
                                                                <div class="x78zum5 snipcss0-10-38-39">
                                                                  <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1hc1fzr x13dflua x6o7n8i xxziih7 x12w9bfk xl56j7k xh8yej3 snipcss0-11-39-40">
                                                                    <div class="x1xqt7ti x1fvot60 xk50ysn xxio538 x1heor9g xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj xeuugli snipcss0-12-40-41">
                                                                      Discard
                                                                      Drafts
                                                                    </div>
                                                                  </div>
                                                                </div>
                                                              </span>
                                                            </div>
                                                          </div>
                                                          <span
                                                            class="snipcss0-7-35-42"
                                                            data-tracked="true"
                                                            data-clickable="1"
                                                          >
                                                            <div
                                                              style={{
                                                                backgroundColor:
                                                                  "#0a77c1",
                                                                color: "white",
                                                                borderRadius:
                                                                  "4px",
                                                              }}
                                                              class="x3nfvp2 x193iq5w xxymvpz snipcss0-8-42-43"
                                                              role="none"
                                                            >
                                                              <div
                                                                aria-busy="false"
                                                                aria-disabled="true"
                                                                class="x1i10hfl xjqpnuy xa49m3k xqeqjp1 x2hbi6w x972fbf xcfux6l x1qhh985 xm0m39n x9f619 xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli x16tdsg8 xggy1nq x1ja2u2z x1h6gzvc x6s0dn4 x1ejq31n xd10rxx x1sy0etr x17r0tee x3nfvp2 xdl72j9 x1q0g3np x2lah0s x193iq5w x1n2onr6 x1hl2dhg x87ps6o xxymvpz xlh3980 xvmahel x1lku1pv x1g40iwv x1lcm9me x1yr5g0i xrt01vj x10y3i5r xtpvj6k xaatb59 x1qgsegg xo1l8bm x1v911su xis6omg x1y1aw1k xwib8y2 x1swvt13 x1pi30zi snipcss0-9-43-44"
                                                                role="button"
                                                                tabindex="-1"
                                                              >
                                                                <span class="xmi5d70 x1fvot60 xxio538 x1heor9g xq9mrsl x1h4wwuj x1pd3egz xeuugli xh8yej3 snipcss0-10-44-45">
                                                                  <div class="x78zum5 snipcss0-11-45-46">
                                                                    <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1hc1fzr x13dflua x6o7n8i xxziih7 x12w9bfk xl56j7k xh8yej3 snipcss0-12-46-47">
                                                                      <div
                                                                        style={{
                                                                          color:
                                                                            "white",
                                                                        }}
                                                                        class="x1xqt7ti x1fvot60 xk50ysn xxio538 x1heor9g xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj xeuugli snipcss0-13-47-48"
                                                                      >
                                                                        Review
                                                                        and
                                                                        publish
                                                                      </div>
                                                                    </div>
                                                                  </div>
                                                                </span>
                                                              </div>
                                                            </div>
                                                          </span>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                                <div
                                                  style={{
                                                    marginRight: "20px",
                                                  }}
                                                  class="_4540 snipcss0-2-18-49"
                                                >
                                                  <div
                                                    aria-busy="false"
                                                    aria-controls="js_73"
                                                    class="x1i10hfl xjqpnuy xa49m3k xqeqjp1 x2hbi6w x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli x16tdsg8 xggy1nq x1ja2u2z x6s0dn4 x1ejq31n xd10rxx x1sy0etr x17r0tee x3nfvp2 xdl72j9 x1q0g3np x2lah0s x193iq5w x1n2onr6 x1hl2dhg x87ps6o xxymvpz xlh3980 xvmahel x1lku1pv x1g40iwv x1lcm9me x1yr5g0i xrt01vj x10y3i5r x1ob88yx xaatb59 x1qgsegg xo1l8bm xbsr9hj x1v911su x1y1aw1k xwib8y2 x1ye3gou xn6708d snipcss0-3-49-50"
                                                    role="button"
                                                    tabindex="0"
                                                  >
                                                    <span class="xmi5d70 x1fvot60 xxio538 x1heor9g xq9mrsl x1h4wwuj x1pd3egz xeuugli xh8yej3 snipcss0-4-50-51">
                                                      <div class="x78zum5 snipcss0-5-51-52">
                                                        <div
                                                          class="x1qvwoe0 xjm9jq1 x1y332i5 xcwd3tp x1jyxor1 x39eecv x6ikm8r x10wlt62 x10l6tqk xuxw1ft x1i1rx1s snipcss0-6-52-53"
                                                          data-sscoverage-ignore="true"
                                                        >
                                                          Menu
                                                        </div>
                                                        <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1hc1fzr x13dflua x6o7n8i xxziih7 x12w9bfk xl56j7k xh8yej3 snipcss0-6-52-54">
                                                          <div
                                                            class="x3nfvp2 x120ccyz x1heor9g x2lah0s x1c4vz4f snipcss0-7-54-55"
                                                            role="presentation"
                                                          >
                                                            <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1hc1fzr x13dflua x6o7n8i xxziih7 x12w9bfk xl56j7k xh8yej3">
                                                              <div
                                                                class="x3nfvp2 x120ccyz x1heor9g x2lah0s x1c4vz4f"
                                                                role="presentation"
                                                              >
                                                                <div
                                                                  class="xtwfq29 style-gkYX5"
                                                                  id="style-gkYX5"
                                                                ></div>
                                                              </div>
                                                              ​
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
                                          <span></span>
                                          <span></span>
                                        </div>
                                      </div>
                                    </div>
                                    <div
                                      class="_49wu style-cyQ1t"
                                      id="style-cyQ1t"
                                    >
                                      <div></div>
                                      <div class="_4u-c">
                                        <div class="xqtp20y x17qophe xib59rt xkrivgy xat24cr x1gryazu x1ap80js xexx8yu x6x52a7 x18d9i69 xxpdul3 x10l6tqk xds687c xhtitgo">
                                          <div class="_5il"></div>
                                        </div>
                                        <div class="_1saj"></div>
                                      </div>
                                      <span
                                        data-surface-wrapper="1"
                                        data-surface="/am/editor_drawer"
                                        data-auto-logging-id="f2e71fc45fb23f"
                                        id="style-7dZ4m"
                                        class="style-7dZ4m"
                                      >
                                        <div
                                          class="_2k0c _8_1l style-rd1rQ"
                                          id="style-rd1rQ"
                                        >
                                          <div class="x1a0uwpx x78zum5 x1ob5r32 xdt5ytf x5yr21d x1jj3tg0 x6ikm8r x10wlt62 x4uap5 x18d9i69 xkhd6sd x1iorvi4 x10l6tqk x187nhsf x1vjfegm x5jzwa4 snipcss-KhfKO">
                                            <div id="INSIGHTS_DRAWER_tip">
                                              <span>
                                                <div
                                                  class="x1rg5ohu x67bb7w"
                                                  id="js_8v"
                                                >
                                                  <span
                                                    class=" "
                                                    data-tracked="true"
                                                    data-interactable="|click|"
                                                  >
                                                    <div
                                                      aria-disabled="false"
                                                      aria-label="View charts (Ctrl+Y)"
                                                      class="x972fbf xcfux6l x1qhh985 xm0m39n x1ejq31n xd10rxx x1sy0etr x17r0tee x15wryii x14yi0bh x2kcyu4 xmfk5bu x9f619 x1ypdohk xc9qbxq x1a2a7pz x889kno x1iji9kk x1a8lsjc x1sln4lm x1n2onr6 x14qfxbe x1gslohp x12nagc xsgj6o6 xw3qccf x1lcm9me x1yr5g0i xrt01vj x10y3i5r xjbqb8w"
                                                      data-pitloot-persistonclick="false"
                                                      id="insights_tray_button"
                                                      role="button"
                                                      tabindex="0"
                                                    >
                                                      <div class="xbsr9hj">
                                                        <div
                                                          class="x3nfvp2 x120ccyz x140t73q"
                                                          role="presentation"
                                                        >
                                                          <div
                                                            class="xtwfq29 style-dihaS"
                                                            id="style-dihaS"
                                                          ></div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </span>
                                                </div>
                                              </span>
                                            </div>
                                            <div id="EDITOR_DRAWER_tip">
                                              <div class="x1rg5ohu x67bb7w">
                                                <span
                                                  class=" "
                                                  data-tracked="true"
                                                  data-interactable="|click|"
                                                >
                                                  <div
                                                    aria-disabled="true"
                                                    aria-label="Select at least one campaign to edit."
                                                    class="x972fbf xcfux6l x1qhh985 xm0m39n x1ejq31n xd10rxx x1sy0etr x17r0tee x15wryii x14yi0bh x2kcyu4 xmfk5bu x9f619 x1ypdohk xc9qbxq x1a2a7pz x889kno x1iji9kk x1a8lsjc x1sln4lm x1n2onr6 x14qfxbe x1gslohp x12nagc xsgj6o6 xw3qccf x1lcm9me x1yr5g0i xrt01vj x10y3i5r xjbqb8w"
                                                    data-pitloot-persistonclick="true"
                                                    role="button"
                                                    tabindex="0"
                                                  >
                                                    <div class="xbsr9hj">
                                                      <div
                                                        class="x3nfvp2 x120ccyz xto31z9"
                                                        role="presentation"
                                                      >
                                                        <div
                                                          class="xtwfq29 style-msQB8"
                                                          id="style-msQB8"
                                                        ></div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </span>
                                              </div>
                                            </div>
                                            <div id="ACTIVITY_HISTORY_DRAWER_tip">
                                              <div
                                                class="x1rg5ohu x67bb7w"
                                                id="js_c8"
                                              >
                                                <span
                                                  class=" "
                                                  data-tracked="true"
                                                  data-interactable="|click|"
                                                >
                                                  <div
                                                    aria-disabled="true"
                                                    aria-label="Select at least one campaign to see a history of changes."
                                                    class="x972fbf xcfux6l x1qhh985 xm0m39n x1ejq31n xd10rxx x1sy0etr x17r0tee x15wryii x14yi0bh x2kcyu4 xmfk5bu x9f619 x1ypdohk xc9qbxq x1a2a7pz x889kno x1iji9kk x1a8lsjc x1sln4lm x1n2onr6 x14qfxbe x1gslohp x12nagc xsgj6o6 xw3qccf x1lcm9me x1yr5g0i xrt01vj x10y3i5r xjbqb8w"
                                                    data-pitloot-persistonclick="true"
                                                    role="button"
                                                    tabindex="0"
                                                  >
                                                    <div class="xbsr9hj">
                                                      <div
                                                        class="x3nfvp2 x120ccyz xto31z9"
                                                        role="presentation"
                                                      >
                                                        <div
                                                          class="xtwfq29 style-EXAvT"
                                                          id="style-EXAvT"
                                                        ></div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </span>
                                              </div>
                                            </div>
                                            <div class="x10l6tqk xwa60dl"></div>
                                          </div>
                                        </div>
                                      </span>
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
                                          <span
                                            data-surface-wrapper="1"
                                            data-surface="/am/table/search_and_filter"
                                            data-auto-logging-id="f3821f470ed9b98"
                                            id="style-Y2t4j"
                                            class="style-Y2t4j"
                                          >
                                            <div>
                                              <div class="x1i64zmx x1emribx xwib8y2">
                                                <div class="_4u-c x78zum5 x1qughib">
                                                  <div class="x78zum5 x1qughib xh8yej3">
                                                    <div class="xgyuaek x1ed109x">
                                                      <div
                                                        class="x1gzqxud x1lcm9me x1yr5g0i xrt01vj x10y3i5r xhgxa4x xy5ysw6 x1qkj6lk xn3walq xnvurfn xv1ta3e x1opv7go x1dtnpoi xibdhds xtnng9g xhvrwov x13k1m86 xwx4but x1cpjm7i xszcg87 x1hmns74 xkk1bqk x14d4353 xsxiz9q x1rmj1tg xchklzq x9f619 xc8icb0 x1n2onr6 x1pvq41x xhhp2wi x14q35kh x1wa3ocq x1n7iyjn x1s928wv x1wsn0xg x1j6awrg x162n7g1 x1m1drc7 x4eaejv xi4xitw x5yr21d xh8yej3"
                                                        data-auto-logging-component-type="GeoCard"
                                                      >
                                                        <div class="x78zum5 xdt5ytf x5yr21d xedcshv x1t2pt76 xh8yej3">
                                                          <div class="x9f619 x78zum5 x1iyjqo2 x5yr21d x2lwn1j x1n2onr6 xh8yej3">
                                                            <div class="xw2csxc x1odjw0f xh8yej3 x18d9i69">
                                                              <div class="xjm9jq1 xg01cxk x47corl xh8yej3 x1jyxor1"></div>
                                                              <div class="x78zum5 x1nhvcw1 x6s0dn4 x1iyjqo2 x1ye3gou xc9qbxq">
                                                                <div class="x78zum5 x6s0dn4 x5yr21d">
                                                                  <div class="x1kky2od x6s0dn4 x78zum5 x5yr21d">
                                                                    <div class="x6s0dn4 x3nfvp2 x1q0g3np xozqiw3 x2lwn1j xeuugli x1c4vz4f x19lwn94 xmi5d70 x1fvot60 xo1l8bm xxio538 xbsr9hj xq9mrsl xqcrz7y x2lah0s">
                                                                      ​
                                                                      <div
                                                                        style={{
                                                                          marginTop:
                                                                            "10px",
                                                                        }}
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
                                                                  {(displayID ||
                                                                    localStorage.getItem(
                                                                      "currentPageID"
                                                                    )) && (
                                                                    <div>
                                                                      <div class="_8dtc snipcss-nomQU">
                                                                        <div class="_765u">
                                                                          <button
                                                                            aria-label="Edit Filter"
                                                                            class="x6s0dn4 x1jzvqpb x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x78zum5 x1fgtraw x1a2a7pz xexx8yu x1sxyh0 x18d9i69 xurb0ha x1pb7wa4 x1ceikm xycp24c xhk9q7s x13lgxp2 x5pf9jr x1o6z2jb x1ypdohk x19zqmas"
                                                                            data-auto-logging-id="ffebaadd"
                                                                          >
                                                                            <div>
                                                                              <span class="xmi5d70 x1fvot60 xo1l8bm xxio538 xbsr9hj xuxw1ft x1h4wwuj xeuugli xw3qccf">
                                                                                Page
                                                                                ID
                                                                              </span>
                                                                            </div>
                                                                            <div>
                                                                              <span class="xmi5d70 x1fvot60 xo1l8bm xxio538 xbsr9hj xuxw1ft x1h4wwuj xeuugli xw3qccf">
                                                                                =
                                                                              </span>
                                                                            </div>
                                                                            <div
                                                                              aria-level="4"
                                                                              class="x1xqt7ti xsuwoey x1xlr1w8 x63nzvj xbsr9hj x1yc453h xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj xlpf1d2"
                                                                              role="heading"
                                                                            >
                                                                              {currentPageID ||
                                                                                localStorage.getItem(
                                                                                  "currentPageID"
                                                                                )}
                                                                            </div>
                                                                          </button>
                                                                          <button
                                                                            aria-label="Remove Filter"
                                                                            class="x1jzvqpb x972fbf xcfux6l x1qhh985 xm0m39n x1ypdohk x1fgtraw xdj266r x11i5rnm xat24cr x1mh8g0r x1a2a7pz x1iorvi4 xsyo7zv xjkvuk6 x16hj40l x1pb7wa4 x1ceikm xycp24c x168nmei x1otrzb0 x1i1ezom xo71vjh"
                                                                          >
                                                                            <div
                                                                              onClick={
                                                                                handleClickCross
                                                                              }
                                                                              class="xlup9mm x1kky2od"
                                                                            >
                                                                              <i
                                                                                alt=""
                                                                                data-visualcompletion="css-img"
                                                                                class="img style-OZnyR"
                                                                                id="style-OZnyR"
                                                                              ></i>
                                                                            </div>
                                                                          </button>
                                                                        </div>
                                                                      </div>
                                                                    </div>
                                                                  )}
                                                                  {/* Camaping name Display here  */}
                                                                  {(currentfiltercampaigshow ||
                                                                    localStorage.getItem(
                                                                      "filteredCampaignName"
                                                                    )) && (
                                                                    <div>
                                                                      <div class="_765u snipcss-ehjKp">
                                                                        <button
                                                                          aria-label="Edit Filter"
                                                                          class="x6s0dn4 x1jzvqpb x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x78zum5 x1fgtraw x12ushyc x1a2a7pz xexx8yu x1sxyh0 x18d9i69 xurb0ha x1pb7wa4 x1ceikm xycp24c xhk9q7s x13lgxp2 x5pf9jr x1o6z2jb x1ypdohk"
                                                                        >
                                                                          <div class="xlyipyv x6ikm8r x10wlt62">
                                                                            <span class="xmi5d70 x1fvot60 xo1l8bm xxio538 xbsr9hj xuxw1ft x1h4wwuj xeuugli xw3qccf">
                                                                              Campaign
                                                                              Name
                                                                            </span>
                                                                          </div>
                                                                          <div>
                                                                            <span class="xmi5d70 x1fvot60 xo1l8bm xxio538 xbsr9hj xuxw1ft x1h4wwuj xeuugli xw3qccf">
                                                                              contains
                                                                            </span>
                                                                          </div>
                                                                          <div
                                                                            style={{
                                                                              marginTop:
                                                                                "3px",
                                                                            }}
                                                                            aria-level="4"
                                                                            class="x1xqt7ti xsuwoey x1xlr1w8 x63nzvj xbsr9hj x1yc453h xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj xlpf1d2"
                                                                            role="heading"
                                                                          >
                                                                            {filerwithcmapaignname ||
                                                                              localStorage.getItem(
                                                                                "filteredCampaignName"
                                                                              )}
                                                                          </div>
                                                                        </button>
                                                                        <button
                                                                          onClick={
                                                                            RemoveCapaignname
                                                                          }
                                                                          aria-label="Remove Filter"
                                                                          class="x1jzvqpb x972fbf xcfux6l x1qhh985 xm0m39n x1ypdohk x1fgtraw xdj266r x11i5rnm xat24cr x1mh8g0r x1a2a7pz x1iorvi4 xsyo7zv xjkvuk6 x16hj40l x1pb7wa4 x1ceikm xycp24c x168nmei x1otrzb0 x1i1ezom xo71vjh"
                                                                        >
                                                                          <div class="xlup9mm x1kky2od">
                                                                            <i
                                                                              alt=""
                                                                              data-visualcompletion="css-img"
                                                                              class="img style-JzPRp"
                                                                              id="style-JzPRp"
                                                                            ></i>
                                                                          </div>
                                                                        </button>
                                                                      </div>
                                                                    </div>
                                                                  )}
                                                                  <div class="x1sliqq">
                                                                    <div
                                                                      onClick={() =>
                                                                        setshowsearchfilterbar(
                                                                          (
                                                                            prev
                                                                          ) =>
                                                                            !prev
                                                                        )
                                                                      }
                                                                      class="x6s0dn4 x78zum5"
                                                                    >
                                                                      <input
                                                                        value={
                                                                          searchQuery
                                                                        }
                                                                        onChange={
                                                                          handleSearchChange
                                                                        }
                                                                        placeholder="Search and Filter"
                                                                        style={{
                                                                          minWidth:
                                                                            "270px",
                                                                          border:
                                                                            "none",
                                                                          height:
                                                                            "26px",
                                                                          borderRadius:
                                                                            "10px",
                                                                          outline:
                                                                            "none",
                                                                          width:
                                                                            "100%",
                                                                          paddingLeft:
                                                                            "5px",
                                                                        }}
                                                                        type="text"
                                                                        onFocus={(
                                                                          e
                                                                        ) =>
                                                                          (e.target.style.border =
                                                                            "2px solid #0878c1")
                                                                        }
                                                                        onBlur={(
                                                                          e
                                                                        ) =>
                                                                          (e.target.style.border =
                                                                            "2px solid #0878c1")
                                                                        }
                                                                      />
                                                                    </div>
                                                                  </div>
                                                                </div>
                                                              </div>
                                                              <div class="xjm9jq1 xg01cxk x47corl xh8yej3 x1y332i5"></div>
                                                            </div>
                                                            <div class="x10wjd1d x47corl x10l6tqk x19991ni x13dflua xwji4o3 xh8yej3 xg01cxk x67dex8 x13vifvy"></div>
                                                            <div class="x10wjd1d x47corl x10l6tqk x19991ni x13dflua xwji4o3 xh8yej3 xg01cxk x1ta9b4f x1ey2m1c"></div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div
                                                    style={{
                                                      position: "relative",
                                                      marginRight: "20px",
                                                    }}
                                                    class="xsgj6o6"
                                                  >
                                                    <div>
                                                      <span
                                                        class=" "
                                                        data-tracked="true"
                                                        data-clickable="1"
                                                      >
                                                        <span class="_5ldw">
                                                          <span>
                                                            <button
                                                              aria-haspopup="true"
                                                              type="button"
                                                              aria-disabled="false"
                                                              class="_271k _271m _1qjd _ai7j _ai7l _ai7m style-z8QcL"
                                                              id="style-z8QcL"
                                                            >
                                                              <div
                                                                onClick={() =>
                                                                  setShowCalender(
                                                                    (prev) =>
                                                                      !prev
                                                                  )
                                                                }
                                                                class="_43rl"
                                                              >
                                                                <div
                                                                  data-hover="tooltip"
                                                                  data-tooltip-display="overflow"
                                                                  class="_43rm"
                                                                >
                                                                  <div class="_1uz0">
                                                                    <div>
                                                                      {" "}
                                                                      <div
                                                                        style={{
                                                                          marginRight:
                                                                            "8px",
                                                                          marginTop:
                                                                            "5px",
                                                                        }}
                                                                        class="x3nfvp2 x120ccyz x1heor9g x2lah0s x1c4vz4f"
                                                                        role="presentation"
                                                                      >
                                                                        <div
                                                                          class="xtwfq29 style-VkEAs"
                                                                          id="style-VkEAs"
                                                                        ></div>
                                                                      </div>
                                                                      {formatDate(
                                                                        startDate
                                                                      )}{" "}
                                                                      -{" "}
                                                                      {formatDate(
                                                                        endDate
                                                                      )}
                                                                      &nbsp;
                                                                    </div>
                                                                  </div>
                                                                </div>
                                                                <div
                                                                  class="x3nfvp2 x120ccyz x4s1yf2"
                                                                  role="presentation"
                                                                >
                                                                  <div
                                                                    class="xtwfq29 style-NEN4Q"
                                                                    id="style-NEN4Q"
                                                                  ></div>
                                                                </div>
                                                              </div>
                                                            </button>
                                                          </span>
                                                        </span>
                                                      </span>
                                                    </div>
                                                    {showcalender && (
                                                      <div
                                                        style={{
                                                          position: "absolute",
                                                          top: "48px",
                                                          right: "0",
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
                                                            ].map((option) => (
                                                              <div
                                                                key={option}
                                                                className="latestreporting-option"
                                                              >
                                                                <input
                                                                  type="radio"
                                                                  id={option}
                                                                  name="date-range"
                                                                  value={option}
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
                                                                  {option}
                                                                </label>
                                                              </div>
                                                            ))}
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
                                                                    (day) => (
                                                                      <div
                                                                        key={
                                                                          day
                                                                        }
                                                                      >
                                                                        {day}
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
                                                                    (day) => (
                                                                      <div
                                                                        key={
                                                                          day
                                                                        }
                                                                      >
                                                                        {day}
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
                                                                onChange={(e) =>
                                                                  handleOptionChange(
                                                                    e.target
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
                                                                  (option) => (
                                                                    <option
                                                                      key={
                                                                        option
                                                                      }
                                                                      value={
                                                                        option
                                                                      }
                                                                    >
                                                                      {option}
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
                                                                display: "flex",
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
                                                                  color: "gray",
                                                                  textAlign:
                                                                    "left",
                                                                }}
                                                              >
                                                                Dates are shown
                                                                in Karachi Time
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
                                                                    handleupdatebutton
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
                                                    )}{" "}
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </span>
                                          {showsearchfilterbar && (
                                            <div
                                              className="outerserachandfilercontar"
                                              style={{
                                                position: "absolute",
                                                top: "88px",
                                                zIndex: "1500",
                                                left: "55px",
                                                backgroundColor: "white",
                                              }}
                                            >
                                              <SearchAndFilter
                                                searchQuery={searchQuery}
                                                setSearchQuery={setSearchQuery}
                                                setFilerThatCampaignName={
                                                  setFilerThatCampaignName
                                                }
                                                setLoading={setLoading}
                                                filerwithcmapaignname={
                                                  filerwithcmapaignname
                                                }
                                                campaings={campaings}
                                                setCampaigns={setCampaigns}
                                                showSearchSuggestions={
                                                  showSearchSuggestions
                                                }
                                                setshowsearchfilterbar={
                                                  setshowsearchfilterbar
                                                }
                                                setShowPageIDBar={
                                                  setShowPageIDBar
                                                }
                                                setcurrentfiltercampaingShow={
                                                  setcurrentfiltercampaingShow
                                                }
                                              />
                                            </div>
                                          )}
                                          {showPageIDBar && (
                                            <div
                                              className=""
                                              style={{
                                                position: "absolute",
                                                top: "100px",
                                                zIndex: "3000",
                                                left: "55px",
                                                backgroundColor: "",
                                              }}
                                            >
                                              <PageID
                                                currentPageID={currentPageID}
                                                setDisplayID={setDisplayID}
                                                setCurrentPageID={
                                                  setCurrentPageID
                                                }
                                                setShowPageIDBar={
                                                  setShowPageIDBar
                                                }
                                                campaigns={campaings}
                                                setCampaigns={setCampaigns}
                                                setLoading={setLoading}
                                              />
                                            </div>
                                          )}
                                          <div class="_3-8r" id="peTabs">
                                            <div class="x78zum5">
                                              <div class="x1iyjqo2 x2lah0s xdl72j9">
                                                <ul
                                                  class="x78zum5 xuk3077 x1rdy4ex _43o4 _4470"
                                                  role="tablist"
                                                >
                                                  <span
                                                    data-surface-wrapper="1"
                                                    data-surface="/am/table/table_tab:campaign"
                                                    data-auto-logging-id="f21ee556f7cacf8"
                                                    id="style-o9ibw"
                                                    class="style-o9ibw"
                                                  >
                                                    <li
                                                      class="x1iyjqo2 x1r8uery x6ikm8r x10wlt62 x1vjfegm x1jyxor1 _45hc _1hqh"
                                                      role="presentation"
                                                    >
                                                      <a
                                                        aria-haspopup="false"
                                                        role="tab"
                                                        tabindex="-1"
                                                        class="_3m1v _468f _8z64"
                                                        aria-selected="true"
                                                      >
                                                        <span
                                                          class=" "
                                                          data-tracked="true"
                                                          data-clickable="1"
                                                        >
                                                          <div
                                                            onClick={() =>
                                                              handleClickRun(
                                                                "Campaings"
                                                              )
                                                            }
                                                            class={`x78zum5 x1gslohp xw3qccf xat24cr xsgj6o6 xgqcy7u x1lq5wgf x1f92s9n xn3w4p2 x1xp15n3 x1q0q8m5 xso031l ${
                                                              currentfolder ===
                                                              "Campaings"
                                                                ? "x2izyaf"
                                                                : ""
                                                            } `}
                                                            id="CAMPAIGN_GROUP_AdsClassicTab"
                                                          >
                                                            <div class="x6ikm8r x10wlt62 x1iyjqo2 x78zum5 x6s0dn4 x16n37ib xq8finb">
                                                              <div class="x6ikm8r x10wlt62 x6s0dn4 x78zum5 x1iyjqo2">
                                                                <div class="x1rg5ohu x67bb7w">
                                                                  <div class="x6ikm8r x10wlt62 x6s0dn4 x78zum5">
                                                                    {currentfolder ===
                                                                    "Campaings" ? (
                                                                      <svg
                                                                        viewBox="0 0 48 48"
                                                                        width="1em"
                                                                        height="1em"
                                                                        fill="currentColor"
                                                                        class="x1qsmy5i xxk0z11 xvy4d1p"
                                                                      >
                                                                        <path d="M40.5 10H23.74c-1.08 0-2.03-.69-2.37-1.71s-.18-.53-.18-.53A5.496 5.496 0 0 0 15.97 4H6.5C4.02 4 2 6.02 2 8.5v30C2 41.53 4.47 44 7.5 44h33c3.03 0 5.5-2.47 5.5-5.5v-23c0-3.03-2.47-5.5-5.5-5.5zm-9.83 23.73c-.2.18-.46.27-.72.27-.17 0-.35-.04-.51-.13L24 30.98l-5.44 2.89c-.4.21-.89.15-1.23-.14a.98.98 0 0 1-.23-1.16l5.95-12c.17-.35.54-.57.95-.57s.77.22.95.57l5.95 12c.19.39.1.86-.23 1.16z"></path>
                                                                      </svg>
                                                                    ) : (
                                                                      <svg
                                                                        viewBox="0 0 48 48"
                                                                        width="1em"
                                                                        height="1em"
                                                                        fill="currentColor"
                                                                        class="x4s1yf2 x1qx5ct2 xw4jnvo snipcss-MI9sc"
                                                                      >
                                                                        <path
                                                                          d="m19.95 8.76-.18-.53a4 4 0 0 0-3.79-2.74H6.5c-1.66 0-3 1.34-3 3v30c0 2.21 1.79 4 4 4h33c2.21 0 4-1.79 4-4V15.5c0-2.21-1.79-4-4-4H23.74c-1.72 0-3.25-1.1-3.79-2.74z"
                                                                          stroke="currentColor"
                                                                          stroke-linecap="round"
                                                                          stroke-linejoin="round"
                                                                          stroke-width="3px"
                                                                          fill="none"
                                                                        ></path>
                                                                        <path d="m30.9 32.57-5.95-12c-.17-.35-.54-.57-.95-.57s-.77.22-.95.57l-5.95 12c-.19.39-.1.86.23 1.16.33.3.83.36 1.23.14L24 30.98l5.44 2.89a1.075 1.075 0 0 0 1.23-.14c.33-.3.42-.76.23-1.16z"></path>
                                                                      </svg>
                                                                    )}
                                                                    <div
                                                                      class="x6ikm8r"
                                                                      data-sscoverage-ignore="true"
                                                                    >
                                                                      <div
                                                                        style={
                                                                          currentfolder ===
                                                                          "Campaings"
                                                                            ? {
                                                                                color:
                                                                                  "#0a78be",
                                                                              }
                                                                            : {
                                                                                color:
                                                                                  "black",
                                                                              }
                                                                        }
                                                                        aria-level="3"
                                                                        class="x1xqt7ti x1uxerd5 xrohxju x1qsmy5i xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj x117nqv4  x1i64zmx"
                                                                        role="heading"
                                                                      >
                                                                        Campaigns{" "}
                                                                      </div>
                                                                    </div>
                                                                  </div>
                                                                </div>
                                                              </div>
                                                            </div>
                                                          </div>
                                                        </span>
                                                      </a>
                                                    </li>
                                                  </span>
                                                  <span
                                                    data-surface-wrapper="1"
                                                    data-surface="/am/table/table_tab:adset"
                                                    data-auto-logging-id="f281680e3b25a24"
                                                    id="style-fOWQi"
                                                    class="style-fOWQi"
                                                  >
                                                    <li
                                                      class="x1iyjqo2 x1r8uery x6ikm8r x10wlt62 _45hc"
                                                      role="presentation"
                                                    >
                                                      <a
                                                        aria-haspopup="false"
                                                        role="tab"
                                                        tabindex="-1"
                                                        class="_3m1v _468f _8z64"
                                                        aria-selected="false"
                                                      >
                                                        <span
                                                          class=" "
                                                          data-tracked="true"
                                                          data-clickable="1"
                                                        >
                                                          <div
                                                            onClick={() =>
                                                              handleClickRun(
                                                                "AdsSets"
                                                              )
                                                            }
                                                            class={`x78zum5 x1gslohp xw3qccf xat24cr xsgj6o6 xgqcy7u x1lq5wgf x1f92s9n xn3w4p2 x1xp15n3 x1q0q8m5 xso031l ${
                                                              currentfolder ===
                                                              "AdsSets"
                                                                ? "x2izyaf"
                                                                : ""
                                                            } `}
                                                          >
                                                            <div class="x6ikm8r x10wlt62 x1iyjqo2 x78zum5 x6s0dn4 x16n37ib xq8finb">
                                                              <div class="x6ikm8r x10wlt62 x6s0dn4 x78zum5 x1iyjqo2">
                                                                <div class="x1rg5ohu x67bb7w">
                                                                  <div class="x6ikm8r x10wlt62 x6s0dn4 x78zum5">
                                                                    {currentfolder ===
                                                                    "AdsSets" ? (
                                                                      <svg
                                                                        viewBox="0 0 48 48"
                                                                        width="1em"
                                                                        height="1em"
                                                                        fill="currentColor"
                                                                        class="x1qsmy5i xxk0z11 xvy4d1p snipcss-exTTP"
                                                                      >
                                                                        <rect
                                                                          x="26"
                                                                          y="2"
                                                                          width="20"
                                                                          height="20"
                                                                          rx="4.5"
                                                                          ry="4.5"
                                                                        ></rect>
                                                                        <rect
                                                                          x="2"
                                                                          y="26"
                                                                          width="20"
                                                                          height="20"
                                                                          rx="4.5"
                                                                          ry="4.5"
                                                                        ></rect>
                                                                        <path d="M17.5 2h-11C4.02 2 2 4.02 2 6.5v11C2 19.98 4.02 22 6.5 22h11c2.48 0 4.5-2.02 4.5-4.5v-11C22 4.02 19.98 2 17.5 2zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zM41.5 26h-11c-2.48 0-4.5 2.02-4.5 4.5v11c0 2.48 2.02 4.5 4.5 4.5h11c2.48 0 4.5-2.02 4.5-4.5v-11c0-2.48-2.02-4.5-4.5-4.5zM36 40c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"></path>
                                                                      </svg>
                                                                    ) : (
                                                                      <svg
                                                                        viewBox="0 0 48 48"
                                                                        width="1em"
                                                                        height="1em"
                                                                        fill="currentColor"
                                                                        class="x4s1yf2 x1qx5ct2 xw4jnvo"
                                                                      >
                                                                        <g>
                                                                          <g>
                                                                            <rect
                                                                              class="xbh8q5q xi5qq39 x1owpc8m x1f6yumg x1ugd8a3"
                                                                              x="27.5"
                                                                              y="3.5"
                                                                              width="17"
                                                                              height="17"
                                                                              rx="3"
                                                                              ry="3"
                                                                            ></rect>
                                                                            <rect
                                                                              class="xbh8q5q xi5qq39 x1owpc8m x1f6yumg x1ugd8a3"
                                                                              x="3.5"
                                                                              y="27.5"
                                                                              width="17"
                                                                              height="17"
                                                                              rx="3"
                                                                              ry="3"
                                                                            ></rect>
                                                                            <rect
                                                                              class="xbh8q5q xi5qq39 x1owpc8m x1f6yumg x1ugd8a3"
                                                                              x="3.5"
                                                                              y="3.5"
                                                                              width="17"
                                                                              height="17"
                                                                              rx="3"
                                                                              ry="3"
                                                                              transform="rotate(90 12 12)"
                                                                            ></rect>
                                                                            <rect
                                                                              class="xi5qq39 x1owpc8m x1f6yumg x1ugd8a3"
                                                                              x="9.5"
                                                                              y="9.5"
                                                                              width="5"
                                                                              height="5"
                                                                              rx="2.5"
                                                                              ry="2.5"
                                                                              transform="rotate(90 12 12)"
                                                                            ></rect>
                                                                            <rect
                                                                              class="xi5qq39 x1owpc8m x1f6yumg x1ugd8a3"
                                                                              x="33.5"
                                                                              y="33.5"
                                                                              width="5"
                                                                              height="5"
                                                                              rx="2.5"
                                                                              ry="2.5"
                                                                              transform="rotate(90 36 36)"
                                                                            ></rect>
                                                                            <rect
                                                                              class="xbh8q5q xi5qq39 x1owpc8m x1f6yumg x1ugd8a3"
                                                                              x="27.5"
                                                                              y="27.5"
                                                                              width="17"
                                                                              height="17"
                                                                              rx="3"
                                                                              ry="3"
                                                                              transform="rotate(90 36 36)"
                                                                            ></rect>
                                                                          </g>
                                                                        </g>
                                                                      </svg>
                                                                    )}
                                                                    <div
                                                                      class="x6ikm8r"
                                                                      data-sscoverage-ignore="true"
                                                                    >
                                                                      <div
                                                                        style={
                                                                          currentfolder ===
                                                                          "AdsSets"
                                                                            ? {
                                                                                color:
                                                                                  "#0a78be",
                                                                              }
                                                                            : {
                                                                                color:
                                                                                  "black",
                                                                              }
                                                                        }
                                                                        aria-level="3"
                                                                        class="x1xqt7ti x1uxerd5 xrohxju xbsr9hj xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj x117nqv4 xeuugli x1i64zmx"
                                                                        role="heading"
                                                                      >
                                                                        Ad sets{" "}
                                                                      </div>
                                                                    </div>
                                                                  </div>
                                                                </div>
                                                              </div>
                                                            </div>
                                                          </div>
                                                        </span>
                                                      </a>
                                                    </li>
                                                  </span>
                                                  <span
                                                    data-surface-wrapper="1"
                                                    data-surface="/am/table/table_tab:ad"
                                                    data-auto-logging-id="f191984a1c2abb4"
                                                    id="style-j557g"
                                                    class="style-j557g"
                                                  >
                                                    <li
                                                      class="x1iyjqo2 x1r8uery x6ikm8r x10wlt62 _45hc"
                                                      role="presentation"
                                                    >
                                                      <a
                                                        aria-haspopup="false"
                                                        role="tab"
                                                        tabindex="-1"
                                                        class="_3m1v _468f _8z64"
                                                        aria-selected="false"
                                                      >
                                                        <span
                                                          class=" "
                                                          data-tracked="true"
                                                          data-clickable="1"
                                                        >
                                                          <div
                                                            onClick={() =>
                                                              handleClickRun(
                                                                "Ads"
                                                              )
                                                            }
                                                            class={`x78zum5 x1gslohp xw3qccf xat24cr xsgj6o6 xgqcy7u x1lq5wgf x1f92s9n xn3w4p2 x1xp15n3 x1q0q8m5 xso031l ${
                                                              currentfolder ===
                                                              "Ads"
                                                                ? "x2izyaf"
                                                                : ""
                                                            } `}
                                                            id="ADGROUP_AdsClassicTab"
                                                          >
                                                            <div class="x6ikm8r x10wlt62 x1iyjqo2 x78zum5 x6s0dn4 x16n37ib xq8finb">
                                                              <div class="x6ikm8r x10wlt62 x6s0dn4 x78zum5 x1iyjqo2">
                                                                <div class="x1rg5ohu x67bb7w">
                                                                  <div class="x6ikm8r x10wlt62 x6s0dn4 x78zum5">
                                                                    {currentfolder ===
                                                                    "Ads" ? (
                                                                      <svg
                                                                        viewBox="0 0 16 16"
                                                                        width="1em"
                                                                        height="1em"
                                                                        fill="currentColor"
                                                                        class="x1qsmy5i xxk0z11 xvy4d1p snipcss-xPvhS"
                                                                      >
                                                                        <g data-name="Layer 2">
                                                                          <path
                                                                            d="M13.25 1H2.75A1.76 1.76 0 0 0 1 2.75v10.5A1.76 1.76 0 0 0 2.75 15h10.5A1.76 1.76 0 0 0 15 13.25V2.75A1.76 1.76 0 0 0 13.25 1zM4.5 5.5a1 1 0 1 1 1-1 1 1 0 0 1-1 1zm8-.5h-5a.5.5 0 0 1 0-1h5a.5.5 0 0 1 0 1z"
                                                                            data-name="16"
                                                                          ></path>
                                                                        </g>
                                                                      </svg>
                                                                    ) : (
                                                                      <svg
                                                                        viewBox="0 0 16 16"
                                                                        width="1em"
                                                                        height="1em"
                                                                        fill="currentColor"
                                                                        class="x4s1yf2 x1qx5ct2 xw4jnvo"
                                                                      >
                                                                        <g data-name="Layer 2">
                                                                          <g data-name="16">
                                                                            <rect
                                                                              x="1.5"
                                                                              y="1.5"
                                                                              width="13"
                                                                              height="13"
                                                                              rx="1.25"
                                                                              stroke="currentColor"
                                                                              fill="none"
                                                                            ></rect>
                                                                            <circle
                                                                              cx="4.5"
                                                                              cy="4.5"
                                                                              r="1"
                                                                            ></circle>
                                                                            <path
                                                                              stroke-linecap="round"
                                                                              stroke="currentColor"
                                                                              fill="none"
                                                                              d="M7.5 4.5 12.5 4.5"
                                                                            ></path>
                                                                          </g>
                                                                        </g>
                                                                      </svg>
                                                                    )}
                                                                    <div
                                                                      class="x6ikm8r"
                                                                      data-sscoverage-ignore="true"
                                                                    >
                                                                      <div
                                                                        style={
                                                                          currentfolder ===
                                                                          "Ads"
                                                                            ? {
                                                                                color:
                                                                                  "#0a78be",
                                                                              }
                                                                            : {
                                                                                color:
                                                                                  "black",
                                                                              }
                                                                        }
                                                                        aria-level="3"
                                                                        class="x1xqt7ti x1uxerd5 xrohxju xbsr9hj xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj x117nqv4 xeuugli x1i64zmx"
                                                                        role="heading"
                                                                      >
                                                                        Ads
                                                                      </div>
                                                                    </div>
                                                                  </div>
                                                                </div>
                                                              </div>
                                                            </div>
                                                          </div>
                                                        </span>
                                                      </a>
                                                    </li>
                                                  </span>
                                                </ul>
                                              </div>
                                              <div class="x1c4vz4f xs83m0k xdl72j9"></div>
                                            </div>
                                          </div>
                                          {/* compaing data start here  */}
                                          {currentfolder === "Campaings" && (
                                            <CompaingsData
                                              showcustumizedcoloums={
                                                showcustumizedcoloums
                                              }
                                              setShowCustumizedlayout={
                                                setShowCustumizedlayout
                                              }
                                              campaigns={campaings}
                                              loading={loading}
                                              setLoading={setLoading}
                                              setError={setError}
                                              selectedValues={selectedValues}
                                              showcustomizedbanner={
                                                showcustomizedbanner
                                              }
                                              setShowCustumizeBanner={
                                                setShowCustumizeBanner
                                              }
                                            />
                                          )}
                                          {currentfolder === "AdsSets" && (
                                            <AdsSets
                                              campaigns={campaings}
                                              loading={loading}
                                              setLoading={setLoading}
                                              setError={setError}
                                            />
                                          )}
                                          {currentfolder === "Ads" && (
                                            <Ads
                                              campaigns={campaings}
                                              loading={loading}
                                              setLoading={setLoading}
                                              setError={setError}
                                            />
                                          )}

                                          <div class="xeq5yr9 x12peec7 x1lcm9me x1yr5g0i x5pf9jr xo71vjh x1n2onr6 xiaao90 x1i64zmx"></div>
                                        </div>
                                      </span>
                                      <div class="xixxii4 xjnlgov x1vw3jpx x1memqgq">
                                        <span></span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </span>
                        <span
                          data-surface-wrapper="1"
                          data-non-int-surface="/am/hero_root:AdsPEModalStatusContainer.react"
                          data-auto-logging-id="f40ab3df733bd"
                          id="style-YtINJ"
                          class="style-YtINJ"
                        >
                          <div class=""></div>
                        </span>
                        <div id="web_ads_guidance_tips"></div>
                      </div>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showcustumizedcoloums && (
        <div className="mycustomlayoutteamd">
          <div
            style={{ marginTop: "25px" }}
            class="_59s7 _9l2g snipcss0-1-1-3 style-RZxFc"
            role="dialog"
            aria-labelledby="js_vo"
            id="style-RZxFc"
          >
            <div class="_4t2a snipcss0-2-3-4">
              <div class="snipcss0-3-4-5">
                <div
                  data-surface="/am/table"
                  data-clickable="1"
                  data-inputable="1"
                  data-keydownable="1"
                  data-keyupable="1"
                  data-mouseoverable="1"
                  data-changeable="1"
                  class="snipcss0-4-5-6"
                >
                  <div
                    data-auto-logging-id="f32bd349120e60c"
                    class="snipcss0-5-6-7"
                  >
                    <div class="_4-i0 _9l16 _2gb3 snipcss0-6-7-8">
                      <div class="clearfix snipcss0-7-8-9">
                        <div class="_ohe snipcss0-8-9-10">
                          <h3
                            class="_52c9 _9l17 snipcss0-9-10-11"
                            data-hover="tooltip"
                            data-tooltip-display="overflow"
                            id="js_vo"
                          >
                            Customise columns
                          </h3>
                        </div>
                        <div class="_ohf snipcss0-8-9-12">
                          <div class="_51-u snipcss0-9-12-13">
                            <button
                              onClick={handleCencelButton}
                              class="layerCancel _51-t _9l15 _50zy _50-0 _50z- _5upp _42ft snipcss0-10-13-14"
                              type="button"
                              title="Close"
                              tabindex="0"
                            >
                              Close
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <span
                      data-surface-wrapper="1"
                      data-non-int-surface="/am/hero_root:AdsPEMainAppWithLeftNavigation.react/table/hero_root:/hero_root:AdsColumnSetEditor.react"
                      data-auto-logging-id="fc18afd906977"
                      class="snipcss0-6-7-15 style-QUODW"
                      id="style-QUODW"
                    >
                      <div class="snipcss0-7-15-16">
                        <div
                          font-size="medium"
                          class="_4-i2 _50f4 snipcss0-8-16-17"
                        >
                          <div class="_t5z _5aj7 snipcss0-9-17-18">
                            <div className="_t5o _4bl7 snipcss0-10-18-19">
                              <ul
                                className="_13pf _43o4 _4470 snipcss0-11-19-20"
                                role="tablist"
                              >
                                {data.map((section, index) => (
                                  <div
                                    className="_13pe snipcss0-12-20-21"
                                    tabindex="0"
                                    key={index}
                                  >
                                    <div className="snipcss0-13-21-22">
                                      <ul
                                        style={{ textAlign: "left" }}
                                        className="_1pgx _43o4 _4470 snipcss0-14-22-23"
                                        role="tablist"
                                      >
                                        <a
                                          style={{
                                            color:
                                              activeSection === index
                                                ? "#2887e6"
                                                : "black", // Set color based on active section
                                            fontWeight: "bold",
                                          }}
                                          aria-haspopup="false"
                                          tabIndex="0"
                                          role="tab"
                                          href={`#section-${index}`}
                                          className="snipcss0-15-23-24"
                                          aria-selected={
                                            activeSection === index
                                              ? "true"
                                              : "false"
                                          } // Set aria-selected for accessibility
                                          onClick={() =>
                                            handleSectionClick(index)
                                          } // Set active section on click
                                        >
                                          {section.sectionTitle}
                                        </a>
                                        {section.subSections
                                          .filter(
                                            (subSection) =>
                                              ![
                                                "Cost: Page and post",
                                                "Cost: messaging",
                                                "Cost: Media",
                                                "Cost: clicks",
                                                "Cost: awareness",
                                                "Performance",
                                              ].includes(
                                                subSection.sectionTitle
                                              )
                                          )
                                          .map((subSection, subIndex) => (
                                            <a
                                              key={subIndex}
                                              style={{ textAlign: "left" }}
                                              aria-haspopup="false"
                                              tabIndex="-1"
                                              role="tab"
                                              className="_1pgv _45hc _3m1v _468f snipcss0-15-23-25"
                                              aria-selected="false"
                                            >
                                              <div
                                                className="_6a snipcss0-16-25-26"
                                                style={{ textAlign: "left" }}
                                              >
                                                {subSection.sectionTitle}
                                              </div>
                                            </a>
                                          ))}
                                      </ul>
                                    </div>
                                  </div>
                                ))}
                              </ul>
                            </div>
                            <div class="_afhd _4bl9 snipcss0-10-18-77">
                              <div class="_37yx snipcss0-11-77-78">
                                <div class="_3qn7 _61-0 _2fyi _3qng snipcss0-12-78-79">
                                  <div class="_37yz snipcss0-13-79-80">
                                    <div class="_1qqs snipcss0-14-80-81">
                                      <label
                                        class="_4b7j _53rs _642b snipcss0-15-81-82 style-S8Est"
                                        tabindex="-1"
                                        id="style-S8Est"
                                      >
                                        <i
                                          class="_4b7o img snipcss0-16-82-83 style-kw7cQ"
                                          alt=""
                                          data-visualcompletion="css-img"
                                          id="style-kw7cQ"
                                        ></i>
                                        <input
                                          class="_4b7k _4b7k_big _53rs snipcss0-16-82-84 style-6JOEj"
                                          placeholder="Search"
                                          value=""
                                          id="style-6JOEj"
                                        />
                                      </label>
                                    </div>
                                  </div>
                                  <div class="_8-m0 _2pi4 _2pil snipcss0-13-79-85">
                                    <a
                                      style={{ textAlign: "left" }}
                                      data-hover="tooltip"
                                      data-tooltip-display="overflow"
                                      class="_231w _231z _8y2_ snipcss0-14-85-86 style-zKWh4"
                                      href="#"
                                      id="style-zKWh4"
                                    >
                                      Create custom metric
                                    </a>
                                  </div>
                                </div>
                              </div>
                              <div class="x1n2onr6 snipcss0-11-77-87">
                                <div
                                  class="x6s0dn4 x78zum5 x13a6bvl x2lwn1j xeuugli x1hxswl6 x178xt8z x13fuv20 xx1l10f x9f619 xyamay9 x1pi30zi xwib8y2 x5ib6vp xh8yej3 x1ccr1t9 snipcss0-12-87-88 style-fsor3"
                                  id="style-fsor3"
                                >
                                  <span
                                    role="heading"
                                    aria-level="4"
                                    class="snipcss0-13-88-89 style-WojKt"
                                    id="style-WojKt"
                                  >
                                    Metrics to include
                                  </span>
                                  <div
                                    class="x1bl4301 snipcss0-13-88-90 style-t8voQ"
                                    id="CONVERSION_CATEGORY_HEADER_LABEL"
                                  >
                                    <div class="_3qn7 _61-2 _2fyi _3qng snipcss0-14-90-91">
                                      <div class="x1c4vz4f xs83m0k x15foiic x2b8uid snipcss0-15-91-92">
                                        <span
                                          class="snipcss0-16-92-93 style-113ov"
                                          id="style-113ov"
                                        >
                                          Total
                                        </span>
                                      </div>
                                      <div class="x1c4vz4f xs83m0k x15foiic x2b8uid snipcss0-15-91-94">
                                        <span
                                          class="snipcss0-16-94-95 style-o3REE"
                                          id="style-o3REE"
                                        >
                                          Unique
                                        </span>
                                      </div>
                                      <div class="x1c4vz4f xs83m0k x15foiic x2b8uid snipcss0-15-91-96">
                                        <span
                                          class="snipcss0-16-96-97 style-Oaz1C"
                                          id="style-Oaz1C"
                                        >
                                          Value
                                        </span>
                                      </div>
                                      <div class="x1c4vz4f xs83m0k x15foiic x2b8uid snipcss0-15-91-98">
                                        <span
                                          class="snipcss0-16-98-99 style-7bUbd"
                                          id="style-7bUbd"
                                        >
                                          Cost
                                        </span>
                                      </div>
                                      <div class="x1c4vz4f xs83m0k x15foiic x2b8uid snipcss0-15-91-100">
                                        <span
                                          class="snipcss0-16-100-101 style-XU9lp"
                                          id="style-XU9lp"
                                        >
                                          Unique cost
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                style={{
                                  overflowY: "scroll",
                                  scrollbarWidth: "none",
                                  msOverflowStyle: "none",
                                }}
                                class="_3qp4 snipcss0-11-77-102 style-ZT9dC"
                                id="style-ZT9dC"
                              >
                                {data.map((section, index) => (
                                  <div
                                    key={index}
                                    className="section"
                                    id={`section-${index}`}
                                  >
                                    <header
                                      style={{ textAlign: "left" }}
                                      class="_28r6 snipcss0-15-105-106"
                                    >
                                      <div class="_3qn7 _61-0 _2fyi _3qng snipcss0-16-106-107">
                                        <TitleCheckbox
                                          checked={section.checked} // Replace with your state management for checked
                                          onChange={() =>
                                            handleCheckboxChange(
                                              section,
                                              null,
                                              true
                                            )
                                          } // Function to handle checkbox state change
                                        />
                                        <label
                                          style={{
                                            marginLeft: "8px",
                                            color: "#90949c",
                                            textTransform: "uppercase",
                                          }}
                                        >
                                          {section.sectionTitle}
                                        </label>
                                      </div>
                                    </header>

                                    {/* Display subSections */}
                                    {section.subSections &&
                                      section.subSections.map(
                                        (subSection, subIndex) => (
                                          <div
                                            key={subIndex}
                                            className="sub-section"
                                          >
                                            <header
                                              style={{
                                                textAlign: "left",
                                                paddingLeft: "23px",
                                                marginTop: "15px",
                                              }}
                                              class="_28r4 snipcss0-16-312-313"
                                            >
                                              <span
                                                class="_4qe6 snipcss0-17-313-314 style-qzzwI"
                                                id="style-qzzwI"
                                              >
                                                <span class="snipcss0-18-314-315">
                                                  {subSection.sectionTitle}
                                                </span>
                                              </span>
                                            </header>

                                            {/* Complex table for Standard Events */}
                                            {subSection.sectionTitle ===
                                              "Standard Events" && (
                                              <table
                                                style={{
                                                  borderCollapse: "collapse",
                                                }}
                                              >
                                                <thead
                                                  style={{
                                                    backgroundColor: "#f6f7f9",
                                                    marginBottom: "10px",
                                                  }}
                                                >
                                                  <tr>
                                                    {subSection.tableHeaders.map(
                                                      (header, idx) => (
                                                        <th
                                                          style={{
                                                            paddingRight:
                                                              "15px",
                                                            paddingLeft: "8px",
                                                            paddingTop: "15px",
                                                            paddingBottom:
                                                              "15px",
                                                            fontSize: "13px",
                                                          }}
                                                          key={idx}
                                                        >
                                                          {header}
                                                        </th>
                                                      )
                                                    )}
                                                  </tr>
                                                </thead>
                                                <br />
                                                <tbody>
                                                  {subSection.tableData.map(
                                                    (row, rowIndex) => (
                                                      <tr
                                                        style={{
                                                          paddingLeft: "10px",
                                                        }}
                                                        key={rowIndex}
                                                      >
                                                        <td
                                                          style={{
                                                            paddingLeft: "12px",
                                                            fontSize: "14px",
                                                          }}
                                                        >
                                                          {row.metric}
                                                        </td>
                                                        {row.values.map(
                                                          (
                                                            metric,
                                                            metricIdx
                                                          ) => (
                                                            <td
                                                              style={{
                                                                paddingLeft:
                                                                  "12px",
                                                                paddingBottom:
                                                                  "8px",
                                                              }}
                                                              key={metricIdx}
                                                            >
                                                              <CustomCheckbox
                                                                checked={selectedValues.includes(
                                                                  metric
                                                                )} // Determine if the checkbox is checked
                                                                onChange={() =>
                                                                  handleCheckboxChange(
                                                                    null,
                                                                    metric,
                                                                    false,
                                                                    subSection
                                                                      .tableHeaders[
                                                                      metricIdx +
                                                                        1
                                                                    ],
                                                                    row.metric
                                                                  )
                                                                }
                                                              />
                                                            </td>
                                                          )
                                                        )}
                                                      </tr>
                                                    )
                                                  )}
                                                </tbody>
                                              </table>
                                            )}

                                            {/* Regular attributes for other sections */}
                                            {subSection.attributes &&
                                              subSection.attributes.map(
                                                (attr, idx) => (
                                                  <span class="snipcss0-17-112-113">
                                                    <li
                                                      style={{
                                                        listStyleType: "none",
                                                        textAlign: "left",
                                                      }}
                                                      class="_2jin"
                                                      tabindex="0"
                                                      data-mouseoverable="1"
                                                      id="js_1sq"
                                                    >
                                                      <div
                                                        className="mainitemkamila"
                                                        class="_2jip _3qn7 _61-0 _2fyi _3qnf snipcss0-19-114-115"
                                                      >
                                                        <label
                                                          style={{
                                                            textAlign: "left",

                                                            width: "100%",
                                                          }}
                                                          class="_1gcq _29c- snipcss0-20-115-116 style-CbcRG"
                                                          data-tooltip-alignh="center"
                                                          id="style-CbcRG"
                                                        >
                                                          <span
                                                            style={{
                                                              display: "flex",
                                                              alignItems:
                                                                "center",
                                                            }}
                                                            className="internalsupan"
                                                            class="_1gcr snipcss0-21-116-119"
                                                            id="js_vv"
                                                          >
                                                            {/* kamila he ana  */}
                                                            <input
                                                              type="hidden" // Hide the default checkbox
                                                              checked={selectedValues.includes(
                                                                attr.value
                                                              )}
                                                              onChange={() =>
                                                                handleCheckboxChange(
                                                                  null,
                                                                  attr.value,
                                                                  false
                                                                )
                                                              }
                                                            />
                                                            <CustomCheckbox
                                                              checked={selectedValues.includes(
                                                                attr.value
                                                              )} // Pass checked state
                                                              onChange={() =>
                                                                handleCheckboxChange(
                                                                  null,
                                                                  attr.value,
                                                                  false
                                                                )
                                                              } // Pass the change handler
                                                            />

                                                            <span
                                                              style={{
                                                                marginLeft:
                                                                  "8px",

                                                                width: "100%",
                                                              }}
                                                              class="snipcss0-22-119-120 style-j164n"
                                                              id="style-j164n"
                                                            >
                                                              {attr.title}
                                                            </span>
                                                          </span>
                                                        </label>
                                                      </div>
                                                    </li>
                                                    <div class="snipcss0-18-113-125"></div>
                                                  </span>
                                                )
                                              )}
                                          </div>
                                        )
                                      )}
                                    {index !== data.length - 1 && <hr />}
                                  </div>
                                ))}
                                <div
                                  class="_1t0r _1t0s _4jdr snipcss0-12-102-3612 style-Qjfhk"
                                  tabindex="0"
                                  id="style-Qjfhk"
                                >
                                  <div
                                    class="_1t0w _1t0z _1t0_ snipcss0-13-3612-3613 style-TAKY5"
                                    id="style-TAKY5"
                                  ></div>
                                </div>
                              </div>
                            </div>
                            <div class="_t5- _4bl7 snipcss0-10-18-3614">
                              <div class="_t5u snipcss0-11-3614-3615">
                                <div class="_t5v _2pib snipcss0-12-3615-3616">
                                  <div
                                    class="_3-8- _3-96 snipcss0-13-3616-3617 style-KhPqZ"
                                    id="style-KhPqZ"
                                  >
                                    <div class="snipcss0-14-3617-3618">
                                      {selectedValues.length} columns selected
                                    </div>
                                  </div>
                                  <ul>
                                    {selectedValues.map((value, index) => (
                                      <li
                                        class="_6qr6 snipcss0-14-3619-3712"
                                        id="cost_per_result"
                                      >
                                        <ul
                                          style={{ textAlign: "left" }}
                                          class="snipcss0-15-3712-3713"
                                        >
                                          <li class="_6qr8 snipcss0-16-3713-3714">
                                            <div class="_58zo _58z_ _58-8 _23n- snipcss0-17-3714-3715">
                                              <div class="_6qrm snipcss0-18-3715-3716">
                                                <span
                                                  class="snipcss0-19-3716-3717 style-g6SvI"
                                                  id="style-g6SvI"
                                                >
                                                  {value}
                                                </span>
                                              </div>
                                              <div class="_32rk _32rg _32ri _32rj snipcss0-18-3715-3718">
                                                <div class="_3bwv snipcss0-19-3718-3719">
                                                  <div class="_3bwy snipcss0-20-3719-3720">
                                                    <div class="_3bwx snipcss0-21-3720-3721">
                                                      <div class="_6qrn snipcss0-22-3721-3722"></div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                              <div
                                                class="_58zn _32rk _32rg _32ri _32rj snipcss0-18-3715-3723"
                                                data-clickable="1"
                                              ></div>
                                              <span class="_6qf3 _32rk _32rh _32ri _32rj snipcss0-18-3715-3724">
                                                <button
                                                  onClick={() =>
                                                    handleRemoveItem(value)
                                                  }
                                                  class="_42d_ _32qq _3n5r snipcss0-19-3724-3725 style-yzUnj"
                                                  type="button"
                                                  id="style-yzUnj"
                                                >
                                                  <span class="accessible_elem snipcss0-20-3725-3726">
                                                    Close
                                                  </span>
                                                  <span
                                                    aria-hidden="true"
                                                    class="_3n5s snipcss0-20-3725-3727 style-CPFAN"
                                                    id="style-CPFAN"
                                                  >
                                                    <i
                                                      size="12"
                                                      alt=""
                                                      data-visualcompletion="css-img"
                                                      class="img snipcss0-21-3727-3728 style-SxWNG"
                                                      id="style-SxWNG"
                                                    ></i>
                                                  </span>
                                                </button>
                                              </span>
                                            </div>
                                          </li>
                                        </ul>
                                      </li>
                                    ))}
                                  </ul>
                                  <div class="snipcss0-13-3616-3984"></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </span>
                    <div
                      font-size="medium"
                      class="_5a8u _5lnf uiOverlayFooter snipcss0-6-7-3985"
                    >
                      <div font-size="medium" class="snipcss0-7-3985-3986">
                        <div class="clearfix snipcss0-8-3986-3987">
                          <div class="_ohe snipcss0-9-3987-3988">
                            <div class="snipcss0-10-3988-3989">
                              <div class="x1cy8zhl x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 xs83m0k x19lwn94 snipcss0-11-3989-3990">
                                <div class="_3qn7 _61-0 _2fyi _3qng snipcss0-12-3990-3991">
                                  <div
                                    class="x78zum5 x1emribx uiInputLabel clearfix snipcss0-13-3991-3992"
                                    display="block"
                                  >
                                    <button
                                      aria-checked="false"
                                      aria-disabled="false"
                                      class="_1gcq _29c- _1gco _5e9w snipcss0-14-3992-3993 style-KA8V9"
                                      id="js_11x"
                                      role="checkbox"
                                      type="button"
                                    >
                                      <i
                                        aria-hidden="true"
                                        class="_3w08 accessible_elem monochrome img snipcss0-15-3993-3994 style-cnNyL"
                                        alt=""
                                        data-visualcompletion="css-img"
                                        id="style-cnNyL"
                                      ></i>
                                    </button>
                                    <label
                                      class="uiInputLabelLabel snipcss0-14-3992-3995"
                                      for="js_11x"
                                    >
                                      Save as a column preset
                                    </label>
                                  </div>
                                  <span
                                    class="_36g4 _4yei xlshs6z x1n2onr6 _58ah snipcss0-13-3991-3996 style-cFXnI"
                                    placeholder="Type a name"
                                    errortooltipposition="above"
                                    borderedsides="top,right,bottom,left"
                                    autocomplete="off"
                                    autocorrect="off"
                                    id="js_vp"
                                  >
                                    <label class="_58ak _3ct8 snipcss0-14-3996-3997">
                                      <input
                                        class="_58al snipcss0-15-3997-3998 style-Vvawt"
                                        aria-autocomplete="list"
                                        aria-controls="js_vn"
                                        aria-haspopup="listbox"
                                        aria-expanded="false"
                                        role="combobox"
                                        placeholder="Type a name"
                                        autocomplete="off"
                                        autocorrect="off"
                                        type="text"
                                        value=""
                                        id="style-Vvawt"
                                      />
                                    </label>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="_ohf snipcss0-9-3987-3999">
                            <div class="snipcss0-10-3999-4000">
                              <div
                                class="snipcss0-11-4000-4001 style-PmmRW"
                                id="style-PmmRW"
                              >
                                <div
                                  class="snipcss0-12-4001-4002 style-G8CJP"
                                  id="style-G8CJP"
                                >
                                  <button
                                    onClick={handleCencelButton}
                                    type="button"
                                    aria-disabled="false"
                                    class="_271k _271m _1qjd layerCancel _ai7j _ai7k _ai7m snipcss0-13-4002-4003 style-PoAoB"
                                    id="style-PoAoB"
                                  >
                                    <div class="_43rl snipcss0-14-4003-4004">
                                      <div
                                        data-hover="tooltip"
                                        data-tooltip-display="overflow"
                                        class="_43rm snipcss0-15-4004-4005"
                                      >
                                        Cancel
                                      </div>
                                    </div>
                                  </button>
                                </div>
                                <div
                                  class="snipcss0-12-4001-4006 style-a3jUd"
                                  id="style-a3jUd"
                                >
                                  <span
                                    class="snipcss0-13-4006-4007"
                                    data-tracked="true"
                                    data-clickable="1"
                                  >
                                    <button
                                      type="button"
                                      aria-disabled="false"
                                      class="_271k _271m _1qjd layerConfirm _ai7j _ai7k _ai7m snipcss0-14-4007-4008 style-kKnrS"
                                      id="style-kKnrS"
                                    >
                                      <div class="_43rl snipcss0-15-4008-4009">
                                        <div
                                          onClick={handleapplybutton}
                                          data-hover="tooltip"
                                          data-tooltip-display="overflow"
                                          class="_43rm snipcss0-16-4009-4010"
                                        >
                                          Apply
                                        </div>
                                      </div>
                                    </button>
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
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;

import React, { useState } from "react";
import {
  AdjustmentsHorizontalIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/solid";

import "../styles/ColumnSelector.css";

const ColumnSelector = () => {
  const initialCategories = {
    "Recently used": ["Performance", "Engagement", "Video engagement"],
    Popular: ["Performance and clicks", "Delivery"],
  };

  const metricsDetails = {
    Performance: [
      "Delivery",
      "Ad set name",
      "Bid strategy",
      "Budget",
      "Last significant edit",
      "Attribution setting",
      "Results",
      "Reach",
      "Impressions",
      "Cost per result",
      "Quality ranking",
      "Engagement rate ranking",
      "Conversion rate ranking",
      "Amount spent",
      "Ends",
      "Schedule",
    ],
    Engagement: [
      "Delivery",
      "Page engagement",
      "Post reactions",
      "Post comments",
      "Post saves",
      "Post shares",
      "Link clicks",
      "Follows or likes",
      "CPC (cost per link click)",
    ],
    "Video engagement": [
      "Delivery",
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
    ],
    "Performance and clicks": [
      "Delivery",
      "Attribution setting",
      "Results",
      "Reach",
      "Views",
      "Frequency",
      "Cost per result",
      "Budget",
      "Amount spent",
      "Ends",
      "Schedule",
      "Quality ranking",
      "Engagement rate ranking",
      "Conversion rate ranking",
      "Impressions",
      "CPM (cost per 1,000 impressions)",
      "Link clicks",
      "CPC (cost per link click)",
      "CTR (link click-through rate)",
      "Clicks (all)",
      "CTR (all)",
      "CPC (all)",
    ],
    Delivery: [
      "Delivery",
      "Reach",
      "Frequency",
      "Cost per 1,000 Accounts Centre accounts reached",
      "Impressions",
      "CPM (cost per 1,000 impressions)",
    ],
  };

  const [categories, setCategories] = useState(initialCategories);
  const [selectedCategory, setSelectedCategory] = useState("Performance");
  const [hoveredCategory, setHoveredCategory] = useState(null);

  const handleSelect = (category, group) => {
    setSelectedCategory(category);

    // Move selected item to the top of the list
    setCategories((prev) => {
      const updatedGroup = [
        category,
        ...prev[group].filter((item) => item !== category),
      ];
      return { ...prev, [group]: updatedGroup };
    });
  };

  const handleHover = (category) => {
    setHoveredCategory(category);
  };

  return (
    <div className="column-selector-container">
      <div className="column-selector-menu">
        {Object.keys(categories).map((group) => (
          <div className="column-selector-group" key={group}>
            <h4 className="column-selector-title">{group}</h4>
            {categories[group].map((category) => (
              <div
                key={category}
                className={`column-selector-item ${
                  selectedCategory === category ? "column-active" : ""
                }`}
                onClick={() => handleSelect(category, group)}
                onMouseEnter={() => handleHover(category)}
                onMouseLeave={() => setHoveredCategory(null)}
              >
                <input
                  type="radio"
                  name="category"
                  checked={selectedCategory === category}
                  readOnly
                />
                <span>{category}</span>
              </div>
            ))}
          </div>
        ))}

        <div className="column-selector-actions">
          <div className="action-item">
            <span>Discover more column presets</span>
            <ChevronRightIcon className="chevron-right-icon" />
          </div>
          <div className="action-item">
            <span>View your column presets</span>
            <ChevronRightIcon className="chevron-right-icon" />
          </div>
          <div className="action-item">
            <span>Compare attribution settings</span>
          </div>
        </div>

        <button className="customize-columns-btn">
          <AdjustmentsHorizontalIcon className="customize-icon" />
          <span>Customise columns</span>
        </button>
      </div>

      {hoveredCategory && (
        <div className="column-selector-hover">
          <h4>{hoveredCategory}</h4>
          <ul>
            {metricsDetails[hoveredCategory].map((metric, index) => (
              <li
                style={{
                  listStyleType: "initial",
                  listStylePosition: "inside",
                }}
                key={index}
              >
                {metric}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ColumnSelector;

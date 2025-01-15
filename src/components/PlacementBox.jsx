import {
  ChevronRightIcon,
  InformationCircleIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/solid";

import React from "react";
import "../styles/PlacementBox.css";
const PlacementBox = ({
  showPerformanceRows,
  setShowPerformanceRows,
  setShowPlacementBox,
}) => {
  const handleCheckboxChange = (e) => {
    setShowPerformanceRows(e.target.checked);
  };
  const handleClearAll = () => {
    // Clear all checkboxes and close the box
    setShowPerformanceRows(false);
    setShowPlacementBox(false);
  };

  return (
    <div className="placementnew-container">
      <div className="placementnew-header">
        <div style={{ display: "flex", alignItems: "center" }}>
          <div className="placementnew-searchbar">
            <MagnifyingGlassIcon className="placementnew-searchicon" />
            <input
              type="text"
              placeholder="Search"
              className="placementnew-searchinput"
            />
          </div>
          <div>
            {showPerformanceRows && (
              <span
                onClick={handleClearAll}
                style={{
                  whiteSpace: "nowrap",
                  color: "#0a78be",
                  marginLeft: "3px",
                  cursor: "pointer",
                }}
              >
                Clear All
              </span>
            )}
          </div>
        </div>
      </div>
      <div className="placementnew-section">
        <h4 className="placementnew-section-title">Recently used</h4>
        <div className="placementnew-item">
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
            onChange={handleCheckboxChange}
            checked={showPerformanceRows}
            className="uniquecheckboxForPlacement"
          />
          <label htmlFor="recent-placement">Placement</label>
        </div>
      </div>
      <div className="placementnew-section">
        <h4 className="placementnew-section-title">
          Popular <InformationCircleIcon className="placementnew-infoicon" />
        </h4>
        <div className="placementnew-item">
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
            className="uniquecheckboxForPlacement"
          />
          <label htmlFor="popular-day">Day</label>
        </div>
        <div className="placementnew-item">
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
            className="uniquecheckboxForPlacement"
          />
          <label htmlFor="popular-age">Age</label>
        </div>
        <div className="placementnew-item">
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
            onChange={handleCheckboxChange}
            checked={showPerformanceRows}
            className="uniquecheckboxForPlacement"
          />
          <label htmlFor="popular-placement">Placement</label>
        </div>
        <div className="placementnew-item">
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
            className="uniquecheckboxForPlacement"
          />
          <label htmlFor="popular-country">Country</label>
        </div>
        <div className="placementnew-item">
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
            className="uniquecheckboxForPlacement"
          />
          <label htmlFor="popular-platform">Platform</label>
        </div>
      </div>
      <div className="placementnew-subsection">
        <div className="placementnew-subitem">
          Time <ChevronRightIcon className="placementnew-chevronicon" />
        </div>
        <div className="placementnew-subitem">
          Demographics <ChevronRightIcon className="placementnew-chevronicon" />
        </div>
        <div className="placementnew-subitem">
          Geography <ChevronRightIcon className="placementnew-chevronicon" />
        </div>
        <div className="placementnew-subitem">
          Delivery <ChevronRightIcon className="placementnew-chevronicon" />
        </div>
        <div className="placementnew-subitem">
          Action <ChevronRightIcon className="placementnew-chevronicon" />
        </div>
      </div>
    </div>
  );
};

export default PlacementBox;

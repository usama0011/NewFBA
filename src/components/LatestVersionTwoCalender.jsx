import React, { useState } from "react";
import "../styles/LatestVersionTwoCalender.css";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/16/solid";

const LatestVersionTwoCalender = () => {
  const getFirstDayOfMonth = () =>
    new Date(new Date().getFullYear(), new Date().getMonth(), 1);
  const getTodayDate = () => new Date();

  const [selectedOption, setSelectedOption] = useState("This Month");
  const [startDate, setStartDate] = useState(getFirstDayOfMonth());
  const [endDate, setEndDate] = useState(getTodayDate());
  const [hoverDate, setHoverDate] = useState(null);
  const [currentMonth, setCurrentMonth] = useState(new Date());

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

  return (
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
          <div key={option} className="latestreporting-option">
            <input
              type="radio"
              id={option}
              name="date-range"
              value={option}
              checked={selectedOption === option}
              onChange={() => handleOptionChange(option)}
            />
            <label htmlFor={option}>{option}</label>
          </div>
        ))}
      </div>
      <div>
        <div className="latestreporting-calendar-wrapper">
          <div className="latestreporting-calendar">
            <div className="latestreporting-month">
              <button onClick={handlePrevMonth}>
                <ChevronLeftIcon style={{ width: "20px", height: "20px" }} />
              </button>
              <span>
                {currentMonth.toLocaleString("default", { month: "long" })}{" "}
                {currentMonth.getFullYear()}
              </span>
            </div>
            <div className="latestreporting-day-labels">
              {["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"].map(
                (day) => (
                  <div key={day}>{day}</div>
                )
              )}
            </div>
            <div className="latestreporting-days">
              {renderDays(currentMonth.getFullYear(), currentMonth.getMonth())}
            </div>
          </div>

          <div className="latestreporting-calendar">
            <div
              className="latestreporting-month"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <span style={{ visibility: "hidden" }}>ss</span>
              <span>
                {new Date(
                  currentMonth.getFullYear(),
                  currentMonth.getMonth() + 1
                ).toLocaleString("default", { month: "long" })}{" "}
                {new Date(
                  currentMonth.getFullYear(),
                  currentMonth.getMonth() + 1
                ).getFullYear()}
              </span>
              <button onClick={handleNextMonth}>
                <ChevronRightIcon style={{ width: "20px", height: "20px" }} />
              </button>
            </div>
            <div className="latestreporting-day-labels">
              {["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"].map(
                (day) => (
                  <div key={day}>{day}</div>
                )
              )}
            </div>
            <div className="latestreporting-days">
              {renderDays(
                currentMonth.getFullYear(),
                currentMonth.getMonth() + 1
              )}
            </div>
          </div>
        </div>
        <div style={{ marginRight: "45px" }} className="latestreporting-footer">
          <select
            style={{ height: "40px" }}
            value={selectedOption}
            onChange={(e) => handleOptionChange(e.target.value)}
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
            ].map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          <input
            style={{ height: "28px" }}
            type="text"
            value={startDate ? startDate.toDateString() : ""}
            readOnly
          />
          <input
            style={{ height: "28px" }}
            type="text"
            value={endDate ? endDate.toDateString() : ""}
            readOnly
          />
        </div>
        <br />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginRight: "45px",
          }}
        >
          <p
            style={{
              color: "gray",
              textAlign: "left",
            }}
          >
            Dates are shown in Karachi Time
          </p>
          <div>
            <button
              style={{
                padding: "10px",
                border: "1px solid gainsboro",
                backgroundColor: "transparent",
                borderRadius: "5px",
                width: "80px",
                fontWeight: "bold",
                marginRight: "5px",
              }}
            >
              Cancel
            </button>
            <button
              style={{
                padding: "10px",
                width: "80px",
                border: "1px solid gainsboro",
                backgroundColor: "#0978bf",
                color: "white",
                outline: "none",
                borderRadius: "5px",
              }}
            >
              Update
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestVersionTwoCalender;

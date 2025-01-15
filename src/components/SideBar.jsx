import React, { useEffect, useState } from "react";
import "../styles/SideBar.css";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
const SideBar = () => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();
  const [account, setAccount] = useState({});
  const location = useLocation();
  console.log(location.pathname);

  const handleNavigation = (page) => {
    if (page === "overviewaccount") {
      navigate("/overviewaccount");
    } else if (page === "reportstable") {
      navigate("/reportstable");
    } else if (page === "payment") {
      navigate("/payment");
    } else if (page === "mainnavigation") {
      navigate("/mainnavigation");
    } else {
      navigate("/"); // Default to home
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
    fetchAccount();
  }, []);
  return (
    <div className="sidebarmaincontainer">
      <div
        className={`sidebar ${isHovered ? "sidebar-expanded" : ""}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          className=""
          style={{
            width: "100%",
            paddingLeft: "30px",
            paddingTop: "20px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <img
            alt="Meta"
            className="img"
            height="28"
            width="28"
            src="https://static.xx.fbcdn.net/rsrc.php/yb/r/CnOoIyhtLSO.svg"
          />
          {isHovered && (
            <span>
              <h2 style={{ marginLeft: "2px" }}>Meta</h2>
            </span>
          )}
        </div>

        <div className="" style={{ width: "100%" }}>
          {isHovered && (
            <span style={{ marginLeft: "20px" }}>
              <h1 style={{ fontSize: "23px", paddingLeft: "25px" }}>
                Ads Manager
              </h1>
            </span>
          )}
        </div>

        <ul className="menu">
          <li>
            <div
              className="letbordchange"
              style={
                isHovered
                  ? {
                      display: "flex",
                      alignItems: "center",
                      border: "1px solid #f3f3f3",
                      width: "100%",
                      padding: "5px",
                      borderRadius: "5px",
                    }
                  : { display: "flex", alignItems: "center" }
              }
            >
              <img
                style={{ borderRadius: "5px", width: "28px", height: "28px" }}
                alt="Meta"
                className="sssssimg"
                height="28"
                width="28"
                src={account?.mainAccountImage}
              />
              {isHovered && (
                <>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",

                      width: "100%",
                    }}
                  >
                    <span
                      style={{
                        marginLeft: "20px",
                        fontWeight: "bold",
                        color: "gray",
                        fontSize: "13px",
                      }}
                    >
                      {account?.mainAccountname}
                    </span>
                    <div
                      style={{
                        display: "flex",
                        alignSelf: "center",
                        placeSelf: "center",
                        justifySelf: "flex-end",
                        width: "1005",
                      }}
                      className="x3nfvp2 x120ccyz x4s1yf2"
                      role="presentation"
                    >
                      <div
                        className="xtwfq29 style-NEN4Q"
                        id="style-NEN4Q"
                      ></div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </li>

          <li
            onClick={() => handleNavigation("overviewaccount")}
            style={
              location.pathname === "/overviewaccount"
                ? { textDecoration: "none", backgroundColor: "#C3DCF5" }
                : { textDecoration: "none" }
            }
          >
            <div className="x78zum5 x1n2onr6 x2lah0s x6s0dn4 xl56j7k xvy4d1p xxk0z11">
              <div class="x3nfvp2 snipcss0-13-34-35">
                <i
                  class="x1u8cyq xkqsfgs x1vbbgbo x96ww5j xlzl7h3 img snipcss0-14-35-36 style-rGsHN"
                  alt=""
                  data-visualcompletion="css-img"
                  id="style-rGsHN"
                ></i>
              </div>
              <div className="x13dflua xxziih7 x12w9bfk x10l6tqk x1fo6t33 xoo4vsp x78zum5 x6s0dn4 x11xpdln x3oybdh"></div>
            </div>
            {isHovered && (
              <span style={{ marginLeft: "20px" }}>
                <div
                  className="x1xqt7ti x1uxerd5 xrohxju xbsr9hj xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj x1fcty0u xeuugli"
                  id="js_h"
                >
                  Account overview
                </div>
              </span>
            )}
          </li>

          <li
            onClick={() => handleNavigation("")}
            style={
              location.pathname === "/" ||
              location.pathname.startsWith("/editcampaing/") ||
              location.pathname.startsWith("/editcampaingtwo/") ||
              location.pathname.startsWith("/editcampaingthree/")
                ? { textDecoration: "none", backgroundColor: "#C3DCF5" }
                : { textDecoration: "none" }
            }
          >
            {location.pathname === "/" ||
            location.pathname.startsWith("/editcampaing/") ||
            location.pathname.startsWith("/editcampaingtwo/") ||
            location.pathname.startsWith("/editcampaingthree/") ? (
              <div class="x78zum5 x1n2onr6 x2lah0s x6s0dn4 xl56j7k x1qsmy5i xvy4d1p xxk0z11">
                <div class="x78zum5 x1n2onr6 x2lah0s x6s0dn4 xl56j7k x1qsmy5i xvy4d1p xxk0z11">
                  <div class="x3nfvp2">
                    <i
                      alt=""
                      data-visualcompletion="css-img"
                      class="img style-MzxFR"
                      id="style-MzxFR"
                    ></i>
                  </div>
                </div>
              </div>
            ) : (
              <div class="">
                <div class="x78zum5 x1n2onr6 x2lah0s x6s0dn4 xl56j7k xvy4d1p xxk0z11">
                  <div class="x3nfvp2 snipcss0-13-60-61">
                    <i
                      alt=""
                      data-visualcompletion="css-img"
                      class="img snipcss0-14-61-62 style-i5ycv"
                      id="style-i5ycv"
                    ></i>
                  </div>
                </div>
              </div>
            )}

            {isHovered && (
              <span style={{ marginLeft: "20px" }}>
                <div
                  className="x1xqt7ti x1uxerd5 xrohxju xbsr9hj xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj x1fcty0u xeuugli"
                  id="js_h"
                  style={
                    location.pathname === "/" ||
                    location.pathname.startsWith("/editcampaing/") ||
                    location.pathname.startsWith("/editcampaingtwo/") ||
                    location.pathname.startsWith("/editcampaingthree/")
                      ? {
                          textDecoration: "none",
                          color: "#0866ff",
                        }
                      : { textDecoration: "none" }
                  }
                >
                  Campaigns
                </div>
              </span>
            )}
          </li>

          <li
            onClick={() => handleNavigation("reportstable")}
            style={
              location.pathname === "/reportstable" ||
              location.pathname === "/reporting"
                ? { textDecoration: "none", backgroundColor: "#C3DCF5" }
                : { textDecoration: "none" }
            }
          >
            {location.pathname === "/reportstable" ||
            location.pathname === "/reporting" ? (
              <div class="">
                <div class="x3nfvp2 snipcss0-13-77-78">
                  <i
                    alt=""
                    data-visualcompletion="css-img"
                    class="img snipcss0-14-78-79 style-5verv"
                    id="style-5verv"
                  ></i>
                </div>
              </div>
            ) : (
              <div className="x78zum5 x1n2onr6 x2lah0s x6s0dn4 xl56j7k xvy4d1p xxk0z11">
                <div class="x78zum5 x1n2onr6 x2lah0s x6s0dn4 xl56j7k xvy4d1p xxk0z11">
                  <div class="x3nfvp2">
                    <i
                      alt=""
                      data-visualcompletion="css-img"
                      class="img style-br2oS"
                      id="style-br2oS"
                    ></i>
                  </div>
                </div>
              </div>
            )}

            {isHovered && (
              <span style={{ marginLeft: "20px" }}>
                <div
                  className="x1xqt7ti x1uxerd5 xrohxju xbsr9hj xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj x1fcty0u xeuugli"
                  id="js_h"
                  style={
                    location.pathname === "/reportstable"
                      ? {
                          textDecoration: "none",
                          color: "#0866ff",
                        }
                      : { textDecoration: "none" }
                  }
                >
                  Ads Reporting
                </div>
              </span>
            )}
          </li>

          <li>
            <div className="x78zum5 x1n2onr6 x2lah0s x6s0dn4 xl56j7k xvy4d1p xxk0z11">
              <div class="x3nfvp2 snipcss0-13-94-95">
                <i
                  alt=""
                  data-visualcompletion="css-img"
                  class="img snipcss0-14-95-96 style-omPfP"
                  id="style-omPfP"
                ></i>
              </div>
            </div>
            {isHovered && (
              <span style={{ marginLeft: "20px" }}>
                <div
                  className="x1xqt7ti x1uxerd5 xrohxju xbsr9hj xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj x1fcty0u xeuugli"
                  id="js_h"
                >
                  Audience
                </div>
              </span>
            )}
          </li>

          <li
            onClick={() => handleNavigation("payment")}
            style={
              location.pathname === "/payment"
                ? { textDecoration: "none", backgroundColor: "#C3DCF5" }
                : { textDecoration: "none" }
            }
          >
            {location.pathname === "/payment" ? (
              <div class="">
                <div class="">
                  <div class="x3nfvp2">
                    <i
                      alt=""
                      data-visualcompletion="css-img"
                      class="img sp_BCSohYmDE5w sx_4fb158"
                    ></i>
                  </div>
                </div>
              </div>
            ) : (
              <div className="x78zum5 x1n2onr6 x2lah0s x6s0dn4 xl56j7k xvy4d1p xxk0z11">
                <div class="x3nfvp2 snipcss0-13-111-112">
                  <i
                    alt=""
                    data-visualcompletion="css-img"
                    class="img snipcss0-14-112-113 style-areyy"
                    id="style-areyy"
                  ></i>
                </div>
              </div>
            )}

            {isHovered && (
              <span style={{ marginLeft: "20px" }}>
                <div
                  className="x1xqt7ti x1uxerd5 xrohxju xbsr9hj xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj x1fcty0u xeuugli"
                  id="js_h"
                  style={
                    location.pathname === "/payment"
                      ? {
                          textDecoration: "none",
                          color: "#0866ff",
                        }
                      : { textDecoration: "none" }
                  }
                >
                  Billing & payment
                </div>
              </span>
            )}
          </li>

          <li>
            <div className="x78zum5 x1n2onr6 x2lah0s x6s0dn4 xl56j7k xvy4d1p xxk0z11">
              <div class="x3nfvp2 snipcss0-13-128-129">
                <i
                  alt=""
                  data-visualcompletion="css-img"
                  class="img snipcss0-14-129-130 style-H7fkD"
                  id="style-H7fkD"
                ></i>
              </div>
            </div>
            {isHovered && (
              <span style={{ marginLeft: "20px" }}>
                <div
                  className="x1xqt7ti x1uxerd5 xrohxju xbsr9hj xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj x1fcty0u xeuugli"
                  id="js_h"
                >
                  Advertising settings
                </div>
              </span>
            )}
          </li>
          <li>
            <div className="">
              <div className="x78zum5 x1iyjqo2">
                <div className="">
                  <div className="">
                    <div class="x3nfvp2 snipcss0-13-145-146">
                      <i
                        alt=""
                        data-visualcompletion="css-img"
                        class="img snipcss0-14-146-147 style-QOcq4"
                        id="style-QOcq4"
                      ></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {isHovered && (
              <span style={{ marginLeft: "20px" }}>
                <div
                  className="x1xqt7ti x1uxerd5 xrohxju xbsr9hj xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj x1fcty0u xeuugli"
                  id="js_h"
                >
                  Event Manager
                </div>
              </span>
            )}
          </li>
          <li>
            <div className="">
              <div class="x3nfvp2 snipcss0-12-161-162">
                <i
                  alt=""
                  data-visualcompletion="css-img"
                  class="img snipcss0-13-162-163 style-ov9Hg"
                  id="style-ov9Hg"
                ></i>
              </div>
            </div>

            {isHovered && (
              <span style={{ marginLeft: "20px" }}>
                <div
                  className="x1xqt7ti x1uxerd5 xrohxju xbsr9hj xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj x1fcty0u xeuugli"
                  id="js_h"
                >
                  All Tools
                </div>
              </span>
            )}
          </li>
          <li>
            <div class="x78zum5 xl56j7k xfex06f ">
              <i
                alt=""
                data-visualcompletion="css-img"
                class="img style-NZj9P"
                id="style-NZj9P"
              ></i>
            </div>

            {isHovered && (
              <span style={{ marginLeft: "20px" }}>
                <div
                  className="x1xqt7ti x1uxerd5 xrohxju xbsr9hj xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj x1fcty0u xeuugli"
                  id="js_h"
                >
                  Help
                </div>
              </span>
            )}
          </li>
        </ul>
        <hr className="divider" />
        <div className="bottom-icons">
          <div className="search-icon">
            <div
              class="xtwfq29 snipcss0-14-214-215 style-ImhVV"
              id="style-ImhVV"
            ></div>
          </div>
          <div className="search-icon">
            <div class="x3nfvp2 x2lah0s x1c4vz4f">
              <i
                alt=""
                data-visualcompletion="css-img"
                class="img style-XWq7o"
                id="style-XWq7o"
              ></i>
            </div>
            ​
          </div>
          <div className="search-icon">
            <div className="">
              <i
                aria-hidden="true"
                className="_271o img style-ZBf6z"
                alt=""
                data-visualcompletion="css-img"
                id="style-ZBf6z"
              ></i>
            </div>
          </div>

          <div className="search-icon">
            <div
              class="xtwfq29 snipcss0-12-247-248 style-xNxlU"
              id="style-xNxlU"
            ></div>
          </div>

          <div className="search-icon">
            <div
              onClick={() => handleNavigation("mainnavigation")}
              className=""
            >
              <div class="x3nfvp2 x2lah0s x1c4vz4f snipcss0-10-254-255">
                <i
                  alt=""
                  data-visualcompletion="css-img"
                  class="img snipcss0-11-255-256 style-zVbk5"
                  id="style-zVbk5"
                ></i>
              </div>
              ​ ​
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;

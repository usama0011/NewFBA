import React, { useEffect, useState } from "react";
import "../styles/ReportsTable.css";
import SideBar from "../components/SideBar";
import { useNavigate } from "react-router-dom";
const ReportsTable = () => {
  const [isLoading, setIsLoading] = useState(true); // State for managing loading screen

  const navigation = useNavigate();
  const handleViewReport = () => {
    navigation("/reporting");
  };
  useEffect(() => {
    // Simulate a loading delay of 5 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4000);

    return () => clearTimeout(timer); // Cleanup timer on component unmount
  }, []);
  // Styles
  const loadingDivStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    flexDirection: "column",
    backgroundImage: "linear-gradient(to top, #e6effb, #e9f5ef, #f6eef5)",
  };

  const spinnerStyle = {
    width: "25px", // Half of the original 50px width
    height: "25px", // Adjust height proportionally to maintain the circular shape
    border: "5px solid #f3f3f3", // Light gray border
    borderTop: "5px solid #3498db", // Blue spinner
    borderRadius: "50%",
    animation: "spin 1s linear infinite",
  };

  const welcomeTextStyle = {
    marginBottom: "20px",
    fontSize: "18px",
    color: "#333", // Dark gray for readability
    fontWeight: "bold",
    textAlign: "center",
  };

  // Spinner animation
  const spinnerAnimationStyle = `
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

  // Inject spinner animation style into the document
  const styleSheet = document.createElement("style");
  styleSheet.type = "text/css";
  styleSheet.innerText = spinnerAnimationStyle;
  document.head.appendChild(styleSheet);

  if (isLoading) {
    // Loading screen
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          backgroundImage: "linear-gradient(180deg, #f8e9ef, #dbe9fa)",
        }}
      >
        <h5 style={welcomeTextStyle}>Welcome to the Ads Manager Account</h5>
        <div style={spinnerStyle}></div>
        <div
          style={{ display: "flex", alignItems: "center", marginTop: "30px" }}
        >
          <img
            style={{ width: "40px", height: "40px" }}
            src="https://static.xx.fbcdn.net/rsrc.php/yb/r/CnOoIyhtLSO.svg"
            alt=""
          />{" "}
          <h2 style={{ fontSize: "26px", marginLeft: "10px" }}>Meta</h2>
        </div>
      </div>
    );
  }

  return (
    <div
      className="lybhaigradiet"
      style={{ display: "flex", overflowX: "hidden" }}
    >
      <div>
        <SideBar />
      </div>

      <div
        style={{ marginLeft: "100px", marginTop: "30px" }}
        class="x78zum5 x2lwn1j xeuugli x5yr21d x1n2onr6 x1vjfegm snipcss-JKX2z"
      >
        <div class="x78zum5 x2lwn1j xeuugli xqcrz7y xq8finb">
          <div class="xnq0rdo x65caj5 x1lq5wgf xgqcy7u x30kzoy x9jhf4c x6ikm8r x10wlt62">
            <div class="x1gzqxud x13dflua xxziih7 x12w9bfk xavht8x x6ikm8r x10wlt62 x1h533et x9f619 xxrbq2n x87ps6o x78zum5 xdt5ytf x2lah0s x1y1aw1k xwib8y2 x5yr21d">
              <div class="xb57i2i x1q594ok x5lxg6s x78zum5 xdt5ytf x6ikm8r x1ja2u2z x1pq812k x1rohswg xfk6m8 x1yqm8si xjx87ck xx8ngbg xwo3gff x1n2onr6 x1oyok0e x1odjw0f x1e4zzel x5yr21d">
                <div class="x78zum5 xdt5ytf x1iyjqo2 x1n2onr6">
                  <div class="x1kxxb1g">
                    <nav aria-label="section" class="xavht8x">
                      <div
                        class="x78zum5 xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r xexx8yu x4uap5 x18d9i69 xkhd6sd xdt5ytf xdm93yi"
                        role="list"
                      >
                        <div
                          class="x1n2onr6 x3oybdh"
                          role="listitem"
                          aria-current="page"
                        >
                          <div class="x10l6tqk x8knxv4 x3nfvp2 x1iyjqo2 x2lah0s x17qophe xds687c x13vifvy x1ey2m1c xurb0ha x1sxyh0">
                            <div
                              aria-labelledby="js_17"
                              class="x1i10hfl x1qjc9v5 xjbqb8w xjqpnuy xa49m3k xqeqjp1 x2hbi6w x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk x78zum5 xdl72j9 xdt5ytf x2lah0s xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli xexx8yu x4uap5 x18d9i69 xkhd6sd x1n2onr6 x16tdsg8 x1hl2dhg xggy1nq x1ja2u2z x1t137rt x1iyjqo2"
                              role="button"
                              tabindex="0"
                            >
                              <div class="x78zum5 x1iyjqo2">
                                <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1lcm9me x1yr5g0i xrt01vj x10y3i5r x1y1aw1k xwib8y2 xurb0ha x1sxyh0 xo1l8bm xbsr9hj x1k4ywey">
                                  <div class="x78zum5 x1n2onr6 x2lah0s x6s0dn4 xl56j7k x1qsmy5i xvy4d1p xxk0z11">
                                    <div class="x3nfvp2">
                                      <i
                                        alt=""
                                        data-visualcompletion="css-img"
                                        class="img style-ZZqoF"
                                        id="style-ZZqoF"
                                      ></i>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="x47corl x7elk82 x1779cjh xh6r515 x1vf8kge xurb0ha x1sxyh0 x9f619 x6ikm8r x10wlt62 x1h533et">
                            <div class="x78zum5 x1iyjqo2" role="listitem">
                              <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 xeuugli x1iyjqo2 x19lwn94 x1lcm9me x1yr5g0i xrt01vj x10y3i5r x1y1aw1k xwib8y2 xurb0ha x1sxyh0 x1xlr1w8 x1qsmy5i x13dflua xxziih7 x12w9bfk x19991ni x1hc1fzr xjbqb8w xjwf9q1">
                                <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94">
                                  <div class="x1rg5ohu x2lah0s xvy4d1p xxk0z11"></div>
                                  <div class="xeuugli">
                                    <div
                                      class="x1xqt7ti x1uxerd5 xrohxju x1heor9g xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj x117nqv4 xeuugli x1uvtmcs"
                                      id="js_17"
                                    >
                                      Reports
                                    </div>
                                  </div>
                                </div>
                                <div class="x6s0dn4 x3nfvp2 x1q0g3np xozqiw3 x2lwn1j xeuugli x1c4vz4f x19lwn94 x2lah0s"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="x1n2onr6 x3oybdh" role="listitem">
                          <div class="x10l6tqk x8knxv4 x3nfvp2 x1iyjqo2 x2lah0s x17qophe xds687c x13vifvy x1ey2m1c xurb0ha x1sxyh0">
                            <div
                              aria-labelledby="js_4a"
                              class="x1i10hfl x1qjc9v5 xjbqb8w xjqpnuy xa49m3k xqeqjp1 x2hbi6w x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk x78zum5 xdl72j9 xdt5ytf x2lah0s xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli xexx8yu x4uap5 x18d9i69 xkhd6sd x1n2onr6 x16tdsg8 x1hl2dhg xggy1nq x1ja2u2z x1t137rt x1iyjqo2"
                              role="button"
                              tabindex="0"
                              id="js_7r"
                            >
                              <div class="x78zum5 x1iyjqo2">
                                <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1lcm9me x1yr5g0i xrt01vj x10y3i5r x1y1aw1k xwib8y2 xurb0ha x1sxyh0 xo1l8bm xbsr9hj x1v911su">
                                  <div class="x78zum5 x1n2onr6 x2lah0s x6s0dn4 xl56j7k xvy4d1p xxk0z11">
                                    <div class="x3nfvp2">
                                      <i
                                        alt=""
                                        data-visualcompletion="css-img"
                                        class="img style-EtsHj"
                                        id="style-EtsHj"
                                      ></i>
                                    </div>
                                    <div class="x13dflua xxziih7 x12w9bfk x10l6tqk x1fo6t33 xoo4vsp x78zum5 x6s0dn4 x11xpdln x1f85oc2">
                                      <span class="x3nfvp2 xmix8c7 x1n2onr6">
                                        <span class="x6s0dn4 x9f619 x78zum5 xmix8c7 xl56j7k x16xo4sp x1t137rt x1j85h84 xsyo7zv x16hj40l x4p5aij x1n2onr6 xzolkzo x12go9s9 x1rnf11y xprq8jg xgs2jjv xwhidic x11pcw5s xxu1cx1 x1ip7gdl xmi5d70 xw23nyj x63nzvj x140t73q xuxw1ft x2b8uid x117nqv4">
                                          <div class="xmi5d70 xw23nyj x63nzvj x1heor9g xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj x1pd3egz xeuugli x1uvtmcs">
                                            53
                                          </div>
                                        </span>
                                        <div
                                          aria-atomic="true"
                                          aria-live="polite"
                                          role="status"
                                          class="x1qvwoe0 xjm9jq1 x1y332i5 xcwd3tp x1jyxor1 x39eecv x6ikm8r x10wlt62 x10l6tqk xuxw1ft x1i1rx1s"
                                          data-sscoverage-ignore="true"
                                        >
                                          Personalised insights
                                        </div>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="x47corl x7elk82 x1779cjh xh6r515 x1vf8kge xurb0ha x1sxyh0 x9f619 x6ikm8r x10wlt62 x1h533et">
                            <div class="x78zum5 x1iyjqo2" role="listitem">
                              <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 xeuugli x1iyjqo2 x19lwn94 x1lcm9me x1yr5g0i xrt01vj x10y3i5r x1y1aw1k xwib8y2 xurb0ha x1sxyh0 x1xlr1w8 x1qsmy5i x13dflua xxziih7 x12w9bfk x19991ni x1hc1fzr xjbqb8w xjwf9q1">
                                <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94">
                                  <div class="x1rg5ohu x2lah0s xvy4d1p xxk0z11"></div>
                                  <div class="xeuugli">
                                    <div
                                      class="x1xqt7ti x1uxerd5 xrohxju xbsr9hj xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj x1fcty0u xeuugli x1uvtmcs"
                                      id="js_4a"
                                    >
                                      Personalised insights
                                    </div>
                                  </div>
                                </div>
                                <div class="x6s0dn4 x3nfvp2 x1q0g3np xozqiw3 x2lwn1j xeuugli x1c4vz4f x19lwn94 x2lah0s">
                                  <span class="x3nfvp2 xmix8c7 x1n2onr6">
                                    <span class="x6s0dn4 x9f619 x78zum5 xmix8c7 xl56j7k x16xo4sp x1t137rt x1j85h84 xsyo7zv x16hj40l x4p5aij x1n2onr6 xzolkzo x12go9s9 x1rnf11y xprq8jg xgs2jjv xwhidic x11pcw5s xxu1cx1 x1ip7gdl xmi5d70 xw23nyj x63nzvj x140t73q xuxw1ft x2b8uid x117nqv4">
                                      <div class="xmi5d70 xw23nyj x63nzvj x1heor9g xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj x1pd3egz xeuugli x1uvtmcs">
                                        53
                                      </div>
                                    </span>
                                    <div
                                      aria-atomic="true"
                                      aria-live="polite"
                                      role="status"
                                      class="x1qvwoe0 xjm9jq1 x1y332i5 xcwd3tp x1jyxor1 x39eecv x6ikm8r x10wlt62 x10l6tqk xuxw1ft x1i1rx1s"
                                      data-sscoverage-ignore="true"
                                    >
                                      Personalised insights
                                    </div>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="x1n2onr6 x3oybdh" role="listitem">
                          <div class="x10l6tqk x8knxv4 x3nfvp2 x1iyjqo2 x2lah0s x17qophe xds687c x13vifvy x1ey2m1c xurb0ha x1sxyh0">
                            <div
                              aria-labelledby="js_19"
                              class="x1i10hfl x1qjc9v5 xjbqb8w xjqpnuy xa49m3k xqeqjp1 x2hbi6w x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk x78zum5 xdl72j9 xdt5ytf x2lah0s xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli xexx8yu x4uap5 x18d9i69 xkhd6sd x1n2onr6 x16tdsg8 x1hl2dhg xggy1nq x1ja2u2z x1t137rt x1iyjqo2"
                              role="button"
                              tabindex="0"
                            >
                              <div class="x78zum5 x1iyjqo2">
                                <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1lcm9me x1yr5g0i xrt01vj x10y3i5r x1y1aw1k xwib8y2 xurb0ha x1sxyh0 xo1l8bm xbsr9hj x1v911su">
                                  <div class="x78zum5 x1n2onr6 x2lah0s x6s0dn4 xl56j7k xvy4d1p xxk0z11">
                                    <div class="x3nfvp2">
                                      <i
                                        alt=""
                                        data-visualcompletion="css-img"
                                        class="img style-761p4"
                                        id="style-761p4"
                                      ></i>
                                    </div>
                                    <div class="x13dflua xxziih7 x12w9bfk x10l6tqk x1fo6t33 xoo4vsp x78zum5 x6s0dn4 x11xpdln x1f85oc2"></div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="x47corl x7elk82 x1779cjh xh6r515 x1vf8kge xurb0ha x1sxyh0 x9f619 x6ikm8r x10wlt62 x1h533et">
                            <div class="x78zum5 x1iyjqo2" role="listitem">
                              <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 xeuugli x1iyjqo2 x19lwn94 x1lcm9me x1yr5g0i xrt01vj x10y3i5r x1y1aw1k xwib8y2 xurb0ha x1sxyh0 x1xlr1w8 x1qsmy5i x13dflua xxziih7 x12w9bfk x19991ni x1hc1fzr xjbqb8w xjwf9q1">
                                <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94">
                                  <div class="x1rg5ohu x2lah0s xvy4d1p xxk0z11"></div>
                                  <div class="xeuugli">
                                    <div
                                      class="x1xqt7ti x1uxerd5 xrohxju xbsr9hj xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj x1fcty0u xeuugli x1uvtmcs"
                                      id="js_19"
                                    >
                                      Exports
                                    </div>
                                  </div>
                                </div>
                                <div class="x6s0dn4 x3nfvp2 x1q0g3np xozqiw3 x2lwn1j xeuugli x1c4vz4f x19lwn94 x2lah0s"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </nav>
                  </div>
                </div>
                <div
                  class="x14nfmen x1s85apg x5yr21d xds687c xg01cxk x10l6tqk x13vifvy x1wsgiic x19991ni xwji4o3 x1kky2od x1sd63oq style-n9yaQ"
                  data-visualcompletion="ignore"
                  data-thumb="1"
                  data-interactable="|mousedown|"
                  id="style-n9yaQ"
                ></div>
                <div
                  class="x9f619 x1s85apg xds687c xg01cxk xexx8yu x18d9i69 x1e558r4 x150jy0e x47corl x10l6tqk x13vifvy x1n4smgl x1d8287x x19991ni xwji4o3 x1kky2od style-lJtIP"
                  data-visualcompletion="ignore"
                  data-thumb="1"
                  id="style-lJtIP"
                >
                  <div class="x1hwfnsy x1lcm9me x1yr5g0i xrt01vj x10y3i5r x5yr21d xh8yej3"></div>
                </div>
              </div>
              <div>
                <div class="xurb0ha x1sxyh0">
                  <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x13a6bvl">
                    <div class="x3nfvp2 x193iq5w xxymvpz" role="none">
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
                              Collapse
                            </div>
                            <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1hc1fzr x13dflua x6o7n8i xxziih7 x12w9bfk xl56j7k xh8yej3">
                              <div class="x3nfvp2 x2lah0s x1c4vz4f">
                                <i
                                  alt=""
                                  data-visualcompletion="css-img"
                                  class="img style-ZvWp4"
                                  id="style-ZvWp4"
                                ></i>
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
            </div>
          </div>
          <div>
            <div data-visualcompletion="ignore" class=""></div>
          </div>
        </div>
        <div class="x78zum5 xdt5ytf x2lwn1j xeuugli x1iyjqo2 x1emribx">
          <div class="x1e56ztr">
            <div
              class="x1gzqxud x1lcm9me x1yr5g0i xrt01vj x10y3i5r xhgxa4x xy5ysw6 x1qkj6lk xn3walq xnvurfn xv1ta3e x1opv7go x1dtnpoi xibdhds xtnng9g xhvrwov x13k1m86 xwx4but x1cpjm7i xszcg87 x1hmns74 xkk1bqk x14d4353 xsxiz9q x1rmj1tg xchklzq x9f619 xc8icb0 x1n2onr6 x1pvq41x xhhp2wi x14q35kh x1wa3ocq x1n7iyjn x1s928wv x1wsn0xg x1j6awrg x162n7g1 x1m1drc7 x4eaejv xi4xitw x5yr21d xh8yej3"
              data-auto-logging-component-type="GeoCard"
            >
              <div class="x78zum5 xdt5ytf x5yr21d xedcshv x1t2pt76 xh8yej3">
                <div class="x9f619 x78zum5 x1iyjqo2 x5yr21d x2lwn1j x1n2onr6 xh8yej3">
                  <div class="xw2csxc x1odjw0f xh8yej3 x18d9i69">
                    <div class="xjm9jq1 xg01cxk x47corl xh8yej3 x1jyxor1"></div>
                    <div>
                      <div
                        class="_90__ _8dtr _9ikp"
                        role="search"
                        tabindex="-1"
                      >
                        <div class="_4u-c _8dts">
                          <div class="_75w7 style-JdSSh" id="style-JdSSh">
                            <i
                              alt=""
                              data-visualcompletion="css-img"
                              class="img style-wn5r6"
                              id="style-wn5r6"
                            ></i>
                          </div>
                          <div class="_8dtc">
                            <div class="_765v"></div>
                            <div class="_4u-c _8dtd">
                              <div>
                                <span
                                  class="_75wa _765u _58ah"
                                  placeholder="Search and filter"
                                  autocomplete="off"
                                  autocorrect="off"
                                >
                                  <label class="_58ak _3ct8" id="js_1j">
                                    <input
                                      class="_58al"
                                      aria-autocomplete="list"
                                      aria-controls="js_1c"
                                      aria-haspopup="listbox"
                                      aria-expanded="false"
                                      role="combobox"
                                      placeholder="Search and filter"
                                      autocomplete="off"
                                      autocorrect="off"
                                      type="text"
                                      value=""
                                    />
                                  </label>
                                </span>
                              </div>
                            </div>
                          </div>
                          <div class="_8dte"></div>
                          <div class="_4u-c _765w"></div>
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
          <div class="_4u-c x5yr21d xh8yej3">
            <div
              style={{ height: "99%" }}
              class="x1gzqxud x1lcm9me x1yr5g0i xrt01vj x10y3i5r xhgxa4x xy5ysw6 x1qkj6lk xn3walq xnvurfn xv1ta3e x1opv7go x1dtnpoi xibdhds xtnng9g xhvrwov x13k1m86 xwx4but x1cpjm7i xszcg87 x1hmns74 xkk1bqk x14d4353 xsxiz9q x1rmj1tg xchklzq x9f619 xc8icb0 x1n2onr6 x1pvq41x xhhp2wi x14q35kh x1wa3ocq x1n7iyjn x1s928wv x1wsn0xg x1j6awrg x162n7g1 x1m1drc7 x4eaejv xi4xitw xh8yej3 xt7dq6l"
              data-auto-logging-component-type="GeoCard"
            >
              <div class="x78zum5 xdt5ytf x5yr21d xedcshv x1t2pt76 xh8yej3">
                <div class="x9f619 x78zum5 x1iyjqo2 x5yr21d x2lwn1j x1n2onr6 xh8yej3">
                  <div class="xw2csxc x1odjw0f xh8yej3 x18d9i69">
                    <div class="xjm9jq1 xg01cxk x47corl xh8yej3 x1jyxor1"></div>
                    <div class="x1y1aw1k xn6708d xwib8y2 x1ye3gou">
                      <div
                        class="x6s0dn4 x78zum5 x1nhvcw1 x19lwn94"
                        role="toolbar"
                        data-auto-logging-component-type="GeoToolBar"
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
                                      class="img style-Plhoy"
                                      id="style-Plhoy"
                                    ></i>
                                  </div>
                                  <div class="x1xqt7ti x1fvot60 xk50ysn xxio538 x1heor9g xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj xeuugli x1uvtmcs">
                                    Create Report
                                  </div>
                                </div>
                              </div>
                            </span>
                          </div>
                        </div>
                        <div class="x1iyjqo2 xs83m0k xdl72j9"></div>
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
                                      class="xtwfq29 style-CwxdT"
                                      id="style-CwxdT"
                                    ></div>
                                  </div>
                                  <div class="x1xqt7ti x1fvot60 xk50ysn xxio538 x1heor9g xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj xeuugli x1uvtmcs">
                                    Export History
                                  </div>
                                </div>
                              </div>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="x178xt8z x13fuv20 x1tped1n">
                      <div class="_9fzf">
                        <div class="_3vo_ style-3syEv" id="style-3syEv">
                          <div
                            class="ReactVirtualized__Grid _1n5g style-Tvn5e"
                            id="style-Tvn5e"
                          >
                            <div
                              class="ReactVirtualized__Grid__innerScrollContainer style-FpwoG"
                              id="style-FpwoG"
                            >
                              <div class="_2e42 style-k6AKR" id="style-k6AKR">
                                <div
                                  class="_68tl _8-qx style-l2iqo"
                                  id="style-l2iqo"
                                >
                                  <div
                                    class="_2eqm style-NiSco"
                                    id="style-NiSco"
                                  >
                                    <div class="_2eqm _3qn7 _61-1 _2fyi _3qng">
                                      <div>
                                        <div class="_ag27">
                                          <input
                                            aria-checked="false"
                                            aria-disabled="false"
                                            id="js_1p"
                                            class=""
                                            type="checkbox"
                                            checked=""
                                            data-auto-logging-id="fff755ed1"
                                          />
                                          <div
                                            class="_afh9 style-VwKtj"
                                            id="style-VwKtj"
                                          >
                                            <i
                                              class="_afhg img style-FdRgk"
                                              height="16"
                                              width="16"
                                              alt=""
                                              data-visualcompletion="css-img"
                                              id="style-FdRgk"
                                            ></i>
                                          </div>
                                        </div>
                                        <label
                                          class="accessible_elem"
                                          for="js_1p"
                                        >
                                          <span
                                            id="style-OtF1y"
                                            class="style-OtF1y"
                                          >
                                            Select row
                                          </span>
                                        </label>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="_2e42 style-gNJmx" id="style-gNJmx">
                                <div>
                                  <div
                                    class="_68tl style-MADHo"
                                    id="style-MADHo"
                                  >
                                    <div id="style-zikLR" class="style-zikLR">
                                      <div
                                        class="_3qn7 _61-1 _2fyh _3qnf style-onKRP"
                                        id="style-onKRP"
                                      >
                                        <div
                                          class="_5wrf _13b6 style-cMTMc"
                                          role="button"
                                          id="style-cMTMc"
                                        >
                                          <div class="_3qn7 _61-0 _2fyi _3qng">
                                            <div
                                              class="_73y0 uiScrollableArea fade uiScrollableAreaWithShadow"
                                              data-interactable="|mousedown||mouseover|"
                                            >
                                              <div
                                                class="uiScrollableAreaWrap scrollable style-EwiwS"
                                                id="js_22"
                                              >
                                                <div
                                                  class="uiScrollableAreaBody style-Wy43N"
                                                  id="style-Wy43N"
                                                >
                                                  <div class="uiScrollableAreaContent"></div>
                                                </div>
                                              </div>
                                              <div
                                                class="uiScrollableAreaTrack hidden_elem"
                                                data-interactable="|click|"
                                              >
                                                <div class="uiScrollableAreaGripper hidden_elem"></div>
                                              </div>
                                            </div>
                                            <div class="_73y1 _76uv">
                                              <span
                                                class=" _73x-"
                                                role="button"
                                                tabindex="0"
                                              >
                                                <div
                                                  data-hover="tooltip"
                                                  class="_4ik4 _4ik5 style-ZzTQw"
                                                  id="style-ZzTQw"
                                                >
                                                  Report name
                                                </div>
                                              </span>
                                              <div
                                                id="style-48mKb"
                                                class="style-48mKb"
                                              >
                                                <div
                                                  aria-label="Ascending sort order"
                                                  class="_73y2 style-SMtwz"
                                                  aria-controls="js_1r"
                                                  data-testid="SUIAbstractMenu/button"
                                                  errortooltipposition="above"
                                                  theme="[object Object]"
                                                  use="default"
                                                  width="auto"
                                                  id="style-SMtwz"
                                                >
                                                  <i
                                                    alt=""
                                                    data-visualcompletion="css-img"
                                                    class="img style-XPePn"
                                                    id="style-XPePn"
                                                  ></i>
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
                              <div class="_2e42 style-6oQYI" id="style-6oQYI">
                                <div>
                                  <div
                                    class="_68tl style-5mNFF"
                                    id="style-5mNFF"
                                  >
                                    <div id="style-JnpVp" class="style-JnpVp">
                                      <div
                                        class="_3qn7 _61-1 _2fyh _3qnf style-4l23L"
                                        id="style-4l23L"
                                      >
                                        <div
                                          class="_5wrf _13b6 style-6GoLZ"
                                          role="button"
                                          id="style-6GoLZ"
                                        >
                                          <div class="_3qn7 _61-0 _2fyi _3qng">
                                            <div
                                              class="_73y0 uiScrollableArea fade uiScrollableAreaWithShadow"
                                              data-interactable="|mousedown||mouseover|"
                                            >
                                              <div
                                                class="uiScrollableAreaWrap scrollable style-nzK3b"
                                                id="js_23"
                                              >
                                                <div
                                                  class="uiScrollableAreaBody style-t7JSW"
                                                  id="style-t7JSW"
                                                >
                                                  <div class="uiScrollableAreaContent"></div>
                                                </div>
                                              </div>
                                              <div
                                                class="uiScrollableAreaTrack hidden_elem"
                                                data-interactable="|click|"
                                              >
                                                <div class="uiScrollableAreaGripper hidden_elem"></div>
                                              </div>
                                            </div>
                                            <div class="_73y1 _76uv">
                                              <span
                                                class=" _73x- _73x_"
                                                role="button"
                                                tabindex="0"
                                              >
                                                <div
                                                  data-hover="tooltip"
                                                  class="_4ik4 _4ik5 style-gqzSe"
                                                  id="style-gqzSe"
                                                >
                                                  Last accessed
                                                </div>
                                              </span>
                                              <div
                                                id="style-lgzhb"
                                                class="style-lgzhb"
                                              >
                                                <div
                                                  aria-label="Descending sort order"
                                                  class="_73y2 style-hm4Ro"
                                                  aria-controls="js_1t"
                                                  data-testid="SUIAbstractMenu/button"
                                                  errortooltipposition="above"
                                                  theme="[object Object]"
                                                  use="default"
                                                  width="auto"
                                                  id="style-hm4Ro"
                                                >
                                                  <i
                                                    alt=""
                                                    data-visualcompletion="css-img"
                                                    class="img style-fREby"
                                                    id="style-fREby"
                                                  ></i>
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
                              <div class="_2e42 style-5oHdj" id="style-5oHdj">
                                <div>
                                  <div
                                    class="_68tl style-ASdTJ"
                                    id="style-ASdTJ"
                                  >
                                    <div id="style-RSJio" class="style-RSJio">
                                      <div
                                        class="_3qn7 _61-1 _2fyh _3qnf style-TiidK"
                                        id="style-TiidK"
                                      >
                                        <div
                                          class="_5wrf _13b6 style-vfIXn"
                                          role="button"
                                          id="style-vfIXn"
                                        >
                                          <div class="_3qn7 _61-0 _2fyi _3qng">
                                            <div
                                              class="_73y0 uiScrollableArea fade uiScrollableAreaWithShadow"
                                              data-interactable="|mousedown||mouseover|"
                                            >
                                              <div
                                                class="uiScrollableAreaWrap scrollable style-aKVBO"
                                                id="js_24"
                                              >
                                                <div
                                                  class="uiScrollableAreaBody style-wNfN1"
                                                  id="style-wNfN1"
                                                >
                                                  <div class="uiScrollableAreaContent"></div>
                                                </div>
                                              </div>
                                              <div
                                                class="uiScrollableAreaTrack hidden_elem"
                                                data-interactable="|click|"
                                              >
                                                <div class="uiScrollableAreaGripper hidden_elem"></div>
                                              </div>
                                            </div>
                                            <div class="_73y1 _76uv">
                                              <span
                                                class=" _73x-"
                                                role="button"
                                                tabindex="0"
                                              >
                                                <div
                                                  data-hover="tooltip"
                                                  class="_4ik4 _4ik5 style-sy1W9"
                                                  id="style-sy1W9"
                                                >
                                                  Edited
                                                </div>
                                              </span>
                                              <div
                                                id="style-oAs9Z"
                                                class="style-oAs9Z"
                                              >
                                                <div
                                                  aria-label="Ascending sort order"
                                                  class="_73y2 style-Vkp3f"
                                                  aria-controls="js_1v"
                                                  data-testid="SUIAbstractMenu/button"
                                                  errortooltipposition="above"
                                                  theme="[object Object]"
                                                  use="default"
                                                  width="auto"
                                                  id="style-Vkp3f"
                                                >
                                                  <i
                                                    alt=""
                                                    data-visualcompletion="css-img"
                                                    class="img style-rwjhJ"
                                                    id="style-rwjhJ"
                                                  ></i>
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
                                class="_2e42 _2yh_ style-O6mkb"
                                id="style-O6mkb"
                              >
                                <div>
                                  <div
                                    class="_68tl style-kU6Dv"
                                    id="style-kU6Dv"
                                  >
                                    <div id="style-hhFda" class="style-hhFda">
                                      <div
                                        class="_3qn7 _61-1 _2fyh _3qnf style-1SAYM"
                                        id="style-1SAYM"
                                      >
                                        <div
                                          class="_5wrf _13b6 style-woxqq"
                                          role="button"
                                          id="style-woxqq"
                                        >
                                          <div class="_3qn7 _61-0 _2fyi _3qng">
                                            <div
                                              class="_73y0 uiScrollableArea fade uiScrollableAreaWithShadow"
                                              data-interactable="|mousedown||mouseover|"
                                            >
                                              <div
                                                class="uiScrollableAreaWrap scrollable style-9vXsQ"
                                                id="js_25"
                                              >
                                                <div
                                                  class="uiScrollableAreaBody style-BpBgV"
                                                  id="style-BpBgV"
                                                >
                                                  <div class="uiScrollableAreaContent"></div>
                                                </div>
                                              </div>
                                              <div
                                                class="uiScrollableAreaTrack hidden_elem"
                                                data-interactable="|click|"
                                              >
                                                <div class="uiScrollableAreaGripper hidden_elem"></div>
                                              </div>
                                            </div>
                                            <div class="_73y1 _76uv">
                                              <span
                                                class=" _73x-"
                                                role="button"
                                                tabindex="0"
                                              >
                                                <div
                                                  data-hover="tooltip"
                                                  class="_4ik4 _4ik5 style-9geax"
                                                  id="style-9geax"
                                                >
                                                  Created
                                                </div>
                                              </span>
                                              <div
                                                id="style-t3TED"
                                                class="style-t3TED"
                                              >
                                                <div
                                                  aria-label="Ascending sort order"
                                                  class="_73y2 style-Bclap"
                                                  aria-controls="js_1x"
                                                  data-testid="SUIAbstractMenu/button"
                                                  errortooltipposition="above"
                                                  theme="[object Object]"
                                                  use="default"
                                                  width="auto"
                                                  id="style-Bclap"
                                                >
                                                  <i
                                                    alt=""
                                                    data-visualcompletion="css-img"
                                                    class="img style-opkgr"
                                                    id="style-opkgr"
                                                  ></i>
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
                            class="ReactVirtualized__Grid _1zmk style-HoMVf"
                            tabindex="0"
                            id="style-HoMVf"
                          >
                            <div
                              class="ReactVirtualized__Grid__innerScrollContainer style-V7Sws"
                              id="style-V7Sws"
                            >
                              <div
                                class="_2e42 _2yi0 _2yia style-GiKkd"
                                role="cell"
                                id="style-GiKkd"
                              >
                                <div
                                  class="_68tl _8-qx style-ZZoUD"
                                  id="style-ZZoUD"
                                >
                                  <div
                                    class="_2eqm style-To7Cq"
                                    id="style-To7Cq"
                                  >
                                    <div class="_2eqm _3qn7 _61-1 _2fyi _3qng">
                                      <div>
                                        <div class="_ag27">
                                          <input
                                            aria-checked="false"
                                            aria-disabled="false"
                                            id="js_2p"
                                            class=""
                                            type="checkbox"
                                          />
                                          <div
                                            class="_afh9 style-XkKqc"
                                            id="style-XkKqc"
                                          >
                                            <i
                                              class="_afhg img style-HAQiC"
                                              height="16"
                                              width="16"
                                              alt=""
                                              data-visualcompletion="css-img"
                                              id="style-HAQiC"
                                            ></i>
                                          </div>
                                        </div>
                                        <label
                                          class="accessible_elem"
                                          for="js_2p"
                                        >
                                          <span
                                            id="style-oEf4V"
                                            class="style-oEf4V"
                                          >
                                            Select row
                                          </span>
                                        </label>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                class="_2e42 _2yi0 _2yia style-xBBWB"
                                role="cell"
                                id="style-xBBWB"
                              >
                                <div class="x78zum5 x1qughib x2lwn1j xeuugli x1xmf6yo x1emribx x1e56ztr x1i64zmx">
                                  <div class="x78zum5 xdt5ytf x2lwn1j xeuugli">
                                    <div class="xmi5d70 x1fvot60 xo1l8bm xxio538 xbsr9hj xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj xeuugli x1uvtmcs">
                                      <a
                                        class="xt0psk2 x1hl2dhg xt0b8zv xmi5d70 xxio538 x1qsmy5i xq9mrsl x1yc453h x1h4wwuj x1qlqyl8 x1pd3egz"
                                        href="/adsmanager/reporting/view?act=1387295665246598&amp;selected_report_id=120214160548140644"
                                      >
                                        Untitled report
                                      </a>
                                    </div>
                                    <span class="xmi5d70 xw23nyj xo1l8bm x63nzvj x1541jtf xq9mrsl x1h4wwuj xeuugli x1uvtmcs">
                                      1 ad account
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div
                                class="_2e42 _2yi0 _2yia style-Og29M"
                                role="cell"
                                id="style-Og29M"
                              >
                                <div class="_68tl style-N23hK" id="style-N23hK">
                                  <div
                                    class="_2eqm style-3UF6L"
                                    id="style-3UF6L"
                                  >
                                    <div class="_2eqm _3qn7 _61-1 _2fyi _3qng">
                                      <div class="_as9p _as9q _3qn7 _61-0 _2fyi _3qnf">
                                        <div class="_2pi3">
                                          <span class="xmi5d70 x1fvot60 xo1l8bm xxio538 xbsr9hj xq9mrsl x1h4wwuj xeuugli x1uvtmcs">
                                            05/01/2025
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                class="_2e42 _2yi0 _2yia style-RrV5w"
                                role="cell"
                                id="style-RrV5w"
                              >
                                <div class="_68tl style-GkCg5" id="style-GkCg5">
                                  <div
                                    class="_2eqm style-CZqJI"
                                    id="style-CZqJI"
                                  >
                                    <div class="_2eqm _3qn7 _61-1 _2fyi _3qng">
                                      <div class="_as9p _as9q _3qn7 _61-0 _2fyi _3qnf">
                                        <div class="_2pi3">
                                          <span class="xmi5d70 x1fvot60 xo1l8bm xxio538 xbsr9hj xq9mrsl x1h4wwuj xeuugli x1uvtmcs">
                                            28/12/2024
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                class="_2e42 _2yh_ _2yi0 _2yia style-wrxO7"
                                role="cell"
                                id="style-wrxO7"
                              >
                                <div class="_68tl style-DPsqI" id="style-DPsqI">
                                  <div
                                    class="_3bfi style-ysLgS"
                                    id="style-ysLgS"
                                  >
                                    <div class="_13aw _3qn7 _61-1 _2fyh _3qnf">
                                      <div
                                        class="ellipsis _13a- style-DNmNG"
                                        data-hover="tooltip"
                                        data-tooltip-content="13/11/2024"
                                        data-tooltip-display="overflow"
                                        data-tooltip-position="above"
                                        id="style-DNmNG"
                                      >
                                        13/11/2024
                                      </div>
                                      <div
                                        class="ellipsis _13b0 style-ap9GT"
                                        data-hover="tooltip"
                                        data-tooltip-content="by Ali Hamza"
                                        data-tooltip-display="overflow"
                                        data-tooltip-position="above"
                                        id="style-ap9GT"
                                      >
                                        by Ali Hamza
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                class="_2e42 _2yi0 _2yia style-xNFvX"
                                role="cell"
                                id="style-xNFvX"
                              >
                                <div
                                  class="_68tl _8-qx style-7tJlo"
                                  id="style-7tJlo"
                                >
                                  <div
                                    class="_2eqm style-gXHif"
                                    id="style-gXHif"
                                  >
                                    <div class="_2eqm _3qn7 _61-1 _2fyi _3qng">
                                      <div>
                                        <div class="_ag27">
                                          <input
                                            aria-checked="false"
                                            aria-disabled="false"
                                            id="js_2r"
                                            class=""
                                            type="checkbox"
                                          />
                                          <div
                                            class="_afh9 style-ye1H2"
                                            id="style-ye1H2"
                                          >
                                            <i
                                              class="_afhg img style-8wXss"
                                              height="16"
                                              width="16"
                                              alt=""
                                              data-visualcompletion="css-img"
                                              id="style-8wXss"
                                            ></i>
                                          </div>
                                        </div>
                                        <label
                                          class="accessible_elem"
                                          for="js_2r"
                                        >
                                          <span
                                            id="style-BLyoW"
                                            class="style-BLyoW"
                                          >
                                            Select row
                                          </span>
                                        </label>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                class="_2e42 _2yi0 _2yia style-rYxoa"
                                role="cell"
                                id="style-rYxoa"
                              >
                                <div class="x78zum5 x1qughib x2lwn1j xeuugli x1xmf6yo x1emribx x1e56ztr x1i64zmx">
                                  <div class="x78zum5 xdt5ytf x2lwn1j xeuugli">
                                    <div class="xmi5d70 x1fvot60 xo1l8bm xxio538 xbsr9hj xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj xeuugli x1uvtmcs">
                                      <a
                                        class="xt0psk2 x1hl2dhg xt0b8zv xmi5d70 xxio538 x1qsmy5i xq9mrsl x1yc453h x1h4wwuj x1qlqyl8 x1pd3egz"
                                        href="/adsmanager/reporting/view?act=1387295665246598&amp;selected_report_id=120214160548650644"
                                      >
                                        Untitled report
                                      </a>
                                    </div>
                                    <span class="xmi5d70 xw23nyj xo1l8bm x63nzvj x1541jtf xq9mrsl x1h4wwuj xeuugli x1uvtmcs">
                                      1 ad account
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div
                                class="_2e42 _2yi0 _2yia style-jNryW"
                                role="cell"
                                id="style-jNryW"
                              >
                                <div class="_68tl style-TO7Eo" id="style-TO7Eo">
                                  <div
                                    class="_2eqm style-rIcEi"
                                    id="style-rIcEi"
                                  >
                                    <div class="_2eqm _3qn7 _61-1 _2fyi _3qng">
                                      <div class="_as9p _as9q _3qn7 _61-0 _2fyi _3qnf">
                                        <div class="_2pi3">
                                          <span class="xmi5d70 x1fvot60 xo1l8bm xxio538 xbsr9hj xq9mrsl x1h4wwuj xeuugli x1uvtmcs">
                                            13/11/2024
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                class="_2e42 _2yi0 _2yia style-pxLmD"
                                role="cell"
                                id="style-pxLmD"
                              >
                                <div class="_68tl style-SBpHy" id="style-SBpHy">
                                  <div
                                    class="_2eqm style-Y8o6Y"
                                    id="style-Y8o6Y"
                                  >
                                    <div class="_2eqm _3qn7 _61-1 _2fyi _3qng">
                                      <div class="_as9p _as9q _3qn7 _61-0 _2fyi _3qnf">
                                        <div class="_2pi3">
                                          <span class="xmi5d70 x1fvot60 xo1l8bm xxio538 xbsr9hj xq9mrsl x1h4wwuj xeuugli x1uvtmcs">
                                            13/11/2024
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                class="_2e42 _2yh_ _2yi0 _2yia style-ZwGl7"
                                role="cell"
                                id="style-ZwGl7"
                              >
                                <div class="_68tl style-ArxEo" id="style-ArxEo">
                                  <div
                                    class="_3bfi style-LKi8D"
                                    id="style-LKi8D"
                                  >
                                    <div class="_13aw _3qn7 _61-1 _2fyh _3qnf">
                                      <div
                                        class="ellipsis _13a- style-Nrssm"
                                        data-hover="tooltip"
                                        data-tooltip-content="13/11/2024"
                                        data-tooltip-display="overflow"
                                        data-tooltip-position="above"
                                        id="style-Nrssm"
                                      >
                                        13/11/2024
                                      </div>
                                      <div
                                        class="ellipsis _13b0 style-2hBUz"
                                        data-hover="tooltip"
                                        data-tooltip-content="by Ali Hamza"
                                        data-tooltip-display="overflow"
                                        data-tooltip-position="above"
                                        id="style-2hBUz"
                                      >
                                        by Ali Hamza
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                class="_2e42 _2yi0 _2yia style-s6LWX"
                                role="cell"
                                id="style-s6LWX"
                              >
                                <div
                                  class="_68tl _8-qx style-pXaZD"
                                  id="style-pXaZD"
                                >
                                  <div
                                    class="_2eqm style-F4qMV"
                                    id="style-F4qMV"
                                  >
                                    <div class="_2eqm _3qn7 _61-1 _2fyi _3qng">
                                      <div>
                                        <div class="_ag27">
                                          <input
                                            aria-checked="false"
                                            aria-disabled="false"
                                            id="js_2t"
                                            class=""
                                            type="checkbox"
                                          />
                                          <div
                                            class="_afh9 style-6gTBS"
                                            id="style-6gTBS"
                                          >
                                            <i
                                              class="_afhg img style-vUXYC"
                                              height="16"
                                              width="16"
                                              alt=""
                                              data-visualcompletion="css-img"
                                              id="style-vUXYC"
                                            ></i>
                                          </div>
                                        </div>
                                        <label
                                          class="accessible_elem"
                                          for="js_2t"
                                        >
                                          <span
                                            id="style-lrCGG"
                                            class="style-lrCGG"
                                          >
                                            Select row
                                          </span>
                                        </label>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                class="_2e42 _2yi0 _2yia style-ZGBf5"
                                role="cell"
                                id="style-ZGBf5"
                              >
                                <div class="x78zum5 x1qughib x2lwn1j xeuugli x1xmf6yo x1emribx x1e56ztr x1i64zmx">
                                  <div class="x78zum5 xdt5ytf x2lwn1j xeuugli">
                                    <div class="xmi5d70 x1fvot60 xo1l8bm xxio538 xbsr9hj xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj xeuugli x1uvtmcs">
                                      <a
                                        class="xt0psk2 x1hl2dhg xt0b8zv xmi5d70 xxio538 x1qsmy5i xq9mrsl x1yc453h x1h4wwuj x1qlqyl8 x1pd3egz"
                                        href="/adsmanager/reporting/view?act=1387295665246598&amp;selected_report_id=120214160548460644"
                                      >
                                        Untitled report
                                      </a>
                                    </div>
                                    <span class="xmi5d70 xw23nyj xo1l8bm x63nzvj x1541jtf xq9mrsl x1h4wwuj xeuugli x1uvtmcs">
                                      1 ad account
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div
                                class="_2e42 _2yi0 _2yia style-3y12i"
                                role="cell"
                                id="style-3y12i"
                              >
                                <div class="_68tl style-oGZPk" id="style-oGZPk">
                                  <div
                                    class="_2eqm style-7n7UJ"
                                    id="style-7n7UJ"
                                  >
                                    <div class="_2eqm _3qn7 _61-1 _2fyi _3qng">
                                      <div class="_as9p _as9q _3qn7 _61-0 _2fyi _3qnf">
                                        <div class="_2pi3">
                                          <span class="xmi5d70 x1fvot60 xo1l8bm xxio538 xbsr9hj xq9mrsl x1h4wwuj xeuugli x1uvtmcs">
                                            13/11/2024
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                class="_2e42 _2yi0 _2yia style-pdgkk"
                                role="cell"
                                id="style-pdgkk"
                              >
                                <div class="_68tl style-pE7cV" id="style-pE7cV">
                                  <div
                                    class="_2eqm style-rUOGT"
                                    id="style-rUOGT"
                                  >
                                    <div class="_2eqm _3qn7 _61-1 _2fyi _3qng">
                                      <div class="_as9p _as9q _3qn7 _61-0 _2fyi _3qnf">
                                        <div class="_2pi3">
                                          <span class="xmi5d70 x1fvot60 xo1l8bm xxio538 xbsr9hj xq9mrsl x1h4wwuj xeuugli x1uvtmcs">
                                            13/11/2024
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                class="_2e42 _2yh_ _2yi0 _2yia style-eUo85"
                                role="cell"
                                id="style-eUo85"
                              >
                                <div class="_68tl style-FooT5" id="style-FooT5">
                                  <div
                                    class="_3bfi style-3TfYV"
                                    id="style-3TfYV"
                                  >
                                    <div class="_13aw _3qn7 _61-1 _2fyh _3qnf">
                                      <div
                                        class="ellipsis _13a- style-d8oOl"
                                        data-hover="tooltip"
                                        data-tooltip-content="13/11/2024"
                                        data-tooltip-display="overflow"
                                        data-tooltip-position="above"
                                        id="style-d8oOl"
                                      >
                                        13/11/2024
                                      </div>
                                      <div
                                        class="ellipsis _13b0 style-6McHO"
                                        data-hover="tooltip"
                                        data-tooltip-content="by Ali Hamza"
                                        data-tooltip-display="overflow"
                                        data-tooltip-position="above"
                                        id="style-6McHO"
                                      >
                                        by Ali Hamza
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                class="_2e42 _2yi0 _2yia style-otohE"
                                role="cell"
                                id="style-otohE"
                              >
                                <div
                                  class="_68tl _8-qx style-kizvV"
                                  id="style-kizvV"
                                >
                                  <div
                                    class="_2eqm style-TtA5y"
                                    id="style-TtA5y"
                                  >
                                    <div class="_2eqm _3qn7 _61-1 _2fyi _3qng">
                                      <div>
                                        <div class="_ag27">
                                          <input
                                            aria-checked="false"
                                            aria-disabled="false"
                                            id="js_2v"
                                            class=""
                                            type="checkbox"
                                          />
                                          <div
                                            class="_afh9 style-3sZx3"
                                            id="style-3sZx3"
                                          >
                                            <i
                                              class="_afhg img style-qkCvI"
                                              height="16"
                                              width="16"
                                              alt=""
                                              data-visualcompletion="css-img"
                                              id="style-qkCvI"
                                            ></i>
                                          </div>
                                        </div>
                                        <label
                                          class="accessible_elem"
                                          for="js_2v"
                                        >
                                          <span
                                            id="style-Q5H4K"
                                            class="style-Q5H4K"
                                          >
                                            Select row
                                          </span>
                                        </label>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                class="_2e42 _2yi0 _2yia style-P8eIZ"
                                role="cell"
                                id="style-P8eIZ"
                              >
                                <div class="x78zum5 x1qughib x2lwn1j xeuugli x1xmf6yo x1emribx x1e56ztr x1i64zmx">
                                  <div class="x78zum5 xdt5ytf x2lwn1j xeuugli">
                                    <div class="xmi5d70 x1fvot60 xo1l8bm xxio538 xbsr9hj xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj xeuugli x1uvtmcs">
                                      <a
                                        class="xt0psk2 x1hl2dhg xt0b8zv xmi5d70 xxio538 x1qsmy5i xq9mrsl x1yc453h x1h4wwuj x1qlqyl8 x1pd3egz"
                                        href="/adsmanager/reporting/view?act=1387295665246598&amp;selected_report_id=120214160548440644"
                                      >
                                        Untitled report
                                      </a>
                                    </div>
                                    <span class="xmi5d70 xw23nyj xo1l8bm x63nzvj x1541jtf xq9mrsl x1h4wwuj xeuugli x1uvtmcs">
                                      1 ad account
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div
                                class="_2e42 _2yi0 _2yia style-pRzpb"
                                role="cell"
                                id="style-pRzpb"
                              >
                                <div class="_68tl style-KSpAY" id="style-KSpAY">
                                  <div
                                    class="_2eqm style-3HUbi"
                                    id="style-3HUbi"
                                  >
                                    <div class="_2eqm _3qn7 _61-1 _2fyi _3qng">
                                      <div class="_as9p _as9q _3qn7 _61-0 _2fyi _3qnf">
                                        <div class="_2pi3">
                                          <span class="xmi5d70 x1fvot60 xo1l8bm xxio538 xbsr9hj xq9mrsl x1h4wwuj xeuugli x1uvtmcs">
                                            13/11/2024
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                class="_2e42 _2yi0 _2yia style-Ut6no"
                                role="cell"
                                id="style-Ut6no"
                              >
                                <div class="_68tl style-TpX6D" id="style-TpX6D">
                                  <div
                                    class="_2eqm style-olDkH"
                                    id="style-olDkH"
                                  >
                                    <div class="_2eqm _3qn7 _61-1 _2fyi _3qng">
                                      <div class="_as9p _as9q _3qn7 _61-0 _2fyi _3qnf">
                                        <div class="_2pi3">
                                          <span class="xmi5d70 x1fvot60 xo1l8bm xxio538 xbsr9hj xq9mrsl x1h4wwuj xeuugli x1uvtmcs">
                                            13/11/2024
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                class="_2e42 _2yh_ _2yi0 _2yia style-gN2Wr"
                                role="cell"
                                id="style-gN2Wr"
                              >
                                <div class="_68tl style-BTPs5" id="style-BTPs5">
                                  <div
                                    class="_3bfi style-qJJkw"
                                    id="style-qJJkw"
                                  >
                                    <div class="_13aw _3qn7 _61-1 _2fyh _3qnf">
                                      <div
                                        class="ellipsis _13a- style-o3mXO"
                                        data-hover="tooltip"
                                        data-tooltip-content="13/11/2024"
                                        data-tooltip-display="overflow"
                                        data-tooltip-position="above"
                                        id="style-o3mXO"
                                      >
                                        13/11/2024
                                      </div>
                                      <div
                                        class="ellipsis _13b0 style-31J2P"
                                        data-hover="tooltip"
                                        data-tooltip-content="by Ali Hamza"
                                        data-tooltip-display="overflow"
                                        data-tooltip-position="above"
                                        id="style-31J2P"
                                      >
                                        by Ali Hamza
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                class="_2e42 _2yi0 _2yia style-rLLxo"
                                role="cell"
                                id="style-rLLxo"
                              >
                                <div
                                  class="_68tl _8-qx style-JrRho"
                                  id="style-JrRho"
                                >
                                  <div
                                    class="_2eqm style-cRkqz"
                                    id="style-cRkqz"
                                  >
                                    <div class="_2eqm _3qn7 _61-1 _2fyi _3qng">
                                      <div>
                                        <div class="_ag27">
                                          <input
                                            aria-checked="false"
                                            aria-disabled="false"
                                            id="js_2x"
                                            class=""
                                            type="checkbox"
                                          />
                                          <div
                                            class="_afh9 style-76L3H"
                                            id="style-76L3H"
                                          >
                                            <i
                                              class="_afhg img style-sMdec"
                                              height="16"
                                              width="16"
                                              alt=""
                                              data-visualcompletion="css-img"
                                              id="style-sMdec"
                                            ></i>
                                          </div>
                                        </div>
                                        <label
                                          class="accessible_elem"
                                          for="js_2x"
                                        >
                                          <span
                                            id="style-so3Hc"
                                            class="style-so3Hc"
                                          >
                                            Select row
                                          </span>
                                        </label>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                class="_2e42 _2yi0 _2yia style-zl8EX"
                                role="cell"
                                id="style-zl8EX"
                              >
                                <div class="x78zum5 x1qughib x2lwn1j xeuugli x1xmf6yo x1emribx x1e56ztr x1i64zmx">
                                  <div class="x78zum5 xdt5ytf x2lwn1j xeuugli">
                                    <div class="xmi5d70 x1fvot60 xo1l8bm xxio538 xbsr9hj xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj xeuugli x1uvtmcs">
                                      <a
                                        class="xt0psk2 x1hl2dhg xt0b8zv xmi5d70 xxio538 x1qsmy5i xq9mrsl x1yc453h x1h4wwuj x1qlqyl8 x1pd3egz"
                                        href="/adsmanager/reporting/view?act=1387295665246598&amp;selected_report_id=120214160548900644"
                                      >
                                        Untitled report
                                      </a>
                                    </div>
                                    <span class="xmi5d70 xw23nyj xo1l8bm x63nzvj x1541jtf xq9mrsl x1h4wwuj xeuugli x1uvtmcs">
                                      1 ad account
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div
                                class="_2e42 _2yi0 _2yia style-8icCZ"
                                role="cell"
                                id="style-8icCZ"
                              >
                                <div class="_68tl style-QNoV9" id="style-QNoV9">
                                  <div
                                    class="_2eqm style-mScBQ"
                                    id="style-mScBQ"
                                  >
                                    <div class="_2eqm _3qn7 _61-1 _2fyi _3qng">
                                      <div class="_as9p _as9q _3qn7 _61-0 _2fyi _3qnf">
                                        <div class="_2pi3">
                                          <span class="xmi5d70 x1fvot60 xo1l8bm xxio538 xbsr9hj xq9mrsl x1h4wwuj xeuugli x1uvtmcs">
                                            13/11/2024
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                class="_2e42 _2yi0 _2yia style-tSAhd"
                                role="cell"
                                id="style-tSAhd"
                              >
                                <div class="_68tl style-nNQBU" id="style-nNQBU">
                                  <div
                                    class="_2eqm style-mhYAD"
                                    id="style-mhYAD"
                                  >
                                    <div class="_2eqm _3qn7 _61-1 _2fyi _3qng">
                                      <div class="_as9p _as9q _3qn7 _61-0 _2fyi _3qnf">
                                        <div class="_2pi3">
                                          <span class="xmi5d70 x1fvot60 xo1l8bm xxio538 xbsr9hj xq9mrsl x1h4wwuj xeuugli x1uvtmcs">
                                            13/11/2024
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                class="_2e42 _2yh_ _2yi0 _2yia style-PosQ6"
                                role="cell"
                                id="style-PosQ6"
                              >
                                <div class="_68tl style-XqeTT" id="style-XqeTT">
                                  <div
                                    class="_3bfi style-BDH6M"
                                    id="style-BDH6M"
                                  >
                                    <div class="_13aw _3qn7 _61-1 _2fyh _3qnf">
                                      <div
                                        class="ellipsis _13a- style-tYJA5"
                                        data-hover="tooltip"
                                        data-tooltip-content="13/11/2024"
                                        data-tooltip-display="overflow"
                                        data-tooltip-position="above"
                                        id="style-tYJA5"
                                      >
                                        13/11/2024
                                      </div>
                                      <div
                                        class="ellipsis _13b0 style-1Bi36"
                                        data-hover="tooltip"
                                        data-tooltip-content="by Ali Hamza"
                                        data-tooltip-display="overflow"
                                        data-tooltip-position="above"
                                        id="style-1Bi36"
                                      >
                                        by Ali Hamza
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                class="_2e42 _2yi0 _2yia style-knkeM"
                                role="cell"
                                id="style-knkeM"
                              >
                                <div
                                  class="_68tl _8-qx style-Jbc3W"
                                  id="style-Jbc3W"
                                >
                                  <div
                                    class="_2eqm style-Edooa"
                                    id="style-Edooa"
                                  >
                                    <div class="_2eqm _3qn7 _61-1 _2fyi _3qng">
                                      <div>
                                        <div class="_ag27">
                                          <input
                                            aria-checked="false"
                                            aria-disabled="false"
                                            id="js_2z"
                                            class=""
                                            type="checkbox"
                                          />
                                          <div
                                            class="_afh9 style-7fJzC"
                                            id="style-7fJzC"
                                          >
                                            <i
                                              class="_afhg img style-iTAPJ"
                                              height="16"
                                              width="16"
                                              alt=""
                                              data-visualcompletion="css-img"
                                              id="style-iTAPJ"
                                            ></i>
                                          </div>
                                        </div>
                                        <label
                                          class="accessible_elem"
                                          for="js_2z"
                                        >
                                          <span
                                            id="style-5LQKm"
                                            class="style-5LQKm"
                                          >
                                            Select row
                                          </span>
                                        </label>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                class="_2e42 _2yi0 _2yia style-45nyL"
                                role="cell"
                                id="style-45nyL"
                              >
                                <div class="x78zum5 x1qughib x2lwn1j xeuugli x1xmf6yo x1emribx x1e56ztr x1i64zmx">
                                  <div class="x78zum5 xdt5ytf x2lwn1j xeuugli">
                                    <div class="xmi5d70 x1fvot60 xo1l8bm xxio538 xbsr9hj xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj xeuugli x1uvtmcs">
                                      <a
                                        class="xt0psk2 x1hl2dhg xt0b8zv xmi5d70 xxio538 x1qsmy5i xq9mrsl x1yc453h x1h4wwuj x1qlqyl8 x1pd3egz"
                                        href="/adsmanager/reporting/view?act=1387295665246598&amp;selected_report_id=120214160548880644"
                                      >
                                        Untitled report
                                      </a>
                                    </div>
                                    <span class="xmi5d70 xw23nyj xo1l8bm x63nzvj x1541jtf xq9mrsl x1h4wwuj xeuugli x1uvtmcs">
                                      1 ad account
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div
                                class="_2e42 _2yi0 _2yia style-3EAU6"
                                role="cell"
                                id="style-3EAU6"
                              >
                                <div class="_68tl style-zzjxc" id="style-zzjxc">
                                  <div
                                    class="_2eqm style-nqXUg"
                                    id="style-nqXUg"
                                  >
                                    <div class="_2eqm _3qn7 _61-1 _2fyi _3qng">
                                      <div class="_as9p _as9q _3qn7 _61-0 _2fyi _3qnf">
                                        <div class="_2pi3">
                                          <span class="xmi5d70 x1fvot60 xo1l8bm xxio538 xbsr9hj xq9mrsl x1h4wwuj xeuugli x1uvtmcs">
                                            13/11/2024
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                class="_2e42 _2yi0 _2yia style-3yL7m"
                                role="cell"
                                id="style-3yL7m"
                              >
                                <div class="_68tl style-brnWb" id="style-brnWb">
                                  <div
                                    class="_2eqm style-dDlet"
                                    id="style-dDlet"
                                  >
                                    <div class="_2eqm _3qn7 _61-1 _2fyi _3qng">
                                      <div class="_as9p _as9q _3qn7 _61-0 _2fyi _3qnf">
                                        <div class="_2pi3">
                                          <span class="xmi5d70 x1fvot60 xo1l8bm xxio538 xbsr9hj xq9mrsl x1h4wwuj xeuugli x1uvtmcs">
                                            13/11/2024
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                class="_2e42 _2yh_ _2yi0 _2yia style-LELnF"
                                role="cell"
                                id="style-LELnF"
                              >
                                <div class="_68tl style-c4coL" id="style-c4coL">
                                  <div
                                    class="_3bfi style-VZUFZ"
                                    id="style-VZUFZ"
                                  >
                                    <div class="_13aw _3qn7 _61-1 _2fyh _3qnf">
                                      <div
                                        class="ellipsis _13a- style-X1UKD"
                                        data-hover="tooltip"
                                        data-tooltip-content="13/11/2024"
                                        data-tooltip-display="overflow"
                                        data-tooltip-position="above"
                                        id="style-X1UKD"
                                      >
                                        13/11/2024
                                      </div>
                                      <div
                                        class="ellipsis _13b0 style-4Dtmx"
                                        data-hover="tooltip"
                                        data-tooltip-content="by Ali Hamza"
                                        data-tooltip-display="overflow"
                                        data-tooltip-position="above"
                                        id="style-4Dtmx"
                                      >
                                        by Ali Hamza
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                class="_2e42 _2yi0 _2yia style-o3Ghv"
                                role="cell"
                                id="style-o3Ghv"
                              >
                                <div
                                  class="_68tl _8-qx style-N3kGG"
                                  id="style-N3kGG"
                                >
                                  <div
                                    class="_2eqm style-jMwX8"
                                    id="style-jMwX8"
                                  >
                                    <div class="_2eqm _3qn7 _61-1 _2fyi _3qng">
                                      <div>
                                        <div class="_ag27">
                                          <input
                                            aria-checked="false"
                                            aria-disabled="false"
                                            id="js_31"
                                            class=""
                                            type="checkbox"
                                          />
                                          <div
                                            class="_afh9 style-MyKOB"
                                            id="style-MyKOB"
                                          >
                                            <i
                                              class="_afhg img style-ARJqK"
                                              height="16"
                                              width="16"
                                              alt=""
                                              data-visualcompletion="css-img"
                                              id="style-ARJqK"
                                            ></i>
                                          </div>
                                        </div>
                                        <label
                                          class="accessible_elem"
                                          for="js_31"
                                        >
                                          <span
                                            id="style-z772y"
                                            class="style-z772y"
                                          >
                                            Select row
                                          </span>
                                        </label>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                class="_2e42 _2yi0 _2yia style-2752d"
                                role="cell"
                                id="style-2752d"
                              >
                                <div class="x78zum5 x1qughib x2lwn1j xeuugli x1xmf6yo x1emribx x1e56ztr x1i64zmx">
                                  <div class="x78zum5 xdt5ytf x2lwn1j xeuugli">
                                    <div class="xmi5d70 x1fvot60 xo1l8bm xxio538 xbsr9hj xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj xeuugli x1uvtmcs">
                                      <a
                                        class="xt0psk2 x1hl2dhg xt0b8zv xmi5d70 xxio538 x1qsmy5i xq9mrsl x1yc453h x1h4wwuj x1qlqyl8 x1pd3egz"
                                        href="/adsmanager/reporting/view?act=1387295665246598&amp;selected_report_id=120214160548930644"
                                      >
                                        Untitled report
                                      </a>
                                    </div>
                                    <span class="xmi5d70 xw23nyj xo1l8bm x63nzvj x1541jtf xq9mrsl x1h4wwuj xeuugli x1uvtmcs">
                                      1 ad account
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div
                                class="_2e42 _2yi0 _2yia style-hHSpw"
                                role="cell"
                                id="style-hHSpw"
                              >
                                <div class="_68tl style-ho4UB" id="style-ho4UB">
                                  <div
                                    class="_2eqm style-aHen3"
                                    id="style-aHen3"
                                  >
                                    <div class="_2eqm _3qn7 _61-1 _2fyi _3qng">
                                      <div class="_as9p _as9q _3qn7 _61-0 _2fyi _3qnf">
                                        <div class="_2pi3">
                                          <span class="xmi5d70 x1fvot60 xo1l8bm xxio538 xbsr9hj xq9mrsl x1h4wwuj xeuugli x1uvtmcs">
                                            13/11/2024
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                class="_2e42 _2yi0 _2yia style-zMClf"
                                role="cell"
                                id="style-zMClf"
                              >
                                <div class="_68tl style-8GeBa" id="style-8GeBa">
                                  <div
                                    class="_2eqm style-YpnLS"
                                    id="style-YpnLS"
                                  >
                                    <div class="_2eqm _3qn7 _61-1 _2fyi _3qng">
                                      <div class="_as9p _as9q _3qn7 _61-0 _2fyi _3qnf">
                                        <div class="_2pi3">
                                          <span class="xmi5d70 x1fvot60 xo1l8bm xxio538 xbsr9hj xq9mrsl x1h4wwuj xeuugli x1uvtmcs">
                                            13/11/2024
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                class="_2e42 _2yh_ _2yi0 _2yia style-vn1Ve"
                                role="cell"
                                id="style-vn1Ve"
                              >
                                <div class="_68tl style-FNoL2" id="style-FNoL2">
                                  <div
                                    class="_3bfi style-73xWc"
                                    id="style-73xWc"
                                  >
                                    <div class="_13aw _3qn7 _61-1 _2fyh _3qnf">
                                      <div
                                        class="ellipsis _13a- style-dNEqw"
                                        data-hover="tooltip"
                                        data-tooltip-content="13/11/2024"
                                        data-tooltip-display="overflow"
                                        data-tooltip-position="above"
                                        id="style-dNEqw"
                                      >
                                        13/11/2024
                                      </div>
                                      <div
                                        class="ellipsis _13b0 style-HX1Fz"
                                        data-hover="tooltip"
                                        data-tooltip-content="by Ali Hamza"
                                        data-tooltip-display="overflow"
                                        data-tooltip-position="above"
                                        id="style-HX1Fz"
                                      >
                                        by Ali Hamza
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                class="_2e42 _2yi0 _2yia style-clReN"
                                role="cell"
                                id="style-clReN"
                              >
                                <div
                                  class="_68tl _8-qx style-RXqog"
                                  id="style-RXqog"
                                >
                                  <div
                                    class="_2eqm style-sIetF"
                                    id="style-sIetF"
                                  >
                                    <div class="_2eqm _3qn7 _61-1 _2fyi _3qng">
                                      <div>
                                        <div class="_ag27">
                                          <input
                                            aria-checked="false"
                                            aria-disabled="false"
                                            id="js_33"
                                            class=""
                                            type="checkbox"
                                          />
                                          <div
                                            class="_afh9 style-tVCT8"
                                            id="style-tVCT8"
                                          >
                                            <i
                                              class="_afhg img style-ZLiYY"
                                              height="16"
                                              width="16"
                                              alt=""
                                              data-visualcompletion="css-img"
                                              id="style-ZLiYY"
                                            ></i>
                                          </div>
                                        </div>
                                        <label
                                          class="accessible_elem"
                                          for="js_33"
                                        >
                                          <span
                                            id="style-gRGtl"
                                            class="style-gRGtl"
                                          >
                                            Select row
                                          </span>
                                        </label>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                class="_2e42 _2yi0 _2yia style-MJSdU"
                                role="cell"
                                id="style-MJSdU"
                              >
                                <div class="x78zum5 x1qughib x2lwn1j xeuugli x1xmf6yo x1emribx x1e56ztr x1i64zmx">
                                  <div class="x78zum5 xdt5ytf x2lwn1j xeuugli">
                                    <div class="xmi5d70 x1fvot60 xo1l8bm xxio538 xbsr9hj xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj xeuugli x1uvtmcs">
                                      <a
                                        class="xt0psk2 x1hl2dhg xt0b8zv xmi5d70 xxio538 x1qsmy5i xq9mrsl x1yc453h x1h4wwuj x1qlqyl8 x1pd3egz"
                                        href="/adsmanager/reporting/view?act=1387295665246598&amp;selected_report_id=120214160548870644"
                                      >
                                        Untitled report
                                      </a>
                                    </div>
                                    <span class="xmi5d70 xw23nyj xo1l8bm x63nzvj x1541jtf xq9mrsl x1h4wwuj xeuugli x1uvtmcs">
                                      1 ad account
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div
                                class="_2e42 _2yi0 _2yia style-hEvy2"
                                role="cell"
                                id="style-hEvy2"
                              >
                                <div class="_68tl style-KV8O1" id="style-KV8O1">
                                  <div
                                    class="_2eqm style-wYs3P"
                                    id="style-wYs3P"
                                  >
                                    <div class="_2eqm _3qn7 _61-1 _2fyi _3qng">
                                      <div class="_as9p _as9q _3qn7 _61-0 _2fyi _3qnf">
                                        <div class="_2pi3">
                                          <span class="xmi5d70 x1fvot60 xo1l8bm xxio538 xbsr9hj xq9mrsl x1h4wwuj xeuugli x1uvtmcs">
                                            13/11/2024
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                class="_2e42 _2yi0 _2yia style-odEqh"
                                role="cell"
                                id="style-odEqh"
                              >
                                <div class="_68tl style-fpnQZ" id="style-fpnQZ">
                                  <div
                                    class="_2eqm style-5nXq4"
                                    id="style-5nXq4"
                                  >
                                    <div class="_2eqm _3qn7 _61-1 _2fyi _3qng">
                                      <div class="_as9p _as9q _3qn7 _61-0 _2fyi _3qnf">
                                        <div class="_2pi3">
                                          <span class="xmi5d70 x1fvot60 xo1l8bm xxio538 xbsr9hj xq9mrsl x1h4wwuj xeuugli x1uvtmcs">
                                            13/11/2024
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                class="_2e42 _2yh_ _2yi0 _2yia style-eRXyl"
                                role="cell"
                                id="style-eRXyl"
                              >
                                <div class="_68tl style-snzpW" id="style-snzpW">
                                  <div
                                    class="_3bfi style-qcvJB"
                                    id="style-qcvJB"
                                  >
                                    <div class="_13aw _3qn7 _61-1 _2fyh _3qnf">
                                      <div
                                        class="ellipsis _13a- style-AGF3J"
                                        data-hover="tooltip"
                                        data-tooltip-content="13/11/2024"
                                        data-tooltip-display="overflow"
                                        data-tooltip-position="above"
                                        id="style-AGF3J"
                                      >
                                        13/11/2024
                                      </div>
                                      <div
                                        class="ellipsis _13b0 style-vkahQ"
                                        data-hover="tooltip"
                                        data-tooltip-content="by Ali Hamza"
                                        data-tooltip-display="overflow"
                                        data-tooltip-position="above"
                                        id="style-vkahQ"
                                      >
                                        by Ali Hamza
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                class="_2e42 _2yi0 _2yia style-ckxgU"
                                role="cell"
                                id="style-ckxgU"
                              >
                                <div
                                  class="_68tl _8-qx style-UvP1j"
                                  id="style-UvP1j"
                                >
                                  <div
                                    class="_2eqm style-nWiMw"
                                    id="style-nWiMw"
                                  >
                                    <div class="_2eqm _3qn7 _61-1 _2fyi _3qng">
                                      <div>
                                        <div class="_ag27">
                                          <input
                                            aria-checked="false"
                                            aria-disabled="false"
                                            id="js_35"
                                            class=""
                                            type="checkbox"
                                          />
                                          <div
                                            class="_afh9 style-4XDjt"
                                            id="style-4XDjt"
                                          >
                                            <i
                                              class="_afhg img style-MsP9Y"
                                              height="16"
                                              width="16"
                                              alt=""
                                              data-visualcompletion="css-img"
                                              id="style-MsP9Y"
                                            ></i>
                                          </div>
                                        </div>
                                        <label
                                          class="accessible_elem"
                                          for="js_35"
                                        >
                                          <span
                                            id="style-FVHPg"
                                            class="style-FVHPg"
                                          >
                                            Select row
                                          </span>
                                        </label>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                class="_2e42 _2yi0 _2yia style-ZhCm6"
                                role="cell"
                                id="style-ZhCm6"
                              >
                                <div class="x78zum5 x1qughib x2lwn1j xeuugli x1xmf6yo x1emribx x1e56ztr x1i64zmx">
                                  <div class="x78zum5 xdt5ytf x2lwn1j xeuugli">
                                    <div class="xmi5d70 x1fvot60 xo1l8bm xxio538 xbsr9hj xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj xeuugli x1uvtmcs">
                                      <a
                                        class="xt0psk2 x1hl2dhg xt0b8zv xmi5d70 xxio538 x1qsmy5i xq9mrsl x1yc453h x1h4wwuj x1qlqyl8 x1pd3egz"
                                        href="/adsmanager/reporting/view?act=1387295665246598&amp;selected_report_id=120214160548860644"
                                      >
                                        Untitled report
                                      </a>
                                    </div>
                                    <span class="xmi5d70 xw23nyj xo1l8bm x63nzvj x1541jtf xq9mrsl x1h4wwuj xeuugli x1uvtmcs">
                                      1 ad account
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div
                                class="_2e42 _2yi0 _2yia style-px6QA"
                                role="cell"
                                id="style-px6QA"
                              >
                                <div class="_68tl style-AUR8N" id="style-AUR8N">
                                  <div
                                    class="_2eqm style-wgzdY"
                                    id="style-wgzdY"
                                  >
                                    <div class="_2eqm _3qn7 _61-1 _2fyi _3qng">
                                      <div class="_as9p _as9q _3qn7 _61-0 _2fyi _3qnf">
                                        <div class="_2pi3">
                                          <span class="xmi5d70 x1fvot60 xo1l8bm xxio538 xbsr9hj xq9mrsl x1h4wwuj xeuugli x1uvtmcs">
                                            13/11/2024
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                class="_2e42 _2yi0 _2yia style-L4ZWM"
                                role="cell"
                                id="style-L4ZWM"
                              >
                                <div class="_68tl style-okFRa" id="style-okFRa">
                                  <div
                                    class="_2eqm style-DliDm"
                                    id="style-DliDm"
                                  >
                                    <div class="_2eqm _3qn7 _61-1 _2fyi _3qng">
                                      <div class="_as9p _as9q _3qn7 _61-0 _2fyi _3qnf">
                                        <div class="_2pi3">
                                          <span class="xmi5d70 x1fvot60 xo1l8bm xxio538 xbsr9hj xq9mrsl x1h4wwuj xeuugli x1uvtmcs">
                                            13/11/2024
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                class="_2e42 _2yh_ _2yi0 _2yia style-YNH1N"
                                role="cell"
                                id="style-YNH1N"
                              >
                                <div class="_68tl style-G5lEZ" id="style-G5lEZ">
                                  <div
                                    class="_3bfi style-iBvxX"
                                    id="style-iBvxX"
                                  >
                                    <div class="_13aw _3qn7 _61-1 _2fyh _3qnf">
                                      <div
                                        class="ellipsis _13a- style-azkQf"
                                        data-hover="tooltip"
                                        data-tooltip-content="13/11/2024"
                                        data-tooltip-display="overflow"
                                        data-tooltip-position="above"
                                        id="style-azkQf"
                                      >
                                        13/11/2024
                                      </div>
                                      <div
                                        class="ellipsis _13b0 style-dWIkK"
                                        data-hover="tooltip"
                                        data-tooltip-content="by Ali Hamza"
                                        data-tooltip-display="overflow"
                                        data-tooltip-position="above"
                                        id="style-dWIkK"
                                      >
                                        by Ali Hamza
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                class="_2e42 _2yi0 _2yia style-htiqX"
                                role="cell"
                                id="style-htiqX"
                              >
                                <div
                                  class="_68tl _8-qx style-b4ci8"
                                  id="style-b4ci8"
                                >
                                  <div
                                    class="_2eqm style-hkOGo"
                                    id="style-hkOGo"
                                  >
                                    <div class="_2eqm _3qn7 _61-1 _2fyi _3qng">
                                      <div>
                                        <div class="_ag27">
                                          <input
                                            aria-checked="false"
                                            aria-disabled="false"
                                            id="js_37"
                                            class=""
                                            type="checkbox"
                                          />
                                          <div
                                            class="_afh9 style-VISdF"
                                            id="style-VISdF"
                                          >
                                            <i
                                              class="_afhg img style-Co88C"
                                              height="16"
                                              width="16"
                                              alt=""
                                              data-visualcompletion="css-img"
                                              id="style-Co88C"
                                            ></i>
                                          </div>
                                        </div>
                                        <label
                                          class="accessible_elem"
                                          for="js_37"
                                        >
                                          <span
                                            id="style-UC3oN"
                                            class="style-UC3oN"
                                          >
                                            Select row
                                          </span>
                                        </label>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                class="_2e42 _2yi0 _2yia style-V8s87"
                                role="cell"
                                id="style-V8s87"
                              >
                                <div class="x78zum5 x1qughib x2lwn1j xeuugli x1xmf6yo x1emribx x1e56ztr x1i64zmx">
                                  <div class="x78zum5 xdt5ytf x2lwn1j xeuugli">
                                    <div class="xmi5d70 x1fvot60 xo1l8bm xxio538 xbsr9hj xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj xeuugli x1uvtmcs">
                                      <a
                                        class="xt0psk2 x1hl2dhg xt0b8zv xmi5d70 xxio538 x1qsmy5i xq9mrsl x1yc453h x1h4wwuj x1qlqyl8 x1pd3egz"
                                        href="/adsmanager/reporting/view?act=1387295665246598&amp;selected_report_id=120214160548830644"
                                      >
                                        Untitled report
                                      </a>
                                    </div>
                                    <span class="xmi5d70 xw23nyj xo1l8bm x63nzvj x1541jtf xq9mrsl x1h4wwuj xeuugli x1uvtmcs">
                                      1 ad account
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div
                                class="_2e42 _2yi0 _2yia style-mIoIt"
                                role="cell"
                                id="style-mIoIt"
                              >
                                <div class="_68tl style-5PNlr" id="style-5PNlr">
                                  <div
                                    class="_2eqm style-ngi2v"
                                    id="style-ngi2v"
                                  >
                                    <div class="_2eqm _3qn7 _61-1 _2fyi _3qng">
                                      <div class="_as9p _as9q _3qn7 _61-0 _2fyi _3qnf">
                                        <div class="_2pi3">
                                          <span class="xmi5d70 x1fvot60 xo1l8bm xxio538 xbsr9hj xq9mrsl x1h4wwuj xeuugli x1uvtmcs">
                                            13/11/2024
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                class="_2e42 _2yi0 _2yia style-zwrvm"
                                role="cell"
                                id="style-zwrvm"
                              >
                                <div class="_68tl style-ytlk2" id="style-ytlk2">
                                  <div
                                    class="_2eqm style-Yeml1"
                                    id="style-Yeml1"
                                  >
                                    <div class="_2eqm _3qn7 _61-1 _2fyi _3qng">
                                      <div class="_as9p _as9q _3qn7 _61-0 _2fyi _3qnf">
                                        <div class="_2pi3">
                                          <span class="xmi5d70 x1fvot60 xo1l8bm xxio538 xbsr9hj xq9mrsl x1h4wwuj xeuugli x1uvtmcs">
                                            13/11/2024
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                class="_2e42 _2yh_ _2yi0 _2yia style-A2XIt"
                                role="cell"
                                id="style-A2XIt"
                              >
                                <div class="_68tl style-ZAhOA" id="style-ZAhOA">
                                  <div
                                    class="_3bfi style-3hC6w"
                                    id="style-3hC6w"
                                  >
                                    <div class="_13aw _3qn7 _61-1 _2fyh _3qnf">
                                      <div
                                        class="ellipsis _13a- style-9XsQf"
                                        data-hover="tooltip"
                                        data-tooltip-content="13/11/2024"
                                        data-tooltip-display="overflow"
                                        data-tooltip-position="above"
                                        id="style-9XsQf"
                                      >
                                        13/11/2024
                                      </div>
                                      <div
                                        class="ellipsis _13b0 style-1xK74"
                                        data-hover="tooltip"
                                        data-tooltip-content="by Ali Hamza"
                                        data-tooltip-display="overflow"
                                        data-tooltip-position="above"
                                        id="style-1xK74"
                                      >
                                        by Ali Hamza
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                class="_2e42 _2yi0 _2yia style-yoeUy"
                                role="cell"
                                id="style-yoeUy"
                              >
                                <div
                                  class="_68tl _8-qx style-xElsz"
                                  id="style-xElsz"
                                >
                                  <div
                                    class="_2eqm style-7FPB5"
                                    id="style-7FPB5"
                                  >
                                    <div class="_2eqm _3qn7 _61-1 _2fyi _3qng">
                                      <div>
                                        <div class="_ag27">
                                          <input
                                            aria-checked="false"
                                            aria-disabled="false"
                                            id="js_39"
                                            class=""
                                            type="checkbox"
                                          />
                                          <div
                                            class="_afh9 style-FJwTA"
                                            id="style-FJwTA"
                                          >
                                            <i
                                              class="_afhg img style-tvnTU"
                                              height="16"
                                              width="16"
                                              alt=""
                                              data-visualcompletion="css-img"
                                              id="style-tvnTU"
                                            ></i>
                                          </div>
                                        </div>
                                        <label
                                          class="accessible_elem"
                                          for="js_39"
                                        >
                                          <span
                                            id="style-1i6Ij"
                                            class="style-1i6Ij"
                                          >
                                            Select row
                                          </span>
                                        </label>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                class="_2e42 _2yi0 _2yia style-96o43"
                                role="cell"
                                id="style-96o43"
                              >
                                <div class="x78zum5 x1qughib x2lwn1j xeuugli x1xmf6yo x1emribx x1e56ztr x1i64zmx">
                                  <div class="x78zum5 xdt5ytf x2lwn1j xeuugli">
                                    <div class="xmi5d70 x1fvot60 xo1l8bm xxio538 xbsr9hj xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj xeuugli x1uvtmcs">
                                      <a
                                        class="xt0psk2 x1hl2dhg xt0b8zv xmi5d70 xxio538 x1qsmy5i xq9mrsl x1yc453h x1h4wwuj x1qlqyl8 x1pd3egz"
                                        href="/adsmanager/reporting/view?act=1387295665246598&amp;selected_report_id=120214160548780644"
                                      >
                                        Untitled report
                                      </a>
                                    </div>
                                    <span class="xmi5d70 xw23nyj xo1l8bm x63nzvj x1541jtf xq9mrsl x1h4wwuj xeuugli x1uvtmcs">
                                      1 ad account
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div
                                class="_2e42 _2yi0 _2yia style-gIIf3"
                                role="cell"
                                id="style-gIIf3"
                              >
                                <div class="_68tl style-dqvfK" id="style-dqvfK">
                                  <div
                                    class="_2eqm style-Lz6P7"
                                    id="style-Lz6P7"
                                  >
                                    <div class="_2eqm _3qn7 _61-1 _2fyi _3qng">
                                      <div class="_as9p _as9q _3qn7 _61-0 _2fyi _3qnf">
                                        <div class="_2pi3">
                                          <span class="xmi5d70 x1fvot60 xo1l8bm xxio538 xbsr9hj xq9mrsl x1h4wwuj xeuugli x1uvtmcs">
                                            13/11/2024
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                class="_2e42 _2yi0 _2yia style-WzPvR"
                                role="cell"
                                id="style-WzPvR"
                              >
                                <div class="_68tl style-x5NVy" id="style-x5NVy">
                                  <div
                                    class="_2eqm style-fkEDv"
                                    id="style-fkEDv"
                                  >
                                    <div class="_2eqm _3qn7 _61-1 _2fyi _3qng">
                                      <div class="_as9p _as9q _3qn7 _61-0 _2fyi _3qnf">
                                        <div class="_2pi3">
                                          <span class="xmi5d70 x1fvot60 xo1l8bm xxio538 xbsr9hj xq9mrsl x1h4wwuj xeuugli x1uvtmcs">
                                            13/11/2024
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                class="_2e42 _2yh_ _2yi0 _2yia style-1T3W2"
                                role="cell"
                                id="style-1T3W2"
                              >
                                <div class="_68tl style-xwVbs" id="style-xwVbs">
                                  <div
                                    class="_3bfi style-QXMI3"
                                    id="style-QXMI3"
                                  >
                                    <div class="_13aw _3qn7 _61-1 _2fyh _3qnf">
                                      <div
                                        class="ellipsis _13a- style-qDPMf"
                                        data-hover="tooltip"
                                        data-tooltip-content="13/11/2024"
                                        data-tooltip-display="overflow"
                                        data-tooltip-position="above"
                                        id="style-qDPMf"
                                      >
                                        13/11/2024
                                      </div>
                                      <div
                                        class="ellipsis _13b0 style-sswQc"
                                        data-hover="tooltip"
                                        data-tooltip-content="by Ali Hamza"
                                        data-tooltip-display="overflow"
                                        data-tooltip-position="above"
                                        id="style-sswQc"
                                      >
                                        by Ali Hamza
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                class="_2e42 _2yi0 _2yia style-T3WLJ"
                                role="cell"
                                id="style-T3WLJ"
                              >
                                <div
                                  class="_68tl _8-qx style-GESEG"
                                  id="style-GESEG"
                                >
                                  <div
                                    class="_2eqm style-Af2ox"
                                    id="style-Af2ox"
                                  >
                                    <div class="_2eqm _3qn7 _61-1 _2fyi _3qng">
                                      <div>
                                        <div class="_ag27">
                                          <input
                                            aria-checked="false"
                                            aria-disabled="false"
                                            id="js_3b"
                                            class=""
                                            type="checkbox"
                                          />
                                          <div
                                            class="_afh9 style-t7YQQ"
                                            id="style-t7YQQ"
                                          >
                                            <i
                                              class="_afhg img style-O2i7W"
                                              height="16"
                                              width="16"
                                              alt=""
                                              data-visualcompletion="css-img"
                                              id="style-O2i7W"
                                            ></i>
                                          </div>
                                        </div>
                                        <label
                                          class="accessible_elem"
                                          for="js_3b"
                                        >
                                          <span
                                            id="style-z7hhL"
                                            class="style-z7hhL"
                                          >
                                            Select row
                                          </span>
                                        </label>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                class="_2e42 _2yi0 _2yia style-nkHym"
                                role="cell"
                                id="style-nkHym"
                              >
                                <div class="x78zum5 x1qughib x2lwn1j xeuugli x1xmf6yo x1emribx x1e56ztr x1i64zmx">
                                  <div class="x78zum5 xdt5ytf x2lwn1j xeuugli">
                                    <div class="xmi5d70 x1fvot60 xo1l8bm xxio538 xbsr9hj xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj xeuugli x1uvtmcs">
                                      <a
                                        class="xt0psk2 x1hl2dhg xt0b8zv xmi5d70 xxio538 x1qsmy5i xq9mrsl x1yc453h x1h4wwuj x1qlqyl8 x1pd3egz"
                                        href="/adsmanager/reporting/view?act=1387295665246598&amp;selected_report_id=120214160548740644"
                                      >
                                        Untitled report
                                      </a>
                                    </div>
                                    <span class="xmi5d70 xw23nyj xo1l8bm x63nzvj x1541jtf xq9mrsl x1h4wwuj xeuugli x1uvtmcs">
                                      1 ad account
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div
                                class="_2e42 _2yi0 _2yia style-QeRU7"
                                role="cell"
                                id="style-QeRU7"
                              >
                                <div class="_68tl style-2iKhV" id="style-2iKhV">
                                  <div
                                    class="_2eqm style-1VyZC"
                                    id="style-1VyZC"
                                  >
                                    <div class="_2eqm _3qn7 _61-1 _2fyi _3qng">
                                      <div class="_as9p _as9q _3qn7 _61-0 _2fyi _3qnf">
                                        <div class="_2pi3">
                                          <span class="xmi5d70 x1fvot60 xo1l8bm xxio538 xbsr9hj xq9mrsl x1h4wwuj xeuugli x1uvtmcs">
                                            13/11/2024
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                class="_2e42 _2yi0 _2yia style-KjPSA"
                                role="cell"
                                id="style-KjPSA"
                              >
                                <div class="_68tl style-rQ8FG" id="style-rQ8FG">
                                  <div
                                    class="_2eqm style-fgEyp"
                                    id="style-fgEyp"
                                  >
                                    <div class="_2eqm _3qn7 _61-1 _2fyi _3qng">
                                      <div class="_as9p _as9q _3qn7 _61-0 _2fyi _3qnf">
                                        <div class="_2pi3">
                                          <span class="xmi5d70 x1fvot60 xo1l8bm xxio538 xbsr9hj xq9mrsl x1h4wwuj xeuugli x1uvtmcs">
                                            13/11/2024
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                class="_2e42 _2yh_ _2yi0 _2yia style-lxMqQ"
                                role="cell"
                                id="style-lxMqQ"
                              >
                                <div class="_68tl style-szljO" id="style-szljO">
                                  <div
                                    class="_3bfi style-DcGP7"
                                    id="style-DcGP7"
                                  >
                                    <div class="_13aw _3qn7 _61-1 _2fyh _3qnf">
                                      <div
                                        class="ellipsis _13a- style-AhLYj"
                                        data-hover="tooltip"
                                        data-tooltip-content="13/11/2024"
                                        data-tooltip-display="overflow"
                                        data-tooltip-position="above"
                                        id="style-AhLYj"
                                      >
                                        13/11/2024
                                      </div>
                                      <div
                                        class="ellipsis _13b0 style-gKDbL"
                                        data-hover="tooltip"
                                        data-tooltip-content="by Ali Hamza"
                                        data-tooltip-display="overflow"
                                        data-tooltip-position="above"
                                        id="style-gKDbL"
                                      >
                                        by Ali Hamza
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                class="_2e42 _2yi0 _2yia style-5FefX"
                                role="cell"
                                id="style-5FefX"
                              >
                                <div
                                  class="_68tl _8-qx style-oknNk"
                                  id="style-oknNk"
                                >
                                  <div
                                    class="_2eqm style-WPZAt"
                                    id="style-WPZAt"
                                  >
                                    <div class="_2eqm _3qn7 _61-1 _2fyi _3qng">
                                      <div>
                                        <div class="_ag27">
                                          <input
                                            aria-checked="false"
                                            aria-disabled="false"
                                            id="js_3d"
                                            class=""
                                            type="checkbox"
                                          />
                                          <div
                                            class="_afh9 style-K5XJy"
                                            id="style-K5XJy"
                                          >
                                            <i
                                              class="_afhg img style-JMrmE"
                                              height="16"
                                              width="16"
                                              alt=""
                                              data-visualcompletion="css-img"
                                              id="style-JMrmE"
                                            ></i>
                                          </div>
                                        </div>
                                        <label
                                          class="accessible_elem"
                                          for="js_3d"
                                        >
                                          <span
                                            id="style-lBq33"
                                            class="style-lBq33"
                                          >
                                            Select row
                                          </span>
                                        </label>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                class="_2e42 _2yi0 _2yia style-bAywH"
                                role="cell"
                                id="style-bAywH"
                              >
                                <div class="x78zum5 x1qughib x2lwn1j xeuugli x1xmf6yo x1emribx x1e56ztr x1i64zmx">
                                  <div class="x78zum5 xdt5ytf x2lwn1j xeuugli">
                                    <div class="xmi5d70 x1fvot60 xo1l8bm xxio538 xbsr9hj xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj xeuugli x1uvtmcs">
                                      <a
                                        class="xt0psk2 x1hl2dhg xt0b8zv xmi5d70 xxio538 x1qsmy5i xq9mrsl x1yc453h x1h4wwuj x1qlqyl8 x1pd3egz"
                                        href="/adsmanager/reporting/view?act=1387295665246598&amp;selected_report_id=120214160548710644"
                                      >
                                        Untitled report
                                      </a>
                                    </div>
                                    <span class="xmi5d70 xw23nyj xo1l8bm x63nzvj x1541jtf xq9mrsl x1h4wwuj xeuugli x1uvtmcs">
                                      1 ad account
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div
                                class="_2e42 _2yi0 _2yia style-BaHLs"
                                role="cell"
                                id="style-BaHLs"
                              >
                                <div class="_68tl style-FSptC" id="style-FSptC">
                                  <div
                                    class="_2eqm style-8ECIZ"
                                    id="style-8ECIZ"
                                  >
                                    <div class="_2eqm _3qn7 _61-1 _2fyi _3qng">
                                      <div class="_as9p _as9q _3qn7 _61-0 _2fyi _3qnf">
                                        <div class="_2pi3">
                                          <span class="xmi5d70 x1fvot60 xo1l8bm xxio538 xbsr9hj xq9mrsl x1h4wwuj xeuugli x1uvtmcs">
                                            13/11/2024
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                class="_2e42 _2yi0 _2yia style-aeeIa"
                                role="cell"
                                id="style-aeeIa"
                              >
                                <div class="_68tl style-UIFeH" id="style-UIFeH">
                                  <div
                                    class="_2eqm style-zrPU3"
                                    id="style-zrPU3"
                                  >
                                    <div class="_2eqm _3qn7 _61-1 _2fyi _3qng">
                                      <div class="_as9p _as9q _3qn7 _61-0 _2fyi _3qnf">
                                        <div class="_2pi3">
                                          <span class="xmi5d70 x1fvot60 xo1l8bm xxio538 xbsr9hj xq9mrsl x1h4wwuj xeuugli x1uvtmcs">
                                            13/11/2024
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                class="_2e42 _2yh_ _2yi0 _2yia style-H224A"
                                role="cell"
                                id="style-H224A"
                              >
                                <div class="_68tl style-VzTkR" id="style-VzTkR">
                                  <div
                                    class="_3bfi style-DxMfZ"
                                    id="style-DxMfZ"
                                  >
                                    <div class="_13aw _3qn7 _61-1 _2fyh _3qnf">
                                      <div
                                        class="ellipsis _13a- style-4hSDb"
                                        data-hover="tooltip"
                                        data-tooltip-content="13/11/2024"
                                        data-tooltip-display="overflow"
                                        data-tooltip-position="above"
                                        id="style-4hSDb"
                                      >
                                        13/11/2024
                                      </div>
                                      <div
                                        class="ellipsis _13b0 style-Vxwo5"
                                        data-hover="tooltip"
                                        data-tooltip-content="by Ali Hamza"
                                        data-tooltip-display="overflow"
                                        data-tooltip-position="above"
                                        id="style-Vxwo5"
                                      >
                                        by Ali Hamza
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                class="_2e42 _2yi0 _2yia style-Fqzjk"
                                role="cell"
                                id="style-Fqzjk"
                              >
                                <div
                                  class="_68tl _8-qx style-sAeE4"
                                  id="style-sAeE4"
                                >
                                  <div
                                    class="_2eqm style-1d8O5"
                                    id="style-1d8O5"
                                  >
                                    <div class="_2eqm _3qn7 _61-1 _2fyi _3qng">
                                      <div>
                                        <div class="_ag27">
                                          <input
                                            aria-checked="false"
                                            aria-disabled="false"
                                            id="js_3f"
                                            class=""
                                            type="checkbox"
                                          />
                                          <div
                                            class="_afh9 style-5nPbs"
                                            id="style-5nPbs"
                                          >
                                            <i
                                              class="_afhg img style-oJNVd"
                                              height="16"
                                              width="16"
                                              alt=""
                                              data-visualcompletion="css-img"
                                              id="style-oJNVd"
                                            ></i>
                                          </div>
                                        </div>
                                        <label
                                          class="accessible_elem"
                                          for="js_3f"
                                        >
                                          <span
                                            id="style-7ySZG"
                                            class="style-7ySZG"
                                          >
                                            Select row
                                          </span>
                                        </label>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                class="_2e42 _2yi0 _2yia style-kSaGE"
                                role="cell"
                                id="style-kSaGE"
                              >
                                <div class="x78zum5 x1qughib x2lwn1j xeuugli x1xmf6yo x1emribx x1e56ztr x1i64zmx">
                                  <div class="x78zum5 xdt5ytf x2lwn1j xeuugli">
                                    <div class="xmi5d70 x1fvot60 xo1l8bm xxio538 xbsr9hj xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj xeuugli x1uvtmcs">
                                      <a
                                        class="xt0psk2 x1hl2dhg xt0b8zv xmi5d70 xxio538 x1qsmy5i xq9mrsl x1yc453h x1h4wwuj x1qlqyl8 x1pd3egz"
                                        href="/adsmanager/reporting/view?act=1387295665246598&amp;selected_report_id=120214160548660644"
                                      >
                                        Untitled report
                                      </a>
                                    </div>
                                    <span class="xmi5d70 xw23nyj xo1l8bm x63nzvj x1541jtf xq9mrsl x1h4wwuj xeuugli x1uvtmcs">
                                      1 ad account
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div
                                class="_2e42 _2yi0 _2yia style-JOwxp"
                                role="cell"
                                id="style-JOwxp"
                              >
                                <div class="_68tl style-jWWBt" id="style-jWWBt">
                                  <div
                                    class="_2eqm style-RfcD4"
                                    id="style-RfcD4"
                                  >
                                    <div class="_2eqm _3qn7 _61-1 _2fyi _3qng">
                                      <div class="_as9p _as9q _3qn7 _61-0 _2fyi _3qnf">
                                        <div class="_2pi3">
                                          <span class="xmi5d70 x1fvot60 xo1l8bm xxio538 xbsr9hj xq9mrsl x1h4wwuj xeuugli x1uvtmcs">
                                            13/11/2024
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                class="_2e42 _2yi0 _2yia style-Et2lQ"
                                role="cell"
                                id="style-Et2lQ"
                              >
                                <div class="_68tl style-Y4DLv" id="style-Y4DLv">
                                  <div
                                    class="_2eqm style-N7Sml"
                                    id="style-N7Sml"
                                  >
                                    <div class="_2eqm _3qn7 _61-1 _2fyi _3qng">
                                      <div class="_as9p _as9q _3qn7 _61-0 _2fyi _3qnf">
                                        <div class="_2pi3">
                                          <span class="xmi5d70 x1fvot60 xo1l8bm xxio538 xbsr9hj xq9mrsl x1h4wwuj xeuugli x1uvtmcs">
                                            13/11/2024
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                class="_2e42 _2yh_ _2yi0 _2yia style-ZiV9H"
                                role="cell"
                                id="style-ZiV9H"
                              >
                                <div class="_68tl style-7OUVq" id="style-7OUVq">
                                  <div
                                    class="_3bfi style-SxVU8"
                                    id="style-SxVU8"
                                  >
                                    <div class="_13aw _3qn7 _61-1 _2fyh _3qnf">
                                      <div
                                        class="ellipsis _13a- style-RUcmi"
                                        data-hover="tooltip"
                                        data-tooltip-content="13/11/2024"
                                        data-tooltip-display="overflow"
                                        data-tooltip-position="above"
                                        id="style-RUcmi"
                                      >
                                        13/11/2024
                                      </div>
                                      <div
                                        class="ellipsis _13b0 style-BcZf5"
                                        data-hover="tooltip"
                                        data-tooltip-content="by Ali Hamza"
                                        data-tooltip-display="overflow"
                                        data-tooltip-position="above"
                                        id="style-BcZf5"
                                      >
                                        by Ali Hamza
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                class="_2e42 _2yi0 _2yia style-M3n3S"
                                role="cell"
                                id="style-M3n3S"
                              >
                                <div
                                  class="_68tl _8-qx style-AnVKS"
                                  id="style-AnVKS"
                                >
                                  <div
                                    class="_2eqm style-k91BH"
                                    id="style-k91BH"
                                  >
                                    <div class="_2eqm _3qn7 _61-1 _2fyi _3qng">
                                      <div>
                                        <div class="_ag27">
                                          <input
                                            aria-checked="false"
                                            aria-disabled="false"
                                            id="js_3h"
                                            class=""
                                            type="checkbox"
                                          />
                                          <div
                                            class="_afh9 style-rypZL"
                                            id="style-rypZL"
                                          >
                                            <i
                                              class="_afhg img style-jLxz9"
                                              height="16"
                                              width="16"
                                              alt=""
                                              data-visualcompletion="css-img"
                                              id="style-jLxz9"
                                            ></i>
                                          </div>
                                        </div>
                                        <label
                                          class="accessible_elem"
                                          for="js_3h"
                                        >
                                          <span
                                            id="style-pRzY9"
                                            class="style-pRzY9"
                                          >
                                            Select row
                                          </span>
                                        </label>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                class="_2e42 _2yi0 _2yia style-ejmxf"
                                role="cell"
                                id="style-ejmxf"
                              >
                                <div class="x78zum5 x1qughib x2lwn1j xeuugli x1xmf6yo x1emribx x1e56ztr x1i64zmx">
                                  <div class="x78zum5 xdt5ytf x2lwn1j xeuugli">
                                    <div class="xmi5d70 x1fvot60 xo1l8bm xxio538 xbsr9hj xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj xeuugli x1uvtmcs">
                                      <a
                                        class="xt0psk2 x1hl2dhg xt0b8zv xmi5d70 xxio538 x1qsmy5i xq9mrsl x1yc453h x1h4wwuj x1qlqyl8 x1pd3egz"
                                        href="/adsmanager/reporting/view?act=1387295665246598&amp;selected_report_id=120214160548640644"
                                      >
                                        Untitled report
                                      </a>
                                    </div>
                                    <span class="xmi5d70 xw23nyj xo1l8bm x63nzvj x1541jtf xq9mrsl x1h4wwuj xeuugli x1uvtmcs">
                                      1 ad account
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div
                                class="_2e42 _2yi0 _2yia style-fJbQ4"
                                role="cell"
                                id="style-fJbQ4"
                              >
                                <div class="_68tl style-4friO" id="style-4friO">
                                  <div
                                    class="_2eqm style-CwRY2"
                                    id="style-CwRY2"
                                  >
                                    <div class="_2eqm _3qn7 _61-1 _2fyi _3qng">
                                      <div class="_as9p _as9q _3qn7 _61-0 _2fyi _3qnf">
                                        <div class="_2pi3">
                                          <span class="xmi5d70 x1fvot60 xo1l8bm xxio538 xbsr9hj xq9mrsl x1h4wwuj xeuugli x1uvtmcs">
                                            13/11/2024
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                class="_2e42 _2yi0 _2yia style-8bRdO"
                                role="cell"
                                id="style-8bRdO"
                              >
                                <div class="_68tl style-fFD7a" id="style-fFD7a">
                                  <div
                                    class="_2eqm style-lM9os"
                                    id="style-lM9os"
                                  >
                                    <div class="_2eqm _3qn7 _61-1 _2fyi _3qng">
                                      <div class="_as9p _as9q _3qn7 _61-0 _2fyi _3qnf">
                                        <div class="_2pi3">
                                          <span class="xmi5d70 x1fvot60 xo1l8bm xxio538 xbsr9hj xq9mrsl x1h4wwuj xeuugli x1uvtmcs">
                                            13/11/2024
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                class="_2e42 _2yh_ _2yi0 _2yia style-iQvIh"
                                role="cell"
                                id="style-iQvIh"
                              >
                                <div class="_68tl style-8zoCq" id="style-8zoCq">
                                  <div
                                    class="_3bfi style-O5vCs"
                                    id="style-O5vCs"
                                  >
                                    <div class="_13aw _3qn7 _61-1 _2fyh _3qnf">
                                      <div
                                        class="ellipsis _13a- style-oOmSi"
                                        data-hover="tooltip"
                                        data-tooltip-content="13/11/2024"
                                        data-tooltip-display="overflow"
                                        data-tooltip-position="above"
                                        id="style-oOmSi"
                                      >
                                        13/11/2024
                                      </div>
                                      <div
                                        class="ellipsis _13b0 style-ayodm"
                                        data-hover="tooltip"
                                        data-tooltip-content="by Ali Hamza"
                                        data-tooltip-display="overflow"
                                        data-tooltip-position="above"
                                        id="style-ayodm"
                                      >
                                        by Ali Hamza
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                class="_2e42 _2yi0 _2yia style-KE9FK"
                                role="cell"
                                id="style-KE9FK"
                              >
                                <div
                                  class="_68tl _8-qx style-SUJLY"
                                  id="style-SUJLY"
                                >
                                  <div
                                    class="_2eqm style-W7KoT"
                                    id="style-W7KoT"
                                  >
                                    <div class="_2eqm _3qn7 _61-1 _2fyi _3qng">
                                      <div>
                                        <div class="_ag27">
                                          <input
                                            aria-checked="false"
                                            aria-disabled="false"
                                            id="js_3j"
                                            class=""
                                            type="checkbox"
                                          />
                                          <div
                                            class="_afh9 style-GeLyn"
                                            id="style-GeLyn"
                                          >
                                            <i
                                              class="_afhg img style-P6Mho"
                                              height="16"
                                              width="16"
                                              alt=""
                                              data-visualcompletion="css-img"
                                              id="style-P6Mho"
                                            ></i>
                                          </div>
                                        </div>
                                        <label
                                          class="accessible_elem"
                                          for="js_3j"
                                        >
                                          <span
                                            id="style-VnGKI"
                                            class="style-VnGKI"
                                          >
                                            Select row
                                          </span>
                                        </label>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                class="_2e42 _2yi0 _2yia style-hlt75"
                                role="cell"
                                id="style-hlt75"
                              >
                                <div class="x78zum5 x1qughib x2lwn1j xeuugli x1xmf6yo x1emribx x1e56ztr x1i64zmx">
                                  <div class="x78zum5 xdt5ytf x2lwn1j xeuugli">
                                    <div class="xmi5d70 x1fvot60 xo1l8bm xxio538 xbsr9hj xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj xeuugli x1uvtmcs">
                                      <a
                                        class="xt0psk2 x1hl2dhg xt0b8zv xmi5d70 xxio538 x1qsmy5i xq9mrsl x1yc453h x1h4wwuj x1qlqyl8 x1pd3egz"
                                        href="/adsmanager/reporting/view?act=1387295665246598&amp;selected_report_id=120214160548630644"
                                      >
                                        Untitled report
                                      </a>
                                    </div>
                                    <span class="xmi5d70 xw23nyj xo1l8bm x63nzvj x1541jtf xq9mrsl x1h4wwuj xeuugli x1uvtmcs">
                                      1 ad account
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div
                                class="_2e42 _2yi0 _2yia style-T992q"
                                role="cell"
                                id="style-T992q"
                              >
                                <div class="_68tl style-pEIDd" id="style-pEIDd">
                                  <div
                                    class="_2eqm style-1giLB"
                                    id="style-1giLB"
                                  >
                                    <div class="_2eqm _3qn7 _61-1 _2fyi _3qng">
                                      <div class="_as9p _as9q _3qn7 _61-0 _2fyi _3qnf">
                                        <div class="_2pi3">
                                          <span class="xmi5d70 x1fvot60 xo1l8bm xxio538 xbsr9hj xq9mrsl x1h4wwuj xeuugli x1uvtmcs">
                                            13/11/2024
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                class="_2e42 _2yi0 _2yia style-v1XLo"
                                role="cell"
                                id="style-v1XLo"
                              >
                                <div class="_68tl style-bZoLb" id="style-bZoLb">
                                  <div
                                    class="_2eqm style-QspgC"
                                    id="style-QspgC"
                                  >
                                    <div class="_2eqm _3qn7 _61-1 _2fyi _3qng">
                                      <div class="_as9p _as9q _3qn7 _61-0 _2fyi _3qnf">
                                        <div class="_2pi3">
                                          <span class="xmi5d70 x1fvot60 xo1l8bm xxio538 xbsr9hj xq9mrsl x1h4wwuj xeuugli x1uvtmcs">
                                            13/11/2024
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                class="_2e42 _2yh_ _2yi0 _2yia style-2Tx2J"
                                role="cell"
                                id="style-2Tx2J"
                              >
                                <div class="_68tl style-UQbMf" id="style-UQbMf">
                                  <div
                                    class="_3bfi style-U8JBr"
                                    id="style-U8JBr"
                                  >
                                    <div class="_13aw _3qn7 _61-1 _2fyh _3qnf">
                                      <div
                                        class="ellipsis _13a- style-yyYlA"
                                        data-hover="tooltip"
                                        data-tooltip-content="13/11/2024"
                                        data-tooltip-display="overflow"
                                        data-tooltip-position="above"
                                        id="style-yyYlA"
                                      >
                                        13/11/2024
                                      </div>
                                      <div
                                        class="ellipsis _13b0 style-oO29Q"
                                        data-hover="tooltip"
                                        data-tooltip-content="by Ali Hamza"
                                        data-tooltip-display="overflow"
                                        data-tooltip-position="above"
                                        id="style-oO29Q"
                                      >
                                        by Ali Hamza
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                class="_2e42 _2yi0 _2yia style-q4sQg"
                                role="cell"
                                id="style-q4sQg"
                              >
                                <div
                                  class="_68tl _8-qx style-4omwz"
                                  id="style-4omwz"
                                >
                                  <div
                                    class="_2eqm style-5nMsG"
                                    id="style-5nMsG"
                                  >
                                    <div class="_2eqm _3qn7 _61-1 _2fyi _3qng">
                                      <div>
                                        <div class="_ag27">
                                          <input
                                            aria-checked="false"
                                            aria-disabled="false"
                                            id="js_3l"
                                            class=""
                                            type="checkbox"
                                          />
                                          <div
                                            class="_afh9 style-Jmr7R"
                                            id="style-Jmr7R"
                                          >
                                            <i
                                              class="_afhg img style-jyb9w"
                                              height="16"
                                              width="16"
                                              alt=""
                                              data-visualcompletion="css-img"
                                              id="style-jyb9w"
                                            ></i>
                                          </div>
                                        </div>
                                        <label
                                          class="accessible_elem"
                                          for="js_3l"
                                        >
                                          <span
                                            id="style-sLDHi"
                                            class="style-sLDHi"
                                          >
                                            Select row
                                          </span>
                                        </label>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                class="_2e42 _2yi0 _2yia style-HDahY"
                                role="cell"
                                id="style-HDahY"
                              >
                                <div class="x78zum5 x1qughib x2lwn1j xeuugli x1xmf6yo x1emribx x1e56ztr x1i64zmx">
                                  <div class="x78zum5 xdt5ytf x2lwn1j xeuugli">
                                    <div class="xmi5d70 x1fvot60 xo1l8bm xxio538 xbsr9hj xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj xeuugli x1uvtmcs">
                                      <a
                                        class="xt0psk2 x1hl2dhg xt0b8zv xmi5d70 xxio538 x1qsmy5i xq9mrsl x1yc453h x1h4wwuj x1qlqyl8 x1pd3egz"
                                        href="/adsmanager/reporting/view?act=1387295665246598&amp;selected_report_id=120214160548620644"
                                      >
                                        Untitled report
                                      </a>
                                    </div>
                                    <span class="xmi5d70 xw23nyj xo1l8bm x63nzvj x1541jtf xq9mrsl x1h4wwuj xeuugli x1uvtmcs">
                                      1 ad account
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div
                                class="_2e42 _2yi0 _2yia style-hd6Oo"
                                role="cell"
                                id="style-hd6Oo"
                              >
                                <div class="_68tl style-q1T2B" id="style-q1T2B">
                                  <div
                                    class="_2eqm style-dTfPU"
                                    id="style-dTfPU"
                                  >
                                    <div class="_2eqm _3qn7 _61-1 _2fyi _3qng">
                                      <div class="_as9p _as9q _3qn7 _61-0 _2fyi _3qnf">
                                        <div class="_2pi3">
                                          <span class="xmi5d70 x1fvot60 xo1l8bm xxio538 xbsr9hj xq9mrsl x1h4wwuj xeuugli x1uvtmcs">
                                            13/11/2024
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                class="_2e42 _2yi0 _2yia style-Yjg6U"
                                role="cell"
                                id="style-Yjg6U"
                              >
                                <div class="_68tl style-sZCbT" id="style-sZCbT">
                                  <div
                                    class="_2eqm style-X96Y5"
                                    id="style-X96Y5"
                                  >
                                    <div class="_2eqm _3qn7 _61-1 _2fyi _3qng">
                                      <div class="_as9p _as9q _3qn7 _61-0 _2fyi _3qnf">
                                        <div class="_2pi3">
                                          <span class="xmi5d70 x1fvot60 xo1l8bm xxio538 xbsr9hj xq9mrsl x1h4wwuj xeuugli x1uvtmcs">
                                            13/11/2024
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                class="_2e42 _2yh_ _2yi0 _2yia style-ZTko2"
                                role="cell"
                                id="style-ZTko2"
                              >
                                <div class="_68tl style-wzGsx" id="style-wzGsx">
                                  <div
                                    class="_3bfi style-TVnpV"
                                    id="style-TVnpV"
                                  >
                                    <div class="_13aw _3qn7 _61-1 _2fyh _3qnf">
                                      <div
                                        class="ellipsis _13a- style-sG3OQ"
                                        data-hover="tooltip"
                                        data-tooltip-content="13/11/2024"
                                        data-tooltip-display="overflow"
                                        data-tooltip-position="above"
                                        id="style-sG3OQ"
                                      >
                                        13/11/2024
                                      </div>
                                      <div
                                        class="ellipsis _13b0 style-vajMZ"
                                        data-hover="tooltip"
                                        data-tooltip-content="by Ali Hamza"
                                        data-tooltip-display="overflow"
                                        data-tooltip-position="above"
                                        id="style-vajMZ"
                                      >
                                        by Ali Hamza
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                class="_2e42 _2yi0 _2yia style-3WATc"
                                role="cell"
                                id="style-3WATc"
                              >
                                <div
                                  class="_68tl _8-qx style-mbNK6"
                                  id="style-mbNK6"
                                >
                                  <div
                                    class="_2eqm style-JDna2"
                                    id="style-JDna2"
                                  >
                                    <div class="_2eqm _3qn7 _61-1 _2fyi _3qng">
                                      <div>
                                        <div class="_ag27">
                                          <input
                                            aria-checked="false"
                                            aria-disabled="false"
                                            id="js_3n"
                                            class=""
                                            type="checkbox"
                                          />
                                          <div
                                            class="_afh9 style-oWwJ4"
                                            id="style-oWwJ4"
                                          >
                                            <i
                                              class="_afhg img style-1mSDz"
                                              height="16"
                                              width="16"
                                              alt=""
                                              data-visualcompletion="css-img"
                                              id="style-1mSDz"
                                            ></i>
                                          </div>
                                        </div>
                                        <label
                                          class="accessible_elem"
                                          for="js_3n"
                                        >
                                          <span
                                            id="style-rH5g5"
                                            class="style-rH5g5"
                                          >
                                            Select row
                                          </span>
                                        </label>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                class="_2e42 _2yi0 _2yia style-V1R8f"
                                role="cell"
                                id="style-V1R8f"
                              >
                                <div class="x78zum5 x1qughib x2lwn1j xeuugli x1xmf6yo x1emribx x1e56ztr x1i64zmx">
                                  <div class="x78zum5 xdt5ytf x2lwn1j xeuugli">
                                    <div class="xmi5d70 x1fvot60 xo1l8bm xxio538 xbsr9hj xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj xeuugli x1uvtmcs">
                                      <a
                                        class="xt0psk2 x1hl2dhg xt0b8zv xmi5d70 xxio538 x1qsmy5i xq9mrsl x1yc453h x1h4wwuj x1qlqyl8 x1pd3egz"
                                        href="/adsmanager/reporting/view?act=1387295665246598&amp;selected_report_id=120214160548580644"
                                      >
                                        Untitled report
                                      </a>
                                    </div>
                                    <span class="xmi5d70 xw23nyj xo1l8bm x63nzvj x1541jtf xq9mrsl x1h4wwuj xeuugli x1uvtmcs">
                                      1 ad account
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div
                                class="_2e42 _2yi0 _2yia style-LiKCE"
                                role="cell"
                                id="style-LiKCE"
                              >
                                <div class="_68tl style-Px4mG" id="style-Px4mG">
                                  <div
                                    class="_2eqm style-ZQA3O"
                                    id="style-ZQA3O"
                                  >
                                    <div class="_2eqm _3qn7 _61-1 _2fyi _3qng">
                                      <div class="_as9p _as9q _3qn7 _61-0 _2fyi _3qnf">
                                        <div class="_2pi3">
                                          <span class="xmi5d70 x1fvot60 xo1l8bm xxio538 xbsr9hj xq9mrsl x1h4wwuj xeuugli x1uvtmcs">
                                            13/11/2024
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                class="_2e42 _2yi0 _2yia style-POOPQ"
                                role="cell"
                                id="style-POOPQ"
                              >
                                <div class="_68tl style-zRc7M" id="style-zRc7M">
                                  <div
                                    class="_2eqm style-sD4AC"
                                    id="style-sD4AC"
                                  >
                                    <div class="_2eqm _3qn7 _61-1 _2fyi _3qng">
                                      <div class="_as9p _as9q _3qn7 _61-0 _2fyi _3qnf">
                                        <div class="_2pi3">
                                          <span class="xmi5d70 x1fvot60 xo1l8bm xxio538 xbsr9hj xq9mrsl x1h4wwuj xeuugli x1uvtmcs">
                                            13/11/2024
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                class="_2e42 _2yh_ _2yi0 _2yia style-2dlFS"
                                role="cell"
                                id="style-2dlFS"
                              >
                                <div class="_68tl style-ViK7P" id="style-ViK7P">
                                  <div
                                    class="_3bfi style-Pr5nm"
                                    id="style-Pr5nm"
                                  >
                                    <div class="_13aw _3qn7 _61-1 _2fyh _3qnf">
                                      <div
                                        class="ellipsis _13a- style-QooWN"
                                        data-hover="tooltip"
                                        data-tooltip-content="13/11/2024"
                                        data-tooltip-display="overflow"
                                        data-tooltip-position="above"
                                        id="style-QooWN"
                                      >
                                        13/11/2024
                                      </div>
                                      <div
                                        class="ellipsis _13b0 style-AvQIl"
                                        data-hover="tooltip"
                                        data-tooltip-content="by Ali Hamza"
                                        data-tooltip-display="overflow"
                                        data-tooltip-position="above"
                                        id="style-AvQIl"
                                      >
                                        by Ali Hamza
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
                    <div class="xjm9jq1 xg01cxk x47corl xh8yej3 x1y332i5"></div>
                  </div>
                  <div class="x10wjd1d x47corl x10l6tqk x19991ni x13dflua xwji4o3 xh8yej3 xg01cxk x67dex8 x13vifvy"></div>
                  <div class="x10wjd1d x47corl x10l6tqk x19991ni x13dflua xwji4o3 xh8yej3 xg01cxk x1ta9b4f x1ey2m1c"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="xod5an3" style={{ height: "95vh" }}>
          <div class="x5yr21d x9f619 style-QnViR" id="style-QnViR">
            <div
              aria-labelledby="js_1e"
              class="x1gzqxud x1lcm9me x1yr5g0i xrt01vj x10y3i5r xhgxa4x xy5ysw6 x1qkj6lk xn3walq xnvurfn xv1ta3e x1opv7go x1dtnpoi xibdhds xtnng9g xhvrwov x13k1m86 xwx4but x1cpjm7i xszcg87 x1hmns74 xkk1bqk x14d4353 xsxiz9q x1rmj1tg xchklzq x9f619 xc8icb0 x1n2onr6 x1pvq41x xhhp2wi x14q35kh x1wa3ocq x1n7iyjn x1s928wv x1wsn0xg x1j6awrg x162n7g1 x1m1drc7 x4eaejv xi4xitw x5yr21d xh8yej3"
              data-auto-logging-component-type="GeoCard"
            >
              <div class="x78zum5 xdt5ytf x5yr21d xedcshv x1t2pt76 xh8yej3">
                <div class="x9f619 x78zum5 x2lah0s xh8yej3 xyamay9 x1l90r2v x1swvt13 x1pi30zi">
                  <div class="x1iyjqo2 xeuugli">
                    <div class="x1cy8zhl x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94">
                      <div class="x1iyjqo2 xeuugli">
                        <div
                          aria-level="3"
                          class="x1xqt7ti x1uxerd5 x1xlr1w8 xrohxju xbsr9hj xq9mrsl x1yc453h x1mzt3pk x1vvkbs x13faqbe xeuugli x1uvtmcs"
                          id="js_1e"
                          role="heading"
                        >
                          Suggested report templates
                        </div>
                      </div>
                      <div class="x78zum5 x1q0g3np xozqiw3 xeuugli x1iyjqo2 x2lah0s x19lwn94 x6s0dn4 x13a6bvl xu0aao5 x9otpla x1wsgfga">
                        <div class="x3nfvp2 x193iq5w xxymvpz" role="none">
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
                                  Close Side Pane
                                </div>
                                <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1hc1fzr x13dflua x6o7n8i xxziih7 x12w9bfk xl56j7k xh8yej3">
                                  <div class="x3nfvp2 x2lah0s x1c4vz4f">
                                    <i
                                      alt=""
                                      data-visualcompletion="css-img"
                                      class="img style-XzW5l"
                                      id="style-XzW5l"
                                    ></i>
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
                </div>
                <div class="x9f619 x78zum5 x1iyjqo2 x5yr21d x2lwn1j x1n2onr6 xh8yej3">
                  <div class="xw2csxc x1odjw0f xh8yej3 x18d9i69">
                    <div class="xjm9jq1 xg01cxk x47corl xh8yej3 x1jyxor1"></div>
                    <div class="xk9mzb7 x11jkl0l x1sfzahb x182zwpg">
                      <div class="xdj266r x11jkl0l xsrbbds x1mnrxsn">
                        <span class="xmi5d70 x1fvot60 xo1l8bm xxio538 xbsr9hj xq9mrsl x1h4wwuj xeuugli x1uvtmcs">
                          Try a report template to get started. Each one will
                          have a selection of metrics and breakdowns which you
                          can edit, add to or delete.{" "}
                          <a
                            class="xt0psk2 x1hl2dhg xt0b8zv xmi5d70 xxio538 x1qsmy5i xq9mrsl x1yc453h x1h4wwuj x1qlqyl8 x1pd3egz"
                            target="_blank"
                            href="https://www.facebook.com/business/help/269292347684384"
                          >
                            Learn more
                          </a>
                        </span>
                      </div>
                      <div class="xyorhqc">
                        <div class="x1lcm9me x1yr5g0i xrt01vj x10y3i5r x1gzqxud x1kmqopl xyorhqc">
                          <div class="_3qn7 _61-0 _2fyh _3qnf">
                            <div
                              class="_6g3g xh8yej3 style-b6Ek1"
                              id="style-b6Ek1"
                            >
                              <div id="style-Zm5LT" class="style-Zm5LT">
                                <div class="_3qn7 _61-0 _2fyi _3qng">
                                  <div
                                    class="_6g3g style-2iHRF"
                                    id="style-2iHRF"
                                  >
                                    <div
                                      aria-level="3"
                                      class="x1xqt7ti x1uxerd5 x1xlr1w8 xrohxju xbsr9hj xuxw1ft x1yc453h x1h4wwuj xeuugli x1uvtmcs x1d52u69 x1gslohp"
                                      role="heading"
                                    >
                                      ROI snapshot
                                    </div>
                                  </div>
                                  <div
                                    class="_6g3g x1gslohp xw3qccf xsgj6o6 xat24cr style-mmpkp"
                                    id="style-mmpkp"
                                  >
                                    <div>
                                      <div
                                        aria-busy="false"
                                        aria-controls="js_3r"
                                        aria-expanded="false"
                                        aria-haspopup="menu"
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
                                              More
                                            </div>
                                            <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1hc1fzr x13dflua x6o7n8i xxziih7 x12w9bfk xl56j7k xh8yej3">
                                              <div
                                                class="x3nfvp2 x120ccyz x1heor9g x2lah0s x1c4vz4f"
                                                role="presentation"
                                              >
                                                <div
                                                  class="xtwfq29 style-R3Ud9"
                                                  id="style-R3Ud9"
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
                            </div>
                            <div class="_6g3g style-sAwhY" id="style-sAwhY">
                              <div class="_3qn7 _61-0 _2fyi _3qng">
                                <div class="_6g3g style-Flxos" id="style-Flxos">
                                  <i
                                    class="x14vqqas xq8finb xod5an3 xmupa6y img style-8X86a"
                                    height="54"
                                    width="54"
                                    alt=""
                                    data-visualcompletion="css-img"
                                    id="style-8X86a"
                                  ></i>
                                </div>
                                <div class="_6g3g style-Yz8NG" id="style-Yz8NG">
                                  <span class="xmi5d70 x1fvot60 xo1l8bm xxio538 xbsr9hj xq9mrsl x1h4wwuj xeuugli x1uvtmcs">
                                    Analyse the direct impact of your ads on
                                    your sales. Includes metrics such as ROAS
                                    and cost per purchase.
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div
                              class="_6g3g xh8yej3 x1e56ztr style-t3sGk"
                              id="style-t3sGk"
                            >
                              <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x19lwn94 x1swvt13 x1pi30zi x1l90r2v x1y1aw1k x1c4vz4f x2lah0s">
                                <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x2lah0s x13a6bvl">
                                  <div
                                    class="x3nfvp2 x193iq5w xxymvpz style-3MrvN"
                                    role="none"
                                    id="style-3MrvN"
                                  >
                                    <div
                                      onClick={handleViewReport}
                                      aria-busy="false"
                                      class="x1i10hfl xjqpnuy xa49m3k xqeqjp1 x2hbi6w x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli x16tdsg8 xggy1nq x1ja2u2z x6s0dn4 x1ejq31n xd10rxx x1sy0etr x17r0tee xdl72j9 x1q0g3np x193iq5w x1n2onr6 x1hl2dhg x87ps6o xxymvpz xlh3980 xvmahel x1lku1pv x1g40iwv x1lcm9me x1yr5g0i xrt01vj x10y3i5r x1ob88yx xaatb59 x1qgsegg xo1l8bm xbsr9hj x1v911su x1y1aw1k xwib8y2 x1swvt13 x1pi30zi x78zum5 x1iyjqo2 xs83m0k"
                                      role="button"
                                      tabindex="0"
                                    >
                                      <span class="xmi5d70 x1fvot60 xxio538 x1heor9g xq9mrsl x1h4wwuj x1pd3egz xeuugli x1uvtmcs xh8yej3">
                                        <div class="x78zum5">
                                          <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1hc1fzr x13dflua x6o7n8i xxziih7 x12w9bfk xl56j7k xh8yej3">
                                            <div class="x1xqt7ti x1fvot60 xk50ysn xxio538 x1heor9g xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj xeuugli x1uvtmcs">
                                              View Report
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
                      <div class="xyorhqc">
                        <div class="x1lcm9me x1yr5g0i xrt01vj x10y3i5r x1gzqxud x1kmqopl xyorhqc">
                          <div class="_3qn7 _61-0 _2fyh _3qnf">
                            <div
                              class="_6g3g xh8yej3 style-Kefc3"
                              id="style-Kefc3"
                            >
                              <div id="style-B4V7P" class="style-B4V7P">
                                <div class="_3qn7 _61-0 _2fyi _3qng">
                                  <div
                                    class="_6g3g style-e8xU2"
                                    id="style-e8xU2"
                                  >
                                    <div
                                      aria-level="3"
                                      class="x1xqt7ti x1uxerd5 x1xlr1w8 xrohxju xbsr9hj xuxw1ft x1yc453h x1h4wwuj xeuugli x1uvtmcs x1d52u69 x1gslohp"
                                      role="heading"
                                    >
                                      Reach and frequency
                                    </div>
                                  </div>
                                  <div
                                    class="_6g3g x1gslohp xw3qccf xsgj6o6 xat24cr style-zlXfM"
                                    id="style-zlXfM"
                                  >
                                    <div>
                                      <div
                                        aria-busy="false"
                                        aria-controls="js_3s"
                                        aria-expanded="false"
                                        aria-haspopup="menu"
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
                                              More
                                            </div>
                                            <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1hc1fzr x13dflua x6o7n8i xxziih7 x12w9bfk xl56j7k xh8yej3">
                                              <div
                                                class="x3nfvp2 x120ccyz x1heor9g x2lah0s x1c4vz4f"
                                                role="presentation"
                                              >
                                                <div
                                                  class="xtwfq29 style-PnvTw"
                                                  id="style-PnvTw"
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
                            </div>
                            <div class="_6g3g style-aaQd9" id="style-aaQd9">
                              <div class="_3qn7 _61-0 _2fyi _3qng">
                                <div class="_6g3g style-EOEvf" id="style-EOEvf">
                                  <i
                                    class="x14vqqas xq8finb xod5an3 xmupa6y img style-c6FLd"
                                    height="54"
                                    width="54"
                                    alt=""
                                    data-visualcompletion="css-img"
                                    id="style-c6FLd"
                                  ></i>
                                </div>
                                <div class="_6g3g style-R7oqw" id="style-R7oqw">
                                  <span class="xmi5d70 x1fvot60 xo1l8bm xxio538 xbsr9hj xq9mrsl x1h4wwuj xeuugli x1uvtmcs">
                                    See how your ads performed across different
                                    platforms and placements and how many users
                                    they reached.
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div
                              class="_6g3g xh8yej3 x1e56ztr style-ONY3o"
                              id="style-ONY3o"
                            >
                              <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x19lwn94 x1swvt13 x1pi30zi x1l90r2v x1y1aw1k x1c4vz4f x2lah0s">
                                <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x2lah0s x13a6bvl">
                                  <div
                                    class="x3nfvp2 x193iq5w xxymvpz style-FfNlp"
                                    role="none"
                                    id="style-FfNlp"
                                  >
                                    <div
                                      aria-busy="false"
                                      class="x1i10hfl xjqpnuy xa49m3k xqeqjp1 x2hbi6w x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli x16tdsg8 xggy1nq x1ja2u2z x6s0dn4 x1ejq31n xd10rxx x1sy0etr x17r0tee xdl72j9 x1q0g3np x193iq5w x1n2onr6 x1hl2dhg x87ps6o xxymvpz xlh3980 xvmahel x1lku1pv x1g40iwv x1lcm9me x1yr5g0i xrt01vj x10y3i5r x1ob88yx xaatb59 x1qgsegg xo1l8bm xbsr9hj x1v911su x1y1aw1k xwib8y2 x1swvt13 x1pi30zi x78zum5 x1iyjqo2 xs83m0k"
                                      role="button"
                                      tabindex="0"
                                    >
                                      <span class="xmi5d70 x1fvot60 xxio538 x1heor9g xq9mrsl x1h4wwuj x1pd3egz xeuugli x1uvtmcs xh8yej3">
                                        <div class="x78zum5">
                                          <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1hc1fzr x13dflua x6o7n8i xxziih7 x12w9bfk xl56j7k xh8yej3">
                                            <div class="x1xqt7ti x1fvot60 xk50ysn xxio538 x1heor9g xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj xeuugli x1uvtmcs">
                                              View Report
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
                      <div class="xyorhqc">
                        <div class="x1lcm9me x1yr5g0i xrt01vj x10y3i5r x1gzqxud x1kmqopl xyorhqc">
                          <div class="_3qn7 _61-0 _2fyh _3qnf">
                            <div
                              class="_6g3g xh8yej3 style-5HW3m"
                              id="style-5HW3m"
                            >
                              <div id="style-Xh9ys" class="style-Xh9ys">
                                <div class="_3qn7 _61-0 _2fyi _3qng">
                                  <div
                                    class="_6g3g style-jI9CB"
                                    id="style-jI9CB"
                                  >
                                    <div
                                      aria-level="3"
                                      class="x1xqt7ti x1uxerd5 x1xlr1w8 xrohxju xbsr9hj xuxw1ft x1yc453h x1h4wwuj xeuugli x1uvtmcs x1d52u69 x1gslohp"
                                      role="heading"
                                    >
                                      Overall performance
                                    </div>
                                  </div>
                                  <div
                                    class="_6g3g x1gslohp xw3qccf xsgj6o6 xat24cr style-Ya1Gy"
                                    id="style-Ya1Gy"
                                  >
                                    <div>
                                      <div
                                        aria-busy="false"
                                        aria-controls="js_3t"
                                        aria-expanded="false"
                                        aria-haspopup="menu"
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
                                              More
                                            </div>
                                            <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1hc1fzr x13dflua x6o7n8i xxziih7 x12w9bfk xl56j7k xh8yej3">
                                              <div
                                                class="x3nfvp2 x120ccyz x1heor9g x2lah0s x1c4vz4f"
                                                role="presentation"
                                              >
                                                <div
                                                  class="xtwfq29 style-2NWpi"
                                                  id="style-2NWpi"
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
                            </div>
                            <div class="_6g3g style-xQpNc" id="style-xQpNc">
                              <div class="_3qn7 _61-0 _2fyi _3qng">
                                <div class="_6g3g style-YsJFZ" id="style-YsJFZ">
                                  <i
                                    class="x14vqqas xq8finb xod5an3 xmupa6y img style-TWB1Q"
                                    height="54"
                                    width="54"
                                    alt=""
                                    data-visualcompletion="css-img"
                                    id="style-TWB1Q"
                                  ></i>
                                </div>
                                <div class="_6g3g style-9aISN" id="style-9aISN">
                                  <span class="xmi5d70 x1fvot60 xo1l8bm xxio538 xbsr9hj xq9mrsl x1h4wwuj xeuugli x1uvtmcs">
                                    Get an overview of how your ads are doing by
                                    looking at commonly used performance
                                    metrics.
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div
                              class="_6g3g xh8yej3 x1e56ztr style-lRFhf"
                              id="style-lRFhf"
                            >
                              <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x19lwn94 x1swvt13 x1pi30zi x1l90r2v x1y1aw1k x1c4vz4f x2lah0s">
                                <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x2lah0s x13a6bvl">
                                  <div
                                    class="x3nfvp2 x193iq5w xxymvpz style-mhDL7"
                                    role="none"
                                    id="style-mhDL7"
                                  >
                                    <div
                                      aria-busy="false"
                                      class="x1i10hfl xjqpnuy xa49m3k xqeqjp1 x2hbi6w x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli x16tdsg8 xggy1nq x1ja2u2z x6s0dn4 x1ejq31n xd10rxx x1sy0etr x17r0tee xdl72j9 x1q0g3np x193iq5w x1n2onr6 x1hl2dhg x87ps6o xxymvpz xlh3980 xvmahel x1lku1pv x1g40iwv x1lcm9me x1yr5g0i xrt01vj x10y3i5r x1ob88yx xaatb59 x1qgsegg xo1l8bm xbsr9hj x1v911su x1y1aw1k xwib8y2 x1swvt13 x1pi30zi x78zum5 x1iyjqo2 xs83m0k"
                                      role="button"
                                      tabindex="0"
                                    >
                                      <span class="xmi5d70 x1fvot60 xxio538 x1heor9g xq9mrsl x1h4wwuj x1pd3egz xeuugli x1uvtmcs xh8yej3">
                                        <div class="x78zum5">
                                          <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1hc1fzr x13dflua x6o7n8i xxziih7 x12w9bfk xl56j7k xh8yej3">
                                            <div class="x1xqt7ti x1fvot60 xk50ysn xxio538 x1heor9g xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj xeuugli x1uvtmcs">
                                              View Report
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
                      <div class="xyorhqc">
                        <div class="x1lcm9me x1yr5g0i xrt01vj x10y3i5r x1gzqxud x1kmqopl xyorhqc">
                          <div class="_3qn7 _61-0 _2fyh _3qnf">
                            <div
                              class="_6g3g xh8yej3 style-fkLgM"
                              id="style-fkLgM"
                            >
                              <div id="style-D83tI" class="style-D83tI">
                                <div class="_3qn7 _61-0 _2fyi _3qng">
                                  <div
                                    class="_6g3g style-DCm7e"
                                    id="style-DCm7e"
                                  >
                                    <div
                                      aria-level="3"
                                      class="x1xqt7ti x1uxerd5 x1xlr1w8 xrohxju xbsr9hj xuxw1ft x1yc453h x1h4wwuj xeuugli x1uvtmcs x1d52u69 x1gslohp"
                                      role="heading"
                                    >
                                      Lead summary report
                                    </div>
                                  </div>
                                  <div
                                    class="_6g3g x1gslohp xw3qccf xsgj6o6 xat24cr style-vAcp3"
                                    id="style-vAcp3"
                                  >
                                    <div>
                                      <div
                                        aria-busy="false"
                                        aria-controls="js_3u"
                                        aria-expanded="false"
                                        aria-haspopup="menu"
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
                                              More
                                            </div>
                                            <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1hc1fzr x13dflua x6o7n8i xxziih7 x12w9bfk xl56j7k xh8yej3">
                                              <div
                                                class="x3nfvp2 x120ccyz x1heor9g x2lah0s x1c4vz4f"
                                                role="presentation"
                                              >
                                                <div
                                                  class="xtwfq29 style-DjwIK"
                                                  id="style-DjwIK"
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
                            </div>
                            <div class="_6g3g style-4wrDL" id="style-4wrDL">
                              <div class="_3qn7 _61-0 _2fyi _3qng">
                                <div class="_6g3g style-UQMaz" id="style-UQMaz">
                                  <i
                                    class="x14vqqas xq8finb xod5an3 xmupa6y img style-eU1xV"
                                    height="54"
                                    width="54"
                                    alt=""
                                    data-visualcompletion="css-img"
                                    id="style-eU1xV"
                                  ></i>
                                </div>
                                <div class="_6g3g style-M2bN8" id="style-M2bN8">
                                  <span class="xmi5d70 x1fvot60 xo1l8bm xxio538 xbsr9hj xq9mrsl x1h4wwuj xeuugli x1uvtmcs">
                                    Analyse which ads are leading to conversions
                                    and their cost to you.
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div
                              class="_6g3g xh8yej3 x1e56ztr style-HcsYO"
                              id="style-HcsYO"
                            >
                              <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x19lwn94 x1swvt13 x1pi30zi x1l90r2v x1y1aw1k x1c4vz4f x2lah0s">
                                <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x2lah0s x13a6bvl">
                                  <div
                                    class="x3nfvp2 x193iq5w xxymvpz style-9EY6O"
                                    role="none"
                                    id="style-9EY6O"
                                  >
                                    <div
                                      aria-busy="false"
                                      class="x1i10hfl xjqpnuy xa49m3k xqeqjp1 x2hbi6w x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli x16tdsg8 xggy1nq x1ja2u2z x6s0dn4 x1ejq31n xd10rxx x1sy0etr x17r0tee xdl72j9 x1q0g3np x193iq5w x1n2onr6 x1hl2dhg x87ps6o xxymvpz xlh3980 xvmahel x1lku1pv x1g40iwv x1lcm9me x1yr5g0i xrt01vj x10y3i5r x1ob88yx xaatb59 x1qgsegg xo1l8bm xbsr9hj x1v911su x1y1aw1k xwib8y2 x1swvt13 x1pi30zi x78zum5 x1iyjqo2 xs83m0k"
                                      role="button"
                                      tabindex="0"
                                    >
                                      <span class="xmi5d70 x1fvot60 xxio538 x1heor9g xq9mrsl x1h4wwuj x1pd3egz xeuugli x1uvtmcs xh8yej3">
                                        <div class="x78zum5">
                                          <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1hc1fzr x13dflua x6o7n8i xxziih7 x12w9bfk xl56j7k xh8yej3">
                                            <div class="x1xqt7ti x1fvot60 xk50ysn xxio538 x1heor9g xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj xeuugli x1uvtmcs">
                                              View Report
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
                      <div class="xyorhqc">
                        <div class="x1lcm9me x1yr5g0i xrt01vj x10y3i5r x1gzqxud x1kmqopl xyorhqc">
                          <div class="_3qn7 _61-0 _2fyh _3qnf">
                            <div
                              class="_6g3g xh8yej3 style-7TJ2x"
                              id="style-7TJ2x"
                            >
                              <div id="style-E7M5S" class="style-E7M5S">
                                <div class="_3qn7 _61-0 _2fyi _3qng">
                                  <div
                                    class="_6g3g style-TlF3Q"
                                    id="style-TlF3Q"
                                  >
                                    <div
                                      aria-level="3"
                                      class="x1xqt7ti x1uxerd5 x1xlr1w8 xrohxju xbsr9hj xuxw1ft x1yc453h x1h4wwuj xeuugli x1uvtmcs x1d52u69 x1gslohp"
                                      role="heading"
                                    >
                                      Age and gender
                                    </div>
                                  </div>
                                  <div
                                    class="_6g3g x1gslohp xw3qccf xsgj6o6 xat24cr style-BU3RR"
                                    id="style-BU3RR"
                                  >
                                    <div>
                                      <div
                                        aria-busy="false"
                                        aria-controls="js_3v"
                                        aria-expanded="false"
                                        aria-haspopup="menu"
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
                                              More
                                            </div>
                                            <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1hc1fzr x13dflua x6o7n8i xxziih7 x12w9bfk xl56j7k xh8yej3">
                                              <div
                                                class="x3nfvp2 x120ccyz x1heor9g x2lah0s x1c4vz4f"
                                                role="presentation"
                                              >
                                                <div
                                                  class="xtwfq29 style-PiCMC"
                                                  id="style-PiCMC"
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
                            </div>
                            <div class="_6g3g style-EVWLw" id="style-EVWLw">
                              <div class="_3qn7 _61-0 _2fyi _3qng">
                                <div class="_6g3g style-RRfh9" id="style-RRfh9">
                                  <i
                                    class="x14vqqas xq8finb xod5an3 xmupa6y img style-GXJzU"
                                    height="54"
                                    width="54"
                                    alt=""
                                    data-visualcompletion="css-img"
                                    id="style-GXJzU"
                                  ></i>
                                </div>
                                <div class="_6g3g style-ZDISO" id="style-ZDISO">
                                  <span class="xmi5d70 x1fvot60 xo1l8bm xxio538 xbsr9hj xq9mrsl x1h4wwuj xeuugli x1uvtmcs">
                                    See how your ads performed across each
                                    demographic segment.
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div
                              class="_6g3g xh8yej3 x1e56ztr style-pCAAm"
                              id="style-pCAAm"
                            >
                              <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x19lwn94 x1swvt13 x1pi30zi x1l90r2v x1y1aw1k x1c4vz4f x2lah0s">
                                <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x2lah0s x13a6bvl">
                                  <div
                                    class="x3nfvp2 x193iq5w xxymvpz style-odlz9"
                                    role="none"
                                    id="style-odlz9"
                                  >
                                    <div
                                      aria-busy="false"
                                      class="x1i10hfl xjqpnuy xa49m3k xqeqjp1 x2hbi6w x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli x16tdsg8 xggy1nq x1ja2u2z x6s0dn4 x1ejq31n xd10rxx x1sy0etr x17r0tee xdl72j9 x1q0g3np x193iq5w x1n2onr6 x1hl2dhg x87ps6o xxymvpz xlh3980 xvmahel x1lku1pv x1g40iwv x1lcm9me x1yr5g0i xrt01vj x10y3i5r x1ob88yx xaatb59 x1qgsegg xo1l8bm xbsr9hj x1v911su x1y1aw1k xwib8y2 x1swvt13 x1pi30zi x78zum5 x1iyjqo2 xs83m0k"
                                      role="button"
                                      tabindex="0"
                                    >
                                      <span class="xmi5d70 x1fvot60 xxio538 x1heor9g xq9mrsl x1h4wwuj x1pd3egz xeuugli x1uvtmcs xh8yej3">
                                        <div class="x78zum5">
                                          <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1hc1fzr x13dflua x6o7n8i xxziih7 x12w9bfk xl56j7k xh8yej3">
                                            <div class="x1xqt7ti x1fvot60 xk50ysn xxio538 x1heor9g xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj xeuugli x1uvtmcs">
                                              View Report
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
                      <div class="xyorhqc">
                        <div class="x1lcm9me x1yr5g0i xrt01vj x10y3i5r x1gzqxud x1kmqopl xyorhqc">
                          <div class="_3qn7 _61-0 _2fyh _3qnf">
                            <div
                              class="_6g3g xh8yej3 style-X1fzd"
                              id="style-X1fzd"
                            >
                              <div id="style-PJki7" class="style-PJki7">
                                <div class="_3qn7 _61-0 _2fyi _3qng">
                                  <div
                                    class="_6g3g style-DooL7"
                                    id="style-DooL7"
                                  >
                                    <div
                                      aria-level="3"
                                      class="x1xqt7ti x1uxerd5 x1xlr1w8 xrohxju xbsr9hj xuxw1ft x1yc453h x1h4wwuj xeuugli x1uvtmcs x1d52u69 x1gslohp"
                                      role="heading"
                                    >
                                      Engagement
                                    </div>
                                  </div>
                                  <div
                                    class="_6g3g x1gslohp xw3qccf xsgj6o6 xat24cr style-icT5y"
                                    id="style-icT5y"
                                  >
                                    <div>
                                      <div
                                        aria-busy="false"
                                        aria-controls="js_3w"
                                        aria-expanded="false"
                                        aria-haspopup="menu"
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
                                              More
                                            </div>
                                            <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1hc1fzr x13dflua x6o7n8i xxziih7 x12w9bfk xl56j7k xh8yej3">
                                              <div
                                                class="x3nfvp2 x120ccyz x1heor9g x2lah0s x1c4vz4f"
                                                role="presentation"
                                              >
                                                <div
                                                  class="xtwfq29 style-xbe5J"
                                                  id="style-xbe5J"
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
                            </div>
                            <div class="_6g3g style-Wl7Kp" id="style-Wl7Kp">
                              <div class="_3qn7 _61-0 _2fyi _3qng">
                                <div class="_6g3g style-1l1HB" id="style-1l1HB">
                                  <i
                                    class="x14vqqas xq8finb xod5an3 xmupa6y img style-VrZsU"
                                    height="54"
                                    width="54"
                                    alt=""
                                    data-visualcompletion="css-img"
                                    id="style-VrZsU"
                                  ></i>
                                </div>
                                <div class="_6g3g style-2LEW9" id="style-2LEW9">
                                  <span class="xmi5d70 x1fvot60 xo1l8bm xxio538 xbsr9hj xq9mrsl x1h4wwuj xeuugli x1uvtmcs">
                                    Find out which of your ads your audience
                                    interacted with most.
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div
                              class="_6g3g xh8yej3 x1e56ztr style-11yJF"
                              id="style-11yJF"
                            >
                              <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x19lwn94 x1swvt13 x1pi30zi x1l90r2v x1y1aw1k x1c4vz4f x2lah0s">
                                <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x2lah0s x13a6bvl">
                                  <div
                                    class="x3nfvp2 x193iq5w xxymvpz style-ZQGAJ"
                                    role="none"
                                    id="style-ZQGAJ"
                                  >
                                    <div
                                      aria-busy="false"
                                      class="x1i10hfl xjqpnuy xa49m3k xqeqjp1 x2hbi6w x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli x16tdsg8 xggy1nq x1ja2u2z x6s0dn4 x1ejq31n xd10rxx x1sy0etr x17r0tee xdl72j9 x1q0g3np x193iq5w x1n2onr6 x1hl2dhg x87ps6o xxymvpz xlh3980 xvmahel x1lku1pv x1g40iwv x1lcm9me x1yr5g0i xrt01vj x10y3i5r x1ob88yx xaatb59 x1qgsegg xo1l8bm xbsr9hj x1v911su x1y1aw1k xwib8y2 x1swvt13 x1pi30zi x78zum5 x1iyjqo2 xs83m0k"
                                      role="button"
                                      tabindex="0"
                                    >
                                      <span class="xmi5d70 x1fvot60 xxio538 x1heor9g xq9mrsl x1h4wwuj x1pd3egz xeuugli x1uvtmcs xh8yej3">
                                        <div class="x78zum5">
                                          <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1hc1fzr x13dflua x6o7n8i xxziih7 x12w9bfk xl56j7k xh8yej3">
                                            <div class="x1xqt7ti x1fvot60 xk50ysn xxio538 x1heor9g xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj xeuugli x1uvtmcs">
                                              View Report
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
  );
};

export default ReportsTable;

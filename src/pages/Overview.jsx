import React, { useEffect, useState } from "react";
import "../styles/Overview.css";
import axios from "axios";
import { Link } from "react-router-dom";
import SideBar from "../components/SideBar";

const Overview = () => {
  const [account, setAccount] = useState({});
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
    <div>
      <div class="_2ww2 snipcss-h1aW6">
        <div class="_2ww1 _7y7x">
          <div data-pagelet="AdsSideNavWithContent.react" class="">
            <SideBar />
          </div>
        </div>
        <div
          style={{ backgroundColor: "#e6f2f4", marginLeft: "60px" }}
          class=""
        >
          <div class="_4u-c">
            <div>
              <span
                data-surface-wrapper="1"
                data-surface="/am/msg:AdsPETopNavContainer"
                data-auto-logging-id="f3c032493f93888"
                id="style-1cM4Q"
                class="style-1cM4Q"
              ></span>
              <div id="style-hoyww" class="style-hoyww">
                <div class="_9g6y _2ph-">
                  <div class="x6s0dn4 x78zum5 x1q0g3np xfex06f x3pnbk8 x2lwn1j xeuugli">
                    <div class="_8fgf _8ox0">
                      <div class="x78zum5 x1q0g3np x2lwn1j xeuugli">
                        <div class="x6s0dn4 x78zum5 x1q0g3np x2lwn1j xeuugli">
                          <div class="x1t2a60a x1mpkggp">
                            <div
                              aria-level="2"
                              class="x1xqt7ti xm46was x1xlr1w8 x1jrz1v4 xbsr9hj xuxw1ft x1yc453h x1h4wwuj xeuugli"
                              role="heading"
                            >
                              Account overview
                            </div>
                          </div>
                          <div class="x1gslohp x1i64zmx">
                            <div class="xdzyupr">
                              <div>
                                <div class="x1jx94hy">
                                  <div class="xh8yej3">
                                    <div
                                      aria-busy="false"
                                      aria-expanded="false"
                                      aria-haspopup="listbox"
                                      aria-invalid="false"
                                      aria-labelledby="js_8u"
                                      class="x1i10hfl x1qjc9v5 xjbqb8w xjqpnuy xa49m3k xqeqjp1 x2hbi6w x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x78zum5 xdl72j9 xdt5ytf x2lah0s xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli xexx8yu x4uap5 x18d9i69 xkhd6sd x1n2onr6 x16tdsg8 x1hl2dhg xggy1nq x1ja2u2z x1ypdohk xh8yej3 x1t137rt"
                                      role="combobox"
                                      tabindex="0"
                                    >
                                      <div class="x1n2onr6 xh8yej3">
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
                                        <div class="xwebqov xvyu6v8 xrsgblv x10lij0i x1lcm9me x1yr5g0i xrt01vj x10y3i5r x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x178xt8z xm81vs4 xso031l xy80clv x13dflua x6o7n8i xxziih7 x12w9bfk xg01cxk x47corl x10l6tqk x17qophe xds687c x13vifvy x1ey2m1c x6ikm8r x10wlt62 xnl74ce xmb4j5p xdx8kah xwmxa91 xmn8db3 x8lbu6m x2te4dl x1bs8fl3 xhhp2wi x14q35kh x1wa3ocq x1n7iyjn x1t0di37 x1tt7eqi xe25xm5 xsp6npd x1s928wv x1w3onc2 x1j6awrg x9obomg x1ryaxvv x1hvfe8t x1te75w5"></div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="x1cy8zhl x78zum5 x2lwn1j xeuugli"></div>
                      </div>
                    </div>
                    <div class="x1iyjqo2 xs83m0k xdl72j9"></div>
                    <div class="x6s0dn4 x78zum5 x1q0g3np x2lwn1j xeuugli x2lah0s">
                      <div class="_8fgf">
                        <div
                          class="x6s0dn4 x78zum5 x1nhvcw1 x19lwn94"
                          role="toolbar"
                          data-auto-logging-component-type="GeoToolBar"
                        >
                          <div class="x3nfvp2 x193iq5w xxymvpz" role="none">
                            <div
                              aria-busy="false"
                              class="x1i10hfl xjqpnuy xa49m3k xqeqjp1 x2hbi6w x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli x16tdsg8 xggy1nq x1ja2u2z x1t137rt x6s0dn4 x1ejq31n xd10rxx x1sy0etr x17r0tee x3nfvp2 xdl72j9 x1q0g3np x2lah0s x193iq5w x1n2onr6 x1hl2dhg x87ps6o xxymvpz xlh3980 xvmahel x1lku1pv x1g40iwv x1lcm9me x1yr5g0i xrt01vj x10y3i5r xo1l8bm x140t73q xqkc6xh x1y1aw1k xwib8y2 x1pi30zi x1ye3gou"
                              id="js_92"
                              role="button"
                              tabindex="0"
                            >
                              <span class="xmi5d70 x1fvot60 xxio538 x1heor9g xq9mrsl x1h4wwuj x1pd3egz xeuugli xh8yej3">
                                <div class="x78zum5">
                                  <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1hc1fzr x13dflua x6o7n8i xxziih7 x12w9bfk xl56j7k xh8yej3">
                                    <div
                                      class="x3nfvp2 x120ccyz x1heor9g x2lah0s x1c4vz4f"
                                      role="presentation"
                                    >
                                      <div
                                        class="xtwfq29 style-agXZX"
                                        id="style-agXZX"
                                      ></div>
                                    </div>
                                    <div class="x1xqt7ti x1fvot60 xk50ysn xxio538 x1heor9g xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj xeuugli">
                                      Create campaign
                                    </div>
                                  </div>
                                </div>
                              </span>
                            </div>
                          </div>
                          <div class="_4g7v">
                            <div
                              class="x6s0dn4 x78zum5 x1nhvcw1 x19lwn94"
                              data-auto-logging-component-type="GeoToolBar"
                            >
                              <div class="_4g7x">
                                <div
                                  class="x6s0dn4 x78zum5 x1nhvcw1 x19lwn94"
                                  data-auto-logging-component-type="GeoToolBar"
                                >
                                  <span
                                    class=" "
                                    data-tracked="true"
                                    data-clickable="1"
                                  >
                                    <div
                                      class="x3nfvp2 x193iq5w xxymvpz"
                                      role="none"
                                    >
                                      <div
                                        aria-busy="false"
                                        aria-disabled="true"
                                        class="x1i10hfl xjqpnuy xa49m3k xqeqjp1 x2hbi6w x972fbf xcfux6l x1qhh985 xm0m39n x9f619 xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli x16tdsg8 xggy1nq x1ja2u2z x1h6gzvc x6s0dn4 x1ejq31n xd10rxx x1sy0etr x17r0tee x3nfvp2 xdl72j9 x1q0g3np x2lah0s x193iq5w x1n2onr6 x1hl2dhg x87ps6o xxymvpz xlh3980 xvmahel x1lku1pv x1g40iwv x1lcm9me x1yr5g0i xrt01vj x10y3i5r xtpvj6k xaatb59 x1qgsegg xo1l8bm x1v911su xis6omg x1y1aw1k xwib8y2 x1swvt13 x1pi30zi"
                                        role="button"
                                        tabindex="-1"
                                      >
                                        <span class="xmi5d70 x1fvot60 xxio538 x1heor9g xq9mrsl x1h4wwuj x1pd3egz xeuugli xh8yej3">
                                          <div class="x78zum5">
                                            <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1hc1fzr x13dflua x6o7n8i xxziih7 x12w9bfk xl56j7k xh8yej3">
                                              <div class="x1xqt7ti x1fvot60 xk50ysn xxio538 x1heor9g xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj xeuugli">
                                                Review and publish
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
                        <div class="_4540" style={{ marginRight: "20px" }}>
                          <div
                            aria-busy="false"
                            aria-controls="js_1e"
                            aria-expanded="false"
                            aria-haspopup="menu"
                            class="x1i10hfl xjqpnuy xa49m3k xqeqjp1 x2hbi6w x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli x16tdsg8 xggy1nq x1ja2u2z x6s0dn4 x1ejq31n xd10rxx x1sy0etr x17r0tee x3nfvp2 xdl72j9 x1q0g3np x2lah0s x193iq5w x1n2onr6 x1hl2dhg x87ps6o xxymvpz xlh3980 xvmahel x1lku1pv x1g40iwv x1lcm9me x1yr5g0i xrt01vj x10y3i5r x1ob88yx xaatb59 x1qgsegg xo1l8bm xbsr9hj x1v911su x1y1aw1k xwib8y2 x1ye3gou xn6708d"
                            role="button"
                            tabindex="0"
                          >
                            <span class="xmi5d70 x1fvot60 xxio538 x1heor9g xq9mrsl x1h4wwuj x1pd3egz xeuugli xh8yej3">
                              <div class="x78zum5">
                                <div
                                  class="x1qvwoe0 xjm9jq1 x1y332i5 xcwd3tp x1jyxor1 x39eecv x6ikm8r x10wlt62 x10l6tqk xuxw1ft x1i1rx1s"
                                  data-sscoverage-ignore="true"
                                >
                                  Menu
                                </div>
                                <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1hc1fzr x13dflua x6o7n8i xxziih7 x12w9bfk xl56j7k xh8yej3">
                                  <div
                                    class="x3nfvp2 x120ccyz x1heor9g x2lah0s x1c4vz4f"
                                    role="presentation"
                                  >
                                    <div
                                      class="xtwfq29 style-4DaiR"
                                      id="style-4DaiR"
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
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
          <div class="_49wu style-bT6xZ" id="style-bT6xZ">
            <div></div>
            <span
              data-surface-wrapper="1"
              data-surface="/am/editor_drawer"
              data-auto-logging-id="f223b6eed652b9"
              id="style-Kw2kO"
              class="style-Kw2kO"
            >
              <div class="_2k0c _8_1l style-F5ZaX" id="style-F5ZaX">
                <div class="x1a0uwpx x78zum5 x1ob5r32 xdt5ytf x5yr21d x1jj3tg0 x6ikm8r x10wlt62 x4uap5 x18d9i69 xkhd6sd x1iorvi4 x10l6tqk x187nhsf x1vjfegm x5jzwa4">
                  <div id="ACTIVITY_HISTORY_DRAWER_tip">
                    <div class="x1rg5ohu x67bb7w" id="js_es">
                      <span class=" " data-tracked="true" data-clickable="1">
                        <div
                          aria-disabled="false"
                          aria-label="See history (Ctrl+I)"
                          class="x972fbf xcfux6l x1qhh985 xm0m39n x1ejq31n xd10rxx x1sy0etr x17r0tee x15wryii x14yi0bh x2kcyu4 xmfk5bu x9f619 x1ypdohk xc9qbxq x1a2a7pz x889kno x1iji9kk x1a8lsjc x1sln4lm x1n2onr6 x14qfxbe x1gslohp x12nagc xsgj6o6 xw3qccf x1lcm9me x1yr5g0i xrt01vj x10y3i5r xjbqb8w"
                          data-pitloot-persistonclick="false"
                          role="button"
                          tabindex="0"
                        >
                          <div class="xbsr9hj">
                            <div
                              class="x3nfvp2 x120ccyz x140t73q"
                              role="presentation"
                            >
                              <div
                                class="xtwfq29 style-aE6BR"
                                id="style-aE6BR"
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
              data-non-int-surface="/am/hero_root:AdsPEMainAppWithLeftNavigation.react/hero_root:SYDPageContainer.react"
              data-auto-logging-id="f38b71f52acd034"
              class="style-XMko2"
              id="style-XMko2"
            >
              <div class="x14aock7 x1rife3k x5yr21d">
                <span
                  data-surface-wrapper="1"
                  data-surface="/am/syd"
                  data-auto-logging-id="f2595d0062d7608"
                  id="style-NXBeS"
                  class="style-NXBeS"
                >
                  <div>
                    <div
                      class="xt9c220 x1sdr0u7 x1on1db2 xrvj5dj xyzno7u x1g3uosz xkrivgy xat24cr x1gryazu xwxc41k xxbr6pl xbbxn1n xw7yly9 style-7Rz6T"
                      id="style-7Rz6T"
                    >
                      <div
                        class="xkh2ocl xuy72oy x78zum5 x1c4vz4f xeuugli x2lah0s xh8yej3 style-wYfxy"
                        id="style-wYfxy"
                      >
                        <div class="x78zum5 xdt5ytf x2lwn1j xeuugli x1iyjqo2 xh8yej3"></div>
                      </div>
                      <div
                        class="xkh2ocl xuy72oy x78zum5 x1c4vz4f xeuugli x2lah0s xh8yej3 style-R5dWR"
                        id="style-R5dWR"
                      >
                        <div class="x78zum5 xdt5ytf x2lwn1j xeuugli xh8yej3">
                          <div>
                            <div class="x1yztbdb x1n2onr6 xh8yej3">
                              <div class="x6s0dn4 x78zum5 x1q0g3np x1qughib xozqiw3 x2lwn1j xeuugli x1iyjqo2 xs83m0k x1jjk293">
                                <div class="x78zum5 x2lwn1j xeuugli x1r8uery x1iyjqo2">
                                  <div class="x6s0dn4 x78zum5 x2lwn1j xeuugli">
                                    <div class="x78zum5 x2lwn1j xeuugli xcklp1c xktsk01">
                                      <div class="x1lliihq x1n2onr6 x2lah0s xsdox4t x1useyqa xzolkzo x12go9s9 x1rnf11y xprq8jg">
                                        <div
                                          class="x10l6tqk x6ikm8r x10wlt62 x13vifvy x17qophe xh8yej3 x5yr21d x1o1ewxj x3x9cwd x1e5q0jg x13rtm0m xosibs0 xt24udd xw53kvy x1dka6rp x47corl x10cdfl8"
                                          role="presentation"
                                        >
                                          <div class="x17ddzgb x78zum5">
                                            <div
                                              class="x3nfvp2 x120ccyz x1heor9g"
                                              role="presentation"
                                            >
                                              <div
                                                class="xtwfq29 style-SaDVy"
                                                id="style-SaDVy"
                                              ></div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div class="x78zum5 x2lwn1j xeuugli x1r8uery x1iyjqo2">
                                      <div class="x78zum5 xdt5ytf x2lwn1j xeuugli">
                                        <div
                                          aria-level="2"
                                          class="x1xqt7ti xm46was x1xlr1w8 x1jrz1v4 xbsr9hj xq9mrsl x1yc453h x1h4wwuj xeuugli x104kibb x6ikm8r x10wlt62 x1ua5tub style-odOxE"
                                          role="heading"
                                          id="style-odOxE"
                                        >
                                          Max Media Leads
                                        </div>
                                        <a
                                          class="xt0psk2 x1hl2dhg xt0b8zv xmi5d70 x1fvot60 xxio538 x1qsmy5i xq9mrsl x1yc453h x1h4wwuj x1fcty0u"
                                          href="#"
                                        >
                                          60 active campaigns
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div class="xuk3077 x78zum5 xdt5ytf xl56j7k xozqiw3 x2lwn1j xeuugli x1c4vz4f xs83m0k xyqj3jm">
                                  <div class="x6s0dn4 x78zum5 x1q0g3np x2lwn1j xeuugli">
                                    <span class="xmi5d70 xw23nyj xo1l8bm x63nzvj x1541jtf xq9mrsl x1h4wwuj xeuugli">
                                      Amount spent in last seven days:
                                    </span>
                                    <span class="xmi5d70 xw23nyj x1xlr1w8 x63nzvj xbsr9hj x1sdyfia x1h4wwuj xeuugli">
                                      {" "}
                                      $125,871.52
                                    </span>
                                    <div class="x1rg5ohu x67bb7w">
                                      <div class="xmi5d70 x1fvot60 xxio538 xbsr9hj xq9mrsl x1h4wwuj x1fcty0u x78zum5 xl56j7k x6s0dn4">
                                        <span>​</span>
                                        <div class="xjm9jq1 x78zum5 xl56j7k x6s0dn4">
                                          <div class="xsgj6o6">
                                            <div
                                              class="x3nfvp2 x120ccyz x4s1yf2 x1gslohp"
                                              role="presentation"
                                            >
                                              <div
                                                class="xtwfq29 style-Eejv5"
                                                id="style-Eejv5"
                                              ></div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <span class="xmi5d70 xw23nyj xo1l8bm x63nzvj x1541jtf x1sdyfia x1h4wwuj xeuugli">
                                      {" "}
                                      |{" "}
                                    </span>
                                    <div class="x6s0dn4 x78zum5 x1q0g3np x2lwn1j xeuugli">
                                      <span class="xmi5d70 xw23nyj xo1l8bm x63nzvj x1541jtf xq9mrsl x1h4wwuj xeuugli">
                                        10% spent in learning phase
                                      </span>
                                      <div class="x1rg5ohu x67bb7w">
                                        <div class="xmi5d70 x1fvot60 xxio538 xbsr9hj xq9mrsl x1h4wwuj x1fcty0u x78zum5 xl56j7k x6s0dn4">
                                          <span>​</span>
                                          <div class="xjm9jq1 x78zum5 xl56j7k x6s0dn4">
                                            <div class="xsgj6o6">
                                              <div
                                                class="x3nfvp2 x120ccyz x4s1yf2 x1gslohp"
                                                role="presentation"
                                              >
                                                <div
                                                  class="xtwfq29 style-Acv2H"
                                                  id="style-Acv2H"
                                                ></div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div class="x1rg5ohu x67bb7w">
                                  <div
                                    class="x3nfvp2 x193iq5w xxymvpz"
                                    role="none"
                                  >
                                    <div
                                      aria-busy="false"
                                      class="x1i10hfl xjqpnuy xa49m3k xqeqjp1 x2hbi6w x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli x16tdsg8 xggy1nq x1ja2u2z x6s0dn4 x1ejq31n xd10rxx x1sy0etr x17r0tee x3nfvp2 xdl72j9 x1q0g3np x2lah0s x193iq5w x1n2onr6 x1hl2dhg x87ps6o xxymvpz xlh3980 xvmahel x1lku1pv x1g40iwv x1lcm9me x1yr5g0i xrt01vj x10y3i5r x1ob88yx xaatb59 x1qgsegg xo1l8bm xbsr9hj x1v911su x1y1aw1k xwib8y2 x1ye3gou xn6708d"
                                      id="js_93"
                                      role="button"
                                      tabindex="0"
                                    >
                                      <span class="xmi5d70 x1fvot60 xxio538 x1heor9g xq9mrsl x1h4wwuj x1pd3egz xeuugli xh8yej3">
                                        <div class="x78zum5">
                                          <div
                                            class="x1qvwoe0 xjm9jq1 x1y332i5 xcwd3tp x1jyxor1 x39eecv x6ikm8r x10wlt62 x10l6tqk xuxw1ft x1i1rx1s"
                                            data-sscoverage-ignore="true"
                                          >
                                            Settings
                                          </div>
                                          <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1hc1fzr x13dflua x6o7n8i xxziih7 x12w9bfk xl56j7k xh8yej3">
                                            <div class="x3nfvp2 x2lah0s x1c4vz4f">
                                              <div
                                                class="x3nfvp2 x120ccyz x4s1yf2"
                                                role="presentation"
                                              >
                                                <div
                                                  class="xtwfq29 style-X1Rl5"
                                                  id="style-X1Rl5"
                                                ></div>
                                              </div>
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
                          <div></div>
                          <div>
                            <div></div>
                          </div>
                          <div>
                            <div class="x1yztbdb x1n2onr6 xh8yej3">
                              <div>
                                <div
                                  aria-labelledby="js_ds"
                                  class="x1gzqxud x1lcm9me x1yr5g0i xrt01vj x10y3i5r xhgxa4x xy5ysw6 x1qkj6lk xn3walq xnvurfn xv1ta3e x1opv7go x1dtnpoi xibdhds xtnng9g xhvrwov x13k1m86 xwx4but x1cpjm7i xszcg87 x1hmns74 xkk1bqk x14d4353 xsxiz9q x1rmj1tg xchklzq x9f619 xc8icb0 x1n2onr6 x1pvq41x xhhp2wi x14q35kh x1wa3ocq x1n7iyjn x1s928wv x1wsn0xg x1j6awrg x162n7g1 x1m1drc7 x4eaejv xi4xitw x5yr21d xh8yej3"
                                  data-auto-logging-component-type="GeoCard"
                                >
                                  <div class="x78zum5 xdt5ytf x5yr21d xedcshv x1t2pt76 xh8yej3">
                                    <div class="x9f619 x78zum5 x2lah0s xh8yej3 xyamay9 x1l90r2v x1swvt13 x1pi30zi">
                                      <div class="x1iyjqo2 xeuugli">
                                        <div class="x78zum5 x1q0g3np x1qughib x2lwn1j xeuugli">
                                          <div class="x78zum5 xdt5ytf x2lwn1j xeuugli x1iyjqo2">
                                            <div
                                              aria-level="2"
                                              class="x1xqt7ti xm46was x1xlr1w8 x1jrz1v4 xbsr9hj xq9mrsl x1yc453h x1h4wwuj xeuugli"
                                              role="heading"
                                            >
                                              Performance recommendations
                                            </div>
                                            <div class="x78zum5 x2lwn1j xeuugli">
                                              <span class="xmi5d70 x1fvot60 xo1l8bm xxio538 xbsr9hj xq9mrsl x1h4wwuj xeuugli">
                                                Recommendations generated by
                                                performance across your account.
                                              </span>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div class="x9f619 x78zum5 x1iyjqo2 x5yr21d x2lwn1j x1n2onr6 xh8yej3">
                                      <div class="x1odjw0f xh8yej3 x18d9i69 x1plvlek">
                                        <div class="xjm9jq1 xg01cxk x47corl xh8yej3 x1jyxor1"></div>
                                        <div class="x6ikm8r x10wlt62 x1swvt13 x1pi30zi x1l90r2v">
                                          <div>
                                            <div
                                              class="x1gzqxud x1lcm9me x1yr5g0i xrt01vj x10y3i5r xhgxa4x xy5ysw6 x1qkj6lk xn3walq xnvurfn xv1ta3e x1opv7go x1dtnpoi xibdhds xtnng9g xhvrwov x13k1m86 xwx4but x1cpjm7i xszcg87 x1hmns74 xkk1bqk x14d4353 xsxiz9q x1rmj1tg xchklzq x9f619 xc8icb0 x1n2onr6 x1pvq41x xhhp2wi x14q35kh x1wa3ocq x1n7iyjn x1s928wv x1wsn0xg x1j6awrg x162n7g1 x1m1drc7 x4eaejv xi4xitw x5yr21d xh8yej3 xw7yly9 x1yztbdb"
                                              data-auto-logging-component-type="GeoCard"
                                            >
                                              <div class="x78zum5 xdt5ytf x5yr21d xedcshv x1t2pt76 xh8yej3">
                                                <div class="x9f619 x78zum5 x1iyjqo2 x5yr21d x2lwn1j x1n2onr6 xh8yej3">
                                                  <div class="xw2csxc x1odjw0f xh8yej3 x18d9i69">
                                                    <div class="xjm9jq1 xg01cxk x47corl xh8yej3 x1jyxor1"></div>
                                                    <div class="x1cy8zhl x78zum5 x1qughib x2lwn1j xeuugli">
                                                      <div class="x78zum5 xdt5ytf x1qughib x2lwn1j xeuugli xvue9z xw7yly9 xktsk01 x1yztbdb x1d52u69">
                                                        <div
                                                          aria-level="4"
                                                          class="x1xqt7ti xsuwoey x1xlr1w8 x63nzvj xbsr9hj xq9mrsl x1yc453h x1h4wwuj xeuugli"
                                                          role="heading"
                                                        >
                                                          Optimise your
                                                          campaigns with
                                                          automatic adjustments
                                                        </div>
                                                        <div class="x1cy8zhl x78zum5 x1qughib x2lwn1j xeuugli x1xmf6yo x1e56ztr">
                                                          <span class="xmi5d70 x1fvot60 xo1l8bm xxio538 xbsr9hj xq9mrsl x1h4wwuj xeuugli">
                                                            Save time and stay
                                                            optimised by
                                                            automatically
                                                            applying the most
                                                            impactful
                                                            performance
                                                            recommendations.
                                                          </span>
                                                        </div>
                                                        <div
                                                          class="x3nfvp2 x193iq5w xxymvpz"
                                                          role="none"
                                                        >
                                                          <div
                                                            aria-busy="false"
                                                            class="x1i10hfl xjqpnuy xa49m3k xqeqjp1 x2hbi6w x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli x16tdsg8 xggy1nq x1ja2u2z x1t137rt x6s0dn4 x1ejq31n xd10rxx x1sy0etr x17r0tee x3nfvp2 xdl72j9 x1q0g3np x2lah0s x193iq5w x1n2onr6 x1hl2dhg x87ps6o xxymvpz xlh3980 xvmahel x1lku1pv x1g40iwv x1lcm9me x1yr5g0i xrt01vj x10y3i5r xo1l8bm x140t73q x19bke7z x1y1aw1k xwib8y2 x1swvt13 x1pi30zi"
                                                            role="button"
                                                            tabindex="0"
                                                          >
                                                            <span class="xmi5d70 x1fvot60 xxio538 x1heor9g xq9mrsl x1h4wwuj x1pd3egz xeuugli xh8yej3">
                                                              <div class="x78zum5">
                                                                <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1hc1fzr x13dflua x6o7n8i xxziih7 x12w9bfk xl56j7k xh8yej3">
                                                                  <div class="x1xqt7ti x1fvot60 xk50ysn xxio538 x1heor9g xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj xeuugli">
                                                                    Set up now
                                                                  </div>
                                                                </div>
                                                              </div>
                                                            </span>
                                                          </div>
                                                        </div>
                                                      </div>
                                                      <i
                                                        alt=""
                                                        data-visualcompletion="css-img"
                                                        class="img style-dRoRG"
                                                        id="style-dRoRG"
                                                      ></i>
                                                      <div class="x78zum5 x2lwn1j xeuugli xndqk7f xds687c x10l6tqk">
                                                        <div
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
                                                                    class="xtwfq29 style-CeXrw"
                                                                    id="style-CeXrw"
                                                                  ></div>
                                                                </div>
                                                                ​
                                                              </div>
                                                            </div>
                                                          </span>
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
                                          <div>
                                            <div class="x78zum5 xdt5ytf x40hh3e xgpatz3 x2lwn1j xeuugli">
                                              <div
                                                class="x1gzqxud x1lcm9me x1yr5g0i xrt01vj x10y3i5r xhgxa4x xy5ysw6 x1qkj6lk xn3walq xnvurfn xv1ta3e x1opv7go x1dtnpoi xibdhds xtnng9g xhvrwov x13k1m86 xwx4but x1cpjm7i xszcg87 x1hmns74 xkk1bqk x14d4353 xsxiz9q x1rmj1tg xchklzq x9f619 xc8icb0 x1n2onr6 x1pvq41x xhhp2wi x14q35kh x1wa3ocq x1n7iyjn x1s928wv x1wsn0xg x1j6awrg x162n7g1 x1m1drc7 x4eaejv xi4xitw x5yr21d xh8yej3 x14vqqas xod5an3"
                                                data-auto-logging-component-type="GeoCard"
                                              >
                                                <div class="x78zum5 xdt5ytf x5yr21d xedcshv x1t2pt76 xh8yej3">
                                                  <div class="x9f619 x78zum5 x1iyjqo2 x5yr21d x2lwn1j x1n2onr6 xh8yej3">
                                                    <div class="xw2csxc x1odjw0f xh8yej3 x18d9i69">
                                                      <div class="xjm9jq1 xg01cxk x47corl xh8yej3 x1jyxor1"></div>
                                                      <div class="x78zum5 xdt5ytf x2lwn1j xeuugli xw7yly9 xktsk01 x1yztbdb x1d52u69">
                                                        <div class="xuk3077 x78zum5 x1q0g3np x1qughib x2lwn1j xeuugli xktsk01">
                                                          <div class="x6s0dn4 x78zum5 xtqikln xp1r0qw x2lwn1j xeuugli">
                                                            <div
                                                              class="x3nfvp2 x120ccyz x1xwc0y7"
                                                              role="presentation"
                                                            >
                                                              <div
                                                                class="xtwfq29 style-dE4YE"
                                                                id="style-dE4YE"
                                                              ></div>
                                                            </div>
                                                            <div
                                                              aria-level="3"
                                                              class="x1xqt7ti x1uxerd5 x1xlr1w8 xrohxju xbsr9hj xq9mrsl x1yc453h x1h4wwuj xeuugli"
                                                              role="heading"
                                                            >
                                                              Fix errors
                                                              blocking ad
                                                              delivery
                                                            </div>
                                                          </div>
                                                        </div>
                                                        <div class="x78zum5 x2lwn1j xeuugli x1xmf6yo">
                                                          <span class="xmi5d70 x1fvot60 xo1l8bm xxio538 xbsr9hj xq9mrsl x1h4wwuj xeuugli">
                                                            Ads with errors
                                                            can't run at all
                                                            because there's a
                                                            problem that needs
                                                            attention. You may
                                                            still temporarily
                                                            see an error listed
                                                            after it's been
                                                            resolved.
                                                          </span>
                                                        </div>
                                                        <div>
                                                          <hr class="xjbqb8w x11i5rnm x1mh8g0r xso031l x1q0q8m5 xqtp20y xwebqov xvyu6v8 xrsgblv x10lij0i x14vqqas xod5an3" />
                                                          <div class="x78zum5 xdt5ytf x2lwn1j xeuugli xw7yly9 xktsk01 x1yztbdb x1d52u69">
                                                            <div class="xuk3077 x78zum5 x1q0g3np x1qughib xfex06f x3pnbk8 x2lwn1j xeuugli xod5an3">
                                                              <div class="x1cy8zhl x78zum5 x2lwn1j xeuugli">
                                                                <span class="xmi5d70 x1fvot60 xo1l8bm xxio538 xbsr9hj xq9mrsl x1h4wwuj xeuugli">
                                                                  All ad sets in
                                                                  this campaign
                                                                  have errors
                                                                </span>
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
                                                                            class="xtwfq29 style-A2Ec1"
                                                                            id="style-A2Ec1"
                                                                          ></div>
                                                                        </div>
                                                                      </div>
                                                                    </div>
                                                                  </div>
                                                                </div>
                                                              </div>
                                                            </div>
                                                            <div class="x6s0dn4 x78zum5 x1q0g3np x1qughib x2lwn1j xeuugli xs83m0k">
                                                              <div class="x1cy8zhl x78zum5 x2lwn1j xeuugli">
                                                                <div>
                                                                  <div class="x1lliihq x1n2onr6 x2lah0s xsdox4t x1useyqa x1lcm9me x1yr5g0i xrt01vj x10y3i5r">
                                                                    <div
                                                                      class="x10l6tqk x6ikm8r x10wlt62 x13vifvy x17qophe xh8yej3 x5yr21d x1o1ewxj x3x9cwd x1e5q0jg x13rtm0m xosibs0 xt24udd xw53kvy x1dka6rp x47corl x10cdfl8"
                                                                      role="presentation"
                                                                    >
                                                                      <div class="x17ddzgb x78zum5">
                                                                        <div
                                                                          class="x3nfvp2 x120ccyz x1heor9g"
                                                                          role="presentation"
                                                                        >
                                                                          <img
                                                                            src="https://external.flhe32-1.fna.fbcdn.net/emg1/v/t13/3707351570932660756?url=https%3A%2F%2Fwww.facebook.com%2Fads%2Fimage%2F%3Fd%3DAQKFFjCK3CBISmYBPVenTCqyOu-LK6C-5N5xTM7YjFm8oV3n0hABnpTMC0d3Er8_zMRGsIZis7Nyyub7odTsiFKxjQi_hMMT9VaThegdZBLG7xA8lbdHNknzV-C_HWYE0IHpp2XljQl2RhVexUbmscoK&fb_obo=1&utld=facebook.com&stp=c0.5000x0.5000f_dst-emg0_p46x46_q75_tt6&_nc_oc=Adg5NyeNLfmTslKrnb7iT5g9wUGFTEvJwW73dAq7LXpnm-kaHVndauiw5AbuqD3mMuI&ccb=13-1&oh=06_Q399P3QwtBXPU2GmG8n4A4Fxsvj7PSSAqcMJEKlXfgKORQY&oe=67830908&_nc_sid=58080a"
                                                                            alt=""
                                                                          />
                                                                        </div>
                                                                      </div>
                                                                    </div>
                                                                  </div>
                                                                </div>
                                                                <div class="x1cy8zhl x78zum5 x2lwn1j xeuugli x16n37ib xq8finb">
                                                                  <div class="x78zum5 xdt5ytf x2lwn1j xeuugli">
                                                                    <span class="xmi5d70 xw23nyj xo1l8bm x63nzvj x1541jtf xq9mrsl x1h4wwuj xeuugli">
                                                                      Campaigns
                                                                    </span>
                                                                    <div class="x6s0dn4 x78zum5 x2lwn1j xeuugli">
                                                                      <div
                                                                        class="x3nfvp2 x120ccyz x4s1yf2 xw3qccf"
                                                                        role="presentation"
                                                                      >
                                                                        <div
                                                                          class="xtwfq29 style-Joi47"
                                                                          id="style-Joi47"
                                                                        ></div>
                                                                      </div>
                                                                      <div class="xmi5d70 x1fvot60 xxio538 xbsr9hj xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj x1fcty0u x1kbpmyu x15botz4">
                                                                        [08/19/2024]
                                                                        Promoting
                                                                        https://flarequick.com/cf/r/66c3718ee17b5c00127b412f?ad_id=&amp;adset_id=&amp;campaign_id...
                                                                      </div>
                                                                    </div>
                                                                  </div>
                                                                </div>
                                                                <div class="x1cy8zhl x78zum5 x1qgv0r9 x1na6gtj x2lwn1j xeuugli x16n37ib">
                                                                  <div class="x78zum5 x2lwn1j xeuugli x65f84u xw2csxc x1odjw0f">
                                                                    <div class="x78zum5 xdt5ytf x2lwn1j xeuugli">
                                                                      <div class="x78zum5 x2lwn1j xeuugli">
                                                                        <span class="xmi5d70 xw23nyj xo1l8bm x63nzvj x1541jtf xq9mrsl x1h4wwuj xeuugli">
                                                                          Potential
                                                                          outcome
                                                                        </span>
                                                                      </div>
                                                                      <span class="xmi5d70 x1fvot60 xxio538 xmbzoqv xq9mrsl x1h4wwuj x117nqv4 xeuugli">
                                                                        Delivery
                                                                        enabled
                                                                      </span>
                                                                      <div class="x78zum5 x2lwn1j xeuugli"></div>
                                                                    </div>
                                                                  </div>
                                                                </div>
                                                                <div class="xuk3077 x78zum5 x1qgv0r9 x1na6gtj x2lwn1j xeuugli x16n37ib"></div>
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
                                                                          View
                                                                          ad
                                                                          sets
                                                                        </div>
                                                                      </div>
                                                                    </div>
                                                                  </span>
                                                                </div>
                                                              </div>
                                                            </div>
                                                          </div>
                                                        </div>
                                                        <hr class="xjbqb8w x11i5rnm x1mh8g0r xso031l x1q0q8m5 xqtp20y xwebqov xvyu6v8 xrsgblv x10lij0i x14vqqas xat24cr" />
                                                        <div class="x78zum5 x1qughib x2lwn1j xeuugli x14vqqas">
                                                          <div
                                                            class="x3nfvp2 x193iq5w xxymvpz"
                                                            role="none"
                                                          >
                                                            <div
                                                              aria-busy="false"
                                                              class="x1i10hfl xjqpnuy xa49m3k xqeqjp1 x2hbi6w x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli x16tdsg8 xggy1nq x1ja2u2z x1t137rt x6s0dn4 x1ejq31n xd10rxx x1sy0etr x17r0tee x3nfvp2 xdl72j9 x1q0g3np x2lah0s x193iq5w x1n2onr6 x1hl2dhg x87ps6o xxymvpz xlh3980 xvmahel x1lku1pv x1g40iwv x1lcm9me x1yr5g0i xrt01vj x10y3i5r xo1l8bm xbsr9hj x1v911su x1y1aw1k xwib8y2 x1pi30zi x1ye3gou"
                                                              role="button"
                                                              tabindex="0"
                                                            >
                                                              <span class="xmi5d70 x1fvot60 xxio538 x1heor9g xq9mrsl x1h4wwuj x1pd3egz xeuugli xh8yej3">
                                                                <div class="x78zum5">
                                                                  <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1hc1fzr x13dflua x6o7n8i xxziih7 x12w9bfk xl56j7k xh8yej3">
                                                                    <div
                                                                      class="x3nfvp2 x120ccyz x1heor9g x2lah0s x1c4vz4f"
                                                                      role="presentation"
                                                                    >
                                                                      <div
                                                                        class="xtwfq29 style-CsoET"
                                                                        id="style-CsoET"
                                                                      ></div>
                                                                    </div>
                                                                    <div class="x1xqt7ti x1fvot60 xk50ysn xxio538 x1heor9g xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj xeuugli">
                                                                      See more
                                                                      (5)
                                                                    </div>
                                                                  </div>
                                                                </div>
                                                              </span>
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
                                              <div
                                                class="x1gzqxud x1lcm9me x1yr5g0i xrt01vj x10y3i5r xhgxa4x xy5ysw6 x1qkj6lk xn3walq xnvurfn xv1ta3e x1opv7go x1dtnpoi xibdhds xtnng9g xhvrwov x13k1m86 xwx4but x1cpjm7i xszcg87 x1hmns74 xkk1bqk x14d4353 xsxiz9q x1rmj1tg xchklzq x9f619 xc8icb0 x1n2onr6 x1pvq41x xhhp2wi x14q35kh x1wa3ocq x1n7iyjn x1s928wv x1wsn0xg x1j6awrg x162n7g1 x1m1drc7 x4eaejv xi4xitw x5yr21d xh8yej3"
                                                data-auto-logging-component-type="GeoCard"
                                              >
                                                <div class="x78zum5 xdt5ytf x5yr21d xedcshv x1t2pt76 xh8yej3">
                                                  <div class="x9f619 x78zum5 x1iyjqo2 x5yr21d x2lwn1j x1n2onr6 xh8yej3">
                                                    <div class="xw2csxc x1odjw0f xh8yej3 x18d9i69">
                                                      <div class="xjm9jq1 xg01cxk x47corl xh8yej3 x1jyxor1"></div>
                                                      <div class="x78zum5 xdt5ytf x2lwn1j xeuugli xw7yly9 xktsk01 x1yztbdb x1d52u69">
                                                        <div class="x8gbvx8 x78zum5 xdt5ytf x2lwn1j xeuugli">
                                                          <div class="x6s0dn4 x78zum5 x1q0g3np x1qughib x2lwn1j xeuugli">
                                                            <div class="x78zum5 xdt5ytf xfex06f x3pnbk8 x2lwn1j xeuugli">
                                                              <div
                                                                aria-level="3"
                                                                class="x1xqt7ti x1uxerd5 x1xlr1w8 xrohxju xbsr9hj xq9mrsl x1yc453h x1h4wwuj xeuugli"
                                                                role="heading"
                                                              >
                                                                Scale your
                                                                high-performing
                                                                ad sets and
                                                                campaigns
                                                              </div>
                                                            </div>
                                                            <div class="x6s0dn4 x78zum5 x2lwn1j xeuugli x1n2onr6 xfzwrhw">
                                                              <div class="_3qn7 _61-0 _2fyi _3qnf">
                                                                <div class="x1rg5ohu x67bb7w">
                                                                  <div
                                                                    class="x3nfvp2 x193iq5w xxymvpz"
                                                                    role="none"
                                                                  >
                                                                    <div
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
                                                                            btn2
                                                                          </div>
                                                                          <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1hc1fzr x13dflua x6o7n8i xxziih7 x12w9bfk xl56j7k xh8yej3">
                                                                            <div
                                                                              class="x3nfvp2 x120ccyz x1heor9g x2lah0s x1c4vz4f"
                                                                              role="presentation"
                                                                            >
                                                                              <div
                                                                                class="xtwfq29 style-AJh1w"
                                                                                id="style-AJh1w"
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
                                                          <div class="xmi5d70 x1fvot60 xxio538 xbsr9hj xq9mrsl x1h4wwuj x1fcty0u xeuugli x1xmf6yo">
                                                            These ad sets and
                                                            campaigns have had
                                                            stable delivery and
                                                            better performance
                                                            compared to your ad
                                                            sets and campaigns
                                                            with the same goals.
                                                            Consider increasing
                                                            their budgets to
                                                            scale the results
                                                            further.
                                                          </div>
                                                        </div>
                                                        <div>
                                                          <div>
                                                            <hr class="xjbqb8w x11i5rnm x1mh8g0r xso031l x1q0q8m5 xqtp20y xwebqov xvyu6v8 xrsgblv x10lij0i x14vqqas xod5an3" />
                                                            <div class="x6s0dn4 x78zum5 x1q0g3np x1qughib x2lwn1j xeuugli xs83m0k">
                                                              <div class="x1cy8zhl x78zum5 x2lwn1j xeuugli">
                                                                <div>
                                                                  <div class="x1lliihq x1n2onr6 x2lah0s">
                                                                    <div
                                                                      class="x3oybdh style-ySN3s"
                                                                      id="style-ySN3s"
                                                                    >
                                                                      <div class="x1lliihq x1n2onr6 x2lah0s x1gnnpzl x1849jeq x1lcm9me x1yr5g0i xrt01vj x10y3i5r">
                                                                        <div class="x1o1ewxj x3x9cwd x1e5q0jg x13rtm0m x5yr21d x1n2onr6 xh8yej3 x1gzqxud x4p5aij x19um543 x1j85h84 x1m6msm">
                                                                          <div class="x1o1ewxj x3x9cwd x1e5q0jg x13rtm0m x5yr21d x1n2onr6 xh8yej3">
                                                                            <div class="x10l6tqk x6ikm8r x10wlt62 x13vifvy x17qophe xh8yej3 x5yr21d x1o1ewxj x3x9cwd x1e5q0jg x13rtm0m xtd80it x1jgp7su x1q1rkhy x18tuezv x1xuqjiz xhl3afg x10cdfl8">
                                                                              <img
                                                                                alt=""
                                                                                class="img"
                                                                                src="https://external.flhe32-1.fna.fbcdn.net/emg1/v/t13/1406097482605483195?url=https%3A%2F%2Fwww.facebook.com%2Fads%2Fimage%2F%3Fd%3DAQLPCqu-NHn55i4GCZed6qM4v0M8kYN-Y_N2bh7z7SXDtwIkXoWhqx4wvFLks0UOnalz_-oJdwJ7aIshACJ828czDEzZyB3DqVAbSJUcDvjDhJY-QcCc6fJwEO_IoQy_2criCky8ndmJJm4Q7GRwRVY0&fb_obo=1&utld=facebook.com&stp=c0.5000x0.5000f_dst-emg0_p46x46_q75&_nc_eui2=AeEb6v4gfUda6JqJFFVQiKOTIwLym8e5d5sjAvKbx7l3m64NSZxF_M-RuxJ-KDzbVtoN631VcRUAT2pJLNO9zkhI&ccb=13-1&oh=06_Q399feYPPpJ-KsKGRAV8RveuxuAPir4rcscbxb65Z2v36kU&oe=6719B365&_nc_sid=58080a"
                                                                              />
                                                                            </div>
                                                                          </div>
                                                                        </div>
                                                                      </div>
                                                                    </div>
                                                                    <div
                                                                      class="x3oybdh style-yA7RE"
                                                                      id="style-yA7RE"
                                                                    >
                                                                      <div class="x1lliihq x1n2onr6 x2lah0s x1gnnpzl x1849jeq x1lcm9me x1yr5g0i xrt01vj x10y3i5r">
                                                                        <div class="x1o1ewxj x3x9cwd x1e5q0jg x13rtm0m x5yr21d x1n2onr6 xh8yej3 x1gzqxud x4p5aij x19um543 x1j85h84 x1m6msm">
                                                                          <div class="x1o1ewxj x3x9cwd x1e5q0jg x13rtm0m x5yr21d x1n2onr6 xh8yej3">
                                                                            <div class="x10l6tqk x6ikm8r x10wlt62 x13vifvy x17qophe xh8yej3 x5yr21d x1o1ewxj x3x9cwd x1e5q0jg x13rtm0m xtd80it x1jgp7su x1q1rkhy x18tuezv x1xuqjiz xhl3afg x10cdfl8">
                                                                              <img
                                                                                alt=""
                                                                                class="img"
                                                                                src="https://external.flhe32-1.fna.fbcdn.net/emg1/v/t13/1406097482605483195?url=https%3A%2F%2Fwww.facebook.com%2Fads%2Fimage%2F%3Fd%3DAQLPCqu-NHn55i4GCZed6qM4v0M8kYN-Y_N2bh7z7SXDtwIkXoWhqx4wvFLks0UOnalz_-oJdwJ7aIshACJ828czDEzZyB3DqVAbSJUcDvjDhJY-QcCc6fJwEO_IoQy_2criCky8ndmJJm4Q7GRwRVY0&fb_obo=1&utld=facebook.com&stp=c0.5000x0.5000f_dst-emg0_p46x46_q75&_nc_eui2=AeEb6v4gfUda6JqJFFVQiKOTIwLym8e5d5sjAvKbx7l3m64NSZxF_M-RuxJ-KDzbVtoN631VcRUAT2pJLNO9zkhI&ccb=13-1&oh=06_Q399feYPPpJ-KsKGRAV8RveuxuAPir4rcscbxb65Z2v36kU&oe=6719B365&_nc_sid=58080a"
                                                                              />
                                                                            </div>
                                                                          </div>
                                                                        </div>
                                                                      </div>
                                                                    </div>
                                                                    <div
                                                                      class="x3oybdh style-liVfc"
                                                                      id="style-liVfc"
                                                                    >
                                                                      <div class="x1lliihq x1n2onr6 x2lah0s x1gnnpzl x1849jeq x1lcm9me x1yr5g0i xrt01vj x10y3i5r">
                                                                        <div class="x1o1ewxj x3x9cwd x1e5q0jg x13rtm0m x5yr21d x1n2onr6 xh8yej3 x1gzqxud x4p5aij x19um543 x1j85h84 x1m6msm">
                                                                          <div class="x1o1ewxj x3x9cwd x1e5q0jg x13rtm0m x5yr21d x1n2onr6 xh8yej3">
                                                                            <div class="x10l6tqk x6ikm8r x10wlt62 x13vifvy x17qophe xh8yej3 x5yr21d x1o1ewxj x3x9cwd x1e5q0jg x13rtm0m xtd80it x1jgp7su x1q1rkhy x18tuezv x1xuqjiz xhl3afg x10cdfl8">
                                                                              <img
                                                                                alt=""
                                                                                class="img"
                                                                                src="https://external.flhe32-1.fna.fbcdn.net/emg1/v/t13/1406097482605483195?url=https%3A%2F%2Fwww.facebook.com%2Fads%2Fimage%2F%3Fd%3DAQLPCqu-NHn55i4GCZed6qM4v0M8kYN-Y_N2bh7z7SXDtwIkXoWhqx4wvFLks0UOnalz_-oJdwJ7aIshACJ828czDEzZyB3DqVAbSJUcDvjDhJY-QcCc6fJwEO_IoQy_2criCky8ndmJJm4Q7GRwRVY0&fb_obo=1&utld=facebook.com&stp=c0.5000x0.5000f_dst-emg0_p46x46_q75&_nc_eui2=AeEb6v4gfUda6JqJFFVQiKOTIwLym8e5d5sjAvKbx7l3m64NSZxF_M-RuxJ-KDzbVtoN631VcRUAT2pJLNO9zkhI&ccb=13-1&oh=06_Q399feYPPpJ-KsKGRAV8RveuxuAPir4rcscbxb65Z2v36kU&oe=6719B365&_nc_sid=58080a"
                                                                              />
                                                                            </div>
                                                                          </div>
                                                                        </div>
                                                                      </div>
                                                                    </div>
                                                                  </div>
                                                                </div>
                                                                <div class="x1cy8zhl x78zum5 x1qgv0r9 x1na6gtj x2lwn1j xeuugli x16n37ib">
                                                                  <div class="x78zum5 xdt5ytf x2lwn1j xeuugli">
                                                                    <div class="x78zum5 x1q0g3np xfex06f x3pnbk8 x2lwn1j xeuugli">
                                                                      <div class="x1cy8zhl x78zum5 xdt5ytf x2lwn1j xeuugli">
                                                                        <div class="x1cy8zhl x78zum5 x2lwn1j xeuugli">
                                                                          <span class="xmi5d70 xw23nyj xo1l8bm x63nzvj x1541jtf xq9mrsl x1h4wwuj xeuugli">
                                                                            Campaigns
                                                                          </span>
                                                                        </div>
                                                                        <span class="xmi5d70 x1fvot60 xxio538 xbsr9hj xq9mrsl x1h4wwuj x1fcty0u xeuugli">
                                                                          5
                                                                        </span>
                                                                      </div>
                                                                    </div>
                                                                  </div>
                                                                  <div class="x78zum5 x2lwn1j xeuugli">
                                                                    <div class="x78zum5 xdt5ytf x2lwn1j xeuugli">
                                                                      <div class="x6s0dn4 x78zum5 x2lwn1j xeuugli">
                                                                        <span class="xmi5d70 xw23nyj xo1l8bm x63nzvj x1541jtf xq9mrsl x1h4wwuj xeuugli">
                                                                          Potential
                                                                          outcome
                                                                        </span>
                                                                      </div>
                                                                      <span class="xmi5d70 x1fvot60 xxio538 xmbzoqv xq9mrsl x1h4wwuj x117nqv4 xeuugli">
                                                                        62% more
                                                                        conversions
                                                                      </span>
                                                                      <div class="x6s0dn4 x78zum5 x2lwn1j xeuugli">
                                                                        <span class="xmi5d70 xw23nyj xo1l8bm x63nzvj x1541jtf xq9mrsl x1h4wwuj xeuugli">
                                                                          Based
                                                                          on
                                                                          modelling
                                                                        </span>
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
                                                                                    class="xtwfq29 style-PO4Pc"
                                                                                    id="style-PO4Pc"
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
                                                              <div class="x78zum5 x2lwn1j xeuugli">
                                                                <div class="x78zum5 x1nhvcw1 x2lwn1j xeuugli x1i64zmx">
                                                                  <div data-clickable="1">
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
                                                                                Review
                                                                                budget
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
                                                    <div class="x10wjd1d x47corl x10l6tqk x19991ni x13dflua xwji4o3 xh8yej3 xg01cxk x1ta9b4f x1ey2m1c"></div>
                                                  </div>
                                                </div>
                                              </div>
                                              <div
                                                class="x1gzqxud x1lcm9me x1yr5g0i xrt01vj x10y3i5r xhgxa4x xy5ysw6 x1qkj6lk xn3walq xnvurfn xv1ta3e x1opv7go x1dtnpoi xibdhds xtnng9g xhvrwov x13k1m86 xwx4but x1cpjm7i xszcg87 x1hmns74 xkk1bqk x14d4353 xsxiz9q x1rmj1tg xchklzq x9f619 xc8icb0 x1n2onr6 x1pvq41x xhhp2wi x14q35kh x1wa3ocq x1n7iyjn x1s928wv x1wsn0xg x1j6awrg x162n7g1 x1m1drc7 x4eaejv xi4xitw x5yr21d xh8yej3"
                                                data-auto-logging-component-type="GeoCard"
                                              >
                                                <div class="x78zum5 xdt5ytf x5yr21d xedcshv x1t2pt76 xh8yej3">
                                                  <div class="x9f619 x78zum5 x1iyjqo2 x5yr21d x2lwn1j x1n2onr6 xh8yej3">
                                                    <div class="xw2csxc x1odjw0f xh8yej3 x18d9i69">
                                                      <div class="xjm9jq1 xg01cxk x47corl xh8yej3 x1jyxor1"></div>
                                                      <div class="x78zum5 xdt5ytf x2lwn1j xeuugli xw7yly9 xktsk01 x1yztbdb x1d52u69">
                                                        <div class="x8gbvx8 x78zum5 xdt5ytf x2lwn1j xeuugli">
                                                          <div class="x6s0dn4 x78zum5 x1q0g3np x1qughib x2lwn1j xeuugli">
                                                            <div class="x78zum5 xdt5ytf xfex06f x3pnbk8 x2lwn1j xeuugli">
                                                              <div>
                                                                <div
                                                                  aria-level="3"
                                                                  class="x1xqt7ti x1uxerd5 x1xlr1w8 xrohxju xbsr9hj xq9mrsl x1yc453h x1h4wwuj xeuugli"
                                                                  role="heading"
                                                                >
                                                                  Combine 2
                                                                  similar ad
                                                                  sets affected
                                                                  by
                                                                  fragmentation
                                                                </div>
                                                              </div>
                                                            </div>
                                                            <div class="x6s0dn4 x78zum5 x2lwn1j xeuugli x1n2onr6 xfzwrhw">
                                                              <div class="_3qn7 _61-0 _2fyi _3qnf">
                                                                <div class="x1rg5ohu x67bb7w">
                                                                  <div
                                                                    class="x3nfvp2 x193iq5w xxymvpz"
                                                                    role="none"
                                                                  >
                                                                    <div
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
                                                                            btn2
                                                                          </div>
                                                                          <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1hc1fzr x13dflua x6o7n8i xxziih7 x12w9bfk xl56j7k xh8yej3">
                                                                            <div
                                                                              class="x3nfvp2 x120ccyz x1heor9g x2lah0s x1c4vz4f"
                                                                              role="presentation"
                                                                            >
                                                                              <div
                                                                                class="xtwfq29 style-iLR5H"
                                                                                id="style-iLR5H"
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
                                                          <div class="xmi5d70 x1fvot60 xxio538 xbsr9hj xq9mrsl x1h4wwuj x1fcty0u xeuugli x1xmf6yo">
                                                            2 of your ad sets
                                                            have similar setups
                                                            and audiences, but
                                                            different creatives.
                                                            This may mean that
                                                            your ad sets get
                                                            fewer Traffic than
                                                            if you combined ad
                                                            sets.{" "}
                                                            <span>
                                                              <a
                                                                class="xt0psk2 x1hl2dhg xt0b8zv xmi5d70 xxio538 x1qsmy5i xq9mrsl x1yc453h x1h4wwuj x1qlqyl8 x1pd3egz"
                                                                target="_blank"
                                                                href="https://www.facebook.com/business/help/2419480091640105"
                                                              >
                                                                Learn more
                                                              </a>
                                                            </span>
                                                          </div>
                                                        </div>
                                                        <div>
                                                          <div>
                                                            <hr class="xjbqb8w x11i5rnm x1mh8g0r xso031l x1q0q8m5 xqtp20y xwebqov xvyu6v8 xrsgblv x10lij0i x14vqqas xod5an3" />
                                                            <div class="x6s0dn4 x78zum5 x1q0g3np x1qughib x2lwn1j xeuugli xs83m0k">
                                                              <div class="x1cy8zhl x78zum5 x2lwn1j xeuugli">
                                                                <div>
                                                                  <div class="x1lliihq x1n2onr6 x2lah0s">
                                                                    <div
                                                                      class="x3oybdh style-MR2Fn"
                                                                      id="style-MR2Fn"
                                                                    >
                                                                      <div class="x1lliihq x1n2onr6 x2lah0s x1gnnpzl x1849jeq x1lcm9me x1yr5g0i xrt01vj x10y3i5r">
                                                                        <div class="x1o1ewxj x3x9cwd x1e5q0jg x13rtm0m x5yr21d x1n2onr6 xh8yej3 x1gzqxud x4p5aij x19um543 x1j85h84 x1m6msm">
                                                                          <div class="x1o1ewxj x3x9cwd x1e5q0jg x13rtm0m x5yr21d x1n2onr6 xh8yej3">
                                                                            <div class="x10l6tqk x6ikm8r x10wlt62 x13vifvy x17qophe xh8yej3 x5yr21d x1o1ewxj x3x9cwd x1e5q0jg x13rtm0m xtd80it x1jgp7su x1q1rkhy x18tuezv x1xuqjiz xhl3afg x10cdfl8">
                                                                              <img
                                                                                alt=""
                                                                                class="img"
                                                                                src="https://external.flhe32-1.fna.fbcdn.net/emg1/v/t13/1406097482605483195?url=https%3A%2F%2Fwww.facebook.com%2Fads%2Fimage%2F%3Fd%3DAQLPCqu-NHn55i4GCZed6qM4v0M8kYN-Y_N2bh7z7SXDtwIkXoWhqx4wvFLks0UOnalz_-oJdwJ7aIshACJ828czDEzZyB3DqVAbSJUcDvjDhJY-QcCc6fJwEO_IoQy_2criCky8ndmJJm4Q7GRwRVY0&fb_obo=1&utld=facebook.com&stp=c0.5000x0.5000f_dst-emg0_p46x46_q75&_nc_eui2=AeEb6v4gfUda6JqJFFVQiKOTIwLym8e5d5sjAvKbx7l3m64NSZxF_M-RuxJ-KDzbVtoN631VcRUAT2pJLNO9zkhI&ccb=13-1&oh=06_Q399feYPPpJ-KsKGRAV8RveuxuAPir4rcscbxb65Z2v36kU&oe=6719B365&_nc_sid=58080a"
                                                                              />
                                                                            </div>
                                                                          </div>
                                                                        </div>
                                                                      </div>
                                                                    </div>
                                                                    <div
                                                                      class="x3oybdh style-kJCBR"
                                                                      id="style-kJCBR"
                                                                    >
                                                                      <div class="x1lliihq x1n2onr6 x2lah0s x1gnnpzl x1849jeq x1lcm9me x1yr5g0i xrt01vj x10y3i5r">
                                                                        <div class="x1o1ewxj x3x9cwd x1e5q0jg x13rtm0m x5yr21d x1n2onr6 xh8yej3 x1gzqxud x4p5aij x19um543 x1j85h84 x1m6msm">
                                                                          <div class="x1o1ewxj x3x9cwd x1e5q0jg x13rtm0m x5yr21d x1n2onr6 xh8yej3">
                                                                            <div class="x10l6tqk x6ikm8r x10wlt62 x13vifvy x17qophe xh8yej3 x5yr21d x1o1ewxj x3x9cwd x1e5q0jg x13rtm0m xtd80it x1jgp7su x1q1rkhy x18tuezv x1xuqjiz xhl3afg x10cdfl8">
                                                                              <img
                                                                                alt=""
                                                                                class="img"
                                                                                src="https://external.flhe32-1.fna.fbcdn.net/emg1/v/t13/1406097482605483195?url=https%3A%2F%2Fwww.facebook.com%2Fads%2Fimage%2F%3Fd%3DAQLPCqu-NHn55i4GCZed6qM4v0M8kYN-Y_N2bh7z7SXDtwIkXoWhqx4wvFLks0UOnalz_-oJdwJ7aIshACJ828czDEzZyB3DqVAbSJUcDvjDhJY-QcCc6fJwEO_IoQy_2criCky8ndmJJm4Q7GRwRVY0&fb_obo=1&utld=facebook.com&stp=c0.5000x0.5000f_dst-emg0_p46x46_q75&_nc_eui2=AeEb6v4gfUda6JqJFFVQiKOTIwLym8e5d5sjAvKbx7l3m64NSZxF_M-RuxJ-KDzbVtoN631VcRUAT2pJLNO9zkhI&ccb=13-1&oh=06_Q399feYPPpJ-KsKGRAV8RveuxuAPir4rcscbxb65Z2v36kU&oe=6719B365&_nc_sid=58080a"
                                                                              />
                                                                            </div>
                                                                          </div>
                                                                        </div>
                                                                      </div>
                                                                    </div>
                                                                  </div>
                                                                </div>
                                                                <div class="x1cy8zhl x78zum5 x1qgv0r9 x1na6gtj x2lwn1j xeuugli x16n37ib">
                                                                  <div class="x78zum5 xdt5ytf x2lwn1j xeuugli">
                                                                    <div class="x78zum5 x1q0g3np xfex06f x3pnbk8 x2lwn1j xeuugli">
                                                                      <div class="x1cy8zhl x78zum5 xdt5ytf x2lwn1j xeuugli">
                                                                        <div class="x1cy8zhl x78zum5 x2lwn1j xeuugli">
                                                                          <span class="xmi5d70 xw23nyj xo1l8bm x63nzvj x1541jtf xq9mrsl x1h4wwuj xeuugli">
                                                                            Ad
                                                                            sets
                                                                          </span>
                                                                        </div>
                                                                        <span class="xmi5d70 x1fvot60 xxio538 xbsr9hj xq9mrsl x1h4wwuj x1fcty0u xeuugli">
                                                                          2
                                                                        </span>
                                                                      </div>
                                                                    </div>
                                                                  </div>
                                                                  <div class="x78zum5 x2lwn1j xeuugli">
                                                                    <div class="x78zum5 xdt5ytf x2lwn1j xeuugli">
                                                                      <div class="x78zum5 xdt5ytf x2lwn1j xeuugli">
                                                                        <div>
                                                                          <span class="xmi5d70 xw23nyj xo1l8bm x63nzvj x1541jtf xq9mrsl x1h4wwuj xeuugli">
                                                                            Similar
                                                                            advertisers'
                                                                            outcome
                                                                          </span>
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
                                                                                      class="xtwfq29 style-9L8dS"
                                                                                      id="style-9L8dS"
                                                                                    ></div>
                                                                                  </div>
                                                                                </div>
                                                                              </div>
                                                                            </div>
                                                                          </div>
                                                                        </div>
                                                                        <span class="xmi5d70 x1fvot60 xxio538 xmbzoqv xq9mrsl x1h4wwuj x117nqv4 xeuugli">
                                                                          Up to
                                                                          15%
                                                                          more
                                                                          Traffic
                                                                        </span>
                                                                        <span class="xmi5d70 xw23nyj xo1l8bm x63nzvj x1541jtf xq9mrsl x1h4wwuj xeuugli">
                                                                          Over
                                                                          the
                                                                          seven
                                                                          days
                                                                          after
                                                                          taking
                                                                          this
                                                                          recommendation
                                                                          compared
                                                                          to
                                                                          advertisers
                                                                          who
                                                                          did
                                                                          not
                                                                          take
                                                                          it
                                                                        </span>
                                                                      </div>
                                                                    </div>
                                                                  </div>
                                                                </div>
                                                              </div>
                                                              <div class="x78zum5 x2lwn1j xeuugli">
                                                                <div class="x78zum5 x1nhvcw1 x2lwn1j xeuugli x1i64zmx">
                                                                  <div data-clickable="1">
                                                                    <div
                                                                      class="x3oybdh xuxw1ft x1iknuni xw9jwym x1e2iszw xg0tal0 x3nfvp2 x1lcm9me x1yr5g0i xrt01vj x10y3i5r x193iq5w xeuugli"
                                                                      role="group"
                                                                    >
                                                                      <div
                                                                        aria-busy="false"
                                                                        class="x1i10hfl xjqpnuy xa49m3k xqeqjp1 x2hbi6w x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli x16tdsg8 xggy1nq x1ja2u2z x6s0dn4 x1ejq31n xd10rxx x1sy0etr x17r0tee x3nfvp2 xdl72j9 x1q0g3np x2lah0s x193iq5w x1n2onr6 x1hl2dhg x87ps6o xxymvpz xlh3980 xvmahel x1lku1pv x1g40iwv x1lcm9me x1yr5g0i xrt01vj x10y3i5r x1ob88yx xaatb59 x1qgsegg xo1l8bm xbsr9hj x1v911su x1y1aw1k xwib8y2 x1swvt13 x1pi30zi style-AD8SU"
                                                                        role="button"
                                                                        tabindex="0"
                                                                        id="style-AD8SU"
                                                                      >
                                                                        <span class="xmi5d70 x1fvot60 xxio538 x1heor9g xq9mrsl x1h4wwuj x1pd3egz xeuugli xh8yej3">
                                                                          <div class="x78zum5">
                                                                            <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1hc1fzr x13dflua x6o7n8i xxziih7 x12w9bfk xl56j7k xh8yej3">
                                                                              <div class="x1xqt7ti x1fvot60 xk50ysn xxio538 x1heor9g xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj xeuugli">
                                                                                Show
                                                                                me
                                                                                how
                                                                              </div>
                                                                            </div>
                                                                          </div>
                                                                        </span>
                                                                      </div>
                                                                      <div class="x1rg5ohu x39eecv">
                                                                        <div
                                                                          aria-busy="false"
                                                                          aria-controls="js_e2"
                                                                          aria-expanded="false"
                                                                          aria-haspopup="menu"
                                                                          class="x1i10hfl xjqpnuy xa49m3k xqeqjp1 x2hbi6w x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli x16tdsg8 xggy1nq x1ja2u2z x6s0dn4 x1ejq31n xd10rxx x1sy0etr x17r0tee x3nfvp2 xdl72j9 x1q0g3np x2lah0s x193iq5w x1n2onr6 x1hl2dhg x87ps6o xxymvpz xlh3980 xvmahel x1lku1pv x1g40iwv x1lcm9me x1yr5g0i xrt01vj x10y3i5r x1ob88yx xaatb59 x1qgsegg xo1l8bm xbsr9hj x1v911su x1y1aw1k xwib8y2 x1ye3gou xn6708d style-fwnPf"
                                                                          role="button"
                                                                          tabindex="0"
                                                                          id="style-fwnPf"
                                                                        >
                                                                          <span class="xmi5d70 x1fvot60 xxio538 x1heor9g xq9mrsl x1h4wwuj x1pd3egz xeuugli xh8yej3">
                                                                            <div class="x78zum5">
                                                                              <div
                                                                                class="x1qvwoe0 xjm9jq1 x1y332i5 xcwd3tp x1jyxor1 x39eecv x6ikm8r x10wlt62 x10l6tqk xuxw1ft x1i1rx1s"
                                                                                data-sscoverage-ignore="true"
                                                                              >
                                                                                Open
                                                                                Drop-down
                                                                              </div>
                                                                              <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1hc1fzr x13dflua x6o7n8i xxziih7 x12w9bfk x1nhvcw1 xh8yej3">
                                                                                ​
                                                                                <div
                                                                                  class="x3nfvp2 x120ccyz x1heor9g x2lah0s x1c4vz4f x1gryazu"
                                                                                  role="presentation"
                                                                                >
                                                                                  <div
                                                                                    class="xtwfq29 style-MTNNs"
                                                                                    id="style-MTNNs"
                                                                                  ></div>
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
                                                      </div>
                                                      <div class="xjm9jq1 xg01cxk x47corl xh8yej3 x1y332i5"></div>
                                                    </div>
                                                    <div class="x10wjd1d x47corl x10l6tqk x19991ni x13dflua xwji4o3 xh8yej3 xg01cxk x67dex8 x13vifvy"></div>
                                                    <div class="x10wjd1d x47corl x10l6tqk x19991ni x13dflua xwji4o3 xh8yej3 xg01cxk x1ta9b4f x1ey2m1c"></div>
                                                  </div>
                                                </div>
                                              </div>
                                              <div
                                                class="x1gzqxud x1lcm9me x1yr5g0i xrt01vj x10y3i5r xhgxa4x xy5ysw6 x1qkj6lk xn3walq xnvurfn xv1ta3e x1opv7go x1dtnpoi xibdhds xtnng9g xhvrwov x13k1m86 xwx4but x1cpjm7i xszcg87 x1hmns74 xkk1bqk x14d4353 xsxiz9q x1rmj1tg xchklzq x9f619 xc8icb0 x1n2onr6 x1pvq41x xhhp2wi x14q35kh x1wa3ocq x1n7iyjn x1s928wv x1wsn0xg x1j6awrg x162n7g1 x1m1drc7 x4eaejv xi4xitw x5yr21d xh8yej3"
                                                data-auto-logging-component-type="GeoCard"
                                              >
                                                <div class="x78zum5 xdt5ytf x5yr21d xedcshv x1t2pt76 xh8yej3">
                                                  <div class="x9f619 x78zum5 x1iyjqo2 x5yr21d x2lwn1j x1n2onr6 xh8yej3">
                                                    <div class="xw2csxc x1odjw0f xh8yej3 x18d9i69">
                                                      <div class="xjm9jq1 xg01cxk x47corl xh8yej3 x1jyxor1"></div>
                                                      <div class="x78zum5 xdt5ytf x2lwn1j xeuugli xw7yly9 xktsk01 x1yztbdb x1d52u69">
                                                        <div class="x8gbvx8 x78zum5 xdt5ytf x2lwn1j xeuugli">
                                                          <div class="x6s0dn4 x78zum5 x1q0g3np x1qughib x2lwn1j xeuugli">
                                                            <div class="x78zum5 xdt5ytf xfex06f x3pnbk8 x2lwn1j xeuugli">
                                                              <div
                                                                aria-level="3"
                                                                class="x1xqt7ti x1uxerd5 x1xlr1w8 xrohxju xbsr9hj xq9mrsl x1yc453h x1h4wwuj xeuugli"
                                                                role="heading"
                                                              >
                                                                Automatically
                                                                add music to 1
                                                                eligible ad
                                                              </div>
                                                            </div>
                                                            <div class="x6s0dn4 x78zum5 x2lwn1j xeuugli x1n2onr6 xfzwrhw">
                                                              <div class="_3qn7 _61-0 _2fyi _3qnf">
                                                                <div class="x1rg5ohu x67bb7w">
                                                                  <div
                                                                    class="x3nfvp2 x193iq5w xxymvpz"
                                                                    role="none"
                                                                  >
                                                                    <div
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
                                                                            btn2
                                                                          </div>
                                                                          <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1hc1fzr x13dflua x6o7n8i xxziih7 x12w9bfk xl56j7k xh8yej3">
                                                                            <div
                                                                              class="x3nfvp2 x120ccyz x1heor9g x2lah0s x1c4vz4f"
                                                                              role="presentation"
                                                                            >
                                                                              <div
                                                                                class="xtwfq29 style-UoVQh"
                                                                                id="style-UoVQh"
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
                                                          <div class="xmi5d70 x1fvot60 xxio538 xbsr9hj xq9mrsl x1h4wwuj x1fcty0u xeuugli x1xmf6yo">
                                                            Let us automatically
                                                            select and add music
                                                            to your ad at no
                                                            cost to you, based
                                                            on its content.
                                                          </div>
                                                          <div class="x78zum5 x2lwn1j xeuugli x1sy10c2">
                                                            <div>
                                                              <span class="xmi5d70 xw23nyj xo1l8bm x63nzvj x1541jtf xq9mrsl x1h4wwuj xeuugli">
                                                                By clicking
                                                                "Apply", you
                                                                agree to
                                                                Facebook's{" "}
                                                                <a
                                                                  class="xt0psk2 x1hl2dhg xt0b8zv xmi5d70 xxio538 x1qsmy5i xq9mrsl x1yc453h x1h4wwuj x1qlqyl8 x1pd3egz"
                                                                  href="#"
                                                                >
                                                                  Terms and
                                                                  Advertising
                                                                  Guidelines
                                                                </a>
                                                                .
                                                              </span>
                                                            </div>
                                                          </div>
                                                        </div>
                                                        <div>
                                                          <div>
                                                            <hr class="xjbqb8w x11i5rnm x1mh8g0r xso031l x1q0q8m5 xqtp20y xwebqov xvyu6v8 xrsgblv x10lij0i x14vqqas xod5an3" />
                                                            <div class="x6s0dn4 x78zum5 x1q0g3np x1qughib x2lwn1j xeuugli xs83m0k">
                                                              <div class="x1cy8zhl x78zum5 x2lwn1j xeuugli">
                                                                <div>
                                                                  <div class="x1lliihq x1n2onr6 x2lah0s">
                                                                    <div
                                                                      class="x3oybdh style-4XWq8"
                                                                      id="style-4XWq8"
                                                                    >
                                                                      <div class="x1lliihq x1n2onr6 x2lah0s xsdox4t x1useyqa x1lcm9me x1yr5g0i xrt01vj x10y3i5r">
                                                                        <div class="x10l6tqk x6ikm8r x10wlt62 x13vifvy x17qophe xh8yej3 x5yr21d x1o1ewxj x3x9cwd x1e5q0jg x13rtm0m xtd80it x1jgp7su x1q1rkhy x18tuezv x1xuqjiz xhl3afg x10cdfl8">
                                                                          <img
                                                                            alt=""
                                                                            class="img"
                                                                            src="https://external.flhe32-1.fna.fbcdn.net/emg1/v/t13/1406097482605483195?url=https%3A%2F%2Fwww.facebook.com%2Fads%2Fimage%2F%3Fd%3DAQLPCqu-NHn55i4GCZed6qM4v0M8kYN-Y_N2bh7z7SXDtwIkXoWhqx4wvFLks0UOnalz_-oJdwJ7aIshACJ828czDEzZyB3DqVAbSJUcDvjDhJY-QcCc6fJwEO_IoQy_2criCky8ndmJJm4Q7GRwRVY0&fb_obo=1&utld=facebook.com&stp=c0.5000x0.5000f_dst-emg0_p46x46_q75&_nc_eui2=AeEb6v4gfUda6JqJFFVQiKOTIwLym8e5d5sjAvKbx7l3m64NSZxF_M-RuxJ-KDzbVtoN631VcRUAT2pJLNO9zkhI&ccb=13-1&oh=06_Q399feYPPpJ-KsKGRAV8RveuxuAPir4rcscbxb65Z2v36kU&oe=6719B365&_nc_sid=58080a"
                                                                          />
                                                                        </div>
                                                                      </div>
                                                                    </div>
                                                                  </div>
                                                                </div>
                                                                <div class="x1cy8zhl x78zum5 x1qgv0r9 x1na6gtj x2lwn1j xeuugli x16n37ib">
                                                                  <div class="x78zum5 xdt5ytf x2lwn1j xeuugli">
                                                                    <div class="x78zum5 x1q0g3np xfex06f x3pnbk8 x2lwn1j xeuugli">
                                                                      <div class="x1cy8zhl x78zum5 xdt5ytf x2lwn1j xeuugli">
                                                                        <div class="x1cy8zhl x78zum5 x2lwn1j xeuugli">
                                                                          <span class="xmi5d70 xw23nyj xo1l8bm x63nzvj x1541jtf xq9mrsl x1h4wwuj xeuugli">
                                                                            Ads
                                                                          </span>
                                                                        </div>
                                                                        <span class="xmi5d70 x1fvot60 xxio538 xbsr9hj xq9mrsl x1h4wwuj x1fcty0u xeuugli">
                                                                          1
                                                                        </span>
                                                                      </div>
                                                                    </div>
                                                                  </div>
                                                                  <div class="x78zum5 x2lwn1j xeuugli">
                                                                    <div class="x78zum5 xdt5ytf x2lwn1j xeuugli">
                                                                      <span class="xmi5d70 xw23nyj xo1l8bm x63nzvj x1541jtf xq9mrsl x1h4wwuj xeuugli">
                                                                        Potential
                                                                        outcome
                                                                      </span>
                                                                      <span class="xmi5d70 x1fvot60 xxio538 xmbzoqv xq9mrsl x1h4wwuj x117nqv4 xeuugli">
                                                                        Higher
                                                                        click-through
                                                                        rate
                                                                      </span>
                                                                      <div class="x6s0dn4 x78zum5 x2lwn1j xeuugli">
                                                                        <span class="xmi5d70 xw23nyj xo1l8bm x63nzvj x1541jtf xq9mrsl x1h4wwuj xeuugli">
                                                                          Based
                                                                          on our
                                                                          experiment
                                                                        </span>
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
                                                                                    class="xtwfq29 style-vynZb"
                                                                                    id="style-vynZb"
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
                                                              <div class="x78zum5 x2lwn1j xeuugli">
                                                                <div class="x78zum5 x1nhvcw1 x2lwn1j xeuugli x1i64zmx">
                                                                  <div data-clickable="1">
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
                                                                                View
                                                                                details
                                                                              </div>
                                                                            </div>
                                                                          </div>
                                                                        </span>
                                                                      </div>
                                                                    </div>
                                                                  </div>
                                                                </div>
                                                                <div class="x78zum5 x1nhvcw1 x2lwn1j xeuugli x1i64zmx">
                                                                  <div data-clickable="1">
                                                                    <div
                                                                      class="x3nfvp2 x193iq5w xxymvpz"
                                                                      role="none"
                                                                    >
                                                                      <div
                                                                        aria-busy="false"
                                                                        class="x1i10hfl xjqpnuy xa49m3k xqeqjp1 x2hbi6w x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli x16tdsg8 xggy1nq x1ja2u2z x1t137rt x6s0dn4 x1ejq31n xd10rxx x1sy0etr x17r0tee x3nfvp2 xdl72j9 x1q0g3np x2lah0s x193iq5w x1n2onr6 x1hl2dhg x87ps6o xxymvpz xlh3980 xvmahel x1lku1pv x1g40iwv x1lcm9me x1yr5g0i xrt01vj x10y3i5r xo1l8bm x140t73q xqkc6xh x1y1aw1k xwib8y2 x1swvt13 x1pi30zi"
                                                                        role="button"
                                                                        tabindex="0"
                                                                      >
                                                                        <span class="xmi5d70 x1fvot60 xxio538 x1heor9g xq9mrsl x1h4wwuj x1pd3egz xeuugli xh8yej3">
                                                                          <div class="x78zum5">
                                                                            <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1hc1fzr x13dflua x6o7n8i xxziih7 x12w9bfk xl56j7k xh8yej3">
                                                                              <div class="x1xqt7ti x1fvot60 xk50ysn xxio538 x1heor9g xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj xeuugli">
                                                                                Apply
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
                                                    <div class="x10wjd1d x47corl x10l6tqk x19991ni x13dflua xwji4o3 xh8yej3 xg01cxk x1ta9b4f x1ey2m1c"></div>
                                                  </div>
                                                </div>
                                              </div>
                                              <div
                                                class="x1gzqxud x1lcm9me x1yr5g0i xrt01vj x10y3i5r xhgxa4x xy5ysw6 x1qkj6lk xn3walq xnvurfn xv1ta3e x1opv7go x1dtnpoi xibdhds xtnng9g xhvrwov x13k1m86 xwx4but x1cpjm7i xszcg87 x1hmns74 xkk1bqk x14d4353 xsxiz9q x1rmj1tg xchklzq x9f619 xc8icb0 x1n2onr6 x1pvq41x xhhp2wi x14q35kh x1wa3ocq x1n7iyjn x1s928wv x1wsn0xg x1j6awrg x162n7g1 x1m1drc7 x4eaejv xi4xitw x5yr21d xh8yej3"
                                                data-auto-logging-component-type="GeoCard"
                                              >
                                                <div class="x78zum5 xdt5ytf x5yr21d xedcshv x1t2pt76 xh8yej3">
                                                  <div class="x9f619 x78zum5 x1iyjqo2 x5yr21d x2lwn1j x1n2onr6 xh8yej3">
                                                    <div class="xw2csxc x1odjw0f xh8yej3 x18d9i69">
                                                      <div class="xjm9jq1 xg01cxk x47corl xh8yej3 x1jyxor1"></div>
                                                      <div class="x78zum5 xdt5ytf x2lwn1j xeuugli xw7yly9 xktsk01 x1yztbdb x1d52u69">
                                                        <div class="x8gbvx8 x78zum5 xdt5ytf x2lwn1j xeuugli">
                                                          <div class="x6s0dn4 x78zum5 x1q0g3np x1qughib x2lwn1j xeuugli">
                                                            <div class="x78zum5 xdt5ytf xfex06f x3pnbk8 x2lwn1j xeuugli">
                                                              <div
                                                                aria-level="3"
                                                                class="x1xqt7ti x1uxerd5 x1xlr1w8 xrohxju xbsr9hj xq9mrsl x1yc453h x1h4wwuj xeuugli"
                                                                role="heading"
                                                              >
                                                                Use additional
                                                                text options for
                                                                5 ads
                                                              </div>
                                                            </div>
                                                            <div class="x6s0dn4 x78zum5 x2lwn1j xeuugli x1n2onr6 xfzwrhw">
                                                              <div class="_3qn7 _61-0 _2fyi _3qnf">
                                                                <div class="x1rg5ohu x67bb7w">
                                                                  <div
                                                                    class="x3nfvp2 x193iq5w xxymvpz"
                                                                    role="none"
                                                                  >
                                                                    <div
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
                                                                            btn2
                                                                          </div>
                                                                          <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1hc1fzr x13dflua x6o7n8i xxziih7 x12w9bfk xl56j7k xh8yej3">
                                                                            <div
                                                                              class="x3nfvp2 x120ccyz x1heor9g x2lah0s x1c4vz4f"
                                                                              role="presentation"
                                                                            >
                                                                              <div
                                                                                class="xtwfq29 style-8xKj2"
                                                                                id="style-8xKj2"
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
                                                          <div class="xmi5d70 x1fvot60 xxio538 xbsr9hj xq9mrsl x1h4wwuj x1fcty0u xeuugli x1xmf6yo">
                                                            Select more text
                                                            options so that they
                                                            can be mixed and
                                                            matched to create
                                                            different versions
                                                            of your ad. The
                                                            version that may
                                                            perform best will be
                                                            shown for each
                                                            placement.
                                                          </div>
                                                        </div>
                                                        <div>
                                                          <div>
                                                            <hr class="xjbqb8w x11i5rnm x1mh8g0r xso031l x1q0q8m5 xqtp20y xwebqov xvyu6v8 xrsgblv x10lij0i x14vqqas xod5an3" />
                                                            <div class="x6s0dn4 x78zum5 x1q0g3np x1qughib x2lwn1j xeuugli xs83m0k">
                                                              <div class="x1cy8zhl x78zum5 x2lwn1j xeuugli">
                                                                <div>
                                                                  <div class="x1lliihq x1n2onr6 x2lah0s">
                                                                    <div
                                                                      class="x3oybdh style-NMFrd"
                                                                      id="style-NMFrd"
                                                                    >
                                                                      <div class="x1lliihq x1n2onr6 x2lah0s x1gnnpzl x1849jeq x1lcm9me x1yr5g0i xrt01vj x10y3i5r">
                                                                        <div class="x1o1ewxj x3x9cwd x1e5q0jg x13rtm0m x5yr21d x1n2onr6 xh8yej3 x1gzqxud x4p5aij x19um543 x1j85h84 x1m6msm">
                                                                          <div class="x1o1ewxj x3x9cwd x1e5q0jg x13rtm0m x5yr21d x1n2onr6 xh8yej3">
                                                                            <div class="x10l6tqk x6ikm8r x10wlt62 x13vifvy x17qophe xh8yej3 x5yr21d x1o1ewxj x3x9cwd x1e5q0jg x13rtm0m xtd80it x1jgp7su x1q1rkhy x18tuezv x1xuqjiz xhl3afg x10cdfl8">
                                                                              <img
                                                                                alt=""
                                                                                class="img"
                                                                                src="https://external.flhe3-2.fna.fbcdn.net/emg1/v/t13/12769734926803151713?url=https%3A%2F%2Fwww.facebook.com%2Fads%2Fimage%2F%3Fd%3DAQLwXrcHOyzpdgJM076f23egnRH015wNEexjLCBlN1ilDlu6Of6dqlvE92T7OoL59G-Sm4c_dr8PXGSdqrA6lHPy6kn78UfE65TX2BdVUJvoxJjxgFM60C1zfRWUA0hFYAkPkr2h-Y6VHVlBune5xPo8&amp;fb_obo=1&amp;utld=facebook.com&amp;stp=c0.5000x0.5000f_dst-emg0_p46x46_q75&amp;ccb=13-1&amp;oh=06_Q399ZSn3tZXdVvNcYSAdyTd7Hlpr5a6pZk90IHp8e3K-ybA&amp;oe=670FEACB&amp;_nc_sid=58080a"
                                                                              />
                                                                            </div>
                                                                          </div>
                                                                        </div>
                                                                      </div>
                                                                    </div>
                                                                    <div
                                                                      class="x3oybdh style-Uiiit"
                                                                      id="style-Uiiit"
                                                                    >
                                                                      <div class="x1lliihq x1n2onr6 x2lah0s x1gnnpzl x1849jeq x1lcm9me x1yr5g0i xrt01vj x10y3i5r">
                                                                        <div class="x1o1ewxj x3x9cwd x1e5q0jg x13rtm0m x5yr21d x1n2onr6 xh8yej3 x1gzqxud x4p5aij x19um543 x1j85h84 x1m6msm">
                                                                          <div class="x1o1ewxj x3x9cwd x1e5q0jg x13rtm0m x5yr21d x1n2onr6 xh8yej3">
                                                                            <div class="x10l6tqk x6ikm8r x10wlt62 x13vifvy x17qophe xh8yej3 x5yr21d x1o1ewxj x3x9cwd x1e5q0jg x13rtm0m xtd80it x1jgp7su x1q1rkhy x18tuezv x1xuqjiz xhl3afg x10cdfl8">
                                                                              <img
                                                                                alt=""
                                                                                class="img"
                                                                                src="https://external.flhe3-2.fna.fbcdn.net/emg1/v/t13/10507893757974963934?url=https%3A%2F%2Fwww.facebook.com%2Fads%2Fimage%2F%3Fd%3DAQKhRUHWucDh4qdhgQUWIx38MJK9hK1FHQVtC0_gSYt33exg4KP68PWQ6gqsDhtf51fLsuLB2b4ZNJ9IxjlKKjqZUA65H46Tnvc9I3YD_5yLAQfnwVutxeaEt_F2GayV5i-gyhJIf_K8HJ0FG4Xh2Bhs&amp;fb_obo=1&amp;utld=facebook.com&amp;stp=c0.5000x0.5000f_dst-emg0_p46x46_q75&amp;ccb=13-1&amp;oh=06_Q399yLrGLzuA1XBm31FRBPc_7D5t3pJ4oXzXEvZmYNe-k5U&amp;oe=670FC530&amp;_nc_sid=58080a"
                                                                              />
                                                                            </div>
                                                                          </div>
                                                                        </div>
                                                                      </div>
                                                                    </div>
                                                                    <div
                                                                      class="x3oybdh style-VhHxV"
                                                                      id="style-VhHxV"
                                                                    >
                                                                      <div class="x1lliihq x1n2onr6 x2lah0s x1gnnpzl x1849jeq x1lcm9me x1yr5g0i xrt01vj x10y3i5r">
                                                                        <div class="x1o1ewxj x3x9cwd x1e5q0jg x13rtm0m x5yr21d x1n2onr6 xh8yej3 x1gzqxud x4p5aij x19um543 x1j85h84 x1m6msm">
                                                                          <div class="x1o1ewxj x3x9cwd x1e5q0jg x13rtm0m x5yr21d x1n2onr6 xh8yej3">
                                                                            <div class="x10l6tqk x6ikm8r x10wlt62 x13vifvy x17qophe xh8yej3 x5yr21d x1o1ewxj x3x9cwd x1e5q0jg x13rtm0m xtd80it x1jgp7su x1q1rkhy x18tuezv x1xuqjiz xhl3afg x10cdfl8">
                                                                              <img
                                                                                alt=""
                                                                                class="img"
                                                                                src="https://external.flhe3-2.fna.fbcdn.net/emg1/v/t13/9211871006643672093?url=https%3A%2F%2Fwww.facebook.com%2Fads%2Fimage%2F%3Fd%3DAQLC1gj1_zomWw-nRpt80g0dAdfSNkeoahjdUjYbaSWtlwl3JkleZZjbXoyRBG553jq54vtOhstI2BpJRy3AwH81DHlgwifU0DZN3x_KaIZFjODsrCKNDnL3uTVOaZspAALFM3e5aY7-2fAV7YEEoaMw&amp;fb_obo=1&amp;utld=facebook.com&amp;stp=c0.5000x0.5000f_dst-emg0_p46x46_q75&amp;ccb=13-1&amp;oh=06_Q399O-QEP4KrGCQ0GhB6TLaYe44J9EwzeFdsT_BOIZmLnT8&amp;oe=670FE7F6&amp;_nc_sid=58080a"
                                                                              />
                                                                            </div>
                                                                          </div>
                                                                        </div>
                                                                      </div>
                                                                    </div>
                                                                  </div>
                                                                </div>
                                                                <div class="x1cy8zhl x78zum5 x1qgv0r9 x1na6gtj x2lwn1j xeuugli x16n37ib">
                                                                  <div class="x78zum5 xdt5ytf x2lwn1j xeuugli">
                                                                    <div class="x78zum5 x1q0g3np xfex06f x3pnbk8 x2lwn1j xeuugli">
                                                                      <div class="x1cy8zhl x78zum5 xdt5ytf x2lwn1j xeuugli">
                                                                        <div class="x1cy8zhl x78zum5 x2lwn1j xeuugli">
                                                                          <span class="xmi5d70 xw23nyj xo1l8bm x63nzvj x1541jtf xq9mrsl x1h4wwuj xeuugli">
                                                                            Ads
                                                                          </span>
                                                                        </div>
                                                                        <span class="xmi5d70 x1fvot60 xxio538 xbsr9hj xq9mrsl x1h4wwuj x1fcty0u xeuugli">
                                                                          5
                                                                        </span>
                                                                      </div>
                                                                    </div>
                                                                  </div>
                                                                  <div class="x78zum5 x2lwn1j xeuugli">
                                                                    <div class="x78zum5 xdt5ytf x2lwn1j xeuugli">
                                                                      <div class="x6s0dn4 x78zum5 x2lwn1j xeuugli">
                                                                        <span class="xmi5d70 xw23nyj xo1l8bm x63nzvj x1541jtf xq9mrsl x1h4wwuj xeuugli">
                                                                          Potential
                                                                          outcome
                                                                        </span>
                                                                      </div>
                                                                      <span class="xmi5d70 x1fvot60 xxio538 xmbzoqv xq9mrsl x1h4wwuj x117nqv4 xeuugli">
                                                                        15%
                                                                        lower
                                                                        cost per
                                                                        result
                                                                      </span>
                                                                      <div class="x6s0dn4 x78zum5 x2lwn1j xeuugli">
                                                                        <span class="xmi5d70 x1fvot60 xo1l8bm xxio538 x1541jtf xq9mrsl x1h4wwuj xeuugli">
                                                                          Based
                                                                          on
                                                                          modelling
                                                                        </span>
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
                                                                                    class="xtwfq29 style-df9sm"
                                                                                    id="style-df9sm"
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
                                                              <div class="x78zum5 x2lwn1j xeuugli">
                                                                <div class="x78zum5 x1nhvcw1 x2lwn1j xeuugli x1i64zmx">
                                                                  <div data-clickable="1">
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
                                                                                Review
                                                                                ads
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
                                                    <div class="x10wjd1d x47corl x10l6tqk x19991ni x13dflua xwji4o3 xh8yej3 xg01cxk x1ta9b4f x1ey2m1c"></div>
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
                          </div>
                          <div>
                            <div class="x1yztbdb x1n2onr6 xh8yej3">
                              <div
                                class="x1gzqxud x1lcm9me x1yr5g0i xrt01vj x10y3i5r xhgxa4x xy5ysw6 x1qkj6lk xn3walq xnvurfn xv1ta3e x1opv7go x1dtnpoi xibdhds xtnng9g xhvrwov x13k1m86 xwx4but x1cpjm7i xszcg87 x1hmns74 xkk1bqk x14d4353 xsxiz9q x1rmj1tg xchklzq x9f619 xc8icb0 x1n2onr6 x1pvq41x xhhp2wi x14q35kh x1wa3ocq x1n7iyjn x1s928wv x1wsn0xg x1j6awrg x162n7g1 x1m1drc7 x4eaejv xi4xitw x5yr21d xh8yej3"
                                data-auto-logging-component-type="GeoCard"
                              >
                                <div class="x78zum5 xdt5ytf x5yr21d xedcshv x1t2pt76 xh8yej3">
                                  <div class="x9f619 x78zum5 x1iyjqo2 x5yr21d x2lwn1j x1n2onr6 xh8yej3">
                                    <div class="xw2csxc x1odjw0f xh8yej3 x18d9i69">
                                      <div class="xjm9jq1 xg01cxk x47corl xh8yej3 x1jyxor1"></div>
                                      <div
                                        class="x1iyjqo2 xs83m0k xdl72j9 x3igimt xedcshv x1t2pt76 xyamay9 x1l90r2v x1swvt13 x1pi30zi"
                                        data-auto-logging-component-type="GeoSection"
                                        data-auto-logging-dependent-region=""
                                      >
                                        <div class="x78zum5 xdt5ytf xozqiw3 x2lwn1j xeuugli x1iyjqo2 xs83m0k x1kxxb1g">
                                          <div class="x1cy8zhl x78zum5 x1q0g3np x1qughib xozqiw3 x2lwn1j xeuugli x1iyjqo2 xs83m0k x19lwn94">
                                            <div class="x78zum5 xdt5ytf x2lwn1j xeuugli">
                                              <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1c4vz4f xs83m0k x19lwn94">
                                                <div
                                                  aria-level="2"
                                                  class="x1xqt7ti xm46was x1xlr1w8 x1jrz1v4 xbsr9hj xq9mrsl x1yc453h x1h4wwuj xeuugli"
                                                  role="heading"
                                                >
                                                  Latest results
                                                </div>
                                                <span class="xmi5d70 x1fvot60 xo1l8bm xxio538 x1541jtf xq9mrsl x1h4wwuj xeuugli">
                                                  Last 7 days
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
                                                              class="xtwfq29 style-oHqyt"
                                                              id="style-oHqyt"
                                                            ></div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </span>
                                              </div>
                                              <span class="xmi5d70 x1fvot60 xo1l8bm xxio538 xbsr9hj xq9mrsl x1h4wwuj xeuugli">
                                                Filter by result to see how your
                                                ads are doing.
                                              </span>
                                            </div>
                                            <div class="x78zum5 x2lwn1j xeuugli xpvyfi4">
                                              <div class="x78zum5 xdt5ytf xdl72j9 x1iyjqo2 xeuugli x1n2onr6 xh8yej3">
                                                <div
                                                  class="x1qvwoe0 xjm9jq1 x1y332i5 xcwd3tp x1jyxor1 x39eecv x6ikm8r x10wlt62 x10l6tqk xuxw1ft x1i1rx1s style-Z7WHa"
                                                  data-sscoverage-ignore="true"
                                                  id="style-Z7WHa"
                                                >
                                                  <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94">
                                                    <div class="x1iyjqo2">
                                                      <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 xs83m0k x65s2av">
                                                        <label
                                                          id="js_bf"
                                                          for="js_be"
                                                        >
                                                          <span class="xmi5d70 x1fvot60 xxio538 xbsr9hj xq9mrsl x1mzt3pk x1vvkbs x13faqbe x117nqv4 xeuugli">
                                                            <span class="xmi5d70 x1fvot60 xxio538 xbsr9hj xq9mrsl x1mzt3pk x1vvkbs x13faqbe x117nqv4 xeuugli">
                                                              Result type filter
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
                                                      <div class="xh8yej3">
                                                        <div
                                                          aria-busy="false"
                                                          aria-expanded="false"
                                                          aria-haspopup="listbox"
                                                          aria-labelledby="js_bf js_bi"
                                                          aria-owns="js_bd"
                                                          class="x1i10hfl xjqpnuy xa49m3k xqeqjp1 x2hbi6w x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli x16tdsg8 xggy1nq x1ja2u2z x6s0dn4 x1ejq31n xd10rxx x1sy0etr x17r0tee x3nfvp2 xdl72j9 x1q0g3np x2lah0s x193iq5w x1n2onr6 x1hl2dhg x87ps6o xxymvpz xlh3980 xvmahel x1lku1pv x1g40iwv x1lcm9me x1yr5g0i xrt01vj x10y3i5r x1ob88yx xaatb59 x1qgsegg xo1l8bm xbsr9hj x1v911su x1y1aw1k xwib8y2 x1swvt13 xn6708d xh8yej3"
                                                          id="js_be"
                                                          role="combobox"
                                                          tabindex="0"
                                                        >
                                                          <span class="xmi5d70 x1fvot60 xxio538 x1heor9g xq9mrsl x1h4wwuj x1pd3egz xeuugli xh8yej3">
                                                            <div class="x78zum5">
                                                              <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1hc1fzr x13dflua x6o7n8i xxziih7 x12w9bfk x1nhvcw1 xh8yej3">
                                                                <div class="x1xqt7ti x1fvot60 xk50ysn xxio538 x1heor9g xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj xeuugli x1iyjqo2">
                                                                  Link Clicks
                                                                </div>
                                                                <div
                                                                  class="x3nfvp2 x120ccyz x1heor9g x2lah0s x1c4vz4f x1gryazu"
                                                                  role="presentation"
                                                                >
                                                                  <div
                                                                    class="xtwfq29 style-VS6F4"
                                                                    id="style-VS6F4"
                                                                  ></div>
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
                                          <div
                                            class="x1iyjqo2 xs83m0k xdl72j9 x3igimt xedcshv x1t2pt76 xyamay9 x1l90r2v x1swvt13 x1pi30zi"
                                            data-auto-logging-component-type="GeoSection"
                                            data-auto-logging-dependent-region=""
                                          >
                                            <div class="x1cy8zhl x78zum5 x1q0g3np x1qughib xozqiw3 x2lwn1j xeuugli x1iyjqo2 xs83m0k x19lwn94">
                                              <div class="x78zum5 xdt5ytf xozqiw3 x2lwn1j xeuugli x1iyjqo2 xs83m0k xavht8x">
                                                <div>
                                                  <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94">
                                                    <div class="xeuugli">
                                                      <div class="x1cy8zhl x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x65s2av">
                                                        <div
                                                          class="xmi5d70 x1fvot60 xxio538 xbsr9hj xq9mrsl x1h4wwuj x117nqv4 xeuugli x104kibb x6ikm8r x10wlt62 x1ua5tub style-CahBS"
                                                          id="style-CahBS"
                                                        >
                                                          Link click
                                                        </div>
                                                        <div class="x1gslohp x1ypdohk x78zum5 xhtitgo">
                                                          <div
                                                            class="x3nfvp2 x120ccyz x4s1yf2"
                                                            role="presentation"
                                                          >
                                                            <div
                                                              class="xtwfq29 style-DUing"
                                                              id="style-DUing"
                                                            ></div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div class="x78zum5 x1q0g3np x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1pha0wt xozqiw3">
                                                    <div class="x1xqt7ti x10d9sdx x1iikomf xrohxju xbsr9hj xq9mrsl x1yc453h x1h4wwuj xeuugli x2lah0s">
                                                      2K
                                                    </div>
                                                  </div>
                                                </div>
                                                <a
                                                  class="xt0psk2 x1hl2dhg xt0b8zv xmi5d70 x1fvot60 xxio538 x1qsmy5i xq9mrsl x1yc453h x1h4wwuj x1fcty0u"
                                                  href="#"
                                                >
                                                  View more
                                                </a>
                                              </div>
                                              <div class="x78zum5 xdt5ytf xozqiw3 x2lwn1j xeuugli x1iyjqo2 xs83m0k xavht8x">
                                                <div>
                                                  <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94">
                                                    <div class="xeuugli">
                                                      <div class="x1cy8zhl x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x65s2av">
                                                        <div
                                                          class="xmi5d70 x1fvot60 xxio538 xbsr9hj xq9mrsl x1h4wwuj x117nqv4 xeuugli x104kibb x6ikm8r x10wlt62 x1ua5tub style-yrOH3"
                                                          id="style-yrOH3"
                                                        >
                                                          Per link click
                                                        </div>
                                                        <div class="x1gslohp x1ypdohk x78zum5 xhtitgo">
                                                          <div
                                                            class="x3nfvp2 x120ccyz x4s1yf2"
                                                            role="presentation"
                                                          >
                                                            <div
                                                              class="xtwfq29 style-l6n5e"
                                                              id="style-l6n5e"
                                                            ></div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div class="x78zum5 x1q0g3np x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1pha0wt xozqiw3">
                                                    <div class="x1xqt7ti x10d9sdx x1iikomf xrohxju xbsr9hj xq9mrsl x1yc453h x1h4wwuj xeuugli x2lah0s">
                                                      Rs63.80
                                                    </div>
                                                  </div>
                                                </div>
                                                <a
                                                  class="xt0psk2 x1hl2dhg xt0b8zv xmi5d70 x1fvot60 xxio538 x1qsmy5i xq9mrsl x1yc453h x1h4wwuj x1fcty0u"
                                                  href="#"
                                                >
                                                  View more
                                                </a>
                                              </div>
                                              <div class="x78zum5 xdt5ytf xozqiw3 x2lwn1j xeuugli x1iyjqo2 xs83m0k xavht8x">
                                                <div>
                                                  <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94">
                                                    <div class="xeuugli">
                                                      <div class="x1cy8zhl x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x65s2av">
                                                        <div
                                                          class="xmi5d70 x1fvot60 xxio538 xbsr9hj xq9mrsl x1h4wwuj x117nqv4 xeuugli x104kibb x6ikm8r x10wlt62 x1ua5tub style-NvPv1"
                                                          id="style-NvPv1"
                                                        >
                                                          Amount spent
                                                        </div>
                                                        <div class="x1gslohp x1ypdohk x78zum5 xhtitgo">
                                                          <div
                                                            class="x3nfvp2 x120ccyz x4s1yf2"
                                                            role="presentation"
                                                          >
                                                            <div
                                                              class="xtwfq29 style-yiVL1"
                                                              id="style-yiVL1"
                                                            ></div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div class="x78zum5 x1q0g3np x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1pha0wt xozqiw3">
                                                    <div class="x1xqt7ti x10d9sdx x1iikomf xrohxju xbsr9hj xq9mrsl x1yc453h x1h4wwuj xeuugli x2lah0s">
                                                      Rs125.9K
                                                    </div>
                                                  </div>
                                                </div>
                                                <a
                                                  class="xt0psk2 x1hl2dhg xt0b8zv xmi5d70 x1fvot60 xxio538 x1qsmy5i xq9mrsl x1yc453h x1h4wwuj x1fcty0u"
                                                  href="#"
                                                >
                                                  View more
                                                </a>
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
                          <div>
                            <div class="x1yztbdb x1n2onr6 xh8yej3">
                              <span
                                data-surface-wrapper="1"
                                data-non-int-surface="/am/hero_root:AdsPEMainAppWithLeftNavigation.react/hero_root:SYDPageContainer.react/syd/hero_root:SYDCampaignTrendsListContainer.react"
                                data-auto-logging-id="f2faf475c2a4ab4"
                                id="style-cjtAF"
                                class="style-cjtAF"
                              >
                                <div class="">
                                  <div
                                    aria-labelledby="js_94"
                                    class="x1gzqxud x1lcm9me x1yr5g0i xrt01vj x10y3i5r xhgxa4x xy5ysw6 x1qkj6lk xn3walq xnvurfn xv1ta3e x1opv7go x1dtnpoi xibdhds xtnng9g xhvrwov x13k1m86 xwx4but x1cpjm7i xszcg87 x1hmns74 xkk1bqk x14d4353 xsxiz9q x1rmj1tg xchklzq x9f619 xc8icb0 x1n2onr6 x1pvq41x xhhp2wi x14q35kh x1wa3ocq x1n7iyjn x1s928wv x1wsn0xg x1j6awrg x162n7g1 x1m1drc7 x4eaejv xi4xitw x5yr21d xh8yej3"
                                    data-auto-logging-component-type="GeoCard"
                                  >
                                    <div class="x78zum5 xdt5ytf x5yr21d xedcshv x1t2pt76 xh8yej3">
                                      <div class="x9f619 x78zum5 x2lah0s xh8yej3 xyamay9 x1l90r2v x1swvt13 x1pi30zi">
                                        <div class="x1iyjqo2 xeuugli">
                                          <div class="x6s0dn4 x78zum5 x1qughib x2lwn1j xeuugli">
                                            <div class="x6s0dn4 x78zum5 x2lwn1j xeuugli">
                                              <div class="x6s0dn4 x78zum5 x2lwn1j xeuugli">
                                                <div
                                                  aria-level="2"
                                                  class="x1xqt7ti xm46was x1xlr1w8 x1jrz1v4 xbsr9hj x1yc453h xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj xeuugli"
                                                  role="heading"
                                                >
                                                  Campaign trends
                                                </div>
                                                <span class="xmi5d70 x1fvot60 xo1l8bm xxio538 x1541jtf xq9mrsl x1h4wwuj xeuugli x1i64zmx">
                                                  Last 7 days
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
                                                              class="xtwfq29 style-oBs2m"
                                                              id="style-oBs2m"
                                                            ></div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </span>
                                              </div>
                                            </div>
                                            <div class="xuk3077 x78zum5 x2lwn1j xeuugli">
                                              <div class="x78zum5 xdt5ytf xdl72j9 x1iyjqo2 xeuugli x1n2onr6 xh8yej3">
                                                <div
                                                  class="x1qvwoe0 xjm9jq1 x1y332i5 xcwd3tp x1jyxor1 x39eecv x6ikm8r x10wlt62 x10l6tqk xuxw1ft x1i1rx1s style-v8OWR"
                                                  data-sscoverage-ignore="true"
                                                  id="style-v8OWR"
                                                >
                                                  <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94">
                                                    <div class="x1iyjqo2">
                                                      <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 xs83m0k x65s2av">
                                                        <label
                                                          id="js_97"
                                                          for="js_96"
                                                        >
                                                          <span class="xmi5d70 x1fvot60 xxio538 xbsr9hj xq9mrsl x1mzt3pk x1vvkbs x13faqbe x117nqv4 xeuugli">
                                                            <span class="xmi5d70 x1fvot60 xxio538 xbsr9hj xq9mrsl x1mzt3pk x1vvkbs x13faqbe x117nqv4 xeuugli">
                                                              Metric selector
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
                                                      <div class="xh8yej3">
                                                        <div
                                                          aria-busy="false"
                                                          aria-expanded="false"
                                                          aria-haspopup="listbox"
                                                          aria-invalid="false"
                                                          aria-labelledby="js_97 js_9a"
                                                          aria-owns="js_95"
                                                          class="x1i10hfl x1qjc9v5 xjbqb8w xjqpnuy xa49m3k xqeqjp1 x2hbi6w x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x78zum5 xdl72j9 xdt5ytf x2lah0s xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli xexx8yu x4uap5 x18d9i69 xkhd6sd x1n2onr6 x16tdsg8 x1hl2dhg xggy1nq x1ja2u2z x1ypdohk xh8yej3 x1t137rt"
                                                          id="js_96"
                                                          role="combobox"
                                                          tabindex="0"
                                                        >
                                                          <div class="x1n2onr6 xh8yej3">
                                                            <div class="x6s0dn4 x78zum5 x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x178xt8z xm81vs4 xso031l xy80clv xwebqov xvyu6v8 xrsgblv x10lij0i x1lcm9me x1yr5g0i xrt01vj x10y3i5r x1gzqxud xbsr9hj xm7lytj x1ykpatu xlu9dua x1w2lkzu">
                                                              <div class=""></div>
                                                              <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94">
                                                                <div class="x6s0dn4 x78zum5 x1q0g3np x1a02dak x2lwn1j xeuugli x1iyjqo2 x19lwn94">
                                                                  <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94">
                                                                    <div class="xjbqb8w x972fbf xcfux6l x1qhh985 xm0m39n xdj266r x11i5rnm xat24cr x1mh8g0r x1t137rt xexx8yu x4uap5 x18d9i69 xkhd6sd xlyipyv xr4vacz x1gnnqk1 xbsr9hj x1urst0s x1glnyev x1ad04t7 x1ix68h3 x19gujb8 xni1clt x1tutvks xfrpkgu x15h3p50 x1gf4pb6 xh7izdl x10emqs4 x2yyzbt xu8dvwe xmi5d70 x1fvot60 xo1l8bm xxio538 x1iyjqo2 x6ikm8r x10wlt62">
                                                                      <div
                                                                        class="xmi5d70 x1fvot60 xo1l8bm xxio538 xbsr9hj xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj xeuugli"
                                                                        id="js_9a"
                                                                      >
                                                                        Results
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
                                                                      class="xtwfq29 style-A71pj"
                                                                      id="style-A71pj"
                                                                    ></div>
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
                                              <div
                                                class="x3nfvp2 x193iq5w xxymvpz x1i64zmx"
                                                role="none"
                                              >
                                                <div
                                                  aria-busy="false"
                                                  class="x1i10hfl xjqpnuy xa49m3k xqeqjp1 x2hbi6w x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli x16tdsg8 xggy1nq x1ja2u2z x1t137rt x6s0dn4 x1ejq31n xd10rxx x1sy0etr x17r0tee x3nfvp2 xdl72j9 x1q0g3np x2lah0s x193iq5w x1n2onr6 x1hl2dhg x87ps6o xxymvpz xlh3980 xvmahel x1lku1pv x1g40iwv x1lcm9me x1yr5g0i xrt01vj x10y3i5r xo1l8bm x140t73q xqkc6xh x1y1aw1k xwib8y2 x1pi30zi x1ye3gou"
                                                  role="button"
                                                  tabindex="0"
                                                >
                                                  <span class="xmi5d70 x1fvot60 xxio538 x1heor9g xq9mrsl x1h4wwuj x1pd3egz xeuugli xh8yej3">
                                                    <div class="x78zum5">
                                                      <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1hc1fzr x13dflua x6o7n8i xxziih7 x12w9bfk xl56j7k xh8yej3">
                                                        <div
                                                          class="x3nfvp2 x120ccyz x1heor9g x2lah0s x1c4vz4f"
                                                          role="presentation"
                                                        >
                                                          <div
                                                            class="xtwfq29 style-1ZOja"
                                                            id="style-1ZOja"
                                                          ></div>
                                                        </div>
                                                        <div class="x1xqt7ti x1fvot60 xk50ysn xxio538 x1heor9g xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj xeuugli">
                                                          Create
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
                                      <div class="x9f619 x78zum5 x1iyjqo2 x5yr21d x2lwn1j x1n2onr6 xh8yej3">
                                        <div class="xw2csxc x1odjw0f xh8yej3 x18d9i69">
                                          <div class="xjm9jq1 xg01cxk x47corl xh8yej3 x1jyxor1"></div>
                                          <div
                                            class="x1iyjqo2 xs83m0k xdl72j9 x3igimt xedcshv x1t2pt76 x1l90r2v x1swvt13 x1pi30zi xexx8yu"
                                            data-auto-logging-component-type="GeoSection"
                                            data-auto-logging-dependent-region=""
                                          >
                                            <div class="x10wlt62">
                                              <div class="x1iorvi4">
                                                <div class="x1lq5wgf xgqcy7u x30kzoy x9jhf4c x1y1aw1k x1sxyh0 xwib8y2 xurb0ha xdj266r x11i5rnm xat24cr x1mh8g0r">
                                                  <div
                                                    aria-label="Go from campaign trends to charts or edit draft"
                                                    class="x1i10hfl x1qjc9v5 xjqpnuy xa49m3k xqeqjp1 x2hbi6w x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xdl72j9 xe8uvvx x2lwn1j xeuugli xexx8yu x4uap5 x18d9i69 xkhd6sd x16tdsg8 xggy1nq x1ja2u2z x1n2onr6 x1q0g3np xxymvpz x1ejq31n xd10rxx x1sy0etr x17r0tee x87ps6o x1t137rt xlh3980 xvmahel x1hl2dhg x1lku1pv x78zum5 x1iyjqo2 xs83m0k x1lcm9me x1yr5g0i xrt01vj x10y3i5r x1xlr1w8 x140t73q x1v911su xdj266r x11i5rnm xat24cr x1mh8g0r"
                                                    role="button"
                                                    tabindex="0"
                                                  >
                                                    <span class="xmi5d70 x1fvot60 xxio538 x1heor9g xq9mrsl x1h4wwuj x1pd3egz xeuugli xh8yej3">
                                                      <div class="x6s0dn4 x78zum5 x1qughib x2lwn1j xeuugli">
                                                        <div class="x78zum5 x2lwn1j xeuugli x2lah0s">
                                                          <div class="x1lliihq x1n2onr6 x2lah0s">
                                                            <div
                                                              class="x3oybdh style-mQGDZ"
                                                              id="style-mQGDZ"
                                                            >
                                                              <div class="x1lliihq x1n2onr6 x2lah0s x1peatla x1fu8urw x1lcm9me x1yr5g0i xrt01vj x10y3i5r">
                                                                <div class="x10l6tqk x6ikm8r x10wlt62 x13vifvy x17qophe xh8yej3 x5yr21d x1o1ewxj x3x9cwd x1e5q0jg x13rtm0m xtd80it x1jgp7su x1q1rkhy x18tuezv x1xuqjiz xhl3afg x10cdfl8">
                                                                  <img
                                                                    alt=""
                                                                    class="img"
                                                                    src="https://external.flhe32-1.fna.fbcdn.net/emg1/v/t13/12842223933120000460?url=https%3A%2F%2Fwww.facebook.com%2Fads%2Fimage%2F%3Fd%3DAQIxmmCN7gFmAQiIuJK6DOGqtN0yocz4nkvOd6FUjhqIKszhejP11Gf6AGIKiwe1kfsl1qPO5FeToIVkjlWqNhzOprp2hQms3eMCmReaYX0Rh-e9prAOIW8Xlu1oEb0JhFsEZNwK9-QYrg38Q9R6Rh3J&fb_obo=1&utld=facebook.com&stp=c0.5000x0.5000f_dst-emg0_p46x46_q75&_nc_eui2=AeFY0tusNCGyyxNGGjJ-YyTPDsDqcOBpnE4OwOpw4GmcTsGvq_dD_f7-rOuYx7Xvh-yJlGctR3w-NgpLQXg2gyMq&ccb=13-1&oh=06_Q399ge1ESrnbLD7WiGOD35DL_fpmTFC5gGpklknWCsdo8tM&oe=6719AD57&_nc_sid=58080a"
                                                                  />
                                                                </div>
                                                              </div>
                                                            </div>
                                                          </div>
                                                        </div>
                                                        <div class="x78zum5 xdt5ytf x2lwn1j x1iyjqo2 x1d52u69 xktsk01 xeuugli">
                                                          <div
                                                            aria-level="4"
                                                            class="x1xqt7ti xsuwoey x1xlr1w8 x63nzvj xbsr9hj x1yc453h xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj xeuugli"
                                                            role="heading"
                                                          >
                                                            [10/11/2024]
                                                            Promoting
                                                            https://flarequick.com/cf/r/6708140b624224001299a501?ad_id=&amp;adset_id&amp;campaign_id...
                                                          </div>
                                                          <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94">
                                                            <div class="x1gslohp x12nagc">
                                                              <span class="x3nfvp2 xmix8c7 x1n2onr6">
                                                                <span class="x6s0dn4 x9f619 x78zum5 xmix8c7 xl56j7k x16xo4sp x1t137rt x1j85h84 xsyo7zv x16hj40l x4p5aij x1n2onr6 xzolkzo x12go9s9 x1rnf11y xprq8jg xom064s xgjf8nm x1wpexiw xab44vc xzyuu4h xmi5d70 xw23nyj x63nzvj xmbzoqv xuxw1ft x2b8uid x117nqv4">
                                                                  <div class="xmi5d70 xw23nyj x63nzvj x1heor9g xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj x1pd3egz xeuugli">
                                                                    Active
                                                                  </div>
                                                                </span>
                                                                <div
                                                                  aria-atomic="true"
                                                                  aria-live="polite"
                                                                  role="status"
                                                                  class="x1qvwoe0 xjm9jq1 x1y332i5 xcwd3tp x1jyxor1 x39eecv x6ikm8r x10wlt62 x10l6tqk xuxw1ft x1i1rx1s"
                                                                  data-sscoverage-ignore="true"
                                                                >
                                                                  Active
                                                                </div>
                                                              </span>
                                                            </div>
                                                          </div>
                                                        </div>
                                                        <div class="x78zum5 x2lwn1j x2lah0s x1d52u69 xktsk01 xeuugli">
                                                          <div class="xq1dxzn">
                                                            <div class="x6s0dn4 x78zum5 x2lwn1j xeuugli">
                                                              <span class="xmi5d70 x1fvot60 xo1l8bm xxio538 xbsr9hj xq9mrsl x1h4wwuj xeuugli">
                                                                Link Clicks
                                                              </span>
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
                                                                          class="xtwfq29 style-aIAT6"
                                                                          id="style-aIAT6"
                                                                        ></div>
                                                                      </div>
                                                                    </div>
                                                                  </div>
                                                                </div>
                                                              </div>
                                                            </div>
                                                            <div class="x1pha0wt x78zum5 x2lwn1j xeuugli">
                                                              <div>
                                                                <span class="x1xqt7ti x10d9sdx x1iikomf xrohxju xbsr9hj xq9mrsl x1h4wwuj xeuugli">
                                                                  0
                                                                </span>
                                                              </div>
                                                              <div class="x78zum5 x2lwn1j xeuugli xqcrz7y x12mruv9 xbsr9hj"></div>
                                                            </div>
                                                          </div>
                                                        </div>
                                                        <div class="x78zum5 x2lwn1j x2lah0s x1d52u69 xktsk01 xeuugli">
                                                          <div class="xq1dxzn">
                                                            <div class="xmi5d70 xw23nyj xo1l8bm x63nzvj x1541jtf xq9mrsl x2b8uid x1h4wwuj xeuugli">
                                                              This campaign has
                                                              no results for the
                                                              last 7 days.
                                                            </div>
                                                          </div>
                                                        </div>
                                                        <div class="x78zum5 x2lwn1j xeuugli x2lah0s">
                                                          <div
                                                            class="x3oybdh xuxw1ft x1iknuni xw9jwym x1e2iszw xg0tal0 x1lliihq x1lcm9me x1yr5g0i xrt01vj x10y3i5r"
                                                            role="group"
                                                          >
                                                            <div
                                                              class="x3nfvp2 x193iq5w xxymvpz style-QF21z"
                                                              role="none"
                                                              id="style-QF21z"
                                                            >
                                                              <div
                                                                aria-busy="false"
                                                                class="x1i10hfl xjqpnuy xa49m3k xqeqjp1 x2hbi6w x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli x16tdsg8 xggy1nq x1ja2u2z x1t137rt x6s0dn4 x1ejq31n xd10rxx x1sy0etr x17r0tee x3nfvp2 xdl72j9 x1q0g3np x2lah0s x193iq5w x1n2onr6 x1hl2dhg x87ps6o xxymvpz xlh3980 xvmahel x1lku1pv x1g40iwv x1lcm9me x1yr5g0i xrt01vj x10y3i5r xo1l8bm xbsr9hj x1v911su x1y1aw1k xwib8y2 x1ye3gou xn6708d  style-qpsXC"
                                                                role="button"
                                                                tabindex="0"
                                                                data-tracked="true"
                                                                data-clickable="1"
                                                                id="style-qpsXC"
                                                              >
                                                                <span class="xmi5d70 x1fvot60 xxio538 x1heor9g xq9mrsl x1h4wwuj x1pd3egz xeuugli xh8yej3">
                                                                  <div class="x78zum5">
                                                                    <div
                                                                      class="x1qvwoe0 xjm9jq1 x1y332i5 xcwd3tp x1jyxor1 x39eecv x6ikm8r x10wlt62 x10l6tqk xuxw1ft x1i1rx1s"
                                                                      data-sscoverage-ignore="true"
                                                                    >
                                                                      View
                                                                      Charts
                                                                    </div>
                                                                    <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1hc1fzr x13dflua x6o7n8i xxziih7 x12w9bfk xl56j7k xh8yej3">
                                                                      <div
                                                                        class="x3nfvp2 x120ccyz x1heor9g x2lah0s x1c4vz4f"
                                                                        role="presentation"
                                                                      >
                                                                        <div
                                                                          class="xtwfq29 style-G8lV6"
                                                                          id="style-G8lV6"
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
                                                    </span>
                                                  </div>
                                                </div>
                                                <div class="x1lq5wgf xgqcy7u x30kzoy x9jhf4c x1y1aw1k x1sxyh0 xwib8y2 xurb0ha xdj266r x11i5rnm xat24cr x1mh8g0r">
                                                  <div
                                                    aria-label="Go from campaign trends to charts or edit draft"
                                                    class="x1i10hfl x1qjc9v5 xjqpnuy xa49m3k xqeqjp1 x2hbi6w x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xdl72j9 xe8uvvx x2lwn1j xeuugli xexx8yu x4uap5 x18d9i69 xkhd6sd x16tdsg8 xggy1nq x1ja2u2z x1n2onr6 x1q0g3np xxymvpz x1ejq31n xd10rxx x1sy0etr x17r0tee x87ps6o x1t137rt xlh3980 xvmahel x1hl2dhg x1lku1pv x78zum5 x1iyjqo2 xs83m0k x1lcm9me x1yr5g0i xrt01vj x10y3i5r x1xlr1w8 x140t73q x1v911su xdj266r x11i5rnm xat24cr x1mh8g0r"
                                                    role="button"
                                                    tabindex="0"
                                                  >
                                                    <span class="xmi5d70 x1fvot60 xxio538 x1heor9g xq9mrsl x1h4wwuj x1pd3egz xeuugli xh8yej3">
                                                      <div class="x6s0dn4 x78zum5 x1qughib x2lwn1j xeuugli">
                                                        <div class="x78zum5 x2lwn1j xeuugli x2lah0s">
                                                          <div class="x1lliihq x1n2onr6 x2lah0s">
                                                            <div
                                                              class="x3oybdh style-6nNXd"
                                                              id="style-6nNXd"
                                                            >
                                                              <div class="x1lliihq x1n2onr6 x2lah0s x1peatla x1fu8urw x1lcm9me x1yr5g0i xrt01vj x10y3i5r">
                                                                <div class="x10l6tqk x6ikm8r x10wlt62 x13vifvy x17qophe xh8yej3 x5yr21d x1o1ewxj x3x9cwd x1e5q0jg x13rtm0m xtd80it x1jgp7su x1q1rkhy x18tuezv x1xuqjiz xhl3afg x10cdfl8">
                                                                  <img
                                                                    alt=""
                                                                    class="img"
                                                                    src="https://external.flhe32-1.fna.fbcdn.net/emg1/v/t13/7906988238205669592?url=https%3A%2F%2Fwww.facebook.com%2Fads%2Fimage%2F%3Fd%3DAQJuJI5Y_6R05xcD273C7uAHT1Vx6xBxuWc09_rcPn0EfsNNtkMyMjBfZyuPTDjNEhAx9CeXeE-igKi-YooUcCRQThaJw-SIbVSRNl_xX58NgVrQGfCkQ-Kwy0Fs07z8xPSe6iEmbgTkQy6b2UuyJLlD&fb_obo=1&utld=facebook.com&stp=c0.5000x0.5000f_dst-emg0_p46x46_q75&_nc_eui2=AeHNhxJAU4p90fPrBtdzF2bmxqP0Lva_-l_Go_Qu9r_6Xw8oh65QnpdJmIFav9lIjKdRpT22cRRvSY06ye3nBuFK&ccb=13-1&oh=06_Q399dVpi9fDxkMqIB0ePjgQc3yT6VOU4ApuhkXFjT1iRHpg&oe=6719B021&_nc_sid=58080a"
                                                                  />
                                                                </div>
                                                              </div>
                                                            </div>
                                                          </div>
                                                        </div>
                                                        <div class="x78zum5 xdt5ytf x2lwn1j x1iyjqo2 x1d52u69 xktsk01 xeuugli">
                                                          <div
                                                            aria-level="4"
                                                            class="x1xqt7ti xsuwoey x1xlr1w8 x63nzvj xbsr9hj x1yc453h xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj xeuugli"
                                                            role="heading"
                                                          >
                                                            [10/11/2024]
                                                            Promoting
                                                            https://flarequick.com/cf/r/67081320d142df0012bee2c1?ad_id=&amp;adset_id=&amp;campaign_id...
                                                          </div>
                                                          <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94">
                                                            <div class="x1gslohp x12nagc">
                                                              <span class="x3nfvp2 xmix8c7 x1n2onr6">
                                                                <span class="x6s0dn4 x9f619 x78zum5 xmix8c7 xl56j7k x16xo4sp x1t137rt x1j85h84 xsyo7zv x16hj40l x4p5aij x1n2onr6 xzolkzo x12go9s9 x1rnf11y xprq8jg xom064s xgjf8nm x1wpexiw xab44vc xzyuu4h xmi5d70 xw23nyj x63nzvj xmbzoqv xuxw1ft x2b8uid x117nqv4">
                                                                  <div class="xmi5d70 xw23nyj x63nzvj x1heor9g xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj x1pd3egz xeuugli">
                                                                    Active
                                                                  </div>
                                                                </span>
                                                                <div
                                                                  aria-atomic="true"
                                                                  aria-live="polite"
                                                                  role="status"
                                                                  class="x1qvwoe0 xjm9jq1 x1y332i5 xcwd3tp x1jyxor1 x39eecv x6ikm8r x10wlt62 x10l6tqk xuxw1ft x1i1rx1s"
                                                                  data-sscoverage-ignore="true"
                                                                >
                                                                  Active
                                                                </div>
                                                              </span>
                                                            </div>
                                                          </div>
                                                        </div>
                                                        <div class="x78zum5 x2lwn1j x2lah0s x1d52u69 xktsk01 xeuugli">
                                                          <div class="xq1dxzn">
                                                            <div class="x6s0dn4 x78zum5 x2lwn1j xeuugli">
                                                              <span class="xmi5d70 x1fvot60 xo1l8bm xxio538 xbsr9hj xq9mrsl x1h4wwuj xeuugli">
                                                                Link Clicks
                                                              </span>
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
                                                                          class="xtwfq29 style-56LPY"
                                                                          id="style-56LPY"
                                                                        ></div>
                                                                      </div>
                                                                    </div>
                                                                  </div>
                                                                </div>
                                                              </div>
                                                            </div>
                                                            <div class="x1pha0wt x78zum5 x2lwn1j xeuugli">
                                                              <div>
                                                                <span class="x1xqt7ti x10d9sdx x1iikomf xrohxju xbsr9hj xq9mrsl x1h4wwuj xeuugli">
                                                                  9
                                                                </span>
                                                              </div>
                                                              <div class="x78zum5 x2lwn1j xeuugli xqcrz7y x12mruv9 xbsr9hj"></div>
                                                            </div>
                                                          </div>
                                                        </div>
                                                        <div class="x78zum5 x2lwn1j x2lah0s x1d52u69 xktsk01 xeuugli">
                                                          <div class="xq1dxzn">
                                                            <div>
                                                              <div class="x78zum5 xdt5ytf xozqiw3 x2lwn1j xeuugli x1iyjqo2 xavht8x xq1dxzn xsdox4t">
                                                                <div
                                                                  class="x1qvwoe0 xjm9jq1 x1y332i5 xcwd3tp x1jyxor1 x39eecv x6ikm8r x10wlt62 x10l6tqk xuxw1ft x1i1rx1s"
                                                                  data-sscoverage-ignore="true"
                                                                >
                                                                  <div class="xeuugli">
                                                                    <div
                                                                      aria-level="2"
                                                                      class="x1xqt7ti xm46was x1xlr1w8 x1jrz1v4 xbsr9hj xq9mrsl x1yc453h x1h4wwuj xeuugli"
                                                                      id="js_bl"
                                                                      role="heading"
                                                                    >
                                                                      Results
                                                                    </div>
                                                                  </div>
                                                                </div>
                                                                <div
                                                                  class="x78zum5 x2lwn1j xeuugli x1iyjqo2 x1n2onr6 style-DSYQZ"
                                                                  id="style-DSYQZ"
                                                                >
                                                                  <svg
                                                                    aria-describedby="js_bk"
                                                                    aria-labelledby="js_bl"
                                                                    class="x5yr21d x1plvlek xryxfnj x10l6tqk x17qophe x13vifvy xh8yej3"
                                                                    height="40"
                                                                    role="img"
                                                                    width="160"
                                                                  >
                                                                    <g class="">
                                                                      <rect
                                                                        fill="transparent"
                                                                        height="40"
                                                                        width="22.34285714285714"
                                                                        x="-0.6"
                                                                        y="0"
                                                                      ></rect>
                                                                      <path
                                                                        class="x4mcvgm"
                                                                        d="M 0,40 v 1 q 0, -2 2, -2 h 17.142857142857142 q 2, 0 2, 2 v -1 z"
                                                                        fill="rgba(241,244,247,1)"
                                                                      ></path>
                                                                    </g>
                                                                    <g class="">
                                                                      <rect
                                                                        fill="transparent"
                                                                        height="40"
                                                                        width="22.34285714285714"
                                                                        x="22.54285714285714"
                                                                        y="0"
                                                                      ></rect>
                                                                      <path
                                                                        class="x4mcvgm"
                                                                        d="M 23.142857142857142,40 v 1 q 0, -2 2, -2 h 17.142857142857142 q 2, 0 2, 2 v -1 z"
                                                                        fill="rgba(241,244,247,1)"
                                                                      ></path>
                                                                    </g>
                                                                    <g class="">
                                                                      <rect
                                                                        fill="transparent"
                                                                        height="40"
                                                                        width="22.34285714285714"
                                                                        x="45.68571428571428"
                                                                        y="0"
                                                                      ></rect>
                                                                      <path
                                                                        class="x4mcvgm"
                                                                        d="M 46.285714285714285,40 v 1 q 0, -2 2, -2 h 17.142857142857142 q 2, 0 2, 2 v -1 z"
                                                                        fill="rgba(241,244,247,1)"
                                                                      ></path>
                                                                    </g>
                                                                    <g class="">
                                                                      <rect
                                                                        fill="transparent"
                                                                        height="40"
                                                                        width="22.34285714285714"
                                                                        x="68.82857142857144"
                                                                        y="0"
                                                                      ></rect>
                                                                      <path
                                                                        class="x4mcvgm"
                                                                        d="M 69.42857142857143,40 v 1 q 0, -2 2, -2 h 17.142857142857142 q 2, 0 2, 2 v -1 z"
                                                                        fill="rgba(241,244,247,1)"
                                                                      ></path>
                                                                    </g>
                                                                    <g class="">
                                                                      <rect
                                                                        fill="transparent"
                                                                        height="40"
                                                                        width="22.34285714285714"
                                                                        x="91.97142857142858"
                                                                        y="0"
                                                                      ></rect>
                                                                      <path
                                                                        class="x4mcvgm"
                                                                        d="M 92.57142857142857,40 v -14 q 0, -2 2, -2 h 17.142857142857142 q 2, 0 2, 2 v 14 z"
                                                                        fill="rgba(241,244,247,1)"
                                                                      ></path>
                                                                    </g>
                                                                    <g class="">
                                                                      <rect
                                                                        fill="transparent"
                                                                        height="40"
                                                                        width="22.34285714285714"
                                                                        x="115.11428571428571"
                                                                        y="0"
                                                                      ></rect>
                                                                      <path
                                                                        class="x4mcvgm"
                                                                        d="M 115.71428571428571,40 v -14 q 0, -2 2, -2 h 17.142857142857142 q 2, 0 2, 2 v 14 z"
                                                                        fill="rgba(241,244,247,1)"
                                                                      ></path>
                                                                    </g>
                                                                    <g class="">
                                                                      <rect
                                                                        fill="transparent"
                                                                        height="40"
                                                                        width="22.34285714285714"
                                                                        x="138.25714285714287"
                                                                        y="0"
                                                                      ></rect>
                                                                      <path
                                                                        class="x4mcvgm"
                                                                        d="M 138.85714285714286,40 v -38 q 0, -2 2, -2 h 17.142857142857142 q 2, 0 2, 2 v 38 z"
                                                                        fill="rgba(241,244,247,1)"
                                                                      ></path>
                                                                    </g>
                                                                  </svg>
                                                                  <table
                                                                    class="x1lliihq x1mwwwfo x1gukg7c x1qvwoe0 xjm9jq1 x10l6tqk x140o2bo x1i1rx1s x6ikm8r x10wlt62"
                                                                    id="js_bk"
                                                                  >
                                                                    <tbody>
                                                                      <tr>
                                                                        <th></th>
                                                                        <th>
                                                                          8 Oct
                                                                        </th>
                                                                        <th>
                                                                          9 Oct
                                                                        </th>
                                                                        <th>
                                                                          10 Oct
                                                                        </th>
                                                                        <th>
                                                                          Link
                                                                          Clicks
                                                                          on 11
                                                                          Oct
                                                                        </th>
                                                                        <th>
                                                                          Link
                                                                          Clicks
                                                                          on 12
                                                                          Oct
                                                                        </th>
                                                                        <th>
                                                                          Link
                                                                          Clicks
                                                                          on 13
                                                                          Oct
                                                                        </th>
                                                                        <th>
                                                                          Link
                                                                          Clicks
                                                                          on 14
                                                                          Oct
                                                                        </th>
                                                                      </tr>
                                                                      <tr>
                                                                        <td>
                                                                          Results
                                                                        </td>
                                                                        <td>
                                                                          0
                                                                        </td>
                                                                        <td>
                                                                          0
                                                                        </td>
                                                                        <td>
                                                                          0
                                                                        </td>
                                                                        <td>
                                                                          0
                                                                        </td>
                                                                        <td>
                                                                          2
                                                                        </td>
                                                                        <td>
                                                                          2
                                                                        </td>
                                                                        <td>
                                                                          5
                                                                        </td>
                                                                      </tr>
                                                                    </tbody>
                                                                  </table>
                                                                </div>
                                                              </div>
                                                            </div>
                                                          </div>
                                                        </div>
                                                        <div class="x78zum5 x2lwn1j xeuugli x2lah0s">
                                                          <div
                                                            class="x3oybdh xuxw1ft x1iknuni xw9jwym x1e2iszw xg0tal0 x1lliihq x1lcm9me x1yr5g0i xrt01vj x10y3i5r"
                                                            role="group"
                                                          >
                                                            <div
                                                              class="x3nfvp2 x193iq5w xxymvpz style-MPkSD"
                                                              role="none"
                                                              id="style-MPkSD"
                                                            >
                                                              <div
                                                                aria-busy="false"
                                                                class="x1i10hfl xjqpnuy xa49m3k xqeqjp1 x2hbi6w x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli x16tdsg8 xggy1nq x1ja2u2z x1t137rt x6s0dn4 x1ejq31n xd10rxx x1sy0etr x17r0tee x3nfvp2 xdl72j9 x1q0g3np x2lah0s x193iq5w x1n2onr6 x1hl2dhg x87ps6o xxymvpz xlh3980 xvmahel x1lku1pv x1g40iwv x1lcm9me x1yr5g0i xrt01vj x10y3i5r xo1l8bm xbsr9hj x1v911su x1y1aw1k xwib8y2 x1ye3gou xn6708d  style-d9lXR"
                                                                role="button"
                                                                tabindex="0"
                                                                data-tracked="true"
                                                                data-clickable="1"
                                                                id="style-d9lXR"
                                                              >
                                                                <span class="xmi5d70 x1fvot60 xxio538 x1heor9g xq9mrsl x1h4wwuj x1pd3egz xeuugli xh8yej3">
                                                                  <div class="x78zum5">
                                                                    <div
                                                                      class="x1qvwoe0 xjm9jq1 x1y332i5 xcwd3tp x1jyxor1 x39eecv x6ikm8r x10wlt62 x10l6tqk xuxw1ft x1i1rx1s"
                                                                      data-sscoverage-ignore="true"
                                                                    >
                                                                      View
                                                                      Charts
                                                                    </div>
                                                                    <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1hc1fzr x13dflua x6o7n8i xxziih7 x12w9bfk xl56j7k xh8yej3">
                                                                      <div
                                                                        class="x3nfvp2 x120ccyz x1heor9g x2lah0s x1c4vz4f"
                                                                        role="presentation"
                                                                      >
                                                                        <div
                                                                          class="xtwfq29 style-UnCeo"
                                                                          id="style-UnCeo"
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
                                                    </span>
                                                  </div>
                                                </div>
                                                <div class="x1lq5wgf xgqcy7u x30kzoy x9jhf4c x1y1aw1k x1sxyh0 xwib8y2 xurb0ha xdj266r x11i5rnm xat24cr x1mh8g0r">
                                                  <div
                                                    aria-label="Go from campaign trends to charts or edit draft"
                                                    class="x1i10hfl x1qjc9v5 xjqpnuy xa49m3k xqeqjp1 x2hbi6w x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xdl72j9 xe8uvvx x2lwn1j xeuugli xexx8yu x4uap5 x18d9i69 xkhd6sd x16tdsg8 xggy1nq x1ja2u2z x1n2onr6 x1q0g3np xxymvpz x1ejq31n xd10rxx x1sy0etr x17r0tee x87ps6o x1t137rt xlh3980 xvmahel x1hl2dhg x1lku1pv x78zum5 x1iyjqo2 xs83m0k x1lcm9me x1yr5g0i xrt01vj x10y3i5r x1xlr1w8 x140t73q x1v911su xdj266r x11i5rnm xat24cr x1mh8g0r"
                                                    role="button"
                                                    tabindex="0"
                                                  >
                                                    <span class="xmi5d70 x1fvot60 xxio538 x1heor9g xq9mrsl x1h4wwuj x1pd3egz xeuugli xh8yej3">
                                                      <div class="x6s0dn4 x78zum5 x1qughib x2lwn1j xeuugli">
                                                        <div class="x78zum5 x2lwn1j xeuugli x2lah0s">
                                                          <div class="x1lliihq x1n2onr6 x2lah0s">
                                                            <div
                                                              class="x3oybdh style-obFtB"
                                                              id="style-obFtB"
                                                            >
                                                              <div class="x1lliihq x1n2onr6 x2lah0s x1peatla x1fu8urw x1lcm9me x1yr5g0i xrt01vj x10y3i5r">
                                                                <div class="x10l6tqk x6ikm8r x10wlt62 x13vifvy x17qophe xh8yej3 x5yr21d x1o1ewxj x3x9cwd x1e5q0jg x13rtm0m xtd80it x1jgp7su x1q1rkhy x18tuezv x1xuqjiz xhl3afg x10cdfl8">
                                                                  <img
                                                                    alt=""
                                                                    class="img"
                                                                    src="https://external.flhe32-1.fna.fbcdn.net/emg1/v/t13/7754214358054150040?url=https%3A%2F%2Fwww.facebook.com%2Fads%2Fimage%2F%3Fd%3DAQKp0LpMf6uldqZBhqCrjz_u0a1420-ACKApfX-OmFbXfkmkeejrg_3mmO8LV95BJ0aIFLQGzRWSTitj6J9FShh-hkbTMdjKmFgnxCzAqR0R6X9gC0untgNPdDYKD2EyW3qktW_lJt09tKnsardR-QBh&fb_obo=1&utld=facebook.com&stp=c0.5000x0.5000f_dst-emg0_p46x46_q75&_nc_eui2=AeEI8_J4nvO9GwVekBY22ZUBic1iQtAqJruJzWJC0Comu5cJaImMrzkKSrajJ2DtyLY5avwvjBav8sItHU2n2cya&ccb=13-1&oh=06_Q399JqCOzZQH51VVCK_7ZC0k8EkukoDbudBq2F2VejcBfhk&oe=6719AD12&_nc_sid=58080a"
                                                                  />
                                                                </div>
                                                              </div>
                                                            </div>
                                                          </div>
                                                        </div>
                                                        <div class="x78zum5 xdt5ytf x2lwn1j x1iyjqo2 x1d52u69 xktsk01 xeuugli">
                                                          <div
                                                            aria-level="4"
                                                            class="x1xqt7ti xsuwoey x1xlr1w8 x63nzvj xbsr9hj x1yc453h xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj xeuugli"
                                                            role="heading"
                                                          >
                                                            [10/11/2024]
                                                            Promoting
                                                            https://flarequick.com/cf/r/670812abe2dc220012c1a962?ad_id=&amp;adset_i&amp;campaign_id...
                                                          </div>
                                                          <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94">
                                                            <div class="x1gslohp x12nagc">
                                                              <span class="x3nfvp2 xmix8c7 x1n2onr6">
                                                                <span class="x6s0dn4 x9f619 x78zum5 xmix8c7 xl56j7k x16xo4sp x1t137rt x1j85h84 xsyo7zv x16hj40l x4p5aij x1n2onr6 xzolkzo x12go9s9 x1rnf11y xprq8jg xom064s xgjf8nm x1wpexiw xab44vc xzyuu4h xmi5d70 xw23nyj x63nzvj xmbzoqv xuxw1ft x2b8uid x117nqv4">
                                                                  <div class="xmi5d70 xw23nyj x63nzvj x1heor9g xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj x1pd3egz xeuugli">
                                                                    Active
                                                                  </div>
                                                                </span>
                                                                <div
                                                                  aria-atomic="true"
                                                                  aria-live="polite"
                                                                  role="status"
                                                                  class="x1qvwoe0 xjm9jq1 x1y332i5 xcwd3tp x1jyxor1 x39eecv x6ikm8r x10wlt62 x10l6tqk xuxw1ft x1i1rx1s"
                                                                  data-sscoverage-ignore="true"
                                                                >
                                                                  Active
                                                                </div>
                                                              </span>
                                                            </div>
                                                          </div>
                                                        </div>
                                                        <div class="x78zum5 x2lwn1j x2lah0s x1d52u69 xktsk01 xeuugli">
                                                          <div class="xq1dxzn">
                                                            <div class="x6s0dn4 x78zum5 x2lwn1j xeuugli">
                                                              <span class="xmi5d70 x1fvot60 xo1l8bm xxio538 xbsr9hj xq9mrsl x1h4wwuj xeuugli">
                                                                Link Clicks
                                                              </span>
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
                                                                          class="xtwfq29 style-rbmY9"
                                                                          id="style-rbmY9"
                                                                        ></div>
                                                                      </div>
                                                                    </div>
                                                                  </div>
                                                                </div>
                                                              </div>
                                                            </div>
                                                            <div class="x1pha0wt x78zum5 x2lwn1j xeuugli">
                                                              <div>
                                                                <span class="x1xqt7ti x10d9sdx x1iikomf xrohxju xbsr9hj xq9mrsl x1h4wwuj xeuugli">
                                                                  0
                                                                </span>
                                                              </div>
                                                              <div class="x78zum5 x2lwn1j xeuugli xqcrz7y x12mruv9 xbsr9hj"></div>
                                                            </div>
                                                          </div>
                                                        </div>
                                                        <div class="x78zum5 x2lwn1j x2lah0s x1d52u69 xktsk01 xeuugli">
                                                          <div class="xq1dxzn">
                                                            <div class="xmi5d70 xw23nyj xo1l8bm x63nzvj x1541jtf xq9mrsl x2b8uid x1h4wwuj xeuugli">
                                                              This campaign has
                                                              no results for the
                                                              last 7 days.
                                                            </div>
                                                          </div>
                                                        </div>
                                                        <div class="x78zum5 x2lwn1j xeuugli x2lah0s">
                                                          <div
                                                            class="x3oybdh xuxw1ft x1iknuni xw9jwym x1e2iszw xg0tal0 x1lliihq x1lcm9me x1yr5g0i xrt01vj x10y3i5r"
                                                            role="group"
                                                          >
                                                            <div
                                                              class="x3nfvp2 x193iq5w xxymvpz style-reVMs"
                                                              role="none"
                                                              id="style-reVMs"
                                                            >
                                                              <div
                                                                aria-busy="false"
                                                                class="x1i10hfl xjqpnuy xa49m3k xqeqjp1 x2hbi6w x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli x16tdsg8 xggy1nq x1ja2u2z x1t137rt x6s0dn4 x1ejq31n xd10rxx x1sy0etr x17r0tee x3nfvp2 xdl72j9 x1q0g3np x2lah0s x193iq5w x1n2onr6 x1hl2dhg x87ps6o xxymvpz xlh3980 xvmahel x1lku1pv x1g40iwv x1lcm9me x1yr5g0i xrt01vj x10y3i5r xo1l8bm xbsr9hj x1v911su x1y1aw1k xwib8y2 x1ye3gou xn6708d  style-WQBHp"
                                                                role="button"
                                                                tabindex="0"
                                                                data-tracked="true"
                                                                data-clickable="1"
                                                                id="style-WQBHp"
                                                              >
                                                                <span class="xmi5d70 x1fvot60 xxio538 x1heor9g xq9mrsl x1h4wwuj x1pd3egz xeuugli xh8yej3">
                                                                  <div class="x78zum5">
                                                                    <div
                                                                      class="x1qvwoe0 xjm9jq1 x1y332i5 xcwd3tp x1jyxor1 x39eecv x6ikm8r x10wlt62 x10l6tqk xuxw1ft x1i1rx1s"
                                                                      data-sscoverage-ignore="true"
                                                                    >
                                                                      View
                                                                      Charts
                                                                    </div>
                                                                    <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1hc1fzr x13dflua x6o7n8i xxziih7 x12w9bfk xl56j7k xh8yej3">
                                                                      <div
                                                                        class="x3nfvp2 x120ccyz x1heor9g x2lah0s x1c4vz4f"
                                                                        role="presentation"
                                                                      >
                                                                        <div
                                                                          class="xtwfq29 style-VcWAv"
                                                                          id="style-VcWAv"
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
                                                    </span>
                                                  </div>
                                                </div>
                                                <div class="x1lq5wgf xgqcy7u x30kzoy x9jhf4c x1y1aw1k x1sxyh0 xwib8y2 xurb0ha xdj266r x11i5rnm xat24cr x1mh8g0r">
                                                  <div
                                                    aria-label="Go from campaign trends to charts or edit draft"
                                                    class="x1i10hfl x1qjc9v5 xjqpnuy xa49m3k xqeqjp1 x2hbi6w x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xdl72j9 xe8uvvx x2lwn1j xeuugli xexx8yu x4uap5 x18d9i69 xkhd6sd x16tdsg8 xggy1nq x1ja2u2z x1n2onr6 x1q0g3np xxymvpz x1ejq31n xd10rxx x1sy0etr x17r0tee x87ps6o x1t137rt xlh3980 xvmahel x1hl2dhg x1lku1pv x78zum5 x1iyjqo2 xs83m0k x1lcm9me x1yr5g0i xrt01vj x10y3i5r x1xlr1w8 x140t73q x1v911su xdj266r x11i5rnm xat24cr x1mh8g0r"
                                                    role="button"
                                                    tabindex="0"
                                                  >
                                                    <span class="xmi5d70 x1fvot60 xxio538 x1heor9g xq9mrsl x1h4wwuj x1pd3egz xeuugli xh8yej3">
                                                      <div class="x6s0dn4 x78zum5 x1qughib x2lwn1j xeuugli">
                                                        <div class="x78zum5 x2lwn1j xeuugli x2lah0s">
                                                          <div class="x1lliihq x1n2onr6 x2lah0s">
                                                            <div
                                                              class="x3oybdh style-JmX54"
                                                              id="style-JmX54"
                                                            >
                                                              <div class="x1lliihq x1n2onr6 x2lah0s x1peatla x1fu8urw x1lcm9me x1yr5g0i xrt01vj x10y3i5r">
                                                                <div class="x10l6tqk x6ikm8r x10wlt62 x13vifvy x17qophe xh8yej3 x5yr21d x1o1ewxj x3x9cwd x1e5q0jg x13rtm0m xtd80it x1jgp7su x1q1rkhy x18tuezv x1xuqjiz xhl3afg x10cdfl8">
                                                                  <img
                                                                    alt=""
                                                                    class="img"
                                                                    src="https://external.flhe32-1.fna.fbcdn.net/emg1/v/t13/10494778795213655129?url=https%3A%2F%2Fwww.facebook.com%2Fads%2Fimage%2F%3Fd%3DAQKEOphSDXqF5pLqyV0ZmXC_Ml-BWN6FRyf6JLJ-gadoSUdtIGnnACmiUJR9zbfwYW6IOlrLQRHTecs1ag99WOC_EzLnV6opidMNu4SqmCHZDjVMcwQeUtIR9ejAcVGG-yr-OVPHfrLGiBiTETpCIXZp&fb_obo=1&utld=facebook.com&stp=c0.5000x0.5000f_dst-emg0_p46x46_q75&_nc_eui2=AeHA9MiVaEDhhfDC3Qh-eOrApa1LyV3nBQ6lrUvJXecFDm1Q50XjO-sa11gLZTKH9PIw0xxJHyb8RQ6l2Ht3hdu0&ccb=13-1&oh=06_Q399AwjeJEZ12S2Q5mC-K0hL9oqf68Z5uVwsen0M6c6LbAA&oe=671999AD&_nc_sid=58080a"
                                                                  />
                                                                </div>
                                                              </div>
                                                            </div>
                                                          </div>
                                                        </div>
                                                        <div class="x78zum5 xdt5ytf x2lwn1j x1iyjqo2 x1d52u69 xktsk01 xeuugli">
                                                          <div
                                                            aria-level="4"
                                                            class="x1xqt7ti xsuwoey x1xlr1w8 x63nzvj xbsr9hj x1yc453h xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj xeuugli"
                                                            role="heading"
                                                          >
                                                            [10/11/2024]
                                                            Promoting
                                                            https://flarequick.com/cf/r/67081393382f7c0013650b16?ad_id=&amp;adset_id&amp;campaign_id...
                                                          </div>
                                                          <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94">
                                                            <div class="x1gslohp x12nagc">
                                                              <span class="x3nfvp2 xmix8c7 x1n2onr6">
                                                                <span class="x6s0dn4 x9f619 x78zum5 xmix8c7 xl56j7k x16xo4sp x1t137rt x1j85h84 xsyo7zv x16hj40l x4p5aij x1n2onr6 xzolkzo x12go9s9 x1rnf11y xprq8jg xom064s xgjf8nm x1wpexiw xab44vc xzyuu4h xmi5d70 xw23nyj x63nzvj xmbzoqv xuxw1ft x2b8uid x117nqv4">
                                                                  <div class="xmi5d70 xw23nyj x63nzvj x1heor9g xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj x1pd3egz xeuugli">
                                                                    Active
                                                                  </div>
                                                                </span>
                                                                <div
                                                                  aria-atomic="true"
                                                                  aria-live="polite"
                                                                  role="status"
                                                                  class="x1qvwoe0 xjm9jq1 x1y332i5 xcwd3tp x1jyxor1 x39eecv x6ikm8r x10wlt62 x10l6tqk xuxw1ft x1i1rx1s"
                                                                  data-sscoverage-ignore="true"
                                                                >
                                                                  Active
                                                                </div>
                                                              </span>
                                                            </div>
                                                          </div>
                                                        </div>
                                                        <div class="x78zum5 x2lwn1j x2lah0s x1d52u69 xktsk01 xeuugli">
                                                          <div class="xq1dxzn">
                                                            <div class="x6s0dn4 x78zum5 x2lwn1j xeuugli">
                                                              <span class="xmi5d70 x1fvot60 xo1l8bm xxio538 xbsr9hj xq9mrsl x1h4wwuj xeuugli">
                                                                Link Clicks
                                                              </span>
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
                                                                          class="xtwfq29 style-LJnFb"
                                                                          id="style-LJnFb"
                                                                        ></div>
                                                                      </div>
                                                                    </div>
                                                                  </div>
                                                                </div>
                                                              </div>
                                                            </div>
                                                            <div class="x1pha0wt x78zum5 x2lwn1j xeuugli">
                                                              <div>
                                                                <span class="x1xqt7ti x10d9sdx x1iikomf xrohxju xbsr9hj xq9mrsl x1h4wwuj xeuugli">
                                                                  11
                                                                </span>
                                                              </div>
                                                              <div class="x78zum5 x2lwn1j xeuugli xqcrz7y x12mruv9 xbsr9hj"></div>
                                                            </div>
                                                          </div>
                                                        </div>
                                                        <div class="x78zum5 x2lwn1j x2lah0s x1d52u69 xktsk01 xeuugli">
                                                          <div class="xq1dxzn">
                                                            <div>
                                                              <div class="x78zum5 xdt5ytf xozqiw3 x2lwn1j xeuugli x1iyjqo2 xavht8x xq1dxzn xsdox4t">
                                                                <div
                                                                  class="x1qvwoe0 xjm9jq1 x1y332i5 xcwd3tp x1jyxor1 x39eecv x6ikm8r x10wlt62 x10l6tqk xuxw1ft x1i1rx1s"
                                                                  data-sscoverage-ignore="true"
                                                                >
                                                                  <div class="xeuugli">
                                                                    <div
                                                                      aria-level="2"
                                                                      class="x1xqt7ti xm46was x1xlr1w8 x1jrz1v4 xbsr9hj xq9mrsl x1yc453h x1h4wwuj xeuugli"
                                                                      id="js_bo"
                                                                      role="heading"
                                                                    >
                                                                      Results
                                                                    </div>
                                                                  </div>
                                                                </div>
                                                                <div
                                                                  class="x78zum5 x2lwn1j xeuugli x1iyjqo2 x1n2onr6 style-iwG4R"
                                                                  id="style-iwG4R"
                                                                >
                                                                  <svg
                                                                    aria-describedby="js_bn"
                                                                    aria-labelledby="js_bo"
                                                                    class="x5yr21d x1plvlek xryxfnj x10l6tqk x17qophe x13vifvy xh8yej3"
                                                                    height="40"
                                                                    role="img"
                                                                    width="160"
                                                                  >
                                                                    <g class="">
                                                                      <rect
                                                                        fill="transparent"
                                                                        height="40"
                                                                        width="22.34285714285714"
                                                                        x="-0.6"
                                                                        y="0"
                                                                      ></rect>
                                                                      <path
                                                                        class="x4mcvgm"
                                                                        d="M 0,40 v 1 q 0, -2 2, -2 h 17.142857142857142 q 2, 0 2, 2 v -1 z"
                                                                        fill="rgba(241,244,247,1)"
                                                                      ></path>
                                                                    </g>
                                                                    <g class="">
                                                                      <rect
                                                                        fill="transparent"
                                                                        height="40"
                                                                        width="22.34285714285714"
                                                                        x="22.54285714285714"
                                                                        y="0"
                                                                      ></rect>
                                                                      <path
                                                                        class="x4mcvgm"
                                                                        d="M 23.142857142857142,40 v 1 q 0, -2 2, -2 h 17.142857142857142 q 2, 0 2, 2 v -1 z"
                                                                        fill="rgba(241,244,247,1)"
                                                                      ></path>
                                                                    </g>
                                                                    <g class="">
                                                                      <rect
                                                                        fill="transparent"
                                                                        height="40"
                                                                        width="22.34285714285714"
                                                                        x="45.68571428571428"
                                                                        y="0"
                                                                      ></rect>
                                                                      <path
                                                                        class="x4mcvgm"
                                                                        d="M 46.285714285714285,40 v 1 q 0, -2 2, -2 h 17.142857142857142 q 2, 0 2, 2 v -1 z"
                                                                        fill="rgba(241,244,247,1)"
                                                                      ></path>
                                                                    </g>
                                                                    <g class="">
                                                                      <rect
                                                                        fill="transparent"
                                                                        height="40"
                                                                        width="22.34285714285714"
                                                                        x="68.82857142857144"
                                                                        y="0"
                                                                      ></rect>
                                                                      <path
                                                                        class="x4mcvgm"
                                                                        d="M 69.42857142857143,40 v 1 q 0, -2 2, -2 h 17.142857142857142 q 2, 0 2, 2 v -1 z"
                                                                        fill="rgba(241,244,247,1)"
                                                                      ></path>
                                                                    </g>
                                                                    <g class="">
                                                                      <rect
                                                                        fill="transparent"
                                                                        height="40"
                                                                        width="22.34285714285714"
                                                                        x="91.97142857142858"
                                                                        y="0"
                                                                      ></rect>
                                                                      <path
                                                                        class="x4mcvgm"
                                                                        d="M 92.57142857142857,40 v -38 q 0, -2 2, -2 h 17.142857142857142 q 2, 0 2, 2 v 38 z"
                                                                        fill="rgba(241,244,247,1)"
                                                                      ></path>
                                                                    </g>
                                                                    <g class="">
                                                                      <rect
                                                                        fill="transparent"
                                                                        height="40"
                                                                        width="22.34285714285714"
                                                                        x="115.11428571428571"
                                                                        y="0"
                                                                      ></rect>
                                                                      <path
                                                                        class="x4mcvgm"
                                                                        d="M 115.71428571428571,40 v -38 q 0, -2 2, -2 h 17.142857142857142 q 2, 0 2, 2 v 38 z"
                                                                        fill="rgba(241,244,247,1)"
                                                                      ></path>
                                                                    </g>
                                                                    <g class="">
                                                                      <rect
                                                                        fill="transparent"
                                                                        height="40"
                                                                        width="22.34285714285714"
                                                                        x="138.25714285714287"
                                                                        y="0"
                                                                      ></rect>
                                                                      <path
                                                                        class="x4mcvgm"
                                                                        d="M 138.85714285714286,40 v -28 q 0, -2 2, -2 h 17.142857142857142 q 2, 0 2, 2 v 28 z"
                                                                        fill="rgba(241,244,247,1)"
                                                                      ></path>
                                                                    </g>
                                                                  </svg>
                                                                  <table
                                                                    class="x1lliihq x1mwwwfo x1gukg7c x1qvwoe0 xjm9jq1 x10l6tqk x140o2bo x1i1rx1s x6ikm8r x10wlt62"
                                                                    id="js_bn"
                                                                  >
                                                                    <tbody>
                                                                      <tr>
                                                                        <th></th>
                                                                        <th>
                                                                          8 Oct
                                                                        </th>
                                                                        <th>
                                                                          9 Oct
                                                                        </th>
                                                                        <th>
                                                                          10 Oct
                                                                        </th>
                                                                        <th>
                                                                          Link
                                                                          Clicks
                                                                          on 11
                                                                          Oct
                                                                        </th>
                                                                        <th>
                                                                          Link
                                                                          Clicks
                                                                          on 12
                                                                          Oct
                                                                        </th>
                                                                        <th>
                                                                          Link
                                                                          Clicks
                                                                          on 13
                                                                          Oct
                                                                        </th>
                                                                        <th>
                                                                          Link
                                                                          Clicks
                                                                          on 14
                                                                          Oct
                                                                        </th>
                                                                      </tr>
                                                                      <tr>
                                                                        <td>
                                                                          Results
                                                                        </td>
                                                                        <td>
                                                                          0
                                                                        </td>
                                                                        <td>
                                                                          0
                                                                        </td>
                                                                        <td>
                                                                          0
                                                                        </td>
                                                                        <td>
                                                                          0
                                                                        </td>
                                                                        <td>
                                                                          4
                                                                        </td>
                                                                        <td>
                                                                          4
                                                                        </td>
                                                                        <td>
                                                                          3
                                                                        </td>
                                                                      </tr>
                                                                    </tbody>
                                                                  </table>
                                                                </div>
                                                              </div>
                                                            </div>
                                                          </div>
                                                        </div>
                                                        <div class="x78zum5 x2lwn1j xeuugli x2lah0s">
                                                          <div
                                                            class="x3oybdh xuxw1ft x1iknuni xw9jwym x1e2iszw xg0tal0 x1lliihq x1lcm9me x1yr5g0i xrt01vj x10y3i5r"
                                                            role="group"
                                                          >
                                                            <div
                                                              class="x3nfvp2 x193iq5w xxymvpz style-3Sfdn"
                                                              role="none"
                                                              id="style-3Sfdn"
                                                            >
                                                              <div
                                                                aria-busy="false"
                                                                class="x1i10hfl xjqpnuy xa49m3k xqeqjp1 x2hbi6w x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli x16tdsg8 xggy1nq x1ja2u2z x1t137rt x6s0dn4 x1ejq31n xd10rxx x1sy0etr x17r0tee x3nfvp2 xdl72j9 x1q0g3np x2lah0s x193iq5w x1n2onr6 x1hl2dhg x87ps6o xxymvpz xlh3980 xvmahel x1lku1pv x1g40iwv x1lcm9me x1yr5g0i xrt01vj x10y3i5r xo1l8bm xbsr9hj x1v911su x1y1aw1k xwib8y2 x1ye3gou xn6708d  style-fJFzY"
                                                                role="button"
                                                                tabindex="0"
                                                                data-tracked="true"
                                                                data-clickable="1"
                                                                id="style-fJFzY"
                                                              >
                                                                <span class="xmi5d70 x1fvot60 xxio538 x1heor9g xq9mrsl x1h4wwuj x1pd3egz xeuugli xh8yej3">
                                                                  <div class="x78zum5">
                                                                    <div
                                                                      class="x1qvwoe0 xjm9jq1 x1y332i5 xcwd3tp x1jyxor1 x39eecv x6ikm8r x10wlt62 x10l6tqk xuxw1ft x1i1rx1s"
                                                                      data-sscoverage-ignore="true"
                                                                    >
                                                                      View
                                                                      Charts
                                                                    </div>
                                                                    <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1hc1fzr x13dflua x6o7n8i xxziih7 x12w9bfk xl56j7k xh8yej3">
                                                                      <div
                                                                        class="x3nfvp2 x120ccyz x1heor9g x2lah0s x1c4vz4f"
                                                                        role="presentation"
                                                                      >
                                                                        <div
                                                                          class="xtwfq29 style-nosrn"
                                                                          id="style-nosrn"
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
                                                    </span>
                                                  </div>
                                                </div>
                                                <div class="x1lq5wgf xgqcy7u x30kzoy x9jhf4c x1y1aw1k x1sxyh0 xwib8y2 xurb0ha xdj266r x11i5rnm xat24cr x1mh8g0r">
                                                  <div
                                                    aria-label="Go from campaign trends to charts or edit draft"
                                                    class="x1i10hfl x1qjc9v5 xjqpnuy xa49m3k xqeqjp1 x2hbi6w x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xdl72j9 xe8uvvx x2lwn1j xeuugli xexx8yu x4uap5 x18d9i69 xkhd6sd x16tdsg8 xggy1nq x1ja2u2z x1n2onr6 x1q0g3np xxymvpz x1ejq31n xd10rxx x1sy0etr x17r0tee x87ps6o x1t137rt xlh3980 xvmahel x1hl2dhg x1lku1pv x78zum5 x1iyjqo2 xs83m0k x1lcm9me x1yr5g0i xrt01vj x10y3i5r x1xlr1w8 x140t73q x1v911su xdj266r x11i5rnm xat24cr x1mh8g0r"
                                                    role="button"
                                                    tabindex="0"
                                                  >
                                                    <span class="xmi5d70 x1fvot60 xxio538 x1heor9g xq9mrsl x1h4wwuj x1pd3egz xeuugli xh8yej3">
                                                      <div class="x6s0dn4 x78zum5 x1qughib x2lwn1j xeuugli">
                                                        <div class="x78zum5 x2lwn1j xeuugli x2lah0s">
                                                          <div class="x1lliihq x1n2onr6 x2lah0s">
                                                            <div
                                                              class="x3oybdh style-K6EJV"
                                                              id="style-K6EJV"
                                                            >
                                                              <div class="x1lliihq x1n2onr6 x2lah0s x1peatla x1fu8urw x1lcm9me x1yr5g0i xrt01vj x10y3i5r">
                                                                <div class="x10l6tqk x6ikm8r x10wlt62 x13vifvy x17qophe xh8yej3 x5yr21d x1o1ewxj x3x9cwd x1e5q0jg x13rtm0m xtd80it x1jgp7su x1q1rkhy x18tuezv x1xuqjiz xhl3afg x10cdfl8">
                                                                  <img
                                                                    alt=""
                                                                    class="img"
                                                                    src="https://external.flhe32-1.fna.fbcdn.net/emg1/v/t13/5979055117228630254?url=https%3A%2F%2Fwww.facebook.com%2Fads%2Fimage%2F%3Fd%3DAQJW5lfqiqF8tjDHmznPQx4xzLfWrie_s-7HqF4x5izUdo5aWOz0N8rEnmGCLWqToKFfcuEueJIfuWhl0by7ML63eV7d0MrWvsFUN-iQhf3PUiOtunevkumpflPazShWt5nkimcmIUGKaIC7BPjo60Zu&fb_obo=1&utld=facebook.com&stp=c0.5000x0.5000f_dst-emg0_p46x46_q75&_nc_eui2=AeEtc7KJwf7Ujt1w0LaJy0x2ZWNwkQX26-NlY3CRBfbr46ZU8O8qSd_v5meCNXzL_6z4hYvy9KuIfuBNM3QID-O2&ccb=13-1&oh=06_Q399qfUG9JOsYp1FqcweM0jQclj7hcKimcJkD2fZ7U07Ffs&oe=67199FEE&_nc_sid=58080a"
                                                                  />
                                                                </div>
                                                              </div>
                                                            </div>
                                                          </div>
                                                        </div>
                                                        <div class="x78zum5 xdt5ytf x2lwn1j x1iyjqo2 x1d52u69 xktsk01 xeuugli">
                                                          <div
                                                            aria-level="4"
                                                            class="x1xqt7ti xsuwoey x1xlr1w8 x63nzvj xbsr9hj x1yc453h xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj xeuugli"
                                                            role="heading"
                                                          >
                                                            [10/07/2024]
                                                            Promoting
                                                            https://floor-installation-8015410.live/?ref=facebook-&amp;rskey=Flooring+Installation&amp;headli...
                                                          </div>
                                                          <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94">
                                                            <div class="x1gslohp x12nagc">
                                                              <span class="x3nfvp2 xmix8c7 x1n2onr6">
                                                                <span class="x6s0dn4 x9f619 x78zum5 xmix8c7 xl56j7k x16xo4sp x1t137rt x1j85h84 xsyo7zv x16hj40l x4p5aij x1n2onr6 xzolkzo x12go9s9 x1rnf11y xprq8jg xom064s xgjf8nm x1wpexiw xab44vc xzyuu4h xmi5d70 xw23nyj x63nzvj xmbzoqv xuxw1ft x2b8uid x117nqv4">
                                                                  <div class="xmi5d70 xw23nyj x63nzvj x1heor9g xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj x1pd3egz xeuugli">
                                                                    Active
                                                                  </div>
                                                                </span>
                                                                <div
                                                                  aria-atomic="true"
                                                                  aria-live="polite"
                                                                  role="status"
                                                                  class="x1qvwoe0 xjm9jq1 x1y332i5 xcwd3tp x1jyxor1 x39eecv x6ikm8r x10wlt62 x10l6tqk xuxw1ft x1i1rx1s"
                                                                  data-sscoverage-ignore="true"
                                                                >
                                                                  Active
                                                                </div>
                                                              </span>
                                                            </div>
                                                          </div>
                                                        </div>
                                                        <div class="x78zum5 x2lwn1j x2lah0s x1d52u69 xktsk01 xeuugli">
                                                          <div class="xq1dxzn">
                                                            <div class="x6s0dn4 x78zum5 x2lwn1j xeuugli">
                                                              <span class="xmi5d70 x1fvot60 xo1l8bm xxio538 xbsr9hj xq9mrsl x1h4wwuj xeuugli">
                                                                Link Clicks
                                                              </span>
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
                                                                          class="xtwfq29 style-V195G"
                                                                          id="style-V195G"
                                                                        ></div>
                                                                      </div>
                                                                    </div>
                                                                  </div>
                                                                </div>
                                                              </div>
                                                            </div>
                                                            <div class="x1pha0wt x78zum5 x2lwn1j xeuugli">
                                                              <div>
                                                                <span class="x1xqt7ti x10d9sdx x1iikomf xrohxju xbsr9hj xq9mrsl x1h4wwuj xeuugli">
                                                                  8
                                                                </span>
                                                              </div>
                                                              <div class="x78zum5 x2lwn1j xeuugli xqcrz7y x12mruv9 xbsr9hj"></div>
                                                            </div>
                                                          </div>
                                                        </div>
                                                        <div class="x78zum5 x2lwn1j x2lah0s x1d52u69 xktsk01 xeuugli">
                                                          <div class="xq1dxzn">
                                                            <div>
                                                              <div class="x78zum5 xdt5ytf xozqiw3 x2lwn1j xeuugli x1iyjqo2 xavht8x xq1dxzn xsdox4t">
                                                                <div
                                                                  class="x1qvwoe0 xjm9jq1 x1y332i5 xcwd3tp x1jyxor1 x39eecv x6ikm8r x10wlt62 x10l6tqk xuxw1ft x1i1rx1s"
                                                                  data-sscoverage-ignore="true"
                                                                >
                                                                  <div class="xeuugli">
                                                                    <div
                                                                      aria-level="2"
                                                                      class="x1xqt7ti xm46was x1xlr1w8 x1jrz1v4 xbsr9hj xq9mrsl x1yc453h x1h4wwuj xeuugli"
                                                                      id="js_bq"
                                                                      role="heading"
                                                                    >
                                                                      Results
                                                                    </div>
                                                                  </div>
                                                                </div>
                                                                <div
                                                                  class="x78zum5 x2lwn1j xeuugli x1iyjqo2 x1n2onr6 style-lLZxH"
                                                                  id="style-lLZxH"
                                                                >
                                                                  <svg
                                                                    aria-describedby="js_bp"
                                                                    aria-labelledby="js_bq"
                                                                    class="x5yr21d x1plvlek xryxfnj x10l6tqk x17qophe x13vifvy xh8yej3"
                                                                    height="40"
                                                                    role="img"
                                                                    width="160"
                                                                  >
                                                                    <g class="">
                                                                      <rect
                                                                        fill="transparent"
                                                                        height="40"
                                                                        width="22.34285714285714"
                                                                        x="-0.6"
                                                                        y="0"
                                                                      ></rect>
                                                                      <path
                                                                        class="x4mcvgm"
                                                                        d="M 0,40 v -24.666666666666664 q 0, -2 2, -2 h 17.142857142857142 q 2, 0 2, 2 v 24.666666666666664 z"
                                                                        fill="rgba(241,244,247,1)"
                                                                      ></path>
                                                                    </g>
                                                                    <g class="">
                                                                      <rect
                                                                        fill="transparent"
                                                                        height="40"
                                                                        width="22.34285714285714"
                                                                        x="22.54285714285714"
                                                                        y="0"
                                                                      ></rect>
                                                                      <path
                                                                        class="x4mcvgm"
                                                                        d="M 23.142857142857142,40 v -11.333333333333332 q 0, -2 2, -2 h 17.142857142857142 q 2, 0 2, 2 v 11.333333333333332 z"
                                                                        fill="rgba(241,244,247,1)"
                                                                      ></path>
                                                                    </g>
                                                                    <g class="">
                                                                      <rect
                                                                        fill="transparent"
                                                                        height="40"
                                                                        width="22.34285714285714"
                                                                        x="45.68571428571428"
                                                                        y="0"
                                                                      ></rect>
                                                                      <path
                                                                        class="x4mcvgm"
                                                                        d="M 46.285714285714285,40 v 1 q 0, -2 2, -2 h 17.142857142857142 q 2, 0 2, 2 v -1 z"
                                                                        fill="rgba(241,244,247,1)"
                                                                      ></path>
                                                                    </g>
                                                                    <g class="">
                                                                      <rect
                                                                        fill="transparent"
                                                                        height="40"
                                                                        width="22.34285714285714"
                                                                        x="68.82857142857144"
                                                                        y="0"
                                                                      ></rect>
                                                                      <path
                                                                        class="x4mcvgm"
                                                                        d="M 69.42857142857143,40 v -11.333333333333332 q 0, -2 2, -2 h 17.142857142857142 q 2, 0 2, 2 v 11.333333333333332 z"
                                                                        fill="rgba(241,244,247,1)"
                                                                      ></path>
                                                                    </g>
                                                                    <g class="">
                                                                      <rect
                                                                        fill="transparent"
                                                                        height="40"
                                                                        width="22.34285714285714"
                                                                        x="91.97142857142858"
                                                                        y="0"
                                                                      ></rect>
                                                                      <path
                                                                        class="x4mcvgm"
                                                                        d="M 92.57142857142857,40 v 1 q 0, -2 2, -2 h 17.142857142857142 q 2, 0 2, 2 v -1 z"
                                                                        fill="rgba(241,244,247,1)"
                                                                      ></path>
                                                                    </g>
                                                                    <g class="">
                                                                      <rect
                                                                        fill="transparent"
                                                                        height="40"
                                                                        width="22.34285714285714"
                                                                        x="115.11428571428571"
                                                                        y="0"
                                                                      ></rect>
                                                                      <path
                                                                        class="x4mcvgm"
                                                                        d="M 115.71428571428571,40 v -11.333333333333332 q 0, -2 2, -2 h 17.142857142857142 q 2, 0 2, 2 v 11.333333333333332 z"
                                                                        fill="rgba(241,244,247,1)"
                                                                      ></path>
                                                                    </g>
                                                                    <g class="">
                                                                      <rect
                                                                        fill="transparent"
                                                                        height="40"
                                                                        width="22.34285714285714"
                                                                        x="138.25714285714287"
                                                                        y="0"
                                                                      ></rect>
                                                                      <path
                                                                        class="x4mcvgm"
                                                                        d="M 138.85714285714286,40 v -38 q 0, -2 2, -2 h 17.142857142857142 q 2, 0 2, 2 v 38 z"
                                                                        fill="rgba(241,244,247,1)"
                                                                      ></path>
                                                                    </g>
                                                                  </svg>
                                                                  <table
                                                                    class="x1lliihq x1mwwwfo x1gukg7c x1qvwoe0 xjm9jq1 x10l6tqk x140o2bo x1i1rx1s x6ikm8r x10wlt62"
                                                                    id="js_bp"
                                                                  >
                                                                    <tbody>
                                                                      <tr>
                                                                        <th></th>
                                                                        <th>
                                                                          Link
                                                                          Clicks
                                                                          on 8
                                                                          Oct
                                                                        </th>
                                                                        <th>
                                                                          Link
                                                                          Clicks
                                                                          on 9
                                                                          Oct
                                                                        </th>
                                                                        <th>
                                                                          Link
                                                                          Clicks
                                                                          on 10
                                                                          Oct
                                                                        </th>
                                                                        <th>
                                                                          Link
                                                                          Clicks
                                                                          on 11
                                                                          Oct
                                                                        </th>
                                                                        <th>
                                                                          Link
                                                                          Clicks
                                                                          on 12
                                                                          Oct
                                                                        </th>
                                                                        <th>
                                                                          Link
                                                                          Clicks
                                                                          on 13
                                                                          Oct
                                                                        </th>
                                                                        <th>
                                                                          Link
                                                                          Clicks
                                                                          on 14
                                                                          Oct
                                                                        </th>
                                                                      </tr>
                                                                      <tr>
                                                                        <td>
                                                                          Results
                                                                        </td>
                                                                        <td>
                                                                          2
                                                                        </td>
                                                                        <td>
                                                                          1
                                                                        </td>
                                                                        <td>
                                                                          0
                                                                        </td>
                                                                        <td>
                                                                          1
                                                                        </td>
                                                                        <td>
                                                                          0
                                                                        </td>
                                                                        <td>
                                                                          1
                                                                        </td>
                                                                        <td>
                                                                          3
                                                                        </td>
                                                                      </tr>
                                                                    </tbody>
                                                                  </table>
                                                                </div>
                                                              </div>
                                                            </div>
                                                          </div>
                                                        </div>
                                                        <div class="x78zum5 x2lwn1j xeuugli x2lah0s">
                                                          <div
                                                            class="x3oybdh xuxw1ft x1iknuni xw9jwym x1e2iszw xg0tal0 x1lliihq x1lcm9me x1yr5g0i xrt01vj x10y3i5r"
                                                            role="group"
                                                          >
                                                            <div
                                                              class="x3nfvp2 x193iq5w xxymvpz style-pwZNm"
                                                              role="none"
                                                              id="style-pwZNm"
                                                            >
                                                              <div
                                                                aria-busy="false"
                                                                class="x1i10hfl xjqpnuy xa49m3k xqeqjp1 x2hbi6w x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli x16tdsg8 xggy1nq x1ja2u2z x1t137rt x6s0dn4 x1ejq31n xd10rxx x1sy0etr x17r0tee x3nfvp2 xdl72j9 x1q0g3np x2lah0s x193iq5w x1n2onr6 x1hl2dhg x87ps6o xxymvpz xlh3980 xvmahel x1lku1pv x1g40iwv x1lcm9me x1yr5g0i xrt01vj x10y3i5r xo1l8bm xbsr9hj x1v911su x1y1aw1k xwib8y2 x1ye3gou xn6708d  style-1oYpF"
                                                                role="button"
                                                                tabindex="0"
                                                                data-tracked="true"
                                                                data-clickable="1"
                                                                id="style-1oYpF"
                                                              >
                                                                <span class="xmi5d70 x1fvot60 xxio538 x1heor9g xq9mrsl x1h4wwuj x1pd3egz xeuugli xh8yej3">
                                                                  <div class="x78zum5">
                                                                    <div
                                                                      class="x1qvwoe0 xjm9jq1 x1y332i5 xcwd3tp x1jyxor1 x39eecv x6ikm8r x10wlt62 x10l6tqk xuxw1ft x1i1rx1s"
                                                                      data-sscoverage-ignore="true"
                                                                    >
                                                                      View
                                                                      Charts
                                                                    </div>
                                                                    <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1hc1fzr x13dflua x6o7n8i xxziih7 x12w9bfk xl56j7k xh8yej3">
                                                                      <div
                                                                        class="x3nfvp2 x120ccyz x1heor9g x2lah0s x1c4vz4f"
                                                                        role="presentation"
                                                                      >
                                                                        <div
                                                                          class="xtwfq29 style-1j3ao"
                                                                          id="style-1j3ao"
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
                                                    </span>
                                                  </div>
                                                </div>
                                                <div class="x1lq5wgf xgqcy7u x30kzoy x9jhf4c x1y1aw1k x1sxyh0 xwib8y2 xurb0ha xdj266r x11i5rnm xat24cr x1mh8g0r">
                                                  <div
                                                    aria-label="Go from campaign trends to charts or edit draft"
                                                    class="x1i10hfl x1qjc9v5 xjqpnuy xa49m3k xqeqjp1 x2hbi6w x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xdl72j9 xe8uvvx x2lwn1j xeuugli xexx8yu x4uap5 x18d9i69 xkhd6sd x16tdsg8 xggy1nq x1ja2u2z x1n2onr6 x1q0g3np xxymvpz x1ejq31n xd10rxx x1sy0etr x17r0tee x87ps6o x1t137rt xlh3980 xvmahel x1hl2dhg x1lku1pv x78zum5 x1iyjqo2 xs83m0k x1lcm9me x1yr5g0i xrt01vj x10y3i5r x1xlr1w8 x140t73q x1v911su xdj266r x11i5rnm xat24cr x1mh8g0r"
                                                    role="button"
                                                    tabindex="0"
                                                  >
                                                    <span class="xmi5d70 x1fvot60 xxio538 x1heor9g xq9mrsl x1h4wwuj x1pd3egz xeuugli xh8yej3">
                                                      <div class="x6s0dn4 x78zum5 x1qughib x2lwn1j xeuugli">
                                                        <div class="x78zum5 x2lwn1j xeuugli x2lah0s">
                                                          <div class="x1lliihq x1n2onr6 x2lah0s">
                                                            <div
                                                              class="x3oybdh style-JeVoD"
                                                              id="style-JeVoD"
                                                            >
                                                              <div class="x1lliihq x1n2onr6 x2lah0s x1peatla x1fu8urw x1lcm9me x1yr5g0i xrt01vj x10y3i5r">
                                                                <div class="x10l6tqk x6ikm8r x10wlt62 x13vifvy x17qophe xh8yej3 x5yr21d x1o1ewxj x3x9cwd x1e5q0jg x13rtm0m xtd80it x1jgp7su x1q1rkhy x18tuezv x1xuqjiz xhl3afg x10cdfl8">
                                                                  <img
                                                                    alt=""
                                                                    class="img"
                                                                    src="https://external.flhe32-1.fna.fbcdn.net/emg1/v/t13/13246833349203832317?url=https%3A%2F%2Fwww.facebook.com%2Fads%2Fimage%2F%3Fd%3DAQJHSUBw7xGZVLoJLgL3g0Mmbg6W1JZxDMgN1k2z82gRJysc1X5G81wFaE8bGgSogDYKmWLwqTvp3HBMRh5ObdAMXb93CNOHhV4wMlSvUkMhIMM8l1hqZdiHRIChqQkMEuDbunlel3jx0HUMb0bQuR9_&fb_obo=1&utld=facebook.com&stp=c0.5000x0.5000f_dst-emg0_p46x46_q75&_nc_eui2=AeF5CegXk3rQ6PZ7eMoW8tT8ogrKexOXHDaiCsp7E5ccNg4x5IaH4IZ9YV44ATSlpE2JwOXWY4b_WCpuBiACDMhY&ccb=13-1&oh=06_Q399rmzqunXhDWKoB8bv6ZualPK7T-e0kuqDi0D5oFlhRYY&oe=6719B580&_nc_sid=58080a"
                                                                  />
                                                                </div>
                                                              </div>
                                                            </div>
                                                          </div>
                                                        </div>
                                                        <div class="x78zum5 xdt5ytf x2lwn1j x1iyjqo2 x1d52u69 xktsk01 xeuugli">
                                                          <div
                                                            aria-level="4"
                                                            class="x1xqt7ti xsuwoey x1xlr1w8 x63nzvj xbsr9hj x1yc453h xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj xeuugli"
                                                            role="heading"
                                                          >
                                                            [10/03/2024]
                                                            Promoting
                                                            https://flarequick.com/cf/r/66feb05f72e96d0012805e89?ad_id=&amp;adset_id=&amp;campaign_id...
                                                          </div>
                                                          <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94">
                                                            <div class="x1gslohp x12nagc">
                                                              <span class="x3nfvp2 xmix8c7 x1n2onr6">
                                                                <span class="x6s0dn4 x9f619 x78zum5 xmix8c7 xl56j7k x16xo4sp x1t137rt x1j85h84 xsyo7zv x16hj40l x4p5aij x1n2onr6 xzolkzo x12go9s9 x1rnf11y xprq8jg xom064s xgjf8nm x1wpexiw xab44vc xzyuu4h xmi5d70 xw23nyj x63nzvj xmbzoqv xuxw1ft x2b8uid x117nqv4">
                                                                  <div class="xmi5d70 xw23nyj x63nzvj x1heor9g xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj x1pd3egz xeuugli">
                                                                    Active
                                                                  </div>
                                                                </span>
                                                                <div
                                                                  aria-atomic="true"
                                                                  aria-live="polite"
                                                                  role="status"
                                                                  class="x1qvwoe0 xjm9jq1 x1y332i5 xcwd3tp x1jyxor1 x39eecv x6ikm8r x10wlt62 x10l6tqk xuxw1ft x1i1rx1s"
                                                                  data-sscoverage-ignore="true"
                                                                >
                                                                  Active
                                                                </div>
                                                              </span>
                                                            </div>
                                                          </div>
                                                        </div>
                                                        <div class="x78zum5 x2lwn1j x2lah0s x1d52u69 xktsk01 xeuugli">
                                                          <div class="xq1dxzn">
                                                            <div class="x6s0dn4 x78zum5 x2lwn1j xeuugli">
                                                              <span class="xmi5d70 x1fvot60 xo1l8bm xxio538 xbsr9hj xq9mrsl x1h4wwuj xeuugli">
                                                                Link Clicks
                                                              </span>
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
                                                                          class="xtwfq29 style-4pDVq"
                                                                          id="style-4pDVq"
                                                                        ></div>
                                                                      </div>
                                                                    </div>
                                                                  </div>
                                                                </div>
                                                              </div>
                                                            </div>
                                                            <div class="x1pha0wt x78zum5 x2lwn1j xeuugli">
                                                              <div>
                                                                <span class="x1xqt7ti x10d9sdx x1iikomf xrohxju xbsr9hj xq9mrsl x1h4wwuj xeuugli">
                                                                  28
                                                                </span>
                                                              </div>
                                                              <div class="x78zum5 x2lwn1j xeuugli xqcrz7y x12mruv9 xbsr9hj"></div>
                                                              <div class="x78zum5 x2lwn1j xeuugli x12mruv9">
                                                                <div class="x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x65s2av x1pha0wt xmbzoqv">
                                                                  <div class="x1n2onr6 xs7f9wi">
                                                                    <div
                                                                      class="x3nfvp2 x120ccyz x1heor9g"
                                                                      role="presentation"
                                                                    >
                                                                      <div
                                                                        class="xtwfq29 style-JaE4g"
                                                                        id="style-JaE4g"
                                                                      ></div>
                                                                    </div>
                                                                  </div>
                                                                  <span class="xmi5d70 x1fvot60 xo1l8bm xxio538 x1heor9g xq9mrsl x1h4wwuj xeuugli">
                                                                    250%
                                                                  </span>
                                                                </div>
                                                              </div>
                                                            </div>
                                                          </div>
                                                        </div>
                                                        <div class="x78zum5 x2lwn1j x2lah0s x1d52u69 xktsk01 xeuugli">
                                                          <div class="xq1dxzn">
                                                            <div>
                                                              <div class="x78zum5 xdt5ytf xozqiw3 x2lwn1j xeuugli x1iyjqo2 xavht8x xq1dxzn xsdox4t">
                                                                <div
                                                                  class="x1qvwoe0 xjm9jq1 x1y332i5 xcwd3tp x1jyxor1 x39eecv x6ikm8r x10wlt62 x10l6tqk xuxw1ft x1i1rx1s"
                                                                  data-sscoverage-ignore="true"
                                                                >
                                                                  <div class="xeuugli">
                                                                    <div
                                                                      aria-level="2"
                                                                      class="x1xqt7ti xm46was x1xlr1w8 x1jrz1v4 xbsr9hj xq9mrsl x1yc453h x1h4wwuj xeuugli"
                                                                      id="js_bu"
                                                                      role="heading"
                                                                    >
                                                                      Results
                                                                    </div>
                                                                  </div>
                                                                </div>
                                                                <div
                                                                  class="x78zum5 x2lwn1j xeuugli x1iyjqo2 x1n2onr6 style-s8RmD"
                                                                  id="style-s8RmD"
                                                                >
                                                                  <svg
                                                                    aria-describedby="js_bt"
                                                                    aria-labelledby="js_bu"
                                                                    class="x5yr21d x1plvlek xryxfnj x10l6tqk x17qophe x13vifvy xh8yej3"
                                                                    height="40"
                                                                    role="img"
                                                                    width="160"
                                                                  >
                                                                    <g class="">
                                                                      <rect
                                                                        fill="transparent"
                                                                        height="40"
                                                                        width="22.34285714285714"
                                                                        x="-0.6"
                                                                        y="0"
                                                                      ></rect>
                                                                      <path
                                                                        class="x4mcvgm"
                                                                        d="M 0,40 v -18 q 0, -2 2, -2 h 17.142857142857142 q 2, 0 2, 2 v 18 z"
                                                                        fill="rgba(241,244,247,1)"
                                                                      ></path>
                                                                    </g>
                                                                    <g class="">
                                                                      <rect
                                                                        fill="transparent"
                                                                        height="40"
                                                                        width="22.34285714285714"
                                                                        x="22.54285714285714"
                                                                        y="0"
                                                                      ></rect>
                                                                      <path
                                                                        class="x4mcvgm"
                                                                        d="M 23.142857142857142,40 v -18 q 0, -2 2, -2 h 17.142857142857142 q 2, 0 2, 2 v 18 z"
                                                                        fill="rgba(241,244,247,1)"
                                                                      ></path>
                                                                    </g>
                                                                    <g class="">
                                                                      <rect
                                                                        fill="transparent"
                                                                        height="40"
                                                                        width="22.34285714285714"
                                                                        x="45.68571428571428"
                                                                        y="0"
                                                                      ></rect>
                                                                      <path
                                                                        class="x4mcvgm"
                                                                        d="M 46.285714285714285,40 v -18 q 0, -2 2, -2 h 17.142857142857142 q 2, 0 2, 2 v 18 z"
                                                                        fill="rgba(241,244,247,1)"
                                                                      ></path>
                                                                    </g>
                                                                    <g class="">
                                                                      <rect
                                                                        fill="transparent"
                                                                        height="40"
                                                                        width="22.34285714285714"
                                                                        x="68.82857142857144"
                                                                        y="0"
                                                                      ></rect>
                                                                      <path
                                                                        class="x4mcvgm"
                                                                        d="M 69.42857142857143,40 v -24.666666666666664 q 0, -2 2, -2 h 17.142857142857142 q 2, 0 2, 2 v 24.666666666666664 z"
                                                                        fill="rgba(241,244,247,1)"
                                                                      ></path>
                                                                    </g>
                                                                    <g class="">
                                                                      <rect
                                                                        fill="transparent"
                                                                        height="40"
                                                                        width="22.34285714285714"
                                                                        x="91.97142857142858"
                                                                        y="0"
                                                                      ></rect>
                                                                      <path
                                                                        class="x4mcvgm"
                                                                        d="M 92.57142857142857,40 v -24.666666666666664 q 0, -2 2, -2 h 17.142857142857142 q 2, 0 2, 2 v 24.666666666666664 z"
                                                                        fill="rgba(241,244,247,1)"
                                                                      ></path>
                                                                    </g>
                                                                    <g class="">
                                                                      <rect
                                                                        fill="transparent"
                                                                        height="40"
                                                                        width="22.34285714285714"
                                                                        x="115.11428571428571"
                                                                        y="0"
                                                                      ></rect>
                                                                      <path
                                                                        class="x4mcvgm"
                                                                        d="M 115.71428571428571,40 v -31.333333333333336 q 0, -2 2, -2 h 17.142857142857142 q 2, 0 2, 2 v 31.333333333333336 z"
                                                                        fill="rgba(241,244,247,1)"
                                                                      ></path>
                                                                    </g>
                                                                    <g class="">
                                                                      <rect
                                                                        fill="transparent"
                                                                        height="40"
                                                                        width="22.34285714285714"
                                                                        x="138.25714285714287"
                                                                        y="0"
                                                                      ></rect>
                                                                      <path
                                                                        class="x4mcvgm"
                                                                        d="M 138.85714285714286,40 v -38 q 0, -2 2, -2 h 17.142857142857142 q 2, 0 2, 2 v 38 z"
                                                                        fill="rgba(241,244,247,1)"
                                                                      ></path>
                                                                    </g>
                                                                  </svg>
                                                                  <table
                                                                    class="x1lliihq x1mwwwfo x1gukg7c x1qvwoe0 xjm9jq1 x10l6tqk x140o2bo x1i1rx1s x6ikm8r x10wlt62"
                                                                    id="js_bt"
                                                                  >
                                                                    <tbody>
                                                                      <tr>
                                                                        <th></th>
                                                                        <th>
                                                                          Link
                                                                          Clicks
                                                                          on 8
                                                                          Oct
                                                                        </th>
                                                                        <th>
                                                                          Link
                                                                          Clicks
                                                                          on 9
                                                                          Oct
                                                                        </th>
                                                                        <th>
                                                                          Link
                                                                          Clicks
                                                                          on 10
                                                                          Oct
                                                                        </th>
                                                                        <th>
                                                                          Link
                                                                          Clicks
                                                                          on 11
                                                                          Oct
                                                                        </th>
                                                                        <th>
                                                                          Link
                                                                          Clicks
                                                                          on 12
                                                                          Oct
                                                                        </th>
                                                                        <th>
                                                                          Link
                                                                          Clicks
                                                                          on 13
                                                                          Oct
                                                                        </th>
                                                                        <th>
                                                                          Link
                                                                          Clicks
                                                                          on 14
                                                                          Oct
                                                                        </th>
                                                                      </tr>
                                                                      <tr>
                                                                        <td>
                                                                          Results
                                                                        </td>
                                                                        <td>
                                                                          3
                                                                        </td>
                                                                        <td>
                                                                          3
                                                                        </td>
                                                                        <td>
                                                                          3
                                                                        </td>
                                                                        <td>
                                                                          4
                                                                        </td>
                                                                        <td>
                                                                          4
                                                                        </td>
                                                                        <td>
                                                                          5
                                                                        </td>
                                                                        <td>
                                                                          6
                                                                        </td>
                                                                      </tr>
                                                                    </tbody>
                                                                  </table>
                                                                </div>
                                                              </div>
                                                            </div>
                                                          </div>
                                                        </div>
                                                        <div class="x78zum5 x2lwn1j xeuugli x2lah0s">
                                                          <div
                                                            class="x3oybdh xuxw1ft x1iknuni xw9jwym x1e2iszw xg0tal0 x1lliihq x1lcm9me x1yr5g0i xrt01vj x10y3i5r"
                                                            role="group"
                                                          >
                                                            <div
                                                              class="x3nfvp2 x193iq5w xxymvpz style-dS2Eh"
                                                              role="none"
                                                              id="style-dS2Eh"
                                                            >
                                                              <div
                                                                aria-busy="false"
                                                                class="x1i10hfl xjqpnuy xa49m3k xqeqjp1 x2hbi6w x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli x16tdsg8 xggy1nq x1ja2u2z x1t137rt x6s0dn4 x1ejq31n xd10rxx x1sy0etr x17r0tee x3nfvp2 xdl72j9 x1q0g3np x2lah0s x193iq5w x1n2onr6 x1hl2dhg x87ps6o xxymvpz xlh3980 xvmahel x1lku1pv x1g40iwv x1lcm9me x1yr5g0i xrt01vj x10y3i5r xo1l8bm xbsr9hj x1v911su x1y1aw1k xwib8y2 x1ye3gou xn6708d  style-2AEQs"
                                                                role="button"
                                                                tabindex="0"
                                                                data-tracked="true"
                                                                data-clickable="1"
                                                                id="style-2AEQs"
                                                              >
                                                                <span class="xmi5d70 x1fvot60 xxio538 x1heor9g xq9mrsl x1h4wwuj x1pd3egz xeuugli xh8yej3">
                                                                  <div class="x78zum5">
                                                                    <div
                                                                      class="x1qvwoe0 xjm9jq1 x1y332i5 xcwd3tp x1jyxor1 x39eecv x6ikm8r x10wlt62 x10l6tqk xuxw1ft x1i1rx1s"
                                                                      data-sscoverage-ignore="true"
                                                                    >
                                                                      View
                                                                      Charts
                                                                    </div>
                                                                    <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1hc1fzr x13dflua x6o7n8i xxziih7 x12w9bfk xl56j7k xh8yej3">
                                                                      <div
                                                                        class="x3nfvp2 x120ccyz x1heor9g x2lah0s x1c4vz4f"
                                                                        role="presentation"
                                                                      >
                                                                        <div
                                                                          class="xtwfq29 style-R1Ds1"
                                                                          id="style-R1Ds1"
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
                                                    </span>
                                                  </div>
                                                </div>
                                                <div class="x1lq5wgf xgqcy7u x30kzoy x9jhf4c x1y1aw1k x1sxyh0 xwib8y2 xurb0ha xdj266r x11i5rnm xat24cr x1mh8g0r">
                                                  <div
                                                    aria-label="Go from campaign trends to charts or edit draft"
                                                    class="x1i10hfl x1qjc9v5 xjqpnuy xa49m3k xqeqjp1 x2hbi6w x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xdl72j9 xe8uvvx x2lwn1j xeuugli xexx8yu x4uap5 x18d9i69 xkhd6sd x16tdsg8 xggy1nq x1ja2u2z x1n2onr6 x1q0g3np xxymvpz x1ejq31n xd10rxx x1sy0etr x17r0tee x87ps6o x1t137rt xlh3980 xvmahel x1hl2dhg x1lku1pv x78zum5 x1iyjqo2 xs83m0k x1lcm9me x1yr5g0i xrt01vj x10y3i5r x1xlr1w8 x140t73q x1v911su xdj266r x11i5rnm xat24cr x1mh8g0r"
                                                    role="button"
                                                    tabindex="0"
                                                  >
                                                    <span class="xmi5d70 x1fvot60 xxio538 x1heor9g xq9mrsl x1h4wwuj x1pd3egz xeuugli xh8yej3">
                                                      <div class="x6s0dn4 x78zum5 x1qughib x2lwn1j xeuugli">
                                                        <div class="x78zum5 x2lwn1j xeuugli x2lah0s">
                                                          <div class="x1lliihq x1n2onr6 x2lah0s">
                                                            <div
                                                              class="x3oybdh style-B1Cwb"
                                                              id="style-B1Cwb"
                                                            >
                                                              <div class="x1lliihq x1n2onr6 x2lah0s x1peatla x1fu8urw x1lcm9me x1yr5g0i xrt01vj x10y3i5r">
                                                                <div class="x10l6tqk x6ikm8r x10wlt62 x13vifvy x17qophe xh8yej3 x5yr21d x1o1ewxj x3x9cwd x1e5q0jg x13rtm0m xtd80it x1jgp7su x1q1rkhy x18tuezv x1xuqjiz xhl3afg x10cdfl8">
                                                                  <img
                                                                    alt=""
                                                                    class="img"
                                                                    src="https://external.flhe32-1.fna.fbcdn.net/emg1/v/t13/9211871006643672093?url=https%3A%2F%2Fwww.facebook.com%2Fads%2Fimage%2F%3Fd%3DAQLC1gj1_zomWw-nRpt80g0dAdfSNkeoahjdUjYbaSWtlwl3JkleZZjbXoyRBG553jq54vtOhstI2BpJRy3AwH81DHlgwifU0DZN3x_KaIZFjODsrCKNDnL3uTVOaZspAALFM3e5aY7-2fAV7YEEoaMw&fb_obo=1&utld=facebook.com&stp=c0.5000x0.5000f_dst-emg0_p46x46_q75&_nc_eui2=AeGr9BbwE_nDus2udiuGV-Gp9FiNKod0pEP0WI0qh3SkQytG6J2ejkZuf60wNTuiKCU6hCc3Gtku8gesdeTKU9Ny&ccb=13-1&oh=06_Q399B104b5bMy6NO5ElVqx47MsN9VT-lrKKi_gzAdCL3jls&oe=671992F6&_nc_sid=58080a"
                                                                  />
                                                                </div>
                                                              </div>
                                                            </div>
                                                          </div>
                                                        </div>
                                                        <div class="x78zum5 xdt5ytf x2lwn1j x1iyjqo2 x1d52u69 xktsk01 xeuugli">
                                                          <div
                                                            aria-level="4"
                                                            class="x1xqt7ti xsuwoey x1xlr1w8 x63nzvj xbsr9hj x1yc453h xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj xeuugli"
                                                            role="heading"
                                                          >
                                                            [10/01/2024]
                                                            Promoting
                                                            https://track.bizgeniusguru.com/676c6d26-ca05-416b-ab07-1fc2e23be764?tid=2037&amp;src=FB
                                                          </div>
                                                          <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94">
                                                            <div class="x1gslohp x12nagc">
                                                              <span class="x3nfvp2 xmix8c7 x1n2onr6">
                                                                <span class="x6s0dn4 x9f619 x78zum5 xmix8c7 xl56j7k x16xo4sp x1t137rt x1j85h84 xsyo7zv x16hj40l x4p5aij x1n2onr6 xzolkzo x12go9s9 x1rnf11y xprq8jg xom064s xgjf8nm x1wpexiw xab44vc xzyuu4h xmi5d70 xw23nyj x63nzvj xmbzoqv xuxw1ft x2b8uid x117nqv4">
                                                                  <div class="xmi5d70 xw23nyj x63nzvj x1heor9g xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj x1pd3egz xeuugli">
                                                                    Active
                                                                  </div>
                                                                </span>
                                                                <div
                                                                  aria-atomic="true"
                                                                  aria-live="polite"
                                                                  role="status"
                                                                  class="x1qvwoe0 xjm9jq1 x1y332i5 xcwd3tp x1jyxor1 x39eecv x6ikm8r x10wlt62 x10l6tqk xuxw1ft x1i1rx1s"
                                                                  data-sscoverage-ignore="true"
                                                                >
                                                                  Active
                                                                </div>
                                                              </span>
                                                            </div>
                                                          </div>
                                                        </div>
                                                        <div class="x78zum5 x2lwn1j x2lah0s x1d52u69 xktsk01 xeuugli">
                                                          <div class="xq1dxzn">
                                                            <div class="x6s0dn4 x78zum5 x2lwn1j xeuugli">
                                                              <span class="xmi5d70 x1fvot60 xo1l8bm xxio538 xbsr9hj xq9mrsl x1h4wwuj xeuugli">
                                                                Link Clicks
                                                              </span>
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
                                                                          class="xtwfq29 style-8f9VW"
                                                                          id="style-8f9VW"
                                                                        ></div>
                                                                      </div>
                                                                    </div>
                                                                  </div>
                                                                </div>
                                                              </div>
                                                            </div>
                                                            <div class="x1pha0wt x78zum5 x2lwn1j xeuugli">
                                                              <div>
                                                                <span class="x1xqt7ti x10d9sdx x1iikomf xrohxju xbsr9hj xq9mrsl x1h4wwuj xeuugli">
                                                                  95
                                                                </span>
                                                              </div>
                                                              <div class="x78zum5 x2lwn1j xeuugli xqcrz7y x12mruv9 xbsr9hj"></div>
                                                              <div class="x78zum5 x2lwn1j xeuugli x12mruv9">
                                                                <div class="x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x65s2av x1pha0wt xmbzoqv">
                                                                  <div class="x1n2onr6 xs7f9wi">
                                                                    <div
                                                                      class="x3nfvp2 x120ccyz x1heor9g"
                                                                      role="presentation"
                                                                    >
                                                                      <div
                                                                        class="xtwfq29 style-SrvDT"
                                                                        id="style-SrvDT"
                                                                      ></div>
                                                                    </div>
                                                                  </div>
                                                                  <span class="xmi5d70 x1fvot60 xo1l8bm xxio538 x1heor9g xq9mrsl x1h4wwuj xeuugli">
                                                                    55.7%
                                                                  </span>
                                                                </div>
                                                              </div>
                                                            </div>
                                                          </div>
                                                        </div>
                                                        <div class="x78zum5 x2lwn1j x2lah0s x1d52u69 xktsk01 xeuugli">
                                                          <div class="xq1dxzn">
                                                            <div>
                                                              <div class="x78zum5 xdt5ytf xozqiw3 x2lwn1j xeuugli x1iyjqo2 xavht8x xq1dxzn xsdox4t">
                                                                <div
                                                                  class="x1qvwoe0 xjm9jq1 x1y332i5 xcwd3tp x1jyxor1 x39eecv x6ikm8r x10wlt62 x10l6tqk xuxw1ft x1i1rx1s"
                                                                  data-sscoverage-ignore="true"
                                                                >
                                                                  <div class="xeuugli">
                                                                    <div
                                                                      aria-level="2"
                                                                      class="x1xqt7ti xm46was x1xlr1w8 x1jrz1v4 xbsr9hj xq9mrsl x1yc453h x1h4wwuj xeuugli"
                                                                      id="js_bw"
                                                                      role="heading"
                                                                    >
                                                                      Results
                                                                    </div>
                                                                  </div>
                                                                </div>
                                                                <div
                                                                  class="x78zum5 x2lwn1j xeuugli x1iyjqo2 x1n2onr6 style-Dmy9f"
                                                                  id="style-Dmy9f"
                                                                >
                                                                  <svg
                                                                    aria-describedby="js_bv"
                                                                    aria-labelledby="js_bw"
                                                                    class="x5yr21d x1plvlek xryxfnj x10l6tqk x17qophe x13vifvy xh8yej3"
                                                                    height="40"
                                                                    role="img"
                                                                    width="160"
                                                                  >
                                                                    <g class="">
                                                                      <rect
                                                                        fill="transparent"
                                                                        height="40"
                                                                        width="22.34285714285714"
                                                                        x="-0.6"
                                                                        y="0"
                                                                      ></rect>
                                                                      <path
                                                                        class="x4mcvgm"
                                                                        d="M 0,40 v -25.5 q 0, -2 2, -2 h 17.142857142857142 q 2, 0 2, 2 v 25.5 z"
                                                                        fill="rgba(241,244,247,1)"
                                                                      ></path>
                                                                    </g>
                                                                    <g class="">
                                                                      <rect
                                                                        fill="transparent"
                                                                        height="40"
                                                                        width="22.34285714285714"
                                                                        x="22.54285714285714"
                                                                        y="0"
                                                                      ></rect>
                                                                      <path
                                                                        class="x4mcvgm"
                                                                        d="M 23.142857142857142,40 v -33 q 0, -2 2, -2 h 17.142857142857142 q 2, 0 2, 2 v 33 z"
                                                                        fill="rgba(241,244,247,1)"
                                                                      ></path>
                                                                    </g>
                                                                    <g class="">
                                                                      <rect
                                                                        fill="transparent"
                                                                        height="40"
                                                                        width="22.34285714285714"
                                                                        x="45.68571428571428"
                                                                        y="0"
                                                                      ></rect>
                                                                      <path
                                                                        class="x4mcvgm"
                                                                        d="M 46.285714285714285,40 v -33 q 0, -2 2, -2 h 17.142857142857142 q 2, 0 2, 2 v 33 z"
                                                                        fill="rgba(241,244,247,1)"
                                                                      ></path>
                                                                    </g>
                                                                    <g class="">
                                                                      <rect
                                                                        fill="transparent"
                                                                        height="40"
                                                                        width="22.34285714285714"
                                                                        x="68.82857142857144"
                                                                        y="0"
                                                                      ></rect>
                                                                      <path
                                                                        class="x4mcvgm"
                                                                        d="M 69.42857142857143,40 v -33 q 0, -2 2, -2 h 17.142857142857142 q 2, 0 2, 2 v 33 z"
                                                                        fill="rgba(241,244,247,1)"
                                                                      ></path>
                                                                    </g>
                                                                    <g class="">
                                                                      <rect
                                                                        fill="transparent"
                                                                        height="40"
                                                                        width="22.34285714285714"
                                                                        x="91.97142857142858"
                                                                        y="0"
                                                                      ></rect>
                                                                      <path
                                                                        class="x4mcvgm"
                                                                        d="M 92.57142857142857,40 v -38 q 0, -2 2, -2 h 17.142857142857142 q 2, 0 2, 2 v 38 z"
                                                                        fill="rgba(241,244,247,1)"
                                                                      ></path>
                                                                    </g>
                                                                    <g class="">
                                                                      <rect
                                                                        fill="transparent"
                                                                        height="40"
                                                                        width="22.34285714285714"
                                                                        x="115.11428571428571"
                                                                        y="0"
                                                                      ></rect>
                                                                      <path
                                                                        class="x4mcvgm"
                                                                        d="M 115.71428571428571,40 v -38 q 0, -2 2, -2 h 17.142857142857142 q 2, 0 2, 2 v 38 z"
                                                                        fill="rgba(241,244,247,1)"
                                                                      ></path>
                                                                    </g>
                                                                    <g class="">
                                                                      <rect
                                                                        fill="transparent"
                                                                        height="40"
                                                                        width="22.34285714285714"
                                                                        x="138.25714285714287"
                                                                        y="0"
                                                                      ></rect>
                                                                      <path
                                                                        class="x4mcvgm"
                                                                        d="M 138.85714285714286,40 v -23 q 0, -2 2, -2 h 17.142857142857142 q 2, 0 2, 2 v 23 z"
                                                                        fill="rgba(241,244,247,1)"
                                                                      ></path>
                                                                    </g>
                                                                  </svg>
                                                                  <table
                                                                    class="x1lliihq x1mwwwfo x1gukg7c x1qvwoe0 xjm9jq1 x10l6tqk x140o2bo x1i1rx1s x6ikm8r x10wlt62"
                                                                    id="js_bv"
                                                                  >
                                                                    <tbody>
                                                                      <tr>
                                                                        <th></th>
                                                                        <th>
                                                                          Link
                                                                          Clicks
                                                                          on 8
                                                                          Oct
                                                                        </th>
                                                                        <th>
                                                                          Link
                                                                          Clicks
                                                                          on 9
                                                                          Oct
                                                                        </th>
                                                                        <th>
                                                                          Link
                                                                          Clicks
                                                                          on 10
                                                                          Oct
                                                                        </th>
                                                                        <th>
                                                                          Link
                                                                          Clicks
                                                                          on 11
                                                                          Oct
                                                                        </th>
                                                                        <th>
                                                                          Link
                                                                          Clicks
                                                                          on 12
                                                                          Oct
                                                                        </th>
                                                                        <th>
                                                                          Link
                                                                          Clicks
                                                                          on 13
                                                                          Oct
                                                                        </th>
                                                                        <th>
                                                                          Link
                                                                          Clicks
                                                                          on 14
                                                                          Oct
                                                                        </th>
                                                                      </tr>
                                                                      <tr>
                                                                        <td>
                                                                          Results
                                                                        </td>
                                                                        <td>
                                                                          11
                                                                        </td>
                                                                        <td>
                                                                          14
                                                                        </td>
                                                                        <td>
                                                                          14
                                                                        </td>
                                                                        <td>
                                                                          14
                                                                        </td>
                                                                        <td>
                                                                          16
                                                                        </td>
                                                                        <td>
                                                                          16
                                                                        </td>
                                                                        <td>
                                                                          10
                                                                        </td>
                                                                      </tr>
                                                                    </tbody>
                                                                  </table>
                                                                </div>
                                                              </div>
                                                            </div>
                                                          </div>
                                                        </div>
                                                        <div class="x78zum5 x2lwn1j xeuugli x2lah0s">
                                                          <div
                                                            class="x3oybdh xuxw1ft x1iknuni xw9jwym x1e2iszw xg0tal0 x1lliihq x1lcm9me x1yr5g0i xrt01vj x10y3i5r"
                                                            role="group"
                                                          >
                                                            <div
                                                              class="x3nfvp2 x193iq5w xxymvpz style-xtjWq"
                                                              role="none"
                                                              id="style-xtjWq"
                                                            >
                                                              <div
                                                                aria-busy="false"
                                                                class="x1i10hfl xjqpnuy xa49m3k xqeqjp1 x2hbi6w x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli x16tdsg8 xggy1nq x1ja2u2z x1t137rt x6s0dn4 x1ejq31n xd10rxx x1sy0etr x17r0tee x3nfvp2 xdl72j9 x1q0g3np x2lah0s x193iq5w x1n2onr6 x1hl2dhg x87ps6o xxymvpz xlh3980 xvmahel x1lku1pv x1g40iwv x1lcm9me x1yr5g0i xrt01vj x10y3i5r xo1l8bm xbsr9hj x1v911su x1y1aw1k xwib8y2 x1ye3gou xn6708d  style-PmeeZ"
                                                                role="button"
                                                                tabindex="0"
                                                                data-tracked="true"
                                                                data-clickable="1"
                                                                id="style-PmeeZ"
                                                              >
                                                                <span class="xmi5d70 x1fvot60 xxio538 x1heor9g xq9mrsl x1h4wwuj x1pd3egz xeuugli xh8yej3">
                                                                  <div class="x78zum5">
                                                                    <div
                                                                      class="x1qvwoe0 xjm9jq1 x1y332i5 xcwd3tp x1jyxor1 x39eecv x6ikm8r x10wlt62 x10l6tqk xuxw1ft x1i1rx1s"
                                                                      data-sscoverage-ignore="true"
                                                                    >
                                                                      View
                                                                      Charts
                                                                    </div>
                                                                    <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1hc1fzr x13dflua x6o7n8i xxziih7 x12w9bfk xl56j7k xh8yej3">
                                                                      <div
                                                                        class="x3nfvp2 x120ccyz x1heor9g x2lah0s x1c4vz4f"
                                                                        role="presentation"
                                                                      >
                                                                        <div
                                                                          class="xtwfq29 style-ga7Hq"
                                                                          id="style-ga7Hq"
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
                                                    </span>
                                                  </div>
                                                </div>
                                                <div class="x1lq5wgf xgqcy7u x30kzoy x9jhf4c x1y1aw1k x1sxyh0 xwib8y2 xurb0ha xdj266r x11i5rnm xat24cr x1mh8g0r">
                                                  <div
                                                    aria-label="Go from campaign trends to charts or edit draft"
                                                    class="x1i10hfl x1qjc9v5 xjqpnuy xa49m3k xqeqjp1 x2hbi6w x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xdl72j9 xe8uvvx x2lwn1j xeuugli xexx8yu x4uap5 x18d9i69 xkhd6sd x16tdsg8 xggy1nq x1ja2u2z x1n2onr6 x1q0g3np xxymvpz x1ejq31n xd10rxx x1sy0etr x17r0tee x87ps6o x1t137rt xlh3980 xvmahel x1hl2dhg x1lku1pv x78zum5 x1iyjqo2 xs83m0k x1lcm9me x1yr5g0i xrt01vj x10y3i5r x1xlr1w8 x140t73q x1v911su xdj266r x11i5rnm xat24cr x1mh8g0r"
                                                    role="button"
                                                    tabindex="0"
                                                  >
                                                    <span class="xmi5d70 x1fvot60 xxio538 x1heor9g xq9mrsl x1h4wwuj x1pd3egz xeuugli xh8yej3">
                                                      <div class="x6s0dn4 x78zum5 x1qughib x2lwn1j xeuugli">
                                                        <div class="x78zum5 x2lwn1j xeuugli x2lah0s">
                                                          <div class="x1lliihq x1n2onr6 x2lah0s">
                                                            <div
                                                              class="x3oybdh style-JaZX3"
                                                              id="style-JaZX3"
                                                            >
                                                              <div class="x1lliihq x1n2onr6 x2lah0s x1peatla x1fu8urw x1lcm9me x1yr5g0i xrt01vj x10y3i5r">
                                                                <div class="x10l6tqk x6ikm8r x10wlt62 x13vifvy x17qophe xh8yej3 x5yr21d x1o1ewxj x3x9cwd x1e5q0jg x13rtm0m xtd80it x1jgp7su x1q1rkhy x18tuezv x1xuqjiz xhl3afg x10cdfl8">
                                                                  <img
                                                                    alt=""
                                                                    class="img"
                                                                    src="https://external.flhe32-1.fna.fbcdn.net/emg1/v/t13/2820360710512163867?url=https%3A%2F%2Fwww.facebook.com%2Fads%2Fimage%2F%3Fd%3DAQJVe8OujOE54cjBAxv9MIDebcuGi3EKSB83wuSdC6uacvPocXdjUJjS1naIpgSgJRctOxvKFoQMWD1EO3o9KTFN-jpDLvw6BhaHsCSBTIwTCxSQmnQPIFiylu8AD6z7xFUth7yzo7yvsY8Z59koVmRQ&fb_obo=1&utld=facebook.com&stp=c0.5000x0.5000f_dst-emg0_p46x46_q75&_nc_eui2=AeFFOJMLms1JhkZsW6vuYHtyzpVcDtIDW1zOlVwO0gNbXNaEYRgIXTl_SfKMu5FveDaTVhauBPZqfv1Kd4XCGVec&ccb=13-1&oh=06_Q3992vm9DgEmIGoxYssd3K9ynOUlbzuPJBERguLZWdrrK8g&oe=67199C91&_nc_sid=58080a"
                                                                  />
                                                                </div>
                                                              </div>
                                                            </div>
                                                          </div>
                                                        </div>
                                                        <div class="x78zum5 xdt5ytf x2lwn1j x1iyjqo2 x1d52u69 xktsk01 xeuugli">
                                                          <div
                                                            aria-level="4"
                                                            class="x1xqt7ti xsuwoey x1xlr1w8 x63nzvj xbsr9hj x1yc453h xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj xeuugli"
                                                            role="heading"
                                                          >
                                                            [09/21/2024]
                                                            Promoting
                                                            https://flarequick.com/cf/r/66eedd5285ea1900125c4e85?ad_id=&amp;adset_id=&amp;campaign_id...
                                                          </div>
                                                          <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94">
                                                            <div class="x1gslohp x12nagc">
                                                              <span class="x3nfvp2 xmix8c7 x1n2onr6">
                                                                <span class="x6s0dn4 x9f619 x78zum5 xmix8c7 xl56j7k x16xo4sp x1t137rt x1j85h84 xsyo7zv x16hj40l x4p5aij x1n2onr6 xzolkzo x12go9s9 x1rnf11y xprq8jg xom064s xgjf8nm x1wpexiw xab44vc xzyuu4h xmi5d70 xw23nyj x63nzvj xmbzoqv xuxw1ft x2b8uid x117nqv4">
                                                                  <div class="xmi5d70 xw23nyj x63nzvj x1heor9g xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj x1pd3egz xeuugli">
                                                                    Active
                                                                  </div>
                                                                </span>
                                                                <div
                                                                  aria-atomic="true"
                                                                  aria-live="polite"
                                                                  role="status"
                                                                  class="x1qvwoe0 xjm9jq1 x1y332i5 xcwd3tp x1jyxor1 x39eecv x6ikm8r x10wlt62 x10l6tqk xuxw1ft x1i1rx1s"
                                                                  data-sscoverage-ignore="true"
                                                                >
                                                                  Active
                                                                </div>
                                                              </span>
                                                            </div>
                                                          </div>
                                                        </div>
                                                        <div class="x78zum5 x2lwn1j x2lah0s x1d52u69 xktsk01 xeuugli">
                                                          <div class="xq1dxzn">
                                                            <div class="x6s0dn4 x78zum5 x2lwn1j xeuugli">
                                                              <span class="xmi5d70 x1fvot60 xo1l8bm xxio538 xbsr9hj xq9mrsl x1h4wwuj xeuugli">
                                                                Link Clicks
                                                              </span>
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
                                                                          class="xtwfq29 style-b4RnN"
                                                                          id="style-b4RnN"
                                                                        ></div>
                                                                      </div>
                                                                    </div>
                                                                  </div>
                                                                </div>
                                                              </div>
                                                            </div>
                                                            <div class="x1pha0wt x78zum5 x2lwn1j xeuugli">
                                                              <div>
                                                                <span class="x1xqt7ti x10d9sdx x1iikomf xrohxju xbsr9hj xq9mrsl x1h4wwuj xeuugli">
                                                                  60
                                                                </span>
                                                              </div>
                                                              <div class="x78zum5 x2lwn1j xeuugli xqcrz7y x12mruv9 xbsr9hj"></div>
                                                              <div class="x78zum5 x2lwn1j xeuugli x12mruv9">
                                                                <div class="x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x65s2av x1pha0wt xmbzoqv">
                                                                  <div class="x1n2onr6 xs7f9wi">
                                                                    <div
                                                                      class="x3nfvp2 x120ccyz x1heor9g"
                                                                      role="presentation"
                                                                    >
                                                                      <div
                                                                        class="xtwfq29 style-BS1bo"
                                                                        id="style-BS1bo"
                                                                      ></div>
                                                                    </div>
                                                                  </div>
                                                                  <span class="xmi5d70 x1fvot60 xo1l8bm xxio538 x1heor9g xq9mrsl x1h4wwuj xeuugli">
                                                                    22.4%
                                                                  </span>
                                                                </div>
                                                              </div>
                                                            </div>
                                                          </div>
                                                        </div>
                                                        <div class="x78zum5 x2lwn1j x2lah0s x1d52u69 xktsk01 xeuugli">
                                                          <div class="xq1dxzn">
                                                            <div>
                                                              <div class="x78zum5 xdt5ytf xozqiw3 x2lwn1j xeuugli x1iyjqo2 xavht8x xq1dxzn xsdox4t">
                                                                <div
                                                                  class="x1qvwoe0 xjm9jq1 x1y332i5 xcwd3tp x1jyxor1 x39eecv x6ikm8r x10wlt62 x10l6tqk xuxw1ft x1i1rx1s"
                                                                  data-sscoverage-ignore="true"
                                                                >
                                                                  <div class="xeuugli">
                                                                    <div
                                                                      aria-level="2"
                                                                      class="x1xqt7ti xm46was x1xlr1w8 x1jrz1v4 xbsr9hj xq9mrsl x1yc453h x1h4wwuj xeuugli"
                                                                      id="js_c2"
                                                                      role="heading"
                                                                    >
                                                                      Results
                                                                    </div>
                                                                  </div>
                                                                </div>
                                                                <div
                                                                  class="x78zum5 x2lwn1j xeuugli x1iyjqo2 x1n2onr6 style-VV7s7"
                                                                  id="style-VV7s7"
                                                                >
                                                                  <svg
                                                                    aria-describedby="js_c1"
                                                                    aria-labelledby="js_c2"
                                                                    class="x5yr21d x1plvlek xryxfnj x10l6tqk x17qophe x13vifvy xh8yej3"
                                                                    height="40"
                                                                    role="img"
                                                                    width="160"
                                                                  >
                                                                    <g class="">
                                                                      <rect
                                                                        fill="transparent"
                                                                        height="40"
                                                                        width="22.34285714285714"
                                                                        x="-0.6"
                                                                        y="0"
                                                                      ></rect>
                                                                      <path
                                                                        class="x4mcvgm"
                                                                        d="M 0,40 v -38 q 0, -2 2, -2 h 17.142857142857142 q 2, 0 2, 2 v 38 z"
                                                                        fill="rgba(241,244,247,1)"
                                                                      ></path>
                                                                    </g>
                                                                    <g class="">
                                                                      <rect
                                                                        fill="transparent"
                                                                        height="40"
                                                                        width="22.34285714285714"
                                                                        x="22.54285714285714"
                                                                        y="0"
                                                                      ></rect>
                                                                      <path
                                                                        class="x4mcvgm"
                                                                        d="M 23.142857142857142,40 v -38 q 0, -2 2, -2 h 17.142857142857142 q 2, 0 2, 2 v 38 z"
                                                                        fill="rgba(241,244,247,1)"
                                                                      ></path>
                                                                    </g>
                                                                    <g class="">
                                                                      <rect
                                                                        fill="transparent"
                                                                        height="40"
                                                                        width="22.34285714285714"
                                                                        x="45.68571428571428"
                                                                        y="0"
                                                                      ></rect>
                                                                      <path
                                                                        class="x4mcvgm"
                                                                        d="M 46.285714285714285,40 v -30 q 0, -2 2, -2 h 17.142857142857142 q 2, 0 2, 2 v 30 z"
                                                                        fill="rgba(241,244,247,1)"
                                                                      ></path>
                                                                    </g>
                                                                    <g class="">
                                                                      <rect
                                                                        fill="transparent"
                                                                        height="40"
                                                                        width="22.34285714285714"
                                                                        x="68.82857142857144"
                                                                        y="0"
                                                                      ></rect>
                                                                      <path
                                                                        class="x4mcvgm"
                                                                        d="M 69.42857142857143,40 v -38 q 0, -2 2, -2 h 17.142857142857142 q 2, 0 2, 2 v 38 z"
                                                                        fill="rgba(241,244,247,1)"
                                                                      ></path>
                                                                    </g>
                                                                    <g class="">
                                                                      <rect
                                                                        fill="transparent"
                                                                        height="40"
                                                                        width="22.34285714285714"
                                                                        x="91.97142857142858"
                                                                        y="0"
                                                                      ></rect>
                                                                      <path
                                                                        class="x4mcvgm"
                                                                        d="M 92.57142857142857,40 v -30 q 0, -2 2, -2 h 17.142857142857142 q 2, 0 2, 2 v 30 z"
                                                                        fill="rgba(241,244,247,1)"
                                                                      ></path>
                                                                    </g>
                                                                    <g class="">
                                                                      <rect
                                                                        fill="transparent"
                                                                        height="40"
                                                                        width="22.34285714285714"
                                                                        x="115.11428571428571"
                                                                        y="0"
                                                                      ></rect>
                                                                      <path
                                                                        class="x4mcvgm"
                                                                        d="M 115.71428571428571,40 v -30 q 0, -2 2, -2 h 17.142857142857142 q 2, 0 2, 2 v 30 z"
                                                                        fill="rgba(241,244,247,1)"
                                                                      ></path>
                                                                    </g>
                                                                    <g class="">
                                                                      <rect
                                                                        fill="transparent"
                                                                        height="40"
                                                                        width="22.34285714285714"
                                                                        x="138.25714285714287"
                                                                        y="0"
                                                                      ></rect>
                                                                      <path
                                                                        class="x4mcvgm"
                                                                        d="M 138.85714285714286,40 v -22 q 0, -2 2, -2 h 17.142857142857142 q 2, 0 2, 2 v 22 z"
                                                                        fill="rgba(241,244,247,1)"
                                                                      ></path>
                                                                    </g>
                                                                  </svg>
                                                                  <table
                                                                    class="x1lliihq x1mwwwfo x1gukg7c x1qvwoe0 xjm9jq1 x10l6tqk x140o2bo x1i1rx1s x6ikm8r x10wlt62"
                                                                    id="js_c1"
                                                                  >
                                                                    <tbody>
                                                                      <tr>
                                                                        <th></th>
                                                                        <th>
                                                                          Link
                                                                          Clicks
                                                                          on 8
                                                                          Oct
                                                                        </th>
                                                                        <th>
                                                                          Link
                                                                          Clicks
                                                                          on 9
                                                                          Oct
                                                                        </th>
                                                                        <th>
                                                                          Link
                                                                          Clicks
                                                                          on 10
                                                                          Oct
                                                                        </th>
                                                                        <th>
                                                                          Link
                                                                          Clicks
                                                                          on 11
                                                                          Oct
                                                                        </th>
                                                                        <th>
                                                                          Link
                                                                          Clicks
                                                                          on 12
                                                                          Oct
                                                                        </th>
                                                                        <th>
                                                                          Link
                                                                          Clicks
                                                                          on 13
                                                                          Oct
                                                                        </th>
                                                                        <th>
                                                                          Link
                                                                          Clicks
                                                                          on 14
                                                                          Oct
                                                                        </th>
                                                                      </tr>
                                                                      <tr>
                                                                        <td>
                                                                          Results
                                                                        </td>
                                                                        <td>
                                                                          10
                                                                        </td>
                                                                        <td>
                                                                          10
                                                                        </td>
                                                                        <td>
                                                                          8
                                                                        </td>
                                                                        <td>
                                                                          10
                                                                        </td>
                                                                        <td>
                                                                          8
                                                                        </td>
                                                                        <td>
                                                                          8
                                                                        </td>
                                                                        <td>
                                                                          6
                                                                        </td>
                                                                      </tr>
                                                                    </tbody>
                                                                  </table>
                                                                </div>
                                                              </div>
                                                            </div>
                                                          </div>
                                                        </div>
                                                        <div class="x78zum5 x2lwn1j xeuugli x2lah0s">
                                                          <div
                                                            class="x3oybdh xuxw1ft x1iknuni xw9jwym x1e2iszw xg0tal0 x1lliihq x1lcm9me x1yr5g0i xrt01vj x10y3i5r"
                                                            role="group"
                                                          >
                                                            <div
                                                              class="x3nfvp2 x193iq5w xxymvpz style-3oObG"
                                                              role="none"
                                                              id="style-3oObG"
                                                            >
                                                              <div
                                                                aria-busy="false"
                                                                class="x1i10hfl xjqpnuy xa49m3k xqeqjp1 x2hbi6w x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli x16tdsg8 xggy1nq x1ja2u2z x1t137rt x6s0dn4 x1ejq31n xd10rxx x1sy0etr x17r0tee x3nfvp2 xdl72j9 x1q0g3np x2lah0s x193iq5w x1n2onr6 x1hl2dhg x87ps6o xxymvpz xlh3980 xvmahel x1lku1pv x1g40iwv x1lcm9me x1yr5g0i xrt01vj x10y3i5r xo1l8bm xbsr9hj x1v911su x1y1aw1k xwib8y2 x1ye3gou xn6708d  style-omt6b"
                                                                role="button"
                                                                tabindex="0"
                                                                data-tracked="true"
                                                                data-clickable="1"
                                                                id="style-omt6b"
                                                              >
                                                                <span class="xmi5d70 x1fvot60 xxio538 x1heor9g xq9mrsl x1h4wwuj x1pd3egz xeuugli xh8yej3">
                                                                  <div class="x78zum5">
                                                                    <div
                                                                      class="x1qvwoe0 xjm9jq1 x1y332i5 xcwd3tp x1jyxor1 x39eecv x6ikm8r x10wlt62 x10l6tqk xuxw1ft x1i1rx1s"
                                                                      data-sscoverage-ignore="true"
                                                                    >
                                                                      View
                                                                      Charts
                                                                    </div>
                                                                    <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1hc1fzr x13dflua x6o7n8i xxziih7 x12w9bfk xl56j7k xh8yej3">
                                                                      <div
                                                                        class="x3nfvp2 x120ccyz x1heor9g x2lah0s x1c4vz4f"
                                                                        role="presentation"
                                                                      >
                                                                        <div
                                                                          class="xtwfq29 style-BBaiP"
                                                                          id="style-BBaiP"
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
                                                    </span>
                                                  </div>
                                                </div>
                                                <div
                                                  class="x3nfvp2 x193iq5w xxymvpz xw7yly9 style-e7CSw"
                                                  role="none"
                                                  id="style-e7CSw"
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
                                                            See All Campaigns
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </span>
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
                              </span>
                            </div>
                          </div>
                          <div></div>
                        </div>
                      </div>
                      <div
                        class="xkh2ocl xuy72oy x78zum5 x1c4vz4f xeuugli x2lah0s xh8yej3 style-tWeNR"
                        id="style-tWeNR"
                      >
                        <div class="x78zum5 xdt5ytf x2lwn1j xeuugli xh8yej3">
                          <div></div>
                          <div></div>
                          <div>
                            <div class="x1yztbdb x1n2onr6 xh8yej3">
                              <div class="x1cy8zhl x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x1jjk293">
                                <div
                                  aria-labelledby="js_bj"
                                  class="x1gzqxud x1lcm9me x1yr5g0i xrt01vj x10y3i5r xhgxa4x xy5ysw6 x1qkj6lk xn3walq xnvurfn xv1ta3e x1opv7go x1dtnpoi xibdhds xtnng9g xhvrwov x13k1m86 xwx4but x1cpjm7i xszcg87 x1hmns74 xkk1bqk x14d4353 xsxiz9q x1rmj1tg xchklzq x9f619 xc8icb0 x1n2onr6 x1pvq41x xhhp2wi x14q35kh x1wa3ocq x1n7iyjn x1s928wv x1wsn0xg x1j6awrg x162n7g1 x1m1drc7 x4eaejv xi4xitw x5yr21d xh8yej3"
                                  data-auto-logging-component-type="GeoCard"
                                >
                                  <div class="x78zum5 xdt5ytf x5yr21d xedcshv x1t2pt76 xh8yej3">
                                    <div class="x9f619 x78zum5 x2lah0s xh8yej3 xyamay9 x1l90r2v x1swvt13 x1pi30zi">
                                      <div class="x1iyjqo2 xeuugli">
                                        <div class="x1cy8zhl x78zum5 x1qughib x2lwn1j xeuugli">
                                          <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x15r7cj3 xr1yuqi x4ii5y1">
                                            <span>
                                              <img
                                                class="xsdox4t x1useyqa"
                                                alt="image"
                                                src="https://static.xx.fbcdn.net/rsrc.php/v3/yr/r/Jx0zvr3YN-K.png"
                                                width="60"
                                                height="60"
                                              />
                                            </span>
                                            <div
                                              aria-level="3"
                                              class="x1xqt7ti x1uxerd5 x1xlr1w8 xrohxju xbsr9hj xq9mrsl x1yc453h x1h4wwuj xeuugli"
                                              role="heading"
                                            >
                                              <span>
                                                You are testing 3 AI generation
                                                features
                                              </span>
                                            </div>
                                          </div>
                                          <div class="x9otpla x1n0m28w x1wsgfga xp7jhwk">
                                            <div
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
                                                        class="xtwfq29 style-Gqid5"
                                                        id="style-Gqid5"
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
                                    <div class="x9f619 x78zum5 x1iyjqo2 x5yr21d x2lwn1j x1n2onr6 xh8yej3">
                                      <div class="xw2csxc x1odjw0f xh8yej3 x18d9i69">
                                        <div class="xjm9jq1 xg01cxk x47corl xh8yej3 x1jyxor1"></div>
                                        <div class="x1d52u69 xktsk01">
                                          <div class="x78zum5 xdt5ytf x2lwn1j xeuugli">
                                            <span class="xmi5d70 x1fvot60 xo1l8bm xxio538 xbsr9hj xq9mrsl x1h4wwuj xeuugli">
                                              <span>
                                                You are opted into 3 AI
                                                generation tests. You can review
                                                more details or change your test
                                                settings at any time by visiting
                                                Advantage+ creative options in{" "}
                                                <strong>
                                                  Advertising settings
                                                </strong>
                                                .
                                              </span>
                                            </span>
                                            <div
                                              class="x3nfvp2 x193iq5w xxymvpz xw7yly9 x1yztbdb"
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
                                                        <span>
                                                          Review ad account
                                                          setup
                                                        </span>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </span>
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
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="xqtp20y x17qophe xib59rt xkrivgy xat24cr x1gryazu x1ap80js xexx8yu x6x52a7 x18d9i69 xxpdul3 x10l6tqk xds687c xhtitgo">
                      <div class="_5il"></div>
                    </div>
                  </div>
                </span>
              </div>
            </span>
            <div class="xixxii4 xjnlgov x1vw3jpx x1memqgq">
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;

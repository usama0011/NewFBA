import React, { useEffect, useState } from "react";
import "../styles/PaymentPage.css";
import axios from "axios";
import SideBar from "../components/SideBar";
const PaymentPage = () => {
  const [transactions, setTransactions] = useState([]);
  const [account, setAccount] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await axios.get(
          "https://facebookadsmangerserver.vercel.app/api/transactions"
        );
        setTransactions(response.data);
      } catch (err) {
        setError("Error fetching transactions");
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

    const loadData = async () => {
      await Promise.all([fetchTransactions(), fetchAccount()]);
      // Simulate 5 seconds loading time
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    };

    loadData();
  }, []);

  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100vh",
          backgroundImage: "linear-gradient(to top, #e6effb, #e9f5ef, #f6eef5)",
        }}
      >
        <h4 style={{ fontSize: "18px", marginBottom: "4px" }}>
          Billing & Payment
        </h4>
        <span style={{ marginBottom: "5px" }}>Take a moment...</span>
        <div
          style={{
            width: "18px",
            height: "18px",
            border: "5px solid #f3f3f3",
            borderTop: "5px solid dodgerblue",
            borderRadius: "50%",
            animation: "spin 1s linear infinite",
          }}
        ></div>
      </div>
    );
  }
  return (
    <div>
      <div
        class="_605a _4-u5 _61ve arial chrome webkit win x1 Locale_en_GB snipcss-RRXsI"
        dir="ltr"
        cz-shortcut-listen="true"
      >
        <div class="_li">
          <div class="_li" id="u_0_0_OO">
            <div
              id="u_0_1_ry"
              data-clickable="1"
              data-inputable="1"
              data-keydownable="1"
              data-keyupable="1"
              data-changeable="1"
              data-auto-logging-id="f3b4a057f57321"
              class=""
            >
              <span
                data-surface-wrapper="1"
                data-surface="/business_tool"
                data-auto-logging-id="fad28c3dc5898c"
                class="style-T4U8s"
                id="style-T4U8s"
              >
                <div class="_25b6 _3qn7 _61-0 _2fyi _1a9e">
                  <SideBar />
                  <div
                    style={{ marginLeft: "60px" }}
                    class="_6g3g style-9HYSj"
                    id="style-9HYSj"
                  >
                    <div class="">
                      <div class="_21op style-YeVeK" id="style-YeVeK">
                        <div style={{ height: "100vh" }} id="style-3eUam">
                          <div class="x2atdfe xb57i2i x1q594ok x5lxg6s x78zum5 xdt5ytf x1n2onr6 x1ja2u2z xw2csxc x7p5m3t x1odjw0f x1e4zzel x5yr21d">
                            <div class="x78zum5 xdt5ytf x1iyjqo2 x1n2onr6">
                              <div class="xexx8yu x4uap5 x18d9i69 xkhd6sd x9f619 x5yr21d xw2csxc x1odjw0f">
                                <div class="hidden_elem"></div>
                                <div class="_25b6 _3qn7 _61-0 _2fyh _3qnf">
                                  <span
                                    data-surface-wrapper="1"
                                    data-surface="/business_tool/billing_hub"
                                    data-auto-logging-id="f8523575ff631c"
                                    class="style-lZEMV"
                                    id="style-lZEMV"
                                  >
                                    <div class="style-pNiZw" id="style-pNiZw">
                                      <div class="">
                                        <div class="">
                                          <div class="x6s0dn4 x78zum5 xdt5ytf xozqiw3 x2lwn1j xeuugli x1iyjqo2 xs83m0k xavht8x xqui205 xqmxbcd x1hq5gj4 xmupa6y">
                                            <div class="x78zum5 xdt5ytf xozqiw3 x2lwn1j xeuugli x1iyjqo2 xs83m0k xavht8x xh8yej3">
                                              <div class="x78zum5 xdt5ytf xozqiw3 x2lwn1j xeuugli x1iyjqo2 xs83m0k x1kxxb1g">
                                                <div class="x1qjc9v5 x78zum5 x2lwn1j xeuugli">
                                                  <div class="x78zum5 x2lwn1j xeuugli x1c4vz4f x2lah0s x1h5jrl4">
                                                    <div class="xnq0rdo x65caj5 x1lq5wgf xgqcy7u x30kzoy x9jhf4c x6ikm8r x10wlt62">
                                                      <div class="x1gzqxud x13dflua xxziih7 x12w9bfk xavht8x x6ikm8r x10wlt62 x1h533et x9f619 xxrbq2n x87ps6o x78zum5 xdt5ytf x2lah0s x1y1aw1k xwib8y2 x5yr21d">
                                                        <div class="x1gzqxud x13dflua xxziih7 x12w9bfk xavht8x x6ikm8r x10wlt62 x1h533et x9f619 xxrbq2n x87ps6o x78zum5 xdt5ytf x2lah0s x1y1aw1k xwib8y2 x5yr21d snipcss-hNNRO">
                                                          <div class="xb57i2i x1q594ok x5lxg6s x78zum5 xdt5ytf x6ikm8r x1ja2u2z x1pq812k x1rohswg xfk6m8 x1yqm8si xjx87ck xx8ngbg xwo3gff x1n2onr6 x1oyok0e x1odjw0f x1e4zzel x5yr21d">
                                                            <div class="x78zum5 xdt5ytf x1iyjqo2 x1n2onr6">
                                                              <div class="x1kxxb1g">
                                                                <div
                                                                  class="x1n2onr6 x3oybdh"
                                                                  role="listitem"
                                                                >
                                                                  <div class="x10l6tqk x8knxv4 x3nfvp2 x1iyjqo2 x2lah0s x17qophe xds687c x13vifvy x1ey2m1c xurb0ha x1sxyh0">
                                                                    <div
                                                                      aria-labelledby="js_18"
                                                                      class="x1i10hfl x1qjc9v5 xjbqb8w xjqpnuy xa49m3k xqeqjp1 x2hbi6w x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk x78zum5 xdl72j9 xdt5ytf x2lah0s xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli xexx8yu x4uap5 x18d9i69 xkhd6sd x1n2onr6 x16tdsg8 x1hl2dhg xggy1nq x1ja2u2z x1t137rt x1iyjqo2"
                                                                      role="button"
                                                                      tabindex="0"
                                                                    >
                                                                      <div class="x78zum5 x1iyjqo2">
                                                                        <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1lcm9me x1yr5g0i xrt01vj x10y3i5r x1y1aw1k xwib8y2 xurb0ha x1sxyh0 xo1l8bm xbsr9hj xas4zb2">
                                                                          <div class="x78zum5 x1n2onr6 x2lah0s x6s0dn4 xl56j7k xvy4d1p xxk0z11">
                                                                            <div class="x3nfvp2">
                                                                              <i
                                                                                alt=""
                                                                                data-visualcompletion="css-img"
                                                                                class="img sp_obb_O-tJGBf sx_8e3115"
                                                                              ></i>
                                                                            </div>
                                                                          </div>
                                                                        </div>
                                                                      </div>
                                                                    </div>
                                                                  </div>
                                                                  <div class="x47corl x7elk82 x1779cjh xh6r515 x1vf8kge xurb0ha x1sxyh0 x9f619 x6ikm8r x10wlt62 x1h533et">
                                                                    <div
                                                                      class="x78zum5 x1iyjqo2"
                                                                      role="listitem"
                                                                    >
                                                                      <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 xeuugli x1iyjqo2 x19lwn94 x1lcm9me x1yr5g0i xrt01vj x10y3i5r x1y1aw1k xwib8y2 xurb0ha x1sxyh0 x1xlr1w8 x1qsmy5i x13dflua xxziih7 x12w9bfk x19991ni x1hc1fzr xjbqb8w xjwf9q1">
                                                                        <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94">
                                                                          <div class="x1rg5ohu x2lah0s xvy4d1p xxk0z11"></div>
                                                                          <div class="xeuugli">
                                                                            <div
                                                                              class="x1xqt7ti x1uxerd5 xrohxju xbsr9hj xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj x1fcty0u xeuugli"
                                                                              id="js_18"
                                                                            >
                                                                              Payment
                                                                              settings
                                                                            </div>
                                                                          </div>
                                                                        </div>
                                                                        <div class="x6s0dn4 x3nfvp2 x1q0g3np xozqiw3 x2lwn1j xeuugli x1c4vz4f x19lwn94 x2lah0s"></div>
                                                                      </div>
                                                                    </div>
                                                                  </div>
                                                                </div>
                                                                <div
                                                                  class="x1n2onr6 x3oybdh"
                                                                  role="listitem"
                                                                  aria-current="page"
                                                                >
                                                                  <div class="x10l6tqk x8knxv4 x3nfvp2 x1iyjqo2 x2lah0s x17qophe xds687c x13vifvy x1ey2m1c xurb0ha x1sxyh0">
                                                                    <div
                                                                      aria-labelledby="js_1a"
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
                                                                                class="img sp_BCSohYmDE5w sx_81b5de"
                                                                              ></i>
                                                                            </div>
                                                                          </div>
                                                                        </div>
                                                                      </div>
                                                                    </div>
                                                                  </div>
                                                                  <div class="x47corl x7elk82 x1779cjh xh6r515 x1vf8kge xurb0ha x1sxyh0 x9f619 x6ikm8r x10wlt62 x1h533et">
                                                                    <div
                                                                      class="x78zum5 x1iyjqo2"
                                                                      role="listitem"
                                                                    >
                                                                      <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 xeuugli x1iyjqo2 x19lwn94 x1lcm9me x1yr5g0i xrt01vj x10y3i5r x1y1aw1k xwib8y2 xurb0ha x1sxyh0 x1xlr1w8 x1qsmy5i x13dflua xxziih7 x12w9bfk x19991ni x1hc1fzr xjbqb8w xjwf9q1">
                                                                        <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94">
                                                                          <div class="x1rg5ohu x2lah0s xvy4d1p xxk0z11"></div>
                                                                          <div class="xeuugli">
                                                                            <div
                                                                              class="x1xqt7ti x1uxerd5 xrohxju x1heor9g xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj x117nqv4 xeuugli"
                                                                              id="js_1a"
                                                                            >
                                                                              Payment
                                                                              activity
                                                                            </div>
                                                                          </div>
                                                                        </div>
                                                                        <div class="x6s0dn4 x3nfvp2 x1q0g3np xozqiw3 x2lwn1j xeuugli x1c4vz4f x19lwn94 x2lah0s"></div>
                                                                      </div>
                                                                    </div>
                                                                  </div>
                                                                </div>
                                                              </div>
                                                            </div>
                                                            <div
                                                              class="x14nfmen x1s85apg x5yr21d xds687c xg01cxk x10l6tqk x13vifvy x1wsgiic x19991ni xwji4o3 x1kky2od x1sd63oq style-aNJx2"
                                                              data-visualcompletion="ignore"
                                                              data-thumb="1"
                                                              data-interactable="|mousedown|"
                                                              id="style-aNJx2"
                                                            ></div>
                                                            <div
                                                              class="x9f619 x1s85apg xds687c xexx8yu x18d9i69 x1e558r4 x150jy0e x47corl x10l6tqk x13vifvy x1n4smgl x19991ni xwji4o3 x1kky2od x1hc1fzr x1p6kkr5 style-ZCPR3"
                                                              data-visualcompletion="ignore"
                                                              data-thumb="1"
                                                              id="style-ZCPR3"
                                                            >
                                                              <div class="x1hwfnsy x1lcm9me x1yr5g0i xrt01vj x10y3i5r x5yr21d xh8yej3"></div>
                                                            </div>
                                                          </div>
                                                          <div>
                                                            <div class="xurb0ha x1sxyh0">
                                                              <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x13a6bvl">
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
                                                                          Collapse
                                                                        </div>
                                                                        <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1hc1fzr x13dflua x6o7n8i xxziih7 x12w9bfk xl56j7k xh8yej3">
                                                                          <div class="x3nfvp2 x2lah0s x1c4vz4f">
                                                                            <i
                                                                              alt=""
                                                                              data-visualcompletion="css-img"
                                                                              class="img sp_WgfOQJyOJI1 sx_27fe0e"
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
                                                    </div>
                                                  </div>
                                                  {/* Start from here */}
                                                  <div class="x78zum5 xdt5ytf xozqiw3 x2lwn1j xeuugli x1iyjqo2 xs83m0k x1kxxb1g snipcss-yBMtn">
                                                    <div class="x6s0dn4 x78zum5 x1q0g3np x1qughib xozqiw3 x2lwn1j xeuugli x1iyjqo2 xs83m0k x19lwn94 x5yr21d xod5an3">
                                                      <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 xs83m0k x1jjk293">
                                                        <div
                                                          aria-level="1"
                                                          class="x8t9es0 x1ldc4aq x1xlr1w8 x1cgboj8 x4hq6eo xq9mrsl x1yc453h x1h4wwuj xeuugli"
                                                          role="heading"
                                                        >
                                                          Payment activity
                                                        </div>
                                                      </div>
                                                      <div
                                                        class="x6s0dn4 x78zum5 x1nhvcw1 x19lwn94"
                                                        role="toolbar"
                                                      >
                                                        <div class="x1cy8zhl x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 xs83m0k x19lwn94">
                                                          <div>
                                                            <div>
                                                              <div
                                                                id="style-IDaXt"
                                                                class="style-IDaXt"
                                                              >
                                                                <div class="x1a2a7pz xh8yej3">
                                                                  <div class="xh8yej3">
                                                                    <div
                                                                      aria-busy="false"
                                                                      aria-expanded="false"
                                                                      aria-haspopup="listbox"
                                                                      aria-invalid="false"
                                                                      aria-labelledby="js_29"
                                                                      class="x1i10hfl x1qjc9v5 xjbqb8w xjqpnuy xa49m3k xqeqjp1 x2hbi6w x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x78zum5 xdl72j9 xdt5ytf x2lah0s xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli xexx8yu x4uap5 x18d9i69 xkhd6sd x1n2onr6 x16tdsg8 x1hl2dhg xggy1nq x1ja2u2z x1ypdohk xh8yej3 x1t137rt"
                                                                      id="js_30"
                                                                      role="combobox"
                                                                      tabindex="0"
                                                                    >
                                                                      <div class="x1n2onr6 xh8yej3">
                                                                        <div class="x6s0dn4 x78zum5 x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x178xt8z xm81vs4 xso031l xy80clv xb9moi8 xfth1om x21b0me xmls85d xhk9q7s x1otrzb0 x1i1ezom x1o6z2jb x1gzqxud x108nfp6 xm7lytj x1ykpatu xlu9dua x1w2lkzu">
                                                                          <div class=""></div>
                                                                          <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94">
                                                                            <div class="x6s0dn4 x78zum5 x1q0g3np x1a02dak x2lwn1j xeuugli x1iyjqo2 x19lwn94">
                                                                              <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94">
                                                                                <div class="xjbqb8w x972fbf xcfux6l x1qhh985 xm0m39n xdj266r x11i5rnm xat24cr x1mh8g0r x1t137rt xexx8yu x4uap5 x18d9i69 xkhd6sd xlyipyv xr4vacz x1gnnqk1 x108nfp6 x1urst0s x1glnyev x1ad04t7 x1ix68h3 x19gujb8 xni1clt x1tutvks xfrpkgu x15h3p50 x1gf4pb6 xh7izdl x10emqs4 x2yyzbt xu8dvwe x8t9es0 x1fvot60 xo1l8bm xxio538 x1iyjqo2 x6ikm8r x10wlt62">
                                                                                  <div
                                                                                    class="x8t9es0 x1fvot60 xo1l8bm xxio538 x108nfp6 xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj xeuugli"
                                                                                    id="js_29"
                                                                                  >
                                                                                    Tayyab
                                                                                    Rashid
                                                                                    {
                                                                                      account?.currentAccountname
                                                                                    }
                                                                                  </div>
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
                                                                        </div>
                                                                        <div class="xb9moi8 xfth1om x21b0me xmls85d xhk9q7s x1otrzb0 x1i1ezom x1o6z2jb x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x178xt8z xm81vs4 xso031l xy80clv x13dflua x6o7n8i xxziih7 x12w9bfk xg01cxk x47corl x10l6tqk x17qophe xds687c x13vifvy x1ey2m1c x6ikm8r x10wlt62 xnl74ce xmb4j5p xdx8kah xwmxa91 xmn8db3 x8lbu6m x2te4dl x1bs8fl3 xhhp2wi x14q35kh x1wa3ocq x1n7iyjn x1t0di37 x1tt7eqi xe25xm5 xsp6npd x1s928wv x1w3onc2 x1j6awrg x9obomg x1ryaxvv x1hvfe8t x1te75w5"></div>
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
                                                    <div class="x3h4tne xrsfl73 xixxii4 x1l2rt3b x1vjfegm">
                                                      <div class="xuk3077 x78zum5 xdt5ytf xozqiw3 x2lwn1j xeuugli x1iyjqo2 xs83m0k x1ov1sdl">
                                                        <div class="x1lq5wgf xgqcy7u x30kzoy x9jhf4c x10h3on">
                                                          <div
                                                            class="x3nfvp2 x193iq5w xxymvpz"
                                                            role="none"
                                                          >
                                                            <div
                                                              aria-busy="false"
                                                              class="x1i10hfl xjqpnuy xa49m3k xqeqjp1 x2hbi6w x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli x16tdsg8 xggy1nq x1ja2u2z x1t137rt x6s0dn4 x1ejq31n xd10rxx x1sy0etr x17r0tee x3nfvp2 xdl72j9 x1q0g3np x2lah0s x193iq5w x1n2onr6 x1hl2dhg x87ps6o xxymvpz xlh3980 xvmahel x1lku1pv xhk9q7s x1otrzb0 x1i1ezom x1o6z2jb xo1l8bm x140t73q xgyuhzn x1y1aw1k xwib8y2 x1ye3gou xn6708d"
                                                              role="button"
                                                              tabindex="0"
                                                            >
                                                              <span class="x8t9es0 x1fvot60 xxio538 x1heor9g xq9mrsl x1h4wwuj x1pd3egz xeuugli xh8yej3">
                                                                <div class="x78zum5">
                                                                  <div
                                                                    class="x1qvwoe0 xjm9jq1 x1y332i5 xcwd3tp x1jyxor1 x39eecv x6ikm8r x10wlt62 x10l6tqk xuxw1ft x1i1rx1s"
                                                                    data-sscoverage-ignore="true"
                                                                  >
                                                                    Open tour
                                                                    card
                                                                  </div>
                                                                  <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1hc1fzr x13dflua x6o7n8i xxziih7 x12w9bfk xl56j7k xh8yej3">
                                                                    <div
                                                                      class="x3nfvp2 x120ccyz x1heor9g x2lah0s x1c4vz4f"
                                                                      role="presentation"
                                                                    >
                                                                      <div
                                                                        class="xtwfq29 style-WyPNq"
                                                                        id="style-WyPNq"
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
                                                    <div class="x1gzqxud x1lq5wgf xgqcy7u x30kzoy x9jhf4c x1kmqopl x5yr21d xh8yej3">
                                                      <div class="x78zum5 xdt5ytf x5yr21d xedcshv x1t2pt76 xh8yej3">
                                                        <div class="x9f619 x78zum5 x1iyjqo2 x5yr21d x2lwn1j x1n2onr6 xh8yej3">
                                                          <div class="xw2csxc x1odjw0f xh8yej3 x18d9i69">
                                                            <div class="xjm9jq1 xg01cxk x47corl xh8yej3 x1jyxor1"></div>
                                                            <div class="x1iyjqo2 xs83m0k xdl72j9 x3igimt xedcshv x1t2pt76 xyamay9 x1l90r2v x1swvt13 x1pi30zi">
                                                              <div
                                                                class="x78zum5 xdmi676 x193iq5w x6ikm8r x10wlt62 x1n2onr6 x8t9es0 x1fvot60 xo1l8bm xxio538"
                                                                role="tablist"
                                                              >
                                                                <div
                                                                  aria-hidden="false"
                                                                  aria-label="Ad accounts"
                                                                  aria-selected="true"
                                                                  class="x1i10hfl xjqpnuy xa49m3k xqeqjp1 x2hbi6w x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xdl72j9 xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli x1n2onr6 x16tdsg8 x1hl2dhg xggy1nq x1ja2u2z x1t137rt x6s0dn4 x78zum5 x1q0g3np x2lah0s xl56j7k x1lku1pv x1g40iwv xhk9q7s x1otrzb0 x1i1ezom x1o6z2jb x1y1aw1k xwib8y2 x1ye3gou xn6708d x1xlr1w8 xwpu04d xlvp1be"
                                                                  role="tab"
                                                                  tabindex="0"
                                                                >
                                                                  <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 xs83m0k x19lwn94 xl56j7k">
                                                                    <div
                                                                      aria-hidden="true"
                                                                      class="x3nfvp2 xdt5ytf xs83m0k xeuugli x6ikm8r x10wlt62"
                                                                    >
                                                                      <span class="x6ikm8r x10wlt62 xlyipyv x8t9es0 x1fvot60 xxio538 x1heor9g xuxw1ft x2b8uid x117nqv4">
                                                                        Ad
                                                                        accounts
                                                                      </span>
                                                                      <span class="x8t9es0 x1fvot60 xo1l8bm xxio538 x108nfp6 xuxw1ft x2b8uid xqtp20y xlshs6z x6ikm8r x10wlt62 x87ps6o x47corl">
                                                                        Ad
                                                                        accounts
                                                                      </span>
                                                                      <span class="x8t9es0 x1fvot60 xxio538 x1heor9g xuxw1ft x2b8uid x117nqv4 xqtp20y xlshs6z x6ikm8r x10wlt62 x87ps6o x47corl">
                                                                        Ad
                                                                        accounts
                                                                      </span>
                                                                    </div>
                                                                  </div>
                                                                </div>
                                                                <div
                                                                  aria-hidden="false"
                                                                  aria-label="WhatsApp Business accounts"
                                                                  aria-selected="false"
                                                                  class="x1i10hfl xjqpnuy xa49m3k xqeqjp1 x2hbi6w x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xdl72j9 xe8uvvx xdj266r x11i5rnm xat24cr x2lwn1j xeuugli x1n2onr6 x16tdsg8 x1hl2dhg xggy1nq x1ja2u2z x1t137rt x6s0dn4 x78zum5 x1q0g3np x2lah0s xl56j7k x1lku1pv x1g40iwv xhk9q7s x1otrzb0 x1i1ezom x1o6z2jb x1y1aw1k xwib8y2 x1ye3gou xn6708d xo1l8bm x108nfp6 x1v911su x1i64zmx"
                                                                  role="tab"
                                                                  tabindex="0"
                                                                >
                                                                  <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 xs83m0k x19lwn94 xl56j7k">
                                                                    <div
                                                                      aria-hidden="true"
                                                                      class="x3nfvp2 xdt5ytf xs83m0k xeuugli x6ikm8r x10wlt62"
                                                                    >
                                                                      <span class="x6ikm8r x10wlt62 xlyipyv x8t9es0 x1fvot60 xo1l8bm xxio538 x108nfp6 xuxw1ft x2b8uid">
                                                                        WhatsApp
                                                                        Business
                                                                        accounts
                                                                      </span>
                                                                      <span class="x8t9es0 x1fvot60 xo1l8bm xxio538 x108nfp6 xuxw1ft x2b8uid xqtp20y xlshs6z x6ikm8r x10wlt62 x87ps6o x47corl">
                                                                        WhatsApp
                                                                        Business
                                                                        accounts
                                                                      </span>
                                                                      <span class="x8t9es0 x1fvot60 xxio538 x1heor9g xuxw1ft x2b8uid x117nqv4 xqtp20y xlshs6z x6ikm8r x10wlt62 x87ps6o x47corl">
                                                                        WhatsApp
                                                                        Business
                                                                        accounts
                                                                      </span>
                                                                    </div>
                                                                  </div>
                                                                </div>
                                                                <div
                                                                  aria-haspopup="true"
                                                                  aria-hidden="true"
                                                                  aria-label="More"
                                                                  class="x1i10hfl xjqpnuy xa49m3k xqeqjp1 x2hbi6w x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xdl72j9 xe8uvvx xdj266r x11i5rnm xat24cr x2lwn1j xeuugli x16tdsg8 x1hl2dhg xggy1nq x1ja2u2z x1t137rt x6s0dn4 x78zum5 x1q0g3np x2lah0s xl56j7k x1lku1pv x1g40iwv xhk9q7s x1otrzb0 x1i1ezom x1o6z2jb x1y1aw1k xwib8y2 x1ye3gou xn6708d xo1l8bm x108nfp6 x1v911su x10l6tqk x47corl x1i64zmx xlshs6z"
                                                                  role="button"
                                                                  tabindex="-1"
                                                                >
                                                                  <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 xs83m0k x19lwn94 xl56j7k">
                                                                    <div
                                                                      aria-hidden="true"
                                                                      class="x3nfvp2 xdt5ytf xs83m0k xeuugli x6ikm8r x10wlt62"
                                                                    >
                                                                      <span class="x6ikm8r x10wlt62 xlyipyv x8t9es0 x1fvot60 xo1l8bm xxio538 x108nfp6 xuxw1ft x2b8uid">
                                                                        More
                                                                      </span>
                                                                      <span class="x8t9es0 x1fvot60 xo1l8bm xxio538 x108nfp6 xuxw1ft x2b8uid xqtp20y xlshs6z x6ikm8r x10wlt62 x87ps6o x47corl">
                                                                        More
                                                                      </span>
                                                                      <span class="x8t9es0 x1fvot60 xxio538 x1heor9g xuxw1ft x2b8uid x117nqv4 xqtp20y xlshs6z x6ikm8r x10wlt62 x87ps6o x47corl">
                                                                        More
                                                                      </span>
                                                                    </div>
                                                                    <div
                                                                      class="x3nfvp2 x120ccyz x1heor9g"
                                                                      role="presentation"
                                                                    >
                                                                      <div
                                                                        class="xtwfq29 style-o6nEh"
                                                                        id="style-o6nEh"
                                                                      ></div>
                                                                    </div>
                                                                  </div>
                                                                </div>
                                                              </div>
                                                            </div>
                                                            <div class="x1iyjqo2 xs83m0k xdl72j9 x3igimt xedcshv x1t2pt76 xyamay9 x1l90r2v x1swvt13 x1pi30zi x178xt8z x13fuv20 xb9moi8 xfth1om x21b0me xmls85d">
                                                              <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 xs83m0k x19lwn94">
                                                                <div class="x78zum5 xdt5ytf xozqiw3 x2lwn1j xeuugli x1iyjqo2 xs83m0k xyqj3jm">
                                                                  <span
                                                                    style={{
                                                                      textAlign:
                                                                        "left",
                                                                    }}
                                                                    class="x8t9es0 x1fvot60 xo1l8bm xxio538 x108nfp6 xq9mrsl x1h4wwuj xeuugli"
                                                                  >
                                                                    Ad account
                                                                  </span>
                                                                  <div
                                                                    aria-level="1"
                                                                    class="x8t9es0 x1ldc4aq x1xlr1w8 x1cgboj8 x4hq6eo xq9mrsl x1yc453h x1h4wwuj xeuugli"
                                                                    role="heading"
                                                                  >
                                                                    Hackta
                                                                    LLC(1387295665246598)
                                                                  </div>
                                                                </div>
                                                                <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 xs83m0k x1jjk293">
                                                                  <div class="xuk3077 x78zum5 xdt5ytf xozqiw3 x2lwn1j xeuugli x1iyjqo2 xs83m0k xyqj3jm">
                                                                    <div class="x1cy8zhl x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 xs83m0k x65s2av">
                                                                      <span class="x8t9es0 x1fvot60 xo1l8bm xxio538 x108nfp6 xq9mrsl x1h4wwuj xeuugli">
                                                                        Current
                                                                        balance
                                                                      </span>
                                                                      <div class="x1cy8zhl x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 xs83m0k x19lwn94 x1gslohp">
                                                                        <div class="x1rg5ohu x67bb7w">
                                                                          <i
                                                                            alt=""
                                                                            data-visualcompletion="css-img"
                                                                            class="img sp_fgTnBUGtb85 sx_d60d89"
                                                                          ></i>
                                                                        </div>
                                                                      </div>
                                                                    </div>
                                                                    <div
                                                                      aria-level="1"
                                                                      class="x8t9es0 x1ldc4aq x1xlr1w8 x1cgboj8 x4hq6eo xq9mrsl x1yc453h x1h4wwuj xeuugli"
                                                                      role="heading"
                                                                    >
                                                                      $12,344.22
                                                                    </div>
                                                                  </div>
                                                                  <div
                                                                    class="x3nfvp2 x193iq5w xxymvpz"
                                                                    role="none"
                                                                  >
                                                                    <div
                                                                      aria-busy="false"
                                                                      class="x1i10hfl xjqpnuy xa49m3k xqeqjp1 x2hbi6w x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli x16tdsg8 xggy1nq x1ja2u2z x1t137rt x6s0dn4 x1ejq31n xd10rxx x1sy0etr x17r0tee x3nfvp2 xdl72j9 x1q0g3np x2lah0s x193iq5w x1n2onr6 x1hl2dhg x87ps6o xxymvpz xlh3980 xvmahel x1lku1pv xhk9q7s x1otrzb0 x1i1ezom x1o6z2jb x1xlr1w8 x140t73q xb57al4 x1y1aw1k xwib8y2 x1swvt13 x1pi30zi"
                                                                      role="button"
                                                                      tabindex="0"
                                                                    >
                                                                      <span class="x8t9es0 x1fvot60 xxio538 x1heor9g xq9mrsl x1h4wwuj x1pd3egz xeuugli xh8yej3">
                                                                        <div class="x78zum5">
                                                                          <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1hc1fzr x13dflua x6o7n8i xxziih7 x12w9bfk xl56j7k xh8yej3">
                                                                            <div class="x8t9es0 x1fvot60 xxio538 x1heor9g xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj x1pd3egz xeuugli">
                                                                              Pay
                                                                              now
                                                                            </div>
                                                                          </div>
                                                                        </div>
                                                                      </span>
                                                                    </div>
                                                                  </div>
                                                                </div>
                                                              </div>
                                                            </div>
                                                            <div>
                                                              <div class="x1iyjqo2 xs83m0k xdl72j9 x3igimt xedcshv x1t2pt76 xyamay9 x1l90r2v x1swvt13 x1pi30zi x178xt8z x13fuv20 xb9moi8 xfth1om x21b0me xmls85d">
                                                                <div class="x1cy8zhl x78zum5 x1q0g3np xaw8158 xozqiw3 x2lwn1j xeuugli x1iyjqo2 xs83m0k x1jjk293">
                                                                  <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 xs83m0k x1jjk293">
                                                                    <div
                                                                      aria-busy="false"
                                                                      aria-controls="js_1f"
                                                                      class="x1i10hfl xjqpnuy xa49m3k xqeqjp1 x2hbi6w x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xe8uvvx x11i5rnm x1mh8g0r x2lwn1j xeuugli x16tdsg8 xggy1nq x1ja2u2z x1t137rt x6s0dn4 x1ejq31n xd10rxx x1sy0etr x17r0tee x3nfvp2 xdl72j9 x1q0g3np x2lah0s x193iq5w x1n2onr6 x1hl2dhg x87ps6o xxymvpz xlh3980 xvmahel x1lku1pv xhk9q7s x1otrzb0 x1i1ezom x1o6z2jb xo1l8bm x108nfp6 xas4zb2 x1y1aw1k xwib8y2 x1swvt13 xn6708d x1xmf6yo x1e56ztr"
                                                                      role="button"
                                                                      tabindex="0"
                                                                    >
                                                                      <span class="x8t9es0 x1fvot60 xxio538 x1heor9g xq9mrsl x1h4wwuj x1pd3egz xeuugli xh8yej3">
                                                                        <div class="x78zum5">
                                                                          <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1hc1fzr x13dflua x6o7n8i xxziih7 x12w9bfk x1nhvcw1 xh8yej3">
                                                                            <div class="x8t9es0 x1fvot60 xxio538 x1heor9g xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj x1pd3egz xeuugli x1iyjqo2">
                                                                              Transactions
                                                                            </div>
                                                                            <div
                                                                              class="x3nfvp2 x120ccyz x1heor9g x2lah0s x1c4vz4f x1gryazu"
                                                                              role="presentation"
                                                                            >
                                                                              <div
                                                                                class="xtwfq29 style-f8KKs"
                                                                                id="style-f8KKs"
                                                                              ></div>
                                                                            </div>
                                                                          </div>
                                                                        </div>
                                                                      </span>
                                                                    </div>
                                                                    <div class="xh8yej3">
                                                                      <div class="x1cy8zhl x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 xs83m0k x19lwn94 x1xmf6yo x1e56ztr">
                                                                        <div class="x78zum5 xdt5ytf xdl72j9 x1iyjqo2 xeuugli x1n2onr6 xh8yej3">
                                                                          <div
                                                                            class="x1qvwoe0 xjm9jq1 x1y332i5 xcwd3tp x1jyxor1 x39eecv x6ikm8r x10wlt62 x10l6tqk xuxw1ft x1i1rx1s style-2cjg3"
                                                                            data-sscoverage-ignore="true"
                                                                            id="style-2cjg3"
                                                                          >
                                                                            <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94">
                                                                              <div class="x1iyjqo2">
                                                                                <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x65s2av">
                                                                                  <label
                                                                                    id="js_1r"
                                                                                    for="js_1q"
                                                                                  >
                                                                                    <span class="x8t9es0 x1fvot60 xxio538 x4hq6eo xq9mrsl x1mzt3pk x1vvkbs x13faqbe x117nqv4 xeuugli">
                                                                                      Search
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
                                                                                            <div
                                                                                              class="x3nfvp2 x120ccyz x4hq6eo"
                                                                                              role="presentation"
                                                                                            >
                                                                                              <div
                                                                                                class="xtwfq29 style-iqG1D"
                                                                                                id="style-iqG1D"
                                                                                              ></div>
                                                                                            </div>
                                                                                          </div>
                                                                                          <input
                                                                                            placeholder="Search by transaction ID..."
                                                                                            id="js_1q"
                                                                                            aria-labelledby="js_1r"
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
                                                                        <div
                                                                          class="x3nfvp2 x193iq5w xxymvpz"
                                                                          role="none"
                                                                        >
                                                                          <div
                                                                            aria-busy="false"
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
                                                                                  Advanced
                                                                                  filters
                                                                                </div>
                                                                                <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1hc1fzr x13dflua x6o7n8i xxziih7 x12w9bfk xl56j7k xh8yej3">
                                                                                  <div
                                                                                    class="x3nfvp2 x120ccyz x1heor9g x2lah0s x1c4vz4f"
                                                                                    role="presentation"
                                                                                  >
                                                                                    <div
                                                                                      class="xtwfq29 style-K4HxR"
                                                                                      id="style-K4HxR"
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
                                                                  <div
                                                                    aria-busy="false"
                                                                    class="x1i10hfl xjqpnuy xa49m3k xqeqjp1 x2hbi6w x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xe8uvvx x11i5rnm x1mh8g0r x2lwn1j xeuugli x16tdsg8 xggy1nq x1ja2u2z x1t137rt x6s0dn4 x1ejq31n xd10rxx x1sy0etr x17r0tee x3nfvp2 xdl72j9 x1q0g3np x2lah0s x193iq5w x1n2onr6 x1hl2dhg x87ps6o xxymvpz xlh3980 xvmahel x1lku1pv xhk9q7s x1otrzb0 x1i1ezom x1o6z2jb xo1l8bm x108nfp6 xas4zb2 x1y1aw1k xwib8y2 x1ye3gou xn6708d x1xmf6yo x1e56ztr"
                                                                    role="button"
                                                                    tabindex="0"
                                                                  >
                                                                    <span class="x8t9es0 x1fvot60 xxio538 x1heor9g xq9mrsl x1h4wwuj x1pd3egz xeuugli xh8yej3">
                                                                      <div class="x78zum5">
                                                                        <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1hc1fzr x13dflua x6o7n8i xxziih7 x12w9bfk x1nhvcw1 xh8yej3">
                                                                          <div
                                                                            class="x3nfvp2 x120ccyz x1heor9g x2lah0s x1c4vz4f"
                                                                            role="presentation"
                                                                          >
                                                                            <div
                                                                              class="xtwfq29 style-nYMg3"
                                                                              id="style-nYMg3"
                                                                            ></div>
                                                                          </div>
                                                                          <div class="x8t9es0 x1fvot60 xxio538 x1heor9g xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj x1pd3egz xeuugli x1iyjqo2">
                                                                            01
                                                                            Jul
                                                                            2024
                                                                            - 30
                                                                            Aug
                                                                            2024
                                                                          </div>
                                                                          <div
                                                                            class="x3nfvp2 x120ccyz x1heor9g x2lah0s x1c4vz4f x1gryazu"
                                                                            role="presentation"
                                                                          >
                                                                            <div
                                                                              class="xtwfq29 style-SN8lF"
                                                                              id="style-SN8lF"
                                                                            ></div>
                                                                          </div>
                                                                        </div>
                                                                      </div>
                                                                    </span>
                                                                  </div>
                                                                </div>
                                                              </div>
                                                              <div class="x1iyjqo2 xs83m0k xdl72j9 x3igimt xedcshv x1t2pt76 xyamay9 x1l90r2v x1swvt13 x1pi30zi x178xt8z x13fuv20 xb9moi8 xfth1om x21b0me xmls85d">
                                                                <div class="x78zum5 x15zctf7 x2lwn1j xeuugli">
                                                                  <div
                                                                    aria-busy="false"
                                                                    aria-controls="js_2z"
                                                                    class="x1i10hfl xjqpnuy xa49m3k xqeqjp1 x2hbi6w x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli x16tdsg8 xggy1nq x1ja2u2z x1t137rt x6s0dn4 x1ejq31n xd10rxx x1sy0etr x17r0tee x3nfvp2 xdl72j9 x1q0g3np x2lah0s x193iq5w x1n2onr6 x1hl2dhg x87ps6o xxymvpz xlh3980 xvmahel x1lku1pv xhk9q7s x1otrzb0 x1i1ezom x1o6z2jb xo1l8bm x108nfp6 xas4zb2 x1y1aw1k xwib8y2 x1swvt13 xn6708d"
                                                                    role="button"
                                                                    tabindex="0"
                                                                  >
                                                                    <span class="x8t9es0 x1fvot60 xxio538 x1heor9g xq9mrsl x1h4wwuj x1pd3egz xeuugli xh8yej3">
                                                                      <div class="x78zum5">
                                                                        <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1hc1fzr x13dflua x6o7n8i xxziih7 x12w9bfk x1nhvcw1 xh8yej3">
                                                                          <div class="x8t9es0 x1fvot60 xxio538 x1heor9g xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj x1pd3egz xeuugli x1iyjqo2">
                                                                            Download
                                                                          </div>
                                                                          <div
                                                                            class="x3nfvp2 x120ccyz x1heor9g x2lah0s x1c4vz4f x1gryazu"
                                                                            role="presentation"
                                                                          >
                                                                            <div
                                                                              class="xtwfq29 style-87jMn"
                                                                              id="style-87jMn"
                                                                            ></div>
                                                                          </div>
                                                                        </div>
                                                                      </div>
                                                                    </span>
                                                                  </div>
                                                                </div>
                                                              </div>
                                                              <hr class="xjbqb8w xso031l x1q0q8m5 xqtp20y xb9moi8 xfth1om x21b0me xmls85d xdj266r x11i5rnm x1mh8g0r x1e56ztr" />
                                                              <div class="x78zum5 x1iyjqo2 x193iq5w xmz0i5r xeaf4i8 x1gzqxud">
                                                                <div class="x1iyjqo2 x1n2onr6 x193iq5w xmz0i5r x1ja2u2z">
                                                                  <table
                                                                    aria-label="Transactions"
                                                                    class="x1lliihq xh8yej3 x5yr21d xw2csxc x1odjw0f x1mzt3pk"
                                                                    role="grid"
                                                                  >
                                                                    <thead class="x1lliihq xh8yej3 x1vjfegm x7wzq59 x13vifvy x1pshirs">
                                                                      <tr
                                                                        class="x1s3fex4 x1uqg51p style-v19X4"
                                                                        role="row"
                                                                        id="style-v19X4"
                                                                      >
                                                                        <th
                                                                          aria-colindex="1"
                                                                          class="x1pd3egz x1n2onr6 x1yc453h x78zum5 x6s0dn4 x1nhvcw1 xb9moi8 xfth1om x21b0me xmls85d x1gzqxud x1y1aw1k xwib8y2 x1swvt13 x1pi30zi style-iKIBo"
                                                                          role="columnheader"
                                                                          tabindex="0"
                                                                          id="style-iKIBo"
                                                                        >
                                                                          <div class="x1iyjqo2 xh8yej3 xmz0i5r">
                                                                            <div class="xeuugli x6ikm8r x10wlt62">
                                                                              <div class="x1rg5ohu x193iq5w xxymvpz">
                                                                                <div
                                                                                  aria-level="4"
                                                                                  class="x8t9es0 x1fvot60 xxio538 x4hq6eo xq9mrsl x1yc453h x1mzt3pk x1vvkbs x13faqbe x117nqv4 xeuugli x104kibb x6ikm8r x10wlt62 x1ua5tub style-Pg2bi"
                                                                                  role="heading"
                                                                                  id="style-Pg2bi"
                                                                                >
                                                                                  Transaction
                                                                                  ID
                                                                                </div>
                                                                              </div>
                                                                            </div>
                                                                          </div>
                                                                        </th>
                                                                        <th
                                                                          aria-colindex="2"
                                                                          class="x1pd3egz x1n2onr6 x1yc453h x78zum5 x6s0dn4 x1nhvcw1 xb9moi8 xfth1om x21b0me xmls85d x1gzqxud x1y1aw1k xwib8y2 x1swvt13 x1pi30zi style-NI9T7"
                                                                          role="columnheader"
                                                                          tabindex="0"
                                                                          id="style-NI9T7"
                                                                        >
                                                                          <div class="x1iyjqo2 xh8yej3 xmz0i5r">
                                                                            <div class="xeuugli x6ikm8r x10wlt62">
                                                                              <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 xs83m0k x19lwn94">
                                                                                <span class="xs83m0k xeuugli">
                                                                                  <div class="x1rg5ohu x193iq5w xxymvpz">
                                                                                    <div
                                                                                      aria-level="4"
                                                                                      class="x8t9es0 x1fvot60 xxio538 x4hq6eo xq9mrsl x1yc453h x1mzt3pk x1vvkbs x13faqbe x117nqv4 xeuugli x104kibb x6ikm8r x10wlt62 x1ua5tub style-yEaKp"
                                                                                      role="heading"
                                                                                      id="style-yEaKp"
                                                                                    >
                                                                                      Date
                                                                                    </div>
                                                                                  </div>
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
                                                                                            class="xtwfq29 style-NpWCP"
                                                                                            id="style-NpWCP"
                                                                                          ></div>
                                                                                        </div>
                                                                                      </div>
                                                                                    </div>
                                                                                  </div>
                                                                                </div>
                                                                              </div>
                                                                            </div>
                                                                          </div>
                                                                        </th>
                                                                        <th
                                                                          aria-colindex="3"
                                                                          class="x1pd3egz x1n2onr6 x1yc453h x78zum5 x6s0dn4 x1nhvcw1 xb9moi8 xfth1om x21b0me xmls85d x1gzqxud x1y1aw1k xwib8y2 x1swvt13 x1pi30zi style-gx3V3"
                                                                          role="columnheader"
                                                                          tabindex="0"
                                                                          id="style-gx3V3"
                                                                        >
                                                                          <div class="x1iyjqo2 xh8yej3 xmz0i5r">
                                                                            <div class="xeuugli x6ikm8r x10wlt62">
                                                                              <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 xs83m0k x19lwn94">
                                                                                <span class="xs83m0k xeuugli">
                                                                                  <div class="x1rg5ohu x193iq5w xxymvpz">
                                                                                    <div
                                                                                      aria-level="4"
                                                                                      class="x8t9es0 x1fvot60 xxio538 x4hq6eo xq9mrsl x1yc453h x1mzt3pk x1vvkbs x13faqbe x117nqv4 xeuugli x104kibb x6ikm8r x10wlt62 x1ua5tub style-YAnQq"
                                                                                      role="heading"
                                                                                      id="style-YAnQq"
                                                                                    >
                                                                                      Amount
                                                                                    </div>
                                                                                  </div>
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
                                                                                            class="xtwfq29 style-58cnb"
                                                                                            id="style-58cnb"
                                                                                          ></div>
                                                                                        </div>
                                                                                      </div>
                                                                                    </div>
                                                                                  </div>
                                                                                </div>
                                                                              </div>
                                                                            </div>
                                                                          </div>
                                                                        </th>
                                                                        <th
                                                                          aria-colindex="4"
                                                                          class="x1pd3egz x1n2onr6 x1yc453h x78zum5 x6s0dn4 x1nhvcw1 xb9moi8 xfth1om x21b0me xmls85d x1gzqxud x1y1aw1k xwib8y2 x1swvt13 x1pi30zi style-e4qbk"
                                                                          role="columnheader"
                                                                          tabindex="0"
                                                                          id="style-e4qbk"
                                                                        >
                                                                          <div class="x1iyjqo2 xh8yej3 xmz0i5r">
                                                                            <div class="xeuugli x6ikm8r x10wlt62">
                                                                              <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 xs83m0k x19lwn94">
                                                                                <span class="xs83m0k xeuugli">
                                                                                  <div class="x1rg5ohu x193iq5w xxymvpz">
                                                                                    <div
                                                                                      aria-level="4"
                                                                                      class="x8t9es0 x1fvot60 xxio538 x4hq6eo xq9mrsl x1yc453h x1mzt3pk x1vvkbs x13faqbe x117nqv4 xeuugli x104kibb x6ikm8r x10wlt62 x1ua5tub style-xZeLk"
                                                                                      role="heading"
                                                                                      id="style-xZeLk"
                                                                                    >
                                                                                      Payment
                                                                                      method
                                                                                    </div>
                                                                                  </div>
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
                                                                                            class="xtwfq29 style-csvel"
                                                                                            id="style-csvel"
                                                                                          ></div>
                                                                                        </div>
                                                                                      </div>
                                                                                    </div>
                                                                                  </div>
                                                                                </div>
                                                                              </div>
                                                                            </div>
                                                                          </div>
                                                                        </th>
                                                                        <th
                                                                          aria-colindex="5"
                                                                          class="x1pd3egz x1n2onr6 x1yc453h x78zum5 x6s0dn4 x1nhvcw1 xb9moi8 xfth1om x21b0me xmls85d x1gzqxud x1y1aw1k xwib8y2 x1swvt13 x1pi30zi style-8GDNk"
                                                                          role="columnheader"
                                                                          tabindex="0"
                                                                          id="style-8GDNk"
                                                                        >
                                                                          <div class="x1iyjqo2 xh8yej3 xmz0i5r">
                                                                            <div class="xeuugli x6ikm8r x10wlt62">
                                                                              <div class="x1rg5ohu x193iq5w xxymvpz">
                                                                                <div
                                                                                  aria-level="4"
                                                                                  class="x8t9es0 x1fvot60 xxio538 x4hq6eo xq9mrsl x1yc453h x1mzt3pk x1vvkbs x13faqbe x117nqv4 xeuugli x104kibb x6ikm8r x10wlt62 x1ua5tub style-jFc6W"
                                                                                  role="heading"
                                                                                  id="style-jFc6W"
                                                                                >
                                                                                  Payment
                                                                                  status
                                                                                </div>
                                                                              </div>
                                                                            </div>
                                                                          </div>
                                                                        </th>
                                                                        <th
                                                                          aria-colindex="6"
                                                                          class="x1pd3egz x1n2onr6 x1yc453h x78zum5 x6s0dn4 x1nhvcw1 xb9moi8 xfth1om x21b0me xmls85d x1gzqxud x1y1aw1k xwib8y2 x1swvt13 x1pi30zi style-yX4HX"
                                                                          role="columnheader"
                                                                          tabindex="0"
                                                                          id="style-yX4HX"
                                                                        >
                                                                          <div class="x1iyjqo2 xh8yej3 xmz0i5r">
                                                                            <div class="xeuugli x6ikm8r x10wlt62">
                                                                              <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 xs83m0k x19lwn94">
                                                                                <span class="xs83m0k xeuugli">
                                                                                  <div class="x1rg5ohu x193iq5w xxymvpz">
                                                                                    <div
                                                                                      aria-level="4"
                                                                                      class="x8t9es0 x1fvot60 xxio538 x4hq6eo xq9mrsl x1yc453h x1mzt3pk x1vvkbs x13faqbe x117nqv4 xeuugli x104kibb x6ikm8r x10wlt62 x1ua5tub style-aAABl"
                                                                                      role="heading"
                                                                                      id="style-aAABl"
                                                                                    >
                                                                                      VAT
                                                                                      invoice
                                                                                      ID
                                                                                    </div>
                                                                                  </div>
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
                                                                                            class="xtwfq29 style-OGUlz"
                                                                                            id="style-OGUlz"
                                                                                          ></div>
                                                                                        </div>
                                                                                      </div>
                                                                                    </div>
                                                                                  </div>
                                                                                </div>
                                                                              </div>
                                                                            </div>
                                                                          </div>
                                                                        </th>
                                                                        <th
                                                                          aria-colindex="7"
                                                                          class="x1pd3egz x1n2onr6 x1yc453h x78zum5 x6s0dn4 x1nhvcw1 xb9moi8 xfth1om x21b0me xmls85d x1gzqxud x1y1aw1k xwib8y2 x1swvt13 x1pi30zi style-X6Vx9"
                                                                          role="columnheader"
                                                                          tabindex="0"
                                                                          id="style-X6Vx9"
                                                                        >
                                                                          <div class="x1iyjqo2 xh8yej3 xmz0i5r">
                                                                            <div class="xeuugli x6ikm8r x10wlt62">
                                                                              <div class="x1rg5ohu x193iq5w xxymvpz">
                                                                                <div
                                                                                  aria-level="4"
                                                                                  class="x8t9es0 x1fvot60 xxio538 x4hq6eo xq9mrsl x1yc453h x1mzt3pk x1vvkbs x13faqbe x117nqv4 xeuugli x104kibb x6ikm8r x10wlt62 x1ua5tub style-s6RFO"
                                                                                  role="heading"
                                                                                  id="style-s6RFO"
                                                                                >
                                                                                  Action
                                                                                </div>
                                                                              </div>
                                                                            </div>
                                                                          </div>
                                                                        </th>
                                                                      </tr>
                                                                    </thead>
                                                                    <tbody class="x1lliihq xh8yej3 x1n2onr6 x1ja2u2z">
                                                                      {transactions?.map(
                                                                        (
                                                                          item
                                                                        ) => (
                                                                          <tr
                                                                            class="xb9moi8 xfth1om x21b0me xmls85d xso031l x1q0q8m5 x9f619 style-X3i3i"
                                                                            role="row"
                                                                            id="style-X3i3i"
                                                                          >
                                                                            <td
                                                                              aria-colindex="1"
                                                                              class="x1n2onr6 x1yc453h x78zum5 x1nhvcw1 xb9moi8 xfth1om x21b0me xmls85d x1gzqxud x108nfp6 x8t9es0 x1fvot60 xo1l8bm xxio538 xyamay9 x1pi30zi x1l90r2v x1swvt13 x6s0dn4 style-BvBVj"
                                                                              role="gridcell"
                                                                              tabindex="0"
                                                                              id="style-BvBVj"
                                                                            >
                                                                              <div class="x1iyjqo2 xh8yej3 xmz0i5r">
                                                                                <div>
                                                                                  <a
                                                                                    class="xt0psk2 x1hl2dhg xt0b8zv x8t9es0 x1fvot60 xxio538 xjnfcd9 xq9mrsl x1yc453h x1h4wwuj x1fcty0u"
                                                                                    target="_blank"
                                                                                    href="#"
                                                                                  >
                                                                                    {
                                                                                      item?.TransactionID
                                                                                    }
                                                                                  </a>
                                                                                </div>
                                                                              </div>
                                                                            </td>
                                                                            <td
                                                                              aria-colindex="2"
                                                                              class="x1n2onr6 x1yc453h x78zum5 x1nhvcw1 xb9moi8 xfth1om x21b0me xmls85d x1gzqxud x108nfp6 x8t9es0 x1fvot60 xo1l8bm xxio538 xyamay9 x1pi30zi x1l90r2v x1swvt13 x6s0dn4 style-FMneT"
                                                                              role="gridcell"
                                                                              tabindex="0"
                                                                              id="style-FMneT"
                                                                            >
                                                                              <div class="x1iyjqo2 xh8yej3 xmz0i5r">
                                                                                <span class="x8t9es0 x1fvot60 xo1l8bm xxio538 x108nfp6 xq9mrsl x1h4wwuj xeuugli">
                                                                                  {
                                                                                    item?.Date
                                                                                  }
                                                                                </span>
                                                                              </div>
                                                                            </td>
                                                                            <td
                                                                              aria-colindex="3"
                                                                              class="x1n2onr6 x1yc453h x78zum5 x1nhvcw1 xb9moi8 xfth1om x21b0me xmls85d x1gzqxud x108nfp6 x8t9es0 x1fvot60 xo1l8bm xxio538 xyamay9 x1pi30zi x1l90r2v x1swvt13 x6s0dn4 style-FFoY8"
                                                                              role="gridcell"
                                                                              tabindex="0"
                                                                              id="style-FFoY8"
                                                                            >
                                                                              <div class="x1iyjqo2 xh8yej3 xmz0i5r">
                                                                                <span class="x8t9es0 x1fvot60 xo1l8bm xxio538 x108nfp6 xq9mrsl x1h4wwuj xeuugli">
                                                                                  {
                                                                                    item?.Amount
                                                                                  }
                                                                                </span>
                                                                              </div>
                                                                            </td>
                                                                            <td
                                                                              aria-colindex="4"
                                                                              class="x1n2onr6 x1yc453h x78zum5 x1nhvcw1 xb9moi8 xfth1om x21b0me xmls85d x1gzqxud x108nfp6 x8t9es0 x1fvot60 xo1l8bm xxio538 xyamay9 x1pi30zi x1l90r2v x1swvt13 x6s0dn4 style-FdKoK"
                                                                              role="gridcell"
                                                                              tabindex="0"
                                                                              id="style-FdKoK"
                                                                            >
                                                                              <div class="x1iyjqo2 xh8yej3 xmz0i5r">
                                                                                <div class="x6s0dn4 x78zum5 x1nhvcw1">
                                                                                  <div class="xl010v5 x1gslohp">
                                                                                    <img
                                                                                      src="https://static.xx.fbcdn.net/rsrc.php/v3/y7/r/gCsiyENN5zZ.png?_nc_eui2=AeHLUbMNoQ88YPZEOMsGfTU6vuJ6vQ-YpFm-4nq9D5ikWRrNQz_P-aAT6soN2Rhc9fRK086-aZgg4LLPx07AWcLA"
                                                                                      alt=""
                                                                                      class="img"
                                                                                    />
                                                                                  </div>
                                                                                  <div class="xeuugli">
                                                                                    <div class="x8t9es0 x1fvot60 xo1l8bm xxio538 x108nfp6 xq9mrsl x1h4wwuj xeuugli">
                                                                                      MasterCard&nbsp;·&nbsp;5649
                                                                                    </div>
                                                                                    <div class="x8t9es0 xw23nyj x63nzvj x4hq6eo xq9mrsl x1h4wwuj x1fcty0u xeuugli">
                                                                                      {
                                                                                        item?.Paymentmethod
                                                                                      }
                                                                                    </div>
                                                                                  </div>
                                                                                </div>
                                                                              </div>
                                                                            </td>
                                                                            <td
                                                                              aria-colindex="5"
                                                                              class="x1n2onr6 x1yc453h x78zum5 x1nhvcw1 xb9moi8 xfth1om x21b0me xmls85d x1gzqxud x108nfp6 x8t9es0 x1fvot60 xo1l8bm xxio538 xyamay9 x1pi30zi x1l90r2v x1swvt13 x6s0dn4 style-Zaj7G"
                                                                              role="gridcell"
                                                                              tabindex="0"
                                                                              id="style-Zaj7G"
                                                                            >
                                                                              <div class="x1iyjqo2 xh8yej3 xmz0i5r">
                                                                                <div class="x78zum5">
                                                                                  <span class="x3nfvp2 xmix8c7 x1n2onr6">
                                                                                    <span class="x6s0dn4 x9f619 x78zum5 xmix8c7 xl56j7k x16xo4sp x1t137rt x1j85h84 xsyo7zv x16hj40l x4p5aij x1n2onr6 xzolkzo x12go9s9 x1rnf11y xprq8jg x8t9es0 xw23nyj x63nzvj x1fp01tm xuxw1ft x2b8uid x117nqv4 x1fwvgxd">
                                                                                      <div class="x8t9es0 xw23nyj x63nzvj x1heor9g xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj x1pd3egz xeuugli">
                                                                                        {
                                                                                          item?.Paymentstatus
                                                                                        }
                                                                                      </div>
                                                                                    </span>
                                                                                    <div
                                                                                      aria-atomic="true"
                                                                                      aria-live="polite"
                                                                                      role="status"
                                                                                      class="x1qvwoe0 xjm9jq1 x1y332i5 xcwd3tp x1jyxor1 x39eecv x6ikm8r x10wlt62 x10l6tqk xuxw1ft x1i1rx1s"
                                                                                      data-sscoverage-ignore="true"
                                                                                    >
                                                                                      Paid
                                                                                    </div>
                                                                                  </span>
                                                                                </div>
                                                                              </div>
                                                                            </td>
                                                                            <td
                                                                              aria-colindex="6"
                                                                              class="x1n2onr6 x1yc453h x78zum5 x1nhvcw1 xb9moi8 xfth1om x21b0me xmls85d x1gzqxud x108nfp6 x8t9es0 x1fvot60 xo1l8bm xxio538 xyamay9 x1pi30zi x1l90r2v x1swvt13 x6s0dn4 style-jRhH7"
                                                                              role="gridcell"
                                                                              tabindex="0"
                                                                              id="style-jRhH7"
                                                                            >
                                                                              <div class="x1iyjqo2 xh8yej3 xmz0i5r">
                                                                                <span class="x8t9es0 x1fvot60 xo1l8bm xxio538 x108nfp6 xq9mrsl x1h4wwuj xeuugli">
                                                                                  {
                                                                                    item?.VATinvoiceID
                                                                                  }
                                                                                </span>
                                                                              </div>
                                                                            </td>
                                                                            <td
                                                                              aria-colindex="7"
                                                                              class="x1n2onr6 x1yc453h x78zum5 x1nhvcw1 xb9moi8 xfth1om x21b0me xmls85d x1gzqxud x108nfp6 x8t9es0 x1fvot60 xo1l8bm xxio538 xyamay9 x1pi30zi x1l90r2v x1swvt13 x6s0dn4 style-sK6Me"
                                                                              role="gridcell"
                                                                              tabindex="0"
                                                                              id="style-sK6Me"
                                                                            >
                                                                              <div class="x1iyjqo2 xh8yej3 xmz0i5r">
                                                                                <div
                                                                                  class="xeq5yr9"
                                                                                  title="Download"
                                                                                >
                                                                                  <div
                                                                                    class="x3nfvp2 x193iq5w xxymvpz"
                                                                                    role="none"
                                                                                  >
                                                                                    <a
                                                                                      aria-busy="false"
                                                                                      class="x1i10hfl xjqpnuy xa49m3k xqeqjp1 x2hbi6w x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli x16tdsg8 xggy1nq x1ja2u2z x1t137rt x6s0dn4 x1ejq31n xd10rxx x1sy0etr x17r0tee x3nfvp2 xdl72j9 x1q0g3np x2lah0s x193iq5w x1n2onr6 x1hl2dhg x87ps6o xxymvpz xlh3980 xvmahel x1lku1pv xhk9q7s x1otrzb0 x1i1ezom x1o6z2jb xo1l8bm x108nfp6 xas4zb2 x1y1aw1k xwib8y2 x1ye3gou xn6708d"
                                                                                      href="/ads/manage/billing_transaction/?act=1387295665246598&amp;pdf=true&amp;print=false&amp;source=billing_summary&amp;tx_type=3&amp;txid=7260366200741958-7243949759050273"
                                                                                      role="link"
                                                                                      tabindex="0"
                                                                                      target="_blank"
                                                                                    >
                                                                                      <span class="x8t9es0 x1fvot60 xxio538 x1heor9g xq9mrsl x1h4wwuj x1pd3egz xeuugli xh8yej3">
                                                                                        <div class="x78zum5">
                                                                                          <div
                                                                                            class="x1qvwoe0 xjm9jq1 x1y332i5 xcwd3tp x1jyxor1 x39eecv x6ikm8r x10wlt62 x10l6tqk xuxw1ft x1i1rx1s"
                                                                                            data-sscoverage-ignore="true"
                                                                                          >
                                                                                            Download
                                                                                            PDF
                                                                                          </div>
                                                                                          <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1hc1fzr x13dflua x6o7n8i xxziih7 x12w9bfk xl56j7k xh8yej3">
                                                                                            <div class="x3nfvp2 x2lah0s x1c4vz4f">
                                                                                              <i
                                                                                                alt=""
                                                                                                data-visualcompletion="css-img"
                                                                                                class="img sp_8sb-lWwAiyD sx_eea79f"
                                                                                              ></i>
                                                                                            </div>
                                                                                          </div>
                                                                                        </div>
                                                                                      </span>
                                                                                    </a>
                                                                                  </div>
                                                                                </div>
                                                                              </div>
                                                                            </td>
                                                                          </tr>
                                                                        )
                                                                      )}
                                                                    </tbody>
                                                                  </table>
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
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;

/*

  

*/

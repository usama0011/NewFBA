import React, { useEffect, useState } from "react";
import "../styles/EditChartThree.css";
import { Link, useParams } from "react-router-dom";
import LOgoLOgo from "../assets/logologo.jpeg";
import MainLogoImage from "../assets/maind.jpeg";
import axios from "axios";
import SideBar from "../components/SideBar";
const EditChartThree = () => {
  const { id } = useParams();
  const [campaign, setCampaigns] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCampaigns = async () => {
      try {
        const response = await axios.get(
          `https://facebookadsmangerserver.vercel.app/api/newcampaing/${id}`
        );
        setCampaigns(response.data);
      } catch (err) {
        setError("Error fetching campaigns");
      } finally {
        setLoading(false);
      }
    };

    fetchCampaigns();
  }, []);
  console.log(campaign);

  return (
    <div>
      <div class="_2ww1 _7y7x">
        <div data-pagelet="AdsSideNavWithContent.react" class="">
          <SideBar />
        </div>
      </div>
      <div class="_2k0c _96v5 _8_1l snipcss-o723F style-VS3Gy" id="style-VS3Gy">
        <div
          style={{ marginLeft: "20px", zIndex: "999" }}
          class="x1a0uwpx x78zum5 x1ob5r32 xdt5ytf x5yr21d x1jj3tg0 x6ikm8r x10wlt62 x1iorvi4 x4uap5 x18d9i69 xkhd6sd x10l6tqk x187nhsf x1vjfegm x5jzwa4"
        >
          <Link to="/">
            <div
              class="xlup9mm x1gslohp xw3qccf x12nagc xsgj6o6 x1a2a7pz x1kky2od x889kno x1iji9kk x1a8lsjc x1sln4lm x1ypdohk x4nwuxf xmbozn3 x1lcm9me x1yr5g0i xrt01vj x10y3i5r snipcss-2972g"
              icon="[object Object]"
              aria-label="Close"
              role="button"
              tabindex="0"
              data-auto-logging-id="f3f1c09c92ec05"
            >
              <i
                alt=""
                data-visualcompletion="css-img"
                class="img style-NqtPU"
                id="style-NqtPU"
              ></i>
              <div class="x1rg5ohu x67bb7w">
                <div class="x1ypdohk xlup9mm x1anpbxc xmo9yow xyorhqc x17adc0v x1kky2od x1ejq31n xd10rxx x1sy0etr x17r0tee x1a2a7pz"></div>
              </div>
            </div>
          </Link>

          <div
            aria-disabled="false"
            aria-label="View charts (Ctrl+Y)"
            class="x972fbf xcfux6l x1qhh985 xm0m39n x1ejq31n xd10rxx x1sy0etr x17r0tee x15wryii x14yi0bh x2kcyu4 xmfk5bu x9f619 x1ypdohk xc9qbxq x1a2a7pz x889kno x1iji9kk x1a8lsjc x1sln4lm x1n2onr6 x14qfxbe x1gslohp x12nagc xsgj6o6 xw3qccf x1lcm9me x1yr5g0i xrt01vj x10y3i5r xjbqb8w snipcss-2nYG7"
            data-pitloot-persistonclick="false"
            id="insights_tray_button"
            role="button"
            tabindex="0"
            data-auto-logging-id="ff96db40273478"
          >
            <div class="xbsr9hj">
              <div class="x3nfvp2 x120ccyz x140t73q" role="presentation">
                <div class="xtwfq29 style-iBrpU" id="style-iBrpU"></div>
              </div>
            </div>
          </div>
          <Link to="/editmainchart">
            <div
              aria-disabled="false"
              aria-label="Edit (Ctrl+U)"
              class="x972fbf xcfux6l x1qhh985 xm0m39n x1ejq31n xd10rxx x1sy0etr x17r0tee x15wryii x14yi0bh x2kcyu4 xmfk5bu x9f619 x1ypdohk xc9qbxq x1a2a7pz x889kno x1iji9kk x1a8lsjc x1sln4lm x1n2onr6 x14qfxbe x1gslohp x12nagc xsgj6o6 xw3qccf x1lcm9me x1yr5g0i xrt01vj x10y3i5r xjbqb8w snipcss-Vnwlp"
              data-pitloot-persistonclick="false"
              role="button"
              tabindex="0"
              data-auto-logging-id="f3f9bdbb5acfde"
            >
              <div class="xbsr9hj">
                <div class="x3nfvp2 x120ccyz x140t73q" role="presentation">
                  <div class="xtwfq29 style-TLZOk" id="style-TLZOk"></div>
                </div>
              </div>
            </div>
          </Link>
          <Link to="/history">
            <div
              aria-disabled="false"
              aria-label="See history (Ctrl+I)"
              class="x972fbf xcfux6l x1qhh985 xm0m39n x1ejq31n xd10rxx x1sy0etr x17r0tee x15wryii x14yi0bh x2kcyu4 xmfk5bu x9f619 x1ypdohk xc9qbxq x1a2a7pz x889kno x1iji9kk x1a8lsjc x1sln4lm x1n2onr6 x14qfxbe x1gslohp x12nagc xsgj6o6 xw3qccf x1lcm9me x1yr5g0i xrt01vj x10y3i5r x4nwuxf snipcss-KmW2A"
              data-pitloot-persistonclick="false"
              role="button"
              tabindex="0"
              data-auto-logging-id="f19b1362991cda8"
            >
              <div class="xbsr9hj">
                <div class="x3nfvp2 x120ccyz x140t73q" role="presentation">
                  <div class="xtwfq29 style-i8HGz" id="style-i8HGz"></div>
                </div>
              </div>
            </div>
          </Link>

          <div class="x10l6tqk xwa60dl">
            <div class="x1rg5ohu x67bb7w">
              <span class=" " data-tracked="true" data-clickable="1">
                <div
                  aria-disabled="false"
                  aria-label="Collapse view"
                  class="_8ywk"
                  role="button"
                  tabindex="0"
                >
                  <i
                    alt=""
                    data-visualcompletion="css-img"
                    class="img style-UoVCf"
                    id="style-UoVCf"
                  ></i>
                </div>
              </span>
            </div>
          </div>
        </div>
        <div style={{ paddingLeft: "10px" }} class="_96uw">
          <div
            style={{ paddingLeft: "10px" }}
            class="_1_tm _9898"
            id="campaign_structure_tree_root"
          >
            <div
              style={{ paddingLeft: "10px" }}
              class="x2izyaf x178xt8z xcfux6l xso031l xy80clv x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x15bcfbt xolcy6v x3ckiwt xc2dlm9 x9f619 xgif2c7 xod5an3 x1yrsyyn x10b6aqq x1ye3gou xn6708d x1n2onr6 xh8yej3"
            >
              <div class="xgqtt45 xeq5yr9">
                <div class="x78zum5 xdt5ytf xdl72j9 x1iyjqo2 xeuugli x1n2onr6 xh8yej3">
                  <div
                    class="x1qvwoe0 xjm9jq1 x1y332i5 xcwd3tp x1jyxor1 x39eecv x6ikm8r x10wlt62 x10l6tqk xuxw1ft x1i1rx1s style-gxjQy"
                    data-sscoverage-ignore="true"
                    id="style-gxjQy"
                  >
                    <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94">
                      <div class="x1iyjqo2">
                        <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x65s2av">
                          <label id="js_3p" for="js_3o">
                            <span class="xmi5d70 x1fvot60 xxio538 xbsr9hj xq9mrsl x1mzt3pk x1vvkbs x13faqbe x117nqv4 xeuugli">
                              Search
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
                                  <div
                                    class="x3nfvp2 x120ccyz x4s1yf2"
                                    role="presentation"
                                  >
                                    <div
                                      class="xtwfq29 style-GLwTt"
                                      id="style-GLwTt"
                                    ></div>
                                  </div>
                                  <input
                                    aria-autocomplete="list"
                                    aria-expanded="false"
                                    aria-haspopup="listbox"
                                    role="combobox"
                                    placeholder="Search"
                                    id="js_3o"
                                    aria-labelledby="js_3p"
                                    aria-controls="js_3n"
                                    aria-busy="false"
                                    aria-disabled="false"
                                    autocomplete="off"
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
                <div class="x17qophe x10l6tqk xds687c x1ey2m1c">
                  <div id="style-7IAfw" class="style-7IAfw">
                    <div class="__qa __qb _2tr- style-lCINd" id="style-lCINd">
                      <div class="_65ab _65ac">
                        <div class="__q7 style-aCmhR" id="style-aCmhR"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="_67gr style-23dHh" id="style-23dHh">
              <div id="style-D9jtO" class="style-D9jtO">
                <div
                  aria-label="grid"
                  class="ReactVirtualized__Grid ReactVirtualized__List style-NMJEP"
                  role="grid"
                  tabindex="0"
                  id="style-NMJEP"
                >
                  <div
                    class="ReactVirtualized__Grid__innerScrollContainer style-4eRCT"
                    id="style-4eRCT"
                  >
                    <div role="row" id="style-PoOgz" class="style-PoOgz">
                      <span
                        data-surface-wrapper="1"
                        data-surface="/am/editor_drawer/editor_tree:campaign"
                        data-auto-logging-id="f149aec1e7d9bf4"
                        id="style-3wLLM"
                        class="style-3wLLM"
                      >
                        <div
                          aria-label="Campaign"
                          class="x9f619 x1ypdohk x1lliihq x1a2a7pz x6ikm8r x10wlt62 x1ye3gou x1hzt7jf x87ps6o xh8yej3 xwvwv9b x1sxyh0 xo1l8bm xbsr9hj x1k4ywey x14ihq94 x1ug7tv7 x6kzwsm xd1rtb7 x19p7ews x26u7qi "
                          data-id="120210088012940644"
                          data-objecttype="CAMPAIGN_GROUP"
                          id="ads_campaign_structure_item_120210088012940644"
                          role="rowheader"
                          tabindex="0"
                          data-tracked="true"
                          data-clickable="1"
                        >
                          <div class="x6s0dn4 x9f619 x78zum5 x1iorvi4 x4uap5 xjkvuk6 xkhd6sd xwvwv9b">
                            <span class="x1ok221b x1emribx xat24cr x1mh8g0r">
                              <svg
                                viewBox="0 0 48 48"
                                width="1em"
                                height="1em"
                                fill="currentColor"
                                class="x1qsmy5i xlup9mm x1kky2od"
                              >
                                <path d="M40.5 10H23.74c-1.08 0-2.03-.69-2.37-1.71s-.18-.53-.18-.53A5.496 5.496 0 0 0 15.97 4H6.5C4.02 4 2 6.02 2 8.5v30C2 41.53 4.47 44 7.5 44h33c3.03 0 5.5-2.47 5.5-5.5v-23c0-3.03-2.47-5.5-5.5-5.5z"></path>
                              </svg>
                            </span>

                            <div class="x6ikm8r x10wlt62 x1iyjqo2 xs83m0k x1t1x2f9">
                              <div class="x6s0dn4 x78zum5 xwvwv9b x1qughib">
                                <div class="xmi5d70 x1fvot60 xo1l8bm xxio538 xbsr9hj xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj xeuugli xw3qccf xr9ek0c">
                                  <span class="_3dfi _3dfj">
                                    {campaign?.campaingname}
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div class="x6s0dn4 x78zum5 xl56j7k x1gryazu xt4ypqs">
                              <div class="x1lliihq">
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
                                          default
                                        </div>
                                        <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1hc1fzr x13dflua x6o7n8i xxziih7 x12w9bfk xl56j7k xh8yej3">
                                          <div class="x3nfvp2 x2lah0s x1c4vz4f">
                                            <i
                                              alt=""
                                              data-visualcompletion="css-img"
                                              class="img style-tIMLP"
                                              id="style-tIMLP"
                                            ></i>
                                          </div>
                                        </div>
                                      </div>
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div class="x1s85apg">
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
                                          Action menu
                                        </div>
                                        <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1hc1fzr x13dflua x6o7n8i xxziih7 x12w9bfk xl56j7k xh8yej3">
                                          <div class="x3nfvp2 x2lah0s x1c4vz4f">
                                            <i
                                              alt=""
                                              data-visualcompletion="css-img"
                                              class="img style-zMAMl"
                                              id="style-zMAMl"
                                            ></i>
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
                    <div role="row" id="style-qASOf" class="style-qASOf">
                      <span
                        data-surface-wrapper="1"
                        data-surface="/am/editor_drawer/editor_tree:adset"
                        data-auto-logging-id="f20c0422cef1c98"
                        id="style-ajrU3"
                        class="style-ajrU3"
                      >
                        <div
                          aria-label="Ad set"
                          class="x19p7ews x26u7qi x1ftr3km x2izyaf x9f619 x5e6ka x1ypdohk x1lliihq x1a2a7pz x6ikm8r x10wlt62 x1ye3gou x1hzt7jf x87ps6o xh8yej3 xwvwv9b x1sxyh0 "
                          data-id="120210088012960644"
                          data-objecttype="CAMPAIGN"
                          id="ads_campaign_structure_item_120210088012960644"
                          role="rowheader"
                          tabindex="0"
                          data-tracked="true"
                          data-clickable="1"
                        >
                          <div class="x6s0dn4 x9f619 x78zum5 x1iorvi4 x4uap5 xjkvuk6 xkhd6sd xwvwv9b">
                            <span class="x1c4vz4f x2lah0s x1wpsl4u"></span>
                            <span class="x1ok221b x1emribx xat24cr x1mh8g0r">
                              <svg
                                viewBox="0 0 16 16"
                                width="1em"
                                height="1em"
                                fill="currentColor"
                                class="x4s1yf2 xlup9mm x1kky2od"
                              >
                                <g data-name="Layer 2">
                                  <g>
                                    <g data-name="16">
                                      <rect
                                        class="xbh8q5q xi5qq39"
                                        x="9.5"
                                        y="0.5"
                                        width="6"
                                        height="6"
                                        rx="1"
                                      ></rect>
                                      <rect
                                        class="xbh8q5q xi5qq39"
                                        x="0.5"
                                        y="0.5"
                                        width="6"
                                        height="6"
                                        rx="1"
                                      ></rect>
                                      <rect
                                        class="xbh8q5q xi5qq39"
                                        x="9.5"
                                        y="9.5"
                                        width="6"
                                        height="6"
                                        rx="1"
                                        transform="rotate(90 12.5 12.5)"
                                      ></rect>
                                      <rect
                                        class="xbh8q5q xi5qq39"
                                        x="0.5"
                                        y="9.5"
                                        width="6"
                                        height="6"
                                        rx="1"
                                        transform="rotate(90 3.5 12.5)"
                                      ></rect>
                                    </g>
                                  </g>
                                </g>
                              </svg>
                            </span>
                            <div class="x6ikm8r x10wlt62 x1iyjqo2 xs83m0k x1t1x2f9">
                              <div class="x6s0dn4 x78zum5 xwvwv9b x1qughib">
                                <div class="xmi5d70 x1fvot60 xo1l8bm xxio538 xbsr9hj xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj xeuugli xw3qccf xr9ek0c">
                                  <span class="_3dfi _3dfj">
                                    {campaign?.campaingname}
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div class="x6s0dn4 x78zum5 xl56j7k x1gryazu xt4ypqs">
                              <div class="x1lliihq">
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
                                          default
                                        </div>
                                        <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1hc1fzr x13dflua x6o7n8i xxziih7 x12w9bfk xl56j7k xh8yej3">
                                          <div class="x3nfvp2 x2lah0s x1c4vz4f">
                                            <i
                                              alt=""
                                              data-visualcompletion="css-img"
                                              class="img style-fMfSD"
                                              id="style-fMfSD"
                                            ></i>
                                          </div>
                                        </div>
                                      </div>
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div class="x1s85apg">
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
                                          Action menu
                                        </div>
                                        <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1hc1fzr x13dflua x6o7n8i xxziih7 x12w9bfk xl56j7k xh8yej3">
                                          <div class="x3nfvp2 x2lah0s x1c4vz4f">
                                            <i
                                              alt=""
                                              data-visualcompletion="css-img"
                                              class="img style-mNq3U"
                                              id="style-mNq3U"
                                            ></i>
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
                    <div role="row" id="style-gDBQx" class="style-gDBQx">
                      <span
                        data-surface-wrapper="1"
                        data-surface="/am/editor_drawer/editor_tree:ad"
                        data-auto-logging-id="f399f6a1b8bbc18"
                        id="style-rgwOE"
                        class="style-rgwOE"
                      >
                        <div
                          aria-label="Ad"
                          class="x19p7ews x26u7qi x1ftr3km x2izyaf x9f619 x5e6ka x1ypdohk x1lliihq x1a2a7pz x6ikm8r x10wlt62 x1ye3gou x1hzt7jf x87ps6o xh8yej3 xwvwv9b x1sxyh0 "
                          data-id="120210088013000644"
                          data-objecttype="ADGROUP"
                          id="ads_campaign_structure_item_120210088013000644"
                          role="rowheader"
                          tabindex="0"
                          data-tracked="true"
                          data-clickable="1"
                        >
                          <div class="x6s0dn4 x9f619 x78zum5 x1iorvi4 x4uap5 xjkvuk6 xkhd6sd xwvwv9b">
                            <span class="x1c4vz4f x2lah0s x1sx8fc2"></span>
                            <span class="x1ok221b x1emribx xat24cr x1mh8g0r">
                              <svg
                                viewBox="0 0 16 16"
                                width="1em"
                                height="1em"
                                fill="currentColor"
                                class="x4s1yf2 xlup9mm x1kky2od"
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
                                    <circle cx="4.5" cy="4.5" r="1"></circle>
                                    <path
                                      stroke-linecap="round"
                                      stroke="currentColor"
                                      fill="none"
                                      d="M7.5 4.5 12.5 4.5"
                                    ></path>
                                  </g>
                                </g>
                              </svg>
                            </span>
                            <div class="x6ikm8r x10wlt62 x1iyjqo2 xs83m0k x1t1x2f9">
                              <div class="x6s0dn4 x78zum5 xwvwv9b x1qughib">
                                <div class="xmi5d70 x1fvot60 xo1l8bm xxio538 xbsr9hj xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj xeuugli xw3qccf xr9ek0c">
                                  <span class="_3dfi _3dfj">
                                    {campaign?.campainglink}
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div class="x6s0dn4 x78zum5 xl56j7k x1gryazu xt4ypqs">
                              <div class="x1lliihq">
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
                                          default
                                        </div>
                                        <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1hc1fzr x13dflua x6o7n8i xxziih7 x12w9bfk xl56j7k xh8yej3">
                                          <div class="x3nfvp2 x2lah0s x1c4vz4f">
                                            <i
                                              alt=""
                                              data-visualcompletion="css-img"
                                              class="img style-BiUOt"
                                              id="style-BiUOt"
                                            ></i>
                                          </div>
                                        </div>
                                      </div>
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div class="x1s85apg">
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
                                          Action menu
                                        </div>
                                        <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1hc1fzr x13dflua x6o7n8i xxziih7 x12w9bfk xl56j7k xh8yej3">
                                          <div class="x3nfvp2 x2lah0s x1c4vz4f">
                                            <i
                                              alt=""
                                              data-visualcompletion="css-img"
                                              class="img style-96RHk"
                                              id="style-96RHk"
                                            ></i>
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
                  </div>
                </div>
              </div>
              <div class="resize-triggers">
                <div class="expand-trigger">
                  <div id="style-xLjpK" class="style-xLjpK"></div>
                </div>
                <div class="contract-trigger"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="_2k0g">
          <div class="_3ptk _8z1k">
            <div>
              <div>
                <div
                  class="x9f619 xn3w4p2 xh8yej3 x2izyaf x15bcfbt xolcy6v x3ckiwt xc2dlm9 x178xt8z xcfux6l xso031l xm0m39n xgif2c7 x1iorvi4 xjkvuk6 x4uap5 x1ye3gou style-yNQ1D"
                  id="style-yNQ1D"
                >
                  <div class="x6s0dn4 x1ypdohk x78zum5 xq8finb">
                    <div class="x3nfvp2 x193iq5w xxymvpz" role="none">
                      <div
                        aria-busy="false"
                        class="x1i10hfl xjqpnuy xa49m3k xqeqjp1 x2hbi6w x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli x16tdsg8 xggy1nq x1ja2u2z x6s0dn4 x1ejq31n xd10rxx x1sy0etr x17r0tee x3nfvp2 xdl72j9 x1q0g3np x2lah0s x193iq5w x1n2onr6 x1hl2dhg x87ps6o xxymvpz xlh3980 xvmahel x1lku1pv x1g40iwv x1lcm9me x1yr5g0i xrt01vj x10y3i5r x1ob88yx xaatb59 x1qgsegg xo1l8bm xbsr9hj x1v911su x1y1aw1k xwib8y2 x1ye3gou xn6708d"
                        role="button"
                        tabindex="0"
                        id="js_t4"
                      >
                        <span class="xmi5d70 x1fvot60 xxio538 x1heor9g xq9mrsl x1h4wwuj x1pd3egz xeuugli xh8yej3">
                          <div class="x78zum5">
                            <div
                              class="x1qvwoe0 xjm9jq1 x1y332i5 xcwd3tp x1jyxor1 x39eecv x6ikm8r x10wlt62 x10l6tqk xuxw1ft x1i1rx1s"
                              data-sscoverage-ignore="true"
                            >
                              Open
                            </div>
                            <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1hc1fzr x13dflua x6o7n8i xxziih7 x12w9bfk xl56j7k xh8yej3">
                              <div class="x3nfvp2 x2lah0s x1c4vz4f">
                                <i
                                  alt=""
                                  data-visualcompletion="css-img"
                                  class="img style-j7s6N"
                                  id="style-j7s6N"
                                ></i>
                              </div>
                            </div>
                          </div>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div class="x6s0dn4 x78zum5 x1r8uery x1iyjqo2 xs83m0k x1qughib x6ikm8r x10wlt62">
                    <div class="x6s0dn4 x3nfvp2 x1r8uery x1iyjqo2 xq8finb xeuugli">
                      <div class="x6s0dn4 x3nfvp2 style-j6gBx" id="style-j6gBx">
                        <div class="x1iyjqo2 xc02obx x6ikm8r x10wlt62 xlyipyv xuxw1ft x1r8uery">
                          <div class="_3qn7 _61-0 _2fyi _3qng">
                            <span
                              class=" "
                              data-tracked="true"
                              data-clickable="1"
                            >
                              <div
                                class="x1xlr1w8 x1qsmy5i x1k4ywey x1iorvi4 xjkvuk6 x1e558r4 x150jy0e x1lcm9me x1yr5g0i xrt01vj x10y3i5r"
                                data-hover="tooltip"
                                data-testid="nav-header-CAMPAIGN_GROUP"
                                data-tooltip-content="[05/16/2024] Promoting https://thesearchguide.xyz/cf/r/6618d4d6b1a97700123695dd?ad_id={{ad.id}}&amp;adset_id={{adset.id}}&amp;campaig..."
                                data-tooltip-display="overflow"
                                data-tooltip-position="above"
                                data-tooltip-text-direction="auto"
                              >
                                <div class="_96mf">
                                  <div class="_96mg">
                                    <svg
                                      viewBox="0 0 48 48"
                                      width="1em"
                                      height="1em"
                                      fill="currentColor"
                                      class="x1qsmy5i xlup9mm x1kky2od"
                                    >
                                      <path d="M40.5 10H23.74c-1.08 0-2.03-.69-2.37-1.71s-.18-.53-.18-.53A5.496 5.496 0 0 0 15.97 4H6.5C4.02 4 2 6.02 2 8.5v30C2 41.53 4.47 44 7.5 44h33c3.03 0 5.5-2.47 5.5-5.5v-23c0-3.03-2.47-5.5-5.5-5.5z"></path>
                                    </svg>
                                  </div>
                                  <div
                                    aria-level="4"
                                    class="x1xqt7ti xsuwoey x63nzvj x1qsmy5i xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj x1fcty0u xeuugli"
                                    role="heading"
                                  >
                                    <span class="_4gz1">
                                      {campaign?.campaingname}
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </span>
                          </div>
                        </div>
                        <div class="x6s0dn4 x3nfvp2 x1i64zmx x1emribx">
                          <i
                            alt=""
                            data-visualcompletion="css-img"
                            class="img style-slg5M"
                            id="style-slg5M"
                          ></i>
                        </div>
                        <div class="x1iyjqo2 xc02obx x6ikm8r x10wlt62 xlyipyv xuxw1ft x1r8uery">
                          <div class="_3qn7 _61-0 _2fyi _3qng">
                            <span
                              class=" "
                              data-tracked="true"
                              data-clickable="1"
                            >
                              <div
                                class="xo1l8bm xbsr9hj x1v911su x1iorvi4 xjkvuk6 x1e558r4 x150jy0e x1lcm9me x1yr5g0i xrt01vj x10y3i5r"
                                data-hover="tooltip"
                                data-testid="nav-header-CAMPAIGN"
                                data-tooltip-content="1 Ad set"
                                data-tooltip-display="overflow"
                                data-tooltip-position="above"
                                data-tooltip-text-direction="auto"
                              >
                                <a
                                  data-hover="tooltip"
                                  data-tooltip-display="overflow"
                                  class="_231w _4yeg style-dIHCX"
                                  href="#"
                                  id="style-dIHCX"
                                >
                                  <div class="_96mf">
                                    <div class="_96mg">
                                      <svg
                                        viewBox="0 0 16 16"
                                        width="1em"
                                        height="1em"
                                        fill="currentColor"
                                        class="x4s1yf2 xlup9mm x1kky2od"
                                      >
                                        <g data-name="Layer 2">
                                          <g>
                                            <g data-name="16">
                                              <rect
                                                class="xbh8q5q xi5qq39"
                                                x="9.5"
                                                y="0.5"
                                                width="6"
                                                height="6"
                                                rx="1"
                                              ></rect>
                                              <rect
                                                class="xbh8q5q xi5qq39"
                                                x="0.5"
                                                y="0.5"
                                                width="6"
                                                height="6"
                                                rx="1"
                                              ></rect>
                                              <rect
                                                class="xbh8q5q xi5qq39"
                                                x="9.5"
                                                y="9.5"
                                                width="6"
                                                height="6"
                                                rx="1"
                                                transform="rotate(90 12.5 12.5)"
                                              ></rect>
                                              <rect
                                                class="xbh8q5q xi5qq39"
                                                x="0.5"
                                                y="9.5"
                                                width="6"
                                                height="6"
                                                rx="1"
                                                transform="rotate(90 3.5 12.5)"
                                              ></rect>
                                            </g>
                                          </g>
                                        </g>
                                      </svg>
                                    </div>
                                    <div
                                      aria-level="4"
                                      class="x1xqt7ti xsuwoey x63nzvj x1541jtf xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj x1fcty0u xeuugli"
                                      role="heading"
                                    >
                                      <span class="_4gz1">1 Ad set</span>
                                    </div>
                                  </div>
                                </a>
                              </div>
                            </span>
                          </div>
                        </div>
                        <div class="x6s0dn4 x3nfvp2 x1i64zmx x1emribx">
                          <i
                            alt=""
                            data-visualcompletion="css-img"
                            class="img style-5Skjy"
                            id="style-5Skjy"
                          ></i>
                        </div>
                        <div class="x1iyjqo2 xc02obx x6ikm8r x10wlt62 xlyipyv xuxw1ft x1r8uery">
                          <div class="_3qn7 _61-0 _2fyi _3qng">
                            <span
                              class=" "
                              data-tracked="true"
                              data-clickable="1"
                            >
                              <div
                                class="xo1l8bm xbsr9hj x1v911su x1iorvi4 xjkvuk6 x1e558r4 x150jy0e x1lcm9me x1yr5g0i xrt01vj x10y3i5r"
                                data-hover="tooltip"
                                data-testid="nav-header-ADGROUP"
                                data-tooltip-content="1 Ad"
                                data-tooltip-display="overflow"
                                data-tooltip-position="above"
                                data-tooltip-text-direction="auto"
                              >
                                <a
                                  data-hover="tooltip"
                                  data-tooltip-display="overflow"
                                  class="_231w _4yeg style-d7ijO"
                                  href="#"
                                  id="style-d7ijO"
                                >
                                  <div class="_96mf">
                                    <div class="_96mg">
                                      <svg
                                        viewBox="0 0 16 16"
                                        width="1em"
                                        height="1em"
                                        fill="currentColor"
                                        class="x4s1yf2 xlup9mm x1kky2od"
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
                                    </div>
                                    <div
                                      aria-level="4"
                                      class="x1xqt7ti xsuwoey x63nzvj x1541jtf xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj x1fcty0u xeuugli"
                                      role="heading"
                                    >
                                      <span class="_4gz1">1 Ad</span>
                                    </div>
                                  </div>
                                </a>
                              </div>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="_8ivh">
                      <div class="_8ivk">
                        <div class="x6s0dn4 x78zum5 x2lwn1j xeuugli x14ju556">
                          <div class="x6s0dn4 x3nfvp2 x1xxsxie x16n37ib xq8finb xp4054r">
                            <span>
                              <div class="ellipsis">
                                <div class="clearfix _ikh">
                                  <div class="_4bl7">
                                    <div class="x1yc453h x1kky2od x1y5rjcf">
                                      <i
                                        alt=""
                                        data-visualcompletion="css-img"
                                        class="img style-8242S"
                                        id="style-8242S"
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
                          <div class="xy80clv x26u7qi xckqwgs x1i1rx1s x17rw0jw xmo9yow"></div>
                          <div data-visualcompletion="ignore" class="">
                            <div>
                              <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x19lwn94 x1c4vz4f">
                                <div class="x1rg5ohu x1n2onr6 x3oybdh">
                                  <input
                                    aria-checked="true"
                                    aria-label="On/Off"
                                    role="switch"
                                    aria-describedby="js_32"
                                    aria-labelledby="js_ak"
                                    class="xjyslct x1ypdohk x5yr21d x17qophe xdj266r x11i5rnm xat24cr x1mh8g0r x1w3u9th x1t137rt x10l6tqk x13vifvy xh8yej3 x1vjfegm"
                                    id="js_31"
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
                        </div>
                      </div>
                      <div
                        aria-busy="false"
                        aria-controls="js_33"
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
                              Action Menu
                            </div>
                            <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1hc1fzr x13dflua x6o7n8i xxziih7 x12w9bfk xl56j7k xh8yej3">
                              <div
                                class="x3nfvp2 x120ccyz x1heor9g x2lah0s x1c4vz4f"
                                role="presentation"
                              >
                                <div
                                  class="xtwfq29 style-mPBqa"
                                  id="style-mPBqa"
                                ></div>
                              </div>
                            </div>
                          </div>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="x9f619 xh8yej3 x2izyaf x15bcfbt xolcy6v x3ckiwt xc2dlm9 x178xt8z xcfux6l xso031l xm0m39n xgif2c7 x78zum5 xl56j7k x6s0dn4 x1ejq31n xt7dq6l x1gg8mnh xjexgjb xexx8yu x4uap5 x18d9i69 xkhd6sd x1n2onr6">
                  <div
                    class="x2b8uid x10l6tqk xtzzx4i xuuh30 xh8yej3 style-GayID"
                    id="style-GayID"
                  >
                    <div
                      class="x78zum5 xh8yej3 xl56j7k"
                      id="ads_review_and_edit_tab"
                    >
                      <div class="x1e56ztr">
                        <div
                          class="x78zum5 xdmi676 x193iq5w x6ikm8r x10wlt62 x1n2onr6 xmi5d70 x1fvot60 xo1l8bm xxio538"
                          role="tablist"
                        >
                          <div
                            aria-hidden="false"
                            aria-label="Edit"
                            aria-selected="true"
                            class="x1i10hfl xjqpnuy xa49m3k xqeqjp1 x2hbi6w x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xdl72j9 xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli x1n2onr6 x16tdsg8 x1hl2dhg xggy1nq x1ja2u2z x1t137rt x6s0dn4 x78zum5 x1q0g3np x2lah0s xl56j7k x1lku1pv x1g40iwv x1lcm9me x1yr5g0i xrt01vj x10y3i5r x1y1aw1k xwib8y2 x1ye3gou xn6708d x1xlr1w8 x1qsmy5i x1k4ywey "
                            role="tab"
                            tabindex="0"
                            data-tracked="true"
                            data-clickable="1"
                          >
                            <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 xs83m0k x19lwn94 xl56j7k">
                              <div
                                class="x3nfvp2 x120ccyz x1heor9g x2lah0s"
                                role="presentation"
                              >
                                <div
                                  class="xtwfq29 style-GOn7C"
                                  id="style-GOn7C"
                                ></div>
                              </div>
                              <div
                                aria-hidden="true"
                                class="x3nfvp2 xdt5ytf xs83m0k xeuugli x6ikm8r x10wlt62"
                              >
                                <span class="x6ikm8r x10wlt62 xlyipyv xmi5d70 x1fvot60 xxio538 x1heor9g xuxw1ft x2b8uid x117nqv4">
                                  Edit
                                </span>
                                <span class="xmi5d70 x1fvot60 xo1l8bm xxio538 xbsr9hj xuxw1ft x2b8uid xqtp20y xlshs6z x6ikm8r x10wlt62 x87ps6o x47corl">
                                  Edit
                                </span>
                                <span class="xmi5d70 x1fvot60 xxio538 x1heor9g xuxw1ft x2b8uid x117nqv4 xqtp20y xlshs6z x6ikm8r x10wlt62 x87ps6o x47corl">
                                  Edit
                                </span>
                              </div>
                            </div>
                          </div>
                          <div
                            aria-hidden="false"
                            aria-label="Review"
                            aria-selected="false"
                            class="x1i10hfl xjqpnuy xa49m3k xqeqjp1 x2hbi6w x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xdl72j9 xe8uvvx xdj266r x11i5rnm xat24cr x2lwn1j xeuugli x1n2onr6 x16tdsg8 x1hl2dhg xggy1nq x1ja2u2z x1t137rt x6s0dn4 x78zum5 x1q0g3np x2lah0s xl56j7k x1lku1pv x1g40iwv x1lcm9me x1yr5g0i xrt01vj x10y3i5r x1y1aw1k xwib8y2 x1ye3gou xn6708d xo1l8bm xbsr9hj x1v911su x1i64zmx "
                            role="tab"
                            tabindex="0"
                            data-tracked="true"
                            data-clickable="1"
                          >
                            <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 xs83m0k x19lwn94 xl56j7k">
                              <div
                                class="x3nfvp2 x120ccyz x1heor9g x2lah0s"
                                role="presentation"
                              >
                                <div
                                  class="xtwfq29 style-PTjfO"
                                  id="style-PTjfO"
                                ></div>
                              </div>
                              <div
                                aria-hidden="true"
                                class="x3nfvp2 xdt5ytf xs83m0k xeuugli x6ikm8r x10wlt62"
                              >
                                <span class="x6ikm8r x10wlt62 xlyipyv xmi5d70 x1fvot60 xo1l8bm xxio538 xbsr9hj xuxw1ft x2b8uid">
                                  Review
                                </span>
                                <span class="xmi5d70 x1fvot60 xo1l8bm xxio538 xbsr9hj xuxw1ft x2b8uid xqtp20y xlshs6z x6ikm8r x10wlt62 x87ps6o x47corl">
                                  Review
                                </span>
                                <span class="xmi5d70 x1fvot60 xxio538 x1heor9g xuxw1ft x2b8uid x117nqv4 xqtp20y xlshs6z x6ikm8r x10wlt62 x87ps6o x47corl">
                                  Review
                                </span>
                              </div>
                            </div>
                          </div>
                          <div
                            aria-haspopup="true"
                            aria-hidden="true"
                            aria-label="More"
                            class="x1i10hfl xjqpnuy xa49m3k xqeqjp1 x2hbi6w x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xdl72j9 xe8uvvx xdj266r x11i5rnm xat24cr x2lwn1j xeuugli x16tdsg8 x1hl2dhg xggy1nq x1ja2u2z x1t137rt x6s0dn4 x78zum5 x1q0g3np x2lah0s xl56j7k x1lku1pv x1g40iwv x1lcm9me x1yr5g0i xrt01vj x10y3i5r x1y1aw1k xwib8y2 x1ye3gou xn6708d xo1l8bm xbsr9hj x1v911su x10l6tqk x47corl x1i64zmx xlshs6z"
                            role="button"
                            tabindex="-1"
                          >
                            <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 xs83m0k x19lwn94 xl56j7k">
                              <div
                                aria-hidden="true"
                                class="x3nfvp2 xdt5ytf xs83m0k xeuugli x6ikm8r x10wlt62"
                              >
                                <span class="x6ikm8r x10wlt62 xlyipyv xmi5d70 x1fvot60 xo1l8bm xxio538 xbsr9hj xuxw1ft x2b8uid">
                                  More
                                </span>
                                <span class="xmi5d70 x1fvot60 xo1l8bm xxio538 xbsr9hj xuxw1ft x2b8uid xqtp20y xlshs6z x6ikm8r x10wlt62 x87ps6o x47corl">
                                  More
                                </span>
                                <span class="xmi5d70 x1fvot60 xxio538 x1heor9g xuxw1ft x2b8uid x117nqv4 xqtp20y xlshs6z x6ikm8r x10wlt62 x87ps6o x47corl">
                                  More
                                </span>
                              </div>
                              <div
                                class="x3nfvp2 x120ccyz x1heor9g"
                                role="presentation"
                              >
                                <div
                                  class="xtwfq29 style-qxolY"
                                  id="style-qxolY"
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
            <div class="_22s_ _7ayd _8z1m">
              <div
                class="_2k0c _96v5 _8_1l snipcss-o723F style-VS3Gy"
                id="style-VS3Gy"
              >
                <div class="x1a0uwpx x78zum5 x1ob5r32 xdt5ytf x5yr21d x1jj3tg0 x6ikm8r x10wlt62 x1iorvi4 x4uap5 x18d9i69 xkhd6sd x10l6tqk x187nhsf x1vjfegm x5jzwa4">
                  <div
                    class="xlup9mm x1gslohp xw3qccf x12nagc xsgj6o6 x1a2a7pz x1kky2od x889kno x1iji9kk x1a8lsjc x1sln4lm x1ypdohk x4nwuxf xmbozn3 x1lcm9me x1yr5g0i xrt01vj x10y3i5r"
                    icon="[object Object]"
                    aria-label="Close"
                    role="button"
                    tabindex="0"
                  >
                    <i
                      alt=""
                      data-visualcompletion="css-img"
                      class="img style-t6yDt"
                      id="style-t6yDt"
                    ></i>
                    <div class="x1rg5ohu x67bb7w">
                      <div class="x1ypdohk xlup9mm x1anpbxc xmo9yow xyorhqc x17adc0v x1kky2od x1ejq31n xd10rxx x1sy0etr x17r0tee x1a2a7pz"></div>
                    </div>
                  </div>
                  <div id="INSIGHTS_DRAWER_tip">
                    <span>
                      <div class="x1rg5ohu x67bb7w">
                        <span class=" " data-tracked="true" data-clickable="1">
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
                                  class="xtwfq29 style-pvA3C"
                                  id="style-pvA3C"
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
                      <span class=" " data-tracked="true" data-clickable="1">
                        <div
                          aria-disabled="false"
                          aria-label="Edit (Ctrl+U)"
                          class="x972fbf xcfux6l x1qhh985 xm0m39n x1ejq31n xd10rxx x1sy0etr x17r0tee x15wryii x14yi0bh x2kcyu4 xmfk5bu x9f619 x1ypdohk xc9qbxq x1a2a7pz x889kno x1iji9kk x1a8lsjc x1sln4lm x1n2onr6 x14qfxbe x1gslohp x12nagc xsgj6o6 xw3qccf x1lcm9me x1yr5g0i xrt01vj x10y3i5r x4nwuxf"
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
                                class="xtwfq29 style-yi88r"
                                id="style-yi88r"
                              ></div>
                            </div>
                          </div>
                        </div>
                      </span>
                    </div>
                  </div>
                  <div id="ACTIVITY_HISTORY_DRAWER_tip">
                    <div class="x1rg5ohu x67bb7w">
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
                                class="xtwfq29 style-jA4U2"
                                id="style-jA4U2"
                              ></div>
                            </div>
                          </div>
                        </div>
                      </span>
                    </div>
                  </div>
                  <div class="x10l6tqk xwa60dl">
                    <div class="x1rg5ohu x67bb7w">
                      <span class=" " data-tracked="true" data-clickable="1">
                        <div
                          aria-disabled="false"
                          aria-label="Collapse view"
                          class="_8ywk"
                          role="button"
                          tabindex="0"
                        >
                          <i
                            alt=""
                            data-visualcompletion="css-img"
                            class="img style-UoVCf"
                            id="style-UoVCf"
                          ></i>
                        </div>
                      </span>
                    </div>
                  </div>
                </div>
                <div class="_96uw">
                  <div class="_1_tm _9898" id="campaign_structure_tree_root">
                    <div class="x2izyaf x178xt8z xcfux6l xso031l xy80clv x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x15bcfbt xolcy6v x3ckiwt xc2dlm9 x9f619 xgif2c7 xod5an3 x1yrsyyn x10b6aqq x1ye3gou xn6708d x1n2onr6 xh8yej3">
                      <div class="xgqtt45 xeq5yr9">
                        <div class="x78zum5 xdt5ytf xdl72j9 x1iyjqo2 xeuugli x1n2onr6 xh8yej3">
                          <div
                            class="x1qvwoe0 xjm9jq1 x1y332i5 xcwd3tp x1jyxor1 x39eecv x6ikm8r x10wlt62 x10l6tqk xuxw1ft x1i1rx1s style-gxjQy"
                            data-sscoverage-ignore="true"
                            id="style-gxjQy"
                          >
                            <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94">
                              <div class="x1iyjqo2">
                                <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x65s2av">
                                  <label id="js_3p" for="js_3o">
                                    <span class="xmi5d70 x1fvot60 xxio538 xbsr9hj xq9mrsl x1mzt3pk x1vvkbs x13faqbe x117nqv4 xeuugli">
                                      Search
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
                                            <div
                                              class="x3nfvp2 x120ccyz x4s1yf2"
                                              role="presentation"
                                            >
                                              <div
                                                class="xtwfq29 style-op7Dy"
                                                id="style-op7Dy"
                                              ></div>
                                            </div>
                                          </div>
                                          <input
                                            aria-autocomplete="list"
                                            aria-expanded="false"
                                            aria-haspopup="listbox"
                                            role="combobox"
                                            placeholder="Search"
                                            id="js_3o"
                                            aria-labelledby="js_3p"
                                            aria-controls="js_3n"
                                            aria-busy="false"
                                            aria-disabled="false"
                                            autocomplete="off"
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
                        <div class="x17qophe x10l6tqk xds687c x1ey2m1c">
                          <div id="style-7IAfw" class="style-7IAfw">
                            <div
                              class="__qa __qb _2tr- style-lCINd"
                              id="style-lCINd"
                            >
                              <div class="_65ab _65ac">
                                <div
                                  class="__q7 style-aCmhR"
                                  id="style-aCmhR"
                                ></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="_67gr style-23dHh" id="style-23dHh">
                      <div id="style-D9jtO" class="style-D9jtO">
                        <div
                          aria-label="grid"
                          class="ReactVirtualized__Grid ReactVirtualized__List style-NMJEP"
                          role="grid"
                          tabindex="0"
                          id="style-NMJEP"
                        >
                          <div
                            class="ReactVirtualized__Grid__innerScrollContainer style-4eRCT"
                            id="style-4eRCT"
                          >
                            <div
                              role="row"
                              id="style-PoOgz"
                              class="style-PoOgz"
                            >
                              <span
                                data-surface-wrapper="1"
                                data-surface="/am/editor_drawer/editor_tree:campaign"
                                data-auto-logging-id="f149aec1e7d9bf4"
                                id="style-3wLLM"
                                class="style-3wLLM"
                              >
                                <div
                                  aria-label="Campaign"
                                  class="x9f619 x1ypdohk x1lliihq x1a2a7pz x6ikm8r x10wlt62 x1ye3gou x1hzt7jf x87ps6o xh8yej3 xwvwv9b x1sxyh0 xo1l8bm xbsr9hj  x14ihq94 x1ug7tv7 x6kzwsm xd1rtb7 x19p7ews x26u7qi "
                                  data-id="120210088012940644"
                                  data-objecttype="CAMPAIGN_GROUP"
                                  id="ads_campaign_structure_item_120210088012940644"
                                  role="rowheader"
                                  tabindex="0"
                                  data-tracked="true"
                                  data-clickable="1"
                                >
                                  <div class="x6s0dn4 x9f619 x78zum5 x1iorvi4 x4uap5 xjkvuk6 xkhd6sd xwvwv9b">
                                    <span class="x1ok221b x1emribx xat24cr x1mh8g0r">
                                      <svg
                                        viewBox="0 0 48 48"
                                        width="1em"
                                        height="1em"
                                        fill="currentColor"
                                        class="x1qsmy5i xlup9mm x1kky2od"
                                      >
                                        <path d="M40.5 10H23.74c-1.08 0-2.03-.69-2.37-1.71s-.18-.53-.18-.53A5.496 5.496 0 0 0 15.97 4H6.5C4.02 4 2 6.02 2 8.5v30C2 41.53 4.47 44 7.5 44h33c3.03 0 5.5-2.47 5.5-5.5v-23c0-3.03-2.47-5.5-5.5-5.5z"></path>
                                      </svg>
                                    </span>
                                    <div class="x6ikm8r x10wlt62 x1iyjqo2 xs83m0k x1t1x2f9">
                                      <div class="x6s0dn4 x78zum5 xwvwv9b x1qughib">
                                        <div class="xmi5d70 x1fvot60 xo1l8bm xxio538 xbsr9hj xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj xeuugli xw3qccf xr9ek0c">
                                          <span class="_3dfi _3dfj">
                                            {campaign?.campaingname}
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                    <div class="x6s0dn4 x78zum5 xl56j7k x1gryazu xt4ypqs">
                                      <div class="x1lliihq">
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
                                                  default
                                                </div>
                                                <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1hc1fzr x13dflua x6o7n8i xxziih7 x12w9bfk xl56j7k xh8yej3">
                                                  <div class="x3nfvp2 x2lah0s x1c4vz4f">
                                                    <i
                                                      alt=""
                                                      data-visualcompletion="css-img"
                                                      class="img style-tIMLP"
                                                      id="style-tIMLP"
                                                    ></i>
                                                  </div>
                                                </div>
                                              </div>
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                      <div class="x1s85apg">
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
                                                  Action menu
                                                </div>
                                                <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1hc1fzr x13dflua x6o7n8i xxziih7 x12w9bfk xl56j7k xh8yej3">
                                                  <div class="x3nfvp2 x2lah0s x1c4vz4f">
                                                    <i
                                                      alt=""
                                                      data-visualcompletion="css-img"
                                                      class="img style-zMAMl"
                                                      id="style-zMAMl"
                                                    ></i>
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
                            <div
                              role="row"
                              id="style-qASOf"
                              class="style-qASOf"
                            >
                              <span
                                data-surface-wrapper="1"
                                data-surface="/am/editor_drawer/editor_tree:adset"
                                data-auto-logging-id="f20c0422cef1c98"
                                id="style-ajrU3"
                                class="style-ajrU3"
                              >
                                <div
                                  aria-label="Ad set"
                                  class="x19p7ews x26u7qi x1ftr3km x2izyaf x9f619 x5e6ka x1ypdohk x1lliihq x1a2a7pz x6ikm8r x10wlt62 x1ye3gou x1hzt7jf x87ps6o xh8yej3 xwvwv9b x1sxyh0 "
                                  data-id="120210088012960644"
                                  data-objecttype="CAMPAIGN"
                                  id="ads_campaign_structure_item_120210088012960644"
                                  role="rowheader"
                                  tabindex="0"
                                  data-tracked="true"
                                  data-clickable="1"
                                >
                                  <div class="x6s0dn4  x9f619 x78zum5 x1iorvi4 x4uap5 xjkvuk6 xkhd6sd xwvwv9b">
                                    <span class="x1c4vz4f x2lah0s x1wpsl4u"></span>
                                    <span class="x1ok221b x1emribx xat24cr x1mh8g0r">
                                      <svg
                                        viewBox="0 0 16 16"
                                        width="1em"
                                        height="1em"
                                        fill="currentColor"
                                        class="x4s1yf2 xlup9mm x1kky2od"
                                      >
                                        <g data-name="Layer 2">
                                          <g>
                                            <g data-name="16">
                                              <rect
                                                class="xbh8q5q xi5qq39"
                                                x="9.5"
                                                y="0.5"
                                                width="6"
                                                height="6"
                                                rx="1"
                                              ></rect>
                                              <rect
                                                class="xbh8q5q xi5qq39"
                                                x="0.5"
                                                y="0.5"
                                                width="6"
                                                height="6"
                                                rx="1"
                                              ></rect>
                                              <rect
                                                class="xbh8q5q xi5qq39"
                                                x="9.5"
                                                y="9.5"
                                                width="6"
                                                height="6"
                                                rx="1"
                                                transform="rotate(90 12.5 12.5)"
                                              ></rect>
                                              <rect
                                                class="xbh8q5q xi5qq39"
                                                x="0.5"
                                                y="9.5"
                                                width="6"
                                                height="6"
                                                rx="1"
                                                transform="rotate(90 3.5 12.5)"
                                              ></rect>
                                            </g>
                                          </g>
                                        </g>
                                      </svg>
                                    </span>
                                    <div class="x6ikm8r x10wlt62 x1iyjqo2 xs83m0k x1t1x2f9">
                                      <div class="x6s0dn4 x78zum5 xwvwv9b x1qughib">
                                        <div class="xmi5d70 x1fvot60 xo1l8bm xxio538 xbsr9hj xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj xeuugli xw3qccf xr9ek0c">
                                          <span class="_3dfi _3dfj">
                                            {campaign?.campaingname}
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                    <div class="x6s0dn4 x78zum5 xl56j7k x1gryazu xt4ypqs">
                                      <div class="x1lliihq">
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
                                                  default
                                                </div>
                                                <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1hc1fzr x13dflua x6o7n8i xxziih7 x12w9bfk xl56j7k xh8yej3">
                                                  <div class="x3nfvp2 x2lah0s x1c4vz4f">
                                                    <i
                                                      alt=""
                                                      data-visualcompletion="css-img"
                                                      class="img style-fMfSD"
                                                      id="style-fMfSD"
                                                    ></i>
                                                  </div>
                                                </div>
                                              </div>
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                      <div class="x1s85apg">
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
                                                  Action menu
                                                </div>
                                                <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1hc1fzr x13dflua x6o7n8i xxziih7 x12w9bfk xl56j7k xh8yej3">
                                                  <div class="x3nfvp2 x2lah0s x1c4vz4f">
                                                    <i
                                                      alt=""
                                                      data-visualcompletion="css-img"
                                                      class="img style-mNq3U"
                                                      id="style-mNq3U"
                                                    ></i>
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
                            <div
                              role="row"
                              id="style-gDBQx"
                              class="style-gDBQx"
                            >
                              <span
                                data-surface-wrapper="1"
                                data-surface="/am/editor_drawer/editor_tree:ad"
                                data-auto-logging-id="f399f6a1b8bbc18"
                                id="style-rgwOE"
                                class="style-rgwOE"
                              >
                                <div
                                  aria-label="Ad"
                                  class="x19p7ews x26u7qi x1ftr3km x2izyaf x9f619 x5e6ka x1ypdohk x1lliihq x1a2a7pz x6ikm8r x10wlt62 x1ye3gou x1hzt7jf x87ps6o xh8yej3 xwvwv9b x1sxyh0 "
                                  data-id="120210088013000644"
                                  data-objecttype="ADGROUP"
                                  id="ads_campaign_structure_item_120210088013000644"
                                  role="rowheader"
                                  tabindex="0"
                                  data-tracked="true"
                                  data-clickable="1"
                                >
                                  <div class="x6s0dn4 x1k4ywey x9f619 x78zum5 x1iorvi4 x4uap5 xjkvuk6 xkhd6sd xwvwv9b">
                                    <span class="x1c4vz4f x2lah0s x1sx8fc2"></span>
                                    <span class="x1ok221b x1emribx xat24cr x1mh8g0r">
                                      <svg
                                        viewBox="0 0 16 16"
                                        width="1em"
                                        height="1em"
                                        fill="currentColor"
                                        class="x4s1yf2 xlup9mm x1kky2od"
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
                                    </span>
                                    <div class="x6ikm8r x10wlt62 x1iyjqo2 xs83m0k x1t1x2f9">
                                      <div class="x6s0dn4 x78zum5 xwvwv9b x1qughib">
                                        <div class="xmi5d70 x1fvot60 xo1l8bm xxio538 xbsr9hj xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj xeuugli xw3qccf xr9ek0c">
                                          <span class="_3dfi _3dfj">
                                            {campaign?.campainglink}
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                    <div class="x6s0dn4 x78zum5 xl56j7k x1gryazu xt4ypqs">
                                      <div class="x1lliihq">
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
                                                  default
                                                </div>
                                                <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1hc1fzr x13dflua x6o7n8i xxziih7 x12w9bfk xl56j7k xh8yej3">
                                                  <div class="x3nfvp2 x2lah0s x1c4vz4f">
                                                    <i
                                                      alt=""
                                                      data-visualcompletion="css-img"
                                                      class="img style-BiUOt"
                                                      id="style-BiUOt"
                                                    ></i>
                                                  </div>
                                                </div>
                                              </div>
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                      <div class="x1s85apg">
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
                                                  Action menu
                                                </div>
                                                <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1hc1fzr x13dflua x6o7n8i xxziih7 x12w9bfk xl56j7k xh8yej3">
                                                  <div class="x3nfvp2 x2lah0s x1c4vz4f">
                                                    <i
                                                      alt=""
                                                      data-visualcompletion="css-img"
                                                      class="img style-96RHk"
                                                      id="style-96RHk"
                                                    ></i>
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
                          </div>
                        </div>
                      </div>
                      <div class="resize-triggers">
                        <div class="expand-trigger">
                          <div id="style-xLjpK" class="style-xLjpK"></div>
                        </div>
                        <div class="contract-trigger"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="_2k0g">
                  <div class="_3ptk _8z1k">
                    <div>
                      <div>
                        <div
                          class="x9f619 xn3w4p2 xh8yej3 x2izyaf x15bcfbt xolcy6v x3ckiwt xc2dlm9 x178xt8z xcfux6l xso031l xm0m39n xgif2c7 x1iorvi4 xjkvuk6 x4uap5 x1ye3gou style-yNQ1D"
                          id="style-yNQ1D"
                        >
                          <div class="x6s0dn4 x1ypdohk x78zum5 xq8finb">
                            <div class="x3nfvp2 x193iq5w xxymvpz" role="none">
                              <div
                                aria-busy="false"
                                class="x1i10hfl xjqpnuy xa49m3k xqeqjp1 x2hbi6w x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli x16tdsg8 xggy1nq x1ja2u2z x6s0dn4 x1ejq31n xd10rxx x1sy0etr x17r0tee x3nfvp2 xdl72j9 x1q0g3np x2lah0s x193iq5w x1n2onr6 x1hl2dhg x87ps6o xxymvpz xlh3980 xvmahel x1lku1pv x1g40iwv x1lcm9me x1yr5g0i xrt01vj x10y3i5r x1ob88yx xaatb59 x1qgsegg xo1l8bm xbsr9hj x1v911su x1y1aw1k xwib8y2 x1ye3gou xn6708d"
                                role="button"
                                tabindex="0"
                                id="js_t4"
                              >
                                <span class="xmi5d70 x1fvot60 xxio538 x1heor9g xq9mrsl x1h4wwuj x1pd3egz xeuugli xh8yej3">
                                  <div class="x78zum5">
                                    <div
                                      class="x1qvwoe0 xjm9jq1 x1y332i5 xcwd3tp x1jyxor1 x39eecv x6ikm8r x10wlt62 x10l6tqk xuxw1ft x1i1rx1s"
                                      data-sscoverage-ignore="true"
                                    >
                                      Open
                                    </div>
                                    <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1hc1fzr x13dflua x6o7n8i xxziih7 x12w9bfk xl56j7k xh8yej3">
                                      <div class="x3nfvp2 x2lah0s x1c4vz4f">
                                        <i
                                          alt=""
                                          data-visualcompletion="css-img"
                                          class="img style-j7s6N"
                                          id="style-j7s6N"
                                        ></i>
                                      </div>
                                    </div>
                                  </div>
                                </span>
                              </div>
                            </div>
                          </div>
                          <div class="x6s0dn4 x78zum5 x1r8uery x1iyjqo2 xs83m0k x1qughib x6ikm8r x10wlt62">
                            <div class="x6s0dn4 x3nfvp2 x1r8uery x1iyjqo2 xq8finb xeuugli">
                              <div
                                class="x6s0dn4 x3nfvp2 style-j6gBx"
                                id="style-j6gBx"
                              >
                                <div class="x1iyjqo2 xc02obx x6ikm8r x10wlt62 xlyipyv xuxw1ft x1r8uery">
                                  <div class="_3qn7 _61-0 _2fyi _3qng">
                                    <span
                                      class=" "
                                      data-tracked="true"
                                      data-clickable="1"
                                    >
                                      <div
                                        class=""
                                        data-hover="tooltip"
                                        data-testid="nav-header-CAMPAIGN_GROUP"
                                        data-tooltip-content="[05/16/2024] Promoting https://thesearchguide.xyz/cf/r/6618d4d6b1a97700123695dd?ad_id={{ad.id}}&amp;adset_id={{adset.id}}&amp;campaig..."
                                        data-tooltip-display="overflow"
                                        data-tooltip-position="above"
                                        data-tooltip-text-direction="auto"
                                      >
                                        <div class="_96mf">
                                          <div class="_96mg">
                                            <svg
                                              viewBox="0 0 48 48"
                                              width="1em"
                                              height="1em"
                                              fill="currentColor"
                                              class="x1qsmy5i xlup9mm x1kky2od"
                                            >
                                              <path d="M40.5 10H23.74c-1.08 0-2.03-.69-2.37-1.71s-.18-.53-.18-.53A5.496 5.496 0 0 0 15.97 4H6.5C4.02 4 2 6.02 2 8.5v30C2 41.53 4.47 44 7.5 44h33c3.03 0 5.5-2.47 5.5-5.5v-23c0-3.03-2.47-5.5-5.5-5.5z"></path>
                                            </svg>
                                          </div>
                                          <div
                                            aria-level="4"
                                            class="x1xqt7ti xsuwoey x63nzvj x1qsmy5i xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj x1fcty0u xeuugli"
                                            role="heading"
                                          >
                                            <span
                                              style={{ color: "#1c2b33" }}
                                              class="_4gz1"
                                            >
                                              {campaign?.campaingname}
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                    </span>
                                  </div>
                                </div>
                                <div class="x6s0dn4 x3nfvp2 x1i64zmx x1emribx">
                                  <i
                                    alt=""
                                    data-visualcompletion="css-img"
                                    class="img style-slg5M"
                                    id="style-slg5M"
                                  ></i>
                                </div>
                                <div class="x1iyjqo2 xc02obx x6ikm8r x10wlt62 xlyipyv xuxw1ft x1r8uery">
                                  <div class="_3qn7 _61-0 _2fyi _3qng ">
                                    <span
                                      class=" "
                                      data-tracked="true"
                                      data-clickable="1"
                                    >
                                      <div
                                        class="xo1l8bm xbsr9hj  x1v911su x1iorvi4 xjkvuk6 x1e558r4 x150jy0e x1lcm9me x1yr5g0i xrt01vj x10y3i5r"
                                        data-hover="tooltip"
                                        data-testid="nav-header-CAMPAIGN"
                                        data-tooltip-content="1 Ad set"
                                        data-tooltip-display="overflow"
                                        data-tooltip-position="above"
                                        data-tooltip-text-direction="auto"
                                      >
                                        <a
                                          data-hover="tooltip"
                                          data-tooltip-display="overflow"
                                          class="_231w _4yeg style-dIHCX"
                                          href="#"
                                          id="style-dIHCX"
                                        >
                                          <div class="_96mf">
                                            <div class="_96mg">
                                              <svg
                                                viewBox="0 0 16 16"
                                                width="1em"
                                                height="1em"
                                                fill="currentColor"
                                                class="x4s1yf2 xlup9mm x1kky2od"
                                              >
                                                <g data-name="Layer 2">
                                                  <g>
                                                    <g data-name="16">
                                                      <rect
                                                        class="xbh8q5q xi5qq39"
                                                        x="9.5"
                                                        y="0.5"
                                                        width="6"
                                                        height="6"
                                                        rx="1"
                                                      ></rect>
                                                      <rect
                                                        class="xbh8q5q xi5qq39"
                                                        x="0.5"
                                                        y="0.5"
                                                        width="6"
                                                        height="6"
                                                        rx="1"
                                                      ></rect>
                                                      <rect
                                                        class="xbh8q5q xi5qq39"
                                                        x="9.5"
                                                        y="9.5"
                                                        width="6"
                                                        height="6"
                                                        rx="1"
                                                        transform="rotate(90 12.5 12.5)"
                                                      ></rect>
                                                      <rect
                                                        class="xbh8q5q xi5qq39"
                                                        x="0.5"
                                                        y="9.5"
                                                        width="6"
                                                        height="6"
                                                        rx="1"
                                                        transform="rotate(90 3.5 12.5)"
                                                      ></rect>
                                                    </g>
                                                  </g>
                                                </g>
                                              </svg>
                                            </div>
                                            <div
                                              aria-level="4"
                                              class="x1xqt7ti xsuwoey x63nzvj x1541jtf xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj x1fcty0u xeuugli"
                                              role="heading"
                                            >
                                              <span class="_4gz1">
                                                1 Ad set
                                              </span>
                                            </div>
                                          </div>
                                        </a>
                                      </div>
                                    </span>
                                  </div>
                                </div>
                                <div class="x6s0dn4 x3nfvp2 x1i64zmx x1emribx">
                                  <i
                                    alt=""
                                    data-visualcompletion="css-img"
                                    class="img style-5Skjy"
                                    id="style-5Skjy"
                                  ></i>
                                </div>
                                <div class="x1iyjqo2 xc02obx x6ikm8r x10wlt62 x1xlr1w8 x1qsmy5i x1k4ywey x1iorvi4 xjkvuk6 x1e558r4 x150jy0e x1lcm9me x1yr5g0i xrt01vj x10y3i5r xlyipyv xuxw1ft x1r8uery">
                                  <div class="_3qn7 _61-0 _2fyi _3qng">
                                    <span
                                      class=" "
                                      data-tracked="true"
                                      data-clickable="1"
                                    >
                                      <div
                                        class="xo1l8bm xbsr9hj x1v911su x1iorvi4 xjkvuk6 x1e558r4 x150jy0e x1lcm9me x1yr5g0i xrt01vj x10y3i5r"
                                        data-hover="tooltip"
                                        data-testid="nav-header-ADGROUP"
                                        data-tooltip-content="1 Ad"
                                        data-tooltip-display="overflow"
                                        data-tooltip-position="above"
                                        data-tooltip-text-direction="auto"
                                      >
                                        <a
                                          data-hover="tooltip"
                                          data-tooltip-display="overflow"
                                          class="_231w _4yeg style-d7ijO"
                                          href="#"
                                          id="style-d7ijO"
                                        >
                                          <div class="_96mf">
                                            <div class="_96mg">
                                              <svg
                                                viewBox="0 0 16 16"
                                                width="1em"
                                                height="1em"
                                                fill="currentColor"
                                                class="x4s1yf2 xlup9mm x1kky2od"
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
                                            </div>
                                            <div
                                              aria-level="4"
                                              class="x1xqt7ti xsuwoey x63nzvj x1541jtf xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj x1fcty0u xeuugli"
                                              role="heading"
                                            >
                                              <span
                                                class="_4gz1"
                                                style={{ color: "#0a78be" }}
                                              >
                                                1 Ad
                                              </span>
                                            </div>
                                          </div>
                                        </a>
                                      </div>
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="_8ivh">
                              <div class="_8ivk">
                                <div class="x6s0dn4 x78zum5 x2lwn1j xeuugli x14ju556">
                                  <div class="x6s0dn4 x3nfvp2 x1xxsxie x16n37ib xq8finb xp4054r">
                                    <span>
                                      <div class="ellipsis">
                                        <div class="clearfix _ikh">
                                          <div class="_4bl7">
                                            <div class="x1yc453h x1kky2od x1y5rjcf">
                                              <i
                                                alt=""
                                                data-visualcompletion="css-img"
                                                class="img style-8242S"
                                                id="style-8242S"
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
                                  <div class="xy80clv x26u7qi xckqwgs x1i1rx1s x17rw0jw xmo9yow"></div>
                                  <div data-visualcompletion="ignore" class="">
                                    <div>
                                      <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x19lwn94 x1c4vz4f">
                                        <div class="x1rg5ohu x1n2onr6 x3oybdh">
                                          <input
                                            aria-checked="true"
                                            aria-label="On/Off"
                                            role="switch"
                                            aria-describedby="js_32"
                                            aria-labelledby="js_ak"
                                            class="xjyslct x1ypdohk x5yr21d x17qophe xdj266r x11i5rnm xat24cr x1mh8g0r x1w3u9th x1t137rt x10l6tqk x13vifvy xh8yej3 x1vjfegm"
                                            id="js_31"
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
                                </div>
                              </div>
                              <div
                                aria-busy="false"
                                aria-controls="js_33"
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
                                      Action Menu
                                    </div>
                                    <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1hc1fzr x13dflua x6o7n8i xxziih7 x12w9bfk xl56j7k xh8yej3">
                                      <div
                                        class="x3nfvp2 x120ccyz x1heor9g x2lah0s x1c4vz4f"
                                        role="presentation"
                                      >
                                        <div
                                          class="xtwfq29 style-mPBqa"
                                          id="style-mPBqa"
                                        ></div>
                                      </div>
                                    </div>
                                  </div>
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="x9f619 xh8yej3 x2izyaf x15bcfbt xolcy6v x3ckiwt xc2dlm9 x178xt8z xcfux6l xso031l xm0m39n xgif2c7 x78zum5 xl56j7k x6s0dn4 x1ejq31n xt7dq6l x1gg8mnh xjexgjb xexx8yu x4uap5 x18d9i69 xkhd6sd x1n2onr6">
                          <div
                            class="x2b8uid x10l6tqk xtzzx4i xuuh30 xh8yej3 style-GayID"
                            id="style-GayID"
                          >
                            <div
                              class="x78zum5 xh8yej3 xl56j7k"
                              id="ads_review_and_edit_tab"
                            >
                              <div class="x1e56ztr">
                                <div
                                  class="x78zum5 xh8yej3 xl56j7k snipcss-kOjz5"
                                  id="ads_review_and_edit_tab"
                                >
                                  <div class="x1e56ztr">
                                    <div
                                      class="x78zum5 xdmi676 x193iq5w x6ikm8r x10wlt62 x1n2onr6 xmi5d70 x1fvot60 xo1l8bm xxio538"
                                      role="tablist"
                                    >
                                      <div
                                        aria-hidden="false"
                                        aria-label="Edit"
                                        aria-selected="true"
                                        class="x1i10hfl xjqpnuy xa49m3k xqeqjp1 x2hbi6w x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xdl72j9 xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli x1n2onr6 x16tdsg8 x1hl2dhg xggy1nq x1ja2u2z x1t137rt x6s0dn4 x78zum5 x1q0g3np x2lah0s xl56j7k x1lku1pv x1g40iwv x1lcm9me x1yr5g0i xrt01vj x10y3i5r x1y1aw1k xwib8y2 x1ye3gou xn6708d x1xlr1w8 x1qsmy5i x1k4ywey "
                                        role="tab"
                                        tabindex="0"
                                        data-tracked="true"
                                        data-interactable="|click|"
                                      >
                                        <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 xs83m0k x19lwn94 xl56j7k">
                                          <div
                                            class="x3nfvp2 x120ccyz x1heor9g x2lah0s"
                                            role="presentation"
                                          >
                                            <div
                                              class="xtwfq29 style-ObdRa"
                                              id="style-ObdRa"
                                            ></div>
                                          </div>
                                          <div
                                            aria-hidden="true"
                                            class="x3nfvp2 xdt5ytf xs83m0k xeuugli x6ikm8r x10wlt62"
                                          >
                                            <span class="x6ikm8r x10wlt62 xlyipyv xmi5d70 x1fvot60 xxio538 x1heor9g xuxw1ft x2b8uid x117nqv4">
                                              Edit
                                            </span>
                                            <span class="xmi5d70 x1fvot60 xo1l8bm xxio538 xbsr9hj xuxw1ft x2b8uid xqtp20y xlshs6z x6ikm8r x10wlt62 x87ps6o x47corl">
                                              Edit
                                            </span>
                                            <span class="xmi5d70 x1fvot60 xxio538 x1heor9g xuxw1ft x2b8uid x117nqv4 xqtp20y xlshs6z x6ikm8r x10wlt62 x87ps6o x47corl">
                                              Edit
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                      <div
                                        aria-hidden="false"
                                        aria-label="Review"
                                        aria-selected="false"
                                        class="x1i10hfl xjqpnuy xa49m3k xqeqjp1 x2hbi6w x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xdl72j9 xe8uvvx xdj266r x11i5rnm xat24cr x2lwn1j xeuugli x1n2onr6 x16tdsg8 x1hl2dhg xggy1nq x1ja2u2z x1t137rt x6s0dn4 x78zum5 x1q0g3np x2lah0s xl56j7k x1lku1pv x1g40iwv x1lcm9me x1yr5g0i xrt01vj x10y3i5r x1y1aw1k xwib8y2 x1ye3gou xn6708d xo1l8bm xbsr9hj x1v911su x1i64zmx "
                                        role="tab"
                                        tabindex="0"
                                        data-tracked="true"
                                        data-interactable="|click|"
                                      >
                                        <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 xs83m0k x19lwn94 xl56j7k">
                                          <div
                                            class="x3nfvp2 x120ccyz x1heor9g x2lah0s"
                                            role="presentation"
                                          >
                                            <div
                                              class="xtwfq29 style-geDQF"
                                              id="style-geDQF"
                                            ></div>
                                          </div>
                                          <div
                                            aria-hidden="true"
                                            class="x3nfvp2 xdt5ytf xs83m0k xeuugli x6ikm8r x10wlt62"
                                          >
                                            <span class="x6ikm8r x10wlt62 xlyipyv xmi5d70 x1fvot60 xo1l8bm xxio538 xbsr9hj xuxw1ft x2b8uid">
                                              Review
                                            </span>
                                            <span class="xmi5d70 x1fvot60 xo1l8bm xxio538 xbsr9hj xuxw1ft x2b8uid xqtp20y xlshs6z x6ikm8r x10wlt62 x87ps6o x47corl">
                                              Review
                                            </span>
                                            <span class="xmi5d70 x1fvot60 xxio538 x1heor9g xuxw1ft x2b8uid x117nqv4 xqtp20y xlshs6z x6ikm8r x10wlt62 x87ps6o x47corl">
                                              Review
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                      <div
                                        aria-haspopup="true"
                                        aria-hidden="true"
                                        aria-label="More"
                                        class="x1i10hfl xjqpnuy xa49m3k xqeqjp1 x2hbi6w x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xdl72j9 xe8uvvx xdj266r x11i5rnm xat24cr x2lwn1j xeuugli x16tdsg8 x1hl2dhg xggy1nq x1ja2u2z x1t137rt x6s0dn4 x78zum5 x1q0g3np x2lah0s xl56j7k x1lku1pv x1g40iwv x1lcm9me x1yr5g0i xrt01vj x10y3i5r x1y1aw1k xwib8y2 x1ye3gou xn6708d xo1l8bm xbsr9hj x1v911su x10l6tqk x47corl x1i64zmx xlshs6z"
                                        role="button"
                                        tabindex="-1"
                                      >
                                        <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 xs83m0k x19lwn94 xl56j7k">
                                          <div
                                            aria-hidden="true"
                                            class="x3nfvp2 xdt5ytf xs83m0k xeuugli x6ikm8r x10wlt62"
                                          >
                                            <span class="x6ikm8r x10wlt62 xlyipyv xmi5d70 x1fvot60 xo1l8bm xxio538 xbsr9hj xuxw1ft x2b8uid">
                                              More
                                            </span>
                                            <span class="xmi5d70 x1fvot60 xo1l8bm xxio538 xbsr9hj xuxw1ft x2b8uid xqtp20y xlshs6z x6ikm8r x10wlt62 x87ps6o x47corl">
                                              More
                                            </span>
                                            <span class="xmi5d70 x1fvot60 xxio538 x1heor9g xuxw1ft x2b8uid x117nqv4 xqtp20y xlshs6z x6ikm8r x10wlt62 x87ps6o x47corl">
                                              More
                                            </span>
                                          </div>
                                          <div
                                            class="x3nfvp2 x120ccyz x1heor9g"
                                            role="presentation"
                                          >
                                            <div
                                              class="xtwfq29 style-HLKAT"
                                              id="style-HLKAT"
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
                    <div class="_22s_ _7ayd _8z1m">
                      <div
                        class="x78zum5 xdt5ytf x193iq5w xw2csxc xh8yej3 x1vjfegm x1n2onr6 x1q85c4o xiy17q3 x1nr1p0w x2li9jd xldge1k x6n32m9 xg6iff7 snipcss-pi9vt"
                        data-auto-logging-component-type="GeoPage"
                      >
                        <div class="x78zum5 x1iyjqo2 xs83m0k x1odjw0f x1q59h4z x6s0dn4 xdt5ytf x1nhvcw1 xwxc41k xxbr6pl xbbxn1n xyamay9">
                          <div class="x78zum5 xdt5ytf x1iyjqo2 xs83m0k x5yr21d x2lwn1j xeuugli xh8yej3 x11jghpn">
                            <div class="x1qjc9v5 x78zum5 x1iyjqo2 xeuugli xdt5ytf xs83m0k xozqiw3 x169t7cy x2lwn1j">
                              <div class="x78zum5 x1a02dak x1plvlek xryxfnj x2lah0s">
                                <div
                                  class="x1qjc9v5 x78zum5 x2lwn1j xeuugli x1d52u69 xw7yly9 style-7oSfW"
                                  data-auto-logging-component-type="GeoPageItem"
                                  id="style-7oSfW"
                                >
                                  <div class="x78zum5 x1iyjqo2 xs83m0k x1cy8zhl xl56j7k xeuugli xexx8yu x4uap5 x18d9i69 xkhd6sd x1plvlek xryxfnj">
                                    <div class="x78zum5 xdt5ytf x1iyjqo2 xs83m0k x2lwn1j xeuugli xh8yej3 xt7dq6l x11jghpn">
                                      <div class="x1qjc9v5 x78zum5 x1iyjqo2 x1a02dak x2lwn1j xeuugli xp7jhwk x9otpla">
                                        <span
                                          data-surface-wrapper="1"
                                          data-surface="/am/editor_drawer/performance_summary:campaign/delivery_status_errors"
                                          data-auto-logging-id="f1f6de6bedceaa"
                                          id="style-i58YA"
                                          class="style-i58YA"
                                        ></span>
                                        <span
                                          data-surface-wrapper="1"
                                          data-surface="/am/editor_drawer/performance_summary:campaign/delivery_status_warnings"
                                          data-auto-logging-id="f635186f4a86ac"
                                          id="style-v53lE"
                                          class="style-v53lE"
                                        ></span>
                                        <span
                                          data-surface-wrapper="1"
                                          data-surface="/am/editor_drawer/performance_summary:campaign/insights_overview"
                                          data-auto-logging-id="f1c4a99f128826c"
                                          id="style-nhhGX"
                                          class="style-nhhGX"
                                        >
                                          <span
                                            data-surface-wrapper="1"
                                            data-non-int-surface="/am/hero_root:AdsPEMainAppWithLeftNavigation.react/editor_drawer/hero_root:AdsPEInsightsTrayTabContentContainer.react/performance_summary:campaign/insights_overview/hero_root:PerformanceSummaryInsightsOverviewContainer.react"
                                            data-auto-logging-id="faabe2c5d78ddc"
                                            id="style-TjQ9t"
                                            class="style-TjQ9t"
                                          >
                                            <div class="xh8yej3">
                                              <div data-pagelet="performanceContainer_iax">
                                                <div
                                                  class="x1qjc9v5 x78zum5 x2lwn1j xeuugli x1i64zmx x1xmf6yo style-HpfjD"
                                                  data-auto-logging-component-type="GeoPageItem"
                                                  id="style-HpfjD"
                                                >
                                                  <div class="xh8yej3 uiContextualLayerParent">
                                                    <div
                                                      class="x1n2onr6 x1iyjqo2 xh8yej3 x5yr21d"
                                                      data-auto-logging-component-type="GeoCardSideSheet"
                                                      data-auto-logging-dependent-region=""
                                                    >
                                                      <div
                                                        aria-labelledby="js_1dc"
                                                        class="x1gzqxud x1lcm9me x1yr5g0i xrt01vj x10y3i5r xhgxa4x xy5ysw6 x1qkj6lk xn3walq xnvurfn xv1ta3e x1opv7go x1dtnpoi xibdhds xtnng9g xhvrwov x13k1m86 xwx4but x1cpjm7i xszcg87 x1hmns74 xkk1bqk x14d4353 xsxiz9q x1rmj1tg xchklzq x9f619 xc8icb0 x1n2onr6 x1pvq41x xhhp2wi x14q35kh x1wa3ocq x1n7iyjn x1s928wv x1wsn0xg x1j6awrg x162n7g1 x1m1drc7 x4eaejv xi4xitw x5yr21d xh8yej3"
                                                        data-auto-logging-component-type="GeoCard"
                                                      >
                                                        <div class="x78zum5 xdt5ytf x5yr21d xedcshv x1t2pt76 xh8yej3">
                                                          <div class="x9f619 x78zum5 x2lah0s xh8yej3 xyamay9 x1l90r2v x1swvt13 x1pi30zi">
                                                            <div class="x1iyjqo2 xeuugli">
                                                              <div class="x1cy8zhl x78zum5 x1q0g3np x1qughib x2lwn1j xeuugli">
                                                                <div
                                                                  aria-level="3"
                                                                  class="x1xqt7ti x1uxerd5 x1xlr1w8 xrohxju xbsr9hj xq9mrsl x1yc453h x1h4wwuj xeuugli x1emribx"
                                                                  role="heading"
                                                                >
                                                                  Performance
                                                                  overview
                                                                </div>
                                                                <div class="x78zum5 x13a6bvl x2lwn1j xeuugli">
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
                                                                              Customise
                                                                              metrics
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
                                                              <div class="xqjyukv x78zum5 x2lwn1j xeuugli xh8yej3">
                                                                <div class="x1cy8zhl x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1c4vz4f xs83m0k x19lwn94 xh8yej3">
                                                                  <div
                                                                    class="x1iyjqo2 xs83m0k xdl72j9 x3igimt xedcshv x1t2pt76 x1l90r2v x1swvt13 x1pi30zi xexx8yu"
                                                                    data-auto-logging-component-type="GeoSection"
                                                                    data-auto-logging-dependent-region=""
                                                                  >
                                                                    <div class="xfd5v8p">
                                                                      <div data-pagelet="metricPicker_iax">
                                                                        <div
                                                                          id="style-lOiP3"
                                                                          class="style-lOiP3"
                                                                        >
                                                                          <div
                                                                            class="x78zum5 xdj266r xkrivgy xat24cr x1gryazu x1a02dak style-k18MS"
                                                                            role="grid"
                                                                            id="style-k18MS"
                                                                          >
                                                                            <div
                                                                              style={{
                                                                                border:
                                                                                  "1px solid gainsboro",
                                                                              }}
                                                                              aria-selected="false"
                                                                              class="x1bdj1k2 x1y1aw1k xwib8y2 xurb0ha x1sxyh0 xdt5ytf x2lwn1j x1n2onr6 x1afcbsf x13faqbe x3oybdh x1iyjqo2 xs83m0k x1x0l8y7 x1v8p93f xogb00i x16stqrj x1ftr3km x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x178xt8z xm81vs4 xso031l xy80clv x78zum5 x450l9j x1lcm9me x1yr5g0i xrt01vj x10y3i5r xo1l8bm xbsr9hj x1v911su x1gslohp x12nagc xsgj6o6 xw3qccf xnl74ce xmb4j5p xdx8kah xwmxa91 x31ga2r xcmxnv6 x13afdcp x10va8jt xhhp2wi x14q35kh x1wa3ocq x1n7iyjn x1t0di37 x1tt7eqi xe25xm5 xsp6npd x1s928wv x1g2896h x1j6awrg xd3xj1f x7nagdb x1rs5hn9 x1pc5pqc style-9Dfer"
                                                                              role="row"
                                                                              id="style-9Dfer"
                                                                            >
                                                                              <div role="gridcell">
                                                                                <div
                                                                                  aria-describedby="js_1de"
                                                                                  aria-labelledby="js_1dd"
                                                                                  class="x1i10hfl x1qjc9v5 xjqpnuy xa49m3k xqeqjp1 x2hbi6w x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk x78zum5 xdl72j9 xdt5ytf x2lah0s xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli xexx8yu x4uap5 x18d9i69 xkhd6sd x16tdsg8 x1hl2dhg xggy1nq x1t137rt xo1l8bm xbsr9hj x1v911su x1lcm9me x1yr5g0i xrt01vj x10y3i5r x10l6tqk x13vifvy x17qophe xh8yej3 x5yr21d x1vjfegm"
                                                                                  role="button"
                                                                                  tabindex="0"
                                                                                ></div>
                                                                              </div>
                                                                              <div class="x1k90msu x19991ni x1qfuztq xg01cxk x5yr21d xh8yej3 x10l6tqk x17qophe x13vifvy x1lcm9me x1yr5g0i xrt01vj x10y3i5r x1lia0d6"></div>
                                                                              <div class="xwebqov xvyu6v8 xrsgblv x10lij0i x1lcm9me x1yr5g0i xrt01vj x10y3i5r x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x178xt8z xm81vs4 xso031l xy80clv x13dflua x6o7n8i xxziih7 x12w9bfk xg01cxk x47corl x10l6tqk x17qophe xds687c x13vifvy x1ey2m1c x6ikm8r x10wlt62 xnl74ce xmb4j5p xdx8kah xwmxa91 xmn8db3 x8lbu6m x2te4dl x1bs8fl3 xhhp2wi x14q35kh x1wa3ocq x1n7iyjn x1t0di37 x1tt7eqi xe25xm5 xsp6npd x1s928wv x1w3onc2 x1j6awrg x9obomg x1ryaxvv x1hvfe8t x1te75w5"></div>
                                                                              <div>
                                                                                <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94">
                                                                                  <div class="xeuugli">
                                                                                    <div class="x1cy8zhl x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x65s2av">
                                                                                      <div
                                                                                        class="xmi5d70 x1fvot60 xxio538 xbsr9hj xq9mrsl x1h4wwuj x117nqv4 xeuugli x104kibb x6ikm8r x10wlt62 x1ua5tub style-PWGVX"
                                                                                        id="js_1dd"
                                                                                      >
                                                                                        Link
                                                                                        Clicks
                                                                                      </div>
                                                                                      <div class="x1gslohp x1ypdohk x78zum5 xhtitgo">
                                                                                        <div
                                                                                          class="x3nfvp2 x120ccyz x4s1yf2"
                                                                                          role="presentation"
                                                                                        >
                                                                                          <div
                                                                                            class="xtwfq29 style-7sYcH"
                                                                                            id="style-7sYcH"
                                                                                          ></div>
                                                                                        </div>
                                                                                      </div>
                                                                                    </div>
                                                                                  </div>
                                                                                </div>
                                                                                <div class="x78zum5 xdt5ytf x1a02dak x2lwn1j xeuugli x1iyjqo2 xavht8x x1pha0wt">
                                                                                  <div class="x1xqt7ti x10d9sdx x1iikomf xrohxju xbsr9hj xq9mrsl x1yc453h x1h4wwuj xeuugli x2lah0s">
                                                                                    {
                                                                                      campaign?.Results
                                                                                    }
                                                                                  </div>
                                                                                  <div
                                                                                    id="style-nB9XB"
                                                                                    class="style-nB9XB"
                                                                                  >
                                                                                    <div class="x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x65s2av x1pha0wt xbsr9hj">
                                                                                      <span class="xmi5d70 x1fvot60 xo1l8bm xxio538 x1heor9g xq9mrsl x1h4wwuj xeuugli">
                                                                                        ––
                                                                                      </span>
                                                                                    </div>
                                                                                  </div>
                                                                                </div>
                                                                              </div>
                                                                            </div>
                                                                            <div
                                                                              style={{
                                                                                border:
                                                                                  "1px solid gainsboro",
                                                                              }}
                                                                              aria-selected="false"
                                                                              class="x1bdj1k2 x1y1aw1k xwib8y2 xurb0ha x1sxyh0 xdt5ytf x2lwn1j x1n2onr6 x1afcbsf x13faqbe x3oybdh x1iyjqo2 xs83m0k x1x0l8y7 x1v8p93f xogb00i x16stqrj x1ftr3km x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x178xt8z xm81vs4 xso031l xy80clv x78zum5 x450l9j x1lcm9me x1yr5g0i xrt01vj x10y3i5r xo1l8bm xbsr9hj x1v911su x1gslohp x12nagc xsgj6o6 xw3qccf xnl74ce xmb4j5p xdx8kah xwmxa91 x31ga2r xcmxnv6 x13afdcp x10va8jt xhhp2wi x14q35kh x1wa3ocq x1n7iyjn x1t0di37 x1tt7eqi xe25xm5 xsp6npd x1s928wv x1g2896h x1j6awrg xd3xj1f x7nagdb x1rs5hn9 x1pc5pqc"
                                                                              role="row"
                                                                            >
                                                                              <div role="gridcell">
                                                                                <div
                                                                                  aria-describedby="js_1dg"
                                                                                  aria-labelledby="js_1df"
                                                                                  class="x1i10hfl x1qjc9v5 xjqpnuy xa49m3k xqeqjp1 x2hbi6w x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk x78zum5 xdl72j9 xdt5ytf x2lah0s xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli xexx8yu x4uap5 x18d9i69 xkhd6sd x16tdsg8 x1hl2dhg xggy1nq x1t137rt xo1l8bm xbsr9hj x1v911su x1lcm9me x1yr5g0i xrt01vj x10y3i5r x10l6tqk x13vifvy x17qophe xh8yej3 x5yr21d x1vjfegm"
                                                                                  role="button"
                                                                                  tabindex="0"
                                                                                ></div>
                                                                              </div>
                                                                              <div class="x1k90msu x19991ni x1qfuztq xg01cxk x5yr21d xh8yej3 x10l6tqk x17qophe x13vifvy x1lcm9me x1yr5g0i xrt01vj x10y3i5r x1lia0d6"></div>
                                                                              <div class="xwebqov xvyu6v8 xrsgblv x10lij0i x1lcm9me x1yr5g0i xrt01vj x10y3i5r x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x178xt8z xm81vs4 xso031l xy80clv x13dflua x6o7n8i xxziih7 x12w9bfk xg01cxk x47corl x10l6tqk x17qophe xds687c x13vifvy x1ey2m1c x6ikm8r x10wlt62 xnl74ce xmb4j5p xdx8kah xwmxa91 xmn8db3 x8lbu6m x2te4dl x1bs8fl3 xhhp2wi x14q35kh x1wa3ocq x1n7iyjn x1t0di37 x1tt7eqi xe25xm5 xsp6npd x1s928wv x1w3onc2 x1j6awrg x9obomg x1ryaxvv x1hvfe8t x1te75w5"></div>
                                                                              <div>
                                                                                <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94">
                                                                                  <div class="xeuugli">
                                                                                    <div class="x1cy8zhl x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x65s2av">
                                                                                      <div
                                                                                        class="xmi5d70 x1fvot60 xxio538 xbsr9hj xq9mrsl x1h4wwuj x117nqv4 xeuugli x104kibb x6ikm8r x10wlt62 x1ua5tub style-LhZVn"
                                                                                        id="js_1df"
                                                                                      >
                                                                                        Per
                                                                                        link
                                                                                        click
                                                                                      </div>
                                                                                      <div class="x1gslohp x1ypdohk x78zum5 xhtitgo">
                                                                                        <div
                                                                                          class="x3nfvp2 x120ccyz x4s1yf2"
                                                                                          role="presentation"
                                                                                        >
                                                                                          <div
                                                                                            class="xtwfq29 style-EZ5Gk"
                                                                                            id="style-EZ5Gk"
                                                                                          ></div>
                                                                                        </div>
                                                                                      </div>
                                                                                    </div>
                                                                                  </div>
                                                                                </div>
                                                                                <div class="x78zum5 xdt5ytf x1a02dak x2lwn1j xeuugli x1iyjqo2 xavht8x x1pha0wt">
                                                                                  <div class="x1xqt7ti x10d9sdx x1iikomf xrohxju xbsr9hj xq9mrsl x1yc453h x1h4wwuj xeuugli x2lah0s">
                                                                                    <span class="_3dfi _3dfj">
                                                                                      {
                                                                                        campaign?.Costperresult
                                                                                      }
                                                                                    </span>
                                                                                  </div>
                                                                                  <div
                                                                                    id="style-QSsSq"
                                                                                    class="style-QSsSq"
                                                                                  >
                                                                                    <div class="x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x65s2av x1pha0wt xbsr9hj">
                                                                                      <span class="xmi5d70 x1fvot60 xo1l8bm xxio538 x1heor9g xq9mrsl x1h4wwuj xeuugli">
                                                                                        ––
                                                                                      </span>
                                                                                    </div>
                                                                                  </div>
                                                                                </div>
                                                                              </div>
                                                                            </div>
                                                                            <div
                                                                              style={{
                                                                                border:
                                                                                  "1px solid gainsboro",
                                                                              }}
                                                                              aria-selected="false"
                                                                              class="x1bdj1k2 x1y1aw1k xwib8y2 xurb0ha x1sxyh0 xdt5ytf x2lwn1j x1n2onr6 x1afcbsf x13faqbe x3oybdh x1iyjqo2 xs83m0k x1x0l8y7 x1v8p93f xogb00i x16stqrj x1ftr3km x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x178xt8z xm81vs4 xso031l xy80clv x78zum5 x450l9j x1lcm9me x1yr5g0i xrt01vj x10y3i5r xo1l8bm xbsr9hj x1v911su x1gslohp x12nagc xsgj6o6 xw3qccf xnl74ce xmb4j5p xdx8kah xwmxa91 x31ga2r xcmxnv6 x13afdcp x10va8jt xhhp2wi x14q35kh x1wa3ocq x1n7iyjn x1t0di37 x1tt7eqi xe25xm5 xsp6npd x1s928wv x1g2896h x1j6awrg xd3xj1f x7nagdb x1rs5hn9 x1pc5pqc"
                                                                              role="row"
                                                                            >
                                                                              <div role="gridcell">
                                                                                <div
                                                                                  aria-describedby="js_1di"
                                                                                  aria-labelledby="js_1dh"
                                                                                  class="x1i10hfl x1qjc9v5 xjqpnuy xa49m3k xqeqjp1 x2hbi6w x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk x78zum5 xdl72j9 xdt5ytf x2lah0s xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli xexx8yu x4uap5 x18d9i69 xkhd6sd x16tdsg8 x1hl2dhg xggy1nq x1t137rt xo1l8bm xbsr9hj x1v911su x1lcm9me x1yr5g0i xrt01vj x10y3i5r x10l6tqk x13vifvy x17qophe xh8yej3 x5yr21d x1vjfegm"
                                                                                  role="button"
                                                                                  tabindex="0"
                                                                                ></div>
                                                                              </div>
                                                                              <div class="x1k90msu x19991ni x1qfuztq xg01cxk x5yr21d xh8yej3 x10l6tqk x17qophe x13vifvy x1lcm9me x1yr5g0i xrt01vj x10y3i5r x1lia0d6"></div>
                                                                              <div class="xwebqov xvyu6v8 xrsgblv x10lij0i x1lcm9me x1yr5g0i xrt01vj x10y3i5r x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x178xt8z xm81vs4 xso031l xy80clv x13dflua x6o7n8i xxziih7 x12w9bfk xg01cxk x47corl x10l6tqk x17qophe xds687c x13vifvy x1ey2m1c x6ikm8r x10wlt62 xnl74ce xmb4j5p xdx8kah xwmxa91 xmn8db3 x8lbu6m x2te4dl x1bs8fl3 xhhp2wi x14q35kh x1wa3ocq x1n7iyjn x1t0di37 x1tt7eqi xe25xm5 xsp6npd x1s928wv x1w3onc2 x1j6awrg x9obomg x1ryaxvv x1hvfe8t x1te75w5"></div>
                                                                              <div>
                                                                                <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94">
                                                                                  <div class="xeuugli">
                                                                                    <div class="x1cy8zhl x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x65s2av">
                                                                                      <div
                                                                                        class="xmi5d70 x1fvot60 xxio538 xbsr9hj xq9mrsl x1h4wwuj x117nqv4 xeuugli x104kibb x6ikm8r x10wlt62 x1ua5tub style-zsSmx"
                                                                                        id="js_1dh"
                                                                                      >
                                                                                        Amount
                                                                                        spent
                                                                                      </div>
                                                                                      <div class="x1gslohp x1ypdohk x78zum5 xhtitgo">
                                                                                        <div
                                                                                          class="x3nfvp2 x120ccyz x4s1yf2"
                                                                                          role="presentation"
                                                                                        >
                                                                                          <div
                                                                                            class="xtwfq29 style-9NEPC"
                                                                                            id="style-9NEPC"
                                                                                          ></div>
                                                                                        </div>
                                                                                      </div>
                                                                                    </div>
                                                                                  </div>
                                                                                </div>
                                                                                <div class="x78zum5 xdt5ytf x1a02dak x2lwn1j xeuugli x1iyjqo2 xavht8x x1pha0wt">
                                                                                  <div class="x1xqt7ti x10d9sdx x1iikomf xrohxju xbsr9hj xq9mrsl x1yc453h x1h4wwuj xeuugli x2lah0s">
                                                                                    <span class="_3dfi _3dfj">
                                                                                      {
                                                                                        campaign?.Amountspent
                                                                                      }
                                                                                    </span>
                                                                                  </div>
                                                                                  <div
                                                                                    id="style-GmxKE"
                                                                                    class="style-GmxKE"
                                                                                  >
                                                                                    <div class="x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x65s2av x1pha0wt xbsr9hj">
                                                                                      <span class="xmi5d70 x1fvot60 xo1l8bm xxio538 x1heor9g xq9mrsl x1h4wwuj xeuugli">
                                                                                        ––
                                                                                      </span>
                                                                                    </div>
                                                                                  </div>
                                                                                </div>
                                                                              </div>
                                                                            </div>
                                                                          </div>
                                                                        </div>
                                                                      </div>
                                                                      <div data-pagelet="chart_iax">
                                                                        <div>
                                                                          <div class="xh8yej3">
                                                                            <div class="x6ikm8r x10wlt62">
                                                                              <div>
                                                                                <div class="x78zum5 xdt5ytf x1nhvcw1 x2lwn1j xeuugli">
                                                                                  <div
                                                                                    aria-level="3"
                                                                                    class="x1xqt7ti x1uxerd5 x1xlr1w8 xrohxju xbsr9hj xq9mrsl x1yc453h x1h4wwuj xeuugli x1xmf6yo x1e56ztr"
                                                                                    role="heading"
                                                                                  >
                                                                                    Link
                                                                                    Clicks
                                                                                  </div>
                                                                                </div>
                                                                                <div class="xurb0ha x1sxyh0 xsgj6o6 xw3qccf">
                                                                                  <div class="x78zum5 xdt5ytf xozqiw3 x2lwn1j xeuugli x1iyjqo2 xavht8x xh8yej3 xmrbpvb">
                                                                                    <div
                                                                                      class="x1qvwoe0 xjm9jq1 x1y332i5 xcwd3tp x1jyxor1 x39eecv x6ikm8r x10wlt62 x10l6tqk xuxw1ft x1i1rx1s"
                                                                                      data-sscoverage-ignore="true"
                                                                                    >
                                                                                      <div class="xeuugli">
                                                                                        <div
                                                                                          aria-level="2"
                                                                                          class="x1xqt7ti xm46was x1xlr1w8 x1jrz1v4 xbsr9hj xq9mrsl x1yc453h x1h4wwuj xeuugli"
                                                                                          id="js_1dk"
                                                                                          role="heading"
                                                                                        >
                                                                                          Link
                                                                                          Clicks
                                                                                        </div>
                                                                                      </div>
                                                                                    </div>
                                                                                    <div
                                                                                      class="x78zum5 x2lwn1j xeuugli x1iyjqo2 x1n2onr6 style-24Gck"
                                                                                      id="style-24Gck"
                                                                                    >
                                                                                      <svg
                                                                                        aria-describedby="js_1dj"
                                                                                        aria-labelledby="js_1dk"
                                                                                        class="x5yr21d x1plvlek xryxfnj x10l6tqk x17qophe x13vifvy xh8yej3"
                                                                                        height="202"
                                                                                        role="img"
                                                                                        width="955.1875"
                                                                                      >
                                                                                        <g transform="translate(73, 169)">
                                                                                          <line
                                                                                            y2="0"
                                                                                            stroke="rgba(0,0,0,0.15)"
                                                                                          ></line>
                                                                                          <text
                                                                                            y="8"
                                                                                            class="x9yny3i xw6cgo0 xmi5d70 x1fvot60 xo1l8bm xxio538"
                                                                                            fill="rgba(28,43,51,1)"
                                                                                          >
                                                                                            1
                                                                                            May
                                                                                          </text>
                                                                                        </g>
                                                                                        <g transform="translate(123.95220588235293, 169)">
                                                                                          <line
                                                                                            y2="0"
                                                                                            stroke="rgba(0,0,0,0.15)"
                                                                                          ></line>
                                                                                          <text
                                                                                            y="8"
                                                                                            class="x9yny3i xw6cgo0 xmi5d70 x1fvot60 xo1l8bm xxio538"
                                                                                            fill="rgba(28,43,51,1)"
                                                                                          ></text>
                                                                                        </g>
                                                                                        <g transform="translate(174.90441176470586, 169)">
                                                                                          <line
                                                                                            y2="0"
                                                                                            stroke="rgba(0,0,0,0.15)"
                                                                                          ></line>
                                                                                          <text
                                                                                            y="8"
                                                                                            class="x9yny3i xw6cgo0 xmi5d70 x1fvot60 xo1l8bm xxio538"
                                                                                            fill="rgba(28,43,51,1)"
                                                                                          >
                                                                                            3
                                                                                            May
                                                                                          </text>
                                                                                        </g>
                                                                                        <g transform="translate(225.85661764705884, 169)">
                                                                                          <line
                                                                                            y2="0"
                                                                                            stroke="rgba(0,0,0,0.15)"
                                                                                          ></line>
                                                                                          <text
                                                                                            y="8"
                                                                                            class="x9yny3i xw6cgo0 xmi5d70 x1fvot60 xo1l8bm xxio538"
                                                                                            fill="rgba(28,43,51,1)"
                                                                                          ></text>
                                                                                        </g>
                                                                                        <g transform="translate(276.80882352941177, 169)">
                                                                                          <line
                                                                                            y2="0"
                                                                                            stroke="rgba(0,0,0,0.15)"
                                                                                          ></line>
                                                                                          <text
                                                                                            y="8"
                                                                                            class="x9yny3i xw6cgo0 xmi5d70 x1fvot60 xo1l8bm xxio538"
                                                                                            fill="rgba(28,43,51,1)"
                                                                                          >
                                                                                            5
                                                                                            May
                                                                                          </text>
                                                                                        </g>
                                                                                        <g transform="translate(327.7610294117647, 169)">
                                                                                          <line
                                                                                            y2="0"
                                                                                            stroke="rgba(0,0,0,0.15)"
                                                                                          ></line>
                                                                                          <text
                                                                                            y="8"
                                                                                            class="x9yny3i xw6cgo0 xmi5d70 x1fvot60 xo1l8bm xxio538"
                                                                                            fill="rgba(28,43,51,1)"
                                                                                          ></text>
                                                                                        </g>
                                                                                        <g transform="translate(378.7132352941177, 169)">
                                                                                          <line
                                                                                            y2="0"
                                                                                            stroke="rgba(0,0,0,0.15)"
                                                                                          ></line>
                                                                                          <text
                                                                                            y="8"
                                                                                            class="x9yny3i xw6cgo0 xmi5d70 x1fvot60 xo1l8bm xxio538"
                                                                                            fill="rgba(28,43,51,1)"
                                                                                          >
                                                                                            7
                                                                                            May
                                                                                          </text>
                                                                                        </g>
                                                                                        <g transform="translate(429.66544117647055, 169)">
                                                                                          <line
                                                                                            y2="0"
                                                                                            stroke="rgba(0,0,0,0.15)"
                                                                                          ></line>
                                                                                          <text
                                                                                            y="8"
                                                                                            class="x9yny3i xw6cgo0 xmi5d70 x1fvot60 xo1l8bm xxio538"
                                                                                            fill="rgba(28,43,51,1)"
                                                                                          ></text>
                                                                                        </g>
                                                                                        <g transform="translate(480.6176470588235, 169)">
                                                                                          <line
                                                                                            y2="0"
                                                                                            stroke="rgba(0,0,0,0.15)"
                                                                                          ></line>
                                                                                          <text
                                                                                            y="8"
                                                                                            class="x9yny3i xw6cgo0 xmi5d70 x1fvot60 xo1l8bm xxio538"
                                                                                            fill="rgba(28,43,51,1)"
                                                                                          >
                                                                                            9
                                                                                            May
                                                                                          </text>
                                                                                        </g>
                                                                                        <g transform="translate(531.5698529411765, 169)">
                                                                                          <line
                                                                                            y2="0"
                                                                                            stroke="rgba(0,0,0,0.15)"
                                                                                          ></line>
                                                                                          <text
                                                                                            y="8"
                                                                                            class="x9yny3i xw6cgo0 xmi5d70 x1fvot60 xo1l8bm xxio538"
                                                                                            fill="rgba(28,43,51,1)"
                                                                                          ></text>
                                                                                        </g>
                                                                                        <g transform="translate(582.5220588235294, 169)">
                                                                                          <line
                                                                                            y2="0"
                                                                                            stroke="rgba(0,0,0,0.15)"
                                                                                          ></line>
                                                                                          <text
                                                                                            y="8"
                                                                                            class="x9yny3i xw6cgo0 xmi5d70 x1fvot60 xo1l8bm xxio538"
                                                                                            fill="rgba(28,43,51,1)"
                                                                                          >
                                                                                            11
                                                                                            May
                                                                                          </text>
                                                                                        </g>
                                                                                        <g transform="translate(633.4742647058823, 169)">
                                                                                          <line
                                                                                            y2="0"
                                                                                            stroke="rgba(0,0,0,0.15)"
                                                                                          ></line>
                                                                                          <text
                                                                                            y="8"
                                                                                            class="x9yny3i xw6cgo0 xmi5d70 x1fvot60 xo1l8bm xxio538"
                                                                                            fill="rgba(28,43,51,1)"
                                                                                          ></text>
                                                                                        </g>
                                                                                        <g transform="translate(684.4264705882354, 169)">
                                                                                          <line
                                                                                            y2="0"
                                                                                            stroke="rgba(0,0,0,0.15)"
                                                                                          ></line>
                                                                                          <text
                                                                                            y="8"
                                                                                            class="x9yny3i xw6cgo0 xmi5d70 x1fvot60 xo1l8bm xxio538"
                                                                                            fill="rgba(28,43,51,1)"
                                                                                          >
                                                                                            13
                                                                                            May
                                                                                          </text>
                                                                                        </g>
                                                                                        <g transform="translate(735.3786764705882, 169)">
                                                                                          <line
                                                                                            y2="0"
                                                                                            stroke="rgba(0,0,0,0.15)"
                                                                                          ></line>
                                                                                          <text
                                                                                            y="8"
                                                                                            class="x9yny3i xw6cgo0 xmi5d70 x1fvot60 xo1l8bm xxio538"
                                                                                            fill="rgba(28,43,51,1)"
                                                                                          ></text>
                                                                                        </g>
                                                                                        <g transform="translate(786.3308823529411, 169)">
                                                                                          <line
                                                                                            y2="0"
                                                                                            stroke="rgba(0,0,0,0.15)"
                                                                                          ></line>
                                                                                          <text
                                                                                            y="8"
                                                                                            class="x9yny3i xw6cgo0 xmi5d70 x1fvot60 xo1l8bm xxio538"
                                                                                            fill="rgba(28,43,51,1)"
                                                                                          >
                                                                                            15
                                                                                            May
                                                                                          </text>
                                                                                        </g>
                                                                                        <g transform="translate(837.2830882352941, 169)">
                                                                                          <line
                                                                                            y2="0"
                                                                                            stroke="rgba(0,0,0,0.15)"
                                                                                          ></line>
                                                                                          <text
                                                                                            y="8"
                                                                                            class="x9yny3i xw6cgo0 xmi5d70 x1fvot60 xo1l8bm xxio538"
                                                                                            fill="rgba(28,43,51,1)"
                                                                                          ></text>
                                                                                        </g>
                                                                                        <g transform="translate(888.235294117647, 169)">
                                                                                          <line
                                                                                            y2="0"
                                                                                            stroke="rgba(0,0,0,0.15)"
                                                                                          ></line>
                                                                                          <text
                                                                                            y="8"
                                                                                            class="x9yny3i xw6cgo0 xmi5d70 x1fvot60 xo1l8bm xxio538"
                                                                                            fill="rgba(28,43,51,1)"
                                                                                          >
                                                                                            17
                                                                                            May
                                                                                          </text>
                                                                                        </g>
                                                                                        <g transform="translate(939.1875, 169)">
                                                                                          <line
                                                                                            y2="0"
                                                                                            stroke="rgba(0,0,0,0.15)"
                                                                                          ></line>
                                                                                          <text
                                                                                            y="8"
                                                                                            class="x9yny3i xw6cgo0 xmi5d70 x1fvot60 xo1l8bm xxio538"
                                                                                            fill="rgba(28,43,51,1)"
                                                                                          ></text>
                                                                                        </g>
                                                                                        <g transform="translate(41, 169)">
                                                                                          <line
                                                                                            x2="898.1875"
                                                                                            stroke="rgba(0,0,0,0.15)"
                                                                                          ></line>
                                                                                          <text
                                                                                            x="-8"
                                                                                            class="x1lzn6yi x1nibo1b xmi5d70 x1fvot60 xo1l8bm xxio538"
                                                                                            fill="rgba(28,43,51,1)"
                                                                                          >
                                                                                            0
                                                                                          </text>
                                                                                        </g>
                                                                                        <g transform="translate(41, 128.75)">
                                                                                          <line
                                                                                            x2="898.1875"
                                                                                            stroke="rgba(0,0,0,0.15)"
                                                                                          ></line>
                                                                                          <text
                                                                                            x="-8"
                                                                                            class="x1lzn6yi x1nibo1b xmi5d70 x1fvot60 xo1l8bm xxio538"
                                                                                            fill="rgba(28,43,51,1)"
                                                                                          >
                                                                                            2
                                                                                          </text>
                                                                                        </g>
                                                                                        <g transform="translate(41, 88.5)">
                                                                                          <line
                                                                                            x2="898.1875"
                                                                                            stroke="rgba(0,0,0,0.15)"
                                                                                          ></line>
                                                                                          <text
                                                                                            x="-8"
                                                                                            class="x1lzn6yi x1nibo1b xmi5d70 x1fvot60 xo1l8bm xxio538"
                                                                                            fill="rgba(28,43,51,1)"
                                                                                          >
                                                                                            4
                                                                                          </text>
                                                                                        </g>
                                                                                        <g transform="translate(41, 48.25)">
                                                                                          <line
                                                                                            x2="898.1875"
                                                                                            stroke="rgba(0,0,0,0.15)"
                                                                                          ></line>
                                                                                          <text
                                                                                            x="-8"
                                                                                            class="x1lzn6yi x1nibo1b xmi5d70 x1fvot60 xo1l8bm xxio538"
                                                                                            fill="rgba(28,43,51,1)"
                                                                                          >
                                                                                            6
                                                                                          </text>
                                                                                        </g>
                                                                                        <g transform="translate(41, 8)">
                                                                                          <line
                                                                                            x2="898.1875"
                                                                                            stroke="rgba(0,0,0,0.15)"
                                                                                          ></line>
                                                                                          <text
                                                                                            x="-8"
                                                                                            class="x1lzn6yi x1nibo1b xmi5d70 x1fvot60 xo1l8bm xxio538"
                                                                                            fill="rgba(28,43,51,1)"
                                                                                          >
                                                                                            8
                                                                                          </text>
                                                                                        </g>
                                                                                        <path
                                                                                          class=""
                                                                                          d="M 837.2830882352941,169 L 888.2352941176471,8 L 939.1875,68.375"
                                                                                          fill="none"
                                                                                          pointer-events="none"
                                                                                          stroke="rgba(50,205,205,1)"
                                                                                          stroke-linecap="round"
                                                                                          stroke-linejoin="round"
                                                                                          stroke-width="2"
                                                                                        ></path>
                                                                                        <g class="">
                                                                                          <rect
                                                                                            fill="transparent"
                                                                                            height="161"
                                                                                            width="48.12152777777778"
                                                                                            x="47.52389705882353"
                                                                                            y="8"
                                                                                          ></rect>
                                                                                        </g>
                                                                                        <g class="">
                                                                                          <rect
                                                                                            fill="transparent"
                                                                                            height="161"
                                                                                            width="48.12152777777778"
                                                                                            x="98.47610294117646"
                                                                                            y="8"
                                                                                          ></rect>
                                                                                        </g>
                                                                                        <g class="">
                                                                                          <rect
                                                                                            fill="transparent"
                                                                                            height="161"
                                                                                            width="48.12152777777778"
                                                                                            x="149.42830882352942"
                                                                                            y="8"
                                                                                          ></rect>
                                                                                        </g>
                                                                                        <g class="">
                                                                                          <rect
                                                                                            fill="transparent"
                                                                                            height="161"
                                                                                            width="48.12152777777778"
                                                                                            x="200.38051470588238"
                                                                                            y="8"
                                                                                          ></rect>
                                                                                        </g>
                                                                                        <g class="">
                                                                                          <rect
                                                                                            fill="transparent"
                                                                                            height="161"
                                                                                            width="48.12152777777778"
                                                                                            x="251.3327205882353"
                                                                                            y="8"
                                                                                          ></rect>
                                                                                        </g>
                                                                                        <g class="">
                                                                                          <rect
                                                                                            fill="transparent"
                                                                                            height="161"
                                                                                            width="48.12152777777778"
                                                                                            x="302.28492647058823"
                                                                                            y="8"
                                                                                          ></rect>
                                                                                        </g>
                                                                                        <g class="">
                                                                                          <rect
                                                                                            fill="transparent"
                                                                                            height="161"
                                                                                            width="48.12152777777778"
                                                                                            x="353.2371323529412"
                                                                                            y="8"
                                                                                          ></rect>
                                                                                        </g>
                                                                                        <g class="">
                                                                                          <rect
                                                                                            fill="transparent"
                                                                                            height="161"
                                                                                            width="48.12152777777778"
                                                                                            x="404.18933823529414"
                                                                                            y="8"
                                                                                          ></rect>
                                                                                        </g>
                                                                                        <g class="">
                                                                                          <rect
                                                                                            fill="transparent"
                                                                                            height="161"
                                                                                            width="48.12152777777778"
                                                                                            x="455.1415441176471"
                                                                                            y="8"
                                                                                          ></rect>
                                                                                        </g>
                                                                                        <g class="">
                                                                                          <rect
                                                                                            fill="transparent"
                                                                                            height="161"
                                                                                            width="48.12152777777778"
                                                                                            x="506.09375"
                                                                                            y="8"
                                                                                          ></rect>
                                                                                        </g>
                                                                                        <g class="">
                                                                                          <rect
                                                                                            fill="transparent"
                                                                                            height="161"
                                                                                            width="48.12152777777778"
                                                                                            x="557.0459558823529"
                                                                                            y="8"
                                                                                          ></rect>
                                                                                        </g>
                                                                                        <g class="">
                                                                                          <rect
                                                                                            fill="transparent"
                                                                                            height="161"
                                                                                            width="48.12152777777778"
                                                                                            x="607.9981617647059"
                                                                                            y="8"
                                                                                          ></rect>
                                                                                        </g>
                                                                                        <g class="">
                                                                                          <rect
                                                                                            fill="transparent"
                                                                                            height="161"
                                                                                            width="48.12152777777778"
                                                                                            x="658.9503676470589"
                                                                                            y="8"
                                                                                          ></rect>
                                                                                        </g>
                                                                                        <g class="">
                                                                                          <rect
                                                                                            fill="transparent"
                                                                                            height="161"
                                                                                            width="48.12152777777778"
                                                                                            x="709.9025735294118"
                                                                                            y="8"
                                                                                          ></rect>
                                                                                        </g>
                                                                                        <g class="">
                                                                                          <rect
                                                                                            fill="transparent"
                                                                                            height="161"
                                                                                            width="48.12152777777778"
                                                                                            x="760.8547794117648"
                                                                                            y="8"
                                                                                          ></rect>
                                                                                        </g>
                                                                                        <g class="">
                                                                                          <rect
                                                                                            fill="transparent"
                                                                                            height="161"
                                                                                            width="48.12152777777778"
                                                                                            x="811.8069852941177"
                                                                                            y="8"
                                                                                          ></rect>
                                                                                        </g>
                                                                                        <g class="">
                                                                                          <rect
                                                                                            fill="transparent"
                                                                                            height="161"
                                                                                            width="48.12152777777778"
                                                                                            x="862.7591911764706"
                                                                                            y="8"
                                                                                          ></rect>
                                                                                        </g>
                                                                                        <g class="">
                                                                                          <rect
                                                                                            fill="transparent"
                                                                                            height="161"
                                                                                            width="48.12152777777778"
                                                                                            x="913.7113970588235"
                                                                                            y="8"
                                                                                          ></rect>
                                                                                        </g>
                                                                                      </svg>
                                                                                      <table
                                                                                        class="x1lliihq x1mwwwfo x1gukg7c x1qvwoe0 xjm9jq1 x10l6tqk x140o2bo x1i1rx1s x6ikm8r x10wlt62"
                                                                                        id="js_1dj"
                                                                                      >
                                                                                        <tbody>
                                                                                          <tr>
                                                                                            <th></th>
                                                                                            <th>
                                                                                              1714503600
                                                                                            </th>
                                                                                            <th>
                                                                                              1714590000
                                                                                            </th>
                                                                                            <th>
                                                                                              1714676400
                                                                                            </th>
                                                                                            <th>
                                                                                              1714762800
                                                                                            </th>
                                                                                            <th>
                                                                                              1714849200
                                                                                            </th>
                                                                                            <th>
                                                                                              1714935600
                                                                                            </th>
                                                                                            <th>
                                                                                              1715022000
                                                                                            </th>
                                                                                            <th>
                                                                                              1715108400
                                                                                            </th>
                                                                                            <th>
                                                                                              1715194800
                                                                                            </th>
                                                                                            <th>
                                                                                              1715281200
                                                                                            </th>
                                                                                            <th>
                                                                                              1715367600
                                                                                            </th>
                                                                                            <th>
                                                                                              1715454000
                                                                                            </th>
                                                                                            <th>
                                                                                              1715540400
                                                                                            </th>
                                                                                            <th>
                                                                                              1715626800
                                                                                            </th>
                                                                                            <th>
                                                                                              1715713200
                                                                                            </th>
                                                                                            <th>
                                                                                              1715799600
                                                                                            </th>
                                                                                            <th>
                                                                                              1715886000
                                                                                            </th>
                                                                                            <th>
                                                                                              1715972400
                                                                                            </th>
                                                                                          </tr>
                                                                                          <tr>
                                                                                            <td>
                                                                                              results
                                                                                            </td>
                                                                                            <td></td>
                                                                                            <td></td>
                                                                                            <td></td>
                                                                                            <td></td>
                                                                                            <td></td>
                                                                                            <td></td>
                                                                                            <td></td>
                                                                                            <td></td>
                                                                                            <td></td>
                                                                                            <td></td>
                                                                                            <td></td>
                                                                                            <td></td>
                                                                                            <td></td>
                                                                                            <td></td>
                                                                                            <td></td>
                                                                                            <td>
                                                                                              0
                                                                                            </td>
                                                                                            <td>
                                                                                              8
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
                                              </div>
                                            </div>
                                          </span>
                                        </span>
                                        <span
                                          data-surface-wrapper="1"
                                          data-surface="/am/editor_drawer/performance_summary:campaign/commerce_dynamic_ads_catalog_issues"
                                          data-auto-logging-id="f2efdd470394864"
                                          id="style-eGnvq"
                                          class="style-eGnvq"
                                        ></span>
                                        {/* write here  */}
                                        <div
                                          style={{
                                            marginTop: "1px",
                                            marginLeft: "7px",
                                            marginBottom: "1px",
                                          }}
                                        >
                                          <br />
                                          <div class="xh8yej3 uiContextualLayerParent snipcss-by3w2">
                                            <span
                                              data-surface-wrapper="1"
                                              data-surface="/am/editor_drawer/performance_summary:ad_set/ad_creative_perf_guidance/lib:GeoGuidanceCard"
                                              data-auto-logging-id="f2e1959c945613c"
                                              class="style-J5SAj"
                                              id="style-J5SAj"
                                            >
                                              <div
                                                class="x78zum5 x9f619 x1n2onr6 x26u7qi x7g060r x6sto7s x1oqmopi x5lnnqw x1uh9glh x1ye3gou xn6708d x1lcm9me x1yr5g0i xrt01vj x10y3i5r x1kmqopl xz9dl7a xsag5q8 x1gzqxud"
                                                data-visualcompletion="ignore-dynamic"
                                              >
                                                <div
                                                  class="xmi5d70 x1fvot60 xo1l8bm xxio538 xbsr9hj xq9mrsl x1yc453h x1h4wwuj xeuugli x1iyjqo2 xs83m0k"
                                                  data-auto-logging-component-type="GeoGuidanceCard"
                                                >
                                                  <div class="x1qjc9v5 x78zum5 xdt5ytf xozqiw3 x2lwn1j xeuugli x1iyjqo2 xavht8x">
                                                    <div class="x1cy8zhl x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94">
                                                      <div class="x1c4vz4f x2lah0s">
                                                        <div class="xmi5d70 x1fvot60 xxio538 xbsr9hj xq9mrsl x1h4wwuj x1fcty0u x78zum5 xl56j7k x6s0dn4">
                                                          <span>​</span>
                                                          <div class="xjm9jq1 x78zum5 xl56j7k x6s0dn4">
                                                            <span class="x3nfvp2 xflfurm">
                                                              <div
                                                                class="x3nfvp2 x120ccyz x1heor9g"
                                                                role="presentation"
                                                              >
                                                                <div
                                                                  class="xtwfq29 style-vgH85"
                                                                  id="style-vgH85"
                                                                ></div>
                                                              </div>
                                                            </span>
                                                          </div>
                                                        </div>
                                                      </div>

                                                      <div class="x1cy8zhl x78zum5 xdt5ytf xozqiw3 x2lwn1j xeuugli x1iyjqo2 xavht8x">
                                                        <div class="x1iyjqo2 xeuugli x3nfvp2">
                                                          <div
                                                            aria-level="4"
                                                            class="x1xqt7ti xsuwoey x1xlr1w8 x63nzvj xbsr9hj xq9mrsl x1yc453h x1h4wwuj xeuugli"
                                                            role="heading"
                                                          >
                                                            Compare how
                                                            different ad
                                                            creatives perform
                                                          </div>
                                                        </div>
                                                        <span class="xmi5d70 x1fvot60 xo1l8bm xxio538 xbsr9hj xq9mrsl x1h4wwuj xeuugli">
                                                          You can get even more
                                                          detailed performance
                                                          data by using ad
                                                          creative breakdowns in
                                                          Ads Reporting. This
                                                          can help you compare
                                                          ad performance by
                                                          image, text and call
                                                          to action to see how
                                                          your creatives perform
                                                          across all placements.
                                                        </span>
                                                      </div>
                                                      <div
                                                        aria-busy="false"
                                                        class="x1i10hfl xjqpnuy xa49m3k xqeqjp1 x2hbi6w x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xe8uvvx x1mh8g0r x2lwn1j xeuugli x16tdsg8 xggy1nq x1ja2u2z x1t137rt x6s0dn4 x1ejq31n xd10rxx x1sy0etr x17r0tee x3nfvp2 xdl72j9 x1q0g3np x2lah0s x193iq5w x1n2onr6 x1hl2dhg x87ps6o xxymvpz xlh3980 xvmahel x1lku1pv x1g40iwv x1lcm9me x1yr5g0i xrt01vj x10y3i5r xo1l8bm xbsr9hj x1v911su x1y1aw1k xwib8y2 x1ye3gou xn6708d x9otpla x1wsgfga x1n0m28w"
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
                                                                  class="xtwfq29 style-KTV2h"
                                                                  id="style-KTV2h"
                                                                ></div>
                                                              </div>
                                                            </div>
                                                          </div>
                                                        </span>
                                                      </div>
                                                    </div>
                                                    <div class="x1n2onr6 x1iyjqo2 xs83m0k xmupa6y">
                                                      <div class="x1cy8zhl x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94">
                                                        <div class="x1cy8zhl x78zum5 xdt5ytf xozqiw3 x2lwn1j xeuugli x1iyjqo2 xavht8x">
                                                          <div
                                                            class="x3nfvp2 x193iq5w xxymvpz"
                                                            role="none"
                                                          >
                                                            <a
                                                              aria-busy="false"
                                                              class="x1i10hfl xjqpnuy xa49m3k xqeqjp1 x2hbi6w x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli x16tdsg8 xggy1nq x1ja2u2z x6s0dn4 x1ejq31n xd10rxx x1sy0etr x17r0tee x3nfvp2 xdl72j9 x1q0g3np x2lah0s x193iq5w x1n2onr6 x1hl2dhg x87ps6o xxymvpz xlh3980 xvmahel x1lku1pv x1g40iwv x1lcm9me x1yr5g0i xrt01vj x10y3i5r x1ob88yx xaatb59 x1qgsegg xo1l8bm xbsr9hj x1v911su x1y1aw1k xwib8y2 x1swvt13 x1pi30zi"
                                                              href="/adsmanager/reporting/view?act=1387295665246598&amp;event_source=CLICK_GO_TO_ADS_REPORTING_FROM_AM_PERFORMANCE_SUMMARY&amp;breakdowns=creative_fingerprint&amp;metrics=reach%2Cimpressions%2Cfrequency%2Cresults%2Cspend%2Ccost_per_result&amp;view_type=TABLE"
                                                              role="link"
                                                              tabindex="0"
                                                              target="_blank"
                                                            >
                                                              <span class="xmi5d70 x1fvot60 xxio538 x1heor9g xq9mrsl x1h4wwuj x1pd3egz xeuugli xh8yej3">
                                                                <div class="x78zum5">
                                                                  <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1hc1fzr x13dflua x6o7n8i xxziih7 x12w9bfk xl56j7k xh8yej3">
                                                                    <div class="x1xqt7ti x1fvot60 xk50ysn xxio538 x1heor9g xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj xeuugli">
                                                                      Go to Ads
                                                                      Reporting
                                                                    </div>
                                                                  </div>
                                                                </div>
                                                              </span>
                                                            </a>
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
                                        <div data-pagelet="DeliveryInsightsAuctionInsightsContainer"></div>
                                        <span
                                          data-surface-wrapper="1"
                                          data-surface="/am/editor_drawer/performance_summary:campaign/breakdown_charts"
                                          data-auto-logging-id="f1d33dc96bda58"
                                          id="style-WhVtV"
                                          class="style-WhVtV"
                                        >
                                          <div
                                            class="x1qjc9v5 x78zum5 x2lwn1j xeuugli x1i64zmx x1xmf6yo style-DpUoZ"
                                            data-auto-logging-component-type="GeoPageItem"
                                            id="style-DpUoZ"
                                          >
                                            <div class="xh8yej3 uiContextualLayerParent">
                                              <div
                                                class="x1gzqxud x1lcm9me x1yr5g0i xrt01vj x10y3i5r xhgxa4x xy5ysw6 x1qkj6lk xn3walq xnvurfn xv1ta3e x1opv7go x1dtnpoi xibdhds xtnng9g xhvrwov x13k1m86 xwx4but x1cpjm7i xszcg87 x1hmns74 xkk1bqk x14d4353 xsxiz9q x1rmj1tg xchklzq x9f619 xc8icb0 x1n2onr6 x1pvq41x xhhp2wi x14q35kh x1wa3ocq x1n7iyjn x1s928wv x1wsn0xg x1j6awrg x162n7g1 x1m1drc7 x4eaejv xi4xitw x5yr21d xh8yej3"
                                                data-auto-logging-component-type="GeoCard"
                                              >
                                                <div class="x78zum5 xdt5ytf x5yr21d xedcshv x1t2pt76 xh8yej3">
                                                  <div class="x9f619 x78zum5 x1iyjqo2 x5yr21d x2lwn1j x1n2onr6 xh8yej3">
                                                    <div class="xw2csxc x1odjw0f xh8yej3 x18d9i69">
                                                      <div class="xjm9jq1 xg01cxk x47corl xh8yej3 x1jyxor1"></div>
                                                      <div class="x1cy8zhl x78zum5 x1q0g3np x1qughib xozqiw3 x2lwn1j xeuugli x1iyjqo2 x2lah0s x19lwn94 x1lcm9me x1yr5g0i x1y1aw1k xwib8y2 xurb0ha x1sxyh0 x1gzqxud x5pf9jr xo71vjh x6ikm8r x10wlt62">
                                                        <div
                                                          class="x78zum5 xdmi676 x193iq5w x6ikm8r x10wlt62 x1n2onr6 xmi5d70 x1fvot60 xo1l8bm xxio538 xh8yej3"
                                                          role="tablist"
                                                        >
                                                          <div
                                                            aria-hidden="false"
                                                            aria-label="Demographics"
                                                            aria-selected="true"
                                                            class="x1i10hfl xjqpnuy xa49m3k xqeqjp1 x2hbi6w x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xdl72j9 xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli x1n2onr6 x16tdsg8 x1hl2dhg xggy1nq x1ja2u2z x1t137rt x6s0dn4 x78zum5 x1q0g3np x2lah0s xl56j7k x1lku1pv x1g40iwv x1lcm9me x1yr5g0i xrt01vj x10y3i5r x1y1aw1k xwib8y2 x1ye3gou xn6708d x1xlr1w8 x1qsmy5i x1k4ywey"
                                                            role="tab"
                                                            tabindex="0"
                                                          >
                                                            <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 xs83m0k x19lwn94 xl56j7k">
                                                              <div class="x3nfvp2 x2lah0s">
                                                                <i
                                                                  class="_4agw img style-efdMU"
                                                                  alt=""
                                                                  data-visualcompletion="css-img"
                                                                  id="style-efdMU"
                                                                ></i>
                                                              </div>
                                                              <div
                                                                aria-hidden="true"
                                                                class="x3nfvp2 xdt5ytf xs83m0k xeuugli x6ikm8r x10wlt62"
                                                              >
                                                                <span class="x6ikm8r x10wlt62 xlyipyv xmi5d70 x1fvot60 xxio538 x1heor9g xuxw1ft x2b8uid x117nqv4">
                                                                  Demographics
                                                                </span>
                                                                <span class="xmi5d70 x1fvot60 xo1l8bm xxio538 xbsr9hj xuxw1ft x2b8uid xqtp20y xlshs6z x6ikm8r x10wlt62 x87ps6o x47corl">
                                                                  Demographics
                                                                </span>
                                                                <span class="xmi5d70 x1fvot60 xxio538 x1heor9g xuxw1ft x2b8uid x117nqv4 xqtp20y xlshs6z x6ikm8r x10wlt62 x87ps6o x47corl">
                                                                  Demographics
                                                                </span>
                                                              </div>
                                                            </div>
                                                          </div>
                                                          <div
                                                            aria-hidden="false"
                                                            aria-label="Platform"
                                                            aria-selected="false"
                                                            class="x1i10hfl xjqpnuy xa49m3k xqeqjp1 x2hbi6w x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xdl72j9 xe8uvvx xdj266r x11i5rnm xat24cr x2lwn1j xeuugli x1n2onr6 x16tdsg8 x1hl2dhg xggy1nq x1ja2u2z x1t137rt x6s0dn4 x78zum5 x1q0g3np x2lah0s xl56j7k x1lku1pv x1g40iwv x1lcm9me x1yr5g0i xrt01vj x10y3i5r x1y1aw1k xwib8y2 x1ye3gou xn6708d xo1l8bm xbsr9hj x1v911su x1i64zmx"
                                                            role="tab"
                                                            tabindex="0"
                                                          >
                                                            <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 xs83m0k x19lwn94 xl56j7k">
                                                              <div class="x3nfvp2 x2lah0s">
                                                                <i
                                                                  class="_4agw img style-CbxMi"
                                                                  alt=""
                                                                  data-visualcompletion="css-img"
                                                                  id="style-CbxMi"
                                                                ></i>
                                                              </div>
                                                              <div
                                                                aria-hidden="true"
                                                                class="x3nfvp2 xdt5ytf xs83m0k xeuugli x6ikm8r x10wlt62"
                                                              >
                                                                <span class="x6ikm8r x10wlt62 xlyipyv xmi5d70 x1fvot60 xo1l8bm xxio538 xbsr9hj xuxw1ft x2b8uid">
                                                                  Platform
                                                                </span>
                                                                <span class="xmi5d70 x1fvot60 xo1l8bm xxio538 xbsr9hj xuxw1ft x2b8uid xqtp20y xlshs6z x6ikm8r x10wlt62 x87ps6o x47corl">
                                                                  Platform
                                                                </span>
                                                                <span class="xmi5d70 x1fvot60 xxio538 x1heor9g xuxw1ft x2b8uid x117nqv4 xqtp20y xlshs6z x6ikm8r x10wlt62 x87ps6o x47corl">
                                                                  Platform
                                                                </span>
                                                              </div>
                                                            </div>
                                                          </div>
                                                          <div
                                                            aria-haspopup="true"
                                                            aria-hidden="true"
                                                            aria-label="More"
                                                            class="x1i10hfl xjqpnuy xa49m3k xqeqjp1 x2hbi6w x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xdl72j9 xe8uvvx xdj266r x11i5rnm xat24cr x2lwn1j xeuugli x16tdsg8 x1hl2dhg xggy1nq x1ja2u2z x1t137rt x6s0dn4 x78zum5 x1q0g3np x2lah0s xl56j7k x1lku1pv x1g40iwv x1lcm9me x1yr5g0i xrt01vj x10y3i5r x1y1aw1k xwib8y2 x1ye3gou xn6708d xo1l8bm xbsr9hj x1v911su x10l6tqk x47corl x1i64zmx xlshs6z"
                                                            role="button"
                                                            tabindex="-1"
                                                          >
                                                            <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 xs83m0k x19lwn94 xl56j7k">
                                                              <div
                                                                aria-hidden="true"
                                                                class="x3nfvp2 xdt5ytf xs83m0k xeuugli x6ikm8r x10wlt62"
                                                              >
                                                                <span class="x6ikm8r x10wlt62 xlyipyv xmi5d70 x1fvot60 xo1l8bm xxio538 xbsr9hj xuxw1ft x2b8uid">
                                                                  More
                                                                </span>
                                                                <span class="xmi5d70 x1fvot60 xo1l8bm xxio538 xbsr9hj xuxw1ft x2b8uid xqtp20y xlshs6z x6ikm8r x10wlt62 x87ps6o x47corl">
                                                                  More
                                                                </span>
                                                                <span class="xmi5d70 x1fvot60 xxio538 x1heor9g xuxw1ft x2b8uid x117nqv4 xqtp20y xlshs6z x6ikm8r x10wlt62 x87ps6o x47corl">
                                                                  More
                                                                </span>
                                                              </div>
                                                              <div
                                                                class="x3nfvp2 x120ccyz x1heor9g"
                                                                role="presentation"
                                                              >
                                                                <div
                                                                  class="xtwfq29 style-P1cH8"
                                                                  id="style-P1cH8"
                                                                ></div>
                                                              </div>
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                      <div class="x1jn3f92 x78zum5 xdt5ytf xl56j7k">
                                                        <div>
                                                          <div class="x1swvt13 x1pi30zi x1y1aw1k x1l90r2v">
                                                            <div class="x78zum5 xdt5ytf xozqiw3 x2lwn1j xeuugli x1iyjqo2 x1w65fby">
                                                              <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94">
                                                                <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94">
                                                                  <div
                                                                    aria-level="2"
                                                                    class="x1xqt7ti xm46was x1xlr1w8 x1jrz1v4 xbsr9hj xq9mrsl x1yc453h x1h4wwuj xeuugli"
                                                                    role="heading"
                                                                  >
                                                                    Age and
                                                                    gender
                                                                    distribution
                                                                  </div>
                                                                </div>
                                                                <div class="x78zum5 x2lwn1j xeuugli x1c4vz4f x2lah0s">
                                                                  <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94">
                                                                    <div class="x78zum5 xdt5ytf xdl72j9 x1iyjqo2 x1n2onr6 xt7fyls x14atkfc">
                                                                      <div
                                                                        class="x1qvwoe0 xjm9jq1 x1y332i5 xcwd3tp x1jyxor1 x39eecv x6ikm8r x10wlt62 x10l6tqk xuxw1ft x1i1rx1s style-JYaXA"
                                                                        data-sscoverage-ignore="true"
                                                                        id="style-JYaXA"
                                                                      >
                                                                        <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94">
                                                                          <div class="x1iyjqo2">
                                                                            <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x65s2av">
                                                                              <label
                                                                                id="js_1dq"
                                                                                for="js_1dp"
                                                                              >
                                                                                <span class="xmi5d70 x1fvot60 xxio538 xbsr9hj xq9mrsl x1mzt3pk x1vvkbs x13faqbe x117nqv4 xeuugli">
                                                                                  Active
                                                                                  gender
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
                                                                                aria-labelledby="js_1dq js_1dt"
                                                                                aria-owns="js_1do"
                                                                                class="x1i10hfl xjqpnuy xa49m3k xqeqjp1 x2hbi6w x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli x16tdsg8 xggy1nq x1ja2u2z x6s0dn4 x1ejq31n xd10rxx x1sy0etr x17r0tee x3nfvp2 xdl72j9 x1q0g3np x2lah0s x193iq5w x1n2onr6 x1hl2dhg x87ps6o xxymvpz xlh3980 xvmahel x1lku1pv x1g40iwv x1lcm9me x1yr5g0i xrt01vj x10y3i5r x1ob88yx xaatb59 x1qgsegg xo1l8bm xbsr9hj x1v911su x1y1aw1k xwib8y2 x1swvt13 xn6708d xh8yej3"
                                                                                id="js_1dp"
                                                                                role="combobox"
                                                                                tabindex="0"
                                                                              >
                                                                                <span class="xmi5d70 x1fvot60 xxio538 x1heor9g xq9mrsl x1h4wwuj x1pd3egz xeuugli xh8yej3">
                                                                                  <div class="x78zum5">
                                                                                    <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1hc1fzr x13dflua x6o7n8i xxziih7 x12w9bfk x1nhvcw1 xh8yej3">
                                                                                      <div class="x1xqt7ti x1fvot60 xk50ysn xxio538 x1heor9g xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj xeuugli x1iyjqo2">
                                                                                        All
                                                                                      </div>
                                                                                      <div
                                                                                        class="x3nfvp2 x120ccyz x1heor9g x2lah0s x1c4vz4f x1gryazu"
                                                                                        role="presentation"
                                                                                      >
                                                                                        <div
                                                                                          class="xtwfq29 style-T6lNS"
                                                                                          id="style-T6lNS"
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
                                                                    <div class="x78zum5 xdt5ytf xdl72j9 x1iyjqo2 x1n2onr6 xt7fyls x14atkfc">
                                                                      <div
                                                                        class="x1qvwoe0 xjm9jq1 x1y332i5 xcwd3tp x1jyxor1 x39eecv x6ikm8r x10wlt62 x10l6tqk xuxw1ft x1i1rx1s style-7222A"
                                                                        data-sscoverage-ignore="true"
                                                                        id="style-7222A"
                                                                      >
                                                                        <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94">
                                                                          <div class="x1iyjqo2">
                                                                            <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x65s2av">
                                                                              <label
                                                                                id="js_1dw"
                                                                                for="js_1dv"
                                                                              >
                                                                                <span class="xmi5d70 x1fvot60 xxio538 xbsr9hj xq9mrsl x1mzt3pk x1vvkbs x13faqbe x117nqv4 xeuugli">
                                                                                  Active
                                                                                  metric
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
                                                                                aria-labelledby="js_1dw js_1dz"
                                                                                aria-owns="js_1du"
                                                                                class="x1i10hfl xjqpnuy xa49m3k xqeqjp1 x2hbi6w x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli x16tdsg8 xggy1nq x1ja2u2z x6s0dn4 x1ejq31n xd10rxx x1sy0etr x17r0tee x3nfvp2 xdl72j9 x1q0g3np x2lah0s x193iq5w x1n2onr6 x1hl2dhg x87ps6o xxymvpz xlh3980 xvmahel x1lku1pv x1g40iwv x1lcm9me x1yr5g0i xrt01vj x10y3i5r x1ob88yx xaatb59 x1qgsegg xo1l8bm xbsr9hj x1v911su x1y1aw1k xwib8y2 x1swvt13 xn6708d xh8yej3"
                                                                                id="js_1dv"
                                                                                role="combobox"
                                                                                tabindex="0"
                                                                              >
                                                                                <span class="xmi5d70 x1fvot60 xxio538 x1heor9g xq9mrsl x1h4wwuj x1pd3egz xeuugli xh8yej3">
                                                                                  <div class="x78zum5">
                                                                                    <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1hc1fzr x13dflua x6o7n8i xxziih7 x12w9bfk x1nhvcw1 xh8yej3">
                                                                                      <div class="x1xqt7ti x1fvot60 xk50ysn xxio538 x1heor9g xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj xeuugli x1iyjqo2">
                                                                                        Results
                                                                                      </div>
                                                                                      <div
                                                                                        class="x3nfvp2 x120ccyz x1heor9g x2lah0s x1c4vz4f x1gryazu"
                                                                                        role="presentation"
                                                                                      >
                                                                                        <div
                                                                                          class="xtwfq29 style-CJZn4"
                                                                                          id="style-CJZn4"
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
                                                              <div class="x78zum5 x2lwn1j xeuugli x1swvt13 xu3xrit">
                                                                <div class="x78zum5 xdt5ytf xozqiw3 x2lwn1j xeuugli x1iyjqo2 xavht8x x5yr21d xh8yej3">
                                                                  <div
                                                                    class="x78zum5 x2lwn1j xeuugli x1iyjqo2 x1n2onr6 style-Ip7nw"
                                                                    id="style-Ip7nw"
                                                                  >
                                                                    <svg
                                                                      aria-describedby="js_1e0"
                                                                      aria-labelledby="js_1e1"
                                                                      class="x5yr21d x1plvlek xryxfnj x10l6tqk x17qophe x13vifvy xh8yej3"
                                                                      height="260"
                                                                      role="img"
                                                                      width="963.1875"
                                                                    >
                                                                      <g transform="translate(109.809375, 227)">
                                                                        <line
                                                                          y2="0"
                                                                          stroke="rgba(0,0,0,0.15)"
                                                                        ></line>
                                                                        <foreignObject
                                                                          y="4"
                                                                          class="x9yny3i xw6cgo0 xmi5d70 x1fvot60 xo1l8bm xxio538"
                                                                          height="20"
                                                                          width="125.42812500000002"
                                                                          x="-62.71406250000001"
                                                                        >
                                                                          <div
                                                                            class="xmi5d70 x1fvot60 xo1l8bm xxio538 xbsr9hj x2b8uid x1h4wwuj xeuugli x6ikm8r x10wlt62 xlyipyv xuxw1ft style-XZpdW"
                                                                            id="style-XZpdW"
                                                                          >
                                                                            13-17
                                                                          </div>
                                                                        </foreignObject>
                                                                      </g>
                                                                      <g transform="translate(243.2375, 227)">
                                                                        <line
                                                                          y2="0"
                                                                          stroke="rgba(0,0,0,0.15)"
                                                                        ></line>
                                                                        <foreignObject
                                                                          y="4"
                                                                          class="x9yny3i xw6cgo0 xmi5d70 x1fvot60 xo1l8bm xxio538"
                                                                          height="20"
                                                                          width="125.42812500000002"
                                                                          x="-62.71406250000001"
                                                                        >
                                                                          <div
                                                                            class="xmi5d70 x1fvot60 xo1l8bm xxio538 xbsr9hj x2b8uid x1h4wwuj xeuugli x6ikm8r x10wlt62 xlyipyv xuxw1ft style-4pyhJ"
                                                                            id="style-4pyhJ"
                                                                          >
                                                                            18-24
                                                                          </div>
                                                                        </foreignObject>
                                                                      </g>
                                                                      <g transform="translate(376.66562500000003, 227)">
                                                                        <line
                                                                          y2="0"
                                                                          stroke="rgba(0,0,0,0.15)"
                                                                        ></line>
                                                                        <foreignObject
                                                                          y="4"
                                                                          class="x9yny3i xw6cgo0 xmi5d70 x1fvot60 xo1l8bm xxio538"
                                                                          height="20"
                                                                          width="125.42812500000002"
                                                                          x="-62.71406250000001"
                                                                        >
                                                                          <div
                                                                            class="xmi5d70 x1fvot60 xo1l8bm xxio538 xbsr9hj x2b8uid x1h4wwuj xeuugli x6ikm8r x10wlt62 xlyipyv xuxw1ft style-B1W5l"
                                                                            id="style-B1W5l"
                                                                          >
                                                                            25-34
                                                                          </div>
                                                                        </foreignObject>
                                                                      </g>
                                                                      <g transform="translate(510.09375000000006, 227)">
                                                                        <line
                                                                          y2="0"
                                                                          stroke="rgba(0,0,0,0.15)"
                                                                        ></line>
                                                                        <foreignObject
                                                                          y="4"
                                                                          class="x9yny3i xw6cgo0 xmi5d70 x1fvot60 xo1l8bm xxio538"
                                                                          height="20"
                                                                          width="125.42812500000002"
                                                                          x="-62.71406250000001"
                                                                        >
                                                                          <div
                                                                            class="xmi5d70 x1fvot60 xo1l8bm xxio538 xbsr9hj x2b8uid x1h4wwuj xeuugli x6ikm8r x10wlt62 xlyipyv xuxw1ft style-r6Koj"
                                                                            id="style-r6Koj"
                                                                          >
                                                                            35-44
                                                                          </div>
                                                                        </foreignObject>
                                                                      </g>
                                                                      <g transform="translate(643.521875, 227)">
                                                                        <line
                                                                          y2="0"
                                                                          stroke="rgba(0,0,0,0.15)"
                                                                        ></line>
                                                                        <foreignObject
                                                                          y="4"
                                                                          class="x9yny3i xw6cgo0 xmi5d70 x1fvot60 xo1l8bm xxio538"
                                                                          height="20"
                                                                          width="125.42812500000002"
                                                                          x="-62.71406250000001"
                                                                        >
                                                                          <div
                                                                            class="xmi5d70 x1fvot60 xo1l8bm xxio538 xbsr9hj x2b8uid x1h4wwuj xeuugli x6ikm8r x10wlt62 xlyipyv xuxw1ft style-OQKkJ"
                                                                            id="style-OQKkJ"
                                                                          >
                                                                            45-54
                                                                          </div>
                                                                        </foreignObject>
                                                                      </g>
                                                                      <g transform="translate(776.9500000000002, 227)">
                                                                        <line
                                                                          y2="0"
                                                                          stroke="rgba(0,0,0,0.15)"
                                                                        ></line>
                                                                        <foreignObject
                                                                          y="4"
                                                                          class="x9yny3i xw6cgo0 xmi5d70 x1fvot60 xo1l8bm xxio538"
                                                                          height="20"
                                                                          width="125.42812500000002"
                                                                          x="-62.71406250000001"
                                                                        >
                                                                          <div
                                                                            class="xmi5d70 x1fvot60 xo1l8bm xxio538 xbsr9hj x2b8uid x1h4wwuj xeuugli x6ikm8r x10wlt62 xlyipyv xuxw1ft style-cQfIZ"
                                                                            id="style-cQfIZ"
                                                                          >
                                                                            55-64
                                                                          </div>
                                                                        </foreignObject>
                                                                      </g>
                                                                      <g transform="translate(910.3781250000001, 227)">
                                                                        <line
                                                                          y2="0"
                                                                          stroke="rgba(0,0,0,0.15)"
                                                                        ></line>
                                                                        <foreignObject
                                                                          y="4"
                                                                          class="x9yny3i xw6cgo0 xmi5d70 x1fvot60 xo1l8bm xxio538"
                                                                          height="20"
                                                                          width="125.42812500000002"
                                                                          x="-62.71406250000001"
                                                                        >
                                                                          <div
                                                                            class="xmi5d70 x1fvot60 xo1l8bm xxio538 xbsr9hj x2b8uid x1h4wwuj xeuugli x6ikm8r x10wlt62 xlyipyv xuxw1ft style-Be5NL"
                                                                            id="style-Be5NL"
                                                                          >
                                                                            65+
                                                                          </div>
                                                                        </foreignObject>
                                                                      </g>
                                                                      <g transform="translate(33, 227)">
                                                                        <line
                                                                          x2="922.1875"
                                                                          stroke="rgba(0,0,0,0.15)"
                                                                        ></line>
                                                                        <text
                                                                          x="-8"
                                                                          class="x1lzn6yi x1nibo1b xmi5d70 x1fvot60 xo1l8bm xxio538"
                                                                          fill="rgba(28,43,51,1)"
                                                                        >
                                                                          0
                                                                        </text>
                                                                      </g>
                                                                      <g transform="translate(33, 172.25)">
                                                                        <line
                                                                          x2="922.1875"
                                                                          stroke="rgba(0,0,0,0.15)"
                                                                        ></line>
                                                                        <text
                                                                          x="-8"
                                                                          class="x1lzn6yi x1nibo1b xmi5d70 x1fvot60 xo1l8bm xxio538"
                                                                          fill="rgba(28,43,51,1)"
                                                                        >
                                                                          1
                                                                        </text>
                                                                      </g>
                                                                      <g transform="translate(33, 117.5)">
                                                                        <line
                                                                          x2="922.1875"
                                                                          stroke="rgba(0,0,0,0.15)"
                                                                        ></line>
                                                                        <text
                                                                          x="-8"
                                                                          class="x1lzn6yi x1nibo1b xmi5d70 x1fvot60 xo1l8bm xxio538"
                                                                          fill="rgba(28,43,51,1)"
                                                                        >
                                                                          2
                                                                        </text>
                                                                      </g>
                                                                      <g transform="translate(33, 62.75)">
                                                                        <line
                                                                          x2="922.1875"
                                                                          stroke="rgba(0,0,0,0.15)"
                                                                        ></line>
                                                                        <text
                                                                          x="-8"
                                                                          class="x1lzn6yi x1nibo1b xmi5d70 x1fvot60 xo1l8bm xxio538"
                                                                          fill="rgba(28,43,51,1)"
                                                                        >
                                                                          3
                                                                        </text>
                                                                      </g>
                                                                      <g transform="translate(33, 8)">
                                                                        <line
                                                                          x2="922.1875"
                                                                          stroke="rgba(0,0,0,0.15)"
                                                                        ></line>
                                                                        <text
                                                                          x="-8"
                                                                          class="x1lzn6yi x1nibo1b xmi5d70 x1fvot60 xo1l8bm xxio538"
                                                                          fill="rgba(28,43,51,1)"
                                                                        >
                                                                          4
                                                                        </text>
                                                                      </g>
                                                                      <g class="">
                                                                        <rect
                                                                          fill="transparent"
                                                                          height="219"
                                                                          width="115.904375"
                                                                          x="51.8571875"
                                                                          y="8"
                                                                        ></rect>
                                                                        <path
                                                                          class=""
                                                                          d="M 65,227 v 2 q 0, -3 3, -3 h 37.809375 q 3, 0 3, 3 v -2 z"
                                                                          fill="rgba(92,59,191,1)"
                                                                        ></path>
                                                                        <path
                                                                          class=""
                                                                          d="M 110.809375,227 v 2 q 0, -3 3, -3 h 37.809375 q 3, 0 3, 3 v -2 z"
                                                                          fill="rgba(50,205,205,1)"
                                                                        ></path>
                                                                      </g>
                                                                      <g class="">
                                                                        <rect
                                                                          fill="transparent"
                                                                          height="219"
                                                                          width="115.904375"
                                                                          x="185.28531250000003"
                                                                          y="8"
                                                                        ></rect>
                                                                        <path
                                                                          class=""
                                                                          d="M 198.42812500000002,227 v -51.75 q 0, -3 3, -3 h 37.809375 q 3, 0 3, 3 v 51.75 z"
                                                                          fill="rgba(92,59,191,1)"
                                                                        ></path>
                                                                        <path
                                                                          class=""
                                                                          d="M 244.2375,227 v 2 q 0, -3 3, -3 h 37.809375 q 3, 0 3, 3 v -2 z"
                                                                          fill="rgba(50,205,205,1)"
                                                                        ></path>
                                                                      </g>
                                                                      <g class="">
                                                                        <rect
                                                                          fill="transparent"
                                                                          height="219"
                                                                          width="115.904375"
                                                                          x="318.71343750000005"
                                                                          y="8"
                                                                        ></rect>
                                                                        <path
                                                                          class=""
                                                                          d="M 331.85625000000005,227 v 2 q 0, -3 3, -3 h 37.809375 q 3, 0 3, 3 v -2 z"
                                                                          fill="rgba(92,59,191,1)"
                                                                        ></path>
                                                                        <path
                                                                          class=""
                                                                          d="M 377.66562500000003,227 v -161.25 q 0, -3 3, -3 h 37.809375 q 3, 0 3, 3 v 161.25 z"
                                                                          fill="rgba(50,205,205,1)"
                                                                        ></path>
                                                                      </g>
                                                                      <g class="">
                                                                        <rect
                                                                          fill="transparent"
                                                                          height="219"
                                                                          width="115.904375"
                                                                          x="452.1415625000001"
                                                                          y="8"
                                                                        ></rect>
                                                                        <path
                                                                          class=""
                                                                          d="M 465.28437500000007,227 v 2 q 0, -3 3, -3 h 37.809375 q 3, 0 3, 3 v -2 z"
                                                                          fill="rgba(92,59,191,1)"
                                                                        ></path>
                                                                        <path
                                                                          class=""
                                                                          d="M 511.09375000000006,227 v 2 q 0, -3 3, -3 h 37.809375 q 3, 0 3, 3 v -2 z"
                                                                          fill="rgba(50,205,205,1)"
                                                                        ></path>
                                                                      </g>
                                                                      <g class="">
                                                                        <rect
                                                                          fill="transparent"
                                                                          height="219"
                                                                          width="115.904375"
                                                                          x="585.5696875000001"
                                                                          y="8"
                                                                        ></rect>
                                                                        <path
                                                                          class=""
                                                                          d="M 598.7125000000001,227 v 2 q 0, -3 3, -3 h 37.809375 q 3, 0 3, 3 v -2 z"
                                                                          fill="rgba(92,59,191,1)"
                                                                        ></path>
                                                                        <path
                                                                          class=""
                                                                          d="M 644.5218750000001,227 v 2 q 0, -3 3, -3 h 37.809375 q 3, 0 3, 3 v -2 z"
                                                                          fill="rgba(50,205,205,1)"
                                                                        ></path>
                                                                      </g>
                                                                      <g class="">
                                                                        <rect
                                                                          fill="transparent"
                                                                          height="219"
                                                                          width="115.904375"
                                                                          x="718.9978125000001"
                                                                          y="8"
                                                                        ></rect>
                                                                        <path
                                                                          class=""
                                                                          d="M 732.1406250000001,227 v -106.5 q 0, -3 3, -3 h 37.809375 q 3, 0 3, 3 v 106.5 z"
                                                                          fill="rgba(92,59,191,1)"
                                                                        ></path>
                                                                        <path
                                                                          class=""
                                                                          d="M 777.9500000000002,227 v -216 q 0, -3 3, -3 h 37.809375 q 3, 0 3, 3 v 216 z"
                                                                          fill="rgba(50,205,205,1)"
                                                                        ></path>
                                                                      </g>
                                                                      <g class="">
                                                                        <rect
                                                                          fill="transparent"
                                                                          height="219"
                                                                          width="115.904375"
                                                                          x="852.4259375000001"
                                                                          y="8"
                                                                        ></rect>
                                                                        <path
                                                                          class=""
                                                                          d="M 865.5687500000001,227 v -106.5 q 0, -3 3, -3 h 37.809375 q 3, 0 3, 3 v 106.5 z"
                                                                          fill="rgba(92,59,191,1)"
                                                                        ></path>
                                                                        <path
                                                                          class=""
                                                                          d="M 911.3781250000002,227 v -51.75 q 0, -3 3, -3 h 37.809375 q 3, 0 3, 3 v 51.75 z"
                                                                          fill="rgba(50,205,205,1)"
                                                                        ></path>
                                                                      </g>
                                                                    </svg>
                                                                    <table
                                                                      class="x1lliihq x1mwwwfo x1gukg7c x1qvwoe0 xjm9jq1 x10l6tqk x140o2bo x1i1rx1s x6ikm8r x10wlt62"
                                                                      id="js_1e0"
                                                                    >
                                                                      <tbody>
                                                                        <tr>
                                                                          <th></th>
                                                                          <th>
                                                                            13-17
                                                                          </th>
                                                                          <th>
                                                                            18-24
                                                                          </th>
                                                                          <th>
                                                                            25-34
                                                                          </th>
                                                                          <th>
                                                                            35-44
                                                                          </th>
                                                                          <th>
                                                                            45-54
                                                                          </th>
                                                                          <th>
                                                                            55-64
                                                                          </th>
                                                                          <th>
                                                                            65+
                                                                          </th>
                                                                        </tr>
                                                                        <tr>
                                                                          <td>
                                                                            Results
                                                                            (Men)
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
                                                                        </tr>
                                                                        <tr>
                                                                          <td>
                                                                            Results
                                                                            (Women)
                                                                          </td>
                                                                          <td>
                                                                            0
                                                                          </td>
                                                                          <td>
                                                                            0
                                                                          </td>
                                                                          <td>
                                                                            3
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
                                                                            1
                                                                          </td>
                                                                        </tr>
                                                                      </tbody>
                                                                    </table>
                                                                  </div>
                                                                  <div>
                                                                    <div class="x78zum5 xl56j7k x2lwn1j xeuugli">
                                                                      <div class="x1cy8zhl x3nfvp2 x1q0g3np xozqiw3 x2lwn1j xeuugli x1c4vz4f xy9qb40">
                                                                        <div class="x1cy8zhl x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94">
                                                                          <div class="xmi5d70 x1fvot60 xxio538 xbsr9hj xq9mrsl x1h4wwuj x1fcty0u x78zum5 xl56j7k x6s0dn4">
                                                                            <span>
                                                                              ​
                                                                            </span>
                                                                            <div class="xjm9jq1 x78zum5 xl56j7k x6s0dn4">
                                                                              <div
                                                                                id="style-7hYIv"
                                                                                class="style-7hYIv"
                                                                              ></div>
                                                                            </div>
                                                                          </div>
                                                                          <div class="x78zum5 xdt5ytf x2lwn1j xeuugli">
                                                                            <span class="xmi5d70 x1fvot60 xo1l8bm xxio538 xbsr9hj xq9mrsl x1h4wwuj xeuugli">
                                                                              Men
                                                                            </span>
                                                                            <span class="xmi5d70 xw23nyj xo1l8bm x63nzvj xbsr9hj xq9mrsl x1h4wwuj xeuugli">
                                                                              38%
                                                                              (5)
                                                                            </span>
                                                                            <span class="xmi5d70 xw23nyj xo1l8bm x63nzvj xbsr9hj xq9mrsl x1h4wwuj xeuugli">
                                                                              Cost
                                                                              per
                                                                              result:{" "}
                                                                              <span class="_3dfi _3dfj">
                                                                                Rs58.95
                                                                              </span>
                                                                            </span>
                                                                          </div>
                                                                        </div>
                                                                        <div class="x1cy8zhl x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94">
                                                                          <div class="xmi5d70 x1fvot60 xxio538 xbsr9hj xq9mrsl x1h4wwuj x1fcty0u x78zum5 xl56j7k x6s0dn4">
                                                                            <span>
                                                                              ​
                                                                            </span>
                                                                            <div class="xjm9jq1 x78zum5 xl56j7k x6s0dn4">
                                                                              <div
                                                                                id="style-dGcMW"
                                                                                class="style-dGcMW"
                                                                              ></div>
                                                                            </div>
                                                                          </div>
                                                                          <div class="x78zum5 xdt5ytf x2lwn1j xeuugli">
                                                                            <span class="xmi5d70 x1fvot60 xo1l8bm xxio538 xbsr9hj xq9mrsl x1h4wwuj xeuugli">
                                                                              Women
                                                                            </span>
                                                                            <span class="xmi5d70 xw23nyj xo1l8bm x63nzvj xbsr9hj xq9mrsl x1h4wwuj xeuugli">
                                                                              62%
                                                                              (8)
                                                                            </span>
                                                                            <span class="xmi5d70 xw23nyj xo1l8bm x63nzvj xbsr9hj xq9mrsl x1h4wwuj xeuugli">
                                                                              Cost
                                                                              per
                                                                              result:{" "}
                                                                              <span class="_3dfi _3dfj">
                                                                                Rs38.12
                                                                              </span>
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
                                                      <div class="xjm9jq1 xg01cxk x47corl xh8yej3 x1y332i5"></div>
                                                    </div>
                                                    <div class="x10wjd1d x47corl x10l6tqk x19991ni x13dflua xwji4o3 xh8yej3 xg01cxk x67dex8 x13vifvy"></div>
                                                    <div class="x10wjd1d x47corl x10l6tqk x19991ni x13dflua xwji4o3 xh8yej3 xg01cxk x1ta9b4f x1ey2m1c"></div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </span>
                                      </div>
                                      {/* work here */}
                                      <div
                                        style={{
                                          backgroundColor: "white",
                                          marginTop: "8px",
                                        }}
                                      >
                                        <div class="snipcss-Jrm5O">
                                          <div class="x78zum5 xdt5ytf x2lwn1j xeuugli">
                                            <div class="x78zum5 xdt5ytf x2lwn1j xeuugli">
                                              <div
                                                style={{
                                                  backgroundColor: "white",
                                                }}
                                                class="x6s0dn4 x78zum5 x1qughib x2lwn1j xeuugli x1emribx"
                                              >
                                                <div
                                                  aria-level="4"
                                                  class="x1xqt7ti xsuwoey x1xlr1w8 x63nzvj xbsr9hj xq9mrsl x1yc453h x1h4wwuj xeuugli x14vqqas xq8finb xod5an3 x16n37ib"
                                                  role="heading"
                                                >
                                                  Ad preview
                                                </div>
                                                <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1c4vz4f x2lah0s x19lwn94">
                                                  <div>
                                                    <div
                                                      data-visualcompletion="ignore"
                                                      class=""
                                                    ></div>
                                                    <div id="aco_preview_view_more_variations_tip">
                                                      <div
                                                        class="x3nfvp2 x193iq5w xxymvpz"
                                                        role="none"
                                                      >
                                                        <div
                                                          aria-busy="false"
                                                          class="x1i10hfl xjqpnuy xa49m3k xqeqjp1 x2hbi6w x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli x16tdsg8 xggy1nq x1ja2u2z x6s0dn4 x1ejq31n xd10rxx x1sy0etr x17r0tee x3nfvp2 xdl72j9 x1q0g3np x2lah0s x193iq5w x1n2onr6 x1hl2dhg x87ps6o xxymvpz xlh3980 xvmahel x1lku1pv x1g40iwv x1lcm9me x1yr5g0i xrt01vj x10y3i5r x1ob88yx xaatb59 x1qgsegg xo1l8bm xbsr9hj x1v911su x1y1aw1k xwib8y2 x1pi30zi x1ye3gou"
                                                          id="js_2h"
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
                                                                    class="xtwfq29 style-m1oQE"
                                                                    id="style-m1oQE"
                                                                  ></div>
                                                                </div>
                                                                <div class="x1xqt7ti x1fvot60 xk50ysn xxio538 x1heor9g xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj xeuugli">
                                                                  Advanced
                                                                  Preview
                                                                </div>
                                                              </div>
                                                            </div>
                                                          </span>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div
                                                    aria-busy="false"
                                                    aria-controls="js_2v"
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
                                                          Share
                                                        </div>
                                                        <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1hc1fzr x13dflua x6o7n8i xxziih7 x12w9bfk x1nhvcw1 xh8yej3">
                                                          <div
                                                            class="x3nfvp2 x120ccyz x1heor9g x2lah0s x1c4vz4f"
                                                            role="presentation"
                                                          >
                                                            <div
                                                              class="xtwfq29 style-JRpn2"
                                                              id="style-JRpn2"
                                                            ></div>
                                                          </div>
                                                          ​
                                                          <div
                                                            class="x3nfvp2 x120ccyz x1heor9g x2lah0s x1c4vz4f x1gryazu"
                                                            role="presentation"
                                                          >
                                                            <div
                                                              class="xtwfq29 style-tSYjp"
                                                              id="style-tSYjp"
                                                            ></div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </span>
                                                  </div>
                                                </div>
                                              </div>
                                              <hr class="xjbqb8w x11i5rnm x1mh8g0r xso031l x1q0q8m5 xqtp20y xwebqov xvyu6v8 xrsgblv x10lij0i xdj266r xat24cr" />
                                              <div class="x1qjc9v5 x78zum5 x2lwn1j xeuugli">
                                                <div class="x78zum5 xdt5ytf x2lwn1j xeuugli x1iyjqo2">
                                                  <div class="x1n2onr6 x3sc9yq">
                                                    <div class="x6s0dn4 x78zum5 xl56j7k x2lwn1j xeuugli x5yr21d">
                                                      <div
                                                        data-visualcompletion="ignore"
                                                        class=""
                                                      ></div>
                                                      <div id="adgroup-preview-placement-filters">
                                                        <div class="x78zum5 x2lwn1j xeuugli x1gslohp x12nagc">
                                                          <div
                                                            class="x78zum5 xdmi676 x193iq5w x6ikm8r x10wlt62 x1n2onr6 xmi5d70 x1fvot60 xo1l8bm xxio538"
                                                            role="tablist"
                                                          >
                                                            <div
                                                              aria-hidden="false"
                                                              aria-label="All"
                                                              aria-selected="true"
                                                              class="x1i10hfl xjqpnuy xa49m3k xqeqjp1 x2hbi6w x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xdl72j9 xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli x1n2onr6 x16tdsg8 x1hl2dhg xggy1nq x1ja2u2z x1t137rt x6s0dn4 x78zum5 x1q0g3np x2lah0s xl56j7k x1lku1pv x1g40iwv x1lcm9me x1yr5g0i xrt01vj x10y3i5r x1ye3gou xn6708d x1xlr1w8 x1qsmy5i x1k4ywey xm7lytj x1ykpatu"
                                                              role="tab"
                                                              tabindex="0"
                                                            >
                                                              <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 xs83m0k x19lwn94 xl56j7k">
                                                                <div class="x3nfvp2 x2lah0s">
                                                                  <i
                                                                    class="img style-5csaD"
                                                                    height="16"
                                                                    width="16"
                                                                    alt=""
                                                                    data-visualcompletion="css-img"
                                                                    id="style-5csaD"
                                                                  ></i>
                                                                </div>
                                                              </div>
                                                            </div>
                                                            <div
                                                              aria-hidden="false"
                                                              aria-label="Feeds, In-stream ads for videos and reels, Search results"
                                                              aria-selected="false"
                                                              class="x1i10hfl xjqpnuy xa49m3k xqeqjp1 x2hbi6w x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xdl72j9 xe8uvvx xdj266r x11i5rnm xat24cr x2lwn1j xeuugli x1n2onr6 x16tdsg8 x1hl2dhg xggy1nq x1ja2u2z x1t137rt x6s0dn4 x78zum5 x1q0g3np x2lah0s xl56j7k x1lku1pv x1g40iwv x1lcm9me x1yr5g0i xrt01vj x10y3i5r x1ye3gou xn6708d xo1l8bm xbsr9hj x1v911su xm7lytj x1ykpatu x1i64zmx"
                                                              role="tab"
                                                              tabindex="0"
                                                            >
                                                              <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 xs83m0k x19lwn94 xl56j7k">
                                                                <div class="x3nfvp2 x2lah0s">
                                                                  <i
                                                                    class="img style-8e487"
                                                                    height="16"
                                                                    width="16"
                                                                    alt=""
                                                                    data-visualcompletion="css-img"
                                                                    id="style-8e487"
                                                                  ></i>
                                                                </div>
                                                              </div>
                                                            </div>
                                                            <div
                                                              aria-hidden="false"
                                                              aria-label="Stories and Reels, Apps and sites"
                                                              aria-selected="false"
                                                              class="x1i10hfl xjqpnuy xa49m3k xqeqjp1 x2hbi6w x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xdl72j9 xe8uvvx xdj266r x11i5rnm xat24cr x2lwn1j xeuugli x1n2onr6 x16tdsg8 x1hl2dhg xggy1nq x1ja2u2z x1t137rt x6s0dn4 x78zum5 x1q0g3np x2lah0s xl56j7k x1lku1pv x1g40iwv x1lcm9me x1yr5g0i xrt01vj x10y3i5r x1ye3gou xn6708d xo1l8bm xbsr9hj x1v911su xm7lytj x1ykpatu x1i64zmx"
                                                              role="tab"
                                                              tabindex="0"
                                                            >
                                                              <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 xs83m0k x19lwn94 xl56j7k">
                                                                <div class="x3nfvp2 x2lah0s">
                                                                  <i
                                                                    class="img style-vRFMK"
                                                                    height="16"
                                                                    width="16"
                                                                    alt=""
                                                                    data-visualcompletion="css-img"
                                                                    id="style-vRFMK"
                                                                  ></i>
                                                                </div>
                                                              </div>
                                                            </div>
                                                            <div
                                                              aria-hidden="false"
                                                              aria-label="Right column, Search results"
                                                              aria-selected="false"
                                                              class="x1i10hfl xjqpnuy xa49m3k xqeqjp1 x2hbi6w x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xdl72j9 xe8uvvx xdj266r x11i5rnm xat24cr x2lwn1j xeuugli x1n2onr6 x16tdsg8 x1hl2dhg xggy1nq x1ja2u2z x1t137rt x6s0dn4 x78zum5 x1q0g3np x2lah0s xl56j7k x1lku1pv x1g40iwv x1lcm9me x1yr5g0i xrt01vj x10y3i5r x1ye3gou xn6708d xo1l8bm xbsr9hj x1v911su xm7lytj x1ykpatu x1i64zmx"
                                                              role="tab"
                                                              tabindex="0"
                                                            >
                                                              <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 xs83m0k x19lwn94 xl56j7k">
                                                                <div class="x3nfvp2 x2lah0s">
                                                                  <i
                                                                    class="x1iffjtl img style-HGqF6"
                                                                    height="16"
                                                                    width="16"
                                                                    alt=""
                                                                    data-visualcompletion="css-img"
                                                                    id="style-HGqF6"
                                                                  ></i>
                                                                </div>
                                                              </div>
                                                            </div>
                                                            <div
                                                              aria-haspopup="true"
                                                              aria-hidden="true"
                                                              aria-label="More"
                                                              class="x1i10hfl xjqpnuy xa49m3k xqeqjp1 x2hbi6w x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xdl72j9 xe8uvvx xdj266r x11i5rnm xat24cr x2lwn1j xeuugli x16tdsg8 x1hl2dhg xggy1nq x1ja2u2z x1t137rt x6s0dn4 x78zum5 x1q0g3np x2lah0s xl56j7k x1lku1pv x1g40iwv x1lcm9me x1yr5g0i xrt01vj x10y3i5r x1ye3gou xn6708d xo1l8bm xbsr9hj x1v911su xm7lytj x1ykpatu x10l6tqk x47corl x1i64zmx xlshs6z"
                                                              role="button"
                                                              tabindex="-1"
                                                            >
                                                              <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 xs83m0k x19lwn94 xl56j7k">
                                                                <div
                                                                  class="x3nfvp2 x120ccyz x1heor9g"
                                                                  role="presentation"
                                                                >
                                                                  <div
                                                                    class="xtwfq29 style-JkwoP"
                                                                    id="style-JkwoP"
                                                                  ></div>
                                                                </div>
                                                              </div>
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                    <div class="x6s0dn4 x78zum5 x2lwn1j xeuugli x10l6tqk x13vifvy x1ey2m1c xds687c xsgj6o6 xw3qccf">
                                                      <div
                                                        data-visualcompletion="ignore"
                                                        class=""
                                                      ></div>
                                                      <div id="adgroup-preview-error-hub">
                                                        <div
                                                          class="x78zum5 xdmi676 x193iq5w x6ikm8r x10wlt62 x1n2onr6 xmi5d70 x1fvot60 xo1l8bm xxio538"
                                                          role="tablist"
                                                        >
                                                          <div
                                                            aria-hidden="false"
                                                            aria-label="Your ad won't deliver to 6 placements"
                                                            aria-selected="false"
                                                            class="x1i10hfl xjqpnuy xa49m3k xqeqjp1 x2hbi6w x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xdl72j9 xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli x1n2onr6 x16tdsg8 x1hl2dhg xggy1nq x1ja2u2z x1t137rt x6s0dn4 x78zum5 x1q0g3np x2lah0s xl56j7k x1lku1pv x1g40iwv x1lcm9me x1yr5g0i xrt01vj x10y3i5r x1ye3gou xn6708d xo1l8bm xbsr9hj x1v911su xm7lytj x1ykpatu"
                                                            role="tab"
                                                            tabindex="0"
                                                          >
                                                            <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 xs83m0k x19lwn94 xl56j7k">
                                                              <div class="x3nfvp2 x2lah0s">
                                                                <div
                                                                  class="x3nfvp2 x120ccyz x14ud04y"
                                                                  role="presentation"
                                                                >
                                                                  <div
                                                                    class="xtwfq29 style-DRyyf"
                                                                    id="style-DRyyf"
                                                                  ></div>
                                                                </div>
                                                              </div>
                                                              <span class="x3nfvp2 xmix8c7 x1n2onr6">
                                                                <span class="x6s0dn4 x9f619 x78zum5 xmix8c7 xl56j7k x16xo4sp x1t137rt x1j85h84 xsyo7zv x16hj40l x4p5aij x1n2onr6 xzolkzo x12go9s9 x1rnf11y xprq8jg xmi5d70 xw23nyj x63nzvj xthj1y xuxw1ft x2b8uid x117nqv4 xx86479">
                                                                  <div class="xmi5d70 xw23nyj x63nzvj x1heor9g xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj x1pd3egz xeuugli">
                                                                    6
                                                                  </div>
                                                                </span>
                                                                <div
                                                                  aria-atomic="true"
                                                                  aria-live="polite"
                                                                  role="status"
                                                                  class="x1qvwoe0 xjm9jq1 x1y332i5 xcwd3tp x1jyxor1 x39eecv x6ikm8r x10wlt62 x10l6tqk xuxw1ft x1i1rx1s"
                                                                  data-sscoverage-ignore="true"
                                                                >
                                                                  Your ad won't
                                                                  deliver to 6
                                                                  placements
                                                                </div>
                                                              </span>
                                                            </div>
                                                          </div>
                                                          <div
                                                            aria-haspopup="true"
                                                            aria-hidden="true"
                                                            aria-label="More"
                                                            class="x1i10hfl xjqpnuy xa49m3k xqeqjp1 x2hbi6w x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xdl72j9 xe8uvvx xdj266r x11i5rnm xat24cr x2lwn1j xeuugli x16tdsg8 x1hl2dhg xggy1nq x1ja2u2z x1t137rt x6s0dn4 x78zum5 x1q0g3np x2lah0s xl56j7k x1lku1pv x1g40iwv x1lcm9me x1yr5g0i xrt01vj x10y3i5r x1ye3gou xn6708d xo1l8bm xbsr9hj x1v911su xm7lytj x1ykpatu x10l6tqk x47corl x1i64zmx xlshs6z"
                                                            role="button"
                                                            tabindex="-1"
                                                          >
                                                            <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 xs83m0k x19lwn94 xl56j7k">
                                                              <div
                                                                class="x3nfvp2 x120ccyz x1heor9g"
                                                                role="presentation"
                                                              >
                                                                <div
                                                                  class="xtwfq29 style-smerH"
                                                                  id="style-smerH"
                                                                ></div>
                                                              </div>
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div class="x78zum5 x2lwn1j xeuugli x1iyjqo2 xs83m0k xw2csxc x9f619 xh8yej3"></div>
                                                </div>
                                                <div
                                                  class="x78zum5 x6s0dn4 x17fnjtu xwebqov xvyu6v8 xrsgblv x10lij0i x26u7qi x19p7ews style-jZP6B"
                                                  id="style-jZP6B"
                                                >
                                                  <div
                                                    aria-level="4"
                                                    class="x1xqt7ti xsuwoey x1xlr1w8 x63nzvj xbsr9hj xq9mrsl x1yc453h x1h4wwuj xeuugli x1d52u69 x1emribx x14vqqas xod5an3"
                                                    role="heading"
                                                  >
                                                    Comments
                                                  </div>
                                                  <div class="x78zum5 xdt5ytf xdl72j9 x1iyjqo2 xeuugli x1n2onr6 xh8yej3 x256u9z">
                                                    <div
                                                      class="x1qvwoe0 xjm9jq1 x1y332i5 xcwd3tp x1jyxor1 x39eecv x6ikm8r x10wlt62 x10l6tqk xuxw1ft x1i1rx1s style-Mi5pa"
                                                      data-sscoverage-ignore="true"
                                                      id="style-Mi5pa"
                                                    >
                                                      <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94">
                                                        <div class="x1iyjqo2">
                                                          <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x65s2av">
                                                            <label
                                                              id="js_i1"
                                                              for="js_i0"
                                                            >
                                                              <span class="xmi5d70 x1fvot60 xxio538 xbsr9hj xq9mrsl x1mzt3pk x1vvkbs x13faqbe x117nqv4 xeuugli">
                                                                Available
                                                                placement filter
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
                                                              aria-labelledby="js_i1 js_i4"
                                                              aria-owns="js_hz"
                                                              class="x1i10hfl xjqpnuy xa49m3k xqeqjp1 x2hbi6w x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli x16tdsg8 xggy1nq x1ja2u2z x6s0dn4 x1ejq31n xd10rxx x1sy0etr x17r0tee x3nfvp2 xdl72j9 x1q0g3np x2lah0s x193iq5w x1n2onr6 x1hl2dhg x87ps6o xxymvpz xlh3980 xvmahel x1lku1pv x1g40iwv x1lcm9me x1yr5g0i xrt01vj x10y3i5r x1ob88yx xaatb59 x1qgsegg xo1l8bm xbsr9hj x1v911su x1y1aw1k xwib8y2 x1ye3gou xn6708d xh8yej3"
                                                              id="js_i0"
                                                              role="combobox"
                                                              tabindex="0"
                                                            >
                                                              <span class="xmi5d70 x1fvot60 xxio538 x1heor9g xq9mrsl x1h4wwuj x1pd3egz xeuugli xh8yej3">
                                                                <div class="x78zum5">
                                                                  <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1hc1fzr x13dflua x6o7n8i xxziih7 x12w9bfk x1nhvcw1 xh8yej3">
                                                                    <div class="x3nfvp2 x2lah0s x1c4vz4f">
                                                                      <div class="x6s0dn4 x3nfvp2 x1q0g3np xozqiw3 x2lwn1j xeuugli x1c4vz4f x19lwn94 xmi5d70 x1fvot60 xo1l8bm xxio538 xbsr9hj xq9mrsl xqcrz7y x2lah0s">
                                                                        ​
                                                                        <div class="x1lliihq x1n2onr6 x2lah0s xxk0z11 xvy4d1p x1lcm9me x1yr5g0i xrt01vj x10y3i5r xbmpl8g x9otpla x1wsgfga">
                                                                          <div
                                                                            class="x10l6tqk x6ikm8r x10wlt62 x13vifvy x17qophe xh8yej3 x5yr21d x1o1ewxj x3x9cwd x1e5q0jg x13rtm0m xosibs0 xt24udd xw53kvy x1dka6rp x47corl"
                                                                            role="presentation"
                                                                          >
                                                                            <div
                                                                              class="x3nfvp2 x120ccyz x4s1yf2"
                                                                              role="presentation"
                                                                            >
                                                                              <div
                                                                                class="xtwfq29 style-FOeHi"
                                                                                id="style-FOeHi"
                                                                              ></div>
                                                                            </div>
                                                                          </div>
                                                                        </div>
                                                                      </div>
                                                                    </div>
                                                                    <div class="x1xqt7ti x1fvot60 xk50ysn xxio538 x1heor9g xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj xeuugli x1iyjqo2">
                                                                      Facebook
                                                                      Feed
                                                                    </div>
                                                                    <div
                                                                      class="x3nfvp2 x120ccyz x1heor9g x2lah0s x1c4vz4f x1gryazu"
                                                                      role="presentation"
                                                                    >
                                                                      <div
                                                                        class="xtwfq29 style-rXzLc"
                                                                        id="style-rXzLc"
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
                                            <div class="x78zum5 xdt5ytf x2lwn1j xeuugli">
                                              <div class="x78zum5 x2lwn1j xeuugli">
                                                <div class="x6s0dn4 x78zum5 xdt5ytf x2lwn1j xeuugli x1iyjqo2 x1yhoyej x6ikm8r x1jn0hjm x1odjw0f">
                                                  <div class="x78zum5 xdt5ytf x2lwn1j xeuugli xkh2ocl">
                                                    <div
                                                      class="style-QRWNS"
                                                      id="style-QRWNS"
                                                    >
                                                      <div
                                                        class="x78zum5 xdt5ytf xozqiw3 x2lwn1j xeuugli x1iyjqo2 xs83m0k xavht8x style-1sVAi"
                                                        id="style-1sVAi"
                                                      >
                                                        <div
                                                          class="x1qjc9v5 x78zum5 xdt5ytf xozqiw3 x2lwn1j xeuugli x1iyjqo2 xs83m0k x1kxxb1g style-CZ9Nm"
                                                          id="style-CZ9Nm"
                                                        >
                                                          <div class="">
                                                            <div
                                                              class="xt9c220 x1sdr0u7 x1on1db2 xrvj5dj xl56j7k xw7yly9 x1yztbdb xh8yej3 style-Wsa5W"
                                                              id="style-Wsa5W"
                                                            >
                                                              <div class="">
                                                                <div class="">
                                                                  <div class="x3smdqs">
                                                                    <div class="x78zum5 x2lwn1j xeuugli xh8yej3">
                                                                      <div class="x78zum5 xdt5ytf x2lwn1j xamitd3 x1iyjqo2 xeuugli">
                                                                        <div class="x78zum5 x2lwn1j xeuugli xlshs6z">
                                                                          <div class="x78zum5 x2lwn1j xeuugli xamitd3 x2lah0s x1emribx">
                                                                            <div
                                                                              class="x3nfvp2 x120ccyz x4s1yf2"
                                                                              role="presentation"
                                                                            >
                                                                              <div
                                                                                class="xtwfq29 style-EFPkI"
                                                                                id="style-EFPkI"
                                                                              ></div>
                                                                            </div>
                                                                          </div>
                                                                          <div class="x6ikm8r x10wlt62 xlyipyv xh8yej3">
                                                                            <div class="xmi5d70 x1fvot60 xo1l8bm xxio538 xbsr9hj xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj xeuugli">
                                                                              Facebook
                                                                              Feed
                                                                            </div>
                                                                          </div>
                                                                        </div>
                                                                      </div>
                                                                      <div class="x78zum5 xdt5ytf x2lwn1j xeuugli xamitd3 x2lah0s">
                                                                        <div class="xlshs6z">
                                                                          <div
                                                                            class="x3oybdh xuxw1ft x1iknuni xw9jwym x1e2iszw xg0tal0 x1lliihq x1lcm9me x1yr5g0i xrt01vj x10y3i5r"
                                                                            role="group"
                                                                          >
                                                                            <div
                                                                              aria-busy="false"
                                                                              aria-controls="js_i5"
                                                                              class="x1i10hfl xjqpnuy xa49m3k xqeqjp1 x2hbi6w x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli x16tdsg8 xggy1nq x1ja2u2z x6s0dn4 x1ejq31n xd10rxx x1sy0etr x17r0tee x3nfvp2 xdl72j9 x1q0g3np x2lah0s x193iq5w x1n2onr6 x1hl2dhg x87ps6o xxymvpz xlh3980 xvmahel x1lku1pv x1g40iwv x1lcm9me x1yr5g0i xrt01vj x10y3i5r x1ob88yx xaatb59 x1qgsegg xo1l8bm xbsr9hj x1v911su x1y1aw1k xwib8y2 x1ye3gou xn6708d style-mDaTQ"
                                                                              role="button"
                                                                              tabindex="0"
                                                                              id="style-mDaTQ"
                                                                            >
                                                                              <span class="xmi5d70 x1fvot60 xxio538 x1heor9g xq9mrsl x1h4wwuj x1pd3egz xeuugli xh8yej3">
                                                                                <div class="x78zum5">
                                                                                  <div
                                                                                    class="x1qvwoe0 xjm9jq1 x1y332i5 xcwd3tp x1jyxor1 x39eecv x6ikm8r x10wlt62 x10l6tqk xuxw1ft x1i1rx1s"
                                                                                    data-sscoverage-ignore="true"
                                                                                  >
                                                                                    More
                                                                                    items
                                                                                  </div>
                                                                                  <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1hc1fzr x13dflua x6o7n8i xxziih7 x12w9bfk xl56j7k xh8yej3">
                                                                                    <div
                                                                                      class="x3nfvp2 x120ccyz x1heor9g x2lah0s x1c4vz4f"
                                                                                      role="presentation"
                                                                                    >
                                                                                      <div
                                                                                        class="xtwfq29 style-Hbwj4"
                                                                                        id="style-Hbwj4"
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
                                                                    <div class="xw7yly9">
                                                                      <div
                                                                        class="x1gzqxud x1lcm9me x1yr5g0i xrt01vj x10y3i5r xhgxa4x xy5ysw6 x1qkj6lk xn3walq xnvurfn xv1ta3e x1opv7go x1dtnpoi xibdhds xtnng9g xhvrwov x13k1m86 xwx4but x1cpjm7i xszcg87 x1hmns74 xkk1bqk x14d4353 xsxiz9q x1rmj1tg xchklzq x9f619 xc8icb0 x1n2onr6 x1pvq41x xhhp2wi x14q35kh x1wa3ocq x1n7iyjn x1s928wv x1wsn0xg x1j6awrg x162n7g1 x1m1drc7 x4eaejv xi4xitw x5yr21d xh8yej3"
                                                                        data-auto-logging-component-type="GeoCard"
                                                                      >
                                                                        <div class="x78zum5 xdt5ytf x5yr21d xedcshv x1t2pt76 xh8yej3">
                                                                          <div class="x9f619 x78zum5 x1iyjqo2 x5yr21d x2lwn1j x1n2onr6 xh8yej3">
                                                                            <div class="xw2csxc x1odjw0f xh8yej3 x18d9i69">
                                                                              <div class="xjm9jq1 xg01cxk x47corl xh8yej3 x1jyxor1"></div>
                                                                              <div class="x6s0dn4 x78zum5 xdt5ytf xl56j7k x2lwn1j xeuugli xgx9qek x1lq5wgf xgqcy7u x30kzoy x9jhf4c x6ikm8r x10wlt62 x1n2onr6 x15b6uid x3smdqs">
                                                                                <div>
                                                                                  <div>
                                                                                    <div class="_89mx">
                                                                                      <div class="_4u-c">
                                                                                        <div
                                                                                          id="style-oNnvj"
                                                                                          class="style-oNnvj"
                                                                                        >
                                                                                          <div class="">
                                                                                            <div>
                                                                                              <div class="_5zg">
                                                                                                <div class="_7vpk">
                                                                                                  <div class=" _831c">
                                                                                                    <div class="_91kv">
                                                                                                      <div>
                                                                                                        <div class="">
                                                                                                          <div
                                                                                                            class="_ag3c _228q"
                                                                                                            id="f7525c852c0416d6e"
                                                                                                          >
                                                                                                            <div
                                                                                                              class="hidden_elem"
                                                                                                              id="f7525c852c0416d6e-1"
                                                                                                            ></div>
                                                                                                            <div
                                                                                                              class=""
                                                                                                              id="f7525c852c0416d6e-2"
                                                                                                              data-ad-preview="previewContainer"
                                                                                                            >
                                                                                                              <div
                                                                                                                data-testid="ad-preview-mobile-feed-standard"
                                                                                                                data-react-ad-preview="reactPreviewContainer"
                                                                                                                data-clickable="1"
                                                                                                                data-inputable="1"
                                                                                                                data-keydownable="1"
                                                                                                                data-keyupable="1"
                                                                                                                data-changeable="1"
                                                                                                              >
                                                                                                                <div class="x2izyaf x1m258z3 x1yc453h xdj266r xkrivgy xat24cr x1gryazu xw2csxc x1odjw0f x47corl x87ps6o">
                                                                                                                  <div class="x78zum5 xdj266r x11i5rnm xod5an3 x1mh8g0r x889kno x1iji9kk x18d9i69 x1sln4lm x1cy8zhl">
                                                                                                                    <div class="x78zum5 x16dsc37 x1sxyh0">
                                                                                                                      <img
                                                                                                                        class="x14yjl9h xudhj91 x18nykt9 xww2gxu x100vrsf x1vqgdyp x3ajldb img"
                                                                                                                        src="https://i.postimg.cc/jqBmLCXY/VC.jpg"
                                                                                                                        alt=""
                                                                                                                      />
                                                                                                                    </div>
                                                                                                                    ss
                                                                                                                    <div class="x78zum5 xamitd3">
                                                                                                                      <div class="x78zum5 xdt5ytf xamitd3 x1ajhdc7 xh8yej3">
                                                                                                                        <div>
                                                                                                                          <span class="x1fzdab9 x1f6kntn xuy8w9f">
                                                                                                                            <span class="x1xlr1w8">
                                                                                                                              Valentino
                                                                                                                              Technologies
                                                                                                                            </span>
                                                                                                                          </span>
                                                                                                                        </div>
                                                                                                                        <div class="x1hjcb3a x1pg5gke x9438zm x1n2onr6 x17ocude xt0psk2">
                                                                                                                          <div class="xt0psk2">
                                                                                                                            Sponsored
                                                                                                                          </div>{" "}
                                                                                                                          ·{" "}
                                                                                                                          <img
                                                                                                                            src="https://adsmanager.facebook.com/images/mobile/privacy/wordmark/everyone.png"
                                                                                                                            alt=""
                                                                                                                            class="img"
                                                                                                                          />
                                                                                                                        </div>
                                                                                                                      </div>
                                                                                                                      <div class="x78zum5 x1q0g3np x1gfops9 xh8yej3 x13a6bvl">
                                                                                                                        <i
                                                                                                                          class="xamitd3 img style-yeRjp"
                                                                                                                          alt=""
                                                                                                                          data-visualcompletion="css-img"
                                                                                                                          id="style-yeRjp"
                                                                                                                        ></i>
                                                                                                                        <i
                                                                                                                          class="x1d52u69 xamitd3 img style-owz2c"
                                                                                                                          alt=""
                                                                                                                          data-visualcompletion="css-img"
                                                                                                                          id="style-owz2c"
                                                                                                                        ></i>
                                                                                                                      </div>
                                                                                                                    </div>
                                                                                                                  </div>
                                                                                                                  <div class="x1xmf6yo x11i5rnm x1e56ztr x1mh8g0r xexx8yu x1iji9kk x18d9i69 x1sln4lm _3qn7 _61-0 _2fyh _1a9e">
                                                                                                                    <div
                                                                                                                      class="xogfrqt x1f6kntn xd4r4e8 x1vvkbs"
                                                                                                                      data-ad-preview="message"
                                                                                                                      data-react-ad-preview="message"
                                                                                                                    >
                                                                                                                      <div>
                                                                                                                        <div
                                                                                                                          class=""
                                                                                                                          dir=""
                                                                                                                        >
                                                                                                                          <span>
                                                                                                                            <span>
                                                                                                                              We
                                                                                                                              help
                                                                                                                              people
                                                                                                                              to
                                                                                                                              live
                                                                                                                              a
                                                                                                                              better
                                                                                                                              life
                                                                                                                              through
                                                                                                                              technological
                                                                                                                              home
                                                                                                                              services.
                                                                                                                            </span>
                                                                                                                            <br />
                                                                                                                          </span>
                                                                                                                        </div>
                                                                                                                      </div>
                                                                                                                    </div>
                                                                                                                  </div>
                                                                                                                  <div class="x1n2onr6 x1ja2u2z x1m258z3 x1e56ztr">
                                                                                                                    <div class="x1n2onr6">
                                                                                                                      <div class="x10l6tqk x178xt8z x13fuv20 xqvba61 x1m258z3 x1vjfegm x17qophe x13vifvy"></div>
                                                                                                                      <div
                                                                                                                        class="x1n2onr6"
                                                                                                                        data-ad-preview="image-container"
                                                                                                                        data-react-ad-preview="image-container"
                                                                                                                      >
                                                                                                                        <img
                                                                                                                          class="x1lliihq x193iq5w img"
                                                                                                                          data-ad-preview="image"
                                                                                                                          data-react-ad-preview="image"
                                                                                                                          height="319"
                                                                                                                          src={
                                                                                                                            campaign?.campaingImage
                                                                                                                          }
                                                                                                                          width="320"
                                                                                                                          alt=""
                                                                                                                        />
                                                                                                                      </div>
                                                                                                                      <div class="xz9dl7a xn6708d xsag5q8 x1ye3gou xz2iaq5 x1ba4aug _3qn7 _61-0 _2fyi _3qng">
                                                                                                                        <div
                                                                                                                          class="_6g3g x6ikm8r x10wlt62 x1vvkbs x1qughib x1jquxbb style-GQjJz"
                                                                                                                          id="style-GQjJz"
                                                                                                                        >
                                                                                                                          <div>
                                                                                                                            <div
                                                                                                                              class="xh8yej3 x1d3mw78"
                                                                                                                              data-ad-preview="display-link-container"
                                                                                                                            >
                                                                                                                              <span class="x1nxh6w3 x1kyqaxf _6i6a">
                                                                                                                                <span
                                                                                                                                  id="style-8DNPI"
                                                                                                                                  class="style-8DNPI"
                                                                                                                                >
                                                                                                                                  solarpanelsystems.xyz
                                                                                                                                </span>
                                                                                                                              </span>
                                                                                                                            </div>
                                                                                                                            <div class="xowg6hp">
                                                                                                                              <div>
                                                                                                                                <span
                                                                                                                                  class="xh8yej3 x1fc57z9 x6prxxf x117nqv4"
                                                                                                                                  data-ad-preview="headline"
                                                                                                                                  dir=""
                                                                                                                                >
                                                                                                                                  Valentino
                                                                                                                                  Technologies
                                                                                                                                </span>
                                                                                                                              </div>
                                                                                                                            </div>
                                                                                                                          </div>
                                                                                                                          <div
                                                                                                                            data-ad-preview="link-description"
                                                                                                                            dir=""
                                                                                                                            id="style-nNtRx"
                                                                                                                            class="style-nNtRx"
                                                                                                                          >
                                                                                                                            <span class="x1fc57z9 x6prxxf _6i6a">
                                                                                                                              solarpanelsystems.xyz
                                                                                                                              is
                                                                                                                              your
                                                                                                                              first
                                                                                                                              and
                                                                                                                              best
                                                                                                                              source
                                                                                                                              for
                                                                                                                              all
                                                                                                                              of
                                                                                                                              the
                                                                                                                              information
                                                                                                                              you’re
                                                                                                                              looking
                                                                                                                              for.
                                                                                                                              From
                                                                                                                              general
                                                                                                                              topics
                                                                                                                              to
                                                                                                                              more
                                                                                                                              of
                                                                                                                              what
                                                                                                                              you
                                                                                                                              would
                                                                                                                              expect
                                                                                                                              to
                                                                                                                              find
                                                                                                                              here,
                                                                                                                              solarpanelsystems.xyz
                                                                                                                              has
                                                                                                                              it
                                                                                                                              all.
                                                                                                                              We
                                                                                                                              hope
                                                                                                                              you
                                                                                                                              find
                                                                                                                              what
                                                                                                                              you
                                                                                                                              are
                                                                                                                              searching
                                                                                                                              for!
                                                                                                                            </span>
                                                                                                                          </div>
                                                                                                                        </div>
                                                                                                                        <div class="x16n37ib">
                                                                                                                          <div data-ad-preview="cta">
                                                                                                                            <div
                                                                                                                              aria-label="Learn more"
                                                                                                                              class="x1i10hfl xjbqb8w x1ejq31n xd10rxx x1sy0etr x17r0tee x972fbf xcfux6l x1qhh985 xm0m39n x1ypdohk xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r xexx8yu x4uap5 x18d9i69 xkhd6sd x16tdsg8 x1hl2dhg xggy1nq x1o1ewxj x3x9cwd x1e5q0jg x13rtm0m x87ps6o x1lku1pv x1a2a7pz x9f619 x3nfvp2 xdt5ytf xl56j7k x1n2onr6 xh8yej3"
                                                                                                                              role="button"
                                                                                                                              tabindex="0"
                                                                                                                            >
                                                                                                                              <div
                                                                                                                                role="none"
                                                                                                                                class="x1n2onr6 x1ja2u2z x78zum5 x2lah0s xl56j7k x6s0dn4 xozqiw3 x1q0g3np xi112ho x17zwfj4 x585lrc x1403ito x972fbf xcfux6l x1qhh985 xm0m39n x9f619 xn6708d x1ye3gou x1qhmfi1 x1r1pt67"
                                                                                                                              >
                                                                                                                                <div class="x6s0dn4 x78zum5 xl56j7k x1608yet xljgi0e x1e0frkt">
                                                                                                                                  <div
                                                                                                                                    role="none"
                                                                                                                                    class="x9f619 x1n2onr6 x1ja2u2z x193iq5w xeuugli x6s0dn4 x78zum5 x2lah0s x1fbi1t2 xl8fo4v"
                                                                                                                                  >
                                                                                                                                    <span
                                                                                                                                      class="x193iq5w xeuugli x13faqbe x1vvkbs x1xmvt09 x1lliihq x1s928wv xhkezso x1gmr53x x1cpjm7i x1fgarty x1943h6x xudqn12 x3x7a5m x6prxxf xvq8zen x1s688f x1dem4cn"
                                                                                                                                      dir="auto"
                                                                                                                                    >
                                                                                                                                      <span class="x1lliihq x6ikm8r x10wlt62 x1n2onr6 xlyipyv xuxw1ft">
                                                                                                                                        Learn
                                                                                                                                        more
                                                                                                                                      </span>
                                                                                                                                    </span>
                                                                                                                                  </div>
                                                                                                                                </div>
                                                                                                                                <div
                                                                                                                                  class="x1ey2m1c xds687c x17qophe xg01cxk x47corl x10l6tqk x13vifvy x1ebt8du x19991ni x1dhq9h x1o1ewxj x3x9cwd x1e5q0jg x13rtm0m"
                                                                                                                                  role="none"
                                                                                                                                  data-visualcompletion="ignore"
                                                                                                                                ></div>
                                                                                                                              </div>
                                                                                                                            </div>
                                                                                                                          </div>
                                                                                                                        </div>
                                                                                                                      </div>
                                                                                                                      <div class="x10l6tqk xso031l x1q0q8m5 x1mpk314 x1m258z3 x1vjfegm xds687c x1ey2m1c"></div>
                                                                                                                    </div>
                                                                                                                  </div>
                                                                                                                  <div></div>
                                                                                                                  <div class="x1anpbxc _3qn7 _61-0 _2fyh _3qnf">
                                                                                                                    <div
                                                                                                                      class="_6g3g xdzyupr x1nn3v0j x1iji9kk x10b6aqq x1sln4lm style-ECoiK"
                                                                                                                      id="style-ECoiK"
                                                                                                                    >
                                                                                                                      <div class="_3qn7 _61-0 _2fyi _3qnf">
                                                                                                                        <div class="_3qn7 _61-0 _2fyi _3qnf">
                                                                                                                          <div
                                                                                                                            class="_6g3g x150jy0e style-9JCGX"
                                                                                                                            id="style-9JCGX"
                                                                                                                          >
                                                                                                                            <span class="_9zc _9--">
                                                                                                                              <i class="_3j7m _2p78 _9--"></i>
                                                                                                                            </span>
                                                                                                                          </div>
                                                                                                                        </div>
                                                                                                                        <div
                                                                                                                          class="_6g3g x1h0ha7o x1mpkggp xeuugli x11hbpws style-l1dIX"
                                                                                                                          id="style-l1dIX"
                                                                                                                        >
                                                                                                                          <div class="x8t9es0 x1fvot60 xo1l8bm xxio538 x1heor9g xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj xeuugli">
                                                                                                                            1
                                                                                                                          </div>
                                                                                                                        </div>
                                                                                                                        <div
                                                                                                                          class="_6g3g x11hbpws x1f6kntn x14atkfc style-Ay2vR"
                                                                                                                          id="style-Ay2vR"
                                                                                                                        >
                                                                                                                          <div class="_3qn7 _61-2 _2fyi _3qnf">
                                                                                                                            <div
                                                                                                                              class="_6g3g x5ib6vp style-9nHVn"
                                                                                                                              id="style-9nHVn"
                                                                                                                            >
                                                                                                                              <span class="x8t9es0 x1fvot60 xo1l8bm xxio538 x1heor9g xq9mrsl x1h4wwuj xeuugli">
                                                                                                                                1
                                                                                                                                comment
                                                                                                                              </span>
                                                                                                                            </div>
                                                                                                                          </div>
                                                                                                                        </div>
                                                                                                                      </div>
                                                                                                                    </div>
                                                                                                                    <div class="x14nfmen xjm9jq1 x1gryazu xkrivgy xdzyupr"></div>
                                                                                                                    <div
                                                                                                                      class="_6g3g xdzyupr x1y1aw1k x1iji9kk x1120s5i x1sln4lm style-L4fP1"
                                                                                                                      id="style-L4fP1"
                                                                                                                    >
                                                                                                                      <div class="x1s688f x11hbpws _3qn7 _6twk _2fyi _3qnf">
                                                                                                                        <div
                                                                                                                          class="_6g3g style-wHc1Z"
                                                                                                                          id="style-wHc1Z"
                                                                                                                        >
                                                                                                                          <div class="_3qn7 _61-0 _2fyi _3qnf">
                                                                                                                            <div
                                                                                                                              class="_6g3g x1sxyh0 x1j85h84 xg32yw2 style-GfoXV"
                                                                                                                              id="style-GfoXV"
                                                                                                                            >
                                                                                                                              <i
                                                                                                                                alt=""
                                                                                                                                data-visualcompletion="css-img"
                                                                                                                                class="img style-RAgLK"
                                                                                                                                id="style-RAgLK"
                                                                                                                              ></i>
                                                                                                                            </div>
                                                                                                                            <div
                                                                                                                              class="_6g3g style-5mqge"
                                                                                                                              id="style-5mqge"
                                                                                                                            >
                                                                                                                              Like
                                                                                                                            </div>
                                                                                                                          </div>
                                                                                                                        </div>
                                                                                                                        <div
                                                                                                                          class="_6g3g style-8iNHo"
                                                                                                                          id="style-8iNHo"
                                                                                                                        >
                                                                                                                          <div class="_3qn7 _61-0 _2fyi _3qnf">
                                                                                                                            <div
                                                                                                                              class="_6g3g x1sxyh0 x1j85h84 xg32yw2 style-XgodE"
                                                                                                                              id="style-XgodE"
                                                                                                                            >
                                                                                                                              <i
                                                                                                                                alt=""
                                                                                                                                data-visualcompletion="css-img"
                                                                                                                                class="img style-qNV6x"
                                                                                                                                id="style-qNV6x"
                                                                                                                              ></i>
                                                                                                                            </div>
                                                                                                                            <div
                                                                                                                              class="_6g3g style-4zEI1"
                                                                                                                              id="style-4zEI1"
                                                                                                                            >
                                                                                                                              Comment
                                                                                                                            </div>
                                                                                                                          </div>
                                                                                                                        </div>
                                                                                                                        <div
                                                                                                                          class="_6g3g style-SqcKo"
                                                                                                                          id="style-SqcKo"
                                                                                                                        >
                                                                                                                          <div class="_3qn7 _61-0 _2fyi _3qnf">
                                                                                                                            <div
                                                                                                                              class="_6g3g x1sxyh0 x1j85h84 xg32yw2 style-CSgId"
                                                                                                                              id="style-CSgId"
                                                                                                                            >
                                                                                                                              <i
                                                                                                                                alt=""
                                                                                                                                data-visualcompletion="css-img"
                                                                                                                                class="img style-YGvT3"
                                                                                                                                id="style-YGvT3"
                                                                                                                              ></i>
                                                                                                                            </div>
                                                                                                                            <div
                                                                                                                              class="_6g3g style-6zzH3"
                                                                                                                              id="style-6zzH3"
                                                                                                                            >
                                                                                                                              Share
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
                                                              <div class="x1s85apg">
                                                                <div class="x1s85apg">
                                                                  <div class="x3smdqs">
                                                                    <div class="x78zum5 x2lwn1j xeuugli xh8yej3">
                                                                      <div class="x78zum5 xdt5ytf x2lwn1j xamitd3 x1iyjqo2 xeuugli">
                                                                        <div class="x78zum5 x2lwn1j xeuugli xlshs6z">
                                                                          <div class="x78zum5 x2lwn1j xeuugli xamitd3 x2lah0s x1emribx">
                                                                            <div
                                                                              class="x3nfvp2 x120ccyz x4s1yf2"
                                                                              role="presentation"
                                                                            >
                                                                              <div
                                                                                class="xtwfq29 style-hMWgZ"
                                                                                id="style-hMWgZ"
                                                                              ></div>
                                                                            </div>
                                                                          </div>
                                                                          <div class="x6ikm8r x10wlt62 xlyipyv xh8yej3">
                                                                            <div class="xmi5d70 x1fvot60 xo1l8bm xxio538 xbsr9hj xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj xeuugli">
                                                                              Instagram
                                                                              feed
                                                                            </div>
                                                                          </div>
                                                                        </div>
                                                                      </div>
                                                                      <div class="x78zum5 xdt5ytf x2lwn1j xeuugli xamitd3 x2lah0s">
                                                                        <div class="xlshs6z">
                                                                          <div
                                                                            class="x3oybdh xuxw1ft x1iknuni xw9jwym x1e2iszw xg0tal0 x1lliihq x1lcm9me x1yr5g0i xrt01vj x10y3i5r"
                                                                            role="group"
                                                                          >
                                                                            <div
                                                                              aria-busy="false"
                                                                              aria-controls="js_i7"
                                                                              class="x1i10hfl xjqpnuy xa49m3k xqeqjp1 x2hbi6w x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli x16tdsg8 xggy1nq x1ja2u2z x6s0dn4 x1ejq31n xd10rxx x1sy0etr x17r0tee x3nfvp2 xdl72j9 x1q0g3np x2lah0s x193iq5w x1n2onr6 x1hl2dhg x87ps6o xxymvpz xlh3980 xvmahel x1lku1pv x1g40iwv x1lcm9me x1yr5g0i xrt01vj x10y3i5r x1ob88yx xaatb59 x1qgsegg xo1l8bm xbsr9hj x1v911su x1y1aw1k xwib8y2 x1ye3gou xn6708d style-4KoWV"
                                                                              role="button"
                                                                              tabindex="0"
                                                                              id="style-4KoWV"
                                                                            >
                                                                              <span class="xmi5d70 x1fvot60 xxio538 x1heor9g xq9mrsl x1h4wwuj x1pd3egz xeuugli xh8yej3">
                                                                                <div class="x78zum5">
                                                                                  <div
                                                                                    class="x1qvwoe0 xjm9jq1 x1y332i5 xcwd3tp x1jyxor1 x39eecv x6ikm8r x10wlt62 x10l6tqk xuxw1ft x1i1rx1s"
                                                                                    data-sscoverage-ignore="true"
                                                                                  >
                                                                                    More
                                                                                    items
                                                                                  </div>
                                                                                  <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1hc1fzr x13dflua x6o7n8i xxziih7 x12w9bfk xl56j7k xh8yej3">
                                                                                    <div
                                                                                      class="x3nfvp2 x120ccyz x1heor9g x2lah0s x1c4vz4f"
                                                                                      role="presentation"
                                                                                    >
                                                                                      <div
                                                                                        class="xtwfq29 style-vHojw"
                                                                                        id="style-vHojw"
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
                                                                    <div class="xw7yly9">
                                                                      <div
                                                                        class="x1gzqxud x1lcm9me x1yr5g0i xrt01vj x10y3i5r xhgxa4x xy5ysw6 x1qkj6lk xn3walq xnvurfn xv1ta3e x1opv7go x1dtnpoi xibdhds xtnng9g xhvrwov x13k1m86 xwx4but x1cpjm7i xszcg87 x1hmns74 xkk1bqk x14d4353 xsxiz9q x1rmj1tg xchklzq x9f619 xc8icb0 x1n2onr6 x1pvq41x xhhp2wi x14q35kh x1wa3ocq x1n7iyjn x1s928wv x1wsn0xg x1j6awrg x162n7g1 x1m1drc7 x4eaejv xi4xitw x5yr21d xh8yej3"
                                                                        data-auto-logging-component-type="GeoCard"
                                                                      >
                                                                        <div class="x78zum5 xdt5ytf x5yr21d xedcshv x1t2pt76 xh8yej3">
                                                                          <div class="x9f619 x78zum5 x1iyjqo2 x5yr21d x2lwn1j x1n2onr6 xh8yej3">
                                                                            <div class="xw2csxc x1odjw0f xh8yej3 x18d9i69">
                                                                              <div class="xjm9jq1 xg01cxk x47corl xh8yej3 x1jyxor1"></div>
                                                                              <div class="x6s0dn4 x78zum5 xdt5ytf xl56j7k x2lwn1j xeuugli xgx9qek x1lq5wgf xgqcy7u x30kzoy x9jhf4c x6ikm8r x10wlt62 x1n2onr6 x15b6uid x3smdqs">
                                                                                <div>
                                                                                  <div>
                                                                                    <div class="_89mx">
                                                                                      <div class="_4u-c">
                                                                                        <div>
                                                                                          <div class="">
                                                                                            <div>
                                                                                              <div class="_5zg">
                                                                                                <div class="_7vpk">
                                                                                                  <div class=" _831c">
                                                                                                    <div class="_91kv">
                                                                                                      <div>
                                                                                                        <div class="">
                                                                                                          <div
                                                                                                            class="_ag3c _228q"
                                                                                                            id="f44710c82c5d7903e"
                                                                                                          >
                                                                                                            <div
                                                                                                              class="hidden_elem"
                                                                                                              id="f44710c82c5d7903e-1"
                                                                                                            ></div>
                                                                                                            <div
                                                                                                              class=""
                                                                                                              id="f44710c82c5d7903e-2"
                                                                                                              data-ad-preview="previewContainer"
                                                                                                            >
                                                                                                              <div
                                                                                                                id="ad_preview_error_box"
                                                                                                                class="_8sy- _653d"
                                                                                                                data-preview-error="true"
                                                                                                                data-error-message="Instagram actor ID is required: Select an Instagram account to display this preview."
                                                                                                                data-error-code="1699026"
                                                                                                                data-clickable="1"
                                                                                                                data-inputable="1"
                                                                                                                data-keydownable="1"
                                                                                                                data-keyupable="1"
                                                                                                                data-changeable="1"
                                                                                                              >
                                                                                                                <div class="_1oi3">
                                                                                                                  Instagram
                                                                                                                  actor
                                                                                                                  ID
                                                                                                                  is
                                                                                                                  required:
                                                                                                                  Select
                                                                                                                  an
                                                                                                                  Instagram
                                                                                                                  account
                                                                                                                  to
                                                                                                                  display
                                                                                                                  this
                                                                                                                  preview.
                                                                                                                </div>
                                                                                                                <div>
                                                                                                                  <div class="x6s0dn4 x78zum5 xdt5ytf xozqiw3 x2lwn1j x1iyjqo2 xavht8x xw5ewwj x2ixbly xdj266r xkrivgy xat24cr x1gryazu">
                                                                                                                    <div class="x1gzqxud x1lq5wgf xgqcy7u x30kzoy x9jhf4c x1kmqopl x5yr21d xh8yej3">
                                                                                                                      <div class="x78zum5 xdt5ytf x5yr21d xedcshv x1t2pt76 xh8yej3">
                                                                                                                        <div class="x9f619 x78zum5 x1iyjqo2 x5yr21d x2lwn1j x1n2onr6 xh8yej3">
                                                                                                                          <div class="xw2csxc x1odjw0f xh8yej3 x18d9i69">
                                                                                                                            <div class="xjm9jq1 xg01cxk x47corl xh8yej3 x1jyxor1"></div>
                                                                                                                            <div
                                                                                                                              id="style-kWYF4"
                                                                                                                              class="style-kWYF4"
                                                                                                                            >
                                                                                                                              <div class="x9f619 x78zum5 xdt5ytf x1l7klhg x1iyjqo2 x5yr21d xyamay9 x1pi30zi x1l90r2v x1swvt13 x13faqbe">
                                                                                                                                <div class="x1cy8zhl x78zum5 xdt5ytf xozqiw3 x2lwn1j xeuugli xavht8x x1yztbdb x1iyjqo2">
                                                                                                                                  <div
                                                                                                                                    class="x3nfvp2 x120ccyz x746shc"
                                                                                                                                    role="presentation"
                                                                                                                                  >
                                                                                                                                    <div
                                                                                                                                      class="xtwfq29 style-ooMEC"
                                                                                                                                      id="style-ooMEC"
                                                                                                                                    ></div>
                                                                                                                                  </div>
                                                                                                                                  <div>
                                                                                                                                    <div class="xeuugli x12nagc">
                                                                                                                                      <div
                                                                                                                                        aria-level="3"
                                                                                                                                        class="x8t9es0 x1uxerd5 x1xlr1w8 xrohxju x4hq6eo xq9mrsl x1yc453h x1h4wwuj xeuugli"
                                                                                                                                        role="heading"
                                                                                                                                      >
                                                                                                                                        Instagram
                                                                                                                                        actor
                                                                                                                                        ID
                                                                                                                                        is
                                                                                                                                        required
                                                                                                                                      </div>
                                                                                                                                      <div class="x8t9es0 x1fvot60 xxio538 x4hq6eo xq9mrsl x1yc453h x1h4wwuj x1fcty0u xeuugli">
                                                                                                                                        {" "}
                                                                                                                                        Select
                                                                                                                                        an
                                                                                                                                        Instagram
                                                                                                                                        account
                                                                                                                                        to
                                                                                                                                        display
                                                                                                                                        this
                                                                                                                                        preview.
                                                                                                                                      </div>
                                                                                                                                    </div>
                                                                                                                                  </div>
                                                                                                                                </div>
                                                                                                                              </div>
                                                                                                                            </div>
                                                                                                                            <div class="xjm9jq1 xg01cxk x47corl xh8yej3 x1y332i5"></div>
                                                                                                                          </div>
                                                                                                                          <div class="x10wjd1d x47corl x10l6tqk x19991ni x13dflua xwji4o3 xh8yej3 x67dex8 x13vifvy x1hc1fzr"></div>
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
                                                                              <div class="xjm9jq1 xg01cxk x47corl xh8yej3 x1y332i5"></div>
                                                                            </div>
                                                                            <div class="x10wjd1d x47corl x10l6tqk x19991ni x13dflua xwji4o3 xh8yej3 x67dex8 x13vifvy x1hc1fzr"></div>
                                                                            <div class="x10wjd1d x47corl x10l6tqk x19991ni x13dflua xwji4o3 xh8yej3 x1ta9b4f x1ey2m1c x1hc1fzr"></div>
                                                                          </div>
                                                                        </div>
                                                                      </div>
                                                                    </div>
                                                                  </div>
                                                                </div>
                                                              </div>
                                                              <div class="x1s85apg">
                                                                <div class="x1s85apg">
                                                                  <div class="x3smdqs">
                                                                    <div class="x78zum5 x2lwn1j xeuugli xh8yej3">
                                                                      <div class="x78zum5 xdt5ytf x2lwn1j xamitd3 x1iyjqo2 xeuugli">
                                                                        <div class="x78zum5 x2lwn1j xeuugli xlshs6z">
                                                                          <div class="x78zum5 x2lwn1j xeuugli xamitd3 x2lah0s x1emribx">
                                                                            <div
                                                                              class="x3nfvp2 x120ccyz x4s1yf2"
                                                                              role="presentation"
                                                                            >
                                                                              <div
                                                                                class="xtwfq29 style-Kzp7c"
                                                                                id="style-Kzp7c"
                                                                              ></div>
                                                                            </div>
                                                                          </div>
                                                                          <div class="x6ikm8r x10wlt62 xlyipyv xh8yej3">
                                                                            <div class="xmi5d70 x1fvot60 xo1l8bm xxio538 xbsr9hj xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj xeuugli">
                                                                              Instagram
                                                                              Stories
                                                                            </div>
                                                                          </div>
                                                                        </div>
                                                                      </div>
                                                                      <div class="x78zum5 xdt5ytf x2lwn1j xeuugli xamitd3 x2lah0s">
                                                                        <div class="xlshs6z">
                                                                          <div
                                                                            class="x3oybdh xuxw1ft x1iknuni xw9jwym x1e2iszw xg0tal0 x1lliihq x1lcm9me x1yr5g0i xrt01vj x10y3i5r"
                                                                            role="group"
                                                                          >
                                                                            <div
                                                                              aria-busy="false"
                                                                              aria-controls="js_i9"
                                                                              class="x1i10hfl xjqpnuy xa49m3k xqeqjp1 x2hbi6w x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli x16tdsg8 xggy1nq x1ja2u2z x6s0dn4 x1ejq31n xd10rxx x1sy0etr x17r0tee x3nfvp2 xdl72j9 x1q0g3np x2lah0s x193iq5w x1n2onr6 x1hl2dhg x87ps6o xxymvpz xlh3980 xvmahel x1lku1pv x1g40iwv x1lcm9me x1yr5g0i xrt01vj x10y3i5r x1ob88yx xaatb59 x1qgsegg xo1l8bm xbsr9hj x1v911su x1y1aw1k xwib8y2 x1ye3gou xn6708d style-ioyR6"
                                                                              role="button"
                                                                              tabindex="0"
                                                                              id="style-ioyR6"
                                                                            >
                                                                              <span class="xmi5d70 x1fvot60 xxio538 x1heor9g xq9mrsl x1h4wwuj x1pd3egz xeuugli xh8yej3">
                                                                                <div class="x78zum5">
                                                                                  <div
                                                                                    class="x1qvwoe0 xjm9jq1 x1y332i5 xcwd3tp x1jyxor1 x39eecv x6ikm8r x10wlt62 x10l6tqk xuxw1ft x1i1rx1s"
                                                                                    data-sscoverage-ignore="true"
                                                                                  >
                                                                                    More
                                                                                    items
                                                                                  </div>
                                                                                  <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1hc1fzr x13dflua x6o7n8i xxziih7 x12w9bfk xl56j7k xh8yej3">
                                                                                    <div
                                                                                      class="x3nfvp2 x120ccyz x1heor9g x2lah0s x1c4vz4f"
                                                                                      role="presentation"
                                                                                    >
                                                                                      <div
                                                                                        class="xtwfq29 style-w1tMU"
                                                                                        id="style-w1tMU"
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
                                                                    <div class="xw7yly9">
                                                                      <div
                                                                        class="x1gzqxud x1lcm9me x1yr5g0i xrt01vj x10y3i5r xhgxa4x xy5ysw6 x1qkj6lk xn3walq xnvurfn xv1ta3e x1opv7go x1dtnpoi xibdhds xtnng9g xhvrwov x13k1m86 xwx4but x1cpjm7i xszcg87 x1hmns74 xkk1bqk x14d4353 xsxiz9q x1rmj1tg xchklzq x9f619 xc8icb0 x1n2onr6 x1pvq41x xhhp2wi x14q35kh x1wa3ocq x1n7iyjn x1s928wv x1wsn0xg x1j6awrg x162n7g1 x1m1drc7 x4eaejv xi4xitw x5yr21d xh8yej3"
                                                                        data-auto-logging-component-type="GeoCard"
                                                                      >
                                                                        <div class="x78zum5 xdt5ytf x5yr21d xedcshv x1t2pt76 xh8yej3">
                                                                          <div class="x9f619 x78zum5 x1iyjqo2 x5yr21d x2lwn1j x1n2onr6 xh8yej3">
                                                                            <div class="xw2csxc x1odjw0f xh8yej3 x18d9i69">
                                                                              <div class="xjm9jq1 xg01cxk x47corl xh8yej3 x1jyxor1"></div>
                                                                              <div class="x6s0dn4 x78zum5 xdt5ytf xl56j7k x2lwn1j xeuugli xgx9qek x1lq5wgf xgqcy7u x30kzoy x9jhf4c x6ikm8r x10wlt62 x1n2onr6 x15b6uid x3smdqs">
                                                                                <div>
                                                                                  <div>
                                                                                    <div class="_89mx">
                                                                                      <div class="_4u-c">
                                                                                        <div>
                                                                                          <div class="">
                                                                                            <div>
                                                                                              <div class="_5zg">
                                                                                                <div class="_7vpk">
                                                                                                  <div class=" _831c">
                                                                                                    <div class="_91kv">
                                                                                                      <div>
                                                                                                        <div class="">
                                                                                                          <div
                                                                                                            class="_ag3c _228q"
                                                                                                            id="fed561220c99032d7"
                                                                                                          >
                                                                                                            <div
                                                                                                              class="hidden_elem"
                                                                                                              id="fed561220c99032d7-1"
                                                                                                            ></div>
                                                                                                            <div
                                                                                                              class=""
                                                                                                              id="fed561220c99032d7-2"
                                                                                                              data-ad-preview="previewContainer"
                                                                                                            >
                                                                                                              <div
                                                                                                                id="ad_preview_error_box"
                                                                                                                class="_8sy- _653d"
                                                                                                                data-preview-error="true"
                                                                                                                data-error-message="Instagram actor ID is required: Select an Instagram account to display this preview."
                                                                                                                data-error-code="1699026"
                                                                                                                data-clickable="1"
                                                                                                                data-inputable="1"
                                                                                                                data-keydownable="1"
                                                                                                                data-keyupable="1"
                                                                                                                data-changeable="1"
                                                                                                              >
                                                                                                                <div class="_1oi3">
                                                                                                                  Instagram
                                                                                                                  actor
                                                                                                                  ID
                                                                                                                  is
                                                                                                                  required:
                                                                                                                  Select
                                                                                                                  an
                                                                                                                  Instagram
                                                                                                                  account
                                                                                                                  to
                                                                                                                  display
                                                                                                                  this
                                                                                                                  preview.
                                                                                                                </div>
                                                                                                                <div>
                                                                                                                  <div class="x6s0dn4 x78zum5 xdt5ytf xozqiw3 x2lwn1j x1iyjqo2 xavht8x xw5ewwj x2ixbly xdj266r xkrivgy xat24cr x1gryazu">
                                                                                                                    <div class="x1gzqxud x1lq5wgf xgqcy7u x30kzoy x9jhf4c x1kmqopl x5yr21d xh8yej3">
                                                                                                                      <div class="x78zum5 xdt5ytf x5yr21d xedcshv x1t2pt76 xh8yej3">
                                                                                                                        <div class="x9f619 x78zum5 x1iyjqo2 x5yr21d x2lwn1j x1n2onr6 xh8yej3">
                                                                                                                          <div class="xw2csxc x1odjw0f xh8yej3 x18d9i69">
                                                                                                                            <div class="xjm9jq1 xg01cxk x47corl xh8yej3 x1jyxor1"></div>
                                                                                                                            <div
                                                                                                                              id="style-q7Ag9"
                                                                                                                              class="style-q7Ag9"
                                                                                                                            >
                                                                                                                              <div class="x9f619 x78zum5 xdt5ytf x1l7klhg x1iyjqo2 x5yr21d xyamay9 x1pi30zi x1l90r2v x1swvt13 x13faqbe">
                                                                                                                                <div class="x1cy8zhl x78zum5 xdt5ytf xozqiw3 x2lwn1j xeuugli xavht8x x1yztbdb x1iyjqo2">
                                                                                                                                  <div
                                                                                                                                    class="x3nfvp2 x120ccyz x746shc"
                                                                                                                                    role="presentation"
                                                                                                                                  >
                                                                                                                                    <div
                                                                                                                                      class="xtwfq29 style-lR9qc"
                                                                                                                                      id="style-lR9qc"
                                                                                                                                    ></div>
                                                                                                                                  </div>
                                                                                                                                  <div>
                                                                                                                                    <div class="xeuugli x12nagc">
                                                                                                                                      <div
                                                                                                                                        aria-level="3"
                                                                                                                                        class="x8t9es0 x1uxerd5 x1xlr1w8 xrohxju x4hq6eo xq9mrsl x1yc453h x1h4wwuj xeuugli"
                                                                                                                                        role="heading"
                                                                                                                                      >
                                                                                                                                        Instagram
                                                                                                                                        actor
                                                                                                                                        ID
                                                                                                                                        is
                                                                                                                                        required
                                                                                                                                      </div>
                                                                                                                                      <div class="x8t9es0 x1fvot60 xxio538 x4hq6eo xq9mrsl x1yc453h x1h4wwuj x1fcty0u xeuugli">
                                                                                                                                        {" "}
                                                                                                                                        Select
                                                                                                                                        an
                                                                                                                                        Instagram
                                                                                                                                        account
                                                                                                                                        to
                                                                                                                                        display
                                                                                                                                        this
                                                                                                                                        preview.
                                                                                                                                      </div>
                                                                                                                                    </div>
                                                                                                                                  </div>
                                                                                                                                </div>
                                                                                                                              </div>
                                                                                                                            </div>
                                                                                                                            <div class="xjm9jq1 xg01cxk x47corl xh8yej3 x1y332i5"></div>
                                                                                                                          </div>
                                                                                                                          <div class="x10wjd1d x47corl x10l6tqk x19991ni x13dflua xwji4o3 xh8yej3 x67dex8 x13vifvy x1hc1fzr"></div>
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
                                                                              <div class="xjm9jq1 xg01cxk x47corl xh8yej3 x1y332i5"></div>
                                                                            </div>
                                                                            <div class="x10wjd1d x47corl x10l6tqk x19991ni x13dflua xwji4o3 xh8yej3 x67dex8 x13vifvy x1hc1fzr"></div>
                                                                            <div class="x10wjd1d x47corl x10l6tqk x19991ni x13dflua xwji4o3 xh8yej3 x1ta9b4f x1ey2m1c x1hc1fzr"></div>
                                                                          </div>
                                                                        </div>
                                                                      </div>
                                                                    </div>
                                                                  </div>
                                                                </div>
                                                              </div>
                                                              <div class="">
                                                                <div class="">
                                                                  <div class="x3smdqs">
                                                                    <div class="x78zum5 x2lwn1j xeuugli xh8yej3">
                                                                      <div class="x78zum5 xdt5ytf x2lwn1j xamitd3 x1iyjqo2 xeuugli">
                                                                        <div class="x78zum5 x2lwn1j xeuugli xlshs6z">
                                                                          <div class="x78zum5 x2lwn1j xeuugli xamitd3 x2lah0s x1emribx">
                                                                            <div
                                                                              class="x3nfvp2 x120ccyz x4s1yf2"
                                                                              role="presentation"
                                                                            >
                                                                              <div
                                                                                class="xtwfq29 style-WWUtf"
                                                                                id="style-WWUtf"
                                                                              ></div>
                                                                            </div>
                                                                          </div>
                                                                          <div class="x6ikm8r x10wlt62 xlyipyv xh8yej3">
                                                                            <div class="xmi5d70 x1fvot60 xo1l8bm xxio538 xbsr9hj xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj xeuugli">
                                                                              Facebook
                                                                              Stories
                                                                            </div>
                                                                          </div>
                                                                        </div>
                                                                      </div>
                                                                      <div class="x78zum5 xdt5ytf x2lwn1j xeuugli xamitd3 x2lah0s">
                                                                        <div class="xlshs6z">
                                                                          <div
                                                                            class="x3oybdh xuxw1ft x1iknuni xw9jwym x1e2iszw xg0tal0 x1lliihq x1lcm9me x1yr5g0i xrt01vj x10y3i5r"
                                                                            role="group"
                                                                          >
                                                                            <div
                                                                              aria-busy="false"
                                                                              aria-controls="js_ib"
                                                                              class="x1i10hfl xjqpnuy xa49m3k xqeqjp1 x2hbi6w x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli x16tdsg8 xggy1nq x1ja2u2z x6s0dn4 x1ejq31n xd10rxx x1sy0etr x17r0tee x3nfvp2 xdl72j9 x1q0g3np x2lah0s x193iq5w x1n2onr6 x1hl2dhg x87ps6o xxymvpz xlh3980 xvmahel x1lku1pv x1g40iwv x1lcm9me x1yr5g0i xrt01vj x10y3i5r x1ob88yx xaatb59 x1qgsegg xo1l8bm xbsr9hj x1v911su x1y1aw1k xwib8y2 x1ye3gou xn6708d style-j9a9V"
                                                                              role="button"
                                                                              tabindex="0"
                                                                              id="style-j9a9V"
                                                                            >
                                                                              <span class="xmi5d70 x1fvot60 xxio538 x1heor9g xq9mrsl x1h4wwuj x1pd3egz xeuugli xh8yej3">
                                                                                <div class="x78zum5">
                                                                                  <div
                                                                                    class="x1qvwoe0 xjm9jq1 x1y332i5 xcwd3tp x1jyxor1 x39eecv x6ikm8r x10wlt62 x10l6tqk xuxw1ft x1i1rx1s"
                                                                                    data-sscoverage-ignore="true"
                                                                                  >
                                                                                    More
                                                                                    items
                                                                                  </div>
                                                                                  <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1hc1fzr x13dflua x6o7n8i xxziih7 x12w9bfk xl56j7k xh8yej3">
                                                                                    <div
                                                                                      class="x3nfvp2 x120ccyz x1heor9g x2lah0s x1c4vz4f"
                                                                                      role="presentation"
                                                                                    >
                                                                                      <div
                                                                                        class="xtwfq29 style-QizxX"
                                                                                        id="style-QizxX"
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
                                                                    <div class="xw7yly9">
                                                                      <div
                                                                        class="x1gzqxud x1lcm9me x1yr5g0i xrt01vj x10y3i5r xhgxa4x xy5ysw6 x1qkj6lk xn3walq xnvurfn xv1ta3e x1opv7go x1dtnpoi xibdhds xtnng9g xhvrwov x13k1m86 xwx4but x1cpjm7i xszcg87 x1hmns74 xkk1bqk x14d4353 xsxiz9q x1rmj1tg xchklzq x9f619 xc8icb0 x1n2onr6 x1pvq41x xhhp2wi x14q35kh x1wa3ocq x1n7iyjn x1s928wv x1wsn0xg x1j6awrg x162n7g1 x1m1drc7 x4eaejv xi4xitw x5yr21d xh8yej3"
                                                                        data-auto-logging-component-type="GeoCard"
                                                                      >
                                                                        <div class="x78zum5 xdt5ytf x5yr21d xedcshv x1t2pt76 xh8yej3">
                                                                          <div class="x9f619 x78zum5 x1iyjqo2 x5yr21d x2lwn1j x1n2onr6 xh8yej3">
                                                                            <div class="xw2csxc x1odjw0f xh8yej3 x18d9i69">
                                                                              <div class="xjm9jq1 xg01cxk x47corl xh8yej3 x1jyxor1"></div>
                                                                              <div class="x6s0dn4 x78zum5 xdt5ytf xl56j7k x2lwn1j xeuugli xgx9qek x1lq5wgf xgqcy7u x30kzoy x9jhf4c x6ikm8r x10wlt62 x1n2onr6 x15b6uid x3smdqs">
                                                                                <div>
                                                                                  <div>
                                                                                    <div class="_89mx">
                                                                                      <div class="_4u-c">
                                                                                        <div
                                                                                          id="style-BEY98"
                                                                                          class="style-BEY98"
                                                                                        >
                                                                                          <div class="">
                                                                                            <div>
                                                                                              <div class="_5zg">
                                                                                                <div class="_7vpk">
                                                                                                  <div class=" _831c">
                                                                                                    <div class="_91kv">
                                                                                                      <div>
                                                                                                        <div class="">
                                                                                                          <div
                                                                                                            class="_ag3c _228q"
                                                                                                            id="f3398835c6028ac8f"
                                                                                                          >
                                                                                                            <div
                                                                                                              class="hidden_elem"
                                                                                                              id="f3398835c6028ac8f-1"
                                                                                                            ></div>
                                                                                                            <div
                                                                                                              class=""
                                                                                                              id="f3398835c6028ac8f-2"
                                                                                                              data-ad-preview="previewContainer"
                                                                                                            >
                                                                                                              <div
                                                                                                                class="_67wx style-O3iJD"
                                                                                                                id="style-O3iJD"
                                                                                                              >
                                                                                                                <div
                                                                                                                  class="_32yk style-Y271m"
                                                                                                                  id="u_27_0_bR"
                                                                                                                ></div>
                                                                                                                <img
                                                                                                                  class="_67wy img style-D4Tha"
                                                                                                                  src={
                                                                                                                    campaign?.campaingImage
                                                                                                                  }
                                                                                                                  alt=""
                                                                                                                  id="u_27_1_Oh"
                                                                                                                />
                                                                                                                <div
                                                                                                                  class="_12ba style-HerDA"
                                                                                                                  id="u_27_2_oU"
                                                                                                                >
                                                                                                                  <span
                                                                                                                    class="_4fu1 style-tRWC8"
                                                                                                                    id="u_27_3_Xw"
                                                                                                                  >
                                                                                                                    <span class="">
                                                                                                                      W
                                                                                                                    </span>
                                                                                                                    <span class="">
                                                                                                                      e
                                                                                                                    </span>
                                                                                                                    <span class="">
                                                                                                                      {" "}
                                                                                                                    </span>
                                                                                                                    <span class="">
                                                                                                                      h
                                                                                                                    </span>
                                                                                                                    <span class="">
                                                                                                                      e
                                                                                                                    </span>
                                                                                                                    <span class="">
                                                                                                                      l
                                                                                                                    </span>
                                                                                                                    <span class="">
                                                                                                                      p
                                                                                                                    </span>
                                                                                                                    <span class="">
                                                                                                                      {" "}
                                                                                                                    </span>
                                                                                                                    <span class="">
                                                                                                                      p
                                                                                                                    </span>
                                                                                                                    <span class="">
                                                                                                                      e
                                                                                                                    </span>
                                                                                                                    <span class="">
                                                                                                                      o
                                                                                                                    </span>
                                                                                                                    <span class="">
                                                                                                                      p
                                                                                                                    </span>
                                                                                                                    <span class="">
                                                                                                                      l
                                                                                                                    </span>
                                                                                                                    <span class="">
                                                                                                                      e
                                                                                                                    </span>
                                                                                                                    <span class="">
                                                                                                                      {" "}
                                                                                                                    </span>
                                                                                                                    <span class="">
                                                                                                                      t
                                                                                                                    </span>
                                                                                                                    <span class="">
                                                                                                                      o
                                                                                                                    </span>
                                                                                                                    <span class="">
                                                                                                                      {" "}
                                                                                                                    </span>
                                                                                                                    <span class="">
                                                                                                                      l
                                                                                                                    </span>
                                                                                                                    <span class="">
                                                                                                                      i
                                                                                                                    </span>
                                                                                                                    <span class="">
                                                                                                                      v
                                                                                                                    </span>
                                                                                                                    <span class="">
                                                                                                                      e
                                                                                                                    </span>
                                                                                                                    <span class="">
                                                                                                                      {" "}
                                                                                                                    </span>
                                                                                                                    <span class="">
                                                                                                                      a
                                                                                                                    </span>
                                                                                                                    <span class="">
                                                                                                                      {" "}
                                                                                                                    </span>
                                                                                                                    <span class="">
                                                                                                                      b
                                                                                                                    </span>
                                                                                                                    <span class="">
                                                                                                                      e
                                                                                                                    </span>
                                                                                                                    <span class="">
                                                                                                                      t
                                                                                                                    </span>
                                                                                                                    <span class="">
                                                                                                                      t
                                                                                                                    </span>
                                                                                                                    <span class="">
                                                                                                                      e
                                                                                                                    </span>
                                                                                                                    <span class="">
                                                                                                                      r
                                                                                                                    </span>
                                                                                                                    <span class="">
                                                                                                                      {" "}
                                                                                                                    </span>
                                                                                                                    <span class="">
                                                                                                                      l
                                                                                                                    </span>
                                                                                                                    <span class="">
                                                                                                                      i
                                                                                                                    </span>
                                                                                                                    <span class="">
                                                                                                                      f
                                                                                                                    </span>
                                                                                                                    <span class="">
                                                                                                                      e
                                                                                                                    </span>
                                                                                                                    <span class="">
                                                                                                                      {" "}
                                                                                                                    </span>
                                                                                                                    <span class="">
                                                                                                                      t
                                                                                                                    </span>
                                                                                                                    <span class="">
                                                                                                                      h
                                                                                                                    </span>
                                                                                                                    <span class="">
                                                                                                                      r
                                                                                                                    </span>
                                                                                                                    <span class="">
                                                                                                                      o
                                                                                                                    </span>
                                                                                                                    <span class="">
                                                                                                                      u
                                                                                                                    </span>
                                                                                                                    <span class="">
                                                                                                                      g
                                                                                                                    </span>
                                                                                                                    <span class="">
                                                                                                                      h
                                                                                                                    </span>
                                                                                                                    <span class="">
                                                                                                                      {" "}
                                                                                                                    </span>
                                                                                                                    <span class="">
                                                                                                                      t
                                                                                                                    </span>
                                                                                                                    <span class="">
                                                                                                                      e
                                                                                                                    </span>
                                                                                                                    <span class="">
                                                                                                                      c
                                                                                                                    </span>
                                                                                                                    <span class="">
                                                                                                                      h
                                                                                                                    </span>
                                                                                                                    <span class="">
                                                                                                                      n
                                                                                                                    </span>
                                                                                                                    <span class="">
                                                                                                                      o
                                                                                                                    </span>
                                                                                                                    <span class="">
                                                                                                                      l
                                                                                                                    </span>
                                                                                                                    <span class="">
                                                                                                                      o
                                                                                                                    </span>
                                                                                                                    <span class="">
                                                                                                                      g
                                                                                                                    </span>
                                                                                                                    <span class="">
                                                                                                                      i
                                                                                                                    </span>
                                                                                                                    <span class="">
                                                                                                                      c
                                                                                                                    </span>
                                                                                                                    <span class="">
                                                                                                                      a
                                                                                                                    </span>
                                                                                                                    <span class="">
                                                                                                                      l
                                                                                                                    </span>
                                                                                                                    <span class="">
                                                                                                                      {" "}
                                                                                                                    </span>
                                                                                                                    <span class="">
                                                                                                                      h
                                                                                                                    </span>
                                                                                                                    <span class="">
                                                                                                                      o
                                                                                                                    </span>
                                                                                                                    <span class="">
                                                                                                                      m
                                                                                                                    </span>
                                                                                                                    <span class="">
                                                                                                                      e
                                                                                                                    </span>
                                                                                                                    <span class="">
                                                                                                                      {" "}
                                                                                                                    </span>
                                                                                                                    <span class="">
                                                                                                                      s
                                                                                                                    </span>
                                                                                                                    <span class="">
                                                                                                                      e
                                                                                                                    </span>
                                                                                                                    <span class="">
                                                                                                                      r
                                                                                                                    </span>
                                                                                                                    <span class="">
                                                                                                                      v
                                                                                                                    </span>
                                                                                                                    <span class="">
                                                                                                                      i
                                                                                                                    </span>
                                                                                                                    <span class="">
                                                                                                                      c
                                                                                                                    </span>
                                                                                                                    <span class="">
                                                                                                                      e
                                                                                                                    </span>
                                                                                                                    <span class="">
                                                                                                                      s
                                                                                                                    </span>
                                                                                                                    <span class="">
                                                                                                                      .
                                                                                                                    </span>
                                                                                                                    <span class="_3mga">
                                                                                                                      <span>
                                                                                                                        ...
                                                                                                                      </span>{" "}
                                                                                                                      <span class="_12b9">
                                                                                                                        More
                                                                                                                      </span>
                                                                                                                    </span>
                                                                                                                    <span class="_3mga">
                                                                                                                      <span class="_2x87">
                                                                                                                        See
                                                                                                                        caption
                                                                                                                      </span>
                                                                                                                    </span>
                                                                                                                  </span>
                                                                                                                </div>
                                                                                                                <div class="_aqd-">
                                                                                                                  <div class="_8rf1 _6_si"></div>
                                                                                                                  <div class="_aqfv"></div>
                                                                                                                  <div class="_aqe1">
                                                                                                                    <p>
                                                                                                                      Learn
                                                                                                                      more
                                                                                                                    </p>
                                                                                                                  </div>
                                                                                                                </div>
                                                                                                                <div class="_67w-">
                                                                                                                  <div
                                                                                                                    class="_2khr style-7aQYx"
                                                                                                                    id="style-7aQYx"
                                                                                                                  ></div>
                                                                                                                  <div class="_67wz">
                                                                                                                    <div
                                                                                                                      class="_67x0 style-KpzZY"
                                                                                                                      id="u_27_4_yW"
                                                                                                                    ></div>
                                                                                                                  </div>
                                                                                                                  <div>
                                                                                                                    <img
                                                                                                                      class="_67w_ img"
                                                                                                                      src="https://i.postimg.cc/jqBmLCXY/VC.jpg"
                                                                                                                      alt=""
                                                                                                                    />
                                                                                                                    <div class="_67x2">
                                                                                                                      Valentino
                                                                                                                      Technologies
                                                                                                                      &nbsp;{" "}
                                                                                                                      <div></div>
                                                                                                                    </div>
                                                                                                                    <div class="_67x3">
                                                                                                                      Sponsored
                                                                                                                    </div>
                                                                                                                    <i
                                                                                                                      class="_67x4 img style-z9VYp"
                                                                                                                      id="style-z9VYp"
                                                                                                                    ></i>
                                                                                                                    <i
                                                                                                                      class="_67x5 img style-82aic"
                                                                                                                      id="style-82aic"
                                                                                                                    ></i>
                                                                                                                  </div>
                                                                                                                  <div></div>
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
                                                              </div>
                                                              <div class="">
                                                                <div class="">
                                                                  <div class="x3smdqs">
                                                                    <div class="x78zum5 x2lwn1j xeuugli xh8yej3">
                                                                      <div class="x78zum5 xdt5ytf x2lwn1j xamitd3 x1iyjqo2 xeuugli">
                                                                        <div class="x78zum5 x2lwn1j xeuugli xlshs6z">
                                                                          <div class="x78zum5 x2lwn1j xeuugli xamitd3 x2lah0s x1emribx">
                                                                            <div
                                                                              class="x3nfvp2 x120ccyz x4s1yf2"
                                                                              role="presentation"
                                                                            >
                                                                              <div
                                                                                class="xtwfq29 style-Xkb52"
                                                                                id="style-Xkb52"
                                                                              ></div>
                                                                            </div>
                                                                          </div>
                                                                          <div class="x6ikm8r x10wlt62 xlyipyv xh8yej3">
                                                                            <div class="xmi5d70 x1fvot60 xo1l8bm xxio538 xbsr9hj xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj xeuugli">
                                                                              Facebook
                                                                              video
                                                                              feeds
                                                                            </div>
                                                                          </div>
                                                                        </div>
                                                                      </div>
                                                                      <div class="x78zum5 xdt5ytf x2lwn1j xeuugli xamitd3 x2lah0s">
                                                                        <div class="xlshs6z">
                                                                          <div
                                                                            class="x3oybdh xuxw1ft x1iknuni xw9jwym x1e2iszw xg0tal0 x1lliihq x1lcm9me x1yr5g0i xrt01vj x10y3i5r"
                                                                            role="group"
                                                                          >
                                                                            <div
                                                                              aria-busy="false"
                                                                              aria-controls="js_id"
                                                                              class="x1i10hfl xjqpnuy xa49m3k xqeqjp1 x2hbi6w x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli x16tdsg8 xggy1nq x1ja2u2z x6s0dn4 x1ejq31n xd10rxx x1sy0etr x17r0tee x3nfvp2 xdl72j9 x1q0g3np x2lah0s x193iq5w x1n2onr6 x1hl2dhg x87ps6o xxymvpz xlh3980 xvmahel x1lku1pv x1g40iwv x1lcm9me x1yr5g0i xrt01vj x10y3i5r x1ob88yx xaatb59 x1qgsegg xo1l8bm xbsr9hj x1v911su x1y1aw1k xwib8y2 x1ye3gou xn6708d style-UKjNr"
                                                                              role="button"
                                                                              tabindex="0"
                                                                              id="style-UKjNr"
                                                                            >
                                                                              <span class="xmi5d70 x1fvot60 xxio538 x1heor9g xq9mrsl x1h4wwuj x1pd3egz xeuugli xh8yej3">
                                                                                <div class="x78zum5">
                                                                                  <div
                                                                                    class="x1qvwoe0 xjm9jq1 x1y332i5 xcwd3tp x1jyxor1 x39eecv x6ikm8r x10wlt62 x10l6tqk xuxw1ft x1i1rx1s"
                                                                                    data-sscoverage-ignore="true"
                                                                                  >
                                                                                    More
                                                                                    items
                                                                                  </div>
                                                                                  <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1hc1fzr x13dflua x6o7n8i xxziih7 x12w9bfk xl56j7k xh8yej3">
                                                                                    <div
                                                                                      class="x3nfvp2 x120ccyz x1heor9g x2lah0s x1c4vz4f"
                                                                                      role="presentation"
                                                                                    >
                                                                                      <div
                                                                                        class="xtwfq29 style-7oN4U"
                                                                                        id="style-7oN4U"
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
                                                                    <div class="xw7yly9">
                                                                      <div
                                                                        class="x1gzqxud x1lcm9me x1yr5g0i xrt01vj x10y3i5r xhgxa4x xy5ysw6 x1qkj6lk xn3walq xnvurfn xv1ta3e x1opv7go x1dtnpoi xibdhds xtnng9g xhvrwov x13k1m86 xwx4but x1cpjm7i xszcg87 x1hmns74 xkk1bqk x14d4353 xsxiz9q x1rmj1tg xchklzq x9f619 xc8icb0 x1n2onr6 x1pvq41x xhhp2wi x14q35kh x1wa3ocq x1n7iyjn x1s928wv x1wsn0xg x1j6awrg x162n7g1 x1m1drc7 x4eaejv xi4xitw x5yr21d xh8yej3"
                                                                        data-auto-logging-component-type="GeoCard"
                                                                      >
                                                                        <div class="x78zum5 xdt5ytf x5yr21d xedcshv x1t2pt76 xh8yej3">
                                                                          <div class="x9f619 x78zum5 x1iyjqo2 x5yr21d x2lwn1j x1n2onr6 xh8yej3">
                                                                            <div class="xw2csxc x1odjw0f xh8yej3 x18d9i69">
                                                                              <div class="xjm9jq1 xg01cxk x47corl xh8yej3 x1jyxor1"></div>
                                                                              <div class="x6s0dn4 x78zum5 xdt5ytf xl56j7k x2lwn1j xeuugli xgx9qek x1lq5wgf xgqcy7u x30kzoy x9jhf4c x6ikm8r x10wlt62 x1n2onr6 x15b6uid x3smdqs">
                                                                                <div>
                                                                                  <div>
                                                                                    <div class="_89mx">
                                                                                      <div class="_4u-c">
                                                                                        <div
                                                                                          id="style-USLIK"
                                                                                          class="style-USLIK"
                                                                                        >
                                                                                          <div class="">
                                                                                            <div>
                                                                                              <div class="_5zg">
                                                                                                <div class="_7vpk">
                                                                                                  <div class=" _831c">
                                                                                                    <div class="_91kv">
                                                                                                      <div>
                                                                                                        <div class="">
                                                                                                          <div
                                                                                                            class="_ag3c _228q"
                                                                                                            id="ff483a49916e57607"
                                                                                                          >
                                                                                                            <div
                                                                                                              class="hidden_elem"
                                                                                                              id="ff483a49916e57607-1"
                                                                                                            ></div>
                                                                                                            <div
                                                                                                              class=""
                                                                                                              id="ff483a49916e57607-2"
                                                                                                              data-ad-preview="previewContainer"
                                                                                                            >
                                                                                                              <div
                                                                                                                data-clickable="1"
                                                                                                                data-inputable="1"
                                                                                                                data-keydownable="1"
                                                                                                                data-keyupable="1"
                                                                                                                data-changeable="1"
                                                                                                              >
                                                                                                                <div class="x2izyaf x1m258z3 x1yc453h xdj266r xkrivgy xat24cr x1gryazu xw2csxc x1odjw0f x47corl x87ps6o">
                                                                                                                  <div class="x1cy8zhl x78zum5 x1xmf6yo x1e56ztr x17adc0v xexx8yu x4uap5 x18d9i69 xkhd6sd">
                                                                                                                    <div class="x78zum5 xc9qbxq x16dsc37 x1td3qas">
                                                                                                                      <img
                                                                                                                        class="x14yjl9h xudhj91 x18nykt9 xww2gxu x1td3qas x10w6t97 x3ajldb img"
                                                                                                                        src="https://i.postimg.cc/jqBmLCXY/VC.jpg"
                                                                                                                        alt=""
                                                                                                                      />
                                                                                                                    </div>
                                                                                                                    <div class="x78zum5">
                                                                                                                      <div class="xamitd3 x78zum5 x1i64zmx x12rczxh xdt5ytf xh8yej3">
                                                                                                                        <div>
                                                                                                                          <div
                                                                                                                            class="xogfrqt x1pg5gke x17fgdl5 x18wx58x x6ikm8r x10wlt62 x1ap2d02 _4ik4 _4ik5 style-yHOLE"
                                                                                                                            id="style-yHOLE"
                                                                                                                          >
                                                                                                                            <span>
                                                                                                                              Valentino
                                                                                                                              Technologies
                                                                                                                            </span>
                                                                                                                          </div>
                                                                                                                        </div>
                                                                                                                        <div class="x1hjcb3a xt0psk2 x1pg5gke x9438zm x1n2onr6 x17ocude">
                                                                                                                          <div class="xt0psk2">
                                                                                                                            Sponsored
                                                                                                                          </div>{" "}
                                                                                                                          ·{" "}
                                                                                                                          <img
                                                                                                                            src="https://adsmanager.facebook.com/images/mobile/privacy/wordmark/everyone.png"
                                                                                                                            alt=""
                                                                                                                            class="img"
                                                                                                                          />
                                                                                                                        </div>
                                                                                                                      </div>
                                                                                                                      <i
                                                                                                                        class="x1xmf6yo img style-pyZgq"
                                                                                                                        alt=""
                                                                                                                        data-visualcompletion="css-img"
                                                                                                                        id="style-pyZgq"
                                                                                                                      ></i>
                                                                                                                    </div>
                                                                                                                  </div>
                                                                                                                  <div class="x1n2onr6 x1ja2u2z x1m258z3 x1e56ztr">
                                                                                                                    <div class="x1n2onr6">
                                                                                                                      <div class="x10l6tqk x178xt8z x13fuv20 xqvba61 x1m258z3 x1vjfegm x17qophe x13vifvy"></div>
                                                                                                                      <div
                                                                                                                        id="style-oFknM"
                                                                                                                        class="style-oFknM"
                                                                                                                      >
                                                                                                                        <div
                                                                                                                          class="wbloks_70 wbloks_71 wbloks_64 style-FmBAe"
                                                                                                                          id="style-FmBAe"
                                                                                                                        >
                                                                                                                          <div class="wbloks_1 wbloks_73">
                                                                                                                            <div
                                                                                                                              class="wbloks_1 style-idPK8"
                                                                                                                              id="style-idPK8"
                                                                                                                            >
                                                                                                                              <div
                                                                                                                                data-bloks-name="bk.components.Flexbox"
                                                                                                                                class="wbloks_1 style-Acyqp"
                                                                                                                                id="style-Acyqp"
                                                                                                                              >
                                                                                                                                <div
                                                                                                                                  class="wbloks_1 style-jIoU8"
                                                                                                                                  id="style-jIoU8"
                                                                                                                                >
                                                                                                                                  <div
                                                                                                                                    data-bloks-name="bk.components.AspectRatio"
                                                                                                                                    class="wbloks_82 style-wKdBt"
                                                                                                                                    id="style-wKdBt"
                                                                                                                                  >
                                                                                                                                    <svg
                                                                                                                                      aria-hidden="true"
                                                                                                                                      xmlns="http://www.w3.org/2000/svg"
                                                                                                                                      height="1"
                                                                                                                                      width="1.0015649452269"
                                                                                                                                      class="wbloks_84"
                                                                                                                                    ></svg>
                                                                                                                                  </div>
                                                                                                                                  <div
                                                                                                                                    data-bloks-name="bk.components.AspectRatio"
                                                                                                                                    class="wbloks_83"
                                                                                                                                  >
                                                                                                                                    <img
                                                                                                                                      data-bloks-name="bk.components.Image"
                                                                                                                                      alt=""
                                                                                                                                      src={
                                                                                                                                        campaign?.campaingImage
                                                                                                                                      }
                                                                                                                                      class="wbloks_1 style-9f5Jn"
                                                                                                                                      id="style-9f5Jn"
                                                                                                                                    />
                                                                                                                                  </div>
                                                                                                                                </div>
                                                                                                                              </div>
                                                                                                                            </div>
                                                                                                                          </div>
                                                                                                                          <div
                                                                                                                            name="WebBloksToastPresenter"
                                                                                                                            class="wbloks_75"
                                                                                                                          >
                                                                                                                            <div class="wbloks_76">
                                                                                                                              <div
                                                                                                                                class="wbloks_77 wbloks_78 style-iVbVD"
                                                                                                                                id="style-iVbVD"
                                                                                                                              ></div>
                                                                                                                            </div>
                                                                                                                            <div class="wbloks_79">
                                                                                                                              <div
                                                                                                                                class="wbloks_80 wbloks_81 style-ry1ml"
                                                                                                                                id="style-ry1ml"
                                                                                                                              ></div>
                                                                                                                            </div>
                                                                                                                          </div>
                                                                                                                        </div>
                                                                                                                      </div>
                                                                                                                      <div
                                                                                                                        id="style-flvth"
                                                                                                                        class="style-flvth"
                                                                                                                      >
                                                                                                                        <div
                                                                                                                          class="wbloks_70 wbloks_71 wbloks_64 style-Qe58A"
                                                                                                                          id="style-Qe58A"
                                                                                                                        >
                                                                                                                          <div class="wbloks_1 wbloks_73">
                                                                                                                            <div
                                                                                                                              class="wbloks_1 style-U7B1n"
                                                                                                                              id="style-U7B1n"
                                                                                                                            >
                                                                                                                              <div
                                                                                                                                data-bloks-name="bk.components.Flexbox"
                                                                                                                                class="wbloks_1 style-kEPQj"
                                                                                                                                id="style-kEPQj"
                                                                                                                              >
                                                                                                                                <div
                                                                                                                                  data-bloks-name="bk.components.Flexbox"
                                                                                                                                  class="wbloks_1 style-W3CHc"
                                                                                                                                  id="style-W3CHc"
                                                                                                                                >
                                                                                                                                  <div
                                                                                                                                    data-bloks-name="bk.components.Flexbox"
                                                                                                                                    class="wbloks_1 style-gzwCz"
                                                                                                                                    id="style-gzwCz"
                                                                                                                                  >
                                                                                                                                    <div
                                                                                                                                      data-bloks-name="bk.components.RichText"
                                                                                                                                      dir="auto"
                                                                                                                                      class="wbloks_1 style-l4RPg"
                                                                                                                                      id="style-l4RPg"
                                                                                                                                    >
                                                                                                                                      <div
                                                                                                                                        class="wbloks_86 style-i5Nd3"
                                                                                                                                        id="style-i5Nd3"
                                                                                                                                      >
                                                                                                                                        <div
                                                                                                                                          class="wbloks_87"
                                                                                                                                          dir="auto"
                                                                                                                                        >
                                                                                                                                          <span
                                                                                                                                            data-bloks-name="bk.components.TextSpan"
                                                                                                                                            id="style-Nxvc1"
                                                                                                                                            class="style-Nxvc1"
                                                                                                                                          >
                                                                                                                                            Valentino
                                                                                                                                            Technologies
                                                                                                                                          </span>
                                                                                                                                        </div>
                                                                                                                                      </div>
                                                                                                                                    </div>
                                                                                                                                    <div
                                                                                                                                      data-bloks-name="bk.components.Flexbox"
                                                                                                                                      class="wbloks_1 style-2zjQN"
                                                                                                                                      id="style-2zjQN"
                                                                                                                                    ></div>
                                                                                                                                    <div
                                                                                                                                      data-bloks-name="bk.components.Flexbox"
                                                                                                                                      class="wbloks_1 style-NjcsF"
                                                                                                                                      id="style-NjcsF"
                                                                                                                                    >
                                                                                                                                      <div
                                                                                                                                        data-bloks-name="bk.components.RichText"
                                                                                                                                        dir="auto"
                                                                                                                                        class="wbloks_1 style-aK2iY"
                                                                                                                                        id="style-aK2iY"
                                                                                                                                      >
                                                                                                                                        <div
                                                                                                                                          class="wbloks_86 style-CrQJI"
                                                                                                                                          id="style-CrQJI"
                                                                                                                                        >
                                                                                                                                          <div
                                                                                                                                            class="wbloks_87"
                                                                                                                                            dir="auto"
                                                                                                                                          >
                                                                                                                                            <span
                                                                                                                                              data-bloks-name="bk.components.TextSpan"
                                                                                                                                              id="style-jxEF3"
                                                                                                                                              class="style-jxEF3"
                                                                                                                                            >
                                                                                                                                              We
                                                                                                                                              help
                                                                                                                                              people
                                                                                                                                              to
                                                                                                                                              live
                                                                                                                                              a
                                                                                                                                              better
                                                                                                                                              life
                                                                                                                                              through
                                                                                                                                              technological
                                                                                                                                              home
                                                                                                                                              services.
                                                                                                                                            </span>
                                                                                                                                          </div>
                                                                                                                                        </div>
                                                                                                                                      </div>
                                                                                                                                    </div>
                                                                                                                                  </div>
                                                                                                                                </div>
                                                                                                                                <div
                                                                                                                                  data-bloks-name="bk.components.Flexbox"
                                                                                                                                  class="wbloks_1 style-nlDxd"
                                                                                                                                  id="style-nlDxd"
                                                                                                                                >
                                                                                                                                  <div
                                                                                                                                    data-bloks-name="bk.components.Flexbox"
                                                                                                                                    class="wbloks_1 style-Spg2w"
                                                                                                                                    id="style-Spg2w"
                                                                                                                                  >
                                                                                                                                    <div
                                                                                                                                      data-bloks-name="bk.components.Flexbox"
                                                                                                                                      class="wbloks_1 style-TAPqw"
                                                                                                                                      id="style-TAPqw"
                                                                                                                                    >
                                                                                                                                      <div
                                                                                                                                        data-bloks-name="bk.components.RichText"
                                                                                                                                        dir="auto"
                                                                                                                                        class="wbloks_1 style-vQz7G"
                                                                                                                                        id="style-vQz7G"
                                                                                                                                      >
                                                                                                                                        <div
                                                                                                                                          class="wbloks_86 style-NFRtN"
                                                                                                                                          id="style-NFRtN"
                                                                                                                                        >
                                                                                                                                          <div
                                                                                                                                            class="wbloks_87"
                                                                                                                                            dir="auto"
                                                                                                                                          >
                                                                                                                                            <span
                                                                                                                                              data-bloks-name="bk.components.TextSpan"
                                                                                                                                              id="style-CUNrm"
                                                                                                                                              class="style-CUNrm"
                                                                                                                                            >
                                                                                                                                              Learn
                                                                                                                                              more
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
                                                                                                                          <div
                                                                                                                            name="WebBloksToastPresenter"
                                                                                                                            class="wbloks_75"
                                                                                                                          >
                                                                                                                            <div class="wbloks_76">
                                                                                                                              <div
                                                                                                                                class="wbloks_77 wbloks_78 style-5gwnM"
                                                                                                                                id="style-5gwnM"
                                                                                                                              ></div>
                                                                                                                            </div>
                                                                                                                            <div class="wbloks_79">
                                                                                                                              <div
                                                                                                                                class="wbloks_80 wbloks_81 style-B1Eol"
                                                                                                                                id="style-B1Eol"
                                                                                                                              ></div>
                                                                                                                            </div>
                                                                                                                          </div>
                                                                                                                        </div>
                                                                                                                      </div>
                                                                                                                      <div class="x10l6tqk xso031l x1q0q8m5 x1mpk314 x1m258z3 x1vjfegm xds687c x1ey2m1c"></div>
                                                                                                                    </div>
                                                                                                                  </div>
                                                                                                                  <div class="x1anpbxc _3qn7 _61-0 _2fyh _3qnf">
                                                                                                                    <div
                                                                                                                      class="_6g3g xdzyupr x1nn3v0j x1iji9kk x10b6aqq x1sln4lm style-KIkoq"
                                                                                                                      id="style-KIkoq"
                                                                                                                    >
                                                                                                                      <div class="_3qn7 _61-0 _2fyi _3qnf">
                                                                                                                        <div class="_3qn7 _61-0 _2fyi _3qnf">
                                                                                                                          <div
                                                                                                                            class="_6g3g x150jy0e style-AoT5S"
                                                                                                                            id="style-AoT5S"
                                                                                                                          >
                                                                                                                            <span class="_9zc _9--">
                                                                                                                              <i class="_3j7m _2p78 _9--"></i>
                                                                                                                            </span>
                                                                                                                          </div>
                                                                                                                        </div>
                                                                                                                        <div
                                                                                                                          class="_6g3g x1h0ha7o x1mpkggp xeuugli x11hbpws style-8sVCK"
                                                                                                                          id="style-8sVCK"
                                                                                                                        >
                                                                                                                          <div class="x8t9es0 x1fvot60 xo1l8bm xxio538 x1heor9g xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj xeuugli">
                                                                                                                            1
                                                                                                                          </div>
                                                                                                                        </div>
                                                                                                                        <div
                                                                                                                          class="_6g3g x11hbpws x1f6kntn x14atkfc style-wJAkG"
                                                                                                                          id="style-wJAkG"
                                                                                                                        >
                                                                                                                          <div class="_3qn7 _61-2 _2fyi _3qnf">
                                                                                                                            <div
                                                                                                                              class="_6g3g x5ib6vp style-3obPQ"
                                                                                                                              id="style-3obPQ"
                                                                                                                            >
                                                                                                                              <span class="x8t9es0 x1fvot60 xo1l8bm xxio538 x1heor9g xq9mrsl x1h4wwuj xeuugli">
                                                                                                                                1
                                                                                                                                comment
                                                                                                                              </span>
                                                                                                                            </div>
                                                                                                                          </div>
                                                                                                                        </div>
                                                                                                                      </div>
                                                                                                                    </div>
                                                                                                                    <div class="x14nfmen xjm9jq1 x1gryazu xkrivgy xdzyupr"></div>
                                                                                                                    <div
                                                                                                                      class="_6g3g xdzyupr x1y1aw1k x1iji9kk x1120s5i x1sln4lm style-4KGxE"
                                                                                                                      id="style-4KGxE"
                                                                                                                    >
                                                                                                                      <div class="x1s688f x11hbpws _3qn7 _6twk _2fyi _3qnf">
                                                                                                                        <div
                                                                                                                          class="_6g3g style-k91HF"
                                                                                                                          id="style-k91HF"
                                                                                                                        >
                                                                                                                          <div class="_3qn7 _61-0 _2fyi _3qnf">
                                                                                                                            <div
                                                                                                                              class="_6g3g x1sxyh0 x1j85h84 xg32yw2 style-4CEAn"
                                                                                                                              id="style-4CEAn"
                                                                                                                            >
                                                                                                                              <i
                                                                                                                                alt=""
                                                                                                                                data-visualcompletion="css-img"
                                                                                                                                class="img style-nWxxG"
                                                                                                                                id="style-nWxxG"
                                                                                                                              ></i>
                                                                                                                            </div>
                                                                                                                            <div
                                                                                                                              class="_6g3g style-yP4V2"
                                                                                                                              id="style-yP4V2"
                                                                                                                            >
                                                                                                                              Like
                                                                                                                            </div>
                                                                                                                          </div>
                                                                                                                        </div>
                                                                                                                        <div
                                                                                                                          class="_6g3g style-9yXrI"
                                                                                                                          id="style-9yXrI"
                                                                                                                        >
                                                                                                                          <div class="_3qn7 _61-0 _2fyi _3qnf">
                                                                                                                            <div
                                                                                                                              class="_6g3g x1sxyh0 x1j85h84 xg32yw2 style-HvLvW"
                                                                                                                              id="style-HvLvW"
                                                                                                                            >
                                                                                                                              <i
                                                                                                                                alt=""
                                                                                                                                data-visualcompletion="css-img"
                                                                                                                                class="img style-ZB3PN"
                                                                                                                                id="style-ZB3PN"
                                                                                                                              ></i>
                                                                                                                            </div>
                                                                                                                            <div
                                                                                                                              class="_6g3g style-iWILH"
                                                                                                                              id="style-iWILH"
                                                                                                                            >
                                                                                                                              Comment
                                                                                                                            </div>
                                                                                                                          </div>
                                                                                                                        </div>
                                                                                                                        <div
                                                                                                                          class="_6g3g style-ognwb"
                                                                                                                          id="style-ognwb"
                                                                                                                        >
                                                                                                                          <div class="_3qn7 _61-0 _2fyi _3qnf">
                                                                                                                            <div
                                                                                                                              class="_6g3g x1sxyh0 x1j85h84 xg32yw2 style-tVEwO"
                                                                                                                              id="style-tVEwO"
                                                                                                                            >
                                                                                                                              <i
                                                                                                                                alt=""
                                                                                                                                data-visualcompletion="css-img"
                                                                                                                                class="img style-8boxZ"
                                                                                                                                id="style-8boxZ"
                                                                                                                              ></i>
                                                                                                                            </div>
                                                                                                                            <div
                                                                                                                              class="_6g3g style-jT7ap"
                                                                                                                              id="style-jT7ap"
                                                                                                                            >
                                                                                                                              Share
                                                                                                                            </div>
                                                                                                                          </div>
                                                                                                                        </div>
                                                                                                                      </div>
                                                                                                                    </div>
                                                                                                                  </div>
                                                                                                                  <div></div>
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
                                                              </div>
                                                              <div class="x1s85apg">
                                                                <div class="x1s85apg">
                                                                  <div class="x3smdqs">
                                                                    <div class="x78zum5 x2lwn1j xeuugli xh8yej3">
                                                                      <div class="x78zum5 xdt5ytf x2lwn1j xamitd3 x1iyjqo2 xeuugli">
                                                                        <div class="x78zum5 x2lwn1j xeuugli xlshs6z">
                                                                          <div class="x78zum5 x2lwn1j xeuugli xamitd3 x2lah0s x1emribx">
                                                                            <div
                                                                              class="x3nfvp2 x120ccyz x4s1yf2"
                                                                              role="presentation"
                                                                            >
                                                                              <div
                                                                                class="xtwfq29 style-g2omL"
                                                                                id="style-g2omL"
                                                                              ></div>
                                                                            </div>
                                                                          </div>
                                                                          <div class="x6ikm8r x10wlt62 xlyipyv xh8yej3">
                                                                            <div class="xmi5d70 x1fvot60 xo1l8bm xxio538 xbsr9hj xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj xeuugli">
                                                                              Instagram
                                                                              Explore
                                                                            </div>
                                                                          </div>
                                                                        </div>
                                                                      </div>
                                                                      <div class="x78zum5 xdt5ytf x2lwn1j xeuugli xamitd3 x2lah0s">
                                                                        <div class="xlshs6z">
                                                                          <div
                                                                            class="x3oybdh xuxw1ft x1iknuni xw9jwym x1e2iszw xg0tal0 x1lliihq x1lcm9me x1yr5g0i xrt01vj x10y3i5r"
                                                                            role="group"
                                                                          >
                                                                            <div
                                                                              aria-busy="false"
                                                                              aria-controls="js_if"
                                                                              class="x1i10hfl xjqpnuy xa49m3k xqeqjp1 x2hbi6w x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli x16tdsg8 xggy1nq x1ja2u2z x6s0dn4 x1ejq31n xd10rxx x1sy0etr x17r0tee x3nfvp2 xdl72j9 x1q0g3np x2lah0s x193iq5w x1n2onr6 x1hl2dhg x87ps6o xxymvpz xlh3980 xvmahel x1lku1pv x1g40iwv x1lcm9me x1yr5g0i xrt01vj x10y3i5r x1ob88yx xaatb59 x1qgsegg xo1l8bm xbsr9hj x1v911su x1y1aw1k xwib8y2 x1ye3gou xn6708d style-Boaag"
                                                                              role="button"
                                                                              tabindex="0"
                                                                              id="style-Boaag"
                                                                            >
                                                                              <span class="xmi5d70 x1fvot60 xxio538 x1heor9g xq9mrsl x1h4wwuj x1pd3egz xeuugli xh8yej3">
                                                                                <div class="x78zum5">
                                                                                  <div
                                                                                    class="x1qvwoe0 xjm9jq1 x1y332i5 xcwd3tp x1jyxor1 x39eecv x6ikm8r x10wlt62 x10l6tqk xuxw1ft x1i1rx1s"
                                                                                    data-sscoverage-ignore="true"
                                                                                  >
                                                                                    More
                                                                                    items
                                                                                  </div>
                                                                                  <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1hc1fzr x13dflua x6o7n8i xxziih7 x12w9bfk xl56j7k xh8yej3">
                                                                                    <div
                                                                                      class="x3nfvp2 x120ccyz x1heor9g x2lah0s x1c4vz4f"
                                                                                      role="presentation"
                                                                                    >
                                                                                      <div
                                                                                        class="xtwfq29 style-nqY53"
                                                                                        id="style-nqY53"
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
                                                                    <div class="xw7yly9">
                                                                      <div
                                                                        class="x1gzqxud x1lcm9me x1yr5g0i xrt01vj x10y3i5r xhgxa4x xy5ysw6 x1qkj6lk xn3walq xnvurfn xv1ta3e x1opv7go x1dtnpoi xibdhds xtnng9g xhvrwov x13k1m86 xwx4but x1cpjm7i xszcg87 x1hmns74 xkk1bqk x14d4353 xsxiz9q x1rmj1tg xchklzq x9f619 xc8icb0 x1n2onr6 x1pvq41x xhhp2wi x14q35kh x1wa3ocq x1n7iyjn x1s928wv x1wsn0xg x1j6awrg x162n7g1 x1m1drc7 x4eaejv xi4xitw x5yr21d xh8yej3"
                                                                        data-auto-logging-component-type="GeoCard"
                                                                      >
                                                                        <div class="x78zum5 xdt5ytf x5yr21d xedcshv x1t2pt76 xh8yej3">
                                                                          <div class="x9f619 x78zum5 x1iyjqo2 x5yr21d x2lwn1j x1n2onr6 xh8yej3">
                                                                            <div class="xw2csxc x1odjw0f xh8yej3 x18d9i69">
                                                                              <div class="xjm9jq1 xg01cxk x47corl xh8yej3 x1jyxor1"></div>
                                                                              <div class="x6s0dn4 x78zum5 xdt5ytf xl56j7k x2lwn1j xeuugli xgx9qek x1lq5wgf xgqcy7u x30kzoy x9jhf4c x6ikm8r x10wlt62 x1n2onr6 x15b6uid x3smdqs">
                                                                                <div>
                                                                                  <div>
                                                                                    <div class="_89mx">
                                                                                      <div class="_4u-c">
                                                                                        <div>
                                                                                          <div class="">
                                                                                            <div>
                                                                                              <div class="_5zg">
                                                                                                <div class="_7vpk">
                                                                                                  <div class=" _831c">
                                                                                                    <div class="_91kv">
                                                                                                      <div>
                                                                                                        <div class="">
                                                                                                          <div
                                                                                                            class="_ag3c _228q"
                                                                                                            id="f3e960493c1955648"
                                                                                                          >
                                                                                                            <div
                                                                                                              class="hidden_elem"
                                                                                                              id="f3e960493c1955648-1"
                                                                                                            ></div>
                                                                                                            <div
                                                                                                              class=""
                                                                                                              id="f3e960493c1955648-2"
                                                                                                              data-ad-preview="previewContainer"
                                                                                                            >
                                                                                                              <div
                                                                                                                id="ad_preview_error_box"
                                                                                                                class="_8sy- _653d"
                                                                                                                data-preview-error="true"
                                                                                                                data-error-message="Instagram actor ID is required: Select an Instagram account to display this preview."
                                                                                                                data-error-code="1699026"
                                                                                                                data-clickable="1"
                                                                                                                data-inputable="1"
                                                                                                                data-keydownable="1"
                                                                                                                data-keyupable="1"
                                                                                                                data-changeable="1"
                                                                                                              >
                                                                                                                <div class="_1oi3">
                                                                                                                  Instagram
                                                                                                                  actor
                                                                                                                  ID
                                                                                                                  is
                                                                                                                  required:
                                                                                                                  Select
                                                                                                                  an
                                                                                                                  Instagram
                                                                                                                  account
                                                                                                                  to
                                                                                                                  display
                                                                                                                  this
                                                                                                                  preview.
                                                                                                                </div>
                                                                                                                <div>
                                                                                                                  <div class="x6s0dn4 x78zum5 xdt5ytf xozqiw3 x2lwn1j x1iyjqo2 xavht8x xw5ewwj x2ixbly xdj266r xkrivgy xat24cr x1gryazu">
                                                                                                                    <div class="x1gzqxud x1lq5wgf xgqcy7u x30kzoy x9jhf4c x1kmqopl x5yr21d xh8yej3">
                                                                                                                      <div class="x78zum5 xdt5ytf x5yr21d xedcshv x1t2pt76 xh8yej3">
                                                                                                                        <div class="x9f619 x78zum5 x1iyjqo2 x5yr21d x2lwn1j x1n2onr6 xh8yej3">
                                                                                                                          <div class="xw2csxc x1odjw0f xh8yej3 x18d9i69">
                                                                                                                            <div class="xjm9jq1 xg01cxk x47corl xh8yej3 x1jyxor1"></div>
                                                                                                                            <div
                                                                                                                              id="style-wUcVE"
                                                                                                                              class="style-wUcVE"
                                                                                                                            >
                                                                                                                              <div class="x9f619 x78zum5 xdt5ytf x1l7klhg x1iyjqo2 x5yr21d xyamay9 x1pi30zi x1l90r2v x1swvt13 x13faqbe">
                                                                                                                                <div class="x1cy8zhl x78zum5 xdt5ytf xozqiw3 x2lwn1j xeuugli xavht8x x1yztbdb x1iyjqo2">
                                                                                                                                  <div
                                                                                                                                    class="x3nfvp2 x120ccyz x746shc"
                                                                                                                                    role="presentation"
                                                                                                                                  >
                                                                                                                                    <div
                                                                                                                                      class="xtwfq29 style-svAd2"
                                                                                                                                      id="style-svAd2"
                                                                                                                                    ></div>
                                                                                                                                  </div>
                                                                                                                                  <div>
                                                                                                                                    <div class="xeuugli x12nagc">
                                                                                                                                      <div
                                                                                                                                        aria-level="3"
                                                                                                                                        class="x8t9es0 x1uxerd5 x1xlr1w8 xrohxju x4hq6eo xq9mrsl x1yc453h x1h4wwuj xeuugli"
                                                                                                                                        role="heading"
                                                                                                                                      >
                                                                                                                                        Instagram
                                                                                                                                        actor
                                                                                                                                        ID
                                                                                                                                        is
                                                                                                                                        required
                                                                                                                                      </div>
                                                                                                                                      <div class="x8t9es0 x1fvot60 xxio538 x4hq6eo xq9mrsl x1yc453h x1h4wwuj x1fcty0u xeuugli">
                                                                                                                                        {" "}
                                                                                                                                        Select
                                                                                                                                        an
                                                                                                                                        Instagram
                                                                                                                                        account
                                                                                                                                        to
                                                                                                                                        display
                                                                                                                                        this
                                                                                                                                        preview.
                                                                                                                                      </div>
                                                                                                                                    </div>
                                                                                                                                  </div>
                                                                                                                                </div>
                                                                                                                              </div>
                                                                                                                            </div>
                                                                                                                            <div class="xjm9jq1 xg01cxk x47corl xh8yej3 x1y332i5"></div>
                                                                                                                          </div>
                                                                                                                          <div class="x10wjd1d x47corl x10l6tqk x19991ni x13dflua xwji4o3 xh8yej3 x67dex8 x13vifvy x1hc1fzr"></div>
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
                                                                              <div class="xjm9jq1 xg01cxk x47corl xh8yej3 x1y332i5"></div>
                                                                            </div>
                                                                            <div class="x10wjd1d x47corl x10l6tqk x19991ni x13dflua xwji4o3 xh8yej3 x67dex8 x13vifvy x1hc1fzr"></div>
                                                                            <div class="x10wjd1d x47corl x10l6tqk x19991ni x13dflua xwji4o3 xh8yej3 x1ta9b4f x1ey2m1c x1hc1fzr"></div>
                                                                          </div>
                                                                        </div>
                                                                      </div>
                                                                    </div>
                                                                  </div>
                                                                </div>
                                                              </div>
                                                              <div class="">
                                                                <div class="">
                                                                  <div class="x3smdqs">
                                                                    <div class="x78zum5 x2lwn1j xeuugli xh8yej3">
                                                                      <div class="x78zum5 xdt5ytf x2lwn1j xamitd3 x1iyjqo2 xeuugli">
                                                                        <div class="x78zum5 x2lwn1j xeuugli xlshs6z">
                                                                          <div class="x78zum5 x2lwn1j xeuugli xamitd3 x2lah0s x1emribx">
                                                                            <div
                                                                              class="x3nfvp2 x120ccyz x4s1yf2"
                                                                              role="presentation"
                                                                            >
                                                                              <div
                                                                                class="xtwfq29 style-JiGOb"
                                                                                id="style-JiGOb"
                                                                              ></div>
                                                                            </div>
                                                                          </div>
                                                                          <div class="x6ikm8r x10wlt62 xlyipyv xh8yej3">
                                                                            <div class="xmi5d70 x1fvot60 xo1l8bm xxio538 xbsr9hj xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj xeuugli">
                                                                              Facebook
                                                                              Marketplace
                                                                            </div>
                                                                          </div>
                                                                        </div>
                                                                      </div>
                                                                      <div class="x78zum5 xdt5ytf x2lwn1j xeuugli xamitd3 x2lah0s">
                                                                        <div class="xlshs6z">
                                                                          <div
                                                                            class="x3oybdh xuxw1ft x1iknuni xw9jwym x1e2iszw xg0tal0 x1lliihq x1lcm9me x1yr5g0i xrt01vj x10y3i5r"
                                                                            role="group"
                                                                          >
                                                                            <div
                                                                              aria-busy="false"
                                                                              aria-controls="js_ih"
                                                                              class="x1i10hfl xjqpnuy xa49m3k xqeqjp1 x2hbi6w x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli x16tdsg8 xggy1nq x1ja2u2z x6s0dn4 x1ejq31n xd10rxx x1sy0etr x17r0tee x3nfvp2 xdl72j9 x1q0g3np x2lah0s x193iq5w x1n2onr6 x1hl2dhg x87ps6o xxymvpz xlh3980 xvmahel x1lku1pv x1g40iwv x1lcm9me x1yr5g0i xrt01vj x10y3i5r x1ob88yx xaatb59 x1qgsegg xo1l8bm xbsr9hj x1v911su x1y1aw1k xwib8y2 x1ye3gou xn6708d style-2TLFB"
                                                                              role="button"
                                                                              tabindex="0"
                                                                              id="style-2TLFB"
                                                                            >
                                                                              <span class="xmi5d70 x1fvot60 xxio538 x1heor9g xq9mrsl x1h4wwuj x1pd3egz xeuugli xh8yej3">
                                                                                <div class="x78zum5">
                                                                                  <div
                                                                                    class="x1qvwoe0 xjm9jq1 x1y332i5 xcwd3tp x1jyxor1 x39eecv x6ikm8r x10wlt62 x10l6tqk xuxw1ft x1i1rx1s"
                                                                                    data-sscoverage-ignore="true"
                                                                                  >
                                                                                    More
                                                                                    items
                                                                                  </div>
                                                                                  <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1hc1fzr x13dflua x6o7n8i xxziih7 x12w9bfk xl56j7k xh8yej3">
                                                                                    <div
                                                                                      class="x3nfvp2 x120ccyz x1heor9g x2lah0s x1c4vz4f"
                                                                                      role="presentation"
                                                                                    >
                                                                                      <div
                                                                                        class="xtwfq29 style-jrpCn"
                                                                                        id="style-jrpCn"
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
                                                                    <div class="xw7yly9">
                                                                      <div
                                                                        class="x1gzqxud x1lcm9me x1yr5g0i xrt01vj x10y3i5r xhgxa4x xy5ysw6 x1qkj6lk xn3walq xnvurfn xv1ta3e x1opv7go x1dtnpoi xibdhds xtnng9g xhvrwov x13k1m86 xwx4but x1cpjm7i xszcg87 x1hmns74 xkk1bqk x14d4353 xsxiz9q x1rmj1tg xchklzq x9f619 xc8icb0 x1n2onr6 x1pvq41x xhhp2wi x14q35kh x1wa3ocq x1n7iyjn x1s928wv x1wsn0xg x1j6awrg x162n7g1 x1m1drc7 x4eaejv xi4xitw x5yr21d xh8yej3"
                                                                        data-auto-logging-component-type="GeoCard"
                                                                      >
                                                                        <div class="x78zum5 xdt5ytf x5yr21d xedcshv x1t2pt76 xh8yej3">
                                                                          <div class="x9f619 x78zum5 x1iyjqo2 x5yr21d x2lwn1j x1n2onr6 xh8yej3">
                                                                            <div class="xw2csxc x1odjw0f xh8yej3 x18d9i69">
                                                                              <div class="xjm9jq1 xg01cxk x47corl xh8yej3 x1jyxor1"></div>
                                                                              <div class="x6s0dn4 x78zum5 xdt5ytf xl56j7k x2lwn1j xeuugli xgx9qek x1lq5wgf xgqcy7u x30kzoy x9jhf4c x6ikm8r x10wlt62 x1n2onr6 x15b6uid x3smdqs">
                                                                                <div>
                                                                                  <div>
                                                                                    <div class="_89mx">
                                                                                      <div class="_4u-c">
                                                                                        <div>
                                                                                          <div class="">
                                                                                            <div>
                                                                                              <div class="_5zg">
                                                                                                <div class="_7vpk">
                                                                                                  <div class=" _831c">
                                                                                                    <div class="_91kv">
                                                                                                      <div>
                                                                                                        <div class="">
                                                                                                          <div
                                                                                                            class="_ag3c _228q"
                                                                                                            id="fb4bb9abb0a7d27b2"
                                                                                                          >
                                                                                                            <div
                                                                                                              class="hidden_elem"
                                                                                                              id="fb4bb9abb0a7d27b2-1"
                                                                                                            ></div>
                                                                                                            <div
                                                                                                              class=""
                                                                                                              id="fb4bb9abb0a7d27b2-2"
                                                                                                              data-ad-preview="previewContainer"
                                                                                                            >
                                                                                                              <div class="_7vxf">
                                                                                                                <div class="_983f">
                                                                                                                  <div class="_8qr6">
                                                                                                                    <div class="_8qq_">
                                                                                                                      <div class="_8qq_">
                                                                                                                        <div class="_aco7">
                                                                                                                          <img
                                                                                                                            class="_6f4f img"
                                                                                                                            src="https://i.postimg.cc/jqBmLCXY/VC.jpg"
                                                                                                                            alt=""
                                                                                                                          />
                                                                                                                          <div class="_acov">
                                                                                                                            <div class="_aco8">
                                                                                                                              <span class="_2iem _50f7">
                                                                                                                                Valentino
                                                                                                                                Technologies
                                                                                                                              </span>
                                                                                                                            </div>
                                                                                                                            <span class="_2ieq">
                                                                                                                              Sponsored
                                                                                                                            </span>
                                                                                                                          </div>
                                                                                                                        </div>
                                                                                                                      </div>
                                                                                                                      <div class="_acob">
                                                                                                                        <i
                                                                                                                          class="img style-V9Wjm"
                                                                                                                          id="style-V9Wjm"
                                                                                                                        ></i>
                                                                                                                      </div>
                                                                                                                    </div>
                                                                                                                    <div
                                                                                                                      data-clickable="1"
                                                                                                                      data-inputable="1"
                                                                                                                      data-keydownable="1"
                                                                                                                      data-keyupable="1"
                                                                                                                      data-changeable="1"
                                                                                                                    >
                                                                                                                      <div class="xqi1l69 x1lq5wgf xgqcy7u x30kzoy x9jhf4c x78zum5 xl56j7k x6s0dn4 x1b51vyi xzjbwwf">
                                                                                                                        <div
                                                                                                                          id="style-zwpzx"
                                                                                                                          class="style-zwpzx"
                                                                                                                        >
                                                                                                                          <div class="_4u-c">
                                                                                                                            <div
                                                                                                                              id="style-86BhG"
                                                                                                                              class="style-86BhG"
                                                                                                                            >
                                                                                                                              <div
                                                                                                                                id="style-6T7XZ"
                                                                                                                                class="style-6T7XZ"
                                                                                                                              >
                                                                                                                                <div
                                                                                                                                  id="style-GzmXQ"
                                                                                                                                  class="style-GzmXQ"
                                                                                                                                ></div>
                                                                                                                              </div>
                                                                                                                            </div>
                                                                                                                          </div>
                                                                                                                        </div>
                                                                                                                      </div>
                                                                                                                    </div>
                                                                                                                    <div class="_8qr5">
                                                                                                                      <div class="_amv7">
                                                                                                                        <span class="_2ieo _2iev">
                                                                                                                          Valentino
                                                                                                                          Technologies
                                                                                                                        </span>
                                                                                                                      </div>
                                                                                                                    </div>
                                                                                                                    <span></span>
                                                                                                                  </div>
                                                                                                                  <span></span>
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
                                                              </div>
                                                              <div class="x1s85apg">
                                                                <div class="x1s85apg">
                                                                  <div class="x3smdqs">
                                                                    <div class="x78zum5 x2lwn1j xeuugli xh8yej3">
                                                                      <div class="x78zum5 xdt5ytf x2lwn1j xamitd3 x1iyjqo2 xeuugli">
                                                                        <div class="x78zum5 x2lwn1j xeuugli xlshs6z">
                                                                          <div class="x78zum5 x2lwn1j xeuugli xamitd3 x2lah0s x1emribx">
                                                                            <div
                                                                              class="x3nfvp2 x120ccyz x4s1yf2"
                                                                              role="presentation"
                                                                            >
                                                                              <div
                                                                                class="xtwfq29 style-mFO3y"
                                                                                id="style-mFO3y"
                                                                              ></div>
                                                                            </div>
                                                                          </div>
                                                                          <div class="x6ikm8r x10wlt62 xlyipyv xh8yej3">
                                                                            <div class="xmi5d70 x1fvot60 xo1l8bm xxio538 xbsr9hj xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj xeuugli">
                                                                              Instagram
                                                                              Reels
                                                                            </div>
                                                                          </div>
                                                                        </div>
                                                                      </div>
                                                                      <div class="x78zum5 xdt5ytf x2lwn1j xeuugli xamitd3 x2lah0s">
                                                                        <div class="xlshs6z">
                                                                          <div
                                                                            class="x3oybdh xuxw1ft x1iknuni xw9jwym x1e2iszw xg0tal0 x1lliihq x1lcm9me x1yr5g0i xrt01vj x10y3i5r"
                                                                            role="group"
                                                                          >
                                                                            <div
                                                                              aria-busy="false"
                                                                              aria-controls="js_ij"
                                                                              class="x1i10hfl xjqpnuy xa49m3k xqeqjp1 x2hbi6w x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli x16tdsg8 xggy1nq x1ja2u2z x6s0dn4 x1ejq31n xd10rxx x1sy0etr x17r0tee x3nfvp2 xdl72j9 x1q0g3np x2lah0s x193iq5w x1n2onr6 x1hl2dhg x87ps6o xxymvpz xlh3980 xvmahel x1lku1pv x1g40iwv x1lcm9me x1yr5g0i xrt01vj x10y3i5r x1ob88yx xaatb59 x1qgsegg xo1l8bm xbsr9hj x1v911su x1y1aw1k xwib8y2 x1ye3gou xn6708d style-iLS1D"
                                                                              role="button"
                                                                              tabindex="0"
                                                                              id="style-iLS1D"
                                                                            >
                                                                              <span class="xmi5d70 x1fvot60 xxio538 x1heor9g xq9mrsl x1h4wwuj x1pd3egz xeuugli xh8yej3">
                                                                                <div class="x78zum5">
                                                                                  <div
                                                                                    class="x1qvwoe0 xjm9jq1 x1y332i5 xcwd3tp x1jyxor1 x39eecv x6ikm8r x10wlt62 x10l6tqk xuxw1ft x1i1rx1s"
                                                                                    data-sscoverage-ignore="true"
                                                                                  >
                                                                                    More
                                                                                    items
                                                                                  </div>
                                                                                  <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1hc1fzr x13dflua x6o7n8i xxziih7 x12w9bfk xl56j7k xh8yej3">
                                                                                    <div
                                                                                      class="x3nfvp2 x120ccyz x1heor9g x2lah0s x1c4vz4f"
                                                                                      role="presentation"
                                                                                    >
                                                                                      <div
                                                                                        class="xtwfq29 style-C9eKg"
                                                                                        id="style-C9eKg"
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
                                                                    <div class="xw7yly9">
                                                                      <div
                                                                        class="x1gzqxud x1lcm9me x1yr5g0i xrt01vj x10y3i5r xhgxa4x xy5ysw6 x1qkj6lk xn3walq xnvurfn xv1ta3e x1opv7go x1dtnpoi xibdhds xtnng9g xhvrwov x13k1m86 xwx4but x1cpjm7i xszcg87 x1hmns74 xkk1bqk x14d4353 xsxiz9q x1rmj1tg xchklzq x9f619 xc8icb0 x1n2onr6 x1pvq41x xhhp2wi x14q35kh x1wa3ocq x1n7iyjn x1s928wv x1wsn0xg x1j6awrg x162n7g1 x1m1drc7 x4eaejv xi4xitw x5yr21d xh8yej3"
                                                                        data-auto-logging-component-type="GeoCard"
                                                                      >
                                                                        <div class="x78zum5 xdt5ytf x5yr21d xedcshv x1t2pt76 xh8yej3">
                                                                          <div class="x9f619 x78zum5 x1iyjqo2 x5yr21d x2lwn1j x1n2onr6 xh8yej3">
                                                                            <div class="xw2csxc x1odjw0f xh8yej3 x18d9i69">
                                                                              <div class="xjm9jq1 xg01cxk x47corl xh8yej3 x1jyxor1"></div>
                                                                              <div class="x6s0dn4 x78zum5 xdt5ytf xl56j7k x2lwn1j xeuugli xgx9qek x1lq5wgf xgqcy7u x30kzoy x9jhf4c x6ikm8r x10wlt62 x1n2onr6 x15b6uid x3smdqs">
                                                                                <div>
                                                                                  <div>
                                                                                    <div class="_89mx">
                                                                                      <div class="_4u-c">
                                                                                        <div>
                                                                                          <div class="">
                                                                                            <div>
                                                                                              <div class="_5zg">
                                                                                                <div class="_7vpk">
                                                                                                  <div class=" _831c">
                                                                                                    <div class="_91kv">
                                                                                                      <div>
                                                                                                        <div class="">
                                                                                                          <div
                                                                                                            class="_ag3c _228q"
                                                                                                            id="fc55554da93e02c2a"
                                                                                                          >
                                                                                                            <div
                                                                                                              class="hidden_elem"
                                                                                                              id="fc55554da93e02c2a-1"
                                                                                                            ></div>
                                                                                                            <div
                                                                                                              class=""
                                                                                                              id="fc55554da93e02c2a-2"
                                                                                                              data-ad-preview="previewContainer"
                                                                                                            >
                                                                                                              <div
                                                                                                                id="ad_preview_error_box"
                                                                                                                class="_8sy- _653d"
                                                                                                                data-preview-error="true"
                                                                                                                data-error-message="Instagram actor ID is required: Select an Instagram account to display this preview."
                                                                                                                data-error-code="1699026"
                                                                                                                data-clickable="1"
                                                                                                                data-inputable="1"
                                                                                                                data-keydownable="1"
                                                                                                                data-keyupable="1"
                                                                                                                data-changeable="1"
                                                                                                              >
                                                                                                                <div class="_1oi3">
                                                                                                                  Instagram
                                                                                                                  actor
                                                                                                                  ID
                                                                                                                  is
                                                                                                                  required:
                                                                                                                  Select
                                                                                                                  an
                                                                                                                  Instagram
                                                                                                                  account
                                                                                                                  to
                                                                                                                  display
                                                                                                                  this
                                                                                                                  preview.
                                                                                                                </div>
                                                                                                                <div>
                                                                                                                  <div class="x6s0dn4 x78zum5 xdt5ytf xozqiw3 x2lwn1j x1iyjqo2 xavht8x xw5ewwj x2ixbly xdj266r xkrivgy xat24cr x1gryazu">
                                                                                                                    <div class="x1gzqxud x1lq5wgf xgqcy7u x30kzoy x9jhf4c x1kmqopl x5yr21d xh8yej3">
                                                                                                                      <div class="x78zum5 xdt5ytf x5yr21d xedcshv x1t2pt76 xh8yej3">
                                                                                                                        <div class="x9f619 x78zum5 x1iyjqo2 x5yr21d x2lwn1j x1n2onr6 xh8yej3">
                                                                                                                          <div class="xw2csxc x1odjw0f xh8yej3 x18d9i69">
                                                                                                                            <div class="xjm9jq1 xg01cxk x47corl xh8yej3 x1jyxor1"></div>
                                                                                                                            <div
                                                                                                                              id="style-qhlAb"
                                                                                                                              class="style-qhlAb"
                                                                                                                            >
                                                                                                                              <div class="x9f619 x78zum5 xdt5ytf x1l7klhg x1iyjqo2 x5yr21d xyamay9 x1pi30zi x1l90r2v x1swvt13 x13faqbe">
                                                                                                                                <div class="x1cy8zhl x78zum5 xdt5ytf xozqiw3 x2lwn1j xeuugli xavht8x x1yztbdb x1iyjqo2">
                                                                                                                                  <div
                                                                                                                                    class="x3nfvp2 x120ccyz x746shc"
                                                                                                                                    role="presentation"
                                                                                                                                  >
                                                                                                                                    <div
                                                                                                                                      class="xtwfq29 style-LzWWl"
                                                                                                                                      id="style-LzWWl"
                                                                                                                                    ></div>
                                                                                                                                  </div>
                                                                                                                                  <div>
                                                                                                                                    <div class="xeuugli x12nagc">
                                                                                                                                      <div
                                                                                                                                        aria-level="3"
                                                                                                                                        class="x8t9es0 x1uxerd5 x1xlr1w8 xrohxju x4hq6eo xq9mrsl x1yc453h x1h4wwuj xeuugli"
                                                                                                                                        role="heading"
                                                                                                                                      >
                                                                                                                                        Instagram
                                                                                                                                        actor
                                                                                                                                        ID
                                                                                                                                        is
                                                                                                                                        required
                                                                                                                                      </div>
                                                                                                                                      <div class="x8t9es0 x1fvot60 xxio538 x4hq6eo xq9mrsl x1yc453h x1h4wwuj x1fcty0u xeuugli">
                                                                                                                                        {" "}
                                                                                                                                        Select
                                                                                                                                        an
                                                                                                                                        Instagram
                                                                                                                                        account
                                                                                                                                        to
                                                                                                                                        display
                                                                                                                                        this
                                                                                                                                        preview.
                                                                                                                                      </div>
                                                                                                                                    </div>
                                                                                                                                  </div>
                                                                                                                                </div>
                                                                                                                              </div>
                                                                                                                            </div>
                                                                                                                            <div class="xjm9jq1 xg01cxk x47corl xh8yej3 x1y332i5"></div>
                                                                                                                          </div>
                                                                                                                          <div class="x10wjd1d x47corl x10l6tqk x19991ni x13dflua xwji4o3 xh8yej3 x67dex8 x13vifvy x1hc1fzr"></div>
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
                                                                              <div class="xjm9jq1 xg01cxk x47corl xh8yej3 x1y332i5"></div>
                                                                            </div>
                                                                            <div class="x10wjd1d x47corl x10l6tqk x19991ni x13dflua xwji4o3 xh8yej3 x67dex8 x13vifvy x1hc1fzr"></div>
                                                                            <div class="x10wjd1d x47corl x10l6tqk x19991ni x13dflua xwji4o3 xh8yej3 x1ta9b4f x1ey2m1c x1hc1fzr"></div>
                                                                          </div>
                                                                        </div>
                                                                      </div>
                                                                    </div>
                                                                  </div>
                                                                </div>
                                                              </div>
                                                              <div class="x1s85apg">
                                                                <div class="x1s85apg">
                                                                  <div class="x3smdqs">
                                                                    <div class="x78zum5 x2lwn1j xeuugli xh8yej3">
                                                                      <div class="x78zum5 xdt5ytf x2lwn1j xamitd3 x1iyjqo2 xeuugli">
                                                                        <div class="x78zum5 x2lwn1j xeuugli xlshs6z">
                                                                          <div class="x78zum5 x2lwn1j xeuugli xamitd3 x2lah0s x1emribx">
                                                                            <div
                                                                              class="x3nfvp2 x120ccyz x4s1yf2"
                                                                              role="presentation"
                                                                            >
                                                                              <div
                                                                                class="xtwfq29 style-WGn5h"
                                                                                id="style-WGn5h"
                                                                              ></div>
                                                                            </div>
                                                                          </div>
                                                                          <div class="x6ikm8r x10wlt62 xlyipyv xh8yej3">
                                                                            <div class="xmi5d70 x1fvot60 xo1l8bm xxio538 xbsr9hj xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj xeuugli">
                                                                              Instagram
                                                                              profile
                                                                              feed
                                                                            </div>
                                                                          </div>
                                                                        </div>
                                                                      </div>
                                                                      <div class="x78zum5 xdt5ytf x2lwn1j xeuugli xamitd3 x2lah0s">
                                                                        <div class="xlshs6z">
                                                                          <div
                                                                            class="x3oybdh xuxw1ft x1iknuni xw9jwym x1e2iszw xg0tal0 x1lliihq x1lcm9me x1yr5g0i xrt01vj x10y3i5r"
                                                                            role="group"
                                                                          >
                                                                            <div
                                                                              aria-busy="false"
                                                                              aria-controls="js_il"
                                                                              class="x1i10hfl xjqpnuy xa49m3k xqeqjp1 x2hbi6w x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli x16tdsg8 xggy1nq x1ja2u2z x6s0dn4 x1ejq31n xd10rxx x1sy0etr x17r0tee x3nfvp2 xdl72j9 x1q0g3np x2lah0s x193iq5w x1n2onr6 x1hl2dhg x87ps6o xxymvpz xlh3980 xvmahel x1lku1pv x1g40iwv x1lcm9me x1yr5g0i xrt01vj x10y3i5r x1ob88yx xaatb59 x1qgsegg xo1l8bm xbsr9hj x1v911su x1y1aw1k xwib8y2 x1ye3gou xn6708d style-5syse"
                                                                              role="button"
                                                                              tabindex="0"
                                                                              id="style-5syse"
                                                                            >
                                                                              <span class="xmi5d70 x1fvot60 xxio538 x1heor9g xq9mrsl x1h4wwuj x1pd3egz xeuugli xh8yej3">
                                                                                <div class="x78zum5">
                                                                                  <div
                                                                                    class="x1qvwoe0 xjm9jq1 x1y332i5 xcwd3tp x1jyxor1 x39eecv x6ikm8r x10wlt62 x10l6tqk xuxw1ft x1i1rx1s"
                                                                                    data-sscoverage-ignore="true"
                                                                                  >
                                                                                    More
                                                                                    items
                                                                                  </div>
                                                                                  <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1hc1fzr x13dflua x6o7n8i xxziih7 x12w9bfk xl56j7k xh8yej3">
                                                                                    <div
                                                                                      class="x3nfvp2 x120ccyz x1heor9g x2lah0s x1c4vz4f"
                                                                                      role="presentation"
                                                                                    >
                                                                                      <div
                                                                                        class="xtwfq29 style-34GL5"
                                                                                        id="style-34GL5"
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
                                                                    <div class="xw7yly9">
                                                                      <div
                                                                        class="x1gzqxud x1lcm9me x1yr5g0i xrt01vj x10y3i5r xhgxa4x xy5ysw6 x1qkj6lk xn3walq xnvurfn xv1ta3e x1opv7go x1dtnpoi xibdhds xtnng9g xhvrwov x13k1m86 xwx4but x1cpjm7i xszcg87 x1hmns74 xkk1bqk x14d4353 xsxiz9q x1rmj1tg xchklzq x9f619 xc8icb0 x1n2onr6 x1pvq41x xhhp2wi x14q35kh x1wa3ocq x1n7iyjn x1s928wv x1wsn0xg x1j6awrg x162n7g1 x1m1drc7 x4eaejv xi4xitw x5yr21d xh8yej3"
                                                                        data-auto-logging-component-type="GeoCard"
                                                                      >
                                                                        <div class="x78zum5 xdt5ytf x5yr21d xedcshv x1t2pt76 xh8yej3">
                                                                          <div class="x9f619 x78zum5 x1iyjqo2 x5yr21d x2lwn1j x1n2onr6 xh8yej3">
                                                                            <div class="xw2csxc x1odjw0f xh8yej3 x18d9i69">
                                                                              <div class="xjm9jq1 xg01cxk x47corl xh8yej3 x1jyxor1"></div>
                                                                              <div class="x6s0dn4 x78zum5 xdt5ytf xl56j7k x2lwn1j xeuugli xgx9qek x1lq5wgf xgqcy7u x30kzoy x9jhf4c x6ikm8r x10wlt62 x1n2onr6 x15b6uid x3smdqs">
                                                                                <div>
                                                                                  <div>
                                                                                    <div class="_89mx">
                                                                                      <div class="_4u-c">
                                                                                        <div>
                                                                                          <div class="">
                                                                                            <div>
                                                                                              <div class="_5zg">
                                                                                                <div class="_7vpk">
                                                                                                  <div class=" _831c">
                                                                                                    <div class="_91kv">
                                                                                                      <div>
                                                                                                        <div class="">
                                                                                                          <div
                                                                                                            class="_ag3c _228q"
                                                                                                            id="f4c5990f811dbd8c4"
                                                                                                          >
                                                                                                            <div
                                                                                                              class="hidden_elem"
                                                                                                              id="f4c5990f811dbd8c4-1"
                                                                                                            ></div>
                                                                                                            <div
                                                                                                              class=""
                                                                                                              id="f4c5990f811dbd8c4-2"
                                                                                                              data-ad-preview="previewContainer"
                                                                                                            >
                                                                                                              <div
                                                                                                                id="ad_preview_error_box"
                                                                                                                class="_8sy- _653d"
                                                                                                                data-preview-error="true"
                                                                                                                data-error-message="Instagram actor ID is required: Select an Instagram account to display this preview."
                                                                                                                data-error-code="1699026"
                                                                                                                data-clickable="1"
                                                                                                                data-inputable="1"
                                                                                                                data-keydownable="1"
                                                                                                                data-keyupable="1"
                                                                                                                data-changeable="1"
                                                                                                              >
                                                                                                                <div class="_1oi3">
                                                                                                                  Instagram
                                                                                                                  actor
                                                                                                                  ID
                                                                                                                  is
                                                                                                                  required:
                                                                                                                  Select
                                                                                                                  an
                                                                                                                  Instagram
                                                                                                                  account
                                                                                                                  to
                                                                                                                  display
                                                                                                                  this
                                                                                                                  preview.
                                                                                                                </div>
                                                                                                                <div>
                                                                                                                  <div class="x6s0dn4 x78zum5 xdt5ytf xozqiw3 x2lwn1j x1iyjqo2 xavht8x xw5ewwj x2ixbly xdj266r xkrivgy xat24cr x1gryazu">
                                                                                                                    <div class="x1gzqxud x1lq5wgf xgqcy7u x30kzoy x9jhf4c x1kmqopl x5yr21d xh8yej3">
                                                                                                                      <div class="x78zum5 xdt5ytf x5yr21d xedcshv x1t2pt76 xh8yej3">
                                                                                                                        <div class="x9f619 x78zum5 x1iyjqo2 x5yr21d x2lwn1j x1n2onr6 xh8yej3">
                                                                                                                          <div class="xw2csxc x1odjw0f xh8yej3 x18d9i69">
                                                                                                                            <div class="xjm9jq1 xg01cxk x47corl xh8yej3 x1jyxor1"></div>
                                                                                                                            <div
                                                                                                                              id="style-p6vAE"
                                                                                                                              class="style-p6vAE"
                                                                                                                            >
                                                                                                                              <div class="x9f619 x78zum5 xdt5ytf x1l7klhg x1iyjqo2 x5yr21d xyamay9 x1pi30zi x1l90r2v x1swvt13 x13faqbe">
                                                                                                                                <div class="x1cy8zhl x78zum5 xdt5ytf xozqiw3 x2lwn1j xeuugli xavht8x x1yztbdb x1iyjqo2">
                                                                                                                                  <div
                                                                                                                                    class="x3nfvp2 x120ccyz x746shc"
                                                                                                                                    role="presentation"
                                                                                                                                  >
                                                                                                                                    <div
                                                                                                                                      class="xtwfq29 style-SlVoI"
                                                                                                                                      id="style-SlVoI"
                                                                                                                                    ></div>
                                                                                                                                  </div>
                                                                                                                                  <div>
                                                                                                                                    <div class="xeuugli x12nagc">
                                                                                                                                      <div
                                                                                                                                        aria-level="3"
                                                                                                                                        class="x8t9es0 x1uxerd5 x1xlr1w8 xrohxju x4hq6eo xq9mrsl x1yc453h x1h4wwuj xeuugli"
                                                                                                                                        role="heading"
                                                                                                                                      >
                                                                                                                                        Instagram
                                                                                                                                        actor
                                                                                                                                        ID
                                                                                                                                        is
                                                                                                                                        required
                                                                                                                                      </div>
                                                                                                                                      <div class="x8t9es0 x1fvot60 xxio538 x4hq6eo xq9mrsl x1yc453h x1h4wwuj x1fcty0u xeuugli">
                                                                                                                                        {" "}
                                                                                                                                        Select
                                                                                                                                        an
                                                                                                                                        Instagram
                                                                                                                                        account
                                                                                                                                        to
                                                                                                                                        display
                                                                                                                                        this
                                                                                                                                        preview.
                                                                                                                                      </div>
                                                                                                                                    </div>
                                                                                                                                  </div>
                                                                                                                                </div>
                                                                                                                              </div>
                                                                                                                            </div>
                                                                                                                            <div class="xjm9jq1 xg01cxk x47corl xh8yej3 x1y332i5"></div>
                                                                                                                          </div>
                                                                                                                          <div class="x10wjd1d x47corl x10l6tqk x19991ni x13dflua xwji4o3 xh8yej3 x67dex8 x13vifvy x1hc1fzr"></div>
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
                                                                              <div class="xjm9jq1 xg01cxk x47corl xh8yej3 x1y332i5"></div>
                                                                            </div>
                                                                            <div class="x10wjd1d x47corl x10l6tqk x19991ni x13dflua xwji4o3 xh8yej3 x67dex8 x13vifvy x1hc1fzr"></div>
                                                                            <div class="x10wjd1d x47corl x10l6tqk x19991ni x13dflua xwji4o3 xh8yej3 x1ta9b4f x1ey2m1c x1hc1fzr"></div>
                                                                          </div>
                                                                        </div>
                                                                      </div>
                                                                    </div>
                                                                  </div>
                                                                </div>
                                                              </div>
                                                              <div class="">
                                                                <div class="">
                                                                  <div class="x3smdqs">
                                                                    <div class="x78zum5 x2lwn1j xeuugli xh8yej3">
                                                                      <div class="x78zum5 xdt5ytf x2lwn1j xamitd3 x1iyjqo2 xeuugli">
                                                                        <div class="x78zum5 x2lwn1j xeuugli xlshs6z">
                                                                          <div class="x78zum5 x2lwn1j xeuugli xamitd3 x2lah0s x1emribx">
                                                                            <div
                                                                              class="x3nfvp2 x120ccyz x4s1yf2"
                                                                              role="presentation"
                                                                            >
                                                                              <div
                                                                                class="xtwfq29 style-C6vSC"
                                                                                id="style-C6vSC"
                                                                              ></div>
                                                                            </div>
                                                                          </div>
                                                                          <div class="x6ikm8r x10wlt62 xlyipyv xh8yej3">
                                                                            <div class="xmi5d70 x1fvot60 xo1l8bm xxio538 xbsr9hj xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj xeuugli">
                                                                              Facebook
                                                                              Reels
                                                                            </div>
                                                                          </div>
                                                                        </div>
                                                                      </div>
                                                                      <div class="x78zum5 xdt5ytf x2lwn1j xeuugli xamitd3 x2lah0s">
                                                                        <div class="xlshs6z">
                                                                          <div
                                                                            class="x3oybdh xuxw1ft x1iknuni xw9jwym x1e2iszw xg0tal0 x1lliihq x1lcm9me x1yr5g0i xrt01vj x10y3i5r"
                                                                            role="group"
                                                                          >
                                                                            <div
                                                                              aria-busy="false"
                                                                              aria-controls="js_in"
                                                                              class="x1i10hfl xjqpnuy xa49m3k xqeqjp1 x2hbi6w x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli x16tdsg8 xggy1nq x1ja2u2z x6s0dn4 x1ejq31n xd10rxx x1sy0etr x17r0tee x3nfvp2 xdl72j9 x1q0g3np x2lah0s x193iq5w x1n2onr6 x1hl2dhg x87ps6o xxymvpz xlh3980 xvmahel x1lku1pv x1g40iwv x1lcm9me x1yr5g0i xrt01vj x10y3i5r x1ob88yx xaatb59 x1qgsegg xo1l8bm xbsr9hj x1v911su x1y1aw1k xwib8y2 x1ye3gou xn6708d style-VtGsT"
                                                                              role="button"
                                                                              tabindex="0"
                                                                              id="style-VtGsT"
                                                                            >
                                                                              <span class="xmi5d70 x1fvot60 xxio538 x1heor9g xq9mrsl x1h4wwuj x1pd3egz xeuugli xh8yej3">
                                                                                <div class="x78zum5">
                                                                                  <div
                                                                                    class="x1qvwoe0 xjm9jq1 x1y332i5 xcwd3tp x1jyxor1 x39eecv x6ikm8r x10wlt62 x10l6tqk xuxw1ft x1i1rx1s"
                                                                                    data-sscoverage-ignore="true"
                                                                                  >
                                                                                    More
                                                                                    items
                                                                                  </div>
                                                                                  <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1hc1fzr x13dflua x6o7n8i xxziih7 x12w9bfk xl56j7k xh8yej3">
                                                                                    <div
                                                                                      class="x3nfvp2 x120ccyz x1heor9g x2lah0s x1c4vz4f"
                                                                                      role="presentation"
                                                                                    >
                                                                                      <div
                                                                                        class="xtwfq29 style-K8AxP"
                                                                                        id="style-K8AxP"
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
                                                                    <div class="xw7yly9">
                                                                      <div
                                                                        class="x1gzqxud x1lcm9me x1yr5g0i xrt01vj x10y3i5r xhgxa4x xy5ysw6 x1qkj6lk xn3walq xnvurfn xv1ta3e x1opv7go x1dtnpoi xibdhds xtnng9g xhvrwov x13k1m86 xwx4but x1cpjm7i xszcg87 x1hmns74 xkk1bqk x14d4353 xsxiz9q x1rmj1tg xchklzq x9f619 xc8icb0 x1n2onr6 x1pvq41x xhhp2wi x14q35kh x1wa3ocq x1n7iyjn x1s928wv x1wsn0xg x1j6awrg x162n7g1 x1m1drc7 x4eaejv xi4xitw x5yr21d xh8yej3"
                                                                        data-auto-logging-component-type="GeoCard"
                                                                      >
                                                                        <div class="x78zum5 xdt5ytf x5yr21d xedcshv x1t2pt76 xh8yej3">
                                                                          <div class="x9f619 x78zum5 x1iyjqo2 x5yr21d x2lwn1j x1n2onr6 xh8yej3">
                                                                            <div class="xw2csxc x1odjw0f xh8yej3 x18d9i69">
                                                                              <div class="xjm9jq1 xg01cxk x47corl xh8yej3 x1jyxor1"></div>
                                                                              <div class="x6s0dn4 x78zum5 xdt5ytf xl56j7k x2lwn1j xeuugli xgx9qek x1lq5wgf xgqcy7u x30kzoy x9jhf4c x6ikm8r x10wlt62 x1n2onr6 x15b6uid x3smdqs">
                                                                                <div>
                                                                                  <div>
                                                                                    <div class="_89mx">
                                                                                      <div class="_4u-c">
                                                                                        <div
                                                                                          id="style-Ucglt"
                                                                                          class="style-Ucglt"
                                                                                        >
                                                                                          <div class="">
                                                                                            <div>
                                                                                              <div class="_5zg">
                                                                                                <div class="_7vpk">
                                                                                                  <div class=" _831c">
                                                                                                    <div class="_91kv">
                                                                                                      <div>
                                                                                                        <div class="">
                                                                                                          <div
                                                                                                            class="_ag3c _228q"
                                                                                                            id="f09010bf8938c2d23"
                                                                                                          >
                                                                                                            <div
                                                                                                              class="hidden_elem"
                                                                                                              id="f09010bf8938c2d23-1"
                                                                                                            ></div>
                                                                                                            <div
                                                                                                              class=""
                                                                                                              id="f09010bf8938c2d23-2"
                                                                                                              data-ad-preview="previewContainer"
                                                                                                            >
                                                                                                              <div
                                                                                                                data-clickable="1"
                                                                                                                data-inputable="1"
                                                                                                                data-keydownable="1"
                                                                                                                data-keyupable="1"
                                                                                                                data-changeable="1"
                                                                                                              >
                                                                                                                <div class="x1m258z3 x1yc453h xdj266r xkrivgy xat24cr x1gryazu x6ikm8r x10wlt62 x47corl x87ps6o">
                                                                                                                  <div class="_2qhi">
                                                                                                                    <div
                                                                                                                      class="xs7ag91 xjnjwiz x6ikm8r x10wlt62 style-6Uiqb"
                                                                                                                      id="style-6Uiqb"
                                                                                                                    >
                                                                                                                      <div class="x1m258z3 x1yc453h xdj266r xkrivgy xat24cr x1gryazu x6ikm8r x10wlt62 x47corl x87ps6o">
                                                                                                                        <div
                                                                                                                          class="x1n2onr6 x1ja2u2z style-nogeb"
                                                                                                                          id="style-nogeb"
                                                                                                                        >
                                                                                                                          <div class="x1n2onr6">
                                                                                                                            <div class="x10l6tqk x178xt8z x13fuv20 xqvba61 x1m258z3 x1vjfegm x17qophe x13vifvy x5vaii"></div>
                                                                                                                            <div
                                                                                                                              class="x1n2onr6"
                                                                                                                              data-ad-preview="image-container"
                                                                                                                              data-react-ad-preview="image-container"
                                                                                                                            >
                                                                                                                              <img
                                                                                                                                class="x1lliihq x193iq5w img"
                                                                                                                                data-ad-preview="image"
                                                                                                                                data-react-ad-preview="image"
                                                                                                                                height="317.6236686390533"
                                                                                                                                src="https://scontent.flhe11-1.fna.fbcdn.net/v/t45.1600-4/436307494_120210079407570644_381994830417011904_n.jpg?stp=cp0_dst-jpg_fr_q75_spS444&amp;_nc_cat=111&amp;ccb=1-7&amp;_nc_sid=5f2048&amp;_nc_eui2=AeHdhX1m5CVT0M_wJWCI6V-E39No7K5H_8zf02jsrkf_zJerQfTLQCwYl5zClSSv9UlIBJ7FGdHlVDTRi5NCkmNg&amp;_nc_ohc=1H2Comuj-w8Q7kNvgF7cp2H&amp;_nc_ht=scontent.flhe11-1.fna&amp;oh=00_AYAuRGiYHKLeDMVWWdIVqTMZJwA0ohlNR5ITA6938ndf8g&amp;oe=664EA810"
                                                                                                                                width="318"
                                                                                                                                alt=""
                                                                                                                              />
                                                                                                                            </div>
                                                                                                                          </div>
                                                                                                                        </div>
                                                                                                                      </div>
                                                                                                                      <div>
                                                                                                                        <img
                                                                                                                          src="https://adsmanager.facebook.com/images/ads/preview/reels-gradient-top.png"
                                                                                                                          alt=""
                                                                                                                          class="img style-KSmaZ"
                                                                                                                          id="style-KSmaZ"
                                                                                                                        />
                                                                                                                        <img
                                                                                                                          src="https://adsmanager.facebook.com/images/ads/preview/reels-gradient-bottom.png"
                                                                                                                          alt=""
                                                                                                                          class="img style-f7vZn"
                                                                                                                          id="style-f7vZn"
                                                                                                                        />
                                                                                                                      </div>
                                                                                                                      <div class="xhtitgo x10l6tqk xqo3gd x160vmok x14qfxbe">
                                                                                                                        <div class="x1gnnpzl x1849jeq x1o8cbga xhtitgo x1n2onr6 x1ykpwxx x118zf8b xnwxkdh xfocsrx xat24cr x1mnrxsn">
                                                                                                                          <div class="x78zum5 x2lwn1j xeuugli">
                                                                                                                            <i
                                                                                                                              alt=""
                                                                                                                              data-visualcompletion="css-img"
                                                                                                                              class="img style-U9EeD"
                                                                                                                              id="style-U9EeD"
                                                                                                                            ></i>
                                                                                                                          </div>
                                                                                                                        </div>
                                                                                                                        <div class="xhtitgo x1n2onr6 xod5an3 x2b8uid xlup9mm x117nqv4">
                                                                                                                          <div class="x8t9es0 xw23nyj x63nzvj x140t73q xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj x117nqv4 xeuugli">
                                                                                                                            1
                                                                                                                          </div>
                                                                                                                        </div>
                                                                                                                        <div class="x1gnnpzl x1849jeq x1o8cbga xhtitgo x1n2onr6 x1ykpwxx x118zf8b xnwxkdh xfocsrx xat24cr x1mnrxsn">
                                                                                                                          <div class="x78zum5 x2lwn1j xeuugli">
                                                                                                                            <i
                                                                                                                              alt=""
                                                                                                                              data-visualcompletion="css-img"
                                                                                                                              class="img style-PbWSb"
                                                                                                                              id="style-PbWSb"
                                                                                                                            ></i>
                                                                                                                          </div>
                                                                                                                        </div>
                                                                                                                        <div class="xhtitgo x1n2onr6 xod5an3 x2b8uid xlup9mm x117nqv4">
                                                                                                                          <div class="x8t9es0 xw23nyj x63nzvj x140t73q xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj x117nqv4 xeuugli">
                                                                                                                            1
                                                                                                                          </div>
                                                                                                                        </div>
                                                                                                                        <div class="x1gnnpzl x1849jeq x1o8cbga xhtitgo x1n2onr6 x1ykpwxx x118zf8b xnwxkdh xfocsrx xat24cr x1mnrxsn">
                                                                                                                          <div class="x78zum5 x2lwn1j xeuugli">
                                                                                                                            <i
                                                                                                                              alt=""
                                                                                                                              data-visualcompletion="css-img"
                                                                                                                              class="img style-OaBB5"
                                                                                                                              id="style-OaBB5"
                                                                                                                            ></i>
                                                                                                                          </div>
                                                                                                                        </div>
                                                                                                                        <div class="xhtitgo x1n2onr6 xzueoph x2b8uid xdk7pt">
                                                                                                                          <div class="x8t9es0 xw23nyj xo1l8bm x63nzvj x140t73q xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj xeuugli"></div>
                                                                                                                        </div>
                                                                                                                        <div class="x1gnnpzl x1849jeq x1o8cbga xhtitgo x1n2onr6 x1ykpwxx x118zf8b xnwxkdh xfocsrx xat24cr x1mnrxsn">
                                                                                                                          <div class="x78zum5 x2lwn1j xeuugli">
                                                                                                                            <i
                                                                                                                              alt=""
                                                                                                                              data-visualcompletion="css-img"
                                                                                                                              class="img style-DSCa3"
                                                                                                                              id="style-DSCa3"
                                                                                                                            ></i>
                                                                                                                          </div>
                                                                                                                        </div>
                                                                                                                      </div>
                                                                                                                      <div class="xhtitgo x10l6tqk x16q8cke x1jn9clo xqyf9gi">
                                                                                                                        <div class="x1n2onr6 xhtitgo xzueoph">
                                                                                                                          <div class="x78zum5 xqyf9gi x6s0dn4">
                                                                                                                            <img
                                                                                                                              class="xnwf7zb x40j3uw x1s7lred x15gyhx8 x78zum5 x1gnnpzl x1849jeq img"
                                                                                                                              src="https://i.postimg.cc/jqBmLCXY/VC.jpg"
                                                                                                                              alt=""
                                                                                                                            />
                                                                                                                            <div>
                                                                                                                              <div class="x1awj2ng xbgbqzg x18krheo">
                                                                                                                                <div
                                                                                                                                  class="x78zum5 xdt5ytf x1l1ennw xsgj6o6 x1f6kntn x1kgmq87 xmgb6t1 _4ik4 _4ik5 style-vCfCo"
                                                                                                                                  id="style-vCfCo"
                                                                                                                                >
                                                                                                                                  <span>
                                                                                                                                    Valentino
                                                                                                                                    Technologies
                                                                                                                                  </span>
                                                                                                                                  &nbsp;
                                                                                                                                  <img
                                                                                                                                    src="https://adsmanager.facebook.com/images/mobile/privacy/wordmark/everyone.png"
                                                                                                                                    alt=""
                                                                                                                                    class="img"
                                                                                                                                  />
                                                                                                                                </div>
                                                                                                                              </div>
                                                                                                                            </div>
                                                                                                                          </div>
                                                                                                                        </div>
                                                                                                                        <div></div>
                                                                                                                        <div class="x1n2onr6 xhtitgo xqyf9gi xr9ek0c">
                                                                                                                          <div
                                                                                                                            class="x5a26a2 x1f6kntn x18krheo x12nagc x1vvkbs"
                                                                                                                            data-ad-preview="message"
                                                                                                                            data-react-ad-preview="message"
                                                                                                                            dir=""
                                                                                                                          >
                                                                                                                            <div
                                                                                                                              id="style-9XPpP"
                                                                                                                              class="style-9XPpP"
                                                                                                                            >
                                                                                                                              <div
                                                                                                                                class="_4ik4 clearfix style-LAzdt"
                                                                                                                                id="style-LAzdt"
                                                                                                                              >
                                                                                                                                <div class="_1osu"></div>
                                                                                                                                <div class="_1osq">
                                                                                                                                  <a
                                                                                                                                    class="x5a26a2 x67bb7w x1f6kntn x18krheo x1vvkbs"
                                                                                                                                    href="#"
                                                                                                                                  >
                                                                                                                                    …more
                                                                                                                                  </a>
                                                                                                                                </div>
                                                                                                                                <div class="_1osv">
                                                                                                                                  <div>
                                                                                                                                    <span>
                                                                                                                                      <span>
                                                                                                                                        We
                                                                                                                                        help
                                                                                                                                        people
                                                                                                                                        to
                                                                                                                                        live
                                                                                                                                        a
                                                                                                                                        better
                                                                                                                                        life
                                                                                                                                        through
                                                                                                                                        technological
                                                                                                                                        home
                                                                                                                                        services.
                                                                                                                                      </span>
                                                                                                                                    </span>
                                                                                                                                  </div>
                                                                                                                                </div>
                                                                                                                              </div>
                                                                                                                            </div>
                                                                                                                          </div>
                                                                                                                        </div>
                                                                                                                        <div
                                                                                                                          class="xoegz02 x1n2onr6 x8u2fvd x1ht7hnu x1quq95r x5yzy4c xqyf9gi x90ne7k x2b8uid x14vqqas style-CvQqb"
                                                                                                                          id="style-CvQqb"
                                                                                                                        >
                                                                                                                          <div
                                                                                                                            class="x3nfvp2 x193iq5w xxymvpz"
                                                                                                                            role="none"
                                                                                                                          >
                                                                                                                            <div
                                                                                                                              aria-busy="false"
                                                                                                                              class="x1i10hfl xjqpnuy xa49m3k xqeqjp1 x2hbi6w x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli x16tdsg8 xggy1nq x1ja2u2z x1t137rt x6s0dn4 x1ejq31n xd10rxx x1sy0etr x17r0tee x3nfvp2 xdl72j9 x1q0g3np x2lah0s x193iq5w x1n2onr6 x1hl2dhg x87ps6o xxymvpz xlh3980 xvmahel x1lku1pv xhk9q7s x1otrzb0 x1i1ezom x1o6z2jb xo1l8bm x108nfp6 x1v911su x1y1aw1k xwib8y2 x1swvt13 x1pi30zi"
                                                                                                                              role="button"
                                                                                                                              tabindex="0"
                                                                                                                            >
                                                                                                                              <span class="x8t9es0 x1fvot60 xxio538 x1heor9g xq9mrsl x1h4wwuj x1pd3egz xeuugli xh8yej3">
                                                                                                                                <div class="x78zum5">
                                                                                                                                  <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1hc1fzr x13dflua x6o7n8i xxziih7 x12w9bfk xl56j7k xh8yej3">
                                                                                                                                    <div class="x8t9es0 x1fvot60 xxio538 x1heor9g xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj x1pd3egz xeuugli">
                                                                                                                                      Learn
                                                                                                                                      more
                                                                                                                                    </div>
                                                                                                                                  </div>
                                                                                                                                </div>
                                                                                                                              </span>
                                                                                                                            </div>
                                                                                                                          </div>
                                                                                                                        </div>
                                                                                                                        <div class="x1anpbxc x1eu8d0j xoyjkpr xg32yw2 x1pg5gke x3nfvp2 x6s0dn4 xl56j7k x1iorvi4 xjkvuk6 x1sln4lm x1iji9kk xnwf7zb x40j3uw x1s7lred x15gyhx8 xjc76 xkvag0v">
                                                                                                                          <span>
                                                                                                                            Sponsored
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
                                                              </div>
                                                              <div class="">
                                                                <div class="">
                                                                  <div class="x3smdqs">
                                                                    <div class="x78zum5 x2lwn1j xeuugli xh8yej3">
                                                                      <div class="x78zum5 xdt5ytf x2lwn1j xamitd3 x1iyjqo2 xeuugli">
                                                                        <div class="x78zum5 x2lwn1j xeuugli xlshs6z">
                                                                          <div class="x78zum5 x2lwn1j xeuugli xamitd3 x2lah0s x1emribx">
                                                                            <div
                                                                              class="x3nfvp2 x120ccyz x4s1yf2"
                                                                              role="presentation"
                                                                            >
                                                                              <div
                                                                                class="xtwfq29 style-A4Syv"
                                                                                id="style-A4Syv"
                                                                              ></div>
                                                                            </div>
                                                                          </div>
                                                                          <div class="x6ikm8r x10wlt62 xlyipyv xh8yej3">
                                                                            <div class="xmi5d70 x1fvot60 xo1l8bm xxio538 xbsr9hj xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj xeuugli">
                                                                              Ads
                                                                              on
                                                                              Facebook
                                                                              Reels
                                                                            </div>
                                                                          </div>
                                                                        </div>
                                                                      </div>
                                                                      <div class="x78zum5 xdt5ytf x2lwn1j xeuugli xamitd3 x2lah0s">
                                                                        <div class="xlshs6z">
                                                                          <div
                                                                            class="x3oybdh xuxw1ft x1iknuni xw9jwym x1e2iszw xg0tal0 x1lliihq x1lcm9me x1yr5g0i xrt01vj x10y3i5r"
                                                                            role="group"
                                                                          >
                                                                            <div
                                                                              aria-busy="false"
                                                                              aria-controls="js_k1"
                                                                              class="x1i10hfl xjqpnuy xa49m3k xqeqjp1 x2hbi6w x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli x16tdsg8 xggy1nq x1ja2u2z x6s0dn4 x1ejq31n xd10rxx x1sy0etr x17r0tee x3nfvp2 xdl72j9 x1q0g3np x2lah0s x193iq5w x1n2onr6 x1hl2dhg x87ps6o xxymvpz xlh3980 xvmahel x1lku1pv x1g40iwv x1lcm9me x1yr5g0i xrt01vj x10y3i5r x1ob88yx xaatb59 x1qgsegg xo1l8bm xbsr9hj x1v911su x1y1aw1k xwib8y2 x1ye3gou xn6708d style-FoA2w"
                                                                              role="button"
                                                                              tabindex="0"
                                                                              id="style-FoA2w"
                                                                            >
                                                                              <span class="xmi5d70 x1fvot60 xxio538 x1heor9g xq9mrsl x1h4wwuj x1pd3egz xeuugli xh8yej3">
                                                                                <div class="x78zum5">
                                                                                  <div
                                                                                    class="x1qvwoe0 xjm9jq1 x1y332i5 xcwd3tp x1jyxor1 x39eecv x6ikm8r x10wlt62 x10l6tqk xuxw1ft x1i1rx1s"
                                                                                    data-sscoverage-ignore="true"
                                                                                  >
                                                                                    More
                                                                                    items
                                                                                  </div>
                                                                                  <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1hc1fzr x13dflua x6o7n8i xxziih7 x12w9bfk xl56j7k xh8yej3">
                                                                                    <div
                                                                                      class="x3nfvp2 x120ccyz x1heor9g x2lah0s x1c4vz4f"
                                                                                      role="presentation"
                                                                                    >
                                                                                      <div
                                                                                        class="xtwfq29 style-LKfd1"
                                                                                        id="style-LKfd1"
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
                                                                    <div class="xw7yly9">
                                                                      <div
                                                                        class="x1gzqxud x1lcm9me x1yr5g0i xrt01vj x10y3i5r xhgxa4x xy5ysw6 x1qkj6lk xn3walq xnvurfn xv1ta3e x1opv7go x1dtnpoi xibdhds xtnng9g xhvrwov x13k1m86 xwx4but x1cpjm7i xszcg87 x1hmns74 xkk1bqk x14d4353 xsxiz9q x1rmj1tg xchklzq x9f619 xc8icb0 x1n2onr6 x1pvq41x xhhp2wi x14q35kh x1wa3ocq x1n7iyjn x1s928wv x1wsn0xg x1j6awrg x162n7g1 x1m1drc7 x4eaejv xi4xitw x5yr21d xh8yej3"
                                                                        data-auto-logging-component-type="GeoCard"
                                                                      >
                                                                        <div class="x78zum5 xdt5ytf x5yr21d xedcshv x1t2pt76 xh8yej3">
                                                                          <div class="x9f619 x78zum5 x1iyjqo2 x5yr21d x2lwn1j x1n2onr6 xh8yej3">
                                                                            <div class="xw2csxc x1odjw0f xh8yej3 x18d9i69">
                                                                              <div class="xjm9jq1 xg01cxk x47corl xh8yej3 x1jyxor1"></div>
                                                                              <div class="x6s0dn4 x78zum5 xdt5ytf xl56j7k x2lwn1j xeuugli xgx9qek x1lq5wgf xgqcy7u x30kzoy x9jhf4c x6ikm8r x10wlt62 x1n2onr6 x15b6uid x3smdqs">
                                                                                <div>
                                                                                  <div>
                                                                                    <div class="_89mx">
                                                                                      <div class="_4u-c">
                                                                                        <div
                                                                                          id="style-DsbiW"
                                                                                          class="style-DsbiW"
                                                                                        >
                                                                                          <div class="">
                                                                                            <div>
                                                                                              <div class="_5zg">
                                                                                                <div class="_7vpk">
                                                                                                  <div class=" _831c">
                                                                                                    <div class="_91kv">
                                                                                                      <div>
                                                                                                        <div class="">
                                                                                                          <div
                                                                                                            class="_ag3c _228q"
                                                                                                            id="fcf5befee0842c4e5"
                                                                                                          >
                                                                                                            <div
                                                                                                              class="hidden_elem"
                                                                                                              id="fcf5befee0842c4e5-1"
                                                                                                            ></div>
                                                                                                            <div
                                                                                                              class=""
                                                                                                              id="fcf5befee0842c4e5-2"
                                                                                                              data-ad-preview="previewContainer"
                                                                                                            >
                                                                                                              <div
                                                                                                                data-clickable="1"
                                                                                                                data-inputable="1"
                                                                                                                data-keydownable="1"
                                                                                                                data-keyupable="1"
                                                                                                                data-changeable="1"
                                                                                                              >
                                                                                                                <div class="x1m5cxtn x5vaii x1m258z3 x1yc453h xdj266r xkrivgy xat24cr x1gryazu x6ikm8r x10wlt62 x87ps6o x1n2onr6">
                                                                                                                  <div class="xh8yej3 xnfxvih x10l6tqk x13vifvy">
                                                                                                                    <div class="x1xmf6yo xktsk01 x78zum5 x15zctf7 x6s0dn4">
                                                                                                                      <div class="x1kndj5a x1vqgdyp x100vrsf x14yjl9h xudhj91 x18nykt9 xww2gxu x1i64zmx"></div>
                                                                                                                      <div class="x1kndj5a x1vqgdyp x100vrsf x14yjl9h xudhj91 x18nykt9 xww2gxu x1i64zmx"></div>
                                                                                                                    </div>
                                                                                                                  </div>
                                                                                                                  <div class="x10l6tqk x16q8cke x191j7n5">
                                                                                                                    <div class="xbu5dzu x1gb2em4 xix16p6 x1lq5wgf xgqcy7u x30kzoy x9jhf4c x78zum5 x1q0g3np x6s0dn4 x1qughib">
                                                                                                                      <div class="x6ikm8r x10wlt62 x1n2onr6 x2lah0s x78zum5 x6s0dn4 xl56j7k x1emribx">
                                                                                                                        <img
                                                                                                                          class="x1gb2em4 x13zx6y xa06r8k x1lq5wgf x13lgxp2 x5pf9jr x9jhf4c xl1xv1r img"
                                                                                                                          src="https://i.postimg.cc/jqBmLCXY/VC.jpg"
                                                                                                                          alt=""
                                                                                                                        />
                                                                                                                      </div>
                                                                                                                      <div class="x1n2onr6 x78zum5 xdt5ytf x7a106z xl56j7k xh8yej3 x1iyjqo2 xeuugli">
                                                                                                                        <div class="xh8yej3 x8yag65 xk50ysn x12nagc">
                                                                                                                          <div
                                                                                                                            class="x8t9es0 xw23nyj x63nzvj x1heor9g xq9mrsl x1h4wwuj x1pd3egz xeuugli x104kibb x6ikm8r x10wlt62 x1ua5tub style-143qi"
                                                                                                                            id="style-143qi"
                                                                                                                          >
                                                                                                                            solarpanelsystems.xyz
                                                                                                                            is
                                                                                                                            your
                                                                                                                            first
                                                                                                                            and
                                                                                                                            best
                                                                                                                            source
                                                                                                                            for
                                                                                                                            all
                                                                                                                            of
                                                                                                                            the
                                                                                                                            information
                                                                                                                            you’re
                                                                                                                            looking
                                                                                                                            for.
                                                                                                                            From
                                                                                                                            general
                                                                                                                            topics
                                                                                                                            to
                                                                                                                            more
                                                                                                                            of
                                                                                                                            what
                                                                                                                            you
                                                                                                                            would
                                                                                                                            expect
                                                                                                                            to
                                                                                                                            find
                                                                                                                            here,
                                                                                                                            solarpanelsystems.xyz
                                                                                                                            has
                                                                                                                            it
                                                                                                                            all.
                                                                                                                            We
                                                                                                                            hope
                                                                                                                            you
                                                                                                                            find
                                                                                                                            what
                                                                                                                            you
                                                                                                                            are
                                                                                                                            searching
                                                                                                                            for!
                                                                                                                          </div>
                                                                                                                        </div>
                                                                                                                        <div class="x78zum5 x1q0g3np xh8yej3 xpqajaz x1nhvcw1 xttq42n">
                                                                                                                          <div class="xeuugli">
                                                                                                                            <div
                                                                                                                              class="x8t9es0 xw23nyj x63nzvj x1heor9g x1h4wwuj x1pd3egz xeuugli x6ikm8r x10wlt62 xlyipyv xuxw1ft style-dXnX2"
                                                                                                                              id="style-dXnX2"
                                                                                                                            >
                                                                                                                              Valentino
                                                                                                                              Technologies
                                                                                                                            </div>
                                                                                                                          </div>
                                                                                                                          <div class="x78zum5 xdt5ytf xl56j7k xsgj6o6 xw3qccf">
                                                                                                                            <div class="x8t9es0 xw23nyj xo1l8bm x63nzvj x1heor9g xq9mrsl x1h4wwuj xeuugli">
                                                                                                                              •
                                                                                                                            </div>
                                                                                                                          </div>
                                                                                                                          <div class="x2lah0s">
                                                                                                                            <div class="x8t9es0 xw23nyj xo1l8bm x63nzvj x1heor9g xq9mrsl x1h4wwuj xeuugli">
                                                                                                                              Sponsored
                                                                                                                            </div>
                                                                                                                          </div>
                                                                                                                        </div>
                                                                                                                      </div>
                                                                                                                      <div class="xdt5ytf x17adc0v xmo9yow x1y1aw1k xwib8y2">
                                                                                                                        <div class="xlup9mm x1kky2od xieb3on">
                                                                                                                          <i
                                                                                                                            alt=""
                                                                                                                            data-visualcompletion="css-img"
                                                                                                                            class="img style-MNkR3"
                                                                                                                            id="style-MNkR3"
                                                                                                                          ></i>
                                                                                                                        </div>
                                                                                                                        <div class="xlup9mm x1kky2od">
                                                                                                                          <i
                                                                                                                            alt=""
                                                                                                                            data-visualcompletion="css-img"
                                                                                                                            class="img style-ZH6ox"
                                                                                                                            id="style-ZH6ox"
                                                                                                                          ></i>
                                                                                                                        </div>
                                                                                                                      </div>
                                                                                                                    </div>
                                                                                                                  </div>
                                                                                                                  <div class="x10l6tqk x1m258z3 xxzp1fc">
                                                                                                                    <div>
                                                                                                                      <div class="xw7yly9 xkrivgy x1yztbdb x1gryazu x78zum5 xdt5ytf">
                                                                                                                        <div class="x1e56ztr x1d52u69 x18qqrc1 x78zum5 x1q0g3np x6s0dn4">
                                                                                                                          <div class="x1kndj5a x1vqgdyp x100vrsf x14yjl9h xudhj91 x18nykt9 xww2gxu"></div>
                                                                                                                          <div class="x78zum5 xdt5ytf x1i64zmx">
                                                                                                                            <div class="xyj3jqc xdk7pt xtr3u6l xdxvlk3 x1fglp x1rp6h8o xg6i1s1"></div>
                                                                                                                            <div class="xyj3jqc xdk7pt x1a3yozo xdxvlk3 x1fglp x1rp6h8o xg6i1s1 x1ok221b"></div>
                                                                                                                          </div>
                                                                                                                        </div>
                                                                                                                        <div class="xod5an3">
                                                                                                                          <div class="xyj3jqc xdk7pt xy2penl xdxvlk3 x1fglp x1rp6h8o xg6i1s1 x1xmf6yo x1d52u69 xktsk01"></div>
                                                                                                                          <div class="xyj3jqc xdk7pt xy2penl xdxvlk3 x1fglp x1rp6h8o xg6i1s1 x1xmf6yo x1d52u69 xktsk01"></div>
                                                                                                                        </div>
                                                                                                                        <div class="x18qqrc1 x78zum5 x1q0g3np">
                                                                                                                          <div class="x6xnfjs x1vqgdyp x1exxlbk xdxvlk3 x1fglp x1rp6h8o xg6i1s1 x1d52u69"></div>
                                                                                                                          <div class="xqp6zf2 x1vqgdyp xygnafs xdxvlk3 x1fglp x1rp6h8o xg6i1s1 x16n37ib"></div>
                                                                                                                        </div>
                                                                                                                      </div>
                                                                                                                    </div>
                                                                                                                    <div class="x12bdpze xh8yej3 x10l6tqk x1ey2m1c x1yztbdb">
                                                                                                                      <div class="x78zum5 x3ieub6 xuk3077 xktsk01">
                                                                                                                        <div class="x1kndj5a x1vqgdyp x100vrsf x14yjl9h xudhj91 x18nykt9 xww2gxu x1yztbdb"></div>
                                                                                                                        <div class="x1kndj5a x1vqgdyp x100vrsf x14yjl9h xudhj91 x18nykt9 xww2gxu x1yztbdb"></div>
                                                                                                                        <div class="x1kndj5a x1vqgdyp x100vrsf x14yjl9h xudhj91 x18nykt9 xww2gxu x1yztbdb"></div>
                                                                                                                        <div class="x1kndj5a x1vqgdyp x100vrsf x14yjl9h xudhj91 x18nykt9 xww2gxu x1yztbdb"></div>
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
                                                              </div>
                                                              <div class="">
                                                                <div class="">
                                                                  <div class="x3smdqs">
                                                                    <div class="x78zum5 x2lwn1j xeuugli xh8yej3">
                                                                      <div class="x78zum5 xdt5ytf x2lwn1j xamitd3 x1iyjqo2 xeuugli">
                                                                        <div class="x78zum5 x2lwn1j xeuugli xlshs6z">
                                                                          <div class="x78zum5 x2lwn1j xeuugli xamitd3 x2lah0s x1emribx">
                                                                            <div
                                                                              class="x3nfvp2 x120ccyz x4s1yf2"
                                                                              role="presentation"
                                                                            >
                                                                              <div
                                                                                class="xtwfq29 style-NyHFa"
                                                                                id="style-NyHFa"
                                                                              ></div>
                                                                            </div>
                                                                          </div>
                                                                          <div class="x6ikm8r x10wlt62 xlyipyv xh8yej3">
                                                                            <div class="xmi5d70 x1fvot60 xo1l8bm xxio538 xbsr9hj xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj xeuugli">
                                                                              Facebook
                                                                              profile
                                                                              feed
                                                                            </div>
                                                                          </div>
                                                                        </div>
                                                                      </div>
                                                                      <div class="x78zum5 xdt5ytf x2lwn1j xeuugli xamitd3 x2lah0s">
                                                                        <div class="xlshs6z">
                                                                          <div
                                                                            class="x3oybdh xuxw1ft x1iknuni xw9jwym x1e2iszw xg0tal0 x1lliihq x1lcm9me x1yr5g0i xrt01vj x10y3i5r"
                                                                            role="group"
                                                                          >
                                                                            <div
                                                                              aria-busy="false"
                                                                              aria-controls="js_km"
                                                                              class="x1i10hfl xjqpnuy xa49m3k xqeqjp1 x2hbi6w x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli x16tdsg8 xggy1nq x1ja2u2z x6s0dn4 x1ejq31n xd10rxx x1sy0etr x17r0tee x3nfvp2 xdl72j9 x1q0g3np x2lah0s x193iq5w x1n2onr6 x1hl2dhg x87ps6o xxymvpz xlh3980 xvmahel x1lku1pv x1g40iwv x1lcm9me x1yr5g0i xrt01vj x10y3i5r x1ob88yx xaatb59 x1qgsegg xo1l8bm xbsr9hj x1v911su x1y1aw1k xwib8y2 x1ye3gou xn6708d style-eo1x8"
                                                                              role="button"
                                                                              tabindex="0"
                                                                              id="style-eo1x8"
                                                                            >
                                                                              <span class="xmi5d70 x1fvot60 xxio538 x1heor9g xq9mrsl x1h4wwuj x1pd3egz xeuugli xh8yej3">
                                                                                <div class="x78zum5">
                                                                                  <div
                                                                                    class="x1qvwoe0 xjm9jq1 x1y332i5 xcwd3tp x1jyxor1 x39eecv x6ikm8r x10wlt62 x10l6tqk xuxw1ft x1i1rx1s"
                                                                                    data-sscoverage-ignore="true"
                                                                                  >
                                                                                    More
                                                                                    items
                                                                                  </div>
                                                                                  <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1hc1fzr x13dflua x6o7n8i xxziih7 x12w9bfk xl56j7k xh8yej3">
                                                                                    <div
                                                                                      class="x3nfvp2 x120ccyz x1heor9g x2lah0s x1c4vz4f"
                                                                                      role="presentation"
                                                                                    >
                                                                                      <div
                                                                                        class="xtwfq29 style-lpznH"
                                                                                        id="style-lpznH"
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
                                                                    <div class="xw7yly9">
                                                                      <div
                                                                        class="x1gzqxud x1lcm9me x1yr5g0i xrt01vj x10y3i5r xhgxa4x xy5ysw6 x1qkj6lk xn3walq xnvurfn xv1ta3e x1opv7go x1dtnpoi xibdhds xtnng9g xhvrwov x13k1m86 xwx4but x1cpjm7i xszcg87 x1hmns74 xkk1bqk x14d4353 xsxiz9q x1rmj1tg xchklzq x9f619 xc8icb0 x1n2onr6 x1pvq41x xhhp2wi x14q35kh x1wa3ocq x1n7iyjn x1s928wv x1wsn0xg x1j6awrg x162n7g1 x1m1drc7 x4eaejv xi4xitw x5yr21d xh8yej3"
                                                                        data-auto-logging-component-type="GeoCard"
                                                                      >
                                                                        <div class="x78zum5 xdt5ytf x5yr21d xedcshv x1t2pt76 xh8yej3">
                                                                          <div class="x9f619 x78zum5 x1iyjqo2 x5yr21d x2lwn1j x1n2onr6 xh8yej3">
                                                                            <div class="xw2csxc x1odjw0f xh8yej3 x18d9i69">
                                                                              <div class="xjm9jq1 xg01cxk x47corl xh8yej3 x1jyxor1"></div>
                                                                              <div class="x6s0dn4 x78zum5 xdt5ytf xl56j7k x2lwn1j xeuugli xgx9qek x1lq5wgf xgqcy7u x30kzoy x9jhf4c x6ikm8r x10wlt62 x1n2onr6 x15b6uid x3smdqs">
                                                                                <div>
                                                                                  <div>
                                                                                    <div class="_89mx">
                                                                                      <div class="_4u-c">
                                                                                        <div
                                                                                          id="style-edISk"
                                                                                          class="style-edISk"
                                                                                        >
                                                                                          <div class="">
                                                                                            <div>
                                                                                              <div class="_5zg">
                                                                                                <div class="_7vpk">
                                                                                                  <div class=" _831c">
                                                                                                    <div class="_91kv">
                                                                                                      <div>
                                                                                                        <div class="">
                                                                                                          <div
                                                                                                            class="_ag3c _228q"
                                                                                                            id="f14e8ffdda7810188"
                                                                                                          >
                                                                                                            <div
                                                                                                              class="hidden_elem"
                                                                                                              id="f14e8ffdda7810188-1"
                                                                                                            ></div>
                                                                                                            <div
                                                                                                              class=""
                                                                                                              id="f14e8ffdda7810188-2"
                                                                                                              data-ad-preview="previewContainer"
                                                                                                            >
                                                                                                              <div
                                                                                                                data-testid="ad-preview-mobile-feed-standard"
                                                                                                                data-react-ad-preview="reactPreviewContainer"
                                                                                                                data-clickable="1"
                                                                                                                data-inputable="1"
                                                                                                                data-keydownable="1"
                                                                                                                data-keyupable="1"
                                                                                                                data-changeable="1"
                                                                                                              >
                                                                                                                <div class="x2izyaf x1m258z3 x1yc453h xdj266r xkrivgy xat24cr x1gryazu xw2csxc x1odjw0f x47corl x87ps6o">
                                                                                                                  <div class="x78zum5 xdj266r x11i5rnm xod5an3 x1mh8g0r x889kno x1iji9kk x18d9i69 x1sln4lm x1cy8zhl">
                                                                                                                    <div class="x78zum5 x16dsc37 x1sxyh0">
                                                                                                                      <img
                                                                                                                        class="x14yjl9h xudhj91 x18nykt9 xww2gxu x100vrsf x1vqgdyp x3ajldb img"
                                                                                                                        src="https://i.postimg.cc/jqBmLCXY/VC.jpg"
                                                                                                                        alt=""
                                                                                                                      />
                                                                                                                    </div>
                                                                                                                    <div class="x78zum5 xamitd3">
                                                                                                                      <div class="x78zum5 xdt5ytf xamitd3 x1ajhdc7 xh8yej3">
                                                                                                                        <div>
                                                                                                                          <span class="x1fzdab9 x1f6kntn xuy8w9f">
                                                                                                                            <span class="x1xlr1w8">
                                                                                                                              Valentino
                                                                                                                              Technologies
                                                                                                                            </span>
                                                                                                                          </span>
                                                                                                                        </div>
                                                                                                                        <div class="x1hjcb3a x1pg5gke x9438zm x1n2onr6 x17ocude xt0psk2">
                                                                                                                          <div class="xt0psk2">
                                                                                                                            Sponsored
                                                                                                                          </div>{" "}
                                                                                                                          ·{" "}
                                                                                                                          <div class="xt0psk2">
                                                                                                                            Not
                                                                                                                            connected
                                                                                                                            to
                                                                                                                            Kai
                                                                                                                            Blue
                                                                                                                          </div>{" "}
                                                                                                                          ·{" "}
                                                                                                                          <img
                                                                                                                            src="https://adsmanager.facebook.com/images/mobile/privacy/wordmark/everyone.png"
                                                                                                                            alt=""
                                                                                                                            class="img"
                                                                                                                          />
                                                                                                                        </div>
                                                                                                                      </div>
                                                                                                                      <div class="x78zum5 x1q0g3np x1gfops9 xh8yej3 x13a6bvl">
                                                                                                                        <i
                                                                                                                          class="xamitd3 img style-l8TZr"
                                                                                                                          alt=""
                                                                                                                          data-visualcompletion="css-img"
                                                                                                                          id="style-l8TZr"
                                                                                                                        ></i>
                                                                                                                        <i
                                                                                                                          class="x1d52u69 xamitd3 img style-tb9rg"
                                                                                                                          alt=""
                                                                                                                          data-visualcompletion="css-img"
                                                                                                                          id="style-tb9rg"
                                                                                                                        ></i>
                                                                                                                      </div>
                                                                                                                    </div>
                                                                                                                  </div>
                                                                                                                  <div class="x1xmf6yo x11i5rnm x1e56ztr x1mh8g0r xexx8yu x1iji9kk x18d9i69 x1sln4lm _3qn7 _61-0 _2fyh _1a9e">
                                                                                                                    <div
                                                                                                                      class="xogfrqt x1f6kntn xd4r4e8 x1vvkbs"
                                                                                                                      data-ad-preview="message"
                                                                                                                      data-react-ad-preview="message"
                                                                                                                    >
                                                                                                                      <div>
                                                                                                                        <div
                                                                                                                          class=""
                                                                                                                          dir=""
                                                                                                                        >
                                                                                                                          <span>
                                                                                                                            <span>
                                                                                                                              We
                                                                                                                              help
                                                                                                                              people
                                                                                                                              to
                                                                                                                              live
                                                                                                                              a
                                                                                                                              better
                                                                                                                              life
                                                                                                                              through
                                                                                                                              technological
                                                                                                                              home
                                                                                                                              services.
                                                                                                                            </span>
                                                                                                                            <br />
                                                                                                                          </span>
                                                                                                                        </div>
                                                                                                                      </div>
                                                                                                                    </div>
                                                                                                                  </div>
                                                                                                                  <div class="x1n2onr6 x1ja2u2z x1m258z3 x1e56ztr">
                                                                                                                    <div class="x1n2onr6">
                                                                                                                      <div class="x10l6tqk x178xt8z x13fuv20 xqvba61 x1m258z3 x1vjfegm x17qophe x13vifvy"></div>
                                                                                                                      <div
                                                                                                                        class="x1n2onr6"
                                                                                                                        data-ad-preview="image-container"
                                                                                                                        data-react-ad-preview="image-container"
                                                                                                                      >
                                                                                                                        <img
                                                                                                                          class="x1lliihq x193iq5w img"
                                                                                                                          data-ad-preview="image"
                                                                                                                          data-react-ad-preview="image"
                                                                                                                          height="319"
                                                                                                                          src={
                                                                                                                            campaign?.campaingImage
                                                                                                                          }
                                                                                                                          width="320"
                                                                                                                          alt=""
                                                                                                                        />
                                                                                                                      </div>
                                                                                                                      <div class="xz9dl7a xn6708d xsag5q8 x1ye3gou xz2iaq5 x1ba4aug _3qn7 _61-0 _2fyi _3qng">
                                                                                                                        <div
                                                                                                                          class="_6g3g x6ikm8r x10wlt62 x1vvkbs x1qughib x1jquxbb style-VVxdV"
                                                                                                                          id="style-VVxdV"
                                                                                                                        >
                                                                                                                          <div>
                                                                                                                            <div
                                                                                                                              class="xh8yej3 x1d3mw78"
                                                                                                                              data-ad-preview="display-link-container"
                                                                                                                            >
                                                                                                                              <span class="x1nxh6w3 x1kyqaxf _6i6a">
                                                                                                                                <span
                                                                                                                                  id="style-c5cW9"
                                                                                                                                  class="style-c5cW9"
                                                                                                                                >
                                                                                                                                  solarpanelsystems.xyz
                                                                                                                                </span>
                                                                                                                              </span>
                                                                                                                            </div>
                                                                                                                            <div class="xowg6hp">
                                                                                                                              <div>
                                                                                                                                <span
                                                                                                                                  class="xh8yej3 x1fc57z9 x6prxxf x117nqv4"
                                                                                                                                  data-ad-preview="headline"
                                                                                                                                  dir=""
                                                                                                                                >
                                                                                                                                  Valentino
                                                                                                                                  Technologies
                                                                                                                                </span>
                                                                                                                              </div>
                                                                                                                            </div>
                                                                                                                          </div>
                                                                                                                          <div
                                                                                                                            data-ad-preview="link-description"
                                                                                                                            dir=""
                                                                                                                            id="style-JPkpa"
                                                                                                                            class="style-JPkpa"
                                                                                                                          >
                                                                                                                            <span class="x1fc57z9 x6prxxf _6i6a">
                                                                                                                              solarpanelsystems.xyz
                                                                                                                              is
                                                                                                                              your
                                                                                                                              first
                                                                                                                              and
                                                                                                                              best
                                                                                                                              source
                                                                                                                              for
                                                                                                                              all
                                                                                                                              of
                                                                                                                              the
                                                                                                                              information
                                                                                                                              you’re
                                                                                                                              looking
                                                                                                                              for.
                                                                                                                              From
                                                                                                                              general
                                                                                                                              topics
                                                                                                                              to
                                                                                                                              more
                                                                                                                              of
                                                                                                                              what
                                                                                                                              you
                                                                                                                              would
                                                                                                                              expect
                                                                                                                              to
                                                                                                                              find
                                                                                                                              here,
                                                                                                                              solarpanelsystems.xyz
                                                                                                                              has
                                                                                                                              it
                                                                                                                              all.
                                                                                                                              We
                                                                                                                              hope
                                                                                                                              you
                                                                                                                              find
                                                                                                                              what
                                                                                                                              you
                                                                                                                              are
                                                                                                                              searching
                                                                                                                              for!
                                                                                                                            </span>
                                                                                                                          </div>
                                                                                                                        </div>
                                                                                                                        <div class="x16n37ib">
                                                                                                                          <div data-ad-preview="cta">
                                                                                                                            <div
                                                                                                                              aria-label="Learn more"
                                                                                                                              class="x1i10hfl xjbqb8w x1ejq31n xd10rxx x1sy0etr x17r0tee x972fbf xcfux6l x1qhh985 xm0m39n x1ypdohk xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r xexx8yu x4uap5 x18d9i69 xkhd6sd x16tdsg8 x1hl2dhg xggy1nq x1o1ewxj x3x9cwd x1e5q0jg x13rtm0m x87ps6o x1lku1pv x1a2a7pz x9f619 x3nfvp2 xdt5ytf xl56j7k x1n2onr6 xh8yej3"
                                                                                                                              role="button"
                                                                                                                              tabindex="0"
                                                                                                                            >
                                                                                                                              <div
                                                                                                                                role="none"
                                                                                                                                class="x1n2onr6 x1ja2u2z x78zum5 x2lah0s xl56j7k x6s0dn4 xozqiw3 x1q0g3np xi112ho x17zwfj4 x585lrc x1403ito x972fbf xcfux6l x1qhh985 xm0m39n x9f619 xn6708d x1ye3gou x1qhmfi1 x1r1pt67"
                                                                                                                              >
                                                                                                                                <div class="x6s0dn4 x78zum5 xl56j7k x1608yet xljgi0e x1e0frkt">
                                                                                                                                  <div
                                                                                                                                    role="none"
                                                                                                                                    class="x9f619 x1n2onr6 x1ja2u2z x193iq5w xeuugli x6s0dn4 x78zum5 x2lah0s x1fbi1t2 xl8fo4v"
                                                                                                                                  >
                                                                                                                                    <span
                                                                                                                                      class="x193iq5w xeuugli x13faqbe x1vvkbs x1xmvt09 x1lliihq x1s928wv xhkezso x1gmr53x x1cpjm7i x1fgarty x1943h6x xudqn12 x3x7a5m x6prxxf xvq8zen x1s688f x1dem4cn"
                                                                                                                                      dir="auto"
                                                                                                                                    >
                                                                                                                                      <span class="x1lliihq x6ikm8r x10wlt62 x1n2onr6 xlyipyv xuxw1ft">
                                                                                                                                        Learn
                                                                                                                                        more
                                                                                                                                      </span>
                                                                                                                                    </span>
                                                                                                                                  </div>
                                                                                                                                </div>
                                                                                                                                <div
                                                                                                                                  class="x1ey2m1c xds687c x17qophe xg01cxk x47corl x10l6tqk x13vifvy x1ebt8du x19991ni x1dhq9h x1o1ewxj x3x9cwd x1e5q0jg x13rtm0m"
                                                                                                                                  role="none"
                                                                                                                                  data-visualcompletion="ignore"
                                                                                                                                ></div>
                                                                                                                              </div>
                                                                                                                            </div>
                                                                                                                          </div>
                                                                                                                        </div>
                                                                                                                      </div>
                                                                                                                      <div class="x10l6tqk xso031l x1q0q8m5 x1mpk314 x1m258z3 x1vjfegm xds687c x1ey2m1c"></div>
                                                                                                                    </div>
                                                                                                                  </div>
                                                                                                                  <div></div>
                                                                                                                  <div class="x1anpbxc _3qn7 _61-0 _2fyh _3qnf">
                                                                                                                    <div
                                                                                                                      class="_6g3g xdzyupr x1nn3v0j x1iji9kk x10b6aqq x1sln4lm style-4I99A"
                                                                                                                      id="style-4I99A"
                                                                                                                    >
                                                                                                                      <div class="_3qn7 _61-0 _2fyi _3qnf">
                                                                                                                        <div class="_3qn7 _61-0 _2fyi _3qnf">
                                                                                                                          <div
                                                                                                                            class="_6g3g x150jy0e style-JmZ5m"
                                                                                                                            id="style-JmZ5m"
                                                                                                                          >
                                                                                                                            <span class="_9zc _9--">
                                                                                                                              <i class="_3j7m _2p78 _9--"></i>
                                                                                                                            </span>
                                                                                                                          </div>
                                                                                                                        </div>
                                                                                                                        <div
                                                                                                                          class="_6g3g x1h0ha7o x1mpkggp xeuugli x11hbpws style-tGf8V"
                                                                                                                          id="style-tGf8V"
                                                                                                                        >
                                                                                                                          <div class="x8t9es0 x1fvot60 xo1l8bm xxio538 x1heor9g xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj xeuugli">
                                                                                                                            1
                                                                                                                          </div>
                                                                                                                        </div>
                                                                                                                        <div
                                                                                                                          class="_6g3g x11hbpws x1f6kntn x14atkfc style-DtDDW"
                                                                                                                          id="style-DtDDW"
                                                                                                                        >
                                                                                                                          <div class="_3qn7 _61-2 _2fyi _3qnf">
                                                                                                                            <div
                                                                                                                              class="_6g3g x5ib6vp style-dcEnr"
                                                                                                                              id="style-dcEnr"
                                                                                                                            >
                                                                                                                              <span class="x8t9es0 x1fvot60 xo1l8bm xxio538 x1heor9g xq9mrsl x1h4wwuj xeuugli">
                                                                                                                                1
                                                                                                                                comment
                                                                                                                              </span>
                                                                                                                            </div>
                                                                                                                          </div>
                                                                                                                        </div>
                                                                                                                      </div>
                                                                                                                    </div>
                                                                                                                    <div class="x14nfmen xjm9jq1 x1gryazu xkrivgy xdzyupr"></div>
                                                                                                                    <div
                                                                                                                      class="_6g3g xdzyupr x1y1aw1k x1iji9kk x1120s5i x1sln4lm style-kBVob"
                                                                                                                      id="style-kBVob"
                                                                                                                    >
                                                                                                                      <div class="x1s688f x11hbpws _3qn7 _6twk _2fyi _3qnf">
                                                                                                                        <div
                                                                                                                          class="_6g3g style-J883t"
                                                                                                                          id="style-J883t"
                                                                                                                        >
                                                                                                                          <div class="_3qn7 _61-0 _2fyi _3qnf">
                                                                                                                            <div
                                                                                                                              class="_6g3g x1sxyh0 x1j85h84 xg32yw2 style-orKET"
                                                                                                                              id="style-orKET"
                                                                                                                            >
                                                                                                                              <i
                                                                                                                                alt=""
                                                                                                                                data-visualcompletion="css-img"
                                                                                                                                class="img style-YZmV7"
                                                                                                                                id="style-YZmV7"
                                                                                                                              ></i>
                                                                                                                            </div>
                                                                                                                            <div
                                                                                                                              class="_6g3g style-zOhJr"
                                                                                                                              id="style-zOhJr"
                                                                                                                            >
                                                                                                                              Like
                                                                                                                            </div>
                                                                                                                          </div>
                                                                                                                        </div>
                                                                                                                        <div
                                                                                                                          class="_6g3g style-dQIST"
                                                                                                                          id="style-dQIST"
                                                                                                                        >
                                                                                                                          <div class="_3qn7 _61-0 _2fyi _3qnf">
                                                                                                                            <div
                                                                                                                              class="_6g3g x1sxyh0 x1j85h84 xg32yw2 style-MGiql"
                                                                                                                              id="style-MGiql"
                                                                                                                            >
                                                                                                                              <i
                                                                                                                                alt=""
                                                                                                                                data-visualcompletion="css-img"
                                                                                                                                class="img style-7ora3"
                                                                                                                                id="style-7ora3"
                                                                                                                              ></i>
                                                                                                                            </div>
                                                                                                                            <div
                                                                                                                              class="_6g3g style-Skxkf"
                                                                                                                              id="style-Skxkf"
                                                                                                                            >
                                                                                                                              Comment
                                                                                                                            </div>
                                                                                                                          </div>
                                                                                                                        </div>
                                                                                                                        <div
                                                                                                                          class="_6g3g style-BXgPS"
                                                                                                                          id="style-BXgPS"
                                                                                                                        >
                                                                                                                          <div class="_3qn7 _61-0 _2fyi _3qnf">
                                                                                                                            <div
                                                                                                                              class="_6g3g x1sxyh0 x1j85h84 xg32yw2 style-FBNXz"
                                                                                                                              id="style-FBNXz"
                                                                                                                            >
                                                                                                                              <i
                                                                                                                                alt=""
                                                                                                                                data-visualcompletion="css-img"
                                                                                                                                class="img style-JcsXU"
                                                                                                                                id="style-JcsXU"
                                                                                                                              ></i>
                                                                                                                            </div>
                                                                                                                            <div
                                                                                                                              class="_6g3g style-qdQDo"
                                                                                                                              id="style-qdQDo"
                                                                                                                            >
                                                                                                                              Share
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
                                                              <div class="">
                                                                <div class="">
                                                                  <div class="x3smdqs">
                                                                    <div class="x78zum5 x2lwn1j xeuugli xh8yej3">
                                                                      <div class="x78zum5 xdt5ytf x2lwn1j xamitd3 x1iyjqo2 xeuugli">
                                                                        <div class="x78zum5 x2lwn1j xeuugli xlshs6z">
                                                                          <div class="x78zum5 x2lwn1j xeuugli xamitd3 x2lah0s x1emribx">
                                                                            <div
                                                                              class="x3nfvp2 x120ccyz x4s1yf2"
                                                                              role="presentation"
                                                                            >
                                                                              <div
                                                                                class="xtwfq29 style-RBrMa"
                                                                                id="style-RBrMa"
                                                                              ></div>
                                                                            </div>
                                                                          </div>
                                                                          <div class="x6ikm8r x10wlt62 xlyipyv xh8yej3">
                                                                            <div class="xmi5d70 x1fvot60 xo1l8bm xxio538 xbsr9hj xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj xeuugli">
                                                                              Facebook
                                                                              in-stream
                                                                              videos
                                                                            </div>
                                                                          </div>
                                                                        </div>
                                                                      </div>
                                                                      <div class="x78zum5 xdt5ytf x2lwn1j xeuugli xamitd3 x2lah0s">
                                                                        <div class="xlshs6z">
                                                                          <div
                                                                            class="x3oybdh xuxw1ft x1iknuni xw9jwym x1e2iszw xg0tal0 x1lliihq x1lcm9me x1yr5g0i xrt01vj x10y3i5r"
                                                                            role="group"
                                                                          >
                                                                            <div
                                                                              aria-busy="false"
                                                                              aria-controls="js_mc"
                                                                              class="x1i10hfl xjqpnuy xa49m3k xqeqjp1 x2hbi6w x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli x16tdsg8 xggy1nq x1ja2u2z x6s0dn4 x1ejq31n xd10rxx x1sy0etr x17r0tee x3nfvp2 xdl72j9 x1q0g3np x2lah0s x193iq5w x1n2onr6 x1hl2dhg x87ps6o xxymvpz xlh3980 xvmahel x1lku1pv x1g40iwv x1lcm9me x1yr5g0i xrt01vj x10y3i5r x1ob88yx xaatb59 x1qgsegg xo1l8bm xbsr9hj x1v911su x1y1aw1k xwib8y2 x1ye3gou xn6708d style-MSpqd"
                                                                              role="button"
                                                                              tabindex="0"
                                                                              id="style-MSpqd"
                                                                            >
                                                                              <span class="xmi5d70 x1fvot60 xxio538 x1heor9g xq9mrsl x1h4wwuj x1pd3egz xeuugli xh8yej3">
                                                                                <div class="x78zum5">
                                                                                  <div
                                                                                    class="x1qvwoe0 xjm9jq1 x1y332i5 xcwd3tp x1jyxor1 x39eecv x6ikm8r x10wlt62 x10l6tqk xuxw1ft x1i1rx1s"
                                                                                    data-sscoverage-ignore="true"
                                                                                  >
                                                                                    More
                                                                                    items
                                                                                  </div>
                                                                                  <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1hc1fzr x13dflua x6o7n8i xxziih7 x12w9bfk xl56j7k xh8yej3">
                                                                                    <div
                                                                                      class="x3nfvp2 x120ccyz x1heor9g x2lah0s x1c4vz4f"
                                                                                      role="presentation"
                                                                                    >
                                                                                      <div
                                                                                        class="xtwfq29 style-l7Ydt"
                                                                                        id="style-l7Ydt"
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
                                                                    <div class="xw7yly9">
                                                                      <div
                                                                        class="x1gzqxud x1lcm9me x1yr5g0i xrt01vj x10y3i5r xhgxa4x xy5ysw6 x1qkj6lk xn3walq xnvurfn xv1ta3e x1opv7go x1dtnpoi xibdhds xtnng9g xhvrwov x13k1m86 xwx4but x1cpjm7i xszcg87 x1hmns74 xkk1bqk x14d4353 xsxiz9q x1rmj1tg xchklzq x9f619 xc8icb0 x1n2onr6 x1pvq41x xhhp2wi x14q35kh x1wa3ocq x1n7iyjn x1s928wv x1wsn0xg x1j6awrg x162n7g1 x1m1drc7 x4eaejv xi4xitw x5yr21d xh8yej3"
                                                                        data-auto-logging-component-type="GeoCard"
                                                                      >
                                                                        <div class="x78zum5 xdt5ytf x5yr21d xedcshv x1t2pt76 xh8yej3">
                                                                          <div class="x9f619 x78zum5 x1iyjqo2 x5yr21d x2lwn1j x1n2onr6 xh8yej3">
                                                                            <div class="xw2csxc x1odjw0f xh8yej3 x18d9i69">
                                                                              <div class="xjm9jq1 xg01cxk x47corl xh8yej3 x1jyxor1"></div>
                                                                              <div class="x6s0dn4 x78zum5 xdt5ytf xl56j7k x2lwn1j xeuugli xgx9qek x1lq5wgf xgqcy7u x30kzoy x9jhf4c x6ikm8r x10wlt62 x1n2onr6 x15b6uid x3smdqs">
                                                                                <div>
                                                                                  <div>
                                                                                    <div class="_89mx">
                                                                                      <div class="_4u-c">
                                                                                        <div
                                                                                          id="style-FhpdZ"
                                                                                          class="style-FhpdZ"
                                                                                        >
                                                                                          <div class="">
                                                                                            <div>
                                                                                              <div class="_5zg">
                                                                                                <div class="_7vpk">
                                                                                                  <div class=" _831c">
                                                                                                    <div class="_91kv">
                                                                                                      <div>
                                                                                                        <div class="">
                                                                                                          <div
                                                                                                            class="_ag3c _228q"
                                                                                                            id="f360b9f14b1872185"
                                                                                                          >
                                                                                                            <div
                                                                                                              class="hidden_elem"
                                                                                                              id="f360b9f14b1872185-1"
                                                                                                            ></div>
                                                                                                            <div
                                                                                                              class=""
                                                                                                              id="f360b9f14b1872185-2"
                                                                                                              data-ad-preview="previewContainer"
                                                                                                            >
                                                                                                              <div
                                                                                                                data-clickable="1"
                                                                                                                data-inputable="1"
                                                                                                                data-keydownable="1"
                                                                                                                data-keyupable="1"
                                                                                                                data-changeable="1"
                                                                                                              >
                                                                                                                <div class="x1m258z3">
                                                                                                                  <div class="x1peatla x78zum5 x1q0g3np x6s0dn4 x12peec7">
                                                                                                                    <div class="x100vrsf x1vqgdyp x1tazlab x14yjl9h xudhj91 x18nykt9 xww2gxu x1tpqehw"></div>
                                                                                                                    <div class="xet2fuk x78zum5 xdt5ytf x1iyjqo2">
                                                                                                                      <div class="x1f2tiqu xdk7pt x1tazlab"></div>
                                                                                                                      <div class="x1dmp6jm xdk7pt x1tazlab x1xmf6yo"></div>
                                                                                                                    </div>
                                                                                                                    <div class="xw4jnvo x1qx5ct2 x1wsuqlk">
                                                                                                                      <i
                                                                                                                        alt=""
                                                                                                                        data-visualcompletion="css-img"
                                                                                                                        class="img style-iTzFN"
                                                                                                                        id="style-iTzFN"
                                                                                                                      ></i>
                                                                                                                    </div>
                                                                                                                  </div>
                                                                                                                  <div>
                                                                                                                    <div class="x1n2onr6">
                                                                                                                      <div class="x1m258z3 x1n2onr6">
                                                                                                                        <div class="x12peec7 x1m258z3 x6ikm8r x10wlt62 x1n2onr6 x78zum5 xl56j7k x6s0dn4">
                                                                                                                          <div
                                                                                                                            class="xmdyy31 xda56ma x1lliihq xat24cr x1m258z3 style-dwdrQ"
                                                                                                                            id="style-dwdrQ"
                                                                                                                          >
                                                                                                                            <img
                                                                                                                              class="x1m258z3 x3ajldb img style-lUvrK"
                                                                                                                              src="https://i.postimg.cc/jqBmLCXY/VC.jpg"
                                                                                                                              alt=""
                                                                                                                              id="style-lUvrK"
                                                                                                                            />
                                                                                                                          </div>
                                                                                                                          <div>
                                                                                                                            <div class="xh8yej3 x10wjd1d xaz2ftk x10l6tqk x1ey2m1c xu96u03"></div>
                                                                                                                            <div class="xh8yej3 x14h49td x1fk0wr6 x10l6tqk x13vifvy xu96u03"></div>
                                                                                                                            <div class="x1awj2ng x18krheo x1pg5gke xvq8zen x10l6tqk xpnmzw7 x191j7n5">
                                                                                                                              0:06
                                                                                                                              ·
                                                                                                                              Sponsored
                                                                                                                            </div>
                                                                                                                            <div class="x1nh4oco x178xt8z xm81vs4 xso031l xy80clv x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x1g7gg9k xenha5r x1eoefnw x124h113 x9f619 x1lcm9me x1yr5g0i xrt01vj x10y3i5r x10l6tqk xn0vg7t xlftelb">
                                                                                                                              <div class="x1awj2ng x18krheo x1pg5gke xvq8zen x1k70j0n x1emribx xzueoph x1i64zmx">
                                                                                                                                Learn
                                                                                                                                more
                                                                                                                              </div>
                                                                                                                            </div>
                                                                                                                            <div class="xh8yej3 x36qwtl xh4b7qa x10l6tqk x1ey2m1c xu96u03">
                                                                                                                              <div
                                                                                                                                class="x190lgle x5yr21d style-4In1h"
                                                                                                                                id="style-4In1h"
                                                                                                                              ></div>
                                                                                                                            </div>
                                                                                                                          </div>
                                                                                                                          <div class="xmn4e3e x10qsr78 x2x41l1 x19jh3bc x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x1g7gg9k xenha5r x1eoefnw x124h113 x14yjl9h xudhj91 x18nykt9 xww2gxu x1247r65 xng8ra x1nh4oco x78zum5 xl56j7k x1o2pa38 x6s0dn4 x10l6tqk">
                                                                                                                            <i
                                                                                                                              alt=""
                                                                                                                              data-visualcompletion="css-img"
                                                                                                                              class="img style-SylEN"
                                                                                                                              id="style-SylEN"
                                                                                                                            ></i>
                                                                                                                          </div>
                                                                                                                        </div>
                                                                                                                        <div class="x972fbf x12peec7 xsi6dy0 x1n2onr6 xh8yej3">
                                                                                                                          <div class="xtc6z2u x1ykpwxx x118zf8b xnwxkdh xfocsrx x78zum5 xuzvuw4 xet2fuk x1db2dqx x1n2onr6 xfr5jun xuyfhz4">
                                                                                                                            <div class="x1dnml7z x1n2onr6 x1fxk84t x6ikm8r x10wlt62 x14yjl9h xudhj91 x18nykt9 xww2gxu x1tpqehw x1tk7jg1 xn0vg7t">
                                                                                                                              <img
                                                                                                                                class="x1dnml7z x1fxk84t x1n2onr6 xl1xv1r img"
                                                                                                                                src="https://i.postimg.cc/jqBmLCXY/VC.jpg"
                                                                                                                                alt=""
                                                                                                                              />
                                                                                                                            </div>
                                                                                                                            <div class="xt7dq6l x78zum5 xdt5ytf xl56j7k x636qxn xdj266r x1emribx xat24cr x1i64zmx">
                                                                                                                              <div class="x19c7zk x18krheo x1pg5gke x1j61x8r x1fcty0u x1qb5hxa x13faqbe">
                                                                                                                                <div
                                                                                                                                  class="_4ik4 _4ik5 style-RzP13"
                                                                                                                                  id="style-RzP13"
                                                                                                                                >
                                                                                                                                  solarpanelsystems.xyz
                                                                                                                                </div>
                                                                                                                              </div>
                                                                                                                              <div class="xayvuls x18krheo x6prxxf x1j61x8r x1s688f x1jzjxqx xvq8zen">
                                                                                                                                <div
                                                                                                                                  class="_4ik4 _4ik5 style-dopdC"
                                                                                                                                  id="style-dopdC"
                                                                                                                                >
                                                                                                                                  Valentino
                                                                                                                                  Technologies
                                                                                                                                </div>
                                                                                                                              </div>
                                                                                                                              <div class="x4gvtve x18krheo x1nxh6w3 x1j61x8r x1fcty0u x1lxp14n x1sibtaa x13faqbe">
                                                                                                                                <div
                                                                                                                                  class="_4ik4 _4ik5 style-QsqdL"
                                                                                                                                  id="style-QsqdL"
                                                                                                                                >
                                                                                                                                  We
                                                                                                                                  help
                                                                                                                                  people
                                                                                                                                  to
                                                                                                                                  live
                                                                                                                                  a
                                                                                                                                  better
                                                                                                                                  life
                                                                                                                                  through
                                                                                                                                  technological
                                                                                                                                  home
                                                                                                                                  services.
                                                                                                                                </div>
                                                                                                                              </div>
                                                                                                                            </div>
                                                                                                                            <div class="xlftelb xgtgllz x28a1us x10l6tqk">
                                                                                                                              <i
                                                                                                                                alt=""
                                                                                                                                data-visualcompletion="css-img"
                                                                                                                                class="img style-LUyGI"
                                                                                                                                id="style-LUyGI"
                                                                                                                              ></i>
                                                                                                                            </div>
                                                                                                                          </div>
                                                                                                                        </div>
                                                                                                                      </div>
                                                                                                                    </div>
                                                                                                                  </div>
                                                                                                                  <div class="x78zum5 xdt5ytf x12peec7">
                                                                                                                    <div class="x1vqgdyp x78zum5 x1q0g3np x6s0dn4 x1qughib">
                                                                                                                      <div class="xdk7pt xq1dxzn x1tazlab x1tpqehw"></div>
                                                                                                                      <div class="xdk7pt xgbm1jk x1tazlab x1wsuqlk"></div>
                                                                                                                    </div>
                                                                                                                    <div class="xjm9jq1 x6ni1j9"></div>
                                                                                                                    <div class="x14o62y9 x78zum5 x1q0g3np">
                                                                                                                      <div class="x78zum5 x1q0g3np xl56j7k x6s0dn4 x1iyjqo2">
                                                                                                                        <i
                                                                                                                          alt=""
                                                                                                                          data-visualcompletion="css-img"
                                                                                                                          class="img style-8L2HZ"
                                                                                                                          id="style-8L2HZ"
                                                                                                                        ></i>
                                                                                                                        <div class="xt8i2de x1f6kntn x117nqv4 x16h55sf x1iog12x">
                                                                                                                          Like
                                                                                                                        </div>
                                                                                                                      </div>
                                                                                                                      <div class="x78zum5 x1q0g3np xl56j7k x6s0dn4 x1iyjqo2">
                                                                                                                        <i
                                                                                                                          alt=""
                                                                                                                          data-visualcompletion="css-img"
                                                                                                                          class="img style-C5yEH"
                                                                                                                          id="style-C5yEH"
                                                                                                                        ></i>
                                                                                                                        <div class="xt8i2de x1f6kntn x117nqv4 x16h55sf x1iog12x">
                                                                                                                          Comment
                                                                                                                        </div>
                                                                                                                      </div>
                                                                                                                      <div class="x78zum5 x1q0g3np xl56j7k x6s0dn4 x1iyjqo2">
                                                                                                                        <i
                                                                                                                          alt=""
                                                                                                                          data-visualcompletion="css-img"
                                                                                                                          class="img style-VqZWV"
                                                                                                                          id="style-VqZWV"
                                                                                                                        ></i>
                                                                                                                        <div class="xt8i2de x1f6kntn x117nqv4 x16h55sf x1iog12x">
                                                                                                                          Share
                                                                                                                        </div>
                                                                                                                      </div>
                                                                                                                    </div>
                                                                                                                    <div class="xjm9jq1 x6ni1j9"></div>
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
                                                              </div>
                                                              <div class="">
                                                                <div class="">
                                                                  <div class="x3smdqs">
                                                                    <div class="x78zum5 x2lwn1j xeuugli xh8yej3">
                                                                      <div class="x78zum5 xdt5ytf x2lwn1j xamitd3 x1iyjqo2 xeuugli">
                                                                        <div class="x78zum5 x2lwn1j xeuugli xlshs6z">
                                                                          <div class="x78zum5 x2lwn1j xeuugli xamitd3 x2lah0s x1emribx">
                                                                            <div
                                                                              class="x3nfvp2 x120ccyz x4s1yf2"
                                                                              role="presentation"
                                                                            >
                                                                              <div
                                                                                class="xtwfq29 style-tvvYL"
                                                                                id="style-tvvYL"
                                                                              ></div>
                                                                            </div>
                                                                          </div>
                                                                          <div class="x6ikm8r x10wlt62 xlyipyv xh8yej3">
                                                                            <div class="xmi5d70 x1fvot60 xo1l8bm xxio538 xbsr9hj xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj xeuugli">
                                                                              Facebook
                                                                              right
                                                                              column
                                                                            </div>
                                                                          </div>
                                                                        </div>
                                                                      </div>
                                                                      <div class="x78zum5 xdt5ytf x2lwn1j xeuugli xamitd3 x2lah0s">
                                                                        <div class="xlshs6z">
                                                                          <div
                                                                            class="x3oybdh xuxw1ft x1iknuni xw9jwym x1e2iszw xg0tal0 x1lliihq x1lcm9me x1yr5g0i xrt01vj x10y3i5r"
                                                                            role="group"
                                                                          >
                                                                            <div
                                                                              aria-busy="false"
                                                                              aria-controls="js_ms"
                                                                              class="x1i10hfl xjqpnuy xa49m3k xqeqjp1 x2hbi6w x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli x16tdsg8 xggy1nq x1ja2u2z x6s0dn4 x1ejq31n xd10rxx x1sy0etr x17r0tee x3nfvp2 xdl72j9 x1q0g3np x2lah0s x193iq5w x1n2onr6 x1hl2dhg x87ps6o xxymvpz xlh3980 xvmahel x1lku1pv x1g40iwv x1lcm9me x1yr5g0i xrt01vj x10y3i5r x1ob88yx xaatb59 x1qgsegg xo1l8bm xbsr9hj x1v911su x1y1aw1k xwib8y2 x1ye3gou xn6708d style-kQCC1"
                                                                              role="button"
                                                                              tabindex="0"
                                                                              id="style-kQCC1"
                                                                            >
                                                                              <span class="xmi5d70 x1fvot60 xxio538 x1heor9g xq9mrsl x1h4wwuj x1pd3egz xeuugli xh8yej3">
                                                                                <div class="x78zum5">
                                                                                  <div
                                                                                    class="x1qvwoe0 xjm9jq1 x1y332i5 xcwd3tp x1jyxor1 x39eecv x6ikm8r x10wlt62 x10l6tqk xuxw1ft x1i1rx1s"
                                                                                    data-sscoverage-ignore="true"
                                                                                  >
                                                                                    More
                                                                                    items
                                                                                  </div>
                                                                                  <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1hc1fzr x13dflua x6o7n8i xxziih7 x12w9bfk xl56j7k xh8yej3">
                                                                                    <div
                                                                                      class="x3nfvp2 x120ccyz x1heor9g x2lah0s x1c4vz4f"
                                                                                      role="presentation"
                                                                                    >
                                                                                      <div
                                                                                        class="xtwfq29 style-N7QGn"
                                                                                        id="style-N7QGn"
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
                                                                    <div class="xw7yly9">
                                                                      <div
                                                                        class="x1gzqxud x1lcm9me x1yr5g0i xrt01vj x10y3i5r xhgxa4x xy5ysw6 x1qkj6lk xn3walq xnvurfn xv1ta3e x1opv7go x1dtnpoi xibdhds xtnng9g xhvrwov x13k1m86 xwx4but x1cpjm7i xszcg87 x1hmns74 xkk1bqk x14d4353 xsxiz9q x1rmj1tg xchklzq x9f619 xc8icb0 x1n2onr6 x1pvq41x xhhp2wi x14q35kh x1wa3ocq x1n7iyjn x1s928wv x1wsn0xg x1j6awrg x162n7g1 x1m1drc7 x4eaejv xi4xitw x5yr21d xh8yej3"
                                                                        data-auto-logging-component-type="GeoCard"
                                                                      >
                                                                        <div class="x78zum5 xdt5ytf x5yr21d xedcshv x1t2pt76 xh8yej3">
                                                                          <div class="x9f619 x78zum5 x1iyjqo2 x5yr21d x2lwn1j x1n2onr6 xh8yej3">
                                                                            <div class="xw2csxc x1odjw0f xh8yej3 x18d9i69">
                                                                              <div class="xjm9jq1 xg01cxk x47corl xh8yej3 x1jyxor1"></div>
                                                                              <div class="x6s0dn4 x78zum5 xdt5ytf xl56j7k x2lwn1j xeuugli xgx9qek x1lq5wgf xgqcy7u x30kzoy x9jhf4c x6ikm8r x10wlt62 x1n2onr6 x15b6uid x3smdqs">
                                                                                <div>
                                                                                  <div>
                                                                                    <div class="_89mx">
                                                                                      <div class="_4u-c">
                                                                                        <div>
                                                                                          <div class="">
                                                                                            <div>
                                                                                              <div class="_5zg">
                                                                                                <div class="_7vpk">
                                                                                                  <div class=" _831c">
                                                                                                    <div class="_91kv">
                                                                                                      <div>
                                                                                                        <div class="">
                                                                                                          <div
                                                                                                            class="_ag3c _228q"
                                                                                                            id="fd94f95dbd6e56e2a"
                                                                                                          >
                                                                                                            <div
                                                                                                              class="hidden_elem"
                                                                                                              id="fd94f95dbd6e56e2a-1"
                                                                                                            ></div>
                                                                                                            <div
                                                                                                              class=""
                                                                                                              id="fd94f95dbd6e56e2a-2"
                                                                                                              data-ad-preview="previewContainer"
                                                                                                            >
                                                                                                              <div
                                                                                                                data-clickable="1"
                                                                                                                data-inputable="1"
                                                                                                                data-keydownable="1"
                                                                                                                data-keyupable="1"
                                                                                                                data-changeable="1"
                                                                                                              >
                                                                                                                <div class="x65f84u x1jzhcrs x47corl">
                                                                                                                  <div>
                                                                                                                    <div class="x1n2onr6">
                                                                                                                      <a
                                                                                                                        aria-label="Advertiser"
                                                                                                                        aria-labelledby=":r7:"
                                                                                                                        class="x1i10hfl x1ejq31n xd10rxx x1sy0etr x17r0tee x972fbf xcfux6l x1qhh985 xm0m39n x9f619 xe8uvvx xggy1nq x1o1ewxj x3x9cwd x1e5q0jg x13rtm0m x1n2onr6 x87ps6o x1a2a7pz xjbqb8w x6umtig x1b1mbwd xaqea5y xav7gou x1heor9g x1ypdohk xjb2p0i x1qlqyl8 x15bjb6t xdj266r x11i5rnm xat24cr x1mh8g0r xexx8yu x4uap5 x18d9i69 xkhd6sd x16tdsg8 x1r8a4m5 xsj2dmf x144v4sp x1edh9d7 x1lliihq xh8yej3 x1pdlv7q"
                                                                                                                        href="https://l.facebook.com/l.php?u=https%3A%2F%2Fthesearchguide.xyz%2Fcf%2Fr%2F6618d4d6b1a97700123695dd%3Fad_id%3D%257B%257Bad.id%257D%257D%26adset_id%3D%257B%257Badset.id%257D%257D%26campaign_id%3D%257B%257Bcampaign.id%257D%257D%26ad_name%3D%257B%257Bad.name%257D%257D%26adset_name%3D%257B%257Badset.name%257D%257D%26campaign_name%3D%257B%257Bcampaign.name%257D%257D%26source%3Dfb%26placement%3DOthers%26fbclid%3DIwZXh0bgNhZW0CMTAAAR2nqJPojzxtrUrUd6-8yDsxY0KMdYe_tBXxZmuL-5VCW5sTHlaorS8EhBo_aem_AUwbJqlta-VavbGVEkhyD4tmsz_64pQe3YBcrKyGD8IFVlOIJRFuwQ0AGilou9Q5u1iAg3ZmdTXcaA-fVTmUNUs4&amp;h=AT0gI_DtKleS8xq1mgc7yMSZQJMezX_eHy2gNsBWxIk2I6Uc7Y4e54yJk9NVIxr-Xw-VV5LJ46spoOnLPBrtEI6Q-bYnL3LsFo_ecgqD2B9IiEREVBsmdT1K9HMHf9Pi-EaZ_A"
                                                                                                                        rel="nofollow noreferrer"
                                                                                                                        role="link"
                                                                                                                        tabindex="0"
                                                                                                                        target="_blank"
                                                                                                                      >
                                                                                                                        <div class="x78zum5 x6umtig x1b1mbwd xaqea5y xav7gou xhk9q7s x1otrzb0 x1i1ezom x1o6z2jb x1ypdohk xjb2p0i xdj266r x1emribx xat24cr x1i64zmx x1yc453h x1y1aw1k x1sxyh0 xwib8y2 xurb0ha x1164lod x8du52y">
                                                                                                                          <div class="xamitd3 x1r8uery x1iyjqo2 xs83m0k xeuugli">
                                                                                                                            <div id=":r7:">
                                                                                                                              <span aria-labelledby=":r6:">
                                                                                                                                <div class="x6s0dn4 x78zum5">
                                                                                                                                  <div class="xamitd3 x2lah0s xz84dc7">
                                                                                                                                    <img
                                                                                                                                      alt=""
                                                                                                                                      class="xz74otr x1lq5wgf xgqcy7u x30kzoy x9jhf4c x1lliihq x193iq5w x4zw9a1"
                                                                                                                                      referrerpolicy="origin-when-cross-origin"
                                                                                                                                      src="https://scontent.flhe11-1.fna.fbcdn.net/v/t45.1600-4/436307494_120210079407570644_381994830417011904_n.jpg?stp=cp0_dst-jpg_p296x100_q75_spS444&amp;_nc_cat=111&amp;ccb=1-7&amp;_nc_sid=5f2048&amp;_nc_eui2=AeHdhX1m5CVT0M_wJWCI6V-E39No7K5H_8zf02jsrkf_zJerQfTLQCwYl5zClSSv9UlIBJ7FGdHlVDTRi5NCkmNg&amp;_nc_ohc=1H2Comuj-w8Q7kNvgF7cp2H&amp;_nc_ht=scontent.flhe11-1.fna&amp;oh=00_AYBszM1YjQHBDD0W7MZsfVjPRcAn_CJ7ZHRzDvTe5Rfczw&amp;oe=664EA810"
                                                                                                                                    />
                                                                                                                                  </div>
                                                                                                                                  <div class="x1ye3gou">
                                                                                                                                    <div class="x78zum5 xdt5ytf xz62fqu x16ldp7u">
                                                                                                                                      <div class="xu06os2 x1ok221b">
                                                                                                                                        <span
                                                                                                                                          class="x193iq5w xeuugli x13faqbe x1vvkbs x1xmvt09 x1lliihq x1s928wv xhkezso x1gmr53x x1cpjm7i x1fgarty x1943h6x xudqn12 x3x7a5m x6prxxf xvq8zen xk50ysn xzsf02u x1yc453h"
                                                                                                                                          dir="auto"
                                                                                                                                        >
                                                                                                                                          <span
                                                                                                                                            class="x1lliihq x6ikm8r x10wlt62 x1n2onr6 style-ayj6f"
                                                                                                                                            id="style-ayj6f"
                                                                                                                                          >
                                                                                                                                            Valentino
                                                                                                                                            Technologies
                                                                                                                                          </span>
                                                                                                                                        </span>
                                                                                                                                      </div>
                                                                                                                                      <div class="xu06os2 x1ok221b">
                                                                                                                                        <span
                                                                                                                                          class="x193iq5w xeuugli x13faqbe x1vvkbs x1xmvt09 x1lliihq x1s928wv xhkezso x1gmr53x x1cpjm7i x1fgarty x1943h6x x4zkp8e x3x7a5m x1nxh6w3 x1sibtaa xo1l8bm xi81zsa x1yc453h"
                                                                                                                                          dir="auto"
                                                                                                                                        >
                                                                                                                                          <span
                                                                                                                                            class="x1lliihq x6ikm8r x10wlt62 x1n2onr6 x1j85h84 style-GOt4M"
                                                                                                                                            id="style-GOt4M"
                                                                                                                                          >
                                                                                                                                            <div class="x1kyqaxf">
                                                                                                                                              solarpanelsystems.xyz
                                                                                                                                            </div>
                                                                                                                                          </span>
                                                                                                                                        </span>
                                                                                                                                      </div>
                                                                                                                                    </div>
                                                                                                                                  </div>
                                                                                                                                </div>
                                                                                                                              </span>
                                                                                                                            </div>
                                                                                                                          </div>
                                                                                                                        </div>
                                                                                                                      </a>
                                                                                                                      <div class="x6s0dn4 x1ey2m1c x78zum5 x92rtbv x10l6tqk x13vifvy"></div>
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
                                                              </div>
                                                              <div class="">
                                                                <div class="">
                                                                  <div class="x3smdqs">
                                                                    <div class="x78zum5 x2lwn1j xeuugli xh8yej3">
                                                                      <div class="x78zum5 xdt5ytf x2lwn1j xamitd3 x1iyjqo2 xeuugli">
                                                                        <div class="x78zum5 x2lwn1j xeuugli xlshs6z">
                                                                          <div class="x78zum5 x2lwn1j xeuugli xamitd3 x2lah0s x1emribx">
                                                                            <div
                                                                              class="x3nfvp2 x120ccyz x4s1yf2"
                                                                              role="presentation"
                                                                            >
                                                                              <div
                                                                                class="xtwfq29 style-xZv9M"
                                                                                id="style-xZv9M"
                                                                              ></div>
                                                                            </div>
                                                                          </div>
                                                                          <div class="x6ikm8r x10wlt62 xlyipyv xh8yej3">
                                                                            <div class="xmi5d70 x1fvot60 xo1l8bm xxio538 xbsr9hj xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj xeuugli">
                                                                              Facebook
                                                                              search
                                                                              results
                                                                            </div>
                                                                          </div>
                                                                        </div>
                                                                      </div>
                                                                      <div class="x78zum5 xdt5ytf x2lwn1j xeuugli xamitd3 x2lah0s">
                                                                        <div class="xlshs6z">
                                                                          <div
                                                                            class="x3oybdh xuxw1ft x1iknuni xw9jwym x1e2iszw xg0tal0 x1lliihq x1lcm9me x1yr5g0i xrt01vj x10y3i5r"
                                                                            role="group"
                                                                          >
                                                                            <div
                                                                              aria-busy="false"
                                                                              aria-controls="js_pl"
                                                                              class="x1i10hfl xjqpnuy xa49m3k xqeqjp1 x2hbi6w x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli x16tdsg8 xggy1nq x1ja2u2z x6s0dn4 x1ejq31n xd10rxx x1sy0etr x17r0tee x3nfvp2 xdl72j9 x1q0g3np x2lah0s x193iq5w x1n2onr6 x1hl2dhg x87ps6o xxymvpz xlh3980 xvmahel x1lku1pv x1g40iwv x1lcm9me x1yr5g0i xrt01vj x10y3i5r x1ob88yx xaatb59 x1qgsegg xo1l8bm xbsr9hj x1v911su x1y1aw1k xwib8y2 x1ye3gou xn6708d style-LhU3I"
                                                                              role="button"
                                                                              tabindex="0"
                                                                              id="style-LhU3I"
                                                                            >
                                                                              <span class="xmi5d70 x1fvot60 xxio538 x1heor9g xq9mrsl x1h4wwuj x1pd3egz xeuugli xh8yej3">
                                                                                <div class="x78zum5">
                                                                                  <div
                                                                                    class="x1qvwoe0 xjm9jq1 x1y332i5 xcwd3tp x1jyxor1 x39eecv x6ikm8r x10wlt62 x10l6tqk xuxw1ft x1i1rx1s"
                                                                                    data-sscoverage-ignore="true"
                                                                                  >
                                                                                    More
                                                                                    items
                                                                                  </div>
                                                                                  <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1hc1fzr x13dflua x6o7n8i xxziih7 x12w9bfk xl56j7k xh8yej3">
                                                                                    <div
                                                                                      class="x3nfvp2 x120ccyz x1heor9g x2lah0s x1c4vz4f"
                                                                                      role="presentation"
                                                                                    >
                                                                                      <div
                                                                                        class="xtwfq29 style-rHLG2"
                                                                                        id="style-rHLG2"
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
                                                                    <div class="xw7yly9">
                                                                      <div
                                                                        class="x1gzqxud x1lcm9me x1yr5g0i xrt01vj x10y3i5r xhgxa4x xy5ysw6 x1qkj6lk xn3walq xnvurfn xv1ta3e x1opv7go x1dtnpoi xibdhds xtnng9g xhvrwov x13k1m86 xwx4but x1cpjm7i xszcg87 x1hmns74 xkk1bqk x14d4353 xsxiz9q x1rmj1tg xchklzq x9f619 xc8icb0 x1n2onr6 x1pvq41x xhhp2wi x14q35kh x1wa3ocq x1n7iyjn x1s928wv x1wsn0xg x1j6awrg x162n7g1 x1m1drc7 x4eaejv xi4xitw x5yr21d xh8yej3"
                                                                        data-auto-logging-component-type="GeoCard"
                                                                      >
                                                                        <div class="x78zum5 xdt5ytf x5yr21d xedcshv x1t2pt76 xh8yej3">
                                                                          <div class="x9f619 x78zum5 x1iyjqo2 x5yr21d x2lwn1j x1n2onr6 xh8yej3">
                                                                            <div class="xw2csxc x1odjw0f xh8yej3 x18d9i69">
                                                                              <div class="xjm9jq1 xg01cxk x47corl xh8yej3 x1jyxor1"></div>
                                                                              <div class="x6s0dn4 x78zum5 xdt5ytf xl56j7k x2lwn1j xeuugli xgx9qek x1lq5wgf xgqcy7u x30kzoy x9jhf4c x6ikm8r x10wlt62 x1n2onr6 x15b6uid x3smdqs">
                                                                                <div>
                                                                                  <div>
                                                                                    <div class="_89mx">
                                                                                      <div class="_4u-c">
                                                                                        <div>
                                                                                          <div class="">
                                                                                            <div>
                                                                                              <div class="_5zg">
                                                                                                <div class="_7vpk">
                                                                                                  <div class=" _831c">
                                                                                                    <div class="_91kv">
                                                                                                      <div>
                                                                                                        <div class="">
                                                                                                          <div
                                                                                                            class="_ag3c _228q"
                                                                                                            id="fa37c7a151231f6a3"
                                                                                                          >
                                                                                                            <div
                                                                                                              class="hidden_elem"
                                                                                                              id="fa37c7a151231f6a3-1"
                                                                                                            ></div>
                                                                                                            <div
                                                                                                              class=""
                                                                                                              id="fa37c7a151231f6a3-2"
                                                                                                              data-ad-preview="previewContainer"
                                                                                                            >
                                                                                                              <div class="_983f">
                                                                                                                <div class="_8qr6">
                                                                                                                  <div
                                                                                                                    data-clickable="1"
                                                                                                                    data-inputable="1"
                                                                                                                    data-keydownable="1"
                                                                                                                    data-keyupable="1"
                                                                                                                    data-changeable="1"
                                                                                                                  >
                                                                                                                    <div class="xqi1l69 x1lq5wgf xgqcy7u x30kzoy x9jhf4c x78zum5 xl56j7k x6s0dn4 x1b51vyi xzjbwwf">
                                                                                                                      <div
                                                                                                                        id="style-hm9L5"
                                                                                                                        class="style-hm9L5"
                                                                                                                      >
                                                                                                                        <div class="_4u-c">
                                                                                                                          <div
                                                                                                                            id="style-13pAH"
                                                                                                                            class="style-13pAH"
                                                                                                                          >
                                                                                                                            <div
                                                                                                                              id="style-UitjY"
                                                                                                                              class="style-UitjY"
                                                                                                                            >
                                                                                                                              <div
                                                                                                                                id="style-nAsqd"
                                                                                                                                class="style-nAsqd"
                                                                                                                              ></div>
                                                                                                                            </div>
                                                                                                                          </div>
                                                                                                                        </div>
                                                                                                                      </div>
                                                                                                                    </div>
                                                                                                                  </div>
                                                                                                                  <div class="_8qr5">
                                                                                                                    <div>
                                                                                                                      <div>
                                                                                                                        <div class="_8qq_">
                                                                                                                          <div class="_8qq_">
                                                                                                                            <div class="_6f4g">
                                                                                                                              <img
                                                                                                                                class="_8qr4 img"
                                                                                                                                src="https://i.postimg.cc/jqBmLCXY/VC.jpg"
                                                                                                                                alt=""
                                                                                                                              />
                                                                                                                              <div class="_74ad">
                                                                                                                                <span class="_2iem _5kx5 _2iev">
                                                                                                                                  Valentino
                                                                                                                                  Technologies
                                                                                                                                </span>
                                                                                                                              </div>
                                                                                                                            </div>
                                                                                                                          </div>
                                                                                                                          <div class="_amwp">
                                                                                                                            <i
                                                                                                                              class="img style-rWsjv"
                                                                                                                              id="style-rWsjv"
                                                                                                                            ></i>
                                                                                                                          </div>
                                                                                                                        </div>
                                                                                                                      </div>
                                                                                                                      <div class="_amwq">
                                                                                                                        <span class="_2ieo _2iev">
                                                                                                                          Valentino
                                                                                                                          Technologies
                                                                                                                        </span>
                                                                                                                      </div>
                                                                                                                      <div>
                                                                                                                        <span class="_2ieq _2iex">
                                                                                                                          Sponsored
                                                                                                                        </span>
                                                                                                                      </div>
                                                                                                                    </div>
                                                                                                                  </div>
                                                                                                                  <span></span>
                                                                                                                </div>
                                                                                                                <span></span>
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
                                                              <div class="x1s85apg"></div>
                                                              <div class="x1s85apg"></div>
                                                              <div class="x1s85apg"></div>
                                                              <div class="x1s85apg"></div>
                                                              <div class="x1s85apg"></div>
                                                            </div>
                                                          </div>
                                                          <div class="x6s0dn4 x78zum5 xdt5ytf x2lwn1j xeuugli xqui205 x1hq5gj4">
                                                            <div>
                                                              <div
                                                                data-visualcompletion="ignore"
                                                                class=""
                                                              ></div>
                                                              <div id="aco_preview_view_more_variations_tip">
                                                                <div
                                                                  class="x3nfvp2 x193iq5w xxymvpz"
                                                                  role="none"
                                                                >
                                                                  <div
                                                                    aria-busy="false"
                                                                    class="x1i10hfl xjqpnuy xa49m3k xqeqjp1 x2hbi6w x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli x16tdsg8 xggy1nq x1ja2u2z x6s0dn4 x1ejq31n xd10rxx x1sy0etr x17r0tee x3nfvp2 xdl72j9 x1q0g3np x2lah0s x193iq5w x1n2onr6 x1hl2dhg x87ps6o xxymvpz xlh3980 xvmahel x1lku1pv x1g40iwv x1lcm9me x1yr5g0i xrt01vj x10y3i5r x1ob88yx xaatb59 x1qgsegg xo1l8bm xbsr9hj x1v911su x1y1aw1k xwib8y2 x1pi30zi x1ye3gou"
                                                                    id="js_2h"
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
                                                                              class="xtwfq29 style-l6qhO"
                                                                              id="style-l6qhO"
                                                                            ></div>
                                                                          </div>
                                                                          <div class="x1xqt7ti x1fvot60 xk50ysn xxio538 x1heor9g xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj xeuugli">
                                                                            See
                                                                            more
                                                                            variations
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
                                                <div
                                                  class="x17fnjtu x1yhoyej xwebqov xvyu6v8 xrsgblv x10lij0i x26u7qi x19p7ews x1jn0hjm x6ikm8r x10wlt62 style-o2G71"
                                                  id="style-o2G71"
                                                >
                                                  <div class="x1iyjqo2 x1e56ztr x6ikm8r x1y1aw1k x1pi30zi xwib8y2 x1swvt13 x9f619 x1odjw0f x5yr21d">
                                                    <div>
                                                      <div class="x78zum5 x2lwn1j xeuugli x1e56ztr">
                                                        <img
                                                          class="x14yjl9h xudhj91 x18nykt9 xww2gxu x1fgtraw x1emribx x1264ykn xgd8bvy img"
                                                          src="https://graph.facebook.com/100006504132079/picture?type=square&amp;access_token=EAABsbCS1iHgBO2lUb1J3HHtnW1bq2h5IZBTGwMUIKgqwocIGNauyIHwz6u9gsxQ7ZBqvmKxZABYaYiQ6DnGoYweyjcTgQra5e3NFsLqWZBSUjymz1YOolmqYPAjVS12TfAGnXUMCydV2NSkLIFTlPlaUKhW2KUoL7WV6n5bIkwU33mrZBZB99JmZCpoY18V1A3c7QZDZD"
                                                          alt=""
                                                        />
                                                        <div>
                                                          <a
                                                            class="x117nqv4"
                                                            target="_blank"
                                                            href="https://facebook.com/100006504132079"
                                                          >
                                                            <span class="xmi5d70 x1fvot60 xo1l8bm xxio538 xbsr9hj xq9mrsl x1h4wwuj xeuugli">
                                                              <strong>
                                                                Ed Jones
                                                              </strong>
                                                            </span>
                                                          </a>
                                                          <div class="xmi5d70 x1fvot60 xo1l8bm xxio538 xbsr9hj xq9mrsl x1h4wwuj xeuugli">
                                                            Be aware - rooftop
                                                            solar is the scam of
                                                            the year. Lawsuits
                                                            abounding. Many
                                                            solar companies are
                                                            being sued and some
                                                            are bankrupt. States
                                                            are enacting
                                                            legislations due to
                                                            the myriad of
                                                            customers complaints
                                                            and some are
                                                            dropping the tax
                                                            incentives. Avoid
                                                            this disaster.
                                                          </div>
                                                          <div class="xmi5d70 xw23nyj xo1l8bm x63nzvj x1541jtf xq9mrsl x1h4wwuj xeuugli">
                                                            2 days ago
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                              <div class="_2pid _2pi8 _2pin">
                                                <div class="xmi5d70 xw23nyj xo1l8bm x63nzvj x1541jtf xq9mrsl x1yc453h x1h4wwuj xeuugli">
                                                  Ad rendering and interaction
                                                  may vary based on device,
                                                  format and other factors.{" "}
                                                  <div
                                                    aria-describedby="js_2j"
                                                    aria-haspopup="true"
                                                    aria-label="Learn more"
                                                    class="_4rhp"
                                                    role="button"
                                                    tabindex="0"
                                                  >
                                                    <i
                                                      data-testid="SUISimplePopover/icon"
                                                      class="_h6r _3-8r img style-tCCdG"
                                                      alt=""
                                                      data-visualcompletion="css-img"
                                                      id="style-tCCdG"
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
  );
};

export default EditChartThree;

/*  


*/

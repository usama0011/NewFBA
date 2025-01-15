import React, { useEffect, useState } from "react";
import "../styles/EditChartMain.css";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import SideBar from "../components/SideBar";
const EditChartMain = () => {
  const data = [
    { date: "1 May", value: 2 },
    { date: "2 May", value: 1 },
    { date: "3 May", value: 7 },
    { date: "4 May", value: 4 },
    { date: "5 May", value: 8 },
    { date: "6 May", value: 3 },
    { date: "7 May", value: 6 },
    { date: "8 May", value: 5 },
    { date: "9 May", value: 9 },
    { date: "10 May", value: 2 },
  ];
  const { id } = useParams();
  const [campaign, setCampaigns] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const width = 955;
  const height = 202;
  const padding = 50;

  // Calculate the max y value for scaling the y-axis
  const maxYValue = Math.max(...data.map((d) => d.value)) || 10;

  // Calculate the x and y scaling factors based on data length
  const xScale = (width - 2 * padding) / (data.length - 1);
  const yScale = ((height - 2 * padding) / maxYValue) * 1.5; // Adjusts yScale for double the gap

  // Generate the SVG path for the line graph
  const linePath = data
    .map((point, i) => {
      const x = padding + i * xScale;
      const y = height - padding - point.value * yScale;
      return `${i === 0 ? "M" : "L"} ${x},${y}`;
    })
    .join(" ");

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
          style={{ marginLeft: "18px", zIndex: "999" }}
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
        <div class="_96uw">
          <div
            style={{ paddingLeft: "10px" }}
            class="_1_tm _9898"
            id="campaign_structure_tree_root"
          >
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
                                  {/* work here  */}
                                  <Link
                                    style={{
                                      textDecoration: "unset",
                                      color: "unset",
                                    }}
                                    to={`/editmaincharttwo/${campaign?._id}`}
                                  >
                                    <span class="_3dfi _3dfj">
                                      {campaign?.campaingname}
                                    </span>
                                  </Link>
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
                                                          Performance overview
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
                                                                                width={
                                                                                  width
                                                                                }
                                                                                height={
                                                                                  height
                                                                                }
                                                                                aria-label="Dynamic Graph"
                                                                                role="img"
                                                                                class="x5yr21d x1plvlek xryxfnj x10l6tqk x17qophe x13vifvy xh8yej3"
                                                                              >
                                                                                {/* X-axis labels */}
                                                                                {data.map(
                                                                                  (
                                                                                    point,
                                                                                    i
                                                                                  ) => (
                                                                                    <g
                                                                                      key={
                                                                                        i
                                                                                      }
                                                                                      transform={`translate(${
                                                                                        padding +
                                                                                        i *
                                                                                          xScale
                                                                                      }, ${
                                                                                        height -
                                                                                        padding
                                                                                      })`}
                                                                                    >
                                                                                      <line
                                                                                        y2="5"
                                                                                        stroke="rgba(0,0,0,0.15)"
                                                                                      />
                                                                                      <text
                                                                                        y="15"
                                                                                        fontSize="10"
                                                                                        textAnchor="middle"
                                                                                        fill="rgba(28,43,51,1)"
                                                                                        class="x9yny3i xw6cgo0 xmi5d70 x1fvot60 xo1l8bm xxio538"
                                                                                      >
                                                                                        {
                                                                                          point.date
                                                                                        }
                                                                                      </text>
                                                                                    </g>
                                                                                  )
                                                                                )}

                                                                                {/* Y-axis labels */}
                                                                                {[
                                                                                  ...Array(
                                                                                    6
                                                                                  ).keys(),
                                                                                ].map(
                                                                                  (
                                                                                    i
                                                                                  ) => {
                                                                                    const yValue =
                                                                                      (maxYValue /
                                                                                        5) *
                                                                                      i;
                                                                                    const yPosition =
                                                                                      height -
                                                                                      padding -
                                                                                      yValue *
                                                                                        yScale;
                                                                                    return (
                                                                                      <g
                                                                                        key={
                                                                                          i
                                                                                        }
                                                                                        transform={`translate(${padding}, ${yPosition})`}
                                                                                      >
                                                                                        <line
                                                                                          x2={
                                                                                            width -
                                                                                            2 *
                                                                                              padding
                                                                                          }
                                                                                          stroke="rgba(0,0,0,0.15)"
                                                                                        />
                                                                                        <text
                                                                                          x="-10"
                                                                                          fontSize="10"
                                                                                          textAnchor="end"
                                                                                          fill="rgba(28,43,51,1)"
                                                                                          class="x1lzn6yi x1nibo1b xmi5d70 x1fvot60 xo1l8bm xxio538"
                                                                                        >
                                                                                          {yValue.toFixed(
                                                                                            1
                                                                                          )}
                                                                                        </text>
                                                                                      </g>
                                                                                    );
                                                                                  }
                                                                                )}

                                                                                {/* Line graph path */}
                                                                                <path
                                                                                  d={
                                                                                    linePath
                                                                                  }
                                                                                  fill="none"
                                                                                  stroke="rgba(50,205,205,1)"
                                                                                  strokeLinecap="round"
                                                                                  strokeLinejoin="round"
                                                                                  strokeWidth="2"
                                                                                />

                                                                                {/* Transparent rectangles for hover interactions (if needed) */}
                                                                                {data.map(
                                                                                  (
                                                                                    _,
                                                                                    i
                                                                                  ) => (
                                                                                    <rect
                                                                                      key={
                                                                                        i
                                                                                      }
                                                                                      fill="transparent"
                                                                                      height={
                                                                                        height -
                                                                                        2 *
                                                                                          padding
                                                                                      }
                                                                                      width={
                                                                                        xScale
                                                                                      }
                                                                                      x={
                                                                                        padding +
                                                                                        i *
                                                                                          xScale -
                                                                                        xScale /
                                                                                          2
                                                                                      }
                                                                                      y={
                                                                                        padding
                                                                                      }
                                                                                    />
                                                                                  )
                                                                                )}
                                                                              </svg>
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
                                                            Age and gender
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
                                                                  <th>13-17</th>
                                                                  <th>18-24</th>
                                                                  <th>25-34</th>
                                                                  <th>35-44</th>
                                                                  <th>45-54</th>
                                                                  <th>55-64</th>
                                                                  <th>65+</th>
                                                                </tr>
                                                                <tr>
                                                                  <td>
                                                                    Results
                                                                    (Men)
                                                                  </td>
                                                                  <td>0</td>
                                                                  <td>1</td>
                                                                  <td>0</td>
                                                                  <td>0</td>
                                                                  <td>0</td>
                                                                  <td>2</td>
                                                                  <td>2</td>
                                                                </tr>
                                                                <tr>
                                                                  <td>
                                                                    Results
                                                                    (Women)
                                                                  </td>
                                                                  <td>0</td>
                                                                  <td>0</td>
                                                                  <td>3</td>
                                                                  <td>0</td>
                                                                  <td>0</td>
                                                                  <td>4</td>
                                                                  <td>1</td>
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
                                                                      38% (5)
                                                                    </span>
                                                                    <span class="xmi5d70 xw23nyj xo1l8bm x63nzvj xbsr9hj xq9mrsl x1h4wwuj xeuugli">
                                                                      Cost per
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
                                                                      62% (8)
                                                                    </span>
                                                                    <span class="xmi5d70 xw23nyj xo1l8bm x63nzvj xbsr9hj xq9mrsl x1h4wwuj xeuugli">
                                                                      Cost per
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

export default EditChartMain;

import React, { useEffect, useState } from "react";
import "../styles/EditComaping.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import MainLogoImage from "../assets/maind.jpeg";
import axios from "axios";
import SideBar from "../components/SideBar";
const EditCompaing = () => {
  const { id } = useParams();
  const [campaign, setCampaigns] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigation = useNavigate();
  const handleNavigation = () => {
    // Perform any logic before navigation
    navigation("/"); // Navigate to the home page without refreshing
  };
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
      <div>
        <div data-pagelet="AdsSideNavWithContent.react" class="">
          <SideBar />
        </div>
      </div>
      <div class="_2k0c _96v5 _8_1l snipcss-o723F style-VS3Gy" id="">
        <div
          style={{ marginLeft: "25px", zIndex: "999" }}
          class="x1a0uwpx x78zum5 x1ob5r32 xdt5ytf x5yr21d x1jj3tg0 x6ikm8r x10wlt62 x1iorvi4 x4uap5 x18d9i69 xkhd6sd x10l6tqk x187nhsf x1vjfegm x5jzwa4"
        >
          <div
            onClick={handleNavigation}
            class="xlup9mm x1gslohp xw3qccf x12nagc xsgj6o6 x1a2a7pz x1kky2od x889kno x1iji9kk x1a8lsjc x1sln4lm x1ypdohk x4nwuxf xmbozn3 x1lcm9me x1yr5g0i xrt01vj x10y3i5r snipcss0-1-1-2 snipcss-RfBNi"
            icon="[object Object]"
            aria-label="Close"
            role="button"
            tabindex="0"
            data-auto-logging-id="f67df74f4"
          >
            <i
              alt=""
              data-visualcompletion="css-img"
              class="img snipcss0-2-2-3 style-6rhjN"
              id="style-6rhjN"
            ></i>
            <div class="x1rg5ohu x67bb7w snipcss0-2-2-4" id="js_u5">
              <div class="x1ypdohk xlup9mm x1anpbxc xmo9yow xyorhqc x17adc0v x1kky2od x1ejq31n xd10rxx x1sy0etr x17r0tee x1a2a7pz snipcss0-3-4-5"></div>
            </div>
          </div>

          <div
            aria-disabled="false"
            aria-label="View charts (Ctrl+Y)"
            class="x972fbf xcfux6l x1qhh985 xm0m39n x1ejq31n xd10rxx x1sy0etr x17r0tee x15wryii x14yi0bh x2kcyu4 xmfk5bu x9f619 x1ypdohk xc9qbxq x1a2a7pz x889kno x1iji9kk x1a8lsjc x1sln4lm x1n2onr6 x14qfxbe x1gslohp x12nagc xsgj6o6 xw3qccf x1lcm9me x1yr5g0i xrt01vj x10y3i5r xjbqb8w snipcss-QxH4d"
            data-pitloot-persistonclick="false"
            id="insights_tray_button"
            role="button"
            tabindex="0"
            data-auto-logging-id="f635e58ec"
          >
            <div class="xbsr9hj">
              <div class="x3nfvp2 x120ccyz x140t73q" role="presentation">
                <div class="xtwfq29 style-ayZwS" id="style-ayZwS"></div>
              </div>
            </div>
          </div>
          <Link to="/editmainchart">
            <div
              aria-disabled="false"
              aria-label="Edit (Ctrl+U)"
              class="x972fbf xcfux6l x1qhh985 xm0m39n x1ejq31n xd10rxx x1sy0etr x17r0tee x15wryii x14yi0bh x2kcyu4 xmfk5bu x9f619 x1ypdohk xc9qbxq x1a2a7pz x889kno x1iji9kk x1a8lsjc x1sln4lm x1n2onr6 x14qfxbe x1gslohp x12nagc xsgj6o6 xw3qccf x1lcm9me x1yr5g0i xrt01vj x10y3i5r x4nwuxf snipcss0-4-16-17 snipcss-7MyY5"
              data-pitloot-persistonclick="false"
              role="button"
              tabindex="0"
              data-auto-logging-id="f1d7f5864"
            >
              <div class="xbsr9hj snipcss0-5-17-18">
                <div
                  class="x3nfvp2 x120ccyz x140t73q snipcss0-6-18-19"
                  role="presentation"
                >
                  <div
                    class="xtwfq29 snipcss0-7-19-20 style-6dsho"
                    id="style-6dsho"
                  ></div>
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
        <div style={{ paddingLeft: "14px" }} class="_96uw">
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
                    <div class="__qa __qb _2tr- style-lCINd" id="style-lCINd">
                      <div class="_65ab _65ac">
                        <div class="__q7 style-aCmhR" id="style-aCmhR"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              style={{ paddingLeft: "3px" }}
              class="_67gr style-23dHh"
              id="style-23dHh"
            >
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
                                    {campaign.campaingname}
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
                                          <div
                                            class="xtwfq29 style-gkYX5"
                                            id="style-gkYX5"
                                          ></div>
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
                                  <Link
                                    style={{
                                      textDecoration: "unset",
                                      color: "unset",
                                    }}
                                    to={`/editcampaingtwo/${campaign._id}`}
                                  >
                                    <span class="_3dfi _3dfj">
                                      {campaign.campaingname}
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
                                          <div
                                            class="xtwfq29 style-gkYX5"
                                            id="style-gkYX5"
                                          ></div>
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
                                    Promoting website: {campaign.campaingname}
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
                                          <div
                                            class="xtwfq29 style-gkYX5"
                                            id="style-gkYX5"
                                          ></div>
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
        <div
          class="_2k0g"
          style={{
            width: "1450px",
            backgroundImage: "linear-gradient(180deg, #f8e9ef, #dbe9fa)",
          }}
        >
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
                                  class="img style-EJeDq"
                                  id="style-EJeDq"
                                ></i>
                              </div>
                              ​
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
                                      {campaign.campaingname}
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
                                        class="img style-aD6jY"
                                        id="style-aD6jY"
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
                                  class="xtwfq29 style-gkYX5"
                                  id="style-gkYX5"
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
              <div class="x5yr21d x1q85c4o xiy17q3 x1nr1p0w x2li9jd xldge1k x6n32m9">
                <span
                  data-surface-wrapper="1"
                  data-non-int-surface="/am/hero_root:AdsPEMainAppWithLeftNavigation.react/editor_drawer/hero_root:AdsPECampaignGroupEditorContainer.react"
                  data-auto-logging-id="fd973865cdb0c8"
                  class="style-LLTUW"
                  id="style-LLTUW"
                >
                  <div class="x5yr21d">
                    <span
                      data-surface-wrapper="1"
                      data-surface="/am/editor_drawer/editor:campaign"
                      data-auto-logging-id="f3483f459f89c6"
                      class="style-rEieg"
                      id="style-rEieg"
                    >
                      <div class="_4nh-">
                        <div class="_705c">
                          <div class="x1iyjqo2 xs83m0k xdl72j9 x6ikm8r x1odjw0f">
                            <div class="x1iyjqo2 xrfz293 xr1yuqi xkrivgy x4ii5y1 x1gryazu">
                              <div class="_705b">
                                <div></div>
                                <div class="">
                                  <div class="">
                                    <div>
                                      <div class="x78zum5 x2lwn1j xeuugli xh8yej3">
                                        <div class="x78zum5 xdt5ytf x2lwn1j xeuugli xh8yej3 x193iq5w">
                                          <div
                                            class=""
                                            id="campaignGroupNameSection"
                                          >
                                            <div data-pagelet="campaignGroupNameSection">
                                              <span
                                                data-surface-wrapper="1"
                                                data-surface="/am/editor_drawer/editor:campaign/campaign_name_section"
                                                data-auto-logging-id="f61199d4730918"
                                                id="style-8Qoon"
                                                class="style-8Qoon"
                                              >
                                                <div class="x1n2onr6">
                                                  <div>
                                                    <div
                                                      aria-labelledby="js_2d"
                                                      class="x1gzqxud x1lcm9me x1yr5g0i xrt01vj x10y3i5r xhgxa4x xy5ysw6 x1qkj6lk xn3walq xnvurfn xv1ta3e x1opv7go x1dtnpoi xibdhds xtnng9g xhvrwov x13k1m86 xwx4but x1cpjm7i xszcg87 x1hmns74 xkk1bqk x14d4353 xsxiz9q x1rmj1tg xchklzq x9f619 xc8icb0 x1n2onr6 x1pvq41x xhhp2wi x14q35kh x1wa3ocq x1n7iyjn x1s928wv x1wsn0xg x1j6awrg x162n7g1 x1m1drc7 x4eaejv xi4xitw x5yr21d xh8yej3 xod5an3"
                                                      data-auto-logging-component-type="GeoCard"
                                                    >
                                                      <div class="x78zum5 xdt5ytf x5yr21d xedcshv x1t2pt76 xh8yej3">
                                                        <div class="x9f619 x78zum5 x2lah0s xh8yej3 xyamay9 x1l90r2v x1swvt13 x1pi30zi">
                                                          <div class="x1iyjqo2 xeuugli">
                                                            <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94">
                                                              <div class="x78zum5 xlup9mm">
                                                                <div class="x1rg5ohu x67bb7w">
                                                                  <span
                                                                    linger="200"
                                                                    class="_2kdf"
                                                                  >
                                                                    <div
                                                                      class="x3nfvp2 x120ccyz xs7e29d"
                                                                      role="presentation"
                                                                    >
                                                                      <div
                                                                        class="xtwfq29 style-jFog8"
                                                                        id="style-jFog8"
                                                                      ></div>
                                                                    </div>
                                                                  </span>
                                                                </div>
                                                              </div>
                                                              <div
                                                                aria-level="3"
                                                                class="x1xqt7ti x1uxerd5 x1xlr1w8 xrohxju xbsr9hj xq9mrsl x1yc453h x1h4wwuj xeuugli"
                                                                role="heading"
                                                              >
                                                                Campaign name
                                                              </div>
                                                              <div class="x78zum5 x1q0g3np xozqiw3 xeuugli x1iyjqo2 x2lah0s x19lwn94 x6s0dn4 x13a6bvl xu0aao5 x9otpla x1wsgfga"></div>
                                                            </div>
                                                          </div>
                                                        </div>
                                                        <div class="x9f619 x78zum5 x1iyjqo2 x5yr21d x2lwn1j x1n2onr6 xh8yej3">
                                                          <div class="xh8yej3 x18d9i69 x1plvlek xryxfnj">
                                                            <div class="xjm9jq1 xg01cxk x47corl xh8yej3 x1jyxor1"></div>
                                                            <div
                                                              class="x1iyjqo2 xs83m0k xdl72j9 x3igimt xedcshv x1t2pt76 x1l90r2v x1swvt13 x1pi30zi xexx8yu"
                                                              data-auto-logging-component-type="GeoSection"
                                                              data-auto-logging-dependent-region=""
                                                            >
                                                              <div class="x6s0dn4 x78zum5 x2lwn1j xeuugli">
                                                                <div class="xh8yej3 x1yn0g08">
                                                                  <div class="x78zum5 xdt5ytf xdl72j9 x1iyjqo2 xeuugli x1n2onr6 xh8yej3">
                                                                    <div
                                                                      class="x1qvwoe0 xjm9jq1 x1y332i5 xcwd3tp x1jyxor1 x39eecv x6ikm8r x10wlt62 x10l6tqk xuxw1ft x1i1rx1s style-ExbDL"
                                                                      data-sscoverage-ignore="true"
                                                                      id="style-ExbDL"
                                                                    >
                                                                      <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94">
                                                                        <div class="x1iyjqo2">
                                                                          <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x65s2av">
                                                                            <label
                                                                              id="js_2g"
                                                                              for="js_2f"
                                                                            >
                                                                              <span class="xmi5d70 x1fvot60 xxio538 xbsr9hj xq9mrsl x1mzt3pk x1vvkbs x13faqbe x117nqv4 xeuugli"></span>
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
                                                                                    <input
                                                                                      aria-autocomplete="list"
                                                                                      aria-expanded="false"
                                                                                      aria-haspopup="listbox"
                                                                                      role="combobox"
                                                                                      placeholder="Enter your campaign name here..."
                                                                                      id="js_2f"
                                                                                      aria-labelledby="js_2g"
                                                                                      aria-controls="js_2e"
                                                                                      aria-busy="false"
                                                                                      aria-disabled="false"
                                                                                      autocomplete="off"
                                                                                      class="xjbqb8w x972fbf xcfux6l x1qhh985 xm0m39n xdj266r x11i5rnm xat24cr x1mh8g0r x1t137rt xexx8yu x4uap5 x18d9i69 xkhd6sd xr4vacz x1gnnqk1 xbsr9hj x1urst0s x1glnyev x1ad04t7 x1ix68h3 x19gujb8 xni1clt x1tutvks xfrpkgu x15h3p50 x1gf4pb6 xh7izdl x10emqs4 x2yyzbt xu8dvwe xmi5d70 x1fvot60 xo1l8bm xxio538 x1rffpxw xh8yej3"
                                                                                      type="text"
                                                                                      value={
                                                                                        campaign.campaingname
                                                                                      }
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
                                                                <div class="x17adc0v x1sdyfia x78zum5 x17zd0t2">
                                                                  <div class="x1rg5ohu x67bb7w">
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
                                                                                Create
                                                                                Template
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
                                          <div
                                            class=""
                                            id="campaignGroupRegulatedCategorySection"
                                          >
                                            <div data-pagelet="campaignGroupRegulatedCategorySection">
                                              <span
                                                data-surface-wrapper="1"
                                                data-surface="/am/editor_drawer/editor:campaign/campaign_regulated_category_section"
                                                data-auto-logging-id="f3ae74e85af73e"
                                                id="style-QQpSX"
                                                class="style-QQpSX"
                                              >
                                                <div class="x1n2onr6">
                                                  <div>
                                                    <div
                                                      aria-labelledby="js_1e"
                                                      class="x1gzqxud x1lcm9me x1yr5g0i xrt01vj x10y3i5r xhgxa4x xy5ysw6 x1qkj6lk xn3walq xnvurfn xv1ta3e x1opv7go x1dtnpoi xibdhds xtnng9g xhvrwov x13k1m86 xwx4but x1cpjm7i xszcg87 x1hmns74 xkk1bqk x14d4353 xsxiz9q x1rmj1tg xchklzq x9f619 xc8icb0 x1n2onr6 x1pvq41x xhhp2wi x14q35kh x1wa3ocq x1n7iyjn x1s928wv x1wsn0xg x1j6awrg x162n7g1 x1m1drc7 x4eaejv xi4xitw x5yr21d xh8yej3 xod5an3"
                                                      data-auto-logging-component-type="GeoCard"
                                                    >
                                                      <div class="x78zum5 xdt5ytf x5yr21d xedcshv x1t2pt76 xh8yej3">
                                                        <div class="x9f619 x78zum5 x2lah0s xh8yej3 xyamay9 x1l90r2v x1swvt13 x1pi30zi">
                                                          <div class="x1iyjqo2 xeuugli">
                                                            <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94">
                                                              <div class="x78zum5 xlup9mm">
                                                                <div class="x1rg5ohu x67bb7w">
                                                                  <span
                                                                    linger="200"
                                                                    class="_2kdf"
                                                                  >
                                                                    <div
                                                                      class="x3nfvp2 x120ccyz xs7e29d"
                                                                      role="presentation"
                                                                    >
                                                                      <div
                                                                        class="xtwfq29 style-py74r"
                                                                        id="style-py74r"
                                                                      ></div>
                                                                    </div>
                                                                  </span>
                                                                </div>
                                                              </div>
                                                              <div
                                                                style={{
                                                                  textAlign:
                                                                    "left",
                                                                  marginLeft:
                                                                    "-26px",
                                                                }}
                                                                class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 snipcss-Qz3Lz"
                                                              >
                                                                <div
                                                                  style={{
                                                                    textAlign:
                                                                      "left",
                                                                  }}
                                                                  class="x78zum5 xlup9mm"
                                                                >
                                                                  <div
                                                                    style={{
                                                                      textAlign:
                                                                        "left",
                                                                    }}
                                                                    class="x1rg5ohu x67bb7w"
                                                                  >
                                                                    <span
                                                                      style={{
                                                                        textAlign:
                                                                          "left",
                                                                      }}
                                                                      linger="200"
                                                                      class="_2kdf"
                                                                    >
                                                                      <div
                                                                        style={{
                                                                          textAlign:
                                                                            "left",
                                                                        }}
                                                                        class="x3nfvp2 x120ccyz xmbzoqv"
                                                                        role="presentation"
                                                                      >
                                                                        <div
                                                                          class="xtwfq29 style-iQmJa"
                                                                          id="style-iQmJa"
                                                                        ></div>
                                                                      </div>
                                                                    </span>
                                                                  </div>
                                                                </div>
                                                                <div
                                                                  style={{
                                                                    textAlign:
                                                                      "left",
                                                                  }}
                                                                  aria-level="3"
                                                                  class="x1xqt7ti x1uxerd5 x1xlr1w8 xrohxju xbsr9hj xq9mrsl x1yc453h x1h4wwuj xeuugli"
                                                                  role="heading"
                                                                >
                                                                  Special ad
                                                                  categories
                                                                </div>
                                                                <div class="x78zum5 x1q0g3np xozqiw3 xeuugli x1iyjqo2 x2lah0s x19lwn94 x6s0dn4 x13a6bvl xu0aao5 x9otpla x1wsgfga"></div>
                                                              </div>
                                                              <div class="x78zum5 x1q0g3np xozqiw3 xeuugli x1iyjqo2 x2lah0s x19lwn94 x6s0dn4 x13a6bvl xu0aao5 x9otpla x1wsgfga"></div>
                                                            </div>
                                                            <div class="xmi5d70 x1fvot60 xo1l8bm xxio538 xbsr9hj xq9mrsl x1h4wwuj xeuugli x1xmf6yo">
                                                              <div
                                                                style={{
                                                                  textAlign:
                                                                    "left",
                                                                }}
                                                                class="x1xmf6yo"
                                                              >
                                                                Declare if your
                                                                ads are related
                                                                to credit,
                                                                employment,
                                                                housing, social
                                                                issues,
                                                                elections or
                                                                politics.
                                                                Requirements
                                                                differ by
                                                                country.{" "}
                                                                <span>
                                                                  <a
                                                                    class="xt0psk2 x1hl2dhg xt0b8zv xmi5d70 xxio538 x1qsmy5i xq9mrsl x1yc453h x1h4wwuj x1qlqyl8 x1pd3egz"
                                                                    target="_blank"
                                                                    href="https://www.facebook.com/business/help/298000447747885"
                                                                  >
                                                                    Learn more
                                                                    about
                                                                    special ad
                                                                    categories
                                                                  </a>
                                                                </span>
                                                              </div>
                                                            </div>
                                                          </div>
                                                        </div>
                                                        <div class="x9f619 x78zum5 x1iyjqo2 x5yr21d x2lwn1j x1n2onr6 xh8yej3">
                                                          <div class="xh8yej3 x18d9i69 x1plvlek xryxfnj">
                                                            <div class="xjm9jq1 xg01cxk x47corl xh8yej3 x1jyxor1"></div>
                                                            <div
                                                              class="x1iyjqo2 xs83m0k xdl72j9 x3igimt xedcshv x1t2pt76 x1l90r2v x1swvt13 x1pi30zi xexx8yu"
                                                              data-auto-logging-component-type="GeoSection"
                                                              data-auto-logging-dependent-region=""
                                                            >
                                                              <div class="xh8yej3 x1n2onr6">
                                                                <div class="_3qn7 _61-0 _2fyh _1a9e">
                                                                  <div
                                                                    aria-level="4"
                                                                    class="x1xqt7ti xsuwoey x1xlr1w8 x63nzvj xbsr9hj xq9mrsl x1yc453h x1h4wwuj xeuugli"
                                                                    role="heading"
                                                                  >
                                                                    Benefits of
                                                                    declaring
                                                                    special ad
                                                                    categories
                                                                  </div>
                                                                  <span
                                                                    style={{
                                                                      textAlign:
                                                                        "left",
                                                                    }}
                                                                    class="xmi5d70 x1fvot60 xo1l8bm xxio538 xbsr9hj xq9mrsl x1h4wwuj xeuugli x1e56ztr"
                                                                  >
                                                                    Accurately
                                                                    declaring
                                                                    your ad
                                                                    categories
                                                                    helps you
                                                                    run ads
                                                                    which are
                                                                    compliant
                                                                    with our
                                                                    advertising
                                                                    standards
                                                                    and helps
                                                                    prevent
                                                                    potential ad
                                                                    rejections.
                                                                  </span>
                                                                  <div
                                                                    style={{
                                                                      textAlign:
                                                                        "left",
                                                                    }}
                                                                    id="style-4Qs1K"
                                                                    class="style-4Qs1K"
                                                                  >
                                                                    <div
                                                                      class="x3nfvp2 x193iq5w xxymvpz x1yztbdb"
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
                                                                                Categorise
                                                                                your
                                                                                ads
                                                                              </div>
                                                                            </div>
                                                                          </div>
                                                                        </span>
                                                                      </div>
                                                                    </div>
                                                                  </div>
                                                                </div>
                                                                <div
                                                                  id="style-r7sNt"
                                                                  class="style-r7sNt"
                                                                >
                                                                  <div class="x78zum5 xdt5ytf xdl72j9 x1iyjqo2 xeuugli x1n2onr6 xh8yej3">
                                                                    <div class="x78zum5 xdt5ytf xozqiw3 x2lwn1j xeuugli x1iyjqo2 xyqj3jm x5yr21d">
                                                                      <div
                                                                        class="style-jIsAX"
                                                                        data-sscoverage-ignore="true"
                                                                        id="style-jIsAX"
                                                                      >
                                                                        <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94">
                                                                          <div class="x1iyjqo2">
                                                                            <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x65s2av">
                                                                              <label
                                                                                id="js_ae"
                                                                                for="js_ad"
                                                                              >
                                                                                <span class="xmi5d70 x1fvot60 xxio538 xbsr9hj xq9mrsl x1mzt3pk x1vvkbs x13faqbe x117nqv4 xeuugli">
                                                                                  Categories
                                                                                </span>
                                                                              </label>
                                                                            </div>
                                                                            <div
                                                                              style={{
                                                                                textAlign:
                                                                                  "left",
                                                                              }}
                                                                              class="x mi5d70 xw23nyj xo1l8bm x63nzvj xbsr9hj xq9mrsl x1h4wwuj xeuugli"
                                                                              id="js_af"
                                                                            >
                                                                              Select
                                                                              the
                                                                              categories
                                                                              that
                                                                              best
                                                                              describe
                                                                              what
                                                                              this
                                                                              campaign
                                                                              will
                                                                              advertise.
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
                                                                                aria-describedby="js_af"
                                                                                aria-expanded="false"
                                                                                aria-haspopup="listbox"
                                                                                aria-invalid="false"
                                                                                aria-labelledby="js_ae js_ai"
                                                                                aria-owns="js_ac"
                                                                                class="x1i10hfl x1qjc9v5 xjbqb8w xjqpnuy xa49m3k xqeqjp1 x2hbi6w x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x78zum5 xdl72j9 xdt5ytf x2lah0s xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli xexx8yu x4uap5 x18d9i69 xkhd6sd x1n2onr6 x16tdsg8 x1hl2dhg xggy1nq x1ja2u2z x1ypdohk xh8yej3 x1t137rt"
                                                                                id="js_ad"
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
                                                                                              style={{
                                                                                                textAlign:
                                                                                                  "left",
                                                                                              }}
                                                                                              class="xmi5d70 x1fvot60 xo1l8bm xxio538 x1541jtf xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj xeuugli"
                                                                                              id="js_ai"
                                                                                            >
                                                                                              Declare
                                                                                              category
                                                                                              if
                                                                                              applicable
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
                                                                                            class="xtwfq29 style-d9BU7"
                                                                                            id="style-d9BU7"
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
                                                                  </div>
                                                                </div>
                                                                <div class="_3-8x"></div>
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
                                          <div
                                            class=""
                                            id="campaignGroupDetailsSection"
                                          >
                                            <div data-pagelet="campaignGroupDetailsSection">
                                              <span
                                                data-surface-wrapper="1"
                                                data-surface="/am/editor_drawer/editor:campaign/campaign_details_section"
                                                data-auto-logging-id="f23dcd20465da5c"
                                                id="style-5hL8B"
                                                class="style-5hL8B"
                                              >
                                                <div class="x1n2onr6">
                                                  <div>
                                                    <div
                                                      aria-labelledby="js_1f"
                                                      class="x1gzqxud x1lcm9me x1yr5g0i xrt01vj x10y3i5r xhgxa4x xy5ysw6 x1qkj6lk xn3walq xnvurfn xv1ta3e x1opv7go x1dtnpoi xibdhds xtnng9g xhvrwov x13k1m86 xwx4but x1cpjm7i xszcg87 x1hmns74 xkk1bqk x14d4353 xsxiz9q x1rmj1tg xchklzq x9f619 xc8icb0 x1n2onr6 x1pvq41x xhhp2wi x14q35kh x1wa3ocq x1n7iyjn x1s928wv x1wsn0xg x1j6awrg x162n7g1 x1m1drc7 x4eaejv xi4xitw x5yr21d xh8yej3 xod5an3"
                                                      data-auto-logging-component-type="GeoCard"
                                                    >
                                                      <div class="x78zum5 xdt5ytf x5yr21d xedcshv x1t2pt76 xh8yej3">
                                                        <div
                                                          style={{
                                                            textAlign: "left",
                                                            padding: "10px",
                                                          }}
                                                          class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 snipcss-Qz3Lz"
                                                        >
                                                          <div
                                                            style={{
                                                              textAlign: "left",
                                                            }}
                                                            class="x78zum5 xlup9mm"
                                                          >
                                                            <div
                                                              style={{
                                                                textAlign:
                                                                  "left",
                                                              }}
                                                              class="x1rg5ohu x67bb7w"
                                                            >
                                                              <span
                                                                style={{
                                                                  textAlign:
                                                                    "left",
                                                                }}
                                                                linger="200"
                                                                class="_2kdf"
                                                              >
                                                                <div
                                                                  style={{
                                                                    textAlign:
                                                                      "left",
                                                                  }}
                                                                  class="x3nfvp2 x120ccyz xmbzoqv"
                                                                  role="presentation"
                                                                >
                                                                  <div
                                                                    class="xtwfq29 style-iQmJa"
                                                                    id="style-iQmJa"
                                                                  ></div>
                                                                </div>
                                                              </span>
                                                            </div>
                                                          </div>
                                                          <div
                                                            style={{
                                                              textAlign: "left",
                                                            }}
                                                            aria-level="3"
                                                            class="x1xqt7ti x1uxerd5 x1xlr1w8 xrohxju xbsr9hj xq9mrsl x1yc453h x1h4wwuj xeuugli"
                                                            role="heading"
                                                          >
                                                            Campaign details
                                                          </div>
                                                          <div class="x78zum5 x1q0g3np xozqiw3 xeuugli x1iyjqo2 x2lah0s x19lwn94 x6s0dn4 x13a6bvl xu0aao5 x9otpla x1wsgfga"></div>
                                                        </div>
                                                        <div class="x9f619 x78zum5 x1iyjqo2 x5yr21d x2lwn1j x1n2onr6 xh8yej3">
                                                          <div class="xh8yej3 x18d9i69 x1plvlek xryxfnj">
                                                            <div class="xjm9jq1 xg01cxk x47corl xh8yej3 x1jyxor1"></div>
                                                            <div
                                                              class="x1iyjqo2 xs83m0k xdl72j9 x3igimt xedcshv x1t2pt76 x1l90r2v x1swvt13 x1pi30zi xexx8yu"
                                                              data-auto-logging-component-type="GeoSection"
                                                              data-auto-logging-dependent-region=""
                                                            >
                                                              <div class="x78zum5 x2lwn1j xeuugli x1yztbdb">
                                                                <div class="_7yfl _9iq_">
                                                                  <div class="x12nagc xh8yej3">
                                                                    <div class="x78zum5 xdt5ytf xdl72j9 x1iyjqo2 xeuugli x1n2onr6 xh8yej3">
                                                                      <div class="x78zum5 xdt5ytf xozqiw3 x2lwn1j xeuugli x1iyjqo2 xyqj3jm x5yr21d">
                                                                        <div
                                                                          class="style-D9SFl"
                                                                          data-sscoverage-ignore="true"
                                                                          id="style-D9SFl"
                                                                        >
                                                                          <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94">
                                                                            <div class="x1iyjqo2">
                                                                              <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x65s2av">
                                                                                <label
                                                                                  id="js_4w"
                                                                                  for="js_4v"
                                                                                >
                                                                                  <span class="xmi5d70 x1fvot60 xxio538 xbsr9hj xq9mrsl x1mzt3pk x1vvkbs x13faqbe x117nqv4 xeuugli">
                                                                                    Buying
                                                                                    type
                                                                                  </span>
                                                                                </label>
                                                                              </div>
                                                                            </div>
                                                                          </div>
                                                                        </div>
                                                                        <div class="xh8yej3">
                                                                          <div
                                                                            aria-busy="false"
                                                                            aria-disabled="true"
                                                                            aria-expanded="false"
                                                                            aria-haspopup="listbox"
                                                                            aria-invalid="false"
                                                                            aria-labelledby="js_4w js_4z"
                                                                            aria-owns="js_4u"
                                                                            class="x1i10hfl x1qjc9v5 xjbqb8w xjqpnuy xa49m3k xqeqjp1 x2hbi6w x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x78zum5 xdl72j9 xdt5ytf x2lah0s xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli xexx8yu x4uap5 x18d9i69 xkhd6sd x1n2onr6 x16tdsg8 x1hl2dhg xggy1nq x1ja2u2z xh8yej3 x1t137rt x1h6gzvc"
                                                                            id="js_4v"
                                                                            role="combobox"
                                                                            tabindex="-1"
                                                                          >
                                                                            <div class="x1n2onr6 xh8yej3">
                                                                              <div class="x6s0dn4 x78zum5 x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x178xt8z xm81vs4 xso031l xy80clv xwebqov xvyu6v8 xrsgblv x10lij0i x1lcm9me x1yr5g0i xrt01vj x10y3i5r x10cdfl8 xis6omg xm7lytj x1ykpatu xlu9dua x1w2lkzu">
                                                                                <div class="x1s85apg"></div>
                                                                                <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94">
                                                                                  <div class="x6s0dn4 x78zum5 x1q0g3np x1a02dak x2lwn1j xeuugli x1iyjqo2 x19lwn94">
                                                                                    <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94">
                                                                                      <div class="xjbqb8w x972fbf xcfux6l x1qhh985 xm0m39n xdj266r x11i5rnm xat24cr x1mh8g0r x1t137rt xexx8yu x4uap5 x18d9i69 xkhd6sd xlyipyv xr4vacz x1gnnqk1 xis6omg x1urst0s x1glnyev x1ad04t7 x1ix68h3 x19gujb8 xni1clt x1tutvks xfrpkgu x15h3p50 x1gf4pb6 xh7izdl x10emqs4 x2yyzbt xu8dvwe xmi5d70 x1fvot60 xo1l8bm xxio538 x1iyjqo2 x6ikm8r x10wlt62">
                                                                                        <div
                                                                                          style={{
                                                                                            textAlign:
                                                                                              "left",
                                                                                          }}
                                                                                          class="xmi5d70 x1fvot60 xo1l8bm xxio538 xis6omg xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj xeuugli"
                                                                                          id="js_4z"
                                                                                        >
                                                                                          Auction
                                                                                        </div>
                                                                                      </div>
                                                                                    </div>
                                                                                  </div>
                                                                                  <div class="x6s0dn4 x3nfvp2 x1q0g3np xozqiw3 x2lwn1j xeuugli x1c4vz4f x19lwn94 xmi5d70 x1fvot60 xo1l8bm xxio538 xbsr9hj xq9mrsl xqcrz7y x2lah0s">
                                                                                    ​
                                                                                    <div
                                                                                      class="x3nfvp2 x120ccyz x18f9xcu"
                                                                                      role="presentation"
                                                                                    >
                                                                                      <div
                                                                                        class="xtwfq29 style-THJKk"
                                                                                        id="style-THJKk"
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
                                                                    <div>
                                                                      <div></div>
                                                                    </div>
                                                                  </div>
                                                                </div>
                                                              </div>
                                                              <div class="_7yfl _9iq_">
                                                                <div class="x78zum5 xdt5ytf xdl72j9 x1iyjqo2 xeuugli x1n2onr6 xh8yej3">
                                                                  <div class="x78zum5 xdt5ytf xozqiw3 x2lwn1j xeuugli x1iyjqo2 xyqj3jm x5yr21d">
                                                                    <div
                                                                      class="style-6NAl3"
                                                                      data-sscoverage-ignore="true"
                                                                      id="style-6NAl3"
                                                                    >
                                                                      <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94">
                                                                        <div class="x1iyjqo2">
                                                                          <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x65s2av">
                                                                            <label
                                                                              id="js_51"
                                                                              for="js_50"
                                                                            >
                                                                              <span class="xmi5d70 x1fvot60 xxio538 xbsr9hj xq9mrsl x1mzt3pk x1vvkbs x13faqbe x117nqv4 xeuugli">
                                                                                Campaign
                                                                                objective
                                                                              </span>
                                                                            </label>
                                                                            <div class="xbsr9hj x78zum5">
                                                                              <div
                                                                                class="x3nfvp2 x120ccyz x1heor9g"
                                                                                role="presentation"
                                                                              >
                                                                                <div
                                                                                  class="xtwfq29 style-V8ElM"
                                                                                  id="style-V8ElM"
                                                                                ></div>
                                                                              </div>
                                                                            </div>
                                                                          </div>
                                                                        </div>
                                                                      </div>
                                                                    </div>
                                                                    <div class="x1lcm9me x1yr5g0i xo71vjh x5pf9jr x78zum5 xdt5ytf x1iyjqo2">
                                                                      <div class="x78zum5 xdt5ytf x1iyjqo2">
                                                                        <div class="x1iyjqo2">
                                                                          <div class="xod5an3">
                                                                            <div class="_3qn7 _61-0 _2fyh _1a9e">
                                                                              <div class="xh8yej3">
                                                                                <div
                                                                                  aria-busy="false"
                                                                                  aria-disabled="true"
                                                                                  aria-expanded="false"
                                                                                  aria-haspopup="listbox"
                                                                                  aria-invalid="false"
                                                                                  aria-labelledby="js_54"
                                                                                  class="x1i10hfl x1qjc9v5 xjbqb8w xjqpnuy xa49m3k xqeqjp1 x2hbi6w x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x78zum5 xdl72j9 xdt5ytf x2lah0s xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli xexx8yu x4uap5 x18d9i69 xkhd6sd x1n2onr6 x16tdsg8 x1hl2dhg xggy1nq x1ja2u2z xh8yej3 x1t137rt x1h6gzvc"
                                                                                  role="combobox"
                                                                                  tabindex="-1"
                                                                                >
                                                                                  <div class="x1n2onr6 xh8yej3">
                                                                                    <div class="x6s0dn4 x78zum5 x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x178xt8z xm81vs4 xso031l xy80clv xwebqov xvyu6v8 xrsgblv x10lij0i x1lcm9me x1yr5g0i xrt01vj x10y3i5r x10cdfl8 xis6omg xm7lytj x1ykpatu xlu9dua x1w2lkzu">
                                                                                      <div class="x1s85apg"></div>
                                                                                      <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94">
                                                                                        <div class="x6s0dn4 x78zum5 x1q0g3np x1a02dak x2lwn1j xeuugli x1iyjqo2 x19lwn94">
                                                                                          <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94">
                                                                                            <div class="xjbqb8w x972fbf xcfux6l x1qhh985 xm0m39n xdj266r x11i5rnm xat24cr x1mh8g0r x1t137rt xexx8yu x4uap5 x18d9i69 xkhd6sd xlyipyv xr4vacz x1gnnqk1 xis6omg x1urst0s x1glnyev x1ad04t7 x1ix68h3 x19gujb8 xni1clt x1tutvks xfrpkgu x15h3p50 x1gf4pb6 xh7izdl x10emqs4 x2yyzbt xu8dvwe xmi5d70 x1fvot60 xo1l8bm xxio538 x1iyjqo2 x6ikm8r x10wlt62">
                                                                                              <div
                                                                                                style={{
                                                                                                  textAlign:
                                                                                                    "left",
                                                                                                }}
                                                                                                class="xmi5d70 x1fvot60 xo1l8bm xxio538 xis6omg xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj xeuugli"
                                                                                                id="js_54"
                                                                                              >
                                                                                                Traffic
                                                                                              </div>
                                                                                            </div>
                                                                                          </div>
                                                                                        </div>
                                                                                        <div class="x6s0dn4 x3nfvp2 x1q0g3np xozqiw3 x2lwn1j xeuugli x1c4vz4f x19lwn94 xmi5d70 x1fvot60 xo1l8bm xxio538 xbsr9hj xq9mrsl xqcrz7y x2lah0s">
                                                                                          ​
                                                                                          <div
                                                                                            class="x3nfvp2 x120ccyz x18f9xcu"
                                                                                            role="presentation"
                                                                                          >
                                                                                            <div
                                                                                              class="xtwfq29 style-oVFB2"
                                                                                              id="style-oVFB2"
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
                                                                    </div>
                                                                  </div>
                                                                </div>
                                                              </div>
                                                              <div class="x78zum5 xdt5ytf xdl72j9 x1iyjqo2 xeuugli x1n2onr6 xh8yej3">
                                                                <div class="x78zum5 xdt5ytf xozqiw3 x2lwn1j xeuugli x1iyjqo2 xyqj3jm x5yr21d">
                                                                  <div
                                                                    class="style-lGeqH"
                                                                    data-sscoverage-ignore="true"
                                                                    id="style-lGeqH"
                                                                  >
                                                                    <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94">
                                                                      <div class="x1iyjqo2">
                                                                        <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x65s2av">
                                                                          <label
                                                                            id="js_56"
                                                                            for="js_55"
                                                                          >
                                                                            <span class="xmi5d70 x1fvot60 xxio538 xbsr9hj xq9mrsl x1mzt3pk x1vvkbs x13faqbe x117nqv4 xeuugli"></span>
                                                                          </label>
                                                                        </div>
                                                                      </div>
                                                                    </div>
                                                                  </div>
                                                                  <div class="x1lcm9me x1yr5g0i xo71vjh x5pf9jr x78zum5 xdt5ytf x1iyjqo2">
                                                                    <div class="x78zum5 xdt5ytf x1iyjqo2">
                                                                      <div class="x1iyjqo2"></div>
                                                                    </div>
                                                                  </div>
                                                                </div>
                                                              </div>
                                                              <div class="_80pc">
                                                                <div
                                                                  class="_3-8x clearfix"
                                                                  left="[object Object]"
                                                                  right="[object Object]"
                                                                  direction="left"
                                                                >
                                                                  <div class="_ohe">
                                                                    <div>
                                                                      <div class="_3qn7 _61-3 _2fyi _3qnf">
                                                                        <div
                                                                          class="x12nagc style-pgRDT"
                                                                          id="style-pgRDT"
                                                                        >
                                                                          <div class="x6s0dn4 x78zum5 x2lwn1j xeuugli">
                                                                            <div
                                                                              class=""
                                                                              data-sscoverage-ignore="true"
                                                                            >
                                                                              <label id="js_59">
                                                                                <span class="xmi5d70 x1fvot60 xxio538 xbsr9hj xq9mrsl x1mzt3pk x1vvkbs x13faqbe x117nqv4 xeuugli"></span>
                                                                              </label>
                                                                            </div>
                                                                          </div>
                                                                        </div>
                                                                      </div>
                                                                      <div class="_21op"></div>
                                                                    </div>
                                                                  </div>
                                                                  <div class="">
                                                                    <div class="_42ef">
                                                                      <div>
                                                                        <span>
                                                                          <a
                                                                            class="xt0psk2 x1hl2dhg xt0b8zv xmi5d70 x1fvot60 xxio538 x1qsmy5i xq9mrsl x1yc453h x1h4wwuj x1fcty0u"
                                                                            href="#"
                                                                          >
                                                                            <div class="x6s0dn4 x78zum5 x2lwn1j xeuugli">
                                                                              Show
                                                                              more
                                                                              options
                                                                              <div
                                                                                class="x3nfvp2 x120ccyz x1heor9g x12mruv9"
                                                                                role="presentation"
                                                                              >
                                                                                <div
                                                                                  class="xtwfq29 style-MZo1e"
                                                                                  id="style-MZo1e"
                                                                                ></div>
                                                                              </div>
                                                                            </div>
                                                                          </a>
                                                                        </span>
                                                                        <div
                                                                          data-visualcompletion="ignore"
                                                                          class=""
                                                                        ></div>
                                                                        <div
                                                                          data-visualcompletion="ignore"
                                                                          class=""
                                                                        ></div>
                                                                      </div>
                                                                    </div>
                                                                  </div>
                                                                </div>
                                                              </div>
                                                              <div class="xw7yly9 x1yztbdb"></div>
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
                                          <div
                                            class=""
                                            id="campaignGroupSplitTestConvergenceMessageSection"
                                          >
                                            <div data-pagelet="campaignGroupSplitTestConvergenceMessageSection">
                                              <span
                                                data-surface-wrapper="1"
                                                data-surface="/am/editor_drawer/editor:campaign/campaign_split_test_convergence_message_section"
                                                data-auto-logging-id="f32ea4d7ccc1a34"
                                                id="style-SYpEk"
                                                class="style-SYpEk"
                                              >
                                                <div class="x1n2onr6">
                                                  <div>
                                                    <div
                                                      aria-labelledby="js_1g"
                                                      class="x1gzqxud x1lcm9me x1yr5g0i xrt01vj x10y3i5r xhgxa4x xy5ysw6 x1qkj6lk xn3walq xnvurfn xv1ta3e x1opv7go x1dtnpoi xibdhds xtnng9g xhvrwov x13k1m86 xwx4but x1cpjm7i xszcg87 x1hmns74 xkk1bqk x14d4353 xsxiz9q x1rmj1tg xchklzq x9f619 xc8icb0 x1n2onr6 x1pvq41x xhhp2wi x14q35kh x1wa3ocq x1n7iyjn x1s928wv x1wsn0xg x1j6awrg x162n7g1 x1m1drc7 x4eaejv xi4xitw x5yr21d xh8yej3 xod5an3"
                                                      data-auto-logging-component-type="GeoCard"
                                                    >
                                                      <div class="x78zum5 xdt5ytf x5yr21d xedcshv x1t2pt76 xh8yej3">
                                                        <div class="x9f619 x78zum5 x2lah0s xh8yej3 xyamay9 x1l90r2v x1swvt13 x1pi30zi">
                                                          <div class="x1iyjqo2 xeuugli">
                                                            <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94">
                                                              <div
                                                                aria-level="3"
                                                                class="x1xqt7ti x1uxerd5 x1xlr1w8 xrohxju xbsr9hj xq9mrsl x1yc453h x1h4wwuj xeuugli"
                                                                role="heading"
                                                              >
                                                                A/B test
                                                              </div>
                                                              <div class="x78zum5 x1q0g3np xozqiw3 xeuugli x1iyjqo2 x2lah0s x19lwn94 x6s0dn4 x13a6bvl xu0aao5 x9otpla x1wsgfga"></div>
                                                            </div>
                                                          </div>
                                                        </div>
                                                        <div class="x9f619 x78zum5 x1iyjqo2 x5yr21d x2lwn1j x1n2onr6 xh8yej3">
                                                          <div class="xh8yej3 x18d9i69 x1plvlek xryxfnj">
                                                            <div class="xjm9jq1 xg01cxk x47corl xh8yej3 x1jyxor1"></div>
                                                            <div
                                                              class="x1iyjqo2 xs83m0k xdl72j9 x3igimt xedcshv x1t2pt76 x1l90r2v x1swvt13 x1pi30zi xexx8yu"
                                                              data-auto-logging-component-type="GeoSection"
                                                              data-auto-logging-dependent-region=""
                                                            >
                                                              <div class="x1cy8zhl x78zum5 xdt5ytf xozqiw3 x2lwn1j xeuugli x1iyjqo2 x1kxxb1g">
                                                                <span
                                                                  style={{
                                                                    textAlign:
                                                                      "left",
                                                                  }}
                                                                  class="xmi5d70 x1fvot60 xo1l8bm xxio538 xbsr9hj xq9mrsl x1h4wwuj xeuugli"
                                                                >
                                                                  To help
                                                                  improve ad
                                                                  performance,
                                                                  test versions
                                                                  with different
                                                                  images, text,
                                                                  audiences or
                                                                  placements.
                                                                  For accuracy,
                                                                  each one will
                                                                  be shown to
                                                                  separate
                                                                  groups of your
                                                                  audience.
                                                                </span>
                                                                <div class="x6s0dn4 x78zum5 x2lwn1j xeuugli x14vqqas">
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
                                                                              Create
                                                                              A/B
                                                                              test
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
                                                </div>
                                              </span>
                                            </div>
                                          </div>
                                          <div
                                            class=""
                                            id="campaignGroupBudgetSection"
                                          >
                                            <div data-pagelet="campaignGroupBudgetSection">
                                              <span
                                                data-surface-wrapper="1"
                                                data-surface="/am/editor_drawer/editor:campaign/campaign_budget_section"
                                                data-auto-logging-id="f50ab7a9f805c"
                                                id="style-sogtO"
                                                class="style-sogtO"
                                              >
                                                <div>
                                                  <div class="x1n2onr6">
                                                    <div>
                                                      <div
                                                        aria-labelledby="js_3u"
                                                        class="x1gzqxud x1lcm9me x1yr5g0i xrt01vj x10y3i5r xhgxa4x xy5ysw6 x1qkj6lk xn3walq xnvurfn xv1ta3e x1opv7go x1dtnpoi xibdhds xtnng9g xhvrwov x13k1m86 xwx4but x1cpjm7i xszcg87 x1hmns74 xkk1bqk x14d4353 xsxiz9q x1rmj1tg xchklzq x9f619 xc8icb0 x1n2onr6 x1pvq41x xhhp2wi x14q35kh x1wa3ocq x1n7iyjn x1s928wv x1wsn0xg x1j6awrg x162n7g1 x1m1drc7 x4eaejv xi4xitw x5yr21d xh8yej3 xod5an3"
                                                        data-auto-logging-component-type="GeoCard"
                                                      >
                                                        <div class="x78zum5 xdt5ytf x5yr21d xedcshv x1t2pt76 xh8yej3">
                                                          <div class="x9f619 x78zum5 x2lah0s xh8yej3 xyamay9 x1l90r2v x1swvt13 x1pi30zi">
                                                            <div class="x1iyjqo2 xeuugli">
                                                              <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94">
                                                                <div class="x78zum5 xlup9mm">
                                                                  <div class="x1rg5ohu x67bb7w">
                                                                    <span
                                                                      linger="200"
                                                                      class="_2kdf"
                                                                    >
                                                                      <div
                                                                        class="x3nfvp2 x120ccyz xs7e29d"
                                                                        role="presentation"
                                                                      >
                                                                        <div
                                                                          class="xtwfq29 style-RQOEG"
                                                                          id="style-RQOEG"
                                                                        ></div>
                                                                      </div>
                                                                    </span>
                                                                  </div>
                                                                </div>
                                                                <div
                                                                  style={{
                                                                    textAlign:
                                                                      "left",
                                                                    marginLeft:
                                                                      "-26px",
                                                                  }}
                                                                  class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 snipcss-Qz3Lz"
                                                                >
                                                                  <div
                                                                    style={{
                                                                      textAlign:
                                                                        "left",
                                                                    }}
                                                                    class="x78zum5 xlup9mm"
                                                                  >
                                                                    <div
                                                                      style={{
                                                                        textAlign:
                                                                          "left",
                                                                      }}
                                                                      class="x1rg5ohu x67bb7w"
                                                                    >
                                                                      <span
                                                                        style={{
                                                                          textAlign:
                                                                            "left",
                                                                        }}
                                                                        linger="200"
                                                                        class="_2kdf"
                                                                      >
                                                                        <div
                                                                          style={{
                                                                            textAlign:
                                                                              "left",
                                                                          }}
                                                                          class="x3nfvp2 x120ccyz xmbzoqv"
                                                                          role="presentation"
                                                                        >
                                                                          <div
                                                                            style={{
                                                                              textAlign:
                                                                                "left",
                                                                            }}
                                                                            class="xtwfq29 style-iQmJa"
                                                                            id="style-iQmJa"
                                                                          ></div>
                                                                        </div>
                                                                      </span>
                                                                    </div>
                                                                  </div>
                                                                  <div
                                                                    style={{
                                                                      textAlign:
                                                                        "left",
                                                                    }}
                                                                    aria-level="3"
                                                                    class="x1xqt7ti x1uxerd5 x1xlr1w8 xrohxju xbsr9hj xq9mrsl x1yc453h x1h4wwuj xeuugli"
                                                                    role="heading"
                                                                  >
                                                                    Advantage
                                                                    campaign
                                                                    budget
                                                                  </div>
                                                                  <div class="x78zum5 x1q0g3np xozqiw3 xeuugli x1iyjqo2 x2lah0s x19lwn94 x6s0dn4 x13a6bvl xu0aao5 x9otpla x1wsgfga"></div>
                                                                </div>
                                                                <div class="x78zum5 x1q0g3np xozqiw3 xeuugli x1iyjqo2 x2lah0s x19lwn94 x6s0dn4 x13a6bvl xu0aao5 x9otpla x1wsgfga">
                                                                  <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x19lwn94 x1c4vz4f">
                                                                    <div>
                                                                      <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x65s2av">
                                                                        <label
                                                                          class="x1ypdohk"
                                                                          for="js_3v"
                                                                        >
                                                                          <span class="xmi5d70 x1fvot60 xo1l8bm xxio538 xbsr9hj xq9mrsl x1h4wwuj xeuugli">
                                                                            On
                                                                          </span>
                                                                        </label>
                                                                      </div>
                                                                    </div>
                                                                    <div class="x1rg5ohu x1n2onr6 x3oybdh">
                                                                      <input
                                                                        aria-checked="true"
                                                                        aria-label="On"
                                                                        role="switch"
                                                                        aria-describedby="js_3w"
                                                                        class="xjyslct x1ypdohk x5yr21d x17qophe xdj266r x11i5rnm xat24cr x1mh8g0r x1w3u9th x1t137rt x10l6tqk x13vifvy xh8yej3 x1vjfegm"
                                                                        id="js_3v"
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
                                                              <div
                                                                style={{
                                                                  textAlign:
                                                                    "left",
                                                                }}
                                                                class="xmi5d70 x1fvot60 xo1l8bm xxio538 xbsr9hj xq9mrsl x1h4wwuj xeuugli x1xmf6yo"
                                                              >
                                                                Advantage
                                                                campaign budget
                                                                will distribute
                                                                your budget
                                                                across currently
                                                                delivering ad
                                                                sets to get more
                                                                results
                                                                depending on
                                                                your performance
                                                                goal choices and
                                                                bid strategy.
                                                                You can control
                                                                spending on each
                                                                ad set.{" "}
                                                                <span>
                                                                  <a
                                                                    class="xt0psk2 x1hl2dhg xt0b8zv xmi5d70 xxio538 x1qsmy5i xq9mrsl x1yc453h x1h4wwuj x1qlqyl8 x1pd3egz"
                                                                    target="_blank"
                                                                    href="https://www.facebook.com/business/help/153514848493595"
                                                                  >
                                                                    Learn more
                                                                  </a>
                                                                </span>
                                                              </div>
                                                            </div>
                                                          </div>
                                                          <div class="x9f619 x78zum5 x1iyjqo2 x5yr21d x2lwn1j x1n2onr6 xh8yej3">
                                                            <div class="xh8yej3 x18d9i69 x1plvlek xryxfnj">
                                                              <div class="xjm9jq1 xg01cxk x47corl xh8yej3 x1jyxor1"></div>
                                                              <div
                                                                class="x1iyjqo2 xs83m0k xdl72j9 x3igimt xedcshv x1t2pt76 x1l90r2v x1swvt13 x1pi30zi xexx8yu"
                                                                data-auto-logging-component-type="GeoSection"
                                                                data-auto-logging-dependent-region=""
                                                              >
                                                                <div>
                                                                  <div>
                                                                    <div class="_550r  _550u _550y _3w5n">
                                                                      <div class="x78zum5 xdt5ytf x40hh3e xgpatz3 x2lwn1j xeuugli">
                                                                        <div class="_3-95">
                                                                          <div class="x78zum5 xdt5ytf xdl72j9 x1iyjqo2 xeuugli x1n2onr6 xh8yej3">
                                                                            <div class="x78zum5 xdt5ytf xozqiw3 x2lwn1j xeuugli x1iyjqo2 xyqj3jm x5yr21d">
                                                                              <div
                                                                                class="style-ntVQM"
                                                                                data-sscoverage-ignore="true"
                                                                                id="style-ntVQM"
                                                                              >
                                                                                <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94">
                                                                                  <div class="x1iyjqo2">
                                                                                    <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x65s2av">
                                                                                      <label
                                                                                        id="js_bt"
                                                                                        for="js_bs"
                                                                                      >
                                                                                        <span class="xmi5d70 x1fvot60 xxio538 xbsr9hj xq9mrsl x1mzt3pk x1vvkbs x13faqbe x117nqv4 xeuugli">
                                                                                          Campaign
                                                                                          budget
                                                                                        </span>
                                                                                      </label>
                                                                                      <div class="xbsr9hj x78zum5">
                                                                                        <div
                                                                                          class="x3nfvp2 x120ccyz x1heor9g"
                                                                                          role="presentation"
                                                                                        >
                                                                                          <div
                                                                                            class="xtwfq29 style-wFXtY"
                                                                                            id="style-wFXtY"
                                                                                          ></div>
                                                                                        </div>
                                                                                      </div>
                                                                                    </div>
                                                                                  </div>
                                                                                </div>
                                                                              </div>
                                                                              <div class="x1lcm9me x1yr5g0i xo71vjh x5pf9jr x78zum5 xdt5ytf x1iyjqo2">
                                                                                <div class="x78zum5 xdt5ytf x1iyjqo2">
                                                                                  <div class="x1iyjqo2">
                                                                                    <div class="x1pg5gke x1yc453h xxymvpz x78zum5 xdt5ytf xdj266r xh8yej3">
                                                                                      <div class="_3qn7 _61-0 _2fyi _3qnf">
                                                                                        <div class="x1iyjqo2 x2lah0s x4pfjvb">
                                                                                          <div class="x1rg5ohu xh8yej3">
                                                                                            <span data-hover="tooltip">
                                                                                              <div
                                                                                                aria-disabled="true"
                                                                                                class="_af4f _af4g style-EkFzi"
                                                                                                role="button"
                                                                                                tabindex="0"
                                                                                                id="style-EkFzi"
                                                                                              >
                                                                                                <span class="_aee4">
                                                                                                  <span>
                                                                                                    <span
                                                                                                      id="style-5JXgX"
                                                                                                      class="style-5JXgX"
                                                                                                    >
                                                                                                      Daily
                                                                                                      budget
                                                                                                    </span>
                                                                                                  </span>
                                                                                                </span>
                                                                                                <span class="_aee5 _aee6"></span>
                                                                                              </div>
                                                                                            </span>
                                                                                          </div>
                                                                                        </div>
                                                                                        <div class="x1iyjqo2 x2lah0s x4pfjvb">
                                                                                          <div class="xh8yej3 x1rg5ohu xt7dq6l x1i64zmx">
                                                                                            <div class="_aed4">
                                                                                              <span class="accessible_elem">
                                                                                                <label
                                                                                                  for="js_bw"
                                                                                                  id="js_bx"
                                                                                                >
                                                                                                  <span
                                                                                                    role="heading"
                                                                                                    aria-level="4"
                                                                                                    id="style-FSh8p"
                                                                                                    class="style-FSh8p"
                                                                                                  ></span>
                                                                                                </label>
                                                                                              </span>
                                                                                              <div class="_aed7 _3qn7 _61-0 _2fyh _3qnf">
                                                                                                <span
                                                                                                  class="_agh9 _agha style-1yKDA"
                                                                                                  id="style-1yKDA"
                                                                                                >
                                                                                                  <input
                                                                                                    class="_58al _aghb"
                                                                                                    aria-invalid="false"
                                                                                                    aria-labelledby="js_bx"
                                                                                                    placeholder="Please enter an amount"
                                                                                                    id="js_bw"
                                                                                                    type="text"
                                                                                                    value={
                                                                                                      campaign.Budget
                                                                                                    }
                                                                                                  />

                                                                                                  $
                                                                                                </span>
                                                                                              </div>
                                                                                            </div>
                                                                                          </div>
                                                                                        </div>
                                                                                      </div>
                                                                                      <div
                                                                                        class="x1xmf6yo"
                                                                                        id="spendMessagecp"
                                                                                      >
                                                                                        <span class="xmi5d70 xw23nyj xo1l8bm x63nzvj xbsr9hj xq9mrsl x1h4wwuj xeuugli">
                                                                                          You'll
                                                                                          spend
                                                                                          an
                                                                                          average
                                                                                          of
                                                                                          Rs300
                                                                                          per
                                                                                          day.
                                                                                          Your
                                                                                          maximum
                                                                                          daily
                                                                                          spend
                                                                                          is{" "}
                                                                                          <strong>
                                                                                            Rs375
                                                                                          </strong>{" "}
                                                                                          and
                                                                                          your
                                                                                          maximum
                                                                                          weekly
                                                                                          spend
                                                                                          is{" "}
                                                                                          <strong>
                                                                                            Rs2100
                                                                                          </strong>

                                                                                          .{" "}
                                                                                          <span>
                                                                                            <a
                                                                                              class="xt0psk2 x1hl2dhg xt0b8zv xmi5d70 xxio538 x1qsmy5i xq9mrsl x1yc453h x1h4wwuj x1qlqyl8 x1pd3egz"
                                                                                              target="_blank"
                                                                                              href="https://www.facebook.com/business/help/190490051321426"
                                                                                            >
                                                                                              Learn
                                                                                              more.
                                                                                            </a>
                                                                                          </span>
                                                                                        </span>
                                                                                      </div>
                                                                                      <div
                                                                                        data-visualcompletion="ignore"
                                                                                        class=""
                                                                                      ></div>
                                                                                    </div>
                                                                                  </div>
                                                                                </div>
                                                                              </div>
                                                                            </div>
                                                                          </div>
                                                                        </div>
                                                                      </div>
                                                                      <div class="_7yfl _9iq_ _7_wz">
                                                                        <div class="_aed4">
                                                                          <div class="_21op _3qn7 _61-3 _2fyi _3qng">
                                                                            <div class="_3qn7 _61-0 _2fyi _3qng">
                                                                              <div
                                                                                class="_3-94 style-Pg3DR"
                                                                                id="style-Pg3DR"
                                                                              >
                                                                                <div class="_3qn7 _61-0 _2fyi _3qng">
                                                                                  <span class="">
                                                                                    <label
                                                                                      for="js_c2"
                                                                                      id="js_c3"
                                                                                    >
                                                                                      <span
                                                                                        role="heading"
                                                                                        aria-level="4"
                                                                                        id="style-9lxSy"
                                                                                        class="style-9lxSy"
                                                                                      >
                                                                                        Campaign
                                                                                        bid
                                                                                        strategy
                                                                                      </span>
                                                                                    </label>
                                                                                  </span>
                                                                                  <div class="_ai_j _ai_k">
                                                                                    <div
                                                                                      aria-describedby="js_c7"
                                                                                      aria-haspopup="true"
                                                                                      aria-label="Learn more"
                                                                                      class="_4rhp"
                                                                                      role="button"
                                                                                      tabindex="0"
                                                                                    >
                                                                                      <i
                                                                                        data-testid="SUISimplePopover/icon"
                                                                                        class="_h6r _3-8r img style-afB6K"
                                                                                        alt=""
                                                                                        data-visualcompletion="css-img"
                                                                                        id="style-afB6K"
                                                                                      ></i>
                                                                                    </div>
                                                                                  </div>
                                                                                </div>
                                                                              </div>
                                                                            </div>
                                                                          </div>
                                                                          <div class="_aed7 _3qn7 _61-0 _2fyh _3qnf">
                                                                            <div class="_7_zy _9iou">
                                                                              <div class="_3qn7 _61-3 _2fyi _3qnf">
                                                                                <div>
                                                                                  <div class="">
                                                                                    <div
                                                                                      id="style-kQDJw"
                                                                                      class="style-kQDJw"
                                                                                    >
                                                                                      Highest
                                                                                      volume
                                                                                    </div>
                                                                                  </div>
                                                                                </div>
                                                                                <div class="_7yfk">
                                                                                  <div class="xmi5d70 x1fvot60 xo1l8bm xxio538 x1qsmy5i x1ypdohk xt0b8zv">
                                                                                    <div class="x6s0dn4 x78zum5 x2lwn1j xeuugli x16n37ib xq8finb x1ypdohk xt0b8zv">
                                                                                      <div
                                                                                        class="x3nfvp2 x120ccyz x1heor9g xw3qccf"
                                                                                        role="presentation"
                                                                                      >
                                                                                        <div
                                                                                          class="xtwfq29 style-ebRU7"
                                                                                          id="style-ebRU7"
                                                                                        ></div>
                                                                                      </div>
                                                                                      <span>
                                                                                        Edit
                                                                                      </span>
                                                                                    </div>
                                                                                    <button
                                                                                      class="accessible_elem _5f0v"
                                                                                      label="Edit"
                                                                                      id="js_cm"
                                                                                    >
                                                                                      Edit
                                                                                    </button>
                                                                                  </div>
                                                                                </div>
                                                                              </div>
                                                                            </div>
                                                                          </div>
                                                                        </div>
                                                                      </div>
                                                                      <div class="_826g">
                                                                        <span>
                                                                          <a
                                                                            class="xt0psk2 x1hl2dhg xt0b8zv xmi5d70 x1fvot60 xxio538 x1qsmy5i xq9mrsl x1yc453h x1h4wwuj x1fcty0u"
                                                                            href="#"
                                                                          >
                                                                            <div class="x6s0dn4 x78zum5 x2lwn1j xeuugli">
                                                                              Hide
                                                                              options
                                                                              <div
                                                                                class="x3nfvp2 x120ccyz x1heor9g x12mruv9"
                                                                                role="presentation"
                                                                              >
                                                                                <div
                                                                                  class="xtwfq29 style-PSy5K"
                                                                                  id="style-PSy5K"
                                                                                ></div>
                                                                              </div>
                                                                            </div>
                                                                          </a>
                                                                        </span>
                                                                        <div
                                                                          data-visualcompletion="ignore"
                                                                          class=""
                                                                        ></div>
                                                                        <div
                                                                          data-visualcompletion="ignore"
                                                                          class=""
                                                                        ></div>
                                                                      </div>
                                                                    </div>
                                                                  </div>
                                                                  <div>
                                                                    <div class="x1qjc9v5 x78zum5 xdt5ytf xozqiw3 x2lwn1j xeuugli x1iyjqo2 xs83m0k xavht8x">
                                                                      <div class="_7yfl _9iq_">
                                                                        <div class="_7yfl _9iq_">
                                                                          <div class="x78zum5 xdt5ytf xdl72j9 x1iyjqo2 xeuugli x1n2onr6 xh8yej3">
                                                                            <div class="x78zum5 xdt5ytf xozqiw3 x2lwn1j xeuugli x1iyjqo2 xyqj3jm x5yr21d">
                                                                              <div
                                                                                class="style-xzoD4"
                                                                                data-sscoverage-ignore="true"
                                                                                id="style-xzoD4"
                                                                              >
                                                                                <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94">
                                                                                  <div class="x1iyjqo2">
                                                                                    <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x65s2av">
                                                                                      <label
                                                                                        id="js_c9"
                                                                                        for="js_c8"
                                                                                      >
                                                                                        <span class="xmi5d70 x1fvot60 xxio538 xbsr9hj xq9mrsl x1mzt3pk x1vvkbs x13faqbe x117nqv4 xeuugli">
                                                                                          Budget
                                                                                          scheduling
                                                                                        </span>
                                                                                      </label>
                                                                                      <div class="xbsr9hj x78zum5">
                                                                                        <div
                                                                                          class="x3nfvp2 x120ccyz x1heor9g"
                                                                                          role="presentation"
                                                                                        >
                                                                                          <div
                                                                                            class="xtwfq29 style-YLhBq"
                                                                                            id="style-YLhBq"
                                                                                          ></div>
                                                                                        </div>
                                                                                      </div>
                                                                                    </div>
                                                                                  </div>
                                                                                </div>
                                                                              </div>
                                                                              <div class="x1lcm9me x1yr5g0i xo71vjh x5pf9jr x78zum5 xdt5ytf x1iyjqo2">
                                                                                <div class="x78zum5 xdt5ytf x1iyjqo2">
                                                                                  <div class="x1iyjqo2">
                                                                                    <div class="x78zum5 xdt5ytf xozqiw3 x2lwn1j xeuugli x1iyjqo2 xs83m0k x1ov1sdl">
                                                                                      <span
                                                                                        data-surface-wrapper="1"
                                                                                        data-surface="/am/editor_drawer/editor:campaign/campaign_budget_section/msg:AdsCCCardComponent"
                                                                                        data-auto-logging-id="f1ef8231394e50c"
                                                                                        id="style-2g8y9"
                                                                                        class="style-2g8y9"
                                                                                      >
                                                                                        <div class="_3-8x">
                                                                                          <div
                                                                                            class="_4rlp _11gv style-59Axo"
                                                                                            id="style-59Axo"
                                                                                          >
                                                                                            <i
                                                                                              alt="NEW_PRODUCT_ACTIVE"
                                                                                              aria-label="NEW_PRODUCT_ACTIVE"
                                                                                              class="_4rln img style-OSCjF"
                                                                                              role="img"
                                                                                              data-visualcompletion="css-img"
                                                                                              id="style-OSCjF"
                                                                                            >
                                                                                              <u>
                                                                                                NEW_PRODUCT_ACTIVE
                                                                                              </u>
                                                                                            </i>
                                                                                            <div class="_4rlm">
                                                                                              <div class="x9otpla x1n0m28w x1wsgfga xp7jhwk">
                                                                                                <div class="_3qn7 _61-2 _2fyi _3qng">
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
                                                                                                            Give
                                                                                                            Feedback
                                                                                                          </div>
                                                                                                          <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1hc1fzr x13dflua x6o7n8i xxziih7 x12w9bfk xl56j7k xh8yej3">
                                                                                                            <div class="x3nfvp2 x2lah0s x1c4vz4f">
                                                                                                              <i
                                                                                                                alt=""
                                                                                                                data-visualcompletion="css-img"
                                                                                                                class="img style-kG3c1"
                                                                                                                id="style-kG3c1"
                                                                                                              ></i>
                                                                                                            </div>
                                                                                                          </div>
                                                                                                        </div>
                                                                                                      </span>
                                                                                                    </div>
                                                                                                  </div>
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
                                                                                                            Close
                                                                                                          </div>
                                                                                                          <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1hc1fzr x13dflua x6o7n8i xxziih7 x12w9bfk xl56j7k xh8yej3">
                                                                                                            <div class="x3nfvp2 x2lah0s x1c4vz4f">
                                                                                                              <i
                                                                                                                alt=""
                                                                                                                data-visualcompletion="css-img"
                                                                                                                class="img style-kFWFp"
                                                                                                                id="style-kFWFp"
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

                                                                                            <div class="_4rlo">
                                                                                              <div class="_4dqc">
                                                                                                <span class="xmi5d70 x1fvot60 xxio538 xbsr9hj xq9mrsl x1h4wwuj x117nqv4 xeuugli">
                                                                                                  Budget
                                                                                                  scheduling
                                                                                                </span>
                                                                                              </div>
                                                                                            </div>
                                                                                            <div class=" _4822">
                                                                                              <div class="_1qgy">
                                                                                                <div class="x1pg5gke x1yc453h xh8yej3">
                                                                                                  <div class="_666t">
                                                                                                    <div class="_4dqc">
                                                                                                      <div class="_3p-2">
                                                                                                        <span class="xmi5d70 x1fvot60 xo1l8bm xxio538 xbsr9hj xq9mrsl x1h4wwuj xeuugli">
                                                                                                          You
                                                                                                          can
                                                                                                          now
                                                                                                          schedule
                                                                                                          budget
                                                                                                          increases
                                                                                                          in
                                                                                                          advance
                                                                                                          based
                                                                                                          on
                                                                                                          certain
                                                                                                          days
                                                                                                          or
                                                                                                          times
                                                                                                          when
                                                                                                          you
                                                                                                          anticipate
                                                                                                          higher
                                                                                                          sales
                                                                                                          opportunities,
                                                                                                          peak
                                                                                                          traffic
                                                                                                          periods
                                                                                                          or
                                                                                                          other
                                                                                                          promotional
                                                                                                          time
                                                                                                          periods.
                                                                                                        </span>
                                                                                                      </div>
                                                                                                    </div>
                                                                                                  </div>
                                                                                                  <div class="_666t">
                                                                                                    <div class="_4dqc">
                                                                                                      <div class="_6f9q">
                                                                                                        <div
                                                                                                          class="x3nfvp2 x193iq5w xxymvpz x1emribx"
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
                                                                                                                    Try
                                                                                                                    budget
                                                                                                                    scheduling
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
                                                                                      </span>
                                                                                      <div>
                                                                                        <div class="x6s0dn4 x78zum5 x1q0g3np x1qughib xozqiw3 x2lwn1j xeuugli x1iyjqo2 xs83m0k x19lwn94">
                                                                                          <label
                                                                                            class="x1i10hfl x1qjc9v5 xjbqb8w xjqpnuy xa49m3k xqeqjp1 x2hbi6w x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk x78zum5 xdl72j9 xdt5ytf x2lah0s xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli xexx8yu x4uap5 x18d9i69 xkhd6sd x1n2onr6 x16tdsg8 x1hl2dhg xggy1nq x1ja2u2z x1t137rt"
                                                                                            tabindex="-1"
                                                                                          >
                                                                                            <div class="x78zum5 x1iyjqo2">
                                                                                              <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1lcm9me x1yr5g0i xrt01vj x10y3i5r">
                                                                                                <div class="x6s0dn4 x3nfvp2 x1q0g3np xozqiw3 x2lwn1j xeuugli x1c4vz4f x19lwn94 xqcrz7y x2lah0s">
                                                                                                  <div class="x1rg5ohu x1n2onr6 x3oybdh">
                                                                                                    <div class="x1n2onr6 x14atkfc">
                                                                                                      <div class="x6s0dn4 x78zum5 x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x178xt8z xm81vs4 xso031l xy80clv xwebqov xvyu6v8 xrsgblv x10lij0i x1lcm9me x1yr5g0i xrt01vj x10y3i5r x1gzqxud xbsr9hj x9f619 xexx8yu x4uap5 x18d9i69 xkhd6sd xl56j7k xxk0z11 xvy4d1p">
                                                                                                        <div class=""></div>
                                                                                                        <input
                                                                                                          aria-checked="false"
                                                                                                          aria-disabled="false"
                                                                                                          aria-describedby="js_cd"
                                                                                                          aria-labelledby="js_ce"
                                                                                                          class="xjyslct x1ypdohk x5yr21d x17qophe xdj266r x11i5rnm xat24cr x1mh8g0r x1w3u9th x1t137rt x10l6tqk x13vifvy xh8yej3 x1vjfegm"
                                                                                                          id="js_cc"
                                                                                                          type="checkbox"
                                                                                                        />
                                                                                                        <div class="x13dflua xnnyp6c x12w9bfk x78zum5 xg01cxk x1f85oc2 x6o7n8i">
                                                                                                          <div
                                                                                                            class="x3nfvp2 x120ccyz x1qsmy5i"
                                                                                                            role="presentation"
                                                                                                          >
                                                                                                            <svg
                                                                                                              height="16"
                                                                                                              viewBox="0 0 16 16"
                                                                                                              width="16"
                                                                                                            >
                                                                                                              <path d="M13.305 3.28L5.993 10.6l-3.31-3.306a1 1 0 00-1.415 1.414l4.013 4.012a.997.997 0 001.414 0l8.024-8.024a1 1 0 00-1.414-1.416z"></path>
                                                                                                            </svg>
                                                                                                          </div>
                                                                                                        </div>
                                                                                                      </div>
                                                                                                      <div class="xwebqov xvyu6v8 xrsgblv x10lij0i x1lcm9me x1yr5g0i xrt01vj x10y3i5r x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x178xt8z xm81vs4 xso031l xy80clv x13dflua x6o7n8i xxziih7 x12w9bfk xg01cxk x47corl x10l6tqk x17qophe xds687c x13vifvy x1ey2m1c x6ikm8r x10wlt62 xnl74ce xmb4j5p xdx8kah xwmxa91 xmn8db3 x8lbu6m x2te4dl x1bs8fl3 xhhp2wi x14q35kh x1wa3ocq x1n7iyjn x1t0di37 x1tt7eqi xe25xm5 xsp6npd x1s928wv x1w3onc2 x1j6awrg x9obomg x1ryaxvv x1hvfe8t x1te75w5"></div>
                                                                                                    </div>
                                                                                                  </div>
                                                                                                </div>
                                                                                                <div
                                                                                                  class="x1iyjqo2 xamitd3"
                                                                                                  data-sscoverage-ignore="true"
                                                                                                >
                                                                                                  <div class="x6s0dn4 x1q0g3np xozqiw3 x2lwn1j x1iyjqo2 xs83m0k x65s2av x78zum5 xeuugli">
                                                                                                    <div
                                                                                                      class="xmi5d70 x1fvot60 xo1l8bm xxio538 xbsr9hj xq9mrsl x1mzt3pk x1vvkbs x13faqbe xeuugli x1iyjqo2"
                                                                                                      id="js_ce"
                                                                                                    >
                                                                                                      Increase
                                                                                                      your
                                                                                                      budget
                                                                                                      during
                                                                                                      specific
                                                                                                      time
                                                                                                      periods
                                                                                                    </div>
                                                                                                  </div>
                                                                                                </div>
                                                                                              </div>
                                                                                            </div>
                                                                                          </label>
                                                                                          <div
                                                                                            aria-busy="false"
                                                                                            aria-disabled="true"
                                                                                            class="x1i10hfl xjqpnuy xa49m3k xqeqjp1 x2hbi6w x972fbf xcfux6l x1qhh985 xm0m39n x9f619 xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli x16tdsg8 xggy1nq x1ja2u2z x1h6gzvc x6s0dn4 x1ejq31n xd10rxx x1sy0etr x17r0tee x3nfvp2 xdl72j9 x1q0g3np x2lah0s x193iq5w x1n2onr6 x1hl2dhg x87ps6o xxymvpz xlh3980 xvmahel x1lku1pv x1g40iwv x1lcm9me x1yr5g0i xrt01vj x10y3i5r xtpvj6k xaatb59 x1qgsegg xo1l8bm x1v911su xis6omg x1y1aw1k xwib8y2 x1swvt13 xn6708d"
                                                                                            role="button"
                                                                                            tabindex="-1"
                                                                                          >
                                                                                            <span class="xmi5d70 x1fvot60 xxio538 x1heor9g xq9mrsl x1h4wwuj x1pd3egz xeuugli xh8yej3">
                                                                                              <div class="x78zum5">
                                                                                                <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1hc1fzr x13dflua x6o7n8i xxziih7 x12w9bfk x1nhvcw1 xh8yej3">
                                                                                                  <div class="x1xqt7ti x1fvot60 xk50ysn xxio538 x1heor9g xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj xeuugli x1iyjqo2">
                                                                                                    View
                                                                                                  </div>
                                                                                                  <div
                                                                                                    class="x3nfvp2 x120ccyz x1heor9g x2lah0s x1c4vz4f x1gryazu"
                                                                                                    role="presentation"
                                                                                                  >
                                                                                                    <div
                                                                                                      class="xtwfq29 style-x29II"
                                                                                                      id="style-x29II"
                                                                                                    ></div>
                                                                                                  </div>
                                                                                                </div>
                                                                                              </div>
                                                                                            </span>
                                                                                          </div>
                                                                                        </div>
                                                                                      </div>
                                                                                      <div>
                                                                                        <div class="xeuugli">
                                                                                          <div></div>
                                                                                          <div
                                                                                            class="x78zum5 xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r xexx8yu x4uap5 x18d9i69 xkhd6sd xdt5ytf xdm93yi"
                                                                                            role="list"
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
                                                                      <div class="_7yfl _9iq_ _7_wz">
                                                                        <div class="_3x8t _3-97">
                                                                          <div class="x78zum5 xdt5ytf xdl72j9 x1iyjqo2 xeuugli x1n2onr6 xh8yej3">
                                                                            <div class="x78zum5 xdt5ytf xozqiw3 x2lwn1j xeuugli x1iyjqo2 xyqj3jm x5yr21d">
                                                                              <div
                                                                                class="style-VY9VQ"
                                                                                data-sscoverage-ignore="true"
                                                                                id="style-VY9VQ"
                                                                              >
                                                                                <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94">
                                                                                  <div class="x1iyjqo2">
                                                                                    <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x65s2av">
                                                                                      <label
                                                                                        id="js_cj"
                                                                                        for="js_ci"
                                                                                      >
                                                                                        <span class="xmi5d70 x1fvot60 xxio538 xbsr9hj xq9mrsl x1mzt3pk x1vvkbs x13faqbe x117nqv4 xeuugli">
                                                                                          Ad
                                                                                          scheduling
                                                                                        </span>
                                                                                      </label>
                                                                                      <div class="xbsr9hj x78zum5">
                                                                                        <div
                                                                                          class="x3nfvp2 x120ccyz x1heor9g"
                                                                                          role="presentation"
                                                                                        >
                                                                                          <div
                                                                                            class="xtwfq29 style-Xxi7D"
                                                                                            id="style-Xxi7D"
                                                                                          ></div>
                                                                                        </div>
                                                                                      </div>
                                                                                    </div>
                                                                                  </div>
                                                                                </div>
                                                                              </div>
                                                                              <div class="x1lcm9me x1yr5g0i xo71vjh x5pf9jr x78zum5 xdt5ytf x1iyjqo2">
                                                                                <div class="x78zum5 xdt5ytf x1iyjqo2">
                                                                                  <div class="x1iyjqo2">
                                                                                    <div class="_7_zy _9iou">
                                                                                      <div class="_3qn7 _61-3 _2fyi _3qnf">
                                                                                        <div>
                                                                                          <div class="">
                                                                                            <div
                                                                                              id="style-6vfy7"
                                                                                              class="style-6vfy7"
                                                                                            >
                                                                                              Run
                                                                                              ads
                                                                                              all
                                                                                              the
                                                                                              time
                                                                                            </div>
                                                                                          </div>
                                                                                        </div>
                                                                                        <div class="_7yfk">
                                                                                          <div class="x1rg5ohu x67bb7w">
                                                                                            <div
                                                                                              class="xmi5d70 x1fvot60 xo1l8bm xxio538 x8xg6ae xz8obtx x1lku1pv"
                                                                                              data-test-decoration="disabled"
                                                                                            >
                                                                                              <div class="x6s0dn4 x78zum5 x2lwn1j xeuugli x16n37ib xq8finb xz8obtx x1lku1pv">
                                                                                                <div
                                                                                                  class="x3nfvp2 x120ccyz x1heor9g xw3qccf"
                                                                                                  role="presentation"
                                                                                                >
                                                                                                  <div
                                                                                                    class="xtwfq29 style-CHPdW"
                                                                                                    id="style-CHPdW"
                                                                                                  ></div>
                                                                                                </div>
                                                                                                <span>
                                                                                                  Edit
                                                                                                </span>
                                                                                              </div>
                                                                                              <button
                                                                                                class="accessible_elem _5f0v"
                                                                                                disabled=""
                                                                                                label="Edit"
                                                                                                id="js_co"
                                                                                              >
                                                                                                Edit
                                                                                              </button>
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
                                              </span>
                                            </div>
                                          </div>
                                        </div>
                                        <div class="x78zum5 xdt5ytf x2lwn1j x1swvt13 x1dc814f x1h80ny7">
                                          <div class="x7wzq59 x1tk7jg1">
                                            <div
                                              class=""
                                              id="campaignGroupAccountSpendLimitWarningSection"
                                            >
                                              <div data-pagelet="campaignGroupAccountSpendLimitWarningSection">
                                                <div class="">
                                                  <span
                                                    data-surface-wrapper="1"
                                                    data-surface="/am/editor_drawer/editor:campaign/campaign_group_account_spend_limit_guidance"
                                                    data-auto-logging-id="f1ac7a88ff5cd38"
                                                    id="style-EfZWQ"
                                                    class="style-EfZWQ"
                                                  ></span>
                                                </div>
                                              </div>
                                            </div>
                                            <div
                                              class=""
                                              id="campaignGroupCBOZeroConversionWarningSection"
                                            >
                                              <div data-pagelet="campaignGroupCBOZeroConversionWarningSection">
                                                <div class="">
                                                  <span
                                                    data-surface-wrapper="1"
                                                    data-surface="/am/editor_drawer/editor:campaign/campaign_cbo_zero_conversion_warning_section"
                                                    data-auto-logging-id="f15c190d7c324b4"
                                                    id="style-fYP9i"
                                                    class="style-fYP9i"
                                                  ></span>
                                                </div>
                                              </div>
                                            </div>
                                            <div
                                              class=""
                                              id="campaignGroupHighCostWarningSection"
                                            >
                                              <div data-pagelet="campaignGroupHighCostWarningSection">
                                                <div class="">
                                                  <span
                                                    data-surface-wrapper="1"
                                                    data-surface="/am/editor_drawer/editor:campaign/campaign_high_cost_warning_section"
                                                    data-auto-logging-id="f3f78efa6d9fe8"
                                                    id="style-MhpAU"
                                                    class="style-MhpAU"
                                                  ></span>
                                                </div>
                                              </div>
                                            </div>
                                            <div
                                              class=""
                                              id="campaignGroupGuidanceMessagesGroupSection"
                                            >
                                              <div data-pagelet="campaignGroupGuidanceMessagesGroupSection">
                                                <div class="">
                                                  <span
                                                    data-surface-wrapper="1"
                                                    data-surface="/am/editor_drawer/editor:campaign/campaign_guidance_messages_group_section"
                                                    data-auto-logging-id="f1a8fe9077f87d4"
                                                    id="style-Da4yg"
                                                    class="style-Da4yg"
                                                  >
                                                    <div class="_3-96 _906e"></div>
                                                  </span>
                                                </div>
                                              </div>
                                            </div>
                                            <div>
                                              <div></div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div class="">
                                      <div></div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div>
                              <div></div>
                            </div>
                          </div>
                          <div class="_705e">
                            <span
                              data-surface-wrapper="1"
                              data-surface="/am/editor_drawer/editor:campaign/editor_drawer_footer"
                              data-auto-logging-id="f14842820332574"
                              id="style-Rj3df"
                              class="style-Rj3df"
                            >
                              <div>
                                <div class="_3tgx">
                                  <div class="x9f619 xr1yuqi xkrivgy x4ii5y1 x1gryazu xrfz293 x7ab17h x10wlt62 xz9dl7a xn6708d xsag5q8 x1ye3gou x1cup607">
                                    <div
                                      style={{ textAlign: "left" }}
                                      class="x1e56ztr"
                                    >
                                      <div class="xmi5d70 x1fvot60 xo1l8bm xxio538 xbsr9hj xeaf4i8 x1h4wwuj xeuugli">
                                        By clicking "Publish", you agree to
                                        Facebook's{" "}
                                        <a href="#">
                                          Terms and Advertising Guidelines
                                        </a>
                                        .
                                      </div>
                                    </div>
                                    <div class="_8hs3 _8j6-">
                                      <div
                                        style={{ textAlign: "left" }}
                                        class="x1do4p61 x1iyjqo2"
                                      >
                                        <div
                                          style={{ textAlign: "left" }}
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
                                                    Close
                                                  </div>
                                                </div>
                                              </div>
                                            </span>
                                          </div>
                                        </div>
                                        <span
                                          class="_3-94 _3-9a style-JFmyp"
                                          id="style-JFmyp"
                                        >
                                          <div
                                            data-visualcompletion="ignore"
                                            class=""
                                          >
                                            <span
                                              data-surface-wrapper="1"
                                              data-non-int-surface="/am/hero_root:AdsPEMainAppWithLeftNavigation.react/editor_drawer/hero_root:AdsPECampaignGroupEditorContainer.react/editor:campaign/editor_drawer_footer/hero_root:AdsUEditorInnerContainer"
                                              data-auto-logging-id="f1d02236b6fe124"
                                              id="style-y5g5y"
                                              class="style-y5g5y"
                                            >
                                              <div class="">
                                                <div
                                                  class="_3ut-"
                                                  role="presentation"
                                                ></div>
                                              </div>
                                            </span>
                                          </div>
                                        </span>
                                      </div>
                                      <div class="x2lah0s">
                                        <div
                                          id="style-cL1Ha"
                                          class="style-cL1Ha"
                                        >
                                          <div
                                            id="style-ncLmj"
                                            class="style-ncLmj"
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
                                                        Discard Draft
                                                      </div>
                                                    </div>
                                                  </div>
                                                </span>
                                              </div>
                                            </div>
                                          </div>
                                          <div
                                            id="style-37L8b"
                                            class="style-37L8b"
                                          >
                                            <div
                                              class="x3nfvp2 x193iq5w xxymvpz"
                                              role="none"
                                            >
                                              <div
                                                aria-busy="false"
                                                aria-disabled="true"
                                                class="x1i10hfl xjqpnuy xa49m3k xqeqjp1 x2hbi6w x972fbf xcfux6l x1qhh985 xm0m39n x9f619 xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli x16tdsg8 xggy1nq x1ja2u2z x1h6gzvc x1t137rt x6s0dn4 x1ejq31n xd10rxx x1sy0etr x17r0tee x3nfvp2 xdl72j9 x1q0g3np x2lah0s x193iq5w x1n2onr6 x1hl2dhg x87ps6o xxymvpz xlh3980 xvmahel x1lku1pv x1g40iwv x1lcm9me x1yr5g0i xrt01vj x10y3i5r xo1l8bm x432r9b x60d0xz x1y1aw1k xwib8y2 x1swvt13 x1pi30zi"
                                                id="ads-editor-primary-btn"
                                                role="button"
                                                tabindex="-1"
                                              >
                                                <span class="xmi5d70 x1fvot60 xxio538 x1heor9g xq9mrsl x1h4wwuj x1pd3egz xeuugli xh8yej3">
                                                  <div class="x78zum5">
                                                    <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1hc1fzr x13dflua x6o7n8i xxziih7 x12w9bfk xl56j7k xh8yej3">
                                                      <div class="x1xqt7ti x1fvot60 xk50ysn xxio538 x1heor9g xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj xeuugli">
                                                        Publish
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
                    </span>
                  </div>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditCompaing;

import React from "react";
import "../styles/PageID.css";
const PageID = ({
  currentPageID,
  setCurrentPageID,
  setShowPageIDBar,
  setDisplayID,
  campaigns,
  setCampaigns,
  setLoading,
}) => {
  const handleApply = () => {
    setShowPageIDBar(false);
    setDisplayID(true);
    setLoading(true);
    // Save currentPageID to localStorage
    if (currentPageID) {
      localStorage.setItem("currentPageID", currentPageID);
    }

    // Close the bar and filter campaigns
    const filteredCampaigns = campaigns.filter(
      (campaign) => campaign.pageID === currentPageID
    );
    setCampaigns(filteredCampaigns); // Update parent state
  };

  return (
    <div class="_5v-0 _53ik" data-interactable="|mouseover|">
      <div
        data-surface="/am/table/search_and_filter"
        data-interactable="|click||input||keydown||keyup||mousedown||mouseover||change|"
        class="_53ij"
        data-auto-logging-id="f371baef3"
      >
        <div class="">
          <div class="xkf4qfm" role="none" data-auto-logging-id="fc18f828">
            <div
              aria-labelledby="js_ia"
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
                          class="x1xqt7ti x1uxerd5 x1xlr1w8 xrohxju xbsr9hj xq9mrsl x1yc453h x1mzt3pk x1vvkbs x13faqbe xeuugli"
                          id="js_ia"
                          role="heading"
                        >
                          Page ID
                        </div>
                      </div>
                      <div class="x78zum5 x1q0g3np xozqiw3 xeuugli x1iyjqo2 x2lah0s x19lwn94 x6s0dn4 x13a6bvl xu0aao5 x9otpla x1wsgfga">
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
                                    class="xtwfq29 style-TqLZN"
                                    id="style-TqLZN"
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
                  <div class="xw2csxc x1odjw0f xwib8y2 xh8yej3">
                    <div class="xjm9jq1 xg01cxk x47corl xh8yej3 x1jyxor1"></div>
                    <div class="x1cy8zhl x78zum5 xdt5ytf xozqiw3 x2lwn1j xeuugli x1iyjqo2 x1kxxb1g x1xmf6yo x1emribx x1e56ztr x1i64zmx">
                      <div class="x1cy8zhl x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94">
                        <div class="x173qytb">
                          <div
                            aria-level="3"
                            class="x1xqt7ti x1uxerd5 x1xlr1w8 xrohxju xbsr9hj xq9mrsl x1yc453h x1h4wwuj xeuugli x1xmf6yo x1emribx x1e56ztr x1i64zmx"
                            role="heading"
                          >
                            Where
                          </div>
                        </div>
                        <div class="x78zum5 xdt5ytf xdl72j9 x1iyjqo2 x1n2onr6 x14atkfc x1u4bug8 x1jzhcrs">
                          <div
                            class="x1qvwoe0 xjm9jq1 x1y332i5 xcwd3tp x1jyxor1 x39eecv x6ikm8r x10wlt62 x10l6tqk xuxw1ft x1i1rx1s style-FjSjJ"
                            data-sscoverage-ignore="true"
                            id="style-FjSjJ"
                          >
                            <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94">
                              <div class="x1iyjqo2">
                                <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 xs83m0k x65s2av">
                                  <label id="js_6db" for="js_6da">
                                    <span class="xmi5d70 x1fvot60 xxio538 xbsr9hj xq9mrsl x1mzt3pk x1vvkbs x13faqbe x117nqv4 xeuugli">
                                      <span class="xmi5d70 x1fvot60 xxio538 xbsr9hj xq9mrsl x1mzt3pk x1vvkbs x13faqbe x117nqv4 xeuugli">
                                        Select ad object level
                                      </span>
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
                              aria-labelledby="js_6db js_6de"
                              aria-owns="js_6d9"
                              class="x1i10hfl x1qjc9v5 xjbqb8w xjqpnuy xa49m3k xqeqjp1 x2hbi6w x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x78zum5 xdl72j9 xdt5ytf x2lah0s xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli xexx8yu x4uap5 x18d9i69 xkhd6sd x1n2onr6 x16tdsg8 x1hl2dhg xggy1nq x1ja2u2z xh8yej3 x1t137rt x1h6gzvc"
                              id="js_6da"
                              role="combobox"
                              tabindex="-1"
                            >
                              <div class="x1n2onr6 xh8yej3">
                                <div class="x6s0dn4 x78zum5 x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x178xt8z xm81vs4 xso031l xy80clv xwebqov xvyu6v8 xrsgblv x10lij0i x1lcm9me x1yr5g0i xrt01vj x10y3i5r x10cdfl8 xis6omg xm7lytj x1ykpatu xlu9dua x1w2lkzu">
                                  <div class="x1s85apg"></div>
                                  <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94">
                                    <div class="x6s0dn4 x78zum5 x1q0g3np x1a02dak x2lwn1j xeuugli x1iyjqo2 x19lwn94">
                                      <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94">
                                        <div class="xjbqb8w x972fbf xcfux6l x1qhh985 xm0m39n xdj266r x11i5rnm xat24cr x1mh8g0r x1t137rt xexx8yu x4uap5 x18d9i69 xkhd6sd xlyipyv xwd1esu x1gnnqk1 xis6omg x1urst0s x1glnyev x1ad04t7 x1ix68h3 x19gujb8 xni1clt x1tutvks xfrpkgu xmi5d70 x1fvot60 xo1l8bm xxio538 x1iyjqo2 x6ikm8r x10wlt62">
                                          <div
                                            class="xmi5d70 x1fvot60 xo1l8bm xxio538 xis6omg xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj xeuugli"
                                            id="js_6de"
                                          >
                                            Page ID
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
                                          class="xtwfq29 style-lBZpX"
                                          id="style-lBZpX"
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
                        <div class="x78zum5 xdt5ytf xdl72j9 x1iyjqo2 x1n2onr6 x14atkfc xur5s0g">
                          <div
                            class="x1qvwoe0 xjm9jq1 x1y332i5 xcwd3tp x1jyxor1 x39eecv x6ikm8r x10wlt62 x10l6tqk xuxw1ft x1i1rx1s style-3dmbV"
                            data-sscoverage-ignore="true"
                            id="style-3dmbV"
                          >
                            <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94">
                              <div class="x1iyjqo2">
                                <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 xs83m0k x65s2av">
                                  <label id="js_6dh" for="js_6dg">
                                    <span class="xmi5d70 x1fvot60 xxio538 xbsr9hj xq9mrsl x1mzt3pk x1vvkbs x13faqbe x117nqv4 xeuugli">
                                      <span class="xmi5d70 x1fvot60 xxio538 xbsr9hj xq9mrsl x1mzt3pk x1vvkbs x13faqbe x117nqv4 xeuugli">
                                        Select an operator
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
                                    aria-labelledby="js_6dh js_6dk"
                                    aria-owns="js_6df"
                                    class="x1i10hfl x1qjc9v5 xjbqb8w xjqpnuy xa49m3k xqeqjp1 x2hbi6w x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x78zum5 xdl72j9 xdt5ytf x2lah0s xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli xexx8yu x4uap5 x18d9i69 xkhd6sd x1n2onr6 x16tdsg8 x1hl2dhg xggy1nq x1ja2u2z x1ypdohk xh8yej3 x1t137rt"
                                    id="js_6dg"
                                    role="combobox"
                                    tabindex="0"
                                  >
                                    <div class="x1n2onr6 xh8yej3">
                                      <div class="x6s0dn4 x78zum5 x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x178xt8z xm81vs4 xso031l xy80clv xwebqov xvyu6v8 xrsgblv x10lij0i x1lcm9me x1yr5g0i xrt01vj x10y3i5r x1gzqxud xbsr9hj xm7lytj x1ykpatu xlu9dua x1w2lkzu">
                                        <div class=""></div>
                                        <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94">
                                          <div class="x6s0dn4 x78zum5 x1q0g3np x1a02dak x2lwn1j xeuugli x1iyjqo2 x19lwn94">
                                            <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94">
                                              <div class="xjbqb8w x972fbf xcfux6l x1qhh985 xm0m39n xdj266r x11i5rnm xat24cr x1mh8g0r x1t137rt xexx8yu x4uap5 x18d9i69 xkhd6sd xlyipyv xwd1esu x1gnnqk1 xbsr9hj x1urst0s x1glnyev x1ad04t7 x1ix68h3 x19gujb8 xni1clt x1tutvks xfrpkgu xmi5d70 x1fvot60 xo1l8bm xxio538 x1iyjqo2 x6ikm8r x10wlt62">
                                                <div
                                                  class="xmi5d70 x1fvot60 xo1l8bm xxio538 xbsr9hj xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj xeuugli"
                                                  id="js_6dk"
                                                >
                                                  is
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
                                                class="xtwfq29 style-RYYK8"
                                                id="style-RYYK8"
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
                        <div class="x1hkcv85 xw2csxc x1odjw0f xysc3h8">
                          <div class="x78zum5 xdt5ytf xdl72j9 x1iyjqo2 xeuugli x1n2onr6 xh8yej3">
                            <div
                              class="x1qvwoe0 xjm9jq1 x1y332i5 xcwd3tp x1jyxor1 x39eecv x6ikm8r x10wlt62 x10l6tqk xuxw1ft x1i1rx1s style-2T3Fb"
                              data-sscoverage-ignore="true"
                              id="style-2T3Fb"
                            >
                              <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94">
                                <div class="x1iyjqo2">
                                  <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 xs83m0k x65s2av">
                                    <label id="js_6dm" for="js_6dl">
                                      <span class="xmi5d70 x1fvot60 xxio538 xbsr9hj xq9mrsl x1mzt3pk x1vvkbs x13faqbe x117nqv4 xeuugli">
                                        <span class="xmi5d70 x1fvot60 xxio538 xbsr9hj xq9mrsl x1mzt3pk x1vvkbs x13faqbe x117nqv4 xeuugli">
                                          "Enter a valid ID"
                                        </span>
                                        <span class="xbsr9hj x3nfvp2 x176pe96 xsgj6o6 x6s0dn4">
                                          <div
                                            class="x3nfvp2 x120ccyz x1heor9g"
                                            role="presentation"
                                          >
                                            <div
                                              class="xtwfq29 style-QNaK2"
                                              id="style-QNaK2"
                                            ></div>
                                          </div>
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
                                  <div class="x1n2onr6 xh8yej3">
                                    <div class="x6s0dn4 x78zum5 x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x178xt8z xm81vs4 xso031l xy80clv x14ihq94 x1ug7tv7 x6kzwsm xd1rtb7 x1lcm9me x1yr5g0i xrt01vj x10y3i5r x1gzqxud xbsr9hj xm7lytj x1ykpatu xlu9dua x1w2lkzu">
                                      <input
                                        type="text"
                                        style={{
                                          border: "none",
                                          outline: "none",
                                        }}
                                        value={currentPageID} // Use currentPageID here
                                        onChange={(e) =>
                                          setCurrentPageID(e.target.value)
                                        } // Update state
                                        placeholder="Enter Page ID"
                                      />
                                    </div>
                                    <div class="x14ihq94 x1ug7tv7 x6kzwsm xd1rtb7 x1lcm9me x1yr5g0i xrt01vj x10y3i5r x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x178xt8z xm81vs4 xso031l xy80clv x13dflua x6o7n8i xxziih7 x12w9bfk xg01cxk x47corl x10l6tqk x17qophe xds687c x13vifvy x1ey2m1c x6ikm8r x10wlt62 xnl74ce xmb4j5p xdx8kah xwmxa91 xmn8db3 x8lbu6m x2te4dl x1bs8fl3 xhhp2wi x14q35kh x1wa3ocq x1n7iyjn x1t0di37 x1tt7eqi xe25xm5 xsp6npd x1s928wv x1w3onc2 x1j6awrg x9obomg x1ryaxvv x1hvfe8t x1te75w5"></div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="x1cy8zhl x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x65s2av xw3qccf">
                          <div class="x3nfvp2 x193iq5w xxymvpz" role="none">
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
                                        class="xtwfq29 style-oDgf7"
                                        id="style-oDgf7"
                                      ></div>
                                    </div>
                                    <div class="x1xqt7ti x1fvot60 xk50ysn xxio538 x1heor9g xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj xeuugli">
                                      Add row
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
                <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x19lwn94 x1swvt13 x1pi30zi x1l90r2v x1y1aw1k x1c4vz4f x2lah0s">
                  <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x2lah0s x13a6bvl">
                    <div class="x3nfvp2 x193iq5w xxymvpz" role="none">
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
                                Cancel
                              </div>
                            </div>
                          </div>
                        </span>
                      </div>
                    </div>
                    <div
                      onClick={handleApply} // Close the bar on Apply
                      class="x3nfvp2 x193iq5w xxymvpz x1i64zmx"
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
      <i class="_53io style-JGbHT" id="style-JGbHT"></i>
      <a
        class="accessible_elem layer_close_elem"
        href="#"
        role="button"
        data-interactable="|click|"
      >
        Close pop-up and return
      </a>
    </div>
  );
};

export default PageID;

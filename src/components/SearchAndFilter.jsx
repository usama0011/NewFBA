import React, { useEffect } from "react";
import "../styles/SearchFilter.css";
import { ChevronUpIcon } from "@heroicons/react/16/solid";
const SearchAndFilter = ({
  searchQuery,
  setShowPageIDBar,
  setshowsearchfilterbar,
  showSearchSuggestions,
  setcurrentfiltercampaingShow,
  setSearchQuery,
  campaings,
  setCampaigns,
  filerwithcmapaignname,
  setLoading,
  setFilerThatCampaignName,
}) => {
  useEffect(() => {
    // On page load, check if there's a saved filter name in localStorage
    const savedCampaignName = localStorage.getItem("filteredCampaignName");

    if (savedCampaignName) {
      setLoading(true); // Set loading to true while filtering
      setcurrentfiltercampaingShow(true); // Display the current filtered campaigns
      setshowsearchfilterbar(false); // Hide the search filter bar

      // Filter campaigns based on the saved name
      const filteredCampaigns = campaings?.filter((campaign) =>
        campaign.campaingname
          .toLowerCase()
          .includes(savedCampaignName.toLowerCase())
      );

      setCampaigns(filteredCampaigns); // Update the filtered campaigns
      setLoading(false); // Stop loading
    } else {
      // If no saved name, show all campaigns
      setCampaigns(campaings);
    }
  }, [
    campaings,
    setCampaigns,
    setcurrentfiltercampaingShow,
    setLoading,
    setshowsearchfilterbar,
  ]);

  const handleGrabName = () => {
    setLoading(true);
    setcurrentfiltercampaingShow(true);
    setshowsearchfilterbar(false);

    // Save the current search query to localStorage
    if (searchQuery) {
      localStorage.setItem("filteredCampaignName", searchQuery);
      setFilerThatCampaignName(searchQuery);
    }

    // Get the saved campaign name from localStorage
    const savedCampaignName = localStorage.getItem("filteredCampaignName");

    // Use the searchQuery for filtering if it exists, otherwise fall back to savedCampaignName
    const filterName = searchQuery || savedCampaignName;

    // Filter campaigns based on the determined name
    const filteredCampaigns = campaings?.filter((campaign) =>
      campaign.campaingname.toLowerCase().includes(filterName.toLowerCase())
    );

    setCampaigns(filteredCampaigns); // Update filtered campaigns
    setSearchQuery(""); // Clear the search query
    setLoading(false); // Stop loading
  };

  return (
    <div>
      <div
        style={{ zIndex: "5000" }}
        width="400"
        class="uiScrollableArea nofade uiScrollableAreaWithShadow snipcss-dQbl2 contentAfter"
      >
        <div
          style={{ zIndex: "5000" }}
          class="uiScrollableAreaWrap scrollable style-b5q9B"
          id="style-b5q9B"
        >
          <div
            style={{ zIndex: "5000" }}
            class="uiScrollableAreaBody style-SbRnq"
            id="style-SbRnq"
          >
            {/* here it remove all that */}
            {showSearchSuggestions ? (
              <div>
                <div
                  class="uiScrollableAreaWrap scrollable style-BoBdK"
                  id="style-BoBdK"
                >
                  <div
                    class="uiScrollableAreaBody style-SklWG"
                    id="style-SklWG"
                  >
                    <div class="uiScrollableAreaContent">
                      <ul class="">
                        <div
                          class="xmix8c7 x1xmf6yo xw3qccf x12nagc xsgj6o6 x6ikm8r x10wlt62 x1iorvi4 xn6708d xjkvuk6 x1ye3gou xlyipyv xuxw1ft"
                          id="FILTER_SECTION_ID"
                        >
                          <span id="style-OxCn5" class="style-OxCn5">
                            Suggested searches
                          </span>
                        </div>
                        <li onClick={handleGrabName}>
                          <div
                            class="xhk9q7s x1otrzb0 x1i1ezom x1o6z2jb x1ypdohk x78zum5 xmix8c7 x1gslohp xw3qccf x12nagc xsgj6o6 x1iorvi4 xn6708d xjkvuk6 x1ye3gou"
                            data-testid="typeahead-filter-option"
                          >
                            <span class="x1iyjqo2 x6ikm8r x10wlt62 xlyipyv x1sdyfia">
                              <span id="style-Xrxrz" class="style-Xrxrz">
                                Campaign Name{" "}
                                <span id="style-dv6CF" class="style-dv6CF">
                                  contains
                                </span>{" "}
                                <span id="style-5qWlG" class="style-5qWlG">
                                  <span
                                    class="x1e4ktmx x1gmknla"
                                    style={{
                                      color: "#1461cc",
                                      backgroundColor: "#f5f5f5",
                                    }}
                                  >
                                    {searchQuery}
                                  </span>
                                </span>
                              </span>
                            </span>
                          </div>
                        </li>
                        <li class="">
                          <div
                            class="xhk9q7s x1otrzb0 x1i1ezom x1o6z2jb x1ypdohk x78zum5 xmix8c7 x1gslohp xw3qccf x12nagc xsgj6o6 x1iorvi4 xn6708d xjkvuk6 x1ye3gou"
                            data-testid="typeahead-filter-option"
                          >
                            <span class="x1iyjqo2 x6ikm8r x10wlt62 xlyipyv x1sdyfia">
                              <span id="style-NnS2t" class="style-NnS2t">
                                Ad set name{" "}
                                <span id="style-2hpoG" class="style-2hpoG">
                                  contains
                                </span>{" "}
                                <span id="style-QWPHd" class="style-QWPHd">
                                  <span
                                    class="x1e4ktmx x1gmknla"
                                    style={{
                                      color: "#1461cc",
                                      backgroundColor: "#f5f5f5",
                                    }}
                                  >
                                    {searchQuery}
                                  </span>
                                </span>
                              </span>
                            </span>
                          </div>
                        </li>
                        <li class="">
                          <div
                            class="xhk9q7s x1otrzb0 x1i1ezom x1o6z2jb x1ypdohk x78zum5 xmix8c7 x1gslohp xw3qccf x12nagc xsgj6o6 x1iorvi4 xn6708d xjkvuk6 x1ye3gou x1b9h4xk"
                            data-testid="typeahead-filter-option"
                            data-auto-logging-id="f3e77bffb"
                          >
                            <span class="x1iyjqo2 x6ikm8r x10wlt62 xlyipyv x1sdyfia">
                              <span id="style-FUgjA" class="style-FUgjA">
                                Ad name{" "}
                                <span id="style-jpTvn" class="style-jpTvn">
                                  contains
                                </span>{" "}
                                <span id="style-GTwJt" class="style-GTwJt">
                                  <span
                                    class="x1e4ktmx x1gmknla"
                                    style={{
                                      color: "#1461cc",
                                      backgroundColor: "#f5f5f5",
                                    }}
                                  >
                                    {searchQuery}
                                  </span>
                                </span>
                              </span>
                            </span>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div class="uiScrollableAreaContent">
                <ul style={{ textAlign: "left" }}>
                  <div
                    class="xmix8c7 x1xmf6yo xw3qccf x12nagc xsgj6o6 x6ikm8r x10wlt62 x1iorvi4 xn6708d xjkvuk6 x1ye3gou xlyipyv xuxw1ft"
                    id="FILTER_SECTION_ID"
                  >
                    <span id="style-LZyGR" class="style-LZyGR">
                      Saved searches
                    </span>
                  </div>
                  <li>
                    <div class="xhk9q7s x1otrzb0 x1i1ezom x1o6z2jb x1ypdohk x78zum5 xmix8c7 x1gslohp xw3qccf x12nagc xsgj6o6 x1iorvi4 xn6708d xjkvuk6 x1ye3gou x1b9h4xk">
                      <span class="x1iyjqo2 x6ikm8r x10wlt62 xlyipyv x1sdyfia">
                        <span id="style-X5qz1" class="style-X5qz1">
                          <span class="x8t9es0 x1fvot60 xo1l8bm xxio538 x108nfp6 xq9mrsl x1h4wwuj xeuugli">
                            Had delivery
                          </span>
                        </span>
                      </span>
                    </div>
                  </li>
                </ul>
                <ul style={{ textAlign: "left" }}>
                  <div
                    class="xmix8c7 x1xmf6yo xw3qccf x12nagc xsgj6o6 x6ikm8r x10wlt62 x1iorvi4 xn6708d xjkvuk6 x1ye3gou xlyipyv xuxw1ft"
                    id="FILTER_SECTION_ID"
                  >
                    <div data-visualcompletion="ignore" class=""></div>
                    <span id="style-QnkT7" class="style-QnkT7">
                      Filters
                    </span>
                  </div>
                  <li>
                    <div class="xhk9q7s x1otrzb0 x1i1ezom x1o6z2jb x1ypdohk x78zum5 xmix8c7 x1gslohp xw3qccf x12nagc xsgj6o6 x1iorvi4 xn6708d xjkvuk6 x1ye3gou">
                      <span class="x1iyjqo2 x6ikm8r x10wlt62 xlyipyv x1sdyfia">
                        <span id="style-eSzsv" class="style-eSzsv">
                          <span class="x8t9es0 x1fvot60 xo1l8bm xxio538 x108nfp6 xq9mrsl x1h4wwuj xeuugli">
                            Filter by row selection(s)
                          </span>
                        </span>
                      </span>
                    </div>
                  </li>
                  <li>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        marginBottom: "10px",
                        paddingLeft: "15px",
                      }}
                      class="_741l"
                    >
                      <div class="x1iyjqo2 x6ikm8r x10wlt62 xlyipyv">
                        <span id="style-p8SUB" class="style-p8SUB">
                          Name/ID
                        </span>
                      </div>
                      <ChevronUpIcon
                        style={{ width: "18px", height: "18px", color: "gray" }}
                      />
                    </div>
                  </li>
                  <li>
                    <div class="xhk9q7s x1otrzb0 x1i1ezom x1o6z2jb x1ypdohk x78zum5 xmix8c7 x1gslohp xw3qccf x12nagc xsgj6o6 x1iorvi4 xn6708d xjkvuk6 x1ye3gou">
                      <span class="x1iyjqo2 x6ikm8r x10wlt62 xlyipyv x1sdyfia">
                        <span id="style-1mVSh" class="style-1mVSh">
                          <span class="x8t9es0 x1fvot60 xo1l8bm xxio538 x108nfp6 xq9mrsl x1h4wwuj xeuugli">
                            Campaign name
                          </span>
                        </span>
                      </span>
                    </div>
                  </li>
                  <li>
                    <div class="xhk9q7s x1otrzb0 x1i1ezom x1o6z2jb x1ypdohk x78zum5 xmix8c7 x1gslohp xw3qccf x12nagc xsgj6o6 x1iorvi4 xn6708d xjkvuk6 x1ye3gou">
                      <span class="x1iyjqo2 x6ikm8r x10wlt62 xlyipyv x1sdyfia">
                        <span id="style-1mVSh" class="style-1mVSh">
                          <span class="x8t9es0 x1fvot60 xo1l8bm xxio538 x108nfp6 xq9mrsl x1h4wwuj xeuugli">
                            Ad set name
                          </span>
                        </span>
                      </span>
                    </div>
                  </li>
                  <li>
                    <div class="xhk9q7s x1otrzb0 x1i1ezom x1o6z2jb x1ypdohk x78zum5 xmix8c7 x1gslohp xw3qccf x12nagc xsgj6o6 x1iorvi4 xn6708d xjkvuk6 x1ye3gou">
                      <span class="x1iyjqo2 x6ikm8r x10wlt62 xlyipyv x1sdyfia">
                        <span id="style-1mVSh" class="style-1mVSh">
                          <span class="x8t9es0 x1fvot60 xo1l8bm xxio538 x108nfp6 xq9mrsl x1h4wwuj xeuugli">
                            Ad name
                          </span>
                        </span>
                      </span>
                    </div>
                  </li>
                  <li>
                    <div class="xhk9q7s x1otrzb0 x1i1ezom x1o6z2jb x1ypdohk x78zum5 xmix8c7 x1gslohp xw3qccf x12nagc xsgj6o6 x1iorvi4 xn6708d xjkvuk6 x1ye3gou">
                      <span class="x1iyjqo2 x6ikm8r x10wlt62 xlyipyv x1sdyfia">
                        <span id="style-1mVSh" class="style-1mVSh">
                          <span class="x8t9es0 x1fvot60 xo1l8bm xxio538 x108nfp6 xq9mrsl x1h4wwuj xeuugli">
                            Campaign ID
                          </span>
                        </span>
                      </span>
                    </div>
                  </li>
                  <li>
                    <div class="xhk9q7s x1otrzb0 x1i1ezom x1o6z2jb x1ypdohk x78zum5 xmix8c7 x1gslohp xw3qccf x12nagc xsgj6o6 x1iorvi4 xn6708d xjkvuk6 x1ye3gou">
                      <span class="x1iyjqo2 x6ikm8r x10wlt62 xlyipyv x1sdyfia">
                        <span id="style-1mVSh" class="style-1mVSh">
                          <span class="x8t9es0 x1fvot60 xo1l8bm xxio538 x108nfp6 xq9mrsl x1h4wwuj xeuugli">
                            Ad ID
                          </span>
                        </span>
                      </span>
                    </div>
                  </li>
                  <li
                    onClick={() => {
                      setShowPageIDBar(true);
                      setshowsearchfilterbar(false);
                    }}
                  >
                    <div class="xhk9q7s x1otrzb0 x1i1ezom x1o6z2jb x1ypdohk x78zum5 xmix8c7 x1gslohp xw3qccf x12nagc xsgj6o6 x1iorvi4 xn6708d xjkvuk6 x1ye3gou">
                      <span class="x1iyjqo2 x6ikm8r x10wlt62 xlyipyv x1sdyfia">
                        <span id="style-1mVSh" class="style-1mVSh">
                          <span class="x8t9es0 x1fvot60 xo1l8bm xxio538 x108nfp6 xq9mrsl x1h4wwuj xeuugli">
                            Page ID
                          </span>
                        </span>
                      </span>
                    </div>
                  </li>
                  <li>
                    <div class="xhk9q7s x1otrzb0 x1i1ezom x1o6z2jb x1ypdohk x78zum5 xmix8c7 x1gslohp xw3qccf x12nagc xsgj6o6 x1iorvi4 xn6708d xjkvuk6 x1ye3gou">
                      <span class="x1iyjqo2 x6ikm8r x10wlt62 xlyipyv x1sdyfia">
                        <span id="style-1mVSh" class="style-1mVSh">
                          <span class="x8t9es0 x1fvot60 xo1l8bm xxio538 x108nfp6 xq9mrsl x1h4wwuj xeuugli">
                            Product catalogue ID
                          </span>
                        </span>
                      </span>
                    </div>
                  </li>

                  <li>
                    <div class="xhk9q7s x1otrzb0 x1i1ezom x1o6z2jb x1ypdohk x78zum5 xmix8c7 x1gslohp xw3qccf x12nagc xsgj6o6 x1iorvi4 xn6708d xjkvuk6 x1ye3gou">
                      <span class="x1iyjqo2 x6ikm8r x10wlt62 xlyipyv x1sdyfia">
                        <span id="style-1mVSh" class="style-1mVSh">
                          <span class="x8t9es0 x1fvot60 xo1l8bm xxio538 x108nfp6 xq9mrsl x1h4wwuj xeuugli">
                            Catalogue
                          </span>
                        </span>
                      </span>
                    </div>
                  </li>
                  <li>
                    <div class="xhk9q7s x1otrzb0 x1i1ezom x1o6z2jb x1ypdohk x78zum5 xmix8c7 x1gslohp xw3qccf x12nagc xsgj6o6 x1iorvi4 xn6708d xjkvuk6 x1ye3gou">
                      <span class="x1iyjqo2 x6ikm8r x10wlt62 xlyipyv x1sdyfia">
                        <span id="style-knNOa" class="style-knNOa">
                          <span class="x8t9es0 x1fvot60 xo1l8bm xxio538 x108nfp6 xq9mrsl x1h4wwuj xeuugli">
                            Conversion location
                          </span>
                        </span>
                      </span>
                    </div>
                  </li>
                  <li>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        marginBottom: "10px",
                        paddingLeft: "15px",
                      }}
                      class="_741l"
                    >
                      <div class="x1iyjqo2 x6ikm8r x10wlt62 xlyipyv">
                        <span id="style-kb2be" class="style-kb2be">
                          Delivery
                        </span>
                      </div>
                      <i
                        class="_741p img style-CA1tU"
                        alt=""
                        data-visualcompletion="css-img"
                        id="style-CA1tU"
                      ></i>
                    </div>
                  </li>
                  <li>
                    <div class="xhk9q7s x1otrzb0 x1i1ezom x1o6z2jb x1ypdohk x78zum5 xmix8c7 x1gslohp xw3qccf x12nagc xsgj6o6 x1iorvi4 xn6708d xjkvuk6 x1ye3gou">
                      <span class="x1iyjqo2 x6ikm8r x10wlt62 xlyipyv x1sdyfia">
                        <span id="style-MCH2k" class="style-MCH2k">
                          <span class="x8t9es0 x1fvot60 xo1l8bm xxio538 x108nfp6 xq9mrsl x1h4wwuj xeuugli">
                            Learning phase status
                          </span>
                        </span>
                      </span>
                    </div>
                  </li>
                  <li>
                    <div class="xhk9q7s x1otrzb0 x1i1ezom x1o6z2jb x1ypdohk x78zum5 xmix8c7 x1gslohp xw3qccf x12nagc xsgj6o6 x1iorvi4 xn6708d xjkvuk6 x1ye3gou">
                      <span class="x1iyjqo2 x6ikm8r x10wlt62 xlyipyv x1sdyfia">
                        <span id="style-RTq7H" class="style-RTq7H">
                          <span class="x8t9es0 x1fvot60 xo1l8bm xxio538 x108nfp6 xq9mrsl x1h4wwuj xeuugli">
                            Objectives
                          </span>
                        </span>
                      </span>
                    </div>
                  </li>
                  <li>
                    <div class="xhk9q7s x1otrzb0 x1i1ezom x1o6z2jb x1ypdohk x78zum5 xmix8c7 x1gslohp xw3qccf x12nagc xsgj6o6 x1iorvi4 xn6708d xjkvuk6 x1ye3gou">
                      <span class="x1iyjqo2 x6ikm8r x10wlt62 xlyipyv x1sdyfia">
                        <span id="style-FHmNd" class="style-FHmNd">
                          <span class="x8t9es0 x1fvot60 xo1l8bm xxio538 x108nfp6 xq9mrsl x1h4wwuj xeuugli">
                            Placement
                          </span>
                        </span>
                      </span>
                    </div>
                  </li>
                  <li>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        marginBottom: "10px",
                        paddingLeft: "15px",
                      }}
                      class="_741l"
                    >
                      <div class="x1iyjqo2 x6ikm8r x10wlt62 xlyipyv">
                        <span id="style-JhP3I" class="style-JhP3I">
                          Campaign metrics
                        </span>
                      </div>
                      <i
                        class="_741p img style-mNLZZ"
                        alt=""
                        data-visualcompletion="css-img"
                        id="style-mNLZZ"
                      ></i>
                    </div>
                  </li>
                  <li>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        marginBottom: "10px",
                        paddingLeft: "15px",
                      }}
                      class="_741l"
                    >
                      <div class="x1iyjqo2 x6ikm8r x10wlt62 xlyipyv">
                        <span id="style-KXie3" class="style-KXie3">
                          Ad set metrics
                        </span>
                      </div>
                      <i
                        class="_741p img style-Wj3Nh"
                        alt=""
                        data-visualcompletion="css-img"
                        id="style-Wj3Nh"
                      ></i>
                    </div>
                  </li>
                  <li>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        marginBottom: "10px",
                        paddingLeft: "15px",
                      }}
                      class="_741l"
                    >
                      <div class="x1iyjqo2 x6ikm8r x10wlt62 xlyipyv">
                        <span id="style-FaiJv" class="style-FaiJv">
                          Ad metrics
                        </span>
                      </div>
                      <i
                        class="_741p img style-eO18Q"
                        alt=""
                        data-visualcompletion="css-img"
                        id="style-eO18Q"
                      ></i>
                    </div>
                  </li>
                  <li>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        marginBottom: "10px",
                        paddingLeft: "15px",
                      }}
                      class="_741l"
                    >
                      <div class="x1iyjqo2 x6ikm8r x10wlt62 xlyipyv">
                        <span id="style-eoyfU" class="style-eoyfU">
                          Audience
                        </span>
                      </div>
                      <i
                        class="_741p img style-4edAr"
                        alt=""
                        data-visualcompletion="css-img"
                        id="style-4edAr"
                      ></i>
                    </div>
                  </li>
                  <li>
                    <div class="xhk9q7s x1otrzb0 x1i1ezom x1o6z2jb x1ypdohk x78zum5 xmix8c7 x1gslohp xw3qccf x12nagc xsgj6o6 x1iorvi4 xn6708d xjkvuk6 x1ye3gou">
                      <span class="x1iyjqo2 x6ikm8r x10wlt62 xlyipyv x1sdyfia">
                        <span id="style-lGhvO" class="style-lGhvO">
                          <span class="x8t9es0 x1fvot60 xo1l8bm xxio538 x108nfp6 xq9mrsl x1h4wwuj xeuugli">
                            Attribution setting
                          </span>
                        </span>
                      </span>
                    </div>
                  </li>
                  <li>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        marginBottom: "10px",
                        paddingLeft: "15px",
                      }}
                      class="_741l"
                    >
                      <div class="x1iyjqo2 x6ikm8r x10wlt62 xlyipyv">
                        <span id="style-bTToU" class="style-bTToU">
                          Recently changed
                        </span>
                      </div>
                      <i
                        class="_741p img style-JdwE7"
                        alt=""
                        data-visualcompletion="css-img"
                        id="style-JdwE7"
                      ></i>
                    </div>
                  </li>
                  <li>
                    <div class="xhk9q7s x1otrzb0 x1i1ezom x1o6z2jb x1ypdohk x78zum5 xmix8c7 x1gslohp xw3qccf x12nagc xsgj6o6 x1iorvi4 xn6708d xjkvuk6 x1ye3gou">
                      <span class="x1iyjqo2 x6ikm8r x10wlt62 xlyipyv x1sdyfia">
                        <span id="style-yZZ39" class="style-yZZ39">
                          <span class="x8t9es0 x1fvot60 xo1l8bm xxio538 x108nfp6 xq9mrsl x1h4wwuj xeuugli">
                            A/B test
                          </span>
                        </span>
                      </span>
                    </div>
                  </li>
                  <li>
                    <div class="xhk9q7s x1otrzb0 x1i1ezom x1o6z2jb x1ypdohk x78zum5 xmix8c7 x1gslohp xw3qccf x12nagc xsgj6o6 x1iorvi4 xn6708d xjkvuk6 x1ye3gou">
                      <span class="x1iyjqo2 x6ikm8r x10wlt62 xlyipyv x1sdyfia">
                        <span id="style-yOLIW" class="style-yOLIW">
                          <span class="x8t9es0 x1fvot60 xo1l8bm xxio538 x108nfp6 xq9mrsl x1h4wwuj xeuugli">
                            Special ad category
                          </span>
                        </span>
                      </span>
                    </div>
                  </li>
                  <li>
                    <div class="xhk9q7s x1otrzb0 x1i1ezom x1o6z2jb x1ypdohk x78zum5 xmix8c7 x1gslohp xw3qccf x12nagc xsgj6o6 x1iorvi4 xn6708d xjkvuk6 x1ye3gou">
                      <span class="x1iyjqo2 x6ikm8r x10wlt62 xlyipyv x1sdyfia">
                        <span id="style-VIPz5" class="style-VIPz5">
                          <span class="x8t9es0 x1fvot60 xo1l8bm xxio538 x108nfp6 xq9mrsl x1h4wwuj xeuugli">
                            Test name
                          </span>
                        </span>
                      </span>
                    </div>
                  </li>
                  <li>
                    <div class="xhk9q7s x1otrzb0 x1i1ezom x1o6z2jb x1ypdohk x78zum5 xmix8c7 x1gslohp xw3qccf x12nagc xsgj6o6 x1iorvi4 xn6708d xjkvuk6 x1ye3gou">
                      <span class="x1iyjqo2 x6ikm8r x10wlt62 xlyipyv x1sdyfia">
                        <span id="style-qVniY" class="style-qVniY">
                          <span class="x8t9es0 x1fvot60 xo1l8bm xxio538 x108nfp6 xq9mrsl x1h4wwuj xeuugli">
                            Campaign setup
                          </span>
                        </span>
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
        <div class="uiScrollableAreaTrack" data-clickable="1">
          <div
            class="uiScrollableAreaGripper style-ec6zi"
            id="style-ec6zi"
          ></div>
        </div>
      </div>
    </div>
  );
};

export default SearchAndFilter;

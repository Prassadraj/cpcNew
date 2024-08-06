import React from "react";
import "./scroll.css";
function Scroll() {
  return (
    <div className="block-center-center">
      <nav className="Nav block-center-center">
        <a href="/">Get Started</a>
      </nav>
      <main className="inline content-full">
        <section className="Hero inline gap-2">
          <div className="Wrapper block content-3">
            <div className="Visual block-center-center">
              <picture className="FirstPic">
                <source
                  srcSet="https://raw.githubusercontent.com/mobalti/open-props-interfaces/main/stories-with-scroll-driven/images/img-desktop-3.avif"
                  media="(width >= 1024px)"
                  type="image/avif"
                />
                <source
                  srcSet="https://raw.githubusercontent.com/mobalti/open-props-interfaces/main/stories-with-scroll-driven/images/img-mobile-3.avif"
                  type="image/avif"
                />
                <source
                  srcSet="https://raw.githubusercontent.com/mobalti/open-props-interfaces/main/stories-with-scroll-driven/images/img-desktop-3.webp"
                  media="(width >= 1024px)"
                  type="image/webp"
                />
                <img
                  src="https://raw.githubusercontent.com/mobalti/open-props-interfaces/main/stories-with-scroll-driven/images/img-mobile-3.webp"
                  alt="Stories Unveiled"
                />
              </picture>
              <picture className="SecondPic">
                <source
                  srcSet="https://raw.githubusercontent.com/mobalti/open-props-interfaces/main/stories-with-scroll-driven/images/img-desktop-2.avif"
                  media="(width >= 1024px)"
                  type="image/avif"
                />
                <source
                  srcSet="https://raw.githubusercontent.com/mobalti/open-props-interfaces/main/stories-with-scroll-driven/images/img-mobile-2.avif"
                  type="image/avif"
                />
                <source
                  srcSet="https://raw.githubusercontent.com/mobalti/open-props-interfaces/main/stories-with-scroll-driven/images/img-desktop-2.webp"
                  media="(width >= 1024px)"
                  type="image/webp"
                />
                <img
                  src="https://raw.githubusercontent.com/mobalti/open-props-interfaces/main/stories-with-scroll-driven/images/img-mobile-2.webp"
                  alt="Celebrating Life Together"
                />
              </picture>
              <picture className="ThirdPic">
                <source
                  srcSet="https://raw.githubusercontent.com/mobalti/open-props-interfaces/main/stories-with-scroll-driven/images/img-desktop-1.avif"
                  media="(width >= 1024px)"
                  type="image/avif"
                />
                <source
                  srcSet="https://raw.githubusercontent.com/mobalti/open-props-interfaces/main/stories-with-scroll-driven/images/img-mobile-1.avif"
                  type="image/avif"
                />
                <source
                  srcSet="https://raw.githubusercontent.com/mobalti/open-props-interfaces/main/stories-with-scroll-driven/images/img-desktop-1.webp"
                  media="(width >= 1024px)"
                  type="image/webp"
                />
                <img
                  src="https://raw.githubusercontent.com/mobalti/open-props-interfaces/main/stories-with-scroll-driven/images/img-mobile-1.webp"
                  alt="The Art of Giving"
                />
              </picture>
            </div>
          </div>

          <div className="Content block">
            <div
              id="StoriesUnveiled"
              className="FirstLockup block-center-start"
            >
              <div className="block gap-3">
                <h3>Stories Unveiled</h3>
                <div className="subhead">
                  Capture the essence of family celebration.
                </div>
                <p>Share the moments that weave your family tale.</p>
              </div>
            </div>
            <div
              id="CelebratingLifeTogether"
              className="SecondLockup block-center-start"
            >
              <div className="block gap-3">
                <h3>Celebrating Life Together</h3>
                <div className="subhead">
                  Embrace the significance of shared joy.
                </div>
                <p>In every celebration, find the heartwarming stories.</p>
              </div>
            </div>
            <div id="TheArtofGiving" className="ThirdLockup block-center-start">
              <div className="block gap-3">
                <h3>The Art of Giving</h3>
                <div className="subhead">
                  Explore the stories within each present.
                </div>
                <p>Every gift is a chapter in your family's narrative.</p>
              </div>
            </div>
          </div>

          <div className="SmallScreenContent block-center-center">
            <p className="FirstStory">The Art of Giving</p>
            <p className="SecondStory">Celebrating Life Together</p>
            <p className="ThirdStory">Stories Unveiled</p>
          </div>
        </section>

        <div className="pagination block-center-center content-full">
          <div className="inline gap-3">
            <a href="#StoriesUnveiled"></a>
            <a href="#CelebratingLifeTogether"></a>
            <a href="#TheArtofGiving"></a>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Scroll;

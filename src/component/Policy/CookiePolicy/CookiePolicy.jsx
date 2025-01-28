import React from "react";
import Footer from "../../../homepages/Footer/Footer";

function CookiePolicy() {
  return (
    <>
      <div className="container mx-auto px-md-5 d-flex flex-column gap-3">
        <div className="md:pl-10 md:pr-10 mt-2 text-justify">
          <h1 className="md:text-4xl text-center lg:text-4xl xl:text-4xl text-xl mt-4 font-medium leading-normal text-maincol mb-5">
            Cookie Policy
          </h1>
          <p className="text-fontextra">
            This is the Cookie Policy for CPC Diagnostics Pvt Ltd, accessible
            from{" "}
            <a
              target="_blank"
              style={{ color: "#00a986" }}
              href="https://cpcdiagnostics.in"
            >
              cpc
            </a>
          </p>

          <h2 className="md:text-2xl lg:text-2xl xl:text-2xl text-xl mt-4 font-medium leading-normal text-maincol text-left">
            What Are Cookies
          </h2>
          <p className="text-fontextra">
            As is common practice with almost all professional websites this
            site uses cookies, which are tiny files that are downloaded to your
            computer, to improve your experience. This page describes what
            information they gather, how we use it and why we sometimes need to
            store these cookies. We will also share how you can prevent these
            cookies from being stored however this may downgrade or ‘break’
            certain elements of the site’s functionality.
          </p>

          <h2 className="md:text-2xl lg:text-2xl xl:text-2xl text-xl mt-4 font-medium leading-normal text-maincol text-left">
            How We Use Cookies
          </h2>
          <p className="text-fontextra">
            We use cookies for a variety of reasons detailed below.
            Unfortunately, in most cases there are no industry standard options
            for disabling cookies without completely disabling the functionality
            and features they add to this site. It is recommended that you leave
            on all cookies if you are not sure whether you need them or not in
            case, they are used to provide a service that you use.
          </p>

          <h2 className="md:text-2xl lg:text-2xl xl:text-2xl text-xl mt-4 font-medium leading-normal text-maincol text-left">
            Disabling Cookies
          </h2>
          <p className="text-fontextra">
            You can prevent the setting of cookies by adjusting the settings on
            your browser (see your browser Help for how to do this). Be aware
            that disabling cookies will affect the functionality of this and
            many other websites that you visit. Disabling cookies will usually
            result in also disabling certain functionality and features of this
            site. Therefore, it is recommended that you do not disable cookies.
          </p>

          <h2 className="md:text-2xl lg:text-2xl xl:text-2xl text-xl mt-4 font-medium leading-normal text-maincol text-left">
            The Cookies We Set
          </h2>
          <h3 className="md:text-2xl lg:text-2xl xl:text-2xl text-xl mt-4 font-medium leading-normal text-maincol text-left">
            Site preferences cookies
          </h3>
          <p className="text-fontextra">
            In order to provide you with a great experience on this site we
            provide the functionality to set your preferences for how this site
            runs when you use it. In order to remember your preferences, we need
            to set cookies so that this information can be called whenever you
            interact with a page is affected by your preferences.
          </p>

          <h3 className="md:text-2xl lg:text-2xl xl:text-2xl text-xl mt-4 font-medium leading-normal text-maincol text-left">
            Email newsletters related cookies
          </h3>
          <p className="text-fontextra">
            This site offers newsletter or email subscription services and
            cookies may be used to remember if you are already registered and
            whether to show certain notifications which might only be valid to
            subscribed/unsubscribed users.
          </p>

          <h3 className="md:text-2xl lg:text-2xl xl:text-2xl text-xl mt-4 font-medium leading-normal text-maincol text-left">
            Surveys related cookies
          </h3>
          <p className="text-fontextra">
            From time to time, we offer user surveys and questionnaires to
            provide you with interesting insights, helpful tools, or to
            understand our user base more accurately. These surveys may use
            cookies to remember who has already taken part in a survey or to
            provide you with accurate results after you change pages.
          </p>

          <h3 className="md:text-2xl lg:text-2xl xl:text-2xl text-xl mt-4 font-medium leading-normal text-maincol text-left">
            Forms related cookies
          </h3>
          <p className="text-fontextra">
            When you submit data to through a form such as those found on
            contact pages or comment forms cookies may be set to remember your
            user details for future correspondence.
          </p>

          <h2 className="md:text-2xl lg:text-2xl xl:text-2xl text-xl mt-4 font-medium leading-normal text-maincol text-left">
            Third Party Cookies
          </h2>
          <p className="text-fontextra">
            In some special cases we also use cookies provided by trusted third
            parties. The following section details which third party cookies you
            might encounter through this site.
          </p>

          <p className="text-fontextra">
            This site uses Google Analytics which is one of the most widespread
            and trusted analytics solutions on the web for helping us to
            understand how you use the site and ways that we can improve your
            experience. These cookies may track things such as how long you
            spend on the site and the pages that you visit so we can continue to
            produce engaging content. For more information on Google Analytics
            cookies, see the official{" "}
            <a href="https://www.google.com/analytics">Google Analytics page</a>
            .
          </p>

          <p className="text-fontextra">
            From time to time, we test new features and make subtle changes to
            the way that the site is delivered. When we are still testing new
            features, these cookies may be used to ensure that you receive a
            consistent experience whilst on the site whilst ensuring we
            understand which optimisations our users appreciate the most.
          </p>

          <p className="text-fontextra">
            We also use social media buttons and/or plugins on this site that
            allow you to connect with your social network in various ways. For
            these to work, the following social media sites including Facebook,
            Twitter, and LinkedIn, will set cookies through our site which may
            be used to enhance your profile on their site or contribute to the
            data they hold for various purposes outlined in their respective
            privacy policies.
          </p>

          <h2 className="md:text-2xl lg:text-2xl xl:text-2xl text-xl mt-4 font-medium leading-normal text-maincol text-left">
            More Information
          </h2>
          <p className="text-fontextra">
            Hopefully that has clarified things for you and as was previously
            mentioned if there is something that you aren’t sure whether you
            need or not it’s usually safer to leave cookies enabled in case it
            does interact with one of the features you use on our site.
          </p>

          <p className="text-fontextra">
            However, if you are still looking for more information, then you can
            contact us through email:{" "}
            <a
              style={{ color: "#00a986" }}
              href="mailto:info@cpcdiagnostics.com"
            >
              info@cpcdiagnostics.com
            </a>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default CookiePolicy;

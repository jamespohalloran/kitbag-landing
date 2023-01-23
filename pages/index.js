import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";

import { benefitOne } from "../components/data";
import Benefits from "../components/benefits";
import Footer from "../components/footer";
import Cta from "../components/cta";
import Faq from "../components/faq";
import { NextSeo } from "next-seo";

//import dynamic from "next/dynamic";

// const Video = dynamic(() => import("../components/video"));

// const Benefits = dynamic(() => import("../components/benefits"));
// const Footer = dynamic(() => import("../components/footer"));
// const Testimonials = dynamic(() => import("../components/testimonials"));
// const Cta = dynamic(() => import("../components/cta"));
// const Faq = dynamic(() => import("../components/faq"));

// const PopupWidget = dynamic(() => import("../components/popupWidget"));

export default function Home() {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NextSeo
        title="Kitbag.io - Plan awesome trips"
        description="Plan awesome trips around your favorite things. Bands, Sports Teams. Comedians, Musicals...Whatever you're into!"
        openGraph={{
          url: "https://kitbag.io",
          title: "Kitbag.io",
          description:
            "Plan awesome trips around your favorite things. Bands, Sports Teams. Comedians, Musicals...Whatever you're into!",
          images: [
            {
              url: "https://app.kitbag.io/social-img.png",
              width: 1600,
              height: 900,
              alt: "Kitbag.io",
              type: "image/png",
            },
          ],
        }}
      />

      <Navbar />
      <Hero />
      {/* add pretitle="Nextly Benefits" to following sectionTitle*/}
      <SectionTitle title=" Travel with Purpose">
        Don't just plan a trip around seeing a single band you like... Plan a
        trip around your full set of interests.
      </SectionTitle>
      <Benefits data={benefitOne} />
      {/* <Benefits imgPos="right" data={benefitTwo} /> */}
      <SectionTitle pretitle="FAQ" title="Frequently Asked Questions">
        {/* Answer your customers possible questions here, it will increase the
        conversion rate as well as support or chat requests. */}
      </SectionTitle>
      <Faq />
      <Cta />
      <Footer />
    </>
  );
}

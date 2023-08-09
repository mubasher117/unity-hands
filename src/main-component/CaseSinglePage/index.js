import React, { Fragment } from "react";
import Navbar3 from "../../components/Navbar3";
import PageTitle from "../../components/pagetitle";
import CaseSingle from "../../components/CaseSingle";
import Footer from "../../components/footer";
import Scrollbar from "../../components/scrollbar";
import Newsletter from "../../components/Newsletter";
import { useLocation } from "react-router-dom";
import Gallery from "../../components/Gallery";

const CaseSinglePage = () => {
  const location = useLocation();
  const state = location.state;
  return (
    <Fragment>
      <Navbar3 />
      <PageTitle
        pageTitle={state.title}
        pagesub={"Ensure Education for every poor children"}
      />
      <CaseSingle description={state.descriptionFull} image={state.image} />
      <Gallery images={state.images} />
      {/* <Newsletter /> */}
      <Footer />
      <Scrollbar />
    </Fragment>
  );
};
export default CaseSinglePage;

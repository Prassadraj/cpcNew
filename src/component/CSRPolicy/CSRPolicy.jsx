import React, { useEffect, useState } from "react";
// Ensure this import is correct
import pic1 from "../../assets/image/pic1.jpg";
import pic2 from "../../assets/image/Pic2.jpg";
import pic3 from "../../assets/image/Pic3.jpg";
import pic4 from "../../assets/image/Pic4.jpg";
import pic5 from "../../assets/image/Pic5.jpg";
import md1 from "../../assets/image/panchanath.png";
import md3 from "../../assets/image/chermayn.png";
import md4 from "../../assets/image/bhuvana.png";
import md5 from "../../assets/image/fabian.png";
import Footer from "../../homepages/Footer/Footer";
import Loader from "../Loader/Loader";

const rows = [
  {
    song: "Promote education for under privileged children of the society)",
    artist: "Relief Foundation",
  },
  {
    song: "Prevent environment degradation",
    artist: "Jungle Scapes Charitable Trust",
  },
  {
    song: "Aims in giving medical support to the “Elderly people”, with financial assistance",
    artist: "Aathma Foundation",
  },
  {
    song: "Care for  lives of poor children  and  orphans  affected with HIV AIDS",
    artist: "Hope Foundation",
  },
  {
    song: "Hope for children with HIV AIDS",
    artist: "Mellow Prathyasha Trust",
  },
  {
    song: "Promote education for under privileged children of the society",
    artist: "Chennai Primary school",
  },
];

const CSRPolicy = () => {
  const images = [pic1, pic2, pic3, pic4, pic5];
  const settings = {
    slidesToShow: 3,
    autoplaySpeed: 2500,
  };

  const [visiblePopups, setVisiblePopups] = useState({
    card1: false,
    card2: false,
    card3: false,
    card4: false,
  });

  const togglePopup = (card) => {
    setVisiblePopups((prevState) => ({
      ...prevState,
      [card]: !prevState[card],
    }));
  };

  const [load, setLoad] = useState(true);
  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => {
      setLoad(false);
    }, 500);
  }, []);
  return (
    <>
      {load ? (
        <Loader />
      ) : (
        <div className=" mt-4">
          <div className="grid grid-cols-12 p-10">
            <div className="col-span-12">
              <h2 className="text-center text-maincol text-3xl font-semibold">
                LIST OF CSR PROJECTS & PROGRAMMES
              </h2>
            </div>
            <div className="col-span-12 mt-10">
              <div className="overflow-x-auto">
                <table className="table-fixed border-collapse border border-gray-400 w-full">
                  <thead className="bg-maincol text-white">
                    <tr>
                      <th className="border border-gray-300 p-4 text-lg">
                        Activity
                      </th>
                      <th className="border border-gray-300 p-4 text-lg">
                        Particulars
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {rows.map((row, index) => (
                      <tr
                        key={index}
                        className={`${
                          index % 2 === 0 ? "bg-white" : "bg-gray-100"
                        } hover:bg-gray-200`}
                      >
                        <td
                          className="border border-gray-300 p-4 "
                          style={{ fontSize: "1rem" }}
                        >
                          {row.song}
                        </td>
                        <td
                          className="border border-gray-300 p-4 "
                          style={{ fontSize: "1rem" }}
                        >
                          {row.artist}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          {/* <div className='bg-gray-200 mt-4 p-8'>
        <h2 className="text-center text-maincol text-3xl font-semibold mt-4">Image Gallery</h2>
        <div className="mt-5 p-10">
          <CarouselComponent images={images} settings={settings} />
        </div>
      </div> */}

          <div className="container-fluid bg-slate-100 ">
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-2 md:p-28 p-5">
              <h2 className="text-center text-maincol text-3xl font-semibold p-4">
                Image Gallery
              </h2>
              <div className="w-full  border-2 p-4 hover:rotate-0 hover:scale-105 transition-all shadow-2xl rotate-6">
                <img src={pic1} alt="" />
              </div>
              <div className="w-full  border-2 p-4 hover:rotate-0 hover:scale-105 transition-all shadow-2xl rotate-6">
                <img src={pic2} alt="" />
              </div>
              <div className="w-full  border-2 p-4 hover:rotate-0 hover:scale-105 transition-all shadow-2xl rotate-6">
                <img src={pic3} alt="" />
              </div>
              <div className="w-full mt-4  border-2 hover:rotate-0 hover:scale-105 transition-all p-4 shadow-2xl rotate-6">
                <img src={pic4} alt="" />
              </div>
              <div className="w-full mt-4  border-2  hover:rotate-0 hover:scale-105 transition-all p-4 shadow-2xl rotate-6">
                <img src={pic5} alt="" />
              </div>
              <div className="w-full mt-4  border-2 hover:rotate-0 hover:scale-105 transition-all p-4 shadow-2xl rotate-6">
                <img src={pic4} alt="" />
              </div>
              <div className="w-full mt-4  border-2 hover:rotate-0 hover:scale-105 transition-all p-4 shadow-2xl rotate-6">
                <img src={pic4} alt="" />
              </div>
            </div>
          </div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 -scroll-mt-20 mt-20 ">
            <h2 className="text-maincol text-3xl font-semibold ml-4 sm:ml-10 text-center">
              {" "}
              Member of the CSR Committee
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-10">
              {[...Array(4).keys()].map((_, index) => (
                <div
                  key={index}
                  className="border-solid tablet:h-[550px] border-2 shadow-md py-4 px-4 bg-cover bg-no-repeat flex flex-col justify-between"
                >
                  <img
                    src={
                      index === 0
                        ? md1
                        : index === 1
                        ? md4
                        : index === 2
                        ? md5
                        : md3
                    }
                    alt="Director"
                    className="w-full h-auto rounded-md drop-shadow-md"
                  />
                  <div className="border-t-4 mt-4 pt-4">
                    <h2 className="font-bold text-black text-left text-xl">
                      {index === 0
                        ? "R. Panchanath"
                        : index === 1
                        ? "Bhuvana Panchanath"
                        : index === 2
                        ? "Fabian Chua"
                        : "Chermayn Chan"}
                    </h2>
                    <p className="text-maincol text-sm mt-1 font-semibold">
                      {index === 0 || index === 1
                        ? "Chairman & Managing Director"
                        : "Director"}
                    </p>
                    <p className="mt-2 text-justify">
                      {index === 0
                        ? "Mr. R. Panchanath joined CPC after an eight-year stint in Indian Bank as an officer..."
                        : index === 1
                        ? "Ms. Bhuvana Panchanath joined CPC after many years of managing bunches of ebullient school children..."
                        : index === 2
                        ? "Fabian has experience across private equity and M&A in Asia Pacific..."
                        : "Chermayn has spent 14 years working in the healthcare industry throughout the region."}
                    </p>
                    <button
                      className="border-2 text-maincol p-2 rounded-md mt-4 hover:border-2 hover:bg-maincol hover:text-white hover:transition-all"
                      onClick={() => togglePopup(`card${index + 1}`)}
                    >
                      Read more
                    </button>
                  </div>
                  {visiblePopups[`card${index + 1}`] && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                      <div className="bg-white rounded-lg shadow-lg p-6 max-w-5xl">
                        <h2 className="text-xl font-bold mb-4 text-black">
                          More About{" "}
                          {index === 0
                            ? "R. Panchanath"
                            : index === 1
                            ? "Bhuvana Panchanath"
                            : index === 2
                            ? "Fabian Chua"
                            : "Chermayn Chan"}
                        </h2>
                        <p className="text-lg text-justify">
                          {index === 0
                            ? ` Mr. R. Panchanath joined CPC after an eight-year stintin Indian Bank as an officer. He has guided the firm for
its financial needs, while using his marketing skills to
                        good use in establishing substantial business for the
                        company in Tamil Nadu & Andhra Pradesh. He is a
                        self-taught electronics expert who nurtured and
                        developed our customer support division.`
                            : index === 1
                            ? ` Ms. Bhuvana Panchanath joined CPC after many years of
                        managing bunches of ebullient school children. With her
                        skills in interpersonal relationships she has
                        efficiently built an effective and “quick response”
                        team. With her vast experience in the business for more
                        than 3 decades, Ms. Bhuvana drives the team to achieve
                        and uphold the values of the organisation.`
                            : index === 2
                            ? `Fabian has experience across private equity and M&A in Asia Pacific. Prior to joining Everlife, he was an associate with Hera Capital Partners, a Singapore-based private equity firm focused on investments in the consumer retail, media, and digital sectors of Southeast Asia. He has a Bachelor’s Degree in Business Administration from National University of Singapore and is a CFA Charterholder.`
                            : `  Chermayn has spent 14 years working in the healthcare
                        industry throughout the region. She started her career
                        in market research, before joining the Sanofi Business
                        Development team leading regional asset licensing
                        projects. In 2010, she moved to China to manage Sanofi’s
                        outsourced portfolio and lead license-in projects. Prior
                        to joining Everlife, she was Director of Operations for
                        a genetic testing start-up in Shanghai.  Chermayn graduated from the University of Pennsylvania
                        with a double major in Biology and Economics.`}
                        </p>
                        <button
                          className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                          onClick={() => togglePopup(`card${index + 1}`)}
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="container-fluid mx-auto px-4 sm:px-6 lg:px-8 -scroll-mt-20 mt-20 bg-slate-200 p-5">
            <h2 className="text-center text-maincol text-3xl font-semibold mt-4">
              CSR
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 gap-5 mt-3 p-10">
              <div className="border-2 border-x-green-400 rounded-sm text-center p-5 shadow-custom-shadow cursor-pointer hover:scale-95 hover:transition-all  hover:bg-maincol hover:text-white">
                <button>CSR Policy</button>
              </div>
              <div className="border-2 border-x-green-400 rounded-sm text-center p-5 shadow-custom-shadow cursor-pointer hover:scale-95 hover:transition-all hover:bg-maincol hover:text-white">
                <button>CSR Annual report-2022</button>
              </div>
              <div className="border-2 border-x-green-400 rounded-sm text-center p-5 shadow-custom-shadow cursor-pointer hover:scale-95 hover:transition-all hover:bg-maincol hover:text-white">
                <button>CSR Annual action plan 2022-23</button>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      )}
    </>
  );
};

export default CSRPolicy;

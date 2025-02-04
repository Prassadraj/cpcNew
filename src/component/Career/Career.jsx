import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import '../../index.css';
import PopupForm from './PopupForm';
import { jddetails } from './JdDetails.jsx';
import { GrAttachment } from "react-icons/gr";
import Loader from "../Loader/Loader";
import bannerimage from '../../assets/banner-image.jpg'
import couldntfind from '../../assets/couldntfind.png'
import { gsap } from 'gsap';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Footer from '../../homepages/Footer/Footer.jsx';



const Careers = () => {
  const [locationFilter, setLocationFilter] = useState('');
  const [minExperience, setMinExperience] = useState('');
  const [maxExperience, setMaxExperience] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [isFormVisible, setFormVisible] = useState(false);
  const [selectedDepartment, setSelectedDepartment] = useState('');
  const [filteredJobs, setFilteredJobs] = useState([]); // Define filteredJobs state
  const location = useLocation();

  const handleButtonClick = () => {
    setFormVisible(true);
  };

  const handleApply = (link) => {
    window.open(link, '_blank', 'noopener,noreferrer');
};


  const handleClose = () => {
    setFormVisible(false);
  };

  useEffect(() => {
    if (location.hash === '#openings') {
      const openingsElement = document.getElementById('openings');
      if (openingsElement) {
        openingsElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

 
  const filterJobs = () => {
    let jobs = [];

    if (selectedDepartment) {
      jobs = jddetails[selectedDepartment];
    } else {
      jobs = Object.values(jddetails).flat();
    }

    const filtered = jobs.filter((job) => {
      const [minExp, maxExp] = job.experience.split(' - ').map((exp) => parseInt(exp));
      const locationMatches = locationFilter === '' || job.location.toLowerCase() === locationFilter.toLowerCase();
      const experienceMatches =
        (minExperience === '' || maxExp >= parseInt(minExperience)) &&
        (maxExperience === '' || minExp <= parseInt(maxExperience));
      const searchMatches =
        searchQuery === '' ||
        job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));

      return locationMatches && experienceMatches && searchMatches;
    });

    setFilteredJobs(filtered);
  };

  useEffect(() => {
    filterJobs();
  }, [locationFilter, minExperience, maxExperience, searchQuery, selectedDepartment]);

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
    const [load, setLoad] = useState(true);
  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => {
      setLoad(false);
    }, 500);
  }, []);
   
  return (
 
<>{load?<Loader/>:
    <div className=" mt-10 font-poppins">
    {/* Header Section */}
    <header>
      {/* <div className='grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 '>
        <div>
         <img src={bannerimage} alt="" className='md:w-full ' />
        </div>
        <div className='md:ml-20 lg:ml-20 xl:ml-20 mt-10 p-4'  data-aos="flip-left">
          <h2 className='md:text-left text-cpccol text-3xl font-poppins font-semibold'>CPC Diagnositcs</h2>
          <p className='text-xl mt-4 font-poppins'>Careers</p>
          <div className='md:pr-5 lg:pr-5 xl:pr-5'>
          <p className='mt-2 text-justify leading-7 text-fontextra font-poppins'>Join our dynamic team where your growth is our priority. We empower your skills, encourage innovation, and together, shape the future of healthcare diagnostics. Be a part of a company that values your contribution.</p>
          </div>
          <div className='mt-4 '>
            <a href="#applynow">
              <button type="submit" className='bg-cpccol p-3 text-white hover:shadow-lg transition-all ease-in-out hover:-translate-y-1 text-fontptag'>Apply Now</button>
            </a>
          </div>
        </div>
      </div> */}
    </header>
   
    {/* Career Matching Section */}
    {/* <div className='grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 p-16 gap-8 items-center  mt-2  '>
      <div className='leading-8' data-aos="flip-up">
      <h1 className='text-cpccol md:text-4xl xl:text-4xl lg:text-4xl text-xl font-bold text-left '>Employee Career Matching</h1>
      <p  className=' mt-6 md:text-xl lg:text-xl xl:text-xl '>Couldn't find the suitable Job? Upload your CV and we will reach out to you shortly.</p>
      <div className='md:flex lg:flex xl:flex gap-4  mt-8'>
        <input type="file" id="file-upload" className="hidden" />
        <label htmlFor="file-upload" className="md:w-72 lg:w-72 xl:w-72 w-full  px-4 py-2 border shadow-lg border-gray-300 rounded-l-md bg-white text-gray-700 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500">
          <div className='md:flex lg:flex xl:flex items-center gap-2 justify-center '>
            <GrAttachment size={20} />
            <p className='text-fontptag'>Drop Your Resume Here</p>
          </div>
        </label>
        <button className="bg-cpccol text-white px-4 rounded-r-md shadow-lg hover:bg-green-300 focus:outline-none focus:ring-2 focus:ring-blue-500 ml-1">Upload</button>
       
      </div>
      <p className='mt-8 text-fontptag'>For best results, upload *.doc/*.docx/*.pdf/*.txt format files only (File size should be 2MB)</p>
   
      </div>
   
      <div className='animate-floating'>
      <img src={couldntfind} alt="" />
        </div>


     
     
     
   
    </div> */}

    {/* <div className=' md:p-8 lg:p-8 xl:p-8 mt-2 bg-gray-50 rounded-t-full'>
<h2 className='text-2xl text-center text-black'>Looking for <span className='text-4xl text-cpccol font-semibold'> Intern</span> Opportunities</h2>
<div className='grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 md:p-12 lg:p-12 xl:p-12 gap-5' >
<div className='' >
 <h2  className='md:text-2xl lg:text-2xl xl:text-2xl text-lg text-cpccol font-semibold mt-3'>Real-World Experience</h2>
 <p  className='mt-4 text-fontextra pr-10 md:ml-0 lg:ml-0 xl:ml-0 ml-10 text-justify'>Work on live projects that impact the healthcare industry and make a difference in people’s lives.</p>
</div>
<div className=''>
 <h2  className='md:text-2xl lg:text-2xl xl:text-2xl text-lg font-semibold text-black mt-3'>Mentorship and Training</h2>
 <p  className='mt-4 text-fontextra pr-10 md:ml-0 lg:ml-0 xl:ml-0 ml-10 text-justify'>Learn from experienced professionals who are leaders in their fields and are dedicated to helping you grow.</p>
</div>
<div className='mt-8'>
 <h2  className='md:text-2xl lg:text-2xl xl:text-2xl text-lg font-semibold text-black mt-3'>Innovative Culture</h2>
 <p  className='mt-4 text-fontextra pr-10 md:ml-0 lg:ml-0 xl:ml-0 ml-10 text-justify'>Be part of a team that thrives on creativity, collaboration, and pushing boundaries to achieve excellence.</p>
</div>
<div className='mt-8'>
 <h2  className='md:text-2xl lg:text-2xl xl:text-2xl text-lg text-cpccol font-semibold mt-3'>Career Development </h2>
 <p  className='mt-4 text-fontextra pr-10 md:ml-0 lg:ml-0 xl:ml-0 ml-10 text-justify'>Gain valuable skills and insights that will set you up for success in your career.</p>
</div>
</div>
<div className='flex justify-center mt-5'>
<button type="submit" className='bg-cpccol text-fontptag text-white px-6 py-2 rounded-r-md hover:bg-green-300 focus:outline-none focus:ring-2 focus:ring-blue-500 ml-1' onClick={handleButtonClick}>Apply Here</button>
        <PopupForm isVisible={isFormVisible} onClose={handleClose} />
        </div>
</div> */}

    {/* Filter Section */}

    <div>
     <h2 className='text-maincol font-semibold text-4xl text-center'>Work With Everlife CPC</h2>
<div className='pl-10 pr-10 mt-10 leading-8 text-justify'>
     <p>Everlife CPC endeavours to provide an exiciting and fulfilling experience for its members. At Everlife CPC we place value in learning. We provide every opportunity and assistance to enhance each individual’s skills and capabilities. The training provided is ‘in-house’, ‘on the job’ and often at our Principal’s facilities in USA, Europe or Malaysia. The focus is to ensure that on the field, eCPC’ians should always be technically superior.</p>
     </div>
<div className='pl-10 pr-10 mt-10 leading-8 text-justify'>
     <p>The working environment at Everlife CPC instills a sense of belonging and camaraderie among the staff. This has been possible through a consistent culture driven programme for all eCPCians. Communication is free and easy across all levels and the limitation of hierarchial barriers is minimum. Everlife CPC aims at making transparency and trust, the cornerstone of all our relationships.</p>
     </div>
<div className='pl-10 pr-10 mt-10 leading-8 text-justify'>
     <p>Interested in working with Everlife CPC? Kindly mail your resume to <a href='mailto:hiring@cpcdiagnostics.in' className='text-maincol underline font-semibold'>hiring@cpcdiagnostics.in</a></p>
     </div>
    </div>
    <div className='bg-shade p-2 mt-5'>
    <h3 className="font-semibold mt-4 mb-4 bg-shade text-3xl text-cpccol text-center" id='applynow'>Current Openings</h3>
   
    <main className='bg-white rounded-lg' id='openings'>
      <div className='md:flex lg:flex xl:flex md:gap-10 lg:gap-10 xl:gap-10 p-3'>
        <div className='mt-8'>
          <h4 className='text-fonthtwo'>Refine By</h4>
          {/* <h4 className="font-medium mt-4 text-fontptag">By Experience (in Years)</h4>
          <div className="md:flex lg:flex xl:flex md:space-x-2 lg:space-x-2 xl:space-x-2 mt-4">
            <input
              type="number"
              placeholder="Min"
              value={minExperience}
              onChange={(e) => setMinExperience(e.target.value)}
              className="border-2 p-2 md:w-28 lg:w-28 xl:2-28 w-full mt-2"
            />
            <span className='flex items-center mt-2'>to </span>
            <input
              type="number"
              placeholder="Max"
              value={maxExperience}
              onChange={(e) => setMaxExperience(e.target.value)}
              className="border-2 p-2 md:w-28 xl:w-28 lg:w-28 w-full mt-2"
            />
          </div> */}
          <div className='mt-4'>
            <p className='font-semibold text-fontptag'>By Location</p>
            <select
              value={locationFilter}
              onChange={(e) => setLocationFilter(e.target.value)}
              className="border-2 p-2 lg:w-56 xl:w-56 md:w-56 mt-4"
            >
              <option value="">All Location</option>
              <option value="Ahmedabad">Ahmedabad</option>
              <option value="Bangalore">Bangalore</option>
              <option value="Chennai">Chennai</option>
              <option value="Gwalior">Gwalior</option>
              <option value="Guwahati">Guwahati</option>
              <option value="Hyderabad">Hyderabad</option>
              <option value="Jaipur">Jaipur</option>
              <option value="Kakinada">Kakinada</option>
              <option value="Kolkata">Kolkata</option>
              <option value="Noida">Noida</option>
              <option value="Ranchi">Ranchi</option>
              <option value="Trichur">Trichur</option>
            </select>
          </div>
          <br />
          {/* <div className='mt-4'>
            <p className='font-semibold text-fontptag'>By Department</p>
            <select
              value={selectedDepartment}
              onChange={(e) => setSelectedDepartment(e.target.value)}
              className="border-2 p-2 lg:w-56 xl:w-56 md:w-56 mt-4"
            >
              <option value="">All Departments</option>
              <option value="Itrack">Itrack</option>
              <option value="Jeev">Jeev</option>
              <option value="Cpc">Cpc</option>
            </select>
          </div> */}
        </div>

        <div className='w-wid bg-gray-200'></div>

        {/* Job Listings Section */}
        <div className='mt-2'>
       
            <div className='flex justify-center'>
             
              <input
                type="text"
                placeholder="Search from jobs below"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="border w-3/4 "
              />
              <button
                onClick={filterJobs}
                className="border p-2 bg-cpccol text-white ml-2"
              >
                Search
              </button>
              <button
                onClick={() => {
                  setSearchQuery('');
                  filterJobs();
                }}
                className="border p-2 ml-2"
              >
                Reset
              </button>
            </div>
            <h2 className="text-lg mt-3 text-cpccol font-semibold text-left ml-8">{filteredJobs.length} Openings found</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 p-3">
              {filteredJobs.map((job, index) => (
                <div key={index} className="group p-6 bg-shade rounded-lg leading-8 shadow-md hover:shadow-lg w-72 min-w-full h-44 min-h-full">
                  <h3 className="font-semibold text-cpccol text-lg">{job.title}</h3>
                  <p className="text-sm text-gray-600 mt-2">Location : {job.location}</p>
                  {/* <div className="mt-2">
                    {job.tags.map((tag, idx) => (
                      <span key={idx} className="text-xs bg-gray-200 p-1 rounded mr-1">
                        {tag}
                      </span>
                    ))}
                  </div> */}
                 <button
          type="button"
          className="bg-slate-50 shadow-sm rounded-md hover:shadow-md transition-all ease-in-out p-1 w-28 mt-4 group-hover:bg-cpccol group-hover:text-white"
          onClick={() => handleApply(job.link)} // Use the link property for redirection
        >
          Apply
        </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
    <Footer/>
  </div>}</>
      );
};

export default Careers;
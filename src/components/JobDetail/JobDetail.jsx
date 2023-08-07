import React, { useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDetailWork } from "../../toolkit/thunks";
/* -------------- */
/* COMPONENTS */
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import ImageCarousel from "../ImageCarousel/ImageCarousel";
/* -------------- */

/* ASSESTS */
import garden1 from "../../assets/garden1.jpg";
import garden2 from "../../assets/garden2.jpg";
import garden3 from "../../assets/garden3.webp";
import phone from "../../assets/phone.svg";
import dollarSign from "../../assets/dollar-sign.svg";
import location from "../../assets/location.svg";
/* -------------- */

export default function JobDetail() {
  const images = [garden1, garden2, garden3];

  const { id } = useParams();

  const dispatch = useDispatch();

  const { detail }  = useSelector((state) => state.work);

  const users = useSelector((state) => state.userSlice)
 
  useEffect(() => {
   dispatch(getDetailWork(id));
  }, [dispatch, id]);

  return (
      <div>
         <Header />
   
         <div className="flex flex-col justify-center items-center py-5 bg-gray-800 rounded-lg m-auto font-mono">
           <div className="flex justify-center">
             <NavLink
               to={"/home"}
               className="bg-blue-900 hover:bg-blue-700 text-white text-center p-2 w-full mb-5 rounded-md inline-block shadow-md hover:shadow-lg transform transition-transform duration-200 hover:-translate-y-0.5"
             >
               {"<<"}
             </NavLink>
           </div>
   
           <h1 className="bg-slate-900 text-3xl text-center mb-9 px-5 py-12 rounded-md xl:w-[65%]">
             {detail[0]?.title}
           </h1>
   
           <div className="px-5 max-w-7xl text-md">
             {/* Job Description. */}
             <h3 className="text-xl pt-2 mb-4 font-semibold">Description</h3>
             <p className="mb-10 p-5 bg-slate-700 rounded-md">
               {detail[0]?.description}
             </p>
   
             {/* Job Skills */}
             <div className="mb-10">
               <h3 className="text-xl pt-2 mb-4 font-semibold">Skills</h3>
               <ul className="flex flex-col gap-6 p-5 bg-slate-700 rounded-md">
                {
                detail[0].ability?.map((skill, index) => (
                   <li key={index}>{">"} {skill}</li>
                 )) 
                }
               </ul>
              </div>
                 
   
             {/* Category */}
             <h3 className="mb-5 text-xl font-semibold">Responsibilities</h3>
             <ul className="flex flex-col gap-6 p-5 bg-slate-700 rounded-md">
               {
                 detail.ability?.map((skill) => (
                   <li key={skill}> {skill}</li>
                 ))
               }
               <li>{">"} Plants and flowers</li>
               <li>{">"} Landscaping</li>
               <li>{">"} Watering</li>
             </ul>
   
             <div className="flex flex-col justify-evenly mb-5 md:flex-row md:justify-between">
               {/* Location */}
               <div className="relative mt-10">
                 <h3 className="mb-4 ml-8 text-xl font-semibold">Ubication</h3>
                 <p className="p-5 bg-slate-700 rounded-md">
                   {detail[0]?.address}
                 </p>
                 <img
                   src={location}
                   alt="location-logo"
                   className="absolute top-0 left-0 w-7"
                 />
               </div>
   
               <div className="flex flex-row justify-evenly ml-32 mt-10 mb-5 md:gap-20 lg:gap-32 lg:mr-20">
                 {/* Phone number */}
                 <div className="relative">
                   <h3 className="mb-4 ml-5 text-xl font-semibold text-center">
                     Phone Number
                   </h3>
                   <p className="p-5 bg-slate-700 rounded-md">
                    {users?.phoneNumber}
                    </p>
                   <img
                     src={phone}
                     alt="phone-logo"
                     className="absolute top-0 left-0 w-6 h-6"
                   />
                 </div>
   
                 {/* Wage */}
                 <div className="relative">
                   <h3 className="mb-4 ml-5 text-xl text-center font-semibold">
                     Price
                   </h3>
                   <p className="p-5 bg-slate-700 rounded-md">{detail[0]?.price}</p>
                   <img
                     src={dollarSign}
                     alt="dollar-sign"
                     className="absolute top-0 left-0 w-6"
                   />
                 </div>
               </div>
             </div>
           </div>
           <ImageCarousel images={images}/>
         </div>
         <Footer />
       </div>
  );
  
}

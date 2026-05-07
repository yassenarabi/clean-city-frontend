import React from "react";
import img1 from "../assets/cln.png";
import { Link } from "react-router-dom";
import img2 from "../assets/goal.png";
import zamalek from "../assets/zmlk.jpg";
import img3 from "../assets/haram.jpg";
import img5 from "../assets/last.jpg";
import img4 from "../assets/alex.jpg";
import ahmed from "../assets/people.jpg"
import sarah from "../assets/female.jpg"
import omar from "../assets/single.jpg"

export default function Home() {
  return (
    <>
      <div className=" mx-auto overflow-hidden">
        <div className=" w-screen h-screen overflow-hidden relative before:block before:absolute before:bg-emerald-800 before:h-full before:w-full before:top-0 before:left-0 before:z-10 before:opacity-40">
          <img
            src={img1}
            className="absolute top-0 left-0 min-h-full w-full bg-cover bg-no-repeat  bg-scroll"
          />
          <div className="relative z-20 max-w-screen-lg mx-auto  flex flex-col py-5 px-8 justify-center gap-2 h-full items-center">
            <div className="col-span-3">
              <span className="uppercase text-lime-100 text-2xl font-bold mb-2 block">
                YOUR CITY, YOUR RESPONSIBILITY
              </span>
              <h1 className="text-lime-100 font-extrabold text-4xl mb-8">
                CleanCity connects citizens to report pollution & keep cities
                clean
              </h1>
              <p className="text-lime-100 text-xl ">
                Join thousands of citizens who are actively reporting waste,
                pollution, and environmental issues to help build a cleaner and
                healthier city for everyone.
              </p>
              <button className="mt-8 rounded-2xl text-emerald-900 font-bold uppercase py-4 bg-lime-100 text-xl duration-500 cursor-pointer transition-all  px-10 border border-lime-100 hover:text-lime-100 hover:bg-emerald-900 ">
                JOIN THE MOVEMENT 🌱
              </button>
            </div>
          </div>
        </div>

        <div className="w-full  bg-lime-50">
          <div className="w-[75%] mx-auto py-20 ">
            <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-10 md:gap-20">
              <div>
                <span className="p-4 bg-emerald-200 rounded-4xl text-emerald-800 font-semibold">
                  <i className="fa-solid fa-leaf"></i> CIVIC RESPONSIBILITY
                  FIRST
                </span>

                <h2 className="text-3xl md:text-5xl font-bold my-3 text-emerald-800 py-3">
                  Together for a{" "}
                  <span className="text-emerald-700">Cleaner City</span>
                </h2>

                <p className="text-emerald-800 capitalize py-3">
                  Empower your neighborhood. Join thousands of citizens
                  reporting waste and tracking environmental improvements across
                  Egypt using AI-driven municipal management.
                </p>

                <div className="flex flex-wrap gap-4">
                  <Link to="/Reports">
                    <button className="p-4 md:p-5 cursor-pointer transition-all font-semibold duration-1000 bg-emerald-800 hover:bg-lime-100 hover:text-emerald-800 text-lime-50 rounded-3xl">
                      Report Now
                    </button>
                  </Link>
                  <Link to="/map">
                    <button className="p-4 md:p-5 cursor-pointer border border-emerald-800 text-emerald-800 rounded-3xl font-semibold">
                      View Map
                    </button>
                  </Link>
                </div>
              </div>

              <div>
                <img src={img2} className="rounded-3xl w-full shadow-2xl" />
              </div>
            </div>
          </div>
        </div>
        <div className="py-8 w-[90%] md:w-[75%] mx-auto bg-gray-100 rounded-4xl px-6 md:px-10 my-8 ">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 justify-items-center items-center text-center">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 border-2 border-emerald-800 rounded-full flex justify-center items-center">
                <i className="fa-solid fa-exclamation text-emerald-800"></i>
              </div>
              <p className="text-emerald-800 font-bold text-lg py-1">
                12,450 +
              </p>
              <p className="text-emerald-700 font-semibold text-lg py-1">
                Total Reports
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-12 h-12 border-2 border-emerald-800 rounded-full flex justify-center items-center">
                <i className="fa-solid fa-circle-check  text-emerald-800"></i>
              </div>
              <p className="text-emerald-800 font-bold text-lg py-1">9,800 +</p>
              <p className="text-lg text-emerald-700 font-semibold py-1">
                Resolved
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-12 h-12 border-2 border-emerald-800 rounded-full flex justify-center items-center">
                <i className="fa-solid fa-spinner text-emerald-800"></i>
              </div>
              <p className="text-emerald-800 font-bold text-lg py-1">1,200</p>
              <p className=" text-lg text-emerald-700  font-semibold py-1">
                In Progress
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-12 h-12 border-2 border-emerald-800 rounded-full flex justify-center items-center">
                <i className="fa-solid fa-city text-emerald-800"></i>
              </div>
              <p className=" text-emerald-800 font-bold text-lg py-1">15</p>
              <p className="text-lg text-emerald-700 font-semibold py-1">
                Cities Covered
              </p>
            </div>
          </div>
        </div>

        {/* How CleanCity Works section */}

        <div className="py-10 bg-lime-50">
          <div className="py-16 w-[90%] md:w-[75%] mx-auto my-8 text-center ">
            <h2 className="text-3xl md:text-4xl font-bold text-emerald-800 mb-3">
              How CleanCity Works
            </h2>
            <p className="text-emerald-700 mb-12 text-sm md:text-base">
              Three simple steps to bridge the gap between citizens and
              municipal service providers.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center px-4">
                <div className="w-16 h-16 bg-emerald-300 rounded-full flex justify-center items-center mb-5">
                  <i class="fa-regular fa-camera text-emerald-800 text-xl"></i>
                </div>
                <h3 className="text-lg font-bold text-emerald-800 mb-2">
                  1. Report waste with photo
                </h3>
                <p className="text-emerald-700 text-sm">
                  Capture a photo and drop a pin. Our system detects the waste
                  type and severity automatically.
                </p>
              </div>

              <div className="flex flex-col items-center text-center px-4">
                <div className="w-16 h-16 bg-emerald-300 rounded-full flex justify-center items-center mb-5">
                  <i className="fa-solid fa-robot text-emerald-800 text-xl"></i>
                </div>
                <h3 className="text-lg font-bold text-emerald-800 mb-2">
                  2. AI assigns to company
                </h3>
                <p className="text-emerald-700 text-sm">
                  Reports are instantly routed to the relevant municipal zone
                  and waste management companies.
                </p>
              </div>

              <div className="flex flex-col items-center text-center px-4">
                <div className="w-16 h-16 bg-emerald-300 rounded-full flex justify-center items-center mb-5">
                  <i className="fa-solid fa-star text-emerald-800 text-xl"></i>
                </div>
                <h3 className="text-lg font-bold text-emerald-800 mb-2">
                  3. Community gets cleaner
                </h3>
                <p className="text-emerald-700 text-sm">
                  Watch the progress in real-time and earn points for your
                  contribution to environmental safety.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* live activty section */}

        <div className="py-5 w-[75%] mx-auto">
          <div className="w-[90%] md:w-[85%] mx-auto my-6">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h4 className="text-emerald-600 font-bold text-2xl md:text-3xl">
                  Live Activity
                </h4>
              </div>
            </div>
            <div className="flex justify-between w-full">
              <p className="text-gray-500 text-sm mt-1">
                Real-time reports coming in from your fellow citizens.
              </p>
              <Link
                to="/Reports"
                className="text-emerald-700 font-semibold text-sm md:text-base hover:underline whitespace-nowrap"
              >
                View All Reports →
              </Link>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 py-3">
              {/* Card 1 */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
                <img
                  src={zamalek}
                  alt="report"
                  className="w-full h-44 object-cover"
                />
                <div className="flex justify-between items-center px-3 pt-3">
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-red-100 text-red-500">
                    PLASTIC
                  </span>
                  <span className="text-xs font-semibold text-red-400 flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-red-400 inline-block"></span>
                    PENDING
                  </span>
                </div>
                <div className="px-3 pb-4 pt-2">
                  <h3 className="font-bold text-gray-800 text-base">
                    Zamalek District
                  </h3>
                  <p className="text-gray-400 text-xs mt-1 flex items-center gap-1">
                    <i className="fa-solid fa-location-dot"></i> Cairo, Egypt
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
                <img
                  src={img3}
                  alt="report"
                  className="w-full h-44 object-cover"
                />
                <div className="flex justify-between items-center px-3 pt-3">
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-emerald-100 text-emerald-600">
                    ORGANIC
                  </span>
                  <span className="text-xs font-semibold text-emerald-400 flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block"></span>
                    RESOLVED
                  </span>
                </div>
                <div className="px-3 pb-4 pt-2">
                  <h3 className="font-bold text-gray-800 text-base">
                    Al Haram Street
                  </h3>
                  <p className="text-gray-400 text-xs mt-1 flex items-center gap-1">
                    <i className="fa-solid fa-location-dot"></i> Giza, Egypt
                  </p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
                <img
                  src={img4}
                  alt="report"
                  className="w-full h-44 object-cover"
                />
                <div className="flex justify-between items-center px-3 pt-3">
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-red-100 text-red-500">
                    PLASTIC
                  </span>
                  <span className="text-xs font-semibold text-red-400 flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-red-400 inline-block"></span>
                    PENDING
                  </span>
                </div>
                <div className="px-3 pb-4 pt-2">
                  <h3 className="font-bold text-gray-800 text-base">
                    Corniche Road
                  </h3>
                  <p className="text-gray-400 text-xs mt-1 flex items-center gap-1">
                    <i className="fa-solid fa-location-dot"></i> Alexandria,
                    Egypt
                  </p>
                </div>
              </div>

              {/* Card 4 */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
                <img
                  src={img5}
                  alt="report"
                  className="w-full h-44 object-cover"
                />
                <div className="flex justify-between items-center px-3 pt-3">
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-emerald-100 text-emerald-600">
                    ORGANIC
                  </span>
                  <span className="text-xs font-semibold text-emerald-400 flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block"></span>
                    RESOLVED
                  </span>
                </div>
                <div className="px-3 pb-4 pt-2">
                  <h3 className="font-bold text-gray-800 text-base">
                    Fifth Settlement
                  </h3>
                  <p className="text-gray-400 text-xs mt-1 flex items-center gap-1">
                    <i className="fa-solid fa-location-dot"></i> Cairo, Egypt
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* last section */}

       




      <div className="w-full bg-lime-50">
      <div className="py-5 w-[75%] mx-auto ">
          <div>
            <div className="w-[90%] md:w-[60%] lg:w-[45%] mx-auto my-10 bg-white rounded-3xl shadow-md p-6">
              {/* Header */}
              <div className="text-center mb-6">
                <h4 className="text-emerald-600 font-bold text-2xl">
                  Community Leaders
                </h4>
                <p className="text-gray-400 text-sm mt-1">
                  The environmental heroes of the month.
                </p>
              </div>

              {/* Leader 1 */}
              <div className="flex items-center justify-between bg-emerald-50 border border-emerald-200 rounded-2xl p-4 mb-3">
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <img
                      src={ahmed}
                      alt="Ahmed"
                      className="w-14 h-14 rounded-full object-cover"
                    />
                    <span className="absolute -top-1 -left-1 w-5 h-5 bg-emerald-500 text-white text-xs rounded-full flex items-center justify-center font-bold">
                      1
                    </span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800">Ahmed Mahmoud</h3>
                    <p className="text-gray-400 text-xs">
                      Cairo District Leader
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold text-gray-800 text-lg">2,850</p>
                  <p className="text-gray-400 text-xs">POINTS</p>
                </div>
              </div>

              {/* Leader 2 */}
              <div className="flex items-center justify-between bg-gray-100 rounded-2xl p-4 mb-3">
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <img
                      src={sarah}
                      alt="Sarah"
                      className="w-14 h-14 rounded-full object-cover"
                    />
                    <span className="absolute -top-1 -left-1 w-5 h-5 bg-gray-400 text-white text-xs rounded-full flex items-center justify-center font-bold">
                      2
                    </span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800">Sarah Kamel</h3>
                    <p className="text-gray-400 text-xs">
                      Alexandria Contributor
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold text-gray-800 text-lg">2,420</p>
                  <p className="text-gray-400 text-xs">POINTS</p>
                </div>
              </div>

              {/* Leader 3 */}
              <div className="flex items-center justify-between bg-gray-100 rounded-2xl p-4 mb-6">
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <img
                      src={omar}
                      alt="Omar"
                      className="w-14 h-14 rounded-full object-cover"
                    />
                    <span className="absolute -top-1 -left-1 w-5 h-5 bg-gray-400 text-white text-xs rounded-full flex items-center justify-center font-bold">
                      3
                    </span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800">Omar Hassan</h3>
                    <p className="text-gray-400 text-xs">Giza Active Member</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold text-gray-800 text-lg">1,980</p>
                  <p className="text-gray-400 text-xs">POINTS</p>
                </div>
              </div>

              {/* Button */}
              <div className="text-center">
                <button className="bg-gray-700 hover:bg-gray-800 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300">
                  Join the Leaderboard
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>



      </div>
    </>
  );
}

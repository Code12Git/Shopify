import React, { useEffect, useState } from "react";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { userRequest } from "../utils/axios";
const FeaturedInfo = () => {
  const [income, setIncome] = useState([]);
  const [percentage, setPercentage] = useState(0);
  useEffect(() => {
    const getIncome = async () => {
      try {
        const res = await userRequest.get("orders/income");
        setIncome(res.data);
        setPercentage((res.data[1].total * 100) / res.data[0].total - 100);
      } catch (e) {
        console.error(e);
      }
    };
    getIncome();
  }, []);

  return (
    <section className="text-gray-600 body-font">
      <div className="container   mx-auto">
        <div className="flex flex-wrap justify-between">
          <div className="p-4 lg:w-1/3">
            <div className="h-full w-96 bg-white flex flex-col items-center  px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative bg-cover bg-center">
              <h1 className="tracking-widest title-font text-black font-Playfair font-bold text-2xl mb-1">
                Revenue
              </h1>
              <div className="flex gap-6 items-center">
                <p className="leading-relaxed mb-3 text-black text-2xl">
                  ${income[1]?.total}
                </p>
                <div className="flex">
                  <p className="text-md mb-2">
                    %{percentage}{" "}
                    {percentage < 0 ? (
                      <ArrowDownwardIcon className="text-red-500" />
                    ) : (
                      <ArrowUpwardIcon className="text-green-500" />
                    )}
                  </p>
                </div>
              </div>
              <p>Compared to last month</p>

              <div className="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
                <span className="text-gray-400 mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                  <svg
                    className="w-4 h-4 mr-1"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                  1.2K
                </span>
                <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                  <svg
                    className="w-4 h-4 mr-1"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                  </svg>
                  6
                </span>
              </div>
            </div>
          </div>
          <div class="p-4 lg:w-1/3">
            <div class="h-full bg-white w-96  px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
              <h1 className="tracking-widest title-font text-black font-Playfair font-bold text-2xl mb-1">
                Cost
              </h1>
              <div className="flex gap-6 items-center justify-center">
                <p className="leading-relaxed mb-3 text-black text-2xl">
                  $2,225
                </p>
                <div className="flex">
                  <p className="text-md mb-2">+2.5</p>
                  <ArrowUpwardIcon className="text-green-500" />
                </div>
              </div>

              <p class="leading-relaxed mb-3">Compared to last month</p>

              <div class="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
                <span class="text-gray-400 mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                  <svg
                    class="w-4 h-4 mr-1"
                    stroke="currentColor"
                    stroke-width="2"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                  1.2K
                </span>
                <span class="text-gray-400 inline-flex items-center leading-none text-sm">
                  <svg
                    class="w-4 h-4 mr-1"
                    stroke="currentColor"
                    stroke-width="2"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                  </svg>
                  6
                </span>
              </div>
            </div>
          </div>
          <div class="p-4 lg:w-1/3">
            <div class="h-full bg-white w-96  px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
              <h1 className="tracking-widest title-font text-black font-Playfair font-bold text-2xl mb-1">
                Sales
              </h1>
              <div className="flex gap-6 items-center justify-center">
                <p className="leading-relaxed mb-3 text-black text-2xl">
                  $2,321
                </p>
                <div className="flex">
                  <p className="text-md mb-2">-11.4</p>
                  <ArrowDownwardIcon className="text-red-500" />
                </div>
              </div>
              <p class="leading-relaxed mb-3">Compared to last month</p>

              <div class="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
                <span class="text-gray-400 mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                  <svg
                    class="w-4 h-4 mr-1"
                    stroke="currentColor"
                    stroke-width="2"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                  1.2K
                </span>
                <span class="text-gray-400 inline-flex items-center leading-none text-sm">
                  <svg
                    class="w-4 h-4 mr-1"
                    stroke="currentColor"
                    stroke-width="2"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                  </svg>
                  6
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedInfo;

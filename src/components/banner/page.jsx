import React from "react";
import { FaPlus } from "react-icons/fa";

const BannerSection = () => {
  return (
    <div className="bg-base-200 text-base-content text-center p-20 space-y-5">
      <h1 className="font-bold text-5xl">
        Friends to keep close in your life
      </h1>

      <p className="text-base-content/70">
        Your personal shelf of meaningful connections. Browse, tend, and
        nurture the <br />
        relationships that matter most.
      </p>

      <button className="btn bg-[#244D3F] text-white">
        <FaPlus />
        Add a Friend
      </button>

      <div className="w-10/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        <div className="bg-base-100 py-10 shadow-md rounded-xl">
          <span className="text-[#244D3F] font-bold text-2xl">
            10
          </span>
          <p className="text-base-content/70">
            Total Friends
          </p>
        </div>

        <div className="bg-base-100 py-10 shadow-md rounded-xl">
          <span className="text-[#244D3F] font-bold text-2xl">
            3
          </span>
          <p className="text-base-content/70">
            On Track
          </p>
        </div>

        <div className="bg-base-100 py-10 shadow-md rounded-xl">
          <span className="text-[#244D3F] font-bold text-2xl">
            6
          </span>
          <p className="text-base-content/70">
            Need Attention
          </p>
        </div>

        <div className="bg-base-100 py-10 shadow-md rounded-xl">
          <span className="text-[#244D3F] font-bold text-2xl">
            12
          </span>
          <p className="text-base-content/70">
            Interactions This Month
          </p>
        </div>
      </div>

      <div className="w-10/12 mx-auto">
        <div className="divider"></div>
      </div>
    </div>
  );
};

export default BannerSection;
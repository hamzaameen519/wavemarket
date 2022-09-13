import React from "react";
import { useNavigate } from "react-router-dom";

function Navbar(props) {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col max-h-screen w-fit py-5 items-center justify-between h-screen bg-primary/20">
      <div className="flex flex-col">
        <div className="flex flex-col px-12 py-6 align-center">
          <img className="w-60" src="/images/logo.svg"></img>
        </div>
        <div className="flex flex-col mt-12  w-full">
          <div
            className="flex flex-row justify-start w-full py-6 px-2 space-x-6 hover:bg-primary/10 hover:border-r-8 hover:border-primary"
            onClick={() => navigate("/")}
          >
            <img className="w-6 ml-4" src="/images/home_icon.png"></img>
            <p className="text-black">Home</p>
          </div>
          <div
            className="flex flex-row justify-start w-full py-6 px-2 space-x-6 hover:bg-primary/10 hover:border-r-8 hover:border-primary"
            onClick={() => navigate("/createtoken")}
          >
            <img className="w-6 ml-4" src="/images/create_token_icon.png"></img>
            <p className="text-black">Create Token</p>
          </div>
          <div
            className="flex flex-row justify-start w-full py-6 px-2 space-x-6 hover:bg-primary/10 hover:border-r-8 hover:border-primary"
            onClick={() => navigate("/createpresale")}
          >
            <img
              className="w-6 ml-4"
              src="/images/create_presale_icon.png"
            ></img>
            <p className="text-black">Create Pre-sale</p>
          </div>
          <div
            className="flex flex-row justify-start w-full py-6 px-2 space-x-6 hover:bg-primary/10 hover:border-r-8 hover:border-primary"
            onClick={() => navigate("/createfairlaunch")}
          >
            <img className="w-6 ml-4" src="/images/fair_launch_icon.png"></img>
            <p className="text-black">Create Fair Launch</p>
          </div>
          <div className="flex flex-row justify-start w-full py-6 px-2 space-x-6 hover:bg-primary/10 hover:border-r-8 hover:border-primary">
            <img
              className="w-6 ml-4"
              src="/images/view_all_pools_icon.png"
            ></img>
            <p className="text-black" onClick={() => navigate("/createtokenlock")}>
              Create Token Lock
            </p>
          </div>
          <div className="flex flex-row justify-start w-full py-6 px-2 space-x-6 hover:bg-primary/10 hover:border-r-8 hover:border-primary">
            <img
              className="w-6 ml-4"
              src="/images/view_all_pools_icon.png"
            ></img>
            <p className="text-black" onClick={() => navigate("/viewallpools")}>
              View All Pools
            </p>
          </div>
          <div className="flex flex-row justify-start w-full py-6 px-2 space-x-6 hover:bg-primary/10 hover:border-r-8 hover:border-primary">
            <img className="w-6 ml-4" src="/images/settings_icon.png"></img>
            <p className="text-black">Settings</p>
          </div>
        </div>
      </div>
      <button className="btn w-44 capitalize space-x-2">
        <img className="w-4" src="/images/guide_button_icon.png"></img>
        <p>Guide</p>
      </button>
    </div>
  );
}

export default Navbar;

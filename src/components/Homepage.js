import React from "react";

function Homepage(props) {
  return (
    <div className="flex flex-col h-screen w-full  justify-center">
      <div className="text-center w-full px-28 space-y-4">
        <p className="text-5xl font-bold text-black ">
          World's First Ethereum Fair Launchpad Protocol for Everyone
        </p>
        <div className="px-32 w-full">
          <p className="text-md text-black">
            PinkSale helps everyone to create their own tokens and token sales
            in few seconds. Tokens created on PinkSale will be verified and
            published on explorer websites.
          </p>
        </div>
      </div>
      <div className="flex flex-row justify-center mt-8 space-x-12">
        <button className="btn capitalize w-48">Create Token</button>
        <button className="btn capitalize w-48">Create Presale</button>
        <button className="btn capitalize w-48">Create Fair-Launch</button>
        <button className="btn capitalize w-48">View All Pools</button>
      </div>
      <div className="flex flex-row justify-center mt-8 space-x-6">
        <div className="flex flex-row w-fit bg-primary/20 py-4 rounded-md pb-6">
          <img className="w-6 ml-4 w-52" src="/images/home_icon_one.svg"></img>
          <div className="flex flex-col align-center space-y-2 mr-4">
            <p className="text-6xl text-black font-bold">Why</p>
            <p className="text-4xl text-black">WaveMaker</p>
            <div className="w-80">
              <p className="text-base text-black break-words">
                PinkSale helps everyone to create their own tokens and token
                sales in few seconds. Tokens created on PinkSale will be
                verified and published on explorer websites.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-row w-fit bg-primary/20 py-4 rounded-md pb-6">
          <img className="w-6 ml-4 w-52" src="/images/home_icon_one.svg"></img>
          <div className="flex flex-col align-center space-y-2 mr-4">
            <p className="text-6xl text-black font-bold">One</p>
            <p className="text-4xl text-black">Suite for All</p>
            <div className="w-80">
              <p className="text-base text-black break-words">
                PinkSale helps everyone to create their own tokens and token
                sales in few seconds. Tokens created on PinkSale will be
                verified and published on explorer websites.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;

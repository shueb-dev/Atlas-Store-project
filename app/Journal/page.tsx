import React from "react";

async function Journal() {
  return (
    <div className=" bg-sky-200 text-base-100  p-20">
      <h2 className="text-pink-900 font-bold text-2xl">
        Welcome To Our Daily Journal
      </h2>
      <div className="m-4 flex gap-4">
        <div className="badge badge-primary badge-lg w-10 h-10">
          <h2>All</h2>
        </div>
        <button className="btn btn-neutral btn-outline">Gear Guides</button>
        <button className="btn btn-neutral btn-outline">Trip Guides</button>
        <button className="btn btn-neutral btn-outline">Tips</button>
      </div>

      <div className="hero bg-white-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <img
            alt="Tailwind CSS hero component"
            src="https://plus.unsplash.com/premium_photo-1683133880180-623a10ab7b8a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
            className="max-w-lg rounded-lg shadow-2xl transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
          />
          <div id="gear guid">
            <p>Gear Guide 6 min read</p>
            <h3 className="text-5xl font-semibold">
              How to choose a three-season tent
            </h3>
            <p className="py-6">
              Choosing a three-season tent can be a daunting task, but with the
              right information, you can find the perfect one for your needs. In
              this article, we will discuss the key factors to consider when
              selecting a three-season tent, including size, weight, materials,
              and features.
            </p>
            <button className="btn btn-primary">Read Article</button>
          </div>
        </div>
      </div>
      <h3 className="text-xl font-bold">Recent Articles</h3>

      <div className="grid grid-cols-3 gap-4 mt-6">
        <div className="card bg-base-100  w-90 h-110  shadow-sm text-white transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">
          <figure>
            <img
              src="https://images.unsplash.com/photo-1732657076520-61887e65be94?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
              width={400}
              height={600}
              alt="trip photo"
            />
          </figure>
          <div className="card-body ">
            <span className="card-title">Tip . 4 min</span>
            <p>
              How to choose a three-season tent can be a daunting task, but with
              the right information, you can find the perfect one for your
              needs. In this article, we will discuss the key factors to
              consider when selecting a three-season tent, including size,
              weight, materials,
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Read More</button>
            </div>
          </div>
        </div>
        <div className="card bg-base-100  w-90 h-110    shadow-sm text-white transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">
          <figure>
            <img
              src="https://images.unsplash.com/photo-1600096067891-f21fd32f19eb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
              width={400}
              height={600}
              alt="trip photo"
            />
          </figure>
          <div className="card-body ">
            <span className="card-title">Tip Report . 6 min</span>
            <p>
              Remember to always check the weather forecast before heading out
              on your outdoor adventure. Being prepared for changing weather
              conditions can make a significant difference in your safety and
              enjoyment.
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Read More</button>
            </div>
          </div>
        </div>
        <div className="card bg-base-100  w-90  h-110  shadow-sm text-white  transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">
          <figure>
            <img
              src="https://images.unsplash.com/photo-1607324772107-8ad6740ca195?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
              width={400}
              height={600}
              alt="trip photo"
            />
          </figure>
          <div className="card-body ">
            <span className="card-title">Gear Guide . 5 min</span>
            <p>
              Getting the right gear for your outdoor adventures is crucial for
              a safe and enjoyable experience. In this article, we will explore
              the essential gear you need for hiking, camping, and other outdoor
              activities. From backpacks to tents, we will cover the must-have
              items that will enhance your outdoor experience.
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary ">Read More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Journal;

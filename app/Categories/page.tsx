import React from "react";

function Categories() {
  return (
    <div className="bg-sky-100 text-base-100 p-20 ">
      <h2 className="text-2xl text-pink-900 font-bold uppercase">
        Welcome To Our Categories
      </h2>
      <div className="grid grid-cols-3 gap-4 mt-6">
        <div className="card bg-base-100 w-80 shadow-sm transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">
          <figure>
            <img
              src="https://images.unsplash.com/photo-1785858037852-f60925488591?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
              width={"100%"}
              alt="Tents"
            />
          </figure>
          <div className="card-body text-white ">
            <div className="card-actions display-flex justify-between align-middle">
              <h2 className="absolute bottom-0 left-0 m-2">Tents</h2>
              <p className="absolute bottom-0 right-0 m-2">14 Products</p>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 w-80 shadow-sm transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg ">
          <figure>
            <img
              src="https://media.istockphoto.com/id/1409838010/photo/red-shooping-basket-full-of-products.webp?a=1&b=1&s=612x612&w=0&k=20&c=PPHiVbNVx72GyegSC5-HFpvftb3VVosNu_wYe1M4S2Q="
              width={"100%"}
            />
          </figure>
          <div className="card-body text-white ">
            <div className="card-actions   ">
              <h2 className="absolute bottom-0 left-0 m-2">Packs</h2>
              <p className="absolute bottom-0 right-0 m-2">11 Products</p>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 w-80 shadow-sm transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg ">
          <figure>
            <img
              src="https://media.istockphoto.com/id/1144628221/photo/gas-burner-on-black-modern-kitchen-stove.webp?a=1&b=1&s=612x612&w=0&k=20&c=kchSw8eF1UVxQPClY8zVQdEMQlDLmq5IdkZQn88Kqho="
              alt="Stoves"
            />
          </figure>
          <div className="card-body text-white ">
            <div className="card-actions   ">
              <h2 className="absolute bottom-0 left-0 m-2 font-bold">Stoves</h2>
              <p className="absolute bottom-0 right-0 m-2">12 Products</p>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 w-80 shadow-sm transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg ">
          <figure>
            <img
              src="https://plus.unsplash.com/premium_photo-1664202526559-e21e9c0fb46a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
              alt="Apparel"
            />
          </figure>
          <div className="card-body text-white ">
            <div className="card-actions   ">
              <h2 className="absolute bottom-0 left-0 m-2 font-bold">
                Apparel
              </h2>
              <p className="absolute bottom-0 right-0 m-2">18 Products</p>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 w-80 shadow-sm transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg ">
          <figure>
            <img src="https://images.unsplash.com/photo-1759176171039-fd789a80a980?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D" />
          </figure>
          <div className="card-body text-white  ">
            <div className="card-actions    ">
              <h2 className="absolute bottom-0 left-0 m-2 font-bold">
                Sleepy system
              </h2>
              <p className="absolute bottom-0 right-0 m-2">21 Products</p>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 w-80 shadow-sm transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg  ">
          <figure>
            <img
              src="https://images.unsplash.com/3/www.madebyvadim.com.jpg?q=100w=1182&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
              alt="Accessories"
            />
          </figure>
          <div className="card-body text-white  ">
            <div className="card-actions  f">
              <h2 className="absolute bottom-0 left-0 m-2 font-bold">
                Accessories
              </h2>
              <p className="absolute bottom-0 right-0 m-2 ">10 Products</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Categories;

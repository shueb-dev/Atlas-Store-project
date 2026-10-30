import { API_URL } from "@/Utils/Constants";
import { Products } from "@/Utils/type";
import Link from "next/link";

async function Shop() {
  const response = await fetch(API_URL);
  const products: Products[] = await response.json();
  // console.log(products);
  return (
    <div className="bg-sky-200  mr-2  w-100% text-base-100  p-4 ">
      <h2 className="text-2xl font-bold text-pink-900 m-8">All Products</h2>
      <div>
        <div className="m-8">
          <div className="badge badge-primary badge-lg mr-2 p-4 hover:scale-100  transition duration-300 ease-out">
            All
          </div>
          <div className="badge badge-outline base-100 mr-2 p-4 hover:scale-90 transition duration-300 ease-out">
            Tents
          </div>
          <div className="badge badge-outline base-100 mr-2 p-4 hover:scale-90 transition duration-300 ease-out">
            Parks
          </div>
          <div className="badge badge-outline base-100 mr-2 p-4 hover:scale-90 transition duration-300 ease-out">
            Stoves
          </div>
          <div className="badge badge-outline base-100 mr-2 p-4 hover:scale-90 transition duration-300 ease-out">
            Apparel
          </div>
          <div className="badge badge-outline base-100 mr-2 p-4 hover:scale-90 transition duration-300 ease-out">
            Under $150
          </div>
          <div className="badge badge-outline base-100 mr-2 p-4 hover:scale-90 transition duration-300 ease-out">
            In Stock
          </div>
        </div>
        <div className="flex absolute right-6 gap-4 align-middle justify-center mb-10">
          <h3 className="text-primary text-lg mt-1">Sort</h3>
          <select className="bg-white p-2 rounded-lg text-black border-none ">
            <option>Popular</option>
            <option>price:low to high</option>
          </select>
        </div>
        <div className="grid grid-cols-3 gap-6 p-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
          {products.map((products) => (
            <div
              className="card bg-white w-90  h-100 shadow-sm text-base  relative mt-6 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
              key={products.id}
            >
              <figure>
                <img src={products.image} width={200} height={300} />
              </figure>
              <div className="card-body text-base-100 ">
                <Link href={`/Shop/${products.id}`} className="card-title">
                  {products.title}
                </Link>
                <p className="text-xl text-blue-600 font-semibold font-poppins ">
                  {products.category}
                </p>
                <span className="text-lg font-bold ">$ {products.price}</span>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary  absolute  bottom-2 text-xl ">
                    Add Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Shop;

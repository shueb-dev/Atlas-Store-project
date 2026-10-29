import { API_URL } from "@/Utils/Constants";
import { promises } from "node:dns";
import React from "react";
type props = {
  params: Promise<{ id: string }>;
};

async function productDetails(props: props) {
  const id = (await props.params).id;
  const url = API_URL + id;
  const response = await fetch(url);
  const product = await response.json();
  //   console.log(product);
  return (
    <div>
      <div
        className="card bg-amber-300 w-96  shadow-sm text-base m-10"
        key={product.id}
      >
        <figure>
          <img src={product.image} width={200} height={200} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{product.title}</h2>
          <p>{product.category}</p>
          <span className="text-lg font-bold">$ {product.price}</span>
          <div className="card-actions justify-end">
            <button className="btn btn-success text-xl">Add Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default productDetails;

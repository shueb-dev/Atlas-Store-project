import { API_URL } from "@/Utils/Constants";
import { promises } from "node:dns";
type props = {
  params: Promise<{ id: string }>;
};

async function productDetails(props: props) {
  const id = (await props.params).id;
  const url = `${API_URL}/${id}`;
  const response = await fetch(url);
  const product = await response.json();

  return (
    <div>
      <div
        className="card bg-white w-96 h-110 shadow-sm text-base-100 m-10"
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

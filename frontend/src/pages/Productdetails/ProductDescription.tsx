import Ratings from "../../components/Ratings/Ratings";
import { Product } from "../../types";
import PurchaseAction from "./PurchaseAction";

type ProductProps = {
  product: Product;
};

const ProductDescription = ({ product }: ProductProps) => {
  return (
    <div className="">
      <h3>{product.title}</h3>

      <p>INR. {product.price}/-</p>

      <div className="mt-4">
        <Ratings rating={product.rating} />
      </div>

      <p className="mt-10 text-border">{product.description}</p>
      <div className="mt-16">
        <PurchaseAction />
      </div>
    </div>
  );
};

export default ProductDescription;

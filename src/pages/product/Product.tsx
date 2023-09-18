import Single from "../../components/single/Single";
import { singleProduct } from "../../data";
import "./Product.scss";

const Product = () => {
  return (
    <div className="product">
      <Single {...singleProduct} />
    </div>
  );
};

export default Product;

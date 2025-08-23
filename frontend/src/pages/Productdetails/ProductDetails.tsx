import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import ImageContainer from "./ImageContainer";

const ProductDetails = () => {
  return (
    <div className="flex flex-col container mx-auto">
      <Breadcrumbs />
      <ImageContainer />
    </div>
  );
};

export default ProductDetails;

import { Button } from "../../components/ui/Button";
import { ShoppingCart, Heart } from "lucide-react";

const PurchaseAction = () => {
  return (
    <div className="flex mt-16 gap-2">
      <Button variant={"outline"} size={"lg"}>
        <ShoppingCart className="w-5 h-5" />
        Add To Cart
      </Button>
      <Button variant={"default"} size={"lg"}>
        <Heart className="w-5 h-5" />
        Wishlist
      </Button>
    </div>
  );
};

export default PurchaseAction;

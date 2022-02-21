import Carousel from "./Carousel";
import MensJacket from "./MensJacket";
import Navbar from "./Navbar";
import WomenJacket from "./WomenJacket";
import { cart2 } from "../../assets/svg/icons";
import { UserContext } from "../../App";
import { useContext } from "react";
import { Link } from "react-router-dom";

const tailwind = {
  main: "ralative",
  cart: "fixed bottom-5 right-5 cursor-pointer hover:animate-pulse bg-secondary p-3 rounded-full shadow-[rgba(0,_0,_0,_0.35)_0px_5px_15px]",
  qty: "absolute top-10 left-12 font-bold text-white bg-red-600 px-1.5 rounded-full text-sm",
};

export default function Home() {
  const [cartItems] = useContext(UserContext);
  return (
    <main className={tailwind.main}>
      <Link to="/cart" className={tailwind.cart}>
        {cart2}
        {cartItems.length > 0 && (
          <span className={tailwind.qty}>{cartItems.length}</span>
        )}
      </Link>
      <Navbar />
      <Carousel />
      <WomenJacket />
      <MensJacket />
    </main>
  );
}

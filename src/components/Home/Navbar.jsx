import logo from "../../assets/icons/logo2.png";
import {
  searchIcon,
  bookmart,
  cart,
  dropdownArrow,
} from "../../assets/svg/icons";

const tailwind = {
  nav: "w-full py-6 px-16 grid grid-cols-[20%_60%_20%] bg-global",
  left: "flex justify-start items-stretch items-center w-full",
  middle: "flex justify-center items-center w-full",
  right: "flex justify-end items-stretch items-center w-full",
  iconSection: "flex justify-items-center items-center",
  icons: "mx-2 hover:animate-pulse cursor-pointer",
  cart: "mx-2 relative cursor-pointer hover:animate-pulse",
  qty: "absolute top-1 left-6 font-bold text-white animate-bounce bg-red-600 px-1.5 rounded-full text-sm",
  loginBtn: "ml-9 bg-secondary px-3.5 text-white py-1.5 rounded-3xl animate-pulse hover:animate-none",
  anchorTxt: "text-secondary mx-3  font-bold text-lg cursor-pointer hover:border-b-4 border-[#0d1137] hover:animate-pulse duration-200 ease-in-out",
  productTxt: "text-secondary mx-3  font-bold text-lg cursor-pointer hover:border-b-4 border-[#0d1137] hover:animate-pulse duration-200 ease-in-out flex justify-items-center items-center",
};

export default function Navbar() {
  return (
    <nav className={tailwind.nav}>
      <div className={tailwind.left}>
        <img src={logo} alt="logo" />
      </div>
      <div className={tailwind.middle}>
        <span className={tailwind.anchorTxt}>Home</span>
        <span className={tailwind.productTxt}>
          Products
          {dropdownArrow}
        </span>
        <span className={tailwind.anchorTxt}>About us</span>
      </div>
      <div className={tailwind.right}>
        <section className={tailwind.iconSection}>
          <div className={tailwind.icons}>{searchIcon}</div>
          <div className={tailwind.icons}>{bookmart}</div>
          <div className={tailwind.cart}>
            {cart}
            <span className={tailwind.qty}>2</span>
          </div>
          <div>
            <button className={tailwind.loginBtn}>Login</button>
          </div>
        </section>
      </div>
    </nav>
  );
}

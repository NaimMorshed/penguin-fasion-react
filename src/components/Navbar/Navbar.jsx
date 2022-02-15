import "./Navbar.css";
import logo from "../../assets/icons/logo.png";
import { searchIcon, bookmart, cart } from '../../assets/svg/icons';

const tailwind = {
  nav: 'w-full py-6 px-16 grid grid-cols-[20%_60%_20%] bg-global',
  left: 'flex justify-start items-stretch items-center w-full',
  middle: 'flex justify-center items-stretch items-center w-full',
  right: 'flex justify-end items-stretch items-center w-full',
  iconSection: 'flex justify-items-center items-center',
  icons: 'mx-2',
  cart: 'mx-2 relative',
  qty: 'absolute top-1 left-6 font-bold text-white animate-bounce bg-red-600 px-1.5 rounded-full text-sm',
  loginBtn: 'ml-9 bg-secondary px-3 text-white py-1 rounded',
}

export default function Navbar() {
  return (
    <nav className={tailwind.nav}>
      <div className={tailwind.left}>
        <img src={logo} alt="logo" />
      </div>
      <div className={tailwind.middle}>middle</div>
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


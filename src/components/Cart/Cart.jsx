import { useContext } from "react";
import { UserContext } from "../../App";
import Card from "../Home/Card";

const tailwind = {
  parent: 'bg-global min-h-screen grid items-center justify-center',
  main: 'p-4 bg-gray-200 rounded-xl shadow-[rgba(0,_0,_0,_0.35)_0px_5px_15px]',
  h3: 'text-xl font-bold text-secondary',
  sec1: 'border-b-2 border-gray-400 py-4',
  sec2: 'py-4',
}

export default function Cart() {
  const [cartItems] = useContext(UserContext);

  return (
    <div className={tailwind.parent}>
      <main className={tailwind.main}>
        <section className={tailwind.sec1}>
          <h3 className={tailwind.h3}>Your Order</h3>
        </section>
        <section className={tailwind.sec2}>
          
        </section>
      </main>
    </div>
  );
}

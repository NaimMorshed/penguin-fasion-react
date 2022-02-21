import { useContext, useEffect } from "react";
import { UserContext } from "../../App";
import { useNavigate } from "react-router-dom";
import List from "./List";

const tailwind = {
  parent: 'bg-global min-h-screen grid items-center justify-center p-5',
  main: 'p-4 bg-gray-200 rounded-xl shadow-[rgba(0,_0,_0,_0.35)_0px_5px_15px]',
  h3: 'text-xl font-bold text-secondary',
  sec1: 'border-b-2 border-gray-400 py-4',
  sec2: 'py-4',
  sec3: 'text-lg px-3',
  sec4: 'grid grid-cols-2 px-3 my-3 font-bold text-3xl',
  sec3Div1: 'grid grid-cols-2 mb-3',
  sec3Div2: 'grid grid-cols-2 border-b-2 border-gray-400 pb-4',
  deliveryType: 'text-gray-400 ml-2',
}

export default function Cart() {
  const navigate = useNavigate();
  const [cartItems] = useContext(UserContext);

  useEffect(() => {
    cartItems.length === 0 && navigate('/')
  }, [cartItems.length, navigate])

  let totalPrice = 0;
  cartItems.map(data => totalPrice += (data.price - data.discount))

  let totalDiscount = 0;
  cartItems.map(data => totalDiscount += data.discount)

  return (
    <div className={tailwind.parent}>
      <main className={tailwind.main}>
        <section className={tailwind.sec1}>
          <h3 className={tailwind.h3}>Your Order</h3>
        </section>
        <section className={tailwind.sec2}>
          {cartItems.map((data, index) => <List props={data} key={index} />)}
        </section>
        <section className={tailwind.sec3}>
          <div className={tailwind.sec3Div1}>
            <span className="text-secondary">Delivery</span>
            <div>
              <span className="font-bold ml-2">$20</span>
              <span className={tailwind.deliveryType}>(Regular)</span>
            </div>
          </div>
          <div className={tailwind.sec3Div2}>
            <span className="text-secondary">Discount</span>
            <div>
              <span className="font-bold">-${totalDiscount}</span>
            </div>
          </div>
        </section>
        <section className={tailwind.sec4}>
          <h1>Total</h1>
          <h1>${totalPrice}</h1>
        </section>
      </main>
    </div>
  );
}

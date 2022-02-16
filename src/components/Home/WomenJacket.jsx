import jacket from "../../assets/images/jacket.png";
import { star } from "../../assets/svg/icons";

const dummyData = {
  img: jacket,
  text: "Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport",
  star: 5,
  rating: "5.0",
  price: "$599",
};

const tailwind = {
  main: "w-full py-6 px-16 grid grid-cols-[50%_50%] bg-global min-h-[80vh]",
  txtHeader: "text-5xl font-bold font-primary text-primary",
  btn: "px-8 py-5 rounded-[30px] shadow-[rgba(0,_0,_0,_0.35)_0px_5px_15px] font-bold text-xl bg-secondary text-primary",
  txtCardHeader: "text-xl font-semibold tracking-tight text-gray-900 dark:text-white",
  btnCard: "text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",
  starCard: "",
  priceCard: "",
  cardBody: "px-5 pb-5",
  cardRatingSec: "flex items-center mt-2.5 mb-5",
  cardRating: "bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3",
  imgCard: "p-8 rounded-t-lg",
  cardParent: "max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700",
  cardFooter: "flex justify-between items-center",
  cardPrice: "text-3xl font-bold text-gray-900 dark:text-white",
};

export default function WomenJacket() {
  const starLoop = () => {
    let arr = [];
    for (let index = 0; index < dummyData.star; index++) {
      arr.push(star);
    }
    return arr;
  };

  return (
    <main className={tailwind.main}>
      <h1 className={tailwind.txtHeader}>Women Jacket</h1>
      {/* CARD */}
      <section>
        <div className={tailwind.cardParent}>
          <img
            className={tailwind.imgCard}
            src={dummyData.img}
            alt="productimage"
          />
          <div className={tailwind.cardBody}>
            <h3 className={tailwind.txtCardHeader}>{dummyData.text}</h3>
            <div className={tailwind.cardRatingSec}>
              {starLoop()}
              <span className={tailwind.cardRating}>{dummyData.rating}</span>
            </div>
            <div className={tailwind.cardFooter}>
              <span className={tailwind.cardPrice}>{dummyData.price}</span>
              <button className={tailwind.btnCard}>Add to cart</button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

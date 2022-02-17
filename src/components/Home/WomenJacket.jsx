import { womenJacket } from '../../assets/data/dummyData';
import Card from "./Card";

const tailwind = {
  main: "w-full py-6 px-16 bg-global min-h-[80vh]",
  txtHeader: "text-5xl font-bold font-primary text-primary select-none",
  btn: "px-8 py-5 rounded-[30px] shadow-[rgba(0,_0,_0,_0.35)_0px_5px_15px] font-bold text-xl bg-secondary text-primary",
  cardSection: 'mt-6 grid grid-cols-4',
};

export default function WomenJacket() {
  return (
    <main className={tailwind.main}>
      <h1 className={tailwind.txtHeader}>Women Jacket</h1>
      {/* CARD */}
      <section className={tailwind.cardSection}>
        {
          womenJacket.map((data, index) => (
            <Card props={data} key={index} />
          ))
        }
      </section>
    </main>
  );
}

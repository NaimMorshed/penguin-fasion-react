import avatar from "../../assets/images/avatar.png";

const tailwind = {
  main: "w-full py-6 px-16 grid grid-cols-[50%_50%] bg-global min-h-[80vh]",
  secLeft: "m-[auto_0] grid grid-rows-3",
  secRight: "m-auto",
  txtUp: "text-[80px] font-bold font-primary text-primary select-none",
  txtDown: "text-7xl font-bold font-primary text-secondary select-none",
  txtSmall: "select-none",
  btnSec: "m-0",
  btn: "px-8 py-5 rounded-[30px] shadow-[rgba(0,_0,_0,_0.35)_0px_5px_15px] font-bold text-xl bg-secondary text-primary",
};

export default function Carousel() {
  return (
    <main className={tailwind.main}>
      <section className={tailwind.secLeft}>
        <span className={tailwind.txtUp}>BE THE PENGUINS</span>
        <span className={tailwind.txtDown}>OF WINTER</span>
        {/* <span className={tailwind.txtSmall}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
        </span> */}
        <div className={tailwind.btnSec}>
          <button className={tailwind.btn}>BUY NOW</button>
        </div>
      </section>
      <section className={tailwind.secRight}>
        <img src={avatar} alt="img" />
      </section>
    </main>
  );
}

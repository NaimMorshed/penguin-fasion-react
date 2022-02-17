import { star, unStar } from '../../assets/svg/icons';

const tailwind = {
    txtCardHeader: "text-xl font-semibold tracking-tight text-secondary dark:text-white cursor-pointer",
    btnCard: "text-primary bg-secondary hover:scale-[1.1] focus:ring-4 focus:ring-[#e52165] font-bold rounded-lg text-sm px-5 py-2.5 text-center duration-100",
    cardBody: "px-5 pb-5",
    cardRatingSec: "flex items-center mt-2.5 mb-5",
    cardRating: "bg-global text-primary text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3",
    imgCard: "p-8 rounded-t-lg cursor-pointer",
    cardParent: "max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 relative select-none",
    cardFooter: "flex justify-between items-center",
    cardPrice: "text-3xl font-bold text-secondary dark:text-white",
    salePrice: "text-xl font-bold text-secondary dark:text-white ml-2 text-red-500 line-through",
    sale: 'absolute top-1 left-2 font-bold text-2xl text-red-500 font-primary animate-pulse',
};

export default function Card({ props }) {
    const starLoop = () => {
        let arr = [];
        for (let index = 0; index < props.star; index++) {
            arr.push(star);
        }
        return arr;
    };

    const nonStarLoop = () => {
        let arr = [];
        for (let index = 0; index < 5 - props.star; index++) {
            arr.push(unStar);
        }
        return arr;
    };

    return (
        <div className={tailwind.cardParent}>
            { props.sale && <span className={tailwind.sale}>SALE</span> }
            <img
                className={tailwind.imgCard}
                src={props.img}
                alt="productimage"
            />
            <div className={tailwind.cardBody}>
                <h3 className={tailwind.txtCardHeader}>{props.text}</h3>
                <div className={tailwind.cardRatingSec}>
                    {starLoop()}
                    {nonStarLoop()}
                    <span className={tailwind.cardRating}>{props.rating}</span>
                </div>
                <div className={tailwind.cardFooter}>
                    {
                        props.sale ?
                        <div>
                            <span className={tailwind.cardPrice}>${props.price-props.discount}</span>
                            <span className={tailwind.salePrice}>${props.price}</span>
                        </div>
                        : <span className={tailwind.cardPrice}>${props.price}</span>
                    }
                    <button className={tailwind.btnCard}>ADD TO CART</button>
                </div>
            </div>
        </div>
    );
}
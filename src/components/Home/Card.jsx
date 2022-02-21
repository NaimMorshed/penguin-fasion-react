import { star, unStar } from '../../assets/svg/icons';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../../App';

const tailwind = {
    txtCardHeader: "text-xl font-semibold tracking-tight text-secondary cursor-pointer",
    btnCard: "text-primary bg-secondary hover:scale-[1.1] focus:ring-4 focus:ring-[#e52165] font-bold rounded-lg text-sm px-5 py-2.5 text-center duration-100",
    cardBody: "px-5 pb-5",
    cardRatingSec: "flex items-center mt-2.5 mb-5",
    cardRating: "bg-global text-primary text-xs font-semibold mr-2 px-2.5 py-0.5 rounded ml-3",
    imgCard: "p-8 rounded-t-lg cursor-pointer h-full w-full",
    cardParent: "max-w-sm bg-white rounded-lg shadow-md relative select-none",
    cardFooter: "flex justify-between items-center",
    cardPrice: "text-3xl font-bold text-secondary",
    salePrice: "text-xl font-bold text-secondary ml-2 text-red-500 line-through",
    sale: 'absolute top-1 left-2 font-bold text-2xl text-red-500 font-primary animate-pulse',
    imgContainer: 'h-96 w-100 flex justify-content-center items-center',
};

export default function Card({ props }) {
    const [cartItems, setCartItems] = useContext(UserContext);

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

    const setItems = () => {
        const newData = [ ...cartItems ];
        newData.push(props);
        setCartItems(newData);
    }

    return (
        <div className={tailwind.cardParent}>
            { props.sale && <span className={tailwind.sale}>SALE</span> }
            <div className={tailwind.imgContainer}>
                <Link to={"/productView"}>
                    <img
                        className={tailwind.imgCard}
                        src={props.img}
                        alt="productimage"
                    />
                </Link>
                
            </div>
            <div className={tailwind.cardBody}>
                <Link to="/productView">
                    <h3 className={tailwind.txtCardHeader}>{props.text}</h3>
                </Link>
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
                    <button onClick={setItems} className={tailwind.btnCard}>ADD TO CART</button>
                </div>
            </div>
        </div>
    );
}
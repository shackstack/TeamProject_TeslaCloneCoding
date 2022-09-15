import {useState} from "react";

const useQuantity = (maxQuantity) => {
    const [quantity, setQuantity] = useState(1);
    const increaseQuantity = () => {
        setQuantity(previousQuantity => {
            return Math.min(maxQuantity, previousQuantity + 1);
        });
    }
    const decreaseQuantity = () => {
        setQuantity(previousQuantity => {
            return Math.max(1, previousQuantity - 1);
        });
    }
    return [quantity, increaseQuantity, decreaseQuantity];
}

export default useQuantity;
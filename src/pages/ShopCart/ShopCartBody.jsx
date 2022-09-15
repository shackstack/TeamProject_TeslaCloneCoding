import {ShopCartBodyContainer} from "./styles";
import {useContext, useEffect} from "react";
import GlobalState from "../../shared/GlobalStates";
import ShopCartBodyEmpty from "./ShopCartBodyEmpty";
import ShoppingCart from "../ShoppingCart/ShoppingCart";

const ShopCartBody = () => {
    const {setIsNavigationBarAlwaysOpen} = useContext(GlobalState);
    useEffect(() => {
        setIsNavigationBarAlwaysOpen(true);
    }, [setIsNavigationBarAlwaysOpen]);
    const cart = localStorage.getItem("cart");
    if (cart) {
        const localCart = JSON.parse(cart);
        if (localCart) {
            return <ShopCartBodyContainer>
                <ShoppingCart localCart={localCart}/>
            </ShopCartBodyContainer>
        } else {
            return <div>Loading...</div>
        }
    } else {
        return <ShopCartBodyContainer>
            <ShopCartBodyEmpty/>
        </ShopCartBodyContainer>
    }
}

export default ShopCartBody;
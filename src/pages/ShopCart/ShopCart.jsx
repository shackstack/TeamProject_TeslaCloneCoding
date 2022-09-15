import {ShopCartContainer} from "./styles";
import ShopCartHeader from "./ShopCartHeader";
import ShopCartBody from "./ShopCartBody";
import ShopLayout from "../../components/ShopLayout/ShopLayout";

const ShopCart = () => {
    return <ShopLayout>
        <ShopCartContainer>
            <ShopCartHeader/>
            <ShopCartBody/>
        </ShopCartContainer>
    </ShopLayout>
}

export default ShopCart;
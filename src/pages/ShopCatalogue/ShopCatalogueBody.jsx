import {ShopCatalogueBodyContainer} from "./styles";
import {useContext, useEffect} from "react";
import GlobalState from "../../shared/GlobalStates";
import Product from "./Product";

const ShopCatalogueBody = ({products}) => {
    const {setIsNavigationBarAlwaysOpen} = useContext(GlobalState);
    useEffect(() => {
        setIsNavigationBarAlwaysOpen(true);
    }, [setIsNavigationBarAlwaysOpen]);
    if (!products) {
        return <div>No Products</div>
    } else {
        return <ShopCatalogueBodyContainer>
            {products.map(product => <Product key={product.id} product={product}/>)}
        </ShopCatalogueBodyContainer>
    }
}

export default ShopCatalogueBody;
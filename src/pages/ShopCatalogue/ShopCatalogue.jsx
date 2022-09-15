import {ShopCatalogueContainer} from "./styles";
import {useParams} from "react-router-dom";
import ShopLayout from "../../components/ShopLayout/ShopLayout";
import ShopCatalogueHeader from "./ShopCatalogueHeader";
import ShopCatalogueBody from "./ShopCatalogueBody";
import categoryMapper from "../../utils/categoryMapper";
import ShopFooter from "../../components/ShopFooter/ShopFooter";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getProductsThunk} from "../../redux/modules/productSlice";

const ShopCatalogue = () => {
    const {isLoading, data, error} = useSelector((state) => state.productSliceReducer);
    const {category} = useParams();
    const dispatcher = useDispatch();
    useEffect(() => {
        dispatcher(getProductsThunk(category));
    }, [dispatcher, category])
    const title = categoryMapper[category];
    if (isLoading) {
        return <div>
            Loading...
        </div>
    } else if (error) {
        return <div>{error}</div>
    } else {
        return <ShopLayout>
            <ShopCatalogueContainer>
                <ShopCatalogueHeader title={title}/>
                <ShopCatalogueBody products={data}/>
            </ShopCatalogueContainer>
            <ShopFooter/>
        </ShopLayout>
    }
}

export default ShopCatalogue;
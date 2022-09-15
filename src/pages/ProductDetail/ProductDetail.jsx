import {ProductDetailContainer, ProductDetailImageContainer} from "./styles";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import ProductDetailBody from "./ProductDetailBody";
import {getProductThunk} from "../../redux/modules/individualProductSlice";
import ShopLayout from "../../components/ShopLayout/ShopLayout";
import ShopFooter from "../../components/ShopFooter/ShopFooter";

const ProductDetail = () => {
    const response = useSelector((state) => state.individualProductSliceReducer);
    const {productName} = useParams();
    const dispatcher = useDispatch();
    useEffect(() => {
        dispatcher(getProductThunk(productName));
    }, [dispatcher]);
    if (response.isLoading) {
        return <div>Loading...</div>
    }
    if (response.error) {
        return <div>{response.error}</div>
    }
    if (response.data) {
        const {data} = response;
        return <ShopLayout>
            <ProductDetailContainer>
                <ProductDetailImageContainer>
                    <img src={data.imageUrl} alt={data.productName}/>
                </ProductDetailImageContainer>
                <ProductDetailBody data={data}/>
            </ProductDetailContainer>
            <ShopFooter/>
        </ShopLayout>
    }
}

export default ProductDetail;
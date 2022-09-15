import {ProductContainer, ProductImageContainer, ProductTitleContainer} from "./styles";
import {useNavigate} from "react-router-dom";
import priceFormatter from "../../utils/priceFormatter";

const Product = ({product}) => {
    const navigator = useNavigate();
    const formattedPrice = priceFormatter.format(product.price)
    const productClickHandler = () => {
        return navigator(`/shop/product/${product.productName}`);
    }
    return <ProductContainer onClick={productClickHandler}>
        <ProductImageContainer>
            <img loading="lazy" src={product.imageUrl} alt={product.productName}/>
        </ProductImageContainer>
        <ProductTitleContainer>
            <h3>{product.productName}</h3>
            <p>{formattedPrice}</p>
        </ProductTitleContainer>
    </ProductContainer>
}

export default Product;
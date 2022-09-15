import {ItemContainer, ItemDetail, ItemImage, ItemQuantity, ItemTitle} from "./styles";
import priceFormatter from "../../utils/priceFormatter";

const ShoppingCartItem = ({item, cartItem}) => {
    return <ItemContainer>
        <ItemImage>
            <img src={item.imageUrl} alt={item.productName}/>
        </ItemImage>
        <ItemDetail>
            <ItemTitle>
                <h3>{item.productName}</h3>
                <p>{priceFormatter.format(item.price)}</p>
            </ItemTitle>
            <ItemQuantity>
                <p>수량: {cartItem.quantity}</p>
            </ItemQuantity>
        </ItemDetail>
    </ItemContainer>
}

export default ShoppingCartItem;
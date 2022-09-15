import {ShopCartBodyEmptyButtons, ShopCartBodyEmptyContainer} from "./styles";
import {Link} from "react-router-dom";
import ShopFooter from "../../components/ShopFooter/ShopFooter";

const ShopCartBodyEmpty = () => {
    return <ShopCartBodyEmptyContainer>
        <p>장바구니가 비어 있습니다.</p>
        <ShopCartBodyEmptyButtons>
            <Link to="/shop">쇼핑 계속하기</Link>
            <Link to="/login">로그인</Link>
        </ShopCartBodyEmptyButtons>
        <ShopFooter/>
    </ShopCartBodyEmptyContainer>
}

export default ShopCartBodyEmpty;
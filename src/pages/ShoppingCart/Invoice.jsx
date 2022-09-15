import {InvoiceContainer, ShippingCost, Subtotal} from "./styles";
import priceFormatter from "../../utils/priceFormatter";

const Invoice = ({subtotal}) => {
    return <InvoiceContainer>
        <h2>주문 요약</h2>
        <ShippingCost>
            <p>배송비</p>
            <p>무료</p>
        </ShippingCost>
        <Subtotal>
            <p>소계</p>
            <p>{priceFormatter.format(subtotal)}</p>
        </Subtotal>
        <p>부가세(VAT) 포함 금액</p>
    </InvoiceContainer>
}

export default Invoice;
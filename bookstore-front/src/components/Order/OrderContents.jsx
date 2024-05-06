import OrderItem from "./OrderItem"
import {orderContainer, topBox} from "./Order_styles"

function OrderContents () {
    return(
        <>
        <div css={orderContainer}>
            <div css={topBox}>
                <ul>
                    <li> 주문 일자 </li>
                    <li> 주문 번호 </li>
                    <li> 수령인 </li>
                    <li> 주소 </li>
                    <li> 상품 </li>
                </ul>
            </div>
        <OrderItem />
        <OrderItem />
        <OrderItem />
        </div>

        </>
    )
}

export default OrderContents
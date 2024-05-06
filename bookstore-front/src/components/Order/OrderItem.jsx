import { orderItem } from "./Order_styles"

function OrderItem () {
    return(
        <>
        <div css={orderItem}>
                <ul>
                    <li>2024.05-06</li>
                    <li>130302</li>
                    <li>이창우
                        <br />
                        010-8539-2067
                    </li>
                    <li>서울시 도봉구 방학2동 대동아트빌에서 50분 더 가야 나오는 공원에 있는 굴다리 밑</li>
                    <li>여행의 이유 외 3권</li>
                </ul>
            </div>
        </>
    )

}

export default OrderItem
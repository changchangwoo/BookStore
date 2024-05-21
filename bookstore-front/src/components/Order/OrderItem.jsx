import { orderItem } from "./Order_styles"

function OrderItem (
    {
        created_at,
        id,
        receiver,
        contact,
        address,
        total_quantity,
        book_title
    }
) {
    return(
        <>
        <div css={orderItem}>
                <ul>
                    <li>{created_at}</li>
                    <li>{id}</li>
                    <li>{receiver}
                        <br />
                        {contact}
                    </li>
                    <li>{address}</li>
                    <li>{book_title} 외 {total_quantity}권</li>
                </ul>
            </div>
        </>
    )

}

export default OrderItem
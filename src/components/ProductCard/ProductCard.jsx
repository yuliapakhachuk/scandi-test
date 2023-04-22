import "./ProductCard.css";

export function ProductCard({product}) {
const {sku, name, price, details} = product;

    return (
        <li className="product__item">
            <p className="product_info__SKU">{sku}sku</p>
            <p className="product_info__name">{name}name</p>
            <p className="product_info__price">{price}price</p>
            <p className="product_info__details">{details}details</p>
        </li>
    )
}
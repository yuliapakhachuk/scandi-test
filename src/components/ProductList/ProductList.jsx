import "./ProductList.css";
import {ProductCard} from "../ProductCard/ProductCard";

export function ProductList({products}){
    const products1 = [{sku: "qoqwk331", name: "TABLE", price: "12000$", details: "12*34*2"}, {sku: "qoqwk331", name: "TABLE", price: "12000$", details: "12*34*2"}, {sku: "qoqwk331", name: "TABLE", price: "12000$", details: "12*34*2"}, {sku: "qoqwk331", name: "TABLE", price: "12000$", details: "12*34*2"}, {sku: "qoqwk331", name: "TABLE", price: "12000$", details: "12*34*2"}, {sku: "qoqwk331", name: "TABLE", price: "12000$", details: "12*34*2"}, {sku: "qoqwk331", name: "TABLE", price: "12000$", details: "12*34*2"}]
    return (
        <ul className="product__list">
            {products1.map(product => {
                return <ProductCard product={product}/>
            })}
        </ul>
    )
}
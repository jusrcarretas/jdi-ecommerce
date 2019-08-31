import React from 'react';
import { Card, Rate } from 'antd';
import "./ProductCatalog.css";


const ProductCatalog = props => {
  const { product, onCatalogClick } = props;
  const { Meta } = Card;

  const handleClick = () => {
    onCatalogClick(product.id);
  }

  return (
    <div className="product-catalog" onClick={handleClick}>
      <Card
        hoverable
        cover={<img className="catalog-image" alt="" src={product.image}/>}>
        <Meta title={product.name} />
        <div className="product-price">{product.currency + " " 
          + product.price.toLocaleString(undefined, { minimumFractionDigits: 2 })}</div>
        <Rate disabled defaultValue={product.average_rating} />
      </Card>
    </div>
  )
}

export default ProductCatalog;
import React from 'react';
import { Card, Rate } from 'antd';
import "./ProductCatalog.css";


const ProductCatalog = props => {
  const { product, onCatalogClick } = props;
  const { Meta } = Card;

  // Trigger onCatalogClick prop
  const handleClick = () => {
    onCatalogClick(product.id);
  }

  // Format prices to have a comma separator
  // and to only have two decimal places
  const priceToLocaleString = price => {
    return price.toLocaleString(undefined, { minimumFractionDigits: 2 })
  }

  return (
    <div className="product-catalog" onClick={handleClick}>
      <Card
        hoverable
        cover={<img className="catalog-image" alt="" src={product.image}/>}>
        <Meta title={product.name} />
        <div className="product-price">{product.currency + " " 
          + priceToLocaleString(product.price)}</div>
        <Rate disabled defaultValue={product.average_rating} />
      </Card>
    </div>
  )
}

export default ProductCatalog;
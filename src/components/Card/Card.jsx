import "./Card.css"
import {Link} from "react-router-dom";

export const Card = ({title, price, address, date, image, id}) => {
  return (
    <Link
      to={`/product/${id}`}
      className="product-card"
    >
      <img
        className="product-card__img"
        src={image}
        alt={title}
        width=""
        height=""
        loading="lazy"
      />
      <h3 className="product-card__title">
        {title}
      </h3>
      <strong className="product-card__price">{price}</strong>
      <div className="product-card__desc">
        <span className="product-card__address">
          {address}
        </span>
        <span className="product-card__time">
          {date}
        </span>
      </div>
    </Link>
  )
}
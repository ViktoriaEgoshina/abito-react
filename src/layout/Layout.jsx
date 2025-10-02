import {Outlet} from "react-router-dom";
import {Header} from "../components/Header/Header";
import {useEffect, useState} from "react";
import {cardsArray} from "../constants";

export const Layout = () => {

  const [searchText, setSearchText] = useState("");
  const [products, setProducts] = useState([]);

  const [isEmptyResult, setIsEmptyResult] = useState(false);

  const handleSearchProduct = () => {
    if (searchText.trim() === "") {
      setProducts(cardsArray);
      setIsEmptyResult(false);
    } else {
      const filtered = cardsArray.filter((card) =>
        card.title.toLowerCase().includes(searchText.toLowerCase())
      );
      setProducts(filtered);
      setIsEmptyResult(filtered.length === 0); // Устанавливаем флаг
    }
  }

  useEffect(() => {
    setProducts(cardsArray)
  }, [])

  return (
    <>
      <Header />
      <main className="main">
        <section className="search">
          <div className="container">
            <div className="search__wrapper">
              <input
                className="search__input"
                id="search__input"
                type="text"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
              />
              <button
                className="btn btn--primary search__btn"
                type="button"
                onClick={handleSearchProduct}
              >
                <svg
                  className="search__btn-icon"
                  viewBox="0 0 15 15"
                  xmlns="http://www.w3.org/2000/svg"
                  width="15.000000"
                  height="15.000000"
                  fill="none"
                >
                  <rect
                    id="search 3"
                    width="15.000000"
                    height="15.000000"
                    x="0.000000"
                    y="0.000000"
                    fill="rgb(255,255,255)"
                    fill-opacity="0"
                  />
                  <path
                    id="Vector"
                    d="M14.6506 14.0012L10.0862 9.43675C10.9465 8.43352 11.4706 7.13293 11.4706 5.71058C11.4706 2.54822 8.89765 -0.0247192 5.7353 -0.0247192C4.20353 -0.0247192 2.76265 0.571751 1.67824 1.6544C0.595589 2.73793 -0.000881375 4.17881 9.77541e-07 5.71058C9.77541e-07 8.87293 2.57294 11.4459 5.7353 11.4459C7.15765 11.4459 8.45912 10.9218 9.46235 10.0615L14.0268 14.6259L14.6506 14.0012ZM5.7353 10.5635C3.06 10.5635 0.882354 8.38675 0.882354 5.71058C0.881472 4.41352 1.38618 3.19499 2.30294 2.2791C3.21882 1.36234 4.43824 0.857634 5.7353 0.857634C8.41059 0.857634 10.5882 3.0344 10.5882 5.71058C10.5882 8.38587 8.41059 10.5635 5.7353 10.5635Z"
                    fill="rgb(255,255,255)"
                    fill-rule="nonzero"
                  />
                </svg>
                <span className="search__btn-text">Найти</span>
              </button>
            </div>
          </div>
        </section>
        {isEmptyResult && (
          <div className="container">
            <div className="search__message">
              По запросу "{searchText}" ничего не найдено
            </div>
          </div>
        )}
        <Outlet context={{ products }}/>
      </main>

    </>
  )
}
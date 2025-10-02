import "./Header.css"
import {Link} from "react-router-dom";

export const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <Link className={"header__logo-link"} to="/">
            <svg
              className="header__logo"
              aria-hidden="true"
              viewBox="0 0 27 27"
              xmlns="http://www.w3.org/2000/svg"
              width="27.000000"
              height="27.000000"
              fill="none"
            >
              <rect
                id="box 1"
                width="27.000000"
                height="27.000000"
                x="0.000000"
                y="0.000000"
                fill="rgb(255,255,255)"
                fill-opacity="0"
              />
              <g id="Group">
                <path
                  id="Vector"
                  d="M26.9947 6.65895C26.9632 6.36854 26.7827 6.11151 26.513 5.98563L13.8567 0.0793852C13.6306 -0.0261362 13.3693 -0.0261362 13.1431 0.0793852L0.486896 5.98563C0.217213 6.11151 0.0367559 6.36848 0.00516797 6.65895C0.00448242 6.66501 0 6.7458 0 6.75023L0 21.094C0 21.439 0.210041 21.7493 0.530402 21.8773L13.1867 26.9398C13.2872 26.9801 13.3936 27.0002 13.5 27.0002C13.6064 27.0002 13.7128 26.9801 13.8133 26.9398L26.4696 21.8773C26.79 21.7493 27 21.439 27 21.094L27 6.75023C27 6.7458 26.9954 6.66496 26.9947 6.65895ZM13.5 1.77506L24.0334 6.69064L19.9774 8.31307L9.24576 3.7604L13.5 1.77506ZM7.18822 4.72059L17.7533 9.20264L13.5 10.904L2.96662 6.69064L7.18822 4.72059ZM1.6875 7.99645L12.6562 12.3839L12.6562 24.9102L1.6875 20.5227L1.6875 7.99645ZM14.3438 24.9103L14.3438 12.3839L25.3125 7.99645L25.3125 20.5227L14.3438 24.9103Z"
                  fill="rgb(9.73958,20.4531,58.4375)"
                  fill-rule="nonzero"
                />
              </g>
            </svg>
            Abito
          </Link>
          <div className="header__buttons">
            <button
              className="btn btn--outline"
              type="button"
            >
              Вход и&nbsp;регистрация
            </button>
            <button
              className="btn btn--primary"
              type="button"
            >
              Подать объявление
            </button>
          </div>
          <button
            className="btn header__burger"
            type="button"
          >
            <svg
              className="header__burger-icon"
              viewBox="0 0 29.9999 14.9999"
              xmlns="http://www.w3.org/2000/svg"
              width="29.999878"
              height="14.999939"
              fill="none"
              customFrame="#000000"
            >
              <g id="Group">
                <g id="Menu 1">
                  <path
                    id="Vector"
                    d="M0.937476 1.87495L29.0624 1.87495C29.58 1.87495 29.9999 1.45492 29.9999 0.937476C29.9999 0.419955 29.5799 0 29.0624 0L0.937476 0C0.419955 0 0 0.420033 0 0.937476C0 1.45492 0.420033 1.87495 0.937476 1.87495Z"
                    fill="rgb(0,0,0)"
                    fill-rule="nonzero"
                  />
                  <path
                    id="Vector"
                    d="M29.0624 6.56247L0.937476 6.56247C0.419955 6.56247 0 6.9825 0 7.49994C0 8.01738 0.420033 8.43741 0.937476 8.43741L29.0624 8.43741C29.58 8.43741 29.9999 8.01738 29.9999 7.49994C29.9999 6.9825 29.58 6.56247 29.0624 6.56247Z"
                    fill="rgb(0,0,0)"
                    fill-rule="nonzero"
                  />
                  <path
                    id="Vector"
                    d="M29.0625 13.1249L10.3125 13.1249C9.79495 13.1249 9.375 13.545 9.375 14.0624C9.375 14.5799 9.79503 14.9999 10.3125 14.9999L29.0625 14.9999C29.58 14.9999 29.9999 14.5799 29.9999 14.0624C30 13.5449 29.58 13.1249 29.0625 13.1249Z"
                    fill="rgb(0,0,0)"
                    fill-rule="nonzero"
                  />
                </g>
              </g>
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}
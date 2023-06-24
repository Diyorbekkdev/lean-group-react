import React from "react";
import logo from "../../assets/image/logo.svg";
import icon1 from "../../assets/image/vk.svg";
import icon2 from "../../assets/image/fb.svg";
import icon3 from "../../assets/image/linkedin.svg";
import "./footer.scss";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer_wrapper">
          <div className="head">
           <a href="#home"> <img src={logo} alt="logo" /></a>
            <ul>
              <li>
                <img src={icon1} alt="" />
              </li>
              <li>
                <img src={icon2} alt="" />
              </li>
              <li>
                <img src={icon3} alt="" />
              </li>
            </ul>
          </div>
          <div className="footer_list_wrapper">
              <ul>
                <li>
                  <a className="title" href="#home">
                    Продукция
                  </a>
                </li>
                <li>
                  <a href="#home">Ламинатные тубы</a>
                </li>
                <li>
                  <a href="#home">Экструзионные тубы</a>
                </li>
                <li>
                  <a href="#home">Другая упаковка</a>
                </li>
              </ul>
              <ul>
                <li>
                  <a className="title" href="#home">
                    Компания
                  </a>
                </li>
                <li>
                  <a href="#home">О нас</a>
                </li>
                <li>
                  <a href="#home">Наша команда</a>
                </li>
                <li>
                  <a href="#home">Сертификаты</a>
                </li>
              </ul>
              <ul>
                <li>
                  <a className="title" href="#home">
                    Разделы
                  </a>
                </li>
                <li>
                  <a href="#home">Контакты</a>
                </li>
                <li>
                  <a href="#home">Новости</a>
                </li>
                <li>
                  <a href="#home">Вакансии</a>
                </li>
              </ul>
              <ul>
                <ul>
                  <li className="second">
                    <a className="title_second" href="#home">
                      Беларусь
                    </a>
                  </li>
                  <li>
                    <a href="#home">+375 (17) 270 53 77</a>
                  </li>
                  <li>
                    <a href="#home">+375 (17) 270 53 78</a>
                  </li>
                </ul>
                <ul>
                  <li className="second">
                    <a className="title_second" href="#home">
                    Москва
                    </a>
                  </li>
                  <li>
                    <a href="#home">+375 (17) 270 53 77</a>
                  </li>
                  <li>
                    <a href="#home">+375 (17) 270 53 78</a>
                  </li>
                </ul>
              </ul>
              <ul>
                <ul>
                  <li>
                    <a className="title_second" href="#home">
                    Европа
                    </a>
                  </li>
                  <li>
                    <a href="#home">+375 (17) 270 53 77</a>
                  </li>
                </ul>
                <ul>
                  <li>
                    <a className="title_second" href="#home">
                    Екатеринбург
                    </a>
                  </li>
                  <li>
                    <a href="#home">+375 (17) 270 53 77</a>
                  </li>
                </ul>
              </ul>
          </div>
          <small>© 2022 Leangroup. All Rights Reserved. <br />
Разработка и продвижение сайтов SkyWeb.by</small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

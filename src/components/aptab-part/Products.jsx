import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "./products.scss";
import tab1 from "../../assets/image/tab1.png";
import tab2 from "../../assets/image/tab2.png";
import tab3 from "../../assets/image/tab3.png";
import tab4 from "../../assets/image/tab4.png";
import tab5 from "../../assets/image/tab5.png";

const Products = () => {
  return (
    <section id="products">
      <div className="container">
        <h1>
          Наша <span>продукция</span>
        </h1>
        <Tabs>
          <TabList>
            <Tab>Ламинатные тубы</Tab>
            <Tab>Экструзионные тубы</Tab>
            <Tab>TДругая упаковка</Tab>
          </TabList>

          <TabPanel>
            <img src={tab1} alt="" />
            <img src={tab2} alt="" />
            <img src={tab3} alt="" />
            <img src={tab4} alt="" />
            <img src={tab5} alt="" />
          </TabPanel>
          <TabPanel>
            <img src={tab2} alt="" />
            <img src={tab1} alt="" />
            <img src={tab5} alt="" />
            <img src={tab4} alt="" />
            <img src={tab3} alt="" />
          </TabPanel>
          <TabPanel>
            <img src={tab5} alt="" />
            <img src={tab3} alt="" />
            <img src={tab4} alt="" />
            <img src={tab2} alt="" />
            <img src={tab1} alt="" />
          </TabPanel>
        </Tabs>
        <div className="wrap_btn">
          <button className="view_product">Перейти в каталог</button>
        </div>
      </div>
    </section>
  );
};

export default Products;

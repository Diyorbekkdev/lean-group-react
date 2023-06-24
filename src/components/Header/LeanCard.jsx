import React from "react";
import PrimaryButton from "../Button/PrimaryButton";
import './Header.scss'
const LeanCard = () => {
  return (
    <div className="lean-card">
      <p className="init-info">LEANGROUP - тубы и этикетки</p>
      <h2>Ламинатные тубы</h2>
      <p>
        Используются для производства зубных паст. Широко применяются в сегменте
        косметики, пищевой индустрии, парафармацевтике, бытовой химии и DIY
        (Do-it-Yourself).
      </p>
      <PrimaryButton text={"Каталог"} />
    </div>
  );
};

export default LeanCard;

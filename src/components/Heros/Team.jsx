import React from "react";
import "./team.scss";
import TeamComponent from "./TeamComponent";
import img from "../../assets/image/user1.png";
import img2 from "../../assets/image/user2.png";
import img3 from "../../assets/image/user3.png";
import img4 from "../../assets/image/user4.png";
import img5 from "../../assets/image/user5.png";

const Team = () => {
  const userData = [
    {
      img: img,
      name: "Войнич Дарья",
      info: "Заместитель директора по продажам",
      tel: "+375 (17) 270-53-77 (317)",
      email: "k.melnichenko@leangroup.by",
    },
    {
      img: img2,
      name: "Мисько Екатерина",
      info: "Начальник отдела сопровождения",
      tel: "+375 (17) 270-53-77 (115)",
      email: "k.melnichenko@leangroup.by",
    },
    {
      img: img3,
      name: "Дмитроченко Дмитрий",
      info: "Начальник отдела допечатной подготовки",
      tel: "+375 (17) 270-53-77 (333)",
      email: "dmitrochenko@leangroup.by",
    },
    {
      img: img4,
      name: "Антух Евгений",
      info: "j.antuh@leangroup.by",
      tel: "+375 (17) 270-53-77 (317)",
      email: "j.antuh@leangroup.by",
    },
    {
      img: img5,
      name: " Мисник Елена",
      info: "Специалист по работе с клиентами",
      tel: "+375 (17) 270-53-77 (317)",
      email: "e.misnik@leangroup.by",
    },
  ];

  return (
    <section id="team" className="team">
      <h1>
        Наша <span>команда</span>
      </h1>
      <div className="container card_wrapper">
        {userData.map((card) => (
          <TeamComponent {...card} />
        ))}
      </div>
      <div className="see_wrapper">
        <button className="see_all">Все новости</button>
      </div>
    </section>
  );
};

export default Team;

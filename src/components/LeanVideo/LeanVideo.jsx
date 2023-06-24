import React from "react";
import "./lean-section.scss";

import video from "../../assets/image/JAVASCRIPTDA ANIMATSION MODAL (DOM PROJECTS).mp4";

const LeanVideo = () => {
  return (
    <section id="lean-video" className="lean-video">
      <div className="container">
        <h1 className="video_title">О компании <span>LEANGROUP</span></h1>
        <div className="wrapper">
          <div className="video">
            <div className="overlay"></div>
            <video poster="https://cms.cloudinary.vpsvc.com/images/c_scale,dpr_auto,f_auto,q_auto:best,t_productPageHeroGalleryTransformation_v2,w_auto/legacy_dam/en-us/S001378802/SIGNMX-462-posters-t3-002?cb=2b3ce1b045f3f34bd6fec1544ff2f8a476a92ebe" controls src={video}></video>
          </div>
          <div className="info_video">
           <p>Компания ООО «ЛеанГрупп» начала свою деятельность в 1999 году и на сегодняшний день является ведущей компанией по производству ламинатных и экструзионных туб.</p>
           <p>Имея две технологии – для производства ламинатных и экструзионных туб, мы предлагаем вам широкий спектр возможностей. Большим преимуществом является собственный печатный цех в ламинате и in-line печать в экструзии с возможностью различных дополнительных опций декора. Особое внимание уделяется работе с поставщиками для контроля и поддержания качества производимой нами продукции.</p>
           <p>С января 2018 года компания стала членом Европейской Ассоциации производителей туб (ETMA), что подтверждает сильную позицию бренда и на рынке Европы.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeanVideo;

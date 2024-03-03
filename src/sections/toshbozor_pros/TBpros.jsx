import "./tbpros.css";
import highQualityicon from "../../assets/icons/high_quality.svg";
import guaranteIcon from "../../assets/icons/guarante.svg";
import priceIcon from "../../assets/icons/affordable_price.svg";
const TBpros = () => {
  const advantagesCard = [
    {
      id: 1,
      image: highQualityicon,
      title: "Yuqori sifatli mahsulot",
      text: "Bizning sinchkovlik bilan tanlangan tanlovimiz har bir toshning abadiy nafisligi va ajoyib ishlashini aks ettiradi, har qanday tashqi makonni uslub va funksionallik makoniga aylantiradi.",
    },
    {
      id: 2,
      image: guaranteIcon,
      title: "Kafolatlangan mahsulot",
      text: "Toshbozorda kafolatlangan mahsulotlarimiz yuqori mahorat va chidamlilikni o‘zida mujassam etgan. Qattiq sifat nazorati choralari bilan biz har bir yulka toshidan qoniqishingizni kafolatlaymiz",
    },
    {
      id: 3,
      image: priceIcon,
      title: "Hamyonbop narxlar",
      text: "Biz sifatga putur etkazmagan holda arzonlikni birinchi o'ringa qo'yamiz. Bizning arzon narxlardagi keng tanlovimiz yuqori sifatli yulka toshlarini har bir byudjet uchun mos.",
    },
  ];
  return (
    <section className="advantages_section">
      <h1 className="advantages_title">Bizning avzalliklarimiz</h1>
      <div className="devider"></div>

      <div className="advantages_cards_wrapper">
        {advantagesCard.map((card) => (
          <div key={card.id} className="advantages_card">
            <div className="advantages_card_img_title">
              <img className="advantages_card_img" src={card.image} alt="" />
              <h2 className="advantages_card_title">{card.title}</h2>
            </div>
            <p className="advantages_card_text">{card.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TBpros;

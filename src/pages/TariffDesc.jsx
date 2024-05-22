import React from "react";
import Header from "../components/Header/Header";
import Tariff from "../components/Tariff/Tariff";
import Footer from "../components/Footer/Footer";
import HelpForm from "../components/HelpForm/HelpForm";

const data = {
  provider: "МТС",
  providerImg: "mtsIcon.png",
  name: "МТС Тариф № 7 IPTV",
  price: "999",
  params: [
    {
      name: "Домашний интернет",
      img: "iconInternet.png",
      params: [
        {
          name: "Скорость интернета",
          value: "100 Мбит/с",
        },
      ],
    },
    {
      name: "ТВ",
      img: "iconTv.png",
      params: [
        {
          name: "Кол-во каналов",
          value: "999",
        },
        {
          name: "Кол-во HD каналов",
          value: "99",
        },
      ],
    },
    {
      name: "Мобильная связь",
      img: "iconMob.png",
      params: [
        {
          name: "Кол-во минут",
          value: "100 Мбит/с",
        },
        {
          name: "Мобильный интернет",
          value: "99 гб",
        },
        {
          name: "СМС",
          value: "999 шт.",
        },
      ],
    },
    {
      name: "Стоимость подключения",
      img: "iconWallet.png",
      params: [
        {
          name: "Стоимость подключения (единоразово)",
          value: "100 ₽",
        },
      ],
    },
    {
      name: "Wi-Fi Роутер",
      img: "iconWifi.png",
      params: [
        {
          name: "В аренду",
          value: "99 ₽/мес",
        },
        {
          name: "В собственность (единарозово)",
          value: "3600 ₽",
        },
      ],
    },
    {
      name: "ТВ приставка",
      img: "iconDecoder.png",
      params: [
        {
          name: "В аренду",
          value: "99 ₽/мес",
        },
        {
          name: "В собственность (единарозово)",
          value: "3600 ₽",
        },
      ],
    },
    {
      name: "Акция",
      img: "iconSale.png",
      params: [
        {
          name: "описание акции",
          value: "",
        },
      ],
    },
    {
      name: "Особенности тарифа",
      img: "iconComment.png",
      params: [
        {
          name: "Текст особенностей тарифа",
          value: "",
        },
      ],
    },
  ],
};

function TariffDesc() {
  return (
    <>
      <Header></Header>
      <Tariff tariffInfo={data}></Tariff>
      <HelpForm></HelpForm>
      <Footer></Footer>
    </>
  );
}

export default TariffDesc;

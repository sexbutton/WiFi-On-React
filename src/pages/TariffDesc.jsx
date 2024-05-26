import Header from "../components/Header/Header";
import Tariff from "../components/Tariff/Tariff";
import Footer from "../components/Footer/Footer";
import HelpForm from "../components/HelpForm/HelpForm";
import { useState, useEffect } from "react";

function TariffDesc() {
  const [tariff, setTariff] = useState({});

  useEffect(() => {
    fetch(`/api/get_tariff?id=2147`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json(); // Преобразование ответа в JSON
      })
      .then((data) => {
        setTariff(data);
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      });
  }, []);
  console.log(tariff);
  return (
    <>
      <Header></Header>
      <Tariff tariffInfo={tariff}></Tariff>
      <HelpForm></HelpForm>
      <Footer></Footer>
    </>
  );
}

export default TariffDesc;

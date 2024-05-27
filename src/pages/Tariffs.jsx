import Header from "../components/Header/Header";
import SliderProviders from "../components/SliderProviders/SliderProviders";
import Filter from "../components/Filter/Filter";
import SliderTariffsFilter from "../components/SliderTariffsFilter/SliderTariffsFilter";
import HelpForm from "../components/HelpForm/HelpForm";
import Footer from "../components/Footer/Footer";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Tariffs = () => {
  const [searchParams] = useSearchParams();
  const address = searchParams.get("address");

  const [tariffs, setTariffs] = useState([]);
  const [providers, setProviders] = useState([]);
  const [filterProviders, setFilterProviders] = useState([]);

  useEffect(() => {
    if (address) {
      fetch(`/api/get_tariffs?address=${address}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          console.log(data);
          setTariffs(data.tariffs);
          setProviders(data.providers);
        })
        .catch((error) => {
          console.error("Fetch error:", error);
        });
    }
  }, []);

  return (
    <>
      <Header />
      <SliderProviders providers={providers} />
      <Filter />
      <SliderTariffsFilter allTariffs={tariffs} />
      <HelpForm />
      <Footer />
    </>
  );
};

export default Tariffs;

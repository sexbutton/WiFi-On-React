import Header from "../components/Header/Header";
import SliderProviders from "../components/SliderProviders/SliderProviders";
import Filter from "../components/Filter/Filter";
import SliderTariffsFilter from "../components/SliderTariffsFilter/SliderTariffsFilter";
import HelpForm from "../components/HelpForm/HelpForm";
import Footer from "../components/Footer/Footer";
const Tariffs = () => {
  return (
    <>
      <Header></Header>
      <SliderProviders></SliderProviders>
      <Filter></Filter>
      <SliderTariffsFilter></SliderTariffsFilter>
      <HelpForm></HelpForm>
      <Footer></Footer>
    </>
  );
};

export default Tariffs;

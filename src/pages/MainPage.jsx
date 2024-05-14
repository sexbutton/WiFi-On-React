import Header from "../components/Header/Header";
import Main from "../components/Main/Main";
import ProvidersInCity from "../components/ProvidersInCity/ProvidersInCity";
import AboutUs from "../components/AboutUs/AboutUs";
import CardTariff from "../components/CardTariff/CardTariff";
import MySlider from "../components/Slider/MySlider";
function MainPage() {
  return (
    <>
      <Header></Header>
      <Main></Main>
      <ProvidersInCity></ProvidersInCity>
      <AboutUs></AboutUs>
      <MySlider></MySlider>
    </>
  );
}

export default MainPage;

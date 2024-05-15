import Header from "../components/Header/Header";
import Main from "../components/Main/Main";
import ProvidersInCity from "../components/ProvidersInCity/ProvidersInCity";
import AboutUs from "../components/AboutUs/AboutUs";
import MySlider from "../components/Slider/MySlider";
import Advantages from "../components/Advantages/Advantages";
function MainPage() {
  return (
    <>
      <Header></Header>
      <Main></Main>
      <ProvidersInCity></ProvidersInCity>
      <MySlider></MySlider>
      <AboutUs></AboutUs>
      <Advantages></Advantages>
    </>
  );
}

export default MainPage;

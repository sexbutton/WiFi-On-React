import Header from "../components/Header/Header";
import Main from "../components/Main/Main";
import ProvidersInCity from "../components/ProvidersInCity/ProvidersInCity";
import AboutUs from "../components/AboutUs/AboutUs";
import SliderTariffsMain from "../components/SliderTariffsMain/SliderTariffsMain";
import Advantages from "../components/Advantages/Advantages";
import ConnectionSteps from "../components/ConnectionSteps/ConnectionSteps";
import HelpForm from "../components/HelpForm/HelpForm";
import Questions from "../components/Questions/Questions";
import Cities from "../components/Cities/Cities";
import NewsLetter from "../components/NewsLetter/NewsLetter";
import Footer from "../components/Footer/Footer";
function MainPage() {
  return (
    <>
      <Header></Header>
      <Main></Main>
      <ProvidersInCity></ProvidersInCity>
      <AboutUs></AboutUs>
      <Advantages></Advantages>
      <ConnectionSteps></ConnectionSteps>
      <HelpForm></HelpForm>
      <Questions></Questions>
      <Cities></Cities>
      <NewsLetter></NewsLetter>
      <Footer></Footer>
    </>
  );
}

export default MainPage;

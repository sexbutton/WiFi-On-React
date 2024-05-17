import Header from "../components/Header/Header";
import Main from "../components/Main/Main";
import ProvidersInCity from "../components/ProvidersInCity/ProvidersInCity";
import AboutUs from "../components/AboutUs/AboutUs";
import MySlider from "../components/Slider/MySlider";
import Advantages from "../components/Advantages/Advantages";
import ConnectionSteps from "../components/ConnectionSteps/ConnectionSteps";
import HelpForm from "../components/HelpForm/HelpForm";
import Questions from "../components/Questions/Questions";
import Cities from "../components/Cities/Cities";
import Newsletter from "../components/Newsletter/Newsletter";
function MainPage() {
  return (
    <>
      <Header></Header>
      <Main></Main>
      <ProvidersInCity></ProvidersInCity>
      <MySlider></MySlider>
      <AboutUs></AboutUs>
      <Advantages></Advantages>
      <ConnectionSteps></ConnectionSteps>
      <HelpForm></HelpForm>
      <Questions></Questions>
      <Cities></Cities>
      <Newsletter></Newsletter>
    </>
  );
}

export default MainPage;

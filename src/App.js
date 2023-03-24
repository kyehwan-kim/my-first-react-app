import logo from "./logo.svg";
import "./App.css";
import MainHeader from "./components/MainHeader";
import ImgComponent from "./components/ImgComponent";
import BtnToNaver from "./components/BtnToNaver";
import ClassComponent from "./components/ClassComponent";
import FunctionalComponent from "./components/FunctionalComponent";

function App() {
  return (
    <div className="App">
      {/* <ClassComponent /> */}
      {/* <FunctionalComponent /> */}
      <MainHeader />
      <ImgComponent />
      <BtnToNaver />
    </div>
  );
}

export default App;

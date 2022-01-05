import Header from "./components/Header";
import Footer from "./components/Footer";
import MyInfo from "./components/MyInfo";
import TechStack from "./components/TechStack";
import FeaturedProjects from "./components/FeaturedProjects";

function App() {
  return (
    <div className="App">
      {/* <Header  className="fixed"/>
      <MyInfo />
      <TechStack />  */}
      <FeaturedProjects />
      {/* <Footer/> */}
    </div>
  );
}

export default App;
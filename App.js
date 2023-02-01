import './App.css';
import Header from "./components/Header";
import FeatureCategory from "./components/FeatureCategory";
import Carousel from "./components/Carousel";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="header">
      <Header />
      <Carousel />
      <FeatureCategory />
    </div>
  );
}

export default App;

import { FC } from "react";
import "../style/App.css";
import { Header } from "../../components/header";
import { NewsSlider } from "../../components/news";
import { BrowserRouter } from "react-router-dom";

const App: FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <NewsSlider />
    </BrowserRouter>
  );
};

export default App;

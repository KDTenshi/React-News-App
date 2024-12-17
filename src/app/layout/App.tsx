import { FC } from "react";
import "../style/App.css";
import { Header } from "../../components/header";
import { NewsListFiltered, NewsSlider } from "../../components/news";
import { BrowserRouter } from "react-router-dom";

const App: FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <NewsSlider />
      <NewsListFiltered />
    </BrowserRouter>
  );
};

export default App;

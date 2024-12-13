import { FC } from "react";
import "../style/App.css";
import { Header } from "../../components/header";
import { NewsSlider } from "../../components/news";

const App: FC = () => {
  return (
    <>
      <Header />
      <NewsSlider />
    </>
  );
};

export default App;

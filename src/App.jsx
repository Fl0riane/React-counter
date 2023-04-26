import { useState } from "react";
import "./App.css";
import Header from "./assets/components/Header";
import Decrement from "./assets/components/Button-less";
import Increment from "./assets/components/Button-more";

const App = () => {
  const [counter, setCounterMore] = useState(0);
  const [counterLess, setCounterLess] = useState(0);

  return (
    <section>
      <Header />
      <div className="container">
        <Decrement counter={counterLess} setCounterLess={setCounterLess} />
        <p>{counter}</p>
        <Increment counter={counter} setCounterMore={setCounterMore} />
      </div>
    </section>
  );
};

export default App;

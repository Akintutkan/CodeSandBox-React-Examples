import "./styles.css";

import { useState } from "react";

const App = () => {
  const [showPage2, setShowPage2] = useState(false);
  const showPageEvnt2 = () => {
    setShowPage2(!showPage2);
  };
  return (
    <div>
      <button className={showPage2 && "active"} onClick={showPageEvnt2}>
        Show{" "}
      </button>
    </div>
  );
};

export default App;

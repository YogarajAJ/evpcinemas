import React from "react";
import BookNow from "./components/BookNow";
import ContactInformation from "./components/ContactInformation";
import Movies from "./components/movies";
import Title from "./components/Title";
const goldColorHr = { border: "1px solid gold" };

const App = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg">
          <Title />
        </div>
      </div>

      <div className="row">
        <div className="col-lg">
          <hr style={{...goldColorHr,zIndex:99999999999999}} />
          <div style={{ marginBottom: "2vh" }}>
            <BookNow />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg">
          <Movies />
        </div>
      </div>
      <div className="row">
        <div className="col-lg">
          <hr style={goldColorHr} />
          <ContactInformation />
        </div>
      </div>
      <div className="row">
        <div className="col-lg">
          <hr style={goldColorHr} />
          <div className="copy-rights-container">
            &copy; 2021 EVP CINEMAS | All Rights Reserved{" "}
          </div>
        </div>
      </div>
    </div>
  );
};
export default App;

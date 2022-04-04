import React from "react";
import { jsPDF } from "jspdf";

import img from "./img.jpg";

const App = () => {
  const savePdf = () => {
    const doc = new jsPDF();
    doc.text("Hello there", 10, 10);
    doc.addImage(img, "JPG", 10, 30, 100, 100);
    doc.save("a4.pdf");
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <button onClick={savePdf}>save Pdf</button>
    </div>
  );
};

export default App;

import logo from "./logo.svg";
import "./App.css";
import Keys from "./components/Keys";
import { MultiStepLoader } from "./components/Multiloader";
import { useState } from "react";
import TableComponent from "./components/Table";
import axios from "axios";
function App() {
  const [loading, setLoading] = useState(false);
 const [visible, setVisible] = useState(false);
  const toggleLoading = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 11000);
    

  };
  const [data, setData] = useState([
    {
      key: "Apoptosis Evaluation with Annexin V and Propidium Iodide",
      value:
        "Apoptosis induction in cells was evaluated using a flow cytometry-based assay with Annexin V and Propidium Iodide (PI) staining. Annexin V binds to phosphatidylserine residues translocated to the outer leaflet of the plasma membrane in early apoptotic cells, while PI stains the DNA of late apoptotic and necrotic cells. The results were analyzed by flow cytometry to distinguish between live, early apoptotic, and late apoptotic/necrotic cells.",
    },
    {
      key: "Another Key",
      value: "Another value related to apoptosis evaluation.",
    },
  ]);
  const nodeQuery = (fields, docText) => {
    toggleLoading();
    axios
      .post("http://localhost:8080/data", {
        fields: fields,
        docText: docText,
      })
      .then((response) => {
        console.log("Data sent successfully:", response.data);
        axios
          .post("http://127.0.0.1:5050/extract-data", {
            input_text: response.data.documents,
            fields: response.data.fields,
          })
          .then((response) => {
            console.log("Data sent successfully:", response.data);
            setData(response.data);
          });
      })
      .catch((error) => {
        console.error("Error sending data:", error);
      });
  };

  return (
    <div className="App">
      <Keys loading={loading} nodeQuery={nodeQuery} />
      <TableComponent data={data} />
    </div>
  );
}

export default App;

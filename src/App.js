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
    setLoading(true);
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
            setLoading(false);
            setVisible(true)
          });
      })
      .catch((error) => {
        console.error("Error sending data:", error);
      });
  };

  return (
    <div className="App">
       <header className="sticky top-0 z-40 w-full border-b bg-white px-4 py-3 sm:px-6 md:py-4">
        <div className="container mx-auto flex items-center justify-between">
          <a className="flex items-center gap-2" href="#" rel="ugc">
            <img
              src="https://augenblick.consulting/assets/images/image01.png?v=539eff26"
              width="200"
              height="24"
             
              className=""
            >
              
            </img>
           
          </a>
          <nav className="hidden items-center gap-4 md:flex">
            <a className="text-sm font-medium hover:underline hover:underline-offset-4" href="#" rel="ugc">
              Features
            </a>
            <a className="text-sm font-medium hover:underline hover:underline-offset-4" href="#" rel="ugc">
              Pricing
            </a>
            <a className="text-sm font-medium hover:underline hover:underline-offset-4" href="#" rel="ugc">
              About
            </a>
            <a className="text-sm font-medium hover:underline hover:underline-offset-4" href="#" rel="ugc">
              Contact
            </a>
          </nav>
          <div className="flex items-center gap-2 md:hidden">
            <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 w-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <line x1="4" x2="20" y1="12" y2="12"></line>
                <line x1="4" x2="20" y1="6" y2="6"></line>
                <line x1="4" x2="20" y1="18" y2="18"></line>
              </svg>
              <span className="sr-only">Toggle menu</span>
            </button>
          </div>
        </div>
      </header>
      { !visible && data ? <Keys loading={loading} nodeQuery={nodeQuery} /> : <div > <TableComponent data={data} setVisible={setVisible} /></div>}
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import Keys from './components/Keys';
import { MultiStepLoader } from './components/Multiloader';
import { useState } from 'react';
import TableComponent from './components/Table';
function App() {

  const data = [
    { key: 'Apoptosis Evaluation with Annexin V and Propidium Iodide', value: 'Apoptosis induction in cells was evaluated using a flow cytometry-based assay with Annexin V and Propidium Iodide (PI) staining. Annexin V binds to phosphatidylserine residues translocated to the outer leaflet of the plasma membrane in early apoptotic cells, while PI stains the DNA of late apoptotic and necrotic cells. The results were analyzed by flow cytometry to distinguish between live, early apoptotic, and late apoptotic/necrotic cells.' },
    { key: 'Another Key', value: 'Another value related to apoptosis evaluation.' }
  ];
  return (
    <div className="App">
      <Keys />
      <TableComponent data={data} />
    </div>
  );
}

export default App;

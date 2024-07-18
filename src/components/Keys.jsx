/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { MdDriveFolderUpload } from "react-icons/md";
import { GrFormNextLink } from "react-icons/gr";
import axios from "axios";
import { MultiStepLoader } from './Multiloader';

export default function Keys({ loading, nodeQuery }) {
  const predefinedFields = [
    { 
        key: 'Cell Line', 
        description: 'The specific type of cells used in the experiment', 
        dataType: 'str' 
        // Example: HeLa cells (ATCC®, Manassas, VA)
    },
    { 
        key: 'Cell Culture Medium', 
        description: 'The type of medium used for culturing cells', 
        dataType: 'str' 
        // Example: Dulbecco's modified Eagle medium (DMEM) with 10% fetal bovine serum (FBS) (Thermo Fisher Scientific Inc., Waltham, MA)
    },
    { 
        key: 'Incubation Conditions', 
        description: 'The conditions under which cells were incubated', 
        dataType: 'str' 
        // Example: Incubated in 5% CO2 at 37°C in a humidified incubator
    },
    { 
        key: 'Apoptosis Inducing Agent', 
        description: 'The agent used to induce apoptosis in cells', 
        dataType: 'str' 
        // Example: Staurosporine (STS) (Cell Signaling Technology, Boston, MA)
    },
    { 
        key: 'Apoptosis Inducing Agent Concentration', 
        description: 'The concentration of the apoptosis inducing agent used', 
        dataType: 'str' 
        // Example: Final concentration of 1 μM in DMEM
    },
    { 
        key: 'Treatment Timepoints', 
        description: 'The different time points at which cells were harvested after treatment', 
        dataType: 'str' 
        // Example: 15 min, 30 min, 60 min, and 180 min
    },
    { 
        key: 'Cell Harvesting Method', 
        description: 'The method used to harvest cells after treatment', 
        dataType: 'str' 
        // Example: Using Trypsin-EDTA (5%) (Thermo Fisher Scientific Inc.)
    },
    { 
        key: 'Apoptosis Detection Method', 
        description: 'The method used to verify apoptosis induction', 
        dataType: 'str' 
        // Example: Annexin V propidium iodide (PI) apoptosis detection kit (BD Biosciences, Franklin Lakes, NJ)
    },
    { 
        key: 'Flow Cytometer Model', 
        description: 'The model of the flow cytometer used for apoptosis analysis', 
        dataType: 'str' 
        // Example: BD Accuri™ C6 (BD Biosciences, San Jose, CA)
    },
    { 
        key: 'Fluorescence Emission Channels', 
        description: 'The emission channels used for collecting fluorescence signals', 
        dataType: 'str' 
        // Example: 530/30 nm for FITC and 585/40 nm for PI
    },
    { 
        key: 'Microscope Model', 
        description: 'The model of the microscope used for fluorescence microscopy', 
        dataType: 'str' 
        // Example: Axio Observer Z1/7 scope with Plan-Apochromat 20×/0.8 M27 objective (ZEISS, Oberkochen, Germany)
    },
    { 
        key: 'Fluorescence Filters', 
        description: 'The excitation and emission filters used for capturing fluorescence', 
        dataType: 'str' 
        // Example: 335–383 nm excitation filter and 420–470 nm emission filter for NAD(P)H fluorescence
    },
    { 
        key: 'Fluorescence Lifetime Measurement System', 
        description: 'The system used to measure fluorescence lifetimes', 
        dataType: 'str' 
        // Example: Time-correlated single photon counting (TCSPC) spectrograph (HORIBA Scientific, Edison, NJ)
    },
    { 
        key: 'Flow Cytometer Modifications', 
        description: 'Specific modifications made to the flow cytometer for the experiment', 
        dataType: 'str' 
        // Example: Addition of frequency-domain components and signal processing algorithms
    },
    { 
        key: 'Excitation Source', 
        description: 'The source used for excitation in fluorescence measurements', 
        dataType: 'str' 
        // Example: 378 nm 60 mW solid state laser (Vortran Laser Technology Inc., Sacramento, CA)
    },
    { 
        key: 'Modulation Frequency', 
        description: 'The modulation frequency set for the laser', 
        dataType: 'str' 
        // Example: 6.25 MHz
    },
    { 
        key: 'Data Analysis Software', 
        description: 'The software used for processing and analyzing data', 
        dataType: 'str' 
        // Example: FCS Express V4 software (De Novo Software, Glendale, CA) and MATLAB (The MathWorks®, Natick, MA)
    }
];
  const loadingStates = [
    {
      text: "Uploading Your File",
    },
    {
      text: "Searching Your File ",
    },
    {
      text: "Passing to our LLM",
    },
    {
      text: "Visualizing Your Data",
    },
    {
      text: "Clearing Cache",
    },
   
  ];
  const [fields, setFields] = useState(predefinedFields);
  const [docText, setDocText] = useState('');

  const handleAddField = () => {
    setFields([...fields, { key: '', description: '', dataType: '' }]);
  };

  const handleRemoveField = (index) => {
    setFields(fields.filter((_, i) => i !== index));
  };

  const handleInputChange = (index, event) => {
    const newFields = fields.map((field, i) => {
      if (i === index) {
        return { ...field, [event.target.name]: event.target.value };
      }
      return field;
    });
    setFields(newFields);
  };

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <main className="flex-1 py-8 sm:py-12 md:py-16">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6">
          <textarea
            onChange={(e) => setDocText(e.target.value)}
            className="rounded-lg border bg-card text-card-foreground shadow-sm w-[66.2vw]"
          />
          <div className="rounded-lg border bg-card text-card-foreground shadow-sm" data-v0-t="card">
            <div className="flex flex-col space-y-1.5 p-6">
              <h3 className="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">Add New Field</h3>
              <p className="text-sm text-muted-foreground">Create a new field with a key, description, and data type.</p>
            </div>
            <div className="p-6">
              <form className="grid gap-4">
                {fields.map((field, index) => (
                  <div key={index} className="grid gap-4">
                    <div className="grid grid-cols-4 gap-4">
                      <div className="grid gap-2">
                        <label
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-left"
                          htmlFor={`key-${index}`}
                        >
                          Key
                        </label>
                        <input
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          id={`key-${index}`}
                          name="key"
                          placeholder="Enter field key"
                          value={field.key}
                          onChange={(e) => handleInputChange(index, e)}
                        />
                      </div>
                      <div className="grid gap-2">
                        <label
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-left"
                          htmlFor={`description-${index}`}
                        >
                          Description
                        </label>
                        <input
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          id={`description-${index}`}
                          name="description"
                          placeholder="Enter field description"
                          value={field.description}
                          onChange={(e) => handleInputChange(index, e)}
                        />
                      </div>
                      <div className="grid gap-2">
                        <label
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-left"
                          htmlFor={`dataType-${index}`}
                        >
                          Data Type
                        </label>
                        <select
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          id={`dataType-${index}`}
                          name="dataType"
                          value={field.dataType}
                          onChange={(e) => handleInputChange(index, e)}
                        >
                          <option value="">Select data type</option>
                          <option value="str">String</option>
                          <option value="float">Number</option>
                          <option value="bool">Boolean</option>
                          <option value="date">Date</option>
                        </select>
                      </div>
                      <div className="flex items-end">
                        <button
                          type="button"
                          className="inline-flex gap-2 bg-black text-white items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-primary-foreground hover:bg-red-500 h-10 px-4 py-2"
                          onClick={() => handleRemoveField(index)}
                        >
                          Remove
                        </button>
                      </div>
                      {index === fields.length - 1 && (
                        <div className="flex items-end">
                          <button
                            type="button"
                            className="inline-flex gap-2 bg-black text-white items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
                            onClick={handleAddField}
                          >
                            Add Field <span className='text-xl justify-center items-center flex '>+</span>
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </form>
            </div>
          </div>
        </div>
        <div className=''>
          <button className="inline-flex gap-2 mr-10 bg-black text-white items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
            Upload <MdDriveFolderUpload size={17} />
          </button>
          <button onClick={() => nodeQuery(fields, docText)} className="inline-flex mt-9 gap-2 bg-black text-white items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
            Next <GrFormNextLink size={17} />
          </button>
          <MultiStepLoader loadingStates={loadingStates} loading={loading} duration={2000} loop={false} />
        </div>
      </main>
    </div>
  );
}
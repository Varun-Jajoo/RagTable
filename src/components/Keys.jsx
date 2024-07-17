import React, { useState } from 'react';
import { MdDriveFolderUpload } from "react-icons/md";
import { GrFormNextLink } from "react-icons/gr";
import axios from "axios"
import { MultiStepLoader } from './Multiloader';
export default function Keys() {
  const [fields, setFields] = useState([{ key: '', description: '', dataType: '' }]);
  const [loading, setLoading] = useState(false);
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
  const [docText,setDocText] = useState(`Materials and Methods
Extraction and Purification of Green Fluorescent Protein as the FRET Donor

In order to develop a FRET-based BP we followed Suzuki et al. (27-29) and expressed and purified a modified, or “mutant,” green fluorescent protein (GFP-μ) by insertion of a caspase-3 cleavable short peptide sequence (DEVD). Briefly, the procedure involves transforming plasmids into competent Escherichia coli (BL-21 DE3, Invitrogen by Life Technologies, Carlsbad, CA). E. coli were cultured (37°C), harvested, and lysed. The lysate was separated and purified (column with Ni2+ − NTA resin, Thermo Fisher Scientific Inc., Waltham, MA), as per standard procedures with histidine tagged fusion proteins. GFP-μ was recovered after purification and reconstituted in phosphate-buffered saline and checked for purity spectroscopically (i.e., ratio of absorbance at 488 and 280 nm > 1.5).

Construction of the Bioprobe

The acceptor molecule used was an organic fluorophore, Alexa Fluor® 546 dye (Thermo Fisher Scientific Inc.) with an excitation maximum that sufficiently overlaps with the emission spectrum of GFP-μ (27-29, 56, 57). This fluorophore also has a quantum yield that is high relative to other Cy3 derivatives with similar emission profiles. Alexa Fluor® 546 dye was conjugated to GFP-μ by reduction of the disulfide bonds of the protein with dithiothreitol (DTT); 100 μl of a 20 μM protein solution was reduced with 1 mM DTT at room temperature for 15 min. Excess DTT was removed using Zeba™ spin desalting columns (Thermo Fisher Scientific Inc.). Alexa Fluor® 546 dye dissolved in dimethyl sulfoxide (DMSO) (concentration estimated spectrophotometrically using extinction coefficient at 554 nm, e554 = 106,000 cm−1M−1) was mixed with GFP-μ with a GFP-μ/Alexa Fluor® 546 dye at a ratio of 1:10. The mixture was incubated for 4 h at 37°C. Excess Alexa Fluor® 546 dye was removed using Zeba™ spin desalting columns. The final FRET bioprobe is referred to as GFP-μ-A546 from here forward.

Caspase-3 Cleavage Test

The GFP-μ-A546 BP was tested in vitro for cleavage by combining with two units of caspase-3 (EMD Millipore, Bedford, MA). The solution (5 μM) was reconstituted in a buffer with 20 mM 2-[4-(2-sulfoethyl) piperazin-1-ium-1-yl]ethanesulfonate (PIPES), 100 mM NaCl, 0.1% 3-[dimethyl(3-([(3α,5β,7α,12α)-3,7,12-trihydroxy-24-oxocholan-24-yl]amino)propyl)ammonio]propane-1-sulfonate (CHAPS), 10 mM DTT, 10% sucrose, and 1 mM EDTA. This mixture was incubated at 30°C for 2-, 5- and 7-h to evaluate caspase-3 cleavage response time. Cleavage was evaluated by measuring total fluorescence emission spectra (with a Horiba FluoroMax®-4 spectrofluorimeter).

Cell Culture

HeLa cells (ATCC.org®) were cultured as this line is known to have a strong caspase-3 expression when apoptosis is induced with tumor necrosis factor-α (TNF-α) and cycloheximide (CHX). In preparation for the evaluation of FRET, cells were cultured in a humidified atmosphere at 37°C and 5% CO2. Cells were cultured in Dulbecco's modified Eagle's medium (DMEM) with 10% fetal bovine serum (FBS) in T-25 flasks and six well plates. In preparation to add the GFP-μ-A546 to the cells, 50 μl (~25 μM) of the BP was added to a lyophilized film of BioPORTER reagent (Genlantis, San Diego, CA) and incubated at room temperature for approximately 10 min to insure hydration of the dry-film and formation of BioPORTER protein complexes. DMEM without FBS was also added so the resulting solution could be combined with the monolayer HeLa cells. The solution was added to cells cultured to 80 to 90% confluency. The same procedure was followed for the control in which the donor-only mutant GFP molecule was introduced into HeLa cells. After a 3-h incubation, the cells were washed, detached (0.25% Trypsin, Life technologies, Grand Island, NY), centrifuged, and re-suspended in phosphate buffered saline to obtain volumes at a concentration of approximately 106 cells/ml to be used for cytometry experiments.

Apoptosis Evaluation with Annexin V and Propidium Iodide (PI)

The evaluation of apoptosis induction in cells was with a standard annexin-PI cytometry assay. Aliquots of HeLa cells were treated with apoptosis-triggering reagents, TNF-α and CHX. After different time points, HeLa cells were collected and labeled with an annexin V fluorophore and PI. This procedure involved taking resuspended cells and combining with a 1× binding buffer containing 5 μl fluorescein 5-isothiocyanate [FITC; 2-(3,6-dihydroxy-9H-xanthen-9-yl)-5-isothiocyanatobenzoic acid] following the manufacturer's protocol for annexin V detection (BD Biosciences, Franklin Lakes, NJ). Additionally, 2 μl of propidium iodide was added to the cell suspension and mixed gently for live/dead cell analysis. The cells were evaluated using a BD Accuri™ C6 flow cytometer (BD Biosciences) to collect fluorescence intensity of FITC-annexin V and PI as well as forward scatter and side scatter values.

Cytometric Evaluation of the BP Before and During Apoptosis

Experimentally, we measured cells with GFP-μ-A546 before apoptosis induction and after apoptosis induction at different time points as well as cells with only GFP-μ. Our evaluation involved measuring changes in the fluorescence intensity and fluorescence lifetime of the donor fluorophore.

A BD Accuri™ flow cytometer was used to evaluate donor emission and acceptor emission in a qualitative manner with the goal of evaluating GFP-μ and GFP-μ-A546 internalization within the cells. We thus collected optical signals at the peak emission of the donor molecule as well as the acceptor molecule (530/15 and 585/20-nm, when excited at 488-nm). A preliminary estimation of sensitized acceptor emission was performed with these data by taking the “FRET ratio” using the mean fluorescence intensity (MFI) of cells measured at the acceptor channel, divided by the MFI of the donor channel. This type of FRET ratio is an observational metric only because full FRET assessment requires additional intensity-based FRET controls, as reported by Nagy et al. (34) and others (58).

The time-resolved cytometry measurements were performed with a retrofitted BD FACSVantage™ SE (BD Biosciences) cell sorter (Fig. 1). A 488-nm, 50 mW solid-state diode laser (Coherent Inc. OBIS, Santa Clara, CA) was used and digitally modulated at a sinusoidal radio frequency of 6.25 MHz (Tektronix AFG-3102 arbitrary function generator, Beaverton, OR). Side scattered light (SSC) was collected through a 488/10 nm band pass filter into a photomultiplier tube (PMT) detector (model: R1477-04, Hamamatsu Photonics, Lake Forest, CA). Fluorescence emission of the donor was detected using a 496 nm long pass filter and similar PMT detector. Signals from the PMTs were amplified (60 dB, AC-100, Advanced Research Instruments Corp., Bandon, OR) and digitized at 50 mega samples per second. Full cytometric waveforms were collected as were standard .fcs files which include the average fluorescence lifetime per cell as a parameter. Calibration with a known fluorescence lifetime is required for TRFC, which was achieved using Flow-Check™ fluorospheres (Beckman Coulter, CA), which have lifetimes reported to be 7 ns (59). After calibration, all settings remained constant for proceeding experiments.`)

  const nodeQuery = () => {
    axios.post('http://localhost:8080/data', {
      fields: fields,
      docText: docText
    })
    .then(response => {
      console.log('Data sent successfully:', response.data);
      axios.post('http://127.0.0.1:5050/extract-data',{
        input_text:response.data.documents,
        fields:response.data.fields
      })
      .then(response => {
        console.log('Data sent successfully:', response.data);
      })
    })
    .catch(error => {
      console.error('Error sending data:', error);
    });
  };

  const handleAddField = () => {
    setFields([...fields, { key: '', description: '', dataType: '' }]);
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
  const toggleLoading = () => {
    setLoading(!loading);
  };

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <header className="sticky top-0 z-40 w-full border-b bg-white px-4 py-3 sm:px-6 md:py-4">
        <div className="container mx-auto flex items-center justify-between">
          <a className="flex items-center gap-2" href="#" rel="ugc">
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
              className="h-6 w-6"
            >
              <path d="m8 3 4 8 5-5 5 15H2L8 3z"></path>
            </svg>
            <span className="text-lg font-bold">ABC</span>
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
      <main className="flex-1 py-8 sm:py-12 md:py-16">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6">
          <textarea className='rounded-lg border bg-card text-card-foreground shadow-sm w-[66.2vw]'/>
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
                          <option value="number">Number</option>
                          <option value="boolean">Boolean</option>
                          <option value="date">Date</option>
                        </select>
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
          <button onClick={toggleLoading} className="inline-flex gap-2 mr-10 bg-black text-white items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
            Upload <MdDriveFolderUpload size={17}/>
          </button>
          <button onClick={nodeQuery} className="inline-flex mt-9 gap-2 bg-black text-white items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
            Next <GrFormNextLink size={17}/>
          </button>
      <MultiStepLoader loadingStates={loadingStates} loading={loading} duration={3500} loop={false}/>
        </div>
      </main>
    </div>
  );
}

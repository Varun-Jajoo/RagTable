/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { MdDriveFolderUpload } from "react-icons/md";
import { GrFormNextLink } from "react-icons/gr";
import axios from "axios";
import { MultiStepLoader } from './Multiloader';

export default function Keys({ loading, nodeQuery }) {
  const predefinedFields = [
    { key: 'Apoptosis inducing agents', description: 'apoptosis triggering reagents', dataType: 'str' },
    { key: 'Cell incubation time', description: 'what is the cell incubation time', dataType: 'str' },
    { key: 'Flow cytometer instruments', description: 'name of the instrument used for flow cytometer analysis', dataType: 'str' },
    { key: 'Modulation frequency', description: 'modulation frequency', dataType: 'str' },
    { key: 'Fluorophore', description: 'what is fluorophore used for', dataType: 'str' }
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

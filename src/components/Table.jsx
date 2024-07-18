import React, { useState, useEffect, useRef } from 'react';
import "../App.css";

const TableComponent = ({ data, setVisible }) => {
  const [tableData, setTableData] = useState(data);
  const textAreaRefs = useRef([]);

  const handleInputChange = (index, event) => {
    const newData = [...tableData];
    newData[index].value = event.target.value;
    setTableData(newData);
  };

  useEffect(() => {
    tableData.forEach((item, index) => {
      const textarea = textAreaRefs.current[index];
      textarea.style.height = 'auto'; // Reset height
      textarea.style.height = textarea.scrollHeight + 'px'; // Set height to scrollHeight
    });
  }, [tableData]);

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-300">
        <thead className="bg-black text-white">
          <tr>
            <th className="text-left py-3 px-4 font-semibold text-sm border-b border-gray-300">No.</th>
            <th className="text-left py-3 px-4 uppercase font-semibold text-sm border-b border-gray-300">Key</th>
            <th className="text-left py-3 px-4 uppercase font-semibold text-sm border-b border-gray-300">Value</th>
          </tr>
        </thead>
        <tbody className="text-gray-700">
          {tableData.map((item, index) => (
            <tr key={index} className="bg-gray-100 border-b border-gray-300">
              <td className="text-left py-3 px-4 border-b border-gray-300">{index + 1}</td>
              <td className="text-left py-3 px-4 border-b border-gray-300">{item.key}</td>
              <td className="text-left py-3 px-4 border-b border-gray-300">
                <textarea
                  ref={(el) => (textAreaRefs.current[index] = el)}
                  value={item.value}
                  onChange={(e) => handleInputChange(index, e)}
                  className="border-none outline-none bg-transparent resize-none w-full"
                  style={{ minWidth: '70vw', maxWidth: '70vw', overflow: 'hidden' }}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={() => setVisible(false)} className="mt-4 px-4 py-2 bg-black text-white rounded">Back</button>
    </div>
  );
};

export default TableComponent;
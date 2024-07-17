import React from 'react';
import "../App.css"
const TableComponent = ({ data,setVisible }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-300">
        <thead className="bg-black text-white">
          <tr>
            <th className="text-left py-3 px-4  font-semibold text-sm border-b border-gray-300">No. </th>
            <th className="text-left py-3 px-4 uppercase font-semibold text-sm border-b border-gray-300">Key</th>
            <th className="text-left py-3 px-4 uppercase font-semibold text-sm border-b border-gray-300">Value</th>
          </tr>
        </thead>
        <tbody className="text-gray-700">
          {data.map((item, index) => (
            <tr key={index} className="bg-gray-100 border-b border-gray-300">
              <td className="text-left py-3 px-4 border-b border-gray-300">{index + 1}</td>
              <td className="text-left py-3 px-4 border-b border-gray-300">{item.key}</td>
              <td className="text-left py-3 px-4 border-b border-gray-300">{item.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={() => setVisible(false)}> Back </button>
    </div>
  );
};

export default TableComponent;
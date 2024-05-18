import React from 'react';

export default function DataViewSelector({ dataView, setDataView }) {
  return (
    <div>
      <label htmlFor="dataView">Select Data View: </label>
      <select id="dataView" value={dataView} onChange={(e) => setDataView(e.target.value)}>
        <option value="battery">Battery Level</option>
        <option value="status">Operational Status</option>
      </select>
    </div>
  );
}

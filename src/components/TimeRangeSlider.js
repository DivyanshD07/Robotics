import React from 'react';

export default function TimeRangeSlider({ timeRange, setTimeRange }) {
  return (
    <div>
      <label htmlFor="timeRange">Select Time Range (minutes): </label>
      <input
        id="timeRange"
        type="range"
        min="1"
        max="60"
        value={timeRange}
        onChange={(e) => setTimeRange(e.target.value)}
      />
      <span>{timeRange} minutes</span>
    </div>
  );
}

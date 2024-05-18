'use client';

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BatteryLevel from '../components/BatteryLevel';
import OperationalStatus from '../components/OperationalStatus';
import ActivityLogs from '../components/ActivityLogs';
import Charts from '../components/Charts';
import RefreshButton from '../components/RefreshButton';
import DataViewSelector from '../components/DataViewSelector';
import TimeRangeSlider from '../components/TimeRangeSlider';
import styles from '../styles/Home.module.css';

export default function Home() {
  const [batteryLevel, setBatteryLevel] = useState(null);
  const [operationalStatus, setOperationalStatus] = useState(null);
  const [activityLogs, setActivityLogs] = useState([]);
  const [dataView, setDataView] = useState('battery'); // default data view
  const [timeRange, setTimeRange] = useState(10); // default time range in minutes

  const fetchData = async () => {
    try {
      const batteryResponse = await axios.get('/api/battery-level');
      const statusResponse = await axios.get('/api/operational-status');
      const logsResponse = await axios.get('/api/recent-activity-logs');

      setBatteryLevel(batteryResponse.data.batteryLevel);
      setOperationalStatus(statusResponse.data.status);
      setActivityLogs(logsResponse.data.logs);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [dataView, timeRange]);

  return (
    <div className={styles.container}>
      <h1 className='flex text-center justify-center w-full font-bold text-2xl'>Robotic System Dashboard</h1>
      <RefreshButton refreshData={fetchData} />
      <DataViewSelector dataView={dataView} setDataView={setDataView} />
      <TimeRangeSlider timeRange={timeRange} setTimeRange={setTimeRange} />
      {dataView === 'battery' && <BatteryLevel level={batteryLevel} />}
      {dataView === 'status' && <OperationalStatus status={operationalStatus} />}
      <ActivityLogs logs={activityLogs} timeRange={timeRange} />
      <Charts logs={activityLogs} timeRange={timeRange} />
    </div>
  );
}

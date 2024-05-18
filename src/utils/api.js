import axios from 'axios';

export const fetchBatteryLevel = async () => {
  const response = await axios.get('/api/battery-level');
  return response.data;
};

export const fetchOperationalStatus = async () => {
  const response = await axios.get('/api/operational-status');
  return response.data;
};

export const fetchActivityLogs = async () => {
  const response = await axios.get('/api/recent-activity-logs');
  return response.data;
};

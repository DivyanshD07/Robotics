export default function ActivityLogs({ logs, timeRange }) {
  const currentTime = new Date().getTime();
  const filteredLogs = logs.filter(log => (currentTime - new Date(log.timestamp).getTime()) / 60000 <= timeRange);

  return (
    <div>
      <h2>Recent Activity Logs</h2>
      <ul>
        {filteredLogs.map((log, index) => (
          <li key={index}>{log.activity} (Battery Level: {log.batteryLevel}%)</li>
        ))}
      </ul>
    </div>
  );
}

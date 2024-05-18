export async function GET() {
  const now = new Date();
  const logInterval = 10 * 60 * 1000; // 10 minutes interval

  const logs = [
    {
      activity: 'Charging',
      batteryLevel: 25,
      timestamp: new Date(now.getTime() - logInterval * 3)
    },
    {
      activity: 'Idle',
      batteryLevel: 50,
      timestamp: new Date(now.getTime() - logInterval * 2)
    },
    {
      activity: 'Active',
      batteryLevel: 75,
      timestamp: new Date(now.getTime() - logInterval * 1)
    }
  ];

  return new Response(JSON.stringify({ logs }), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

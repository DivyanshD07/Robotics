export async function GET() {
  const now = new Date();
  const minutes = now.getMinutes();

  let batteryLevel;
  if (minutes < 20) {
    batteryLevel = 25;
  } else if (minutes < 40) {
    batteryLevel = 50;
  } else {
    batteryLevel = 75;
  }

  return new Response(JSON.stringify({ batteryLevel }), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

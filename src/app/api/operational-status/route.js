export async function GET() {
  const now = new Date();
  const minutes = now.getMinutes();

  let status;
  if (minutes < 20) {
    status = 'charging'; 
  } else if (minutes < 40) {
    status = 'idle'; 
  } else {
    status = 'active'; 
  }

  return new Response(JSON.stringify({ status }), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

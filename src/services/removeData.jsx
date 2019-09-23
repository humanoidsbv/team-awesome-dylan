async function removeData() {
  const response = await fetch('http://localhost:3000/time-entries', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify()
  });
  return response.json();
}

export default removeData;

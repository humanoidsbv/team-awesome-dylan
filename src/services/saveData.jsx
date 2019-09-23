async function saveData(newTimeEntry) {
  const response = await fetch('http://localhost:3000/time-entries', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newTimeEntry)
  });
  return response.json();
}

export default saveData;

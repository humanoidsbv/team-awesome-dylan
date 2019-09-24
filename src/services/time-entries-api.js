export async function fetchTimeEntries() {
  const response = await fetch(
    'http://localhost:3000/time-entries?_sort=startTimestamp&_order=desc'
  );
  return response.json();
}

export async function removeData(timeEntryId) {
  const response = await fetch(
    `http://localhost:3000/time-entries/${timeEntryId}`,
    {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    }
  );
  return response.json();
}

export async function saveData(newTimeEntry) {
  const response = await fetch('http://localhost:3000/time-entries', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newTimeEntry)
  });
  return response.json();
}

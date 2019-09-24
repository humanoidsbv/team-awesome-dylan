export async function fetchTimeEntries() {
  const response = await fetch(
    'http://localhost:3000/time-entries?_sort=startTimestamp&_order=desc'
  );
  return response.json();
}

export const deleteTimeEntry = timeEntryId => {
  fetch(`http://localhost:3000/time-entries/${timeEntryId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  });
};

export const postTimeEntry = newTimeEntry => {
  fetch('http://localhost:3000/time-entries', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newTimeEntry)
  });
};

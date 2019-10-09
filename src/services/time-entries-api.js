const apiUrl = `${
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000'
    : 'http://my-json-server.typicode.com/humanoidsbv/team-awesome-dylan-api'
}/time-entries`;

export async function fetchTimeEntries() {
  const response = await fetch(apiUrl);
  return response.json();
}

export const deleteTimeEntry = async timeEntryId => {
  const response = await fetch(`${apiUrl}/${timeEntryId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  });
  return response.json();
};

export const postTimeEntry = async newTimeEntry => {
  const response = await fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newTimeEntry)
  });
  return response.json();
};

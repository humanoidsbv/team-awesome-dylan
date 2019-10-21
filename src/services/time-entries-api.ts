const apiUrl = `${
  process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test'
    ? 'http://localhost:3000'
    : 'https://my-json-server.typicode.com/humanoidsbv/team-awesome-dylan-api'
}/time-entries?_sort=startTimestamp&_order=desc`;

export async function fetchTimeEntries(): Promise<{}> {
  const response = await fetch(apiUrl);
  return response.json();
}

export const deleteTimeEntry = async (timeEntryId: number): Promise<{}> => {
  const response = await fetch(`${apiUrl}/${timeEntryId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  });
  return response.json();
};

export const postTimeEntry = async (newTimeEntry: {}): Promise<{}> => {
  const response = await fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newTimeEntry)
  });
  return response.json();
};

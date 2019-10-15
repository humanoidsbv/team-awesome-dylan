const apiUrl = `${
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000'
    : 'https://my-json-server.typicode.com/humanoidsbv/team-awesome-dylan-api'
}/clients?_sort=clientName&_order=asc`;

export async function fetchClients(): Promise<{}> {
  const response = await fetch(apiUrl);
  return response.json();
}

export const postClient = async (newClient: {}): Promise<{}> => {
  const response = await fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newClient)
  });
  return response.json();
};

const apiUrl = `${
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000'
    : 'https://my-json-server.typicode.com/humanoidsbv/team-awesome-dylan-api'
}/clients`;

export async function fetchClients() {
  const response = await fetch(apiUrl);
  return response.json();
}

export const postClient = async newClient => {
  const response = await fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newClient)
  });
  return response.json();
};

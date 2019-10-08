export async function fetchClients() {
  const response = await fetch(
    'http://localhost:3000/clients?_sort=clientName&_order=asc'
  );
  return response.json();
}

export const postClient = async newClient => {
  const response = await fetch('http://localhost:3000/clients', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newClient)
  });
  return response.json();
};

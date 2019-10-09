const apiUrl = `${
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000'
    : 'http://my-json-server.typicode.com/humanoidsbv/team-awesome-dylan-api'
}/team-members`;

export async function fetchTeamMembers() {
  const response = await fetch(apiUrl);
  return response.json();
}

export const deleteTeamMember = async teamMemberId => {
  const response = await fetch(`${apiUrl}/${teamMemberId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  });
  return response.json();
};

export const postTeamMember = async newTeamMember => {
  const response = await fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newTeamMember)
  });
  return response.json();
};

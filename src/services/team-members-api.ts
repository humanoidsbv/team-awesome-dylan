const apiUrl = `${
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000'
    : 'https://my-json-server.typicode.com/humanoidsbv/team-awesome-dylan-api'
}/team-members?_sort=firstName&_order=asc`;

export async function fetchTeamMembers(): Promise<{}> {
  const response = await fetch(apiUrl);
  return response.json();
}

export const deleteTeamMember = async (teamMemberId: number): Promise<{}> => {
  const response = await fetch(`${apiUrl}/${teamMemberId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  });
  return response.json();
};

export const postTeamMember = async (newTeamMember: {}): Promise<{}> => {
  const response = await fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newTeamMember)
  });
  return response.json();
};

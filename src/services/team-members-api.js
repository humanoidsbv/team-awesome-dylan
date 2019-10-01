export async function fetchTeamMembers() {
  const response = await fetch(
    'http://localhost:3000/team-members?_sort=firstName&_order=asc'
  );
  return response.json();
}

export const deleteTeamMember = async teamMemberId => {
  const response = await fetch(
    `http://localhost:3000/team-members/${teamMemberId}`,
    {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    }
  );
  return response.json();
};

export const postTeamMember = async newTeamMember => {
  const response = await fetch('http://localhost:3000/team-members', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newTeamMember)
  });
  return response.json();
};

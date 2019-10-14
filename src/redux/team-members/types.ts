export interface TeamMemberInterface {
  firstName: string;
  lastName: string;
  id: number;
  employeeFunction: string;
  employeeNumber: string;
  currentClient: string;
  startingDate: string;
  emailAddress: string;
  address: string;
  postalCode: string;
  locality: string;
}

export interface TeamMembersStateInterface {
  items: TeamMemberInterface[];
  hasError: string;
  isLoading: boolean;
  sortDirection?: boolean;
  sortByField?: string;
}

export interface ActionInterface {
  type: string;
  payload?: any;
}
export interface TeamMembersStatePropsInterface {
  teamMembers: TeamMemberInterface[];
  sortDirection?: boolean;
}

export interface TeamMembersDispatchPropsInterface {
  createTeamMember: (newTeamMember) => ActionInterface;
  fetchTeamMembers: () => ActionInterface;
  sortTeamMembersByField: (string) => ActionInterface;
  sortTeamMembersDirection: (string) => ActionInterface;
}

export type TeamMembersProps = TeamMembersStatePropsInterface & TeamMembersDispatchPropsInterface

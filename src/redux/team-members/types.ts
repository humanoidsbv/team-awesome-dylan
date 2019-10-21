export interface TeamMemberInterface {
  address?: string;
  currentClient: string;
  emailAddress?: string;
  employeeFunction: string;
  employeeNumber: string;
  firstName: string;
  id?: number;
  key?: number;
  lastName: string;
  locality?: string;
  postalCode?: string;
  startingDate: string;
}

export interface TeamMembersStateInterface {
  hasError: string;
  isLoading: boolean;
  items: TeamMemberInterface[];
  sortByField?: string;
  sortDirection?: boolean;
}

export interface ActionInterface {
  payload?: any;
  type: string;
}
export interface TeamMembersStatePropsInterface {
  sortDirection?: boolean;
  teamMembers: TeamMemberInterface[];
}

export interface TeamMembersDispatchPropsInterface {
  createTeamMember: (newTeamMember: {}) => ActionInterface;
  fetchTeamMembers: () => ActionInterface;
  sortTeamMembersByField: (string: string) => ActionInterface;
  sortTeamMembersDirection: () => ActionInterface;
}

export type TeamMembersProps = TeamMembersStatePropsInterface & TeamMembersDispatchPropsInterface

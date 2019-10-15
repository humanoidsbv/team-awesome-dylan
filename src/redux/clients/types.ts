export interface ClientInterface {
  branch?: string;
  clientName: string;
  contactPerson?: string;
  contactPhoneNumber?: string;
  id?: number;
  key?: number;
  locality?: string;
  postalCode?: string;
}

export interface ClientsStateInterface {
  hasError: string;
  isLoading: boolean;
  items: ClientInterface[];
}

export interface ActionInterface {
  payload?: any;
  type: string;
}
export interface ClientsStatePropsInterface {
  clients: ClientInterface[];
}

export interface ClientsDispatchPropsInterface {
  createClient: (newClient: {}) => ActionInterface;
  fetchClients: () => ActionInterface;
}

export type ClientsProps = ClientsStatePropsInterface & ClientsDispatchPropsInterface

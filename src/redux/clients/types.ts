export interface ClientInterface {
  branch: string;
  clientName: string;
  contactPerson: string;
  contactPhoneNumber: string;
  id: number;
  locality: string;
  postalCode: string;
}

export interface ClientsStateInterface {
  items: ClientInterface[];
  hasError: string;
  isLoading: boolean;
}

export interface ActionInterface {
  type: string;
  payload?: any;
}
export interface ClientsStatePropsInterface {
  clients: ClientInterface[];
}

export interface ClientsDispatchPropsInterface {
  createClient: (newClient) => ActionInterface;
  fetchClients: () => ActionInterface;
}

export type ClientsProps = ClientsStatePropsInterface & ClientsDispatchPropsInterface

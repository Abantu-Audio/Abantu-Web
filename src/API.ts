/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateProspectInput = {
  id?: string | null,
  email: string,
  firstName?: string | null,
  lastName?: string | null,
  phoneNumber?: string | null,
  age?: string | null,
  location?: string | null,
  ethnicity?: string | null,
  genres?: Array< string | null > | null,
  createdAt?: string | null,
  updatedAt?: string | null,
  status: ProspectStatus,
  notes?: string | null,
};

export enum ProspectStatus {
  PENDING = "PENDING",
  CONTACTED = "CONTACTED",
  APPROVED = "APPROVED",
  REJECTED = "REJECTED",
}


export type ModelProspectConditionInput = {
  email?: ModelStringInput | null,
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  phoneNumber?: ModelStringInput | null,
  age?: ModelStringInput | null,
  location?: ModelStringInput | null,
  ethnicity?: ModelStringInput | null,
  genres?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  status?: ModelProspectStatusInput | null,
  notes?: ModelStringInput | null,
  and?: Array< ModelProspectConditionInput | null > | null,
  or?: Array< ModelProspectConditionInput | null > | null,
  not?: ModelProspectConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelProspectStatusInput = {
  eq?: ProspectStatus | null,
  ne?: ProspectStatus | null,
};

export type Prospect = {
  __typename: "Prospect",
  id: string,
  email: string,
  firstName?: string | null,
  lastName?: string | null,
  phoneNumber?: string | null,
  age?: string | null,
  location?: string | null,
  ethnicity?: string | null,
  genres?: Array< string | null > | null,
  createdAt: string,
  updatedAt: string,
  status: ProspectStatus,
  notes?: string | null,
};

export type UpdateProspectInput = {
  id: string,
  email?: string | null,
  firstName?: string | null,
  lastName?: string | null,
  phoneNumber?: string | null,
  age?: string | null,
  location?: string | null,
  ethnicity?: string | null,
  genres?: Array< string | null > | null,
  createdAt?: string | null,
  updatedAt?: string | null,
  status?: ProspectStatus | null,
  notes?: string | null,
};

export type DeleteProspectInput = {
  id: string,
};

export type ModelProspectFilterInput = {
  id?: ModelIDInput | null,
  email?: ModelStringInput | null,
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  phoneNumber?: ModelStringInput | null,
  age?: ModelStringInput | null,
  location?: ModelStringInput | null,
  ethnicity?: ModelStringInput | null,
  genres?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  status?: ModelProspectStatusInput | null,
  notes?: ModelStringInput | null,
  and?: Array< ModelProspectFilterInput | null > | null,
  or?: Array< ModelProspectFilterInput | null > | null,
  not?: ModelProspectFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelProspectConnection = {
  __typename: "ModelProspectConnection",
  items:  Array<Prospect | null >,
  nextToken?: string | null,
};

export type ModelStringKeyConditionInput = {
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelSubscriptionProspectFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  email?: ModelSubscriptionStringInput | null,
  firstName?: ModelSubscriptionStringInput | null,
  lastName?: ModelSubscriptionStringInput | null,
  phoneNumber?: ModelSubscriptionStringInput | null,
  age?: ModelSubscriptionStringInput | null,
  location?: ModelSubscriptionStringInput | null,
  ethnicity?: ModelSubscriptionStringInput | null,
  genres?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  status?: ModelSubscriptionStringInput | null,
  notes?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionProspectFilterInput | null > | null,
  or?: Array< ModelSubscriptionProspectFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type CreateProspectMutationVariables = {
  input: CreateProspectInput,
  condition?: ModelProspectConditionInput | null,
};

export type CreateProspectMutation = {
  createProspect?:  {
    __typename: "Prospect",
    id: string,
    email: string,
    firstName?: string | null,
    lastName?: string | null,
    phoneNumber?: string | null,
    age?: string | null,
    location?: string | null,
    ethnicity?: string | null,
    genres?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
    status: ProspectStatus,
    notes?: string | null,
  } | null,
};

export type UpdateProspectMutationVariables = {
  input: UpdateProspectInput,
  condition?: ModelProspectConditionInput | null,
};

export type UpdateProspectMutation = {
  updateProspect?:  {
    __typename: "Prospect",
    id: string,
    email: string,
    firstName?: string | null,
    lastName?: string | null,
    phoneNumber?: string | null,
    age?: string | null,
    location?: string | null,
    ethnicity?: string | null,
    genres?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
    status: ProspectStatus,
    notes?: string | null,
  } | null,
};

export type DeleteProspectMutationVariables = {
  input: DeleteProspectInput,
  condition?: ModelProspectConditionInput | null,
};

export type DeleteProspectMutation = {
  deleteProspect?:  {
    __typename: "Prospect",
    id: string,
    email: string,
    firstName?: string | null,
    lastName?: string | null,
    phoneNumber?: string | null,
    age?: string | null,
    location?: string | null,
    ethnicity?: string | null,
    genres?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
    status: ProspectStatus,
    notes?: string | null,
  } | null,
};

export type GetProspectQueryVariables = {
  id: string,
};

export type GetProspectQuery = {
  getProspect?:  {
    __typename: "Prospect",
    id: string,
    email: string,
    firstName?: string | null,
    lastName?: string | null,
    phoneNumber?: string | null,
    age?: string | null,
    location?: string | null,
    ethnicity?: string | null,
    genres?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
    status: ProspectStatus,
    notes?: string | null,
  } | null,
};

export type ListProspectsQueryVariables = {
  filter?: ModelProspectFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListProspectsQuery = {
  listProspects?:  {
    __typename: "ModelProspectConnection",
    items:  Array< {
      __typename: "Prospect",
      id: string,
      email: string,
      firstName?: string | null,
      lastName?: string | null,
      phoneNumber?: string | null,
      age?: string | null,
      location?: string | null,
      ethnicity?: string | null,
      genres?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
      status: ProspectStatus,
      notes?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ProspectsByEmailAndCreatedAtQueryVariables = {
  email: string,
  createdAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelProspectFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ProspectsByEmailAndCreatedAtQuery = {
  prospectsByEmailAndCreatedAt?:  {
    __typename: "ModelProspectConnection",
    items:  Array< {
      __typename: "Prospect",
      id: string,
      email: string,
      firstName?: string | null,
      lastName?: string | null,
      phoneNumber?: string | null,
      age?: string | null,
      location?: string | null,
      ethnicity?: string | null,
      genres?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
      status: ProspectStatus,
      notes?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateProspectSubscriptionVariables = {
  filter?: ModelSubscriptionProspectFilterInput | null,
};

export type OnCreateProspectSubscription = {
  onCreateProspect?:  {
    __typename: "Prospect",
    id: string,
    email: string,
    firstName?: string | null,
    lastName?: string | null,
    phoneNumber?: string | null,
    age?: string | null,
    location?: string | null,
    ethnicity?: string | null,
    genres?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
    status: ProspectStatus,
    notes?: string | null,
  } | null,
};

export type OnUpdateProspectSubscriptionVariables = {
  filter?: ModelSubscriptionProspectFilterInput | null,
};

export type OnUpdateProspectSubscription = {
  onUpdateProspect?:  {
    __typename: "Prospect",
    id: string,
    email: string,
    firstName?: string | null,
    lastName?: string | null,
    phoneNumber?: string | null,
    age?: string | null,
    location?: string | null,
    ethnicity?: string | null,
    genres?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
    status: ProspectStatus,
    notes?: string | null,
  } | null,
};

export type OnDeleteProspectSubscriptionVariables = {
  filter?: ModelSubscriptionProspectFilterInput | null,
};

export type OnDeleteProspectSubscription = {
  onDeleteProspect?:  {
    __typename: "Prospect",
    id: string,
    email: string,
    firstName?: string | null,
    lastName?: string | null,
    phoneNumber?: string | null,
    age?: string | null,
    location?: string | null,
    ethnicity?: string | null,
    genres?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
    status: ProspectStatus,
    notes?: string | null,
  } | null,
};

/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateProspect = /* GraphQL */ `subscription OnCreateProspect($filter: ModelSubscriptionProspectFilterInput) {
  onCreateProspect(filter: $filter) {
    id
    email
    firstName
    lastName
    phoneNumber
    age
    location
    ethnicity
    genres
    createdAt
    updatedAt
    status
    notes
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateProspectSubscriptionVariables,
  APITypes.OnCreateProspectSubscription
>;
export const onUpdateProspect = /* GraphQL */ `subscription OnUpdateProspect($filter: ModelSubscriptionProspectFilterInput) {
  onUpdateProspect(filter: $filter) {
    id
    email
    firstName
    lastName
    phoneNumber
    age
    location
    ethnicity
    genres
    createdAt
    updatedAt
    status
    notes
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateProspectSubscriptionVariables,
  APITypes.OnUpdateProspectSubscription
>;
export const onDeleteProspect = /* GraphQL */ `subscription OnDeleteProspect($filter: ModelSubscriptionProspectFilterInput) {
  onDeleteProspect(filter: $filter) {
    id
    email
    firstName
    lastName
    phoneNumber
    age
    location
    ethnicity
    genres
    createdAt
    updatedAt
    status
    notes
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteProspectSubscriptionVariables,
  APITypes.OnDeleteProspectSubscription
>;

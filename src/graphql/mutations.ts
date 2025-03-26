/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createProspect = /* GraphQL */ `
  mutation CreateProspect(
    $input: CreateProspectInput!
    $condition: ModelProspectConditionInput
  ) {
    createProspect(input: $input, condition: $condition) {
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
    }
  }
`;

export const updateProspect = /* GraphQL */ `mutation UpdateProspect(
  $input: UpdateProspectInput!
  $condition: ModelProspectConditionInput
) {
  updateProspect(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateProspectMutationVariables,
  APITypes.UpdateProspectMutation
>;
export const deleteProspect = /* GraphQL */ `mutation DeleteProspect(
  $input: DeleteProspectInput!
  $condition: ModelProspectConditionInput
) {
  deleteProspect(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteProspectMutationVariables,
  APITypes.DeleteProspectMutation
>;

/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getProspect = /* GraphQL */ `query GetProspect($id: ID!) {
  getProspect(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetProspectQueryVariables,
  APITypes.GetProspectQuery
>;
export const listProspects = /* GraphQL */ `query ListProspects(
  $filter: ModelProspectFilterInput
  $limit: Int
  $nextToken: String
) {
  listProspects(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListProspectsQueryVariables,
  APITypes.ListProspectsQuery
>;
export const prospectsByEmailAndCreatedAt = /* GraphQL */ `query ProspectsByEmailAndCreatedAt(
  $email: String!
  $createdAt: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelProspectFilterInput
  $limit: Int
  $nextToken: String
) {
  prospectsByEmailAndCreatedAt(
    email: $email
    createdAt: $createdAt
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ProspectsByEmailAndCreatedAtQueryVariables,
  APITypes.ProspectsByEmailAndCreatedAtQuery
>;

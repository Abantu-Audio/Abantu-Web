import { type ClientSchema, a, defineData } from '@aws-amplify/backend';

const schema = a.schema({
  Prospect: a
    .model({
      email: a.string().required(),
      firstName: a.string(),
      lastName: a.string(),
      phoneNumber: a.string(),
      status: a.enum(['PENDING', 'CONTACTED', 'APPROVED', 'REJECTED']),
      notes: a.string(),
    })
    .authorization(allow => [
      allow.owner().to(['create']),
      allow.authenticated().to(['read', 'update'])
    ]),
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: 'apiKey',
    apiKeyAuthorizationMode: {
      expiresInDays: 30,
    },
  },
}); 
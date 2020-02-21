const { uuid } = require('uuidv4');

const body = JSON.parse(request.body.replace(/[\r\n]+/gm, ''));
const { firstName, lastName, email } = body.profile;

module.exports = {
  profile: {
    memberId: uuid(),
    email,
    emailVerified: false,
    mobilePhone: '',
    mobileVerified: false,
    firstName,
    lastName,
    dateOfBirth: '',
    hashedSRF: '',
    surrogateId: '',
    isNewMember: true,
    accountStatus: 'STAGED',
    provider: 'OKTA',
    preferences: '[]',
    linkToId: '',
    linkFromId: '',
    linkedGroups: ['Startup Pack'],
    created: new Date().toISOString(),
    activated: null,
    lastUpdated: new Date().toISOString(),
    lastLogin: null,
    preferredLanguage: 'en',
  },
  communicationPreferences: [
    {
      communicationType: 'marketing',
      channel: 'email',
      isAccepted: false,
    },
  ],
};

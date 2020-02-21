const { uuid } = require('uuidv4');

module.exports = {
  profile: {
    memberId: uuid(),
    email: 'test@test.com',
    emailVerified: true,
    mobilePhone: '',
    mobileVerified: false,
    firstName: 'test',
    lastName: 'test',
    dateOfBirth: '',
    hashedSRF: '',
    surrogateId: '',
    isNewMember: false,
    accountStatus: 'ACTIVE',
    provider: 'OKTA',
    preferences: '[]',
    linkToId: '',
    linkFromId: '',
    linkedGroups: ['Startup Pack'],
    created: new Date().toISOString(),
    activated: new Date().toISOString(),
    lastUpdated: new Date().toISOString(),
    lastLogin: null,
    preferredLanguage: 'en',
  },
  communicationPreferences: null,
};

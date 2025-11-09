// /sanity/schemas/settings.ts
export default {
  name: 'settings',
  title: 'Settings',
  type: 'document',
  fields: [
    { name: 'businessName', type: 'string' },
    { name: 'phone', type: 'string' },
    { name: 'email', type: 'string' },
    { name: 'address', type: 'text' },
    { name: 'hours', type: 'string' },
    { name: 'localBusinessJsonLd', type: 'text' }
  ]
}

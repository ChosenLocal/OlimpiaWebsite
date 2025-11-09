// /sanity/schemas/city.ts
export default {
  name: 'city',
  title: 'City',
  type: 'document',
  fields: [
    { name: 'name', type: 'string' },
    { name: 'slug', type: 'slug', options: { source: 'name' } },
    { name: 'state', type: 'string', initialValue: 'OR' },
    { name: 'summary', type: 'text' },
    { name: 'locale', type: 'string', options: { list: ['en','es'] }, initialValue: 'en' }
  ]
}

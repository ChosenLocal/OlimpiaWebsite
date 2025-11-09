// /sanity/schemas/guide.ts
export default {
  name: 'guide',
  title: 'Guide/Article',
  type: 'document',
  fields: [
    { name: 'title', type: 'string' },
    { name: 'slug', type: 'slug', options: { source: 'title' } },
    { name: 'excerpt', type: 'text' },
    { name: 'body', type: 'array', of: [{ type: 'block' }] },
    { name: 'locale', type: 'string', options: { list: ['en','es'] }, initialValue: 'en' }
  ]
}

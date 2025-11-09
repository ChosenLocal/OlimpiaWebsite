// /sanity/schemas/faq.ts
export default {
  name: 'faq',
  title: 'FAQ',
  type: 'document',
  fields: [
    { name: 'question', type: 'string' },
    { name: 'answer', type: 'text' },
    { name: 'locale', type: 'string', options: { list: ['en','es'] }, initialValue: 'en' },
    { name: 'tags', type: 'array', of: [{ type: 'string' }] }
  ]
}

// /sanity/schemas/service.ts
export default {
  name: 'service',
  title: 'Service',
  type: 'document',
  fields: [
    { name: 'title', type: 'string' },
    { name: 'slug', type: 'slug', options: { source: 'title', maxLength: 96 } },
    { name: 'summary', type: 'text' },
    { name: 'body', type: 'array', of: [{ type: 'block' }] },
    { name: 'faqs', type: 'array', of: [{ type: 'reference', to: [{ type: 'faq' }] }] },
    { name: 'heroImage', type: 'image', options: { hotspot: true } },
    { name: 'locale', type: 'string', options: { list: ['en','es'] }, initialValue: 'en' }
  ]
}

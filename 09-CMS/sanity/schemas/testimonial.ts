// /sanity/schemas/testimonial.ts
export default {
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  fields: [
    { name: 'name', type: 'string' },
    { name: 'quote', type: 'text' },
    { name: 'rating', type: 'number' },
    { name: 'city', type: 'string' },
    { name: 'locale', type: 'string', options: { list: ['en','es'] }, initialValue: 'en' }
  ]
}

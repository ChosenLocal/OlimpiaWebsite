// /sanity/schemas/serviceCity.ts
export default {
  name: 'serviceCity',
  title: 'Service × City',
  type: 'document',
  fields: [
    { name: 'service', type: 'reference', to: [{ type: 'service' }] },
    { name: 'city', type: 'reference', to: [{ type: 'city' }] },
    { name: 'uniqueIntro', type: 'text' },
    { name: 'localFaqs', type: 'array', of: [{ type: 'reference', to: [{ type: 'faq' }] }] },
    {
      name: 'slug',
      type: 'slug',
      options: {
        source: (doc: any, opts: any) => `${opts.parent?.service}-${opts.parent?.city}`,
        slugify: (input: string) => input.toLowerCase().replace(/[^a-z0-9]+/g, '-').slice(0, 96)
      }
    },
    { name: 'locale', type: 'string', options: { list: ['en','es'] }, initialValue: 'en' }
  ]
}

// /sanity/schemas/lead.ts
export default {
  name: 'lead',
  title: 'Lead',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'phone',
      title: 'Phone',
      type: 'string',
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: (Rule: any) => Rule.required().email()
    },
    {
      name: 'zip',
      title: 'ZIP Code',
      type: 'string',
      validation: (Rule: any) => Rule.required().length(5)
    },
    {
      name: 'service',
      title: 'Service Requested',
      type: 'string',
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'message',
      title: 'Message',
      type: 'text',
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'locale',
      title: 'Language',
      type: 'string',
      options: {
        list: [
          { title: 'English', value: 'en' },
          { title: 'Spanish', value: 'es' }
        ]
      },
      initialValue: 'en'
    },
    {
      name: 'source',
      title: 'Source',
      type: 'string',
      description: 'Where the lead came from (e.g., website_contact_form, callback_button)',
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          { title: 'New', value: 'new' },
          { title: 'Contacted', value: 'contacted' },
          { title: 'Qualified', value: 'qualified' },
          { title: 'Converted', value: 'converted' },
          { title: 'Lost', value: 'lost' }
        ]
      },
      initialValue: 'new'
    },
    {
      name: 'userAgent',
      title: 'User Agent',
      type: 'string',
      readOnly: true
    },
    {
      name: 'ip',
      title: 'IP Address',
      type: 'string',
      readOnly: true
    },
    {
      name: 'createdAt',
      title: 'Created At',
      type: 'datetime',
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'notes',
      title: 'Internal Notes',
      type: 'array',
      of: [{ type: 'block' }]
    }
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'email',
      status: 'status'
    },
    prepare(selection: any) {
      const { title, subtitle, status } = selection
      return {
        title: title,
        subtitle: `${subtitle} - Status: ${status}`
      }
    }
  },
  orderings: [
    {
      title: 'Newest First',
      name: 'newestFirst',
      by: [{ field: 'createdAt', direction: 'desc' }]
    },
    {
      title: 'Oldest First',
      name: 'oldestFirst',
      by: [{ field: 'createdAt', direction: 'asc' }]
    }
  ]
}

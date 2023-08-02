import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'organizations',
  title: 'Organizations',
  type: 'document',
  fields: [
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    }),

    defineField({
      title: 'Organizations',
      type: 'array',
      name: 'organizations',
      of: [
        {
          type: 'object',
          name: 'organization',
          fields: [
            {type: 'image', name: 'image'},
            {type: 'string', name: 'organization'},
            {type: 'array', name: 'description', of: [{type: 'block'}]},
          ],
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'organization',
      // media: 'image',
    },
  },
})

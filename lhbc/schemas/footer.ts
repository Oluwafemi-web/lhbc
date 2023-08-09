import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'footer',
  title: 'Footer',
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
      title: 'About Us',
      type: 'array',
      name: 'aboutus',
      of: [
        {
          type: 'object',
          name: 'aboutus',
          fields: [{type: 'array', name: 'description', of: [{type: 'block'}]}],
        },
      ],
    }),
    defineField({
      title: 'Quick Links',
      type: 'array',
      name: 'quicklinks',
      of: [
        {
          type: 'object',
          name: 'event',
          fields: [{type: 'string', name: 'title'}],
        },
      ],
    }),
    defineField({
      title: 'Updates',
      type: 'array',
      name: 'updates',
      of: [
        {
          type: 'object',
          name: 'event',
          fields: [
            {type: 'image', name: 'image'},
            {type: 'string', name: 'heading'},
            {type: 'string', name: 'date'},
          ],
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'home',
      // media: 'image',
    },
  },
})

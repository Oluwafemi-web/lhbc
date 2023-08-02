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
          fields: [
            // {type: 'array', name: 'heading', of: [{type: 'block'}]},
            // {type: 'array', name: 'subheding', of: [{type: 'block'}]},
            {type: 'array', name: 'description', of: [{type: 'block'}]},
            // {type: 'image', name: 'image'},
          ],
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
          fields: [
            {type: 'string', name: 'title'},
            // {type: 'string', name: 'time'},
            // {type: 'array', name: 'description', of: [{type: 'block'}]},
            // {type: 'image', name: 'image'},
          ],
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
            // {type: 'array', name: 'description', of: [{type: 'block'}]},
            {type: 'string', name: 'date'},
            // {type: 'string', name: 'time'},
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

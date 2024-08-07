import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'about',
  title: 'About',
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
      title: 'Banner',
      type: 'array',
      name: 'banner',
      of: [
        {
          type: 'object',
          name: 'banner',
          fields: [
            {type: 'image', name: 'image'},
            {type: 'image', name: 'mobileimage'},
            {type: 'string', name: 'pagetitle'},
          ],
        },
      ],
    }),
    defineField({
      title: 'About Us',
      type: 'array',
      name: 'aboutus',
      of: [
        {
          type: 'object',
          name: 'event',
          fields: [
            {type: 'image', name: 'image'},
            {type: 'array', name: 'heading', of: [{type: 'block'}]},
            {type: 'array', name: 'description', of: [{type: 'block'}]},

          ],
        },
      ],
    }),
    defineField({
      title: 'Pastor and wife',
      type: 'image',
      name: 'pastorandwife',
    }),

    defineField({
      title: 'Deacons',
      type: 'image',
      name: 'deacons',

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
      title: 'About',
      // media: 'image',
    },
  },
})

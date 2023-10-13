import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'contacts',
  title: 'Contacts',
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
      title: 'Contact Us',
      type: 'array',
      name: 'contactus',
      of: [
        {
          type: 'object',
          name: 'contact',
          fields: [
            {type: 'string', name: 'title'},
            {type: 'image', name: 'bannerimage'},
            {type: 'image', name: 'mobileimage'},
            {type: 'array', name: 'numbers', of: [{type: 'string'}]},
            {type: 'email', name: 'email'},
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

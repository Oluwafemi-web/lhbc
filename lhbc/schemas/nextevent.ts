import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'nextevent',
  title: 'Next Event',
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
      title: 'Event Name',
      type: 'string',
      name: 'name',
    }),
    defineField({
      title: 'Date',
      type: 'date',
      name: 'date',
    }),
  ],
  preview: {
    select: {
      title: 'About',
      // media: 'image',
    },
  },
})

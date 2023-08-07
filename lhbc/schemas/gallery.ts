import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'gallery',
  title: 'Sermon',
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
            {type: 'string', name: 'pagetitle'},
          ],
        },
      ],
    }),
    defineField({
      title: 'Messages',
      type: 'array',
      name: 'sermons',
      of: [
        {
          type: 'object',
          name: 'event',
          fields: [
            {type: 'image', name: 'image'},
            {type: 'string', name: 'title'},
            {type: 'string', name: 'preacher'},
            {type: 'string', name: 'date'},
            {type: 'string', name: 'category'},
            {type: 'array', name: 'description', of: [{type: 'block'}]},
            {type: 'file', name: 'audio'},
          ],
        },
      ],
    }),
    defineField({
      title: 'Years',
      type: 'array',
      name: 'years',
      of: [
        {
          type: 'object',
          name: 'event',
          fields: [{type: 'string', name: 'year'}],
        },
      ],
    }),
    defineField({
      title: 'Category',
      type: 'array',
      name: 'category',
      of: [
        {
          type: 'object',
          name: 'event',
          fields: [{type: 'string', name: 'category'}],
        },
      ],
    }),
    defineField({
      title: 'Next Event',
      type: 'array',
      name: 'nextevent',
      of: [
        {
          type: 'object',
          name: 'donate',
          fields: [
            {type: 'image', name: 'image'},
            {type: 'string', name: 'title'},
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
      title: 'About',
      // media: 'image',
    },
  },
})

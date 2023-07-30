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
            {type: 'string', name: 'date'},
            {type: 'string', name: 'time'},
          ],
        },
      ],
    }),
    defineField({
      title: 'Donate',
      type: 'array',
      name: 'donate',
      of: [
        {
          type: 'object',
          name: 'donate',
          fields: [
            {type: 'image', name: 'image'},
            {type: 'array', name: 'heading', of: [{type: 'block'}]},
            {type: 'array', name: 'description', of: [{type: 'block'}]},
            // {type: 'string', name: 'date'},
            // {type: 'string', name: 'time'},
          ],
        },
      ],
    }),
    defineField({
      title: 'Todays Sermon',
      type: 'array',
      name: 'sermon',
      of: [
        {
          type: 'object',
          name: 'sermon',
          fields: [
            // {type: 'image', name: 'image'},
            {type: 'string', name: 'title'},
            {type: 'string', name: 'minister'},
            {type: 'string', name: 'date'},
            {type: 'array', name: 'description', of: [{type: 'block'}]},
          ],
        },
      ],
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
    defineField({
      title: 'Get In Touch',
      type: 'array',
      name: 'getintouch',
      of: [
        {
          type: 'object',
          name: 'event',
          fields: [
            {type: 'string', name: 'number'},
            {type: 'string', name: 'email'},
            {type: 'array', name: 'address', of: [{type: 'block'}]},
            {type: 'string', name: 'heading'},
            {type: 'array', name: 'description', of: [{type: 'block'}]},
            {type: 'image', name: 'image'},
            // {type: 'array', name: 'heading', of: [{type: 'block'}]},
            // {type: 'string', name: 'date'},
            // {type: 'string', name: 'time'},
          ],
        },
      ],
    }),
    defineField({
      title: 'Blog',
      type: 'array',
      name: 'blog',
      of: [
        {
          type: 'object',
          name: 'event',
          fields: [
            {type: 'image', name: 'image'},
            {type: 'array', name: 'heading', of: [{type: 'block'}]},
            {type: 'string', name: 'date'},
            // {type: 'array', name: 'description', of: [{type: 'block'}]},
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

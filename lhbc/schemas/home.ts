import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'home',
  title: 'Home',
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
      title: 'Carousel Slides',
      type: 'array',
      name: 'carousel',
      of: [
        {
          type: 'object',
          name: 'slide',
          fields: [
            {type: 'array', name: 'heading', of: [{type: 'block'}]},
            {type: 'array', name: 'subheading', of: [{type: 'block'}]},
            {type: 'array', name: 'description', of: [{type: 'block'}]},
            {type: 'image', name: 'image'},
          ],
        },
      ],
    }),
    defineField({
      title: 'Upcoming Events',
      type: 'array',
      name: 'upcomingevents',
      of: [
        {
          type: 'object',
          name: 'event',
          fields: [
            {type: 'string', name: 'date'},
            {type: 'string', name: 'time'},
            {type: 'text', name: 'name'},
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
      title: 'About Key points',
      type: 'array',
      name: 'aboutkeys',
      of: [
        {
          type: 'object',
          name: 'event',
          fields: [
            {type: 'string', name: 'heading'},
            {type: 'array', name: 'description', of: [{type: 'block'}]},
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
            {type: 'string', name: 'title'},
            {type: 'string', name: 'minister'},
            {type: 'string', name: 'date'},
            {type: 'array', name: 'description', of: [{type: 'block'}]},
            {type: 'image', name: 'image'},
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

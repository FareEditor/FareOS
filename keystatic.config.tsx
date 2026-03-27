import { config, fields, singleton } from '@keystatic/core';

export default config({
  storage: process.env.NODE_ENV === 'production'
    ? {
        kind: 'github',
        repo: 'FareEditor/FareOS',
      }
    : {
        kind: 'local',
      },
  singletons: {
    portfolio: singleton({
      label: 'Portfolio',
      path: 'data/portfolio',
      format: { data: 'json' },
      schema: {
        fullLength: fields.array(
          fields.object({
            id: fields.slug({ name: { label: 'ID' } }),
            title: fields.text({ label: 'Title' }),
            titleRu: fields.text({ label: 'Title (RU)' }),
            subtitle: fields.text({ label: 'Subtitle' }),
            subtitleRu: fields.text({ label: 'Subtitle (RU)' }),
            difficulty: fields.select({
              label: 'Difficulty',
              options: [
                { label: 'Easy', value: 'easy' },
                { label: 'Medium', value: 'medium' },
                { label: 'Hard', value: 'hard' },
              ],
              defaultValue: 'medium',
            }),
            text: fields.text({ label: 'Text', multiline: true }),
            textRu: fields.text({ label: 'Text (RU)', multiline: true }),
            url: fields.text({ label: 'YouTube URL' }),
            thumbnail: fields.image({
              label: 'Thumbnail',
              directory: 'public/pic/',
              publicPath: '/pic/',
            }),
          }),
          {
            label: 'Full-Length Videos',
            itemLabel: (props) => props.fields.title.value || 'Untitled Video',
          }
        ),
        vertical: fields.array(
          fields.object({
            id: fields.slug({ name: { label: 'ID' } }),
            title: fields.text({ label: 'Title' }),
            titleRu: fields.text({ label: 'Title (RU)' }),
            subtitle: fields.text({ label: 'Subtitle' }),
            subtitleRu: fields.text({ label: 'Subtitle (RU)' }),
            difficulty: fields.select({
              label: 'Difficulty',
              options: [
                { label: 'Easy', value: 'easy' },
                { label: 'Medium', value: 'medium' },
                { label: 'Hard', value: 'hard' },
              ],
              defaultValue: 'medium',
            }),
            text: fields.text({ label: 'Text', multiline: true }),
            textRu: fields.text({ label: 'Text (RU)', multiline: true }),
            url: fields.text({ label: 'YouTube URL' }),
            thumbnail: fields.image({
              label: 'Thumbnail',
              directory: 'public/pic/',
              publicPath: '/pic/',
            }),
          }),
          {
            label: 'Vertical Videos',
            itemLabel: (props) => props.fields.title.value || 'Untitled Video',
          }
        ),
        motionGraphics: fields.array(
          fields.object({
            id: fields.slug({ name: { label: 'ID' } }),
            title: fields.text({ label: 'Title' }),
            titleRu: fields.text({ label: 'Title (RU)' }),
            subtitle: fields.text({ label: 'Subtitle' }),
            subtitleRu: fields.text({ label: 'Subtitle (RU)' }),
            difficulty: fields.select({
              label: 'Difficulty',
              options: [
                { label: 'Easy', value: 'easy' },
                { label: 'Medium', value: 'medium' },
                { label: 'Hard', value: 'hard' },
              ],
              defaultValue: 'medium',
            }),
            text: fields.text({ label: 'Text', multiline: true }),
            textRu: fields.text({ label: 'Text (RU)', multiline: true }),
            url: fields.text({ label: 'YouTube URL' }),
            thumbnail: fields.image({
              label: 'Thumbnail',
              directory: 'public/pic/',
              publicPath: '/pic/',
            }),
          }),
          {
            label: 'Motion Graphics',
            itemLabel: (props) => props.fields.title.value || 'Untitled Video',
          }
        ),
      },
    }),
  },
});

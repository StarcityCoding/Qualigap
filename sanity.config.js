import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  basePath: "/studio",
  name: 'QUALIGAP_Content_Studio',
  title: 'QUALIGAP Content Studio',

  projectId: '1hy9ft0i',
  dataset: 'production',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})

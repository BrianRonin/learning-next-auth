import file_name from './file_name.mjs'
import TransformComponent from './template.mjs'

const getPaths_component = (whatIs, skip) => {
  const name_folder = file_name.folder(
    'n_a_m_e'.replace(/_/g, ''),
  )
  return {
    type: 'add',
    templateFile:
      'plop/plops/template_react/{{ isTs }}/generator/' +
      whatIs +
      '.hbs',
    path: '{{ group }}'
      ? `src/templates/{{ constantCase group }}/${name_folder}/` +
        file_name[whatIs]('na' + 'me')
      : `./src/templates/${name_folder}/` +
        file_name[whatIs]('na' + 'me'), //diretorio destiono
    transform: (doc) => TransformComponent[whatIs](doc),
    skip: () => (skip ? false : '-SKIP ' + whatIs),
  }
}

export default [
  {
    ...getPaths_component('stories', '{{ hasStorybook }}'),
  },
  {
    ...getPaths_component('index', '{{ name }}'),
  },
  {
    ...getPaths_component('styles', '{{ name }}'),
  },
  {
    ...getPaths_component('mock', '{{ hasMock }}'),
  },
  {
    ...getPaths_component('test', '{{ hasTest }}'),
  },
]

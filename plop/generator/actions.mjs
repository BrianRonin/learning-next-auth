import filenames from './filenames.mjs'
import Transform from './template.mjs'
// const skip__ = () => (skip ? false : '-SKIP ' + whatIs)
const getPaths = (
  whatIs,
  skip,
  path = '',
  value = false,
) => {
  const name_folder = filenames.folder(
    'n_a_m_e'.replace(/_/g, ''),
  )
  return {
    type: 'add',
    templateFile:
      'plop/generator/template/generator/' +
      whatIs +
      '.hbs',
    path:
      `plop/plops/${name_folder}/` +
      path +
      filenames[whatIs](value ? value : 'na' + 'me'), //diretorio destiono
    transform: (doc) => Transform[whatIs](doc),
    skip: skip,
  }
}

const getMany = (type) => {
  const handleBars = ', , , , , , , , , , , , , , , , , , ,'
  const y = handleBars
  const x = y
  return x.split(',').map((file, i) => {
    return {
      ...getPaths(
        type,
        (answers) =>
          answers['_' + i + '_'] ? false : '--',
        `template/${type}/`,
        `_${i.toString()}_`,
      ),
    }
  })
}
export default [
  {
    ...getPaths('actions', () => false),
  },
  {
    ...getPaths('filenames', () => false),
  },
  {
    ...getPaths('prompts', () => false),
  },
  {
    ...getPaths('settings', () => false),
  },
  {
    ...getPaths('template', () => false),
  },
  ...getMany('generator'),
  ...getMany('transform'),
]

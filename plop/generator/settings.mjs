import Cases from '../utils/cases.mjs'
import file_name from './filenames.mjs'
// ! only support camelCase, snakeCase, properCase, constantCase
//*  camelCase: changeFormatToThis
//*  snakeCase: change_format_to_this
//*  dashCase: change-format-to-this
//*  dotCase: change.format.to.this
//*  pathCase: change/format/to/this
//*  properCase: ChangeFormatToThis
//*  lowerCase: change format to this
//*  sentenceCase: Change Format To this
//*  constantCase: CHANGE_FORMAT_TO_THIS
//*  titleCase: Change Format To This

// ************* COMPONENTS ****************** //

export default (var_) => {
  const c = Cases('__', {
    name: '{{ snakeCase __ }}',
    files: '{{ snakeCase __ }}',
    inputs: '{{ snakeCase __ }}',
    cases: '{{ snakeCase __ }}',
    transform_files: 'transform_{{ snakeCase __ }}',
  })

  return {
    custom: {
      //
    },
    input: {
      name: var_.name,
      files: var_.files,
      inputs: var_.inputs,
    },
    config: {
      // ** Actions
      getPaths: {
        input: [var_.files.split(','), 'files'],
        default: `\n\t{\n\t\t...getPaths('${c.files(
          'files',
        )}', () => false),\n\t},`,
        spaces: {
          start: '{{}}',
          between: '{{}}',
          end: '{{}}',
          onlyOne: '{{}}',
        },
      },
      // ** Filenames
      fileNames: {
        input: [var_.files.split(','), 'files'],
        default: `\n\t${c.files(
          'files',
        )}: '{{ snakeCase __ }}',`,
        spaces: {
          start: `\n\tfolder: '{{ snakeCase }}',{{}}`,
          between: '{{}}',
          end: '{{}}',
          onlyOne: '{{}}',
        },
      },
      // ** Template
      importTransform: {
        input: [var_.files.split(','), 'files'],
        default: `\nimport ${c.transform_files(
          'files',
        )} from './template/transform/${c.files(
          'files',
        )}.mjs'`,
        spaces: {
          start: '{{}}',
          between: '{{}}',
          end: '{{}}',
          onlyOne: '{{}}',
        },
      },
      transform: {
        input: [var_.files.split(','), 'files'],
        default: `\tstatic ${c.files(
          'files',
        )}(doc) {\n\t\treturn ${c.transform_files(
          'files',
        )}(doc, Transform)\n\t}`,
        spaces: {
          start: '{{}}\n\n',
          between: '{{}}\n\n',
          end: '{{}}',
          onlyOne: '{{}}',
        },
      },
      inputsTransform: {
        input: [var_.inputs.split(','), 'inputs'],
        default: `\n\t\t${c.inputs('inputs')}: '',`,
        spaces: {
          start: '{{}}',
          between: '{{}}',
          end: '{{}}',
          onlyOne: '{{}}',
        },
      },
      hasInputs: {
        input: [var_.inputs.split(','), 'inputs'],
        default: `\n\t\thas${c.inputs('inputs')}: false,`,
        spaces: {
          start: '{{}}',
          between: '{{}}',
          end: '{{}}',
          onlyOne: '{{}}',
        },
      },
      // ** Settings
      cases: {
        input: [var_.inputs.split(','), 'inputs'],
        default: `\n\t\t${c.cases(
          'inputs',
        )}: '{{ snakeCase __ }}',`,
        spaces: {
          start: `\n\t\tname: '{{ snakeCase __ }}',{{}}`,
          between: '{{}}',
          end: '{{}}',
          onlyOne: `\n\t\tname: '{{ snakeCase __ }}',{{}}`,
        },
      },
      inputsSettings: {
        input: [var_.inputs.split(','), 'inputs'],
        default: `\n\t\t\t${c.inputs(
          'inputs',
        )}: var_.${c.inputs('inputs')},`,
        spaces: {
          start: '{{}}',
          between: '{{}}',
          end: '{{}}',
          onlyOne: '{{}}',
        },
      },
      commentsSettings: {
        input: [var_.files.split(','), 'files'],
        default: `\n\t\t\t// ** ${c.files('files')}`,
        spaces: {
          start: '{{}}',
          between: '{{}}',
          end: '{{}}',
          onlyOne: '{{}}',
        },
      },
      // ** Prompts
      inputsPrompt: {
        input: [var_.inputs.split(','), 'inputs'],
        default: `
  {
    type: 'input',
    name: '${c.inputs('inputs')}',
    message: '${c.inputs('inputs')}: ',
    filter: (input) => {
      Transform.var.${c.inputs('inputs')} = input
      Transform.var.has${c.inputs('inputs')} = !!input
      return input
    },
  },`,
        spaces: {
          start: '{{}}',
          between: '{{}}',
          end: '{{}}',
          onlyOne: '{{}}',
        },
      },
    },
  }
}

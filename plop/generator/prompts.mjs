import case_modifiers from '../utils/case_modifiers.mjs'
import Transform from './template.mjs'

export default [
  {
    type: 'input',
    name: 'name',
    message: 'qual o nome do plop?',
    filter: (input, answers) => {
      Transform.var.name = input
      return input
    },
  },
  {
    type: 'input',
    name: 'files',
    message: 'quais arquivos você criara',
    filter: (input, answers) => {
      Transform.var.files = input
      input.split(',').forEach((_input, i) => {
        const input = case_modifiers.snakeCase(_input)
        answers[`_${i.toString()}_`] = input
      })
      return input
    },
  },
  {
    type: 'input',
    name: 'inputs',
    message: 'quais inputs para criação',
    filter: (input, answers) => {
      Transform.var.inputs = input
      Transform.var.hasInputs = !!input
      return input
    },
  },
  // {
  //   type: 'input',
  //   message: 'O componente faz parte de um grupo?',
  //   prefix: 'components/',
  //   filter: (input, answers) => {
  //     if (input) {
  //       const path = input.replace(' ', '/')
  //       Transform.var.hasGroup = true
  //       Transform.var.group = path
  //       answers.titleStorybook =
  //         'components/' + path + '/' + answers.name
  //       return input
  //     } else {
  //       answers.titleStorybook =
  //         'components/' + answers.name
  //       return input
  //     }
  //   },
  //   name: 'group',
  // },
  // {
  //   type: 'input',
  //   name: 'htmlElement',
  //   message: 'qual o elemento HTML do Main?',
  // },
  // {
  //   type: 'checkbox',
  //   message: 'Seu componente tem?',
  //   name: 'components_choices',
  //   choices: [
  //     'Mock',
  //     'Chield',
  //     'Props',
  //     'Typescript',
  //     'Test',
  //     'Storybook',
  //   ],
  //   filter: (x, r) => {
  //     if (x.indexOf('Mock') > -1) {
  //       Transform.var.hasMock = true
  //       r.hasMock = 'true'
  //     }
  //     if (x.indexOf('Props') > -1) {
  //       Transform.var.hasProps = true
  //       r.hasProps = 'true'
  //     }
  //     if (x.indexOf('Test') > -1) {
  //       Transform.var.hasTest = true
  //       r.hasTest = 'true'
  //     }
  //     if (x.indexOf('Storybook') > -1) {
  //       Transform.var.hasStorybook = true
  //       r.hasStorybook = 'true'
  //     }
  //     if (x.indexOf('Chield') > -1)
  //       Transform.var.hasChield = true
  //     if (x.indexOf('Typescript') > -1) {
  //       r.isTs = 'ts'
  //     } else {
  //       r.isTs = 'js'
  //     }
  //     return x
  //   },
  // },
  // {
  //   when: (answer) => answer.hasProps,
  //   type: 'input',
  //   message:
  //     'Qual suas props?\nDivisor: ", "\nOpcional: "_"\n Component: "#"',
  //   name: 'props',
  //   filter: (input, r) => {
  //     input.match(/#/) &&
  //       (Transform.var.hasPropComponent = true)
  //     input.match(/@/) &&
  //       (Transform.var.hasTypeStyle = true)
  //     Transform.var.props = input
  //     return input
  //   },
  // },
]

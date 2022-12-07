import build from '../config/formater.mjs'
import config from './settings.mjs'
import transform_actions from './template/transform/actions.mjs'
import transform_filenames from './template/transform/filenames.mjs'
import transform_prompts from './template/transform/prompts.mjs'
import transform_settings from './template/transform/settings.mjs'
import transform_template from './template/transform/template.mjs'
import transform_generator from './template/transform/generator.mjs'
import transform_transform from './template/transform/transform.mjs'

export default class Transform {
  static var = {
    name: '',
    files: '',
    inputs: '',
    hasInputs: false,
    filesLength: 0,
  }

  static get start() {
    let resolve
    try {
      resolve = build(config(this.var))
    } catch (e) {
      resolve = e
    }
    return resolve
  }

  // static state(onlyChield, onlyArg, both, anything) {
  //   const isFunc = (x) =>
  //     typeof x === 'function' ? x() : x
  //   return this.var.hasChield || this.var.props
  //     ? this.var.hasChield && this.var.props
  //       ? isFunc(both)
  //       : this.var.props
  //       ? isFunc(onlyArg)
  //       : isFunc(onlyChield)
  //     : isFunc(anything)
  // }

  static actions(doc) {
    return transform_actions(doc, Transform)
  }

  static filenames(doc) {
    return transform_filenames(doc, Transform)
  }

  static prompts(doc) {
    return transform_prompts(doc, Transform)
  }

  static settings(doc) {
    return transform_settings(doc, Transform)
  }

  static template(doc) {
    return transform_template(doc, Transform)
  }

  static generator(doc) {
    return transform_generator(doc, Transform)
  }

  static transform(doc) {
    return transform_transform(doc, Transform)
  }
}

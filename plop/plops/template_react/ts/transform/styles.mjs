export default (x, t) => {
  const {
    type_style,
    prop_type_style,
    custom: { css_in_js },
  } = t.start
  let doc = x

  doc = doc.replace(
    /__import__/,
    css_in_js.match(/styled components/i)
      ? "\nimport styled, { css } from 'styled-components'"
      : css_in_js.match(/emotion/i)
      ? "\nimport { css } from '@emotion/react'\nimport styled from '@emotion/styled'"
      : '\n// você precisa escolher um tipo de css_in_js no projeto em settings\n// css_in_js: ' +
        JSON.stringify(css_in_js),
  )

  doc = doc.replace(
    /__prop_style__/,
    t.var.hasTypeStyle
      ? `\ntype ${type_style} = ${prop_type_style}`
      : '',
  )
  doc = doc.replace(
    /__type_style__/,
    t.var.hasTypeStyle ? `<${type_style}>` : '',
  )
  doc = doc.replace(
    /__importType__/,
    t.var.hasTypeStyle ? `<${type_style}>` : '',
  )
  return doc
}

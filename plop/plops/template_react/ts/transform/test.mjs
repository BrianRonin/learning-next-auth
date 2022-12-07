export default (x, t) => {
  const { import_mock, name_mock, import_component } =
    t.start
  let doc = x
  doc = doc.replace(
    /__importMock__/,
    t.var.hasMock ? import_mock : '',
  )
  doc = doc.replace(
    /__hasMock__/,
    t.var.hasMock ? '{ ...' + name_mock + ' }' : '',
  )
  t.var.hasGroup &&
    (doc = doc.replace(
      /..\/..\/styles\/render-theme/,
      '../../../styles/render-theme',
    ))
  doc = doc.replace(/__importComponent__/, import_component)
  return doc
}

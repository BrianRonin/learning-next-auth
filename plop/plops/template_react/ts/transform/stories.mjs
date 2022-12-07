export default (x, t) => {
  const {
    import_mock,
    name_mock,
    import_component_and_type,
  } = t.start
  let doc = x
  doc = doc.replace(
    /__importMock__/,
    t.var.hasMock ? import_mock : '',
  )
  doc = doc.replace(
    /__hasMock__/,
    t.var.hasMock
      ? name_mock
      : t.state(
          '{\n\tchildren: <h1>tudo ok<h1>,\n\t},',
          '{},',
          '{\n\tchildren: <h1>tudo ok<h1>,\n\t},',
          '{},',
        ),
  )

  doc = doc.replace(
    /__importComponentAndType__/,
    import_component_and_type,
  )
  return doc
}

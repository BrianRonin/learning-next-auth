export default (x, t) => {
  const {
    importTransform,
    transform,
    inputsTransform,
    hasInputs,
  } = t.start
  let doc = x
  doc = doc.replace(/__import_transform__/, importTransform)
  doc = doc.replace(/__transform__/, transform)
  doc = doc.replace(
    /__inputs__/,
    t.var.hasInputs ? inputsTransform : '',
  )
  doc = doc.replace(
    /__hasInputs__/,
    t.var.hasInputs ? hasInputs : '',
  )
  return doc
}

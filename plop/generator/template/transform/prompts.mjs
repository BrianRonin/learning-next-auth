export default (x, t) => {
  const { inputsPrompt } = t.start
  let doc = x
  doc = doc.replace(
    /__inputs__/,
    t.var.hasInputs ? inputsPrompt : '',
  )
  return doc
}

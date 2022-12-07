export default (x, t) => {
  const { cases, inputsSettings, commentsSettings } =
    t.start
  let doc = x
  doc = doc.replace(
    /__cases__/,
    t.var.hasInputs
      ? cases
      : `\n\t\tname: '{{ snakeCase __ }}',`,
  )
  doc = doc.replace(
    /__inputs__/,
    t.var.hasInputs ? inputsSettings : '',
  )
  doc = doc.replace(/__comments__/, commentsSettings)
  return doc
}

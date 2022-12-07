export default (x, t) => {
  const { getPaths } = t.start
  let doc = x
  doc = doc.replace(/__getPaths__/, getPaths)
  return doc
}

export default (x, t) => {
  const { fileNames } = t.start
  let doc = x
  doc = doc.replace('__fileNames__', fileNames)
  return doc
}

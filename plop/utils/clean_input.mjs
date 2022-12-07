export default function cleanInput(input) {
  let resolve = input
  if (Array.isArray(input)) {
    return resolve.map((input, i) => {})
  }

  return resolve
}

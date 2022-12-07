const case_modifiers = (str) =>
  str &&
  str
    .replace(new RegExp(/[^\w\s]/, 'g'), '')
    .match(
      /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g,
    )
    .map((x) => x.toLowerCase())
    .join(' ')

const x =
  '  afem teste  , _#@test dois  , #test tres  , outro teste  '

// console.log(x.split(',').map((c) => case_modifiers(c)))
const str = 'ababab'

const result = str.replace(/.{1}/g, '$&-')
console.log(result) // 👉️ "abcabcabc"

const x_ = 'index, styles'.split(',').map((file, i) => {
  return file + ' ok'
})

const y = ['teeest', ...x_]
console.log(y)

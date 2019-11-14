const args = process.argv
let times = 1
let name = 'world'

if (args[2] === '--times') {
  name = args[4]
  times = args[3]
} else if (args[3] === '--times') {
  name = args[2]
  times = args[4]
} else if (args[2] && args[2] !== '--times') {
  name = args[2]
} 

for (let i = 0;i < times; i++) {
  console.log(`Hello ${name}!`)
}

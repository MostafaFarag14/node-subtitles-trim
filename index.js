// copy script folder to files partition to have access

const fs = require('fs')

const filesPath = process.argv[2]


const files = fs.readdirSync(filesPath).filter(file => file.endsWith(".srt"))

console.log(files)

files.forEach(file => {
  fs.renameSync(`${filesPath}/${file}`, `${filesPath}/${file.replace("[SubtitleTools.com] ", "")}`)
})

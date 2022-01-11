import fs from 'fs'
import path from 'path'
import os from 'os'
import chalk from 'chalk'
import ULR from 'url'

const __dirname = new URL('.', import.meta.url).pathname

const savePassword = (password) => {
  console.log("New File: " + path.join(__dirname, '../', 'passwords.txt'))
  fs.open(path.join(__dirname, '../', 'passwords.txt'), 'a', 666, (e, id) => {
    fs.write(id, password + os.EOL, null, 'utf-8', () => {
      fs.close(id, () => {
        console.log(chalk.green('Password saved to passwords.txt'))
      })
    })
  })
}

export { savePassword as default }
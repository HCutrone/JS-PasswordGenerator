#!/usr/bin/env node
import chalk from 'chalk'
import program from 'commander'
import clipboardy from 'clipboardy'
import createPassword from './utils/createPassword.js'
import savePassword from './utils/savePassword.js'

program.version('1.0.0')
  .description('Terminal-Based Password Generator')
  .option('-l, --length <number>', 'length of password', '8')
  .option('-s, --save', 'save the password to passwords.txt')
  .option('-nn, --no-numbers', 'remove numbers')
  .option('-ns, --no-symbols', 'remove symbols')
  .parse()

const {length, save, numbers, symbols} = program.opts()

const generatedPassword = createPassword(length, numbers, symbols)

if (save) {
  savePassword(generatedPassword)
}

clipboardy.writeSync(generatedPassword)

console.log(chalk.blue('Generated Password: ') + chalk.bold(generatedPassword))
console.log(chalk.yellow('Password copied to clipboard'))
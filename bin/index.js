#!/usr/bin/env node


const {program} = require('commander');
const path = require('path');
const scanner = require('../lib/scanner');
const runner = require('../lib/runner');

const APP_DIR = path.join(process.env.HOME,'AppImages');

//list cmd
program
    .command('list [dir]')
    .description('Lists AppImages in a directory (default: ~/AppImages)')
    .action((dirArg) =>{
        const defaultDir = dirArg || APP_DIR;
        const targetDir = dirArg ? path.resolve(dirArg) : defaultDir;
        scanner.listAppImages(targetDir);
    });
//run cmd
program
    .command('run <filename>')
    .description('Runs a specific AppImage')
    .action((filename) => runner.runAppImages(APP_DIR, filename));

program.parse(process.argv);
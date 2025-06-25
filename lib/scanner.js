const fs = require('fs');
const path = require('path');
const chalk = require('chalk');

function listAppImages(dir){
    if(!fs.existsSync(dir)){
        console.log(chalk.red(`Directory ${dir} not found`));
        return;
    }

    const files = fs.readdirSync(dir).filter(f => f.endsWith('.AppImage'));

    if (files.length ===0){
        console.log(chalk.yellow('No AppImages found in the directory.'));
        return;
    }

    console.log(chalk.green(`Found ${files.length} AppImage(s):`));
    files.forEach((file, i) => {
        console.log(`${i + 1}. ${chalk.blue(file)}`);
    });

}

module.exports = { listAppImages };
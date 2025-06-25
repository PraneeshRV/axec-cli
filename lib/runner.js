const{spawn}= require('child_process');
const path = require('path');
const chalk = require('chalk');

function runAppImages(dir,filename){
    const fullPath = path.join(dir, filename);

    const proc = spawn(fullPath, [], {
        detached:true,
        stdio:'ignore'
    });

proc.on('error', (err) => {
  console.error(chalk.red(`❌ Failed to launch ${filename}: ${err.message}`));
});

proc.on('spawn', () => {
  console.log(chalk.green(`🚀 Launched ${filename} successfully.`));
});

proc.unref();

}

module.exports = { runAppImages };
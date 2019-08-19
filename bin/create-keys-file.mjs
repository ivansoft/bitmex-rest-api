#!/usr/bin/env node --experimental-modules

import program from "commander";

program.version('0.0.1');
program
    .option('-d, --debug', 'debug info');

program.parse(process.argv);



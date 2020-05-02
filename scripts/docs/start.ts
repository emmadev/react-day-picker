#!/usr/bin/env babel-node
import * as Path from 'path';
import * as Commander from 'commander';

import { createReflections } from './createReflections';
import { writeHooks } from './writeHooks';
import { writeComponents } from './writeComponents';

const program = new Commander.Command();
program
  .option(
    '-p, --project <path>',
    'set the project root',
    '../packages/react-day-picker'
  )
  .option(
    '-i, --input <path>',
    'set the project input files converted by typedoc',
    'src'
  )
  .option(
    '-c, --config <file>',
    'set the tsconfig.json path, relative to the project’s root',
    'tsconfig.json'
  )
  .option(
    '-o, --outDir <path>',
    'set the output directory',
    '../website/src/assets/data'
  )
  .action(() => {
    const projectPath = Path.resolve(program.project);
    const outputPath = Path.resolve(program.outDir);
    const inputPath = Path.resolve(projectPath, program.input);
    const configPath = Path.resolve(projectPath, program.config);

    const project = createReflections(inputPath, outputPath, configPath);

    writeComponents(project, outputPath);
    // writeHooks(project, outputPath);
  });

program.parse(process.argv);

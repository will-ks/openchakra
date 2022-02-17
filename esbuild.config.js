/*
 * Copyright (c) 2022 SZTAKI, DSD - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited without the
 * prior written permission of SZTAKI.
 *
 * Authors: Balázs E. Pataki <balazs.pataki@sztaki.hu>, Norbert Finta <norbert.finta@sztaki.hu>
 */
const esbuild = require('esbuild')
const glob = require('glob')
const entryPoints = glob.sync('./src/**/*.ts*')

// Automatically exclude all node_modules from the bundled version
const { nodeExternalsPlugin } = require('esbuild-node-externals')

// console.log(entryPoints)

esbuild
  .build({
    entryPoints,
    outdir: 'lib',
    // entryPoints: ['./src/index.ts'],
    // outfile: 'lib/index.js',
    bundle: true,
    // minify: true,
    platform: 'node',
    sourcemap: true,
    target: 'node14',
    format: 'cjs',
    target: ['esnext'],
    //splitting: true,
    plugins: [nodeExternalsPlugin()],
  })
  .catch(() => process.exit(1))

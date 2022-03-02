/*
 * Copyright (c) 2022 SZTAKI, DSD - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited without the
 * prior written permission of SZTAKI.
 *
 * Authors: Balázs E. Pataki <balazs.pataki@sztaki.hu>, Norbert Finta <norbert.finta@sztaki.hu>
 */
const esbuild = require('esbuild')
const glob = require('glob')
const entryPoints = glob
  .sync('./src/**/*.ts*')
  .filter(
    (e) => !e.startsWith('./src/chakraui') && !e.startsWith('./src/pages'),
  )

// Automatically exclude all node_modules from the bundled version
const { nodeExternalsPlugin } = require('esbuild-node-externals')

console.log(entryPoints)

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
    // plugins: [nodeExternalsPlugin()],
    // don't automatically exclude all of dependencies. We control this via external
    plugins: [
      nodeExternalsPlugin({
        dependencies: false,
      }),
    ],
    // peer dependencies, which must be provided by ocho users
    external: [
      'react',
      'react-dom',
      // for nextjs projects
      'next',
      'next-redux-wrapper',
      // or nextjs, cra, etc. projects as well:
      '@chakra-ui/icons',
      '@chakra-ui/react',
      '@chakra-ui/theme',
      '@emotion/styled',
      '@emotion/react',
      'framer-motion',
      '@rematch/core',
      'react-redux',
      'react-dnd',
      'react-dnd-html5-backend',
    ],
  })
  .catch(() => process.exit(1))

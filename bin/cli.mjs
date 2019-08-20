#!/usr/bin/env node --experimental-modules --es-module-specifier-resolution=node --no-warnings

//
// --experimental-modules
//      Node.js will treat .mjs and .js with "type": "module" in nearest package.json
//      as ES modules when passed to node as initial input or referenced by import statements
//
// --es-module-specifier-resolution=[mode]
//      default mode is explicit
//      node mode enables importing from directories that include an index file
//
// --experimental-wasm-modules
//      allowing any .wasm files to be imported
//      import * as M from './module.wasm';
//
// --loader ./custom-loader.mjs'
//      NODE_OPTIONS='--experimental-modules --loader ./custom-loader.mjs' node x.js
//

/**
 * https://nodejs.org/dist/latest-v12.x/docs/api/esm.html#esm_mandatory_file_extensions
 * A file extension must be provided when using the import keyword.
 * https://nodejs.org/dist/latest-v12.x/docs/api/esm.html#esm_customizing_esm_specifier_resolution_algorithm
 * importing from directories that include an index file
 */
import '../src'

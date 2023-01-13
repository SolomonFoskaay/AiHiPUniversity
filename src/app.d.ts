/// <reference types="@sveltejs/kit" />

declare module 'flexsearch/dist/module/index.js';

// declare modules added to run Foskaayai chatbot page /FoskaayAi
  declare module '@fortawesome/fontawesome-svg-core';
  declare module '@fortawesome/free-solid-svg-icons';
  declare module '@fortawesome/svelte-fontawesome';
  declare module 'uuid';
  declare module 'svelte-prism';

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare namespace App {
  // interface Locals {}
  // interface Platform {}
  // interface Session {}
  // interface Stuff {}
}

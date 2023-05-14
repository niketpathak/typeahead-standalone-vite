import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'
import typeahead from 'typeahead-standalone'
import 'typeahead-standalone/dist/basic.css';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
      <input id="searchInput" type="text" placeholder="Search for a color">
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`


// local Data
const colors = ['Grey', 'Brown', 'Black', 'Blue'];

// input element to attach to
const inputElement = document.getElementById("searchInput") as HTMLInputElement;

typeahead({
  input: inputElement,
  source: {
    local: colors,
    // prefetch: {...}
    // remote: {...}
  }
});

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)

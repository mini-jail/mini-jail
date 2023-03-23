import { mount } from "./deps/dom.ts";
import { App } from "./components/App/mod.ts";

import "./app.css";

mount(document.body, () => {
  App();
});

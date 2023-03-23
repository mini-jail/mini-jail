import { component, element } from "../../deps/dom.ts";
import "./style.css";

export const App = component(() => {
  element("h1", { textContent: "ja!l" });
  element("p", { textContent: "soon :p" });
});

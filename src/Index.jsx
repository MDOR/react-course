import React from "react";
import { render } from "react-dom";

import App from "./App";

const mainNode = document.querySelector("#root");

console.log(mainNode)

if (!mainNode)
    throw new Error("Root element is needed to render this application");

render(<App />, mainNode);

if (typeof module !== "undefined" && typeof module.hot !== "undefined") {
    module.hot.accept("./app", () => {
        /* eslint-disable-next-line */
        const NextAppState = require("./app").default;
        render(<NextAppState />, mainNode);
    });
}

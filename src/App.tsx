import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Localization, useTranslation } from "../lib/main";
import "./App.css";
import React from "react";

function App() {
  const [count, setCount] = useState(0);
  const localization = new Localization({
    namespace: ["common"],
    resources: {
      EN: {
        common: {
          hello: "Hello",
        },
      },
      FR: {
        common: {
          hello: "Bonjour",
        },
      },
    },
  });

  const { t } = useTranslation();

  return (
    <React.Fragment>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>{localization.t("hello")}</p>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
        <button
          onClick={() => {
            localization.setLanguage(
              localization.getLanguage() === "EN" ? "FR" : "EN"
            );
            console.log(localization.getLanguage());
          }}
        >
          Change language
        </button>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </React.Fragment>
  );
}

export default App;

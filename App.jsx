import { useEffect } from "react";
import { APIBASEURL } from "./constants";

const App = () => {
  useEffect(() => {
    const justStart = async () => {
      const response = await fetch(`${APIBASEURL}api/start`, {
        method: "GET",
        // mode: "cors", // no-cors, *cors, same-origin
        // cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        // credentials: "same-origin", // include, *same-origin, omit
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        // redirect: "follow", // manual, *follow, error
        // referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      });
      console.log(response);
      const data = await response.json();
      alert(data?.msg);
    };

    justStart().catch((error) => {
      console.log(error);
    });
  }, []);
  return <h1>This is react App</h1>;
};

export default App;

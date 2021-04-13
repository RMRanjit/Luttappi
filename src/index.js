import { render } from "react-dom";
import routes from "./routes";
import registerServiceWorker from "./registerServiceWorker";
import "./styles.scss";
import "font-awesome/css/font-awesome.css";
require("./favicon.ico");
// setup fake backend
import { configureFakeBackend } from "./components/helpers";
configureFakeBackend();

render(routes, document.getElementById("root"));
registerServiceWorker();

import React from "react";
import ReactDOM from "react-dom/client";
import {store} from './redux/store'
import { Provider } from "react-redux";

import App from "./App";

const rootElement = document.getElementById("root");
if (rootElement) {
	ReactDOM.createRoot(rootElement).render(
		<React.StrictMode>
			<Provider store={store}>
				<App />
			</Provider>
		</React.StrictMode>,
	);
} else {
	console.error("Не удалось найти элемент с идентификатором 'root'");
}

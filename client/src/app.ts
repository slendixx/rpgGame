import "./views/view";
import "./models/socket";


const body = document.querySelector("main");
const paragraph = document.createElement("p");
paragraph.textContent = "Hello from TS 2";
body?.appendChild(paragraph);

import Bard from "../node_modules/bard-ai/index.js";

let myBard = new Bard("bAjOmqg_sqEJjQqNc3v38v5ddOkt8CB7lCGqXQhUQ4fEQoWGDt8IpS7xXrXitf96Nuk0Dg.")

const response = await myBard.ask("What is the meaning of life?");

console.log(response);
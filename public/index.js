import Bard from "../node_modules/bard-ai/index.js";

let myBard = new Bard("bQhs4exOT82Cw7aclmhD4vnZ1OLfufno3qDQrf-WNv5X4_VurlTbZouxnf6ow9nIQUp5RQ.")

const response = await myBard.ask("What is the meaning of life?");

console.log(response);
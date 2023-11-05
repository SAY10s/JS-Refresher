// import { key } from "./util.js";
// import { key, accessDate as expires} from "./util.js";
// import apiKey from "./util.js";
import * as util from "./util.js";

// console.log(util.accessDate);
// console.log(util.key);

function showKeyData(apiKey, expirationDate = "01-01-2000") {
  console.log("apiKey: " + apiKey + " expires at " + expirationDate);
}

showKeyData(util.key);

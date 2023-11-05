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

//-----------------------------------------------------

const hobbies = ["sports", "cooking", "reading"];

hobbies.push("lifting");
console.log(hobbies);

// const index = hobbies.findIndex((item) => {
//   return item === "sports";
// });

const index = hobbies.findIndex((item) => item === "sports"); //zwraca 'true' jeżeli item = "sports" oraz zwraca 'false' jeżeli item != "sports"
console.log("The index of sports in our array is: " + index);

const editedHobbies = hobbies.map((item) => "My hobby is " + item + "!");
const objectifiedHobbies = hobbies.map((item) => ({ text: item }));
console.log(editedHobbies);
console.table(objectifiedHobbies);

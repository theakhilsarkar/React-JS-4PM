// export => send
// import => receive/get

// manufacturer
// holseller
// retailer
// customer

// value store -> variable
// process store -> function

// way of exports
// 1. default export - we can only send one value/process by using export default.

import addition from "./math/math.js";
import { min, user } from "./math/math.js";

addition(30, 40);
min(49, 12);
console.log(user);

// variable array 1,2,3,4,5. export named, and import in script.js

export const arr = [1, 2, 3, 4, 5];

// 2. named export

// object destructuring

import fun from "./screen/home/script.js";

fun(19);

import sum from "../../math/math.js";
import { arr } from "../../app.js";
sum(56, 32);
sum(45, 21);
// console.log(arr);

// function -> loop, 1 to n
// export default -> user in app.js

const fun = (n) => {
  for (let i = 1; i <= n; i++) {
    console.log(i);
  }
};
export default fun;

const sum = (a, b) => {
  console.log(a + b);
};

export const min = (a, b) => {
  console.log(a - b);
};

export const user = { name: "Aman Gupta", age: 22, course: "B.Tech" };


export default sum;

// file
// 2 box -> export
// 1 box = 1 item
// 1 box = multiple item
// const { name, age, course } = user;

// export {min,user};

// console.log(name);
// console.log(age);
// console.log(course);

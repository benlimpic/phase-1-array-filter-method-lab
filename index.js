// Code your solution here

// const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']
const drivers = [
  {
    name: 'Bobby',
    hometown: 'Pittsburgh' },
  {
    name: 'Sammy',
    hometown: 'New York' } ,
  {
    name: 'Sally',
    hometown: 'Cleveland' },
  {
    name: 'Annette',
    hometown: 'Los Angeles' },
  {
    name: 'Bobby',
    hometown: 'Tampa Bay' }
];

const findMatching = (arr, que) => {

  const foo = (el) => {
    if (el.toLowerCase() === que.toLowerCase()) {
      return true;
    }
  }
  
  const bar = arr.filter(foo);
  return bar;

}

const fuzzyMatch = (arr, que) => {

  const foo = (el) => {
    if (el.split("")[0] === que.split("")[0]) {
      return true
    }
  }

  const bar = arr.filter(foo);
  return bar;

}

const matchName = (arr, que) => {

  const foo = (el) => {
    if (el.name === que) {
      return true
    }
  }

  const bar = arr.filter(foo)
  return bar
}


console.log(matchName(drivers, "Bobby"))













// const findMatching = (array, name) => {

//   const fun = (element) => {
//     if (element.toLowerCase() === name.toLowerCase()) {
//       return true
//     } 
//   }

//   let x = array.filter(fun)
//   return x
// }
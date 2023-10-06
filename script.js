var join = function (arr1, arr2) {
    let combinedArray = arr1.concat(arr2)
    let merged = {}
    combinedArray.forEach((element , index) => {
        if (element.id in merged){
            merged = element
            console.log(merged)
            console.log(element.id)
        }
        else {
            merged[element.id] = element;
        }
    });
};

arr1 = [
  { id: 1, x: 2, y: 3 },
  { id: 2, x: 3, y: 6 },
];
arr2 = [
  { id: 2, x: 10, y: 20 },
  { id: 3, x: 0, y: 0 },
];

console.log(join(arr1 , arr2))
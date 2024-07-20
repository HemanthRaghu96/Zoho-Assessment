const frequentElement = (arr, k) => {
    let obj = {};
    let result = [];
    for (let i = 0; i < arr.length; i++) {
      let key = arr[i];
      if (obj[key] === undefined) {
        obj[key] = 1;
      } else {
        obj[key]++;
      }
    }
    let key = Object.keys(obj);
    key.sort((a, b) => obj[b] - obj[a]);
    return key.slice(0,k);
  };
  console.log("Top K Frequent Elements : ");
  console.log(frequentElement([1, 1, 1, 2, 2, 3], 2));
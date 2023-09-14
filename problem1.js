//PROBLEM 1
function findDistinctSum(set1, set2) {
    const distinctElements = [];
    const combinedSet = set1.concat(set2);
  
    for (let i = 0; i < combinedSet.length; i++) {
      if (!distinctElements.includes(combinedSet[i])) {
        distinctElements.push(combinedSet[i]);
      }
    }
  
    let sum = 0;
    for (let i = 0; i < distinctElements.length; i++) {
      sum += distinctElements[i];
    }
  
    return sum;
  }
  
  // Example usage
  const set1 = [3, 1, 7, 9];
  const set2 = [2, 4, 1, 9, 3];
  const output = findDistinctSum(set1, set2);
  console.log(output); // Output: 13
  







  
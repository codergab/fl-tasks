function findSubsets(subsets, input = [], output = [], currentIndex = 0) {
  if (input.length === currentIndex) {
    subsets.push(output);
    return;
  }

  findSubsets(subsets, input, [...output], currentIndex + 1);
  output.push(input[currentIndex]);
  findSubsets(subsets, input, [...output], currentIndex + 1);
}

function sortSubsets(input) {
  return input.sort((a, b) => {
    let min = Math.min(a.length, b.length);
    for (let i = 0; i < min; i++) {
      if (a[i] === b[i]) {
        continue;
      } else {
        return a[i] - b[i];
      }
    }
    return 1;
  });
}

function printSubsets(subsets) {
  for (let i = 0; i < subsets.length; i++) {
    for (let j = 0; j < subsets[i].length; j++) {
      console.log(`${subsets[i][j]} `);
    }
    console.log("\n");
  }
}

let subs = new Subsets();

let input = [1, 2, 3];
let subsets = [];
let output = [];
let index = 0;

findSubsets(subsets, input, output, index);
sortSubsets(subsets)
printSubsets(subsets)
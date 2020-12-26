// This is your coding interview problem for today.

// This problem was asked by Google.
// Given two singly linked lists that intersect at some point, find the intersecting node. The lists are non-cyclical.
// For example, given A = 3 -> 7 -> 8 -> 10 and B = 99 -> 1 -> 8 -> 10, return the node with value 8.
// In this example, assume nodes with the same value are the exact same node objects.
// Do this in O(M + N) time (where M and N are the lengths of the lists) and constant space.

function main(listA, listB) {
    const map = {};
    let intersectingNode;
  
    // if the values in listA and B aren't translatable to string, find a way to convert them into object keys
    listB.forEach(value => map[value] = true);
    for (let i=0; i<listA.length; i++) {
        if (map[listA[i]]) {
            return listA[i];
        }
    }
  }
  
  console.log(main([3,7,8,10], [99,1,8,10]))
  
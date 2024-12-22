## First approach

### Time Complexity

* while loop has `O(n)`
* map operations has `O(1)`
* map.values iteration has `O(n)`

Overall time complexity of this solution is `O(n)`

### Space Complexity

* Since the map stores the substrings like (IV) or individual roman numbers as keys and with their corresponding integer values as values, in the worst case the space complexity is `O(n)`. Because each character in the string results in a separate entry in the map.
* Variables like `total, i` take constant space

Overall space complexity is `O(n)`.
### First approach

#### <ins>Time Complexity</ins>

* while loop has `O(n)`
* map operations has `O(1)`
* map.values iteration has `O(n)`

*Overall time complexity* of this solution is `O(n)`

#### <ins>Space Complexity</ins>

* Since the map stores the substrings like (IV) or individual roman numbers as keys and with their corresponding integer values as values, in the worst case the space complexity is `O(n)`. Because each character in the string results in a separate entry in the map.
* Variables like `total, i` take constant space

*Overall space complexity* is `O(n)`.
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

### Second approach

With this approach we only used a single for loop to sum the integer of Roman numerals.
If the current character's value is less than the next character's value, substract it; otherwise, add it to total

#### <ins>Time Complexity</ins>

* for loop has `O(n)`
* each character lookup in `romanNumbers` has `O(1)`

*Overall time complexity* of this solution is `O(n)`

#### <ins>Space Complexity</ins>

* We only have `romanNumbers` JS object for Roman numeral mapping. So, it has `O(1)`

*Overall space complexity* is `O(1)`.

***Key Improvements with the second approach***

* Less memory usage: `O(n) --> O(1)`
* Increased readability and maintainability by avoiding multiple checks and unnecessary operations.


// First approach  comes to my mind

const romanNumbers = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
}

const romanToInt1 = s => {
    const map = new Map()
    let i = 0
    while (i < s.length) {
        if (map.has(s[i])) {
            const value = map.get(s[i])
            map.set(s[i], value + romanNumbers[s[i]])
            i++
        } else {
            if (romanNumbers[s[i]] < romanNumbers[s[i+1]]) {
                map.set(`${s[i]}${s[i+1]}`, romanNumbers[s[i+1]] - romanNumbers[s[i]])
                i+=2
            } else {
                map.set(s[i], romanNumbers[s[i]])
                i++
            }
        }
    }
    const values = map.values()
    let total = 0
    for (const item of values) {
        total += item
    }
    return total
}

const romanToInt2 = s => {
    let total = 0
    for (let i = 0; i < s.length; i++) {
        if (romanNumbers[s[i]] < romanNumbers[s[i + 1]]) {
            total -=  romanNumbers[s[i]]
        } else {
            total += romanNumbers[s[i]]
        }
    }
    return total
}

s1 = "III"
s2 = "LVIII"
s3 = "MCMXCIV"
s4 = "MMMCMXCIX"

console.log(romanToInt1(s4))
console.log(romanToInt2(s4))
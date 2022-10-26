// // function fibonacci(n) {
// //     let fib = [0, 1]
// //     for (let i = 2; i < n ; i++){
// //         fib.push(fib[-1 + i] + fib[-2 + i])
// //     }
// //     return fib
// // }

// // console.log(fibonacci(7))


// // function factoriel(n) {
// //     let h=1
// //     for (i = 2; i <= n; i++){
// //         h=h*i
// //     }

// //     return h
// // }

// // console.log(factoriel(10))

// // console.log(10*9*8*7*6*5*4*3*2*1)
// // console.log(10*9*8*7*6*5*4*3*2*1)
// // console.log(10*9*8*7*6*5*4*3*2*1)
// // console.log(10*9*8*7*6*5*4*3*2*1)
// // console.log(10*9*8*7*6*5*4*3*2*1)

// // function prime(n) {
// //    let ok
// //     for (let i = 2; i < n; i++) {
// //         if (n === i * i)

// //             ok = false
// //     }
// //     return ok
// //     }


// // console.log(prime(16))

// console.log(Math.pow(4,2))
// let n = 8 ** 2

// console.log(n)
// // function isPower(n) {
// //     for (i = 0; i <= n; i++){
// //         if (Math.pow(2, i) ===n) {
// //             return true
// //         }
// //     }
// //     return false
// // }
// // function isPower(n) {
// //     if (n < 1) {
// //         return false
// //     }
// //     return (n & (n-1))===0
// // }
// // console.log(isPower(1))
// // console.log(isPower(2))
// // console.log(isPower(5))
// // console.log(isPower(5))
// // console.log(isPower(5))
// // console.log(isPower(5))
// // console.log(isPower(5))
// // console.log(isPower(8))
// // console.log(isPower(64))


// function reccursionFibounacci(n) {
//     if (n < 2) {

//         return n
//     }
//     return reccursionFibounacci(n-1)+reccursionFibounacci(n-2)
// }

// console.log(reccursionFibounacci(5))


// function reccursionFactoreil(n) {
//     if (n < 2) {
//         return 1
//     }
//         return n*reccursionFactoreil(n-1)
// }
// console.log(reccursionFactoreil(15))

// console.log(5*(5-(5-1)))

// function searchTTarget(arr,t) {
//     for (i = 0; i < arr.length; i++){
//         if (arr[i] === t) {
//             return i
//         }
//     }
//     return -1
// }

// console.log(searchTTarget([2, 0, 1, 3, 7, 4, 5, 6], 2))

// function searchTBinaryTarget(arr) {
//     let sortedArra = []
//     let count
//     let inf=-Infinity
//     for (i = 0; i < arr.length; i++) {
//         if (arr[i] > inf) {
//             inf = arr[i]
//         }

//         count = inf
//         sortedArra.push(count)
//     }
//         return sortedArra

// }

// console.log(searchTBinaryTarget([2,0,-1,400,,7,4,5,6]))

// function binarySearch(arr, n) {
//     let low = 0
//     let higth = arr.length - 1
//     while (low <= higth) {
//         let midium = Math.floor((low + higth) / 2)
//         if (arr[midium] == n) {
//             return true
//         } else if (arr[midium] > n) {
//             higth = midium - 1
//         } else {
//             low = midium + 1

//         }
//         console.log(midium)
//     }
//     return false
// }

// console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 9))


// 0666768137 ....................................


function sortArr(arr) {
    let min=arr[0]
    for (let i = 0; i < arr.length; i++){
        while (min > arr[i]) {
            min=arr[i]
        }
    }
    return arr
}

console.log(sortArr([5,3,8,1,0,-3]))



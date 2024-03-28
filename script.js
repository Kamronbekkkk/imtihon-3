// 1-vazifa

// let son1 = +prompt('1-sonni kiriting')
// let son2 = +prompt('2-sonni kiriting')
// let son3 = +prompt('3-sonni kiriting')

// function ortacha (son1, son2, son3){
//     if (son1 >= son2 && son1 <= son3){
//         return son1 
//     }
//     if (son2 >= son1 && son2 <= son3){
//         return son2
//     }
//     if (son2 >= son1 && son3 <= son3){
//         return son3 
//     }
// }

// alert(ortacha(son1,son2,son3));

// 2-vazifa

// function musbatTopgich(arr) {
//     let musbat = 0;
//     let manfiy = 0;

//     for (let i = 0; i < arr.length; i++) {
       
//         if (arr[i] > 0) {
//             musbat++;
//         } else {
          
//             manfiy++;
//         }
//     }

 
//     return [musbat, manfiy];
// }


// const myArr = [-5, 2, -3, 7, ];
// const resultat = musbatTopgich(myArr);
// console.log(`Musbat sonlar: ${resultat[0]}`);
// console.log(`Manfiy sonlar: ${resultat[1]}`);

// 3-vazifa

// function nolTopgich(arr) {
//     let total = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] < 0) {
//             total += arr[i];
//         }
//     }
//     return total;
// }


// let myArr = [1, -2, 3, -3, 5, -6];
// let result = nolTopgich(myArr);
// console.log("Bu son 0 ga teng yoki 0 dan kichik:", result);

// 4-vazifa

let array = [-100, -12, 0]

function kattniQaytargich(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[0] > arr[1] && arr[0] > arr[2]) {
            return arr[0]
        }
        if (arr[1] > arr[0] && arr[1] > arr[2]) {
            return arr[1]
        }
        if (arr[2] > arr[1] && arr[2] > arr[0]) {
            return arr[2]
        }
    }
    
}
console.log(kattniQaytargich([-100, -12, 0]));
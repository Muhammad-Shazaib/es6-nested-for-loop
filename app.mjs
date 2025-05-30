// ek array ka ander dusra array aa jay to usay 2d(2 demention array) array kehte hain
// nested array bhe khaty hain

let matrix1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
// standaed 2 demension loop
for (let i = 0; i < matrix1.length; i++) {
    for (let j = 0; j < matrix1[i].length; j++) {

        console.log('some text', matrix1[i][0]);
        console.log('some text', matrix1[i][1]);
        console.log('some text', matrix1[i][2]);

        matrix1[i][0] = matrix1[i][0] * 2;
        matrix1[i][1] = matrix1[i][1] * 2;
        matrix1[i][2] = matrix1[i][2] * 2;
    }

}










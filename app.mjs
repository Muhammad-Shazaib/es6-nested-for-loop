// ek array ka ander dusra array aa jay to usay 2d(2 demention array) kehte hain
// nested array bhe khaty hain
// 2d array example hai ya hai ka sbb ek jesy array ho.
// nested array example hai ek ka ander dusra array ho.
// nested loop hamesha sat sat chale ga.


let matrix1 = [
    [2, 1, 6, 9],
    [6, 4, 5, 6],
    [8, 7, 8, 4]

]
// standaed 2 demension loop
for (let i = 0; i < matrix1.length; i++) {


    for (let j = 0; j < matrix1[i].length; j++) {

       
        console.log('some text', matrix1[i][j]);

        matrix1[i][j] = matrix1[i][j] * 2;
       // matrix1[i][1] = matrix1[i][1] * 2;
       // matrix1[i][2] = matrix1[i][2] * 2;

        console.log('result', matrix1[i][j]);
        //console.log('some text', matrix1[i][1]);
       // console.log('some text', matrix1[i][2]);
    }

}










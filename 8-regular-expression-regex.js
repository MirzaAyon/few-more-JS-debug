//regex - regular expression
//eta dara string er modhe simple ba jotil expression khuje ber kora hy
//upeercase,lowercase,digit ache kina egula check kora holo regex


const myPass = 'mynameisayon'
undefined
myPass.includes('A') //evabe check kora tough and boring
false
myPass.includes('A') || myPass.includes('B') //evabe check kora tough and boring
false
    / [0 - 9] /.test(myPass)
false
    / [A - Z] /.test(myPass)
false

    //chaile special character jemon #$_!? etc check kora jae
    / [0 - 9].* [A - Z] /.test(myPass) //kono special character ache kina ba A-Z pojnto double ache kina
false
    / [0 - 9].* [A - F] /.test(myPass) //A-F prjnto double ache kina mane pasha pashi ache kina
false
    / [0 - 5] /.test('today20')
true
    / [0 - 5] /.test('today76')
false
    / [0 - 5] /.test('today70')
true
    / [$ & +,:;=?@#| '<>.^*()%!-]/.test('rastarmati')
false
    / [$ & +,:;=?@#| '<>.^*()%!-]/.test('rastarmati$')
true
    / [$ & +,:;=?@#| '<>.^*()%!-]/.test('rastarmati#')
true
    / [$ & +,:;=?@#| '<>.^*()%!-]/.test('rastarmati + ')
true
    /^ (?=.* [A - Z].* [A - Z])(?=.* [!@#$&*]) (?=.* [0 - 9].* [0 - 9])(?=.* [a - z].* [a - z].* [a - z]).{ 8 } $ /.test('7yu47fg4i!#$njf!@#$%123456789#$$$%%^ffffffASDFGGHH')
false
    //ekhane 8 digit er limitations off korar jnno .{8} eta uthae dibo


    / [0 - 9].* [A - F] /.test(myPass)
false
    / [0 - 5] /.test(today20)


//stackoverflow er likha porbo
/*
My password strength criteria is as below :

8 characters length
2 letters in Upper Case
1 Special Character (!@#$&*)
2 numerals (0-9)
3 letters in Lower Case
Can somebody please give me regex for same. All conditions must be met by password .
*/
//stack overflow er ei condition gula shob kichur sathe match khabe
//minimum 8 char hbe
//döngü dönmek

// console 3 tnae mer

// console.log("Merhaba dünya")
// console.log("Merhaba dünya")
// console.log("Merhaba dünya")
// console.log("Merhaba dünya")
// console.log("Merhaba dünya")
// console.log("Merhaba dünya")
// console.log("Merhaba dünya")
// console.log("Merhaba dünya")
// console.log("Merhaba dünya")
// console.log("Merhaba dünya")
// console.log("Merhaba dünya")
// console.log("Merhaba dünya")
// console.log("Merhaba dünya")
// console.log("Merhaba dünya")
// console.log("Merhaba dünya")

//döngüler while | do while | for
// for

/*

while(koşul){
 ... 
}

// sonsuz döngü
while(1){
.....
if()
}
if()
*/

// let i = 150;
// while(i){
//     console.log("Merhaba Dünya")
//     // i=i+1;
//     // i+=1;
//     i--;
// }

// do while
/* 
do 
{

}
while(kosul)
*/

// let i =0;
// do{

//     console.log("Merhaba dünya")
//     i++;
// }while(i<150)

/* 
for(tanimlama; kosul; artirim/azaltim){ 

}

for(let i = 0; i<5; i++){

}

*/

// for (let i = 0; i < 5; i++) {
//   if(i==3)
//     break;
//   console.log("Merhaba dünya for");
// }

// for (let i = 5; i; i--) {
//     if(i == 3)
//         continue;
//   console.log("Merhaba dünya for azaltim");
// }


//  3   1 2 3
//  1 => 1 2 3 2 => 1 2 3 3=> 1 2 3
//etiket 

label : for(let i =0 ; i<3; i++){
    console.log("i",i)
    console.log("------------------------")
    for(let j = 0; j<3 ; j++){
        if(j==1){
            break label;
        }
        console.log("j",j)
        
    }
    console.log("-----------------------")
}
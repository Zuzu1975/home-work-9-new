                                // Home work 9




       // 1 задание

// let btn = document.querySelector(".cheсker");
// let out = document.querySelector('.out');

//       let a =[1,2,3,4,5,6,7,8]
    
// btn.onclick = function () {   
//     let out = '';  
//       console.log(a[1]);
//       console.log(a[4]);
//       console.log(a[2]);
//       console.log(a[7]);   
//       console.log(a[0]); 
//       out += i +''
// out.innerHTML=a[4]     
// }
// document.querySelector('.out').innerHTML= out=a[4]



       // 2 задание

// let btn = document.querySelector(".cheсker");
// let out = document.querySelector('.out');
       
//       let a =[1,2,3,4,5,6,7,8,9,10]
           
// btn.onclick = function () {   
//       for(let i=0; a.length>i;i++){
//             if(a[i]% 2 ==1){
//                    out.innerHTML +=`${a[i]}<br>`

//       }
// }    
        // 3 задание



// let btn = document.querySelector(".cheсker");
// let out = document.querySelector('.out');

//       let a =[1,2,3,4,5,6,7,8,9,10]
    
// btn.onclick = function () {   
//   for(let i=0; a.length>i;i++){
//       if(a[i]% 2 ==0){
//             out.innerHTML +=`${a[i]}<br>`
//       }
//   }
// }

// }



         // 4 задание

let btn = document.querySelector(".cheсker");
let out = document.querySelector('.out');
       
    let a =[1,2,3,4,5]
    let b = [
        [1,2,3],    
        [4,5,6],    
        [7,8,9]
    ]
           
btn.onclick = function () {   
    
    for(let i=0; a.length>i;i++){
        let c = b[i]          
    for (let j=c.length-1; j>=0; j--){
    console.log(c[j]);
    out.innerHTML +=`${a[i]}<br>`
    }
    }
}  


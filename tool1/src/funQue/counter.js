var codes = require('./coding-assigment-orders.json');
var yyzc = 0
var yycc = 0
var yvrc = 0

// codes.forEach((item) => {
//     console.log(item)
//     if (item.destination==="YYZ"){
//         yyzc=yyzc+1
//     }else if (item.destination==="YYC"){
//         yycc=yycc+1
//     }else if (item.destination==="YVR"){
//         console.log(item)
//         yvrc=yvrc+1
//     }
    
// })
for (var key in codes) {
    if (codes.hasOwnProperty(key)) {
        console.log(key + " -> " + codes[key].destination);
        if (codes[key].destination==="YYZ"){
            yyzc=yyzc+1
        }else if (codes[key].destination==="YYC"){
            yycc=yycc+1
        }else if (codes[key].destination==="YVR"){
            yvrc=yvrc+1
        }
    }
}

console.log(yyzc,yycc,yvrc)
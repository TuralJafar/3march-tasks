let a=[2,4,6,8,10];
let b=[4,6,8,10,2,16];
let bool= false;
for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < b.length; j++) {
        if (b[j]==a[i]) {
            bool=true;
            continue;
            
        }
        else{
            break;
        }
    }
    
}
console.log(bool);
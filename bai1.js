function bai1(){
    const btn = document.querySelector(".bai1 button");
    const input = document.querySelector(".bai1 input");
    let value;
    let result = document.querySelector(".bai1 .result");
    btn.addEventListener("click",function(){
        value = intIncrease(input.value);
        result.innerText = value; 
    })
}

function intIncrease(inString){
    let array = inString.split('');
    for(let i = 0;i<array.length-1;i++){
        if(array[i] >= array[i+1]) return false
    }
    return true;
}
bai1();

function bai2(){
    const btn = document.querySelector(".bai2 button");
    const input = document.querySelector(".bai2 input");
    let value;
    let result = document.querySelector(".bai2 .result");
    btn.addEventListener("click",function(){
        value = maxAppear(input.value);
        result.innerText = value; 
    })
}
function maxAppear(inString) {
    let array = inString.split('');
    let count = {};
    let maxCount = 0;
    let maxChar = '';

    for (let i = 0; i < array.length; i++) {
        let char = array[i];
        if (count[char] === undefined) {
            count[char] = 1;
        } else {
            count[char]++;
        }

        if (count[char] > maxCount) {
            maxCount = count[char];
            maxChar = char;
        }
    }

    return maxChar;
}

bai2();


function bai3(){
    const btn = document.querySelector(".bai3 button");
    const input = document.querySelector(".bai3 input");
    let value;
    let result = document.querySelector(".bai3 .result");
    btn.addEventListener("click",function(){
        value = deleteDuplicate(input.value);
        result.innerText = value; 
    })
}
function deleteDuplicate(inString){
    let array = inString.split('');
    let count = {};

    for (let i = 0; i < array.length; i++) {
        let char = array[i];
        if(count [char] == 1){
            array.splice(i,0)
            i--
        } 
            else if (count[char] === undefined) {
                    count[char] = 1;
                } else {
                    count[char]++;
                }
        console.log(char)
    }
    return array.join('')
}
bai3();

function bai4(){
    const btn = document.querySelector(".bai4 button");
    const input = document.querySelector(".bai4 input");
    let value;
    let result = document.querySelector(".bai4 .result");
    btn.addEventListener("click",function(){
        value = maxLength(input.value);
        result.innerText = value; 
    })
}

function maxLength(inString){
    let array = inString.split(' ');
    let max = array[0];
    for(let i = 1;i<array.length;i++){
        if(array[i].length >= max.length) max = array[i]             
    }
    return max;
}

bai4();

function bai5(){
    const btn = document.querySelector(".bai5 button");
    const input = document.querySelector(".bai5 input");
    let value;
    let result = document.querySelector(".bai5 .result");
    btn.addEventListener("click",function(){
        value = secondLength(input.value);
        result.innerText = value; 
    })
}

function secondLength(inString){
    let array = inString.split(' ');
    let max = array[0];
    let secondString ;
    for(let i = 1;i<array.length;i++){
        if(array[i].length >= max.length) {
            secondString = max.length 
            max = array[i]
        }       
    }
    for(let i = array.length - 1;i>=0; i--){
        if(array[i].length == secondString) return array[i]
    }
}

bai5()

function bai6(){
    const btn = document.querySelector(".bai6 button");
    const input = document.querySelector(".bai6 input");
    let value;
    let result = document.querySelector(".bai6 .result");
    btn.addEventListener("click",function(){
        value = TongChan(input.value);
        result.innerText = value; 
    })
}

function TongChan(inString){
    let array = inString.split('');
    console.log(array)
    const tong = array.reduce((total,currentValue) => {
        console.log(total)
        if(parseInt(currentValue) % 2 == 0) 
            return parseInt(total) + parseInt(currentValue)
        else return total;
    },0);
    return tong;
}

bai6()

function bai7(){
    const btn = document.querySelector(".bai7 button");
    const input = document.querySelector(".bai7 input");
    let value;
    let result = document.querySelector(".bai7 .result");
    btn.addEventListener("click",function(){
        value = Thaythe(input.value);
        result.innerText = value; 
    })
}

function Thaythe(inString) {
    let array = inString.split('');
    console.log(array);
    
    const newArray = array.map(x => {
        return String.fromCharCode(x.charCodeAt(0) + 1);
    });
    
    return newArray.join('');
}
bai7()

function bai8(){
    const btn = document.querySelector(".bai8 button");
    const input = document.querySelector(".bai8 input");
    let value;
    let result = document.querySelector(".bai8 .result");
    btn.addEventListener("click",function(){
        value = mid(input.value);
        result.innerText = value; 
    })
}

function mid(inString){
    let array = inString.split('');
    let midArray =[];
    // for(let i = Math.floor(array.length/2 -1); i <= Math.floor(array.length/2 +1);i++){
    //     midArray.push(array[i])
    // }
    // return midArray.join('')
    if (array.length % 2 === 0 || array.length < 3) {
        return "Chuoi khong hop le"
    }
        midArray = array.slice(Math.floor(array.length / 2 -1), Math.floor(array.length / 2) + 2);


    return midArray.join('');
}

bai8();


function bai11(){
    const btn = document.querySelector(".bai11 button");
    const input = document.querySelectorAll(".bai11 input");
    let value;
    let result = document.querySelector(".bai11 .result");
    btn.addEventListener("click",function(){
        value = intersection(input[0].value,input[1].value);
        result.innerText = value; 
    })
}


function intersection(inString1, inString2) {
    let arr1 = inString1.split('')
    let arr2 = inString2.split('')
    return arr1.filter(value => arr2.includes(value));
}
bai11();

function bai12(){
    const btn = document.querySelector(".bai12 button");
    const input = document.querySelectorAll(".bai12 input");
    let value;
    let result = document.querySelector(".bai12 .result");
    btn.addEventListener("click",function(){
        value = unduplicated(input[0].value,input[1].value);
        result.innerText = value; 
    })
}


function unduplicated(inString1, inString2) {
    let arr1 = inString1.split('')
    let arr2 = inString2.split('')
    let returnArray = [...arr1,...arr2].join('')
    return deleteDuplicate(returnArray);
}
bai12();

function bai13(){
    const btn = document.querySelector(".bai13 button");
    const input = document.querySelectorAll(".bai13 input");
    let value;
    let result = document.querySelector(".bai13 .result");
    btn.addEventListener("click",function(){
        value = elementOnly(input[0].value,input[1].value);
        result.innerText = value; 
    })
}


function elementOnly(inString1, inString2) {
    let arr1 = inString1.split('')
    let arr2 = inString2.split('')
    let arr3 = arr1.filter((value) => !arr2.includes(value));
    let arr4 = arr2.filter((value) => !arr1.includes(value));
    return [arr3,arr4]
}
bai13();


function bai16(){
    const btn = document.querySelector(".bai16 button");
    const input = document.querySelectorAll(".bai16 input");
    let value;
    let result = document.querySelector(".bai16 .result");
    btn.addEventListener("click",function(){
        value = elementOnly(input[0].value,input[1].value);
        result.innerText = value; 
    })
}
function Thaythe(inString) {
    let array = inString.split('');
    console.log(array);
    
    return array.map(x => {
        if(x % 2 != 0) return x*x;
    });
    
}
bai16();

function bai17(){
    const btn = document.querySelector(".bai17 button");
    const input = document.querySelectorAll(".bai17 input");
    let value;
    let result = document.querySelector(".bai17 .result");
    btn.addEventListener("click",function(){
        value = firstChar(input[0].value,input[1].value);
        result.innerText = value; 
    })
}

function firstChar(names, char) { 
    names = names.split(' '); 
    let filteredNames = names.filter(name => name.charAt(0) === char);
    
    return filteredNames;
}

bai17();

const nestedArray = [[1, 2], [3, 4], [5, 6]];
function bai19(){
    const btn = document.querySelector(".bai19 button");
    let value;
    let result = document.querySelector(".bai19 .result");
    btn.addEventListener("click",function(){
        value = ghepMang(nestedArray);
        result.innerText = value; 
    })
}
function ghepMang(inArray) {
    console.log(inArray);
    let returnArray = inArray.reduce((arr,currentValue) => [...arr,...currentValue],[]);

    return returnArray;
    
}
bai19();
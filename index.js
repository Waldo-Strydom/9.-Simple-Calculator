
let calString = ""
let squareRootDone=false;
let divisionDone=false;
let multiplicationDone = false;
let additionDone = false;
let subtractionDone = false;

function display(){
    const out = document.getElementById("screenText")
    out.innerHTML=calString
}

function addNum(num){

if(num=="." && calString.includes(num)){
    alert("You cannot have more than one decimal point.")
}else if(calString.length>=14){
alert("Max length reached")
}else{
    calString+=num
    display()
}

}

function buildArr(){

    let mathArr=[]

    mathArr = calString.split(" ")

    for(let i = 0;i<mathArr.length;i++){
        if(mathArr[i]=="%"){
            mathArr[i]="/100"
        }

        if(mathArr[i]=="+"|| mathArr[i]=="-"){

                mathArr.splice(i,1)

                let a = parseFloat(mathArr[i])
                if(a<0){
                    
                    a=a*-1
                    a="+"+a

                    mathArr[i]=a

                }
                



        }
        


    }


    clearArr(mathArr)
    squareRoot(mathArr)
}

function squareRoot(mathArr){
squareRootDone=true

 for(let i =0; i<=mathArr.length-1;i++){

    if(mathArr[i].includes("√")){
    
        let a = mathArr[i].replace("√", "")
        a = Math.sqrt(parseFloat(a))
        a=a.toString()

        mathArr[i]=a


        squareRootDone=false


 }


 
}
if(squareRootDone){

    division(mathArr)
 }else{

    squareRoot(mathArr)
 }


}
function division(mathArr){
    divisionDone=true;
    for(let i =0; i<=mathArr.length-1;i++){

        if(mathArr[i].includes("/")){
            if(i!=0){
            let a = mathArr[i].replace("/", "")
            a = parseFloat(a)

            let b = mathArr[i-1]

            let symbol=""
            if(b[0]=="X" || b[0]=="/"){

                symbol=b[0]
                let x = ""
                for(let i =1;i<=b.length-1;i++){
                    x+=b[i]

                }
                b=x
  
                mathArr[i-1]=b
                b=parseFloat(mathArr[i-1])

                divisionDone=false

            }


            let c = b / a
            c=c.toString()
            if(symbol!=""){
                c=symbol+c
            }
            mathArr[i]=c
            
            mathArr.splice(i-1,1)

    
        }
    
        }
     }

     if(divisionDone){

        multiplication(mathArr)
     }else{

        division(mathArr)
     }
    
     
}

function multiplication(mathArr){
    multiplicationDone=true
    for(let i =0; i<=mathArr.length-1;i++){

        if(mathArr[i].includes("X")){
        
            if(i!=0){

            let a = mathArr[i].replace("X", "")
            a = parseFloat(a)
            let b = parseFloat(mathArr[i-1])
            let c = b * a
            c=c.toString()
            mathArr[i]=c

            mathArr.splice(i-1,1)

            multiplicationDone=false
        }
    
        }
     }


     if(multiplicationDone){

        addition(mathArr)
     }else{

        multiplication(mathArr)
     }
     
    
}

function addition(mathArr){
    additionDone=true

    for(let i =0; i<=mathArr.length-1;i++){

        if(mathArr[i].includes("+")){
            if(i!=0){
            let a = mathArr[i].replace("+", "")
            a = parseFloat(a)
            let b = parseFloat(mathArr[i-1])
            let c = b + a
            c=c.toString()
            mathArr[i]=c
            mathArr[i-1]=""
            mathArr.splice(i-1,1)
 


            additionDone=false
        }
        }
    
     }



     if(additionDone){

        subtraction(mathArr)
     }else{
        
        addition(mathArr)
     }
     
}

function subtraction(mathArr){
    subtractionDone=true

    for(let i =0; i<=mathArr.length-1;i++){

        if(mathArr[i].includes("-")){
        if(i!=0){
            let a = mathArr[i].replace("-", "")
            a = parseFloat(a)
            let b = parseFloat(mathArr[i-1])
            let c = b - a
            c=c.toString()
            mathArr[i]=c

            mathArr.splice(i-1,1)
 
            subtractionDone=false
    
        }
    
     }
    }

     if(subtractionDone){

        finished(mathArr)
     }else{

        subtraction(mathArr)
     }


   
}

function clearArr(mathArr){

    for(let i =0; i<=mathArr.length-1;i++){
    
    if(mathArr[i]=='' || mathArr[i]==" "){

        mathArr[i]="0"
    }
}


let tot =0
for(let i=0; i<mathArr.length;i++){
    tot+=parseFloat(mathArr[i])
}

calString=tot.toString()
display()
}

function finished(mathArr){

if(mathArr.length==1){
    calString=mathArr[0]
    display()
}else{
    clearArr(mathArr)
    
  
}
}

function addOpperator(opp){

    switch(true){
        case opp=="X" || opp=="/" || opp=="%":
            if(calString.length==0){
                alert("You cannot start with opperator")
            }else{
                calString+=" "
                calString+=opp
                display()
            }
            break;
        case opp=="=":
            if(calString[calString.length-1]=="0" || calString[calString.length-1]=="1" || calString[calString.length-1]=="2" || calString[calString.length-1]=="3" || calString[calString.length-1]=="4" || calString[calString.length-1]=="5" || calString[calString.length-1]=="6" || calString[calString.length-1]=="7" || calString[calString.length-1]=="8" || calString[calString.length-1]=="9" || calString[calString.length-1]=="%"){
            buildArr()

             }else{

                alert("cannot end on an opperator")
            }
            
        break;
        case  calString[calString.length-1]=="√" || calString[calString.length-1]=="X" || calString[calString.length-1]=="/":
            alert("You cannot follow one opperator after another")
            break;
        case calString.length>=14:
            alert("Max length reached")
        break;
        default:
            calString+=" "
            calString+=opp
            display()                
    }

    


}




const numBtns = document.querySelectorAll(".num")


numBtns.forEach((e)=>{
    e.addEventListener("click",()=>{ 
        addNum(e.innerHTML)})
})

const oppBtns = document.querySelectorAll(".operator")

oppBtns.forEach((e)=>{
    e.addEventListener("click", ()=>{
        addOpperator(e.id)
    })
})

const clearBtn = document.getElementById("C")

clearBtn.addEventListener("click", ()=>{
    calString=""
    const out = document.getElementById("screenText")
    out.innerHTML="0"
} )

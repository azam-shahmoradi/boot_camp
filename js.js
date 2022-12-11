function EvenNumber() {
    for (let index = 2; index < 7000; index=index+2) {
        console.log(index);
    }
}
function OddNumber() {
    console.clear();
    for (let index = 1; index < 10000; index=index+2) {
        console.log(index);
    }
}
function SumArray() {
    console.clear();
    let sum=0;
    let Arr=[1,13,22,123,49];
    for (let index = 0; index < 4; index++) {
        sum+=Arr[index];
    }
    console.log(sum);
}
function DeleteArray() {
    console.clear();
    let Arr=[1,13,22,123,49];
    for (let index = 0; index < 4; index++) {
        delete Arr[index];
    }
    console.log(Arr);
}
function Numbers() {
    console.clear();
    
    for (let i = 1; i <= 8; i++) {
        let str="";
        for(let j=1;j<=i;j++)
             str+=" "+j;
        console.log(str);
    }
    
}
function MaxArryaValue() {
    console.clear();
    let Arr=[1,13,22,123,49];
    max=Arr[0];
    for (let i = 1; i <5; i++) {
        
       if(Arr[i]>max)
       max=Arr[i];
    }
 console.log(max);   
}
function MinArryaValue() {
    console.clear();
    let Arr=[1,13,22,123,49];
    min=Arr[0];
    for (let i = 1; i <5; i++) {
        
       if(Arr[i]<min)
       min=Arr[i];
    }
 console.log(min);   
}
function SecondMinArryaValue() {
    console.clear();
    let Arr=[1,13,22,123,49];
    
    let tmp;
    for (let i = 0; i <4 ; i++) {
        for(let j=i+1; j<5 ; j++)
            if(Arr[i]>Arr[j])
            {
                 tmp=Arr[i];
                 Arr[i]=Arr[j];
                 Arr[j]=tmp;
            }
      
    }
    console.log(Arr);
 console.log(Arr[1]);   
}
function reverseMinArryaValue() {
    console.clear();
    input=prompt("Please enter a string...")
    
    let len=input.length;
    let ReverseString="";
    for (let i = len; i >0 ; i--) {
      ReverseString+=input.substring(i,i-1);  
      
    }
    console.log(ReverseString);
 
}
function MultipleTable() {
    console.clear();
    let result="";
    for (let i = 1; i <=10 ; i++)
    {
        result="";
       for (let j = 1; j <=10 ; j++)
        {
            mul=i*j;
            
            result=result+mul.toString()+" ";
            
        
        }  
      console.log(result);
    }
   
 
}
function duplicateData() {
    console.clear();
    let Arr=[1,13,22,13,49];
    
    let tmp;
    for (let i = 0; i <4 ; i++) {
        for(let j=i+1; j<5 ; j++)
            if(Arr[i]>Arr[j])
            {
                 tmp=Arr[i];
                 Arr[i]=Arr[j];
                 Arr[j]=tmp;
            }
      
    }
    msg="notfound"
    for (let i = 1; i <4 ; i++) 
        {
            if(Arr[i]==Arr[i-1] || Arr[i]==Arr[i+1])
            {
             console.log( "number " + Arr[i] +" is repeated")
             msg="found";
            }

        }

    console.log(Arr);
 console.log(msg);   
}
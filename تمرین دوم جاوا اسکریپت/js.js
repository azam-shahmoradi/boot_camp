function EvenNumber() {
    let input=prompt("یک عدد وارد کنید");
    let arr="";

    for(let i=1;i<=input;i++)
    {
    arr="";    
    for(let k=input+1;k>i;k--)
        arr+=" ";
    for(let j=1;j<=i*2-1;j++)
        arr+="*";
    console.log(arr);
   
    }
    for(let i=input-1;i>=1;i--)
    {
    arr="";
    for(let k=input+1;k>i;k--)
        arr+=" ";
    for(let j=1;j<=i*2-1;j++)
        arr+="*";
    console.log(arr);
    
    }
}
    
    
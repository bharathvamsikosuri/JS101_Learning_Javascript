for(let i=1;i<=100;i++){

  let num= i;
let ct=0;
for(let j=1; j<=num;j++){
  if(num%j==0){
    ct++;
  }
}

if(ct==2){
  console.log(i,"<----prime numbers ");
}

}


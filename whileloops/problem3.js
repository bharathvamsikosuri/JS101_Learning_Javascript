let ct=0;
let sum=1;
for (let i=1; i<=100; i++){
  if(i%2==0){
    sum=i+sum 
    ct++
  }
}
  console.log(sum/ct);
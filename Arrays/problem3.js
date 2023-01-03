let ct=0;
let sum=0;
let arr=[12,876,90,65,70,72,108,77,63];
for(i=0;i<=arr.length;i++){
    if(arr[i]%2==0){
      ct++;
      sum=sum+arr[i]
      // console.log(arr[i])
     }
}
  console.log(sum/ct);
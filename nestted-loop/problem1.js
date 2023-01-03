let a=0;
for(month=1;month<=12;month++){
  if(month==2){
    a=28;
  }
  else if((month==4)||(month==6)||(month==9)||(month==11)){
    a=30;
  }
  else{
    a=30;
  }
  for(let day=1;day<=a;day++){
    console.log(day,"-",month);
  }
}
for(let hori=1; hori<=10;hori++){
  let box= "";
  for(let vert=1; vert<=10;vert++){
    if(hori==1 ||hori==10){
      box= box+"*";
      // console.log(box)
    }
    else if(vert==1 || vert==10){
      box= box+ "*";
      // console.log(box)
    }
    else{
      box= box+ " ";
    }
   }
console.log(box);
}
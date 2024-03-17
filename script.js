
     const btn = document.getElementById("brand");
     let flag=false;
     btn.addEventListener("click", ()=>{
      flag = !flag;
      if(flag){
        document.getElementById("brandexpand").style.display="block";
        event.preventDefault();
      }
     })

     const btn1 = document.getElementById("impact");
     let flag1=false;
     btn1.addEventListener("click", ()=>{
      flag1 = !flag1;
      if(flag1){
        document.getElementById("impactexpand").style.display="block";
        event.preventDefault();
      }
     })

     const btn3 = document.getElementById("story");
     let flag3=false;
     btn3.addEventListener("click", ()=>{
      flag3 = !flag3;
      if(flag3){
        document.getElementById("storyexpand").style.display="block";
        event.preventDefault();
      }
     })

     const btn4 = document.getElementById("equal");
     let flag4=false;
     btn4.addEventListener("click", ()=>{
      flag4 = !flag4;
      if(flag4){
        document.getElementById("equalexpand").style.display="block";
        event.preventDefault();
      }
      else{
        document.getElementById("equalexpand").style.display="none";
        document.getElementById("impactexpand").style.display="none";
      }
     })


// let x = document.getElementById("searchbar");
// let y = document.getElementById("product1content");

// let q = document.getElementsByTagName("p1");
// console.log(q);

let x = document.getElementById("searchbar").value.toUpperCase();
let z = document.getElementById("product1content");
let y = document.getElementsByClassName("content2");
let pname = document.getElementsByTagName("p1");

 for(let i=0;i<pname.length; i++)
 {
      let match = y[i].getElementsByTagName("p1")[0];
       if(match){
           let textvalue = match.textcontent || match.innerHTML;
            
            if(textvalue.toUpperCase().indexof(searchbar)>-1)
            {
                product[i].style.display = "";
            }else{
                product[i].style.display = "none";
            }
            console.log(match);
       }



  




}


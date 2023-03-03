// you can write your js code here
let LSData=JSON.parse(localStorage.getItem("book-list"));
let tbody=document.querySelector("tbody");

if(LSData==null) LSData=[];

LSData.forEach((element) =>{

    let tr=document.createElement("tr")

     let td1=document.createElement("td")
      td1.innerText=element.name;
    let td2=document.createElement("td")
     td2.innerText=element.author;
    let td3=document.createElement("td")
      td3.innerText=element.desc;
    let td4=document.createElement("td")
      td4.innerText=element.added;
    let td5=document.createElement("td")
      td5.innerText=element.category;
    let td6=document.createElement("td")
     td6.innerText=element.price;
    localStorage.setItem("bookmark",JSON.stringify(bookmarkData));


    tr.append(td1,td2,td3,td4,td5,td6);
    tbody.append(tr);
});

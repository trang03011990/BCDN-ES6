let string="HoverMe!";
let chars=[...string];
console.log(chars);
let add=(array)=>{
    let content="";
    array.map((item)=>{
        content+=`<span>${item}</span>`
    })
    document.querySelector(".heading").innerHTML=content;
}
add(chars);
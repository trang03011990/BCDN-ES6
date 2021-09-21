const colorList = ["pallet", "viridian", "pewter", "cerulean", "vermillion", "lavender", "celadon", "saffron", "fuschia", "cinnabar"];
let hienThiMau=(mang)=>{
    let content="";
    mang.map(item=>{
        content+=`
        <button class="color-button ${item}" onclick="doiMau('${item}');"></button>`
    });
    document.getElementById("colorContainer").innerHTML=content;
}
hienThiMau(colorList);

let doiMau=(item)=>{
    document.getElementById("house").classList.remove(...colorList);
    document.getElementById("house").classList.add(`${item}`);
}
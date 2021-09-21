let diemTB=(...diem)=>{
    let tong=0;
    let soluong=0;
    diem.map((item)=>{
    tong+=item;
    soluong++;
    })
    return tong/soluong;
}

document.getElementById("btnKhoi1").onclick = ()=>{
    let diemToan=parseFloat(document.getElementById("inpToan").value);
    let diemLy=parseFloat(document.getElementById("inpLy").value);
    let diemHoa=parseFloat(document.getElementById("inpHoa").value);
    document.getElementById("tbKhoi1").innerHTML = diemTB(diemToan,diemLy,diemHoa);
}

document.getElementById("btnKhoi2").onclick = ()=>{
    let diemVan=parseFloat(document.getElementById("inpVan").value);
    let diemSu=parseFloat(document.getElementById("inpSu").value);
    let diemDia=parseFloat(document.getElementById("inpDia").value);
    let diemAnh=parseFloat(document.getElementById("inpEnglish").value);
    document.getElementById("tbKhoi2").innerHTML = diemTB(diemVan,diemSu,diemDia,diemAnh);
}
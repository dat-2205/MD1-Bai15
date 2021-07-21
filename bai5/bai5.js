
let SP = []
let display = document.getElementById("display")
function drawtable(){
    let data =''
        data = "<table border='1' cellpadding='10px' style='border-collapse: collapse;'> <tr><th>ID</th><th class='name'>Tên</th><th class='price'>Giá</th><th class='quantity'>Số Lượng</th></tr>"
    for (i=0;i<SP.length;i++) {
        data += `<tr><td class="id">${(i+1)}</td>
                     <td class="name" id="${i}0">${SP[i][0]}</td>
                     <td class="price" id="${i}1">${SP[i][1]}</td>
                     <td class="quantity" id="${i}2">${SP[i][2]}</td>
                     <td><button onclick="replace(${i})">Sửa</button></td>
                     <td><button onclick="dele('${i}')">Xoá</button></td>
                     </tr>`
    }
    data += "</table>";
    display.innerHTML = data;
}
function add() {
    let add = []
    let tensanpham = document.getElementById("sanpham").value;
    let giasanpham = document.getElementById("giasanpham").value;
    let soluong = document.getElementById("soluong").value;

    add.push(tensanpham);
    add.push(giasanpham);
    add.push(soluong);

    for( let i=0;i<SP.length;i++) {
        if(SP[i][0] == tensanpham){

            return alert("Sản phẩm đã tồn tại") ;
        }
    }
    SP.push(add)
    console.log(SP)
    drawtable()
}
function replace(value) {
    document.getElementById(value+'0').innerHTML = `<input type="text" id="change1" onchange="saveName(${value})" >`;
    document.getElementById(value+'1').innerHTML = `<input type="text" id="change2" onchange="savePrice(${value})">`;
    document.getElementById(value+'2').innerHTML = `<input type="text" id="change3" onchange="saveQuantity(${value})">`;

}
function saveName(value) {
    let tensua = document.getElementById("change1").value;
    SP[value][0] = tensua
}
function savePrice(value) {
    let giasua = document.getElementById("change2").value;
    SP[value][1] = giasua
}
function saveQuantity(value) {
    let soluongsua = document.getElementById("change3").value;
    SP[value][2] = soluongsua
    drawtable()
}
function  dele(value) {
    SP.splice(value,1)
    drawtable()
}


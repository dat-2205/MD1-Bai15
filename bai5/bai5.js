
let SP = []
let display = document.getElementById("display")
function drawtable(){
    let data =''
        data = "<table border='1' cellpadding='10px' style='border-collapse: collapse;'> <tr><th>ID</th><th class='name'>Tên</th><th class='price'>Giá</th><th class='quantity'>Số Lượng</th></tr>"
    for (i=0;i<SP.length;i++) {
        data += `<tr><td class="id">${(i+1)}</td>
                     <td class="name">${SP[i][0]}</td>
                     <td class="price">${SP[i][1]}</td>
                     <td class="quantity">${SP[i][2]}</td>
                     <td><button onclick="replace('${i}')">Sửa</button></td>
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
    let tensua = prompt("Nhập tên sản phầm sửa:");
    let giasua = prompt("Nhập giá sản phầm sửa:");
    let soluongsua = prompt("Nhập số lượng sản phầm sửa:");
    SP[value][0] = tensua;
    SP[value][1] = giasua;
    SP[value][2] = soluongsua;
    drawtable()
}
function  dele(value) {
    SP.splice(value,1)
    drawtable()
}


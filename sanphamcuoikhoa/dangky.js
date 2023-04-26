var tendangnhap = document.getElementById("input_email")
var matkhau = document.getElementById("input_pass")
var matkhau2 = document.getElementById("input_pass_again")
var ten = document.getElementById("input_name")
var btn = document.getElementById("btn")
btn.addEventListener("click", function(){
    console.log(tendangnhap.value);
    console.log(matkhau.value)
    console.log(matkhau2.value)
    console.log(ten.value)
    window.location.href = "./index.html"
    validate()
    if (validate) {
        console.log(tendangnhap.value);
        console.log(matkhaumatkhau.value)
    }
})
function validate() {
    if (tendangnhap.value == "") {
        alert("Tên đăng nhập không được để trống!");
        return false;
    }else if (matkhau.value == "") {
        alert("Mật khẩu không được để trống!");
        return false;
    }else if (matkhau2.value == "") {
        alert("Mật khẩu không được để trống!");
        return false;
    }else if (ten.value == "") {
        alert("Tên không được để trống!");
        return false;
    }

}
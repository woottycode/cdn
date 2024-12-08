  let dataUser
google.script.run.withSuccessHandler((item)=>{
dataUser = item
let  userName =  localStorage.getItem("userLogin")
let  staUser =  localStorage.getItem("statusLogin")
console.log(userName)
if(userName!=null){
$('#nameUser').text(userName)
$('#statusUser').text(staUser)
$('.loginForm').hide()
$('#menuMain').show()
}else{
 $('.loginForm').show()
 $('#menuMain').hide()

}
offOverlay()
}).getData('User')

function loginUser(){
event.preventDefault()
let user = $('#logUser').val()
onOverlay()
let item = dataUser.filter(r=>r[1] == user)
if(item!=""){
 localStorage.setItem("userLogin",item[0][2])
 localStorage.setItem("statusLogin",item[0][6])
offOverlay()
 Swal.fire({
  position: "top-center",
  icon: "success",
  title: "เข้าระบบสำเร็จ",
  showConfirmButton: false,
  timer: 1000
});
$('#nameUser').text(item[0][2])
$('#statusUser').text(item[0][6])
$('.loginForm').hide()
$('#menuMain').show()
}else{
  Swal.fire({
  position: "top-center",
  icon: "error",
  title: "รหัสผ่านไม่ถูกต้อง",
  showConfirmButton: false,
  timer: 1000
});
  offOverlay()
}

}

function reset(){
  localStorage.clear()
  
}

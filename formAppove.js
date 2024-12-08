let nameAdmin,posiAdmin,sigAdmin
function loadAdmin(){
  let nameUser = $('#nameUser').text()
  let item = dataUser.filter(r=>r[2]==nameUser)
  nameAdmin = item[0][2]
  posiAdmin = item[0][3]
  sigAdmin = item[0][5]
  statusAdmin = item[0][6]
}

  
function saveAppLeave(){
let idcode = $('#idcode').val()
let txtNo = $('#txtNo2').val()
let nameUser = $('#lableL1').text()

onOverlay() 
  google.script.run.withSuccessHandler(()=>{
  Swal.fire({
  position: "top-center",
  icon: "success",
  title: "บันทึกเรียบร้อย",
  showConfirmButton: false,
  timer: 1500
});
offOverlay()
    $('#modalAppM3').modal('hide')
google.script.run.withSuccessHandler(lableLeave).getData('dataLeave')
  google.script.run.withSuccessHandler((result)=>{
      dataLeave = result
    let item = result.filter(r=>r[0]==idcode)
    if(item[0][16]!=""){
      google.script.run.withSuccessHandler(()=>{
google.script.run.withSuccessHandler(lableLeave).getData('dataLeave')
        }).runPDFLeave(idcode,nameUser)
        }
  }).getData('dataLeave')

  }).saveDataAppM3(idcode,statusAdmin,txtNo,nameAdmin,posiAdmin,sigAdmin)
}



function checkNoM3(){
let chekLog = $('.form-check-inputM3[type=radio]:checked').val();

if( chekLog=="อนุญาต"){
$('#txtNo2').hide()
$('#txtNo2').val(chekLog)
}else{
$('#txtNo2').show()
$('#txtNo2').val(" เพราะ ")
}
}


 let dataTime
  google.script.run.withSuccessHandler((result)=>{
      dataTime = result
  }).getData('setTime')


  google.script.run.withSuccessHandler(lableTea).getData('User')
function lableTea(item){
  if(item) {
      let result = "<div class='table'>"
          var n=1
           for(var i=0; i<item.length; i++) {
               result += "<tr>";
               result += "<td class='text-center '>"+[n]+"</td>" 
               result += "<td class=''>"+item[i][2]+"</td>" 
               if(item[i][7]!==''&&item[i][7]=='มา'){
               result += "<td class='text-center text-success'> "+item[i][8]+"</td>"  
               }else if(item[i][7]!==''&&item[i][7]!=='มา'){
               result += "<td class='text-center text-primary'> "+item[i][7]+"</td>"  
               }else{
               result += "<td class='text-center text-danger '>รอลงเวลา</a></td>" 
               }
               n++
              }
        $("#showlistTea").html(result)
        
    }
}
</script>


<script>
  showTime()
  function showTime() {
    const date = new Date();
    let h = date.getHours(); // 0 - 23
    let m = date.getMinutes(); // 0 - 59
    let s = date.getSeconds(); // 0 - 59
    const dot = document.innerHTML = ' ';

    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    const time = h + ":" + m + ":" + s + dot;
    const time2 = h + "." + m + " น.";
    document.getElementById("MyClockDisplay").innerHTML = time;
    document.getElementById("MyClockDisplay2").innerHTML = time2;
    setTimeout(showTime, 1000);

let today = new Date().toLocaleDateString('th-TH', {
  year: 'numeric',
  month: 'numeric',
  day: 'numeric',
})

$('#txtDay').text(today)
$('#dataDay').val(today)

  }


let distance
function onCheckTime(el){
  getlocation() 
  distance = getDistanceFromLatLonInKm(lat1,lon1,lat2,lon2)
  let nameUser =$('#nameUser').text()
  let itemU = dataUser.filter(r=>r[2]==nameUser)

$('#ModalTime').modal('show')
$('#dataL1').val(itemU[0][2])
$('#dataL2').val(itemU[0][3])
$('#dataL3').val(itemU[0][5])
$('#dataL9').val(itemU[0][8])
$('#dataL10').val(itemU[0][9])
$('#dataL11').val(itemU[0][10])
$('#dataL12').val(itemU[0][11])
$('#dataL13').val(itemU[0][20])
$('#dataL14').val(itemU[0][21])
$('#dataL15').val(itemU[0][22])
$('#dataL16').val(itemU[0][23])
$('#dataGroup').val(itemU[0][4])

}

let lat1,lon1
function getlocation() {
$('#mainCheckTime').show()
$('#menuMain').hide()
              function success(position) {
              lat1  = position.coords.latitude;
              lon1 = position.coords.longitude;   
              }

              function error() {
                alert('ไม่สามารถเรียกข้อมูลตำแหน่งของคุณได้')
              }

              if(!navigator.geolocation) {
                alert('เบราว์เซอร์ของคุณไม่รองรับตำแหน่งทางภูมิศาสตร์')
              } else {

                navigator.geolocation.getCurrentPosition(success, error);
              }
     
      }


function getDistanceFromLatLonInKm(lat1,lon1,lat2,lon2) {
  var R = 6371; // Radius of the earth in km
  var dLat = deg2rad(lat2-lat1);  // deg2rad below
  var dLon = deg2rad(lon2-lon1); 
  var a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
    Math.sin(dLon/2) * Math.sin(dLon/2)
    ; 
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
  var d = R * c; // Distance in km
  return d;
}

function deg2rad(deg) {
  return deg * (Math.PI/180)
}




function checkTime(val){
  if(val=="ขอลา"){
    $('#mainLeave').show()
    $('#btn_time').hide()

  }else{
    $('#mainLeave').hide()
  }
let nameUser = $('#nameUser').text()
let result = dataUser.filter(r=>r[1]==nameUser)
}

function formback(){
$('#mainCheckTime').hide()
$('#menuMain').show()
}

function saveTime(){
   onOverlay()
        let status = $('#statusUser').text()
        var chekLog = $('.form-check-input1[type=radio]:checked').val();
        let nameUserM1 = $('#dataL1').val()
        let posiUser = $('#dataL2').val()
        let sigUser = $('#dataL3').val()
        let clock = $('#MyClockDisplay2').text()
        let groupTime = $('#dataGroup').val()
if(chekLog=="มา"&&status!="Admin"&&distance<50){
     google.script.run.withSuccessHandler(function (output){
  offOverlay() 
$('#ModalTime').modal('hide')
   const msg =  '<h3>' + nameT + '</h3><span class="text-danger">เวลามา:'+ clock +'</span><span class="text-primary"> สถานะ :'+chekLog+'</span>'
    Swal.fire({
      position: 'top-center',
      icon: "success",
      html: msg,
      showConfirmButton: false,
      timer: 3000
    })

  google.script.run.withSuccessHandler((result)=>{
      dataTime = result
  }).getData('setTime')

  google.script.run.withSuccessHandler(lableTea).getData('User')
      }).uploadSignature(nameUserM1,posiUser,sigUser,clock,chekLog,groupTime)

}else{
      google.script.run.withSuccessHandler(function (output){
     offOverlay() 
     $('#ModalTime').modal('hide')
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "บันทึกเรียบร้อย",
          showConfirmButton: false,
          timer: 1000
        });
  google.script.run.withSuccessHandler((result)=>{
      dataTime = result
  }).getData('setTime')
  google.script.run.withSuccessHandler(lableTea).getData('User')
  google.script.run.withSuccessHandler(lableTeaing).getData('teaching')
         }).uploadSignature(nameUserM1,posiUser,sigUser,clock,chekLog,groupTime)
}

}


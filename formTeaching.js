 let dataUser2
  google.script.run.withSuccessHandler((result)=>{
    dataUser2= result
  }).getDataH('User2')



google.script.run.withSuccessHandler(function(ar){
      var listSelect = document.getElementById("inputUser");    
      ar.forEach(function(item){    
        let option = document.createElement("option");
        option.text = item;
        listSelect.appendChild(option);    
      });
    }).getListTeacher();


function detailT(){
let dayNow = $("#inputWeek").val()
let nameTea = $("#inputUser").val()

if(dayNow!==""&&nameTea!=""){
let item = dataUser2.filter(r=>r[2]==nameTea)
let col = dataUser2[0].indexOf(dayNow)
$("#formsetTable").show()
$("#exampleForm").modal('show')
$("#inputK1_2").val(item[0][col])
$("#inputK2_2").val(item[0][col+1])
$("#inputK3_2").val(item[0][col+2])
$("#inputK4_2").val(item[0][col+3])
$("#inputK5_2").val(item[0][col+4])
$("#inputK6_2").val(item[0][col+5])
$("#inputK7_2").val(item[0][col+6])
$("#inputK8_2").val(item[0][col+7])

item[0][col]=="ว่าง" ? $("#inputK1_3").hide() : $("#inputK1_3").show()
item[0][col+1]=="ว่าง" ? $("#inputK2_3").hide() : $("#inputK2_3").show()
item[0][col+2]=="ว่าง" ? $("#inputK3_3").hide() : $("#inputK3_3").show()
item[0][col+3]=="ว่าง" ? $("#inputK4_3").hide() : $("#inputK4_3").show()
item[0][col+4]=="ว่าง" ? $("#inputK5_3").hide() : $("#inputK5_3").show()
item[0][col+5]=="ว่าง" ? $("#inputK6_3").hide() : $("#inputK6_3").show()
item[0][col+6]=="ว่าง" ? $("#inputK7_3").hide() : $("#inputK7_3").show()
item[0][col+7]=="ว่าง" ? $("#inputK8_3").hide() : $("#inputK8_3").show()

$("#inputUPosi").val(item[0][3])
$("#inputUSing").val(item[0][5])

searchTea(dayNow)
}

}

function searchTea(dayNow){
onOverlay()
let period1 = $('#inputK1_1').val()
let period2 = $('#inputK2_1').val()
let period3 = $('#inputK3_1').val()
let period4 = $('#inputK4_1').val()
let period5 = $('#inputK5_1').val()
let period6 = $('#inputK6_1').val()
let period7 = $('#inputK7_1').val()
let period8 = $('#inputK8_1').val()

if(dayNow!=""){
  google.script.run.withSuccessHandler(function(ar){
      var listSelect = document.getElementById("inputK1_3");    
      ar.forEach(function(item){    
        let option = document.createElement("option");
        option.text = item;
        listSelect.appendChild(option);    
      });
      offOverlay()
    }).getListUser(dayNow,period1);

  google.script.run.withSuccessHandler(function(ar){
      var listSelect = document.getElementById("inputK2_3");    
      ar.forEach(function(item){    
        let option = document.createElement("option");
        option.text = item;
        listSelect.appendChild(option);    
      });
    }).getListUser(dayNow,period2);

  google.script.run.withSuccessHandler(function(ar){
      var listSelect = document.getElementById("inputK3_3");    
      ar.forEach(function(item){    
        let option = document.createElement("option");
        option.text = item;
        listSelect.appendChild(option);    
      });
    }).getListUser(dayNow,period3);

  google.script.run.withSuccessHandler(function(ar){
      var listSelect = document.getElementById("inputK4_3");    
      ar.forEach(function(item){    
        let option = document.createElement("option");
        option.text = item;
        listSelect.appendChild(option);    
      });

    }).getListUser(dayNow,period4);

  google.script.run.withSuccessHandler(function(ar){
      var listSelect = document.getElementById("inputK5_3");    
      ar.forEach(function(item){    
        let option = document.createElement("option");
        option.text = item;
        listSelect.appendChild(option);    
      });

    }).getListUser(dayNow,period5);

  google.script.run.withSuccessHandler(function(ar){
      var listSelect = document.getElementById("inputK6_3");    
      ar.forEach(function(item){    
        let option = document.createElement("option");
        option.text = item;
        listSelect.appendChild(option);    
      });

    }).getListUser(dayNow,period6);

  google.script.run.withSuccessHandler(function(ar){
      var listSelect = document.getElementById("inputK7_3");    
      ar.forEach(function(item){    
        let option = document.createElement("option");
        option.text = item;
        listSelect.appendChild(option);    
      });

    }).getListUser(dayNow,period7);

  google.script.run.withSuccessHandler(function(ar){
      var listSelect = document.getElementById("inputK8_3");    
      ar.forEach(function(item){    
        let option = document.createElement("option");
        option.text = item;
        listSelect.appendChild(option);    
      });
    }).getListUser(dayNow,period8);

}

}


// ดึงข้อมูลชื่อครูที่คาบว่าง
function serachSig1(val){
let ucheck = dataSaveT.filter(r=>r[11]==val)
if(ucheck!=""&&val!="ว่าง"){
        Swal.fire({
        position: "top-center",
        icon: "warning",
        title: "ชื่อครูแทนซ้ำคาบสอน",
        showConfirmButton: false,
      });  
}
  let item = dataUser.filter(r=>r[2]==val)
    $("#inputK1_4").val(item[0][5])
}

function serachSig2(val){
  let ucheck = dataSaveT.filter(r=>r[15]==val)
if(ucheck!=""&&val!="ว่าง"){
        Swal.fire({
        position: "top-center",
        icon: "warning",
        title: "ชื่อครูแทนซ้ำคาบสอน",
        showConfirmButton: false,
      });  
}
  let item = dataUser.filter(r=>r[2]==val)
    $("#inputK2_4").val(item[0][5])
}

function serachSig3(val){
    let ucheck = dataSaveT.filter(r=>r[19]==val)
if(ucheck!=""&&val!="ว่าง"){
        Swal.fire({
        position: "top-center",
        icon: "warning",
        title: "ชื่อครูแทนซ้ำคาบสอน",
        showConfirmButton: false,
      });  
}
  let item = dataUser.filter(r=>r[2]==val)
    $("#inputK3_4").val(item[0][5])
}

function serachSig4(val){
    let ucheck = dataSaveT.filter(r=>r[23]==val)
if(ucheck!=""&&val!="ว่าง"){
        Swal.fire({
        position: "top-center",
        icon: "warning",
        title: "ชื่อครูแทนซ้ำคาบสอน",
        showConfirmButton: false,
      });  
}
  let item = dataUser.filter(r=>r[2]==val)
    $("#inputK4_4").val(item[0][5])
}

function serachSig5(val){
    let ucheck = dataSaveT.filter(r=>r[27]==val)
if(ucheck!=""&&val!="ว่าง"){
        Swal.fire({
        position: "top-center",
        icon: "warning",
        title: "ชื่อครูแทนซ้ำคาบสอน",
        showConfirmButton: false,
     });  
}
  let item = dataUser.filter(r=>r[2]==val)
    $("#inputK5_4").val(item[0][5])
}

function serachSig6(val){
    let ucheck = dataSaveT.filter(r=>r[32]==val)
if(ucheck!=""&&val!="ว่าง"){
        Swal.fire({
        position: "top-center",
        icon: "warning",
        title: "ชื่อครูแทนซ้ำคาบสอน",
        showConfirmButton: false,
      });  
}
  let item = dataUser.filter(r=>r[2]==val)
    $("#inputK6_4").val(item[0][5])
}

function serachSig7(val){
    let ucheck = dataSaveT.filter(r=>r[35]==val)
if(ucheck!=""&&val!="ว่าง"){
        Swal.fire({
        position: "top-center",
        icon: "warning",
        title: "ชื่อครูแทนซ้ำคาบสอน",
        showConfirmButton: false,
      });  

}
  let item = dataUser.filter(r=>r[2]==val)
    $("#inputK7_4").val(item[0][5])
}


function serachSig8(val){
    let ucheck = dataSaveT.filter(r=>r[39]==val)
if(ucheck!=""&&val!="ว่าง"){
        Swal.fire({
        position: "top-center",
        icon: "warning",
        title: "ชื่อครูแทนซ้ำคาบสอน",
        showConfirmButton: false,
      });  
}
  let item = dataUser.filter(r=>r[2]==val)
    $("#inputK8_4").val(item[0][5])
}

// บันทึกข้อมูล
function saveFormAddT(obj){
  event.preventDefault()
  onOverlay()
  google.script.run.withSuccessHandler(()=>{
      offOverlay() 
        Swal.fire({
        position: "top-center",
        icon: "success",
        title: "บันทึกเรียบร้อย",
        showConfirmButton: false,
        timer: 1500
      });  
  $('#myformAdd').trigger("reset"); //Line1
  $("#exampleForm").modal('hide')
  google.script.run.withSuccessHandler(lableTeaing).getData('teaching')
  }).saveDataSaveTeaing(obj)
}
// บันทึกข้อมูล

function saveFormEditT(obj){
  event.preventDefault()
  onOverlay()
  google.script.run.withSuccessHandler(()=>{
      offOverlay() 
        Swal.fire({
        position: "top-center",
        icon: "success",
        title: "บันทึกเรียบร้อย",
        showConfirmButton: false,
        timer: 1500
      });  
  $("#exampleForm").modal('hide')
     $('#showTxt').hide()
     $('#btn-save2').hide()
  google.script.run.withSuccessHandler(lableTeaing).getData('teaching')
  }).saveDataEditT(obj)
}

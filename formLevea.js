  let dataSetting,lat2,lon2,schoolName
  google.script.run.withSuccessHandler((result)=>{
    $('#dataYear').val(result[14][1])
    $('#school1').text(result[0][1])
    $('#school2').text(result[1][1])
    $('#logo').attr('src',result[3][1])
    schoolName = result[0][1] +" "+ result[1][1]+" "+result[2][1]
    lat2 = result[11][1]
    lon2 = result[12][1]
    
  }).getData('setting')



let dataLeave
google.script.run.withSuccessHandler(lableLeave).getData('dataLeave')
function lableLeave(item){
  dataLeave = item
  if(item) {
      let result = "<div class='table'>"+
            "<table style='font-size:10px' >"+    
              "<thead>"+                    
                   "<tr>"+ 
                  "<th class='text-center'>ที่</th>"+    
                  "<th class='text-center '>ชื่อสกุลผู้ขอ</th>"+        
                  "<th class='text-center '>สถานะ</th>"+        
                  "<th class='text-center '>เอกสาร</th>"+        
                  "</tr>"+                            
                   "</thead>";
          var n=1
           for(var i=0; i<item.length; i++) {
               result += "<tr>";
               result += "<td >"+item[i][0]+"</td>" 
               result += "<td>"+item[i][3]+"</td>" 
               if(item[i][16]!==''){
               result += "<td class='text-center '><a class='btn btn-sm btn-success'><i class='bx bx-check-circle text-white '></i> เรียบร้อย</a></td>"  
               }else{
               result += "<td class='text-center '><a class='btn btn-sm btn-warning' onclick='onCheckLeave(this);' ><i class='bx bx bx-x-circle bx-spin text-white'></i> รออนุมัติ</a></td>" 
               }
               if(item[i][21]!==''){
               result += "<td class='text-center '><a href='"+item[i][21]+"' target='_blank' class='btn btn-sm btn-info'><i class='bx bx-file text-white '></i> ใบลา</a></td>"  
               }else{
               result += "<td class='text-center '></td>" 
               }
               n++
              }
        $("#showlistLeave").html(result)
        new DataTable('#showlistLeave', {
      destroy: true,    //ซ่อนคอลัม
      responsive : true,
      "searching": false,
      order: [[0, 'desc']],
      language: {
          url: '//cdn.datatables.net/plug-ins/2.1.8/i18n/th.json',
      },
     
});     
    }
}

let cart = []
function addtocart(val) {
  let nameUser = $('#dataL1').val()
  let posiUser = $('#dataL2').val()
  let sigUser = $('#dataL3').val()
  let groupUser = $('#dataGroup').val()
  let dataL4 = $('#dataL4').val()
   var pass = true;
    if(pass) {
        var obj = {
            day:val,
            nameUser:nameUser,
            posiUser:posiUser,
            groupUser:groupUser,
            sigUser:sigUser,
            dataL4:dataL4,
        };
        cart.push(obj)
    }
rendercart();
let nl = cart.length-1
 console.log(nl)
$('#dataL8').val(cart.length)
$('#dataL6').val(cart[0].day)
$('#dataL7').val(cart[nl].day)
}

function rendercart() {

    if(cart.length > 0) {
      let result = "<div><table>"
        var n=1
           for(var i=0; i<cart.length; i++) {
                result += "<tr>";
                result += '<td>'+ [n]+ '</td>';    
                result += '<td>'+ (cart[i].day) + '</td>';    
                result += '<td onclick="del(this)" data-menuid="+ (cart[i].day) +"><i class="bx bx-trash bx-sm text-danger"></i></td>';      
                result += "</tr>";
                n++
      }


        $("#mycart").html(result)
    }
}



function del(row){
  const tr = row.parentNode
  const menu_id = row.dataset.menuid
  var index = cart.findIndex(item => item.id === +menu_id);
  cart.splice(index, 1);
  tr.remove()
$('#dataL8').val(cart.length)
$('#dataL6').val(cart[0].day)
$('#dataL7').val(cart[nl].day)
}







  function onCheckLeave(el){
    let status = $('#statusUser').text()
    var idx = el.parentNode.parentNode.cells[0].innerHTML; 
     $('#idcode').val(idx)
     $('#idadmin').val(status)
let ditem = dataLeave.filter(r=>r[0]==idx)

     $('#idcode').text(ditem[0][0])
     $('#lableL1').text(ditem[0][3])
     $('#lableL2').text(ditem[0][7])
     $('#lableL3').text(ditem[0][8])
     $('#lableL4').text(ditem[0][6])


  if(status=="Admin"){
  $('#modalAppM3').modal('show')
    }else{
        Swal.fire({
  position: "top-center",
  icon: "error",
  title: "สำหรับผู้อำนวยการเท่านั้น",
  showConfirmButton: false,
  timer: 1500
});
    }
  }


function saveFormLeave(obj){
event.preventDefault()
onOverlay()
google.script.run.withSuccessHandler(()=>{
      offOverlay()
    google.script.run.withSuccessHandler((item)=>{
      dataUser = item
  }).getData('user')
google.script.run.withSuccessHandler(lableTea).getData('User')
google.script.run.withSuccessHandler(lableTeaing).getData('teaching')
$('#ModalTime').modal('hide')
  }).saveDataLeave(obj)
 google.script.run.withSuccessHandler(()=>{
    google.script.run.withSuccessHandler((item)=>{
      dataUser = item
  }).getData('user')
  }).saveTimeLeave(cart)
}

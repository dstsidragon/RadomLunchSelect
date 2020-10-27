const lunchBtn=document.querySelector('.lunchBtn');
const lunchBtn2=document.querySelector('.lunchBtn2');
const lunchItems=['鴨肉飯','火雞肉飯','韓國冷麵','黑輪米血','農會麵攤','美濃粄條','大上海','生意好好','肯GG','自助餐','泰師傅'];
const lunchItemsLength=lunchItems.length;
// function RadomLunch(e){
//     e.preventDefault();
//     // alert(lunchItemsLength);
//     function randomNumber(){
//         return  lunchItems[Math.floor(Math.random()*lunchItemsLength)];
//     };

//     alert( randomNumber());
   
   
// };

$(document).ready(function () {
    //隨機選擇
    $("#lunchBtn").click(function (e) {
        e.preventDefault();
       $('#lunchBtn').attr('style', 'display:none;');
       $("#lunchBtn2").attr('style', 'display:block;');
       $("#Result").attr('style', 'display:block;');
       const txt2=$('<p></p>').text(lunchItems[Math.floor(Math.random()*lunchItemsLength)]);
       $('.selectName').append(txt2);
        // $('.resultItem').append( lunchItems[Math.floor(Math.random()*lunchItemsLength)]);
        // alert( lunchItems[Math.floor(Math.random()*lunchItemsLength)]);
    })
    //重新選擇
    $("#lunchBtn2").click(function (e) {
        e.preventDefault();
       $('#lunchBtn2').attr('style', 'display:none;');
       $("#lunchBtn").attr('style', 'display:block;');
       $('#Result').attr('style', 'display:none;');
       $('.selectName').empty();
    })
    
});



// //監聽
// lunchBtn.addEventListener('click',RadomLunch,false);
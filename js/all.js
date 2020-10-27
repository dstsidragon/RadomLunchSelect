const lunchBtn=document.querySelector('.lunchBtn');
const lunchItems=['鴨肉飯','火雞肉飯','韓國冷麵','黑輪米血','農會麵攤','美濃粄條','大上海','生意好好','肯GG','自助餐','泰師傅'];
const lunchItemsLength=lunchItems.length;
function RadomLunch(e){
    e.preventDefault();
    // alert(lunchItemsLength);
    function randomNumber(){
        return  lunchItems[Math.floor(Math.random()*lunchItemsLength)];
    };

    alert( randomNumber());
   
   
};





//監聽
lunchBtn.addEventListener('click',RadomLunch,false);
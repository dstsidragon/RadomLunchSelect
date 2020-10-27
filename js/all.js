const lunchBtn=document.querySelector('.lunchBtn');
const lunchItems=['鴨肉飯','雞肉飯','冷麵','黑輪米血','農會麵攤','美濃粄條',];
const lunchItemsLength=lunchItems.length;
function RadomLunch(){
    // alert(lunchItemsLength);
    function randomNumber(){
        return  lunchItems[Math.floor(Math.random()*lunchItemsLength)];
    };

    alert( randomNumber());
   
   
};





//監聽
lunchBtn.addEventListener('click',RadomLunch,false);
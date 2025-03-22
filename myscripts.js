function imgBig(obj, id_no) {      
    src = obj.src                         //thumb/bmi-calculator.gif
    src = src.replace("thumb", "image");  //image/bmi-calculator.gif
    //obj.src = src   
    //alert(src)
    let image = document.getElementById("imgPopup" + id_no); //imgPopup1, imgPopup2
    image.src = src 
}

function imgHide(id_no) {
    let image = document.getElementById("imgPopup" + id_no);
    image.src =""
}

/*
function imgSmall(obj) {                  // not in use  
    src = obj.src                         //image/bmi-calculator.gif
    src = src.replace("image", "thumb");  //thumb/bmi-calculator.gif
    obj.src = src 
}
*/

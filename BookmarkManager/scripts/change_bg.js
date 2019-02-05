if (localStorage.getItem('bgURL')===null) {
    document.getElementById('body').style.backgroundImage='url("images/background.jpg")';
}
else if(localStorage.getItem('bgURL')!==null){
    document.getElementById('body').style.backgroundImage='url('+JSON.parse(localStorage.getItem('bgURL'))+')';
}

//CHANGE BG URL
document.getElementById('confirm_change_bg_url').onclick=function () {
    let input_url=document.getElementById('input_image_url').value;
    if (input_url.length<1){
        document.getElementById('input_image_url').style.borderBottom='1px solid red';
        setTimeout(function () {
            document.getElementById('input_image_url').style.borderBottom='1px solid #fff';
        }, 1000)
    }
    else {
        localStorage.setItem('bgURL', JSON.stringify(input_url));
        document.getElementById('body').style.backgroundImage = 'url("' + input_url + '")';

        document.getElementById('modal_container_change_bg').style.display = 'none';
        document.getElementById('body').style.overflowY = 'visible';
        document.getElementById('input_image_url').value='';
        reset_chBg_Window();
    }
};

//set default
document.getElementById('set_default_bg').onclick=function(){
    document.getElementById('body').style.backgroundImage = 'url("images/background.jpg")';
    localStorage.removeItem('bgURL');
};


//--------------------don`t WORKED
//CHANGE BG UPLOAD
document.getElementById('confirm_change_bg_upload').onclick=function() {
    let input_upload=document.getElementById('input_image_upload').value;
    if (input_upload.length<1){
        document.getElementById('input_image_upload').style.borderBottom='1px solid red';
        setTimeout(function () {
            document.getElementById('input_image_upload').style.borderBottom='1px solid #fff';
        }, 1000)
    }
    else {
        localStorage.setItem('bgUpload', JSON.stringify(input_upload));
        document.getElementById('body').style.backgroundImage = 'url("' + input_upload + '")';


        document.getElementById('modal_container_change_bg').style.display = 'none';
        document.getElementById('body').style.overflowY = 'visible';
        document.getElementById('input_image_url').value='';
        reset_chBg_Window();
    }
};
//--------------------don`t WORKED






















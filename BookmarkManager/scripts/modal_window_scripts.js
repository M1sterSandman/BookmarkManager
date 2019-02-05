document.getElementById("add_button").onclick=function(){
    document.getElementById('modal_container-add').style.display = 'block';
    document.getElementById('body').style.overflowY = 'hidden';
};
document.getElementById("close_modal_butt1").onclick=function () {
    document.getElementById('modal_container-add').style.display = 'none';
    document.getElementById('body').style.overflowY = 'visible';
};

/*let elementId;

let tabsEvent=Array.from(document.getElementsByClassName("tab"));
tabsEvent.forEach(element=>element.oncontextmenu=function(event){
    event.preventDefault();
    document.getElementById('modal_container-change').style.display = 'block';
    document.getElementById('body').style.overflowY = 'hidden';
    elementId = this.id;
    console.log(elementId);
});*/


function reset_ch_ModWin(){
    document.getElementById("change_button").style.display="block";
    document.getElementById("delete_button").style.display="block";
    document.getElementById("changed_block-selected-wrapper").style.display="none";
    document.getElementById("back").style.display="none";

    document.getElementById("delete_block-selected").style.display="none";

    document.getElementById("change_name").value='';
    document.getElementById("change_address").value='';
}


document.getElementById("close_modal_butt2").onclick=function () {
    document.getElementById('modal_container-change').style.display = 'none';
    document.getElementById('body').style.overflowY = 'visible';
    //
    reset_ch_ModWin();
    //
};

document.getElementById("change_button").onclick=function () {
    document.getElementById("change_button").style.display="none";
    document.getElementById("delete_button").style.display="none";
    document.getElementById("changed_block-selected-wrapper").style.display="block";
    document.getElementById("back").style.display="block";
};
document.getElementById("back").onclick=function () {
    document.getElementById("change_button").style.display="block";
    document.getElementById("delete_button").style.display="block";
    document.getElementById("changed_block-selected-wrapper").style.display="none";
    document.getElementById("back").style.display="none";

    document.getElementById("delete_block-selected").style.display="none";
};

document.getElementById("delete_button").onclick=function () {
    document.getElementById("delete_block-selected").style.display="block";
    document.getElementById("change_button").style.display="none";
    document.getElementById("delete_button").style.display="none";
    document.getElementById("back").style.display="block";
};

document.getElementById("delete_no").onclick=function () {
    document.getElementById("change_button").style.display="block";
    document.getElementById("delete_button").style.display="block";
    document.getElementById("changed_block-selected-wrapper").style.display="none";
    document.getElementById("back").style.display="none";
    document.getElementById("delete_block-selected").style.display="none";
};

//SUCCESSFUL CLOSE BUTTON
/*document.getElementById("close_modal_butt3").onclick=function () {
    document.getElementById('successful_container').style.display='none';
    document.getElementById('body').style.overflowY = 'visible';
};*/

function reset_chBg_Window(){
    document.getElementById('choose_type').style.display='flex';
    document.getElementById('selected_type_url').style.display='none';
    document.getElementById('selected_type_upload').style.display='none';
    document.getElementById("back2").style.display='none';
    document.getElementById('input_image_url').value='';
    document.getElementById('input_image_upload').value='';

}

document.getElementById('change_bg_butt').onclick=function () {
   document.getElementById('modal_container_change_bg').style.display='block';
   document.getElementById('body').style.overflowY = 'none';
};
document.getElementById("close_modal_butt3").onclick=function () {
    document.getElementById('modal_container_change_bg').style.display = 'none';
    document.getElementById('body').style.overflowY = 'visible';
    document.getElementById('input_image_url').value='';
    reset_chBg_Window();
};


document.getElementById("back2").onclick=function () {
    document.getElementById('choose_type').style.display='flex';
    document.getElementById('selected_type_url').style.display='none';
    document.getElementById('selected_type_upload').style.display='none';
    document.getElementById("back2").style.display='none';
};

document.getElementById('type_url').onclick=function () {
  document.getElementById('choose_type').style.display='none';
  document.getElementById('selected_type_url').style.display='block';
  document.getElementById("back2").style.display='block';
};
document.getElementById('type_upload').onclick=function () {
  document.getElementById('choose_type').style.display='none';
  document.getElementById('selected_type_upload').style.display='block';
  document.getElementById("back2").style.display='block';
};
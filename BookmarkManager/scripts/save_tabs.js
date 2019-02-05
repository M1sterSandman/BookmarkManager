let mainArray=[];

if(localStorage.getItem('tabs')!==undefined){
    mainArray=JSON.parse(localStorage.getItem('tabs'));
    outTabsFirsTime();
}

document.getElementById('confirm_add_button').onclick=function () {
    let name=document.getElementById('input_name').value;
    let address=document.getElementById('input_address').value;


    if (name.length<1&&address.length<1){
        document.getElementById('input_name').style.borderBottom="1px solid red";
        document.getElementById('input_address').style.borderBottom="1px solid red";
        setTimeout(function () {
            document.getElementById('input_name').style.borderBottom="1px solid #fff";
            document.getElementById('input_address').style.borderBottom="1px solid #fff";
        },1000);
    }
    else if(name.length<1){
        document.getElementById('input_name').style.borderBottom="1px solid red";
        setTimeout(function () {
            document.getElementById('input_name').style.borderBottom="1px solid #fff";
        },1000);
    }
    else if(address.length<1){
        document.getElementById('input_address').style.borderBottom="1px solid red";
        setTimeout(function () {
        document.getElementById('input_address').style.borderBottom="1px solid #fff";
        },1000);
    }
    else {
        let tabArray = {};

        //checking https://
        let regExp=/^https?:\/\/[\w\/?.&-=]+$/;

        if(regExp.test(address)){
            tabArray.address = address;
        }
        else if(!regExp.test(address)){
            tabArray.address = "http://"+address;
        }
        //checking https://

        tabArray.name = name;

        let i;
        if (mainArray === null) {
            mainArray = [];
            i = 0;
        }
        else if (mainArray !== null) {
            i = mainArray.length;
        }
        mainArray[i] = tabArray;
        /*console.log(tabArray);
        console.log(mainArray);
        console.log(i);*/
        outTab(i);
        localStorage.setItem('tabs', JSON.stringify(mainArray));


        document.getElementById('modal_container-add').style.display = 'none';
        document.getElementById('body').style.overflowY = 'visible';
        document.getElementById('input_name').value='';
        document.getElementById('input_address').value='';
    }
};

function outTab(key) {
    let parentElement = document.getElementById("added_tabs_main_block");

    let createdTabBlock = document.createElement("div");
    createdTabBlock.className = "tab";
    createdTabBlock.id=key+'tab';
    createdTabBlock.title = mainArray[key].name;

    let tabLink = document.createElement("a");
    tabLink.href = mainArray[key].address;

    let tabImage = document.createElement('img');
    tabImage.src = "http://www.google.com/s2/favicons?domain=" + mainArray[key].address;

    let add_element = document.getElementById('add_element');
    parentElement.insertBefore(createdTabBlock, add_element);
    createdTabBlock.appendChild(tabLink);
    tabLink.appendChild(tabImage);

    main_change_fun();
}

function outTabsFirsTime() {
    for(let key in mainArray){
        let parentElement = document.getElementById("added_tabs_main_block");

        let createdTabBlock = document.createElement("div");
        createdTabBlock.className = "tab";
        createdTabBlock.id=key+'tab';
        createdTabBlock.title = mainArray[key].name;

        let tabLink = document.createElement("a");
        tabLink.href = mainArray[key].address;

        let tabImage = document.createElement('img');
        tabImage.src = "http://www.google.com/s2/favicons?domain=" + mainArray[key].address;

        let add_element = document.getElementById('add_element');
        parentElement.insertBefore(createdTabBlock, add_element);
        createdTabBlock.appendChild(tabLink);
        tabLink.appendChild(tabImage);
    }
}



function main_change_fun() {
    let elementId;
    let tabsEvent = Array.from(document.getElementsByClassName("tab"));
    tabsEvent.forEach(element => element.oncontextmenu = function (event) {
        event.preventDefault();
        document.getElementById('modal_container-change').style.display = 'block';
        document.getElementById('body').style.overflowY = 'hidden';


        elementId = this.id;

        //set a tab name in change modal window
        let tabName=document.getElementById('tab_name');
        tabName.innerHTML=mainArray[parseInt(elementId)].name;

        //set a default field value
        let change_name_default = document.getElementById('change_name');
        let change_address_default = document.getElementById('change_address');
        change_name_default.value=mainArray[parseInt(elementId)].name;
        change_address_default.value=mainArray[parseInt(elementId)].address;



//DELETE ITEM
        document.getElementById('delete_yes').onclick = function () {
            mainArray.splice(parseInt(elementId), 1);
            localStorage.setItem('tabs', JSON.stringify(mainArray));

            let elId = document.getElementById(elementId);
            elId.remove();

            document.getElementById('modal_container-change').style.display = 'none';
            document.getElementById('body').style.overflowY = 'visible';
            reset_ch_ModWin();


        };
//DELETE ITEM

//CHANGE ITEM
        document.getElementById('confirm_change_button').onclick = function () {

            let change_name_field = document.getElementById('change_name').value;
            let change_address_field = document.getElementById('change_address').value;

            mainArray[parseInt(elementId)].name = change_name_field;
            mainArray[parseInt(elementId)].address = change_address_field;
            localStorage.setItem('tabs', JSON.stringify(mainArray));

            document.getElementById('modal_container-change').style.display = 'none';
            document.getElementById('body').style.overflowY = 'visible';
            reset_ch_ModWin();

        };
//CHANGE ITEM

    });
}
main_change_fun();






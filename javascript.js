const channelBtn = document.getElementById("channelBtn");
const actionBtn1 = document.getElementById("action1");
const actionBtn2 = document.getElementById("action2");
const actionBtn3 = document.getElementById("action3");
const actionBtn4 = document.getElementById("action4");
const actionBtn5 = document.getElementById("action5");
const background = document.getElementsByClassName("background");

function handleChannelBtn(){
    if (channelBtn.classList.contains("clickedSubscribe")){
        channelBtn.classList.remove("clickedSubscribe");
        channelBtn.innerText = "구독 중";
        channelBtn.style.color = "#909090";
    }else {
        channelBtn.innerText = "구독";
        channelBtn.classList.add("clickedSubscribe");
        channelBtn.style.color = "#ff0000";
    }
}

function handleActionBtn(event){
    event.target.classList.toggle("actionClicked");
}

function handlePopUp(){
    background.classList.toggle("show");
}

actionBtn1.addEventListener("click", handleActionBtn);
actionBtn2.addEventListener("click", handleActionBtn);
actionBtn3.addEventListener("click", handleActionBtn);
actionBtn5.addEventListener("click", handleActionBtn);
channelBtn.addEventListener("click", handleChannelBtn);
actionBtn4.addEventListener("click", handlePopUp);

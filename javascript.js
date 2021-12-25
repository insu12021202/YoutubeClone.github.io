const channelBtn = document.getElementById("channelBtn");
const actionBtn1 = document.getElementById("action1");
const actionBtn2 = document.getElementById("action2");
const actionBtn3 = document.getElementById("action3");
const actionBtn4 = document.getElementById("action4");
const actionBtn5 = document.getElementById("action5");
const background = document.getElementById("background");
const closeBtn = document.getElementById("closeBtn");
const create_playlist_btn = document.getElementById("create_playlist_btn");
const pu_ul = document.getElementById("pu_ul");

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

function showPopUp(){
    background.classList.add("show");
}

function closePopUp(){
    background.classList.remove("show");
}

function createNewPlaylist(){
    new_li = document.createElement("li");
    new_input = document.createElement("input");
    new_input.setAttribute("type", "checkbox");
    new_label = document.createElement("label");
    new_label.innerText = `${pu_ul.childNodes.length}번 플레이리스트`
    new_li.appendChild(new_input);
    new_li.appendChild(new_label);
    pu_ul.appendChild(new_li);
}

actionBtn1.addEventListener("click", handleActionBtn);
actionBtn2.addEventListener("click", handleActionBtn);
actionBtn3.addEventListener("click", handleActionBtn);
actionBtn5.addEventListener("click", handleActionBtn);
channelBtn.addEventListener("click", handleChannelBtn);
actionBtn4.addEventListener("click", showPopUp);
closeBtn.addEventListener("click", closePopUp);
create_playlist_btn.addEventListener("click", createNewPlaylist);

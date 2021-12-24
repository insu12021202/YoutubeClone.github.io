const channelBtn = document.getElementById("channelBtn");

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
channelBtn.addEventListener("click", handleChannelBtn);

let item, count, textarea;

onload = function(){
    item = document.getElementById("item");
    count = document.getElementById("count");
    textarea = document.getElementById("textarea");
}

window.addEventListener("storage", storageEventListener, false);
function storageEventListener(e){   //e는 스토리지 이벤트 객체
    var eventDetail = `key:\t\t\t${e.key}\n
    oldValue:\t\t${e.oldValue}\n
    newValue:\t\t${e.newValue}\n
    storageArea:\t${e.storageArea}\n
    url:\t\t\t${e.url}`;
    textarea.innerHTML = eventDetail;
}

function store(){
    if(!window.localStorage){
        alert("이 브라우저는 지원하지 않는 기능입니다.");
        return;
    }
    localStorage.setItem(item.value, count.value);
}
function retrieve(){
    if(!window.localStorage){
        alert("이 브라우저는 지원하지 않는 기능입니다.");
        return;
    }
    var val = localStorage.getItem(item.value);
    if(val === null){
        alert(`${item.value}은/는 구입 리스트에 없습니다`);
    }
    else{
        count.value = val;
    }
}
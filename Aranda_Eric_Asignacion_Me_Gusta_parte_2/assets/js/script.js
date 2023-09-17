let likeButtons = document.querySelectorAll('.like-button');

let likeCounters = document.querySelectorAll('.more-likes');

let count1 = 0;
let count2 = 0;
let count3 = 0;

function moreLikes(element){
    if(likeCounters[0] && likeButtons[0] === element){
        count1++;
        likeCounters[0].innerText = `${count1} like(s)`;
    }else if(likeCounters[1] && likeButtons[1] === element){
        count2++;
        likeCounters[1].innerText = `${count2} like(s)`;
    }else{
        count3++;
        likeCounters[2].innerText = `${count3} like(s)`;
    }
};
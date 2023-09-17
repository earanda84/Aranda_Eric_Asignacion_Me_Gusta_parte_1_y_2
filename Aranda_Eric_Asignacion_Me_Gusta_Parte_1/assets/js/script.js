
let count = 0;
let likes = document.getElementById('like');


function moreLikes(){
    count++
    likes.innerText = `${count} like(s)`
}
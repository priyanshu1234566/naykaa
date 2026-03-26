// DARK MODE

const toggle = document.getElementById("darkToggle");

toggle.onclick = () => {

document.body.classList.toggle("dark");

};


// SEARCH FUNCTION

const search = document.getElementById("searchInput");

search.addEventListener("keyup", function(){

let filter = search.value.toLowerCase();

let posts = document.querySelectorAll(".post");

posts.forEach(post => {

let text = post.innerText.toLowerCase();

post.style.display = text.includes(filter) ? "block" : "none";

});

});


// FILTER SYSTEM

function filterPosts(category){

let posts = document.querySelectorAll(".post");

posts.forEach(post => {

if(category === "all" || post.classList.contains(category)){

post.style.display = "block";

}

else{

post.style.display = "none";

}

});

}
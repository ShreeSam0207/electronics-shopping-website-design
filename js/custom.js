console.log("Hello World");
var image_tag = document.getElementsByTagName("img");
console.log(image_tag);
var anchor_tag = document.getElementsByTagName("a");
console.log(anchor_tag);
var paragraph = document.getElementsByTagName("p");
console.log(paragraph);
var heading = document.getElementById("heading");
console.log(heading.innerHTML);


heading.innerHTML = "Welcome to ABC shopping"

var new_heading = document.createElement("h3");
var new_phrase = document.createElement("p");

var main_content = document.getElementById("main-content");
new_heading.innerHTML = "ABC here for your wonderful shopping experience!!!"
new_phrase.innerHTML ="Enjoy and Thanks for visiting us!"

main_content.appendChild(new_heading);
main_content.appendChild(new_phrase);

var button = document.getElementById("mybutton");
button.onclick = function(){
    alert ("You have saved $20!!");
    alert("Thank you");
}



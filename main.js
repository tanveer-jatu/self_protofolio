
var typed = new Typed(".text", {
strings:["Frontend Developer" , "Student" , "Web Developer" ],
typeSpeed:100,
backSpeed:100,
backDelay:1000,
loop:true
});



const text = document.querySelector(".sec-text");

const textLoad = () => {

  setTimeout(() => {

    text.textContent = "DEVELOPED BY TANVEER JATU";

  }, 0);

//   setTimeout(() => {

//     text.textContent = "Student";

//   }, 4000);

//   setTimeout(() => {

//     text.textContent = "Developer";

//   }, 8000);

}



textLoad();

setInterval(textLoad, 12000);

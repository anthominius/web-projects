const myImage = document.querySelector("img");

myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "images/serene-picture.jpg"){
        myImage.setAttribute("src","images/tms-diagram.jpg");
    } else {
        myImage.setAttribute("src","images/serene-picture.jpg");
    }
};  

const myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Don't enter your name");
    if(!myName){
        setUserName();
    } else {
        localStorage.setItem("name", myName);
        myHeading.textContent = `${myName}, Is a really cool person`;
    }
    
}

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    const storedName = localStorage.getItem("name");
    storedName.textContent = `${storedName}, Is a really cool guy`;
}

myButton.onclick = () => {
    setUserName();
};

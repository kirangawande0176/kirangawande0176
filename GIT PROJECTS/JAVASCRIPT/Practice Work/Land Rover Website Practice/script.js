
// main container 
const myContainer = document.createElement ('container');
myContainer.setAttribute('class', 'mainBody')
document.body.appendChild(myContainer);
console.log(myContainer);

// nav bar 
const myDiv = document.createElement ('nav');
myDiv.setAttribute('class','');
myContainer.appendChild(myDiv);
myDiv.setAttribute('class', ' navbar sticky-top top-0 d-flex align-items-center justify-content-between');



  
// logo 
const logo = document.createElement('img');
logo.src ="https://www.carlogos.org/logo/Land-Rover-logo-2011-1920x1080.png";

logo.style.width = "120px";
logo.setAttribute('class','rounded-4 ');
myDiv.appendChild(logo);

// brandName 
const brandName =document.createElement('span');
myDiv.appendChild(brandName);
brandName.setAttribute('class','landrover')
brandName.innerHTML="land rover";
brandName.setAttribute('class', 'text-capitalize fst-italic text-danger fw-bold fs-3' );




// button log in 
const btnh =document.createElement('button');
btnh.innerHTML = "Log In";
btnh.setAttribute('class', 'btn btn-primary p-1 me-2');
myDiv.appendChild(btnh);

// data containerMain
const containerMain = document.createElement('container')
document.body.appendChild(containerMain);
containerMain.setAttribute('class', ' text-black d-block ');

// image div with data 
const imgDatadiv = document.createElement('div');
containerMain.appendChild(imgDatadiv);
imgDatadiv.setAttribute('class', 'd-flex align-items-center justify-content-center row w-100');


const imgItem = document.createElement('div');
imgItem.setAttribute('class', 'col');
imgDatadiv.appendChild(imgItem);
const img1 = document.createElement('img');
imgItem.appendChild(img1);
img1.src = "https://imgd.aeplcdn.com/664x374/n/cw/ec/44879/landrover-discovery-sport-right-front-three-quarter16.jpeg?q=80";
img1.style.width = "100%";

const imgData =document.createElement('div');
imgDatadiv.appendChild(imgData);
imgData.setAttribute('class', 'col text-wrap fs-5 fw-bold p-3');
imgData.innerHTML ="<h3> Defender </h3> <p> The Land Rover Defender impresses with three- and five-door options, and a choice of three petrol and one diesel engine. Its unusual road presence, tank-like build quality, and superb off-road capability combine with excellent ride quality and on-road comfort.</p>";


// 2nd container 

const containerSecond = document.createElement('container');
containerMain.appendChild(containerSecond);
containerSecond.setAttribute('class', 'row align-items-center justify-content-center d-flex');


// 2nd div text 
const div2Text = document.createElement('div');
div2Text.setAttribute('class','col text-wrap fs-5 fw-bold p-3')
containerSecond.appendChild(div2Text);
div2Text.innerHTML ="<h3> Land Rover Discovery Sport </h3><p>The price of Land Rover Discovery Sport, a 7 seater SUV, starts from of Rs. 67.90 Lakh. It is available in 2 variants, with an engine of 1997 cc and a choice of 1 transmission: Automatic. Discovery Sport has an NCAP rating of 5 stars and comes with 7 airbags. Land Rover Discovery Sport has a ground clearance of 167 mm and is available in 5 colours. Users have reported a mileage of 10.5 to 13.1 kmpl for Discovery Sport.</p>";

// 2nd div img 
const divImg2 = document.createElement('div');
divImg2.setAttribute('class','col ');
containerSecond.appendChild(divImg2);
const img2 = document.createElement('img');
img2.src = "https://imgd.aeplcdn.com/664x374/n/cw/ec/127321/discovery-sport-exterior-right-front-three-quarter-3.jpeg?isig=0&q=80";
divImg2.appendChild(img2);
img2.style.width = "100%";

// container 3 
const containerThree = document.createElement('container');
containerMain.appendChild(containerThree);


// video file 
const videodiv = document.createElement('div');
containerThree.appendChild(videodiv);

videodiv.innerHTML=' <video class="video customControl " loop="" playsinline="" autoplay="true" muted="true" height="100%" preload="none" poster="https://jlr.scene7.com/is/image/jlr/L462_25GL_303103390_Snippets_Exterior_Still_Poster" width="100%" data-desktop-source="https://jlr.scene7.com/is/content/jlr/L46225GL_303103390_Snippets_Exterior_06_16x9_H264_CLEAN_OPTIMISED"><source src="https://jlr.scene7.com/is/content/jlr/L46225GL_303103390_Snippets_Exterior_06_16x9_H264_CLEAN_OPTIMISED" type="video/mp4"></video> ';


// 4th container
const containerForth = document.createElement('container');
containerMain.appendChild(containerForth);
containerForth.setAttribute('class','containerFour ');

// new div inside contianer 
const contactForm = document.createElement('div');
containerForth.appendChild(contactForm);
contactForm.setAttribute('class',' align-items-center justify-content-center d-flex');

// new heading inside contact form
const formHeading = document.createElement('h4');
contactForm.appendChild(formHeading);
formHeading.innerHTML = "Registration Form";

// new div for input field 
const inputDiv = document.createElement('div');
containerForth.appendChild(inputDiv);
inputDiv.setAttribute('class','d-flexbox border border-5 justify-content-center align-items-center d-flex');


// form attribute 
const form = document.createElement('form');
inputDiv.appendChild(form);
form.setAttribute('class',' g-3');

// Input field 
const inputName =document.createElement('input');
inputDiv.appendChild(inputName);
inputName.setAttribute('class','inputemailid w-25 bg-transperant rounded-2 mx-2')

//submit button 
const submitBtn = document.createElement('button');
submitBtn.setAttribute('class', 'rounded-3 bg-primary text-white px-2 ');
inputDiv.appendChild(submitBtn);
submitBtn.innerHTML ="Submit";


// 5th container 
const containerFifth = document.createElement('container');
containerMain.appendChild(containerFifth);
containerFifth.setAttribute('class','containerFive');
const footerText = document.createElement('div');
containerFifth.appendChild(footerText);
footerText.innerHTML ="<h1> Kiran Gawande :) </h1>";
footerText.setAttribute('class','text-center bg-dark text-danger fs-5 fst-italic fw-bold' );




















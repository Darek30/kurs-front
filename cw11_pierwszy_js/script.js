
const chopekInfo = [
{
    src:"https://github.com/apietryga/kurs-Front-end/blob/master/materialy/lekcja6/img/gada.gif?raw=true",
    alt: "Pan Cyfrowy gada",
    desc: "Pan Cyfrowy gada, ale czy ktoś rozmumie o co mu chodzi?"
},
{
    src:"https://github.com/apietryga/kurs-Front-end/blob/master/materialy/lekcja6/img/intro.gif?raw=true",
    alt: "intro",
    desc:" intro, co to właściwie jest to intro?"
},
{
    src:"https://github.com/apietryga/kurs-Front-end/blob/master/materialy/lekcja6/img/siada.gif?raw=true",
    alt:" siada",
    desc:"Siada, bo sie zmęczył"
},
{
    src:"https://github.com/apietryga/kurs-Front-end/blob/master/materialy/lekcja6/img/wstaje.gif?raw=true",
    alt: "Wstaje",
    desc:"Wstaje i idzie, ale sam nie wiem dokąd"
}

]

const parent = document .querySelector(".parent");

const div = parent.querySelectorAll("div");
for(const [i,d] of div.entries()){
    console.log(d);
    const img = d.querySelector("img");
    img.src = chopekInfo[i].src;
    img.alt = chopekInfo[i].alt;
    
    d.onclick =function(){
    const content = document.querySelector(".content")
    const div =content.querySelectorAll("div");
        
    div[1].innerHTML = chopekInfo[i].desc;
    const img = div[0].querySelector("img");
    img.src = chopekInfo[i].src;
    img.alt = chopekInfo[i].alt;


    }
}


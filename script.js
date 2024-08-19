
// navbar
const headerel = document.querySelector('.navbar');

window.addEventListener('scroll',() => {
    if(window.scrollY > 100){
        headerel.classList.add('nav-scrolled');
    }
    else if(window.scrollY <= 100){
        headerel.classList.remove('nav-scrolled');
    }
});

// about screen fade
const fadein = document.querySelector('.overlaytags');
window.addEventListener('scroll',()=>{
        if(window.scrollY > 300){
            fadein.classList.add('overlaytags-scrolled');
        }
        else if(window.scrollY <= 300)
        {
            fadein.classList.remove('overlaytags-scrolled');
        }
        
});


// popups

// document.getElementById('btn1').addEventListener('click',function() {
//     let p1 = document.querySelector('.project1');
//     p1.style.left='180%';
//     if(p1.style.left==='180%'){
//         p1.classList.add('open-project1');
//         p1.style.top='71.5%'
//         p1.style.left='258%';
//     }
//     else if(p1.style.left==='258%'){
//         p1.classList.remove('open-project1');
//         p1.style.top='69.5%'
//         p1.style.left='180%';
//     }
// });



let isOpen1 = false;
document.getElementById('btn1').addEventListener('click', function() {
    let p1 = document.querySelector('.project1');
    
    if (!isOpen1) { // If the element is not open
        p1.style.top = '61%';
        p1.style.left = '51%';
        p1.style.visibility='visible'
        p1.style.transform = 'scale(1)'
        isOpen1 = true; // Set the state to open
    } else { // If the element is already open
        p1.classList.remove('open-project1');
        p1.style.left = '180%';
        isOpen1 = false; // Set the state to closed
    }
});

let isOpen2 = false;
document.getElementById('btn2').addEventListener('click', function() {
    let p2 = document.querySelector('.project2');
    
    if (!isOpen2) { // If the element is not open
        p2.style.top = '61%';
        p2.style.left = '51%';
        p2.style.visibility='visible'
        p2.style.transform = 'scale(1)'
        isOpen2 = true; // Set the state to open
    } else { // If the element is already open
        p2.style.left = '180%';
        isOpen2 = false; // Set the state to closed
    }
});

let isOpen3 = false;
document.getElementById('btn3').addEventListener('click', function() {
    let p3 = document.querySelector('.project3');
    
    if (!isOpen3) { // If the element is not open
        p3.style.top = '61%';
        p3.style.left = '51%';
        p3.style.visibility='visible'
        p3.style.transform = 'scale(1)'
        isOpen3 = true; // Set the state to open
    } else { // If the element is already open
        p3.style.left = '180%';
        isOpen3 = false; // Set the state to closed
    }
});




// mediaquery for popup
let window1 = window.matchMedia('(min-width:1300px) and (max-width:1441px)');
if (window1.matches) {
    let isOpen1 = false;
    document.getElementById('btn1').addEventListener('click', function() {
        let p1 = document.querySelector('.project1');
        
        if (!isOpen1) { // If the element is not open
            p1.style.top = '60%';
            p1.style.left = '51%';
            p1.style.visibility='visible'
            p1.style.transform = 'scale(1)'
            isOpen1 = true; // Set the state to open
        } else { // If the element is already open
            p1.style.left = '180%';
            isOpen1 = false; // Set the state to closed
        }
    });

    let isOpen2 = false;
document.getElementById('btn2').addEventListener('click', function() {
    let p2 = document.querySelector('.project2');
    
    if (!isOpen2) { // If the element is not open
        p2.style.top = '60%';
        p2.style.left = '51%';
        p2.style.visibility='visible'
        p2.style.transform = 'scale(1)'
        isOpen2 = true; // Set the state to open
    } else { // If the element is already open
        p2.style.left = '180%';
        isOpen2 = false; // Set the state to closed
    }
});

let isOpen3 = false;
document.getElementById('btn3').addEventListener('click', function() {
    let p3 = document.querySelector('.project3');
    
    if (!isOpen3) { // If the element is not open
        p3.style.top = '60%';
        p3.style.left = '51%';
        p3.style.visibility='visible'
        p3.style.transform = 'scale(1)'
        isOpen3 = true; // Set the state to open
    } else { // If the element is already open
        p3.style.left = '180%';
        isOpen3 = false; // Set the state to closed
    }
});

};


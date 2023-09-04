
function scrollDown(){
    const midPage = document.getElementById('intro');
    midPage.scrollIntoView({behavior:'smooth'})
   // document.body.style.backgroundColor ="#1F1A38"
}

function scrollToAbout(){
    const About = document.querySelector('.about')
    About.scrollIntoView({behavior:'smooth'})
   // document.body.style.backgroundColor ="#6665dd"
}

function scrollToSkills(){
    const About = document.querySelector('.skills-Projects')
    About.scrollIntoView({behavior:'smooth'})
}


function scrollToContact(){
    const contact= document.querySelector('.contact')
    contact.scrollIntoView({behavior:'smooth'})
}
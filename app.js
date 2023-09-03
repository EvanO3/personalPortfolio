
function scrollDown(){
    const midPage = document.getElementById('intro');
    midPage.scrollIntoView({behavior:'smooth'})
}

function scrollToAbout(){
    const About = document.querySelector('.about')
    About.scrollIntoView({behavior:'smooth'})
}
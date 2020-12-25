const cursor = document.querySelector('.home__typing .cursor'),
        menu = document.querySelector('.menu__wrapper'),
        menuHeader = document.querySelector('.menu__header'),
        closeBtn = document.querySelector('.menu__close'),
        menuBtn = document.querySelector('.header__burger'),
        overlay = document.querySelector('.menu__overlay');
        
    menuHeader.addEventListener('click', (e) => {
        e.preventDefault();
        window.reload();
    });    



    let i = 0;
    let index = 0;
    const txt = ['Web developer', 'PHP Developer', 'UX/UI Designer', 'Mobile expert']; 
    const speed = 200; 
    let words = txt[index].split("");

    function typeWriter() {

        if (i < txt[index].length) {
            document.querySelector('.home__typing .writer').innerHTML += txt[index].charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        } else {
            setTimeout(deleteWriter, 1000);
            i = 0;
        }

    }

    function deleteWriter() {

        if((words.length > 0)){
            words.pop();
            document.querySelector('.home__typing .writer').innerHTML = words.join("");
            setTimeout(deleteWriter, 100);
        } else {
            setTimeout(typeWriter, 1000);
            incrementText();
            words = txt[index].split(""); 
        } 

    }


    function incrementText() {
        if(index < txt.length){
            index++;
        }
        if(index == txt.length){
            index = 0;
        } 
    }

    function cursorOpacity() {
        cursor.classList.toggle('cursor_active-opacity');
    }

    setTimeout(typeWriter, 600);
    setInterval(cursorOpacity, 500);

    menuBtn.addEventListener('click', () => {
        openMenu();
    });
    
    closeBtn.addEventListener('click', () => {
        closeMenu();
    });

    function openMenu(){
        menu.style.transform = 'translateX(0)';
        overlay.style.display = 'block';
        closeBtn.style.transform = 'rotate(360deg)';
    }

    function closeMenu() {
        overlay.style.display = 'none';
        menu.style.transform = 'translateX(-100%)';
        closeBtn.style.transform = 'rotate(-360deg)';
    }

const menuLink = document.querySelectorAll('.menu__link');

    menuLink.forEach(link => {
        link.addEventListener('click', () => {
            closeMenu();
        });
    });

const skillsRate = document.querySelectorAll('.about__skill-number span'),
      skillsRange = document.querySelectorAll('.about__skill-progress');
    
    let number;
    let j = 0;
    const setOfnumber = [];
    let rate = 0;
      
    for(let i = 0; i < skillsRate.length; i++) {
        setOfnumber[i] = skillsRate[i].innerHTML.substring(0 , 2);
        skillsRate[i].innerHTML = '0';
    }
        
    
    function setRange() {
        if(j <= setOfnumber[rate]){
            skillsRange[rate].style.width = `${j}%`;
            skillsRate[rate].innerHTML = j;
            j++;
            setTimeout(setRange,5);
        } else{
            j = 0;
            rate++;
            setTimeout(setRange,50);
        }
    }
        
const serviceRange = document.querySelectorAll('.service__pointer'),
      serviceItem = document.querySelectorAll('.service__upper-item');  

    let pointer = 0;
    let point = 0;
    const setOfPointer = [];
        
    for(let i = 0; i < serviceRange.length; i++) {
        setOfPointer[i] = serviceRange[i].innerHTML;
        serviceRange[i].innerHTML = '0';
    }

    

    function showPointer() {
        if(pointer <= setOfPointer[point]){
            serviceRange[point].innerHTML = ' ';
            serviceRange[point].innerHTML += pointer;
            if(point == 0){
                pointer++;
            }
            if(point >= 1 && point < 3){
                pointer += 10;
            }
            if(point == 3){
                pointer += 100;
            }
            setTimeout(showPointer,5);
        } else {
            point++;
            pointer = 0;
            if(point < setOfPointer.length){
                setTimeout(showPointer,0); 
            }
        }
    }
    


    let togglerForSkill = true;
    let togglerForService = true;

const portfolioBtn = document.querySelectorAll('.portfolio__works-btn'),
      containerWithWorks = document.querySelectorAll('.portfolio__works-container');

    portfolioBtn.forEach((btn ,inx)=> {
        btn.addEventListener('click', () => {
            portfolioBtn.forEach(item => {  
                item.classList.remove('portfolio__works-btn_active');
            });

            btn.classList.toggle('portfolio__works-btn_active');

            containerWithWorks.forEach(works => {
                works.style.display = 'none';
            });
            containerWithWorks[inx].style.display = 'grid';
        });
    });



    window.addEventListener('scroll', () => {
        if(window.pageYOffset > 350 && togglerForSkill){
            setRange();
            togglerForSkill = false;
        }
        if(window.pageYOffset > 1400 && togglerForService){
            serviceItem.forEach(item => {
                item.style.display = 'block';
            });
            showPointer();
            togglerForService = false;
        }
    });


   
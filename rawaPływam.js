const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container2');
const tabsContent = document.querySelectorAll('.operations__content');

const btnsend=document.querySelector('btn-message')
// terminy

tabsContainer.addEventListener('click',function(e){
    const clicked = e.target.closest('.operations__tab');
    console.log(clicked);
    //guard clouse
    if(!clicked)return;
  
    //remove active classes
    tabsContent.forEach(t=>t.classList.remove('operations__content--active'));
  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  //active tab
  
    clicked.classList.add('operations__tab--active');
  
  
    //active contant area
    console.log(clicked.dataset.tab);
    document.querySelector(`.operations__content--${clicked.dataset.tab}`).classList.add('operations__content--active');
  })

  //blikowanie przycisku wysyłania wiadomości
  btnsend.addEventListener('click',(e)=>{
    e.preventDefault();
  })
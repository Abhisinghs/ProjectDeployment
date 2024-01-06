

//this code is about section when we click on skill, experience and education
    var tablinks = document.getElementsByClassName("tab-links");
    var tabcontents=document.getElementsByClassName("tab-contents");

    function opentab(tabname){
        for(tablink of tablinks){
            tablink.classList.remove("active-link");
        }

        for(tabcontent of tabcontents){
            tabcontent.classList.remove("active-tab");
        }

        event.currentTarget.classList.add("active-link");

        document.getElementById(tabname).classList.add("active-tab");
    }

    // set menue for small screen 
    var sidemenu=document.getElementById("sidemenu");

    function openmenu(){
        sidemenu.style.right="0";
    }

    function closemenu(){
        sidemenu.style.right="-200px"
    }


//connect with google sheet 
//when user send the name and email to me it store on google sheet
    const scriptURL = 'https://script.google.com/macros/s/AKfycbwlPVLw9_OHMN3kwnqLwrt4QKCFitIewvBbHRQdSGD4u-n7j5iowP9O5zz9m_x0gTeB6g/exec'

    const form = document.forms['submit-to-google-sheet']

    const msg=document.getElementById("msg");
  
    form.addEventListener('submit', e => {
      e.preventDefault()
      fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response =>{
            msg.innerHTML = "Message sent successfully"
            setTimeout(function(){
                msg.innerHTML=""
            },5000)
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
    })

//in header section makes the content dynamic 
    var typed = new Typed(".text",{
        strings:["Frontend Developer","Software Engineer","Web Developer"],
        typeSpeed:100,
        backSpeed:100,
        backDelay:1000,
        loop:true,

    });

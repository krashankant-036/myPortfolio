var tablinks = document.getElementsByClassName("tab-links");
         var tabcontests = document.getElementsByClassName("tab-contests") ;

         function opentab(tabname){
            for(tablink of tablinks){
                tablink.classList.remove("active-link");
            }
            for(tabcontest of tabcontests){
                tabcontest.classList.remove("active-tab");
            }
            event.currentTarget.classList.add("active-link");
            document.getElementById(tabname).classList.add("active-tab");
        }

        var sidemeu  = document.getElementById("sidemenu");
        function openmenu() {
            sidemeu.style.right ="0";
        }
        function closemenu() {
            sidemeu.style.right ="-200px";
        }

        const scriptURL = 'https://script.google.com/macros/s/AKfycbwtXFpd4wtvxwLaRU19ejKQIwaveSVCKWHZ1laM9Fu9J19lyOGE8j2UKBdjnvXgZdFL/exec'
        const form = document.forms['submit-to-google-sheet']
        const msg = document.getElementById("msg")
      
        form.addEventListener('submit', e => {
          e.preventDefault()
          fetch(scriptURL, { method: 'POST', body: new FormData(form)})
            .then(response => {msg.innerHTML = "Message sent Successfully"
                                setTimeout(function(){
                                    msg.innerHTML= ""
                                },5000)
                                form.reset()
        })
            .catch(error => console.error('Error!', error.message))
        })
$(function () { // Same as document.addEventListener("DOMContentLoaded"...

  // Same as document.querySelector("#navbarToggle").addEventListener("blur",...
  $(".navbar-toggler").blur(function (event) {
    var screenWidth = window.innerWidth;
    if (screenWidth < 768) {
      $(".navbar-collapse").collapse('hide');
    }
  });
});


// nav bar scroll background change

$(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if(scroll>50){
        $(".navbar").css("background", "white");
        $(".navbar").css("height",'60px');
        }
        else {
        $(".navbar").css("background", "transparent");
        $(".navbar").css("height",'130px');
        }
        })
   })


//    Text Animation in home page     
        
        var TxtRotate = function(el, toRotate, period) {
            this.toRotate = toRotate;
            this.el = el;
            this.loopNum = 0;
            this.period = parseInt(period, 10) || 2000;
            this.txt = '';
            this.tick();
            this.isDeleting = false;
        };
        
        TxtRotate.prototype.tick = function() {
            var i = this.loopNum % this.toRotate.length;
            var fullTxt = this.toRotate[i];
        
            if (this.isDeleting) {
            this.txt = fullTxt.substring(0, this.txt.length - 1);
            } else {
            this.txt = fullTxt.substring(0, this.txt.length + 1);
            }
        
            this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';
        
            var that = this;
            var delta = 300 - Math.random() * 100;
        
            if (this.isDeleting) { delta /= 2; }
        
            if (!this.isDeleting && this.txt === fullTxt) {
            delta = this.period;
            this.isDeleting = true;
            } else if (this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            this.loopNum++;
            delta = 500;
            }
        
            setTimeout(function() {
            that.tick();
            }, delta);
        };
        
        window.onload = function() {
            var elements = document.getElementsByClassName('txt-rotate');
            for (var i=0; i<elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-rotate');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
                new TxtRotate(elements[i], JSON.parse(toRotate), period);
            }
            }
            // INJECT CSS
            var css = document.createElement("style");
            css.type = "text/css";
            css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
            document.body.appendChild(css);
        };



// sharing page text animation


// contact us page Script

  const name = document.getElementById('name');
  const email = document.getElementById('email');
  const message = document.getElementById('message');
  const contactForm = document.getElementById('contact-form');
  const errorElement = document.getElementById('error');
  const successMsg = document.getElementById('success-msg');
  const submitBtn = document.getElementById('submit');
    
  const validate = (e) => {
    e.preventDefault();
  
    if (name.value.length < 3) {
      errorElement.innerHTML = 'Your name should be at least 3 characters long.';
      return false;
    } 
    
    if (!(email.value.includes('.') && (email.value.includes('@')))) {
      errorElement.innerHTML = 'Please enter a valid email address.';
      return false;
    } 

    if (!emailIsValid(email.value)) {
      errorElement.innerHTML = 'Please enter a valid email address.';
      return false;
    }

    if (message.value.length < 15) {
      errorElement.innerHTML = 'Please write a longer message.';
      return false;
    }

    errorElement.innerHTML = '';
    successMsg.innerHTML = 'Thank you! I will get back to you as soon as possible.'; 

    e.preventDefault();
    setTimeout(function () {
      successMsg.innerHTML = '';
      document.getElementById('contact-form').reset();
    }, 6000);

    return true;

  }

  const emailIsValid = email => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  submitBtn.addEventListener('click', validate);
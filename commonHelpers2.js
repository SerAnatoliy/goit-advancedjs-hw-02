import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{f as m,i}from"./assets/vendor-77e16229.js";const e={input:document.querySelector("#datetime-picker"),startButton:document.querySelector("button[data-start]"),days:document.querySelector("[data-days]"),hours:document.querySelector("[data-hours]"),minutes:document.querySelector("[data-minutes]"),seconds:document.querySelector("[data-seconds]")};let r=null;e.startButton.disabled=!0;e.startButton.addEventListener("click",h);const f={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){console.log(t[0]),t[0]<=new Date?i.show({position:"center",title:"Warning!",message:"Only the dates in the future are acceptable"}):(r=t[0].getTime(),e.startButton.disabled=!1,e.input.disabled=!1)}};m("input#datetime-picker",f);function h(){const t=setInterval(()=>{const n=new Date().getTime(),o=r-n;y(p(o)),e.startButton.disabled=!0,e.input.disabled=!0,r-n<1e3&&(clearInterval(t),i.show({position:"center",title:"Congratulations!",message:"Your time is now!"}),e.startButton.disabled=!1,e.input.disabled=!1)},1e3)}function p(t){const u=a(Math.floor(t/864e5)),c=a(Math.floor(t%864e5/36e5)),d=a(Math.floor(t%864e5%36e5/6e4)),l=a(Math.floor(t%864e5%36e5%6e4/1e3));return{remainingDays:u,remainingHours:c,remainingMinutes:d,remainngSeconds:l}}function y({remainingDays:t,remainingHours:n,remainingMinutes:o,remainngSeconds:s}){e.days.textContent=t,e.hours.textContent=n,e.minutes.textContent=o,e.seconds.textContent=s}function a(t){return String(t).padStart(2,"0")}
//# sourceMappingURL=commonHelpers2.js.map

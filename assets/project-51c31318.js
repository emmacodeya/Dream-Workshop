document.addEventListener("DOMContentLoaded",function(){const t=document.querySelectorAll(".nav-link[data-content]"),e=document.getElementById("current-page-title");t.forEach(i=>{i.addEventListener("click",function(l){l.preventDefault(),t.forEach(n=>{n.classList.remove("active-link"),n.style.color=""}),this.classList.add("active-link"),this.style.color="#43E1BF",document.querySelectorAll(".content-section").forEach(n=>{n.style.display="none"});const a=this.getAttribute("data-content"),c=document.getElementById(a);c&&(c.style.display="block"),e&&(e.querySelector("a").textContent=this.getAttribute("data-title"))})});const o=document.getElementById("project-introduction");o&&(o.style.display="block"),t.length>0&&(t[0].classList.add("active-link"),t[0].style.color="#43E1BF",e&&(e.querySelector("a").textContent=t[0].getAttribute("data-title")))});

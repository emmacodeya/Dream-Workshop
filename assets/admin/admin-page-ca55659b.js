document.addEventListener("DOMContentLoaded",function(){document.querySelectorAll(".nav-link[data-content]").forEach(e=>{e.addEventListener("click",function(t){t.preventDefault(),document.querySelectorAll(".content-section").forEach(o=>{o.style.display="none"});const c=this.getAttribute("data-content");document.getElementById(c).style.display="block"})}),document.getElementById("accounts").style.display="block"});document.addEventListener("DOMContentLoaded",function(){const n=document.querySelectorAll(".nav-link[data-content]");n.forEach(e=>{e.addEventListener("click",function(t){t.preventDefault(),n.forEach(o=>o.classList.remove("active")),this.classList.add("active"),document.querySelectorAll(".content-section").forEach(o=>{o.style.display="none"});const c=this.getAttribute("data-content");document.getElementById(c).style.display="block"})}),n[0].classList.add("active"),document.getElementById("accounts").style.display="block"});const a=[{name:"林媽媽中式餐館"},{name:"尚品生活股份有限公司"}],l=document.getElementById("startup-tbody");a.forEach((n,e)=>{const t=document.createElement("tr");t.innerHTML=`
    <td>${n.name}</td>
    <td class="d-flex">
      <div class="me-5">
        <input type="checkbox" id="cooperate-${e}" name="options" value="option1" disabled>
        <label for="cooperate-${e}" class="checkbox-label">合作聯繫</label>
      </div>
      <div>
        <input type="checkbox" id="contentEnabled-${e}" name="options" value="option2" checked disabled>
        <label for="contentEnabled-${e}" class="checkbox-label">內容解鎖</label>
      </div>
    </td>
  `,l.appendChild(t)});const d=[{name:"Michael Smith"},{name:"James Brown"}],s=document.getElementById("investor-tbody");d.forEach((n,e)=>{const t=document.createElement("tr");t.innerHTML=`
    <td>${n.name}</td>
    <td class="d-flex">
      <div class="me-5">
        <input type="checkbox" id="cooperate-${e}" name="options" value="option1" checked disabled>
        <label for="cooperate-${e}" class="checkbox-label">合作聯繫</label>
      </div>
      <div>
        <input type="checkbox" id="contentEnabled-${e}" name="options" value="option2" disabled>
        <label for="contentEnabled-${e}" class="checkbox-label">內容解鎖</label>
      </div>
    </td>
  `,s.appendChild(t)});

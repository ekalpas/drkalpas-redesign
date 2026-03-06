const u="/drkalpas-redesign/";function g({title:e,description:n,category:l,keywords:i,datePublished:t,dateModified:o}){p(),h(),v(),f({title:e,description:n,category:l,keywords:i,datePublished:t,dateModified:o}),y()}function p(){const e=document.createElement("nav");e.className="toolbar",e.setAttribute("aria-label","Tools navigation"),e.innerHTML=`
    <div class="container toolbar-content">
      <a href="${u}" class="toolbar-logo" aria-label="Dr. Kalpas home">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg>
        EK
      </a>
      <div class="toolbar-nav">
        <a href="${u}tools/">All Tools</a>
        <button class="theme-toggle" aria-label="Toggle dark mode" type="button">
          <svg class="icon-moon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
          <svg class="icon-sun" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
        </button>
      </div>
    </div>
  `,document.body.prepend(e)}function h(){const e=document.createElement("footer");e.className="tool-footer",e.innerHTML=`
    <div class="container">
      <div class="tool-footer-content">
        <div class="tool-footer-author">
          <strong>Author:</strong> Edward Kalpas, MD, MAS, MPH
          <span class="tool-footer-sep">|</span>
          Board-Certified in Clinical Informatics, Preventive Medicine & Lifestyle Medicine
        </div>
        <div class="tool-footer-links">
          <a href="${u}">drkalpas.com</a>
          <a href="${u}tools/">All Clinical Tools</a>
        </div>
        <p class="tool-footer-copy">&copy; ${new Date().getFullYear()} Dr. Edward Kalpas. All Rights Reserved.</p>
      </div>
    </div>
  `,document.body.appendChild(e)}function v(){const e=document.createElement("div");e.className="medical-disclaimer",e.innerHTML=`
    <div class="container">
      <p><strong>Medical Disclaimer:</strong> This calculator is for educational and informational purposes only. It is not a substitute for professional medical advice, diagnosis, or treatment. Always consult a qualified healthcare provider for clinical decisions. The authors assume no liability for actions taken based on this tool.</p>
    </div>
  `;const n=document.querySelector(".tool-main");n?n.after(e):document.body.appendChild(e)}function f({title:e,description:n,category:l,keywords:i,datePublished:t,dateModified:o}){const c={"@context":"https://schema.org","@type":"MedicalWebPage",name:e,description:n,url:window.location.href,datePublished:t,dateModified:o,author:{"@type":"Person",name:"Dr. Edward Kalpas",jobTitle:"Chief Medical Officer",url:"https://drkalpas.com/",qualifications:"MD, MAS, MPH, Board-Certified Clinical Informatics"},publisher:{"@type":"Person",name:"Dr. Edward Kalpas"},medicalAudience:{"@type":"MedicalAudience",audienceType:"Clinician"},about:{"@type":"MedicalCondition",name:l||"Clinical Medicine"},keywords:i||e,inLanguage:"en"},s=document.createElement("script");s.type="application/ld+json",s.textContent=JSON.stringify(c),document.head.appendChild(s)}function y(){const e=localStorage.getItem("theme");e&&document.documentElement.setAttribute("data-theme",e),document.addEventListener("click",n=>{if(!n.target.closest(".theme-toggle"))return;const t=document.documentElement.getAttribute("data-theme")==="dark"?"light":"dark";document.documentElement.setAttribute("data-theme",t),localStorage.setItem("theme",t)})}function b({fields:e,calculate:n,resultTemplate:l}){const i=document.getElementById("calc-form"),t=document.getElementById("calc-result");!i||!t||(i.addEventListener("submit",o=>{o.preventDefault();const c={};let s=!0;if(e.forEach(a=>{const r=i.querySelector(`[name="${a.name}"]`);if(r)if(r.tagName==="SELECT")c[a.name]=r.value;else{const d=parseFloat(r.value);isNaN(d)||a.min!==void 0&&d<a.min||a.max!==void 0&&d>a.max?(r.classList.add("invalid"),s=!1):(r.classList.remove("invalid"),c[a.name]=d)}}),!s){t.innerHTML='<div class="result-error">Please check your inputs and try again.</div>',t.className="calc-result visible";return}const m=n(c);t.innerHTML=l(m),t.className=`calc-result visible severity-${m.severity||"normal"}`}),i.addEventListener("input",o=>{o.target.classList.remove("invalid")}))}export{b as c,g as i};

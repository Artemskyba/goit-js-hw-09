const t=document.querySelector(".first-task-body"),e=document.querySelector("[data-start]"),l=document.querySelector("[data-stop]");let s;const a=document.createElement("div");function d(){return`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}a.classList.add("wrapper"),a.append(e,l),t.append(a),t.style.width="100vh",t.style.height="100vh",a.style.position="absolute",a.style.top="50%",a.style.left="50%",a.style.transform="translate(-50%, -50%)",a.style.display="flex",a.style.gap="20px",l.disabled=!0,l.style.width="110px",l.style.height="40px",e.style.width="110px",e.style.height="40px",e.addEventListener("click",(function(){t.style.backgroundColor=d(),e.disabled=!0,l.disabled=!1,s=setInterval((function(){t.style.backgroundColor=d()}),1e3)})),l.addEventListener("click",(function(){e.disabled=!1,l.disabled=!0,clearInterval(s)}));
//# sourceMappingURL=01-color-switcher.61b10d3a.js.map
!function(){var t,e=document.querySelector(".first-task-body"),a=document.querySelector("[data-start]"),l=document.querySelector("[data-stop]"),d=document.createElement("div");function s(){return"#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}d.classList.add("wrapper"),d.append(a,l),e.append(d),e.style.width="100vh",e.style.height="100vh",d.style.position="absolute",d.style.top="50%",d.style.left="50%",d.style.transform="translate(-50%, -50%)",d.style.display="flex",d.style.gap="20px",l.disabled=!0,l.style.width="110px",l.style.height="40px",a.style.width="110px",a.style.height="40px",a.addEventListener("click",(function(){e.style.backgroundColor=s(),a.disabled=!0,l.disabled=!1,t=setInterval((function(){e.style.backgroundColor=s()}),1e3)})),l.addEventListener("click",(function(){a.disabled=!1,l.disabled=!0,clearInterval(t)}))}();
//# sourceMappingURL=01-color-switcher.e2a3eac4.js.map
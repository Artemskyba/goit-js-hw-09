!function(){var t;bodyEl=document.querySelector(".first-task-body"),startBtnEl=document.querySelector("[data-start]"),stopBtnEl=document.querySelector("[data-stop]");var e=document.createElement("div");function l(){return"#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}e.classList.add("wrapper"),e.append(startBtnEl,stopBtnEl),bodyEl.append(e),bodyEl.style.width="100vh",bodyEl.style.height="100vh",e.style.position="absolute",e.style.top="50%",e.style.left="50%",e.style.transform="translate(-50%, -50%)",e.style.display="flex",e.style.gap="20px",stopBtnEl.disabled=!0,stopBtnEl.style.width="110px",stopBtnEl.style.height="40px",startBtnEl.style.width="110px",startBtnEl.style.height="40px",startBtnEl.addEventListener("click",(function(){bodyEl.style.backgroundColor=l(),startBtnEl.disabled=!0,stopBtnEl.disabled=!1,t=setInterval((function(){bodyEl.style.backgroundColor=l()}),1e3)})),stopBtnEl.addEventListener("click",(function(){startBtnEl.disabled=!1,stopBtnEl.disabled=!0,clearInterval(t)}))}();
//# sourceMappingURL=01-color-switcher.e4522302.js.map
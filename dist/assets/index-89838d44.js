(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const d=document.querySelectorAll(".has-dropdown");d.forEach(r=>{r.querySelector("a").addEventListener("click",function(n){n.preventDefault(),l(r),r.classList.toggle("active")})});function l(r){d.forEach(o=>{o!==r&&o.classList.contains("active")&&o.classList.remove("active")})}document.addEventListener("click",function(r){r.target.closest(".has-dropdown")||l(null)});const u=document.querySelector(".bar"),i=document.querySelector(".sidebar"),s=document.createElement("div");s.classList.add("overlay");u.addEventListener("click",()=>{i.classList.toggle("offcanvas-menu"),i.classList.contains("offcanvas-menu")?document.body.appendChild(s):document.body.removeChild(s)});s.addEventListener("click",()=>{i.classList.remove("offcanvas-menu"),document.body.removeChild(s)});
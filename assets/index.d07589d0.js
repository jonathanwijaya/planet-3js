import{S as x,P as L,W as b,a as v,A as M,b as S,O as P,T as l,M as f,c as u,d as p,e as A}from"./vendor.f844cb96.js";const D=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))d(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const w of t.addedNodes)w.tagName==="LINK"&&w.rel==="modulepreload"&&d(w)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function d(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}};D();const n=new x,o=new L(75,window.innerWidth/window.innerHeight,1,3e4),i=new b({canvas:document.querySelector("#bg")});i.setPixelRatio(window.devicePixelRatio);i.setSize(window.innerWidth,window.innerHeight);o.position.setZ(300);o.position.setY(250);o.position.setX(100);i.render(n,o);const m=new v(16777215);m.position.set(3,32,32);const O=new M(268435455);n.add(m,O);const T=new S(m);n.add(T);const j=new P(o,i.domElement);function z(){const g=new u(.25,24,24),r=new p({color:268435455}),c=new f(g,r),[d,e,t]=Array(3).fill().map(()=>A.randFloatSpread(3e3));c.position.set(d,e,t),n.add(c)}Array(1e4).fill().forEach(z);const H=new l().load("space.jpg");n.background=H;const W=new l().load("sun.jpg"),h=new f(new u(50,300,20),new p({map:W}));n.add(h);const q=new l().load("mercury.jpg"),s=new f(new u(1,12,12),new p({map:q}));s.position.set(0,0,102);n.add(s);const E=new l().load("venus.jpg"),a=new f(new u(3,12,12),new p({map:E}));a.position.set(0,0,102);n.add(a);function y(){requestAnimationFrame(y),h.rotation.x+=1e-4,h.rotation.y+=1e-4,s.rotation.y=Date.now()*-1e-4,s.position.x=Math.sin(Date.now()*.001)*219.15,s.position.z=Math.cos(Date.now()*.001)*219.15,a.rotation.y=Date.now()*-1e-4,a.position.x=Math.sin(Date.now()*.001)*300,a.position.z=Math.cos(Date.now()*.001)*300,j.update,i.render(n,o)}y();

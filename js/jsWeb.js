import {Press} from './claseDesign.js';

let edition=new Press();
let a=document.body;
let btn=document.getElementById("button");
let l=document.getElementById('list');
let option=document.getElementById('option0');
let option$=document.getElementById('option1');
let ver=edition.showList;
let obtener=edition.obtener;
a.addEventListener("dblclick",ver);
option.addEventListener("click",obtener);
option$.addEventListener("click",obtener);
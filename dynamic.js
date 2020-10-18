import {Press} from './claseInteractive.js';

//Instanciando clases
const press=new Press();

//Instertar listeners
let b=document.getElementById('bodyA');
b.addEventListener('mouseup', press.whoiam);
press.menuCatalogo();
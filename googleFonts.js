import {googleFonts} from './claseGoogleFonts.js';
import {SizeFont} from './claseGoogleFonts.js';
import {SetColor} from './claseGoogleFonts.js';
import {Menus} from './claseGoogleFonts.js';
import {Press} from './claseGoogleFonts.js';

//Instanciando clases
const pruebaSize=new SizeFont(2);
const prueba=new googleFonts(0);
const menus=new Menus();
const cn=new SetColor();  
const press=new Press();
pruebaSize.setSize();
prueba.getFetchData();

//Creacion de elementos en pantalla
let label=document.createElement('label');
label.id='foxyLabel';
document.body.appendChild(label);

//Instertar listeners
let b=document.getElementById('bodyA');
b.addEventListener('mouseup', press.whoiam);
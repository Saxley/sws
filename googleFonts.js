import {googleFonts} from './claseGoogleFonts.js';
import {SizeFont} from './claseGoogleFonts.js';
import {SetColor} from './claseGoogleFonts.js';
import {Menus} from './claseGoogleFonts.js';

const pruebaSize=new SizeFont(2);
pruebaSize.setSize();
const prueba=new googleFonts(0);
prueba.getFetchData();
let label=document.createElement('label');
label.id='foxyLabel';
let cn=new SetColor();
const menus=new Menus();

document.body.appendChild(label);
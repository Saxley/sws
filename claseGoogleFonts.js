//googleFonts;
/*Esta clase solicita de inteenet las fuentes, su uso es traer fuentes rapido y de tod tipo*/
export class googleFonts{
  constructor(num){
    this.url='https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyCw40j8SihOx4A91cHfBlGudIdslBQRbi8';
    this.p = document.getElementById('Fonts');
    this.f={};
    this.identify='';
    this.num=num;
  }
  getFetchData(){
    fetch(this.url)
    .then(response => response.json())
    .then(json => {
      this.f = json.items
      this.on();
    })
  }
  //Agrega 10 nuevos estilos a la lista de fuentes, primero da un identificador, despues lo agrega con la funcion addElement.
  on() {
   for (let i = this.num; i < 10+this.num; i++) {
     let num$ = i;
     this.identify = 'foxy'+i;
     this.addElement(this.identify, num$);
    }
    this.addElement('plusOpt',1005);
  }
  addElement(identify,num) {
    let vocals='ABC';
    let num$=0;
    if(num<1005){
    num$=num;
    let l=this.setLink(num);
    let body=document.head;
    let link = document.createElement('link');
    link.setAttribute('rel', 'stylesheet');
    link.setAttribute('href', l);
    body.appendChild(link);
    }else{
      vocals=`<img src="https://img.icons8.com/metro/26/000000/plus.png" style='width:10vw;height:1em/2;'/>`;
    }
  //_________________Crea y agrega el link al head
    let element = document.createElement('li');
    let ul = document.getElementById('list_fetch');
    element.id = identify;
    ul.appendChild(element);
  //_________________Crea un elemento li y lo agrega a la lista lu que traemos con su id____
    let obj = document.getElementById(identify);
    obj.style = 'font-family: '+this.f[num$].family+', serif; font-size:2.30rem';
    obj.value=num;
    obj.innerHTML = vocals;
    obj.className=this.f[num$].family;
    obj.onclick=this.text_style;
  //_________________Agrega atributos a la etiqueta recien creada, llamandola desde su id
  }
  //setLink::Crea el link para solicitar fuentes, se retorna el url para ser usado
  setLink(num) {
    let apiUrl = [];
    apiUrl.push('https://fonts.googleapis.com/css?family=');
    apiUrl.push(this.f[num].family.replace(/ /g, '+'));
    if ('regular'==this.f[num].variants[0]) {
      apiUrl.push(':');
      apiUrl.push('regular');
    }
    if ('latin'==this.f[num].subsets) {
      apiUrl.push('&subset=');
      apiUrl.push('latin');
    }
    let url = apiUrl.join('');
      return url;
 }
 //text_style::Es la funcion encargada de cambiar la fuente del parrafo. Tambien crea un Label temporal donde se mostrara el nombre de la fuente aplicada, tambien es la encargada de solicitar mas fuentes
  text_style(e){
    const po=new googleFonts;
    if(this.value<1005){
    let label=document.getElementById('foxyLabel');
    label.innerHTML=this.className;
    label.style='display:flex;height:1rem;width:flex;font-size:10px;transform:translate('+((e.screenX*.1)+30)+'vw,'+((e.screenY*.01)*-(e.screenY*.02))+'vh)';
    let a= po.p.style.cssText;
    po.p.style=a+'font-family: '+this.className+';';
      setTimeout(function(){
            label.style='display:none';
          }, 1000);
    }else{
      let num$=po.plusOption(this.id);
      po.num=num$;
      po.getFetchData();
    }
  }
  //plusOption::Es la funcion encargada de eliminar el icono de solicitar mas fuentes y retornar la cantidad de elementos actuales en la lista
  plusOption(identify){
    let ul=document.getElementById("list_fetch");
    let plus=document.getElementById("plusOpt");
    ul.removeChild(plus);
    let n=ul.children.length;
    return n;
  }
}

//SizeFont:
/*Esta clase solicita numeros de diez en diez, los cuales son para aumentar el tamaño de la fuente*/
export class SizeFont{
  constructor(num){
    this.identify='';
    this.num=num;
    this.ul=document.getElementById('list_size');
    this.p=document.getElementById('Fonts');
  }
  //setSize::Es la funcion encargada de agregar los digitos a la lista.
  setSize(){
    for(let i=this.num;i<10+this.num;i+=2){
      this.identify='foxySize'+i;
      this.addElement(i);
      }
      this.identify='plusOptSize';
      this.addElement(100);
  }
  //addElement::Funcion encargada de agregar los digitos a la lista
  addElement(num){
    let li = document.createElement('li');
    if(num==100){
      li.innerHTML=`<img src="https://img.icons8.com/metro/26/000000/plus.png" style='width:5vw;height:1em/4;'/>`;
      li.value=num;
    }else{
      li.innerHTML=num;
    }
    this.ul.style='height:calc(1em/2);width:calc(1em);text-align:left;';
    li.style='height:1em;width:flex;font-size:calc(1em/2);';
    li.id=this.identify;
    li.onclick=this.text_size;
    this.ul.appendChild(li);
  }
  //text-align::Funcion encargada de cambiar el tamaño del parrafo segun el digito seleccionado
  text_size(){
    const Sz=new SizeFont;
    this.innerHTML=parseInt(this.innerHTML);
    let label=document.getElementById('foxyLabel');
    if(this.innerHTML<10){
    let a=Sz.p.style.cssText;
    Sz.p.style=a+'font-family:'+label.innerHTML+';font-size: calc(1em*.'+this.innerHTML+');';
    }else if(this.innerHTML<100){
      let con=parseInt(this.innerHTML);
      con=con*.1;
      let b=Sz.p.style.cssText;
      Sz.p.style=b+'font-family:'+label.innerHTML+';font-size: calc(1em*'+con+');';
    }else{
      let num$=Sz.plusOption(this.id);
      Sz.num=num$+2;
      Sz.setSize();
    }
  }
  //plusOption::Funcion encargada de eliminar el elemento que solicita mas digitos y retornar los elementos actuales de la lista
  plusOption(identify){
    let ul=document.getElementById("list_size");
    let hijos=ul.children.length;
    let plus=document.getElementById("plusOptSize");
    let n=parseInt(ul.children[hijos-2].innerHTML);
    ul.removeChild(plus);
    if(n<90){
    return n;
    }
  }
}

//SetColor
/*Esta funcion se encarga de dar contexto al canvas y dar el color al usuario*/
export class SetColor{
  //constructor::Encargado de crear el context del canvas, agregar la imagen y el evento sobre el context.
  constructor(){
    let cnv= document.getElementById("rueda");
    let img=new Image();
    img.src = 'https://img.icons8.com/color/96/000000/color-wheel-2.png';
    let ctx= cnv.getContext("2d");
    img.onload = function(){
      ctx.beginPath(); 
      ctx.drawImage(img, 0, 0,cnv.width,cnv.height);
      ctx.closePath(); 
    }
    cnv.addEventListener('mouseup',this.getCoordena);
  }
  //getCoordena::Funcion encargada de obtenee coordenadas del canvas con un click y traducir esaa coordenadas a un color
  getCoordena(e){
    let clickX;
    let clickY;
    if(e.offsetX>this.width/3){
      clickX=e.offsetX/4;
      clickY=e.offsetY/4;
    }else{
       clickX=e.offsetX;
       clickY=e.offsetY;
    }
   let colorX=(Math.round(clickX/5))*5;
   let colorY=(Math.round(clickY/5))*5;
   let colores=Array(0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F');
   let colorTranslater=(this.height/2)/15;
   let colorTranslaterW=(this.width/4)/15;
   let planoX=this.width/4;
   let planoY=this.height/2;
   let arrayColor=Array();
   let colorX$=colorX-planoX;
   let colorY$=colorY-planoY;
   let CX$=colorX$*2;
   let CY$=colorY$*2;
   let Luminocidad=Math.round(((Math.sqrt(Math.pow(CX$,2)+Math.pow(CY$,2)))/2)/5)*5;
   colorX$=colorX$+planoX;
   colorY$=colorY$+planoY;
   const nC=new SetColor;
   arrayColor[0]=colores[nC.getNumberColor(planoX,colorTranslaterW,colorX)];
   arrayColor[1]=colores[nC.getNumberColor(planoY,colorTranslater,colorY)];
   arrayColor[2]=colores[nC.getNumberColor(planoX,colorTranslaterW,Luminocidad)];
   arrayColor[3]=colores[nC.getNumberColor(planoX,colorTranslaterW,colorX$)];
   arrayColor[4]=colores[nC.getNumberColor(planoY,colorTranslater,colorY$)];
   let colorNew={
     firstColor:arrayColor[1].toString()+arrayColor[0].toString(),
     secondColor:arrayColor[3].toString()+arrayColor[4].toString(),
     thirdColor:arrayColor[2].toString()+arrayColor[4].toString()
   }
    let p=document.getElementById('Fonts');
    let b=p.style.cssText;
    p.style=b+'color:#'+colorNew.firstColor+colorNew.secondColor+colorNew.thirdColor+';';
   let a= this.style;
    this.style=a.cssText+'background-color:#'+colorNew.firstColor+colorNew.secondColor+colorNew.thirdColor+';';
  }
  //getNumberColor::Funcion encargada de obtener un numero redondeado para posteriormente compararlo con el numero de la coordenada que se le este indicando
  getNumberColor(plano,scena,num){
    let i$;
    for(let i=1;i<30;i++){
     let valor=scena*i;
     if(valor<plano){
        i$=15-i;
     }else{
        i$=30-i;
     }
     if(valor==num){
       return i;
     }
   }
  }
  
}

//Menus
/*Esta clase esta dedicada a agregar y mostrar los menus de interfaz segun donde el usuario de click*/
export class Menus{
  constructor(objetoTemporal){
    this.menuPrincipal=document.getElementById('menuPrincipal');
    this.objetoTemporal=objetoTemporal;
  }
  //show::Muestra el menu lateral de opciones de la pagina.
  show(){
   if(this.menuPrincipal.id==this.objetoTemporal){
    let h=window.visualViewport.height;
    let colocar;
    if(h>720){
    colocar=(Math.round(h/100))-(h/17.50);
    }else{
    colocar=95*-1;
    }
    let menu=document.createElement('ul');
    menu.id='MenuRoot';
    menu.className='menuPrincipal';
    document.body.children[0].append(menu);
    let menuP=menu.style.cssText;
    menu.style=menuP+'transform:translate(-5%,'+colocar+'%);height:100vh;border:1px solid black;padding-top:50px;';
    menu.innerHTML=`<li>Home</li><li>Pay</li><li>Contact</li><li>About us</li><li>Questions</li><li>Promo</li>`;
   }
  }
  //hidden::oculta todos los menus cuando lo clikean
  hidden(){
    let menuRoot=document.getElementById('MenuRoot');
    if(Boolean(menuRoot)){
    document.body.children[0].removeChild(menuRoot);
    }
  }
}

//Press
/*Clase encargada de ubicar el elemento clickeado*/
export class Press extends Menus{
  constructor(objetoTemporal){
    super(objetoTemporal);
  }
  whoiam(e){ 
    if(Boolean(e.target.id)){
      const press=new Press(e.target.id);  
      let objetoClickeado=document.getElementById(e.target.id);
      if(e.target.id!='bodyA'){
        press.show();
      }
      if(e.target.id!='menuPrincipal'){
        press.hidden();
        }
      }
    }
  }
  

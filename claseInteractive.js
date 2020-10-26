//googleFonts;
/*Esta clase solicita de inteenet las fuentes, su uso es traer fuentes rapido y de tod tipo*/
class googleFonts{
  constructor(num){
    this.url='https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyCw40j8SihOx4A91cHfBlGudIdslBQRbi8';
    let ghostInfo=document.getElementById("ghostInfo");
    this.p = document.getElementById(ghostInfo.innerHTML);
    this.f={};
    this.identify='';
    this.num=num;
  }
  
  //getFetchData
  /*Solicita a una url las fuentes,mediante fetch*/
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
  
  //addElement
  /*Agrega fuentes a la*/
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
      vocals=`<img src="http://localhost:8080/upload/iconoPlus.ico" style='width:10vw;height:1em/2;'/>`;
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
    let label=document.createElement('LABEL');
    label.id='foxyLabel'; 
    document.body.appendChild(label);
    label.innerHTML=this.className;
    label.style='background-color: #000000;color:white;display:flex;height:flex;width:3rem;font-size:10px;transform:translate('+((e.screenX*.1)+30)+'vw,'+((e.screenY*.01)*-(e.screenY*.5))+'px)';
    let a= po.p.style.cssText;
    po.p.style=a+'font-family: '+this.className+';';
      setTimeout(function(){
            label.remove();
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
class SizeFont{
  constructor(num){
    this.identify='';
    this.num=num;
    this.ul=document.getElementById('list_size'); 
   let ghostInfo=document.getElementById("ghostInfo");
    this.p=document.getElementById(ghostInfo.innerHTML);
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
      li.innerHTML=`<img src="http://localhost:8080/upload/iconoPlus.ico" style='width:7vw;height:1em;'/>`;
      li.value=num;
    }else{
      li.innerHTML=num;
    }
    this.ul.style='height:calc(1em/2);width:2em;text-align:left;';
    li.style='height:1em;width:flex;font-size:calc(1em/2);';
    li.id=this.identify;
    li.onclick=this.text_size;
    this.ul.appendChild(li);
  }
  
  //text-align::Funcion encargada de cambiar el tamaño del parrafo segun el digito seleccionado
  text_size(){
    const Sz=new SizeFont;
    this.innerHTML=parseInt(this.innerHTML);
    if(this.innerHTML<10){
    let a=Sz.p.style.cssText;
    Sz.p.style=a+'font-size: calc(1em*.'+this.innerHTML+');';
    }else if(this.innerHTML<100){
      let con=parseInt(this.innerHTML);
      con=con*.1;
      let b=Sz.p.style.cssText;
      Sz.p.style=b+'font-size: calc(1em*'+con+');';
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
class SetColor{
  //constructor::Encargado de crear el context del canvas, agregar la imagen y el evento sobre el context.
  constructor(fondo){
    let cnv= document.getElementById("rueda");
    let img=new Image();
    img.src = 'https://img.icons8.com/color/96/000000/color-wheel-2.png';
    let ctx= cnv.getContext("2d");
    img.onload = function(){
      ctx.beginPath(); 
      ctx.drawImage(img, 0, 0,cnv.width,cnv.height);
      ctx.closePath(); 
    } 
   if(fondo=='fondo'){
    let f= document.createElement("label");
    f.hidden=true;
    f.id=fondo;
    document.body.appendChild(f); 
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
    let ghostInfo=document.getElementById("ghostInfo");
    let f=document.getElementById("fondo");
    let p=document.getElementById(ghostInfo.innerHTML); 
    if(f==null){
    let b=p.style.cssText;
    p.style=b+'color:#'+colorNew.firstColor+colorNew.secondColor+colorNew.thirdColor+';';
    }else{
    let b=p.style.cssText;
    p.style=b+'background:#'+colorNew.firstColor+colorNew.secondColor+colorNew.thirdColor+';';
    }
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

//SetCreate
/*Esta clase se encarga de crear objetos en el html*/ 
class SetCreate{ 
//constructor::En el constructor se analiza el innerHTML de la etiqueta que fue presionada, dependiendo de cual fue, el objeto tendra caracterizticas diferentes.
  constructor(objeto){ 
    this.objeto; 
    let ghostInfo=document.getElementById('ghostInfo');
    this.where=document.getElementById(ghostInfo.innerHTML);
    switch(objeto){
      case 'TITULO':
        this.objeto={
          object: 'H1',
          content: 'New tittle',
          id: 'FoxyTittle',
          className: 'tittleNew'
        }; 
        break;
      case 'PARRAFO': 
        this.objeto={
          object: 'P',
          content: 'New paragraph',
          id: 'FoxyParagraph',
          className: 'paragraphNew'
        }; 
        break;
      case 'FORMULARIO':
        this.objeto={
          object: 'FORM',
          content: `<fieldset id="tmpf">
        <legend id="tmpl">NEW FORM</legend> 
        <label id="tmpL">Data</label>
        <input id="tmpI" type='text'/>
        <button id="tmpB" type='button'>SEND</button>
        </fieldset>`,
          id: 'FoxyForm',
          className: 'formNew'
        }; 
        break; 
      case 'BOTON':
        this.objeto={
          object: 'BUTTON',
          content: 'Send',
          id: 'FoxyButton', 
          type: 'button',
          className: 'buttonNew'
        }; 
        break;
      case 'IMAGEN':
        this.objeto={
          object: 'IMG',
          url: 'http://localhost:8080/upload/ImagenMuestra.png',
          id: 'FoxyImage',
          className: 'imageNew'
        }; 
        break; 
      case 'CAJA DE TEXTO':
        this.objeto={
          object: 'INPUT',
          placeholder: 'write here',
          id: 'FoxyInput',
          type: 'text',
          className: 'inputNew'
        }; 
        break; 
      case 'INFO':
        this.objeto={
          object: 'LABEL',
          content: 'Data',
          id: 'FoxyLabel',
          className: 'labelNew'
        }; 
        break;
      case 'LISTA':
        this.objeto={
          object: 'OL',
          content: `<li id="tmp">option1</li>
                    <li id="tmp">option2</li>
                    <li id="tmp">option3</li>
                    <li id="tmp">option4</li>
                    <li id="tmp">option5</li>`,
          id: 'FoxyLista',
          className: 'listaNew'
        }; 
        break; 
      case 'AGREGAR A LISTADO':
        this.objeto={
          object: 'LI',
          content: 'optionplus',
          id: 'FoxyList',
          className: 'listNew'
        }; 
        break; 
      case 'MENU':
        this.objeto={
          object: 'UL',
          content: `<li id="tmp0">option1</li>
                    <li id="tmp1">option2</li>
                    <li id="tmp2">option3</li>
                    <li id="tmp3">option4</li>
                    <li id="tmp">option5</li>`,
          id: 'FoxyMenu',
          className: 'menuNew'
        }; 
        break;
      case 'DELETE': 
        this.where.remove();
        break;
    }  
    this.searchIds();
    this.create();
  } 
  
//create::Aquí se crean los objetos
  create(){ 
    let objeto;
    objeto=document.createElement(this.objeto.object);
    
    if(this.objeto.object=='INPUT'){
      objeto.placeholder=this.objeto.placeholder;
      objeto.type=this.objeto.type;
    }else if(this.objeto.object=='BUTTON'){ 
      objeto.type=this.objeto.type;
      objeto.innerHTML=this.objeto.content;
    }else if(this.objeto.object=='IMG'){
      objeto.setAttribute('src',this.objeto.url);
    }else{
      objeto.innerHTML=this.objeto.content;
    } 
    
   objeto.id=this.objeto.id;
   objeto.className=this.objeto.className; 
   
   if(this.where.tagName=='P'){
    this.where.before(objeto);
   }else{
    this.where.appendChild(objeto); 
   }
  } 

//searchIds::Busca el id principal y los que le siguen, en caso de que se repita aumenta un digito a el id.
  searchIds(){ 
    let c=0; 
    let newid; 
    let origin=this.objeto.id;
    while(document.getElementById(this.objeto.id)!=null){ 
      newid=origin+c;
      c++;   
      this.objeto.id=newid;
    }
  }
} 

//SetText
/*Esta funcion da la opcion de cambiar el texto de un parrafo*/ 
class SetText{ 
//Recibe como parametro la accion a realizar y busca con un switch dhicha accion
  constructor(action){
    let ghostInfo=document.getElementById('ghostInfo');
    this.tmpTxt=document.getElementById(ghostInfo.innerHTML); 
    switch(action){
    case 'TEXT':
      this.writes(); 
      break;
    case 'CENTER':
      this.centrar(); 
      break;
    case 'LEFT':
      this.leftear(); 
      break;
    case 'RIGHT':
      this.rightear(); 
      break;
    }
  } 
  
//writes::Da la opción de re escribir en caso de que no haya nada ñ, no se podra escribir.
  writes(){ 
   if(this.tmpTxt.innerHTML!=''){
    if(this.tmpTxt.tagName=='P' || this.tmpTxt.tagName=='H1' || this.tmpTxt.tagName=='LI' || this.tmpTxt.tagName=='BUTTON' || this.tmpTxt.tagName=='LABEL' || this.tmpTxt.tagName=='LEGEND'){
      let txt=prompt('Writes'); 
      if(txt!=null && txt!=''){
      this.tmpTxt.innerHTML=txt; 
     } 
    }
   }
  } 

//centrar::Centra el texto
  centrar(){
    let stylo=this.tmpTxt.style.cssText;
    this.tmpTxt.style=stylo+'text-align:center';
  } 
//leftear::Manda a la izquierda el texto
  leftear(){
    let stylo=this.tmpTxt.style.cssText;
    this.tmpTxt.style=stylo+'text-align:left';
  } 
//rightear::Manda a la derecha el texto
  rightear(){
    let stylo=this.tmpTxt.style.cssText;
    this.tmpTxt.style=stylo+'text-align:right';
  }
}

//_____________________________________________
                  //Menus
/*Esta clase esta dedicada a agregar y mostrar los menus de interfaz segun donde el usuario de click*/
class Menus{
  constructor(objetoTemporal){
    this.menuPrincipal=document.getElementById('menuPrincipal');
    this.divCatalogo=document.getElementById("catalogo_grid");
    this.navCatalogo=document.getElementById("navCatalogo");
    this.ulCatalogo=document.getElementById("ulCatalogo");
    this.buttonnMore=document.getElementById("buttonnMore");
    this.objetoTemporal=objetoTemporal;
    this.numberScript;
  } 
  
//show::Muestra el menu lateral de opciones de la pagina.
  show(){  
   let desmembrar=this.objetoTemporal.target.id.split("img");
//MENU LATERAL ________________________________
   if(this.menuPrincipal.id==this.objetoTemporal.target.id){
    this.resize();
    let h=document.body.offsetHeight;
    let colocar;
    colocar=(this.menuPrincipal.height+h)*-1;
    let menu=document.createElement('ul');
    menu.id='MenuRoot';
    menu.className='menuPrincipal';
    document.body.append(menu);
    let menuP=menu.style.cssText;
    menu.style=menuP+'transform:translate(-5%,'+colocar+'px);height:100vh;border:1px solid black;padding-top:100px;';
    menu.innerHTML=`<li>Home</li><li>Pay</li><li>Contact</li><li>About us</li><li>Questions</li><li>Promo</li>`;
    this.resize();
   }
   if(this.objetoTemporal.target.id=="buttonnMore"){
    this.addImage();
   }
   if(this.objetoTemporal.target.id=="option1"){ 
   let ulEdit = document.getElementById("edit");  
   if(ulEdit!=null){
   let divEdit = document.getElementById("sublist");
   while(ulEdit.children.length>0){
     ulEdit.children[0].remove();
   }
   ulEdit.remove();
   divEdit.remove(); 
   } 
    this.menuCreating();
    this.printOpt(this.objetoTemporal);
   }
   if(this.objetoTemporal.target.id=="option0"){  
   let ulCreating = document.getElementById("creating");  
   if(ulCreating!=null){
   let divEdit = document.getElementById("sublist");
   while(ulCreating.children.length>0){
     ulCreating.children[0].remove();
   }
   ulCreating.remove();
   divEdit.remove(); 
   } 
    this.menuEdit();
    this.printOpt(this.objetoTemporal);
   }   
//__________________________________SUBMENU0
   if(this.objetoTemporal.target.id=="FONT"){
    this.removeMenusEdit();
    this.menuFonts(); 
    const pruebaFont=new googleFonts(0);
    pruebaFont.getFetchData();
    this.printOpt(this.objetoTemporal);
   }  
   if(this.objetoTemporal.target.id=="SIZE"){
    this.removeMenusEdit();
    this.menuSize(); 
    const pruebaSize=new SizeFont(2);
    pruebaSize.setSize();
    this.printOpt(this.objetoTemporal);
   }  
   if(this.objetoTemporal.target.id=="COLORF"){
    this.removeMenusEdit();
    this.menuColor(); 
    const cn=new SetColor('fondo');
    this.printOpt(this.objetoTemporal);
   }  
   if(this.objetoTemporal.target.id=="COLOR"){
    this.removeMenusEdit();
    this.menuColor(); 
    const cn=new SetColor();
    this.printOpt(this.objetoTemporal);
   }    
//____________________________________SUBMENU1
 
 if(this.objetoTemporal.target.id=="PARRAFO"){
    this.removeMenusEdit();
     let parrafo=new SetCreate(this.objetoTemporal.target.innerHTML);
   }
   if(this.objetoTemporal.target.id=="IMAGEN"){
    this.removeMenusEdit();
     let imagen=new SetCreate(this.objetoTemporal.target.innerHTML);
   }
   if(this.objetoTemporal.target.id=="TITULO"){
    this.removeMenusEdit();
     let titulo=new SetCreate(this.objetoTemporal.target.innerHTML);
   }
   if(this.objetoTemporal.target.id=="FORMULARIO"){
    this.removeMenusEdit();
     let formulario=new SetCreate(this.objetoTemporal.target.innerHTML);
   }
   if(this.objetoTemporal.target.id=="LISTA"){
    this.removeMenusEdit();
     let lista=new SetCreate(this.objetoTemporal.target.innerHTML);
   }
   if(this.objetoTemporal.target.id=="BOTON"){
    this.removeMenusEdit();
     let boton=new SetCreate(this.objetoTemporal.target.innerHTML);
   }
   if(this.objetoTemporal.target.id=="BOX"){
    this.removeMenusEdit();
     let txtBox=new SetCreate(this.objetoTemporal.target.innerHTML);
   }
   if(this.objetoTemporal.target.id=="MENU"){
    this.removeMenusEdit();
     let menu=new SetCreate(this.objetoTemporal.target.innerHTML);
   }
   if(this.objetoTemporal.target.id=="LABELBOX"){
    this.removeMenusEdit();
     let label=new SetCreate(this.objetoTemporal.target.innerHTML);
   }
   if(this.objetoTemporal.target.id=="LI"){
    this.removeMenusEdit();
     let linew=new SetCreate(this.objetoTemporal.target.innerHTML);
   }
   if(this.objetoTemporal.target.id=="DELETE"){
    this.removeMenusEdit();
     let borrar=new SetCreate(this.objetoTemporal.target.innerHTML);
   }
   if(this.objetoTemporal.target.id=="CHANGE"){
      this.removeMenusEdit();
      const changeText=new SetText(this.objetoTemporal.target.innerHTML);
   }
//_____________________________________SUBMENU1
  
//desmembrar::DETECTA CUANDO SE DA CLICK SOBRE UNA PLANTILLA Y LLAMA A LOS METODOS CORRESPONDIENTES PARA PODER MOSTRARLA
   if(desmembrar.length>1){
     let busqueda=this.objetoTemporal.target.id.split("imgCatalogo");
     let numberScript=busqueda[1];
     this.numberScript=numberScript;
     this.callScript();
   }
  }

//hidden::oculta todos los menus cuando lo clikean
  hidden(){
    let menuRoot=document.getElementById('MenuRoot');
    if(Boolean(menuRoot)){
    document.body.removeChild(menuRoot);
    }
  }
  
//resize::Hace que la ventana sufra una redimención en caso de que así lo necesite
  resize(){
    let b=document.body.clientHeight;
    let c=document.body.children[0].offsetHeight;
    let b$;
    if(b>c){
      b$=document.body.style='height:'+c+'px';
    }else if(c>b){
      b$=document.body.style='height:'+c+'px';
    }else{
      b$="this scale not is necesary, it's objects been sames"
    }
    console.log(b,c,b$);
  }
  
//menuCatalogo::Muestra las opciones de diseño pre diseñadas.
  menuCatalogo(){  
    let divCatalogo=document.getElementById('catalogo_grid');
    let listCatalogo=document.createElement('ul'); 
    let navCatalogo=document.createElement('nav');
    let buttonnMore=document.createElement('button');
    //id
    listCatalogo.id="ulCatalogo";
    navCatalogo.id="navCatalogo";
    buttonnMore.id="buttonnMore";
    //InnersHTML
    buttonnMore.innerHTML="See more options";
    //adds
    divCatalogo.appendChild(navCatalogo);
    navCatalogo.appendChild(listCatalogo);
    navCatalogo.appendChild(buttonnMore);

    navCatalogo.addEventListener("click",this.menuHidden);
    //addsIL
    if(listCatalogo.children.length<4){
      for(let i=1;i<5;i++){
        let li=document.createElement("li");
        let img=document.createElement("img");
        li.id="liCatalogo"+i;  
        img.id="imgCatalogo"+i;  
        listCatalogo.append(li);
        li.append(img);
        this.callImg(img.id,i); 
      } 
    }
  }  
  
//menuHidden::Quita todos los menus en pantalla
  menuHidden(){
    let divBody=document.getElementById("bodyA"); 
//Este for revisa divBody para eliminar elementos 
    for(let i=0;i<divBody.children.length;i++){
      let objeto=divBody.children[i].id; 
      if(objeto=="nav_Font"){
        divBody.children[i].remove();
      } 
      if(objeto=="nav_Size"){
        divBody.children[i].remove();
      } 
      if(objeto=="rueda"){
        divBody.children[i].remove();
      } 
      if(objeto=="list"){
        const borrar=new Menus;
        borrar.removeMenusEdit(); 
      } 
      if(objeto=="ghostInfo"){
        divBody.children[i].remove();
      } 
    }
  } 
  
//printOpt::Se encarga de imprimir en pantalla el submenu que se le indique
  printOpt(e){
    let options;
    let d=document.body;
    let screen={
       pY:d.clientHeight,
       pX:d.clientWidth,
       px:e.clientX,
       py:e.clientY
    };
    let vh=(screen.pY+screen.py)-screen.pY*2;
    let vw=screen.pX*.01+screen.px*.1;
    if(vw>70){
      vw=70;
    }
   switch(e.target.id){
      case 'option0':
        options=document.getElementById("sublist");
        break;
     case 'FONT': 
        options=document.getElementById("nav_Font");
        break;
     case 'SIZE': 
        options=document.getElementById("nav_Size");
        break;
     case 'COLOR': 
        options=document.getElementById("rueda");
        break;
     case 'COLORF': 
        options=document.getElementById("rueda");
        break;
      case 'option1':
        options=document.getElementById("sublist");
        break;
    }
  vw=vw+"vw";
  vh=vh+"px";
  options.style="display:flex;transform:translate("+vw+","+vh+");";
  }
  
//menuFonts::Crea el menu para conseguir fuentes.
  menuFonts(){
    let divBody=document.getElementById("bodyA");
    let navFont=document.createElement("NAV");
    let ulFont=document.createElement("UL");
    ulFont.id="list_fetch";
    navFont.id="nav_Font";
//__________________________________AGREGAMOS
    divBody.appendChild(navFont);
    navFont.appendChild(ulFont);
}  

//menuSize::Crea el menu para cambiar el tamaño de los objetos.
  menuSize(){
    let divBody=document.getElementById("bodyA");
    let navSize=document.createElement("NAV");
    let ulSize=document.createElement("UL");
    ulSize.id="list_size";
    navSize.id="nav_Size";
//__________________________________AGREGAMOS
    divBody.appendChild(navSize);
    navSize.appendChild(ulSize);
  }

//menuColor::Crea el menu para cambiar el color de los objetos.
  menuColor(){
    let divBody=document.getElementById("bodyA");
    let canvasFont=document.createElement("CANVAS");
    canvasFont.id="rueda";
//__________________________________AGREGAMOS
    divBody.appendChild(canvasFont);
  } 
  
//menuCreate::Crea una lista para editar el elemento que este en nav
  menuCreate(e){   
//exist::Nos va ayudar para saber si ya existe en bodyA 
    let exist=false;
    let divBody=document.getElementById("bodyA"); 
//Este for revisa divBody para eliminar elementos 
    for(let i=0;i<divBody.children.length;i++){
      let objeto=divBody.children[i].id; 
      if(objeto=="nav_Font"){
        divBody.children[i].remove();
      } 
      if(objeto=="nav_Size"){
        divBody.children[i].remove();
      } 
      if(objeto=="rueda"){
        divBody.children[i].remove();
      } 
      if(objeto=="list"){
        const borrar=new Menus;
        borrar.removeMenusEdit(); 
      } 
      if(objeto=="ghostInfo"){
        exist=true;
      } 
    }
    let linkEdit=document.createElement("link");
    let divCreate=document.createElement("DIV");
    let ulCreate=document.createElement("UL");
    let optEdit=document.createElement("LI");
    let optCreate=document.createElement("LI");
//ghostInfo::Almacena el id del objeto a editar,en caso de que ya exista el mismo, no se creara de nuevo.
    if(!exist){
      let ghostInfo=document.createElement("LABEL"); 
      ghostInfo.id="ghostInfo";
      ghostInfo.hidden=true;
      divBody.appendChild(ghostInfo);
    }
    ghostInfo.innerHTML=e.target.id;
    divCreate.id="list";
    optEdit.id="option0";
    optCreate.id="option1";
    ulCreate.id="ulCreate";
    optEdit.value=1;
    optCreate.value=2;
    optEdit.innerHTML="Edit";
    optCreate.innerHTML="Create";
    divCreate.className="box_list";
    ulCreate.className="subMenu";
    linkEdit.setAttribute("rel","stylesheet");
    linkEdit.setAttribute("href","/css/stylesWeb.css");
    linkEdit.setAttribute("id","linkEdit");
    document.head.appendChild(linkEdit);
    divBody.appendChild(divCreate);
    divCreate.appendChild(ulCreate);
    ulCreate.appendChild(optEdit);
    ulCreate.appendChild(optCreate);
    let options;
    let d=document.body;
    let screen={
       pY:d.clientHeight,
       pX:d.clientWidth,
       px:e.clientX,
       py:e.clientY
    };
    let vh=(screen.pY+screen.py)-screen.pY*2;
    let vw=screen.pX*.01+screen.px*.1;
    if(vw>70){
      vw=70;
    }
    options=document.getElementById("list");
    vw=vw+"vw";
    vh=vh+"px";
    options.style="display:flex;transform:translate("+vw+","+vh+");";   
  }
  
//menuEdit::Crea un menu que da la opcion de cambiar el formato del texto,fondo,tamaño del objeto.
  menuEdit(){
    let divBody=document.getElementById("bodyA");
    let divEdit=document.createElement("DIV");
    let ulEdit=document.createElement("UL");
    let optSize=document.createElement("LI");
    let optFont=document.createElement("LI");
    let optColor=document.createElement("LI");
    let optColorFont=document.createElement("LI");
    let optCenter=document.createElement("LI");
    let optLeft=document.createElement("LI");
    let optRight=document.createElement("LI");
    divEdit.className="grid_box_list";
    divEdit.id="sublist";
    ulEdit.className="subMenu";
    ulEdit.id="edit";
    optSize.id="SIZE";
    optColor.id="COLOR";
    optColorFont.id="COLORF";
    optFont.id="FONT";  
    optCenter.id="CHANGE";  
    optLeft.id="CHANGE";  
    optRight.id="CHANGE";  
//__________________________________AGREGAMOS
    optSize.innerHTML="SIZE";
    optColor.innerHTML="COLOR";
    optColorFont.innerHTML="BACKGROUND";
    optFont.innerHTML="FONT";
    optCenter.innerHTML="CENTER";
    optLeft.innerHTML="LEFT";
    optRight.innerHTML="RIGHT";
    divBody.appendChild(divEdit);
    divEdit.appendChild(ulEdit);
    ulEdit.appendChild(optFont);
    ulEdit.appendChild(optSize);
    ulEdit.appendChild(optColorFont);
    ulEdit.appendChild(optColor);
    ulEdit.appendChild(optCenter);
    ulEdit.appendChild(optLeft);
    ulEdit.appendChild(optRight);
  }
  
//menuCreating::Crea objetos sobre el documento, ya sean parrafos, titulos, imagenes, listas, entre otras. 
  menuCreating(){
    let divBody=document.getElementById("bodyA");
    let divCreating=document.createElement("DIV");
    let ulCreating=document.createElement("UL");
    let optParrafo=document.createElement("LI");
    let optTitulo=document.createElement("LI");
    let optFormulario=document.createElement("LI");
    let optChange=document.createElement("LI");
    let optImagen=document.createElement("LI");
    let optDelete=document.createElement("LI");
    let optLista=document.createElement("LI");
    let optBoton=document.createElement("LI");
    let optBox=document.createElement("LI");
    let optLabelBox=document.createElement("LI");
    let optLi=document.createElement("LI");
    let optMenu=document.createElement("LI");
    divCreating.className="grid_box_list";
    divCreating.id="sublist";
    ulCreating.className="subMenu";
    ulCreating.id="creating";
    optParrafo.id="PARRAFO";
    optFormulario.id="FORMULARIO";
    optImagen.id="IMAGEN";
    optTitulo.id="TITULO";  
    optChange.id="CHANGE";  
    optDelete.id="DELETE";  
    optLista.id="LISTA";  
    optBoton.id="BOTON";  
    optBox.id="BOX";  
    optLabelBox.id="LABELBOX";  
    optLi.id="LI";  
    optMenu.id="MENU";  
//__________________________________AGREGAMOS
    optParrafo.innerHTML="PARRAFO";
    optFormulario.innerHTML="FORMULARIO";
    optImagen.innerHTML="IMAGEN";
    optTitulo.innerHTML="TITULO";
    optChange.innerHTML="TEXT";
    optDelete.innerHTML="DELETE";
    optLista.innerHTML="LISTA";
    optBoton.innerHTML="BOTON";
    optBox.innerHTML="CAJA DE TEXTO";
    optLi.innerHTML="AGREGAR A LISTADO";
    optLabelBox.innerHTML="INFO";
    optMenu.innerHTML="MENU";
    divBody.appendChild(divCreating);
    divCreating.appendChild(ulCreating);
    ulCreating.appendChild(optTitulo);
    ulCreating.appendChild(optParrafo);
    ulCreating.appendChild(optFormulario);
    ulCreating.appendChild(optBoton);
    ulCreating.appendChild(optBox);
    ulCreating.appendChild(optLabelBox);
    ulCreating.appendChild(optImagen);
    ulCreating.appendChild(optLista);
    ulCreating.appendChild(optLi);
    ulCreating.appendChild(optMenu);
    ulCreating.appendChild(optChange);
    ulCreating.appendChild(optDelete);
  } 
  
//removeMenusEdit:: Remueve los menus de editar o crear. 
  removeMenusEdit(){
   let divCreate = document.getElementById("list");
   let optCreate = document.getElementById("option1");
   let ulCreate = document.getElementById("ulCreate");
   let optEdit = document.getElementById("option0");
   let linkEdit = document.getElementById("linkEdit");
   let liTemp = document.getElementById("optiontemp");
   
   let divEdit = document.getElementById("sublist");
   let ulEdit = document.getElementById("edit");  
   let ulCreating = document.getElementById("creating");  
//_____________________________________SUBMENUS
   let f=document.getElementById('fondo');
    if(f!=null) f.remove(); 
//__________________________________BACKGROUND
   if(ulEdit!=null){
   while(ulEdit.children.length>0){
     ulEdit.children[0].remove();
   }
   ulEdit.remove();
   divEdit.remove(); 
   } 
//__________________________________SUBMENU0
   if(ulCreating!=null){
   while(ulCreating.children.length>0){
     ulCreating.children[0].remove();
   }
   ulCreating.remove();
   divEdit.remove(); 
   } 
//_____________________________________SUBMENU1
   linkEdit.remove();
   optEdit.remove();
   optCreate.remove();
   ulCreate.remove();
   divCreate.remove();
  } 
  
//addImage::Agrega nuevos elementos a la lista de paginas prediseñadas.
  addImage(){
     let listCatalogo=document.getElementById("ulCatalogo");
     let countChilds=listCatalogo.children.length;
     console.log(countChilds); 
     if(listCatalogo.children[countChilds-1].children[0].src!='http://localhost:8080/upload/outService.png'){
    for(let i=countChilds;i<countChilds+4;i++){
        let li=document.createElement("li");
        let img=document.createElement("img");
        li.id="liCatalogo"+i;  
        img.id="imgCatalogo"+i;
        
        listCatalogo.append(li);
        li.append(img); 
        this.callImg(img.id,i); 
      } 
     }
  }
  
//callScript::Llama al script de la imagen que fue clickeada para que el usuario pueda interactuar.
  callScript(){
//__________________________SOLICITUD DE SCRIPT
    const url="http://localhost:8080/interfazSociophp/getScript.php";
    let datos=new FormData();
    datos.append("id",this.numberScript);
    datos.append("imagen",'null');
    fetch(url,{
      method:'post',
      body:datos
    })
    .then(response =>{
      data=response.json()
      .then(data=>{  
      let foxyDesign=document.createElement("SCRIPT");
      foxyDesign.id="TempScript"+this.numberScript;  
//AGREGAMOS EL MENU FOOTER CON UN BACK Y UN BUY
      let footer=document.createElement('footer');
      let buttonnBuy=document.createElement('button');
      let buttonnBack=document.createElement('button');
      footer.id="footerCatalogo";
      buttonnBack.type="button";
      buttonnBuy.type="button";
      buttonnBack.id="buttonnBack";
      buttonnBuy.id="buttonnBuy";
      buttonnBack.innerHTML="Back";
      buttonnBuy.innerHTML="Buy this page";
//################______AGREGAMOS A EL DOCUMENT
      this.divCatalogo.appendChild(footer); 
      footer.appendChild(buttonnBack);
      footer.appendChild(buttonnBuy);
       let info=data.res; 
       while(this.ulCatalogo.children.length>0){
         this.ulCatalogo.children[0].remove();
       }
       this.ulCatalogo.remove();
       this.buttonnMore.remove();
       foxyDesign.innerHTML=info;
       document.body.appendChild(foxyDesign);
       let ejecutar=new Pagina(this.navCatalogo.id);
//BORRAMOS DEL DOCUMENTO EL SCRIPT Y RECARGAMOS
      buttonnBack.addEventListener("click",()=>{
        ejecutar.drop(); 
        this.navCatalogo.remove();
        buttonnBuy.remove();
        foxyDesign.remove();
        buttonnBack.remove();
        footer.remove(); 
        this.menuCatalogo();
        window.location.reload();
      });
//REDIRECCIONAMOS A LA VENTANA DE COMPRAR.     
      buttonnBuy.addEventListener("click",()=>{ 
        if(document.getElementById('email')==null){
        let pedido=document.createElement('P'); 
        pedido.innerHTML=this.navCatalogo.innerHTML;
        pedido.hidden=true;
        pedido.id='pedido';
        let ejecutar=new Pagina(this.navCatalogo.id);
        ejecutar.drop(); 
        let email=document.createElement('INPUT');
        let legend=document.createElement('P');
        let comment=document.createElement('TEXTAREA');
        let legend0=document.createElement('P');
        let pago=document.createElement('SELECT');
        let pagoL=document.createElement('Label');
        legend.innerHTML='Danos tu correo electronico para ponernos en contacto contigo<br>';
        legend.id='email';
        legend.className='email';
        legend0.innerHTML='Dejanos algunos detalles sobre como quieres tu pagina, te recomendamos que nos dejes un listado. Estaremos en contacto contigo y tomaremos esta lista como referencia inicial.<br>';
        legend0.id='comment';
        legend0.className='email';
        email.className='email';
        email.id='intoEmail';
        email.type='text';
        email.placeholder='Correo Electronico';
        comment.className='email';
        comment.id='intoComment';
        comment.placeholder='Detalles sobre tu web'; 
        pagoL.innerHTML="Metodo de pago <br>";
        pagoL.className='metodo';
        pago.className='metodo';
        pago.id='metodo';
        pago.innerHTML=`
    <option value="PayPal">Paypal</option>
    <option value="MercadoPago">Mercado Pago</option>`;
        this.navCatalogo.append(pedido);
        this.navCatalogo.append(legend);
        legend.append(email);
        this.navCatalogo.append(legend0);
        legend0.append(comment); 
        this.navCatalogo.append(pagoL);
        this.navCatalogo.append(pago);
        }else{ 
        if(document.getElementById('intoEmail').value!='' && document.getElementById('intoComment').value!=''){
        const url="http://localhost:8080/interfazSociophp/pedidos.php";
        let datos=new FormData(); 
        datos.append("editado",document.getElementById('pedido').innerHTML); 
        datos.append("email",document.getElementById('intoEmail').value);
        datos.append("comment",document.getElementById('intoComment').value);
        datos.append("metodo",document.getElementById('metodo').value);
        fetch(url,{
         method:'post',
         body:datos
         })
       .then(response =>{
         data=response.json()
         .then(data=>{  
           while(this.navCatalogo.children.length>0){
              this.navCatalogo.children[0].remove();
            } 
            if(data.pay=='PayPal'){
             document.getElementById('smart-button-container').style='display:contents;'; 
            }else if(data.pay=='MercadoPago'){
              alert('en construction');
            }
         })
        }) 
        }else{
          alert('Porfavor llene todos los campos');
        }
        }
      }); 
//FUNCION DOBLE DobleClick 
     this.navCatalogo.addEventListener("dblclick",this.menuCreate);
      })
    })
  }  
  
//callImg::Llama a la imagen del SCRIPT
  callImg(imgid,number){ 
   let img=document.getElementById(imgid);
   let l='./upload/';
    const url="http://localhost:8080/interfazSociophp/getScript.php";
    let datos=new FormData();
    datos.append("id",number); 
    datos.append('imagen','imagen');
   fetch(url,{
      method:'post',
      body:datos
    })
    .then(response =>{
      data=response.json()
      .then(data=>{  
        if(data.res!='error'){ 
          img.src=l+data.res;  
        } 
      })
    });  
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
      const press=new Press(e);  
      let objetoClickeado=document.getElementById(e.target.id); 
      //CONTENEDOR
      if(e.target.id!='bodyA'){
        press.show(); 
      }
      if(e.target.id!='menuPrincipal'){
        press.hidden();
        }
      }
    }
  }
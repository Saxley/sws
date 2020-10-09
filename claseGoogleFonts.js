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
  plusOption(identify){
    let ul=document.getElementById("list_fetch");
    let plus=document.getElementById("plusOpt");
    ul.removeChild(plus);
    let n=ul.children.length;
    return n;
  }
}

export class SizeFont{
  constructor(num){
    this.identify='';
    this.num=num;
    this.ul=document.getElementById('list_size');
    this.p=document.getElementById('Fonts');
  }
  setSize(){
    for(let i=this.num;i<10+this.num;i+=2){
      this.identify='foxySize'+i;
      this.addElement(i);
    }
    this.identify='plusOptSize';
    this.addElement(100);
  }
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

export class SetColor{
  constructor(){
    var cnv= document.getElementById("rueda");
    var img=new Image();
    img.src = 'https://img.icons8.com/color/96/000000/color-wheel-2.png';
    var ctx= cnv.getContext("2d");
    img.onload = function(){
      ctx.beginPath(); 
      ctx.drawImage(img, 0, 0,cnv.width,cnv.height);
      ctx.closePath(); 
    }
    cnv.addEventListener('mousedown',this.getCoordena);
  }
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

export class Menus{
  constructor(){
    this.menuPrincipal=document.getElementById('menuPrincipal');
    this.menuPrincipal.addEventListener('click',this.show)
    document.body.addEventListener('dblclick',this.hidden);
    this.activo=false;
  }
  show(){
    const M=new Menus;
    if(M.activo==false){
    M.activo=true;
    let h=document.body.offsetHeight;
    let menu=document.createElement('ul');
    menu.id='MenuRoot';
    menu.className='menuPrincipal';
    menu.innerHTML=`
    <li>Home</li>
    <li>Pay</li>
    <li>Contact</li>
    <li>About us</li>
    <li>Questions</li>
    <li>Promo</li>
    `;
    document.body.append(menu);
    let menuP=menu.style.cssText;
    menu.style=menuP+'transform:translate(-10%,'+((this.height-h)-(h*.118))+'px);';
    }
  }
  hidden(){
    let menuRoot=document.getElementById('MenuRoot');
    document.body.removeChild(menuRoot);
  }
}
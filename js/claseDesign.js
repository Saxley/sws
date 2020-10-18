class Create{
  constructor(styloL,stylo,typo,identify){
    this.stylo=stylo;
    this.tempTypo=typo;
    this.identify=identify;
    this.styloL=styloL;
  }
  edit(){
    
  }
  create(){
    let newElement=document.createElement(type);
    newElement.className=style;
    let existElement=document.body.getElementById(this.typo);
  }
//crear dentro de un objeto
  mekeInto(type,identify){
   let newId="_FoxyElement";
   let object=document.getElementById(identify);
   if(Boolean(object.children.length)){
   for (let i = 0; i < object.children.length; i++) {
    let getid = object.children[i];
    while (getid.id == object.id) {
      newId= type+newId+i.toString();
    }
    return newId;
   }
  }else{
    newId=type+newId;
    return newId;
  }
}

//Estilos default
  setAtributes(style,id){
    let tag=document.getElementById(id);
    tag.className=style;
  }
  
//Modificaciones x el usuario
  setAtributesText(fonts,sizes,align,id){
    let tag=document.getElementById(id);
    tag.style='font-family:'+fonts;
    tag.style='font-size:'+sizes+'%';
    tag.style='text-align:'+align;
  }
  textDecoration(type,color,id){
   let tag=document.getElementById(id);
   tag.style='color:'+color;
  }
  setAtributeForm(width,height,radius,id){
   let tag=document.getElementById(id);
   tag.style='width:'+width;
   tag.style='height:'+height;
   tag.style='border-radius:'+radius+'%';
  }
  border(weight,visual,where,color,id){
    let tag=document.getElementById(id);
    if(visual){
     for(let arist of where){
      tag.style='border-'+arist+':'+weight+'% solid '+color;
     }
    }else{
     tag.style='border:none';
    }
  }
//TEXT_BOX
  textPlace(wodrs,id){
   let tag=document.getElementById(id);
   tag.placeholder=words;
  }
  backColor(color,id){
   let tag=document.getElementById(id);
   tag.style='background-color:'+color;
  }
}

export class Press extends Create{
  constructor(styloL,stylo,typo,identify){
    super(styloL,stylo,typo,identify);
  }
  
  showList(e){
    let options;
    let menuOcult;
    let d=document.body;
    let c={
       pY:d.clientHeight,
       pX:d.clientWidth,
       px:e.clientX,
       py:e.clientY
    };
    
    let vh=c.pY*.01-c.py*.1;
    let vw=c.pX*.01+c.px*.1;
    if(vw>70){
      vw=70;
    }
    switch(e.target.id){
      case 'option0':
        options=document.getElementById("sublist");
        break;
      case 'option1':
        alert('En mantenimiento');
        break;
      default:
        options=document.getElementById("list");
        let nameId=e.target.id;
        let litemp=document.createElement('li');
        litemp.id='optiontemp';
        litemp.innerHTML=nameId;
        litemp.style="display:none";
        options.after(litemp);
    }
    vw=vw+"vw";
    vh=vh+"vh";
    options.style="display:flex;transform:translate("+vw+","+vh+");";
  }
  
  obtener(e){
    let opt=document.getElementById('optiontemp');
    let eE=document.getElementById(opt.innerHTML);
    const EA=new Press(this.className,eE.className,eE.nodeName,opt.innerHTML);
    let E=e;
    EA.showList(E);
    this.value==1 ? EA.edit() : EA.create();
  }
  
  showObject(identify$,identify){
    let objeto$=document.getElementById(identify$);
    let objeto=document.getElementById(identify);
    objeto$.appendChild(objeto);
  }
}




    //Buen prototipo para hacer listas, perfeccionar
   /* let body=document.body;
    let listOption=document.createElement('ul');
    let div=document.createElement('div');
    listOption.id='editOption';
    div.id='div';
    div.className='box_list';
    let liCreator=0;
    let opts=Array(
      'FONT',
      'SIZE',
      'COLOR',
      'ESPACE',
      'SANGRIA',
      'BACKGROUND',
      'BOLD',
      'CURSIVE',
      'TACH'
      );
    switch(this.tempTypo){
      case 'P':
        liCreator=9;
        break;
    }
    body.appendChild(div);
    div.after(listOption);
    for(let i=0;i < liCreator;i++){
      let newElementLi=document.createElement('li');
      newElementLi.id=listOption.id+opts[i];
      newElementLi.style='background-color:#000000d8;color:white;list-style:none;font-size:calc(1em/4 + 1vw);height: 0%; width:calc(1vw*12);';
      newElementLi.innerHTML=opts[i];
      listOption.after(newElementLi);
    }*/


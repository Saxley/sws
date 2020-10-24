export class AddNewScript{
  constructor(){
   this.documento;
  }
  //menuAdd::Es nuestra interfaz,
  menuAdd(){
    let documento=document.body;
    let cP=document.createElement('DIV');
    let leyenda=document.createElement('label');
    let text_box=document.createElement('INPUT');
    let button=document.createElement('BUTTON');
    let button$=document.createElement('BUTTON');
    cP.id="cP";
    leyenda.innerHTML="Add your Script";
    button.innerHTML="Add";
    button$.innerHTML="Pull";
    text_box.type="file";
    text_box.id="text_box_Document";
    documento.appendChild(cP);
    cP.appendChild(leyenda);
    cP.appendChild(text_box);
    cP.appendChild(button);
    cP.appendChild(button$);
    button.addEventListener("click", this.addScript);
    button$.addEventListener("click", this.addScript);
  }
  
  //imgRef::Imagen de referencia.
  imgRef(){
    let cS=document.createElement('DIV');
    let leyenda=document.createElement('LABEL');
    let txt_file=document.createElement('INPUT');
    let txt_box=document.createElement('INPUT');
    let button=document.createElement('BUTTON'); 
    cS.id='cS';
    txt_file.id='imgFile';
    txt_box.id='nameScript';
    button.id='send';
    leyenda.id='leyendaImg';
    txt_file.type='file';
    txt_box.type='text';
    button.type='button';
   
    txt_box.placeholder='nombre de tu script';
    button.innerHTML='send';
    leyenda.innerHTML='Imagen de tu script';
    
    button.addEventListener('click',this.addScript);
    document.body.append(cS);
    cS.append(leyenda);
    cS.append(txt_file);
    cS.append(txt_box);
    cS.append(button);
  }
  //addScript::Es nuestra funcion que nos ayuda a subir los archivos a la base de datos y a acumular archivos.
  addScript(){
    //Add::Acumula en forma de lista los archivos a subir
    if(this.innerHTML=="Add"){
     let text_box=document.getElementById("text_box_Document");
    let temp_text=document.createElement('INPUT');
    let label=document.createElement('LABEL');
    let span=document.createElement('SPAN');
    temp_text.id=text_box.files[0].name;//NOMBRE
    //temp_text.setAttribute("name","archivo");
    temp_text.setAttribute("type","file");
    temp_text.setAttribute("hidden","true");
    temp_text.files=text_box.files;
    
    label.id="leyenda"+temp_text.id;
    label.className="leyenda";
    label.innerHTML=temp_text.id;//NOMBRE
    
    span.innerHTML='<b>X</b><br>';
    span.name=temp_text.id;//NOMBRE
    
    span.addEventListener("click", ()=>{
      label.remove(span);
      temp_text.remove();
    });
    document.body.append(label);
    document.body.append(temp_text);
    label.append(span);
    } 
    //Pull::Envia los archivos a la base de datos 
    else if(this.innerHTML=="Pull"){ 
      const envio=new AddNewScript;
     let spans=document.getElementsByTagName("SPAN");
      let arregloIds=[];
      for(let c=0;c<spans.length;c++){
        arregloIds[c]=spans[c].name;
      } 
      for(let c=0;c<arregloIds.length;c++){ 
       envio.sending(arregloIds[c]);
      }
    } 
    //send::Envia las imagenes de muestra
    else if(this.innerHTML=="send"){ 
      const envio=new AddNewScript;
      envio.sending('imgFile','nameScript');
    }
  }

  sending(archive,where){ 
    let img=document.getElementById(archive);
    let txt=document.getElementById(where);
    
    const url = "https://sedated-davit.000webhostapp.com/interfazSociophp/subir.php";
    let datos=new FormData();
   datos.append("archivito", img.files[0]); 
    if(txt!=null){  
      datos.append("imagen", txt.value);
      }
        fetch(url, {
          method: 'post',
          body: datos
        })
        .then(response => {
          data = response.json()
          .then(data=>{
            alert(data.res);
          })
        });
  }
  trascribir(){
    //Aqui se transcribe automaticamente el html
  }
}

const addScript=new AddNewScript();
addScript.menuAdd();
addScript.imgRef();
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
    }else if(this.innerHTML=="Pull"){
      let spans=document.getElementsByTagName("SPAN");
      let arregloIds=[];
      const url = "http://localhost:8080/interfazSociophp/subir.php";
      let datos=new FormData();
      for(let c=0;c<spans.length;c++){
        arregloIds[c]=spans[c].name;
      }
      for(let c=0;c<arregloIds.length;c++){
        let archivo=document.getElementById(arregloIds[c]);
        alert(archivo.files[0].type);
        datos.append("archivito", archivo.files[0]);
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
    }
    //Pull::Envia los archivos a la base de datos
  }


  trascribir(){
    //Aqui se transcribe automaticamente el html
  }
}

const addScript=new AddNewScript();
addScript.menuAdd();
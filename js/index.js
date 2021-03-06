 
tinymce.init({
    selector: '#descripcion-txt',
    height: 300,
    menubar: false,
    plugins: [
      'advlist autolink lists link image charmap print preview anchor',
      'searchreplace visualblocks code fullscreen',
      'insertdatetime media table paste code help wordcount'
    ],
    toolbar: 'undo redo | formatselect | ' +
    'bold italic backcolor | alignleft aligncenter ' +
    'alignright alignjustify | bullist numlist outdent indent | ' +
    'removeformat | help',
    content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
  });
  const pokemones=[];//asi se definen los arreglos

  const cargartabla=()=>{

    //1.Obtener uan referencia a la tabla
    let tbody=document.querySelector("#tbody-table");
    
    tbody.innerHTML=""
    //2.Recorrer la lista de pokemones
    for(let i=0; i<pokemones.length;++i){//length es como el largo del arreglo.
      let p=pokemones[i];
    //3.Por cada pokemon generar una fila de la tabla(tr)
      let tr =document.createElement("tr");
    //4.por cada atributo generar un td de la tabla
      let tdNRO=document.createElement("td");
      let tdNombre=document.createElement("td");
      let tdTipo=document.createElement("td");
      let tdDescripcion=document.createElement("td");
      let tdAcciones=document.createElement("td");
      
    //Definir lo que va en la tabla:  
      tdNRO.innerText=i+1;
      tdNombre.innerText= p.nombre;
    //TODO:el tipo tiene que ser un icono  
      let tipo=document.createElement("i");
      if(p.tipo=="1"){
        //tipo planta
        tipo.classList.add("fas","fa-leaf","text-success","fa-2x");
      }else  if(p.tipo=="2"){
        //tipo fuego
        tipo.classList.add("fas","fa-fire","text-danger","fa-2x");
      }else if (p.tipo=="3"){
        //tipo electrico
        tipo.classList.add("fas","fa-bolt","text-warning","fa-2x");
      }else if(p.tipo=="4"){
        //tipo agua
        tipo.classList.add("fas","fa-tint","text-primary","fa-2x");
      }else{
        //tipo normal
        tipo.classList.add("fas","fa-bullseye","text-info","fa-2x");
      }
      tdTipo.classList.add("text-center");
      tdTipo.appendChild(tipo);
      // Cuando quiero agregar un elemento dentro de otro:appendChild
      //Cuando quiero definir un texto, innerText
      //Cuando quiero definir directamente el HTML,innerHTML
    //TODO: Arreglar la descripcion es con innerHTML:
      tdDescripcion.innerHTML=p.descripcion;
    //TOOO:que hago con las acciones!!
    //5.Agregar los td al tr
      tr.appendChild(tdNRO);
      tr.appendChild(tdNombre);
      tr.appendChild(tdTipo);
      tr.appendChild(tdDescripcion);
      tr.appendChild(tdAcciones);
    //6.Agregar el tr a la tabla 
      tbody.appendChild(tr);
    }  
  };
  document.querySelector("#registrar-btn").addEventListener("click",()=>{
    let nombre= document.querySelector("#nombre-txt").value;
    let tipo = document.querySelector("#tipo-select").value;
    let legendario= document.querySelector("#legendario-si").checked;
    let descripcion= tinymce.get("descripcion-txt").getContent();//solo para tinymce
   //crea objeto
    let pokemon={};
   //crea atributos    
    pokemon.nombre=nombre;
    pokemon.tipo=tipo;
    pokemon.legendario=legendario;
    pokemon.descripcion=descripcion;
    pokemones.push(pokemon);
    //console.log(pokemones);//se lee
    cargartabla();
    Swal.fire("Resultado exitoso!", "Pokemon registrado","info");

  });
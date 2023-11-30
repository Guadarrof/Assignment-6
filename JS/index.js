
console.log('-------Parte 1--------');
let title= document.title;
console.log("Titulo: "+title);

console.log('-------Parte 2--------');
let completeName="";
completeName=completeName+'-------\n'+getIntegrantes()+'-------';

console.log(completeName);

function getIntegrantes(){    
    let integrantes = document.getElementsByTagName("h2");
    let dataList = document.getElementsByTagName("dl");
    let integranteNum=1;
    let completeName="";
    let fullName="";
    for (let i= 0; i < integrantes.length; i++) {
        let ddList=dataList[i].getElementsByTagName("dd");
        fullName="";
        let firstData=true;
        for (let j= 0; j < ddList.length; j++) {         
            if(ddList[j].innerText)
            {
                if(firstData)
                {
                    fullName=fullName + ddList[j].innerText;
                    firstData=false; 
                }
                else
                { 
                    if(j>=2)        
                    {               
                        fullName=fullName +" "+ ddList[j].innerText.toUpperCase();        
                    }
                    else    
                    {                  
                        fullName=fullName +" "+ ddList[j].innerText;
                    }
                }                                 
            }
        }
        fullName='"' + fullName +'"';     
        fullName="Integrante "+ integranteNum + ": "+fullName;
        integranteNum++;
        completeName=completeName+fullName+"\n";

    }   
    return completeName;
}


console.log('-------Parte 3--------');
function sameNames()
{
    let color="";
    let compA;
    let compB;
    let ddList= document.getElementsByClassName("name");
    let repeated=false;
    for (let i= 0; i < ddList.length; i++) {
        compA=ddList[i];
        for (let j= 0; j < ddList.length; j++) {
            if(i!=j && compA.innerText)
            {
                compB=ddList[j];
                if(compB.innerText===compA.innerText)
                {
                    if(color=="")
                        color=prompt("El nombre ingresado ya existe por favor ingrese un color en Ingles:");                    
                    compB.style="color:"+color;
                    compA.style="color:"+color;
                    repeated=true;
                }              
            }
        }   
    }

    if(repeated)
    {
        console.log("El nombre ingresado ya existe");    
    }
    else
    {
        console.log("No hay conincidencias en los nombres");
    } 
}

function sameSurnames()
{
    let color="";
    let compA;
    let compB;
    let ddList= document.getElementsByClassName("surname");
    let repeated=false;
    for (let i= 0; i < ddList.length; i++) {
        compA=ddList[i];
        for (let j= 0; j < ddList.length; j++) {
            if(i!=j && compA.innerText)
            {
                compB=ddList[j];
                if(compB.innerText===compA.innerText)
                {
                    if(color=="")
                        color=prompt("El nombre ingresado ya existe por favor ingrese un color en Ingles:");                    
                    compB.style="color:"+color;
                    compA.style="color:"+color;
                    repeated=true;
                }
              
            }
        }   
    }

    if(repeated)
    {
        console.log("El apellido ingresado ya existe");    
    }
    else
    {
        console.log("No hay conincidencias en los apellidos");
    } 
}

sameNames();
if(confirm("Revisar coincidencias en los Apellidos?"))
{
    sameSurnames();
}

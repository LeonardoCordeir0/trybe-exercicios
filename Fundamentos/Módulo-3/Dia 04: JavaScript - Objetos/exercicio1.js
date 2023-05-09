let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };

  console.log('Bem vinda,' +' '+ info.personagem)

let newKay = 'recorrente'
let recorrente = 'sim'

function addProperty(object, key , value){
    object[key]=value;
};

addProperty(info,newKay,recorrente);


for(let key in info){
    console.log(key)
}




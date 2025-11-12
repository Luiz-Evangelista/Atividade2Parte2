const usuario = {
  nome: "Ana Silva",
  idade: 30,
  habilidades: ["JavaScript", "React", "Node.js"],
  ativo: true
};

const jsonString = JSON.stringify(usuario);
console.log("JSON convertido:", jsonString);

const usuarioConvertido = JSON.parse(jsonString);
console.log("Objeto recuperado:", usuarioConvertido);
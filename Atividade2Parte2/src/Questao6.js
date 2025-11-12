function parseJSONSafe(jsonString) {
  try {
    return JSON.parse(jsonString); 
  } catch (erro) {
    console.error("Erro ao converter JSON:", erro.message);
    return null; 
  }
}

const jsonInvalido = '{nome: "João", "idade": 30}';
console.log(parseJSONSafe(jsonInvalido)); 
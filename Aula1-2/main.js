// FUNÇÕES E ESTRUTURA DE CONTROLE
function validatedNota(nota) {
    return nota >= 7 ? "Aprovado" : "Reprovado";
}

validatedNota(7);

for(let i = 1; i <= 5; i++) {
    console.log(`${i} = ${i}`);
}
// ASSINCRONISMO
function fechData() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Dados carregados"), 9000);
    });
}

async function main() {
    const data = await fechData();
    console.log(data);
}

main();
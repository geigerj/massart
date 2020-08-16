async function execute() {
    const response = await fetch('pho_bo.txt');
    const data = await response.text();
    console.log(data);
}

execute();
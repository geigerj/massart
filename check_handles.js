async function checkHandles() {
    const response = await fetch('pho_bo.txt');
    const data = await response.text();
    data.toLowerCase()
        .split(/\r?\n/)
        .map((l) => "https://instagram.com/" + l.split(",")[0].substring(1))
        .forEach((url) => checkHandle(url));
    
}

async function checkHandle(url) {
  fetch(url).then((response) => {
        console.log(response.status === 200 ? "" : ">>>>", url, ": ", response.status);
  });
}
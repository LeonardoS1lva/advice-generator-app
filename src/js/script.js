const idAdvice = document.getElementById("advice-id");
const adviceText = document.getElementById("advice-text");
const btnSort = document.getElementById("btn-sort");

const url = "https://api.adviceslip.com/advice";

async function getDataApi() {
    try {
        const response = await fetch(url);
        const result = await response.json();
        idAdvice.innerHTML = result.slip.id;
        adviceText.innerHTML = result.slip.advice;
    }
    catch (error) {
        alert(error)
    }
}

btnSort.addEventListener("click", getDataApi);

getDataApi();
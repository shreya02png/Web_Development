const button = document.getElementById("btn");
const output = document.getElementById("output");

button.addEventListener("click", () => {
    output.textContent = "Loading data...";

    fetch("https://jsonplaceholder.typicode.com/users/1")
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            output.textContent = "User name is: "+ data.name;
        })
        .catch((error) => {
            output.textContent = "Error";
            console.error(error);
        });
});
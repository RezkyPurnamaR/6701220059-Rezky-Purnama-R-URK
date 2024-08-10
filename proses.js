document.getElementById('kalkulator').addEventListener('submit', function(event) {
    event.preventDefault();
    const number1 = parseFloat(document.getElementById('number1').value);
    const number2 = parseFloat(document.getElementById('number2').value);
    const operation = document.getElementById('operation').value;
    let result;

    if (operation === "+") {
        result = number1 + number2;
    } else if (operation === "-") {
        result = number1 - number2;
    } else if (operation === "*") {
        result = number1 * number2;
    } else if (operation === "/") {
        result = number1 / number2;
    } else {
        result = "Invalid operation";
    }

    // Menampilkan hasil di halaman
    document.getElementById('result').textContent = "Result: " + result;
});

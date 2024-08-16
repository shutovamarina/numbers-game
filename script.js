const input = document.querySelector("#guess");
const button = document.querySelector("#btn");
const answer = Math.floor(Math.random() * 20) + 1; // случайное число до 20
console.log(answer);

// ставим прослушку на кнопку с функцией play
button.addEventListener("click", play);
//ставим прослушка на клавишу enter
input.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        play();
    }
});

// задаем функцию play
function play() {
    const userNumber = document.querySelector("#guess").value;

    if (userNumber < 1 || userNumber > 20) {
        Swal.fire({
            icon: "error",
            title: "Не верно.",
            text: "Введите число от 1 до 20!",
        });
    } else if (isNaN(userNumber)) {
        Swal.fire({
            icon: "error",
            title: "Не верно.",
            text: "Нужно ввести число!",
        });
    } else {

        // Проверка на угаданное число
        if (userNumber > answer) {
            Swal.fire({
                icon: "info",
                title: "Бери ниже",
                text: "Ваше число больше загаданного.",
            });
        } else if (userNumber < answer) {
            Swal.fire({
                icon: "info",
                title: "Бери выше",
                text: "Ваше число меньше загаданного.",
            });
        } else {
            Swal.fire({
                title: "Победа!!!",
                imageUrl: "https://images.unsplash.com/photo-1532290082932-ad87f0fae36f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                imageWidth: 300,
                imageHeight: 200,
                imageAlt: "победа"
            });
        }
    }
}
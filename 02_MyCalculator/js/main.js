window.onload = function () {

    var screen,
        output,
        limit,
        zero,
        operator;

    screen = document.getElementById("screen");

    // 所有class為num，添加click事件
    var num = document.querySelectorAll(".num");
    for (var i = 0; i < num.length; i++) {

        num[i].addEventListener("click", function () {

            num = this.value;

            output = screen.innerHTML += num;

            limit = output.length;

            if (limit > 16) {
                alert("超過範圍");
            }

        }, false);

    }
    // 處理0的邏輯
    document.querySelector(".zero").addEventListener("click", function () {

        zero = this.value;

        if (screen.innerHTML != 0) {
            screen.innerHTML += zero
        } else {
            screen.innerHTML = zero
        }
    }, false);

    // 正負號
    function negative(num) {
        return num * -1
    }
    document.querySelector('.negative').addEventListener('click', function () {
        screen.innerHTML = negative(screen.innerHTML);
    })

    // 等於的click事件
    document.querySelector("#eqaul").addEventListener("click", function () {

        if (screen.innerHTML === output) {

            screen.innerHTML = eval(output);
            output = screen.innerHTML;

        } else {
            screen.innerHTML = "";
        }

    }, false);

    // 清除事件
    document.querySelector("#delete").addEventListener("click", function () {

        screen.innerHTML = "";

    }, false);

    // class為operator，添加click事件
    var operator = document.querySelectorAll(".operator");

    var len1 = operator.length;

    for (var i = 0; i < len1; i++) {

        operator[i].addEventListener("click", function () {

            operator = this.value;
            if (screen.innerHTML === "") {
                screen.innerHTML = screen.innerHTML.concat("");

            } else if (output) {
                screen.innerHTML = output.concat(operator);
            }
        }, false);

    }
}
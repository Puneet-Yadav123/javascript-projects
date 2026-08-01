let input = document.getElementById('input-box');
let expressionDisplay = document.getElementById('expression-display');
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);

arr.forEach(button => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            if (string === "") return;

            let currentExpression = string;

            try {
                let result = eval(string);

                expressionDisplay.textContent = currentExpression;
                expressionDisplay.classList.remove('show');
                void expressionDisplay.offsetWidth;
                expressionDisplay.classList.add('show');

                string = result.toString();
                input.value = string;

                input.classList.remove('pop');
                void input.offsetWidth;
                input.classList.add('pop');
            } catch (error) {
                input.value = "Error";
                string = "";
            }
        }
        else if (e.target.innerHTML == 'AC')
        {
            string = "";
            input.value = string;
            expressionDisplay.textContent = "";
            expressionDisplay.classList.remove('show');
        }
        else if (e.target.innerHTML == 'DEL')
        {
            string = string.slice(0, string.length - 1)
            input.value = string;
        }
        else {
             string += e.target.innerHTML;
        input.value = string;
        }

       
    })
})
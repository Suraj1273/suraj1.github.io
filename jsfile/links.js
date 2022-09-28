let str = "";
let button = document.querySelectorAll('button');
Array.from(button).forEach((button) => {

    button.addEventListener('click', (e) => {


        if (e.target.innerHTML == '=') {
            str = eval(str);
            document.querySelector('#text').value = str;
        }
        else if (e.target.innerHTML == 'All-clr'){
            str = "";
            document.querySelector('#text').value = str;
        }
        else if(e.target.innerHTML == 'Clr'){
            str = str.slice(0,-1);
            document.querySelector('#text').value = str;

        }
        else {
            str = str + e.target.innerHTML;
            document.querySelector('#text').value = str;

        }
    })
})
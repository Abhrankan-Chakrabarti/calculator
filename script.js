const display = document.querySelector('#display');
const buttons = document.querySelectorAll('button');

buttons.forEach((item) => {
    item.onclick = () => {
        // Clear screen text if an error or user warning is currently visible
        if (display.innerText === 'Please Enter Something to Calculate' || display.innerText === 'Error') {
            display.innerText = '';
        }

        if (item.id === 'clear') {
            display.innerText = '';
        } 
        else if (item.id === 'backspace') {
            let string = display.innerText.toString();
            display.innerText = string.substring(0, string.length - 1);
        } 
        else if (display.innerText !== '' && item.id === 'equal') {
            try {
                // Safeguards against incomplete expressions like "5++" or "8*"
                display.innerText = eval(display.innerText);
            } catch (error) {
                display.innerText = 'Error';
                setTimeout(() => (display.innerText = ''), 1500);
            }
        } 
        else if (display.innerText === '' && item.id === 'equal') {
            display.innerText = 'Please Enter Something to Calculate';
            setTimeout(() => (display.innerText = ''), 2000);
        } 
        else {
            display.innerText += item.id;
        }
    };
});

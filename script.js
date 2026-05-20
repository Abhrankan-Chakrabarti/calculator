const display = document.querySelector('#display');
const buttons = document.querySelectorAll('button');

buttons.forEach((item) => {
    item.onclick = () => {
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
        else if (item.id === '.') {
            const currentInput = display.innerText;
            const lastNumbers = currentInput.split(/[\+\-\*\/]/); 
            const currentNumSegment = lastNumbers[lastNumbers.length - 1];

            if (!currentNumSegment.includes('.')) {
                display.innerText += item.id;
            }
        }
        else {
            display.innerText += item.id;
        }
    };
});

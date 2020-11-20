const inputRef = document.querySelector('#validation-input');
inputRef.addEventListener('blur', (event) => {
    if (inputRef.value.length > inputRef.dataset.length) {
        inputRef.id ='validation-input_invalid';
                return
    }
    inputRef.id ='validation-input_valid'
})

 
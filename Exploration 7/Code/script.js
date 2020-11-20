const validate = () => {
    let input = document.forms['form']['fname'].value;
    if(input == "") {
        alert('Input is mandatory');
        return false;
    }
}
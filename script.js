let text = document.getElementsByClassName('text');
for (let i = 0; i < text.length; i++){
    text[i].style.fontWeight = 'bold';
    text[i].style.color = 'green';
    text[i].style.fontSize = '15px';

   

    var textx = text[i].textContent;
    console.log(textx);
    
}
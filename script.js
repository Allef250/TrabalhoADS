window.onload = function () {
    const botao = document.createElement ('button');

    botao.textContent = "Clique para ver uma mensagem!";

    const frase = 'Dias Melhores Virão!🍃';
    
    botao.addEventListener('click', function()
{
    botao.textContent = frase;

});

    const botao2 = document.getElementById('botao');

    if(botao2)
    {
        botao2.parentNote.insertBefore(botao, botao2.nextSibling);
    }
    else 
    {
        document.body.appendChild(botao);
    }

};

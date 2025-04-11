let audios = [
    {caminho:'matuto.mp3', legenda:'1'},
    {caminho:'Arash.mp3', legenda:'2'},
    {caminho:'Paula Fernandes.mp3', legenda:'3'},
    {caminho:'Hayit.mp3', legenda:'4'},
    {caminho:'Helena.mp3', legenda:'5'},
    {caminho:'Paula Fernandes.mp3', legenda:'6'},
    {caminho:'Paula Fernandes.mp3', legenda:'7'},
    {caminho:'Paula Fernandes.mp3', legenda:'8'},
    {caminho:'Paula Fernandes.mp3', legenda:'9'},
];

let botoes = document.querySelectorAll('.botao');
let legendas = document.querySelectorAll('p');

for (let i=0; i < 9; i++){
    legendas[i].textContent = audios[i].legenda;
    botoes[i].setAttribute('data-item', i);
}

let audioTag = document.querySelector('audio');

botoes.forEach(botao => {
    botao.addEventListener('click', () => {
        let som = audios[botao.getAttribute('data-item')];
        audioTag.setAttribute('src', som.caminho);
        
        audioTag.addEventListener('loadeddata', () => {
            audioTag.play();
        });
    });
});


## Projeto Desenvolvendo Jogo da Memória

#### Créditos da base do projeto - Prof Gabriela Pinheiro

### Projeto de estudo de frontend realizado no Bootcomp React Web Developer da Digital Innovation One com a adição de algumas melhorias.

###### Linguagens de programação e tecnologias utilizadas:
- HTML
- CSS
- JavaScript

###### *Todas as cartas viradas:*

![](https://i.imgur.com/2pmHDJ0.png)


###### *Utilizado javascript puro:*

```javascript

function flipCard(){   
    if(lockBoard) return;
    if(this === firstCard) return;
    this.classList.add('flip');
    if(!hasFlippedCard){
        hasFlippedCard = true;
        firstCard = this;
        return;
    }

    secondCard = this;
    hasFlippedCard = false;
    checkForMatch();
    
}



```
###### Link para visualizar o projeto: https://carlos-alves.github.io/jogo-da-memoria/ 

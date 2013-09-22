---
layout: scratchProject
title: Introdução à Programação
term: 1
online: 11795093
---

Nível 1

#Introdução à Programação

__Programar é como criar uma peça de teatro.__

##Em uma peça de teatro...

Você vai precisa de __atores__ para interpretá-la.
Você também pode criar __fantasias__ para eles. 

Um __ator__ pode interpretar diferentes papéis: um personagem, um animal, uma árvore, uma mesa, etc.

Como a apresentação da peça de teatro é feita em um __palco__, você pode usar __panos de fundo__ para decorar o seu palco com o tema da sua peça.

<center> <img width="60%" src="img/teatro.jpg"></img>
</center> 
Além disso você deverá criar um __roteiro__ para cada __ator__, com instruções sobre o que eles devem fazer. 
As vezes até o __palco__ necessita de um roteiro, para mudar de __pano de fundo__ ou modificar o cenário.	

<center> <img width="60%" src="img/roteiro.png"></img>
</center> 


Depois de ensaiar bastante você pode apresentar a sua peça na escola ou aos amigos.

<div class="page_break">
</div>

##No Scratch..
Para programar nós vamos utilizar o Scratch (www.scratch.mit.edu).

No Scratch nós também temos um __palco__.

<center> <img src="img/palco_scratch.png"></img>
</center>

E podemos escolher diferentes __panos de fundo__ .


<img width="32%" src="img/pano_de_fundo_1.png">
</img>
<img width="32%" src="img/pano_de_fundo_2.png">
</img>
<img width="32%" src="img/pano_de_fundo_3.png">
</img>
Podemos inserir __atores__, e escolher diferentes __fantasias__.

<img width="49%" src="img/actor.png">
</img>
<img width="49%" src="img/fantasia.png">
</img>

<div class="page_break">
</div>

##No Scratch..

Cada __ator__ tem o seu __roteiro__.

<center> <img  src="img/roteiro_scratch.png"></img></center>

E juntando tudo isso você pode criar animações ou jogos.


Como em uma peça de teatro, é normal que no começo algumas coisas saiam erradas.

Programar é como ensaiar uma peça de teatro, é preciso passar um pouco de tempo corrigindo os erros.

Quando tudo estiver estiver no ponto, você pode compartilhar o seu trabalho com seus amigos ou familiares.

<div class="page_break">
</div>

##Criando meu primeiro jogo

<center> <img  src="img/intro_jogo.png"></img></center>


Vamos criar um jogo com 3 personagens.

- __Cão:__ O cão fica no canto esquerdo da tela. Espera 5 segundos e começa a latir.

- __Papagaio:__ O papagaio é posicionado em qualquer lugar da tela. Ele espera 5 segundos e começa a voar com medo do cão. O papagaio segue o movimento do ponteiro do mouse.

- __Menino:__ O menino fica no canto direito da tela e explica o funcionamento do jogo.

##PASSO 1: Faça o cão latir
Abra o endereço seguinte para carregarmos a cena inicial.

<a target="_blank" href="http://tinyurl.com/clubintro">http://tinyurl.com/clubintro
</a>

Mas antes de começar certifique-se que o Scratch esteja em __Português__. 
Se não for o caso clique no _globo_,  em cima, no canto esquerdo da tela e escolha __Português (Brasil)__.


Como foi dito anteriormente, o cão espera por 5 segundos, e começa a latir.

Clique no cão na área de atores (em baixo, no canto esquerdo), e em seguida arraste e encaixe os seguintes blocos na parte direita da tela:


 
			quando clicar em BANDEIRA
			espere (5) segundos
			sempre
				toque o som [dog1 v] até o fim
			

###Teste o projeto



Salve o projeto

<div class="page_break">
</div> 
 
##PASSO 2: Faça o papagaio voar

Da mesma maneira que o cão, o papagaio também deve esperar 5 segundos. A diferença é que em seguida ele deve começar a voar.

Clique no papagaio na área de atores (em baixo, no canto esquerdo), e em seguida arraste e encaixe os seguintes blocos na parte direita da tela:

			quando clicar em BANDEIRA
			espere (5) segundos
			sempre
				próxima fantasia
		   fim		
		
A animação do papagaio batendo asas é feita intercalando diferentes fantasias, da mesma maneira que se faz com desenhos animados. Para ver as duas fantasias do papagaio, clique na aba "Fantasias" na parte superior da tela, entre "Roteiros" e "Sons".


###Teste o projeto



Salve o projeto

##PASSO 2: Faça o papagaio seguir o ponteiro do mouse
Por enquanto, o papagaio apenas bate as asas, mas nós queremos que ele siga o ponteiro do mouse. Para isso devemos encaixar dois novos blocos. Um para ele apontar na direção do mouse e outro para ele andar 10 passos para frente.

Modifique o roteiro do papagaio para que ele fique assim:
			
			quando clicar em BANDEIRA
			espere (5) segundos
			sempre
				próxima fantasia
				aponte para [ponteiro do mouse v]
				mova (10) passos
			fim
			
			
			
###Teste o projeto



Salve o projeto

<div class="page_break">
</div>

##PASSO 3: Faça o menino dizer algo
Nosso jogo está quase pronto. A única coisa que falta é o menino explicar como o jogo funciona. Por exemplo ele pode dizer algo como "Olá, quando o cão latir, ajude o papagaio a voar!"
		
			
			quando clicar em BANDEIRA
			diga [Olá, quando o cão latir, ajude o papagaio a voar! ] por (5) segundos
			
###Teste o projeto



Salve o projeto

__Parabéns, você acaba de criar o seu primeiro jogo!__
Não esqueça que voce pode compartilhar seu jogo com todos os seus amigos e família clicando em __Compartilhar__ na barra de menu!
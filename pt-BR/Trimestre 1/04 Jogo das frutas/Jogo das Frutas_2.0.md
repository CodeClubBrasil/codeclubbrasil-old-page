---
layout: scratchProject
title: Jogo das Frutas
term: 1_2

---
Nível 2 

#Jogo das Frutas

__Introdução:__
Este é um jogo que tem três objetos que mudam de imagem. 
Para ganhar o jogo você deve fazer eles pararem mostrando a mesma imagem (como uma máquina caça-níqueis!).


<center><img src="sample.png"> 
</center>


## PASSO 1: Criando um objeto que muda de fantasia

__Vamos começar importando as imagens do jogo.__

1. Crie um novo projeto Scratch. Apague o gato clicando nele com o botão direito e em apagar.
2. Importe um novo ator (Clique em _importar ator da biblioteca_).
3. Escolha uma imagem de qualquer pasta. No nosso caso usamos Coisas/bananas1, mas você pode
usar a imagem que quiser.
4. Clique na aba Fantasias e importe mais duas fantasias, assim teremos três no total
(Usamos Animais/bee1 e coisas/lego, mas você pode usar qualquer imagens mesmo).

__Agora que temos algumas fantasias, queremos que o ator mude entre eles.__

## PASSO 2: Fazendo a mudança de fantasia

1. Clique na aba Roteiros.
2. Clique em Controle e arraste o bloco __quando clicar em BANDEIRA__ para área à direita. Este será
acionado quando clicarmos na bandeira verde.
3. Encaixe um bloco __sempre__ logo embaixo.
4. Clique na bandeira verde no canto superior direito. Observe o contorno branco em nosso conjunto de blocos. 
Isso significa que nossos blocos estão sendo executados. Foi o clique na bandeira verde que desencadeia esta execução.
5. Agora clique em Aparência e encaixe um bloco __próxima fantasia__ dentro do bloco __sempre__.
6. Como fazer para diminuir a velocidade em que mudamos de imagem? Clique em Controle e arraste um bloco __espere 1 segundos__.
7. Ajuste o tempo de espera (um tempo de 0.1s parece bom). O que aconteceria se não tivéssemos o bloco __espere__?

		quando clicar em BANDEIRA
		sempre 
			próxima fantasia
			espere (0.1) segundos
		fim


###Teste o projeto
__Clique na bandeira verde.__
 
As imagens mudam em uma velocidade aceitável?

Salve o projeto

### Sugestões

Ajuste o tempo do bloco __espere__. Quais valores fariam o jogo ficar muito fácil ou muito difícil?

## PASSO 3: Fazendo parar quando clicado

Excelente! Nós podemos fazer as fantasias do ator mudarem sem parar, mas como vamos fazer para que ele pare quando clicado?

1. Crie uma nova variável clicando Variáveis ​​e __criar uma variável__. 
Dê o nome de __parado__ e deixe marcado a opção __para todos os atores__, em seguida, desmarque a caixa ao lado de __parado__ 
na área de roteiros para que ela não seja exibida no palco.
2. Mude a variável __parado__ para __sim__ (um) quando alguém clicar sobre a imagem. Para isso utilize o bloco
__quando este ator for clicado__ e o bloco __mude parado para__. 


	quando este ator for clicado
	  mode [parado v] para [sim]


3. Agora precisamos fazer a imagem parar de mudar quando a variável __parado__ é igual a sim. 
Clique controle e adicione um bloco __se, então__  e use um novo operador igual (=) para testar se __parado__ é igual a sim.

O resultado ficará assim:

		quando clicar em BANDEIRA
		mude [parado v] para [nao]
		sempre 
		   se < (parado) = [nao]> então
				próxima fantasia
			fim
			espere (0.1) segundos
		fim



4. Finalmente, encaixe um bloco `mude [parado v] para [não]` logo abaixo de `quando clicar em BANDEIRA`.

### Teste o projeto

__Clique na bandeira verde, espere por um momento, em seguida, clique sobre a imagem.__ 

As fantasias mudam antes de você clicar?
 
Ele para quando você clica sobre ele?


__Clique novamente na bandeira verde__ 

Ele para quando você posiciona o ponteiro do mouse sobre ele sem clicar (isso não deve acontecer)? 

Ele para quando você clica em outro lugar do palco? Em algum outro lugar da janela do Scratch? Em algum lugar fora da janela do Scratch?

Salve o projeto

## Passo 4: Criando os outros atores

__Precisamos adicionar outros atores para fazer o nosso jogo!__

1. Duplique o ator 1 (sprite1) clicando com o botão direito sobre ele.
2. Duplique-o novamente para termos três atores na tela.
3. Posicione os atores para que eles fiquem em linha. Redimensione se necessário.

### Teste o projeto
__Clique na bandeira verde.__ 

Todos os atores devem mudar de fantasia. Tente fazê-los parar na mesma imagem!

Salve o projeto

### Sugestões

No Início todos os atores mostram a mesma fantasia ao mesmo tempo. 
Que tal você fazer os atores mudarem para uma fantasia aleatória quando a bandeira verde for clicada?
Dica: tente escolher uma fantasia aleatória para cada atores quando o jogo é iniciado.

__Parabéns, você terminou o jogo básico. Há mais coisas que você pode fazer. Dê uma olhada nestes desafios!__


## Desafio 1: Aumente a dificuldade do jogo

Mude a dificuldade do jogo de alguma maneira. 
Apenas fazer os imagens mudarem mais rápido não vale. 
Tente fazer algo mais criativo. 
Algumas idéias que você pode experimentar:

1. Altere o número de fantasias de cada ator.
2. Faça com que alguns atores tenham fantasias exclusivos (que nenhum outro tenha igual).
3. Faça com que o intervalo entre as mudanças de fantasias seja diferente.
4. Faça com que cada ator mude para uma fantasia aleatória e não para a próxima fantasia. 

__Divirta-se com as suas próprias ideias!__

Toda vez que você faz uma alteração, pense se o o jogo ficou mais fácil ou mais difícil. 
O jogo é muito fácil ou muito difícil? 
Como você pode ajustar a dificuldade para que fique melhor?


## Desafio 2: Faça o jogo ficar mais difícil ou mais fácil ao longo do tempo

Nem todas as pessoas tem a mesma habilidade para jogar. __Como você poderia fazer o jogo ajustar sua dificuldade, dependendo do jogador?__

Uma maneira é __ajustar a velocidade da mudança de fantasia__. 
Você pode criar uma variável chamada `intervalo`, para representar a duração do bloco `espere ()` de cada objeto. 
Se o jogador ganha a rodada, a variável intervalo pode ser reduzida um pouco (para tornar o jogo mais difícil). 
Se o jogador perde a rodada, o intervalo pode ser aumentado um pouco (para tornar o jogo mais fácil).

## Desafio 3: Detecte quando todos os atores pararem na mesma fantasia

__O objetivo do jogo é clicar sobre os atores para que eles parem mostrando a mesma fantasia. 
Uma idéia seria o palco verificar quando você terminou de jogar e, em seguida, dizer se você ganhou ou perdeu, 
verificando se cada ator tem a mesma fantasia.__

Em primeiro lugar, o palco precisa saber quando o jogo tiver acabado. 
Cada vez que alguém clica em um dos atores, o palco deve verificar se todos os atores já foram clicados. 
Modifique os blocos dentro do `quando este ator for clicado` de cada ator para que ele envie uma nova mensagem a todos, chamada por exemplo __verifica fim__.

O palco pode usar um bloco esta mensagem e verificar se as variáveis __parado__ dos três atores valem "sim" para saber se o jogo acabou. 
Para isso, encaixe um bloco `[parado v] de`. Para obter este bloco, vá até a aba de __sensores__ e utilize um bloco `[coordenada x da posição v] de` e mude "coordenada x da posição" para "parado". 
Se a variável __parado__ dos três tem valor de "sim", sabemos que o jogo acabou e nós podemos verificar se o jogador ganhou.

Para fazer isso, podemos usar a mesma tipo de bloco `[coordenada x da posição v] de`, mas em vez de olhar a variável __parado__, 
iremos olhar a variável __n° da fantasia__ e assim podemos comparar se Ator 1 tem a mesma fantasia que Ator 2, e se Ator 2 tem a mesma fantasia
 que Ator 3.

Para fazer isso, você precisa de um bloco `se <> então` para verificar cada variável,
 e dentro dele um bloco __se entao... senão__ para ver se o jogador ganhou ou perdeu, comparando cada 
fantasia.

Deste ponto em diante, você pode anunciar o resultado do jogo usando um bloco __envie a todos__ e receber esta mensagem em um outro ator. 



__Parabéns você terminou, agora você pode desfrutar do jogo!__

Não esqueça que você pode compartilhar o seu jogo com todos os seus amigos e familiares clicando em __Compartilhar__ no menu!

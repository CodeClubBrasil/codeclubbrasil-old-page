---
layout: scratchProject
title: Caça às bruxas
term: 1_2.0

---

Nível 1

#Caça às bruxas

__Introdução:__
Este é um jogo de caça às bruxas. Você deve clicar nas bruxas que aparecem na tela, cada vez que acertar uma delas você ganha pontos. 
O objetivo é ganhar o máximo de pontos em 30 segundos!

<center><img src="sample.png"> 
</center>


##PASSO 1: Crie uma bruxa voadora

1. Crie um novo projeto Scratch ( __Arquivo__ -> __Novo__ ).
2. Clique em palco, na área em baixo à esquerda da tela. 

<center><img src="../img/palco.png"></img> 
</center>

3. Em seguida, vá até a aba __Panos de Fundo__, 
 _importar fundo da biblioteca_ e escolha o fundo Natureza/woods.
4. Adicione um __novo ator__, clicando em _importar ator da biblioteca_ (na área em baixo, à esquerda)  e selecione Imaginários/witch1. 

5. Clique em __Variáveis__ e _crie uma variável_ chamada "velocidade". __ATENÇÃO:__  selecione a opção _para este ator apenas_. 

Você poderá usar esta variável mais tarde para mudar a velocidade da bruxa durante o jogo.

Para que a bruxa comece a se mexer quando o jogo iniciar, crie estes blocos:


		quando clicar em BANDEIRA
		mude [velocidade v] para (5)
		sempre
			mova (velocidade) passos
		fim


		
###Teste o projeto
__Clique na bandeira verde__ e olhe o que a bruxa faz. 

Por que ela fica trancada no canto da tela?

6. Para não ficar trancada a bruxa deve dar meia volta quando tocar na borda do palco. 
Abaixo do comando __mova__, adicione um  comando `se tocar na borda, volte`.

		quando clicar em BANDEIRA
		mude [velocidade v] para (5)
		sempre
			mova (velocidade) passos
			se tocar na borda, volte
		fim
		
7. Para evitar que a bruxa fique de cabeça para baixo, clique no _i azul_ e certifique-se que o __estilo de rotação__ dela é _esquerda-direita_.

###Teste o projeto

__Clique na bandeira verde.__ 

A bruxa se move de um lado par a outro atravessando a tela?



###Sugestões

__Tente mudar o valor da variável velocidade para a bruxa voar mais rápido ou mais devagar.__

__Como você faria a bruxa acelerar com o passar do tempo?__
(Esta é uma pergunta difícil, mas não se preocupe se você não sabe como fazer. Você terá mais dicas enquanto você trabalha neste projeto.)

<div class="page_break">
</div>


##PASSO 2: Faça a bruxa aparecer e desaparecer de maneira aleatória
Para tornar o jogo mais divertido, vamos fazer a bruxa aparecer e desaparecer aleatoriamente. 
Faremos isso com um outro conjunto de comandos que é executado ao mesmo tempo que os comandos que fazem a bruxa se mexer.
Estes novos comandos vão esconder a bruxa por um tempo aleatório e em seguida a bruxa vai aparecer, também por um tempo aleatório. 
Esta operação é repetida para sempre (ou até que o jogo acabe).

Crie estes comandos para a bruxa:

		quando clicar em BANDEIRA 
		sempre
			esconder
			espere (escolha número entre (2) e (5)) segundos
			mostrar
			espere (escolha número entre (3) e (5)) segundos
		fim

###Teste o projeto

__Clique na bandeira verde.__ 

A bruxa se mexe de um lado para o outro atravessando a tela, desaparecendo e aparecendo aleatoriamente?

__Tente mudar os valores entre os quais os números são sorteados. 
O que acontece se você escolher números muito grandes ou muito pequenos?__

__Este passo lhe dá pistas sobre onde aumentar a velocidade da bruxa cada vez que ela aparece novamente?__
Tente modificar o roteiro da bruxa para que ela aumente de velocidade cadavez que reaparecer.


##PASSO 3: Faça a bruxa desaparecer ao ser clicada

Para transformar isso em um jogo, precisamos que o jogador faça algo. Eles precisam clicar na bruxa para que ela desapareça. 
Além de fazer a bruxa desaparecer, vamos aproveitar para toca um som, assim o jogo ficará mais divertido!

1. Na aba de Sons, clique em _escolher som do acervo_  e escolha o som Eletrônicos/pop. 
2. Adicione estes comandos para a bruxa:

		quando este ator for clicado
		esconder
		toque o som [pop v]
		
###Teste o projeto

__Clique na bandeira verde.__

A bruxa desaparece e toca um som quando clicada?

<div class="page_break">
</div>

##Passo 4: Adicione um placar e uma contagem regressiva

Tudo bem, nós temos uma bruxa que voa pela tela, mas nós queremos fazer um jogo! 
Então, vamos marcar pontos cada vez que clicamos na bruxa e também vamos inserir um limite de tempo para a partida. 

Para fazer um placar e a contagem regressiva nós podemos usar variáveis.

1. Crie uma nova variável __para todos os atores__ chamada _placar_, 
e modifique os comandos da bruxa para __adicionar 1__ a esta variável cada vez que clicarmos em uma bruxa.


		quando este ator for clicado
		esconder
		toque o som [pop v]
		adicione a [placar v] , (1)

	
2. Clique no __palco__ e crie uma nova variável chamada _contagem regressiva_.
 
Vamos adicionar novos blocos que serão executado quando a bandeira verde for clicada. 
Eles servem para mudar a contagem regressiva para 30 e zerar o placar. 
Em seguida use um bloco __repita até que__ para esperar um segundo e diminuir a contagem regressiva de um. 
Isso deve ser repetido até que a contagem regressiva chegue a 0. 

Quando a contagem regressiva chegar a zero, devemos usar um bloco __pare todos__ para interromper a partida.

__ATENÇÃO:__ Certifique-se de que os blocos são criados para o __Palco__, clicando sobre ele antes de começar a encaixar

		quando clicar em BANDEIRA
		mude [contagem regressiva v] para (30)
		mude [placar v] para (0)
		repita até que<(contagem regressiva) = [0]>
			espere (1) segundos
			adicione a (contagem regressiva), (-1)
		fim
		pare [todos v]

###Teste o projeto

__Clique na bandeira verde.__




###Sugestões
__Como você faria para acelerar a bruxa durante a partida?__


__Parabéns, você terminou o jogo básico. Existem mais coisas que você pode fazer. Tente este desafio!__

<div class="page_break">
</div>

##Desafio: Adicione mais bruxas

Se uma bruxa é bom, várias bruxas deve ser ainda mais legal! Então, vamos criar três bruxa voando pela tela.

1. Duplique a bruxa clicando com o botão direito sobre ela.
2. Para cada bruxa ajuste o tamanho do personagem para que cada uma delas tenha um tamanho diferente.
4. Distribua as bruxas pelo palco para que elas não fiquem todas juntas.
3. Para cada bruxa mude o valor dentro variável velocidade para que cada uma voe com velocidade diferente das outras.

__Importante:__ No Palco, deve aparecer _Witch: velocidade_.
Se aparecer apenas “velocidade”, apague a variável e crie novamente selecionando a opção "para este ator apenas".

Se você não quiser que a velocidade apareça, desmarque _a caixa ao lado do bloco velocidade_ na tab de variáveis.

###Teste o projeto
__Clique na bandeira verde.__

Você vê três bruxas que se movem de um lado a outro da tela, 
que aparecem e desaparecem aleatoriamente, e que desaparecem quando você clica nelas?




###Sugestões:
1. Qual a quantidade adequada de bruxas para o jogo ?
2. Você pode fazer as bruxas terem aparências diferentes? 
Você poderia editar suas fantasias, ou usar alguns blocos da aba _Aparência_ para mudá-las.
3. Você pode fazer o número de pontos ganhos para cada bruxa ser diferente? Que tal fazer a bruxa mais veloz (e menor) valer 10 pontos?

__Parabéns, você terminou, agora aproveite!__

Não esqueça que você pode compartilhar seu jogo com todos os seus amigos e família clicando em __Compartilhar__ na barra de menu!

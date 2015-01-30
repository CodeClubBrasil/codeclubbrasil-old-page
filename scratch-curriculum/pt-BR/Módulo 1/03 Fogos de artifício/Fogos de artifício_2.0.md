---
layout: scratchProject
title: Fogos de artifício
term: 1_2.0
resources: 1
---

Nível 1 

#Fogos de artifício

__Introdução:__
Neste projeto, vamos criar um show de fogos de artifício em uma cidade.


<center><img src="sample.png"> 
</center>


##PASSO 1: Dispare um foguete na direção do mouse

__Vamos começar importando as imagens do jogo.__

1. Crie um novo projeto Scratch. Apague o gato clicando nele com o botão direito e em apagar.
2. Importe o fundo de tela _Exterior/city withwater_.
3. Use o botão _Carregar ator a partir de arquivo_ para adicionar um objeto Foguete ao projeto (utilize Recursos/foguete.png).
4. Faça o foguete desaparecer quando a bandeira verde for clicada.
5. Também vamos fazer o foguete voar em direção ao mouse quando a tecla espaço for pressionada. 
Adicione um comando _quando a tecla espaço for pressionada_, faça o foguete aparecer e deslizar na direção do mouse:
	

	    quando clicar em BANDEIRA
	    esconder

	    quando a tecla [espaço v] for pressionada
	    mostrar
	    deslize em (1) segundos até x: (posição x do mouse) y: (posição y do mouse) 

###Teste o projeto
__Clique na bandeira verde, posicione o mouse sobre o palco e pressione a barra de espaço.__

O foguete aparece e vai em direção ao mouse?
O que acontece se você mover o mouse e pressionar espaço novamente?

6. Fogos de artifício não andam de lado. Vamos fazer com que ele sempre comece embaixo da tela alinhado com o mouse. 
Antes de fazer o foguete aparecer, use o comando __vá para__ e faça com que ele vá para a parte de baixo da tela, m
as que mantenha a sua posição horizontal (x) do mouse.



	    quando clicar em BANDEIRA
	    esconder

 		 quando a tecla [espaço v] for pressionada
 		 vá para x: (posição x do mouse) y: (-200)
	    mostrar
	    deslize em (1) segundos até x: (posição x do mouse) y: (posição y do mouse) 
	    
	 


###Teste o projeto
__Clique na bandeira verde, posicione o mouse sobre o palco e pressione a barra de espaço.__ 

O foguete voa na direção do mouse, saindo debaixo da tela? 

O que acontece se você mover o mouse e pressionar espaço novamente?

7. Por último, vamos usar o botão do mouse em vez da barra de espaço. Para fazer isso, 
nós podemos colocar nossos comandos dentro de um bloco __sempre se pressionado__.
Em seguida, substituir o comando __quando a tecla espaço for pressionada__ por __quando clicar em BANDEIRA__ 
e por último fazer com que o foguete não fique aparecendo no início.




	    quando clicar em BANDEIRA
	    esconder 
	    sempre 
	    se <mouse pressionado?> então
	      vá para x: (posição x do mouse) y: (-200)
	      mostrar
	      deslize em (1) segundos para x: (posição x do mouse) y: (posição y do mouse) 
	    fim

###Teste o projeto
__Clique na bandeira verde e em seguida, clique sobre o palco. Clique novamente em outro ponto.__ 

###Sugestões
1. Tente alterar onde o foguete se posiciona antes de ser lançado, para que ele se incline um pouco enquanto se movimenta.
2. Tente fazer alguns foguetes mais lentos ou mais rápidos que os outros.

Salve o projeto.

<div class="page_break">
</div>


## Passo 2: Faça o foguete explodir

1. O primeiro passo para fazer o foguete explodir é fazê-lo tocar o som Recursos\bang antes que ele comece a se mover, em seguida, desaparecer,
 uma vez que chegar ao mouse. Para importar um som vá até a aba Sons e clique em importar.

		quando clicar em BANDEIRA
		esconder
		 sempre 
	    se <mouse pressionado?>  então
		    va para x: (posição x do mouse) y: (-200)
		    toque o som [bang v]
		    mostrar
		    deslize em (1) segundos para x: (posição x do mouse) y: (posição y do mouse)
		    esconder
		  fim
		fim

2. Em seguida, faça o foguete mandar uma mensagem a todos uma nova mensagem quando ele explodir. Esta mensagem será ouvida mais tarde.



	    quando clicar em BANDEIRA
		esconder
		 sempre 
	    se <mouse pressionado?>  então
	      va para x: (posição x do mouse) y: (-200)
	      toque o som [bang v]
	      mostrar
	      deslize em (1) segundos para x: (posição x do mouse) y: (posição y do mouse)
	      esconder
	      envie [explodir v] a todos
	    fim

###Teste o projeto
__Clique na bandeira verde.__ 
Certifique-se de que o foguete faz barulho e desaparece quando atinge o mouse.

3. Importe um novo objeto usando Recursos/explosao.png.
4. Este novo ator deve começar escondido quando clicarmos na bandeira verda
5. Quando ele ouve a mensagem explodir ele deve mover-se para a posição do foguete usando o comando __vá para__.
 A explosão deve mostrar-se, em seguida, esconder-se novamente um segundo depois.


		 quando clicar em BANDEIRA
		 esconder


	    quando receber [explodir v]
	    va para x: ( [posição x v] de [foguete v] ) y: ( [posição y v] de [foguete v] )
	    mostrar
	    espere (1) segundos
	    esconder

###Teste o projeto

__Lance um outro foguete.__ 

O foguete é substituído pelo desenho de explosão quando ele explode?
O que acontece se você mantiver o botão pressionado enquanto move o mouse? (Não se preocupe, nós vamos corrigir isso mais tarde).

Salve o projeto

##PASSO 3: Faça com que cada explosão seja diferente

1. Nós podemos fazer com que cada explosão seja diferente, usando o comando _mude o efeito cor	_, 
e sorteando uma cor aleatória entre 1 e 200 antes de mostrá-lo.

	    quando receber [explodir v]
	    mude o efeito [cor v] para (escolha número entre (1) e (200) ) 
	    vá para x: ( [posição x v] de [foguete v] ) y: ( [posição y v] de [foguete v] ) 
	    mostrar 
	    espere (1) segundos 
	    esconder


### Teste o projeto
__Clique na bandeira verde.__ 

Cada explosão tem uma cor diferente?

2. Vamos inserir alguns desenhos diferentes para as explosões usando os trajes  Recursos/explosao2.png e Recursos/explosao3.png, 
e alternar entre elas para cada foguete, antes de mostrá-lo.
 		 
 		 quando receber [explodir v]
	    próxima fantasia 
	    mude o efeito [cor v] para (escolha número entre (1) e (200) ) 
	    vá para x: ( [posição x v] de [foguete v] ) y: ( [posição y v] de [foguete v] )  
	    mostrar 
	    espere (1) segundos 
	    esconder


###Teste o projeto
__Clique na bandeira verde.__ 

Cada foguete tem um desenho de explosão diferente?

3. Finalmente, vamos fazer a explosão crescer ao longo do tempo ao invés de simplesmente aparecer. 
No lugar de esperar um segundo, defina o tamanho do objeto para 5% antes de mostrá-lo, e, em seguida, uma vez que é mostrado, 
some 2 ao tamanho cinqüenta vezes, usando um bloco de repetição.


	    quando receber [explodir v]
	    próxima fantasia 
	    mude o efeito [cor v] para (escolha número entre (1) e (200) ) 
	    vá para x: ( [posição x v] de [foguete v] ) y: ( [posição y v] de [foguete v] ) 
	    mude o tamanho para (5)% 
	    mostrar 
	    repita (50) vezes
	      adicione (2) ao tamanho 
	    fim 
	    esconder

###Teste o projeto
__Clique na bandeira verde.__ 

A imagem da explosão se espalha a partir do centro e cresce lentamente?

### Sugestões
Que tal tentar fazer cada explosão ainda mais original, alterando o tamanho e a velocidade de crescimento da explosão.

Salve o projeto

<div class="page_break">
</div>



## PASSO 4: Correção do problema no anuncio da explosão 
Você lembra que tínhamos um problema quando mantínhamos pressionado o botão do mouse?
Isso ocorre porque quando o foguete anuncia sua explosão, ele vai repetir imediatamente e anunciar outra mensagem de explosão, 
antes que a última tenha terminado a exibição.


1. Para corrigir isso, podemos substituir o comando envie, por um comando envie e espere. 
Desta forma, o ciclo não se repetirá até que a foguete termine de explodir.




	    quando BANDEIRA clicado 
	    esconder 
	    sempre
	     se <mouse pressionado?>  então 
	    vá para x: (posição x do mouse) y: (-200) 
	    toque o som [bang] 
		mostrar 
		deslize em (1) segundos para x: (posição x do mouse) y: (posição y do mouse) 
		esconder 
		envie [explodir v] a todos e espere 
	    fim


### Teste o projeto
__Clique na bandeira verde e em seguida, pressione o botão do mouse sobre o palco.__ 

A imagem da explosão aparece no lugar certo e na hora certa?

Salve o projeto




var codeClubApplyImagesCalled=0
function codeClubApplyImages()
{
            if(codeClubApplyImagesCalled==1)
            return;
		 codeClubApplyImagesCalled=1;
	 $("em").each(function(){
             	            $(this).after('<img height="30px" class="autoImage" src="../img/'+$(this).html().toLowerCase()+'.png"></img>');
             	
             		       }
             
        );
   $(".autoImage").load(
   function(){
             	            $(this).before(' ');
             	         }
             	         
   
   );
      $('img').error(function() {
							
												$(this).css({display:'none'});
							
							});
				     $('img').each(function() { this.src = this.src; });
            	
}

function applyCodeClubStyle()
{
	codeClubHeaders();	
	codeClubApplyImages();
       	
}

var called=0;
function codeClubHeaders(){
            if(called==1)
            return;	
            called=1;
            	scratchblocks2.parse("code");
             $('body').wrapInner('<div id="page_wrapper" ></div>');
       
             $("p:first,h1").wrapAll('<div id="header"></div');
             $("#header").wrapAll('<div id="header_wrap"></div');
             var levelContent = $.trim($("#header p").html());
          
             var lastIndex = levelContent.lastIndexOf(' ');
             if(lastIndex != -1)
             {
            		var str1 = levelContent.substring(0, lastIndex );
            		var str2 = levelContent.substring( lastIndex,levelContent.length );
            		$("#header").append('<div id="level" ><div id="level_text" >'+str1+'</div><div id="level_value" >'+str2+'</div></div>');
             		$("#header p").html('<img width="110px" src="../../../../img/logo-br.svg" id="logo"></img>');
              }
              
             $("ol li").append('<div class="check"></div>')
             
             $("h3::contains('Test')").each(function(){
             	            $(this).addClass('test_h3');
             					var oldContent= $(this).html();
             					$(this).html('<img class="test_flag" src="../../../../js/libs/scratchblocks2/block_images/flag.png"></img>'+oldContent);
             	
             		       }
             
                  );
      
                  $("h2").each(function(){
            				var stepContent = $.trim($(this).html());
          					
             				var stepIndex = stepContent.lastIndexOf(':');
             				
                       if(stepIndex != -1)
                       {
            		        var str1 = stepContent.substring(0, stepIndex+1);
            		       var str2 = stepContent.substring( stepIndex+1,stepContent.length );
            	     
             		        $(this).html('<span class="step_title">'+str1+'</span>'+str2);
                }   	
                  		
                  	});

                  $("p::contains('Salve o projeto')").each(function(){
             	            $(this).wrapAll('<div class="save_project"> </div>');
             	
             		       }
             
                  );
                 $('.save_project').append('<div class="check"></div>');
                  
              	//	$("h2:first").before('<center><img src="sample.png"/> </center>');
                  
         }         

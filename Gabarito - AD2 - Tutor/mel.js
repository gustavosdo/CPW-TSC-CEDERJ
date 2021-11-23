
var tabProd = new Array(5);
var tabTipo = new Array(4);

tabProd[0] = ["Iogurte", 300, 360 ];
tabProd[1] = ["Iogurte Zero", 300, 360 ];
tabProd[2] = ["Balas de Gengibre", 300, 360 ];
tabProd[3] = ["Balas", 300, 360 ];
tabProd[4] = ["Barra de Cereal", 300, 360 ];

tabTipo[0] = [ "IogurteNatMel100" ,"Natural com mel ", "130g",8 ];
tabTipo[1] = [ "Iogurtezerolac100"," Iogurte zero cal ", "130g",8 ];
tabTipo[2] = [ "BalaGengibre100"," Bala de gengibre com mel ", "120g",10 ];
tabTipo[3] = [ "BalaAnis100"," Bala de anis ", "120g",10 ];
tabTipo[4] = [ "BarraGranAveiaMel100"," Barra de Cereal de Mel e Granola ","60g",5 ]
            

function MostraProd(tipo)
{

var jan = open("", tabProd[tipo][0],"location=no,status=no,width=" +
tabProd[tipo][1] + ",height="+tabProd[tipo][2]+"");

with (jan.document) {
  write("<html><head><title>Lista de Produtos</title>");
  write("<link rel='stylesheet' type='text/css'");
  write(" href='AmigoUrs.css'>");
  write("</head><body>");
  write("<div class='janInfo'>");
  write("<h2>", tabProd[tipo][0], "</h2>");
  write("<img class='janInfoImg' src='Imagens/",
   tabTipo[tipo][0], ".jpg' />");
  write("<ul>");
        /** for (i = 1; i < tabTipo[tipo].length; i++) **/
  write( "Tipo:",tabTipo[tipo][1],"<br>","Qtd:",tabTipo[tipo][2], 
  	    "<br>" ," Preço: R$ ", tabTipo[tipo][3],",00"); 
  write("</ul>");
              

write("<input type='button' value='Fechar' ");
write("onClick='window.close();'/></div>");
write("</form></div></body></html>");
close();
}
}


 

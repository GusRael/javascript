var valor_total_compra= 0;

function adicionarProduto(){
	var produto_nome= document.getElementById("produto_nome").value;
	var produto_valor= document.getElementById("produto_valor").value;
	var produto_quantidade= document.getElementById("produto_quantidade").value;
	var valor_venda= produto_valor*produto_quantidade;
	valor_total_compra += valor_venda;
	
	var produto_item_tabela=
	"<tr><td>" + produto_nome +
	"</td><td>" + produto_valor.toLocaleString('pt-BR',{style:'currency',currency:'BRL'}) +
	"</td><td>" + produto_quantidade +
	"</td><td>" + valor_venda.toLocaleString('pt-BR',{style:'currency',currency:'BRL'}) +
	"</td></tr>";
		
	valor_total.innerHTML= "<span>Total compra: </span>" + valor_total_compra.toLocaleString('pt-BR',{style:'currency',currency:'BRL'});	
	tabela_produtos.innerHTML+= produto_item_tabela;
	alert("Seu produto foi inserido com sucesso!!");
}

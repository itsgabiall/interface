const robo_sim = document.querySelector('#robo_sim')
const opt_robo_sim = document.querySelector('#opt_robo_sim')

robo_sim.addEventListener('click', FunHorarioRobo)

function FunHorarioRobo(){
    if(robo_sim.checked){
        document.getElementById("opt_robo_sim").style.visibility = "visible";
    } else{
        document.getElementById("opt_robo_sim").style.visibility = "hidden";
    }
}


var vetGestaoParametros = ['Pyxis', 'Medispan', 'Link Palmweb', 'Protocolo TEV', 'Visão de Setor', 'Protocolo MEWS', 'Material Setor','Cópia pelo robô','Regras de Cobrança','Regra Cobrança Gás', 'Painel Higienização', 'Cópia dos Intervalos', 'Painel Multidisciplinar','Perfil de Acesso Médico','Regra Taxa x Respirador','Regra Lançamento Diário','Regras de Controle Glicêmico','Regra de Taxa x Recomendação', 'Cópia Intervenções Enfermagem', 'Liberação Setor para Usuários','Regra Tempo Exibição Processos','Regra Gestão Serviços de Leitos','Prescrição Controlada de Analgesia', 'Atualização Setor na Estrutura Atendimento','Aprazamento, reaprazamento, administração e suspensão de horário']

document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("botao-largo").addEventListener("click", function(){
        var elementos = document.getElementsByClassName("param"); 
        var inputs = document.querySelectorAll('.param');
        var setorespelho = document.getElementById("setorespelho").value;

        document.getElementById("selecionados").innerHTML = "<b> Setor espelho: </b>" + setorespelho + "<br/>" ;
        
		for(i = 0; i < elementos.length; i++){
            
			if(elementos[i].checked){ 
                document.getElementById("selecionados").innerHTML =  document.getElementById("selecionados").innerHTML + vetGestaoParametros[i] + "<br/>"; 	
                inputs[i].checked = false;
			}
           
		}		
        
               
		/* document.getElementById("botao-largo").checked = false; */
       
	});
})



/*function uncheckAll() {
    var inputs = document.querySelectorAll('.param');
    for (var i = 0; i < inputs.length; i++) {
        inputs[i].checked = false;
    }
}*/


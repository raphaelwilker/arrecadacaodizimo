$(document).ready(function(){
	$('button').on('click',function(){
		validationCamp();
	});
	
	ableCamps();
	
	$('#insertRow').click(function(){
		$('#rowInputData').append(modelRow)
		ableCamps();
	});
	
	$('#resultTotal').text('R$ '+totalFinal);
	
	var modelRow =  '<div class="col-md-4 camping"><div class="campInsertData campInsertName"></div></div>'+
					'<div class="col-md-2 camping"><div class="campInsertData">R$</div></div>'+
					'<div class="col-md-2 camping"><div class="campInsertData">R$</div></div>'+
					'<div class="col-md-2 camping"><div class="campInsertData">R$</div></div>'+
					'<div class="col-md-2 camping rightTable"><div class="campInsertData selectType">'+
					'<select><option>Dinheiro</option><option>Cheque</option>'+
					'<option>Transferencia bancaria</option></select></div></div>';								
});
var validationCamp = function(){
	/*$('input').each(function(){
		if($(this).val() == ""){
			$(this).css('border','solid 1px red');
		}
	});*/
};

var totalDizimos = 0;
var totalOfertas = 0;
var totalOutros = 0;
var totalFinal = totalDizimos + totalOfertas + totalOutros;

var ableCamps  = function(){
	$('.campInsertData').each(function(){
		if(!$(this).hasClass('selectType')){
			$(this).attr('contenteditable','true');
		}
		
		$(this).on('keyup',function(){
			if((!$(this).hasClass('campInsertName')) && (!$(this).hasClass('selectType')) ){
				$(this).html('100,00');
			}
			
		});
	});
}



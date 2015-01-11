var $form = $('#formulario'),
	$titulo = $('#titulo'),
	$url = $('#url'),
	$button = $('#mostrar-form'),
	$list = $('#contenido'),
	$post = $('.item').first(); //toma el primer elemento

if(localStorage.getItem('autosave')){
	$titulo.val(sessionStorage.getItem('titulo'));
	$url.val(sessionStorage.getItem('url'));
}

var id = setInterval(function(){
	sessionStorage.setItem('titulo', $titulo.val());
	sessionStorage.setItem('url', $url.val());
},1000);

function mostrarFormulario (e) {
	'user strict' //exige escribir las sintaxys correctamente
	 e.preventDefault(); //manera de reemplazar return false;
	e.stopPropagation();// detiene los eventos propagados entre las capas ej Nav -> ul -> li -> a click

	$form.slideToggle();
	$list.slideToggle();
	// return false;
}
function agregarPost(){
	var url =$url.val(),
		titulo = $titulo.val(),
		clone = $post.clone();
	clone.find('.titulo_item a')
		.text(titulo)
		.attr('href',url);

	clone.hide();

	$list.prepend(clone);
	mostrarFormulario();
	$titulo.val(''); //entrega valor vacío
	clone.slideDown();
	// $clone.fadeIn();
	return false;
}
// Eventos
$('#publicar_nav a').click(mostrarFormulario);
$('#formulario').on('submit', agregarPost);

// $button.click(mostrarFormulario);
// $form.on('submit', agregarPost);
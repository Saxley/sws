setTimeout(function() {
    let nav=document.getElementById('navCatalogo');
    nav.className='aboutUs';
    let info='Somos FoxyGamerCompany, un grupo pequeño de desarrolladores los cuales tuvimos la idea de proporcionar a los negocios la oportunidad de tener una pagina web, actualmente la pandemia dejo a muchas personas sin empleo, negocios tuvieron que cerrar y dejaron a muchas personas sin un laburo, el tener una pagina web donde vender o patrocinar productos da la oportubidae de generar nuevos empleos desde tener vendedores por todo el mundo, hasta re dirigir a los compradores a tu tienda fisica. <br>Buscamos que no tengas que pagar demasiado por tener tu sitio web y que tengas las opciones de controlar tu inventario y ventas al 100%. <br>Si tu tienes una pagina o facebook puedes re dirigirlos a tu tienda web y tendran mucha mas confianza en tus productos eso te lo aseguro. <br>Si no sabes como funciona esto del de vender online contactanos y estamos dispuestos a explicarte detalladamente como puedes generar ventas desde tu sitio.';
    let parrafo=document.createElement('P');
    parrafo.innerHTML=info; 
    nav.append(parrafo); 
}, 100);
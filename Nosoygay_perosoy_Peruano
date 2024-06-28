async function enviarScript(scriptText){
	const lines = scriptText.split(/[\n\t]+/).map(line => line.trim()).filter(line => line);
	main = document.querySelector("#main"),
	textarea = main.querySelector(`div[contenteditable="true"]`)
	
	if(!textarea) throw new Error("Não há uma conversa aberta")
	
	for(const line of lines){
		console.log(line)
	
		textarea.focus();
		document.execCommand('insertText', false, line);
		textarea.dispatchEvent(new Event('change', {bubbles: true}));
	
		setTimeout(() => {
			(main.querySelector(`[data-testid="send"]`) || main.querySelector(`[data-icon="send"]`)).click();
		}, 100);
		
		if(lines.indexOf(line) !== lines.length - 1) await new Promise(resolve => setTimeout(resolve, 250));
	}
	
	return lines.length;
}

enviarScript(`

no soy gay 
pero soy chileno
 y tengo una fantasia
 donde chile invade
 argentina y Argentina
 tiene que exportar esclavos
 femboys para satisfacer oficiales 
chilenos de alto rango. me imagino
 que soy un comandante poderoso
 alto, con una mandibula cuadrada
 y con musculos masivos. mi femboy
 es un pequeño argentino timido con
 piel palida que viene a mi habitacion.
 lo agarro con mis poderosos brazos y
 lo beso a la fuerza, presionando su pecho
 contra el mio. lo tiro contra la
 cama con mis grandes brazos quitandole
 sus pequeños calzones vírgenes. le muestro
 mi masivo mastodonte chileno, y despues se 
la meto con todo, follandolo con una fuerza
 inhumana. cada movimiento lo hace gemir, y 
finalrnente me corro en su pequeño culito 
argentino, dejando el semen corriendole por
 sus pequeñas nalgas, y despues lo abrazo con 
mis grandes y fuertes brazos chilenos haciendolo
 dormir en mi pecho. algun otro hetero
 tiene este tipo de fantasias?


`).then(e => console.log(`Código finalizado, ${e} mensagens enviadas`)).catch(console.error)

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

Me acuerdo de mi primer condón,
 fue cuando tenía 14 años.
 Fui a comprar un paquete de condones.

La empleada de la tienda era muy bonita,
 y se dio cuenta de que yo era completamente
 novato en esas cuestiones.

Me entregó el paquete y me preguntó si
 sabía cómo usarlos. Yo le contesté con sinceridad,

“No”.

Ella abrió el paquete, tomó uno de los 
condones y se lo puso en el pulgar.
 Me dijo que me asegurara que quedara ajustado y seguro.

Yo, aparentaba confusión.
 Ella revisó la tienda, 
estaba vacía.

Me dijo,

“Espérate un minuto”,
 se dirigió a la Puerta
 y la cerró con llave.

Tomándome de la mano,
 me llevó a la trastienda, 
se desabotonó la blusa y se la quitó… 
Se desabrochó el sostén y se quitó la falda.
 Me preguntó,

“¿Te sientes excitado?”

La verdad es que yo era tan bobo, 
que todo lo que pude hacer
 fue asentir con la cabeza.

Me dijo que era hora
 de ponerse el condón.

Mientras yo me lo ponía,
 ella se quitó la tanguita
 y se acostó en el escritorio.

“Dale”, me dijo.
 “No tenemos mucho tiempo”.

Fue fantástico;
 desafortunadamente 
no duré mucho,
 y en unos cuantosminutos,
 tres para ser exactos,
 todo había terminado.

Se me quedó mirando
 y me preguntó:

“¿Te pusiste el condón?”

“Claro”,
 le dije,
 mientras le enseñaba
 el pulgar con el condón puesto.

`).then(e => console.log(`Código finalizado, ${e} mensagens enviadas`)).catch(console.error)

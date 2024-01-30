// Liste des configurations de canvas à afficher
var canvases = [
    { id: 'canvas1', width: 500, height: 500 },
    { id: 'canvas2', width: 500, height: 500 },
    { id: 'canvas3', width: 500, height: 500 },
    { id: 'canvas4', width: 500, height: 500 }
];
var currentCanvasIndex = 0;

// Fonction pour créer et afficher un canvas
function createCanvas(config, index) {
    var canvas = document.createElement('canvas');
    canvas.id = config.id;
    canvas.width = config.width;
    canvas.height = config.height;
    var gc = canvas.getContext('2d');

    if (index === 0) {
        // Dessinez le motif spécifique pour le premier canvas
        for (let i = 100; i > 0; i -= 10) {
            gc.beginPath();
            gc.arc(100, 100, i, 0, Math.PI*2);
            gc.fillStyle = i === 10 ? 'red' : (i / 10) % 2 === 0 ? 'white' : 'black';
            gc.fill();
            gc.closePath();
        }
    } else if (index === 1) {
        // Dessinez le motif spécifique pour le deuxième canvas
        gc.beginPath() ;

gc.moveTo(100,100) ;
gc.lineTo(200,200) ;
gc.lineTo(200,250) ;
gc.lineTo(250,300) ;
gc.lineTo(350,300) ;
gc.lineTo(450,200) ;
gc.lineTo(400,200) ;
gc.lineTo(450,150) ;
gc.lineTo(400,150) ;
gc.lineTo(400,100) ;
gc.lineTo(350,150) ;
gc.lineTo(250,150) ;
gc.lineTo(200,100) ;
gc.lineTo(100,100) ;
gc.lineTo(150,150) ;
gc.lineTo(150,75) ;
gc.lineTo(162.5,90) ;
gc.lineTo(175,75) ;
gc.lineTo(187.5,90) ;
gc.lineTo(200,75) ;
gc.lineTo(200,100) ;
    
gc.moveTo(250,300) ;
gc.lineTo(250,350) ;
gc.lineTo(200,350) ;
gc.moveTo(250,350) ;
gc.lineTo(250,375) ;
gc.moveTo(250,350) ;
gc.lineTo(220,370) ;
    
gc.moveTo(350,300) ;
gc.lineTo(350,375) ;
gc.moveTo(350,350) ;
gc.lineTo(300,350) ;
gc.moveTo(350,350) ;
gc.lineTo(320,370) ;

gc.stroke() ;
gc.closePath() ;
        
gc.beginPath() ;   
gc.moveTo(165,115) ;
gc.arc(165, 115, 4, 0, Math.PI*2);  
gc.fillStyle = "black";
gc.fill();
    
gc.stroke() ;
gc.closePath() ;

    }else if (index === 2) {
        // Dessinez un rectangle de la couleur spécifiée pour les autres canvas

	gc.beginPath();
	
	gc.fillStyle = "black";
	gc.fillRect(0,0,50,50);
	gc.strokeRect(50,0,50,50);
	gc.fillRect(100,0,50,50);
	gc.strokeRect(150,0,50,50);
	gc.fillRect(200,0,50,50);
	gc.strokeRect(250,0,50,50);
	gc.fillRect(300,0,50,50);
	gc.strokeRect(350,0,50,50);
	gc.fillRect(400,0,50,50);
	gc.strokeRect(450,0,50,50);
	
	gc.strokeRect(0,50,50,50);
	gc.fillRect(0,100,50,50);
	gc.strokeRect(0,150,50,50);
	gc.fillRect(0,200,50,50);
	gc.strokeRect(0,250,50,50);
	gc.fillRect(0,300,50,50);
	gc.strokeRect(0,350,50,50);
	gc.fillRect(0,400,50,50);
	gc.strokeRect(0,450,50,50);
	
	gc.fillRect(50,50,50,50);
	gc.strokeRect(50,100,50,50);
	gc.fillRect(50,150,50,50);
	gc.strokeRect(50,200,50,50);
	gc.fillRect(50,250,50,50);
	gc.strokeRect(50,300,50,50);
	gc.fillRect(50,350,50,50);
	gc.strokeRect(50,400,50,50);
	gc.fillRect(50,450,50,50);

	gc.strokeRect(100,50,50,50);
	gc.fillRect(100,100,50,50);
	gc.strokeRect(100,150,50,50);
	gc.fillRect(100,200,50,50);
	gc.strokeRect(100,250,50,50);
	gc.fillRect(100,300,50,50);
	gc.strokeRect(100,350,50,50);
	gc.fillRect(100,400,50,50);
	gc.strokeRect(100,450,50,50);
	
	gc.fillRect(150,50,50,50);
	gc.strokeRect(150,100,50,50);
	gc.fillRect(150,150,50,50);
	gc.strokeRect(150,200,50,50);
	gc.fillRect(150,250,50,50);
	gc.strokeRect(150,300,50,50);
	gc.fillRect(150,350,50,50);
	gc.strokeRect(150,400,50,50);
	gc.fillRect(150,450,50,50);
	
	gc.strokeRect(200,50,50,50);
	gc.fillRect(200,100,50,50);
	gc.strokeRect(200,150,50,50);
	gc.fillRect(200,200,50,50);
	gc.strokeRect(200,250,50,50);
	gc.fillRect(200,300,50,50);
	gc.strokeRect(200,350,50,50);
	gc.fillRect(200,400,50,50);
	gc.strokeRect(200,450,50,50);
	
	gc.fillRect(250,50,50,50);
	gc.strokeRect(250,100,50,50);
	gc.fillRect(250,150,50,50);
	gc.strokeRect(250,200,50,50);
	gc.fillRect(250,250,50,50);
	gc.strokeRect(250,300,50,50);
	gc.fillRect(250,350,50,50);
	gc.strokeRect(250,400,50,50);
	gc.fillRect(250,450,50,50);
	
	gc.strokeRect(300,50,50,50);
	gc.fillRect(300,100,50,50);
	gc.strokeRect(300,150,50,50);
	gc.fillRect(300,200,50,50);
	gc.strokeRect(300,250,50,50);
	gc.fillRect(300,300,50,50);
	gc.strokeRect(300,350,50,50);
	gc.fillRect(300,400,50,50);
	gc.strokeRect(300,450,50,50);
	
	gc.fillRect(350,50,50,50);
	gc.strokeRect(350,100,50,50);
	gc.fillRect(350,150,50,50);
	gc.strokeRect(350,200,50,50);
	gc.fillRect(350,250,50,50);
	gc.strokeRect(350,300,50,50);
	gc.fillRect(350,350,50,50);
	gc.strokeRect(350,400,50,50);
	gc.fillRect(350,450,50,50);
	
	gc.strokeRect(400,50,50,50);
	gc.fillRect(400,100,50,50);
	gc.strokeRect(400,150,50,50);
	gc.fillRect(400,200,50,50);
	gc.strokeRect(400,250,50,50);
	gc.fillRect(400,300,50,50);
	gc.strokeRect(400,350,50,50);
	gc.fillRect(400,400,50,50);
	gc.strokeRect(400,450,50,50);
	
	gc.fillRect(450,50,50,50);
	gc.strokeRect(450,100,50,50);
	gc.fillRect(450,150,50,50);
	gc.strokeRect(450,200,50,50);
	gc.fillRect(450,250,50,50);
	gc.strokeRect(450,300,50,50);
	gc.fillRect(450,350,50,50);
	gc.strokeRect(450,400,50,50);
	gc.fillRect(450,450,50,50);
		
	gc.fill();
	gc.stroke();
	gc.closePath();

} else if (index === 3) {
    // Dessinez le motif spécifique pour le quatrième canvas
    var l = canvas.width / 40;
    gc.lineWidth = 1;
    gc.beginPath();

    for (var i = 0; i < 41; i++) {
        gc.moveTo((l * i), 501);
        gc.lineTo(0, i * l);
        gc.stroke();
    }
    for (var i = 0; i < 41; i++) {
        gc.moveTo(501, (l * i));
        gc.lineTo(i * l, 0);
        gc.stroke();
    }

    gc.closePath();
} else {
    // Dessinez un rectangle de la couleur spécifiée pour les autres canvas
    gc.fillStyle = config.color;
    gc.fillRect(0, 0, canvas.width, canvas.height);
}

    document.getElementById('content').innerHTML = '';
    document.getElementById('content').appendChild(canvas);
}

// Créez le premier canvas au démarrage
createCanvas(canvases[currentCanvasIndex], currentCanvasIndex);

// Ajoutez un écouteur d'événements au bouton pour créer le canvas suivant
document.getElementById('next').addEventListener('click', function() {
    currentCanvasIndex++;
    if (currentCanvasIndex >= canvases.length) {
        currentCanvasIndex = 0; // Retour au début de la liste si nous avons atteint la fin
    }
    createCanvas(canvases[currentCanvasIndex], currentCanvasIndex);
});
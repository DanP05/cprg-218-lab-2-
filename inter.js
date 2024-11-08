function Change(button) {
    const img = document.getElementById('mainImage');
    const body = document.body;

    if (button == 'brown bear') {
        img.src = 'bear.webp'; 
        img.alt = 'A brown bear walking in wild.';
        body.className = 'Bear';
        
    } 
    else if (button == 'moose') {
        img.src = 'moose.webp'; 
        img.alt = 'A moose in the forest.';
        body.className = 'Moose';
    } 
    else if (button == 'wolf') {
        img.src = 'wolf.webp'; 
        img.alt = 'A wolf walking in the wild.';
        body.className = 'Wolf';
    } 
    else if (button == 'elk') {
        img.src = 'elk.webp'; 
        img.alt = 'An elk in the wilderness.';
        body.className = 'Elk';
    } 
    else if (button == 'bighorn sheep') {
        img.src = 'sheep.webp'; 
        img.alt = 'A bighorn sheep standing on a mountain slope.';
        body.className = 'BighornSheep';
    }
}

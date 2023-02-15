
document.addEventListener("DOMContentLoaded", ()=>{
    
    let defy = document.getElementById("defy");
    let x9 = document.getElementById("x9");
    
    defy.innerHTML = 'XXXXXXXXX';
    x9.innerHTML = '';
    
    const slides = [
        'XXXXXXXXX',
        'XDXXXXXX', // D
        'XDXEXXX', // DE
        'DXEXFX', // DEF
        'DEFYX', // DEFY
        'DEFY', // DEFY
    ]
    
    setTimeout(()=>{
        
        const delay = 50;
        
        slides.forEach((slide, index)=>{
            setTimeout(()=>{
                defy.innerHTML = slide;
            }, delay * index)
        })
        
        setTimeout(()=>{x9.innerHTML = 'X'}, (delay * slides.length) + 1000)
        setTimeout(()=>{x9.innerHTML = 'X9'}, (delay * slides.length) + 1500)
        
    }, 2000)
    
    
});



function convertToBin(num){
    var num = document.getElementById('Dec')
    var dec = parseInt(num.value)
    var res = document.getElementById('res')
    var bin = dec.toString(2)
    
    res.innerHTML = bin
    res.style.fontFamily = 'monospace'
    res.style.fontSize = '30px'
    
    }





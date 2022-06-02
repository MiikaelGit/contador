
function contar() {
    var inicio = document.getElementById('inicio')
    var fim = document.getElementById('fim')
    var passo = document.getElementById('passo')
    
    document.getElementById('result').innerHTML = ''
    
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        document.getElementById('result').innerHTML = `<p>[ERRO] Impossível contar...</p>`
    } else {
        document.getElementById('result').innerHTML =  'Contando...:<br>'
        var start = Number(inicio.value)
        var end = Number(fim.value)
        var step = Number(passo.value)
        if (step <= 0) {
            alert('Passo inválido! Considerando PASSO 1')
            step = 1
        }
        if (start < end) {
            //contagem crescente
            for (start ; start <= end; start += step) {
                document.getElementById('result').innerHTML += `${start}\u{1F449} ` 
            }
        }else {
            //contagem regressiva
            for (start ; start >= end; start -= step) {
                document.getElementById('result').innerHTML += `${start} \u{1F449}` 
            }
        }
        document.getElementById('result').innerHTML += `\u{1F3C1}`
    }
    
}
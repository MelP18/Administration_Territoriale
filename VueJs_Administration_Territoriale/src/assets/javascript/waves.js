let canvas_aboveme = document.getElementById('above-us')
if(canvas_aboveme){
    let ctx_aboveme = canvas_aboveme.getContext('2d')
    ctx_aboveme.strokeStyle = "#193441"
    ctx_aboveme.beginPath()
    ctx_aboveme.shadowBlur = 15
    ctx_aboveme.shadowColor = "#0000001A"
    ctx_aboveme.lineWidth = 180
    ctx_aboveme.moveTo(-60, 150)
    ctx_aboveme.bezierCurveTo(canvas_aboveme.width / 3, canvas_aboveme.width / 4, 2 * canvas_aboveme.width / 3, -3 * canvas_aboveme.width / 300, canvas_aboveme.width, 150)
    ctx_aboveme.stroke()
}

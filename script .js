const canvas = document.getElementById('my-canvas')
const ctx = canvas.getCpntext('2d')
const ballRadius = 10
const canvasWidth = canvas.width
const canvasHeight = canvas.height
const numberOfBricks = 30
let x = canvas.width / 2
let y = canvas.height - 30
let dx = 2
let dy = 2
let activeBricks = numberOfBricks
let numberOfColumns = 5
let numberOfRows = 3
let bricks = []
let bricksWidth = 75
let BricksHeight = 20
let bricksPadding = 10
let brickOffsetTop = 30
let brickOffsetLeft = 30
let paddleHeight = 10
let paddleWidth = 75
let paddleX = (canvas.width - paddleWidth) / 2
let scoreContainer = document.getElementById('score')

scoreContainer.innerText = 'Score: 0'

function updateScore() {
    const score = getScore()
    scoreContainer.innerText = `Score: ${score}`
    if (score === numberOfColumns * numberOfRows) {
        alert('You have won')
        window.location.reload()
        clearInterval(interval)
    }
}

function getScore() {
    let score = 0
    for (let r = 0; r < numberOfRows; r++) {
        for (let c = 0; c < numberOfColumns; c++) {
            if (bricks[r][c].status === 0) score++
        }
    }
    return score
}

function generateAllBricks() {
    for (let r = 0; r < numberOfRows; r++) {
        bricks[r] = []
        for (let c = 0; c < numberOfColumns; c++) {
            bricks[r][c] = {
                x: r,
                y: c,
                status: 1
            }
        }
    } 
}

const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');

// ゲームオブジェクトの初期化
const ball = {
    x: canvas.width / 2,
    y: canvas.height - 30,
    dx: 2,
    dy: -2,
    radius: 10
};

const paddle = {
    width: 75,
    height: 10,
    x: (canvas.width - 75) / 2
};

// ボールの描画
function drawBall() {
    ctx.beginPath();
    ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
    ctx.fillStyle = '#0095DD';
    ctx.fill();
    ctx.closePath();
}

// パドルの描画
function drawPaddle() {
    ctx.beginPath();
    ctx.rect(paddle.x, canvas.height - paddle.height, paddle.width, paddle.height);
    ctx.fillStyle = '#0095DD';
    ctx.fill();
    ctx.closePath();
}

// ゲームの更新と描画
function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    drawBall();
    drawPaddle();

    // ボールの移動
    ball.x += ball.dx;
    ball.y += ball.dy;

    // 壁との衝突判定
    if (ball.x < ball.radius || ball.x > canvas.width - ball.radius) {
        ball.dx = -ball.dx;
    }
    if (ball.y < ball.radius || ball.y > canvas.height - ball.radius) {
        ball.dy = -ball.dy;
    }

    // ここからゲームのロジックを実装
}

// ゲームループ
setInterval(update, 10);

// パドルの操作
let rightPressed = false;
let leftPressed = false;

document.addEventListener('keydown', (e) => {
    if (e.key === 'Right' || e.key === 'ArrowRight') {
        rightPressed = true;
    } else if (e.key === 'Left' || e.key === 'ArrowLeft') {
        leftPressed = true;
    }
});

document.addEventListener('keyup', (e) => {
    if (e.key === 'Right' || e.key === 'ArrowRight') {
        rightPressed = false;
    } else if (e.key === 'Left' || e.key === 'ArrowLeft') {
        leftPressed = false;
    }
});

function movePaddle() {
    if (rightPressed && paddle.x < canvas.width - paddle.width) {
        paddle.x += 7;
    } else if (leftPressed && paddle.x > 0) {
        paddle.x -= 7;
    }
}

// update関数内にmovePaddle()を追加
function update() {
    // 省略...
    
    movePaddle();

    // 省略...
}

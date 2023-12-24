
var images = document.querySelectorAll('.slider img'); // 取得所有圖片
var currentImageIndex = 0; // 目前顯示的圖片索引

function fadeOut() {
    images[currentImageIndex].style.opacity = 0; // 將目前顯示的圖片透明度調整為0
}

function fadeIn() {
    images[currentImageIndex].style.display = 'none'; // 隱藏目前顯示的圖片
    currentImageIndex = (currentImageIndex + 1) % images.length; // 切換到下一張圖片的索引
    images[currentImageIndex].style.display = 'block'; // 顯示下一張圖片
    setTimeout(() => {
        images[currentImageIndex].style.opacity = 1; // 將下一張圖片透明度調整為1，實現淡入效果
    }, 100); // 100 毫秒後淡入
}

setInterval(() => {
    fadeOut();
    setTimeout(() => {
        fadeIn();
    }, 1000); // 1 秒後執行 fadeIn() 函數
}, 3000); // 每 3 秒切換一次圖片

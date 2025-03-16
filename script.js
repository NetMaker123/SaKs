// 轮播图功能
let slides = document.querySelectorAll(".slide");
let prevButton = document.querySelector(".prev");
let nextButton = document.querySelector(".next");
let currentSlide = 0;
let intervalId; // 用于存储定时器的 ID
let slideCount = slides.length;
console.log("幻灯片的数量是: ", slideCount);

function showSlide() {
  slides.forEach((slide) => {
    slide.style.transform = `translateX(-${currentSlide * 100}%)`;
    // console.log(i);
    // console.log(index);
    // console.log(slide);
  });
}

function nextSlide() {
  console.log("Before nextSlide, currentSlide:", currentSlide);
  currentSlide = (currentSlide + 1) % slideCount;
  console.log("After nextSlide, currentSlide:", currentSlide);
  showSlide(currentSlide);
}

function prevSlide() {
  console.log("Before prevSlide, currentSlide:", currentSlide);
  currentSlide = (currentSlide - 1 + slideCount) % slideCount;
  console.log("After prevSlide, currentSlide:", currentSlide);
  showSlide(currentSlide);
}

// 开始自动轮播
function startAutoSlide() {
  intervalId = setInterval(nextSlide, 3000); // 每 3 秒切换一次幻灯片
}

// 停止自动轮播
function stopAutoSlide() {
  clearInterval(intervalId);
}

// 为按钮添加事件监听器
nextButton.addEventListener("click", () => {
  stopAutoSlide(); // 点击按钮时停止自动轮播
  nextSlide();
  startAutoSlide(); // 点击后重新开始自动轮播
});

prevButton.addEventListener("click", () => {
  stopAutoSlide(); // 点击按钮时停止自动轮播
  prevSlide();
  startAutoSlide(); // 点击后重新开始自动轮播
});

// 初始化显示第一张幻灯片
showSlide(currentSlide);
// 开始自动轮播
startAutoSlide();

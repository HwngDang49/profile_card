var btnSearchOpen = document.querySelector(".search-box__btn");
btnSearchOpen.addEventListener("click", function () {
  this.parentElement.classList.toggle("open");
});

var btnClose = document.querySelector(".close__tag");
btnClose.addEventListener("click", function () {
  this.parentElement.classList.toggle("open");
});

function up() {
  document.querySelector(".text__btn").classList.add("up");
}

function down() {
  document.querySelector(".text__btn").classList.remove("up");
}

function runSequence() {
  down();

  setTimeout(() => {
    up();

    setTimeout(runSequence, 3000);
  }, 3000);
}

runSequence();

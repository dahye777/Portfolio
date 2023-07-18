// gnb
const gnbItems = document.querySelectorAll(".gnb > li");

gnbItems.forEach(item => {
  item.addEventListener("mouseover", function() {
    document.querySelectorAll(".sub, .bg").forEach(element => {
      element.style.display = "block";
    });
  });
});

gnbItems.forEach(item => {
  item.addEventListener("mouseout", function() {
    document.querySelectorAll(".sub, .bg").forEach(element => {
      element.style.display = "none";
    });
  });
});


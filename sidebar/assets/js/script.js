$(document).ready(function () {
  const $sidebar = $(".sidebar");
  const $menuBtn = $(".menu-btn");

  $menuBtn.click(function () {
    $sidebar.toggleClass("active");
    $(this).toggleClass("active");
  });
});

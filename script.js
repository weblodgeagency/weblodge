document.addEventListener("DOMContentLoaded", function () {

  const menuButton = document.querySelector(".menu-toggle");
  const navigation = document.querySelector(".nav");

  if (!menuButton || !navigation) {
    return;
  }

  menuButton.addEventListener("click", function () {

    if (navigation.style.display === "flex") {
      navigation.style.display = "";
    } else {
      navigation.style.display = "flex";
    }

  });

  navigation.querySelectorAll("a").forEach(function (link) {

    link.addEventListener("click", function () {

      if (window.innerWidth <= 700) {
        navigation.style.display = "";
      }

    });

  });

});

// init controller
var controller = new ScrollMagic.Controller({vertical: false});

new ScrollMagic.Scene({
    duration: function() { return $(".content-sections").width() }
  })
  .setTween(
    TweenMax.fromTo(
      ".city-light img",
      1,
      { scaleX: 1.6, x: "200%" },
      { scaleX: 1.6, x: "-200%" }
    )
  )
  .addTo(controller); // assign the scene to the controller

new ScrollMagic.Scene({
    duration: function() { return $(".content-sections").width() }
  })
  .setTween(
    TweenMax.fromTo(
      ".city-dark img",
      1,
      { scaleX: 1.6, x: "500%" },
      { scaleX: 1.6, x: "-500%" }
    )
  )
  .addTo(controller); // assign the scene to the controller

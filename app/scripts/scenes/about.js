// init controller
var controller = new ScrollMagic.Controller({vertical: false});

// Crane Toppper
new ScrollMagic.Scene({
    triggerElement: ".scene-about",
    duration: function() { return $(window).width() * 1.5 }
  })
  .setTween(
    TweenMax.fromTo(

      ".scene-about .crane-main .layer",
      1,
      { y: "+300%" },
      { y: "-200%" }
    )
  )
  .addTo(controller); // assign the scene to the controller

  // Crane Toppper
  new ScrollMagic.Scene({
      triggerElement: ".scene-service",
      duration: function() { return $(window).width() * 1.5 }
    })
    .setTween(
      TweenMax.fromTo(

        ".scene-service .crane-main .layer",
        1,
        { y: "-100%" },
        { y: "+100%" }
      )
    )
    .addTo(controller); // assign the scene to the controller

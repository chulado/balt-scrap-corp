// init controller
var controller = new ScrollMagic.Controller({vertical: false});

// Crane Toppper
new ScrollMagic.Scene({
    triggerElement: ".scene-about",
    duration: 0
  })
  .setTween(
    TweenMax.fromTo(

      ".scene-about .crane-main .layer",
      2,
      { y: "+300%" },
      { y: "-200%" }
    )
  )
  .addTo(controller); // assign the scene to the controller

  // Crane Toppper
  new ScrollMagic.Scene({
      triggerElement: ".scene-service",
      duration: 0
    })
    .setTween(
      TweenMax.fromTo(

        ".scene-service .crane-main .layer",
        2,
        { y: "-100%" },
        { y: "+75%" }
      )
    )
    .addTo(controller); // assign the scene to the controller

AFRAME.registerComponent("comics-posters", {
  init: function () {
    this.postersContainer = this.el;
    this.createPoster();
  },

  createPoster: function () {
    const postersRef = [
      {
        id: "superman",
        title: "Superman",
        url: "./assets/posters/superman-poster.jpg"
      },
      {
        id: "spiderman",
        title: "Spiderman",
        url: "./assets/posters/spiderman-poster.jpg"
      },

      {
        id: "captain-aero",
        title: "Captain Aero",
        url: "./assets/posters/captain-aero-poster.jpg"
      },
      {
        id: "outer-space",
        title: "Outer Space",
        url: "./assets/posters/outer-space-poster.jpg"
      },
    ];

    let prevoiusXPosition = -60;

    for (var item of postersRef) {
      const posX = prevoiusXPosition + 25;
      const posY = 10;
      const posZ = -40;
      const position = { x: posX, y: posY, z: posZ };
      prevoiusXPosition = posX;
      const borderEl = this.createBorder(position, item.id);
      const postersRef = this.createpostersRef(item);
      borderEl.appendChild(postersRef);
      this.postersContainer.appendChild(borderEl);
    }
  },
  createBorder: function (position, id) {
    const entityEl = document.createElement("a-entity");
    entityEl.setAttribute("id", id);
    entityEl.setAttribute("visible", true);
    entityEl.setAttribute("geometry", {
      primitive: "plane",
      width: 22,
      height: 40
    });

    entityEl.setAttribute("position", position);
    entityEl.setAttribute("material", { color: "#fff" });
    entityEl.setAttribute("cursor-listener", {});
    return entityEl;
  },
  createpostersRef: function (item) {
    const entityEl = document.createElement("a-entity");
    entityEl.setAttribute("visible", true);
    entityEl.setAttribute("geometry", {
      primitive: "plane",
      width: 20,
      height: 28
    });

    entityEl.setAttribute("position", { x: 0, y: 5, z: 0.1 });
    entityEl.setAttribute("material", { src: item.url });
    return entityEl;
  }
});
let main = document.getElementsByTagName("main")[0];

let array = [
  {
    url: "https://molecule-dev1.netlify.app/",
    imgUrl: "/img/molecule.jpg",
    imgSmallUrl: "/imgSmall/molecule.jpg",
    h3: "Molecule",
    p: "HTML and SCSS project from figma",
  },
  {
    url: "https://infinizai-dev1.netlify.app/",
    imgUrl: "/img/infinizai.jpg",
    imgSmallUrl: "/imgSmall/infinizai.jpg",
    h3: "Infinizai",
    p: "HTML and SCSS project from figma",
  },
  {
    url: "https://oh-so-pro-dev1.netlify.app/",
    imgUrl: "/img/apple.jpg",
    imgSmallUrl: "/imgSmall/apple.jpg",
    h3: "Apple.com",
    p: "HTML and CSS project clone",
  },
  {
    url: "https://mercedes-benz-dev1.netlify.app/",
    imgUrl: "/img/mercedes.jpg",
    imgSmallUrl: "/imgSmall/mercedes.jpg",
    h3: "Mercedes-Benz",
    p: "HTML and SCSS project clone",
  },
  {
    url: "https://nekmit-dev1.netlify.app/",
    imgUrl: "/img/nekmit.jpg",
    imgSmallUrl: "/imgSmall/nekmit.jpg",
    h3: "Nekmit",
    p: "HTML and SCSS project from figma",
  },
  {
    url: "https://olx-dev1.netlify.app/",
    imgUrl: "/img/olx.jpg",
    imgSmallUrl: "/imgSmall/olx.jpg",
    h3: "Olx.uz",
    p: "HTML and CSS project clone",
  },
  {
    url: "https://airbnb-dev1.netlify.app/",
    imgUrl: "/img/airbnb.jpg",
    imgSmallUrl: "/imgSmall/airbnb.jpg",
    h3: "Airbnb",
    p: "HTML and CSS project clone",
  },
  {
    url: "https://vercel-design-clone.netlify.app/",
    imgUrl: "/img/vercel.jpg",
    imgSmallUrl: "/imgSmall/vercel.jpg",
    h3: "Vercel Settings",
    p: "Vercel only design clone HTML & CSS",
  },
  {
    url: "https://business-startup-dev1.netlify.app/",
    imgUrl: "/img/business.jpg",
    imgSmallUrl: "/imgSmall/business.jpg",
    h3: "Business Startup",
    p: "HTML and SCSS project from figma",
  },
  {
    url: "https://resource-dev1.netlify.app/",
    imgUrl: "/img/resource.jpg",
    imgSmallUrl: "/imgSmall/resource.jpg",
    h3: "Resource",
    p: "HTML and SCSS project from figma",
  },
  {
    url: "https://triangle-animation.netlify.app/",
    imgUrl: "/img/triangle.jpg",
    imgSmallUrl: "/imgSmall/triangle.jpg",
    h3: "Pyramid",
    p: "HTML, CSS and JavaScript project",
  },
];

function items() {
  console.log("hello");
  array.map((i) => {
    let element = `
        <a style="text-decoration: none" href=${i.url}>
            <div class="container">
                <div class="imgWrapper" style="background-image: url(${i.imgSmallUrl});">
                    <img src=${i.imgUrl} loading="lazy"/>
                    <div class="layer">
                       <i class="fa-solid fa-link"></i>
                    </div>
                </div>
                <div class="text">
                    <h3>${i.h3}</h3>
                    <p>${i.p}</p>
                </div>
            </div>
        </a>  
    `;
    main.insertAdjacentHTML("beforeend", element);
  });
}

items();

const allImgWrappers = document.querySelectorAll(".imgWrapper");

allImgWrappers.forEach((div) => {
  const img = div.querySelector("img");

  function loaded() {
    div.classList.add("loaded");
  }

  if (img.complete) {
    loaded;
  } else {
    img.addEventListener("load", loaded);
  }
});

const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
    alt: "Alpine Spring Meadows",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
    alt: "Nature Landscape",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
    alt: "Lighthouse Coast Sea",
  }
];


const galleryList = document.querySelector(".gallery");

const galleryItems = images.map(({ url, alt }) => {
  const galleryItem = document.createElement("li");
  galleryItem.classList.add("gallery_item");

  const galleryImage = document.createElement("img");
  galleryImage.classList.add("gallery_image");
  galleryImage.src = url;
  galleryImage.alt = alt;
  galleryImage.width = 360;
  galleryImage.height = 300;

  galleryItem.append(galleryImage);

  return galleryItem;
})

galleryList.append(...galleryItems);


const gallery = document.querySelector(".gallery");
gallery.style.listStyle = "none";
gallery.style.display = "flex";
gallery.style.width = "1440px";
gallery.style.height = "848px";
gallery.style.padding = "100px 156px";
gallery.style.flexWrap = "wrap";
gallery.style.justifyContent = "center";
gallery.style.alignItems = "center";
gallery.style.gap = "48px 24px";
gallery.style.background = "#FFF";

const galleryImages = document.querySelectorAll(".gallery__image");
galleryImages.forEach((image) => {
  image.style.width = "360px";
  image.style.height = "300px";
  image.style.flexShrink = "0";
  image.style.background =
    "url(<path-to-image>), lightgray 0px -0.018px / 125% 100.012% no-repeat";
});
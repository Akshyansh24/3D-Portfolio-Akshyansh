function locomotive() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },

    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },

    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();
}
locomotive();

const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth; //inner width of browser
canvas.height = window.innerHeight; //inner height of browser

// Canvas ki width and height change to new width and height as responsive
window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  // And Call render function
  render();
});

// render function
function render() {
  scaleImage(images[imageSeq.frame], context);
}

function files(index) {
  // take images in the form of string
  var data = `
          ./build/images/Animation/male0001.png
          ./build/images/Animation/male0002.png
          ./build/images/Animation/male0003.png
          ./build/images/Animation/male0004.png
          ./build/images/Animation/male0005.png
          ./build/images/Animation/male0006.png
          ./build/images/Animation/male0007.png
          ./build/images/Animation/male0008.png
          ./build/images/Animation/male0009.png
          ./build/images/Animation/male0010.png
          ./build/images/Animation/male0011.png
          ./build/images/Animation/male0012.png
          ./build/images/Animation/male0013.png
          ./build/images/Animation/male0014.png
          ./build/images/Animation/male0015.png
          ./build/images/Animation/male0016.png
          ./build/images/Animation/male0017.png
          ./build/images/Animation/male0018.png
          ./build/images/Animation/male0019.png
          ./build/images/Animation/male0020.png
          ./build/images/Animation/male0021.png
          ./build/images/Animation/male0022.png
          ./build/images/Animation/male0023.png
          ./build/images/Animation/male0024.png
          ./build/images/Animation/male0025.png
          ./build/images/Animation/male0026.png
          ./build/images/Animation/male0027.png
          ./build/images/Animation/male0028.png
          ./build/images/Animation/male0029.png
          ./build/images/Animation/male0030.png
          ./build/images/Animation/male0031.png
          ./build/images/Animation/male0032.png
          ./build/images/Animation/male0033.png
          ./build/images/Animation/male0034.png
          ./build/images/Animation/male0035.png
          ./build/images/Animation/male0036.png
          ./build/images/Animation/male0037.png
          ./build/images/Animation/male0038.png
          ./build/images/Animation/male0039.png
          ./build/images/Animation/male0040.png
          ./build/images/Animation/male0041.png
          ./build/images/Animation/male0042.png
          ./build/images/Animation/male0043.png
          ./build/images/Animation/male0044.png
          ./build/images/Animation/male0045.png
          ./build/images/Animation/male0046.png
          ./build/images/Animation/male0047.png
          ./build/images/Animation/male0048.png
          ./build/images/Animation/male0049.png
          ./build/images/Animation/male0050.png
          ./build/images/Animation/male0051.png
          ./build/images/Animation/male0052.png
          ./build/images/Animation/male0053.png
          ./build/images/Animation/male0054.png
          ./build/images/Animation/male0055.png
          ./build/images/Animation/male0056.png
          ./build/images/Animation/male0057.png
          ./build/images/Animation/male0058.png
          ./build/images/Animation/male0059.png
          ./build/images/Animation/male0060.png
          ./build/images/Animation/male0061.png
          ./build/images/Animation/male0062.png
          ./build/images/Animation/male0063.png
          ./build/images/Animation/male0064.png
          ./build/images/Animation/male0065.png
          ./build/images/Animation/male0066.png
          ./build/images/Animation/male0067.png
          ./build/images/Animation/male0068.png
          ./build/images/Animation/male0069.png
          ./build/images/Animation/male0070.png
          ./build/images/Animation/male0071.png
          ./build/images/Animation/male0072.png
          ./build/images/Animation/male0073.png
          ./build/images/Animation/male0074.png
          ./build/images/Animation/male0075.png
          ./build/images/Animation/male0076.png
          ./build/images/Animation/male0077.png
          ./build/images/Animation/male0078.png
          ./build/images/Animation/male0079.png
          ./build/images/Animation/male0080.png
          ./build/images/Animation/male0081.png
          ./build/images/Animation/male0082.png
          ./build/images/Animation/male0083.png
          ./build/images/Animation/male0084.png
          ./build/images/Animation/male0085.png
          ./build/images/Animation/male0086.png
          ./build/images/Animation/male0087.png
          ./build/images/Animation/male0088.png
          ./build/images/Animation/male0089.png
          ./build/images/Animation/male0090.png
          ./build/images/Animation/male0091.png
          ./build/images/Animation/male0092.png
          ./build/images/Animation/male0093.png
          ./build/images/Animation/male0094.png
          ./build/images/Animation/male0095.png
          ./build/images/Animation/male0096.png
          ./build/images/Animation/male0097.png
          ./build/images/Animation/male0098.png
          ./build/images/Animation/male0099.png
          ./build/images/Animation/male0100.png
          ./build/images/Animation/male0101.png
          ./build/images/Animation/male0102.png
          ./build/images/Animation/male0103.png
          ./build/images/Animation/male0104.png
          ./build/images/Animation/male0105.png
          ./build/images/Animation/male0106.png
          ./build/images/Animation/male0107.png
          ./build/images/Animation/male0108.png
          ./build/images/Animation/male0109.png
          ./build/images/Animation/male0110.png
          ./build/images/Animation/male0111.png
          ./build/images/Animation/male0112.png
          ./build/images/Animation/male0113.png
          ./build/images/Animation/male0114.png
          ./build/images/Animation/male0115.png
          ./build/images/Animation/male0116.png
          ./build/images/Animation/male0117.png
          ./build/images/Animation/male0118.png
          ./build/images/Animation/male0119.png
          ./build/images/Animation/male0120.png
          ./build/images/Animation/male0121.png
          ./build/images/Animation/male0122.png
          ./build/images/Animation/male0123.png
          ./build/images/Animation/male0124.png
          ./build/images/Animation/male0125.png
          ./build/images/Animation/male0126.png
          ./build/images/Animation/male0127.png
          ./build/images/Animation/male0128.png
          ./build/images/Animation/male0129.png
          ./build/images/Animation/male0130.png
          ./build/images/Animation/male0131.png
          ./build/images/Animation/male0132.png
          ./build/images/Animation/male0133.png
          ./build/images/Animation/male0134.png
          ./build/images/Animation/male0135.png
          ./build/images/Animation/male0136.png
          ./build/images/Animation/male0137.png
          ./build/images/Animation/male0138.png
          ./build/images/Animation/male0139.png
          ./build/images/Animation/male0140.png
          ./build/images/Animation/male0141.png
          ./build/images/Animation/male0142.png
          ./build/images/Animation/male0143.png
          ./build/images/Animation/male0144.png
          ./build/images/Animation/male0145.png
          ./build/images/Animation/male0146.png
          ./build/images/Animation/male0147.png
          ./build/images/Animation/male0148.png
          ./build/images/Animation/male0149.png
          ./build/images/Animation/male0150.png
          ./build/images/Animation/male0151.png
          ./build/images/Animation/male0152.png
          ./build/images/Animation/male0153.png
          ./build/images/Animation/male0154.png
          ./build/images/Animation/male0155.png
          ./build/images/Animation/male0156.png
          ./build/images/Animation/male0157.png
          ./build/images/Animation/male0158.png
          ./build/images/Animation/male0159.png
          ./build/images/Animation/male0160.png
          ./build/images/Animation/male0161.png
          ./build/images/Animation/male0162.png
          ./build/images/Animation/male0163.png
          ./build/images/Animation/male0164.png
          ./build/images/Animation/male0165.png
          ./build/images/Animation/male0166.png
          ./build/images/Animation/male0167.png
          ./build/images/Animation/male0168.png
          ./build/images/Animation/male0169.png
          ./build/images/Animation/male0170.png
          ./build/images/Animation/male0171.png
          ./build/images/Animation/male0172.png
          ./build/images/Animation/male0173.png
          ./build/images/Animation/male0174.png
          ./build/images/Animation/male0175.png
          ./build/images/Animation/male0176.png
          ./build/images/Animation/male0177.png
          ./build/images/Animation/male0178.png
          ./build/images/Animation/male0179.png
          ./build/images/Animation/male0180.png
          ./build/images/Animation/male0181.png
          ./build/images/Animation/male0182.png
          ./build/images/Animation/male0183.png
          ./build/images/Animation/male0184.png
          ./build/images/Animation/male0185.png
          ./build/images/Animation/male0186.png
          ./build/images/Animation/male0187.png
          ./build/images/Animation/male0188.png
          ./build/images/Animation/male0189.png
          ./build/images/Animation/male0190.png
          ./build/images/Animation/male0191.png
          ./build/images/Animation/male0192.png
          ./build/images/Animation/male0193.png
          ./build/images/Animation/male0194.png
          ./build/images/Animation/male0195.png
          ./build/images/Animation/male0196.png
          ./build/images/Animation/male0197.png
          ./build/images/Animation/male0198.png
          ./build/images/Animation/male0199.png
          ./build/images/Animation/male0200.png
          ./build/images/Animation/male0201.png
          ./build/images/Animation/male0202.png
          ./build/images/Animation/male0203.png
          ./build/images/Animation/male0204.png
          ./build/images/Animation/male0205.png
          ./build/images/Animation/male0206.png
          ./build/images/Animation/male0207.png
          ./build/images/Animation/male0208.png
          ./build/images/Animation/male0209.png
          ./build/images/Animation/male0210.png
          ./build/images/Animation/male0211.png
          ./build/images/Animation/male0212.png
          ./build/images/Animation/male0213.png
          ./build/images/Animation/male0214.png
          ./build/images/Animation/male0215.png
          ./build/images/Animation/male0216.png
          ./build/images/Animation/male0217.png
          ./build/images/Animation/male0218.png
          ./build/images/Animation/male0219.png
          ./build/images/Animation/male0220.png
          ./build/images/Animation/male0221.png
          ./build/images/Animation/male0222.png
          ./build/images/Animation/male0223.png
          ./build/images/Animation/male0224.png
          ./build/images/Animation/male0225.png
          ./build/images/Animation/male0226.png
          ./build/images/Animation/male0227.png
          ./build/images/Animation/male0228.png
          ./build/images/Animation/male0229.png
          ./build/images/Animation/male0230.png
          ./build/images/Animation/male0231.png
          ./build/images/Animation/male0232.png
          ./build/images/Animation/male0233.png
          ./build/images/Animation/male0234.png
          ./build/images/Animation/male0235.png
          ./build/images/Animation/male0236.png
          ./build/images/Animation/male0237.png
          ./build/images/Animation/male0238.png
          ./build/images/Animation/male0239.png
          ./build/images/Animation/male0240.png
          ./build/images/Animation/male0241.png
          ./build/images/Animation/male0242.png
          ./build/images/Animation/male0243.png
          ./build/images/Animation/male0244.png
          ./build/images/Animation/male0245.png
          ./build/images/Animation/male0246.png
          ./build/images/Animation/male0247.png
          ./build/images/Animation/male0248.png
          ./build/images/Animation/male0249.png
          ./build/images/Animation/male0250.png
          ./build/images/Animation/male0251.png
          ./build/images/Animation/male0252.png
          ./build/images/Animation/male0253.png
          ./build/images/Animation/male0254.png
          ./build/images/Animation/male0255.png
          ./build/images/Animation/male0256.png
          ./build/images/Animation/male0257.png
          ./build/images/Animation/male0258.png
          ./build/images/Animation/male0259.png
          ./build/images/Animation/male0260.png
          ./build/images/Animation/male0261.png
          ./build/images/Animation/male0262.png
          ./build/images/Animation/male0263.png
          ./build/images/Animation/male0264.png
          ./build/images/Animation/male0265.png
          ./build/images/Animation/male0266.png
          ./build/images/Animation/male0267.png
          ./build/images/Animation/male0268.png
          ./build/images/Animation/male0269.png
          ./build/images/Animation/male0270.png
          ./build/images/Animation/male0271.png
          ./build/images/Animation/male0272.png
          ./build/images/Animation/male0273.png
          ./build/images/Animation/male0274.png
          ./build/images/Animation/male0275.png
          ./build/images/Animation/male0276.png
          ./build/images/Animation/male0277.png
          ./build/images/Animation/male0278.png
          ./build/images/Animation/male0279.png
          ./build/images/Animation/male0280.png
          ./build/images/Animation/male0281.png
          ./build/images/Animation/male0282.png
          ./build/images/Animation/male0283.png
          ./build/images/Animation/male0284.png
          ./build/images/Animation/male0285.png
          ./build/images/Animation/male0286.png
          ./build/images/Animation/male0287.png
          ./build/images/Animation/male0288.png
          ./build/images/Animation/male0289.png
          ./build/images/Animation/male0290.png
          ./build/images/Animation/male0291.png
          ./build/images/Animation/male0292.png
          ./build/images/Animation/male0293.png
          ./build/images/Animation/male0294.png
          ./build/images/Animation/male0295.png
          ./build/images/Animation/male0296.png
          ./build/images/Animation/male0297.png
          ./build/images/Animation/male0298.png
          ./build/images/Animation/male0299.png
          ./build/images/Animation/male0300.png`;
  //  spilit data on the basis of next line and passed in Array
  return data.split("\n")[index];
}

//frame count for canvas
const frameCount = 300;

// array of images
const images = [];
const imageSeq = {
  // for starting from 1 frame
  frame: 1,
};

// if files 0 then files 0 index is src
for (let i = 0; i < frameCount; i++) {
  //  everytime new image tag
  const img = new Image();
  img.src = files(i);
  images.push(img);
}

// frame per gsap
gsap.to(imageSeq, {
  frame: frameCount - 1,
  snap: "frame", // on sroll change
  ease: "none",
  scrollTrigger: {
    scrub: 0.15, //move forward and backward
    trigger: "#page>canvas",
    start: "top top", // elemt top , screen top
    end: "600% top", //element top , screen top
    scroller: `#main`, //
  },
  onUpdate: render,
});

// load first image on render
images[1].onload = render;

function scaleImage(img, ctx) {
  var canvas = ctx.canvas; //canvas save
  var hRatio = canvas.width / img.width; //horizontal ratio
  var vRatio = canvas.height / img.height; // vertical ratio
  var ratio = Math.max(hRatio, vRatio); //run bigger ration depend on screen size
  var centerShift_x = (canvas.width - img.width * ratio) / 2; //image ko center Rakhne k liye x axis per
  var centerShift_y = (canvas.height - img.height * ratio) / 2; //image ko center karne k liye y axis per
  ctx.clearRect(0, 0, canvas.width, canvas.height); //purani image clear karne k liye frame by frame
  ctx.drawImage(
    img,
    0,
    0,
    img.width,
    img.height,
    centerShift_x,
    centerShift_y,
    img.width * ratio,
    img.height * ratio
  ); //image draw karne k liye
}

// scroll k time chlaane k liye
ScrollTrigger.create({
  trigger: "#page>canvas",
  pin: true,
  //markers:true,
  scroller: `#main`,
  start: "top top",
  end: `800% top`,
});

// page pin karne k liye
gsap.to("#page1", {
  scrollTrigger: {
    //scroll per trigger karne k liye
    trigger: `#page1`, //jispe lgana vo aaya hai
    start: `top top`, // element top , screen top
    end: `bottom top`, //
    pin: true, // page rokne k liye
    scroller: `#main`, //
  },
});

gsap.to("#page2", {
  scrollTrigger: {
    trigger: `#page2`,
    start: `top top`,
    end: `bottom top`,
    pin: true,
    scroller: `#main`,
  },
});

gsap.to("#page3", {
  scrollTrigger: {
    trigger: `#page3`,
    start: `top top`,
    end: `bottom top`,
    pin: true,
    scroller: `#main`,
  },
});

gsap.to("#page4", {
  scrollTrigger: {
    trigger: `#page4`,
    start: `top top`,
    end: `bottom top`,
    pin: true,
    scroller: `#main`,
  },
});

// MAil Function
function sendEmail() {
  window.location =
    "https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=akxshs234@gmail.com";
}

// function locomotive() {
//     gsap.registerPlugin(ScrollTrigger);

//     const locoScroll = new LocomotiveScroll({
//       el: document.querySelector("#main"),
//       smooth: true ,
//     });
//     locoScroll.on("scroll", ScrollTrigger.update);

//     ScrollTrigger.scrollerProxy("#main", {
//       scrollTop(value) {
//         return arguments.length
//           ? locoScroll.scrollTo(value, 0, 0)
//           : locoScroll.scroll.instance.scroll.y;
//       },

//       getBoundingClientRect() {
//         return {
//           top: 0,
//           left: 0,
//           width: window.innerWidth,
//           height: window.innerHeight,
//         };
//       },

//       pinType: document.querySelector("#main").style.transform
//         ? "transform"
//         : "fixed",
//     });
//     ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
//     ScrollTrigger.refresh();
//   }
//   locomotive();

//   const canvas = document.querySelector("canvas");
//   const context = canvas.getContext("2d");

//   canvas.width = window.innerWidth;
//   canvas.height = window.innerHeight;

//   window.addEventListener("resize", function () {
//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;
//     render();
//   });

//   function files(index) {
//     var data = `
//       ./build/images/Animation/male0001.png
//       ./build/images/Animation/male0002.png
//       ./build/images/Animation/male0003.png
//       ./build/images/Animation/male0004.png
//       ./build/images/Animation/male0005.png
//       ./build/images/Animation/male0006.png
//       ./build/images/Animation/male0007.png
//       ./build/images/Animation/male0008.png
//       ./build/images/Animation/male0009.png
//       ./build/images/Animation/male0010.png
//       ./build/images/Animation/male0011.png
//       ./build/images/Animation/male0012.png
//       ./build/images/Animation/male0013.png
//       ./build/images/Animation/male0014.png
//       ./build/images/Animation/male0015.png
//       ./build/images/Animation/male0016.png
//       ./build/images/Animation/male0017.png
//       ./build/images/Animation/male0018.png
//       ./build/images/Animation/male0019.png
//       ./build/images/Animation/male0020.png
//       ./build/images/Animation/male0021.png
//       ./build/images/Animation/male0022.png
//       ./build/images/Animation/male0023.png
//       ./build/images/Animation/male0024.png
//       ./build/images/Animation/male0025.png
//       ./build/images/Animation/male0026.png
//       ./build/images/Animation/male0027.png
//       ./build/images/Animation/male0028.png
//       ./build/images/Animation/male0029.png
//       ./build/images/Animation/male0030.png
//       ./build/images/Animation/male0031.png
//       ./build/images/Animation/male0032.png
//       ./build/images/Animation/male0033.png
//       ./build/images/Animation/male0034.png
//       ./build/images/Animation/male0035.png
//       ./build/images/Animation/male0036.png
//       ./build/images/Animation/male0037.png
//       ./build/images/Animation/male0038.png
//       ./build/images/Animation/male0039.png
//       ./build/images/Animation/male0040.png
//       ./build/images/Animation/male0041.png
//       ./build/images/Animation/male0042.png
//       ./build/images/Animation/male0043.png
//       ./build/images/Animation/male0044.png
//       ./build/images/Animation/male0045.png
//       ./build/images/Animation/male0046.png
//       ./build/images/Animation/male0047.png
//       ./build/images/Animation/male0048.png
//       ./build/images/Animation/male0049.png
//       ./build/images/Animation/male0050.png
//       ./build/images/Animation/male0051.png
//       ./build/images/Animation/male0052.png
//       ./build/images/Animation/male0053.png
//       ./build/images/Animation/male0054.png
//       ./build/images/Animation/male0055.png
//       ./build/images/Animation/male0056.png
//       ./build/images/Animation/male0057.png
//       ./build/images/Animation/male0058.png
//       ./build/images/Animation/male0059.png
//       ./build/images/Animation/male0060.png
//       ./build/images/Animation/male0061.png
//       ./build/images/Animation/male0062.png
//       ./build/images/Animation/male0063.png
//       ./build/images/Animation/male0064.png
//       ./build/images/Animation/male0065.png
//       ./build/images/Animation/male0066.png
//       ./build/images/Animation/male0067.png
//       ./build/images/Animation/male0068.png
//       ./build/images/Animation/male0069.png
//       ./build/images/Animation/male0070.png
//       ./build/images/Animation/male0071.png
//       ./build/images/Animation/male0072.png
//       ./build/images/Animation/male0073.png
//       ./build/images/Animation/male0074.png
//       ./build/images/Animation/male0075.png
//       ./build/images/Animation/male0076.png
//       ./build/images/Animation/male0077.png
//       ./build/images/Animation/male0078.png
//       ./build/images/Animation/male0079.png
//       ./build/images/Animation/male0080.png
//       ./build/images/Animation/male0081.png
//       ./build/images/Animation/male0082.png
//       ./build/images/Animation/male0083.png
//       ./build/images/Animation/male0084.png
//       ./build/images/Animation/male0085.png
//       ./build/images/Animation/male0086.png
//       ./build/images/Animation/male0087.png
//       ./build/images/Animation/male0088.png
//       ./build/images/Animation/male0089.png
//       ./build/images/Animation/male0090.png
//       ./build/images/Animation/male0091.png
//       ./build/images/Animation/male0092.png
//       ./build/images/Animation/male0093.png
//       ./build/images/Animation/male0094.png
//       ./build/images/Animation/male0095.png
//       ./build/images/Animation/male0096.png
//       ./build/images/Animation/male0097.png
//       ./build/images/Animation/male0098.png
//       ./build/images/Animation/male0099.png
//       ./build/images/Animation/male0100.png
//       ./build/images/Animation/male0101.png
//       ./build/images/Animation/male0102.png
//       ./build/images/Animation/male0103.png
//       ./build/images/Animation/male0104.png
//       ./build/images/Animation/male0105.png
//       ./build/images/Animation/male0106.png
//       ./build/images/Animation/male0107.png
//       ./build/images/Animation/male0108.png
//       ./build/images/Animation/male0109.png
//       ./build/images/Animation/male0110.png
//       ./build/images/Animation/male0111.png
//       ./build/images/Animation/male0112.png
//       ./build/images/Animation/male0113.png
//       ./build/images/Animation/male0114.png
//       ./build/images/Animation/male0115.png
//       ./build/images/Animation/male0116.png
//       ./build/images/Animation/male0117.png
//       ./build/images/Animation/male0118.png
//       ./build/images/Animation/male0119.png
//       ./build/images/Animation/male0120.png
//       ./build/images/Animation/male0121.png
//       ./build/images/Animation/male0122.png
//       ./build/images/Animation/male0123.png
//       ./build/images/Animation/male0124.png
//       ./build/images/Animation/male0125.png
//       ./build/images/Animation/male0126.png
//       ./build/images/Animation/male0127.png
//       ./build/images/Animation/male0128.png
//       ./build/images/Animation/male0129.png
//       ./build/images/Animation/male0130.png
//       ./build/images/Animation/male0131.png
//       ./build/images/Animation/male0132.png
//       ./build/images/Animation/male0133.png
//       ./build/images/Animation/male0134.png
//       ./build/images/Animation/male0135.png
//       ./build/images/Animation/male0136.png
//       ./build/images/Animation/male0137.png
//       ./build/images/Animation/male0138.png
//       ./build/images/Animation/male0139.png
//       ./build/images/Animation/male0140.png
//       ./build/images/Animation/male0141.png
//       ./build/images/Animation/male0142.png
//       ./build/images/Animation/male0143.png
//       ./build/images/Animation/male0144.png
//       ./build/images/Animation/male0145.png
//       ./build/images/Animation/male0146.png
//       ./build/images/Animation/male0147.png
//       ./build/images/Animation/male0148.png
//       ./build/images/Animation/male0149.png
//       ./build/images/Animation/male0150.png
//       ./build/images/Animation/male0151.png
//       ./build/images/Animation/male0152.png
//       ./build/images/Animation/male0153.png
//       ./build/images/Animation/male0154.png
//       ./build/images/Animation/male0155.png
//       ./build/images/Animation/male0156.png
//       ./build/images/Animation/male0157.png
//       ./build/images/Animation/male0158.png
//       ./build/images/Animation/male0159.png
//       ./build/images/Animation/male0160.png
//       ./build/images/Animation/male0161.png
//       ./build/images/Animation/male0162.png
//       ./build/images/Animation/male0163.png
//       ./build/images/Animation/male0164.png
//       ./build/images/Animation/male0165.png
//       ./build/images/Animation/male0166.png
//       ./build/images/Animation/male0167.png
//       ./build/images/Animation/male0168.png
//       ./build/images/Animation/male0169.png
//       ./build/images/Animation/male0170.png
//       ./build/images/Animation/male0171.png
//       ./build/images/Animation/male0172.png
//       ./build/images/Animation/male0173.png
//       ./build/images/Animation/male0174.png
//       ./build/images/Animation/male0175.png
//       ./build/images/Animation/male0176.png
//       ./build/images/Animation/male0177.png
//       ./build/images/Animation/male0178.png
//       ./build/images/Animation/male0179.png
//       ./build/images/Animation/male0180.png
//       ./build/images/Animation/male0181.png
//       ./build/images/Animation/male0182.png
//       ./build/images/Animation/male0183.png
//       ./build/images/Animation/male0184.png
//       ./build/images/Animation/male0185.png
//       ./build/images/Animation/male0186.png
//       ./build/images/Animation/male0187.png
//       ./build/images/Animation/male0188.png
//       ./build/images/Animation/male0189.png
//       ./build/images/Animation/male0190.png
//       ./build/images/Animation/male0191.png
//       ./build/images/Animation/male0192.png
//       ./build/images/Animation/male0193.png
//       ./build/images/Animation/male0194.png
//       ./build/images/Animation/male0195.png
//       ./build/images/Animation/male0196.png
//       ./build/images/Animation/male0197.png
//       ./build/images/Animation/male0198.png
//       ./build/images/Animation/male0199.png
//       ./build/images/Animation/male0200.png
//       ./build/images/Animation/male0201.png
//       ./build/images/Animation/male0202.png
//       ./build/images/Animation/male0203.png
//       ./build/images/Animation/male0204.png
//       ./build/images/Animation/male0205.png
//       ./build/images/Animation/male0206.png
//       ./build/images/Animation/male0207.png
//       ./build/images/Animation/male0208.png
//       ./build/images/Animation/male0209.png
//       ./build/images/Animation/male0210.png
//       ./build/images/Animation/male0211.png
//       ./build/images/Animation/male0212.png
//       ./build/images/Animation/male0213.png
//       ./build/images/Animation/male0214.png
//       ./build/images/Animation/male0215.png
//       ./build/images/Animation/male0216.png
//       ./build/images/Animation/male0217.png
//       ./build/images/Animation/male0218.png
//       ./build/images/Animation/male0219.png
//       ./build/images/Animation/male0220.png
//       ./build/images/Animation/male0221.png
//       ./build/images/Animation/male0222.png
//       ./build/images/Animation/male0223.png
//       ./build/images/Animation/male0224.png
//       ./build/images/Animation/male0225.png
//       ./build/images/Animation/male0226.png
//       ./build/images/Animation/male0227.png
//       ./build/images/Animation/male0228.png
//       ./build/images/Animation/male0229.png
//       ./build/images/Animation/male0230.png
//       ./build/images/Animation/male0231.png
//       ./build/images/Animation/male0232.png
//       ./build/images/Animation/male0233.png
//       ./build/images/Animation/male0234.png
//       ./build/images/Animation/male0235.png
//       ./build/images/Animation/male0236.png
//       ./build/images/Animation/male0237.png
//       ./build/images/Animation/male0238.png
//       ./build/images/Animation/male0239.png
//       ./build/images/Animation/male0240.png
//       ./build/images/Animation/male0241.png
//       ./build/images/Animation/male0242.png
//       ./build/images/Animation/male0243.png
//       ./build/images/Animation/male0244.png
//       ./build/images/Animation/male0245.png
//       ./build/images/Animation/male0246.png
//       ./build/images/Animation/male0247.png
//       ./build/images/Animation/male0248.png
//       ./build/images/Animation/male0249.png
//       ./build/images/Animation/male0250.png
//       ./build/images/Animation/male0251.png
//       ./build/images/Animation/male0252.png
//       ./build/images/Animation/male0253.png
//       ./build/images/Animation/male0254.png
//       ./build/images/Animation/male0255.png
//       ./build/images/Animation/male0256.png
//       ./build/images/Animation/male0257.png
//       ./build/images/Animation/male0258.png
//       ./build/images/Animation/male0259.png
//       ./build/images/Animation/male0260.png
//       ./build/images/Animation/male0261.png
//       ./build/images/Animation/male0262.png
//       ./build/images/Animation/male0263.png
//       ./build/images/Animation/male0264.png
//       ./build/images/Animation/male0265.png
//       ./build/images/Animation/male0266.png
//       ./build/images/Animation/male0267.png
//       ./build/images/Animation/male0268.png
//       ./build/images/Animation/male0269.png
//       ./build/images/Animation/male0270.png
//       ./build/images/Animation/male0271.png
//       ./build/images/Animation/male0272.png
//       ./build/images/Animation/male0273.png
//       ./build/images/Animation/male0274.png
//       ./build/images/Animation/male0275.png
//       ./build/images/Animation/male0276.png
//       ./build/images/Animation/male0277.png
//       ./build/images/Animation/male0278.png
//       ./build/images/Animation/male0279.png
//       ./build/images/Animation/male0280.png
//       ./build/images/Animation/male0281.png
//       ./build/images/Animation/male0282.png
//       ./build/images/Animation/male0283.png
//       ./build/images/Animation/male0284.png
//       ./build/images/Animation/male0285.png
//       ./build/images/Animation/male0286.png
//       ./build/images/Animation/male0287.png
//       ./build/images/Animation/male0288.png
//       ./build/images/Animation/male0289.png
//       ./build/images/Animation/male0290.png
//       ./build/images/Animation/male0291.png
//       ./build/images/Animation/male0292.png
//       ./build/images/Animation/male0293.png
//       ./build/images/Animation/male0294.png
//       ./build/images/Animation/male0295.png
//       ./build/images/Animation/male0296.png
//       ./build/images/Animation/male0297.png
//       ./build/images/Animation/male0298.png
//       ./build/images/Animation/male0299.png
//       ./build/images/Animation/male0300.png
//    `;
//     return data.split("\n")[index];
//   }

//   const frameCount = 300;

//   const images = [];
//   const imageSeq = {
//     frame: 1,
//   };

//   for (let i = 0; i < frameCount; i++) {
//     const img = new Image();
//     img.src = files(i);
//     images.push(img);
//   }

//   gsap.to(imageSeq, {
//     frame: frameCount - 1,
//     snap: "frame",
//     ease: `none`,
//     scrollTrigger: {
//       scrub: 0.15,
//       trigger: `#page>canvas`,
//       start: `top top`,
//       end: `600% top`,
//       scroller: `#main`,
//     },
//     onUpdate: render,
//   });

//   images[1].onload = render;

//   function render() {
//     scaleImage(images[imageSeq.frame], context);
//   }

//   function scaleImage(img, ctx) {
//     var canvas = ctx.canvas;
//     var hRatio = canvas.width / img.width;
//     var vRatio = canvas.height / img.height;
//     var ratio = Math.max(hRatio, vRatio);
//     var centerShift_x = (canvas.width - img.width * ratio) / 2;
//     var centerShift_y = (canvas.height - img.height * ratio) / 2;
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     ctx.drawImage(
//       img,
//       0,
//       0,
//       img.width,
//       img.height,
//       centerShift_x,
//       centerShift_y,
//       img.width * ratio,
//       img.height * ratio
//     );
//   }
//   ScrollTrigger.create({
//     trigger: "#page>canvas",
//     pin: true,
//     // markers:true,
//     scroller: `#main`,
//     start: `top top`,
//     end: `600% top`,
//   });

//   gsap.to("#page1",{
//     scrollTrigger:{
//       trigger:`#page1`,
//       start:`top top`,
//       end:`bottom top`,
//       pin:true,
//       scroller:`#main`
//     }
//   })
//   gsap.to("#page2",{
//     scrollTrigger:{
//       trigger:`#page2`,
//       start:`top top`,
//       end:`bottom top`,
//       pin:true,
//       scroller:`#main`
//     }
//   })
//   gsap.to("#page3",{
//     scrollTrigger:{
//       trigger:`#page3`,
//       start:`top top`,
//       end:`bottom top`,
//       pin:true,
//       scroller:`#main`
//     }
//   })

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
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0001.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0002.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0003.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0004.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0005.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0006.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0007.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0008.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0009.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0010.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0011.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0012.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0013.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0014.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0015.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0016.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0017.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0018.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0019.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0020.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0021.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0022.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0023.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0024.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0025.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0026.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0027.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0028.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0029.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0030.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0031.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0032.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0033.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0034.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0035.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0036.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0037.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0038.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0039.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0040.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0041.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0042.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0043.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0044.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0045.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0046.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0047.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0048.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0049.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0050.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0051.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0052.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0053.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0054.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0055.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0056.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0057.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0058.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0059.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0060.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0061.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0062.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0063.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0064.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0065.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0066.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0067.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0068.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0069.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0070.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0071.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0072.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0073.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0074.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0075.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0076.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0077.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0078.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0079.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0080.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0081.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0082.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0083.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0084.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0085.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0086.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0087.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0088.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0089.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0090.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0091.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0092.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0093.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0094.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0095.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0096.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0097.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0098.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0099.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0100.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0101.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0102.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0103.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0104.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0105.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0106.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0107.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0108.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0109.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0110.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0111.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0112.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0113.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0114.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0115.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0116.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0117.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0118.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0119.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0120.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0121.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0122.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0123.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0124.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0125.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0126.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0127.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0128.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0129.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0130.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0131.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0132.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0133.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0134.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0135.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0136.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0137.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0138.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0139.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0140.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0141.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0142.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0143.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0144.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0145.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0146.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0147.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0148.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0149.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0150.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0151.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0152.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0153.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0154.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0155.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0156.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0157.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0158.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0159.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0160.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0161.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0162.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0163.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0164.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0165.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0166.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0167.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0168.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0169.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0170.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0171.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0172.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0173.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0174.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0175.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0176.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0177.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0178.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0179.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0180.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0181.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0182.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0183.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0184.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0185.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0186.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0187.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0188.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0189.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0190.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0191.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0192.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0193.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0194.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0195.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0196.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0197.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0198.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0199.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0200.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0201.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0202.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0203.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0204.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0205.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0206.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0207.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0208.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0209.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0210.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0211.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0212.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0213.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0214.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0215.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0216.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0217.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0218.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0219.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0220.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0221.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0222.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0223.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0224.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0225.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0226.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0227.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0228.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0229.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0230.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0231.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0232.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0233.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0234.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0235.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0236.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0237.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0238.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0239.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0240.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0241.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0242.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0243.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0244.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0245.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0246.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0247.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0248.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0249.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0250.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0251.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0252.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0253.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0254.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0255.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0256.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0257.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0258.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0259.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0260.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0261.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0262.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0263.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0264.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0265.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0266.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0267.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0268.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0269.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0270.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0271.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0272.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0273.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0274.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0275.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0276.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0277.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0278.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0279.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0280.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0281.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0282.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0283.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0284.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0285.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0286.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0287.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0288.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0289.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0290.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0291.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0292.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0293.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0294.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0295.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0296.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0297.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0298.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0299.png
          .//3D-Portfolio-Akshyansh/build/images/Animation/male0300.png`;
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
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0001.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0002.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0003.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0004.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0005.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0006.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0007.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0008.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0009.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0010.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0011.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0012.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0013.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0014.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0015.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0016.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0017.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0018.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0019.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0020.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0021.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0022.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0023.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0024.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0025.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0026.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0027.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0028.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0029.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0030.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0031.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0032.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0033.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0034.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0035.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0036.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0037.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0038.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0039.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0040.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0041.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0042.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0043.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0044.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0045.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0046.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0047.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0048.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0049.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0050.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0051.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0052.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0053.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0054.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0055.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0056.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0057.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0058.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0059.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0060.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0061.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0062.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0063.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0064.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0065.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0066.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0067.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0068.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0069.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0070.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0071.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0072.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0073.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0074.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0075.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0076.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0077.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0078.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0079.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0080.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0081.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0082.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0083.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0084.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0085.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0086.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0087.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0088.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0089.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0090.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0091.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0092.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0093.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0094.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0095.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0096.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0097.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0098.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0099.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0100.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0101.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0102.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0103.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0104.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0105.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0106.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0107.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0108.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0109.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0110.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0111.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0112.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0113.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0114.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0115.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0116.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0117.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0118.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0119.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0120.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0121.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0122.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0123.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0124.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0125.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0126.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0127.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0128.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0129.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0130.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0131.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0132.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0133.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0134.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0135.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0136.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0137.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0138.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0139.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0140.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0141.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0142.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0143.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0144.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0145.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0146.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0147.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0148.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0149.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0150.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0151.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0152.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0153.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0154.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0155.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0156.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0157.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0158.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0159.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0160.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0161.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0162.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0163.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0164.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0165.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0166.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0167.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0168.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0169.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0170.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0171.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0172.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0173.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0174.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0175.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0176.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0177.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0178.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0179.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0180.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0181.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0182.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0183.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0184.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0185.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0186.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0187.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0188.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0189.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0190.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0191.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0192.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0193.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0194.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0195.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0196.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0197.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0198.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0199.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0200.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0201.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0202.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0203.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0204.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0205.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0206.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0207.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0208.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0209.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0210.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0211.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0212.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0213.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0214.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0215.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0216.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0217.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0218.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0219.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0220.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0221.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0222.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0223.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0224.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0225.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0226.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0227.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0228.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0229.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0230.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0231.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0232.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0233.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0234.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0235.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0236.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0237.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0238.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0239.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0240.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0241.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0242.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0243.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0244.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0245.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0246.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0247.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0248.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0249.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0250.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0251.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0252.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0253.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0254.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0255.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0256.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0257.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0258.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0259.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0260.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0261.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0262.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0263.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0264.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0265.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0266.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0267.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0268.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0269.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0270.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0271.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0272.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0273.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0274.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0275.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0276.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0277.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0278.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0279.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0280.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0281.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0282.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0283.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0284.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0285.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0286.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0287.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0288.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0289.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0290.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0291.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0292.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0293.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0294.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0295.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0296.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0297.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0298.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0299.png
//       .//3D-Portfolio-Akshyansh/build/images/Animation/male0300.png
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

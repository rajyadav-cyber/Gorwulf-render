function locomotive() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true ,
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

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  render();
});

function files(index) {
  var data = `
     ./0.png
     ./1.png
     ./2.png
     ./3.png
     ./4.png
     ./5.png
     ./6.png
     ./7.png
     ./8.png
     ./9.png
     ./10.png
     ./11.png
     ./12.png
     ./13.png
     ./14.png
     ./15.png
     ./16.png
     ./17.png
     ./18.png
     ./19.png
     ./20.png
     ./21.png
     ./22.png
     ./23.png
     ./24.png
     ./25.png
     ./26.png
     ./27.png
     ./28.png
     ./29.png
     ./30.png
     ./31.png
     ./32.png
     ./33.png
     ./34.png
     ./35.png
     ./36.png
     ./37.png
     ./38.png
     ./39.png
     ./40.png
     ./41.png
     ./42.png
     ./43.png
     ./44.png
     ./45.png
     ./46.png
     ./47.png
     ./48.png
     ./49.png
     ./50.png
     ./51.png
     ./52.png
     ./53.png
     ./54.png
     ./55.png
     ./56.png
     ./57.png
     ./58.png
     ./59.png
     ./60.png
     ./61.png
     ./62.png
     ./63.png
     ./64.png
     ./65.png
     ./66.png
     ./67.png
     ./68.png
     ./69.png
     ./70.png
     ./71.png
     ./72.png
     ./73.png
     ./74.png
     ./75.png
     ./76.png
     ./77.png
     ./78.png
     ./79.png
     ./80.png
     ./81.png
     ./82.png
     ./83.png
     ./84.png
     ./85.png
     ./86.png
     ./87.png
     ./88.png
     ./89.png
     ./90.png
     ./91.png
     ./92.png
     ./93.png
     ./94.png
     ./95.png
     ./96.png
     ./97.png
     ./98.png
     ./99.png
     ./100.png
     ./101.png
     ./102.png
     ./103.png
     ./104.png
     ./105.png
     ./106.png
     ./107.png
     ./108.png
     ./109.png
     ./110.png
     ./111.png
     ./112.png
     ./113.png
     ./114.png
     ./115.png
     ./116.png
     ./117.png
     ./118.png
     ./119.png
     ./120.png
     ./121.png
     ./122.png
     ./123.png
     ./124.png
     ./125.png
     ./126.png
     ./127.png
     ./128.png
     ./129.png
     ./130.png
     ./131.png
     ./132.png
     ./133.png
     ./134.png
     ./135.png
     ./136.png
     ./137.png
     ./138.png
     ./139.png
     ./140.png
     ./141.png
     ./142.png
     ./143.png
     ./144.png
     ./145.png
     ./146.png
     ./147.png
     ./148.png
     ./149.png
     ./150.png
     ./151.png
     ./152.png
     ./153.png
     ./154.png
     ./155.png
     ./156.png
     ./157.png
     ./158.png
     ./159.png
     ./160.png
     ./161.png
     ./162.png
     ./163.png
     ./164.png
     ./165.png
     ./166.png
     ./167.png
     ./168.png
     ./169.png
     ./170.png
     ./171.png
     ./172.png
     ./173.png
     ./174.png
     ./175.png
     ./176.png
     ./177.png
     ./178.png
     ./179.png
     ./180.png
     ./181.png
     ./182.png
     ./183.png
     ./184.png
     ./185.png
     ./186.png
     ./187.png
     ./188.png
     ./189.png
     ./190.png
     ./191.png
     ./192.png
     ./193.png
     ./194.png
     ./195.png
     ./196.png
     ./197.png
     ./198.png
     ./199.png
     ./200.png
     ./201.png
     ./202.png
     ./203.png
     ./204.png
     ./205.png
     ./206.png
     ./207.png
     ./208.png
     ./209.png
     ./210.png
     ./211.png
     ./212.png
     ./213.png
     ./214.png
     ./215.png
     ./216.png
     ./217.png
     ./218.png
     ./219.png
     ./220.png
     ./221.png
     ./222.png
     ./223.png
     ./224.png
     ./225.png
     ./226.png
     ./227.png
     ./228.png
     ./229.png
     ./230.png
     ./231.png
     ./232.png
     ./233.png
     ./234.png
     ./235.png
     ./236.png
     ./237.png
     ./238.png
     ./239.png
     ./240.png
     ./241.png
     ./242.png
     ./243.png
     ./244.png
     ./245.png
     ./246.png
     ./247.png
     ./248.png
     ./249.png
     ./250.png
     ./251.png
     ./252.png
     ./253.png
     ./254.png
     ./255.png
     ./256.png
     ./257.png
     ./258.png
     ./259.png
     ./260.png
     ./261.png
     ./262.png
     ./263.png
     ./264.png
     ./265.png
     ./266.png
     ./267.png
     ./268.png
     ./269.png
     ./270.png
     ./271.png
     ./272.png
     ./273.png
     ./274.png
     ./275.png
     ./276.png
     ./277.png
     ./278.png
     ./279.png
     ./280.png
     ./281.png
     ./282.png
     ./283.png
     ./284.png
     ./285.png
     ./286.png
     ./287.png
     ./288.png
     ./289.png
     ./290.png
     ./291.png
     ./292.png
     ./293.png
     ./294.png
     ./295.png
     ./296.png
     ./297.png
     ./298.png
     ./299.png
     ./300.png
     ./301.png
     ./302.png
     ./303.png
     ./304.png
     ./305.png
     ./306.png
     ./307.png
     ./308.png
     ./309.png
     ./310.png
     ./311.png
     ./312.png
     ./313.png
     ./314.png
     ./315.png
     ./316.png
     ./317.png
     ./318.png
     ./319.png
     ./320.png
     ./321.png
     ./322.png
     ./323.png
     ./324.png
     ./325.png
     ./326.png
     ./327.png
     ./328.png
     ./329.png
     ./330.png
     ./331.png
     ./332.png
     ./333.png
     ./334.png
     ./335.png
     ./336.png
     ./337.png
     ./338.png
     ./339.png
     ./340.png
     ./341.png
     ./342.png
     ./343.png
     ./344.png
     ./345.png
     ./346.png
     ./347.png
     ./348.png
     ./349.png
     ./350.png
     ./351.png
     ./352.png
     ./353.png
     ./354.png
     ./355.png
     ./356.png
     ./357.png
     ./358.png
     ./359.png
 `;
  return data.split("\n")[index];
}

const frameCount = 360;

const images = [];
const imageSeq = {
  frame: 1,
};

for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = files(i);
  images.push(img);
}

gsap.to(imageSeq, {
  frame: frameCount - 1,
  snap: "frame",
  ease: `none`,
  scrollTrigger: {
    scrub: 0.15,
    trigger: `#page>canvas`,
    start: `top top`,
    end: `600% top`,
    scroller: `#main`,
  },
  onUpdate: render,
});

images[1].onload = render;

function render() {
  scaleImage(images[imageSeq.frame], context);
}

function scaleImage(img, ctx) {
  var canvas = ctx.canvas;
  var hRatio = canvas.width / img.width;
  var vRatio = canvas.height / img.height;
  var ratio = Math.max(hRatio, vRatio);
  var centerShift_x = (canvas.width - img.width * ratio) / 2;
  var centerShift_y = (canvas.height - img.height * ratio) / 2;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
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
  );
}
ScrollTrigger.create({
  trigger: "#page>canvas",
  pin: true,
  // markers:true,
  scroller: `#main`,
  start: `top top`,
  end: `600% top`,
});



gsap.to("#page1",{
  scrollTrigger:{
    trigger:`#page1`,
    start:`top top`,
    end:`bottom top`,
    pin:true,
    scroller:`#main`
  }
})
gsap.to("#page2",{
  scrollTrigger:{
    trigger:`#page2`,
    start:`top top`,
    end:`bottom top`,
    pin:true,
    scroller:`#main`
  }
})
gsap.to("#page3",{
  scrollTrigger:{
    trigger:`#page3`,
    start:`top top`,
    end:`bottom top`,
    pin:true,
    scroller:`#main`
  }
})
import avtbanner from "../src/img/avt-removebg-preview.png";

const banner = () => {
  return `
  <div id="home" class="banner-color container-fluid">
 
  
  <div class="banner-clippath">
      <section class="container-fluid">
      <svg class="waves" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 600" preserveAspectRatio="none">
      <path d="M0 524L30 520.3C60 516.7 120 509.3 180 517.5C240 525.7 300 549.3 360 562.2C420 575 480 577 540 571.7C600 566.3 660 553.7 720 542C780 530.3 840 519.7 870 514.3L900 509L900 601L870 601C840 601 780 601 720 601C660 601 600 601 540 601C480 601 420 601 360 601C300 601 240 601 180 601C120 601 60 601 30 601L0 601Z" fill="#20272f" stroke-linecap="round" stroke-linejoin="miter"></path>
</svg>
      </section>
      <div class="decor-banner container-fluid">
          <div class="row">
            <div class="col-md-7 text-color"  data-aos="zoom-in">
                <div class="">
                  <h3>Hello, I'm  a</h3>
                <h1 data-text="DEVELOPER . . .">DEVELOPER . . . </h1>
                <p>Hi. I'm Ngoc Son, a passionate Developer based in the VietNam. Wellcome to my portfolio.</p>
                <p class="text-center">  <a href="/#about"><button class="btn-view-banner">View Portfolio</button></a></p>
                </div>
            </div>

            <div class="col-md-5 img-banner"  data-aos="fade-dơwn">
               <img width="96%" src=${avtbanner} alt="">
            </div>
          <div class="item-decor" >
              <i class='bx bxl-html5 img1' style='color:#cfcfcf'  ></i>
              <i class='bx bx-circle img2' style='color:#cfcfcf' ></i>
              <i class='bx bxs-file-json img3' style='color:#cfcfcf' ></i>
              <i class='bx bxl-css3 img4' style='color:#cfcfcf' ></i>
              <i class='bx bxl-tailwind-css img5' style='color:#cfcfcf' ></i>
              <i class='bx bx-shape-triangle img6' style='color:#cfcfcf' ></i>
              <i class='bx bx-shape-square img7' style='color:#cfcfcf' ></i>
              <i class='bx bxl-visual-studio img8' style='color:#cfcfcf'></i>
             
          </div>
      </div>
  </div>
</div>




<div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-root-margin="0px 0px -40%" data-bs-smooth-scroll="true" class="scrollspy-example bg-body-tertiary p-3 rounded-2" tabindex="0">

  `;
};

export default banner;

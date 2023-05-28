import Header from "../components/Header";
import aboutImg from "../src/img/about.jpg";
const AboutPage = () => {
  return `
    <div id="about" class="aboutMe container-fluid" ">
            

    <div class="aboutme-item container">
        <div class="row">
            
            <div class="col-md-5 img-aboutMe" data-aos="fade-up" >
                <img width="96%" src=${aboutImg} alt="">
                <div class="item-img-about item-ab1 text-center">
                    <h4>20+</h4>
                    <p>Projects Web</p>
                </div>
                <div class="item-img-about item-ab2 text-center">
                    <h4>12+</h4>    
                    months experience                            </div>
                <div class="item-img-about item-ab3 text-center">
                    <h4>8+</h4>
                    <p>Realistic projects</p>
                </div>
            </div>
            <div class="col-md-7 right-about" data-aos="fade-down">
                <h3>About Me</h3>
                <h5>A story of hardwork and perseverance </h5>
                <p>Hello, I am a web developer. My job is to create websites and web applications to solve my clients' problems. I am passionate about programming and always try to learn new technologies to improve my development skills. If you are looking for an experienced and passionate web developer, I would be the right person to help you with your projects.</p>
                <h5>Information</h5>
                <p>School :FPT POLYTECHNIC</p>
                <p>Website: ngocson.vercel.app</p>
                
                <p>Email : sondepdai03@gmail.com</p>
                <p>Phone: 0988888888</p>
                <p>Add: Nam Tân, Nam Sách, Hải Dương</p>
                <a target="_blank"  href="#"><button class="btn btn-secondary m-3">My Infor</button></a>
                <a target="_blank" href="#"><button class="btn btn-success">Download CV</button></a>
            </div>
        </div>
    </div>

</div>
    `;
};
export default AboutPage;

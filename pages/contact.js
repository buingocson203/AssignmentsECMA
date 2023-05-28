import Header from "../components/Header";

const ContactPage = () => {
  return `
    <div class="bg-contact container-fluid" id="contact" data-aos="zoom-in">
      <div class="clipath-contact">
            <section>
                <svg class="waves-contact" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 320">
                        <path
                        d="M0 74L30 77.7C60 81.3 120 88.7 180 80.5C240 72.3 300 48.7 360 35.8C420 23 480 21 540 26.3C600 31.7 660 44.3 720 56C780 67.7 840 78.3 870 83.7L900 89L900 0L870 0C840 0 780 0 720 0C660 0 600 0 540 0C480 0 420 0 360 0C300 0 240 0 180 0C120 0 60 0 30 0L0 0Z"
                        fill="#171c22" stroke-linecap="round" stroke-linejoin="miter"></path>
                </svg>
            </section>
        <div class="container">
            <p class="text-center p-contact">connect to me</p>
            <h2 class="text-center h3-contact">Contact</h2>
        <div class="row row-contact">
            <div class="col-md-6 contact-left ">

                <h4>Drop me a line.</h4>
                <form>
                <table>
                    <tr>
                        <th>Your Name:</th>
                        <td><input required type="text" placeholder="Enter Your Name..."></td>

                    </tr>
                    <tr>
                        <th>Your Email:</th>
                        <td><input required type="email" placeholder="Enter Your Email..."></td>
                        
                    </tr>
                    <tr>
                        <th>Your Phone:</th>
                        <td><input required type="text" placeholder="Enter Your Phone..."></td>
                        
                    </tr>
                    <tr>
                        <th>Your Message:</th>
                       <td><textarea name="" id="" placeholder="Can I help you.. ?"></textarea></td>                            
                    </tr>
                    <tr>
                      <td colspan="2">
                        <button class="btn btn-contact" type="submit">
                         <p>   SEND<i class='bx bx-right-arrow-alt i1' ></i> MESSAGE <i class='bx bx-right-arrow-alt i2' ></i>   </p>                          
                        </button>
                      </td>
                    </tr>
                </table>
                </form>
            </div>
        
            <div class="col-md-6">
                <div class="item-bg-contact">
                    <div class="item-info-contact">
                   <p><i class='bx bxs-map'></i></p>
                        <p>Nam Tân, Nam Sách, Hải Dương</p>
                    </div>
                    <div class="item-info-contact">
                      <p>  <i class='bx bxs-phone' ></i></p>
                        <p>0988888888</p>
                    </div>
                    <div class="item-info-contact">
                       <p> <i class='bx bxl-gmail' ></i></p>
                        <p>sondepdai03@gmail.com</p>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </div>
  </div>
    
    `;
};
export default ContactPage;

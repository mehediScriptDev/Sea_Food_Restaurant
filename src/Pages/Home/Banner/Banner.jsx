import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import img1 from '../../../../assets/home/01.jpg'
import img2 from '../../../../assets/home/02.jpg'
import img3 from '../../../../assets/home/03.png'

const Banner = () => {
    return (
        <div>
            <Carousel 
                autoPlay
                infiniteLoop
                showStatus={false}
                showThumbs={false}
                interval={3000}
            >
                <div>
                    <img src={img1} className="w-full h-auto md:h-[500px] lg:h-[700px] object-cover" alt="Slide 1" />
                </div>
                <div>
                    <img src={img2} className="w-full h-auto md:h-[500px] lg:h-[700px] object-cover" alt="Slide 2" />
                </div>
                <div>
                    <img src={img3} className="w-full h-auto md:h-[500px] lg:h-[700px] object-cover" alt="Slide 3" />
                </div>
            </Carousel>
        </div>
    );
};

export default Banner;
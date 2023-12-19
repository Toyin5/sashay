import "./Hero.css"
import { ProductCarousel } from "../data"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
function Hero() {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 4000,
        autoplaySpeed: 2000,
        cssEase: "linear"
    };
    return (
        <div className="Hero_Main">
            <div className="Hero_Main_Wrap">
                <div className="Hero_Main_Left">
                    <h3>25% OFF</h3>
                    <p>all new arrivals</p>
                    <span>
                        <img src="./Ellipse 5.svg" alt="" />
                        <img src="./Ellipse 6.svg" alt="" />
                        <img src="./Ellipse7.svg" alt="" />
                    </span>
                    <button>SHOP NOW</button>
                </div>
                <div className="Hero_Main_Middle">
                    <Slider {...settings} className="Hero_Slider" >
                        {ProductCarousel.map((i: any) => (
                            <div key={i.id} className="Hero_Product_Carousel">
                                <div className="Hero_Product_Img">
                                    <img src={i.img} alt='' />
                                </div>
                                <div className="Hero_Product_Price">
                                    <p style={{ fontSize: '20px' }}>${i.currentPrice}</p>
                                    <p style={{ color: "grey", textDecoration: 'line-through' }}>${i.originalPrice}</p>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
                <div className="Hero_Main_Right">
                    <img src="./Group 11.svg" alt="" />
                    <p>"Fashion is the most powerful art there is. It's
                        movement, design, and architecture all in one.
                        It shows the world who we are and who we’d like to be."
                    </p>
                    <button>Read more</button>
                </div>
            </div>
            <div className="Hero_Call_TOAction">
                <h2>INSPIRED BY A ELEGANCE</h2>
            </div>
        </div>
    )
}

export default Hero
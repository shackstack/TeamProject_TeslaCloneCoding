import {ShopMainCarouselContainer, SwiperOverlay} from "./styles";
import {Autoplay, Pagination, Scrollbar} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const ShopMainCarousel = () => {
    return <ShopMainCarouselContainer>
        <Swiper
            autoplay={{
                delay: 2500,
                disableOnInteraction: false
            }}
            pagination={{
                clickable: true
            }}
            modules={[Autoplay, Pagination, Scrollbar]}
            scrollbar={{draggable: true}}
        >
            <SwiperSlide>
                <img src="/assets/Carousel/Carousel0.png" alt="Carousel"/>
                <SwiperOverlay>
                    <h2>월 커넥터</h2>
                    <p>집에서 충전하는 가장 빠른 방법</p>
                    <button>지금 쇼핑하기</button>
                </SwiperOverlay>
            </SwiperSlide>
            <SwiperSlide>
                <img src="/assets/Carousel/Carousel1.png" alt="Carousel"/>
                <SwiperOverlay>
                    <h2>Model Y 사계절 인테리어 매트</h2>
                    <p>사계절 깨끗한 실내</p>
                    <button>지금 쇼핑하기</button>
                </SwiperOverlay>
            </SwiperSlide>
        </Swiper>
    </ShopMainCarouselContainer>
}

export default ShopMainCarousel;
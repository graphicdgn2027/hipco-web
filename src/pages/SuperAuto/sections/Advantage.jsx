import { Carousel, CarouselItem } from '@/components/ui/Carousel';

export default function Advantage() {
  return (
    <div className="w-layout-blockcontainer base-container-padding-flex-gap w-container">
      <div className="carousel-header">
        <h2 className="heading-2">
          The Montra Electric<span className="text-span"> Advantage</span>
          <br />
        </h2>
        <p className="paragraph-2">
          You keep the cities mobile. You connect lives, serving the passengers day in and day out giving comfortable
          rides to them. You are always there, in the hour of need to their offices, to their schools, or be the fun of
          our shopping. And that’s why we Respect You. Montra Electric SUPER AUTO is made for YOU, with Respect. For
          your own SUPER Journey of Life.&nbsp;
        </p>
      </div>
      <div className="advantage-container">
        <div className="w-layout-grid grid">
          <div className="card1">
            <div className="card-short">
              <div className="info-card-icon">
                <img src="/images/6cbb3bb75892.png" loading="lazy" alt="" />
              </div>
              <div className="info-card-content">
                <h3 className="heading-6">MEHNAT Ke Liye IZZAT</h3>
                <p className="paragraph-7">
                  Through Spacious Car like Comfort Driver Seat and Car like design, we respect your hard work. Because
                  this is your Office.
                </p>
              </div>
            </div>
            <img className="image-202" src="/images/aa930a2ae302.png" loading="lazy" alt="" />
          </div>
          <div className="card2">
            <img className="image-203" src="/images/981e7106b349.png" loading="lazy" alt="" />
            <div className="div-block-9">
              <div className="div-block-10">
                <img src="/images/b71546fa5ecb.png" loading="lazy" alt="" />
              </div>
              <div className="div-block-11">
                <h3 className="heading-7">KAMAAI Ke Liye IZZAT</h3>
                <p className="paragraph-7">
                  We Respect your Earnings. Through 160 km True Range and Spacious Passenger Seating, we enable you to
                  pick more passengers, do more trips and earn more income.
                </p>
              </div>
            </div>
          </div>
          <div className="card3">
            <div className="div-block-12">
              <div className="div-block-13">
                <img src="/images/e90470165291.png" loading="lazy" alt="" />
              </div>
              <div className="div-block-14">
                <h3 className="heading-8">SAPNON Ke Liye IZZAT</h3>
                <p className="paragraph-7">
                  We Respect Your Dreams. Choosing Super Auto allows you to save almost a Lac of Rupees yearly and
                  realise your dreams. Industry best Warranty and Superior Service support ensures there is never a
                  brake in chasing your dreams.
                </p>
              </div>
            </div>
            <img className="image-204" src="/images/5bf557bfdd04.png" loading="lazy" alt="" />
          </div>
        </div>
        <Carousel variant="slider" className="hide-no-desktop">
          <CarouselItem>
            <div className="card1">
              <div className="card-short">
                <div className="info-card-icon">
                  <img src="/images/6cbb3bb75892.png" loading="lazy" alt="" />
                </div>
                <div className="info-card-content">
                  <h3 className="heading-6">MEHNAT Ke Liye IZZAT</h3>
                  <p className="paragraph-7">
                    Through Spacious Car like Comfort Driver Seat and Car like design, we respect your hard work.
                    Because this is your Office.
                  </p>
                </div>
              </div>
              <img src="/images/aa930a2ae302.png" loading="lazy" alt="" />
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="card2">
              <img src="/images/981e7106b349.png" loading="lazy" alt="" />
              <div className="div-block-9">
                <div className="div-block-10">
                  <img src="/images/b71546fa5ecb.png" loading="lazy" alt="" />
                </div>
                <div className="div-block-11">
                  <h3 className="heading-7">KAMAAI Ke Liye IZZAT</h3>
                  <p className="paragraph-7">
                    We Respect your Earnings. Through 160 km True Range and Spacious Passenger Seating, we enable you to
                    pick more passengers, do more trips and earn more income.
                  </p>
                </div>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="card3">
              <div className="div-block-12">
                <div className="div-block-13">
                  <img src="/images/e90470165291.png" loading="lazy" alt="" />
                </div>
                <div className="div-block-14">
                  <h3 className="heading-8">SAPNON Ke Liye IZZAT</h3>
                  <p className="paragraph-7">
                    We Respect Your Dreams. Choosing Super Auto allows you to save almost a Lac of Rupees yearly and
                    realise your dreams. Industry best Warranty and Superior Service support ensures there is never a
                    brake in chasing your dreams.
                  </p>
                </div>
              </div>
              <div className="div-block-15">
                <img src="/images/5bf557bfdd04.png" loading="lazy" alt="" />
              </div>
            </div>
          </CarouselItem>
        </Carousel>
      </div>
    </div>
  );
}

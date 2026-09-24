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
          Every Montra Electric EVIATOR is built on a foundation of innovation, safety, and reliability—engineered to
          power your business every day.
          <br />
        </p>
      </div>
      <div className="advantage-container">
        <div className="w-layout-grid grid">
          <div className="card1">
            <div className="card-short">
              <div className="info-card-icon">
                <img src="/images/c76887b2e748.png" loading="lazy" alt="" />
              </div>
              <div className="info-card-content">
                <h3 className="heading-6">Advanced Telematics &amp; Uptime</h3>
                <p className="paragraph-7">
                  Integrated telematics enable 95 %+ fleet uptime with real-time tracking and proactive support.
                </p>
              </div>
            </div>
            <img className="image-202" src="/images/97ea575be275.png" loading="lazy" alt="" />
          </div>
          <div className="card2">
            <img className="image-203" src="/images/ed7bf4edd79d.png" loading="lazy" alt="" />
            <div className="div-block-9">
              <div className="div-block-10">
                <img src="/images/f4632a7561cf.png" loading="lazy" alt="" />
              </div>
              <div className="div-block-11">
                <h3 className="heading-7">Robust Warranty</h3>
                <p className="paragraph-7">
                  Comes with a standard 5-year/1.75 L km warranty and extended up to 7 years/2.5 L km for added peace of
                  mind.
                </p>
              </div>
            </div>
          </div>
          <div className="card3">
            <div className="div-block-12">
              <div className="div-block-13">
                <img src="/images/2e735bb07ec9.png" loading="lazy" alt="" />
              </div>
              <div className="div-block-14">
                <h3 className="heading-8">Fast &amp; Flexible Charging</h3>
                <p className="paragraph-7">
                  Support for CCS2 fast charging and flexible charging options helps reduce downtime.
                </p>
              </div>
            </div>
            <img className="image-204" src="/images/46407c90159c.png" loading="lazy" alt="" />
          </div>
        </div>
        <Carousel variant="slider" className="hide-no-desktop">
          <CarouselItem>
            <div className="card1">
              <div className="card-short">
                <div className="info-card-icon">
                  <img src="/images/c76887b2e748.png" loading="lazy" alt="" />
                </div>
                <div className="info-card-content">
                  <h3 className="heading-6">Advanced Telematics &amp; Uptime</h3>
                  <p className="paragraph-7">
                    Integrated telematics enable 95 %+ fleet uptime with real-time tracking and proactive support.
                  </p>
                </div>
              </div>
              <img src="/images/97ea575be275.png" loading="lazy" alt="" />
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="card2">
              <img src="/images/ed7bf4edd79d.png" loading="lazy" alt="" />
              <div className="div-block-9">
                <div className="div-block-10">
                  <img src="/images/f4632a7561cf.png" loading="lazy" alt="" />
                </div>
                <div className="div-block-11">
                  <h3 className="heading-7">Robust Warranty</h3>
                  <p className="paragraph-7">
                    Comes with a standard 5-year/1.75 L km warranty and extended up to 7 years/2.5 L km for added peace
                    of mind.
                  </p>
                </div>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="card3">
              <div className="div-block-12">
                <div className="div-block-13">
                  <img src="/images/2e735bb07ec9.png" loading="lazy" alt="" />
                </div>
                <div className="div-block-14">
                  <h3 className="heading-8">Fast &amp; Flexible Charging</h3>
                  <p className="paragraph-7">
                    Support for CCS2 fast charging and flexible charging options helps reduce downtime.
                  </p>
                </div>
              </div>
              <div className="div-block-15">
                <img src="/images/46407c90159c.png" loading="lazy" alt="" />
              </div>
            </div>
          </CarouselItem>
        </Carousel>
      </div>
    </div>
  );
}

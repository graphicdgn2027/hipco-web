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
          Every Montra Electric vehicle is built on a foundation of innovation, safety, and reliability.
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
                <h3 className="heading-6">Tough Build</h3>
                <p className="paragraph-7">Made to handle rough roads.</p>
              </div>
            </div>
            <img className="image-202" src="/images/1507a9831bb2.png" loading="lazy" alt="" />
          </div>
          <div className="card2">
            <img className="image-203" src="/images/bfe671c54d5b.webp" loading="lazy" alt="" />
            <div className="div-block-9">
              <div className="div-block-10">
                <img src="/images/b71546fa5ecb.png" loading="lazy" alt="" />
              </div>
              <div className="div-block-11">
                <h3 className="heading-7">Comfort Cabin</h3>
                <p className="paragraph-7">Made to handle rough roads.</p>
              </div>
            </div>
          </div>
          <div className="card3">
            <div className="div-block-12">
              <div className="div-block-13">
                <img src="/images/e90470165291.png" loading="lazy" alt="" />
              </div>
              <div className="div-block-14">
                <h3 className="heading-8">Efficient Drive</h3>
                <p className="paragraph-7">Made to handle rough roads.</p>
              </div>
            </div>
            <img className="image-204" src="/images/1affbb3da8de.webp" loading="lazy" alt="" />
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
                  <h3 className="heading-6">Tough Build</h3>
                  <p className="paragraph-7">Made to handle rough roads.</p>
                </div>
              </div>
              <img src="/images/1507a9831bb2.png" loading="lazy" alt="" />
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="card2">
              <img src="/images/bfe671c54d5b.webp" loading="lazy" alt="" />
              <div className="div-block-9">
                <div className="div-block-10">
                  <img src="/images/b71546fa5ecb.png" loading="lazy" alt="" />
                </div>
                <div className="div-block-11">
                  <h3 className="heading-7">Comfort Cabin</h3>
                  <p className="paragraph-7">Made to handle rough roads.</p>
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
                  <h3 className="heading-8">Efficient Drive</h3>
                  <p className="paragraph-7">Made to handle rough roads.</p>
                </div>
              </div>
              <div className="div-block-15">
                <img src="/images/1affbb3da8de.webp" loading="lazy" alt="" />
              </div>
            </div>
          </CarouselItem>
        </Carousel>
      </div>
    </div>
  );
}

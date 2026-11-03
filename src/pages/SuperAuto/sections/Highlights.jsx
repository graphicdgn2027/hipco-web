import { Carousel, CarouselItem } from '@/components/ui/Carousel';

export default function Highlights() {
  return (
    <div className="base-container-padding-flex-gap-copy page-grid page-section">
      <div className="div-block-389">
        <div className="carousel-header">
          <h2 className="heading-2">
            SUPER Powers <span className="text-span">your day</span>
          </h2>
          <p className="paragraph-2">
            Drive ahead with Montra Electric SUPER AUTO with Super Features for uncompromised Quality of Life.
          </p>
        </div>
      </div>
      <Carousel variant="slider">
        <CarouselItem>
          <div className="slot">
            <div className="card">
              <img
                className="image-32"
                src="/super-auto/SUPER Powers your day/space-and-comfort.png"
                loading="lazy"
                width="Auto"
                height="Auto"
                alt="Space & Comfort"
                style={{ borderRadius: '10px' }}
              />
              <div className="div-block-415">
                <h3 className="text-block-67">Space &amp; Comfort</h3>
                <div className="text-block-68">
                  Best in Class Car like Space for the Driver and Passengers. Boot space is so big, it makes SUPER AUTO
                  a perfect choice for Urban commute.
                  <br />
                </div>
              </div>
            </div>
          </div>
          <img
            className="image-181"
            src="https://cdn.prod.website-files.com/plugins/Basic/assets/placeholder.60f9b1840c.svg"
            loading="lazy"
            alt=""
          />
        </CarouselItem>
        <CarouselItem>
          <div className="slot">
            <div className="card">
              <img
                className="image-32"
                src="/super-auto/SUPER Powers your day/unique-design.png"
                loading="lazy"
                width="Auto"
                height="Auto"
                alt="Unique Design"
                style={{ borderRadius: '10px' }}
              />
              <div className="div-block-415">
                <h3 className="text-block-67">Unique Design</h3>
                <div className="text-block-68">
                  A truly aerodynamic, award winning aspirational design that redefined the category.
                  <br />
                </div>
              </div>
            </div>
          </div>
          <img
            className="image-181"
            src="https://cdn.prod.website-files.com/plugins/Basic/assets/placeholder.60f9b1840c.svg"
            loading="lazy"
            alt=""
          />
        </CarouselItem>
        <CarouselItem>
          <div className="slot">
            <div className="card">
              <img
                className="image-32"
                src="/super-auto/SUPER Powers your day/performance.png"
                loading="lazy"
                width="Auto"
                height="Auto"
                alt="Performance"
                style={{ borderRadius: '10px' }}
              />
              <div className="div-block-415">
                <h3 className="text-block-67">Performance</h3>
                <div className="text-block-68">
                  With reliable <strong>True Range of 150* km</strong> and <strong>60 Nm Peak Torque</strong>, no more
                  compromise on where you go and how far you go.
                </div>
              </div>
            </div>
          </div>
          <img
            className="image-181"
            src="https://cdn.prod.website-files.com/plugins/Basic/assets/placeholder.60f9b1840c.svg"
            loading="lazy"
            alt=""
          />
        </CarouselItem>
        <CarouselItem>
          <div className="slot">
            <div className="card">
              <img
                className="image-32"
                src="/super-auto/SUPER Powers your day/earnings.png"
                loading="lazy"
                width="Auto"
                height="Auto"
                alt="Earnings"
                style={{ borderRadius: '10px' }}
              />
              <div className="div-block-415">
                <h3 className="text-block-67">Earnings</h3>
                <div className="text-block-68">
                  At only 65 paisa* per km running cost and very low maintenance, Super Auto is an unbeatable choice to
                  grow your earnings.
                </div>
              </div>
            </div>
          </div>
          <img
            className="image-181"
            src="https://cdn.prod.website-files.com/plugins/Basic/assets/placeholder.60f9b1840c.svg"
            loading="lazy"
            alt=""
          />
        </CarouselItem>
      </Carousel>
    </div>
  );
}

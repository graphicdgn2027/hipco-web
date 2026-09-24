import { Carousel, CarouselItem } from '@/components/ui/Carousel';

export default function Highlights() {
  return (
    <div className="base-container-padding-flex-gap-copy">
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
                src="/images/7ce13781a7ab.png"
                loading="lazy"
                width="Auto"
                height="Auto"
                alt=""
                sizes="(max-width: 767px) 100vw, (max-width: 991px) 728px, 940px"
                srcSet="https://cdn.prod.website-files.com/6938169ca88035d1476d6905/69ddd4f3209c8df5e166e135_Frame%20265%20(4)-p-500.png 500w, https://cdn.prod.website-files.com/6938169ca88035d1476d6905/69ddd4f3209c8df5e166e135_Frame%20265%20(4).png 628w"
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
                src="/images/fc7217a17b5a.png"
                loading="lazy"
                width="Auto"
                height="Auto"
                alt=""
                sizes="(max-width: 767px) 100vw, (max-width: 991px) 728px, 940px"
                srcSet="https://cdn.prod.website-files.com/6938169ca88035d1476d6905/69ddd4f35d3ee52bd9faf4fc_Frame%20265%20(5)-p-500.png 500w, https://cdn.prod.website-files.com/6938169ca88035d1476d6905/69ddd4f35d3ee52bd9faf4fc_Frame%20265%20(5).png 628w"
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
                src="/images/963e7b93e2df.png"
                loading="lazy"
                width="Auto"
                height="Auto"
                alt=""
                sizes="(max-width: 767px) 100vw, (max-width: 991px) 728px, 940px"
                srcSet="https://cdn.prod.website-files.com/6938169ca88035d1476d6905/69ddd4f336c0d1006ec9ed23_Frame%20265%20(2)-p-500.png 500w, https://cdn.prod.website-files.com/6938169ca88035d1476d6905/69ddd4f336c0d1006ec9ed23_Frame%20265%20(2).png 628w"
              />
              <div className="div-block-415">
                <h3 className="text-block-67">Performance</h3>
                <div className="text-block-68">
                  With reliable <strong>True Range of 160* km</strong> and <strong>60 Nm Peak Torque</strong>, no more
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
                src="/images/addcbcddbb7f.png"
                loading="lazy"
                width="Auto"
                height="Auto"
                alt=""
                sizes="(max-width: 767px) 100vw, (max-width: 991px) 728px, 940px"
                srcSet="https://cdn.prod.website-files.com/6938169ca88035d1476d6905/69ddd4f3a7289c97471e9bd6_Frame%20265%20(3)-p-500.png 500w, https://cdn.prod.website-files.com/6938169ca88035d1476d6905/69ddd4f3a7289c97471e9bd6_Frame%20265%20(3).png 628w"
              />
              <div className="div-block-415">
                <h3 className="text-block-67">Earnings</h3>
                <div className="text-block-68">
                  At only 53 paise* per km running cost and very low maintenance, Super Auto is an unbeatable choice to
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

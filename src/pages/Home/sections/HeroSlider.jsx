import { Slider, Slide } from '@/components/ui/Slider';
import { AppLink } from '@/components/ui/AppLink';

export default function HeroSlider() {
  return (
    <div className="hero-section-main">
      <Slider
        className="slider-3"
        delay={2000}
        animation="cross"
        autoplay={false}
        duration={500}
        easing="ease"
        infinite={true}
        arrows={true}
        navSpacing={2}
        maskClassName="mask-6"
        leftArrowClassName="left-arrow-4"
        rightArrowClassName="right-arrow-6"
        navClassName="slide-nav w-round"
      >
        <Slide className="slide2-2">
          <div className="background-video-2 w-background-video w-background-video-atom">
            <video
              autoPlay
              loop
              style={{
                backgroundImage:
                  'url("https://cdn.prod.website-files.com/6938169ca88035d1476d6905%2F69c19271eb9731e7e6c3f6ac_Hero%20Banner%20Video_Horizontal%20_poster.0000000.jpg")',
              }}
              muted
              playsInline
            >
              <source src="https://cdn.prod.website-files.com/6938169ca88035d1476d6905%2F69c19271eb9731e7e6c3f6ac_Hero%20Banner%20Video_Horizontal%20_mp4.mp4" />
              <source src="https://cdn.prod.website-files.com/6938169ca88035d1476d6905%2F69c19271eb9731e7e6c3f6ac_Hero%20Banner%20Video_Horizontal%20_webm.webm" />
            </video>
          </div>
          <div className="background-video-2-mobile w-background-video w-background-video-atom" id="video-mobile">
            <video
              autoPlay
              loop
              style={{
                backgroundImage:
                  'url("https://cdn.prod.website-files.com/6938169ca88035d1476d6905%2F69c21e8831d28bbe6a11d01b_Hero%20Banner%20Video_Veritcal_poster.0000000.jpg")',
              }}
              muted
              playsInline
            >
              <source src="https://cdn.prod.website-files.com/6938169ca88035d1476d6905%2F69c21e8831d28bbe6a11d01b_Hero%20Banner%20Video_Veritcal_mp4.mp4" />
              <source src="https://cdn.prod.website-files.com/6938169ca88035d1476d6905%2F69c21e8831d28bbe6a11d01b_Hero%20Banner%20Video_Veritcal_webm.webm" />
            </video>
          </div>
        </Slide>
        <Slide className="slide-2">
          <div className="container-2">
            <div className="frame-74">
              <h1 className="heading-2-landing-page">
                Revolutionizing<span className="text-span-white"> Commercial Mobility For a Greener Tomorrow</span>{' '}
                <br />
              </h1>
            </div>
            <AppLink className="order-now w-inline-block" href="#">
              <div className="text-28">Book Now</div>
            </AppLink>
          </div>
          <img className="image-132" src="/images/4855399d2b09.webp" loading="lazy" alt="" />
          <img
            className="image-133"
            src="/images/43fd36c93e41.png"
            loading="lazy"
            sizes="100vw"
            srcSet="https://cdn.prod.website-files.com/6938169ca88035d1476d6905/69ab4c258d32b7aa0e1ff553_89d5645507208ef324b47bfd291fec9f061191b8-p-500.png 500w, https://cdn.prod.website-files.com/6938169ca88035d1476d6905/69ab4c258d32b7aa0e1ff553_89d5645507208ef324b47bfd291fec9f061191b8-p-800.png 800w, https://cdn.prod.website-files.com/6938169ca88035d1476d6905/69ab4c258d32b7aa0e1ff553_89d5645507208ef324b47bfd291fec9f061191b8-p-1080.png 1080w, https://cdn.prod.website-files.com/6938169ca88035d1476d6905/69ab4c258d32b7aa0e1ff553_89d5645507208ef324b47bfd291fec9f061191b8.png 1440w"
            alt=""
          />
        </Slide>
        <Slide className="slide-2">
          <img
            className="image-132-copy"
            src="/images/d88a72298357.jpg"
            loading="lazy"
            sizes="100vw"
            srcSet="https://cdn.prod.website-files.com/6938169ca88035d1476d6905/69c0ce576f4df7df15330b92_Murugappa%20and%20other%20logos-p-500.jpg 500w, https://cdn.prod.website-files.com/6938169ca88035d1476d6905/69c0ce576f4df7df15330b92_Murugappa%20and%20other%20logos-p-800.jpg 800w, https://cdn.prod.website-files.com/6938169ca88035d1476d6905/69c0ce576f4df7df15330b92_Murugappa%20and%20other%20logos-p-1080.jpg 1080w, https://cdn.prod.website-files.com/6938169ca88035d1476d6905/69c0ce576f4df7df15330b92_Murugappa%20and%20other%20logos.jpg 1280w"
            alt=""
          />
          <div className="container-2">
            <div className="our-journey-allign-top">
              <div className="frame-74-our-journey">
                <div className="frame-74-limited-width">
                  <div className="all-3">
                    <div className="all-3-125">
                      <span className="evolutionising-the-indian-trucking-industry-4">
                        Our Journey Started Over 125 Years Ago
                      </span>
                    </div>
                  </div>
                </div>
                <div className="all-3">
                  <div className="frame-72">
                    <a
                      className="order-now-copy w-inline-block"
                      href={'https://www.youtube.com/watch?v=wIAjPvJAbGg&feature=youtu.be'}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div className="text-28">Watch Video</div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Slide>
      </Slider>
    </div>
  );
}

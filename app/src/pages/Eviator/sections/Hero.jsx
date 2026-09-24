import { Slider, Slide } from '@/components/ui/Slider';
import { AppLink } from '@/components/ui/AppLink';

export default function Hero() {
  return (
    <section className="section-youtube">
      <Slider
        className="slider-eviator"
        delay={4000}
        animation="slide"
        autoplay={false}
        duration={500}
        easing="ease"
        infinite={true}
        arrows={true}
        navSpacing={2}
        leftArrowClassName="left-arrow-8"
        leftIconClassName="icon-21"
        rightArrowClassName="right-arrow-8"
        rightIconClassName="icon-20"
        navClassName="w-round"
      >
        <Slide className="slide-60">
          <div className="w-embed-youtubevideo youtube" style={{ paddingTop: '56.17021276595745%' }}>
            <iframe
              src={'https://www.youtube.com/embed/2AUTsrpKu08?rel=0&controls=0&autoplay=1&mute=1&start=36'}
              frameBorder="0"
              style={{
                position: 'absolute',
                left: '0',
                top: '0',
                width: '100%',
                height: '100%',
                pointerEvents: 'auto',
              }}
              allow="autoplay; encrypted-media"
              allowFullScreen
              title="Montra Electric EVIATOR - The Tru-EV Experience!"
              loading="lazy"
            />
          </div>
        </Slide>
        <Slide>
          <div className="w-embed-youtubevideo youtube" style={{ paddingTop: '56.17021276595745%' }}>
            <iframe
              src={'https://www.youtube.com/embed/dsk0oh_C5mk?rel=0&controls=0&autoplay=1&mute=1&start=1'}
              frameBorder="0"
              style={{
                position: 'absolute',
                left: '0',
                top: '0',
                width: '100%',
                height: '100%',
                pointerEvents: 'auto',
              }}
              allow="autoplay; encrypted-media"
              allowFullScreen
              title="The new revolutionary all-electric Montra Electric EViator. #DaringWillFindItsWay"
              loading="lazy"
            />
          </div>
        </Slide>
        <Slide>
          <div className="w-embed-youtubevideo youtube" style={{ paddingTop: '56.17021276595745%' }}>
            <iframe
              src={'https://www.youtube.com/embed/y75yJziJofc?rel=0&controls=0&autoplay=1&mute=1&start=36'}
              frameBorder="0"
              style={{
                position: 'absolute',
                left: '0',
                top: '0',
                width: '100%',
                height: '100%',
                pointerEvents: 'auto',
              }}
              allow="autoplay; encrypted-media"
              allowFullScreen
              title="Montra Electric EVIATOR | The Future Is Here"
              loading="lazy"
            />
          </div>
        </Slide>
        <Slide>
          <div className="w-embed-youtubevideo youtube" style={{ paddingTop: '56.17021276595745%' }}>
            <iframe
              src={'https://www.youtube.com/embed/1cfXMjx_Sb8?rel=0&controls=0&autoplay=1&mute=1&start=36'}
              frameBorder="0"
              style={{
                position: 'absolute',
                left: '0',
                top: '0',
                width: '100%',
                height: '100%',
                pointerEvents: 'auto',
              }}
              allow="autoplay; encrypted-media"
              allowFullScreen
              title="Eviator Range AV"
              loading="lazy"
            />
          </div>
        </Slide>
      </Slider>
      <div className="hero-container-video-eviator" style={{ opacity: '1' }}>
        <div className="base-container-padding-flex-gap-eviator-heading" text-split="">
          <div>
            <h1 className="heading-eviator">Built to Redefine Everyday Logistics</h1>
            <p className="paragraph-149-eviator">
              Long-range endurance, heavy-lift capability, and intelligent logistics
              <br />
            </p>
          </div>
          <div className="hero-cta-wrapper-eviator">
            <AppLink className="button-47 w-button" href="#" btn-color="">
              Book Now
            </AppLink>
          </div>
        </div>
      </div>
    </section>
  );
}

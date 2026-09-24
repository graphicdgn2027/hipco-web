import { AppLink } from '@/components/ui/AppLink';

export default function Hero() {
  return (
    <section className="section-10">
      <div className="hero-video-wrapper-1">
        <div className="background-video w-background-video w-background-video-atom">
          <video
            autoPlay
            loop
            style={{
              backgroundImage:
                'url("https://cdn.prod.website-files.com/6938169ca88035d1476d6905%2F697103b591c00f242671a1ba_All%20New%20Super%20Auto%20-%20Aapke%20Liye%20Izzat%20Se!%20-%20Montra%20Electric%20Lastmile%20%281080p%2C%20h264%29_poster.0000000.jpg")',
            }}
            muted
            playsInline
          >
            <source src="https://cdn.prod.website-files.com/6938169ca88035d1476d6905%2F697103b591c00f242671a1ba_All%20New%20Super%20Auto%20-%20Aapke%20Liye%20Izzat%20Se!%20-%20Montra%20Electric%20Lastmile%20%281080p%2C%20h264%29_mp4.mp4" />
            <source src="https://cdn.prod.website-files.com/6938169ca88035d1476d6905%2F697103b591c00f242671a1ba_All%20New%20Super%20Auto%20-%20Aapke%20Liye%20Izzat%20Se!%20-%20Montra%20Electric%20Lastmile%20%281080p%2C%20h264%29_webm.webm" />
          </video>
        </div>
      </div>
      <div className="hero-container-video-super-auto" style={{ opacity: '1' }}>
        <div className="base-container-padding-flex-gap" text-split="">
          <h1 className="heading-38-super-auto">Leading the Charge in Last-Mile Mobility</h1>
          <p className="paragraph-104">
            Driving smarter deliveries with powerful, efficient, and sustainable electric solutions.
          </p>
          <div className="hero-cta-wrapper">
            <AppLink className="button-5 w-button" btn-color="" href="#">
              Order Now
            </AppLink>
          </div>
        </div>
      </div>
    </section>
  );
}

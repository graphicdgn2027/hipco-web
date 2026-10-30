export default function Hero() {
  return (
    <section className="section-10">
      <img
        className="image-48"
        src="/images/f847efe7b5dd.jpg"
        loading="lazy"
        sizes="100vw"
        height="Auto"
        alt=""
        srcSet="https://cdn.prod.website-files.com/6938169ca88035d1476d6905/69af9edfc3e12804b77040c5_77b4699051756807a7bd7ff97358d1a4e8256183-p-500.jpg 500w, https://cdn.prod.website-files.com/6938169ca88035d1476d6905/69af9edfc3e12804b77040c5_77b4699051756807a7bd7ff97358d1a4e8256183-p-800.jpg 800w, https://cdn.prod.website-files.com/6938169ca88035d1476d6905/69af9edfc3e12804b77040c5_77b4699051756807a7bd7ff97358d1a4e8256183-p-1080.jpg 1080w, https://cdn.prod.website-files.com/6938169ca88035d1476d6905/69af9edfc3e12804b77040c5_77b4699051756807a7bd7ff97358d1a4e8256183.jpg 1500w"
      />
      <img
        className="image-48-mobile"
        src="/images/5436eda5db4e.jpg"
        loading="lazy"
        sizes="100vw"
        height="Auto"
        alt=""
        srcSet="https://cdn.prod.website-files.com/6938169ca88035d1476d6905/69df95b3388b131e66e3d6ba_cargo-wap-banner-p-500.jpg 500w, https://cdn.prod.website-files.com/6938169ca88035d1476d6905/69df95b3388b131e66e3d6ba_cargo-wap-banner-p-800.jpg 800w, https://cdn.prod.website-files.com/6938169ca88035d1476d6905/69df95b3388b131e66e3d6ba_cargo-wap-banner.jpg 814w"
      />
      <div className="hero-container">
        <div className="hero-text-block-super-cargo" text-split="">
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 16px',
              borderRadius: '999px',
              background: 'rgba(37, 219, 37, 0.15)',
              border: '1px solid rgba(37, 219, 37, 0.45)',
              color: '#25db25',
              fontSize: '14px',
              fontWeight: 600,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              marginBottom: '10px',
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)',
            }}
          >
            <span
              style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                background: '#25db25',
                display: 'inline-block',
                boxShadow: '0 0 10px #25db25',
              }}
            />
            Coming Soon
          </div>
          <h1 className="heading-super-cargo">Coming Soon</h1>
          <p className="sub-heading-super-cargo">with Montra Electric Super Cargo Range</p>
        </div>
      </div>
    </section>
  );
}

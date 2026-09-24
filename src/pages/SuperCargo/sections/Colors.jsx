import ColorPicker from '@/components/sections/ColorPicker';

export default function Colors() {
  return (
    <section className="base-padding-flex">
      <div className="w-layout-blockcontainer base-container w-container">
        <div className="carousel-header">
          <h2 className="heading-2">
            Pick your <span className="text-span">Color</span> <br />
          </h2>
        </div>
      </div>
      <ColorPicker
        maskClassName="mask-8"
        arrowClassName=""
        easing="ease-in-out-quad"
        duration={1000}
        stackedLabel={false}
        slides={[
          {
            src: '/images/7a3e2ff4c3d9.png',
            srcSet:
              'https://cdn.prod.website-files.com/6938169ca88035d1476d6905/69afab0a8bd0bb8be120d933_model-eCX%20-big-p-500.png 500w, https://cdn.prod.website-files.com/6938169ca88035d1476d6905/69afab0a8bd0bb8be120d933_model-eCX%20-big-p-800.png 800w, https://cdn.prod.website-files.com/6938169ca88035d1476d6905/69afab0a8bd0bb8be120d933_model-eCX%20-big-p-1080.png 1080w, https://cdn.prod.website-files.com/6938169ca88035d1476d6905/69afab0a8bd0bb8be120d933_model-eCX%20-big-p-1600.png 1600w, https://cdn.prod.website-files.com/6938169ca88035d1476d6905/69afab0a8bd0bb8be120d933_model-eCX%20-big-p-2000.png 2000w, https://cdn.prod.website-files.com/6938169ca88035d1476d6905/69afab0a8bd0bb8be120d933_model-eCX%20-big-p-2600.png 2600w, https://cdn.prod.website-files.com/6938169ca88035d1476d6905/69afab0a8bd0bb8be120d933_model-eCX%20-big-p-3200.png 3200w, https://cdn.prod.website-files.com/6938169ca88035d1476d6905/69afab0a8bd0bb8be120d933_model-eCX%20-big.png 3930w',
            sizes: '(max-width: 479px) 100vw, 500px',
            className: 'image-44',
            width: '500',
          },
          {
            src: '/images/bc44eeeebe99.webp',
            srcSet:
              'https://cdn.prod.website-files.com/6938169ca88035d1476d6905/69b146d5eb2d3afd71fb5c26_Pickup_Blue-p-500.webp 500w, https://cdn.prod.website-files.com/6938169ca88035d1476d6905/69b146d5eb2d3afd71fb5c26_Pickup_Blue-p-800.webp 800w, https://cdn.prod.website-files.com/6938169ca88035d1476d6905/69b146d5eb2d3afd71fb5c26_Pickup_Blue-p-1080.webp 1080w, https://cdn.prod.website-files.com/6938169ca88035d1476d6905/69b146d5eb2d3afd71fb5c26_Pickup_Blue-p-1600.webp 1600w, https://cdn.prod.website-files.com/6938169ca88035d1476d6905/69b146d5eb2d3afd71fb5c26_Pickup_Blue.webp 1965w',
            sizes: '(max-width: 479px) 100vw, 500px',
            className: 'image-44',
            width: '500',
          },
        ]}
        colors={[
          {
            name: 'Red',
            className: 'color-red',
          },
          {
            name: 'Blue',
            className: 'color-blue',
          },
        ]}
      />
      <a
        className="explore-in-3d-button w-button"
        href="https://www.montraelectric.com/SuperVerse360/"
        target="_blank"
        rel="noreferrer"
      >
        EXPLORE IN 3D
      </a>
    </section>
  );
}

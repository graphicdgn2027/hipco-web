import ColorPicker from '@/components/sections/ColorPicker';

export default function Colors() {
  return (
    <section id="colors" className="base-padding-flex page-grid page-section">
      <div className="base-container">
        <div className="carousel-header">
          <h2 className="heading-2">
            Pick your<span className="text-span-11"> Color</span> <br />
          </h2>
        </div>
      </div>
      <ColorPicker
        maskClassName="mask-3"
        arrowClassName=""
        easing="ease-in-out-quad"
        duration={1000}
        stackedLabel={true}
        slides={[
          {
            src: '/super-auto/Super-auto-color/black.png',
            sizes: '(max-width: 767px) 100vw, 800px',
            className: 'image-with-6-rem-top-bottom',
            width: '800',
          },
          {
            src: '/super-auto/Super-auto-color/white.png',
            sizes: '(max-width: 767px) 100vw, 800px',
            className: 'image-with-6-rem-top-bottom',
            width: '800',
          },
          {
            src: '/super-auto/Super-auto-color/blue.png',
            sizes: '(max-width: 767px) 100vw, 800px',
            className: 'image-with-6-rem-top-bottom',
            width: '800',
          },
          {
            src: '/super-auto/Super-auto-color/green.png',
            sizes: '(max-width: 767px) 100vw, 800px',
            className: 'image-with-6-rem-top-bottom',
            width: '800',
          },
        ]}
        colors={[
          {
            name: 'Black',
            className: 'color-black',
          },
          {
            name: 'White',
            className: 'color-white',
          },
          {
            name: 'Blue',
            className: 'color-blue',
          },
          {
            name: 'Green',
            className: 'color-green',
          },
        ]}
      />
      <a className="explore-in-3d-button w-button" href="https://www.montraelectric.com/lastmile/superauto/SuperVerse/">
        EXPLORE IN 3D
      </a>
    </section>
  );
}

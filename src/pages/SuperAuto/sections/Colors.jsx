import ColorPicker from '@/components/sections/ColorPicker';

export default function Colors() {
  return (
    <section className="base-padding-flex">
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
            src: '/images/1bb0e14d3e0d.png',
            srcSet:
              'https://cdn.prod.website-files.com/6938169ca88035d1476d6905/69728753aff0871ade0bb92c_fdaef650097b5b0ea4dc908da08edaf748cceea0%20(2)-p-500.png 500w, https://cdn.prod.website-files.com/6938169ca88035d1476d6905/69728753aff0871ade0bb92c_fdaef650097b5b0ea4dc908da08edaf748cceea0%20(2)-p-800.png 800w, https://cdn.prod.website-files.com/6938169ca88035d1476d6905/69728753aff0871ade0bb92c_fdaef650097b5b0ea4dc908da08edaf748cceea0%20(2)-p-1080.png 1080w, https://cdn.prod.website-files.com/6938169ca88035d1476d6905/69728753aff0871ade0bb92c_fdaef650097b5b0ea4dc908da08edaf748cceea0%20(2)-p-1600.png 1600w, https://cdn.prod.website-files.com/6938169ca88035d1476d6905/69728753aff0871ade0bb92c_fdaef650097b5b0ea4dc908da08edaf748cceea0%20(2)-p-2000.png 2000w, https://cdn.prod.website-files.com/6938169ca88035d1476d6905/69728753aff0871ade0bb92c_fdaef650097b5b0ea4dc908da08edaf748cceea0%20(2)-p-2600.png 2600w, https://cdn.prod.website-files.com/6938169ca88035d1476d6905/69728753aff0871ade0bb92c_fdaef650097b5b0ea4dc908da08edaf748cceea0%20(2).png 3072w',
            sizes: '(max-width: 767px) 100vw, 500px',
            className: 'image-with-6-rem-top-bottom',
            width: '500',
          },
          {
            src: '/images/efb9557e8443.png',
            srcSet:
              'https://cdn.prod.website-files.com/6938169ca88035d1476d6905/69ae956bfab23a434349f429_d37a95186865b28675cd374d6b6f0135e5594a95-p-500.png 500w, https://cdn.prod.website-files.com/6938169ca88035d1476d6905/69ae956bfab23a434349f429_d37a95186865b28675cd374d6b6f0135e5594a95-p-800.png 800w, https://cdn.prod.website-files.com/6938169ca88035d1476d6905/69ae956bfab23a434349f429_d37a95186865b28675cd374d6b6f0135e5594a95.png 1024w',
            sizes: '(max-width: 767px) 100vw, 500px',
            className: 'image-100',
            width: '500',
          },
          {
            src: '/images/263011cf3c13.png',
            srcSet:
              'https://cdn.prod.website-files.com/6938169ca88035d1476d6905/69ae956bfab23a434349f42e_9b84f6cd089e077877ca8cdfab3a2b4ddad6cc8b-p-500.png 500w, https://cdn.prod.website-files.com/6938169ca88035d1476d6905/69ae956bfab23a434349f42e_9b84f6cd089e077877ca8cdfab3a2b4ddad6cc8b-p-800.png 800w, https://cdn.prod.website-files.com/6938169ca88035d1476d6905/69ae956bfab23a434349f42e_9b84f6cd089e077877ca8cdfab3a2b4ddad6cc8b.png 1024w',
            sizes: '(max-width: 767px) 100vw, 500px',
            className: 'image-with-6-rem-top-bottom',
            width: '500',
          },
          {
            src: '/images/3b5b6463f7db.png',
            srcSet:
              'https://cdn.prod.website-files.com/6938169ca88035d1476d6905/69ae956bfab23a434349f424_f2c1592130d5bde940f6d94765348c54a5aa5675-p-500.png 500w, https://cdn.prod.website-files.com/6938169ca88035d1476d6905/69ae956bfab23a434349f424_f2c1592130d5bde940f6d94765348c54a5aa5675-p-800.png 800w, https://cdn.prod.website-files.com/6938169ca88035d1476d6905/69ae956bfab23a434349f424_f2c1592130d5bde940f6d94765348c54a5aa5675.png 1024w',
            sizes: '(max-width: 767px) 100vw, 500px',
            className: 'image-with-6-rem-top-bottom',
            width: '500',
          },
          {
            src: '/images/2e72a128c403.png',
            srcSet:
              'https://cdn.prod.website-files.com/6938169ca88035d1476d6905/69ae956bfab23a434349f433_9794dec25e5c5207a677f88599866aa98b0c3dbc-p-500.png 500w, https://cdn.prod.website-files.com/6938169ca88035d1476d6905/69ae956bfab23a434349f433_9794dec25e5c5207a677f88599866aa98b0c3dbc-p-800.png 800w, https://cdn.prod.website-files.com/6938169ca88035d1476d6905/69ae956bfab23a434349f433_9794dec25e5c5207a677f88599866aa98b0c3dbc.png 1024w',
            sizes: '(max-width: 767px) 100vw, 500px',
            className: 'image-with-6-rem-top-bottom',
            width: '500',
          },
          {
            src: '/images/76684f0006b4.png',
            srcSet:
              'https://cdn.prod.website-files.com/6938169ca88035d1476d6905/69ae956bfab23a434349f420_2859c23b6e69c88e281f867aabb97c506d86a0ff-p-500.png 500w, https://cdn.prod.website-files.com/6938169ca88035d1476d6905/69ae956bfab23a434349f420_2859c23b6e69c88e281f867aabb97c506d86a0ff.png 588w',
            sizes: '(max-width: 767px) 100vw, 500px',
            className: 'image-with-6-rem-top-bottom',
            width: '500',
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
            name: 'Yellow and Balck',
            className: 'color-yellow',
          },
          {
            name: 'Blue and Black',
            className: 'color-blue',
          },
          {
            name: 'Green and Black',
            className: 'color-green',
          },
          {
            name: 'Pink',
            className: 'color-pink',
          },
        ]}
      />
      <a className="explore-in-3d-button w-button" href="https://www.montraelectric.com/lastmile/superauto/SuperVerse/">
        EXPLORE IN 3D
      </a>
    </section>
  );
}

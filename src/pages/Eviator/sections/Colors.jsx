import ColorPicker from '@/components/sections/ColorPicker';

export default function Colors() {
  return (
    <section className="base-padding-flex">
      <div className="w-layout-blockcontainer base-container w-container">
        <div className="carousel-header">
          <h2 className="heading-2">
            Pick your<span className="text-span-11"> Color</span> <br />
          </h2>
        </div>
      </div>
      <ColorPicker
        maskClassName="mask-3"
        arrowClassName="left-arrow-3"
        easing="ease-in-out-back"
        duration={1000}
        stackedLabel={false}
        slides={[
          {
            src: '/images/cddb01312fea.webp',
            srcSet:
              'https://cdn.prod.website-files.com/6938169ca88035d1476d6905/69b3bc66bd3583189f1ac101_scv_green-p-500.webp 500w, https://cdn.prod.website-files.com/6938169ca88035d1476d6905/69b3bc66bd3583189f1ac101_scv_green.webp 801w',
            sizes: '(max-width: 767px) 100vw, 500px',
            className: 'image-with-6-rem-top-bottom',
            width: '500',
          },
          {
            src: '/images/1e9742b6fdca.webp',
            srcSet:
              'https://cdn.prod.website-files.com/6938169ca88035d1476d6905/69b3bddae71af03787de9436_scv_pink-p-500.webp 500w, https://cdn.prod.website-files.com/6938169ca88035d1476d6905/69b3bddae71af03787de9436_scv_pink.webp 801w',
            sizes: '(max-width: 767px) 100vw, 500px',
            className: 'image-with-6-rem-top-bottom',
            width: '500',
          },
          {
            src: '/images/9a0562d8ac5b.png',
            srcSet:
              'https://cdn.prod.website-files.com/6938169ca88035d1476d6905/69b3bdda3188500c996b0243_ab91c5aade8b4147d5d247314320000bda7c8cc0-p-500.png 500w, https://cdn.prod.website-files.com/6938169ca88035d1476d6905/69b3bdda3188500c996b0243_ab91c5aade8b4147d5d247314320000bda7c8cc0-p-800.png 800w, https://cdn.prod.website-files.com/6938169ca88035d1476d6905/69b3bdda3188500c996b0243_ab91c5aade8b4147d5d247314320000bda7c8cc0.png 801w',
            sizes: '(max-width: 767px) 100vw, 500px',
            className: 'image-with-6-rem-top-bottom',
            width: '500',
          },
          {
            src: '/images/e08914c88202.png',
            srcSet:
              'https://cdn.prod.website-files.com/6938169ca88035d1476d6905/69b3bdda5d9489e300f3c72b_3b99f0c7a83f25356a4535429ecd733263387f62-p-500.png 500w, https://cdn.prod.website-files.com/6938169ca88035d1476d6905/69b3bdda5d9489e300f3c72b_3b99f0c7a83f25356a4535429ecd733263387f62-p-800.png 800w, https://cdn.prod.website-files.com/6938169ca88035d1476d6905/69b3bdda5d9489e300f3c72b_3b99f0c7a83f25356a4535429ecd733263387f62.png 801w',
            sizes: '(max-width: 767px) 100vw, 500px',
            className: 'image-with-6-rem-top-bottom',
            width: '500',
          },
          {
            src: '/images/de2478e56b7b.png',
            srcSet:
              'https://cdn.prod.website-files.com/6938169ca88035d1476d6905/69b3bdda8ef1c45de4c41357_9d1f06f8c4c4c79786431b7b8d1377dad660b876-p-500.png 500w, https://cdn.prod.website-files.com/6938169ca88035d1476d6905/69b3bdda8ef1c45de4c41357_9d1f06f8c4c4c79786431b7b8d1377dad660b876-p-800.png 800w, https://cdn.prod.website-files.com/6938169ca88035d1476d6905/69b3bdda8ef1c45de4c41357_9d1f06f8c4c4c79786431b7b8d1377dad660b876.png 801w',
            sizes: '(max-width: 767px) 100vw, 500px',
            className: 'image-with-6-rem-top-bottom',
            width: '500',
          },
          {
            src: '/images/c23f644d53e3.png',
            srcSet:
              'https://cdn.prod.website-files.com/6938169ca88035d1476d6905/69b3bdda3d2aaf4bc766c258_4d697905cbf8c91ecf895b49a4a88eee23064439-p-500.png 500w, https://cdn.prod.website-files.com/6938169ca88035d1476d6905/69b3bdda3d2aaf4bc766c258_4d697905cbf8c91ecf895b49a4a88eee23064439-p-800.png 800w, https://cdn.prod.website-files.com/6938169ca88035d1476d6905/69b3bdda3d2aaf4bc766c258_4d697905cbf8c91ecf895b49a4a88eee23064439.png 801w',
            sizes: '(max-width: 767px) 100vw, 500px',
            className: 'image-with-6-rem-top-bottom',
            width: '500',
          },
        ]}
        colors={[
          {
            name: 'VERDANT GREEN',
            className: 'color-green',
          },
          {
            name: 'CHROME PINK',
            className: 'color-pink',
          },
          {
            name: 'GRAPHITE GREY',
            className: 'color-grey',
          },
          {
            name: 'SUNBURST YELLOW',
            className: 'color-yellow',
          },
          {
            name: 'MIDNIGHT BLACK',
            className: 'color-black',
          },
          {
            name: 'FROST WHITE',
            className: 'color-white',
          },
        ]}
      />
      <a
        className="explore-in-3d-button w-button"
        href="https://www.montraelectric.com/scv/360deg/"
        target="_blank"
        rel="noreferrer"
      >
        EXPLORE IN 3D
      </a>
    </section>
  );
}

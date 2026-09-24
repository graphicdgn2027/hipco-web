import { Children, useState } from 'react';
import { Keyboard, Mousewheel, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const VARIANTS = {
  slider: {
    component: 'slider_component',
    wrap: 'slider_wrap',
    list: 'slider_list',
    item: 'slider_item',
    left: 'slider_btn_element_left',
    right: 'slider_btn_element_right',
    layout: 'slider_layout',
  },
  team: {
    component: 'team-slider_component',
    wrap: 'team-slider_cms_wrap',
    list: 'team-slider_cms_list',
    item: 'team-slider_cms_item',
    left: 'team-slider_btn_element_left',
    right: 'team-slider_btn_element_right',
    layout: 'team-slider_layout',
  },
};

const join = (...parts) => parts.filter(Boolean).join(' ');

// Marker element: <Carousel> reads each item's className/children and renders it as a Swiper slide.
export function CarouselItem() {
  return null;
}

export function Carousel({ variant = 'slider', className = '', wrapClassName = '', listClassName = '', children }) {
  const v = VARIANTS[variant];
  const [prevEl, setPrevEl] = useState(null);
  const [nextEl, setNextEl] = useState(null);
  const items = Children.toArray(children);

  return (
    <div className={join(v.component, className)}>
      <Swiper
        modules={[Navigation, Keyboard, Mousewheel]}
        className={join(v.wrap, wrapClassName)}
        wrapperClass={join(v.list, 'swiper-wrapper', listClassName)}
        slidesPerView="auto"
        followFinger
        speed={300}
        slideActiveClass="is-active"
        mousewheel={{ forceToAxis: true }}
        keyboard={{ enabled: true, onlyInViewport: true }}
        navigation={{ prevEl, nextEl }}
      >
        {items.map((item, i) => (
          <SwiperSlide key={item.key ?? i} className={join(v.item, item.props.className)}>
            {item.props.children}
          </SwiperSlide>
        ))}
      </Swiper>
      <div className={join(v.left, 'is-prev')} ref={setPrevEl}>
        <div className="left-chevron-white w-icon-slider-left" />
      </div>
      <div className={join(v.right, 'is-next')} ref={setNextEl}>
        <div className="right-chevron-white w-icon-slider-right" />
      </div>
      <div className={v.layout} />
    </div>
  );
}

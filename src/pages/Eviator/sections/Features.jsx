import { Tabs, TabMenu, TabLink, TabContent, TabPane } from '@/components/ui/Tabs';
import { Carousel, CarouselItem } from '@/components/ui/Carousel';

export default function Features() {
  return (
    <section className="base-container-padding-flex-gap-copy spacing">
      <div className="div-block-389">
        <div className="carousel-header">
          <h2 className="heading-2">Features</h2>
          <p className="paragraph-2">
            Advanced electric technology, powerful performance, smart connectivity, and driver-focused comfort designed
            to make every journey efficient and reliable.
            <br />
          </p>
        </div>
      </div>
      <Tabs className="tabs-2 only-slider-2" defaultIndex={0}>
        <TabMenu className="tabs-menu-3 only-slider-3">
          <TabLink index={0} className="tab-link-tab-1-3 only-slider-13 w-inline-block">
            <div>Performance</div>
          </TabLink>
          <TabLink index={1} className="tab-link-tab-1-3 only-slider-13 w-inline-block">
            <div className="text-block-59 only-slider-6">Style</div>
          </TabLink>
          <TabLink index={2} className="tab-link-tab-1-3 only-slider-13 w-inline-block">
            <div className="text-block-60 only-slider-8">Technology</div>
          </TabLink>
          <TabLink index={3} className="tab-link-tab-1-3 only-slider-13 w-inline-block">
            <div className="text-block-61 only-slider-10">Safety</div>
          </TabLink>
          <TabLink index={4} className="tab-link-tab-1-3 only-slider-13 w-inline-block">
            <div className="text-block-62 only-slider-14">Comfort</div>
          </TabLink>
          <TabLink index={5} className="tab-link-tab-1-3 only-slider-13 w-inline-block">
            <div className="text-block-62 only-slider-14">Convenience</div>
          </TabLink>
        </TabMenu>
        <TabContent className="tabs-content only-slider-15">
          <TabPane index={0} className="tab-pane-tab-4-2 only-slider-16">
            <Carousel variant="slider">
              <CarouselItem>
                <div className="slot">
                  <div className="last-mile-card">
                    <img
                      className="image-131"
                      width="480"
                      height="100"
                      alt=""
                      src="/images/1471488470ea.png"
                      loading="lazy"
                    />
                    <div className="card-content-2">
                      <h3 className="heading-102">First in Segment Highest Range</h3>
                      <p className="paragraph-131">
                        Industry-leading <strong>certified range of 292 km</strong> and a{' '}
                        <strong>real-world range of around 170+ km</strong> on a single charge with full rated load,
                        enabling longer trips with fewer charging interruptions.
                        <br />
                      </p>
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
                  <div className="last-mile-card">
                    <img
                      className="image-131"
                      width="480"
                      height="100"
                      alt=""
                      src="/images/397d02d214fe.jpg"
                      loading="lazy"
                    />
                    <div className="card-content-2">
                      <h3 className="heading-102">Highest Power &amp; Torque</h3>
                      <p className="paragraph-131">
                        The vehicle delivers <strong>80 kW peak power and 300 Nm peak torque</strong>, ensuring strong
                        acceleration and reliable performance even when carrying heavy loads.
                        <br />
                      </p>
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
                  <div className="last-mile-card">
                    <img
                      className="image-131"
                      width="480"
                      height="100"
                      alt=""
                      src="/images/1894510a3293.png"
                      loading="lazy"
                    />
                    <div className="card-content-2">
                      <h3 className="heading-102">Best In Class Payload</h3>
                      <p className="paragraph-131">
                        The EVIATOR features a{' '}
                        <strong>10.3-ft loading deck and payload capacity of about 1.7 tons</strong>, making it suitable
                        for various logistics and delivery applications.
                        <br />
                      </p>
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
                  <div className="last-mile-card">
                    <img
                      className="image-131"
                      width="480"
                      height="100"
                      alt=""
                      src="/images/b38fe8f61fb0.png"
                      loading="lazy"
                    />
                    <div className="card-content-2">
                      <h3 className="heading-102">Maximum Gradeability</h3>
                      <p className="paragraph-131">
                        Designed to handle challenging terrain with{' '}
                        <strong>25% restart gradeability and 35% running gradeability</strong>, ensuring smooth
                        operation on steep inclines.
                        <br />
                      </p>
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
                  <div className="last-mile-card">
                    <img
                      className="image-131"
                      width="480"
                      height="100"
                      alt=""
                      src="/images/d8f7f0615151.png"
                      loading="lazy"
                    />
                    <div className="card-content-2">
                      <h3 className="heading-102">Best in class Top Speed</h3>
                      <p className="paragraph-131">
                        Reach up to 80 km/h, enabling faster trips and more business opportunities.
                      </p>
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
                  <div className="last-mile-card">
                    <img
                      className="image-131"
                      width="480"
                      height="100"
                      alt=""
                      src="/images/51bf6f147ad4.png"
                      loading="lazy"
                    />
                    <div className="card-content-2">
                      <h3 className="heading-102">CCS2 Fast Charging</h3>
                      <p className="paragraph-131">
                        Supports both AC and DC charging options.
                        <br />‍<strong>AC Charging:</strong> 0% – 80% in approximately 6 hours
                        <br />
                        <strong>DC Fast Charging:</strong> 0% – 80% in around 1 hour
                        <br />
                      </p>
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
          </TabPane>
          <TabPane index={1}>
            <Carousel variant="slider">
              <CarouselItem>
                <div className="slot">
                  <div className="last-mile-card">
                    <div className="card-image-wrap">
                      <img
                        className="image-5"
                        src="/images/238f9e329480.png"
                        loading="lazy"
                        width="480"
                        height="100"
                        alt=""
                        sizes="(max-width: 479px) 100vw, 480px"
                        srcSet="https://cdn.prod.website-files.com/6938169ca88035d1476d6905/69b3aedd236861260d72b6d5_9697eb44af70b91f8af6a9c32568a41880818951-p-500.png 500w, https://cdn.prod.website-files.com/6938169ca88035d1476d6905/69b3aedd236861260d72b6d5_9697eb44af70b91f8af6a9c32568a41880818951-p-800.png 800w, https://cdn.prod.website-files.com/6938169ca88035d1476d6905/69b3aedd236861260d72b6d5_9697eb44af70b91f8af6a9c32568a41880818951.png 920w"
                      />
                    </div>
                    <div className="card-content">
                      <h3 className="heading">LED Headlamps with DRLs</h3>
                      <p className="paragraph">
                        First-in-segment LED headlamps with DRLs improve visibility while enhancing the vehicle’s modern
                        styling.
                        <br />
                      </p>
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
                  <div className="last-mile-card">
                    <div className="card-image-wrap">
                      <img
                        className="image-5"
                        src="/images/bfa0ebbe7870.png"
                        loading="lazy"
                        width="480"
                        height="100"
                        alt=""
                        sizes="(max-width: 479px) 100vw, 480px"
                        srcSet="https://cdn.prod.website-files.com/6938169ca88035d1476d6905/69b3aede21fb0e7e2c9b5a71_39ec5e961469a1e9184b26e3f56b053499d843b1-p-500.png 500w, https://cdn.prod.website-files.com/6938169ca88035d1476d6905/69b3aede21fb0e7e2c9b5a71_39ec5e961469a1e9184b26e3f56b053499d843b1-p-800.png 800w, https://cdn.prod.website-files.com/6938169ca88035d1476d6905/69b3aede21fb0e7e2c9b5a71_39ec5e961469a1e9184b26e3f56b053499d843b1.png 920w"
                      />
                    </div>
                    <div className="card-content">
                      <h3 className="heading">Premium Seats</h3>
                      <p className="paragraph">
                        Comfortable <strong>D+2 seating configuration</strong> provides better support and space for the
                        driver and passengers.
                        <br />
                      </p>
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
                  <div className="last-mile-card">
                    <div className="card-image-wrap">
                      <img
                        className="image-5"
                        src="/images/d0c6e68b10a6.png"
                        loading="lazy"
                        width="480"
                        height="100"
                        alt=""
                        sizes="(max-width: 479px) 100vw, 480px"
                        srcSet="https://cdn.prod.website-files.com/6938169ca88035d1476d6905/69b3aedd628398b30bbc4cdd_5b8b15b5d48a69bcc94e7d80385b13d1a3a3f4aa-p-500.png 500w, https://cdn.prod.website-files.com/6938169ca88035d1476d6905/69b3aedd628398b30bbc4cdd_5b8b15b5d48a69bcc94e7d80385b13d1a3a3f4aa-p-800.png 800w, https://cdn.prod.website-files.com/6938169ca88035d1476d6905/69b3aedd628398b30bbc4cdd_5b8b15b5d48a69bcc94e7d80385b13d1a3a3f4aa.png 920w"
                      />
                    </div>
                    <div className="card-content">
                      <h3 className="heading">Premium Metallic Colours</h3>
                      <p className="paragraph">
                        Designed with premium color options to deliver a bold and professional road presence.
                        <br />
                      </p>
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
                  <div className="last-mile-card">
                    <div className="card-image-wrap">
                      <img
                        className="image-5"
                        src="/images/e0fe8d43f1cf.png"
                        loading="lazy"
                        width="480"
                        height="100"
                        alt=""
                        sizes="(max-width: 479px) 100vw, 480px"
                        srcSet="https://cdn.prod.website-files.com/6938169ca88035d1476d6905/69b3aede584f882b4f6396aa_509b14a78a5769202835c22e43dd71dde5490504-p-500.png 500w, https://cdn.prod.website-files.com/6938169ca88035d1476d6905/69b3aede584f882b4f6396aa_509b14a78a5769202835c22e43dd71dde5490504-p-800.png 800w, https://cdn.prod.website-files.com/6938169ca88035d1476d6905/69b3aede584f882b4f6396aa_509b14a78a5769202835c22e43dd71dde5490504.png 920w"
                      />
                    </div>
                    <div className="card-content">
                      <h3 className="heading">Digital Cluster</h3>
                      <p className="paragraph">
                        Provides real-time updates on speed, battery level, and driving range, giving drivers clear
                        information at a glance.
                      </p>
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
                  <div className="last-mile-card">
                    <div className="card-image-wrap">
                      <img
                        className="image-5"
                        src="/images/8b719ea83355.png"
                        loading="lazy"
                        width="480"
                        height="100"
                        alt=""
                        sizes="(max-width: 479px) 100vw, 480px"
                        srcSet="https://cdn.prod.website-files.com/6938169ca88035d1476d6905/69b3aede24ca1004f7e4743e_7a4a30a4245a8821fb1427ee00a9e7d28f25f80e-p-500.png 500w, https://cdn.prod.website-files.com/6938169ca88035d1476d6905/69b3aede24ca1004f7e4743e_7a4a30a4245a8821fb1427ee00a9e7d28f25f80e-p-800.png 800w, https://cdn.prod.website-files.com/6938169ca88035d1476d6905/69b3aede24ca1004f7e4743e_7a4a30a4245a8821fb1427ee00a9e7d28f25f80e.png 920w"
                      />
                    </div>
                    <div className="card-content">
                      <h3 className="heading">Eagle-Inspired Front Grill</h3>
                      <p className="paragraph">‍</p>
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
                  <div className="last-mile-card">
                    <div className="card-image-wrap">
                      <img
                        className="image-5"
                        src="/images/4c1cec42df55.png"
                        loading="lazy"
                        width="480"
                        height="100"
                        alt=""
                        sizes="(max-width: 479px) 100vw, 480px"
                        srcSet="https://cdn.prod.website-files.com/6938169ca88035d1476d6905/69b3aeded498c5ec90f0b3ef_93c4249cbe0a499810ab5d0f8cb1f3023a375ade-p-500.png 500w, https://cdn.prod.website-files.com/6938169ca88035d1476d6905/69b3aeded498c5ec90f0b3ef_93c4249cbe0a499810ab5d0f8cb1f3023a375ade-p-800.png 800w, https://cdn.prod.website-files.com/6938169ca88035d1476d6905/69b3aeded498c5ec90f0b3ef_93c4249cbe0a499810ab5d0f8cb1f3023a375ade.png 920w"
                      />
                    </div>
                    <div className="card-content">
                      <h3 className="heading">LED Tail Lights</h3>
                      <p className="paragraph">‍</p>
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
                  <div className="last-mile-card">
                    <div className="card-image-wrap">
                      <img
                        className="image-5"
                        src="/images/bd0452661aa0.png"
                        loading="lazy"
                        width="480"
                        height="100"
                        alt=""
                        sizes="(max-width: 479px) 100vw, 480px"
                        srcSet="https://cdn.prod.website-files.com/6938169ca88035d1476d6905/69b3aeddf3d6889b41b8ef2f_935bcd6562197d425f7cf4b4bdcee68a093aaa88-p-500.png 500w, https://cdn.prod.website-files.com/6938169ca88035d1476d6905/69b3aeddf3d6889b41b8ef2f_935bcd6562197d425f7cf4b4bdcee68a093aaa88-p-800.png 800w, https://cdn.prod.website-files.com/6938169ca88035d1476d6905/69b3aeddf3d6889b41b8ef2f_935bcd6562197d425f7cf4b4bdcee68a093aaa88.png 920w"
                      />
                    </div>
                    <div className="card-content">
                      <h3 className="heading">Wide-View Windshield</h3>
                      <p className="paragraph">AC Charging 0% - 80% ~ 6 Hrs DC charging 0-80% ~ 1 Hrs.</p>
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
          </TabPane>
          <TabPane index={2}>
            <Carousel variant="slider">
              <CarouselItem>
                <div className="slot">
                  <div className="last-mile-card">
                    <div className="card-image-wrap">
                      <img
                        className="image-5"
                        src="/images/e3263ae5ad97.webp"
                        loading="lazy"
                        width="480"
                        height="100"
                        alt=""
                      />
                    </div>
                    <div className="card-content">
                      <h3 className="heading">Advanced LFP Battery</h3>
                      <p className="paragraph">
                        A liquid-cooled LFP battery improves safety, battery life, and consistent performance across
                        different operating conditions.
                        <br />
                      </p>
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
                  <div className="last-mile-card">
                    <div className="card-image-wrap">
                      <img
                        className="image-5"
                        src="/images/9bf5d03ac321.webp"
                        loading="lazy"
                        width="480"
                        height="100"
                        alt=""
                      />
                    </div>
                    <div className="card-content">
                      <h3 className="heading">Regenerative Braking</h3>
                      <p className="paragraph">
                        Captures energy during deceleration and feeds it back to the battery, improving overall driving
                        efficiency.
                        <br />
                      </p>
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
                  <div className="last-mile-card">
                    <div className="card-image-wrap">
                      <img
                        className="image-5"
                        src="/images/76b46d4c8351.webp"
                        loading="lazy"
                        width="480"
                        height="100"
                        alt=""
                      />
                    </div>
                    <div className="card-content">
                      <h3 className="heading">Infotainment System</h3>
                      <p className="paragraph">
                        Includes connected features such as navigation, reverse parking assistance, ADAS integration,
                        and connected technologies.
                        <br />
                      </p>
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
                  <div className="last-mile-card">
                    <div className="card-image-wrap">
                      <img
                        className="image-5"
                        src="/images/bdd25dbf6ab5.webp"
                        loading="lazy"
                        width="480"
                        height="100"
                        alt=""
                      />
                    </div>
                    <div className="card-content">
                      <h3 className="heading">Software Defined Vehicle (SDV)</h3>
                      <p className="paragraph">
                        Advanced digital architecture with features like:
                        <br />
                        Over-the-air updates (OTA)
                        <br />
                        Digital twin technology
                        <br />
                        1M connected app for diagnostics and performance tracking.
                        <br />
                      </p>
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
          </TabPane>
          <TabPane index={3}>
            <Carousel variant="slider">
              <CarouselItem>
                <div className="slot">
                  <div className="last-mile-card">
                    <div className="card-image-wrap">
                      <img
                        className="image-5"
                        src="/images/b03a16b84520.webp"
                        loading="lazy"
                        width="480"
                        height="100"
                        alt=""
                        sizes="(max-width: 479px) 100vw, 480px"
                        srcSet="https://cdn.prod.website-files.com/6938169ca88035d1476d6905/69b3b4fb7506574e75e643f0_scv_safety_adas-p-500.webp 500w, https://cdn.prod.website-files.com/6938169ca88035d1476d6905/69b3b4fb7506574e75e643f0_scv_safety_adas-p-800.webp 800w, https://cdn.prod.website-files.com/6938169ca88035d1476d6905/69b3b4fb7506574e75e643f0_scv_safety_adas.webp 920w"
                      />
                    </div>
                    <div className="card-content">
                      <h3 className="heading">ADAS</h3>
                      <p className="paragraph">
                        Advanced Driver Assistance Systems provide features like collision warnings, driver monitoring,
                        and distraction alerts to enhance road safety.
                        <br />
                      </p>
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
                  <div className="last-mile-card">
                    <div className="card-image-wrap">
                      <img
                        className="image-5"
                        src="/images/d761751ef780.webp"
                        loading="lazy"
                        width="480"
                        height="100"
                        alt=""
                        sizes="(max-width: 479px) 100vw, 480px"
                        srcSet="https://cdn.prod.website-files.com/6938169ca88035d1476d6905/69b3b4fb3e26f0f69bc18d4d_safety-robustchassis-p-500.webp 500w, https://cdn.prod.website-files.com/6938169ca88035d1476d6905/69b3b4fb3e26f0f69bc18d4d_safety-robustchassis.webp 920w"
                      />
                    </div>
                    <div className="card-content">
                      <h3 className="heading">Robust And Durable Chassis</h3>
                      <p className="paragraph">
                        Strong chassis design improves structural strength, stability, and reliability.
                        <br />
                      </p>
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
                  <div className="last-mile-card">
                    <div className="card-image-wrap">
                      <img
                        className="image-5"
                        src="/images/49041b80af7d.webp"
                        loading="lazy"
                        width="480"
                        height="100"
                        alt=""
                        sizes="(max-width: 479px) 100vw, 480px"
                        srcSet="https://cdn.prod.website-files.com/6938169ca88035d1476d6905/69b3b4fbbd3583189f19fa89_frontdisk-p-500.webp 500w, https://cdn.prod.website-files.com/6938169ca88035d1476d6905/69b3b4fbbd3583189f19fa89_frontdisk.webp 920w"
                      />
                    </div>
                    <div className="card-content">
                      <h3 className="heading">Front Disc Brake</h3>
                      <p className="paragraph">
                        Front disc brakes provide better stopping power and improved safety.
                        <br />
                      </p>
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
                  <div className="last-mile-card">
                    <div className="card-image-wrap">
                      <img
                        className="image-5"
                        src="/images/46ff0523b552.webp"
                        loading="lazy"
                        width="480"
                        height="100"
                        alt=""
                        sizes="(max-width: 479px) 100vw, 480px"
                        srcSet="https://cdn.prod.website-files.com/6938169ca88035d1476d6905/69b3b4fb407e77f3006965ae_loadbalance-p-500.webp 500w, https://cdn.prod.website-files.com/6938169ca88035d1476d6905/69b3b4fb407e77f3006965ae_loadbalance.webp 920w"
                      />
                    </div>
                    <div className="card-content">
                      <h3 className="heading">Load Balance Rod</h3>
                      <p className="paragraph">
                        Helps distribute weight evenly for improved vehicle balance and handling.
                        <br />
                      </p>
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
                  <div className="last-mile-card">
                    <div className="card-image-wrap">
                      <img
                        className="image-5"
                        src="/images/e80791fbff24.webp"
                        loading="lazy"
                        width="480"
                        height="100"
                        alt=""
                        sizes="(max-width: 479px) 100vw, 480px"
                        srcSet="https://cdn.prod.website-files.com/6938169ca88035d1476d6905/69b3b4fb3ca8b37c1af86466_protectedpower-p-500.webp 500w, https://cdn.prod.website-files.com/6938169ca88035d1476d6905/69b3b4fb3ca8b37c1af86466_protectedpower.webp 920w"
                      />
                    </div>
                    <div className="card-content">
                      <h3 className="heading">IP67 Protected Power Electronics</h3>
                      <p className="paragraph">
                        Ensures reliability and durability even in harsh weather or operating environments.
                        <br />
                      </p>
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
                  <div className="last-mile-card">
                    <div className="card-image-wrap">
                      <img
                        className="image-5"
                        src="/images/2e997ebab250.webp"
                        loading="lazy"
                        width="480"
                        height="100"
                        alt=""
                        sizes="(max-width: 479px) 100vw, 480px"
                        srcSet="https://cdn.prod.website-files.com/6938169ca88035d1476d6905/69b3b4fb9049c18e8725cb49_hillholdassist-p-500.webp 500w, https://cdn.prod.website-files.com/6938169ca88035d1476d6905/69b3b4fb9049c18e8725cb49_hillholdassist-p-800.webp 800w, https://cdn.prod.website-files.com/6938169ca88035d1476d6905/69b3b4fb9049c18e8725cb49_hillholdassist.webp 920w"
                      />
                    </div>
                    <div className="card-content">
                      <h3 className="heading">Hill-hold Assist</h3>
                      <p className="paragraph">
                        Prevents rollback when starting on slopes, improving safety and driver confidence.
                        <br />
                      </p>
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
                  <div className="last-mile-card">
                    <div className="card-image-wrap">
                      <img
                        className="image-5"
                        src="/images/e3263ae5ad97.webp"
                        loading="lazy"
                        width="480"
                        height="100"
                        alt=""
                      />
                    </div>
                    <div className="card-content">
                      <h3 className="heading">AIS-038 Phase 2 Compliance</h3>
                      <p className="paragraph">
                        Complies with advanced vehicle safety standards.
                        <br />
                      </p>
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
                  <div className="last-mile-card">
                    <div className="card-image-wrap">
                      <img
                        className="image-5"
                        src="/images/ead5f283253e.webp"
                        loading="lazy"
                        width="480"
                        height="100"
                        alt=""
                        sizes="(max-width: 479px) 100vw, 480px"
                        srcSet="https://cdn.prod.website-files.com/6938169ca88035d1476d6905/69b3b4fb4833131f0dbb88da_fronteaxle-p-500.webp 500w, https://cdn.prod.website-files.com/6938169ca88035d1476d6905/69b3b4fb4833131f0dbb88da_fronteaxle.webp 920w"
                      />
                    </div>
                    <div className="card-content">
                      <h3 className="heading">Front Axle With I-Beam</h3>
                      <p className="paragraph">‍</p>
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
                  <div className="last-mile-card">
                    <div className="card-image-wrap">
                      <img
                        className="image-5"
                        src="/images/6b69a6094364.webp"
                        loading="lazy"
                        width="480"
                        height="100"
                        alt=""
                        sizes="(max-width: 479px) 100vw, 480px"
                        srcSet="https://cdn.prod.website-files.com/6938169ca88035d1476d6905/69b3b4fb3380bc9365816a7f_reareaxle-p-500.webp 500w, https://cdn.prod.website-files.com/6938169ca88035d1476d6905/69b3b4fb3380bc9365816a7f_reareaxle.webp 920w"
                      />
                    </div>
                    <div className="card-content">
                      <h3 className="heading">Rear E-axle With Motor (Industry Best)</h3>
                      <p className="paragraph" />
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
          </TabPane>
          <TabPane index={4}>
            <Carousel variant="slider">
              <CarouselItem>
                <div className="slot">
                  <div className="last-mile-card">
                    <div className="card-image-wrap">
                      <img
                        className="image-5"
                        src="/images/cb6bde2cb6ec.png"
                        loading="lazy"
                        width="480"
                        height="100"
                        alt=""
                      />
                    </div>
                    <div className="card-content">
                      <h3 className="heading">AC Cabin</h3>
                      <p className="paragraph">
                        An air-conditioned cabin improves comfort during long working hours and increases productivity.
                        <br />
                      </p>
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
                  <div className="last-mile-card">
                    <div className="card-image-wrap">
                      <img
                        className="image-5"
                        src="/images/4de0e577f2e3.jpg"
                        loading="lazy"
                        width="480"
                        height="100"
                        alt=""
                        sizes="(max-width: 479px) 100vw, 480px"
                        srcSet="https://cdn.prod.website-files.com/6938169ca88035d1476d6905/69b3aedee2206536c558598e_feb512ec7d8c39bf124b75e37ee88106d46efa29-p-500.jpg 500w, https://cdn.prod.website-files.com/6938169ca88035d1476d6905/69b3aedee2206536c558598e_feb512ec7d8c39bf124b75e37ee88106d46efa29-p-800.jpg 800w, https://cdn.prod.website-files.com/6938169ca88035d1476d6905/69b3aedee2206536c558598e_feb512ec7d8c39bf124b75e37ee88106d46efa29-p-1080.jpg 1080w, https://cdn.prod.website-files.com/6938169ca88035d1476d6905/69b3aedee2206536c558598e_feb512ec7d8c39bf124b75e37ee88106d46efa29-p-1600.jpg 1600w, https://cdn.prod.website-files.com/6938169ca88035d1476d6905/69b3aedee2206536c558598e_feb512ec7d8c39bf124b75e37ee88106d46efa29.jpg 1632w"
                      />
                    </div>
                    <div className="card-content">
                      <h3 className="heading">Advanced 2-Stage Parabolic Suspension</h3>
                      <p className="paragraph">
                        Designed for smoother rides and better load stability.
                        <br />
                      </p>
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
                  <div className="last-mile-card">
                    <div className="card-image-wrap">
                      <img
                        className="image-5"
                        src="/images/5323a5a81c64.png"
                        loading="lazy"
                        width="480"
                        height="100"
                        alt=""
                      />
                    </div>
                    <div className="card-content">
                      <h3 className="heading">Reclining Adjustable Driver Seat</h3>
                      <p className="paragraph">
                        Driver seat with headrest and reclining adjustment for better ergonomics and reduced fatigue.
                        <br />
                      </p>
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
                  <div className="last-mile-card">
                    <div className="card-image-wrap">
                      <img
                        className="image-5"
                        src="/images/d914ef05f91d.webp"
                        loading="lazy"
                        width="480"
                        height="100"
                        alt=""
                        sizes="(max-width: 479px) 100vw, 480px"
                        srcSet="https://cdn.prod.website-files.com/6938169ca88035d1476d6905/69da2a3e67dfb880dfa4fb5f_comfort-drivemodes-p-500.webp 500w, https://cdn.prod.website-files.com/6938169ca88035d1476d6905/69da2a3e67dfb880dfa4fb5f_comfort-drivemodes-p-800.webp 800w, https://cdn.prod.website-files.com/6938169ca88035d1476d6905/69da2a3e67dfb880dfa4fb5f_comfort-drivemodes.webp 920w"
                      />
                    </div>
                    <div className="card-content">
                      <h3 className="heading">Smart Drive Mode Switch</h3>
                      <p className="paragraph">
                        Drivers can switch between City mode and Power mode to match driving conditions.
                        <br />
                      </p>
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
                  <div className="last-mile-card">
                    <div className="card-image-wrap">
                      <img
                        className="image-5"
                        src="/images/c8fe0e47075e.webp"
                        loading="lazy"
                        width="480"
                        height="100"
                        alt=""
                        sizes="(max-width: 479px) 100vw, 480px"
                        srcSet="https://cdn.prod.website-files.com/6938169ca88035d1476d6905/69da2a3e07e169d0e84ba385_groundclearance-p-500.webp 500w, https://cdn.prod.website-files.com/6938169ca88035d1476d6905/69da2a3e07e169d0e84ba385_groundclearance.webp 920w"
                      />
                    </div>
                    <div className="card-content">
                      <h3 className="heading">Best-in-Class Ground Clearance</h3>
                      <p className="paragraph">
                        Around 197 mm ground clearance, allowing the vehicle to handle rough or uneven roads easily.
                        <br />
                      </p>
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
          </TabPane>
          <TabPane index={5}>
            <Carousel variant="slider">
              <CarouselItem>
                <div className="slot">
                  <div className="last-mile-card">
                    <div className="card-image-wrap">
                      <img
                        className="image-5"
                        src="/images/eae40bc3d210.webp"
                        loading="lazy"
                        width="480"
                        height="100"
                        alt=""
                        sizes="(max-width: 479px) 100vw, 480px"
                        srcSet="https://cdn.prod.website-files.com/6938169ca88035d1476d6905/69da2ac556f34557d9171dda_walkthroughcabin-p-500.webp 500w, https://cdn.prod.website-files.com/6938169ca88035d1476d6905/69da2ac556f34557d9171dda_walkthroughcabin.webp 920w"
                      />
                    </div>
                    <div className="card-content">
                      <h3 className="heading">Spacious Walkthrough Cabin</h3>
                      <p className="paragraph">Ergonomic cabin layout improves movement and comfort for the driver.</p>
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
                  <div className="last-mile-card">
                    <div className="card-image-wrap">
                      <img
                        className="image-5"
                        src="/images/1ad6e67ef32a.webp"
                        loading="lazy"
                        width="480"
                        height="100"
                        alt=""
                        sizes="(max-width: 479px) 100vw, 480px"
                        srcSet="https://cdn.prod.website-files.com/6938169ca88035d1476d6905/69da2ac567dfb880dfa5023a_steering-p-500.webp 500w, https://cdn.prod.website-files.com/6938169ca88035d1476d6905/69da2ac567dfb880dfa5023a_steering.webp 920w"
                      />
                    </div>
                    <div className="card-content">
                      <h3 className="heading">Electric Power Steering</h3>
                      <p className="paragraph">
                        Electric power steering ensures smoother control and reduces driver effort during long drives.
                        <br />
                      </p>
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
                  <div className="last-mile-card">
                    <div className="card-image-wrap">
                      <img
                        className="image-5"
                        src="/images/999208b6c654.webp"
                        loading="lazy"
                        width="480"
                        height="100"
                        alt=""
                        sizes="(max-width: 479px) 100vw, 480px"
                        srcSet="https://cdn.prod.website-files.com/6938169ca88035d1476d6905/69da2ac55931b223dc4fd9e8_chargingports-p-500.webp 500w, https://cdn.prod.website-files.com/6938169ca88035d1476d6905/69da2ac55931b223dc4fd9e8_chargingports-p-800.webp 800w, https://cdn.prod.website-files.com/6938169ca88035d1476d6905/69da2ac55931b223dc4fd9e8_chargingports.webp 920w"
                      />
                    </div>
                    <div className="card-content">
                      <h3 className="heading">USB Charging Ports </h3>
                      <p className="paragraph">
                        Conveniently placed USB ports keep your devices powered, wherever the day takes you.
                      </p>
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
                  <div className="last-mile-card">
                    <div className="card-image-wrap">
                      <img
                        className="image-5"
                        src="/images/fb5a0717df02.webp"
                        loading="lazy"
                        width="480"
                        height="100"
                        alt=""
                        sizes="(max-width: 479px) 100vw, 480px"
                        srcSet="https://cdn.prod.website-files.com/6938169ca88035d1476d6905/69da2ac506cf5349b59dfc52_parkingcamera-p-500.webp 500w, https://cdn.prod.website-files.com/6938169ca88035d1476d6905/69da2ac506cf5349b59dfc52_parkingcamera.webp 920w"
                      />
                    </div>
                    <div className="card-content">
                      <h3 className="heading">Reverse Parking Camera</h3>
                      <p className="paragraph">
                        A clear rear view helps you park with confidence and avoid obstacles with ease.
                      </p>
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
                  <div className="last-mile-card">
                    <div className="card-image-wrap">
                      <img
                        className="image-5"
                        src="/images/8cd33547a98d.webp"
                        loading="lazy"
                        width="480"
                        height="100"
                        alt=""
                        sizes="(max-width: 479px) 100vw, 480px"
                        srcSet="https://cdn.prod.website-files.com/6938169ca88035d1476d6905/69da2ac56193f610ba14bbd3_foglamps-p-500.webp 500w, https://cdn.prod.website-files.com/6938169ca88035d1476d6905/69da2ac56193f610ba14bbd3_foglamps-p-800.webp 800w, https://cdn.prod.website-files.com/6938169ca88035d1476d6905/69da2ac56193f610ba14bbd3_foglamps.webp 920w"
                      />
                    </div>
                    <div className="card-content">
                      <h3 className="heading">Fog Lamps</h3>
                      <p className="paragraph">
                        Powerful fog lamps enhance visibility, keeping you safe in low-light and foggy conditions.
                      </p>
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
          </TabPane>
        </TabContent>
      </Tabs>
    </section>
  );
}

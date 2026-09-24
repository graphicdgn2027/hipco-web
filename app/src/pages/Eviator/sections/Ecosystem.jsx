import { Tabs, TabMenu, TabLink, TabContent, TabPane } from '@/components/ui/Tabs';
import { Carousel, CarouselItem } from '@/components/ui/Carousel';

export default function Ecosystem() {
  return (
    <section className="base-container-padding-flex-gap-copy spacing">
      <div className="div-block-389">
        <div className="carousel-header">
          <h2 className="heading-2">The EViator Ecosystem</h2>
        </div>
      </div>
      <Tabs className="tabs-2 only-slider-2" defaultIndex={0}>
        <TabMenu className="tabs-menu-3 only-slider-3">
          <TabLink index={0} className="tab-link-tab-1-3 only-slider-13 w-inline-block">
            <div className="text-block-62 only-slider-14">Service</div>
          </TabLink>
          <TabLink index={1} className="tab-link-tab-1-3 only-slider-13 w-inline-block">
            <div className="text-block-62 only-slider-14">Charging</div>
          </TabLink>
        </TabMenu>
        <TabContent className="tabs-content only-slider-15">
          <TabPane index={0}>
            <Carousel variant="slider">
              <CarouselItem>
                <div className="slot">
                  <div className="last-mile-card">
                    <div className="card-image-wrap">
                      <img
                        className="image-5"
                        src="/images/57474ef7ac26.jpg"
                        loading="lazy"
                        width="480"
                        height="100"
                        alt=""
                        sizes="(max-width: 479px) 100vw, 480px"
                        srcSet="https://cdn.prod.website-files.com/6938169ca88035d1476d6905/6a3a1f3a89f800a4a3817d06_MONTRA%2027MAR260361_fin_yellow-p-500.jpg 500w, https://cdn.prod.website-files.com/6938169ca88035d1476d6905/6a3a1f3a89f800a4a3817d06_MONTRA%2027MAR260361_fin_yellow-p-800.jpg 800w, https://cdn.prod.website-files.com/6938169ca88035d1476d6905/6a3a1f3a89f800a4a3817d06_MONTRA%2027MAR260361_fin_yellow-p-1080.jpg 1080w, https://cdn.prod.website-files.com/6938169ca88035d1476d6905/6a3a1f3a89f800a4a3817d06_MONTRA%2027MAR260361_fin_yellow-p-1600.jpg 1600w, https://cdn.prod.website-files.com/6938169ca88035d1476d6905/6a3a1f3a89f800a4a3817d06_MONTRA%2027MAR260361_fin_yellow-p-2000.jpg 2000w, https://cdn.prod.website-files.com/6938169ca88035d1476d6905/6a3a1f3a89f800a4a3817d06_MONTRA%2027MAR260361_fin_yellow-p-2600.jpg 2600w, https://cdn.prod.website-files.com/6938169ca88035d1476d6905/6a3a1f3a89f800a4a3817d06_MONTRA%2027MAR260361_fin_yellow-p-3200.jpg 3200w, https://cdn.prod.website-files.com/6938169ca88035d1476d6905/6a3a1f3a89f800a4a3817d06_MONTRA%2027MAR260361_fin_yellow.jpg 8192w"
                      />
                    </div>
                    <div className="card-content">
                      <h3 className="heading">E350 with 32 kWh battery</h3>
                      <p className="paragraph">
                        Standard vehicle warranty: 3 years/1.5 lakh kms
                        <br />
                        Standard battery warranty: 5 years/2 lakh kms
                        <br />
                        Extended Warranty – Vehicle &amp; Battery Warranty - 7 years/2.5 lakh kms
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
                        src="/images/8448751e523d.jpg"
                        loading="lazy"
                        width="480"
                        height="100"
                        alt=""
                        sizes="(max-width: 479px) 100vw, 480px"
                        srcSet="https://cdn.prod.website-files.com/6938169ca88035d1476d6905/6a3a1f38a49d2c0c3b8c90b1_MONTRA%2027MAR260292_fin-p-500.jpg 500w, https://cdn.prod.website-files.com/6938169ca88035d1476d6905/6a3a1f38a49d2c0c3b8c90b1_MONTRA%2027MAR260292_fin-p-800.jpg 800w, https://cdn.prod.website-files.com/6938169ca88035d1476d6905/6a3a1f38a49d2c0c3b8c90b1_MONTRA%2027MAR260292_fin-p-1080.jpg 1080w, https://cdn.prod.website-files.com/6938169ca88035d1476d6905/6a3a1f38a49d2c0c3b8c90b1_MONTRA%2027MAR260292_fin-p-1600.jpg 1600w, https://cdn.prod.website-files.com/6938169ca88035d1476d6905/6a3a1f38a49d2c0c3b8c90b1_MONTRA%2027MAR260292_fin-p-2000.jpg 2000w, https://cdn.prod.website-files.com/6938169ca88035d1476d6905/6a3a1f38a49d2c0c3b8c90b1_MONTRA%2027MAR260292_fin-p-2600.jpg 2600w, https://cdn.prod.website-files.com/6938169ca88035d1476d6905/6a3a1f38a49d2c0c3b8c90b1_MONTRA%2027MAR260292_fin-p-3200.jpg 3200w, https://cdn.prod.website-files.com/6938169ca88035d1476d6905/6a3a1f38a49d2c0c3b8c90b1_MONTRA%2027MAR260292_fin.jpg 7970w"
                      />
                    </div>
                    <div className="card-content">
                      <h3 className="heading">E350L with 40 kWh battery</h3>
                      <p className="paragraph">
                        Standard vehicle warranty: 5 years / 1.75 lakh km
                        <br />
                        Standard battery warranty: 5 years/2 lakh kms
                        <br />
                        Extended Warranty – Vehicle &amp; Battery Warranty - 7 years/2.5 lakh kms
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
                        src="/images/86202ece69ee.jpg"
                        loading="lazy"
                        width="480"
                        height="100"
                        alt=""
                        sizes="(max-width: 479px) 100vw, 480px"
                        srcSet="https://cdn.prod.website-files.com/6938169ca88035d1476d6905/6a3a1f3a04afeecf6689d401_MONTRA%2027MAR260495_fin_blk%20bdy-p-500.jpg 500w, https://cdn.prod.website-files.com/6938169ca88035d1476d6905/6a3a1f3a04afeecf6689d401_MONTRA%2027MAR260495_fin_blk%20bdy-p-800.jpg 800w, https://cdn.prod.website-files.com/6938169ca88035d1476d6905/6a3a1f3a04afeecf6689d401_MONTRA%2027MAR260495_fin_blk%20bdy-p-1080.jpg 1080w, https://cdn.prod.website-files.com/6938169ca88035d1476d6905/6a3a1f3a04afeecf6689d401_MONTRA%2027MAR260495_fin_blk%20bdy-p-1600.jpg 1600w, https://cdn.prod.website-files.com/6938169ca88035d1476d6905/6a3a1f3a04afeecf6689d401_MONTRA%2027MAR260495_fin_blk%20bdy-p-2000.jpg 2000w, https://cdn.prod.website-files.com/6938169ca88035d1476d6905/6a3a1f3a04afeecf6689d401_MONTRA%2027MAR260495_fin_blk%20bdy-p-2600.jpg 2600w, https://cdn.prod.website-files.com/6938169ca88035d1476d6905/6a3a1f3a04afeecf6689d401_MONTRA%2027MAR260495_fin_blk%20bdy-p-3200.jpg 3200w, https://cdn.prod.website-files.com/6938169ca88035d1476d6905/6a3a1f3a04afeecf6689d401_MONTRA%2027MAR260495_fin_blk%20bdy.jpg 7965w"
                      />
                    </div>
                    <div className="card-content">
                      <h3 className="heading">E350L+ with 50 kWh battery</h3>
                      <p className="paragraph">
                        Standard vehicle warranty: 5 years / 1.75 lakh km
                        <br />
                        Standard battery warranty: 5 years/2 lakh kms
                        <br />
                        Extended Warranty – Vehicle &amp; Battery Warranty - 7 years/2.5 lakh kms
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
                        src="/images/d788146d4b53.png"
                        loading="lazy"
                        width="480"
                        height="100"
                        alt=""
                      />
                    </div>
                    <div className="card-content">
                      <h3 className="heading">Annual Maintenance Packages</h3>
                      <p className="paragraph">Maintenance plans available to keep vehicles running efficiently.</p>
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
                        src="/images/102df9258ac2.png"
                        loading="lazy"
                        width="480"
                        height="100"
                        alt=""
                      />
                    </div>
                    <div className="card-content">
                      <h3 className="heading">24/7 Uptime Center</h3>
                      <p className="paragraph">
                        Real-time monitoring ensures <strong>around 95% vehicle uptime</strong> with proactive support
                        and service.
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
                        src="/images/27dd590fe323.png"
                        loading="lazy"
                        width="480"
                        height="100"
                        alt=""
                      />
                    </div>
                    <div className="card-content">
                      <h3 className="heading">Proactive Vehicle Diagnostics</h3>
                      <p className="paragraph">
                        Predictive diagnostics monitor vehicle health and help prevent unexpected breakdowns.
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
                        src="/images/0423438022f3.png"
                        loading="lazy"
                        width="480"
                        height="100"
                        alt=""
                      />
                    </div>
                    <div className="card-content">
                      <h3 className="heading">Roadside Assistance</h3>
                      <p className="paragraph">
                        24/7 support to help you stay on track with quick assistance, real-time updates, and reliable
                        breakdown support.
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
                        src="/images/a34d8d962153.png"
                        loading="lazy"
                        width="480"
                        height="100"
                        alt=""
                      />
                    </div>
                    <div className="card-content">
                      <h3 className="heading">Service Network</h3>
                      <p className="paragraph">
                        A strong service network designed to keep your vehicle running with dependable support and
                        minimal downtime.
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
                        src="/images/41b1970682c9.png"
                        loading="lazy"
                        width="480"
                        height="100"
                        alt=""
                        sizes="(max-width: 479px) 100vw, 480px"
                        srcSet="https://cdn.prod.website-files.com/6938169ca88035d1476d6905/69e0d75d90eb0b16a268fa7b_Powerful%20%20Performance-p-500.png 500w, https://cdn.prod.website-files.com/6938169ca88035d1476d6905/69e0d75d90eb0b16a268fa7b_Powerful%20%20Performance.png 635w"
                      />
                    </div>
                    <div className="card-content">
                      <h3 className="heading">Installation</h3>
                      <p className="paragraph">
                        Simple and hassle-free charger installation, supported by a wide network and round-the-clock
                        assistance.
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
                        src="/images/33dc5b38d7c8.png"
                        loading="lazy"
                        width="480"
                        height="100"
                        alt=""
                        sizes="(max-width: 479px) 100vw, 480px"
                        srcSet="https://cdn.prod.website-files.com/6938169ca88035d1476d6905/69e0d75d71336b0d0e3035fc_Powerful%20%20Performance%20(1)-p-500.png 500w, https://cdn.prod.website-files.com/6938169ca88035d1476d6905/69e0d75d71336b0d0e3035fc_Powerful%20%20Performance%20(1).png 635w"
                      />
                    </div>
                    <div className="card-content">
                      <h3 className="heading">Locator</h3>
                      <p className="paragraph">
                        Easily find nearby charging stations with real-time availability, and book or pay directly
                        through the app.
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

import { Tabs, TabMenu, TabLink, TabContent, TabPane } from '@/components/ui/Tabs';

export default function Features() {
  return (
    <section className="base-padding-flex">
      <div className="w-layout-blockcontainer base-container w-container">
        <div className="carousel-header">
          <h2 className="heading-2">Features</h2>
          <p className="paragraph-2">
            Gear up to experience the electric auto packed with industry-first features &amp; advanced technology
          </p>
        </div>
      </div>
      <Tabs className="models-tabs-4" defaultIndex={0}>
        <TabMenu className="models-tabs-menu-3">
          <TabLink index={0} className="model-tab-3 w-inline-block">
            <div className="text-block-85">Range</div>
          </TabLink>
          <TabLink index={1} className="tab-link-tab-3-4 w-inline-block">
            <div className="text-block-82">Reliability</div>
          </TabLink>
          <TabLink index={2} className="tab-link-tab-3-4 w-inline-block">
            <div className="text-block-82">Power</div>
          </TabLink>
        </TabMenu>
        <TabContent className="tabs-content-2">
          <TabPane index={0} className="tab-pane-tab-1">
            <div className="model-card-3">
              <div className="model-card-inner">
                <h3 className="heading-42">On a single full charge</h3>
                <p className="feature-text-2">
                  Access Super Range with the Super Auto! In less than 4 <br />
                  hours, you can fully charge your battery and <br />
                  comfortably drive for an entire day.
                </p>
              </div>
              <img
                className="image-42"
                sizes="100vw"
                srcSet="https://cdn.prod.website-files.com/6938169ca88035d1476d6905/69b13df9dbf70cc52ecb0f87_ddfef37da804794ca5634d2a9fecc05ecc122c95-p-500.png 500w, https://cdn.prod.website-files.com/6938169ca88035d1476d6905/69b13df9dbf70cc52ecb0f87_ddfef37da804794ca5634d2a9fecc05ecc122c95-p-800.png 800w, https://cdn.prod.website-files.com/6938169ca88035d1476d6905/69b13df9dbf70cc52ecb0f87_ddfef37da804794ca5634d2a9fecc05ecc122c95-p-1080.png 1080w, https://cdn.prod.website-files.com/6938169ca88035d1476d6905/69b13df9dbf70cc52ecb0f87_ddfef37da804794ca5634d2a9fecc05ecc122c95.png 1536w"
                alt=""
                src="/images/4e98c3fdc3f1.png"
                loading="lazy"
              />
            </div>
          </TabPane>
          <TabPane index={1} className="tab-pane-tab-2">
            <div className="model-card-2-with-padding">
              <div className="model-card-inner">
                <h3 className="heading-42">Cutting-edge feature</h3>
              </div>
              <img
                className="image-42"
                sizes="100vw"
                srcSet="https://cdn.prod.website-files.com/6938169ca88035d1476d6905/69b13dfe22546b7f5b87025b_84597891c912af5619eb9b0dab78c29390b764f8-p-500.png 500w, https://cdn.prod.website-files.com/6938169ca88035d1476d6905/69b13dfe22546b7f5b87025b_84597891c912af5619eb9b0dab78c29390b764f8-p-800.png 800w, https://cdn.prod.website-files.com/6938169ca88035d1476d6905/69b13dfe22546b7f5b87025b_84597891c912af5619eb9b0dab78c29390b764f8-p-1080.png 1080w, https://cdn.prod.website-files.com/6938169ca88035d1476d6905/69b13dfe22546b7f5b87025b_84597891c912af5619eb9b0dab78c29390b764f8-p-1600.png 1600w, https://cdn.prod.website-files.com/6938169ca88035d1476d6905/69b13dfe22546b7f5b87025b_84597891c912af5619eb9b0dab78c29390b764f8-p-2000.png 2000w, https://cdn.prod.website-files.com/6938169ca88035d1476d6905/69b13dfe22546b7f5b87025b_84597891c912af5619eb9b0dab78c29390b764f8-p-2600.png 2600w, https://cdn.prod.website-files.com/6938169ca88035d1476d6905/69b13dfe22546b7f5b87025b_84597891c912af5619eb9b0dab78c29390b764f8-p-3200.png 3200w, https://cdn.prod.website-files.com/6938169ca88035d1476d6905/69b13dfe22546b7f5b87025b_84597891c912af5619eb9b0dab78c29390b764f8.png 4096w"
                alt=""
                src="/images/53cec04e80c0.png"
                loading="lazy"
              />
            </div>
          </TabPane>
          <TabPane index={2} className="tab-pane-tab-4">
            <div className="model-card-3">
              <img
                className="image-cargo"
                sizes="100vw"
                srcSet="https://cdn.prod.website-files.com/6938169ca88035d1476d6905/69b14034b93b95d873fbd62f_e5ee1f177cdfeca5e0734088c8c56de32d954a7e-p-500.webp 500w, https://cdn.prod.website-files.com/6938169ca88035d1476d6905/69b14034b93b95d873fbd62f_e5ee1f177cdfeca5e0734088c8c56de32d954a7e-p-800.webp 800w, https://cdn.prod.website-files.com/6938169ca88035d1476d6905/69b14034b93b95d873fbd62f_e5ee1f177cdfeca5e0734088c8c56de32d954a7e-p-1080.webp 1080w, https://cdn.prod.website-files.com/6938169ca88035d1476d6905/69b14034b93b95d873fbd62f_e5ee1f177cdfeca5e0734088c8c56de32d954a7e-p-1600.webp 1600w, https://cdn.prod.website-files.com/6938169ca88035d1476d6905/69b14034b93b95d873fbd62f_e5ee1f177cdfeca5e0734088c8c56de32d954a7e-p-2000.webp 2000w, https://cdn.prod.website-files.com/6938169ca88035d1476d6905/69b14034b93b95d873fbd62f_e5ee1f177cdfeca5e0734088c8c56de32d954a7e-p-2600.webp 2600w, https://cdn.prod.website-files.com/6938169ca88035d1476d6905/69b14034b93b95d873fbd62f_e5ee1f177cdfeca5e0734088c8c56de32d954a7e-p-3200.webp 3200w, https://cdn.prod.website-files.com/6938169ca88035d1476d6905/69b14034b93b95d873fbd62f_e5ee1f177cdfeca5e0734088c8c56de32d954a7e.webp 3840w"
                alt=""
                src="/images/2d493e644918.webp"
                loading="lazy"
              />
              <div className="model-info-row-cargo">
                <div className="model-spec-4">
                  <div className="div-block-133">
                    <div className="text-block-84">
                      <span className="text-span-18">8</span> kW <br />
                      Industry Leading Power
                    </div>
                  </div>
                  <div className="div-block-111">
                    <div className="text-block-86">
                      <span className="text-span-18">45</span>Kmph
                      <br />
                      Top Speed
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabPane>
        </TabContent>
      </Tabs>
    </section>
  );
}

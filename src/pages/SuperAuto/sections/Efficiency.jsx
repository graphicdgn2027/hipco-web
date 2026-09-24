import { Tabs, TabMenu, TabLink, TabContent, TabPane } from '@/components/ui/Tabs';

export default function Efficiency() {
  return (
    <section className="base-padding-flex">
      <div className="w-layout-blockcontainer base-container w-container">
        <div className="carousel-header">
          <h2 className="heading-2">
            Efficiency That Keeps You Moving
            <br />
          </h2>
          <p className="paragraph-2">
            Experience the future of urban mobility with an electric auto engineered with industry-first innovations and
            cutting-edge technology.
            <br />
          </p>
        </div>
      </div>
      <Tabs className="models-tabs-2" defaultIndex={0}>
        <TabMenu className="models-tabs-menu-2">
          <TabLink index={0} className="model-tab-2 w-inline-block">
            <div className="text-block-71">Range</div>
          </TabLink>
          <TabLink index={1} className="tab-link-tab-3-4 w-inline-block">
            <div className="text-block-73">Reliability</div>
          </TabLink>
          <TabLink index={2} className="tab-link-tab-3-4 w-inline-block">
            <div className="text-block-73">Power</div>
          </TabLink>
        </TabMenu>
        <TabContent className="tabs-content-2">
          <TabPane index={0} className="tab-pane-tab-1">
            <div className="model-card-2">
              <div className="model-card-inner">
                <h3 className="heading-24">On a single full charge</h3>
                <p className="feature-text-2">
                  Designed for long operational hours, the Super Auto offers an efficient electric driving range that
                  allows drivers to complete more trips on a single charge, helping maximize daily earnings.
                </p>
              </div>
              <img
                className="image-34"
                sizes="100vw"
                srcSet="https://cdn.prod.website-files.com/6938169ca88035d1476d6905/69ae8895dd78c4825786ac4d_Screenshot%25202026-03-09%2520124636-p-500.png 500w, https://cdn.prod.website-files.com/6938169ca88035d1476d6905/69ae8895dd78c4825786ac4d_Screenshot%25202026-03-09%2520124636-p-800.png 800w, https://cdn.prod.website-files.com/6938169ca88035d1476d6905/69ae8895dd78c4825786ac4d_Screenshot%202026-03-09%20124636.png 915w"
                alt=""
                loading="lazy"
                src="/images/71dbeb3abb54.png"
              />
            </div>
          </TabPane>
          <TabPane index={1} className="tab-pane-tab-2">
            <div className="model-card-2">
              <div className="model-card-inner-static">
                <h3 className="heading-24">100% Metal Body</h3>
                <p className="feature-text-2">
                  Engineered with a robust metal body and durable chassis, the Super Auto is built to withstand the
                  challenges of daily commercial use and demanding road conditions.
                </p>
              </div>
              <img
                className="image-34"
                sizes="100vw"
                srcSet="https://cdn.prod.website-files.com/6938169ca88035d1476d6905/69cc25dd7d799cdc2bcc356d_8f67bc309907b5fc115b102823963053e4159662-p-500.png 500w, https://cdn.prod.website-files.com/6938169ca88035d1476d6905/69cc25dd7d799cdc2bcc356d_8f67bc309907b5fc115b102823963053e4159662-p-800.png 800w, https://cdn.prod.website-files.com/6938169ca88035d1476d6905/69cc25dd7d799cdc2bcc356d_8f67bc309907b5fc115b102823963053e4159662-p-1080.png 1080w, https://cdn.prod.website-files.com/6938169ca88035d1476d6905/69cc25dd7d799cdc2bcc356d_8f67bc309907b5fc115b102823963053e4159662-p-1600.png 1600w, https://cdn.prod.website-files.com/6938169ca88035d1476d6905/69cc25dd7d799cdc2bcc356d_8f67bc309907b5fc115b102823963053e4159662-p-2000.png 2000w, https://cdn.prod.website-files.com/6938169ca88035d1476d6905/69cc25dd7d799cdc2bcc356d_8f67bc309907b5fc115b102823963053e4159662-p-2600.png 2600w, https://cdn.prod.website-files.com/6938169ca88035d1476d6905/69cc25dd7d799cdc2bcc356d_8f67bc309907b5fc115b102823963053e4159662-p-3200.png 3200w, https://cdn.prod.website-files.com/6938169ca88035d1476d6905/69cc25dd7d799cdc2bcc356d_8f67bc309907b5fc115b102823963053e4159662.png 3243w"
                alt=""
                src="/images/f1616b2ca950.png"
                loading="lazy"
              />
            </div>
          </TabPane>
          <TabPane index={2} className="tab-pane-tab-4">
            <div className="model-card-2">
              <img
                className="image-hide-on-sm"
                sizes="100vw"
                srcSet="https://cdn.prod.website-files.com/6938169ca88035d1476d6905/69ae8895dd78c4825786ac5c_7eb8f3808c6361bb6b55379c9debb450f97b5bff-p-500.jpg 500w, https://cdn.prod.website-files.com/6938169ca88035d1476d6905/69ae8895dd78c4825786ac5c_7eb8f3808c6361bb6b55379c9debb450f97b5bff-p-800.jpg 800w, https://cdn.prod.website-files.com/6938169ca88035d1476d6905/69ae8895dd78c4825786ac5c_7eb8f3808c6361bb6b55379c9debb450f97b5bff-p-1080.jpg 1080w, https://cdn.prod.website-files.com/6938169ca88035d1476d6905/69ae8895dd78c4825786ac5c_7eb8f3808c6361bb6b55379c9debb450f97b5bff-p-1600.jpg 1600w, https://cdn.prod.website-files.com/6938169ca88035d1476d6905/69ae8895dd78c4825786ac5c_7eb8f3808c6361bb6b55379c9debb450f97b5bff-p-2000.jpg 2000w, https://cdn.prod.website-files.com/6938169ca88035d1476d6905/69ae8895dd78c4825786ac5c_7eb8f3808c6361bb6b55379c9debb450f97b5bff.jpg 2416w"
                alt=""
                src="/images/5674095335bd.jpg"
                loading="lazy"
              />
              <div className="model-info-row">
                <div className="model-spec-2">
                  <div className="div-block-113">
                    <div className="text-block-69">
                      <span className="text-span-10">60</span> Nm <br />
                      Plain Torque
                    </div>
                  </div>
                  <div className="div-block-111">
                    <div className="text-block-70">
                      <span className="text-span-10">10</span>kWh
                      <br />
                      Peak Power{' '}
                    </div>
                  </div>
                  <div className="div-block-112">
                    <div className="text-block-72">
                      <span className="text-span-10">55</span>kmph
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

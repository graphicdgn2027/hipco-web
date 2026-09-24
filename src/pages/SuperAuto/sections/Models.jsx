import { Tabs, TabMenu, TabLink, TabContent, TabPane } from '@/components/ui/Tabs';

export default function Models() {
  return (
    <section className="models-section">
      <div className="base-container-padding-flex-gap full-height">
        <div className="carousel-header">
          <h2 className="heading-2">
            Find Your Perfect <span className="text-span">Electric Partner</span>
          </h2>
        </div>
        <Tabs className="models-tabs" defaultIndex={0}>
          <TabMenu className="models-tabs-menu">
            <TabLink index={0} className="model-tab w-inline-block">
              <div className="text-block">ePL 2.0 R</div>
            </TabLink>
            <TabLink index={1} className="tab-link-tab-2 w-inline-block">
              <div className="text-block-2">ePL 2.0 </div>
            </TabLink>
          </TabMenu>
          <TabContent className="tabs-content-5">
            <TabPane index={0} className="tab-pane-tab-1-2">
              <div className="model-card">
                <img
                  className="image-9"
                  src="/images/1bb0e14d3e0d.png"
                  loading="lazy"
                  alt=""
                  height="Auto"
                  sizes="100vw"
                  srcSet="https://cdn.prod.website-files.com/6938169ca88035d1476d6905/69728753aff0871ade0bb92c_fdaef650097b5b0ea4dc908da08edaf748cceea0%20(2)-p-500.png 500w, https://cdn.prod.website-files.com/6938169ca88035d1476d6905/69728753aff0871ade0bb92c_fdaef650097b5b0ea4dc908da08edaf748cceea0%20(2)-p-800.png 800w, https://cdn.prod.website-files.com/6938169ca88035d1476d6905/69728753aff0871ade0bb92c_fdaef650097b5b0ea4dc908da08edaf748cceea0%20(2)-p-1080.png 1080w, https://cdn.prod.website-files.com/6938169ca88035d1476d6905/69728753aff0871ade0bb92c_fdaef650097b5b0ea4dc908da08edaf748cceea0%20(2)-p-1600.png 1600w, https://cdn.prod.website-files.com/6938169ca88035d1476d6905/69728753aff0871ade0bb92c_fdaef650097b5b0ea4dc908da08edaf748cceea0%20(2)-p-2000.png 2000w, https://cdn.prod.website-files.com/6938169ca88035d1476d6905/69728753aff0871ade0bb92c_fdaef650097b5b0ea4dc908da08edaf748cceea0%20(2)-p-2600.png 2600w, https://cdn.prod.website-files.com/6938169ca88035d1476d6905/69728753aff0871ade0bb92c_fdaef650097b5b0ea4dc908da08edaf748cceea0%20(2).png 3072w"
                />
                <div className="model-info-row-model">
                  <div className="model-name-wrap">
                    <h2 className="text-block-3">
                      Model <em className="italic-text-2">ePL 2.0 R</em>
                    </h2>
                  </div>
                  <div className="model-spec">
                    <div className="div-block-28">
                      <div className="text-block-4">
                        <span className="text-span-4">160+</span>km <br />
                      </div>
                      <div className="text-block-97">range</div>
                    </div>
                    <div className="div-block-28">
                      <div className="text-block-4">
                        <span className="text-span-4">10.6 </span>kWH <br />
                      </div>
                      <div className="text-block-97">Battery Capacity</div>
                    </div>
                    <div className="div-block-28-no-border">
                      <div className="text-block-4">
                        <span className="text-span-4">LED</span>
                        <br />
                      </div>
                      <div className="text-block-97">Headlamps &amp; Tail Lights </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabPane>
            <TabPane index={1} className="tab-pane-tab-2-2">
              <div className="model-card">
                <img
                  className="image-9"
                  src="/images/e691f24ee28c.png"
                  loading="lazy"
                  alt=""
                  height="Auto"
                  sizes="100vw"
                  srcSet="https://cdn.prod.website-files.com/6938169ca88035d1476d6905/69779bccbb4d34ae6004cbbb_dc54c888cc6f7a0ea57103225a81e91326f220d7-p-500.png 500w, https://cdn.prod.website-files.com/6938169ca88035d1476d6905/69779bccbb4d34ae6004cbbb_dc54c888cc6f7a0ea57103225a81e91326f220d7-p-800.png 800w, https://cdn.prod.website-files.com/6938169ca88035d1476d6905/69779bccbb4d34ae6004cbbb_dc54c888cc6f7a0ea57103225a81e91326f220d7.png 1024w"
                />
                <div className="model-info-row-model">
                  <div className="model-name-wrap">
                    <h2 className="text-block-3">
                      Model <em className="italic-text-2">ePL 2.0</em>
                    </h2>
                  </div>
                  <div className="model-spec">
                    <div className="div-block-28">
                      <div className="text-block-4">
                        <span className="text-span-4">160+</span>km <br />
                      </div>
                      <div className="text-block-97">range</div>
                    </div>
                    <div className="div-block-28">
                      <div className="text-block-4">
                        <span className="text-span-4">10.6 </span>kWH
                        <br />
                      </div>
                      <div className="text-block-97">Battery Capacity</div>
                    </div>
                    <div className="div-block-28-no-border">
                      <div className="text-block-4">
                        <span className="text-span-4">LED</span> <br />
                      </div>
                      <div className="text-block-97">Tail Lights</div>
                    </div>
                  </div>
                </div>
              </div>
            </TabPane>
          </TabContent>
        </Tabs>
      </div>
    </section>
  );
}

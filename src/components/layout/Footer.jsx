import { useLocation } from 'react-router-dom';
import { AppLink } from '@/components/ui/AppLink';
import { socialLinksFor } from '@/config/social';
import { site } from '@/config/site';
import { footerColumns, legalLinks } from '@/data/navigation';

const SOCIAL_ICONS = [
  { key: 'facebook', src: '/images/c31038d3af99.svg', className: 'image-184' },
  { key: 'instagram', src: '/images/5414d7f57f37.svg', className: 'riinstagram-fill' },
  { key: 'x', src: '/images/8f46ab603948.svg', className: 'devicontwitter' },
  { key: 'linkedin', src: '/images/f0bc7cc9283a.svg', className: 'flowbitelinkedin-solid' },
  { key: 'youtube', src: '/images/9438f1b50aa9.svg', className: 'mingcuteyoutube-fill' },
  { key: 'whatsapp', src: '/images/dff6f43679ba.svg', className: 'riwhatsapp-fill' },
];

function Copyright() {
  return (
    <div className="contact-copy">
      <div className="frame-18-copy">
        <div className="frame-17-copy">
          <p className="_2025-montra-electric-all-rights-reserved">
            © {new Date().getFullYear()} Montra Electric . All rights reserved
          </p>
          {legalLinks.map((link) => (
            <AppLink key={link.href} href={link.href} className="privacy-policy">
              {link.label}
            </AppLink>
          ))}
        </div>
      </div>
    </div>
  );
}

function FooterLink({ link }) {
  const content = <div className={link.textClassName ?? 'text-block-154'}>{link.label}</div>;
  if (link.external) {
    return (
      <a href={link.href} target="_blank" rel="noreferrer" className={`${link.className} w-inline-block`}>
        {content}
      </a>
    );
  }
  return (
    <AppLink href={link.href} className={`${link.className} w-inline-block`}>
      {content}
    </AppLink>
  );
}

export default function Footer() {
  const { pathname } = useLocation();
  const social = socialLinksFor(pathname);

  return (
    <section className="footer-main-copy-copy">
      <div className="base-container-padding-flex-gap-c">
        <div className="footer-grid-copy-copy">
          <div id="w-node-ad4fc399-69b2-4256-755a-c0ca2328856c-23288569" className="div-block-387">
            <div className="div-block-388">
              <img className="image-277" src="/images/88cdd2435b80.svg" alt="Montra Electric" />
            </div>
            <div className="div-block-380 div-block-388">
              <Copyright />
            </div>
          </div>

          {footerColumns.map((column) => (
            <div key={column.id} id={column.id} className="div-block-383">
              {column.heading && <div className="text-block-155-copy">{column.heading}</div>}
              {column.links.map((link) => (
                <FooterLink key={link.label} link={link} />
              ))}
            </div>
          ))}

          <div id="w-node-ad4fc399-69b2-4256-755a-c0ca232885bb-23288569" className="div-block-381">
            <div className="frame-16-2-copy">
              <div className="text-block-152-copy">Follow us on:</div>
              <div className="social-copy">
                {SOCIAL_ICONS.map((icon) => (
                  <a key={icon.key} href={social[icon.key]} target="_blank" rel="noreferrer" className="w-inline-block">
                    <img className={icon.className} src={icon.src} alt={icon.key} />
                  </a>
                ))}
              </div>
              <div className="div-block-281-copy">
                {site.contact.map((item) => (
                  <div key={item.label} className={item.primary ? 'social-2-copy' : 'social-2'}>
                    <div className="frame-15-2">
                      <p className="call-copy dsnfvkndsv">{item.label} :</p>
                      <a href={item.href} className="_1800-833-3303">
                        {item.text}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="div-block-388 div-block-380-copy">
          <Copyright />
        </div>
      </div>
    </section>
  );
}

import HtmlPage from '../../components/HtmlPage.jsx';
import html from './body.html?raw';

export default function SuperCargoPage() {
  return (
    <HtmlPage
      html={html}
      title="Super Cargo | Electric Cargo Auto Rickshaw | Montra Electric"
      description="Efficient electric cargo auto rickshaw for last-mile delivery. Get reliable, eco-friendly performance &amp; low running costs with our EV goods carrier auto rickshaw."
      stylesheet="/css/super-cargo.css"
      wfPageId="69b10f2340bfba1aeb7acada"
    />
  );
}

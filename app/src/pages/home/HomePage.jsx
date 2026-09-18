import HtmlPage from '../../components/HtmlPage.jsx';
import html from './body.html?raw';

export default function HomePage() {
  return (
    <HtmlPage
      html={html}
      title="Montra Electric | India's Leading Electric Commercial Vehicle Company"
      description="Leading manufacturer of electric commercial vehicles in India. Explore electric trucks, tractors, auto rickshaws & mini trucks. Test drive our EV commercial vehicles today."
      stylesheet="/css/home.css"
      wfPageId="69a7e867541515b67b09c64f"
      bodyClass="body-4"
    />
  );
}

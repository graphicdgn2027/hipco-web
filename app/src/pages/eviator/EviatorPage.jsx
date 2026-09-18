import HtmlPage from '../../components/HtmlPage.jsx';
import html from './body.html?raw';

export default function EviatorPage() {
  return (
    <HtmlPage
      html={html}
      title="EVIATOR Electric Small Commercial Vehicle | Montra Electric"
      description="The Montra Electric EVIATOR is an electric small commercial vehicle built for urban and intercity logistics, with 32kWh and 50kWh variants."
      stylesheet="/css/eviator.css"
      wfPageId="69b25ec1bedf8471e194a5c4"
    />
  );
}

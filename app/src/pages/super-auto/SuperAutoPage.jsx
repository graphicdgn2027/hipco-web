import HtmlPage from '../../components/HtmlPage.jsx';
import html from './body.html?raw';

export default function SuperAutoPage() {
  return (
    <HtmlPage
      html={html}
      title="Super Auto | Electric Passenger Auto Rickshaw | Montra Electric"
      description="Premium electric auto rickshaw for passenger transport. Our high range EV autos offer fast charging & superior comfort for local needs. Test drive our electric auto rickshaw today."
      stylesheet="/css/super-auto.css"
      wfPageId="695e5d7ebc80698080ea25eb"
    />
  );
}

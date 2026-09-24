import { site } from '@/config/site';

export async function submitBrochureLead({ name, mobile, email, city, pincode }) {
  const response = await fetch(site.brochure.endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, mobile: `${site.brochure.phoneCountryCode}${mobile}`, email, city, pincode }),
  });
  if (!response.ok) throw new Error(`Brochure request failed with status ${response.status}`);
}

export async function downloadFile(url, filename = 'file.pdf') {
  const response = await fetch(url);
  const blob = await response.blob();
  const blobUrl = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = blobUrl;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(blobUrl);
}

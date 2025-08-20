import { redirect } from 'next/navigation';

export default function SpeakerProfileRedirect({ params }: { params: { slug?: string[] } }) {
  // If no slug is provided, redirect to the first speaker
  if (!params.slug || params.slug.length === 0) {
    redirect('/2026-sc/dr-marco-veneziani');
    return null;
  }

  // If it's the dr-marco-veneziani page, redirect to the new URL
  if (params.slug[0] === 'dr-marco-veneziani') {
    redirect('/2026-sc/dr-marco-veneziani');
    return null;
  }

  // For any other slug, redirect to the 2026-sc page
  redirect('/2026-sc');
  return null;
}
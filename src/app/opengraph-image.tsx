import { ImageResponse } from 'next/og';
import { OGImage } from '@/components/OGImage/OGImage';
import { META_INFO } from '@/config';
// App router includes @vercel/og.
// No need to install it.

export const runtime = 'edge';

export const alt = META_INFO.title;
export const size = {
	width: 1200,
	height: 630,
};

export const contentType = 'image/png';

export default async function Image() {
	return new ImageResponse(<OGImage />, {
		...size,
	});
}

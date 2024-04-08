import '@mantine/core/styles.css';
import 'mantine-react-table/styles.css';

import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import { ModalsProvider } from '@mantine/modals';
import { Notifications } from '@mantine/notifications';
import { Analytics } from '@vercel/analytics/react';
import { META_INFO } from '@/config';
import { inter } from '@/styles/fonts';
import { theme } from '@/styles/theme';
import { AppProvider } from './provider';


export const metadata = {
	metadataBase: new URL('https://mantine-admin.vercel.app/'),
	title: { default: META_INFO.title, template: `%s | ${META_INFO.title}` },
	description: META_INFO.description,
	keywords: META_INFO.keywords,
	authors: [
		{
			name: 'jotyy',
			url: 'https://jotyy.vercel.app',
		},
	],
	creator: 'jotyy',
	manifest: 'https://mantine-admin.vercel.app/site.webmanifest',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en-US">
			<head>
				<ColorSchemeScript />
				<meta
					name="viewport"
					content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
				/>
			</head>
			<body className={inter.className}>
				<MantineProvider theme={theme}>
					<ModalsProvider>
						<AppProvider>{children}</AppProvider>
						<Analytics />
					</ModalsProvider>
					<Notifications />
				</MantineProvider>
			</body>
		</html>
	);
}

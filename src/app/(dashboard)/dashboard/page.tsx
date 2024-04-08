'use client';

import { useSession } from 'next-auth/react';
import { DashboardContent } from '@/components/Dashboard/DashboardContent';
import { PageContainer } from '@/components/PageContainer/PageContainer';

export default function Dashboard() {
	const { data: session } = useSession();

	return (
		<PageContainer title="Dashboard">
			session: {JSON.stringify(session)}
			{/* <DashboardContent /> */}
		</PageContainer>
	);
}

import { PageContainer } from '@/components/PageContainer';
import { ProfileCard } from '@/components/ProfileCard';
import { StatsGroup } from '@/components/StatsGroup';
import { mockData } from '@/components/StatsGroup/mock';
import { AdminLayout } from '@/layouts/AdminLayout';
import { NextPageWithLayout } from '@/pages/_app';
import {
	Card,
	Grid,
	Group,
	List,
	Space,
	Stack,
	Text,
	ThemeIcon,
	Title,
} from '@mantine/core';
import { IconCircleCheck } from '@tabler/icons-react';

const Dashboard: NextPageWithLayout = () => {
	return (
		<PageContainer title="Dashboard">
			<Grid>
				<Grid.Col span={4}>
					<ProfileCard />
				</Grid.Col>
				<Grid.Col span={8}>
					<Stack>
						<Card withBorder shadow="sm" p="lg" radius="md">
							<Title order={5} c="brand">
								Welcome back!
							</Title>
							<Text fz="sm" c="dimmed" fw="500">
								Skote Crypto Dashboard
							</Text>
							<Space h="sm" />
							<List
								center
								size="sm"
								spacing="sm"
								icon={
									<ThemeIcon color="teal" size={22} radius="xl">
										<IconCircleCheck size="1rem" />
									</ThemeIcon>
								}
							>
								<List.Item>If several languages coalesce</List.Item>
								<List.Item>Sed ut perspiciatis unde</List.Item>
								<List.Item>It would be necessary</List.Item>
							</List>
						</Card>
						<StatsGroup data={mockData} />
					</Stack>
				</Grid.Col>
			</Grid>
		</PageContainer>
	);
};

Dashboard.getLayout = page => <AdminLayout>{page}</AdminLayout>;

export default Dashboard;

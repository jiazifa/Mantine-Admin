import { Anchor, Breadcrumbs, Container, ContainerProps, Space, Title } from '@mantine/core';
import { FC, ReactNode } from 'react';

type PageContainerProps = {
	children?: ReactNode;
	title: string;
	items?: { label: string; link: string }[];
} & Pick<ContainerProps, 'fluid'>;

export const PageContainer: FC<PageContainerProps> = ({ children, title, items, fluid = true }) => {
	return (
		<Container px={0} fluid={fluid}>
			{items && items.length > 0 ? (
				<div>
					<Breadcrumbs>
						{items.map(item => (
							<Anchor key={item.label} href={item.link}>
								{item.label}
							</Anchor>
						))}
					</Breadcrumbs>
					<Space h="lg" />
				</div>
			) : null}

			<Title order={4}>{title}</Title>

			<Space h="lg" />

			{children}
		</Container>
	);
};

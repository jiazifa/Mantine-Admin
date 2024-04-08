'use client';

import { ActionIcon, Box, TextInput } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconSearch, IconSettings } from '@tabler/icons-react';
import classes from './AdminHeader.module.css';
import { Logo } from '../Logo/Logo';

interface Props {
	burger?: React.ReactNode;
}

export function AdminHeader({ burger }: Props) {
	const [opened, { close, open }] = useDisclosure(false);

	return (
		<header className={classes.header}>
			{burger && burger}
			<Logo />
			<Box style={{ flex: 1 }} />
			<TextInput
				placeholder="Search"
				variant="filled"
				leftSection={<IconSearch size="0.8rem" />}
				style={{}}
			/>
			<ActionIcon onClick={open} variant="subtle">
				<IconSettings size="1.25rem" />
			</ActionIcon>
		</header>
	);
}

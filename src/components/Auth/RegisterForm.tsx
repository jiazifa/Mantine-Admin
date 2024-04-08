'use client';

import { Button, Paper, PasswordInput, Space, TextInput } from '@mantine/core';

import { useForm } from '@mantine/form';
import { FC, useRef } from 'react';

export interface RegisterFormValue {
	phone: string;
	password: string;
	confirmPassword: string;
}

const RegisterForm: FC<{ onSubmit: (values: RegisterFormValue) => void }> = ({ onSubmit }) => {
	const formRef = useRef<any>(null);

	const form = useForm<RegisterFormValue>({
		initialValues: {
			phone: '',
			password: '',
			confirmPassword: '',
		},
		validate: {
			phone: value => (/^\d{10}$/.test(value) ? null : '请输入正确的手机号'),
			password: value => (/^\d{4}$/.test(value) ? null : '密码太简单了'),
			confirmPassword: value =>
				value === formRef.current.values.password ? null : '两次密码输入不一致',
		},
	});
	return (
		<Paper withBorder shadow="md" p={30} mt={30} radius="md">
			<form onSubmit={form.onSubmit(onSubmit)} ref={formRef}>
				<TextInput label="Email" placeholder="test@example.com" required />
				<PasswordInput label="Password" placeholder="Your password" required mt="md" />
				<Space h="md" />
				<Button fullWidth mt="xl">
					Sign Up
				</Button>
			</form>
		</Paper>
	);
}

export { RegisterForm };

'use client'

import { Button, Card, PasswordInput, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react'


export interface LoginFormValue {
	phone: string;
	password: string;
}

const LoginForm = () => {

	const form = useForm<LoginFormValue>({
		initialValues: {
			phone: '18912345678',
			password: '1234',
		},
		validate: {
			phone: value => (/^\d{11}$/.test(value) ? null : '请输入正确的手机号'),
			password: value => (/^\d{4,}$/.test(value) ? null : '密码应至少包含4个字符'),
		},
	});
	const router = useRouter();

	const onSubmitAction = async (value: LoginFormValue) => {
		console.log(value);
		const result = await signIn('credentials', {
			phone: value.phone,
			password: value.password,
			redirect: true,
			callbackUrl: '/dashboard',
		});
		console.log(`result: ${result}`);
	}

	return (
		<Card withBorder shadow="md" p={30} mt={30} radius="md">
			<form onSubmit={form.onSubmit((values) => onSubmitAction(values))}>
				<TextInput
					withAsterisk
					label="手机号"
					placeholder="请输入手机号"
					{...form.getInputProps('phone')}
					required
				/>
				<PasswordInput
					withAsterisk
					label="密码"
					placeholder="请输入密码"
					{...form.getInputProps('password')}
					required
					mt={15}
				/>
				<Button fullWidth type="submit" mt='xl'>
					登录
				</Button>
			</form>
		</Card>
	);
}

export { LoginForm };

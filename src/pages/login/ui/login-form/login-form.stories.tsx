import type { Meta, StoryFn } from '@storybook/nextjs'
import { useForm } from 'react-hook-form'

import { LoginSchema } from '../../model'
import { LoginForm } from './login-form'

const meta = {
  title: 'pages/login/LoginForm',
  component: LoginForm,
  argTypes: {},
  args: {},
} satisfies Meta<typeof LoginForm>

export default meta

const Template: StoryFn<typeof LoginForm> = (args) => {
  const form = useForm<LoginSchema>({
    defaultValues: {
      username: '',
      password: '',
    },
  })

  return (
    <LoginForm
      {...args}
      form={form}
      onValid={(values) => console.log(values)}
    />
  )
}

export const Default = Template.bind({})
Default.args = {
  isLoading: false,
}

export const Loading = Template.bind({})
Loading.args = {
  isLoading: true,
}

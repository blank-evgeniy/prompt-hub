import type { Meta, StoryFn } from '@storybook/nextjs'
import { useForm } from 'react-hook-form'

import { RegisterSchema } from '../../model'
import { RegisterForm } from './register-form'

const meta = {
  title: 'pages/register/RegisterForm',
  component: RegisterForm,
  argTypes: {},
  args: {},
} satisfies Meta<typeof RegisterForm>

export default meta

const Template: StoryFn<typeof RegisterForm> = (args) => {
  const form = useForm<RegisterSchema>({
    defaultValues: {
      username: '',
      password: '',
    },
  })

  return (
    <RegisterForm
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

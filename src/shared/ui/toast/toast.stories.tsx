import type { Meta, StoryObj } from '@storybook/nextjs'
import { toast } from 'sonner'

import { Button } from '../button'
import { Toast } from './toast'

const meta = {
  title: 'ui-kit/Toast',
  component: Toast,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Toast>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Toast />
      <div className="flex flex-wrap gap-3">
        <Button onClick={() => toast('Default toast message')}>
          Default Toast
        </Button>
        <Button onClick={() => toast.success('Success! Operation completed')}>
          Success
        </Button>
        <Button onClick={() => toast.error('Error! Something went wrong')}>
          Error
        </Button>
        <Button onClick={() => toast.warning('Warning! Please be careful')}>
          Warning
        </Button>
        <Button onClick={() => toast.info('Info: Here is some information')}>
          Info
        </Button>
        <Button onClick={() => toast.loading('Loading...')}>Loading</Button>
        <Button
          onClick={() =>
            toast('Event has been created', {
              action: {
                label: 'Undo',
                onClick: () => toast('Undo clicked'),
              },
            })
          }
        >
          With Action
        </Button>
        <Button
          onClick={() =>
            toast.promise(new Promise((resolve) => setTimeout(resolve, 2000)), {
              loading: 'Loading...',
              success: 'Successfully loaded!',
              error: 'Failed to load',
            })
          }
        >
          Promise
        </Button>
      </div>
    </div>
  ),
}

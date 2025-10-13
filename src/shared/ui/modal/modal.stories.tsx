import type { Meta, StoryObj } from '@storybook/nextjs'

import { Button } from '../button'
import {
  Modal,
  ModalClose,
  ModalContent,
  ModalDescription,
  ModalFooter,
  ModalHeader,
  ModalTitle,
  ModalTrigger,
} from './modal'

const meta = {
  title: 'ui-kit/Modal',
  component: Modal,
  argTypes: {},
  args: {},
} satisfies Meta<typeof Modal>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: (
      <>
        <ModalTrigger>Open Modal</ModalTrigger>
        <ModalContent>
          <ModalHeader>
            <ModalTitle>Modal Title</ModalTitle>
            <ModalClose />
          </ModalHeader>
          <ModalDescription>Modal Description</ModalDescription>
          <ModalFooter>
            <Button asChild variant={'outline'}>
              <ModalClose>Cancel</ModalClose>
            </Button>
            <Button asChild>
              <ModalClose>Confirm</ModalClose>
            </Button>
          </ModalFooter>
        </ModalContent>
      </>
    ),
  },
}

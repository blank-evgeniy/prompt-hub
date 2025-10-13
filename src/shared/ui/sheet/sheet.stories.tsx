import type { Meta, StoryObj } from '@storybook/nextjs'

import { Button } from '../button'
import { Typography } from '../typography'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from './sheet'

const meta = {
  title: 'ui-kit/Sheet',
  component: Sheet,
  argTypes: {},
  args: {},
} satisfies Meta<typeof Sheet>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: (
      <>
        <SheetTrigger>Open Sheet</SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Sheet Title</SheetTitle>
            <SheetClose />
          </SheetHeader>
          <div className="flex flex-col gap-1 px-4">
            <SheetDescription>Sheet Description</SheetDescription>
            <Typography>Sheet Content</Typography>
          </div>
          <SheetFooter>
            <Button asChild variant={'outline'}>
              <SheetClose>Cancel</SheetClose>
            </Button>
            <Button asChild>
              <SheetClose>Confirm</SheetClose>
            </Button>
          </SheetFooter>
        </SheetContent>
      </>
    ),
  },
}

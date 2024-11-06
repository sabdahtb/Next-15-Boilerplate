import { ThemeController } from '@/components/theme-controller'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-4">
      <Image
        className="dark:invert"
        src="/next.svg"
        alt="Next.js logo"
        width={180}
        height={38}
        priority
      />
      <ThemeController />
    </div>
  )
}

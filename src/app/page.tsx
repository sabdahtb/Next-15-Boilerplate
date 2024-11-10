'use client'

import Image from 'next/image'
import { QueryClient, useMutation, useQuery } from '@tanstack/react-query'
import { client } from '@/lib/hono'
import { Button } from '@/components/ui/button'
import { toast } from 'sonner'

export default function Home() {
  const queryClient = new QueryClient()

  const { data, isPending } = useQuery({
    queryKey: ['get-recent-post'],
    queryFn: async () => {
      const res = await client.post.$get()
      return await res.json()
    },
  })

  const mutate = useMutation({
    mutationFn: async (json: any) => {
      try {
        const res = await client.post.test.$post({ json })
        return await res.json()
      } catch (error) {
        throw error
      }
    },
    onSuccess: () => {
      toast('🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀')
      queryClient.invalidateQueries({ queryKey: ['get-recent-post'] })
    },
    onError: (error: any) => {
      toast.error(error?.message ?? 'Something went wrong')
    },
  })

  function testPost() {
    mutate.mutateAsync({ title: 'kolan' })
  }

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
      <pre className="rounded bg-secondary p-4 text-xs">
        {JSON.stringify({ data, isPending }, null, 2)}
      </pre>
      <Button variant={'outline'} size={'icon'} onClick={testPost}>
        🚀
      </Button>
    </div>
  )
}

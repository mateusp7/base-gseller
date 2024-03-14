import { Skeleton } from '@gseller-monorepo/skeleton'

export const SkeletonDisplayImages = () => {
  return (
    <div className="flex flex-col gap-4">
      <Skeleton className="w-full rounded-lg h-60" />
      <div className="flex flex-row items-center gap-4">
        <Skeleton className="w-full h-32 rounded-lg" />

        <Skeleton className="w-full h-32 rounded-lg" />
      </div>
      <div className="flex justify-between">
        <div className="flex items-center gap-2">
          <Skeleton className="w-full rounded-full size-10" />
          <Skeleton className="w-full rounded-full size-10" />
        </div>
        <div className="flex items-center gap-1">
          <Skeleton className="w-full rounded-md size-5" />
          <Skeleton className="w-full rounded-md size-4" />
        </div>
      </div>
    </div>
  )
}

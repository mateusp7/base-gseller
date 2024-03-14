'use client'

import Image from 'next/image'
import { HTMLAttributes, forwardRef } from 'react'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

import { IImage } from '@/lib/types/image.type'
import { cn } from '@/lib/utils'
import { Button } from '@gseller-monorepo/button'
import { ImageIcon, Trash2 } from 'lucide-react'
import { ButtonSwiper } from '../button-swiper'
import { MessagesWithoutPhotos } from './message-without-photos'
import { SkeletonDisplayImages } from './skeleton-display-images'

export interface DisplayImagesProps extends HTMLAttributes<HTMLDivElement> {
  assets: IImage[]
  featuredAsset: IImage
  isLoading?: boolean
  handleDeleteImage: (imageId: string) => void
}

const DisplayImage = forwardRef<HTMLDivElement, DisplayImagesProps>(
  (
    {
      className,
      assets,
      featuredAsset,
      isLoading,
      handleDeleteImage,
      ...props
    },
    ref
  ) => {
    const totalImages = assets.length + (featuredAsset ? 1 : 0)

    if (isLoading) return <SkeletonDisplayImages />

    if (!isLoading && assets.length === 0 && !featuredAsset)
      return <MessagesWithoutPhotos />

    return (
      <div
        {...props}
        ref={ref}
        className={cn('flex flex-col gap-4', className)}
      >
        {featuredAsset && featuredAsset.id && (
          <div className="relative w-full overflow-hidden rounded-lg h-60">
            <Button
              variant="clear"
              size="icon"
              className="rounded-full border border-failure bg-failure shadow-[0_5px_15px_-10px] shadow-failure size-8 absolute top-2 right-2"
              onClick={() => handleDeleteImage(featuredAsset?.id)}
            >
              <Trash2 size={18} className="text-white" />
            </Button>
            {featuredAsset?.type === 'VIDEO' ? (
              <video
                className="z-40 object-contain w-full h-full border rounded-lg pointer-events-none border-black-10 dark:border-black-50"
                muted
                autoPlay
                loop
                width={160}
                height={160}
              >
                <source src={featuredAsset.source} />
              </video>
            ) : (
              <Image
                src={featuredAsset?.preview}
                width={featuredAsset?.width}
                height={featuredAsset?.height}
                className="object-contain w-full h-full border rounded-lg border-black-10 dark:border-black-50"
                alt="Imagens superiores"
              />
            )}
          </div>
        )}

        {assets && assets?.length > 2 ? (
          <div className="flex flex-col w-full gap-4 ">
            <Swiper
              modules={[Navigation]}
              spaceBetween={20}
              slidesPerView={1.5}
              loop={true}
              navigation={{
                nextEl: '.next-button-display',
                prevEl: '.prev-button-display',
                disabledClass: 'swiper-button-disabled'
              }}
              breakpoints={{
                768: {
                  slidesPerView: 2
                }
              }}
              className="cursor-pointer"
            >
              {assets &&
                assets.map(asset => (
                  <SwiperSlide key={asset.id} className="relative w-1/2 h-40">
                    <Button
                      variant="clear"
                      size="icon"
                      className="rounded-full border border-failure bg-failure shadow-[0_5px_15px_-10px] shadow-failure size-8 absolute top-2 right-2"
                      onClick={() => handleDeleteImage(asset.id)}
                    >
                      <Trash2 size={18} className="text-white" />
                    </Button>
                    {asset?.type === 'VIDEO' ? (
                      <video
                        className="z-40 object-contain w-full h-40 border rounded-lg pointer-events-none border-black-10 dark:border-black-50"
                        muted
                        autoPlay
                        loop
                        width={160}
                        height={160}
                      >
                        <source src={asset.source} />
                      </video>
                    ) : (
                      <Image
                        src={asset?.preview}
                        width={asset?.width}
                        height={asset?.height}
                        className="object-contain w-full h-40 border rounded-lg border-black-10 dark:border-black-50"
                        alt="Imagens inferiores"
                      />
                    )}
                  </SwiperSlide>
                ))}
            </Swiper>
            <div className="flex flex-wrap items-center justify-between gap-4">
              <ButtonSwiper
                nextButtonClassname="next-button-display"
                prevButtonClassname="prev-button-display"
              />
              {totalImages > 0 && (
                <div className="flex items-center gap-1 text-lg ">
                  <ImageIcon
                    size={20}
                    className="text-black-80 dark:text-black-10"
                  />
                  <span className="text-black-80 dark:text-black-10">
                    {totalImages}
                  </span>
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            <div
              className={cn(
                'grid gap-4',
                assets.length === 1
                  ? 'grid-cols-1'
                  : 'grid-cols-1 md:grid-cols-2'
              )}
            >
              {assets.map(asset => (
                <div className="relative" key={asset.id}>
                  <Button
                    variant="clear"
                    size="icon"
                    className="rounded-full border border-failure bg-failure shadow-[0_5px_15px_-10px] shadow-failure size-8 absolute top-2 right-2"
                    onClick={() => handleDeleteImage(asset.id)}
                  >
                    <Trash2 size={18} className="text-white" />
                  </Button>
                  {asset?.type === 'VIDEO' ? (
                    <video
                      className="z-40 object-contain w-full h-40 border rounded-lg pointer-events-none border-black-10 dark:border-black-50"
                      muted
                      autoPlay
                      loop
                      width={160}
                      height={160}
                    >
                      <source src={asset.source} />
                    </video>
                  ) : (
                    <Image
                      src={asset?.preview}
                      width={asset?.width}
                      height={asset?.height}
                      className="object-contain w-full h-40 border rounded-lg border-black-10 dark:border-black-50"
                      alt="Imagens inferiores"
                    />
                  )}
                </div>
              ))}
            </div>
            {totalImages > 0 && (
              <div className="flex items-center gap-1 text-lg">
                <ImageIcon
                  size={20}
                  className="text-black-80 dark:text-black-10"
                />
                <span className="text-black-80 dark:text-black-10">
                  {totalImages}
                </span>
              </div>
            )}
          </div>
        )}
      </div>
    )
  }
)
DisplayImage.displayName = 'DisplayImage'

export { DisplayImage }

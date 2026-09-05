'use client'

import { useState, useCallback, useEffect } from 'react'
import { Play, X, ChevronLeft, ChevronRight, ImageOff } from 'lucide-react'
import type { Project } from '@/lib/site-data'

type StageItem =
  | { kind: 'image'; src: string; index: number }
  | { kind: 'video'; src: string; poster?: string; label?: string }

export function MediaGallery({ project }: { project: Project }) {
  const images = project.screenshots
  const videos = project.videos
  // Mobile projects display in a tall phone-shaped frame instead of 16:9.
  const portrait = project.orientation === 'portrait'

  const firstStage: StageItem =
    images.length > 0
      ? { kind: 'image', src: images[0], index: 0 }
      : videos.length > 0
        ? { kind: 'video', src: videos[0].src, poster: videos[0].poster, label: videos[0].label }
        : { kind: 'image', src: project.cover, index: 0 }

  const [stage, setStage] = useState<StageItem>(firstStage)
  const [playing, setPlaying] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const openLightbox = useCallback((index: number) => setLightboxIndex(index), [])
  const closeLightbox = useCallback(() => setLightboxIndex(null), [])

  const showPrev = useCallback(() => {
    setLightboxIndex((i) => (i === null ? i : (i - 1 + images.length) % images.length))
  }, [images.length])
  const showNext = useCallback(() => {
    setLightboxIndex((i) => (i === null ? i : (i + 1) % images.length))
  }, [images.length])

  useEffect(() => {
    if (lightboxIndex === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox()
      if (e.key === 'ArrowLeft') showPrev()
      if (e.key === 'ArrowRight') showNext()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [lightboxIndex, closeLightbox, showPrev, showNext])

  return (
    <div className="flex flex-col gap-3">
      {/* Main stage */}
      <div
        className={`relative w-full overflow-hidden rounded-lg border border-border bg-secondary ${
          portrait ? 'mx-auto aspect-[9/16] max-w-[320px]' : 'aspect-video'
        }`}
      >
        {stage.kind === 'image' ? (
          <button
            type="button"
            onClick={() => openLightbox(stage.index)}
            className="group relative block h-full w-full cursor-zoom-in"
            aria-label="Open screenshot fullscreen"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={stage.src || '/placeholder.svg'}
              alt={`${project.title} screenshot`}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
            />
          </button>
        ) : (
          <VideoStage
            key={stage.src}
            src={stage.src}
            poster={stage.poster}
            playing={playing}
            onRequestPlay={() => setPlaying(true)}
          />
        )}
      </div>

      {/* Thumbnail strip */}
      <div className={`flex flex-wrap gap-2 ${portrait ? 'justify-center' : ''}`}>
        {images.map((src, i) => {
          const active = stage.kind === 'image' && stage.index === i
          return (
            <button
              key={src + i}
              type="button"
              onClick={() => {
                setPlaying(false)
                setStage({ kind: 'image', src, index: i })
              }}
              className={`relative overflow-hidden rounded-md border transition-colors ${
                portrait ? 'h-24 w-14' : 'h-14 w-24'
              } ${active ? 'border-primary' : 'border-border hover:border-muted-foreground'}`}
              aria-label={`View screenshot ${i + 1}`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={src || '/placeholder.svg'} alt="" className="h-full w-full object-cover" />
            </button>
          )
        })}

        {videos.map((v, i) => {
          const active = stage.kind === 'video' && stage.src === v.src
          return (
            <button
              key={v.src + i}
              type="button"
              onClick={() => {
                setPlaying(false)
                setStage({ kind: 'video', src: v.src, poster: v.poster, label: v.label })
              }}
              className={`group relative overflow-hidden rounded-md border transition-colors ${
                portrait ? 'h-24 w-14' : 'h-14 w-24'
              } ${active ? 'border-primary' : 'border-border hover:border-muted-foreground'}`}
              aria-label={v.label ?? `Play video ${i + 1}`}
            >
              {v.poster ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={v.poster || '/placeholder.svg'} alt="" className="h-full w-full object-cover" />
              ) : (
                <span className="flex h-full w-full items-center justify-center bg-secondary" />
              )}
              <span className="absolute inset-0 flex items-center justify-center bg-background/40">
                <Play className="h-4 w-4 fill-primary text-primary" />
              </span>
            </button>
          )
        })}
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label={`${project.title} screenshot viewer`}
          onClick={closeLightbox}
        >
          <button
            type="button"
            onClick={closeLightbox}
            className="absolute right-4 top-4 rounded-full border border-border bg-card/80 p-2 text-foreground transition-colors hover:bg-card"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>

          {images.length > 1 && (
            <>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation()
                  showPrev()
                }}
                className="absolute left-4 rounded-full border border-border bg-card/80 p-2 text-foreground transition-colors hover:bg-card"
                aria-label="Previous"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation()
                  showNext()
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full border border-border bg-card/80 p-2 text-foreground transition-colors hover:bg-card"
                aria-label="Next"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </>
          )}

          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={images[lightboxIndex] || '/placeholder.svg'}
            alt={`${project.title} screenshot ${lightboxIndex + 1}`}
            className="max-h-[85vh] max-w-[90vw] rounded-lg object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  )
}

function VideoStage({
  src,
  poster,
  playing,
  onRequestPlay,
}: {
  src: string
  poster?: string
  playing: boolean
  onRequestPlay: () => void
}) {
  const [error, setError] = useState(false)

  if (error) {
    return (
      <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-secondary p-6 text-center">
        {poster ? (
          <>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={poster || '/placeholder.svg'} alt="" className="absolute inset-0 h-full w-full object-cover opacity-30" />
            <div className="relative flex flex-col items-center gap-2">
              <ImageOff className="h-6 w-6 text-muted-foreground" />
              <p className="text-sm font-medium text-foreground">Video not uploaded yet</p>
              <p className="max-w-xs text-xs text-muted-foreground">
                Drop your file at <code className="rounded bg-background/60 px-1 py-0.5 font-mono">{`public${src}`}</code>
              </p>
            </div>
          </>
        ) : (
          <>
            <ImageOff className="h-6 w-6 text-muted-foreground" />
            <p className="text-sm text-muted-foreground">
              Add your video at <code className="font-mono">{`public${src}`}</code>
            </p>
          </>
        )}
      </div>
    )
  }

  if (!playing) {
    return (
      <button
        type="button"
        onClick={onRequestPlay}
        className="group relative block h-full w-full"
        aria-label="Play video"
      >
        {poster ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={poster || '/placeholder.svg'} alt="" className="h-full w-full object-cover" />
        ) : (
          <span className="flex h-full w-full items-center justify-center bg-secondary" />
        )}
        <span className="absolute inset-0 flex items-center justify-center bg-background/30 transition-colors group-hover:bg-background/20">
          <span className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/90 shadow-lg transition-transform group-hover:scale-110">
            <Play className="ml-1 h-7 w-7 fill-primary-foreground text-primary-foreground" />
          </span>
        </span>
      </button>
    )
  }

  return (
    <video
      src={src}
      poster={poster}
      controls
      autoPlay
      playsInline
      className="h-full w-full bg-background object-contain"
      onError={() => setError(true)}
    >
      <track kind="captions" />
    </video>
  )
}

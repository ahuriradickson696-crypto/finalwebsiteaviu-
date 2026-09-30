import { useEffect, useState } from 'react';

/**
 * Full-bleed YouTube background for the hero section.
 * Muted, looping, no controls. Falls back to a still image when the visitor
 * prefers reduced motion or has data-saver turned on.
 */
export function HeroVideo({
  videoId,
  poster,
}: {
  videoId: string;
  poster: string;
}) {
  const [playable, setPlayable] = useState(true);

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const saveData = (navigator as Navigator & { connection?: { saveData?: boolean } })
      .connection?.saveData;
    if (reduce || saveData) setPlayable(false);
  }, []);

  const params = new URLSearchParams({
    autoplay: '1',
    mute: '1',
    loop: '1',
    playlist: videoId,
    controls: '0',
    rel: '0',
    modestbranding: '1',
    playsinline: '1',
    disablekb: '1',
    fs: '0',
    iv_load_policy: '3',
  });

  return (
    <div
      className="hero-video"
      aria-hidden="true"
      style={{ backgroundImage: `url(${poster})` }}
    >
      {playable && (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${videoId}?${params.toString()}`}
          title="Avance International University campus video"
          allow="autoplay; encrypted-media; picture-in-picture"
          tabIndex={-1}
        />
      )}
      <div className="hero-video-overlay" />
    </div>
  );
}

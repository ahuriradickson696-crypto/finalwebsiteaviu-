import { type ReactNode } from 'react';
<<<<<<< HEAD
import { SubPageHero } from '@/components/SubPageHero';
import { useRouter } from '@/router/Router';

/** Kept for existing imports: renders the same hero (with breadcrumb) as SubPageHero. */
=======
import { BackgroundCarousel } from '@/components/BackgroundCarousel';

>>>>>>> 7eb87b5fa18d7868fd6df0fc89da9b430598886b
export function PageHero({
  eyebrow,
  title,
  subtitle,
  children,
  images,
}: {
  eyebrow: string;
  title: ReactNode;
  subtitle?: string;
  children?: ReactNode;
  images?: string[];
}) {
<<<<<<< HEAD
  const { path } = useRouter();
  return (
    <SubPageHero
      eyebrow={eyebrow}
      title={title}
      subtitle={subtitle}
      images={images}
      crumbs={[
        { label: 'Home', path: '/' },
        { label: eyebrow, path },
      ]}
    >
      {children}
    </SubPageHero>
=======
  return (
    <section className="page-hero">
      <BackgroundCarousel images={images} />
      <div className="page-hero-inner">
        <div className="eyebrow">
          <span className="eyebrow-line" /> {eyebrow}
        </div>
        <h1>{title}</h1>
        {subtitle && <p className="page-hero-text">{subtitle}</p>}
        {children}
      </div>
      <div className="page-hero-deco" aria-hidden="true">
        <span className="deco-circle deco-1" />
        <span className="deco-circle deco-2" />
        <span className="deco-circle deco-3" />
      </div>
    </section>
>>>>>>> 7eb87b5fa18d7868fd6df0fc89da9b430598886b
  );
}

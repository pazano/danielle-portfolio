import { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from '../Image/Image';
import styles from './GalleryModal.module.scss';

const GalleryModal = ({ images, startIndex, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(startIndex);
  const modalRef = useRef(null);

  const currentImage = images[currentIndex];

  const prev = () => setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  const next = () => setCurrentIndex((currentIndex + 1) % images.length);

  // Body scroll lock
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  // Focus modal on open
  useEffect(() => {
    modalRef.current?.focus();
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex]);

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  const attributionPrep = currentImage.attributions?.map((attribution) => ({
    ...attribution,
    rolesList: attribution.role.map((r) => r.roleOptions).join(', '),
  })) ?? [];

  const detailHref = `photography/${currentImage.metadata.slug}`;

  return (
    <>
      <Head>
        <link rel="canonical" href={`/photography/${currentImage.metadata.slug}/`} />
      </Head>

      <div
        role="dialog"
        aria-modal="true"
        aria-label="Image detail"
        className={styles.modal__overlay}
        onClick={handleBackdropClick}
      >
        {images.length > 1 && (
          <>
            <button className={styles.modal__prev} onClick={prev} aria-label="Previous image">
              ‹
            </button>
            <button className={styles.modal__next} onClick={next} aria-label="Next image">
              ›
            </button>
          </>
        )}

        <button className={styles.modal__close} onClick={onClose} aria-label="Close modal">
          ×
        </button>

        <div className={styles.modal__container} ref={modalRef} tabIndex={-1}>

          <div className={styles.modal__image_wrap}>
            <Image
              src={currentImage.image}
              alt={currentImage.altText || ''}
              aspectRatio={currentImage.orientation === 'portrait' ? '2x3' : '3x2'}
              respectAspect={false}
            />
          </div>

          <div className={styles.modal__info}>
            {attributionPrep.length > 0 && (
              <dl className={styles.modal__attributions}>
                {attributionPrep.map((attribution, i) => (
                  <div key={i} className={styles.modal__attribution}>
                    <dt>{attribution.rolesList}</dt>
                    <dd>
                      {attribution.name}{' '}
                      <a href={`https://instagram.com/${attribution.instagram}`}>
                        @{attribution.instagram}
                      </a>
                    </dd>
                  </div>
                ))}
              </dl>
            )}
          </div>

        </div>

        <div className={styles.modal__footer}>
          <Link href="/photography/[[...page]]" as={detailHref} passHref>
            <a className={styles.modal__detail_link}>View full page →</a>
          </Link>
          <div className={styles.modal__counter}>{currentIndex + 1} / {images.length}</div>
        </div>
      </div>
    </>
  );
};

export default GalleryModal;

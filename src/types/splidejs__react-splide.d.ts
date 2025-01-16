declare module '@splidejs/react-splide' {
  import { ComponentProps, ReactNode } from 'react';

  // Define specific types for Splide options
  interface SplideOptions {
    type?: 'slide' | 'loop' | 'fade';
    perPage?: number;
    perMove?: number;
    gap?: string | number;
    arrows?: boolean;
    pagination?: boolean;
    autoplay?: boolean;
    interval?: number;
    speed?: number;
    rewind?: boolean;
    start?: number;
    direction?: 'ltr' | 'rtl' | 'ttb';
    width?: string | number;
    height?: string | number;
    fixedWidth?: string | number;
    fixedHeight?: string | number;
    drag?: boolean | 'free';
    snap?: boolean;
    // Additional common Splide options
    focus?: number | 'center';
    isNavigation?: boolean;
    trimSpace?: boolean;
    updateOnMove?: boolean;
    throttle?: number;
    waitForTransition?: boolean;
    easing?: string;
    breakpoints?: Record<number, Partial<SplideOptions>>;
    classes?: Record<string, string>;
    i18n?: Record<string, string>;
    autoScroll?: {
      speed?: number;
      pauseOnHover?: boolean;
      pauseOnFocus?: boolean;
      rewind?: boolean;
    };
  }

  export interface SplideProps extends ComponentProps<'div'> {
    options?: SplideOptions;
    hasTrack?: boolean;
    children?: ReactNode;
    extensions?: {
      AutoScroll?: any;  // Using any since we don't need the internal type
    };
  }

  export interface SplideSlideProps extends ComponentProps<'li'> {
    children?: ReactNode;
  }

  export interface SplideTrackProps extends ComponentProps<'ul'> {
    children?: ReactNode;
  }

  export const Splide: React.FC<SplideProps>;
  export const SplideSlide: React.FC<SplideSlideProps>;
  export const SplideTrack: React.FC<SplideTrackProps>;
} 
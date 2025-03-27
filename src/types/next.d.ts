import { PageProps as OriginalPageProps } from 'next';

declare module 'next' {
  // Override the PageProps type
  interface PageProps extends Omit<OriginalPageProps, 'params'> {
    params?: Record<string, string>;
  }
} 
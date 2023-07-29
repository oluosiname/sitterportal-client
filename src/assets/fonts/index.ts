import { Sora, Quicksand, Roboto_Slab } from 'next/font/google';

export const sora = Sora({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sora',
});

export const quicksand = Quicksand({
  subsets: ['latin'],
  variable: '--font-quicksand',
});
export const robotoSlab = Roboto_Slab({
  subsets: ['latin'],
  variable: '--font-robotoSlab',
});

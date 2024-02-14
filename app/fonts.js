import { Roboto_Serif } from 'next/font/google'

const robotoSerif = Roboto_Serif({
  subsets: ['latin'],
  variable: '--font-roboto-serif',
})

export const fonts = {
  robotoSerif,
}
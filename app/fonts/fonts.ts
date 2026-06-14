import { Poppins, Inter } from "next/font/google";


export const poppins = Poppins({
    subsets: ['latin'],
    weight: ['700'],
    variable: "--font-heading"
})


export const inter = Inter({
    subsets: ['latin'],
    weight: ['400'],
    variable: "--font-text"
})
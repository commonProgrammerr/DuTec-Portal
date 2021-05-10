import { MainPageContainer } from '../styles/pages/mainPage'

import Link from 'next/link'
import { ImageContainer } from '../styles/pages/404'

export default function FourOhFour() {
  return (
    <MainPageContainer>
      <ImageContainer>
        <img src="/not-found.svg" alt="" />
        <Link href="/">
          <mark> Go back home </mark>
        </Link>
      </ImageContainer>
      <br />
    </MainPageContainer>
  )
}
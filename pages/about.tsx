import Link from 'next/link'
import { Container, Title, Description, Main } from '../src/styles/sharedstyles'

export default function About() {
  return (
    <Container>
      <Main>
        <Title>About Page</Title>
        <Description>
          <Link href="/">
            <a>&larr; Go Back</a>
          </Link>
        </Description>
      </Main>
    </Container>
  )
}

import Cards from "../src/components/cards";
import { Container, Title, Description, CodeTag, Main } from "../src/styles/sharedstyles";


export default function Home() {
  return (
    <Container>
      
      <Main>
        <Title>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </Title>

        <Description>
          Get started by editing
          <CodeTag>pages/index.tsx</CodeTag>
        </Description>

        <Cards />
      </Main>
    </Container>
  )
}

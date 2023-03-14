import { HabitCard, ProgressContainer, ContentContainer, Progress, Title, CheckIcon } from "./styles";

export default function CurrentHabitCard() {

  return (
    <HabitCard isCompleted = {false}>
      <ContentContainer>
        <Title> Ler 1 capítulo de livro </Title>
        <ProgressContainer>
          <Progress>Sequencia atual: x dias</Progress>
          <Progress>Seu recorde: y dias</Progress>
        </ProgressContainer>
      </ContentContainer>
      <CheckIcon/>
      
      {/* <FaCheckSquare 
      width="69px"/>
      <ion-icon name="checkbox"></ion-icon> */}
    </HabitCard>
  )
}
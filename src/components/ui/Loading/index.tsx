import * as S from './style'

interface LoadingProps {
  text:string
}
const LoadingIndicator = ({ text}:LoadingProps) => {
  const letters = text.split('');
  const totalLetters = letters.length;

  return (
    <S.CircleContainer>
      {letters.map((letter, index) => (
        <S.Letter key={index} index={index} total={totalLetters}>
          {letter}
        </S.Letter>
      ))}
    </S.CircleContainer>
  );
};
export default LoadingIndicator;

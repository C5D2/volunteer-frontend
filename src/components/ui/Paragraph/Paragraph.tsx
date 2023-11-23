import styled from 'styled-components';

interface StPagragraphProps {
  $isValid?: boolean;
}

const StParagraph = styled.p<StPagragraphProps>`
  color: ${(props) => (props.$isValid ? '#18af82' : '#fb304b')};
  word-wrap: break-word;
`;

interface ParagraphProps {
  paragraphText?: string;
  $isValid?: boolean;
}

const Paragraph = ({ paragraphText, $isValid }: ParagraphProps) => {
  return <StParagraph $isValid={$isValid}>{paragraphText}</StParagraph>;
};

export default Paragraph;

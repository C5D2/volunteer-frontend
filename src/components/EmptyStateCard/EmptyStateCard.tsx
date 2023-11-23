import Image from '@components/ui/Image';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
interface EmptyStateCard {
  src: string;
  alt: string;
  pathName: string;
  text: string;
}

const Li = styled.li`
  display: flex;
	flex-direction: column;
  align-items: center;
  justify-content: center;
	height: 218px;
	gap: 30px;
  a{
    color: #797676;
		font-size: 14px;
		&:hover {
			color: #000;
			text-decoration: underline;
		}
	}
`;
const ImageWrap = styled.div`
  width: 60px;
  width: 60px;
  object-fit: cover;
`;

const StImage = styled(Image)`
  width: 100%;
  height: 100%;
`;
const EmptyStateCard = ({ src, alt, pathName, text }: EmptyStateCard) => {
  return (
    <Li>
      <ImageWrap>
        <StImage src={src} alt={alt} />
      </ImageWrap>
      <Link to={pathName}>{text}</Link>
    </Li>
  );
};

export default EmptyStateCard;

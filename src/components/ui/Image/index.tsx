
interface ImageProps extends React.HTMLProps<HTMLImageElement> {
  src: string 
  alt: string;
}

const Image = ({ src, alt, ...props }: ImageProps) => {
	return <img {...props} src={src} alt={alt} />;
};

export default Image;

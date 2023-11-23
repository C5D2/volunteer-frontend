interface ButtonProps extends Omit<React.HTMLProps<HTMLButtonElement>, 'size'> {
  buttonText: string;
  type?: 'button' | 'submit' | 'reset';
}

const Button = ({ buttonText, ...props }: ButtonProps) => {
  return <button {...props}>{buttonText}</button>;
};

export default Button
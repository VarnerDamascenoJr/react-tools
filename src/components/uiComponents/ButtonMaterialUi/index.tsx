
import Button from '@mui/material/Button';

interface ButtonTypes {
  text: string;
  size: 'small' | 'medium' | 'large';
}





const ButtonMUI = ({ text, size }: ButtonTypes) => {
  return (
    <Button size={size}>
      {text}
    </Button>
  )
}

export default ButtonMUI;

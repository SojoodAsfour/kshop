import Button from '@mui/material/Button';

export default function CustomButton({
  children,
  type = "button",
  color = "primary",
  variant = "contained",
  fullWidth = true,
  disabled = false,
  onClick,
  sx = {},
}) {
  return (
    <Button
      type={type}
      color={color}
      variant={variant}
      fullWidth={fullWidth}
      disabled={disabled}
      onClick={onClick}
      sx={{borderRadius: '30px',py: 1.5, textTransform: 'uppercase',fontWeight: 600,...sx,}}
    >
      {children}
    </Button>
  );
}
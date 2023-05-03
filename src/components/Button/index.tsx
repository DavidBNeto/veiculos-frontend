import { Button as Btn } from "@mui/material"

type ButtonProps = {
  text: string
  color: "blue" | "red"
  onClick: () => void
  disabled?: boolean
  width?: string
}

const Button = ({
  text,
  color,
  onClick,
  disabled,
  width = "85%",
}: ButtonProps) => {
  const background = color === "blue" ? "primary" : "error"

  return (
    <Btn
      color={background}
      variant="contained"
      onClick={onClick}
      style={{ textTransform: "uppercase", padding: "15px", width }}
      disabled={disabled || false}
      data-testid="custom-button"
    >
      {text}
    </Btn>
  )
}

export default Button

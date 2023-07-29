import { ReactElement } from "react";
import styled from "styled-components";
import { default as tw } from "twin.macro";

export interface ButtonInterface
  extends React.DetailedHTMLProps<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >,
    React.AriaAttributes {
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset" | undefined;
  children: ReactElement | string;
  icon?: ReactElement | undefined;
  btnFlex?: boolean;
  buttonIcon?: ReactElement | undefined;
}

const ButtonStyles = styled.button<{
  background?: string;
  color?: string;
  icon?: string;
  btnFlex?: boolean;
  buttonIcon?: ReactElement;
}>`
  ${tw`transition-all ease-in-out duration-700 relative`}
  ${({ btnFlex }) => btnFlex && tw`rounded-l-lg`}
  ${({ buttonIcon }) =>
    buttonIcon && tw`flex items-center justify-center gap-2`}
`;

const IconStyles = styled.div`
  ${tw`absolute -left-5 -top-1 w-full`}
`;
export const Button = ({
  children,
  type,
  onClick,
  className,
  icon,
  btnFlex,
  buttonIcon,
}: ButtonInterface) => {
  console.log("icon", icon);

  return (
    <ButtonStyles
      type={type}
      onClick={onClick}
      className={className}
      btnFlex={btnFlex}
      buttonIcon={buttonIcon}
    >
      <IconStyles> {icon}</IconStyles> {children} {buttonIcon}
    </ButtonStyles>
  );
};

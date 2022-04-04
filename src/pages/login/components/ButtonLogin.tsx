type ButtonLoginProps = {
  buttonType?: "button" | "submit" | "reset" | undefined;
  onclick?: () => void;
};
export const ButtonLogin: React.FC<ButtonLoginProps> = ({buttonType, onclick, children}) => {
  return (
    <button type={buttonType} onClick={onclick}>
      {children}
    </button>
  );
};

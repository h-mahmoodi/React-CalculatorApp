type ButtonProps = {
  className: string;
  text: string;
  action: () => void;
};

export default function Button({ className, action, text }: ButtonProps) {
  return (
    <button className={`button ${className}`} onClick={action}>
      {text}
    </button>
  );
}

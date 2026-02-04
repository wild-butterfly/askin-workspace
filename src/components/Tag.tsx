type Props = {
  type: string;
  children: string;
};

export default function Tag({ type, children }: Props) {
  const colors: Record<string, string> = {
    BUILD: "#d19a66",
    API: "#56b6c2",
    PAY: "#98c379",
    DEPLOY: "#61afef",
    SCALE: "#c678dd",
    OPTIMISE: "#e5c07b",
    FIELD: "#abb2bf",
    DEBUG: "#e06c75",
    INIT: "#abb2bf",
    LEARN: "#e5c07b",
    CLIENT: "#61afef",
    OPS: "#c678dd",
    STACK: "#56b6c2",
    STATUS: "#98c379",
  };

  return (
    <span style={{ color: colors[type], fontWeight: 600 }}>[{children}]</span>
  );
}

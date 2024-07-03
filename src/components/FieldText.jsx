export default function FieldText({ children, nospace }) {
  return (
    <span className={`block ${nospace ? "" : "mr-1"} text-nowrap`}>
      {children}
    </span>
  );
}

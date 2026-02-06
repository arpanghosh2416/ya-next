export default function Card({ 
  children, 
  className = "", 
  padding = "md",
  shadow = true 
}) {
  const paddings = {
    sm: "p-4",
    md: "p-6",
    lg: "p-8"
  };

  const shadowClass = shadow ? "shadow-lg" : "";

  return (
    <div className={`bg-white rounded-lg border border-slate-200 ${shadowClass} ${paddings[padding]} ${className}`}>
      {children}
    </div>
  );
}
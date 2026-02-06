export default function Button({ 
  children, 
  variant = "primary", 
  size = "md", 
  className = "", 
  ...props 
}) {
  const variants = {
    primary: "bg-primary-600 text-white hover:bg-primary-700 focus:ring-primary-500",
    secondary: "bg-secondary-500 text-white hover:bg-secondary-600 focus:ring-secondary-400",
    outline: "border border-primary-300 text-primary-700 hover:bg-primary-50 focus:ring-primary-500",
    ghost: "text-primary-600 hover:bg-primary-50 focus:ring-primary-500",
    success: "bg-success text-white hover:bg-green-600 focus:ring-green-500",
    warning: "bg-warning text-white hover:bg-yellow-600 focus:ring-yellow-500",
    error: "bg-error text-white hover:bg-red-600 focus:ring-red-500"
  };

  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-sm",
    lg: "px-6 py-3 text-base"
  };

  return (
    <button
      className={`rounded-md font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
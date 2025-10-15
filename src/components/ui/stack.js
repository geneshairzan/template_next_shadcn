export default function Layout({ row = false, className, spaced = false, p = 0, gap = 0, onClick, children }) {
  return (
    <div
      className={`p-${p} gap-${gap} flex ${row ? "flex-row" : "flex-col"}
  ${spaced && "aitems-center justify-between"}
  ${onClick && "cursor-pointer"}


  ${className}
  `}
      onClick={onClick}
    >
      {children}
    </div>
  );
}

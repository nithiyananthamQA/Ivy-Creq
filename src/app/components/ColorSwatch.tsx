import clsx from 'clsx';

interface ColorSwatchProps {
  color: string;
  bordered?: boolean;
}

export default function ColorSwatch({ color, bordered = false }: ColorSwatchProps) {
  return (
    <div className={clsx(
      "relative w-5 h-5 rounded-full flex items-center justify-center p-[3px]",
      bordered && "border border-[#090c0f]",
      !bordered && "border border-[#d1d9de]"
    )}>
      <div
        className="w-full h-full rounded-full"
        style={{ backgroundColor: color }}
      />
    </div>
  );
}

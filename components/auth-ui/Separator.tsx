interface SeparatorProps {
  text: string;
}

export default function Separator(props: { text?: string }) {
  const { text } = props;
  return (
    <div className="relative my-4">
      <div className="relative flex items-center py-1">
        <div className="grow border-t border-zinc-200 dark:border-zinc-700"></div>
        {text && (
          <span className="mx-3 shrink text-sm leading-8 text-zinc-500">
            {text}
          </span>
        )}
        <div className="grow border-t border-zinc-200 dark:border-zinc-700"></div>
      </div>
    </div>
  );
}

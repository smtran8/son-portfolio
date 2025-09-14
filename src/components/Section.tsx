type Props = {
  title: string;
  action?: React.ReactNode;
  children: React.ReactNode;
};

export function Section({ title, action, children }: Props) {
  return (
    <section className="space-y-4">
      <div className="flex items-center justify-between gap-3">
        <h2 className="text-lg font-semibold">{title}</h2>
        {action}
      </div>
      {children}
    </section>
  );
}



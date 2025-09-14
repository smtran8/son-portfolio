type Props = {
  title: string;
  children: React.ReactNode;
};

export function Section({ title, children }: Props) {
  return (
    <section className="space-y-4">
      <h2 className="text-lg font-semibold">{title}</h2>
      {children}
    </section>
  );
}



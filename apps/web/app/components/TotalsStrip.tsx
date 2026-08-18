// Bordered metric strip (ink hairlines, serif numerics). Each cell is a big number + a mono caps label.
export interface Total {
  num: string;
  label: string;
}

export function TotalsStrip({ totals, label }: { totals: Total[]; label?: string }) {
  return (
    <dl className="totals" aria-label={label}>
      {totals.map((t) => (
        <div className="cell" key={t.label} style={{ display: 'flex', flexDirection: 'column' }}>
          <dt className="label">{t.label}</dt>
          <dd className="num" style={{ order: -1, margin: 0 }}>
            {t.num}
          </dd>
        </div>
      ))}
    </dl>
  );
}

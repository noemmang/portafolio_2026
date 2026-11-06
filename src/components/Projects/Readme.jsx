// Renderiza el contenido de un proyecto con estructura de README: secciones con título,
// párrafos, listas, bloques de código y tablas. Los textos admiten **negrita** y `código`.

function Inline({ text }) {
  const parts = text.split(/(\*\*[^*]+\*\*|`[^`]+`)/g).filter(Boolean);
  return parts.map((part, i) => {
    if (part.startsWith("**")) return <strong key={i}>{part.slice(2, -2)}</strong>;
    if (part.startsWith("`")) return <code key={i}>{part.slice(1, -1)}</code>;
    return part;
  });
}

export default function Readme({ sections }) {
  return (
    <div className="readme">
      {sections.map((section) => (
        <section className="readme__section" key={section.title}>
          <h4 className="readme__heading">{section.title}</h4>

          {section.paragraphs?.map((paragraph, i) => (
            <p className="readme__text" key={i}><Inline text={paragraph} /></p>
          ))}

          {section.table && (
            <div className="readme__table-wrap">
              <table className="readme__table">
                <thead>
                  <tr>{section.table.head.map((cell) => <th key={cell}>{cell}</th>)}</tr>
                </thead>
                <tbody>
                  {section.table.rows.map((row, i) => (
                    <tr key={i}>{row.map((cell, j) => <td key={j}><Inline text={cell} /></td>)}</tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {section.code && <pre className="readme__code"><code>{section.code}</code></pre>}

          {section.bullets && (
            <ul className="readme__list">
              {section.bullets.map((bullet, i) => (
                <li key={i}><Inline text={bullet} /></li>
              ))}
            </ul>
          )}
        </section>
      ))}
    </div>
  );
}

function inlineText(value) {
  const parts = value.split(/(\*\*[^*]+\*\*)/g)

  return parts.map((part, index) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={index}>{part.slice(2, -2)}</strong>
    }

    return <span key={index}>{part}</span>
  })
}

function isTableSeparator(line) {
  return /^\|?\s*:?-+:?\s*(\|\s*:?-+:?\s*)+\|?$/.test(line)
}

function tableCells(line) {
  return line.replace(/^\|/, '').replace(/\|$/, '').split('|').map((cell) => cell.trim())
}

export function CloudMarkdown({ content }) {
  const lines = content.split('\n')
  const blocks = []
  let index = 0

  while (index < lines.length) {
    const line = lines[index]

    if (!line.trim()) {
      index += 1
      continue
    }

    if (line.startsWith('```')) {
      const code = []
      index += 1
      while (index < lines.length && !lines[index].startsWith('```')) {
        code.push(lines[index])
        index += 1
      }
      index += 1
      blocks.push(<pre className="cloud-diagram" key={`code-${index}`}><code>{code.join('\n')}</code></pre>)
      continue
    }

    if (line.startsWith('> ')) {
      const quote = []
      while (index < lines.length && lines[index].startsWith('> ')) {
        quote.push(lines[index].slice(2))
        index += 1
      }
      const text = quote.join(' ')
      const noteMatch = text.match(/^\*\*NOTE:\*\*\s*(.*)$/)
      blocks.push(
        <aside className="cloud-note" key={`quote-${index}`}>
          <span className="mono">NOTE</span>
          <p>{inlineText(noteMatch ? noteMatch[1] : text)}</p>
        </aside>,
      )
      continue
    }

    if (/^\|/.test(line) && index + 1 < lines.length && isTableSeparator(lines[index + 1])) {
      const headers = tableCells(line)
      index += 2
      const rows = []
      while (index < lines.length && /^\|/.test(lines[index]) && lines[index].trim()) {
        rows.push(tableCells(lines[index]))
        index += 1
      }
      blocks.push(
        <div className="cloud-table-wrap" key={`table-${index}`}>
          <table className="cloud-table">
            <thead><tr>{headers.map((cell) => <th key={cell}>{inlineText(cell)}</th>)}</tr></thead>
            <tbody>{rows.map((row, rowIndex) => <tr key={rowIndex}>{row.map((cell, cellIndex) => <td key={cellIndex}>{inlineText(cell)}</td>)}</tr>)}</tbody>
          </table>
        </div>,
      )
      continue
    }

    const heading = line.match(/^(#{1,3})\s+(.+)$/)
    if (heading) {
      const level = heading[1].length
      const text = heading[2]
      if (level === 1) {
        blocks.push(<h2 key={`heading-${index}`}>{inlineText(text)}</h2>)
      } else if (level === 2) {
        const normalized = text.toLowerCase()
        const special = normalized === 'feynman check' ? ' feynman' : normalized === 'practice' ? ' practice' : ''
        const label = normalized === 'feynman check' ? 'FEYNMAN CHECK' : normalized === 'practice' ? 'PRACTICE' : 'CONCEPT'
        blocks.push(<section key={`section-${index}`} className={`cloud-markdown-section${special}`}><div className="cloud-section-label mono">{label}</div><h2>{inlineText(text)}</h2></section>)
      } else {
        blocks.push(<h3 key={`subheading-${index}`}>{inlineText(text)}</h3>)
      }
      index += 1
      continue
    }

    if (/^- /.test(line)) {
      const items = []
      while (index < lines.length && /^- /.test(lines[index])) {
        items.push(lines[index].slice(2))
        index += 1
      }
      blocks.push(<ul className="cloud-bullet-list" key={`list-${index}`}>{items.map((item) => <li key={item}>{inlineText(item)}</li>)}</ul>)
      continue
    }

    if (/^\d+\. /.test(line)) {
      const items = []
      while (index < lines.length && /^\d+\. /.test(lines[index])) {
        items.push(lines[index].replace(/^\d+\. /, ''))
        index += 1
      }
      blocks.push(<ol className="cloud-number-list" key={`numbered-${index}`}>{items.map((item, itemIndex) => <li key={itemIndex}>{inlineText(item)}</li>)}</ol>)
      continue
    }

    const paragraph = [line]
    index += 1
    while (index < lines.length && lines[index].trim() && !/^(#{1,3})\s+/.test(lines[index]) && !/^```/.test(lines[index]) && !/^> /.test(lines[index]) && !/^- /.test(lines[index]) && !/^\d+\. /.test(lines[index]) && !/^\|/.test(lines[index])) {
      paragraph.push(lines[index])
      index += 1
    }
    blocks.push(<p key={`paragraph-${index}`}>{inlineText(paragraph.join(' '))}</p>)
  }

  return <div className="cloud-markdown">{blocks}</div>
}

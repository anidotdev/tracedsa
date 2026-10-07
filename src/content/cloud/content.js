const cloudContent = import.meta.glob(
  './01-what-actually-is-cloud/*.md',
  {
    query: '?raw',
    import: 'default',
    eager: true,
  }
)

export function getCloudContent(filename) {
  const path = `./01-what-actually-is-cloud/${filename}`

  return cloudContent[path] || ''
}

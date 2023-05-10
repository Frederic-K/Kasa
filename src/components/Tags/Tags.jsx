function Tags({ data }) {
  return (
    <ul className="tags__list">
      {data.map((tag, index) => (
        <li className="tags__list--item" key={`${tag}-${index}`}>
          {tag}
        </li>
      ))}
    </ul>
  )
}

export default Tags

const Title = (props) => {
  const { textColor, title } = props
  return <h1 style={{ color: textColor }}>{ title }</h1>
}

export default Title
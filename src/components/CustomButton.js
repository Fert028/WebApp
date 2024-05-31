function CustomButton(props) {
  return (
    <a href={props.link} className="button CustomButton">
      <button><p>{props.text}</p></button>
    </a>
  )
}

export default CustomButton;
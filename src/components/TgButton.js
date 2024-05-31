
function TgButton(props) {
  return (
    <a href={props.link} className="TgButton">
      <button><h4>Отправить в Телегам</h4></button>
    </a>
  )
}

export default TgButton;
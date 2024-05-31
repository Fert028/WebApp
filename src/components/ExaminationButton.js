
function ExaminationButton(props) {
  return (
    <a href={props.link} className="button ExaminationButton">
      <button><p>Проверить подписку</p></button>
    </a>
  )
}

export default ExaminationButton;
function SubscribeButton(props) {
  return (
    <a href={props.link} className="button SubscribeButton">
      <button><p style={{fontSize: 11 + 'px'}}>Подписаться</p></button>
    </a>
  )
}

export default SubscribeButton;
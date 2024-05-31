import SubscribeButton from "./SubscribeButton";

function Subscription(props) {
  return (
    <div className="Subscription">
      <div className="channel">
        <img src={props.logo} alt="channel" />
        <div>
          <h4>{props.name}</h4>
          <p className="ccc">Не подписан</p>
        </div>
      </div>

        <SubscribeButton link='/' />
    </div>
  )
}

export default Subscription;
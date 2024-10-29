
function Services({sendText}) {
  return (
    <div>
        <h2>I am From Services</h2>
        <button onClick={() => sendText('Hi guys. This is from button.')} style={{margin: '10px 0'}}>Send Text</button>
    </div>
  )
}

export default Services
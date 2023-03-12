import React, { useState } from 'react'

function Furniture(props: any) {
  const [title, setTitle] = useState(props.furniture.title)
  const [body, setBody] = useState(props.furniture.body)

  const titleElement = <h2 className="title text-start">{props.furniture.title}</h2>
  const BodyElement = <h2 className="card-text text-start">{props.furniture.body}</h2>
  return (<div>
    <div className="row">
      <div className="col-8">
        {titleElement}
      </div>
      <div className="col-4"></div>

    </div>

    <div className="row">
      <div className="col-8">
        {BodyElement}
      </div>
    </div>
    <div className='row'>
      <div className="col-2">
        {/* edit submit button */}
      </div>

    </div>


  </div>
  )
}

export default Furniture

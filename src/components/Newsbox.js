import React from 'react'
import './pagecontent.css'

const Newbox = (props) => {
    return (
        <>
            <div className="cards" key={props.keys}>
                <div className="cheading citems">{props.heading}</div>
                <div className="cimg citems"><img src={props.imageUrl} alt="Not found" /></div>
                <div className="ccontent citems">{props.content}</div>
                <button className='btn' onClick={props.click}>Read more</button>
            </div>
        </>
    )
}

export default Newbox

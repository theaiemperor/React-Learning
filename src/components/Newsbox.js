import React, { Component } from 'react'
import './pagecontent.css'

export class Newbox extends Component {
  
    render() {
        let { heading, imageUrl, content,keys ,click} = this.props;
        return (
            <>
                <div className="cards" key={keys}>
                    <div className="cheading citems">{heading}</div>
                    <div className="cimg citems"><img src={imageUrl} alt="Not found" /></div>
                    <div className="ccontent citems">{content}</div>
                    <button className='btn' onClick={click}>Read more</button>
                </div>
            </>
        )
    }
}

export default Newbox

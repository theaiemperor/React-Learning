import React, { Component } from 'react'
import Newbox from './Newsbox';
import './pagecontent.css'


export class PageContent extends Component {


    pagecontent = []

    constructor() {
        super();
        this.state = {
            contentofpage: this.pagecontent
        }
    }

    componentDidMount(){
        let url = "../newsdata.json";

        fetch(url).then((response) => {
            return response.text();
        }).then((data) => {
            let data2 = JSON.parse(data);
            this.setState({contentofpage : data2})
        })
    }

    render() {
        return (
            <>
                <header>This is a news Website</header>
                <div id="container" >
                    {this.state.contentofpage.map((element) => {
                        return <div className="contain" key={element.id}>
                            <Newbox heading={element.heading} imageUrl={element.imageUrl} content={element.content.slice(0, 140)} click={()=>{window.alert(element.content)}} />
                        </div>
                    })}
                </div>
            </>
        )
    }
}

export default PageContent

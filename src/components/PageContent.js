import React, { Component } from 'react'
import Newbox from './Newsbox';
import './pagecontent.css'



export class PageContent extends Component {


    pagecontent = []

    constructor() {
        super();
        this.state = {
            contentofpage: this.pagecontent,
            dynamiccontent: this.pagecontent,
            TotalResult: this.pagecontent.length,
            NoOfboxes: 14,   
            nb: false,
            pb: true,
            count: 14,
        }
    }


    componentDidMount() {
        let url = "../newsdata.json";


        fetch(url).then((response) => {
            return response.text();
        }).then((data) => {
            let data2 = JSON.parse(data);
            this.setState({ dynamiccontent: data2, TotalResult: data2.length, contentofpage: data2.slice(0, this.state.count) })
        })
    }



    previousbutton = () => {

        this.setState({ NoOfboxes: this.state.NoOfboxes - this.state.count })
        if (this.state.NoOfboxes === this.state.count) {
            this.setState({ pb: true })
        }
        this.setState({ contentofpage: this.state.dynamiccontent.slice(this.state.NoOfboxes - this.state.count, this.state.NoOfboxes), nb: false })

        if(this.state.NoOfboxes === this.state.count){
        this.setState({ NoOfboxes : this.state.count })
        }

    }

    nextbutton = () => {
        if (this.state.pb) {
            this.setState({ contentofpage: this.state.dynamiccontent.slice(this.state.NoOfboxes, this.state.NoOfboxes + this.state.count), pb: false })
        } else {
            this.setState({ NoOfboxes: (this.state.NoOfboxes + this.state.count) })
            if (this.state.NoOfboxes === Math.ceil((this.state.TotalResult / this.state.count) - 2) * this.state.count) {
                this.setState({ nb: true })
            }
            this.setState({ contentofpage: this.state.dynamiccontent.slice(this.state.NoOfboxes + this.state.count, this.state.NoOfboxes + 2 * this.state.count), pb: false })
        }

    }


    render() {
        return (
            <>
                <header>This is a news Website</header>
                <div id="container" >
                    {this.state.contentofpage.map((element) => {
                        return <div className="contain" key={element.id}>
                            <Newbox heading={element.heading} imageUrl={element.imageUrl} content={element.content.slice(0, 140)} click={() => { window.alert(element.content) }} />
                        </div>
                    })}
                </div>
                <div className="btns">
                    <button className="buttons" onClick={this.previousbutton} disabled={this.state.pb} >&larr; Previous</button>
                    <button className="buttons" onClick={this.nextbutton} disabled={this.state.nb} >Next &rarr;</button>
                </div>
            </>
        )
    }
}

export default PageContent

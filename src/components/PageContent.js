import React, { Component } from 'react'
import Newbox from './Newsbox';
import './pagecontent.css'


export class PageContent extends Component {

    pagecontent = [{
        "heading": "heading_1",
        "id": "XDFSS10001",
        "imageUrl": "image1.png",
        "content": " this is a content1. Lorem ipsum dolor, sit amet corporis, asperiores voluptates maiores explicabo dignissimos quis saepe iusto aliquam maxime? Optio ipsa doloremque, harum magnam, eaque eligendi quos delectus similique minus necessitatibus est nostrum repudiandae porro ratione cupiditate! Ex nostrum quaerat, accusamus, ut, fuga soluta temporibus molestias facere expedita eaque ipsum corporis aliquid."
    },
    {
        "heading": "heading_2",
        "id": "XDFSS6668",
        "imageUrl": "image2.png",
        "content": " this is a content2. Lorem ipsum dolor, sit amet corporis, asperiores voluptates maiores explicabo dignissimos quis saepe iusto aliquam maxime? Optio ipsa doloremque, harum magnam, eaque eligendi quos delectus similique minus necessitatibus est nostrum repudiandae porro ratione cupiditate! Ex nostrum quaerat, accusamus, ut, fuga soluta temporibus molestias facere expedita eaque ipsum corporis aliquid."
    },
    {
        "heading": "heading_3",
        "id": "XDFSS5003",
        "imageUrl": "image3.png",
        "content": " this is a content3. Lorem ipsum dolor, sit amet corporis, asperiores voluptates maiores explicabo dignissimos quis saepe iusto aliquam maxime? Optio ipsa doloremque, harum magnam, eaque eligendi quos delectus similique minus necessitatibus est nostrum repudiandae porro ratione cupiditate! Ex nostrum quaerat, accusamus, ut, fuga soluta temporibus molestias facere expedita eaque ipsum corporis aliquid."
    },
    {
        "heading": "heading_4",
        "id": "XDFSS4004",
        "imageUrl": "image4.png",
        "content": " this is a content4. Lorem ipsum dolor, sit amet corporis, asperiores voluptates maiores explicabo dignissimos quis saepe iusto aliquam maxime? Optio ipsa doloremque, harum magnam, eaque eligendi quos delectus similique minus necessitatibus est nostrum repudiandae porro ratione cupiditate! Ex nostrum quaerat, accusamus, ut, fuga soluta temporibus molestias facere expedita eaque ipsum corporis aliquid."
    },
    {
        "heading": "heading_5",
        "id": "XDFSS3338",
        "imageUrl": "image5.png",
        "content": " this is a content5. Lorem ipsum dolor, sit amet corporis, asperiores voluptates maiores explicabo dignissimos quis saepe iusto aliquam maxime? Optio ipsa doloremque, harum magnam, eaque eligendi quos delectus similique minus necessitatibus est nostrum repudiandae porro ratione cupiditate! Ex nostrum quaerat, accusamus, ut, fuga soluta temporibus molestias facere expedita eaque ipsum corporis aliquid."
    },
    {
        "heading": "heading_6",
        "id": "XDFSS2863",
        "imageUrl": "image6.png",
        "content": " this is a content6. Lorem ipsum dolor, sit amet corporis, asperiores voluptates maiores explicabo dignissimos quis saepe iusto aliquam maxime? Optio ipsa doloremque, harum magnam, eaque eligendi quos delectus similique minus necessitatibus est nostrum repudiandae porro ratione cupiditate! Ex nostrum quaerat, accusamus, ut, fuga soluta temporibus molestias facere expedita eaque ipsum corporis aliquid."
    }
    ]

    constructor() {
        super();
        this.state = {
            contentofpage: this.pagecontent
        }
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

import React, { useEffect, useState } from 'react'
import Newbox from './Newsbox';
import './pagecontent.css'

const PageContent = (props) => {

    const [contenofpage, setcontenofpage] = useState([])
    const [dynamiccontent, setdynamiccontent] = useState([])
    const [TotalResult, setTotalResult] = useState([].length)
    const [NoOfboxes, setNoOfboxes] = useState(props.showboxcount)
    const [nb, setnb] = useState(false)
    const [pb, setpb] = useState(true)
    const [count] = useState(props.showboxcount)

    useEffect(() => {
        let url = "../newsdata.json";
        fetch(url).then((response) => {
            return response.text();
        }).then((data) => {
            let data2 = JSON.parse(data);
            setdynamiccontent(data2)
            setTotalResult(data2.length)
            setcontenofpage(data2.slice(0, count))
        })
        // If we want to clean console warning without adding dependecy to array then we have to write this comment
        //  eslint-disable-next-line
    }, [])




    const previousbutton = () => {
        setNoOfboxes(NoOfboxes - count)
        if (NoOfboxes === count) {
            setpb(true)
        }

        setcontenofpage(dynamiccontent.slice(NoOfboxes - count, NoOfboxes))
        setnb(false)

        if (NoOfboxes === count) {
            setNoOfboxes(count)
        }

    }

    const nextbutton = () => {
        if (pb) {
            setcontenofpage(dynamiccontent.slice(NoOfboxes, NoOfboxes + count));
            setpb(false);
        } else {
            setNoOfboxes(NoOfboxes + count);
            if (NoOfboxes === Math.ceil((TotalResult / count) - 2) * count) {
                setnb(true)
            }
            setcontenofpage(dynamiccontent.slice(NoOfboxes + count, NoOfboxes + 2 * count))
            setpb(false)
        }
    }


    return (
        <>
            <header>This is a news Website</header>
            <div id="container" >
                {contenofpage.map((element) => {
                    return <div className="contain" key={element.id}>
                        <Newbox heading={element.heading} imageUrl={element.imageUrl} content={element.content.slice(0, 140)} click={() => { window.alert(element.content) }} />
                    </div>
                })}
            </div>
            <div className="btns">
                <button className="buttons" onClick={previousbutton} disabled={pb} >&larr; Previous</button>
                <button className="buttons" onClick={nextbutton} disabled={nb} >Next &rarr;</button>
            </div>
        </>
    )
}

PageContent.defaultProps = {
    showboxcount : 4
}

export default PageContent

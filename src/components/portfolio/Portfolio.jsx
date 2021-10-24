import PortfolioList from "../portfolioList/portfolioList"
import "./portfolio.scss"
import { useState, useEffect} from 'react'
import {
    featuredPortfolio,
    webPortfolio,
    mobilePortfolio,
    designPortfolio,
    contentPortfolio,
} from "../../data"

export default function Portfolio() {

    const list = [
        {
            id: "featured",
            title: "Featured",
        },
        {
            id: "web",
            title: "Web App",
        },
        {
            id: "mobile",
            title: "Mobile App",
        },
        {
            id: "design",
            title: "Design",
        },
        {
            id: "content",
            title: "Content",
        }
    ]

    const [selected, setSelected] = useState(list[0].id)
    const [data, setData] = useState([])

    useEffect(() => {
        switch (selected) {
            case "featured":
                setData(featuredPortfolio)
                break
            case "web":
                setData(webPortfolio)
                break
            case "mobile":
                setData(mobilePortfolio)
                break
            case "design":
                setData(designPortfolio)
                break
            case "content":
                setData(contentPortfolio)
                break
            default:
                setData(featuredPortfolio)
        }
    }, [selected])

    function renderListItem() {
        return data.map(item => (
            <div className="item">
                <img src={item.img} alt="" />
                <h3>{item.title}</h3>
            </div>
        ))
    }

    return (
        <div className="portfolio" id="portfolio">
            <h1>Portfolio</h1>
            <ul>
                {list.map(item => (<PortfolioList item={item} key={item.id} active={selected === item.id} setSelected={setSelected} />))}
            </ul>
            <div className="container">
                {renderListItem()}
            </div>
        </div>
    )
}

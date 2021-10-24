import "./portfolioList.scss"

export default function portfolioList({item , active, setSelected}) {
    return (
        <li className={"portfolioList " + (active && "active")}  onClick={() => setSelected(item.id)}>
            {item.title}
        </li>
    )
}

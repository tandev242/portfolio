
export default function Cart({ item }) {
    return (
        <div className={"card " + (item.featured ? "featured" : "")}>
            <div className="top">
                <img src="assets/right-arrow.png" className="left" alt="" />
                <img src={item.img}
                    className="user"
                    alt="" />
                <img src={item.icon} className="right" alt="" />
            </div>
            <div className="center">
                {item.desc}
            </div>
            <div className="bottom">
                <h3>{item.name}</h3>
                <h4>{item.title}</h4>
            </div>
        </div>
    )
}

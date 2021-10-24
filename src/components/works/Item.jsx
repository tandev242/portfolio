
export default function Item({ item }) {
    return (
        <div className="container">
            <div className="item">
                <div className="left">
                    <div className="leftContainer">
                        <div className="imgContainer">
                            <img src={item.icon} alt="" />
                        </div>
                        <h2>{item.title}</h2>
                        <p> {item.desc}</p>
                        <a href={item.project} target="_blank"><span>Project</span></a>
                    </div>
                </div>
                <div className="right">
                    <img
                        src={item.img}
                        alt=""
                    />
                </div>
            </div>
        </div>
    )
}

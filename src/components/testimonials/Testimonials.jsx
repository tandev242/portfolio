import Card from "./Card";
import "./testimonials.scss";

export default function Testimonials() {

    const data = [
        {
            id: 1,
            name: "Le Duc Tan",
            title: "Co-worker",
            img:
                "./assets/tanle.jpg",
            icon: "assets/twitter.png",
            desc:
                "Python is sincere love. Other programming languages are trash ! ",
        },
        {
            id: 2,
            name: "Nguyen Van Tan",
            title: "Software Developer of MWG",
            img:
                "./assets/tan-dz.jpg",
            icon: "assets/youtube.png",
            desc:
                "Everyone will end up some place in life. The opportunity before you is to end up where you want to be. Thinking of you life in terms of you destiny. ",
            featured: true,
        },
        {
            id: 3,
            name: "Joma Tech",
            title: "Professional Engineer",
            img:
                "https://yt3.ggpht.com/ytc/AKedOLTFLnUPOScnD78_Lz7YCbp0PXSpPgBTI4HA0pA8=s900-c-k-c0x00ffffff-no-rj",
            icon: "assets/linkedin.png",
            desc:
                "Be who you are and say what you feel, because those who mind don't matter and those who matter don't mind",
        },
    ];


    return (
        <div className="testimonials" id="testimonials">
            <h1>Testimonials</h1>
            <div className="container">
                {data.map(item => <Card item={item} key={item.id} />)}
            </div>
        </div>
    )
}

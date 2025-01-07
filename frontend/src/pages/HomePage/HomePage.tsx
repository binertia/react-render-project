import "./HomePage.css"
import homeLogo from "./../../assets/imgs/Asset-5-1.png"

const HomeText = `We are profressional of
                Building information modeling (BIM)
                Building automation system (BAS)
                and Exclusive business information.`

export default function HomePage() {
    return (
        <div className="homepage-container">
            <div className="homepage-text-container">
                <img className="home-logo" src={homeLogo} alt="Logo" />
                <p className="hometext active-newline">
                    {HomeText}
                </p>
            </div>
        </div>
    )
}

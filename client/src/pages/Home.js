import Header from "../components/Header";
import Hero from "../components/Hero";
import Page2 from "../components/Page2";
import Page3 from "../components/page3";

export default function Home() {
    return(
        <div className="home">
            <Hero />
            <Page2 />
            <Page3 />
            <div style={{height: '200px'}}></div>
        </div>
    )
}
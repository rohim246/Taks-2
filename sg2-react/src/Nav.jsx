import { Link } from "react-router-dom"

export default function Nav() {
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/cnbc">CNBC</Link></li>
                <li><Link to="/republika">Republika</Link></li>
                <li><Link to="/tempo">Tempo</Link></li>
                <li><Link to="/okezone">Okezone</Link></li>
                <li><Link to="/bbc">BBC</Link></li>
            </ul>
        </nav>
    )
}

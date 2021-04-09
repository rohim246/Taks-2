import { NavLink, Switch, Route, useRouteMatch } from "react-router-dom"
import NewsCnbcList from './NewsCnbcList'
import { useState, useEffect } from "react"

export default function NewsCnbc() {
    let match = useRouteMatch();

    const [newsList, setNewsList] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const baseUrl = `https://berita-indo-api.vercel.app`

    useEffect(() => {
        getData(baseUrl)
    }, [baseUrl])

    const getData = (baseUrl) => {
        setIsLoading(true)
        fetch(baseUrl)
            .then(resp => resp.json())
            .then(res => {
                // console.log(res.listApi['CNBC News'].listType);
                setNewsList(res.listApi['CNBC News'].listType)
                setIsLoading(false)
            })
            .catch(err => console.log(err))
    }

    return (
        <>
            <h1>Ini List tipe berita</h1>
            <nav>
                <ul>
                    {isLoading && <p>Loading......</p>}
                    {!isLoading && newsList && newsList.map((data, i) => (
                        <li key={i}><NavLink to={`${match.url}/${data}`}>{data}</NavLink></li>
                    ))}
                </ul>
            </nav>
            <Switch>
                <Route path={`${match.path}/:type`}>
                    <NewsCnbcList />
                </Route>
                <Route path={match.path}>
                    <p>Random aja</p>
                </Route>
            </Switch>
        </>
    )
}

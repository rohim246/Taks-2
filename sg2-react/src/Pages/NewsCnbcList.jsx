import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

export default function NewsCnbcList() {
    let params = useParams();
    // console.log(params);

    const [newsList, setNewsList] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const baseUrl = `https://berita-indo-api.vercel.app/v1/cnbc-news/${params.type}`

    useEffect(() => {
        getData(baseUrl)
    }, [baseUrl])

    const getData = (baseUrl) => {
        setIsLoading(true)
        fetch(baseUrl)
            .then(resp => resp.json())
            .then(res => {
                console.log(res);
                setNewsList(res.data)
                setIsLoading(false)
            })
            .catch(err => console.log(err))
    }

    return (
        <>
            <h4>List Type berita: {params.type}</h4>
            <ul>
                {isLoading && <p>Loading....</p>}
                {!isLoading && newsList && newsList.map((data, i) => (
                    <li key={i}>{data.title}</li>
                ))}
            </ul>
        </>
    )
}

import { useEffect, useState } from "react"

export const RequestList = () => {
    const [requests, setRequests] = useState([])

    useEffect(
        () => {
            fetch('http://localhost:8088/requests?_expand=user')
            .then(response => response.json())
            .then((requestArray) => {
                setRequests(requestArray)
            })
            
        },
        [] 
    )

    return <>
        <h2>List of Requests</h2>
        <article className="requests">
            {
                requests.map(
                    (request) => {
                        return <section className="request" key={request.id}>
                            {request?.user?.fullName}, {request?.user?.email}, {request?.details} {request?.dateRequested}
                        </section>
                    }
                    
                )
            }
        </article>
    
    </>
    
}
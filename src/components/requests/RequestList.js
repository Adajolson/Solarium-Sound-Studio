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
        <h2 className="requestTitle ">List of Requests</h2>
        <article className="requests flex flex-wrap p-10 m-2 space-y-3 bg-amber-500">
            {
                requests.map(
                    (request) => {
                        return <section className="request py-8 px-8 max-w-sm mx-auto bg-orange-300 rounded-xl shadow-lg shadow-orange-300 space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6" key={request.id}>
                            <h3 className="requestUser text-center space-y-2 sm:text-left">{request?.user?.fullName}</h3>
                            <p className="gearName text-lg text-black font-semibold">{request?.details}</p>
                            <p className="gearName text-lg text-black font-semibold">{request?.dateRequested}</p>
                        </section>
                    }
                    
                )
            }
        </article>
    
    </>
    
}

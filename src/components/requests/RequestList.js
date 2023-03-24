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
        <h2 className="requestTitle text-center pt-6 text-lg">Current Requests</h2>
        <article className="requests flex flex-col p-10-2 space-y-3 m">
            {
                requests.map(
                    (request) => {
                        return <>
                            <div class="flip-card-request shadow-lg rounded-xl shadow-white">
                                <div class="flip-card-inner-request">
                                    <div class="flip-card-front-request">
                                        <div><h3 className="requestUser">{request?.user?.fullName}</h3></div>
                                    </div>
                                    <div class="flip-card-back-request">
                                        <p className="gearName ">{request?.details}</p>
                                        <p className="gearDate ">{request?.dateRequested}</p>
                                    </div>
                                </div>
                            </div>
                            </>
                    }
                    
                )
            }
        </article>
    
    </>
    
}

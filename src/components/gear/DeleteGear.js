/* export const deleteRequest = (id) => {
    return fetch(`http://localhost:8088/requests/${id}`, 
    { method: "DELETE" })
        .then(
            () => {
                mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
            }
        )
}
Delete Button

return `
    <li>
        ${request.description}
        <button class="request__delete"
                id="request--${request.id}">
            Delete
        </button>
    </li>
` */
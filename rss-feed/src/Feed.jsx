const Feed = ({ title, link, date }) => {

    //let formatted = { day:"numeric", month: "long", year: "numeric" }
    //let articleDate = new Date(date).toLocalDateString("en-GB", formatted)
    return (
        <>
            <div className="title">
                <h3 className="text-xl mb-1">{title}</h3>
            </div>
            <p className="date">{date}</p>
        </>
    )
}

export default Feed;
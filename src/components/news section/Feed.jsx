import './news.css'
const Feed = ({title, link, date, content}) => {
   
    let formatted = {day: "numeric", month: "long", year: "numeric"}
    let articleDate = new Date(date).toLocaleDateString("en-US", formatted)
    return (
        <>
            <a href ={link} target = "_blank"
            rel= "noopener noreferrer">
            <h2>{title} </h2>
                <p>{articleDate}</p>
             <h3>{content}</h3>   
            </a>

        </>
    )
}

export default Feed;
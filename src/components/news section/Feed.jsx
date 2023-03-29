import './news.css'
const Feed = ({title, link, date, content, picture}) => {
   
    let formatted = {day: "numeric", month: "long", year: "numeric"}
    let articleDate = new Date(date).toLocaleDateString("en-US", formatted)
    
    return (
        <>
            <a className="text" href ={link} target = "_blank"
            rel= "noopener noreferrer">
            <h2 >{title} </h2>
            <span >{articleDate}</span>
             <p className="text1" >{content}</p>   
            </a>

        </>
    )
}

export default Feed;
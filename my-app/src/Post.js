export default function Post({postName="no title",postBody="no body",children}){
    if(postBody === "no body"){
            return null
        }
    return(
        <div style={{padding:"10px",border:"solid teal 5px",width:"50%",margin:"25px"}}>
            <h2>{postName}</h2>
            <hr />
            <p>{postBody}</p>
            {children}
        </div>
        
    )
}
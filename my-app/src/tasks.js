export default function Tasks(){
    const tasks = [
        {id:1,title:"reading book"},
        {id:2,title:"writing code"},
        {id:3,title:"exercising"},
        {id:4,title:"meeting friends"}
    ];
    const myTasksList = tasks.map((task) => <li key= {task.id}>{task.title}</li>);

    return(
        <div>
            <h2>Tasks Component</h2>
            <div>
                <h3>My Tasks:</h3>
                <ul>
                    {myTasksList}
                </ul>
            </div>
        </div>
    )
}
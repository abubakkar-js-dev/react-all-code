// export default function Todo({task,isDone}){
//     return (
//         <li>{isDone ? 'Finished': 'Work On'}</li>
//     )
//     // if(isDone){
//     //     return <li>Finished: {task}</li>
//     // }else{
//     //     return <li>Work one: {task}</li>
//     // }
// }


// conditional rendaring option 4: &&


export default function Todo({task,isDone}){
    return (
        <li>{task} {isDone || ':Do it.'}</li>
    )
}
    
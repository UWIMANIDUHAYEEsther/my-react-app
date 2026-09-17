

function List(){
const fruits=[{id:1 ,name:"Orange",calories:95}
             ,{id:2,name:"Apple",calories:120}
             ,{id:3,name:'Banana',calories:45},
             {id:4,name:'Coconut',calories:75}
             ,{id:5,name:'pineapple',calories:125}]
// fruits.sort((a,b)=>a.name.localeCompare(b.name));
//reverse alphabetical order
//fruits.sort((a,b)=>b.name.localeCompare(a.name));
//sort by calories in numerical order
fruits.sort((a,b)=>a.calories-b.calories)
const listiteams=fruits.map(fruit=><li key={fruit.id}>
                             {fruit.name}:&nbsp;
                             <b>{fruit.calories}</b></li>)
return(<ol>{listiteams}</ol>)


}
export default List


function List(){
const fruits=["Orange","Apple",'Banana','Coconut','pineapple']
fruits.sort();
const listiteams=fruits.map(fruit=><li>{fruit}</li>)
return(<ul>{listiteams}</ul>)


}
export default List
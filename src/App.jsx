
import List from './List.jsx'

function App(){
    // const fruits=[]
      const fruits = [
        { id: 1, name: "Orange", calories: 'hello' },
        { id: 2, name: "Apple", calories: 120 },
        { id: 3, name: "Banana", calories: 45 },
        { id: 4, name: "Coconut", calories: 75 },
        { id: 5, name: "Pineapple", calories: 125 }
    ];
      const vegetables = [
        { id: 6, name: "tomatoes", calories: 87 },
        { id: 7, name: "beans", calories: 130 },
        { id: 8, name: "maize", calories: 25 },
        { id: 9, name: "Carrot", calories: 75 },
        { id: 10, name: "corn", calories: 225 }
    ];
    return(
       <>
        {fruits.length >0 && <List items={fruits} category='fruits'/>}
        {vegetables.length>0 && <List items={vegetables} category='vegetables'/>}
       
       </>
        
    )
   
}




export default App
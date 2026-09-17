import PropTypes from 'prop-types'
function List(props) {
    const category=props.category;
 const itemlist=props.items
  
  const listitems=itemlist.map(item=><li key={item.id}>
                             {item.name}:&nbsp;
                             <b>{item.calories}</b></li>)
return(<>
  <h3>{category}</h3>

<ol>{listitems}</ol>
</>)


}
List.PropTypes={
    category:PropTypes.string,
    items:PropTypes.arrayof(PropTypes.shape({id:PropTypes.number,
                                             name:PropTypes.string,
                                             calories:PropTypes.number
    }))
}

export default List;
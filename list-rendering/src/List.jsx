import PropTypes from 'prop-types'

function List(props){

    const list = props.items;
    const category = props.category;
    
    
    //Sort alphabetically
    // fruits.sort((a, b) => a.name.localeCompare(b.name));
    
    //Sort numerically
    // fruits.sort((a, b) => a.calories - b.calories)
    
    //Filter a list items
    // const lowCalFruits = fruits.filter(fruit => fruit.calories < 100)

    const listItems = list.map(item => <li className = {item.id}>
                                                            {item.name}: &nbsp;
                                                            <b>{item.calories}</b></li>)

    return(
        <>
            <h2 className = "item-title" >{category}</h2>
            <ul className = "item-list" >{listItems}</ul>
        </>
        )
}

List.PropTypes = {
    items: PropTypes.arrayOf(PropTypes.shape(
        {
            id:  PropTypes.number,
            name: PropTypes.string,
            calories: PropTypes.number
        }
    )),
    category: PropTypes.string
}

List.defaultProps = {
    items: [],
    category: "Empty"
}

export default List
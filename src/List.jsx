
function List() {
    const fruits = [
        { id: 1, name: "Orange", calories: 95 },
        { id: 2, name: "Apple", calories: 120 },
        { id: 3, name: "Banana", calories: 45 },
        { id: 4, name: "Coconut", calories: 75 },
        { id: 5, name: "Pineapple", calories: 125 }
    ];

    const highcalfruits = fruits.filter(
        fruit => fruit.calories >= 100
    );

    const listitems = highcalfruits.map(
        highcalfruit => (
            <li key={highcalfruit.id}>
                {highcalfruit.name}:&nbsp;
                <b>{highcalfruit.calories}</b>
            </li>
        )
    );

    return <ol>{listitems}</ol>;
}

export default List;
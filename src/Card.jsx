import profilepic from './assets/eee.png'


function Card(){
    return (
        <div className="card">
            <img className='card-img' src={profilepic} alt="Profile" width="150" height="150" />
            <h2 className="card-title">Esther</h2>
            <p>I am student in computer science Department</p>
        </div>
    )

}
export default Card
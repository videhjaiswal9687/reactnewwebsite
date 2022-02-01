//Function Component (StateLess Component)

//internal StyleSheet
const empStyle = {
    backgroundColor: 'teal',
    color: 'white',
    border: '5px solid black'
}

export function Employee(props) {
    return (
        <div style={empStyle}>
            {/* calling another component */}
            {/* <Manager name="Manoj Verma" id={2323} salary={54567.343} exp={5} /> */}
            <h1>EMPLOYEE DETAILS</h1>
            <h2 style={{ backgroundColor: 'red', color: 'white' }}>Name:{props.name}</h2>
            <h2>Id:{props.id}</h2>
            <h2>Salary:{props.salary}</h2>
            <h2>Department:{props.department}</h2>
            <hr></hr>
        </div>
    )
}
export const Manager = props => {
    return (
        <div className="Manager">
            <h1>MANAGER DETAILS</h1>
            <h2>Name:{props.name}</h2>
            <h2>Id:{props.id}</h2>
            <h2>Exp:{props.exp}</h2>
            <h2>Salary:{props.salary}</h2>
        </div>
    )
}
//export default Employee;
//export { Employee, Manager };
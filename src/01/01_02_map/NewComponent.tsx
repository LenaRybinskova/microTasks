type NewComponentType = {
    students: StudentsType[]
}

type StudentsType = {
    id: number
    name: string
    age: number
}

export const NewComponent = (props: NewComponentType) => {

    const topCars = [
        {manufacturer: 'BMW', model: 'm5cs'},
        {manufacturer: 'Mercedes', model: 'e63s'},
        {manufacturer: 'Audi', model: 'rs6'}
    ]

    return (
        <>
            <table>
                <tbody>
                {topCars.map((el, index) => {
                    return (<tr key={index}>
                            <td>{el.manufacturer}</td>
                            <td>{el.model}</td>
                        </tr>
                    )
                })}
                </tbody>

            </table>

            <ul>
                {props.students.map((el) => {
                    console.log("зашел")
                    return (
                        <li key={el.id}>{el.name} {el.age}</li>
                    )
                })}
            </ul>
        </>
    )
}

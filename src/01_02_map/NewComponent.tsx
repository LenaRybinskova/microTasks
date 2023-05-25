type NewComponentType = {
    students: StudentsType[]
}

type StudentsType = {
    id: number
    name: string
    age: number
}

export const NewComponent = (props: NewComponentType) => {

    return (
        <ul>
            {props.students.map((el) => {
                console.log("зашел")
                return (
                    <li key={el.id}>{el.name} {el.age}</li>
                )
            })}
        </ul>
    )
}

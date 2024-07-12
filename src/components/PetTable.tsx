import { Pet } from '../services/generated/petstore';

interface PetRowProps {
    key: number
    pet: Pet
}

export function PetRow(props: PetRowProps) {
    const { pet, key } = props
    return (
        <tr key={key}>
            <td>{pet.id}</td>
            <td>{pet.name}</td>
            <td>{pet.status}</td>
        </tr>
    )
}

interface PetTableProps {
    pets: Array<Pet>
}

export function PetTable(props: PetTableProps) {
    const { pets } = props
    return (
        <table>
            <thead>
                <tr>
                    <th>Pet ID</th>
                    <th>Name</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                {pets.map((pet, idx) => <PetRow key={idx} pet={pet} />)}
            </tbody>
        </table>
    )
}

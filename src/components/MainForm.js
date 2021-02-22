import { Fragment, useEffect, useState } from 'react'
import { getCollection } from '../actions/generic'
import { size } from 'lodash'
import Footer from './Footer'

function MainForm() {

    const [pets, setPets] = useState([])
    const [addModal, setAddModal] = useState(false);
    const [updateModal, setUpdateModal] = useState(false);
    const [deleteModal, setDeleteModal] = useState(false);
    const [petSelected, setPetSelected] = useState({
        name: '',
        petType: '',
        petBreed: '',
        dateBirth: '',
        ownerName: '',
        ownerPhone: '',
        ownerAddress: '',
        ownerEmail: ''
    })

    const handleChange = e => {
        const { name, value } = e.target;
        setPetSelected({
            ...petSelected,
            [name]: value
        });
    }

    const toggleAddModal = () => {
        setAddModal(!addModal);
    }

    const toggleUpdateModal = () => {
        setUpdateModal(!updateModal);
    }

    const toggleDeleteModal = () => {
        setDeleteModal(!deleteModal);
    }

    const selectPet = (pet, caseType) => {
        setPetSelected(pet);
        (caseType === "Update") ? toggleUpdateModal() : toggleDeleteModal();
    }

    useEffect(() => {
        (async () => {
            const result = await getCollection("patients")
            if (result.statusResponse) {
                setPets(result.data)
            }
        })()
    }, [])

    return (
        <Fragment>
            <div className="jumbotron text-center">
                <h1>LISTA DE MASCOTAS</h1>
            </div>
            {
                size(pets) === 0 ? (
                    <li className="list-group-item">No hay mascotas registradas</li>
                ) : (
                        <div className="table-responsive mb-5 px-5">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">Nombre</th>
                                        <th scope="col">Tipo</th>
                                        <th scope="col">Raza</th>
                                        <th scope="col">Fecha nacimiento</th>
                                        <th scope="col">Nombre propietario</th>
                                        <th scope="col">Teléfono propietario</th>
                                        <th scope="col">Dirección propietario</th>
                                        <th scope="col">Correo propietario</th>
                                        <th scope="col">Icono</th>
                                        <th scope="col">Icono</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        pets.map((item) => (
                                            <tr key={item.id}>
                                                <td>{item.name}</td>
                                                <td>{item.petType}</td>
                                                <td>{item.petBreed}</td>
                                                <td>{item.dateBirth}</td>
                                                <td>{item.ownerName}</td>
                                                <td>{item.ownerPhone}</td>
                                                <td>{item.ownerAddress}</td>
                                                <td>{item.ownerEmail}</td>
                                                <td>
                                                    <button className="btn btn-info btn-sm" onClick={() => selectPet(pet, "Update")}>Editar</button>
                                                </td>
                                                <td>
                                                    <button className="btn btn-danger btn-sm" onClick={() => selectPet(pet, "Delete")}>Eliminar</button>
                                                </td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>
                    )
            }
            <Footer />
        </Fragment>
    )
}

export default MainForm
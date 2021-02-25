import { Fragment, useEffect, useState } from 'react'
import { getPets, addPet, updatePet, deletePet } from '../actions/generic'
import { size } from 'lodash'
import Footer from './Footer'
import $ from 'jquery'
import '../styles/main-form.css'

function MainForm() {

    $('[data-toggle="tooltip"]').tooltip()

    const [pets, setPets] = useState([])
    const [petSelected, setPetSelected] = useState({
        id: '',
        name: '',
        petType: '',
        petBreed: '',
        dateBirth: '',
        ownerName: '',
        ownerPhone: '',
        ownerAddress: '',
        ownerEmail: ''
    })

    useEffect(() => {
        (async () => {
            const result = await getPets("patients")
            if (result.statusResponse) {
                setPets(result.data)
            }
        })()
    }, [])

    const handleChange = e => {
        const { name, value } = e.target;
        setPetSelected({
            ...petSelected,
            [name]: value
        })
    }

    const addRequest = async (e) => {
        e.preventDefault()
        delete petSelected.id
        const result = await addPet("patients", petSelected)

        if (result.statusResponse) {

            const newPet = {
                id: result.data.id,
                name: petSelected.name,
                petType: petSelected.petType,
                petBreed: petSelected.petBreed,
                dateBirth: petSelected.dateBirth,
                ownerName: petSelected.ownerName,
                ownerPhone: petSelected.ownerPhone,
                ownerAddress: petSelected.ownerAddress,
                ownerEmail: petSelected.ownerEmail
            }

            setPets([...pets, newPet])
            toggleAddModal()
            cleanData()
        }
    }

    const updateRequest = async (e) => {
        e.preventDefault()

        const result = await updatePet("patients", petSelected.id, petSelected)
        if (result.statusResponse) {
            let temp = pets
            temp.map(pet => {
                if (pet.id === petSelected.id) {
                    pet.name = petSelected.name
                    pet.petType = petSelected.petType
                    pet.petBreed = petSelected.petBreed
                    pet.dateBirth = petSelected.dateBirth
                    pet.ownerName = petSelected.ownerName
                    pet.ownerPhone = petSelected.ownerPhone
                    pet.ownerAddress = petSelected.ownerAddress
                    pet.ownerEmail = petSelected.ownerEmail
                }
            })

            setPets(temp)
            toggleUpdateModal()
            cleanData()
        }
    }

    const deleteRequest = async (e) => {
        e.preventDefault()
        let idItem = petSelected.id;
        const result = await deletePet("patients", idItem)
        if (result.statusResponse) {
            setPets(pets.filter(pet => pet.id !== idItem))
            toggleDeleteModal()
        }
    }

    const toggleAddModal = () => {
        $("#add_modal").modal('toggle')
    }

    const toggleUpdateModal = () => {
        $("#update_modal").modal('toggle')
    }

    const toggleDeleteModal = () => {
        $("#delete_modal").modal('toggle')
    }

    const selectPet = (pet, caseType) => {
        setPetSelected(pet);
        (caseType === "Update") ? toggleUpdateModal() : toggleDeleteModal()
    }

    const cleanData = () => {
        const aux = {
            id: '',
            name: '',
            petType: '',
            petBreed: '',
            dateBirth: '',
            ownerName: '',
            ownerPhone: '',
            ownerAddress: '',
            ownerEmail: ''
        }
        setPetSelected(aux)
        $('input').val('')
    }

    return (
        <Fragment>
            <div className="jumbotron text-center">
                <h1>LISTA DE MASCOTAS</h1>
            </div>
            <ul className="nav justify-content-end">
                <li className="nav-item">
                    <a className="btn-add pr-5" href="#" onClick={() => toggleAddModal()} tabIndex="-1" aria-disabled="true" data-toggle="tooltip" data-placement="left" title="Añade una mascota">
                        <i className="fa fa-plus-circle add-icon"></i>
                    </a>
                </li>
            </ul>
            {
                size(pets) === 0 ? (
                    <li className="list-group-item text-center">No hay mascotas registradas</li>
                ) : (
                        <div className="table-responsive mb-5 px-5">
                            <table className="table table-borderless table-hover text-center">
                                <thead className="bg-thead">
                                    <tr>
                                        <th scope="col">Nombre</th>
                                        <th scope="col">Tipo de mascota</th>
                                        <th scope="col">Raza</th>
                                        <th scope="col">Fecha nacimiento</th>
                                        <th scope="col">Nombre propietario</th>
                                        <th scope="col">Teléfono propietario</th>
                                        <th scope="col">Dirección propietario</th>
                                        <th scope="col">Correo propietario</th>
                                        <th scope="col">Editar</th>
                                        <th scope="col">Eliminar</th>
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
                                                    <button className="btn btn-sm" onClick={() => selectPet(item, "Update")}><i className="fa fa-edit table-controls text-warning"></i></button>
                                                </td>
                                                <td>
                                                    <button className="btn btn-sm" onClick={() => selectPet(item, "Delete")}><i className="fa fa-trash table-controls text-danger"></i></button>
                                                </td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>
                    )
            }

            {/* Add Modal */}
            <div className="modal fade" id="add_modal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">
                    <div className="modal-content">
                        <form onSubmit={addRequest} id="add_form">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Agrega una mascota</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <div className="form-group">
                                    <label for="name">Nombre</label>
                                    <input type="text" className="form-control" name="name" placeholder="Nombre de la mascota" onChange={handleChange} required />
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-md-4">
                                        <label for="petType">Tipo de mascota</label>
                                        <input type="text" className="form-control" name="petType" placeholder="Perro, gato, loro..." onChange={handleChange} required />
                                    </div>
                                    <div className="form-group col-md-4">
                                        <label for="petBreed">Raza</label>
                                        <input type="text" className="form-control" name="petBreed" onChange={handleChange} />
                                    </div>
                                    <div className="form-group col-md-4">
                                        <label for="dateBirth">Fecha de nacimiento</label>
                                        <input type="date" className="form-control" name="dateBirth" placeholder="DD/MM/AAAA" onChange={handleChange} required />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label for="ownerName">Nombre del propietario</label>
                                    <input type="text" className="form-control" name="ownerName" onChange={handleChange} required />
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-md-5">
                                        <label for="ownerEmail">Email</label>
                                        <input type="email" className="form-control" name="ownerEmail" placeholder="pet@example.com" onChange={handleChange} required />
                                    </div>
                                    <div className="form-group col-md-4">
                                        <label for="ownerAddress">Dirección</label>
                                        <input type="address" className="form-control" name="ownerAddress" onChange={handleChange} required />
                                    </div>
                                    <div className="form-group col-md-3">
                                        <label for="ownerPhone">Teléfono</label>
                                        <input type="number" className="form-control" name="ownerPhone" placeholder="Celular o fijo" onChange={handleChange} required />
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                                <button type="button" className="btn btn-primary" type="submit" id="add_button">Guardar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            {/* Update Modal */}
            <div className="modal fade" id="update_modal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">
                    <div className="modal-content">
                        <form onSubmit={updateRequest} id="update_form">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Actualiza una mascota</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <div className="form-row">
                                    <div className="form-group col-md-8">
                                        <label for="name">Nombre</label>
                                        <input type="text" className="form-control" name="name" placeholder="Nombre de la mascota" value={petSelected && petSelected.name} onChange={handleChange} required />
                                    </div>
                                    <div className="form-group col-md-4">
                                        <label for="id">Id</label>
                                        <input type="text" className="form-control" name="id" value={petSelected && petSelected.id} onChange={handleChange} readOnly />
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-md-4">
                                        <label for="petType">Tipo de mascota</label>
                                        <input type="text" className="form-control" name="petType" placeholder="Perro, gato, loro..." value={petSelected && petSelected.petType} onChange={handleChange} required />
                                    </div>
                                    <div className="form-group col-md-4">
                                        <label for="petBreed">Raza</label>
                                        <input type="text" className="form-control" name="petBreed" value={petSelected && petSelected.petBreed} onChange={handleChange} />
                                    </div>
                                    <div className="form-group col-md-4">
                                        <label for="dateBirth">Fecha de nacimiento</label>
                                        <input type="date" className="form-control" name="dateBirth" placeholder="DD/MM/AAAA" value={petSelected && petSelected.dateBirth} onChange={handleChange} required />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label for="ownerName">Nombre del propietario</label>
                                    <input type="text" className="form-control" name="ownerName" value={petSelected && petSelected.ownerName} onChange={handleChange} required />
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-md-5">
                                        <label for="ownerEmail">Email</label>
                                        <input type="email" className="form-control" name="ownerEmail" placeholder="pet@example.com" value={petSelected && petSelected.ownerEmail} onChange={handleChange} required />
                                    </div>
                                    <div className="form-group col-md-4">
                                        <label for="ownerAddress">Dirección</label>
                                        <input type="address" className="form-control" name="ownerAddress" value={petSelected && petSelected.ownerAddress} onChange={handleChange} required />
                                    </div>
                                    <div className="form-group col-md-3">
                                        <label for="ownerPhone">Teléfono</label>
                                        <input type="number" className="form-control" name="ownerPhone" placeholder="Celular o fijo" value={petSelected && petSelected.ownerPhone} onChange={handleChange} required />
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                                <button type="button" className="btn btn-warning" type="submit" id="update_button">Actualizar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            {/* Delete Modal */}
            <div className="modal fade" id="delete_modal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <form onSubmit={deleteRequest} id="update_form">
                            <div className="modal-body">
                                ¿Estás seguro que deseas eliminar al paciente <strong>{petSelected && petSelected.name}</strong>?
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">No</button>
                                <button type="button" className="btn btn-danger" type="submit" id="update_button">Sí, eliminar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </Fragment>
    )
}

export default MainForm
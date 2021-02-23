import { Fragment, useEffect, useState } from 'react'
import { getCollection } from '../actions/generic'
import { size } from 'lodash'
import Footer from './Footer'
import $ from 'jquery'
import '../styles/main-form.css'

function MainForm() {

    $('[data-toggle="tooltip"]').tooltip()

    const [pets, setPets] = useState([])
    const [addModal, setAddModal] = useState(false);
    const [updateModal, setUpdateModal] = useState(false)
    const [deleteModal, setDeleteModal] = useState(false)
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
        })
    }

    const toggleAddModal = () => {
        $("#add_modal").modal('toggle')
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
            <ul className="nav justify-content-end">
                <li className="nav-item">
                    <a className="btn-add pr-5" href="#" onClick={() => toggleAddModal()} tabindex="-1" aria-disabled="true" data-toggle="tooltip" data-placement="left" title="Añade una mascota">
                        <i className="fa fa-plus-circle add-icon"></i>
                    </a>
                </li>
            </ul>
            {
                size(pets) === 0 ? (
                    <li className="list-group-item">No hay mascotas registradas</li>
                ) : (
                        <div className="table-responsive mb-5 px-5">
                            <table className="table text-center">
                                <thead>
                                    <tr>
                                        <th scope="col">Nombre</th>
                                        <th scope="col">Tipo de mascota</th>
                                        <th scope="col">Raza</th>
                                        <th scope="col">Fecha nacimiento</th>
                                        <th scope="col">Nombre propietario</th>
                                        <th scope="col">Teléfono propietario</th>
                                        <th scope="col">Dirección propietario</th>
                                        <th scope="col">Correo propietario</th>
                                        <th scope="col"><i className="fa fa-edit table-controls"></i></th>
                                        <th scope="col"><i className="fa fa-trash table-controls"></i></th>
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
                                                    <button className="btn btn-warning btn-sm" onClick={() => selectPet(item, "Update")}>Editar</button>
                                                </td>
                                                <td>
                                                    <button className="btn btn-danger btn-sm" onClick={() => selectPet(item, "Delete")}>Eliminar</button>
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
            <div className="modal fade" id="add_modal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Agrega una mascota</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="form-group">
                                <label for="name">Nombre</label>
                                <input type="text" className="form-control" name="name" placeholder="Nombre de la mascota" />
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-4">
                                    <label for="petType">Tipo de mascota</label>
                                    <input type="text" className="form-control" name="petType" placeholder="Perro, gato, loro..." />
                                </div>
                                <div className="form-group col-md-4">
                                    <label for="petBreed">Raza</label>
                                    <input type="text" className="form-control" name="petBreed" />
                                </div>
                                <div className="form-group col-md-4">
                                    <label for="dateBirth">Fecha de nacimiento</label>
                                    <input type="text" className="form-control" name="dateBirth" placeholder="DD/MM/AAAA" />
                                </div>
                            </div>
                            <div className="form-group">
                                <label for="ownerName">Nombre del propietario</label>
                                <input type="text" className="form-control" name="ownerName" />
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label for="ownerEmail">Email</label>
                                    <input type="text" className="form-control" name="ownerEmail" placeholder="pet@example.com" />
                                </div>
                                <div className="form-group col-md-4">
                                    <label for="ownerAddress">Dirección</label>
                                    <input type="text" className="form-control" name="ownerAddress" />
                                </div>
                                <div className="form-group col-md-2">
                                    <label for="ownerPhone">Teléfono</label>
                                    <input type="text" className="form-control" id="ownerPhone" placeholder="Celular o fijo" />
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                            <button type="button" className="btn btn-primary">Guardar</button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </Fragment>
    )
}

export default MainForm
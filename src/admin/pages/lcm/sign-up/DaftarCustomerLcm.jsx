import React, { useState } from "react";
import { Modal, Button, Pagination } from "react-bootstrap";
import { Link } from "react-router-dom";

const DaftarCustomerLcm = () => {
    const [showModal, setShowModal] = useState(false);
    const [activePage, setActivePage] = useState(1);
    
    const handleShow = () => setShowModal(true);
    const handleClose = () => setShowModal(false);
    const handlePageChange = (pageNumber) => setActivePage(pageNumber);

    return(
        <div className="container-xxl flex-grow-1 container-p-y">
            <div className="row g-3">
                <div className="h4 font-weight-bold text-dark">LIFE CAMP</div>
            </div>
            <div className="card mt-1">
                <div className="card-header">
                    <h5 className="fs-5 fw-bold">FILTER</h5>
                </div>
                <div className="card-body">
                    <div className="row g-3">
                        {/* Start Date */}
                        <div className="col-md-2">
                            <label className="form-label">START DATE</label>
                            <input type="date" className="form-control" />
                        </div>

                        {/* End Date */}
                        <div className="col-md-2">
                            <label className="form-label">END DATE</label>
                            <input type="date" className="form-control" />
                        </div>

                        {/* Program */}
                        <div className="col-md-2">
                            <label className="form-label">PROGRAM</label>
                            <select className="form-select">
                                <option>All</option>
                                <option>LCm</option>
                                <option>LCm-RA</option>
                            </select>
                        </div>

                        {/* Term */}
                        <div className="col-md-2">
                            <label className="form-label">TERM</label>
                            <select name="" id="" className="form-select">
                                <option value="">All</option>
                                <option value="">S1 2025</option>
                                <option value="">S2 2025</option>
                            </select>
                        </div>

                        {/* Status */}
                        <div className="col-md-2">
                            <label className="form-label">STATUS</label>
                            <select className="form-select">
                                <option>All</option>
                                <option>-</option>
                                <option>Paid</option>
                            </select>
                        </div>

                        {/* Source */}
                        <div className="col-md-2">
                            <label className="form-label">SOURCE</label>
                            <select className="form-select">
                                <option>All</option>
                                <option>AD</option>
                                <option>SocMed</option>
                                <option>Referral</option>
                                <option>Web</option>
                                <option>WAB</option>
                                <option>Email</option>
                            </select>
                        </div>
                    </div>
                    {/* Tombol Filter */}
                    <button className="btn btn-primary mt-3">Filter</button>
                </div>
            </div>

            <div className="card mt-4">
                <div className="card-header text-white">
                    <h5 className="mb-0 fs-5 fw-bold">LIST CUSTOMER</h5>
                </div>
                <div className="card-body px-0">
                    <div className="table-responsive">
                        <table className="table table-striped table-hover text-center">
                            <thead>
                                <tr>
                                    <th>No</th>
                                    <th>Tgl Daftar</th>
                                    <th>Tgl Bayar</th>
                                    <th>Nama</th>
                                    <th>HP</th>
                                    <th>Email</th>
                                    <th>Program</th>
                                    <th>Status</th>
                                    <th>Source</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>4 Mar 2025</td>
                                    <td>5 Mar 2025</td>
                                    <td>Elda</td>
                                    <td>62856665278</td>
                                    <td>elda@gmail.com</td>
                                    <td><Link to="#" className="btn btn-link" onClick={handleShow}>LCm</Link></td>
                                    <td>-</td>
                                    <td>AD</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>4 Mar 2025</td>
                                    <td>4 Mar 2025</td>
                                    <td>Mulia</td>
                                    <td>62877875832</td>
                                    <td>mulia@gmail.com</td>
                                    <td><Link to="#" className="btn btn-link" onClick={handleShow}>LCm</Link></td>
                                    <td>-</td>
                                    <td>AD</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>3 Mar 2025</td>
                                    <td>3 Mar 2025</td>
                                    <td>Johan</td>
                                    <td>62877875832</td>
                                    <td>johan@gmail.com</td>
                                    <td><Link to="#" className="btn btn-link" onClick={handleShow}>LCm</Link></td>
                                    <td>Paid</td>
                                    <td>Email</td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>3 Mar 2025</td>
                                    <td>3 Mar 2025</td>
                                    <td>Agung</td>
                                    <td>62877875832</td>
                                    <td>agung@gmail.com</td>
                                    <td><Link to="#" className="btn btn-link" onClick={handleShow}>LCm</Link></td>
                                    <td>Paid</td>
                                    <td>WAB</td>
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td>2 Mar 2025</td>
                                    <td>3 Mar 2025</td>
                                    <td>Alga</td>
                                    <td>62877875832</td>
                                    <td>alga@gmail.com</td>
                                    <td><Link to="#" className="btn btn-link" onClick={handleShow}>LCm</Link></td>
                                    <td>Paid</td>
                                    <td>AD</td>
                                </tr>
                                <tr>
                                    <td>6</td>
                                    <td>28 Feb 2025</td>
                                    <td>28 Feb 2025</td>
                                    <td>Rafi</td>
                                    <td>62877875832</td>
                                    <td>rafi@gmail.com</td>
                                    <td><Link to="#" className="btn btn-link" onClick={handleShow}>LCm</Link></td>
                                    <td>Paid</td>
                                    <td>AD</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    {/* Pagination */}
                    <Pagination className="justify-content-end mt-3 me-3">
                        <Pagination.First onClick={() => handlePageChange(1)} />
                        <Pagination.Prev onClick={() => handlePageChange(activePage - 1)} disabled={activePage === 1} />
                        <Pagination.Item active>{activePage}</Pagination.Item>
                        <Pagination.Next onClick={() => handlePageChange(activePage + 1)} />
                        <Pagination.Last onClick={() => handlePageChange(10)} />
                    </Pagination>
                </div>
            </div>

            {/* Modal Detail */}
            <Modal show={showModal} onHide={handleClose} centered>
                <Modal.Header>
                    <Modal.Title>DETAIL</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p><strong>ORDER ID:</strong> LIFE-2502140001</p>
                    <table className="table table-bordered">
                        <thead className="text-center">
                            <tr>
                                <th>No</th>
                                <th>Program</th>
                                <th>Student</th>
                                <th>Harga</th>
                            </tr>
                        </thead>
                        <tbody className="text-center">
                            <tr>
                                <td>1</td>
                                <td>LCm</td>
                                <td>Jeni</td>
                                <td>Rp 17.000.000</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>LCm</td>
                                <td>Rose</td>
                                <td>Rp 17.000.000</td>
                            </tr>
                            <tr>
                                <td colSpan={3}><strong>SUBTOTAL</strong></td>
                                <td><strong>Rp 34.000.000</strong></td>
                            </tr>
                            <tr>
                                <td colSpan={3}><strong>DISCOUNT</strong></td>
                                <td><strong>Rp 1.700.000</strong></td>
                            </tr>
                            <tr>
                                <td colSpan={3}><strong>TOTAL</strong></td>
                                <td><strong>Rp 32.300.000</strong></td>
                            </tr>
                        </tbody>
                    </table>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Close</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default DaftarCustomerLcm;

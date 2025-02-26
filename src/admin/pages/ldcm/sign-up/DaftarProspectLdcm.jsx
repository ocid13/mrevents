import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FcCallback } from "react-icons/fc";
import { MdClose, MdCheck, MdWifiCalling1, MdWifiCalling2, MdWifiCalling3 } from "react-icons/md";
import Select from "react-select";
import { Modal, Button, Pagination } from "react-bootstrap";
import { Link } from "react-router-dom";

const DaftarProspectLdcm = () => {
    const [showModal, setShowModal] = useState(false);
    const [activePage, setActivePage] = useState(1);

    const handleShow = () => setShowModal(true);
    const handleClose = () => setShowModal(false);
    const handlePageChange = (pageNumber) => setActivePage(pageNumber);

    const FOLLOW_UP = [
        {label: "Select"},
        { value: "0", label: <FaWhatsapp style={{ color: "green" }} /> },
        { value: "1", label: <FcCallback /> },
        { value: "2", label: <MdClose style={{ color: "red" }} /> },
        { value: "3", label: <MdCheck style={{ color: "green" }} /> },
        { value: "4", label: <MdWifiCalling1 style={{ color: "red" }} /> },
        { value: "5", label: <MdWifiCalling2 style={{ color: "red" }} /> },
        { value: "6", label: <MdWifiCalling3 style={{ color: "red" }} /> },
    ];

  return (
    <div className="container-xxl flex-grow-1 container-p-y">
        <div className="row g-3">
          <div className="h4 font-weight-bold text-dark">LEAD CAMP</div>
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
                        <option>LdCm-Jkt</option>
                        <option>LdCm-Srby</option>
                        <option>LdCm-Bndng</option>
                        <option>LdCm-Mdn</option>
                        <option>LdCm-Mkssr</option>
                        <option>LdCm-Blkppn</option>
                        <option>LdCm-Sol</option>
                        <option>LdCm-Mlng</option>
                        <option>LdCm-Smrng</option>
                        <option>LdCm-Plmbng</option>
                        <option>LdCm-RA</option>
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
                        <option>Pending</option>
                        <option>Expired</option>
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
                <h5 className="mb-0 fs-5 fw-bold">LIST PROSPECT</h5>
            </div>
            <div className="card-body px-0">
                <div className="table-responsive">
                    <table className="table table-striped table-hover text-center">
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Tgl Daftar</th>
                                <th>Nama</th>
                                <th>HP</th>
                                <th>Email</th>
                                <th>Program</th>
                                <th>Status</th>
                                <th>Source</th>
                                <th>FU</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>5 Mar 2025</td>
                                <td>Andre</td>
                                <td>6285677178</td>
                                <td>andre@gmail.com</td>
                                <td><Link to="#" className="btn btn-link" onClick={handleShow}>LdCm-Jkt</Link></td>
                                <td>Pending</td>
                                <td>AD</td>
                                <td><Select options={FOLLOW_UP} isSearchable={false} /></td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>4 Mar 2025</td>
                                <td>Bobi</td>
                                <td>628579838</td>
                                <td>bobi@gmail.com</td>
                                <td><Link to="#" className="btn btn-link" onClick={handleShow}>LdCm-Jkt</Link></td>
                                <td>Pending</td>
                                <td>AD</td>
                                <td><Select options={FOLLOW_UP} isSearchable={false} /></td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>1 Mar 2025</td>
                                <td>Choki</td>
                                <td>6289765234</td>
                                <td>choki@gmail.com</td>
                                <td><Link to="#" className="btn btn-link" onClick={handleShow}>LdCm-Mdn</Link></td>
                                <td>Pending</td>
                                <td>WAB</td>
                                <td><Select options={FOLLOW_UP} isSearchable={false} /></td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>25 Feb 2025</td>
                                <td>Anwar</td>
                                <td>6287765831</td>
                                <td>anwar@gmail.com</td>
                                <td><Link to="#" className="btn btn-link" onClick={handleShow}>LdCm-Srby</Link></td>
                                <td>Expired</td>
                                <td>Email</td>
                                <td><Select options={FOLLOW_UP} isSearchable={false} /></td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>15 Feb 2025</td>
                                <td>Budi</td>
                                <td>6285986866</td>
                                <td>budi@gmail.com</td>
                                <td><Link to="#" className="btn btn-link" onClick={handleShow}>LdCm-Srby</Link></td>
                                <td>Expired</td>
                                <td>AD</td>
                                <td><Select options={FOLLOW_UP} isSearchable={false} /></td>
                            </tr>
                            <tr>
                                <td>6</td>
                                <td>5 Feb 2025</td>
                                <td>Cynthia</td>
                                <td>6287786631</td>
                                <td>cyn@gmail.com</td>
                                <td><Link to="#" className="btn btn-link" onClick={handleShow}>LdCm-Mdn</Link></td>
                                <td>Expired</td>
                                <td>AD</td>
                                <td><Select options={FOLLOW_UP} isSearchable={false} /></td>
                            </tr>
                            <tr>
                                <td>7</td>
                                <td>30 Jan 2025</td>
                                <td>Deni</td>
                                <td>6289778931</td>
                                <td>deni@gmail.com</td>
                                <td><Link to="#" className="btn btn-link" onClick={handleShow}>LdCm-Jkt</Link></td>
                                <td>Expired</td>
                                <td>AD</td>
                                <td><Select options={FOLLOW_UP} isSearchable={false} /></td>
                            </tr>
                            <tr>
                                <td>8</td>
                                <td>26 Jan 2025</td>
                                <td>Ester</td>
                                <td>6289769651</td>
                                <td>ester@gmail.com</td>
                                <td><Link to="#" className="btn btn-link" onClick={handleShow}>LdCm-Jkt</Link></td>
                                <td>Expired</td>
                                <td>AD</td>
                                <td><Select options={FOLLOW_UP} isSearchable={false} /></td>
                            </tr>
                            <tr>
                                <td>9</td>
                                <td>15 Jan 2025</td>
                                <td>Fani</td>
                                <td>6285127393</td>
                                <td>fani@gmail.com</td>
                                <td><Link to="#" className="btn btn-link" onClick={handleShow}>LdCm-Jkt</Link></td>
                                <td>Expired</td>
                                <td>AD</td>
                                <td><Select options={FOLLOW_UP} isSearchable={false} /></td>
                            </tr>
                            <tr>
                                <td>10</td>
                                <td>5 Jan 2025</td>
                                <td>Handoko</td>
                                <td>6285673961</td>
                                <td>handoko@gmail.com</td>
                                <td><Link to="#" className="btn btn-link" onClick={handleShow}>LdCm-Jkt</Link></td>
                                <td>Expired</td>
                                <td>AD</td>
                                <td><Select options={FOLLOW_UP} isSearchable={false} /></td>
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
                <p><strong>ORDER ID:</strong> LDCM-2502140001</p>
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
                            <td>LdCm-Jkt</td>
                            <td>Joko</td>
                            <td>Rp 4.000.000</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>LdCm-Jkt</td>
                            <td>Bowo</td>
                            <td>Rp 4.000.000</td>
                        </tr>
                        <tr>
                            <td colSpan={3}><strong>SUBTOTAL</strong></td>
                            <td><strong>Rp 8.000.000</strong></td>
                        </tr>
                        <tr>
                            <td colSpan={3}><strong>DISCOUNT</strong></td>
                            <td><strong>Rp 400.000</strong></td>
                        </tr>
                        <tr>
                            <td colSpan={3}><strong>TOTAL</strong></td>
                            <td><strong>Rp 7.600.000</strong></td>
                        </tr>
                    </tbody>
                </table>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>Close</Button>
            </Modal.Footer>
        </Modal>
    </div>
  );
};

export default DaftarProspectLdcm;

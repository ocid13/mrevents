import React, { useState } from "react";
import { Pagination, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const StudentLdcm = () => {
    const [activePage, setActivePage] = useState(1);
    const [isDisabled, setIsDisabled] = useState(false);

    const handlePageChange = (pageNumber) => setActivePage(pageNumber);
    const handleClick = () => {
        setIsDisabled(true); // Menonaktifkan tombol setelah diklik
    };

    return(
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
                    <h5 className="mb-0 fs-5 fw-bold">LIST STUDENT</h5>
                </div>
                <div className="card-body px-0">
                    <div className="table-responsive">
                        <table className="table table-striped table-hover text-center">
                            <thead className="text-center">
                                <tr>
                                    <th>No</th>
                                    <th>Tgl Bayar</th>
                                    <th>Nama</th>
                                    <th>HP</th>
                                    <th>Email</th>
                                    <th>Program</th>
                                    <th>Attendance</th>
                                </tr>
                            </thead>
                            <tbody className="text-center">
                                <tr>
                                    <td>1</td>
                                    <td>4 Mar 2025</td>
                                    <td><Link to={`/admin/edit-ldcm`} className="btn btn-link">Jeni</Link></td>
                                    <td>62856787632</td>
                                    <td>jeni@gmail.com</td>
                                    <td>LdCm-Jkt</td>
                                    <td><input type="checkbox" className="form-check-input" /></td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>4 Mar 2025</td>
                                    <td><Link to={`/admin/edit-ldcm`} className="btn btn-link">Rose</Link></td>
                                    <td>62856787622</td>
                                    <td>rose@gmail.com</td>
                                    <td>LdCm-Jkt</td>
                                    <td><input type="checkbox" className="form-check-input" /></td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>3 Mar 2025</td>
                                    <td><Link to={`/admin/edit-ldcm`} className="btn btn-link">Dono</Link></td>
                                    <td>62878787632</td>
                                    <td>dono@gmail.com</td>
                                    <td>LdCm-RA</td>
                                    <td><input type="checkbox" className="form-check-input" /></td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>3 Mar 2025</td>
                                    <td><Link to={`/admin/edit-ldcm`} className="btn btn-link">Doni</Link></td>
                                    <td>62899787622</td>
                                    <td>doni@gmail.com</td>
                                    <td>LdCm-RA</td>
                                    <td><input type="checkbox" className="form-check-input" /></td>
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td>2 Mar 2025</td>
                                    <td><Link to={`/admin/edit-ldcm`} className="btn btn-link">Bili</Link></td>
                                    <td>62812787632</td>
                                    <td>bili@gmail.com</td>
                                    <td>LdCm-Srby</td>
                                    <td><input type="checkbox" className="form-check-input" /></td>
                                </tr>
                                <tr>
                                    <td>6</td>
                                    <td>28 Feb 2025</td>
                                    <td><Link to={`/admin/edit-ldcm`} className="btn btn-link">Agus</Link></td>
                                    <td>62851787622</td>
                                    <td>agus@gmail.com</td>
                                    <td>LdCm-Mdn</td>
                                    <td><input type="checkbox" className="form-check-input" /></td>
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
        </div>
    )
}

export default StudentLdcm;

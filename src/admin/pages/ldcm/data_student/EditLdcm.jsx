import React, { useState} from "react";
import { Button, Form, Card, Table, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const EditLdcm = () => {
    const navigate = useNavigate();
    const [tanggalLahir, setTanggalLahir] = useState("");
    const [usia, setUsia] = useState("");

    const handleTanggalLahirChange = (e) => {
        const tglLahir = e.target.value;
        setTanggalLahir(tglLahir);

        if (tglLahir) {
            const today = new Date();
            const birthDate = new Date(tglLahir);
            let age = today.getFullYear() - birthDate.getFullYear();
            const monthDiff = today.getMonth() - birthDate.getMonth();

            // Koreksi jika ulang tahun belum terjadi tahun ini
            if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
                age--;
            }

            setUsia(age);
        } else {
            setUsia("");
        }
    };

    const handleSave = () => {
        Swal.fire({
            title: "Sukses!",
            text: "Data berhasil disimpan.",
            icon: "success",
            confirmButtonText: "OK"
        });
    };

    return (
        <div className="container-fluid mt-4">
            <Row className="row justify-content-center">
                <Col lg={10} xl={12}>
                    <Card className="shadow-lg">
                        <Card.Header className="d-flex justify-content-between align-items-center bg-primary text-white">
                            <h4 className="m-0 text-white">LEAD CAMP</h4>
                        </Card.Header>
                        <Card.Body>
                            
                            {/* Data Student */}
                            <h5 className="mb-3 mt-3 fs-5 fw-bold">DATA STUDENT</h5>
                            <Row className="mb-3">
                                <Col md={6}>
                                    <Form.Group className="d-flex align-items-center mb-2">
                                        <Form.Label className="me-3" style={{ minWidth: '80px' }}>Nama</Form.Label>
                                        <Form.Control type="text" />
                                    </Form.Group>
                                    <Form.Group className="d-flex align-items-center mb-2">
                                        <Form.Label className="me-3" style={{ minWidth: '80px' }}>HP</Form.Label>
                                        <Form.Control type="number" />
                                    </Form.Group>
                                    <Form.Group className="d-flex align-items-center mb-2">
                                        <Form.Label className="me-3" style={{ minWidth: '80px' }}>Email</Form.Label>
                                        <Form.Control type="email" />
                                    </Form.Group>

                                    {/* Row untuk Tanggal Lahir dan Usia */}
                                    <Row>
                                        <Col md={6}>
                                            <Form.Group className="d-flex align-items-center mb-2">
                                                <Form.Label className="me-3" style={{ minWidth: '80px' }}>Tgl Lahir</Form.Label>
                                                <Form.Control 
                                                    type="date" 
                                                    value={tanggalLahir} 
                                                    onChange={handleTanggalLahirChange} 
                                                />
                                            </Form.Group>
                                        </Col>
                                        <Col md={6}>
                                            <Form.Group className="d-flex align-items-center mb-2">
                                                <Form.Label className="me-2" style={{ minWidth: '30px' }}>Usia</Form.Label>
                                                <Form.Control 
                                                    type="text" 
                                                    value={usia} 
                                                    readOnly 
                                                    style={{ width: '60px' }}
                                                />
                                                <Form.Label className="ms-2">Tahun</Form.Label>
                                            </Form.Group>
                                        </Col>
                                    </Row>

                                    <Form.Group className="d-flex align-items-center mb-2">
                                        <Form.Label className="me-3" style={{ minWidth: '80px' }}>Jenis Kelamin</Form.Label>
                                        <div className="d-flex gap-3">
                                            <Form.Check type="radio" label="Laki-Laki" name="jenisKelamin" id="laki-laki" />
                                            <Form.Check type="radio" label="Perempuan" name="jenisKelamin" id="perempuan" />
                                        </div>
                                    </Form.Group>
                                    <Form.Group className="d-flex align-items-center mb-2">
                                        <Form.Label className="me-3" style={{ minWidth: '80px' }}>Sekolah</Form.Label>
                                        <Form.Control type="text" />
                                    </Form.Group>
                                    <Form.Group className="d-flex align-items-center mb-2">
                                        <Form.Label className="me-3" style={{ minWidth: '80px' }}>Vegetarian</Form.Label>
                                        <div className="d-flex gap-3">
                                            <Form.Check type="radio" label="Ya" name="vegetarian" />
                                            <Form.Check type="radio" label="Tidak" name="vegetarian" />
                                        </div>
                                    </Form.Group>
                                    <Form.Group className="d-flex align-items-center mb-2">
                                        <Form.Label className="me-3" style={{ minWidth: '80px' }}>Alergi</Form.Label>
                                        <div className="d-flex gap-3">
                                            <Form.Check type="radio" label="Ya" name="alergi" />
                                            <Form.Check type="radio" label="Tidak" name="alergi" />
                                        </div>
                                    </Form.Group>
                                </Col>
                            </Row>

                            
                            {/* Data Parent */}
                            <br />
                            <h5 className="mb-3 mt-3 fs-5 fw-bold">DATA PARENTS</h5>
                            <Row className="mb-3">
                                <Col md={6}>
                                    <h6 className="fs-5 fw-bold">AYAH</h6>
                                    <Form.Group className="d-flex align-items-center mb-2">
                                        <Form.Label className="me-3" style={{ minWidth: '80px' }}>Nama</Form.Label>
                                        <Form.Control type="text" />
                                    </Form.Group>
                                    <Form.Group className="d-flex align-items-center mb-2">
                                        <Form.Label className="me-3" style={{ minWidth: '80px' }}>HP</Form.Label>
                                        <Form.Control type="number" />
                                    </Form.Group>
                                    <Form.Group className="d-flex align-items-center mb-2">
                                        <Form.Label className="me-3" style={{ minWidth: '80px' }}>Email</Form.Label>
                                        <Form.Control type="email" />
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <h6 className="fs-5 fw-bold">IBU</h6>
                                    <Form.Group className="d-flex align-items-center mb-2">
                                        <Form.Label className="me-3" style={{ minWidth: '80px' }}>Nama</Form.Label>
                                        <Form.Control type="text" />
                                    </Form.Group>
                                    <Form.Group className="d-flex align-items-center mb-2">
                                        <Form.Label className="me-3" style={{ minWidth: '80px' }}>HP</Form.Label>
                                        <Form.Control type="number" />
                                    </Form.Group>
                                    <Form.Group className="d-flex align-items-center mb-2">
                                        <Form.Label className="me-3" style={{ minWidth: '80px' }}>Email</Form.Label>
                                        <Form.Control type="email" />
                                    </Form.Group>
                                </Col>
                            </Row>

                            {/* Alamat */}
                            <br />
                            <h5 className="mb-3 mt-3 fs-5 fw-bold">ALAMAT</h5>
                            <Row className="mb-3">
                                <Form.Group className="d-flex align-items-center mb-2">
                                    <Form.Label className="me-3" style={{ minWidth: '80px' }}>Alamat</Form.Label>
                                    <Form.Control type="text" />
                                </Form.Group>
                                <Col md={6}>
                                    <Form.Group className="d-flex align-items-center mb-2">
                                        <Form.Label className="me-3" style={{ minWidth: '80px' }}>Provinsi</Form.Label>
                                        <Form.Select>
                                            <option>DKI JAKARTA</option>
                                        </Form.Select>
                                    </Form.Group>
                                    <Form.Group className="d-flex align-items-center mb-2">
                                        <Form.Label className="me-3" style={{ minWidth: '80px' }}>Kota</Form.Label>
                                        <Form.Select>
                                            <option>JAKARTA BARAT</option>
                                            <option>JAKARTA TIMUR</option>
                                            <option>JAKARTA SELATAN</option>
                                            <option>JAKARTA UTARA</option>
                                            <option>JAKARTA PUSAT</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <Form.Group className="d-flex align-items-center mb-2">
                                        <Form.Label className="me-3" style={{ minWidth: '80px' }}>Kecamatan</Form.Label>
                                        <Form.Select>
                                            <option>GROGOL</option>
                                            <option>GROGOL PERTAMBURAN</option>
                                            <option>TANJUNG DUREN</option>
                                        </Form.Select>
                                    </Form.Group>
                                    <Form.Group className="d-flex align-items-center mb-2">
                                        <Form.Label className="me-3" style={{ minWidth: '80px' }}>Kode pos</Form.Label>
                                        <Form.Select>
                                            <option>11470</option>
                                            <option>15415</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Col>
                            </Row>

                            {/* History */}
                            <br />
                            <h5 className="mb-3 mt-3 fs-5 fw-bold">HISTORY</h5>
                            <Row>
                                <Col md={6}>
                                    <Table bordered>
                                        <thead className="text-center">
                                            <tr>
                                                <th>No</th>
                                                <th>Tgl Bayar</th>
                                                <th>Program</th>
                                                <th>Attendance</th>
                                            </tr>
                                        </thead>
                                        <tbody className="text-center">
                                            <tr>
                                                <td>1</td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </Col>
                            </Row>
                        </Card.Body>
                        <Card.Footer className="d-flex justify-content-end">
                            <Button variant="success" onClick={handleSave}>Save</Button>
                            <Button variant="secondary" className="ms-2" onClick={() => navigate("/admin/student-ldcm")}>Close</Button>
                        </Card.Footer>
                    </Card>
                </Col>
            </Row>
        </div>
    );
}

export default EditLdcm;

import Table from 'react-bootstrap/Table';
import { Button } from 'react-bootstrap';


const DashboardTable = ({ tableBody, handleShow}) => {
    const tableHeader = ['Project', 'Created date', 'Requested date', 'The size of dataset', 'Dashboard']


    return (
        <Table responsive>
            <thead>
                <tr>
                    <th></th>
                    {tableHeader.map((title, index) => (
                        <th key={index}>{title}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {tableBody.map((project, index) => (
                    <tr key={index + 1}>
                        <td>{index + 1}</td>
                        <td>{project.project}</td>
                        <td>{project.createdDate}</td>
                        <td>{project.requestedDate}</td>
                        <td>{project.sizeDataset}</td>

                    </tr>
                ))}

            </tbody>
        </Table>
    );
}

export default DashboardTable;
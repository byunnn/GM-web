import Table from 'react-bootstrap/Table';
import { Button } from 'react-bootstrap';



const GeneratedFileTable = ({ tableBody, handleShow}) => {
    const tableHeader = ['Project', 'Created date', 'Requested date', 'The size of dataset', 'File']

    const handleClick = (project, productId, productName) => {
        handleShow()
        console.log("product Id is changed", project)
    }

    const formatDate = (dateString) => {
        // 문자열에서 년, 월, 일 정보 추출
        const year = dateString.substr(0, 4);
        const month = dateString.substr(4, 2);
        const day = dateString.substr(6, 2);

        // 날짜 정보를 원하는 형식으로 조합
        return `${year}.${month}.${day}`;
    };

    const downloadFile = (fileName) => {
        const link = document.createElement('a');
        link.href = fileName; // 파일의 URL 또는 경로를 설정하세요.
        link.download = fileName+'.zip'; // 다운로드될 파일의 이름을 설정하세요.
        link.click();
    };



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
                        <td>
                            <a
                                href={project.file}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => {
                                    e.preventDefault();
                                    downloadFile(project.file);
                                }}
                            >
                                다운로드
                            </a>
                        </td>
                        {/* <td>{formatDate(product.register_date)}</td> */}
                        {/* <td><a href={product.store_url} target="_blank" rel="noopener noreferrer">다운로드</a></td> */}
                        {/* <td><Button
                            variant="outline-dark"
                            onClick={() =>handleClick(project, project.product_id, project.product_name)}>
                            상세보기
                        </Button>
                        </td> */}
                    </tr>
                ))}

            </tbody>
        </Table>
    );
}

export default GeneratedFileTable;
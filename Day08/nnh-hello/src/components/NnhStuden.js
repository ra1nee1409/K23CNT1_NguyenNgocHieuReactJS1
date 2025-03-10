import React, { Component } from 'react';

class NnhStuden extends Component {
        constructor(props){
            super(props);
        
        }
        
        //ham xu ly chuc nang xem

        nnhHandleView = (NnhStuden)=>{
            //chuyen len NnhStudenList
            this.props.onnnhHandleView(NnhStuden);

        }

    render() {
        //lay doi tuong du lieu chuyen tu NnhStudenlist
        let {renderNnhStudents, index} = this.props;
        console.log("student:", renderNnhStudents)
        return (
            <>
                <tr>
                    <td>{index}</td>
                    <td>{renderNnhStudents.nnhId}</td>
                    <td>{renderNnhStudents.nnhStudentName}</td>
                    <td>{renderNnhStudents.nnhAge}</td>
                    <td>{renderNnhStudents.nnhGender}</td>
                    <td>
                        <div className="template-demo">
                            <button
                                type="button"
                                className="btn btn-danger btn-icon-text"
                                onClick={()=>this.nnhHandleView(renderNnhStudents)}
                            >
                                Xem
                            </button>
                            <button
                                type="button"
                                className="btn btn-warning btn-icon-text"
                            >
                                Sửa
                            </button>
                            <button
                                type="button"
                                className="btn btn-success btn-icon-text"
                            >
                                Xóa
                            </button>
                        </div>
                    </td>
                </tr>
                {/* <tr>
                    <td>2</td>
                    <td>SV002</td>
                    <td>Nguyễn Văn B</td>
                    <td>21</td>
                    <td>Nữ</td>
                    <td>
                        <div className="template-demo">
                            <button
                                type="button"
                                className="btn btn-danger btn-icon-text"
                            >
                                Xem
                            </button>
                            <button
                                type="button"
                                className="btn btn-warning btn-icon-text"
                            >
                                Sửa
                            </button>
                            <button
                                type="button"
                                className="btn btn-success btn-icon-text"
                            >
                                Xóa
                            </button>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>SV003</td>
                    <td>Nguyễn Văn C</td>
                    <td>19</td>
                    <td>Nam</td>
                    <td>
                        <div className="template-demo">
                            <button
                                type="button"
                                className="btn btn-danger btn-icon-text"
                            >
                                Xem
                            </button>
                            <button
                                type="button"
                                className="btn btn-warning btn-icon-text"
                            >
                                Sửa
                            </button>
                            <button
                                type="button"
                                className="btn btn-success btn-icon-text"
                            >
                                Xóa
                            </button>
                        </div>
                    </td>
                </tr> */}
            </>
        );
    }
}

export default NnhStuden;   
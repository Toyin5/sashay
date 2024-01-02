import AdminDashLeft from "./adminDashLeft/AdminDashLeft"
import AdminDashRight from "./adminDashRight/AdminDashRight"
import './AdminDashBoard.css'
function AdminDashBoard() {
    return (
        <div className="AdminDashBoard_Main">
            <div className="AdminDashboardLeft_Wrap">
                <AdminDashLeft />
            </div>
            <div className="AdminDashboardRight_Wrap">
                <AdminDashRight />
            </div>
        </div>
    )
}

export default AdminDashBoard
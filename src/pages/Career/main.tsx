import DownloadIcon from "../../assets/icons/download.svg"
import fileicon from "/lg/file-icon.png"


const Career: React.FC = () => {




    return (
        <div>
            <h2 className="text-2xl md:text-3xl pl-2 my-10 border-l-100  border-bic-navy">Careers</h2>
            <div className="flex flex-row ">
                <h3 className="p-5 pt-9 font-medium text-2xl ">Job Appliacation Form:</h3>
                <div className="p-5 grid grid-cols-3">
                    {/*item*/}
                    <div className="my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-96">
                        <div className="flex items-center mb-4 p-2">
                            <img src={fileicon} alt="" className="h-6 w-6 text-slate-600" />

                            <h5 className="ml-3  text-slate-800 text-xl font-semibold" >
                                Job Application Form
                            </h5>
                            <a href="https://biclaos.com/wp-content/uploads/2024/06/Job-Application-Form.pdf" target="_blank">
                                <img src={DownloadIcon} alt="" className="ml-4 h-4 w-4 " /></a>
                        </div>
                        <p className="text-gray-500 p-2">2024</p>
                    </div>
                </div>
            </div>









            <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
                    <thead className="text-xs text-white bg-bic-navy ">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                No
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Position
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Post
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Location
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Deadline
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Apply
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-white border-b border-gray-200">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-500 whitespace-nowrap ">
                                1
                            </th>
                            <td className="px-6 py-4">
                                Customer Service
                            </td>
                            <td className="px-6 py-4">
                                01
                            </td>
                            <td className="px-6 py-4">
                                HQ
                            </td>
                            <td className="px-6 py-4">
                                May 16 2024
                            </td>
                            <td>
                                <a href="#">
                                    <button className="bg-bic-navy text-white p-2 rounded-md">Apply Now</button>
                                </a>
                            </td>
                        </tr>
                        <tr className="bg-white border-b border-gray-200">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-500 whitespace-nowrap dark:text-white">
                                2
                            </th>
                            <td className="px-6 py-4">
                                Customer Service
                            </td>
                            <td className="px-6 py-4">
                                01
                            </td>
                            <td className="px-6 py-4">
                                HQ
                            </td>
                            <td className="px-6 py-4">
                                May 16 2024
                            </td>
                            <td>
                                <a href="#">
                                    <button className="bg-bic-navy text-white p-2 rounded-md">Apply Now</button>
                                </a>
                            </td>
                        </tr>
                        <tr className="bg-white border-b border-gray-200">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-500 whitespace-nowrap dark:text-white">
                                3
                            </th>
                            <td className="px-6 py-4">
                                Customer Service
                            </td>
                            <td className="px-6 py-4">
                                01
                            </td>
                            <td className="px-6 py-4">
                                HQ
                            </td>
                            <td className="px-6 py-4">
                                May 16 2024
                            </td>
                            <td>
                                <a href="#">
                                    <button className="bg-bic-navy text-white p-2 rounded-md">Apply Now</button>
                                </a>
                            </td>
                        </tr>
                        <tr className="bg-white border-b border-gray-200">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-500 whitespace-nowrap dark:text-white">
                                4
                            </th>
                            <td className="px-6 py-4">
                                Customer Service
                            </td>
                            <td className="px-6 py-4">
                                01
                            </td>
                            <td className="px-6 py-4">
                                HQ
                            </td>
                            <td className="px-6 py-4">
                                May 16 2024
                            </td>
                            <td>
                                <a href="#">
                                    <button className="bg-bic-navy text-white p-2 rounded-md ">Apply Now</button>
                                </a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

         
        </div>

    )
}
export default Career;
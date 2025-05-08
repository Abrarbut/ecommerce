import MyOrdersPage from "./MyOrdersPage";
const Profile = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <div className="flex-grow container mx-auto p-4 md:p-6">
                <div className="flex flex-col md:flex-row md:space-x-6 md:space-y-6 md:space-y-0">
                    {/* Left section */}
                    <div className="w-full md:w-1/3 lg:w-1/4 shadow-md rounded-lg p-4 mb-6 md:mb-0">
                        <h1 className="text-2xl font-bold">Profile</h1>
                        <p className="text-gray-600 mb-4">Welcome to your profile</p>
                        <button className="w-full bg-blue-500 text-white px-4 py-2 rounded-md">Edit Profile</button>
                    </div>
                    {/* Right section */}
                    <div className="w-full md:w-2/3 lg:w-3/4 shadow-md rounded-lg p-4">
                        <MyOrdersPage />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Profile;

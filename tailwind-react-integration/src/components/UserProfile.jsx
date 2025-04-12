function UserProfile() {
    return (
      <div className="hover-shadow-xl user-profile bg-gray-100 sm:max-w-xs md:max-w-sm sm:p-4 md:p-8 max-w-sm mx-auto my-20 rounded-lg shadow-lg ">
        <img src="https://via.placeholder.com/150" alt="User" className=" hover:scale-110 transition-transform duration-300 ease-in-out sm:w-24 sm:h-24 md:w-36 md:h-36 rounded-full w-36 h-36 mx-auto"/>
        <h1 className=" text-blue-800 my-4 sm:text-lg md:txt-xl hover:text-blue-500">John Doe</h1>
        <p className="text-gray-600 sm:text-sm md:text-xl">Developer at Example Co. Loves to write code and explore new technologies.</p>
      </div>
    );
  }
  
  export default UserProfile; 
  
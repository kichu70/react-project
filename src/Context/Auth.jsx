import { toast, ToastContainer } from "react-toastify";

const { createContext, children, useState, useEffect, useContext } = require("react");

const AuthContext =createContext();
const fakeUsers =[
  {username: "admin",password:"admin123"},
  {username: "admin2",password:"admin124"},
  {username: "admin3",password:"admin125"}
];
export const AuthProvider =({children}) => {
  const[user,setUser] = useState(null);

useEffect(() => {
  const storeUser = localStorage.getItem('loggedInUser');
  if(storeUser){
    setUser(JSON.parse(storeUser))
  }
},[]);
const login = (username , password)=> {
  const fonudUser = fakeUsers.find(
    (u) => u.username === username && u.password === password
  );


  if(fonudUser){
    const userData = {username :fonudUser.username};
    setUser(userData);
    localStorage.setItem('loggedInUser',JSON.stringify(userData))
      toast.success("Login successful 🎉");
    } else {
      toast.error("Invalid Credentials!");
    }
};
  const logout = () =>{
    setUser(null)
    toast.info("Logged out successfully!");
    localStorage.removeItem("loggedInUser")
  }
return(
  <>
  <ToastContainer position="top-right" autoClose={3000} theme="colored"/>

  <AuthContext.Provider value={{user,login,logout}}>
    {children}
  </AuthContext.Provider>
  </>
)
}
export const useAuth = () => useContext(AuthContext)



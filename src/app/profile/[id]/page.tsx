
 const userProfile = async ({params}: any) => {

   const {id} = await params 
   console.log(id)

  return( 
    <div className=" flex flex-col items-center justify-center min-h-screen py-2">
       
       <h1>Profile</h1>
       <hr/>
       <p className=" text-2xl"> Profile Page   </p>
       <span className="text-orange-300">{id}</span>
   
    </div>

    );
  }


  export default userProfile
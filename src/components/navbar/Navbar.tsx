import { Link } from "react-router-dom"


function Navbar() {
 
  

  return (
    <>
     <div className='w-full bg-blue-950 text-white flex justify-center py-4'>
          <div className="container flex justify-between text-lg">
            <div className='text-2xl font-bold uppercase'>Supra Farma</div>

            <div className='flex gap-4'>
            <Link to='/home' className='hover:underline'>Home</Link>
              <div className='hover:underline'>Produtos</div>
            <Link to='/categoria' className='hover:underline'>Categoria</Link>
              <div className='hover:underline'>Cadastrar Categoria</div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Navbar
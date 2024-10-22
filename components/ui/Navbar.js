
function Navbar() {
    return (
        <div className='container-fluid bg-white p-3 border-bottom'>
            <div className='d-flex justify-content-between'>
                <div className='fw-bold fst-italic text-primary mt-1'>
                    @pixforwalls
                </div>
                <div>
                    <button className='btn btn-sm me-2'>Login</button>
                    <button className='btn btn-dark btn-sm'>Signup</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar
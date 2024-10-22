import Card from '@/components/ui/Card'
import Footer from '@/components/ui/Footer'
import Hero from '@/components/ui/Hero'
import Navbar from '@/components/ui/Navbar'

function IndexPage() {
  return (
    <>
      <Navbar />
      <div className='container'>
        <Hero />
        <div className='row mb-5'>
          <div className='col-sm-3 mt-4'>
            <Card />

          </div>
          <div className='col-sm-3 mt-4'>
            <Card />

          </div><div className='col-sm-3 mt-4'>
            <Card />

          </div><div className='col-sm-3 mt-4'>
            <Card />

          </div><div className='col-sm-3 mt-4'>
            <Card />

          </div><div className='col-sm-3 mt-4'>
            <Card />

          </div><div className='col-sm-3 mt-4'>
            <Card />

          </div><div className='col-sm-3 mt-4'>
            <Card />

          </div><div className='col-sm-3 mt-4'>
            <Card />

          </div><div className='col-sm-3 mt-4'>
            <Card />

          </div><div className='col-sm-3 mt-4'>
            <Card />

          </div><div className='col-sm-3 mt-4'>
            <Card />

          </div>
        </div>

      </div>
      <Footer />
    </>
  )
}

export default IndexPage
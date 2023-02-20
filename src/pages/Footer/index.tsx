
import logo from '@/assets/Logo.png';

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img src={ logo } alt="logo" />
          <p className="my-5">
          Mauris vitae eros volutpat, scelerisque risus in, eleifend eros. Maecenas ut erat ut sem maximus rutrum id non leo. Cras sit amet metus semper, eleifend massa ut, facilisis leo. Mauris lobortis lacus quis ipsum condimentum, sed ultrices est convallis. 
          </p>
          <p>&copy; Evogym All Rights Reserved.</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5">Massa orci senectus</p>
          <p className="my-5">Massa orci senectus</p>
          <p>Ullamcorper vivamus</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">Tempus metus mattis risus volutpat egestas.</p>
          <p className="my-5">(+855) 15 812383</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
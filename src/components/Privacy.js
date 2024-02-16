import React from 'react'
import Header from './Header'
import { PRIVACY_iMAGE } from '../utils/constants'

const Privacy = () => {
  return (
    <div className="relative">
     <Header/>
      <div className="flex">     
        <img className="object-cover h-screen" src={PRIVACY_iMAGE} alt="Banner" />
      </div>
      <div  className="absolute top-1/4 w-6/12 left-12">
            <h1 className="text-2xl font-bold text-blue-700 justify-center">Privacy Policy</h1>
            <p className="py-3  text-white">
              Contrary to popular belief, Lorem Ipsum is not simply random text. It
              has roots in a piece of classical Latin literature from 45 BC, making it
              over 2000 years old. Richard McClintock, a Latin professor at
              Hampden-Sydney College in Virginia, looked up one of the more obscure
              Latin words, consectetur, from a Lorem Ipsum passage, and going through
              the cites of the word in classical literature, discovered the
              undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33
              of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by
              Cicero, written in 45 BC. This book is a treatise on the theory of
              ethics, very popular during the Renaissance. The first line of Lorem
              Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section
              1.10.32.
            </p>
      </div>     
    </div>
  )
}

export default Privacy

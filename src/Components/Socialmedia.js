import React from 'react'
import Cards from './Cards'


function Socialmedia() {
  return (
    <div>
        <div className="container">
            <div className="bg-img">
                <div className="text-white ms-5">
                    <h2> <b> Getir'i indirin!</b></h2>
                    <p className='mt-3'> <b> İstediğiniz ürünleri dakikalar içinde kapınıza getirelim.</b></p>
                    <a href="https://apps.apple.com/app/id995280265" target="_blank" rel="noopener noreferrer"><img className='mt-4 me-2' src="https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg" alt="" /></a>
                    <a href="https://play.google.com/store/apps/details?id=com.getir" target="_blank" rel="noopener noreferrer"><img className='mt-4 me-2' src="https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg" alt="" /></a>
                    <a href="https://appgallery.huawei.com/#/app/C100954039" target="_blank" rel="noopener noreferrer"><img className='mt-4' src="https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg" alt="" /></a>
                </div>
                <img className='iphone-img' src="https://cdn.getir.com/getirweb-images/common/landing/phoneLanding.png" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Socialmedia
import React from 'react'
import Cards from './Cards'

function Infocards() {
  return (
    <div>
        <div className="container mt-5 mb-5">
            <div className="row">
                <div className="col-md-4">
                    <div className="infoCards">
                        <Cards baslik="Her siparişinize bir kampanya" icerik="Getir’de vereceğiniz her siparişe uygun bir kampanya bulabilirsiniz." cardImg="https://getir.com/_next/static/images/intro-in-minutes-a7a9238a73013642a6597c4db06653c1.svg" />
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="infoCards">
                        <Cards baslik="Dakikalar içinde kapınızda" icerik="Getir’le siparişiniz dakikalar içinde kapınıza gelir." cardImg="https://getir.com/_next/static/images/intro-market-courier-34cd8b0ca1d547580d506566edfacf8d.svg" />
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="infoCards">
                        <Cards baslik="Binlerce çeşit mutluluk" icerik="Getir’de binlerce çeşit arasından seçiminizi yapabilirsiniz." cardImg="https://getir.com/_next/static/images/intro-in-minutes-a7a9238a73013642a6597c4db06653c1.svg" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Infocards
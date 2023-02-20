import React from 'react'

const elem=["Articles","About me","My Works","Photos"]

const friv=[{
    name: "UwU",
    link: "www.google.com",
},
{
    name: "Hmm",
    link: "www.bing.com",
}
]

function navbar() {
 return (
    <>
        <nav className="nav bg-blue-400">
            <span className="container" >
                <span className='row' >
                    <span className='col fw-bold' >
                        Ritveek Rana
                    </span>
                    <span className='col' >
                        <span className='row' >
                            {elem.map((item,index)=>{
                                return(
                                    <span className='col' key={index}>
                                        {item}
                                    </span>
                                )
                            })}
                        </span>
                    </span>
                    <span className='col' >
                        <span className='row' >
                            {
                                friv.map((item,index)=>{
                                    return(
                                        <span className='col' key={index}>
                                            <a href={item.link} target="__none__">
                                                item.name
                                            </a>
                                        </span>
                                    )
                                }
                                )
                            }
                        </span>
                    </span>
                </span>
            </span>
        </nav>
    </>
  )
}

export default navbar
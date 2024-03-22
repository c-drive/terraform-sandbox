import React from 'react'


const dummy = {
    heading : "DUmmy Heading",
    description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    tags : ["Next", "React", "TypeScript", "Sanity"],
    left : true
}

export default function ProjectCard() {
  return (
    <div className='flex justify-center h-96'>
             <div className='w-1/2'>
                    <div id='card' className='flex justify-center rounded-sm lg:w-70  border bg-gray-50 hover:bg-gray-100'>
                                <div id="text-container" className={`flex flex-col w-1/2 p-12 gap-6 ${ dummy.left ? "pr-0" : "pl-0"  } `}>
                                           <h1 className='text-2xl font-medium'>{dummy.heading}</h1>
                                           <p className='text-base  leading-relaxed'>{dummy.description.substring(0, 200) + "...."}</p>
                                           <div className='flex flex-wrap '>
                                                        {
                                                                dummy.tags.map( (tag, index ) => {
                                                                    return (
                                                                        <div className='inline p-1 rounded-lg px-2 bg-slate-900 text-white m-2' key={index}>
                                                                            <p>{tag}</p>
                                                                        </div>
                                                                    )
                                                                })

                                                        }
                                           </div>
                                </div>
                    <div id='imageContainer' className='w-1/2'> This will Container Image</div>
            </div>  
        </div>
    </div>
  )
}




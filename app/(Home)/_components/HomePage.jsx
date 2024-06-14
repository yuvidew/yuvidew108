import React from 'react'
import style from '../home.module.css'
import Image from 'next/image'
import user from '@/public/user.jpg'
import { Button } from '@/components/ui/button'
import { Linkedin, Twitter } from 'lucide-react'

export const HomePage = () => {
    return (
        <section className='pt-3 m-auto w-full'>
            <div className={`${style.hero} lg:h-[20rem] md:h-[18rem] h-[15rem] w-full ` }>
                <div className="h-full flex items-start lg:p-0 pt-4">
                    <div className='h-full lg:w-[40%] w-full  flex items-center justify-center'>
                        <picture className={` rounded-full overflow-hidden ${style.borderImage}`}>
                            <Image src={user} className='lg:w-[8rem] md:w-[7.7rem] w-[6.5rem] lg:h-[8.1rem] md:h-[7.8rem] h-[6.6rem] object-cover'/>
                        </picture>
                    </div>
                    <div className='h-full lg:w-[60%] w-full  flex flex-col gap-2 lg:items-start items-start justify-center'>
                        <h2 className=' lg:text-[1.7rem] md:text-[1.5rem] text-[1.3rem]'>Yuvraj Dewangan</h2>
                        <p className=' text-stone-400'>@Yuvidew108</p>
                        <div className='flex items-center gap-2'>
                            <Button size = "sm"  variant = {"default"} className="mt-2 bg-stone-900">
                                <Twitter  className='text-stone-400 lg:w-[1.3rem] md:w-[1rem] lg:h-[1.3rem] md:h-[1rem] ' />
                            </Button>
                            <Button size = "sm" variant = {"default"} className="mt-2 bg-stone-900">
                                <Linkedin  className='text-stone-400 lg:w-[1.3rem] md:w-[1rem] lg:h-[1.3rem] md:h-[1rem] ' />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            <div>
            </div>
        </section>
    )
}

import { Link } from "react-router-dom";

export default function Resource() {
    return (
        <div className="relative w-[20.5%] group/whole">
            <div className="py-8 border-r border-borderColor relative flex items-center justify-center group/item cursor-pointer">
                <div className="w-3 h-3 mr-3 relative group-hover/item:rotate-45 group-hover/item:scale-[1.667] duration-200">
                    <div className="w-1 h-1 bg-white rounded-full absolute top-0 left-0 group-hover/item:scale-[0.6] duration-200" />
                    <div className="w-1 h-1 bg-white rounded-full absolute top-0 right-0 group-hover/item:scale-[0.6] duration-200" />
                    <div className="w-1 h-1 bg-white rounded-full absolute bottom-0 right-0 group-hover/item:scale-[0.6] duration-200" />
                    <div className="w-1 h-1 bg-white rounded-full absolute bottom-0 left-0 group-hover/item:scale-[0.6] duration-200" />
                </div>
                Resource
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#FC6856] via-[#6DE79D] to-[#724EE8]" />
            </div>
            <div className="absolute top-full left-0 p-2 border border-borderColor bg-bgColor hidden group-hover/whole:block">
                <Link rel="noopener noreferrer" to="/" className="inline-block w-full p-2 cst-link-item-bg mb-3 duration-150">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center mr-3">
                            <img src="/assets/images/HYD.png" alt="" className="mr-2" width={28} height={28} />
                            <p className="text-sm">
                                User Guide
                            </p>
                        </div>
                        <img src="https://cdn.prod.website-files.com/64354b8ce4872ad8cd1c7b04/645e3d7ca7fd751544d4e7e8_icon-link-arrow-simple.svg" loading="lazy" alt="Simple Link Arrow Icon" className="w-3" />
                    </div>
                </Link>
                <Link rel="noopener noreferrer" to="/doc" className="inline-block w-full p-2 cst-link-item-bg mb-3 duration-150">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center mr-3">
                            <img src="/assets/images/HYD.png" alt="" className="mr-2" width={28} height={28} />
                            <p className="text-sm">
                                Doc
                            </p>
                        </div>
                        <img src="https://cdn.prod.website-files.com/64354b8ce4872ad8cd1c7b04/645e3d7ca7fd751544d4e7e8_icon-link-arrow-simple.svg" loading="lazy" alt="Simple Link Arrow Icon" className="w-3" />
                    </div>
                </Link>
                <Link rel="noopener noreferrer" to="/advertising-orgs" className="inline-block w-full p-2 cst-link-item-bg mb-3 duration-150" >
                    <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center mr-3">
                            <img src="/assets/images/HYD.png" alt="" className="mr-2" width={28} height={28} />
                            <p className="text-sm">
                                Advert & KOL
                            </p>
                        </div>
                        <img src="https://cdn.prod.website-files.com/64354b8ce4872ad8cd1c7b04/645e3d7ca7fd751544d4e7e8_icon-link-arrow-simple.svg" loading="lazy" alt="Simple Link Arrow Icon" className="w-3" />
                    </div>
                    <p className="pl-8 text-[10px]">Hire us to Promote</p>
                </Link>
                <Link rel="noopener noreferrer" to="/market-makers" className="inline-block w-full p-2 cst-link-item-bg mb-3 duration-150">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center mr-3">
                            <img src="/assets/images/HYD.png" alt="" className="mr-2" width={28} height={28} />
                            <p className="text-sm">
                                Partnership
                            </p>
                        </div>
                        <img src="https://cdn.prod.website-files.com/64354b8ce4872ad8cd1c7b04/645e3d7ca7fd751544d4e7e8_icon-link-arrow-simple.svg" loading="lazy" alt="Simple Link Arrow Icon" className="w-3" />
                    </div>
                </Link>
            </div>
        </div>
    )
}
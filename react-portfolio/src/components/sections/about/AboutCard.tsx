interface details{
    imgPath:string,
    value:string
}

export default function AboutCard({imgPath,value}:details){
    return(
        <div className="drop-shadow-[0_1px_4px_rgba(0,0,0,.30)] w-[251px] h-[111px] bg-white py-[21px] px-[29px] ml-[20px] mb-[20px]">
            <img className="w-[38px] " src={imgPath} />
            <p className="mt-[10px]">{value}</p>
        </div>
    );
}
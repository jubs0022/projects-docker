interface Details{
    Type: string
}

export default function DropDown({Type}:Details){
    return(
        <div className="max-w-5xl w-[1006px]">
            <button className="">&gt; {Type}</button>
            <div className="h-[1px] w-full bg-[#ADADAD] decoration-none mb-[26px]"></div>
        </div>
    );
}
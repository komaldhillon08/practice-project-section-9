export default function Button({ children , ...props }) {
    // console.log(">>>>>>>>>>props" ,  {...props});
    
    return (
        <>
            <button className="px-4 py-2 text-xl md:text-base rounded-md bg-stone-700
            text-stone-200 hover:bg-stone-500  cursor-pointer hover:text-stone-100 " {...props}>{children}</button>
        </>
    )
}
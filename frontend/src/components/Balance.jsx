/* eslint-disable react/prop-types */
export function Balance({value}){
    return (
        <div className="flex mt-2 justify-center">
       <div className=" font-bold text-lg">
        Your Balance
       </div>
       <div className="font-semibold ml-4 text-lg">
         {value}Rs
       </div>
        </div>
    )
}
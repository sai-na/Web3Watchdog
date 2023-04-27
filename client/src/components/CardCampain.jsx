
function CardCampaign({title, hash1, hash2, src, info }) 
{
    return(
        <div className="max-w-sm rounded overflow-hidden shadow-lg m-4 hover:shadow-2xl hover:translate-y-2">
  <img className="w-full" src = {src}  alt="Sunset in the mountains"/>
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">{title}</div>
    <p className="text-gray-700 text-base">
      {info}
    </p>
  </div>
  <div className="px-6 pt-4 pb-2">
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{'#' + hash1}</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{'#' + hash2}</span>
  </div>
</div>
    )
}

export default CardCampaign;
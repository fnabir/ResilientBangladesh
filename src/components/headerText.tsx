export function HeadingText({title, subtitle, underline=false, dark=true, textSize=1, className} : {title: string; subtitle?: string, underline?: boolean; dark?: boolean, textSize?: number, className?: string}) {
    return (
        <div className={`mx-auto max-w-fit mb-2 sm:mb-4 lg:mb-6 ${className} ${dark ? "text-fuchsia-900" : "text-gray-100"}`}>
            <div className={`font-[Berlin] ${textSize == 1 ? "text-5xl" : "text-3xl"}`}>{title}</div>
            {
                subtitle && <div className={textSize == 1 ? "text-xl" : "text-lg"}>{subtitle}</div>
            }
            {
                underline && <hr className={`${textSize == 1 ? "h-2" : "h-1.5"} w-1/2 mt-2 rounded-full mx-auto ${dark ? "bg-fuchsia-900" : "bg-gray-100"}`}/>
            }
        </div>
    )
}
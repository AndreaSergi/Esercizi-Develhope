import { useState } from "react"

export function Container({title, children}){

let [collapseItem, setCollapseItem] = useState(false)

    function collapse(){

        setCollapseItem((prevCollapse) => !prevCollapse);
    }

    return(
        <div>
            <div onClick={collapse}>{title}</div>
            <div className={collapseItem? "collapsed" : "uncollapsed"}>{children}</div>
        </div>
    )
}
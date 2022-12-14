import React from 'react'
import {Helmet} from 'react-helmet'

const MetaData = ({title}) => {
    return(
        <Helmet>
            <title>{`${title} - The Box Game Company`}</title>
        </Helmet>
    )

}
export default MetaData
import React from 'react'
import { TailSpin, ThreeDots } from 'react-loader-spinner'

const Loader = ({ detail }) => {
    return (
        <div className="flex justify-center">
            {detail ?
                <ThreeDots
                    height="80"
                    width="80"
                    color="gray"
                    ariaLabel="tail-spin-loading"
                    radius="1"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                />
                :
                <TailSpin
                    height="80"
                    width="80"
                    color="gray"
                    ariaLabel="tail-spin-loading"
                    radius="1"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                />
            }
        </div>
    )
}

export default Loader